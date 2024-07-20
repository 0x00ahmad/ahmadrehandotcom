import React from "react";
import MaxWidthWrapper from "../other/max.width.wrapper";
import Logo from "../atoms/logo";
import { navLinks } from "@/lib/constants";
import { Button } from "../ui/button";
import { GoArrowUpRight } from "react-icons/go";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

const socials = [
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

function Footer() {
  return (
    <MaxWidthWrapper>
      <footer className="w-full py-16 gap-12 flex flex-col items-center">
        <div className="w-full h-0.5 bg-neutral-300"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-between items-center w-full">
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-semibold md:text-5xl xl:text-6xl text-brand-950">
              Let's work together
            </h2>
            <Button
              className="w-max flex items-center gap-2 transition-transform group"
              size={"lg"}
              variant={"muted"}
            >
              <span>GET IN TOUCH</span>
              <GoArrowUpRight className="w-6 h-auto group-hover:rotate-45 transition-transform" />
            </Button>
          </div>

          <div className="w-full grid md:place-items-end">
            <div className="flex flex-col gap-8">
              {socials.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="flex items-center gap-2 text-brand-950"
                >
                  <social.icon className="w-6 h-auto" />
                  <span>{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row justify-between md:items-center w-full pt-20">
          <Logo full={true} />
          <div className="flex flex-col gap-8 md:flex-row">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="w-full text-neutral-400 hover:text-brand-950"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full items-center">
          <div className="w-full h-0.5 bg-neutral-300"></div>
          <span className="text-neutral-400">
            © Copyright 2024 | Ahmad Rehan | All rights reserved.
          </span>
        </div>
      </footer>
    </MaxWidthWrapper>
  );
}

export default Footer;
