import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import React from "react";

const MaxWidthWrapper = ({
    className,
    children,
    id,
    style,
}: {
    className?: string;
    children: ReactNode;
    id?: string;
    style?: React.CSSProperties;
}) => {
    return (
        <div
            className={cn(
                "mx-auto h-full w-full max-w-screen-xl px-8",
                className,
            )}
            id={id}
            style={style}
        >
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
