import { HeroSection } from "@/features/hero";
import { AboutSection } from "@/features/about";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      
      <section id="services" className="min-h-screen flex items-center justify-center bg-offwhite">
        <h2 className="text-3xl font-bold">Services Section Placeholder</h2>
      </section>
      <section id="facilities" className="min-h-screen flex items-center justify-center bg-sky-50">
        <h2 className="text-3xl font-bold">Facilities Section Placeholder</h2>
      </section>
      <section id="testimonials" className="min-h-screen flex items-center justify-center bg-offwhite">
        <h2 className="text-3xl font-bold">Testimonials Section Placeholder</h2>
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-sky-50">
        <h2 className="text-3xl font-bold">Contact Section Placeholder</h2>
      </section>
    </>
  );
}
