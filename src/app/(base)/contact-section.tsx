"use client";

import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import ContactForm from "./contact/contact-form";
import { motion } from "framer-motion";

function ContactSection() {
    return (
        <MaxWidthWrapper
            id="contact"
            className="grid grid-cols-1 gap-12 md:grid-cols-2"
        >
            <div className="space-y-8 w-full">
                <h1 className="text-5xl font-semibold md:text-6xl">
                    Let&apos;s do something together
                </h1>

                <motion.img
                    src={"/assets/line-squiggly.svg"}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100%"
                    className={"h-8 w-auto"}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 0.2 }}
                    variants={{
                        hidden: { opacity: 0, x: -20, scale: 0.4 },
                        visible: { opacity: 1, x: 0, scale: 1 },
                    }}
                />

                <motion.div
                    className="flex items-center gap-2"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <AiOutlineMail className="h-6 w-6" />
                    <p>{CONTACT_EMAIL}</p>
                </motion.div>

                <motion.div
                    className="flex items-center gap-2"
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    initial={"hidden"}
                    transition={{ duration: 0.4 }}
                    variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <FiPhone className="h-6 w-6" />
                    <p>{CONTACT_PHONE}</p>
                </motion.div>
            </div>

            <ContactForm />
        </MaxWidthWrapper>
    );
}

export default ContactSection;
