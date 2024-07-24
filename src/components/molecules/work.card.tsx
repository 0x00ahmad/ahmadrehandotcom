"use client";
import React from "react";

import Title from "@/components/atoms/title";
import { TRANSITION_ALL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";
import { work } from "@/lib/work";
import Link from "next/link";

function WorkCard({
    item,
    i,
    router,
}: {
    item: (typeof work)[number];
    router: any;
    i: number;
}) {
    return (
        <motion.div
            className={cn(
                "group relative cursor-pointer overflow-hidden rounded-lg",
                TRANSITION_ALL,
            )}
            whileInView={"visible"}
            viewport={{ once: true }}
            initial={"hidden"}
            transition={{ duration: 0.2 * (i + 1) }}
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
            }}
            onClick={() => {
                router.push(`/work/${item.title}`);
            }}
        >
            <img
                src={item.thumbnail}
                alt={item.title}
                className="aspect-auto h-auto w-full rounded-lg object-cover hover:opacity-90"
            />

            <div className="absolute left-4 top-4 flex flex-col gap-2 md:left-8 md:top-8">
                <Title
                    title={`${item.title} - ${item.punchline}`}
                    size="h2"
                    weight="medium"
                />
            </div>

            <Link href={`/work/${item.title}`}>
                <button
                    className={cn(
                        "absolute bottom-4 right-4 flex items-center gap-2 px-2 py-1 opacity-30 group-hover:gap-5 group-hover:opacity-100 md:bottom-8 md:right-8",
                        TRANSITION_ALL,
                    )}
                >
                    <p className="font-medium tracking-wide md:text-lg">
                        View case study
                    </p>
                    <LuArrowRight className="h-4 w-auto" />
                </button>
            </Link>
        </motion.div>
    );
}

export default WorkCard;
