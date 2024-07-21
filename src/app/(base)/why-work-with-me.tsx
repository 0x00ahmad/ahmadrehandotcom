"use client";

import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TRANSITION_COLORS } from "@/lib/constants";

function WhyWorkWithMe() {
    const firstTwoReasons = [
        {
            title: "Expertise",
            description:
                "I have been working in the industry for over 4 years and have helped numerous clients achieve their goals.",
        },
        {
            title: "Communication",
            description:
                "I Prioritize clear and open communication throughout the project lifecycle, ensuring your requirements are understood.",
        },
    ];

    const secondTwoReasons = [
        {
            title: "Adaptability",
            description:
                "I can adapt to your requirements and provide you with the best possible solution for your needs.",
        },
        {
            title: "Support",
            description:
                "I provide support even after the project is completed to ensure you have a smooth experience.",
        },
    ];

    return (
        <MaxWidthWrapper className="flex flex-col gap-12" id="resume">
            <SectionTitle title="Why Work With Me" />
            <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-3 lg:place-items-start">
                <div className="flex h-full flex-col gap-8">
                    {firstTwoReasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            className={cn(
                                "group flex h-full flex-col gap-4 rounded-lg border-2 border-brand-100 bg-brand-50/20 p-8 text-brand-950 backdrop-blur-lg",
                                TRANSITION_COLORS,
                            )}
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            initial={"hidden"}
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="grid h-10 w-10 place-items-center rounded-full border border-brand-300 bg-brand-50 text-sm font-semibold text-brand-800 sm:h-14 sm:w-14 sm:text-lg">
                                0{i + 1}
                            </div>
                            <Title
                                color="primary900"
                                title={reason.title}
                                size="h2"
                            />
                            <p className="text-lg text-brand-950">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="grid h-full w-full place-items-center"
                >
                    <Image
                        src={"/images/profile-image.png"}
                        alt="image"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="h-auto w-full max-w-[30rem] lg:max-w-full"
                    />
                </motion.div>

                <div className="flex h-full flex-col gap-8">
                    {secondTwoReasons.map((reason, i) => (
                        <motion.div
                            key={i}
                            className={cn(
                                "group flex h-full flex-col gap-4 rounded-lg border-2 border-brand-100 bg-brand-50/20 p-8 text-brand-950 backdrop-blur-lg",
                                TRANSITION_COLORS,
                            )}
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            initial={"hidden"}
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="grid h-10 w-10 place-items-center rounded-full border border-brand-300 bg-brand-50 text-sm font-semibold text-brand-800 sm:h-14 sm:w-14 sm:text-lg">
                                0{i + 3}
                            </div>
                            <Title
                                color="primary900"
                                title={reason.title}
                                size="h2"
                            />
                            <p className="text-lg text-brand-950">
                                {reason.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default WhyWorkWithMe;
