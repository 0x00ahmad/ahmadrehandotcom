import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";

function CalComButton() {
    return (
        <Link
            href={"https://cal.com/ahmad-rehan/a-quick-chat"}
            className="w-max"
        >
            <Button
                className="group flex w-max items-center gap-2 transition-transform"
                size={"lg"}
                variant={"muted"}
            >
                <span>Let&apos;s talk</span>
                <Calendar className="h-auto w-6 transition-transform group-hover:-rotate-12" />
            </Button>
        </Link>
    );
}

export default CalComButton;
