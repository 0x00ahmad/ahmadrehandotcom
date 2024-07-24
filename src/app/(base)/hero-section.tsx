"use client";

import React from "react";
import HeroTitle from "@/components/other/hero.title";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { PiFilePdf } from "react-icons/pi";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Title from "@/components/atoms/title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";

function HeroSection() {
    return (
        <MaxWidthWrapper className="relative grid h-full grid-cols-1 place-items-center overflow-x-hidden md:h-screen md:grid-cols-2">
            <Image
                src={"/assets/developer.svg"}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className={
                    "top-1/4 z-[-1] hidden h-auto w-screen md:absolute md:block"
                }
            />

            <motion.div
                className="w-full pt-96 md:left-24 md:pt-80"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.3 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="flex w-full flex-col gap-8 rounded-lg">
                    <div className="max-w-2xl space-y-4">
                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-2 rounded-full bg-brand-200 px-4 py-2 text-brand-950">
                                <HiOutlineLocationMarker className="h-auto w-7" />
                                <p>Finland</p>
                            </div>

                            <Title
                                color="primary900"
                                title="Malik Ahmad Rehan"
                                weight="normal"
                                size="h4"
                                uppercase
                            />
                        </div>
                        <Title
                            title="Software Engineer & Solutions Designer"
                            color="gradientPrimary"
                            size="h1"
                            weight="medium"
                        />
                        <p className="font-medium tracking-wide text-brand-950 md:text-lg xl:text-xl">
                            Designing solutions for focused businesses seeking
                            to improve their digital presence and efficiency.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <Link href={"/about"}>
                            <Button
                                className="flex w-full items-center gap-2 sm:w-max"
                                size={"lg"}
                                variant={"muted"}
                            >
                                More about me
                            </Button>
                        </Link>
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
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-1/4 right-8 z-[-1] grid h-full w-full place-items-end sm:bottom-0"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            >
                <motion.img
                    src={"/images/image.png"}
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-auto w-[30rem] max-w-4xl object-cover md:w-full"
                />
            </motion.div>
        </MaxWidthWrapper>
    );
}

function DedHeroSection() {
    return (
        <section className="relative h-screen">
            <Image
                src={"/assets/developer.svg"}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className={"absolute top-1/4 z-[-1] h-auto w-screen"}
            />

            <motion.div
                className="absolute bottom-24 left-8 flex flex-col gap-8 md:left-24"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -100 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="space-y-0">
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

            <div className="absolute bottom-0 right-0 w-full md:right-24 md:w-max">
                <motion.div
                    className="relative z-[-1] h-auto w-full"
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
                        className="h-auto w-full max-w-7xl object-cover"
                    />

                    <div className="absolute top-0 h-full w-full bg-gradient-to-t from-white via-white/20 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
