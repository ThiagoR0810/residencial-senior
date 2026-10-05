import { Quote } from "lucide-react";
import type { TestimonialItem } from "../types";

export function TestimonialCard({ name, relationship, content, initials }: TestimonialItem) {
  return (
    <div className="bg-surface-accent p-8 rounded-2xl border border-border-accent relative shadow-sm">
      <Quote className="absolute top-6 right-8 h-10 w-10 text-accent-muted" />
      
      <p className="text-foreground-muted/80 italic leading-relaxed mb-8 relative z-10 text-lg">
        &ldquo;{content}&rdquo;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent-strong flex items-center justify-center text-foreground-inverse font-bold shadow-sm">
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{name}</h4>
          <span className="text-sm text-foreground-muted/60">{relationship}</span>
        </div>
      </div>
    </div>
  );
}
