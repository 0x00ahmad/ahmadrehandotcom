import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "M. Ahmad Rehan",
    description:
        "Software Engineer, Solutions designer who loves solving problems",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <body
                className={cn(
                    outfit.className,
                    "max-w-screen overflow-x-hidden",
                )}
            >
                {children}
            </body>
        </html>
    );
}
