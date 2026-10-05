import { Quote } from "lucide-react";
import type { TestimonialItem } from "../types";

export function TestimonialCard({ name, relationship, content, initials }: TestimonialItem) {
  return (
    <div className="bg-sky-50 p-8 rounded-2xl border border-sky-100 relative shadow-sm">
      <Quote className="absolute top-6 right-8 h-10 w-10 text-sky-200" />
      
      <p className="text-navy-700/80 italic leading-relaxed mb-8 relative z-10 text-lg">
        &ldquo;{content}&rdquo;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold shadow-sm">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-navy-800">{name}</h4>
          <span className="text-sm text-navy-700/60">{relationship}</span>
        </div>
      </div>
    </div>
  );
}
