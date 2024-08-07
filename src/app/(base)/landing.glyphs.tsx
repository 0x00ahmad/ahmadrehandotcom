"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

function LandingGlyphs() {
    const vectors = [
        {
            link: "/assets/triangle.svg",
            className: "w-12 h-auto absolute right-64 top-32",
        },
        {
            link: "/assets/circle.svg",
            className: "w-12 h-auto absolute left-32 top-1/4",
        },
        {
            link: "/assets/webdev.svg",
            className: "w-auto h-12 absolute left-1/4 top-40",
        },
        {
            link: "/assets/mobdev.svg",
            className: "w-auto h-12 absolute left-1/4 bottom-1/4",
        },
        {
            link: "/assets/copywriting.svg",
            className: "w-auto h-12 absolute right-1/3 top-48",
        },
        {
            link: "/assets/andmuchmore.svg",
            className: "w-auto h-12 absolute right-1/4 bottom-32",
            motion: {
                whileInView: "visible",
                viewport: { once: true },
                initial: "hidden",
                transition: { duration: 1 },
                variants: {
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                },
            },
        },
    ];

    return vectors.map((v, i) => (
        <motion.img
            key={i}
            src={v.link}
            alt=""
            width={0}
            height={0}
            sizes="100%"
            className={cn("hidden lg:block", v.className)}
            {...v.motion}
        />
    ));
}

export default LandingGlyphs;
