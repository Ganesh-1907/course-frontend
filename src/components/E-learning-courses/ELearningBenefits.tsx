import React from "react";
import { CheckCircle } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
}

interface ELearningBenefitsProps {
  benefits: Benefit[];
}

const ELearningBenefits: React.FC<ELearningBenefitsProps> = ({ benefits }) => {
  return (
    <div className="bg-[#f8fafc] border border-slate-100 rounded-[2rem] p-8 md:p-12 my-12">
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10">
        Benefits of the E-Learning
      </h2>
      <div className="space-y-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-4 group">
            <div className="mt-1 flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-primary fill-primary/10 transition-transform group-hover:scale-110" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELearningBenefits;
