import { Clock, UtensilsCrossed, Activity, Palette } from "lucide-react";
import type { ServiceItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    icon: Clock,
    title: "24/7 Care Assistance",
    description: "Round-the-clock professional nursing and medical support, ensuring peace of mind at all times.",
  },
  {
    icon: UtensilsCrossed,
    title: "Specialized Nutrition",
    description: "Personalized meal plans created by certified nutritionists, respecting individual dietary needs.",
  },
  {
    icon: Activity,
    title: "Physiotherapy",
    description: "Rehabilitation and mobility programs with expert therapists in our fully equipped center.",
  },
  {
    icon: Palette,
    title: "Recreational Activities",
    description: "Art, music, gardening, and social programs that enrich daily life and cognitive health.",
  },
];
