import Navbar from "@/components/molecules/navbar";
import React from "react";
import Image from "next/image";
import Footer from "@/components/molecules/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="absolute top-0 right-0 z-[-1] w-full overflow-y-hidden grid place-items-center">
        <Image
          src={"/assets/bg-splash.svg"}
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className={"w-80 lg:w-96"}
        />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
