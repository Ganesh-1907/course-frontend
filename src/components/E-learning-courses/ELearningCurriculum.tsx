import React from "react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { ChevronRight, PlayCircle, Lock } from "lucide-react";

interface Module {
  title: string;
  duration: string;
  lectures: {
    title: string;
    duration?: string;
    isPreview?: boolean;
  }[];
}

interface ELearningCurriculumProps {
  modules: Module[];
}

const ELearningCurriculum: React.FC<ELearningCurriculumProps> = ({ modules }) => {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Course Content</h2>
          <p className="text-sm text-slate-500 font-medium mt-1">
            {modules.length} modules • {modules.reduce((acc, m) => acc + m.lectures.length, 0)} lectures
          </p>
        </div>
        <button className="text-primary font-bold text-sm hover:underline">Expand all sections</button>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {modules.map((module, idx) => (
          <AccordionItem 
            key={idx} 
            value={`module-${idx}`}
            className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline bg-slate-50/50 hover:bg-slate-50 transition-colors">
              <div className="flex flex-col items-start gap-1 text-left">
                <span className="text-[15px] font-bold text-slate-900">{module.title}</span>
                <span className="text-[12px] text-slate-500 font-medium">{module.duration}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="bg-white px-0 pb-0">
              <div className="divide-y divide-slate-100">
                {module.lectures.map((lecture, lIdx) => (
                  <div key={lIdx} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/50 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      {lecture.isPreview ? (
                         <PlayCircle className="w-4 h-4 text-primary" />
                      ) : (
                         <Lock className="w-4 h-4 text-slate-300" />
                      )}
                      <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                        {lecture.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      {lecture.isPreview && (
                        <span className="text-[12px] font-bold text-primary underline decoration-primary/30 underline-offset-4">
                          Preview
                        </span>
                      )}
                      <span className="text-[12px] font-medium text-slate-400">
                        {lecture.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ELearningCurriculum;
