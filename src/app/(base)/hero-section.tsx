"use client";

import React from "react";
import BackgroundGrid from "@/components/other/background.grid";
import HeroTitle from "@/components/other/hero.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PiFilePdf } from "react-icons/pi";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <MaxWidthWrapper className="relative grid min-h-screen w-screen grid-cols-1 gap-8 py-40 md:grid-cols-2 md:place-items-center">
            <BackgroundGrid className="z-[-10]" />

            <motion.div
                className="flex flex-col gap-8"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="space-y-4">
                    <div className="flex flex-col items-start gap-2">
                        <Image
                            src={"/assets/signature.svg"}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100%"
                            className={"h-8 w-auto"}
                        />
                        <p className="text-lg font-medium tracking-wider text-brand-900">
                            Malik Ahmad, Rehan
                        </p>
                    </div>
                    <HeroTitle />
                    <p className="font-medium tracking-wide text-brand-950 md:text-lg xl:text-xl">
                        Using my background in software engineering and
                        combining that with other skills I focus on delivering
                        efficient solutions to complex problems.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2 sm:flex-row">
                    <Link href={"/assets/resume.pdf"} target="_blank">
                        <Button
                            className="flex w-full items-center gap-2 sm:w-max"
                            size={"lg"}
                            variant={"muted"}
                        >
                            <PiFilePdf className="h-6 w-6" />
                            My Resume
                        </Button>
                    </Link>
                </div>
            </motion.div>

            <motion.div
                className="z-[-1] h-max w-full"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 100, y: 100 },
                    visible: { opacity: 1, x: 0, y: 0 },
                }}
            >
                <Image
                    src={"/images/image.png"}
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-auto w-full"
                />
            </motion.div>
        </MaxWidthWrapper>
    );
}

export default HeroSection;
