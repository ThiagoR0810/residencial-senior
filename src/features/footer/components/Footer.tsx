import { Heart } from "lucide-react";
import { SITE_CONFIG } from "@/shared/config/siteConfig";
import { NAVIGATION_LINKS } from "@/shared/config/navigationLinks";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-sky-100 py-16" role="contentinfo">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <a href="#home" className="flex items-center gap-2 text-white mb-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded inline-flex">
              <Heart className="h-6 w-6 text-blue-500 fill-blue-500" />
              <span className="font-bold text-xl tracking-tight">{SITE_CONFIG.name}</span>
            </a>
            <p className="text-sky-100/80 leading-relaxed mb-6">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sky-100/80 hover:text-sky-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded px-1 py-0.5 -ml-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (Hardcoded for Footer summary) */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sky-100/80">24/7 Care Assistance</li>
              <li className="text-sky-100/80">Specialized Nutrition</li>
              <li className="text-sky-100/80">Physiotherapy</li>
              <li className="text-sky-100/80">Recreational Activities</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="text-sky-100/80">
                <span className="block font-medium text-white mb-1">Address:</span>
                {SITE_CONFIG.address}
              </li>
              <li className="text-sky-100/80">
                <span className="block font-medium text-white mb-1">Phone:</span>
                {SITE_CONFIG.phone}
              </li>
              <li className="text-sky-100/80">
                <span className="block font-medium text-white mb-1">Email:</span>
                {SITE_CONFIG.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sky-100/60">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-sky-100/60">
            {SITE_CONFIG.workingHours}
          </p>
        </div>
      </div>
    </footer>
  );
}
