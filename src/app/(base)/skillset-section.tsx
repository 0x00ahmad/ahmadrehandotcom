"use client";

import SectionTitle from "@/components/atoms/section.title";
import SkillCard from "@/components/atoms/skill.card";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";

const skillSet = {
    languages: [
        { label: "Python", icon: "/assets/icons/python.svg" },
        { label: "Go", icon: "/assets/icons/go.svg" },
        { label: "TypeScript/Javascript", icon: "/assets/icons/ts.svg" },
        { label: "Kotlin", icon: "/assets/icons/kotlin.svg" },
        { label: "Java", icon: "/assets/icons/java.svg" },
    ],
    web: [
        { label: "React", icon: "/assets/icons/react.svg" },
        { label: "React Native", icon: "/assets/icons/react.svg" },
        { label: "NextJS", icon: "/assets/icons/nextjs.svg" },
        { label: "SvelteKit", icon: "/assets/icons/svelte.svg" },
        { label: "Astro", icon: "/assets/icons/astro.svg" },
        { label: "NextJS", icon: "/assets/icons/nextjs.svg" },
        { label: "Hono", icon: "/assets/icons/hono.svg" },
        { label: "FastAPI", icon: "/assets/icons/fastapi.svg" },
        { label: "Django", icon: "/assets/icons/django.svg" },
        { label: "Flask", icon: "/assets/icons/flask.svg" },
        { label: "Fiber", icon: "/assets/icons/fiber.svg" },
    ],
    databases: [
        { label: "SQL", icon: "/assets/icons/db.svg" },
        { label: "Redis", icon: "/assets/icons/redis.svg" },
        { label: "MongoDB", icon: "/assets/icons/mongodb.svg" },
    ],
    infrastructure: [
        { label: "Docker", icon: "/assets/icons/docker.svg" },
        { label: "VPS", icon: "/assets/icons/servers.svg" },
        { label: "AWS", icon: "/assets/icons/aws.svg" },
        { label: "GCP", icon: "/assets/icons/gcp.svg" },
        { label: "Vercel", icon: "/assets/icons/vercel.svg" },
        { label: "Cloudflare", icon: "/assets/icons/cf.svg" },
        { label: "K8", icon: "/assets/icons/k8.svg" },
    ],
    other: [
        { label: "Figma", icon: "/assets/icons/figma.svg" },
        { label: "Linux", icon: "/assets/icons/tux.svg" },
        { label: "Shell", icon: "/assets/icons/shell.svg" },
    ],
    "soft skills": [
        { label: "Communication", icon: "/assets/icons/communication.svg" },
        { label: "Teamwork", icon: "/assets/icons/team.svg" },
        { label: "Problem Solving", icon: "/assets/icons/solution.svg" },
        { label: "Time Management", icon: "/assets/icons/time.svg" },
    ],
};

function SkillsetSection() {
    return (
        <MaxWidthWrapper className="flex w-full flex-col gap-12">
            <SectionTitle title="My toolbox" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skillSet).map((e, i) => {
                    return <SkillCard key={i} title={e[0]} skills={e[1]} />;
                })}
            </div>
        </MaxWidthWrapper>
    );
}

export default SkillsetSection;
