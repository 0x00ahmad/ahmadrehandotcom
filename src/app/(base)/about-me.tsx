"use client";
import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";

import { cn } from "@/lib/utils";

function AboutMeSection() {
    return (
        <MaxWidthWrapper id="about">
            <TextRevealByWord text="I’m a freelance software engineer & designer with a strong focus on producing awesome looking, easy-to-understand experiences." />
        </MaxWidthWrapper>
    );
}

const TextRevealByWord: FC<{
    text: string;
    className?: string;
    textSizing?: string;
}> = ({ text, className, textSizing }) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const words = text.split(" ");

    return (
        <div
            ref={targetRef}
            className={cn("relative z-0 h-[200vh]", className)}
        >
            <div
                className={
                    "sticky top-0 mx-auto h-[50%] flex items-center bg-transparent"
                }
            >
                <p
                    ref={targetRef}
                    className={cn(
                        "flex flex-wrap text-3xl font-medium text-black/20",
                        textSizing
                            ? textSizing
                            : "text-3xl sm:text-4xl md:text-5xl xl:text-6xl",
                    )}
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word
                                key={i}
                                progress={scrollYProgress}
                                range={[start, end]}
                            >
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

const Word: FC<{
    children: ReactNode;
    progress: any;
    range: [number, number];
}> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span style={{ opacity: opacity }} className={"text-black"}>
                {children}
            </motion.span>
        </span>
    );
};
export default AboutMeSection;
