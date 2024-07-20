import { cn } from "@/lib/utils";
import Image from "next/image";
import HeroSection from "./hero-section";
import ProgressStats from "./progress-stats";
import ServicesList from "./services-list";
import HowIDeliverResults from "./how-i-deliver-results";
import RecentWork from "./recent-work";
import WhyWorkWithMe from "./why-work-with-me";
import EducationAndExperience from "./education-and-experience";

export default function Home() {
  const vectors = [
    {
      link: "/assets/triangle.svg",
      className: "w-12 h-auto absolute right-64 top-32",
    },
    {
      link: "/assets/circle.svg",
      className: "w-12 h-auto absolute left-32 top-1/4",
    },
    {
      link: "/assets/webdev.svg",
      className: "w-auto h-12 absolute left-1/4 top-40",
    },
    {
      link: "/assets/mobdev.svg",
      className: "w-auto h-12 absolute left-1/4 bottom-1/4",
    },
    {
      link: "/assets/copywriting.svg",
      className: "w-auto h-12 absolute right-1/3 top-48",
    },
    {
      link: "/assets/andmuchmore.svg",
      className: "w-auto h-12 absolute right-1/4 bottom-32",
    },
  ];

  return (
    <>
      <Image
        src={"/assets/horizontal-line.svg"}
        alt=""
        width={0}
        height={0}
        sizes="100%"
        className={"w-screen h-auto z-[-1] absolute top-1/2"}
      />

      {vectors.map((v, i) => (
        <Image
          key={i}
          src={v.link}
          alt=""
          width={0}
          height={0}
          sizes="100%"
          className={cn("hidden lg:block", v.className)}
        />
      ))}

      <HeroSection />
      <div className="flex flex-col gap-32 w-full">
        <ProgressStats />
        <ServicesList />
        <HowIDeliverResults />
        <RecentWork />
        <WhyWorkWithMe />
        <EducationAndExperience />
      </div>
    </>
  );
}
