import { type LucideIcon } from "lucide-react";

export type ServiceKey = "care" | "nutrition" | "physiotherapy" | "recreation";

export interface ServiceItem {
  key: ServiceKey;
  icon: LucideIcon;
}
