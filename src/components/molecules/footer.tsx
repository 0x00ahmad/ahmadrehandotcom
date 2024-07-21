import React from "react";
import MaxWidthWrapper from "../other/max.width.wrapper";
import Logo from "../atoms/logo";
import { navLinks, socials, TRANSITION_COLORS } from "@/lib/constants";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Footer() {
    return (
        <MaxWidthWrapper>
            <footer className="flex w-full flex-col items-center gap-4 py-16 md:gap-6 lg:gap-8 xl:gap-12">
                <div className="h-0.5 w-full bg-neutral-300"></div>
                <div className="grid w-full grid-cols-1 items-center justify-between gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl font-semibold text-brand-950 md:text-5xl xl:text-6xl">
                            Let's work together
                        </h2>
                        <Link href={"/contact"} className="w-max">
                            <Button
                                className="group flex w-max items-center gap-2 transition-transform"
                                size={"lg"}
                            >
                                <span>Get in touch</span>
                                <GoArrowUpRight className="h-auto w-6 transition-transform group-hover:rotate-45" />
                            </Button>
                        </Link>
                    </div>

                    <div className="grid w-full md:place-items-end">
                        <div className="flex flex-col gap-8">
                            {socials.map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="flex items-center gap-2 text-brand-950"
                                >
                                    <social.icon className="h-auto w-6" />
                                    <span>{social.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex w-full flex-col justify-between gap-8 pt-8 md:flex-row md:items-center md:pt-20">
                    <Logo full={true} />
                    <div className="flex flex-col items-center gap-8 md:flex-row">
                        {navLinks.map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className={cn(
                                    "w-full text-brand-900/70 hover:text-brand-950",
                                    TRANSITION_COLORS,
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button className="w-full" variant={"muted"}>
                            Sign Up
                        </Button>
                    </div>
                </div>

                <div className="flex w-full flex-col items-center gap-2">
                    <div className="h-0.5 w-full bg-neutral-300"></div>
                    <span className="text-brand-900/50">
                        © Copyright 2024 | Ahmad Rehan | All rights reserved.
                    </span>
                </div>
            </footer>
        </MaxWidthWrapper>
    );
}

export default Footer;
