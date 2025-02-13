import Navbar from "@/components/molecules/navbar";
import React from "react";
import Footer from "@/components/molecules/footer";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    );
}

export default Layout;
