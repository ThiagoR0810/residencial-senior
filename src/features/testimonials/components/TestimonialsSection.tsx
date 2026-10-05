import { SectionHeading } from "@/shared/ui/SectionHeading";
import { TESTIMONIALS_DATA } from "../constants";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="What Families Say" 
          subtitle="Don't just take our word for it. Read about the real experiences of those who have entrusted us with their loved ones."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
