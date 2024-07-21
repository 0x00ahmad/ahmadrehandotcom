"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import EducationCard from "@/components/molecules/education.card";

const education = [
    {
        what: "Bsc. Electrical Engineering",
        when: "2023 - 2026",
        where: "LUT University",
        explanation: (
            <>
                <p className="whitespace-normal break-words">
                    Exploring the field of hardware to learn more about the
                    underlying infrastructure that runs the modern world. And to
                    equip myself with the knowledge in various topics like
                    Mathematics, Electronics theory, and Electrical Machines in
                    order to potentially work in the field of semi-conductors in
                    the future.
                </p>
            </>
        ),
    },
    {
        what: "Bsc. Data Science & AI",
        when: "2023 - 2027",
        where: "IIT Guwahati",
        explanation: (
            <>
                <p className="whitespace-normal break-words">
                    This remote online degree is a complete program to teach
                    about Data Science & AI. I am exploring this degree to learn
                    more about the field, and to equip myself with the knowledge
                    in various topics like Machine Learning, Data Analysis, and
                    AI.
                </p>
            </>
        ),
    },
];

function EducationSection() {
    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12">
            <SectionTitle title="My Education" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {education.map((item, index) => (
                    <EducationCard key={index} index={index} item={item} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default EducationSection;
