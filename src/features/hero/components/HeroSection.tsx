"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Placeholder (Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark to-primary-hover z-0">
        {/* Abstract pattern placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-accent-strong via-transparent to-transparent"></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-[2px] z-10"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground-inverse tracking-tight mb-6 leading-tight">
            {t("site.tagline")}
          </h1>
          <p className="text-lg md:text-2xl text-foreground-on-dark font-medium mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {t("site.description")}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-foreground-inverse px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus"
            >
              {t("hero.scheduleVisit")}
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-foreground-inverse/10 hover:bg-foreground-inverse/20 backdrop-blur-md text-foreground-inverse border border-foreground-inverse/30 px-8 py-4 rounded-full text-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-foreground-inverse/50"
            >
              {t("hero.exploreServices")}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <a href="#about" aria-label={t("accessibility.scrollToAbout")} className="flex flex-col items-center text-foreground-inverse/70 hover:text-foreground-inverse transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground-inverse rounded p-2">
          <span className="text-sm tracking-widest uppercase mb-2">{t("accessibility.scroll")}</span>
          <div className="w-0.5 h-12 bg-foreground-inverse/30 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-foreground-inverse"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
