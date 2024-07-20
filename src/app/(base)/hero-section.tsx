import React from "react";
import BackgroundGrid from "@/components/other/background.grid";
import HeroTitle from "@/components/other/hero.title";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <MaxWidthWrapper className="py-40 w-screen min-h-screen relative grid grid-cols-1 md:grid-cols-2 md:place-items-center gap-8">
      <BackgroundGrid className="z-[-10]" />

      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <div className="flex items-start  gap-2 flex-col">
            <Image
              src={"/assets/signature.svg"}
              alt=""
              width={0}
              height={0}
              sizes="100%"
              className={"w-auto h-8"}
            />
            <p className="text-lg font-medium text-brand-900 tracking-wider">
              Malik Ahmad, Rehan
            </p>
          </div>
          <HeroTitle />
          <p className="md:text-lg xl:text-xl tracking-wide font-medium text-brand-950">
            Using my background in software engineering and combining that with
            other skills I focus on delivering efficient solutions to complex
            problems.
          </p>
        </div>

        <div className="flex items-center gap-2 flex-col sm:flex-row">
          <Button className="w-full sm:w-max" size={"lg"}>
            Checkout my work
          </Button>
          <Button className="w-full sm:w-max" size={"lg"} variant={"muted"}>
            More about me
          </Button>
        </div>
      </div>

      <div className="w-full h-max z-[-1]">
        <Image
          src={"/images/image.png"}
          alt="image"
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto"
        />
      </div>
    </MaxWidthWrapper>
  );
}

export default HeroSection;
