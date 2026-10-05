import { SectionHeading } from "@/shared/ui/SectionHeading";
import { useTranslations } from "next-intl";
import { SERVICES_DATA } from "../constants";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="py-24 bg-surface-muted">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title={t("title")}
          subtitle={t("subtitle")}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {SERVICES_DATA.map((service) => (
            <ServiceCard
              key={service.key}
              icon={service.icon}
              title={t(`items.${service.key}.title`)}
              description={t(`items.${service.key}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
