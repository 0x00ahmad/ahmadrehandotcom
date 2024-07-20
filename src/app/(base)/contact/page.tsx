"use client";

import SectionTitle from "@/components/atoms/section.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import ContactForm from "./contact-form";
import { Inbox } from "lucide-react";
import Link from "next/link";
import Title from "@/components/atoms/title";
import { CONTACT_EMAIL, socials } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

function ContactSection() {
    return (
        <MaxWidthWrapper className="grid place-items-center gap-14 py-56">
            <SectionTitle title="Let's work together" />

            <div className="flex w-max items-center gap-2 rounded-full border-2 border-brand-500 bg-brand-50/40 p-1 px-3 text-brand-600">
                <div className="h-3 w-3 animate-pulse rounded-full bg-brand-700"></div>
                Available for collaboration
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
                <div className="flex flex-col gap-4">
                    <Title
                        title="Tell me more about you/your work"
                        size="h2"
                        color="primary"
                    />
                    <p className="prose text-lg font-medium text-brand-950 xl:text-xl">
                        I'm always open to new opportunities and collaborations.
                        Feel free to reach out to me if you have any questions
                        or just want to say hi.
                    </p>

                    <Image
                        src={"/assets/line-squiggly.svg"}
                        alt=""
                        width={0}
                        height={0}
                        sizes="100%"
                        className={"h-8 w-auto"}
                    />

                    <div className="flex flex-col gap-8">
                        {socials.map((social, i) => (
                            <motion.div
                                whileInView={"visible"}
                                viewport={{ once: true }}
                                initial={"hidden"}
                                transition={{ duration: 0.2 * (i + 1) }}
                                variants={{
                                    hidden: { opacity: 0, x: -50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <Link
                                    key={i}
                                    target="_blank"
                                    href={social.href}
                                    className="flex items-center gap-2 text-brand-950"
                                >
                                    <social.icon className="h-auto w-6" />
                                    <span>{social.name}</span>
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            initial={"hidden"}
                            transition={{ duration: 0.8 }}
                            variants={{
                                hidden: { opacity: 0, x: -50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <Link
                                href={`mailto:${CONTACT_EMAIL}`}
                                className="flex items-center gap-2 text-brand-950"
                            >
                                <Inbox className="h-auto w-6" />
                                <span>{CONTACT_EMAIL}</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                <ContactForm />
            </div>
        </MaxWidthWrapper>
    );
}

export default ContactSection;
