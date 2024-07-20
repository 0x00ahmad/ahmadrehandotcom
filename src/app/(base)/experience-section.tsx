"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { LuArrowDown, LuStopCircle } from "react-icons/lu";
import { motion } from "framer-motion";
import Step from "@/components/atoms/step";
import { cn } from "@/lib/utils";
import Title from "@/components/atoms/title";

function ExperienceSection() {
    const subtitle = "Self-employed";
    const title = "Freelance Software Engineer & Solutions Designer";
    const description = (
        <p>
            I work with clients to develop custom software solutions that meet
            their unique needs. I have experience working with a variety of
            technologies, including JavaScript, React, Node.js, and MongoDB. I
            am passionate about creating high-quality software that helps my
            clients achieve their goals.
        </p>
    );

    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12">
            <SectionTitle title="Work Experience" />

            <div className="flex w-full flex-col">
                <div className="grid grid-cols-7 place-items-center">
                    <Step content={<LuArrowDown className="h-6 w-5" />} />
                    <div className="col-span-6"></div>
                </div>

                <div className="grid grid-cols-7 place-items-center">
                    <Step topLine content={<p>{`01`}</p>} />

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
                        <div className="space-y-0">
                            <p className="font-light text-brand-950">
                                {subtitle}
                            </p>
                            <Title color="primary900" title={title} size="h2" />
                        </div>
                        {description}
                        <div className="flex items-end justify-end">
                            <p>2021 - Present</p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-7 place-items-center">
                    <Step
                        content={<LuStopCircle className="h-6 w-5" />}
                        topLine
                        noBottomLine
                    />
                    <div className="col-span-6"></div>
                </div>
            </div>
        </MaxWidthWrapper>
    );
}

export default ExperienceSection;
