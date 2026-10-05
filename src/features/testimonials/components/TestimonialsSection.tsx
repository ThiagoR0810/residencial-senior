import { SectionHeading } from "@/shared/ui/SectionHeading";
import { useTranslations } from "next-intl";
import { TESTIMONIALS_DATA } from "../constants";
import { TestimonialCard } from "./TestimonialCard";

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section id="testimonials" className="py-24 bg-surface">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title={t("title")}
          subtitle={t("subtitle")}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <TestimonialCard
              key={testimonial.key}
              initials={testimonial.initials}
              name={t(`items.${testimonial.key}.name`)}
              relationship={t(`items.${testimonial.key}.relationship`)}
              content={t(`items.${testimonial.key}.content`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
