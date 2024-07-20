"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { PiArrowUpRight } from "react-icons/pi";
import { motion } from "framer-motion";
import Title from "@/components/atoms/title";

const work = [
    {
        thumbnail: "/images/work/work-1.png",
        title: "FS Agency",
        description: "A website for a fictional agency.",
        href: "/work/fs-agency",
    },
    {
        thumbnail: "/images/work/work-2.png",
        title: "Taskist AI",
        description: "An AI assisted platform for managing your tasks.",
        href: "/work/taskist-ai",
    },
];

function RecentWork() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-12">
            <SectionTitle
                title="Recent work"
                cta={{
                    link: "/work",
                    children: (
                        <div className="flex h-full w-full items-center gap-2">
                            <p>View more</p>
                            <LuArrowRight className="h-4 w-auto" />
                        </div>
                    ),
                }}
            />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {work.map((item, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col gap-4 rounded-lg border border-brand-200 bg-brand-50/40 p-4 shadow-md backdrop-blur-lg md:p-6"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        initial={"hidden"}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="aspect-video h-auto w-full rounded-lg object-cover"
                        />
                        <Title
                            color="primary900"
                            title={item.title}
                            size="h3"
                        />
                        <p className="text-lg text-brand-950">
                            {item.description}
                        </p>
                        <div className="grid w-full place-items-end">
                            <Link
                                className="group flex items-center gap-2"
                                href={item.href}
                            >
                                <span className="text-brand-950">
                                    Show Case Study
                                </span>
                                <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                                    <PiArrowUpRight className="h-4 w-auto" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default RecentWork;
