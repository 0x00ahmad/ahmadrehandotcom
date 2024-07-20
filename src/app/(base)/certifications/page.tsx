"use client";

import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import CertificationDetails from "@/components/other/certification.details";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import { motion } from "framer-motion";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const certficiations = [
    {
        what: "Project Management",
        when: "Aug 2022 - Apr 2023",
        where: "Google",
        explanation: (
            <>
                <div className="flex w-full flex-col">
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
                </div>
            </>
        ),
    },
    {
        what: "IT Support",
        when: "Feb 2023 - May 2023",
        where: "Google",
        explanation: (
            <>
                <div className="flex w-full flex-col">
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
                </div>
            </>
        ),
    },
    {
        what: "Full Stack Software Developement",
        when: "Mar 2022 - Aug 2022",
        where: "IBM",
        explanation: (
            <>
                <div className="flex w-full flex-col">
                    <CertificationDetails
                        yes={[
                            {
                                title: "Introduction to Cloud Computing",
                                skills: [
                                    "Cloud fundamentals",
                                    "Cloud service models",
                                    "Cloud deployment models",
                                ],
                            },
                            {
                                title: "Introduction to Web Development with HTML, CSS, JavaScript",
                                skills: [
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "Web development basics",
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
                                title: "Developing Cloud Native Applications",
                                skills: [
                                    "Cloud native principles",
                                    "Application development",
                                    "Microservices",
                                ],
                            },
                            {
                                title: "Developing Cloud Apps with Node.js and React",
                                skills: [
                                    "Node.js",
                                    "React",
                                    "Full stack development",
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
                                title: "Python for Data Science, AI & Development",
                                skills: [
                                    "Python programming",
                                    "Data science",
                                    "AI basics",
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
                                title: "Django Application Development with SQL and Databases",
                                skills: [
                                    "Django",
                                    "SQL",
                                    "Database management",
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
                                title: "Full Stack Application Development Capstone Project",
                                skills: [
                                    "Project management",
                                    "Full stack development",
                                    "Real-world application",
                                ],
                            },
                            {
                                title: "Full Stack Software Developer Assessment",
                                skills: [
                                    "Skill assessment",
                                    "Project integration",
                                    "Competency demonstration",
                                ],
                            },
                        ]}
                    />
                </div>
            </>
        ),
    },
    {
        what: "DevOps & Software Engineering",
        when: "Aug 2022 - Nov 2022",
        where: "IBM",
        explanation: (
            <>
                <div className="flex w-full flex-col">
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
                </div>
            </>
        ),
    },
    {
        what: "Data Engineering",
        when: "Aug 2022 - Nov 2022",
        where: "IBM",
        explanation: (
            <>
                <div className="flex w-full flex-col">
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
                </div>
            </>
        ),
    },
    {
        what: "Algorithms",
        when: "Aug 2022 - Nov 2022",
        where: "Stanford University",
        explanation: (
            <>
                <div className="flex w-full flex-col">
                    <CertificationDetails
                        yes={[
                            {
                                title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
                                skills: [
                                    "Divide and conquer",
                                    "Sorting algorithms",
                                    "Searching algorithms",
                                    "Randomized algorithms",
                                ],
                            },
                            {
                                title: "Graph Search, Shortest Paths, and Data Structures",
                                skills: [
                                    "Graph search algorithms",
                                    "Shortest path algorithms",
                                    "Data structures",
                                ],
                            },
                            {
                                title: "Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming",
                                skills: [
                                    "Greedy algorithms",
                                    "Minimum spanning trees",
                                    "Dynamic programming",
                                ],
                            },
                            {
                                title: "Shortest Paths Revisited, NP-Complete Problems and What To Do About Them",
                                skills: [
                                    "Advanced shortest path algorithms",
                                    "NP-complete problems",
                                    "Algorithmic problem-solving",
                                ],
                            },
                        ]}
                    />
                </div>
            </>
        ),
    },
    {
        what: "Cyber Security",
        when: "Aug 2022 - Nov 2022",
        where: "Google",
        explanation: (
            <>
                <div className="flex w-full flex-col">
                    <CertificationDetails
                        yes={[
                            {
                                title: "Foundations of Cybersecurity",
                                skills: [
                                    "Cybersecurity basics",
                                    "Risk management",
                                    "Cybersecurity principles",
                                ],
                            },
                            {
                                title: "Play It Safe: Manage Security Risks",
                                skills: [
                                    "Security risk management",
                                    "Threat identification",
                                    "Risk mitigation",
                                ],
                            },
                            {
                                title: "Connect and Protect: Networks and Network Security",
                                skills: [
                                    "Network security",
                                    "Network protocols",
                                    "Firewall management",
                                ],
                            },
                            {
                                title: "Tools of the Trade: Linux and SQL",
                                skills: [
                                    "Linux fundamentals",
                                    "SQL basics",
                                    "Command line proficiency",
                                ],
                            },
                            {
                                title: "Assets, Threats, and Vulnerabilities",
                                skills: [
                                    "Asset management",
                                    "Threat assessment",
                                    "Vulnerability analysis",
                                ],
                            },
                            {
                                title: "Sound the Alarm: Detection and Response",
                                skills: [
                                    "Intrusion detection",
                                    "Incident response",
                                    "Security monitoring",
                                ],
                            },
                            {
                                title: "Automate Cybersecurity Tasks with Python",
                                skills: [
                                    "Python programming",
                                    "Automation scripts",
                                    "Security automation",
                                ],
                            },
                            {
                                title: "Put It to Work: Prepare for Cybersecurity Jobs",
                                skills: [
                                    "Job preparation",
                                    "Interview skills",
                                    "Resume building",
                                ],
                            },
                        ]}
                    />
                </div>
            </>
        ),
    },
];

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
                {certficiations.map((item, index) => (
                    <motion.div
                        key={index}
                        className="rounded-lg border border-brand-200 bg-brand-50/30 p-6 text-brand-950 shadow-md backdrop-blur-lg md:p-8"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        initial={"hidden"}
                        transition={{ duration: 0.2 * (index + 1) }}
                        variants={{
                            hidden: { opacity: 0, y: -50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="flex h-full flex-row gap-4">
                            <div className="flex w-max flex-col items-center justify-between gap-2">
                                <Image
                                    src={"/assets/badge.svg"}
                                    alt="badge"
                                    width={0}
                                    height={0}
                                    sizes="100%"
                                    className="h-auto w-12"
                                />

                                <p className="whitespace-nowrap">5 courses</p>
                            </div>

                            <div className="flex w-full flex-col justify-between gap-12">
                                <div className="flex w-full flex-col gap-2">
                                    <Title title={item.what} size="h2" />
                                    <Title title={item.where} size="h4" />
                                </div>

                                <div className="flex w-full flex-col items-end justify-end gap-4">
                                    <Link
                                        className="group flex items-center gap-2"
                                        href={"/"}
                                    >
                                        <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                                            <PiArrowUpRight className="h-4 w-auto" />
                                        </div>

                                        <p className="text-lg text-brand-950 lg:text-xl">
                                            Show details
                                        </p>
                                    </Link>
                                    <p className="w-max text-sm">
                                        Completed in :{" "}
                                        <strong className="text-brand-950/70">
                                            {item.when}
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </MaxWidthWrapper>
    );
}

export default CertificationsSection;
