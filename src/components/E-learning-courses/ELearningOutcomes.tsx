import React from "react";
import { CheckCircle2 } from "lucide-react";

interface Outcome {
  title: string;
  description: string;
}

interface ELearningOutcomesProps {
  title?: string;
  outcomes: Outcome[];
}

const ELearningOutcomes: React.FC<ELearningOutcomesProps> = ({ 
  title = "What you will learn:", 
  outcomes 
}) => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {outcomes.map((outcome, index) => (
          <div key={index} className="space-y-3 group">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">
                  {outcome.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {outcome.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELearningOutcomes;
