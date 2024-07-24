"use client";

import { navLinks, socials, TRANSITION_COLORS } from "@/lib/constants";
import Logo from "@/components/atoms/logo";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <>
            <nav className="fixed top-0 z-30 flex w-full justify-between gap-8 bg-gradient-to-b from-white to-transparent px-8 pt-4">
                <Logo showSubtitle />

                <ul className="flex flex-col items-end justify-center gap-2 lg:gap-4">
                    {navLinks.map((nl, i) => (
                        <motion.li
                            key={i}
                            className="text-xs font-semibold uppercase tracking-wide text-brand-900 md:text-sm lg:text-lg xl:text-lg"
                            viewport={{ once: true }}
                            whileInView={"visible"}
                            initial={"hidden"}
                            transition={{ duration: 0.2 + 0.2 * (i + 1) }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <a href={nl.href}>{nl.label}</a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            <div className="bottom-12 right-12 z-50 hidden flex-col gap-8 md:fixed md:flex">
                {socials.map((social, i) => (
                    <Link
                        key={i}
                        href={social.href}
                        target="_blank"
                        className={cn(
                            "flex items-center gap-2 text-brand-900/70 hover:text-brand-700",
                            TRANSITION_COLORS,
                        )}
                    >
                        <social.icon className="h-auto w-6" />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Navbar;
