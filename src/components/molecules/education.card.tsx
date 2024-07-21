"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "../atoms/title";
import { PiCertificate } from "react-icons/pi";
import { cn } from "@/lib/utils";

function EducationCard({ index, item }: { index: number; item: any }) {
    return (
        <motion.div
            key={index}
            className="flex h-full flex-col gap-4 rounded-lg border border-brand-200 bg-brand-50/30 p-6 text-brand-950 shadow-lg backdrop-blur-lg md:p-8"
            whileInView={"visible"}
            viewport={{ once: true }}
            initial={"hidden"}
            transition={{ duration: 0.2 * (index + 1) }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div
                className={cn(
                    "grid w-max rounded-full bg-brand-100 p-6 shadow-sm",
                )}
            >
                <PiCertificate className="h-auto w-12" />
            </div>

            <div className="flex w-full flex-col justify-between gap-12 h-full">
                <div className="flex w-full flex-col gap-2">
                    <Title title={item.what} size="h2" />
                    <Title title={item.where} size="h4" />
                </div>

                <div className="flex h-full w-full flex-col items-end justify-between gap-4">
                    {item.explanation}

                    <p className="whitespace-break-spaces break-words text-sm">
                        Timeline :{" "}
                        <strong className="text-brand-950/70">
                            {item.when}
                        </strong>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default EducationCard;
