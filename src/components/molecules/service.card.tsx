"use client";

import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TRANSITION_COLORS } from "@/lib/constants";
import { Service } from "@/lib/services";
import Title from "../atoms/title";

function ServiceCard({ service, index }: { service: Service; index: number }) {
    // <Link href={"/services/" + index}>

    return (
        <Link href={"/contact?service=" + service.title}>
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
    );
}

export default ServiceCard;
