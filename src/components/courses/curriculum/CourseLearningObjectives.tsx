import React from "react";
import { CheckCircle2 } from "lucide-react";

interface Objective {
  title: string;
  description: string;
}

interface CourseLearningObjectivesProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  objectives: Objective[];
}

const CourseLearningObjectives: React.FC<CourseLearningObjectivesProps> = ({
  courseName,
  title,
  subtitle,
  objectives
}) => {
  return (
    <div className="bg-[#f0f9ff] border border-blue-100 rounded-none p-8 md:p-10 mt-10 relative overflow-hidden">
      {/* Decorative Wave at bottom right */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100C50 50 150 150 200 100V100H0V100Z" fill="#2563eb" />
        </svg>
      </div>

      <div className="relative z-10 space-y-8">
        <div>
          <h4 className="text-[13px] text-slate-500 font-bold mb-2 uppercase tracking-wide">
            {title || `What you will learn in this ${courseName} workshop`}
          </h4>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#001c3d]">
            {subtitle || `What are the Learning Objectives of the ${courseName} Course?`}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {objectives.map((obj, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2563eb] mt-1 flex-shrink-0" />
                <h3 className="text-[17px] font-black text-[#1a1a1a]">
                  {obj.title}:
                </h3>
              </div>
              <p className="text-[15px] font-medium text-slate-600 leading-relaxed pl-8">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseLearningObjectives;
