"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import Title from "@/components/atoms/title";
import React from "react";
import { motion } from "framer-motion";

function SkillCard(props: { title: string; skills: any[] }) {
    const [open, setOpen] = React.useState(false);

    if (!props) return null;

    const { title, skills } = props;

    return (
        <>
            <Dialog
                open={open}
                onOpenChange={(o) => {
                    setOpen(o);
                }}
            >
                <DialogContent>
                    <DialogHeader>
                        <Title title={title} size="h2" capitalize />
                    </DialogHeader>

                    <div className="flex w-full flex-wrap items-center justify-center gap-4 py-8">
                        {skills.map((skill: any, i) => (
                            <div
                                key={i}
                                className="flex w-max items-center gap-4 rounded-md border border-border p-1.5 px-2 sm:p-2 sm:px-2.5"
                            >
                                <img
                                    src={skill.icon}
                                    alt="0"
                                    className="aspect-square h-8 w-auto"
                                />
                                <span className="text-brand">
                                    {skill.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>

            <motion.div
                onClick={() => {
                    setOpen(true);
                }}
                className="flex h-full flex-col items-center gap-4 rounded-lg border border-brand-200 bg-brand-50/30 p-6 text-brand-950 shadow-lg backdrop-blur-lg md:p-8"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.4 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <Title title={title} size="h2" capitalize />

                <div className="flex w-full flex-wrap items-center justify-center gap-4">
                    {skills.map((skill: any, i) => (
                        <div
                            key={i}
                            className="flex w-max items-center gap-4 rounded-md border border-border p-1.5 px-2 sm:p-2 sm:px-2.5"
                        >
                            <img
                                src={skill.icon}
                                alt="0"
                                className="aspect-square h-8 w-auto"
                            />
                            <span className="text-brand">{skill.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}

export default SkillCard;
