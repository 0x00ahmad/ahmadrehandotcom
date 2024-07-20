"use client";

import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import { TRANSITION_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { LuArrowRight } from "react-icons/lu";
import { services } from "@/lib/services";

function ServicesList() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-12">
            <SectionTitle
                title="Services"
                cta={{
                    children: (
                        <div className="flex h-full w-full items-center gap-2">
                            <p>View more</p>
                            <LuArrowRight className="h-4 w-auto" />
                        </div>
                    ),
                    link: "/services",
                }}
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, i) => (
                    <Link key={i} href={"/contact?service=" + service.title}>
                        <motion.div
                            className={cn(
                                "group flex h-full flex-col gap-4 rounded-lg border-2 border-brand-100 bg-brand-50/20 p-8 text-brand-950 shadow-md backdrop-blur-lg",
                                TRANSITION_COLORS,
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            initial={"hidden"}
                            transition={{ duration: 0.2 }}
                            variants={{
                                hidden: { opacity: 0, scale: 0.5 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                        >
                            <div
                                className={cn(
                                    "grid w-max rounded-full bg-brand-100 p-6 shadow-sm",
                                )}
                            >
                                <service.icon className="h-10 w-auto" />
                            </div>
                            <Title title={service.title} size="h3" />
                            <p className="text-start">{service.description}</p>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default ServicesList;
