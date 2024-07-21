"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Title from "../atoms/title";

function CertificateCard({ index, item }: { index: number; item: any }) {
    return (
        <motion.div
            key={index}
            className="flex h-full flex-col gap-4 rounded-lg border border-brand-200 bg-brand-50/30 p-6 text-brand-950 shadow-md backdrop-blur-lg sm:flex-row md:p-8"
            whileInView={"visible"}
            viewport={{ once: true }}
            initial={"hidden"}
            transition={{ duration: 0.2 * (index + 1) }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <div className="flex w-max flex-col items-center justify-between gap-2">
                <Image
                    src={"/assets/badge.svg"}
                    alt="badge"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-auto w-12"
                />

                <p className="whitespace-nowrap">
                    {item.courses.length} courses
                </p>
            </div>

            <div className="flex w-full flex-col justify-between gap-12">
                <div className="flex w-full flex-col gap-2">
                    <Title title={item.what} size="h2" />
                    <Title title={item.where} size="h4" />
                </div>

                <div className="flex w-full flex-col items-end justify-end gap-4">
                    {item.explanation}
                    <p className="whitespace-break-spaces break-words text-sm">
                        Completed in :{" "}
                        <strong className="text-brand-950/70">
                            {item.when}
                        </strong>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default CertificateCard;
