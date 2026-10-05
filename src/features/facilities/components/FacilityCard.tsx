interface FacilityCardProps {
  title: string;
  gradient: string;
  description: string;
  ariaLabel: string;
}

export function FacilityCard({ title, gradient, description, ariaLabel }: FacilityCardProps) {
  return (
    <div className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 focus-within:ring-4 focus-within:ring-focus">
      {/* Background Gradient (Image Placeholder) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-80 group-hover:scale-105 transition-transform duration-700`} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-foreground-inverse mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-foreground-on-dark text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {description}
        </p>
      </div>

      {/* Accessibility Link to make card focusable if needed, or just standard div */}
      <a href="#contact" className="absolute inset-0 focus-visible:outline-none" aria-label={ariaLabel}>
        <span className="sr-only">{title}</span>
      </a>
    </div>
  );
}
