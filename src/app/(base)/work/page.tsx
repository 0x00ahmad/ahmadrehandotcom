"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { work } from "@/lib/work";
import { useRouter } from "next/navigation";
import WorkCard from "@/components/molecules/work.card";

function WorkPage() {
    const router = useRouter();

    return (
        <MaxWidthWrapper className="flex flex-col gap-12 py-56">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>My work</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <SectionTitle title="My Work" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {work.map((item, i) => (
                    <WorkCard key={i} item={item} i={i} router={router} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default WorkPage;
