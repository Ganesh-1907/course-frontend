import React from "react";
import { CheckCircle2 } from "lucide-react";

interface CoursePrerequisitesProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  prerequisites: string[];
}

const CoursePrerequisites: React.FC<CoursePrerequisitesProps> = ({
  courseName,
  title,
  subtitle,
  prerequisites
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-none p-8 md:p-10 shadow-sm space-y-8">
      <div>
        <h4 className="text-[13px] text-slate-500 font-bold mb-2 uppercase tracking-wide">
          {title || `Prerequisites for ${courseName} certification training`}
        </h4>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#001c3d]">
          {subtitle || `What are the Prerequisites Required for ${courseName} Training?`}
        </h2>
      </div>

      <ul className="space-y-6">
        {prerequisites.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#2563eb] mt-1 flex-shrink-0" />
            <p className="text-[17px] font-medium text-slate-700 leading-relaxed">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePrerequisites;
