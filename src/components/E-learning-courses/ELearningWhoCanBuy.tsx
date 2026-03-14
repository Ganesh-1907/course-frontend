import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ELearningWhoCanBuyProps {
  title?: string;
  specificRoles: string[];
}

const ELearningWhoCanBuy: React.FC<ELearningWhoCanBuyProps> = ({
  title = "Who Can Buy this Course:",
  specificRoles
}) => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
        {specificRoles.map((audience, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <CheckCircle2 className="w-5 h-5 text-primary fill-primary/10 transition-transform group-hover:scale-110" />
            <span className="text-[15px] font-bold text-slate-800 tracking-tight">
              {audience}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELearningWhoCanBuy;
