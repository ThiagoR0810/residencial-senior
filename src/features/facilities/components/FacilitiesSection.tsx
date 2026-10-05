import { SectionHeading } from "@/shared/ui/SectionHeading";
import { FACILITIES_DATA } from "../constants";
import { FacilityCard } from "./FacilityCard";

export function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-sky-50">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title="World-Class Facilities" 
          subtitle="Designed with the perfect balance of medical safety, accessibility, and the comfort of home."
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {FACILITIES_DATA.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
