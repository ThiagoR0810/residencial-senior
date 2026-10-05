"use client";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { NAVIGATION_LINKS } from "@/shared/config/navigationLinks";
import { useScrollPosition } from "../hooks/useScrollPosition";

export function Navbar() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrollPosition(20);
  const navigationTextClass = isScrolled
    ? "text-foreground-muted hover:text-primary focus-visible:ring-primary"
    : "text-foreground-inverse hover:text-foreground-on-dark focus-visible:ring-foreground-inverse";
  const logoTextClass = isScrolled ? "text-foreground hover:text-primary" : "text-foreground-inverse hover:text-foreground-on-dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-surface/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between" role="navigation" aria-label={t("navigation.mainNavigation")}>
          {/* Logo */}
          <a href="#home" className={`flex items-center gap-2 ${logoTextClass} transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded`}>
            <Heart className="h-6 w-6 text-primary fill-primary" />
            <span className="font-bold text-xl tracking-tight">{t("site.name")}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium ${navigationTextClass} transition-colors focus-visible:outline-none focus-visible:ring-2 rounded px-2 py-1`}
                  >
                    {t(`navigation.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-foreground-inverse px-5 py-2.5 rounded-full text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {t("navigation.scheduleVisit")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground focus-visible:ring-primary" : "text-foreground-inverse focus-visible:ring-foreground-inverse"} p-2 focus-visible:outline-none focus-visible:ring-2 rounded`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t("navigation.closeMenu") : t("navigation.openMenu")}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface shadow-lg border-t border-border py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:bg-surface-accent hover:text-primary rounded-lg transition-colors"
                >
                  {t(`navigation.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary hover:bg-primary-hover text-foreground-inverse px-4 py-3 rounded-lg text-center font-semibold transition-colors mt-2"
          >
            {t("navigation.scheduleVisit")}
          </a>
        </div>
      )}
    </header>
  );
}
