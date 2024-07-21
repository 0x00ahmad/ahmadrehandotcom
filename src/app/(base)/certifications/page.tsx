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
import { certificiations } from "@/lib/certifications";
import CertificateCard from "@/components/molecules/certifiate.card";

function CertificationsSection() {
    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12 pt-40">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Certifications</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <SectionTitle title="Qualifications" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {certificiations.map((item, index) => (
                    <CertificateCard key={index} index={index} item={item} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default CertificationsSection;
