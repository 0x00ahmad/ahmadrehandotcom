import Image from "next/image";
import HeroSection from "./hero-section";
import ProgressStats from "./progress-stats";
import ServicesList from "./services-list";
import HowIDeliverResults from "./how-i-deliver-results";
import RecentWork from "./recent-work";
import WhyWorkWithMe from "./why-work-with-me";
import CertificationsSection from "./certifications-section";
import EducationSection from "./education-section";
import ExperienceSection from "./experience-section";
import LandingGlyphs from "./landing.glyphs";

export default function Home() {
    return (
        <>
            <Image
                src={"/assets/horizontal-line.svg"}
                alt=""
                width={0}
                height={0}
                sizes="100%"
                className={"absolute top-1/2 z-[-1] h-auto w-screen"}
            />

            <LandingGlyphs />

            <HeroSection />
            <div className="flex w-full flex-col gap-32">
                <ProgressStats />
                <ServicesList />
                <HowIDeliverResults />
                <RecentWork />
                <WhyWorkWithMe />
                <CertificationsSection />
                <EducationSection />
                <ExperienceSection />
            </div>
        </>
    );
}
