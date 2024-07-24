"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { work } from "@/lib/work";
import { useRouter } from "next/navigation";
import WorkCard from "@/components/molecules/work.card";

function RecentWork() {
    const router = useRouter();
    return (
        <MaxWidthWrapper className="flex flex-col gap-12" id="work">
            <SectionTitle
                title="Recent work"
                cta={{
                    link: "/work",
                    children: (
                        <div className="flex h-full w-full items-center gap-2">
                            <p>View more</p>
                            <LuArrowRight className="h-4 w-auto" />
                        </div>
                    ),
                }}
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {work.slice(0, 2).map((item, i) => (
                    <WorkCard key={i} item={item} i={i} router={router} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default RecentWork;
