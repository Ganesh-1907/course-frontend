import React from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HighlightItem {
  icon: React.ReactNode;
  text: string;
}

interface CourseHighlightsProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  viewSchedulesText?: string;
  contactAdvisorText?: string;
  highlights: HighlightItem[];
}

const CourseHighlights: React.FC<CourseHighlightsProps> = ({ 
  courseName, 
  title,
  subtitle,
  viewSchedulesText = "View Schedules",
  contactAdvisorText = "Contact Advisor",
  highlights 
}) => {
  return (
    <div className="bg-gradient-to-br from-accent/50 to-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 mt-10 relative overflow-hidden shadow-sm">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-primary/40" />
          <h4 className="text-[12px] text-primary font-black uppercase tracking-[0.2em]">
            {title || `${courseName} Training Highlights`}
          </h4>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] mb-12 tracking-tight max-w-2xl leading-[1.1]">
          {subtitle || (
            <>
              <span className="text-primary text-4xl">Key Highlights</span> of the {courseName} Training Course
            </>
          )} 
          <Sparkles className="inline-block w-8 h-8 text-primary fill-primary mb-2 ml-1" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 border border-white hover:border-primary/20 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary shadow-lg shadow-primary/20 rounded-xl flex items-center justify-center text-white [&_svg]:text-white">
                {item.icon}
              </div>
              <p className="text-[15px] font-bold text-slate-700 leading-snug pt-1">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-5 pt-4">
          <Button className="bg-primary hover:bg-orange-700 text-white font-black px-10 py-7 text-[15px] rounded-xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
            {viewSchedulesText}
          </Button>
          <Button variant="ghost" className="text-[#001c3d] hover:bg-white/50 font-black px-10 py-7 text-[15px] rounded-xl border-2 border-slate-200 hover:border-primary transition-all">
            {contactAdvisorText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseHighlights;
