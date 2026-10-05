import { SectionHeading } from "@/shared/ui/SectionHeading";
import { useTranslations } from "next-intl";
import { theme } from "@/shared/theme/theme";
import { FACILITIES_DATA } from "../constants";
import { FacilityCard } from "./FacilityCard";

export function FacilitiesSection() {
  const t = useTranslations("facilities");
  const accessibilityT = useTranslations("accessibility");

  return (
    <section id="facilities" className="py-24 bg-surface-accent">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading 
          title={t("title")}
          subtitle={t("subtitle")}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {FACILITIES_DATA.map((facility) => {
            const title = t(`items.${facility.key}.title`);

            return (
            <FacilityCard
              key={facility.key}
              gradient={theme.gradients[facility.gradientKey]}
              title={title}
              description={t(`items.${facility.key}.description`)}
              ariaLabel={accessibilityT("learnMoreAbout", { title })}
            />
            );
          })}
        </div>
      </div>
    </section>
  );
}
