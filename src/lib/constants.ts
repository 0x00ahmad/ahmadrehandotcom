import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";

export const TRANSITION_COLORS = "transition-colors duration-150";

export const defaultSender = "ar.com@derivativeui.com";

export const CONTACT_EMAIL = "contact@ahmadrehan.com";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#services", label: "Services" },
    { href: "/#resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
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
