import React from "react";
import { ChevronDown, FileDown, BookCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface CurriculumModule {
  title: string;
  topics: string[];
}

interface CourseCurriculumProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  description?: string;
  downloadText?: string;
  modules: CurriculumModule[];
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({
  courseName,
  title = "Comprehensive Learning",
  subtitle = "Training Curriculum & Syllabus",
  description = "A meticulously structured roadmap designed to take you from foundational concepts to advanced practical mastery.",
  downloadText = "Download Syllabus",
  modules
}) => {
  return (
    <div className="space-y-10 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-slate-100 pb-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-50 rounded-lg">
              <BookCheck className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">{title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
            {subtitle.split("Curriculum")[0]}<span className="text-blue-600">Curriculum</span>{subtitle.split("Curriculum")[1]}
          </h2>
          <p className="text-slate-500 font-medium text-[15px] max-w-xl">
            {description}
          </p>
        </div>
        <Button 
          variant="outline" 
          className="h-14 border-blue-600 text-blue-600 hover:bg-blue-50 font-black rounded-xl px-8 gap-3 shadow-sm hover:shadow-md transition-all active:scale-95"
        >
          <FileDown className="w-5 h-5" />
          {downloadText}
        </Button>
      </div>

      {/* Accordion List */}
      <Accordion type="single" collapsible className="space-y-4">
        {modules.map((module, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <AccordionItem 
              value={`item-${i}`}
              className="border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <AccordionTrigger className="px-8 py-6 hover:no-underline group [&[data-state=open]]:bg-slate-50/50">
                <div className="flex items-center gap-5">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-black text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[17px] font-black text-slate-800 text-left group-hover:text-blue-600 transition-colors">
                    {module.title}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8 pt-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-4 border-t border-slate-50">
                  {module.topics.map((topic, j) => (
                    <div key={j} className="flex items-start gap-4 group/item">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <ChevronDown className="w-3 h-3 -rotate-90" />
                      </div>
                      <span className="text-[15px] font-bold text-slate-600 leading-snug group-hover/item:text-slate-900 transition-colors">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseCurriculum;
