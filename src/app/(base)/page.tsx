import HeroSection from "./hero-section";
import ServicesList from "./services-list";
import RecentWork from "./recent-work";
import CertificationsSection from "./certifications-section";
import EducationSection from "./education-section";
import TextRevealByWord from "@/components/other/text.reveal";
import MaxWidthWrapper from "@/components/other/max.width.wrapper";
import SkillsetSection from "./skillset-section";
import ContactSection from "./contact-section";

export default function Home() {
    return (
        <>
            <HeroSection />

            <div className="flex w-full flex-col gap-32">
                <MaxWidthWrapper>
                    <TextRevealByWord text="I’m a freelance software engineer & designer with a strong focus on producing awesome looking, easy-to-understand experiences." />
                </MaxWidthWrapper>
                <RecentWork />
                <ServicesList />
                <SkillsetSection />
                <CertificationsSection />
                <ContactSection />
            </div>
        </>
    );
}
