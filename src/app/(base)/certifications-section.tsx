"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import CertificateCard from "@/components/molecules/certifiate.card";
import { certificiations } from "@/lib/certifications";

function CertificationsSection() {
    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12">
            <SectionTitle
                title="Some Of My Qualifications"
                cta={{
                    children: (
                        <div className="flex h-full w-full items-center gap-2">
                            <p>View all</p>
                            <LuArrowRight className="h-4 w-auto" />
                        </div>
                    ),
                    link: "/certifications",
                }}
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {certificiations.slice(0, 4).map((item, index) => (
                    <CertificateCard key={index} index={index} item={item} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default CertificationsSection;
