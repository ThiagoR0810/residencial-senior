import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";
import { ServicesSection } from "@/features/services";
import { FacilitiesSection } from "@/features/facilities";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FacilitiesSection />
      
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-offwhite">
        <h2 className="text-3xl font-bold">Testimonials Section Placeholder</h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-sky-50">
        <h2 className="text-3xl font-bold">Contact Section Placeholder</h2>
      </section>
    </>
  );
}
