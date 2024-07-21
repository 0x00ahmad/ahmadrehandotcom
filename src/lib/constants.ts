import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";

export const TRANSITION_COLORS = "transition-colors duration-150";

export const BULLET_LIST_STYLE = "list-disc pl-4 gap-2 flex flex-col py-2";

export const defaultSender = "ar.com@derivativeui.com";

export const CONTACT_EMAIL = "contact@ahmadrehan.com";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/#resume", label: "Resume" },
    { href: "/contact", label: "Contact" },
];

export const socials = [
    {
        icon: BsTwitterX,
        name: "Twitter",
        href: "https://twitter.com/0x00ahmad",
    },
    {
        name: "GitHub",
        icon: LuGithub,
        href: "https://github.com/0x00ahmad",
    },
    {
        icon: BsLinkedin,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/mahmadrehan",
    },
];
