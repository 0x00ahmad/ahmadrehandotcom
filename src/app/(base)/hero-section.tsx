"use client";

import React from "react";
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
        <MaxWidthWrapper className="relative grid h-full w-full grid-cols-1 place-items-center overflow-hidden md:h-screen md:grid-cols-2">
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
                className="w-full pt-96 md:left-24 md:pt-[60vh]"
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
                            <div className="flex items-center gap-2 rounded-full bg-brand-200 px-4 py-2 text-brand-800">
                                <HiOutlineLocationMarker className="h-auto w-7" />
                                <p className="font-medium tracking-wide">
                                    Finland
                                </p>
                            </div>
                        </div>
                        <Title
                            title="Software Engineer & Solutions Designer"
                            color="gradientPrimary"
                            size="h1"
                            weight="medium"
                        />

                        <Title
                            color="primary"
                            title="Malik Ahmad Rehan"
                            weight="normal"
                            size="h4"
                            uppercase
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
                className="absolute bottom-1/4 right-8 z-[-1] grid w-full h-full place-items-end sm:bottom-0"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            >
                <Image
                    src={"/images/image.png"}
                    alt="image"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="h-full w-[30rem] max-w-4xl object-contain md:w-full"
                />
            </motion.div>
        </MaxWidthWrapper>
    );
}

export default HeroSection;
