import { CgWebsite } from "react-icons/cg";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FiFileText } from "react-icons/fi";
import { LucideStore, Server } from "lucide-react";
import { BsInfinity } from "react-icons/bs";

export type Service = (typeof services)[number];

export const services = [
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
        icon: Server,
        title: "Server Management",
        description:
            "Managing your servers and ensuring they are up and running 24/7 to provide a seamless experience for your users.",
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
    {
        icon: BsInfinity,
        title: "DevOps",
        description:
            "Stepping in and streamlining your development and operations processes to enhance efficiency and accelerate deployment.",
    },
];
