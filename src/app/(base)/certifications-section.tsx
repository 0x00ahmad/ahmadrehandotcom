"use client";

import SectionTitle from "@/components/atoms/section.title";
import CertificationDetails from "@/components/other/certification.details";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import CertificateCard from "@/components/molecules/certifiate.card";

const certficiations = [
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
    {
        what: "IT Support",
        when: "Feb 2023 - May 2023",
        where: "Google",
        explanation: (
            <>
                <CertificationDetails
                    yes={[
                        {
                            title: "Technical Support Fundamentals",
                            skills: [
                                "Troubleshooting",
                                "Customer service",
                                "Computer assembly",
                            ],
                        },
                        {
                            title: "The Bits and Bytes of Computer Networking",
                            skills: [
                                "Networking basics",
                                "IP addressing",
                                "Troubleshooting networks",
                            ],
                        },
                        {
                            title: "Operating Systems and You: Becoming a Power User",
                            skills: [
                                "Operating system management",
                                "Command line interface",
                                "System troubleshooting",
                            ],
                        },
                        {
                            title: "System Administration and IT Infrastructure Services",
                            skills: [
                                "System administration",
                                "Server management",
                                "IT infrastructure",
                            ],
                        },
                        {
                            title: "IT Security: Defense against the digital dark arts",
                            skills: [
                                "IT security fundamentals",
                                "Cybersecurity best practices",
                                "Security threats mitigation",
                            ],
                        },
                    ]}
                />
            </>
        ),
    },
    {
        what: "DevOps & Software Engineering",
        when: "Aug 2022 - Nov 2022",
        where: "IBM",
        explanation: (
            <>
                <CertificationDetails
                    yes={[
                        {
                            title: "Introduction to DevOps",
                            skills: [
                                "DevOps principles",
                                "DevOps lifecycle",
                                "Collaboration tools",
                            ],
                        },
                        {
                            title: "Introduction to Cloud Computing",
                            skills: [
                                "Cloud computing basics",
                                "Cloud service models",
                                "Cloud deployment models",
                            ],
                        },
                        {
                            title: "Introduction to Agile Development and Scrum",
                            skills: [
                                "Agile methodologies",
                                "Scrum framework",
                                "Agile project management",
                            ],
                        },
                        {
                            title: "Hands-on Introduction to Linux Commands and Shell Scripting",
                            skills: [
                                "Linux fundamentals",
                                "Shell scripting",
                                "Command line proficiency",
                            ],
                        },
                        {
                            title: "Getting Started with Git and GitHub",
                            skills: [
                                "Version control",
                                "Git commands",
                                "GitHub workflows",
                            ],
                        },
                        {
                            title: "Python for Data Science, AI & Development",
                            skills: [
                                "Python programming",
                                "Data manipulation",
                                "AI fundamentals",
                            ],
                        },
                        {
                            title: "Developing AI Applications with Python and Flask",
                            skills: [
                                "Python",
                                "Flask",
                                "AI application development",
                            ],
                        },
                        {
                            title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
                            skills: [
                                "Docker",
                                "Kubernetes",
                                "OpenShift",
                                "Container orchestration",
                            ],
                        },
                        {
                            title: "Application Development using Microservices and Serverless",
                            skills: [
                                "Microservices",
                                "Serverless computing",
                                "Application architecture",
                            ],
                        },
                        {
                            title: "Introduction to Test and Behavior Driven Development",
                            skills: [
                                "Test-driven development",
                                "Behavior-driven development",
                                "Automated testing",
                            ],
                        },
                        {
                            title: "Continuous Integration and Continuous Delivery (CI/CD)",
                            skills: [
                                "CI/CD pipelines",
                                "Automation",
                                "Deployment strategies",
                            ],
                        },
                        {
                            title: "Application Security for Developers and DevOps Professionals",
                            skills: [
                                "Application security",
                                "Vulnerability assessment",
                                "Secure coding practices",
                            ],
                        },
                        {
                            title: "DevOps Capstone Project",
                            skills: [
                                "Project management",
                                "DevOps integration",
                                "Real-world application",
                            ],
                        },
                    ]}
                />
            </>
        ),
    },
    {
        what: "Data Engineering",
        when: "Aug 2022 - Nov 2022",
        where: "IBM",
        explanation: (
            <>
                <CertificationDetails
                    yes={[
                        {
                            title: "Introduction to Data Engineering",
                            skills: [
                                "Data engineering basics",
                                "Data lifecycle",
                                "Data engineering roles",
                            ],
                        },
                        {
                            title: "Python for Data Science, AI & Development",
                            skills: [
                                "Python programming",
                                "Data manipulation",
                                "AI fundamentals",
                            ],
                        },
                        {
                            title: "Python Project for Data Engineering",
                            skills: [
                                "Data engineering with Python",
                                "Project implementation",
                                "Hands-on experience",
                            ],
                        },
                        {
                            title: "Introduction to Relational Databases (RDBMS)",
                            skills: [
                                "Relational database concepts",
                                "SQL basics",
                                "Database design",
                            ],
                        },
                        {
                            title: "Databases and SQL for Data Science with Python",
                            skills: [
                                "SQL querying",
                                "Data analysis with Python",
                                "Database integration",
                            ],
                        },
                        {
                            title: "Hands-on Introduction to Linux Commands and Shell Scripting",
                            skills: [
                                "Linux fundamentals",
                                "Shell scripting",
                                "Command line proficiency",
                            ],
                        },
                        {
                            title: "Relational Database Administration (DBA)",
                            skills: [
                                "Database administration",
                                "Performance tuning",
                                "Backup and recovery",
                            ],
                        },
                        {
                            title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
                            skills: [
                                "ETL processes",
                                "Data pipeline creation",
                                "Apache Airflow",
                                "Kafka basics",
                            ],
                        },
                        {
                            title: "Data Warehouse Fundamentals",
                            skills: [
                                "Data warehousing concepts",
                                "Data modeling",
                                "Warehouse architecture",
                            ],
                        },
                        {
                            title: "Introduction to NoSQL Databases",
                            skills: [
                                "NoSQL fundamentals",
                                "Document databases",
                                "Data scalability",
                            ],
                        },
                        {
                            title: "Introduction to Big Data with Spark and Hadoop",
                            skills: [
                                "Big data concepts",
                                "Apache Spark",
                                "Hadoop ecosystem",
                            ],
                        },
                        {
                            title: "Data Engineering and Machine Learning using Spark",
                            skills: [
                                "Machine learning with Spark",
                                "Data processing",
                                "ML pipeline creation",
                            ],
                        },
                        {
                            title: "Data Engineering Capstone Project",
                            skills: [
                                "Project management",
                                "Data engineering integration",
                                "Real-world application",
                            ],
                        },
                    ]}
                />
            </>
        ),
    },
];

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
                {certficiations.map((item, index) => (
                    <CertificateCard key={index} index={index} item={item} />
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default CertificationsSection;
