import type { TestimonialItem } from "./types";

export const TESTIMONIALS_DATA: (Pick<TestimonialItem, "initials"> & { key: "maria" | "carlos" | "helena" })[] = [
  { key: "maria", initials: "MS" },
  { key: "carlos", initials: "CM" },
  { key: "helena", initials: "HC" },
];
