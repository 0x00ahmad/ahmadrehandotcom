import React from "react";
import Title from "./title";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

function SectionTitle({
    title,
    cta,
    center,
}: {
    title: string;
    cta?: {
        children: React.ReactNode;
        link: string;
    };
    center?: boolean;
}) {
    return (
        <div
            className={cn(
                "gap-8",
                !!cta || !center
                    ? "flex flex-col md:flex-row md:items-center md:justify-between"
                    : "grid place-items-center",
            )}
        >
            <div className="flex items-center gap-2">
                <Image
                    src={"/assets/a.svg"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className={"h-8 w-auto"}
                />
                <Title color="primary" title={title} size="h2" />
            </div>
            {cta && (
                <Link href={cta.link}>
                    <Button variant={"muted"}>{cta.children}</Button>
                </Link>
            )}
        </div>
    );
}

export default SectionTitle;
