"use client";

import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { LuArrowDown, LuStopCircle } from "react-icons/lu";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Step from "@/components/atoms/step";
import Image from "next/image";

const commonListStyle = "list-disc pl-4 gap-2 flex flex-col py-2";

const vectors = [
    {
        link: "/assets/triangle.svg",
        className: "w-12 h-auto absolute left-32 top-32",
    },
    {
        link: "/assets/circle.svg",
        className: "w-12 h-auto absolute right-64 top-1/4",
    },
    {
        link: "/assets/signature.svg",
        className: "w-auto h-12 absolute left-64 top-1/3",
    },
    {
        link: "/assets/line-squiggly.svg",
        className: "w-auto h-12 absolute right-32 bottom-1/2",
    },
    {
        link: "/assets/arrow-up.svg",
        className: "w-auto h-20 absolute left-1/4 bottom-1/4",
    },
];

const steps = [
    {
        subtitle: "Do we match?",
        title: "The Discovery Call",
        description: (
            <>
                <p>
                    Before we start, we determine if and how I can help you.
                    What are your requirements for your new website? Why do you
                    need a new website? What goals do you have, and what
                    problems can we solve with a new website?
                </p>
                <ul className={commonListStyle}>
                    <li>We get to know each other better</li>
                    <li>Determine the problem scope</li>
                    <li>Understand your goals</li>
                    <li>Find out how I can best assist you</li>
                </ul>
            </>
        ),
    },
    {
        subtitle: "We need a plan",
        title: "The Blueprint",
        description: (
            <>
                <p>
                    Together, we develop a strategy that successfully combines
                    your goals with the needs of your target audience. Based on
                    this concept, I devise and present you with a plan-draft.
                    This provides us with a very good foundation to start
                    working from.
                </p>
                <ul className={commonListStyle}>
                    <li>Timeline</li>
                    <li>Required Tools</li>
                    <li>Communication</li>
                    <li>Updates</li>
                    <li>Delivery</li>
                    <li>The Plan</li>
                </ul>
            </>
        ),
    },
    {
        subtitle: "Building the foundation",
        title: "The First Draft",
        description: (
            <>
                <p>
                    Time to layout the base. Using the plan that we finalized
                    earlier, I will come up with the first draft of the end
                    product and showcase it to you as soon as possible. This way
                    both of us join together on right starting point to avoid
                    any issues down the road. The draft varies depending on the
                    nature of the project, some examples of a first draft would
                    be:
                </p>
                <ul className={commonListStyle}>
                    <li>A rough wireframe of a website/mobile app&apos;s UX/UI</li>
                    <li>Copywriting drafts</li>
                    <li>Project documentation for backend systems</li>
                </ul>
            </>
        ),
    },
    {
        subtitle: "Putting the puzzle together",
        title: "Development",
        description: (
            <>
                <p>
                    In this step, everything up to this point is used to start
                    the development lifecycle. You will be provided with regular
                    status updates every few days, with an optional end-of-week
                    video chat. This is carried out until we finally journey on
                    to the final stages.
                </p>
                <ul className={commonListStyle}>
                    <li>Development</li>
                    <li>Status Updates</li>
                    <li>Testing</li>
                    <li>Feedback</li>
                </ul>
            </>
        ),
    },
    {
        subtitle: "Ready to launch 🚀",
        title: "Service Delivery",
        description: (
            <>
                <p>
                    At this stage, the project that was planned has been bought
                    to life, ready to be put into action. We finalize and
                    discuss any further information that you might need to know
                    regarding the project and the implementation.
                </p>
                <ul className={commonListStyle}>
                    <li>Final touches</li>
                    <li>Delivery</li>
                    <li>Release to production</li>
                </ul>
            </>
        ),
    },
];

function StepCard(props: {
    cls: string;
    title: string;
    subtitle: string;
    description: React.ReactNode;
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
            <div className="space-y-0">
                <p className="font-light text-brand-950">{props.subtitle}</p>
                <Title color="primary900" title={props.title} size="h2" />
            </div>
            {props.description}
        </motion.div>
    );
}

function HowIDeliverResults() {
    return (
        <MaxWidthWrapper className="relative flex flex-col gap-12">
            <SectionTitle title="How I Deliver Results" center />

            {vectors.map((v, i) => (
                <Image
                    key={i}
                    src={v.link}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className={cn("hidden lg:block", v.className)}
                />
            ))}

            <div className="flex w-full flex-col lg:hidden">
                <div className="grid grid-cols-7 place-items-center">
                    <Step content={<LuArrowDown className="h-6 w-5" />} />
                    <div className="col-span-6"></div>
                </div>

                {steps.map((step, _i) => {
                    const i = _i + 1;
                    return (
                        <div
                            key={i}
                            className="grid grid-cols-7 place-items-center"
                        >
                            <Step topLine content={<p>{`0${i}`}</p>} />
                            <StepCard cls="col-span-6 my-4" {...step} />
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

                {steps.map((step, _i) => {
                    const i = _i + 1;
                    return (
                        <div
                            key={i}
                            className="grid grid-cols-7 place-items-center gap-2"
                        >
                            {i % 2 === 0 ? (
                                <div className="col-span-3"></div>
                            ) : (
                                <StepCard cls="col-span-3" {...step} />
                            )}
                            <Step topLine content={<p>{`0${i}`}</p>} />
                            {i % 2 !== 0 ? (
                                <div className="col-span-3"></div>
                            ) : (
                                <StepCard cls="col-span-3" {...step} />
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
        </MaxWidthWrapper>
    );
}

export default HowIDeliverResults;
