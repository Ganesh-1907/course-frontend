import React from "react";
import { Sparkles } from "lucide-react";

interface Step {
  title: string;
  description: string;
  color: string;
}

interface CourseStepByStepProcessProps {
  courseName: string;
  steps: Step[];
}

const CourseStepByStepProcess: React.FC<CourseStepByStepProcessProps> = ({
  courseName,
  steps
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-none p-8 md:p-10 shadow-sm mt-8 relative overflow-hidden">
      {/* Decorative Wave at bottom right */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C50 50 150 150 200 100V100H0V100Z" fill="#2563eb" />
        </svg>
      </div>

      <div className="relative z-10 space-y-10">
        <h2 className="text-xl md:text-2xl font-black text-[#001c3d] flex items-center gap-2 max-w-2xl leading-tight">
          The step by step process to get {courseName} certification as follow <Sparkles className="w-6 h-6 text-blue-400 fill-blue-400 flex-shrink-0" />
        </h2>

        {/* Visual Process Diagram (Simplified representation of the curved line with circles) */}
        <div className="relative py-12 hidden md:block">
           <div className="absolute top-1/2 left-0 w-full h-1 bg-orange-100 -translate-y-1/2 rounded-full" />
           <div className="relative flex justify-between items-center px-4">
             {steps.map((step, i) => (
               <div key={i} className="flex flex-col items-center gap-4 relative z-10">
                 <div className="w-32 h-32 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center p-4 text-center">
                    <span className="text-[10px] font-black uppercase text-slate-900 leading-tight">
                        {step.title}
                    </span>
                 </div>
                 {/* Decorative Line below circle */}
                 <div className="w-px h-8 bg-orange-200" />
                 {/* Small indicator dot/icon placeholder */}
                 <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                 </div>
               </div>
             ))}
           </div>
           {/* Decorative curved SVG line could be added here for higher accuracy */}
        </div>

        {/* Numbered Steps List */}
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span 
                className="text-5xl md:text-6xl font-black leading-none select-none"
                style={{ color: step.color }}
              >
                {i + 1}
              </span>
              <div className="space-y-1 pt-1">
                <h3 className="text-[17px] font-black text-[#1a1a1a]">
                  {step.title}:
                </h3>
                <p className="text-[15px] font-medium text-slate-600 leading-relaxed max-w-3xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseStepByStepProcess;
