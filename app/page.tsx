import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import TechnologySection from "../components/TechnologySection";
import HowItWorksSection from "../components/HowItWorksSection";
import UseCasesSection from "../components/UseCasesSection";
import TeamSection from "../components/TeamSection";
import TimelineSection from "../components/TimelineSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <TechnologySection />
        <HowItWorksSection />
        <UseCasesSection />
        <TeamSection />
        <TimelineSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
