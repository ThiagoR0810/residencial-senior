import type { ServiceItem } from "../types";

interface ServiceCardProps extends ServiceItem {
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
        <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-navy-800 mb-4">{title}</h3>
      <p className="text-navy-700/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
