"use client";

import { navLinks } from "@/lib/constants";
import Logo from "@/components/atoms/logo";
import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import MaxWidthWrapper from "../other/max.width.wrapper";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="fixed top-0 z-30 w-screen">
        <nav className="w-full p-2 sm:p-4">
          <MaxWidthWrapper className="bg-brand-50/80 border-2 border-brand-200 rounded-lg backdrop-blur-sm drop-shadow-sm flex items-center justify-between py-4 max-w-5xl">
            <Logo />

            <ul className="hidden items-center gap-8 lg:flex w-full justify-center">
              {navLinks.map((nl, i) => (
                <li key={i} className="text-brand-900">
                  <a href={nl.href}>{nl.label}</a>
                </li>
              ))}
            </ul>
            <div className="hidden items-center gap-2 lg:flex">
              <Button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Work with me
              </Button>
            </div>
            <Button
              className="lg:hidden flex items-center gap-2"
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
        <SheetContent side={"bottom"} className="flex flex-col gap-12 pt-24">
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
