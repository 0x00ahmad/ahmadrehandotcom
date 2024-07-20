"use client";

import SectionTitle from "@/components/atoms/section.title";
import CertificationDetails from "@/components/other/certification.details";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";

const skillset = [
    {
        what: "Project Management",
        when: "Aug 2022 - Apr 2023",
        where: "Google",
        explanation: (
            <>
                <CertificationDetails
                    yes={[
                        {
                            title: "Foundations of Project Management",
                            skills: [
                                "Project management basics",
                                "Key terminologies",
                                "Frameworks and methodologies",
                            ],
                        },
                        {
                            title: "Project Initiation: Starting a Successful Project",
                            skills: [
                                "Project goal setting",
                                "Scope definition",
                                "Stakeholder identification",
                                "Project charter development",
                            ],
                        },
                        {
                            title: "Project Planning: Putting It All Together",
                            skills: [
                                "Timeline creation",
                                "Resource allocation",
                                "Budgeting",
                                "Risk management",
                            ],
                        },
                        {
                            title: "Project Execution: Running the Project",
                            skills: [
                                "Progress tracking",
                                "Team management",
                                "Deliverable management",
                                "Performance tracking",
                            ],
                        },
                        {
                            title: "Agile Project Management",
                            skills: [
                                "Agile principles",
                                "Scrum and Kanban",
                                "Iterative development",
                                "Stakeholder collaboration",
                            ],
                        },
                        {
                            title: "Capstone: Applying Project Management in the Real World",
                            skills: [
                                "Hands-on project management",
                                "Problem-solving",
                                "Real-world application",
                                "Project integration",
                            ],
                        },
                    ]}
                />
            </>
        ),
    },
];

function SkillsetSection() {
    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12">
            <SectionTitle title="Skillset" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <p>TODo</p>
            </div>
        </MaxWidthWrapper>
    );
}

export default SkillsetSection;
