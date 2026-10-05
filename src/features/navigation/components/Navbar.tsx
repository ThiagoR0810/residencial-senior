"use client";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { NAVIGATION_LINKS } from "@/shared/config/navigationLinks";
import { SITE_CONFIG } from "@/shared/config/siteConfig";
import { useScrollPosition } from "../hooks/useScrollPosition";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollPosition(20);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-navy-800 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded">
            <Heart className="h-6 w-6 text-blue-600 fill-blue-600" />
            <span className="font-bold text-xl tracking-tight">{SITE_CONFIG.name}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-navy-700 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-2 py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Schedule a Visit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-navy-800 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-navy-800 hover:bg-sky-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors mt-2"
          >
            Schedule a Visit
          </a>
        </div>
      )}
    </header>
  );
}
