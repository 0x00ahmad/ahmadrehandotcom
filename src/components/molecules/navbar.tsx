"use client";

import { navLinks, socials, TRANSITION_COLORS } from "@/lib/constants";
import Logo from "@/components/atoms/logo";
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import MaxWidthWrapper from "../other/max.width.wrapper";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

function Navbar() {
    return (
        <>
            <nav className="fixed top-0 z-30 flex w-screen justify-between gap-8 bg-gradient-to-b from-white to-transparent px-8 pt-4">
                <Logo showSubtitle />

                <ul className="flex flex-col items-end justify-center gap-4">
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

function PrevNavbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div className="fixed top-0 z-30 w-screen">
                <nav className="w-full p-2 sm:p-4">
                    <MaxWidthWrapper className="flex max-w-5xl items-center justify-between rounded-lg border-2 border-brand-200 bg-brand-50/80 py-4 drop-shadow-sm backdrop-blur-sm">
                        <Logo />

                        <ul className="hidden w-full items-center justify-center gap-8 lg:flex">
                            {navLinks.map((nl, i) => (
                                <li key={i} className="text-brand-900">
                                    <a href={nl.href}>{nl.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden items-center gap-2 lg:flex">
                            <Link href={"/contact"} className="w-max">
                                <Button>Work with me</Button>
                            </Link>
                        </div>
                        <Button
                            className="flex items-center gap-2 lg:hidden"
                            onClick={() => setOpen(true)}
                            variant={"ghost"}
                        >
                            Menu
                            <Menu className="h-6 w-6" />
                        </Button>
                    </MaxWidthWrapper>
                </nav>
            </div>

            <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
                <SheetContent
                    side={"bottom"}
                    className="flex flex-col gap-12 pt-24"
                >
                    <ul className="flex flex-col gap-8">
                        {navLinks.map((nl, i) => (
                            <li key={i}>
                                <a href={nl.href}>
                                    <Button
                                        variant={"ghost"}
                                        className="w-full items-start justify-start text-start"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        {nl.label}
                                    </Button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>

            <div className="bottom-12 right-12 hidden flex-col gap-8 md:fixed md:flex">
                {socials.map((social, i) => (
                    <Link
                        key={i}
                        href={social.href}
                        target="_blank"
                        className={cn(
                            "flex items-center gap-2 text-stone-300 hover:text-brand-800",
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
