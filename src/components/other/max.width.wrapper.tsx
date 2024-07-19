import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto h-full w-full max-w-screen-xl px-8 md:px-12 lg:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;