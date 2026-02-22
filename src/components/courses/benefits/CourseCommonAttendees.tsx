import React from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

interface CourseCommonAttendeesProps {
  courseName: string;
  attendees: string[];
  professionalImage?: string;
}

const CourseCommonAttendees: React.FC<CourseCommonAttendeesProps> = ({
  courseName,
  attendees,
  professionalImage = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
}) => {
  return (
    <div className="bg-[#f0f9ff] border border-blue-200 rounded-none p-10 mt-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[400px]">
      {/* Text Content */}
      <div className="relative z-10 space-y-8 flex-1">
        <div>
          <h4 className="text-[13px] text-slate-500 font-bold mb-2 uppercase tracking-wide">
            Common attendees
          </h4>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#001c3d] flex items-center gap-2">
            Who usually attend {courseName} Training <Sparkles className="w-7 h-7 text-blue-400 fill-blue-400" />
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-y-4">
          {attendees.map((attendee, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#2563eb] flex-shrink-0" />
              <span className="text-[17px] font-bold text-slate-900">{attendee}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Professional Image */}
      <div className="relative z-0 mt-8 md:mt-0 flex-shrink-0 w-full md:w-1/2 flex justify-end">
        <div className="relative w-full max-w-[400px]">
           <img 
            src={professionalImage} 
            alt="Common Attendees" 
            className="w-full h-auto object-contain transform translate-y-10"
          />
          {/* Subtle decoration/shield */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f0f9ff] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default CourseCommonAttendees;
