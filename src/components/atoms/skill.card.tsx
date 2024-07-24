"use client";

import Title from "@/components/atoms/title";
import React from "react";
import { motion } from "framer-motion";
import DashedLine from "./dashed.line";

function SkillCard(props: { title: string; skills: any[] }) {
    if (!props) return null;

    const { title, skills } = props;

    return (
        <>
            <motion.div
                className="flex h-full flex-col items-center gap-4 text-brand-950 md:p-8"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <Title title={title} size="h3" capitalize />
                <DashedLine />

                <div className="flex w-full flex-wrap items-center justify-center gap-4">
                    {skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <motion.div
                                key={i}
                                className="flex w-max items-center gap-2"
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                initial={"hidden"}
                                transition={{ duration: 0.2 + 0.05 * (i + 1) }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.4 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <img
                                    src={skill.icon}
                                    alt="0"
                                    className="aspect-square h-6 w-auto"
                                />
                                <span className="text-brand">
                                    {skill.label}
                                </span>
                            </motion.div>
                            {i + 1 === skills.length ? null : (
                                <p className="text-4xl font-thin text-stone-600">
                                    /
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default SkillCard;
