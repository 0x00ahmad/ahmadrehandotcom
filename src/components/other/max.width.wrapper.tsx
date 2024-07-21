import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
    id,
}: {
    className?: string;
    children: ReactNode;
    id?: string;
}) => {
    return (
        <div
            className={cn(
                "mx-auto h-full w-full max-w-screen-xl px-8",
                className,
            )}
            id={id}
        >
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
