import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface ELearningFAQsProps {
  faqs: FAQ[];
}

const ELearningFAQs: React.FC<ELearningFAQsProps> = ({ faqs }) => {
  return (
    <div className="py-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`faq-${index}`}
            className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm px-2"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline text-left group">
              <span className="text-[15px] font-bold text-slate-900 group-hover:text-primary transition-colors">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 text-slate-600 font-medium leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="mt-8 text-center">
        <button className="inline-flex items-center gap-2 text-slate-500 font-bold text-sm hover:text-primary transition-colors group">
          View more <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ELearningFAQs;
