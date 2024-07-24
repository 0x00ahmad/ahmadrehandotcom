"use client";
import { TRANSITION_ALL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function Logo({
    showSubtitle,
    noAnimations,
}: {
    showSubtitle?: boolean;
    noAnimations?: boolean;
}) {
    const [isVisible, setIsVisible] = React.useState(true);
    const [prevScrollPos, setPrevScrollPos] = React.useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className="flex w-max items-center gap-4">
            <Image
                src="/assets/a-circle.svg"
                alt="Logo"
                width={0}
                height={0}
                sizes="100%"
                className="h-auto w-12 lg:w-16"
            />

            <div
                className={cn(
                    "flex flex-col",
                    TRANSITION_ALL,
                    !!noAnimations || isVisible ? "opacity-100" : "opacity-0",
                )}
            >
                <a
                    href="/"
                    className="whitespace-nowrap text-xl font-medium text-brand-900 md:text-2xl lg:text-3xl"
                >
                    Ahmad Rehan
                </a>
                {showSubtitle && (
                    <p className="text-xs tracking-wide text-brand-700 md:text-sm">
                        Software Engineer
                    </p>
                )}
            </div>
        </div>
    );
}

export default Logo;
