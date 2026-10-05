import { SectionHeading } from "@/shared/ui/SectionHeading";
import { SERVICES_DATA } from "../constants";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-offwhite">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="Comprehensive Care Services" 
          subtitle="We provide a holistic approach to senior care, ensuring every aspect of health and well-being is expertly managed."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
