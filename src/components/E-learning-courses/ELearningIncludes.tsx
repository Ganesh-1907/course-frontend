import React from "react";
import { Play, Download, Monitor, Clock, FileText, Award, Smartphone } from "lucide-react";

interface Inclusion {
  icon?: React.ElementType;
  text: string;
  image?: string;
}

interface ELearningIncludesProps {
  inclusions: Inclusion[];
}

const ELearningIncludes: React.FC<ELearningIncludesProps> = ({ inclusions }) => {
  return (
    <div className="py-6 md:py-8">
      <h2 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">This Course includes:</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-y-8">
        {inclusions.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-2 group">
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-orange-100 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              {item.image ? (
                <img src={item.image} alt={item.text} className="w-12 h-12 md:w-14 md:h-14 object-contain z-10 transition-transform duration-300 group-hover:scale-110" />
              ) : (
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center z-10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
              )}
            </div>
            <p className="text-sm font-bold text-slate-800 leading-tight max-w-[140px]">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELearningIncludes;
