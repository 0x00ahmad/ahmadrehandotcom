"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React from "react";

function BGSplashText() {
    const [pageHeight, setPageHeight] = React.useState(0);
    const pathname = usePathname();
    const [changingPath, setChangingPath] = React.useState(false);

    const [timeout, _setTimeout] = React.useState<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        if (!window || !document) return;
        setChangingPath(true);
        if (timeout) clearTimeout(timeout);
        _setTimeout(
            setTimeout(() => {
                setPageHeight(document.documentElement.scrollHeight);
                setChangingPath(false);
            }, 100),
        );
    }, [pathname, window.innerWidth, window.innerHeight, window.outerWidth]);

    return (
        !changingPath && (
            <div
                className={cn(
                    "absolute right-0 top-0 z-[-1] grid w-full place-items-center overflow-y-hidden",
                )}
                style={{ height: `${pageHeight}px` }}
            >
                <img
                    src={"/assets/bg-splash.svg"}
                    alt=""
                    className={cn(
                        "w-auto max-w-96 object-top md:max-w-full md:object-cover",
                    )}
                    style={{ height: `${pageHeight}px` }}
                />
            </div>
        )
    );
}

export default BGSplashText;
