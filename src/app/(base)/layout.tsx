import Navbar from "@/components/molecules/navbar";
import React from "react";
import Footer from "@/components/molecules/footer";
import BGSplashText from "@/components/other/bg.splash.text";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <BGSplashText />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
