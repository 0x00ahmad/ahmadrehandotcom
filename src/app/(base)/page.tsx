import HeroSection from "./hero-section";
import ServicesList from "./services-list";
import RecentWork from "./recent-work";
import CertificationsSection from "./certifications-section";
import SkillsetSection from "./skillset-section";
import ContactSection from "./contact-section";
import AboutMeSection from "./about-me";

export default function Home() {
    return (
        <>
            <HeroSection />

            <div className="flex w-full flex-col gap-32">
                <AboutMeSection />
                <RecentWork />
                <ServicesList />
                <SkillsetSection />
                <CertificationsSection />
                <ContactSection />
            </div>
        </>
    );
}
