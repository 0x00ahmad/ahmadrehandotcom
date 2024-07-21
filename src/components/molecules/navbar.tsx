"use client";

import { navLinks } from "@/lib/constants";
import Logo from "@/components/atoms/logo";
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import MaxWidthWrapper from "../other/max.width.wrapper";
import Link from "next/link";

function Navbar() {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <div className="fixed top-0 z-30 w-screen">
                <nav className="w-full p-2 sm:p-4">
                    <MaxWidthWrapper className="flex max-w-5xl items-center justify-between rounded-lg border-2 border-brand-200 bg-brand-50/80 py-4 drop-shadow-sm backdrop-blur-sm">
                        <Logo />

                        <ul className="hidden w-full items-center justify-center gap-8 lg:flex">
                            {navLinks.map((nl, i) => (
                                <li key={i} className="text-brand-900">
                                    <a href={nl.href}>{nl.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="hidden items-center gap-2 lg:flex">
                            <Link href={"/contact"} className="w-max">
                                <Button>Work with me</Button>
                            </Link>
                        </div>
                        <Button
                            className="flex items-center gap-2 lg:hidden"
                            onClick={() => setOpen(true)}
                            variant={"ghost"}
                        >
                            Menu
                            <Menu className="h-6 w-6" />
                        </Button>
                    </MaxWidthWrapper>
                </nav>
            </div>

            <Sheet open={open} onOpenChange={(o) => setOpen(o)}>
                <SheetContent
                    side={"bottom"}
                    className="flex flex-col gap-12 pt-24"
                >
                    <ul className="flex flex-col gap-8">
                        {navLinks.map((nl, i) => (
                            <li key={i}>
                                <a href={nl.href}>
                                    <Button
                                        variant={"ghost"}
                                        className="w-full items-start justify-start text-start"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        {nl.label}
                                    </Button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </SheetContent>
            </Sheet>
        </>
    );
}

export default Navbar;
