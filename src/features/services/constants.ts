import { Clock, UtensilsCrossed, Activity, Palette } from "lucide-react";
import type { ServiceItem } from "./types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    key: "care",
    icon: Clock,
  },
  {
    key: "nutrition",
    icon: UtensilsCrossed,
  },
  {
    key: "physiotherapy",
    icon: Activity,
  },
  {
    key: "recreation",
    icon: Palette,
  },
];
