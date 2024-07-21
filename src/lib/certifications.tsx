import Link from "next/link";
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";

export const certificiations = [
    {
        id: 0,
        what: "Project Management",
        when: "Aug 2022 - Apr 2023",
        where: "Google",
        courses: [
            {
                title: "Foundations of Project Management",
                description:
                    "Learn the basics of project management, including key terminologies, frameworks, and methodologies.",
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
                description:
                    "Focuses on setting project goals, defining scope, identifying stakeholders, and developing project charters.",
            },
            {
                title: "Project Planning: Putting It All Together",
                skills: [
                    "Timeline creation",
                    "Resource allocation",
                    "Budgeting",
                    "Risk management",
                ],
                description:
                    "Covers creating timelines, allocating resources, budgeting, and managing risks.",
            },
            {
                title: "Project Execution: Running the Project",
                skills: [
                    "Progress tracking",
                    "Team management",
                    "Deliverable management",
                    "Performance tracking",
                ],
                description:
                    "Learn to track progress, manage teams, oversee deliverables, and monitor performance.",
            },
            {
                title: "Agile Project Management",
                skills: [
                    "Agile principles",
                    "Scrum and Kanban",
                    "Iterative development",
                    "Stakeholder collaboration",
                ],
                description:
                    "Explores Agile principles, Scrum, Kanban, iterative development, and stakeholder collaboration.",
            },
            {
                title: "Capstone: Applying Project Management in the Real World",
                skills: [
                    "Hands-on project management",
                    "Problem-solving",
                    "Real-world application",
                    "Project integration",
                ],
                description:
                    "Apply project management skills in hands-on projects, solving real-world problems, and integrating project components.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/0"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
    {
        id: 1,
        what: "IT Support",
        when: "Feb 2023 - May 2023",
        where: "Google",
        courseCount: 5,
        courses: [
            {
                title: "Technical Support Fundamentals",
                skills: [
                    "Troubleshooting",
                    "Customer service",
                    "Computer assembly",
                ],
                description:
                    "Introduction to troubleshooting, customer service, and basic computer assembly.",
            },
            {
                title: "The Bits and Bytes of Computer Networking",
                skills: [
                    "Networking basics",
                    "IP addressing",
                    "Troubleshooting networks",
                ],
                description:
                    "Learn networking basics, IP addressing, and troubleshooting networks.",
            },
            {
                title: "Operating Systems and You: Becoming a Power User",
                skills: [
                    "Operating system management",
                    "Command line interface",
                    "System troubleshooting",
                ],
                description:
                    "Gain proficiency in managing operating systems, using command line interfaces, and system troubleshooting.",
            },

            {
                title: "System Administration and IT Infrastructure Services",
                skills: [
                    "System administration",
                    "Server management",
                    "IT infrastructure",
                ],
                description:
                    "Covers system administration, server management, and IT infrastructure.",
            },
            {
                title: "IT Security: Defense against the digital dark arts",
                skills: [
                    "IT security fundamentals",
                    "Cybersecurity best practices",
                    "Security threats mitigation",
                ],
                description:
                    "Fundamentals of IT security, cybersecurity best practices, and threat mitigation.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/1"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
    {
        id: 2,
        what: "Full Stack Software Developement",
        when: "Mar 2022 - Aug 2022",
        where: "IBM",
        courses: [
            {
                title: "Introduction to Cloud Computing",
                skills: [
                    "Cloud fundamentals",
                    "Cloud service models",
                    "Cloud deployment models",
                ],
                description:
                    "Learn cloud fundamentals, service models, and deployment models.",
            },
            {
                title: "Introduction to Web Development with HTML, CSS, JavaScript",
                skills: ["HTML", "CSS", "JavaScript", "Web development basics"],
                description:
                    "Basics of web development using HTML, CSS, and JavaScript.",
            },
            {
                title: "Getting Started with Git and GitHub",
                skills: ["Version control", "Git commands", "GitHub workflows"],
                description:
                    "Introduction to version control, Git commands, and GitHub workflows.",
            },
            {
                title: "Developing Cloud Native Applications",
                skills: [
                    "Cloud native principles",
                    "Application development",
                    "Microservices",
                ],
                description:
                    "Principles of cloud-native development, including application development and microservices.",
            },
            {
                title: "Developing Cloud Apps with Node.js and React",
                skills: ["Node.js", "React", "Full stack development"],
                description:
                    "Learn full-stack development using Node.js and React.",
            },
            {
                title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
                skills: [
                    "Docker",
                    "Kubernetes",
                    "OpenShift",
                    "Container orchestration",
                ],
                description:
                    "Basics of Docker, Kubernetes, OpenShift, and container orchestration.",
            },
            {
                title: "Python for Data Science, AI & Development",
                skills: ["Python programming", "Data science", "AI basics"],
                description:
                    "Python programming for data science, AI, and development.",
            },
            {
                title: "Developing AI Applications with Python and Flask",
                skills: ["Python", "Flask", "AI application development"],
                description:
                    "Learn to develop AI applications using Python and Flask.",
            },
            {
                title: "Django Application Development with SQL and Databases",
                skills: ["Django", "SQL", "Database management"],
                description:
                    "Develop applications using Django, SQL, and database management.",
            },

            {
                title: "Application Development using Microservices and Serverless",
                skills: [
                    "Microservices",
                    "Serverless computing",
                    "Application architecture",
                ],
                description:
                    "Explore microservices, serverless computing, and application architecture.",
            },
            {
                title: "Full Stack Application Development Capstone Project",
                skills: [
                    "Project management",
                    "Full stack development",
                    "Real-world application",
                ],
                description:
                    "Apply full-stack development skills in a hands-on capstone project.",
            },
            {
                title: "Full Stack Software Developer Assessment",
                skills: [
                    "Skill assessment",
                    "Project integration",
                    "Competency demonstration",
                ],
                description:
                    "Assessment of full-stack development skills through project integration and competency demonstration.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/2"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
    {
        id: 3,
        what: "DevOps & Software Engineering",
        when: "Aug 2022 - Nov 2022",
        where: "IBM",
        courses: [
            {
                title: "Introduction to DevOps",
                skills: [
                    "DevOps principles",
                    "DevOps lifecycle",
                    "Collaboration tools",
                ],
                description:
                    "Learn DevOps principles, lifecycle, and collaboration tools.",
            },
            {
                title: "Introduction to Cloud Computing",
                skills: [
                    "Cloud computing basics",
                    "Cloud service models",
                    "Cloud deployment models",
                ],
                description:
                    "Understand cloud computing basics, service models, and deployment models.",
            },
            {
                title: "Introduction to Agile Development and Scrum",
                skills: [
                    "Agile methodologies",
                    "Scrum framework",
                    "Agile project management",
                ],
                description:
                    "Explore Agile methodologies, Scrum framework, and Agile project management.",
            },
            {
                title: "Hands-on Introduction to Linux Commands and Shell Scripting",
                skills: [
                    "Linux fundamentals",
                    "Shell scripting",
                    "Command line proficiency",
                ],
                description:
                    "Gain proficiency in Linux fundamentals, shell scripting, and command line usage.",
            },
            {
                title: "Getting Started with Git and GitHub",
                skills: ["Version control", "Git commands", "GitHub workflows"],
                description:
                    "Basics of version control, Git commands, and GitHub workflows.",
            },
            {
                title: "Python for Data Science, AI & Development",
                skills: [
                    "Python programming",
                    "Data manipulation",
                    "AI fundamentals",
                ],
                description:
                    "Python programming for data manipulation and AI fundamentals.",
            },
            {
                title: "Developing AI Applications with Python and Flask",
                skills: ["Python", "Flask", "AI application development"],
                description: "Develop AI applications using Python and Flask.",
            },
            {
                title: "Introduction to Containers with Docker, Kubernetes & OpenShift",
                skills: [
                    "Docker",
                    "Kubernetes",
                    "OpenShift",
                    "Container orchestration",
                ],
                description:
                    "Learn Docker, Kubernetes, OpenShift, and container orchestration.",
            },
            {
                title: "Application Development using Microservices and Serverless",
                skills: [
                    "Microservices",
                    "Serverless computing",
                    "Application architecture",
                ],
                description:
                    "Explore microservices, serverless computing, and application architecture.",
            },
            {
                title: "Introduction to Test and Behavior Driven Development",
                skills: [
                    "Test-driven development",
                    "Behavior-driven development",
                    "Automated testing",
                ],
                description:
                    "Understand test-driven development, behavior-driven development, and automated testing.",
            },
            {
                title: "Continuous Integration and Continuous Delivery (CI/CD)",
                skills: [
                    "CI/CD pipelines",
                    "Automation",
                    "Deployment strategies",
                ],
                description:
                    "Learn CI/CD pipelines, automation, and deployment strategies.",
            },
            {
                title: "Application Security for Developers and DevOps Professionals",
                skills: [
                    "Application security",
                    "Vulnerability assessment",
                    "Secure coding practices",
                ],
                description:
                    "Covers application security, vulnerability assessment, and secure coding practices.",
            },
            {
                title: "DevOps Capstone Project",
                skills: [
                    "Project management",
                    "DevOps integration",
                    "Real-world application",
                ],
                description:
                    "Apply DevOps skills in a hands-on capstone project integrating real-world application.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/3"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
    {
        id: 4,
        what: "Data Engineering",
        when: "Aug 2022 - Nov 2022",
        where: "IBM",
        courses: [
            {
                title: "Introduction to Data Engineering",
                skills: [
                    "Data engineering basics",
                    "Data lifecycle",
                    "Data engineering roles",
                ],
                description:
                    "Learn the basics of data engineering, including the data lifecycle and roles.",
            },
            {
                title: "Python for Data Science, AI & Development",
                skills: [
                    "Python programming",
                    "Data manipulation",
                    "AI fundamentals",
                ],
                description:
                    "Python programming for data manipulation and AI fundamentals.",
            },
            {
                title: "Python Project for Data Engineering",
                skills: [
                    "Data engineering with Python",
                    "Project implementation",
                    "Hands-on experience",
                ],
                description:
                    "Hands-on project implementing data engineering concepts using Python.",
            },
            {
                title: "Introduction to Relational Databases (RDBMS)",
                skills: [
                    "Relational database concepts",
                    "SQL basics",
                    "Database design",
                ],
                description:
                    "Covers relational database concepts, SQL basics, and database design.",
            },
            {
                title: "Databases and SQL for Data Science with Python",
                skills: [
                    "SQL querying",
                    "Data analysis with Python",
                    "Database integration",
                ],
                description:
                    "Learn SQL querying, data analysis with Python, and database integration.",
            },
            {
                title: "Hands-on Introduction to Linux Commands and Shell Scripting",
                skills: [
                    "Linux fundamentals",
                    "Shell scripting",
                    "Command line proficiency",
                ],
                description:
                    "Gain proficiency in Linux fundamentals, shell scripting, and command line usage.",
            },
            {
                title: "Relational Database Administration (DBA)",
                skills: [
                    "Database administration",
                    "Performance tuning",
                    "Backup and recovery",
                ],
                description:
                    "Covers database administration, performance tuning, and backup/recovery.",
            },
            {
                title: "ETL and Data Pipelines with Shell, Airflow and Kafka",
                skills: [
                    "ETL processes",
                    "Data pipeline creation",
                    "Apache Airflow",
                    "Kafka basics",
                ],
                description:
                    "Learn ETL processes, data pipeline creation, Apache Airflow, and Kafka basics.",
            },
            {
                title: "Data Warehouse Fundamentals",
                skills: [
                    "Data warehousing concepts",
                    "Data modeling",
                    "Warehouse architecture",
                ],
                description:
                    "Explore data warehousing concepts, data modeling, and warehouse architecture.",
            },
            {
                title: "Introduction to NoSQL Databases",
                skills: [
                    "NoSQL fundamentals",
                    "Document databases",
                    "Data scalability",
                ],
                description:
                    "Learn NoSQL fundamentals, document databases, and data scalability.",
            },
            {
                title: "Introduction to Big Data with Spark and Hadoop",
                skills: [
                    "Big data concepts",
                    "Apache Spark",
                    "Hadoop ecosystem",
                ],
                description:
                    "Covers big data concepts, Apache Spark, and the Hadoop ecosystem.",
            },
            {
                title: "Data Engineering and Machine Learning using Spark",
                skills: [
                    "Machine learning with Spark",
                    "Data processing",
                    "ML pipeline creation",
                ],
                description:
                    "Learn machine learning with Spark, data processing, and ML pipeline creation.",
            },
            {
                title: "Data Engineering Capstone Project",
                skills: [
                    "Project management",
                    "Data engineering integration",
                    "Real-world application",
                ],
                description:
                    "Apply data engineering skills in a hands-on capstone project with real-world application.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/4"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
    {
        id: 5,
        what: "Algorithms",
        when: "Aug 2022 - Nov 2022",
        where: "Stanford University",
        courses: [
            {
                title: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
                skills: [
                    "Divide and conquer",
                    "Sorting algorithms",
                    "Searching algorithms",
                    "Randomized algorithms",
                ],
                description:
                    "Learn algorithms for divide and conquer, sorting, searching, and randomization.",
            },
            {
                title: "Graph Search, Shortest Paths, and Data Structures",
                skills: [
                    "Graph search algorithms",
                    "Shortest path algorithms",
                    "Data structures",
                ],
                description:
                    "Explore graph search algorithms, shortest path algorithms, and data structures.",
            },
            {
                title: "Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming",
                skills: [
                    "Greedy algorithms",
                    "Minimum spanning trees",
                    "Dynamic programming",
                ],
                description:
                    "Covers greedy algorithms, minimum spanning trees, and dynamic programming.",
            },
            {
                title: "Shortest Paths Revisited, NP-Complete Problems and What To Do About Them",
                skills: [
                    "Advanced shortest path algorithms",
                    "NP-complete problems",
                    "Algorithmic problem-solving",
                ],
                description:
                    "Advanced study of shortest path algorithms, NP-complete problems, and algorithmic problem-solving.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/5"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
    {
        id: 6,
        what: "Cyber Security",
        when: "Aug 2022 - Nov 2022",
        where: "Google",
        courses: [
            {
                title: "Foundations of Cybersecurity",
                skills: [
                    "Cybersecurity basics",
                    "Risk management",
                    "Cybersecurity principles",
                ],
                description:
                    "Learn cybersecurity basics, risk management, and key principles.",
            },
            {
                title: "Play It Safe: Manage Security Risks",
                skills: [
                    "Security risk management",
                    "Threat identification",
                    "Risk mitigation",
                ],
                description:
                    "Focuses on security risk management, threat identification, and risk mitigation.",
            },
            {
                title: "Connect and Protect: Networks and Network Security",
                skills: [
                    "Network security",
                    "Network protocols",
                    "Firewall management",
                ],
                description:
                    "Learn about network security, protocols, and firewall management.",
            },
            {
                title: "Tools of the Trade: Linux and SQL",
                skills: [
                    "Linux fundamentals",
                    "SQL basics",
                    "Command line proficiency",
                ],
                description:
                    "Gain proficiency in Linux fundamentals, SQL basics, and command line usage.",
            },
            {
                title: "Assets, Threats, and Vulnerabilities",
                skills: [
                    "Asset management",
                    "Threat assessment",
                    "Vulnerability analysis",
                ],
                description:
                    "Covers asset management, threat assessment, and vulnerability analysis.",
            },
            {
                title: "Sound the Alarm: Detection and Response",
                skills: [
                    "Intrusion detection",
                    "Incident response",
                    "Security monitoring",
                ],
                description:
                    "Learn intrusion detection, incident response, and security monitoring.",
            },
            {
                title: "Automate Cybersecurity Tasks with Python",
                skills: [
                    "Python programming",
                    "Automation scripts",
                    "Security automation",
                ],
                description:
                    "Use Python programming to automate security tasks and scripts.",
            },
            {
                title: "Put It to Work: Prepare for Cybersecurity Jobs",
                skills: [
                    "Job preparation",
                    "Interview skills",
                    "Resume building",
                ],
                description:
                    "Prepare for cybersecurity roles with job preparation, interview skills, and resume building.",
            },
        ],
        explanation: (
            <>
                <Link
                    href={"/certifications/6"}
                    className="group flex items-center gap-2"
                >
                    <div className="grid place-items-center rounded-full border border-brand-300 bg-brand-50 p-3 text-brand-900 transition-transform hover:rotate-45 group-hover:rotate-45">
                        <PiArrowUpRight className="h-4 w-auto" />
                    </div>

                    <p className="text-lg text-brand-950 lg:text-xl">
                        Show details
                    </p>
                </Link>
            </>
        ),
    },
];
