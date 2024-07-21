"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";

import { LuArrowRight } from "react-icons/lu";
import { services } from "@/lib/services";
import ServiceCard from "@/components/molecules/service.card";

function ServicesList() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-12">
            <SectionTitle
                title="Services"
                cta={{
                    children: (
                        <div className="flex h-full w-full items-center gap-2">
                            <p>View more</p>
                            <LuArrowRight className="h-4 w-auto" />
                        </div>
                    ),
                    link: "/services",
                }}
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 6).map((service, i) => (
                    <ServiceCard key={i} service={service} index={i} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default ServicesList;
