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
        <MaxWidthWrapper className="relative grid h-full w-full grid-cols-1 place-items-center overflow-hidden md:min-h-screen md:grid-cols-2">
            <Image
                src={"/assets/developer.svg"}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className={
                    "top-1/4 z-[-1] h-auto w-screen absolute"
                }
            />

            <motion.img
                src={"/images/image.png"}
                alt="image"
                width={0}
                height={0}
                sizes="100%"
                className="z-[-1] h-auto w-full max-w-4xl object-contain pt-24 md:hidden"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            />

            <motion.div
                className="w-full md:left-24 md:pt-[60vh]"
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

            <motion.img
                src={"/images/image.png"}
                alt="image"
                width={0}
                height={0}
                sizes="100%"
                className="absolute bottom-[7rem] z-[-1] hidden w-[30rem] max-w-4xl object-contain sm:bottom-0 md:right-0 md:block md:h-full md:w-full"
                whileInView={"visible"}
                viewport={{ once: true }}
                initial={"hidden"}
                transition={{ duration: 0.3 }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                }}
            />
        </MaxWidthWrapper>
    );
}

export default HeroSection;
