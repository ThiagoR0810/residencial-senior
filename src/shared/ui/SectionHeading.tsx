interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-navy-800 tracking-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-navy-700/80 max-w-3xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1.5 w-20 bg-blue-500 rounded-full mt-6 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
