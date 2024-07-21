"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { motion } from "framer-motion";
import { PiBriefcase } from "react-icons/pi";
import { cn } from "@/lib/utils";
import Title from "@/components/atoms/title";

function ExperienceSection() {
    const subtitle = "Self-employed";
    const title = "Freelance Software Engineer & Solutions Designer";
    const description = (
        <>
            <p className="whitespace-normal break-words">
                As a self-employed Software Developer & Solutions Designer, I
                have successfully delivered solutions to all kinds of clients'
                problems. Some notable delivered results include:
            </p>

            <ul className="flex list-disc flex-col gap-4 pl-4">
                <li>
                    Collaborated with clients to identify the problem scope,
                    layout the requirements and document a solution plan.
                </li>
                <li>
                    Designed and implemented distributed systems with messaging
                    queues, allowing 2-10x more throughput in data exchange for
                    business efficiency.
                </li>
                <li>
                    Developed multi-tenant web application for managing and
                    deploying e-commerce websites.
                </li>
                <li>
                    Configured and maintained multiple Linux servers, ensuring
                    security, robustness and reliability.
                </li>
                <li>
                    Applied data engineering principles to gather and create
                    useful insights that bought up to 90% more profit turnover.
                </li>
                <li>
                    Increased leads by at least 5-15% for businesses through
                    improved functionality, leading to more profit.
                </li>
            </ul>
        </>
    );

    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12">
            <SectionTitle title="Work Experience" />

            <div className="flex w-full flex-col">
                <motion.div
                    className={cn(
                        "h-max w-full space-y-4 rounded-lg border border-brand-200 bg-brand-50/40 p-8 text-brand-950 shadow-lg backdrop-blur-lg",
                        "col-span-6",
                    )}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 0.7 }}
                    variants={{
                        hidden: { opacity: 0, y: 100 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div
                        className={cn(
                            "grid w-max rounded-full bg-brand-100 p-6 shadow-sm",
                        )}
                    >
                        <PiBriefcase className="h-10 w-auto" />
                    </div>

                    <div className="space-y-0">
                        <p className="font-light text-brand-950">{subtitle}</p>
                        <Title color="primary900" title={title} size="h2" />
                    </div>
                    {description}
                    <div className="flex items-end justify-end">
                        <p>
                            Timeline : <strong>2021 - Present</strong>
                        </p>
                    </div>
                </motion.div>
            </div>
        </MaxWidthWrapper>
    );
}

export default ExperienceSection;
