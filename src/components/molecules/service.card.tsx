"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TRANSITION_COLORS } from "@/lib/constants";
import { Service } from "@/lib/services";
import Title from "../atoms/title";
import DashedLine from "../atoms/dashed.line";

function ServiceCard({ service, index }: { service: Service; index: number }) {
    // <Link href={"/services/" + index}>

    return (
        <Link href={"/contact?service=" + service.title}>
            <motion.div
                className={cn(
                    "group relative flex h-full flex-col items-center gap-4 rounded-lg border-2 border-brand-100 bg-brand-50/20 p-8 pt-16 text-center text-brand-950 shadow-md backdrop-blur-lg",
                    TRANSITION_COLORS,
                )}
                whileHover={{ scale: 1.05 }}
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.3 }}
                variants={{
                    hidden: { opacity: 0, scale: 0.5 },
                    visible: { opacity: 1, scale: 1 },
                }}
            >
                <motion.div
                    className={cn(
                        "absolute -top-8 grid w-max self-center rounded-full bg-brand-100 p-6 shadow-sm",
                    )}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50, scale: 0.5 },
                        visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                >
                    <service.icon className="h-10 w-auto" />
                </motion.div>
                <Title title={service.title} size="h3" />
                <DashedLine />
                <motion.p
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="text-center"
                >
                    {service.description}
                </motion.p>
            </motion.div>
        </Link>
    );
}

export default ServiceCard;
