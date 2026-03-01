import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  items: FAQItem[];
}

interface CourseFAQsProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  description?: string;
  footerTitle?: string;
  footerDescription?: string;
  footerButtonText?: string;
  categories: FAQCategory[];
}

const CourseFAQs: React.FC<CourseFAQsProps> = ({
  courseName,
  title = "Learning Resource",
  subtitle = "Frequently Asked Questions",
  description = ``,
  footerTitle = "Still have questions?",
  footerDescription = "Our team of experts is ready to help you plan your career path.",
  footerButtonText = "Speak to an Expert",
  categories
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <div className="space-y-10 py-10">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <HelpCircle className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">{title}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] tracking-tight">
          {subtitle.split("Questions")[0]}<span className="text-blue-600">Questions</span>{subtitle.split("Questions")[1]}
        </h2>
        <p className="text-slate-500 font-medium text-[15px] max-w-2xl">
          {description}
        </p>
      </div>

      {/* Mini Tabs - Modern Segment Control */}
      <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 w-fit">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-6 py-3 text-[13px] font-black transition-all rounded-xl relative",
              activeCategory === category.id
                ? "text-blue-600"
                : "text-slate-500 hover:text-slate-700"
            )}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="active-faq-tab"
                className="absolute inset-0 bg-white shadow-md shadow-blue-500/5 rounded-xl z-0"
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>

      {/* Accordion List with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {currentCategory.items.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-slate-100 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline text-left group [&[data-state=open]]:bg-slate-50/50">
                  <div className="flex items-center gap-4">
                    <MessageCircleQuestion className="w-5 h-5 text-blue-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[16px] font-black text-slate-800 leading-tight">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 pt-2">
                  <div className="pl-9 border-l-2 border-blue-100/50 ml-2.5">
                    <p className="text-[15px] font-bold text-slate-600 leading-relaxed italic">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </AnimatePresence>

      {/* Contact Section */}
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <h3 className="text-2xl font-black text-white">{footerTitle}</h3>
            <p className="text-blue-100 font-medium text-[15px]">{footerDescription}</p>
          </div>
          <button className="bg-white text-blue-600 font-black px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 whitespace-nowrap">
            {footerButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseFAQs;
