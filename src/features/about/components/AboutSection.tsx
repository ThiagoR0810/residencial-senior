"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionHeading } from "@/shared/ui/SectionHeading";
import { ABOUT_VALUES } from "../constants";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title={t("title")}
              subtitle={t("subtitle")}
            />
            
            <div className="text-navy-700/80 space-y-6 text-lg leading-relaxed mb-10">
              <p>
                {t("mission")}
              </p>
              <p>
                {t("team")}
              </p>
            </div>
            
            <a 
              href="#facilities" 
              className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1"
            >
              {t("discoverFacilities")}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {ABOUT_VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div 
                  key={value.key}
                  className="bg-sky-50 rounded-2xl p-6 border border-sky-100 hover:border-sky-200 transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-800 mb-3">{t(`values.${value.key}.title`)}</h3>
                  <p className="text-navy-700/70 leading-relaxed text-sm">
                    {t(`values.${value.key}.description`)}
                  </p>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
