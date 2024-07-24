"use client";

import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { certificiations } from "@/lib/certifications";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
import Step from "@/components/atoms/step";
import { LuArrowDown, LuStopCircle } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function CourseCard(props: {
    cls: string;
    title: string;
    description?: string;
    skills: string[];
}) {
    return (
        <motion.div
            className={cn(
                "h-max w-full space-y-4 rounded-lg border border-brand-200 bg-brand-50/40 p-8 text-brand-950 shadow-lg backdrop-blur-lg",
                props.cls,
            )}
            whileInView={"visible"}
            viewport={{ once: true }}
            initial={"hidden"}
            transition={{ duration: 1.5 }}
            variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
            }}
        >
            <Title color="primary900" title={props.title} size="h2" />
            <p>{props.description}</p>
            <div className="flex w-full flex-wrap gap-4">
                {props.skills.map((skill: any, i) => (
                    <small
                        key={i}
                        className="h-max rounded-md border bg-white p-1 px-2 text-brand-950 shadow-sm backdrop-blur-sm"
                    >
                        {skill}
                    </small>
                ))}
            </div>
        </motion.div>
    );
}

function ServiceDetailPage({ params }: { params: { cid: string } }) {
    const certId = Number(params.cid);
    if (isNaN(certId) || certId < 0 || certId >= certificiations.length) {
        return redirect("/services");
    }

    const cert = certificiations[certId];

    return (
        <MaxWidthWrapper className="flex flex-col gap-12 py-56">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/certifications">
                            Certifications
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{cert.what}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <SectionTitle center title={`${cert.what}`} />

            {/* Mobile View */}
            <div className="flex w-full flex-col lg:hidden">
                <div className="grid grid-cols-7 place-items-center">
                    <Step content={<LuArrowDown className="h-6 w-5" />} />
                    <div className="col-span-6"></div>
                </div>

                {cert.courses.map((course, _i) => {
                    const i = _i + 1;
                    return (
                        <div
                            key={i}
                            className="grid grid-cols-7 place-items-center"
                        >
                            <Step topLine content={<p>{`0${i}`}</p>} />
                            <CourseCard cls="col-span-6 my-4" {...course} />
                        </div>
                    );
                })}

                <div className="grid grid-cols-7 place-items-center">
                    <Step
                        content={<LuStopCircle className="h-6 w-5" />}
                        topLine
                        noBottomLine
                    />
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden w-full flex-col lg:flex">
                <div className="grid grid-cols-7 place-items-center gap-2">
                    <div className="col-span-3"></div>
                    <Step content={<LuArrowDown className="h-6 w-5" />} />
                    <div className="col-span-3"></div>
                </div>

                {cert.courses.map((course, _i) => {
                    const i = _i + 1;
                    return (
                        <div
                            key={i}
                            className="grid grid-cols-7 place-items-center gap-2"
                        >
                            {i % 2 === 0 ? (
                                <div className="col-span-3"></div>
                            ) : (
                                <CourseCard cls="col-span-3" {...course} />
                            )}
                            <Step topLine content={<p>{`0${i}`}</p>} />
                            {i % 2 !== 0 ? (
                                <div className="col-span-3"></div>
                            ) : (
                                <CourseCard cls="col-span-3" {...course} />
                            )}
                        </div>
                    );
                })}

                <div className="grid grid-cols-7 place-items-center gap-2">
                    <div className="col-span-3"></div>
                    <Step
                        content={<LuStopCircle className="h-6 w-5" />}
                        topLine
                        noBottomLine
                    />
                    <div className="col-span-3"></div>
                </div>
            </div>

            <div className="grid w-full place-items-center">
                <Link href={"/certifications"} className="w-max">
                    <Button variant={"outline"}>Browse more</Button>
                </Link>
            </div>
        </MaxWidthWrapper>
    );
}

export default ServiceDetailPage;
