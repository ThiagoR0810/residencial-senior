import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { ServicesSection } from "@/features/services";
import { FacilitiesSection } from "@/features/facilities";
import { TestimonialsSection } from "@/features/testimonials";
import { ContactSection } from "@/features/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
