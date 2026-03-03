import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import LeftSidebar from "@/components/leftSidebar";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Desktop Layout */}
      <div className="flex">
        {/* LEFT SIDEBAR */}
        <div className=" hidden md:block md:w-80 lg:w-72 sticky top-0 h-screen border-r border-border">
          <LeftSidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 w-full">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ServicesSection />
          <PricingSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;
