"use client";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/shared/config/siteConfig";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image Placeholder (Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-blue-900 z-0">
        {/* Abstract pattern placeholder */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-300 via-transparent to-transparent"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-400 via-transparent to-transparent"></div>
      </div>

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-navy-900/40 backdrop-blur-[2px] z-10"></div>

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-8 text-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            {SITE_CONFIG.tagline}
          </h1>
          <p className="text-lg md:text-2xl text-sky-50 font-medium mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {SITE_CONFIG.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-blue-500/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
            >
              Schedule a Visit
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/50"
            >
              Explore Our Services
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
        <a href="#about" aria-label="Scroll down to About section" className="flex flex-col items-center text-white/70 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded p-2">
          <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
          <div className="w-0.5 h-12 bg-white/30 overflow-hidden relative">
            <motion.div 
              animate={{ y: [0, 48] }} 
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 w-full h-1/2 bg-white"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
