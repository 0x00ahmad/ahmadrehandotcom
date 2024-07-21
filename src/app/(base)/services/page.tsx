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
import { services } from "@/lib/services";
import ServiceCard from "@/components/molecules/service.card";

function ServicesPage() {
    return (
        <MaxWidthWrapper className="flex flex-col gap-12 py-56">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Services</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <SectionTitle title="Services" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 6).map((service, i) => (
                    <ServiceCard key={i} service={service} index={i} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default ServicesPage;
