"use client";

import SectionTitle from "@/components/atoms/section.title";
import Title from "@/components/atoms/title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import { TRANSITION_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { LucideStore } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { CgWebsite } from "react-icons/cg";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";

const services = [
  {
    icon: CgWebsite,
    title: "Website Design",
    description:
      "Creating stunning websites for your online presence that will convert visitors into users/customers.",
  },
  {
    icon: HiOutlineDeviceMobile,
    title: "Mobile App Development",
    description:
      "Building mobile applications for both Android and iOS platforms that will help you reach your audience.",
  },
  {
    icon: LucideStore,
    title: "E-commerce",
    description:
      "Helping you bootstrap and manage an online store that to sell your products to the right audience.",
  },
  {
    icon: FiFileText,
    title: "Copywriting",
    description:
      "Writing compelling content for your website, mobile app, or e-commerce store that will engage your audience.",
  },
];

function ServicesList() {
  return (
    <MaxWidthWrapper className="flex flex-col gap-12">
      <SectionTitle title="Services" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <Link key={i} href={"#"}>
            <motion.div
              className={cn(
                "group flex h-full flex-col gap-4 rounded-lg border-2 border-brand-100 p-8 text-brand-950 bg-brand-50/20 backdrop-blur-lg",
                TRANSITION_COLORS,
              )}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={cn(
                  "grid rounded-full p-6 shadow-sm bg-brand-50 w-max",
                )}
              >
                <service.icon className="h-10 w-auto" />
              </div>
              <Title title={service.title} size="h3" />
              <p className="text-start">{service.description}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}

export default ServicesList;
