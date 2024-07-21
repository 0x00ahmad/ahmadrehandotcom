"use client";

import React from "react";
import { motion } from "framer-motion";

function Step(props: {
    content: React.ReactNode;
    topLine?: boolean;
    noBottomLine?: boolean;
}) {
    return (
        <motion.div
            className="flex h-full flex-col items-center justify-center gap-2"
            whileInView={"visible"}
            viewport={{ once: true }}
            initial={"hidden"}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            {!!props.topLine && (
                <div className="h-full min-h-32 w-0.5 bg-brand-300"></div>
            )}
            <div className="grid h-10 w-10 place-items-center rounded-full border border-brand-300 bg-brand-50 p-2 text-sm font-semibold text-brand-800 sm:h-14 sm:w-14 sm:py-3 sm:text-lg">
                {props.content}
            </div>
            {!props.noBottomLine && (
                <div className="h-full min-h-32 w-0.5 bg-brand-300"></div>
            )}
        </motion.div>
    );
}

export default Step;
