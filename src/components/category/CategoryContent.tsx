import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, BookOpen, Clock } from "lucide-react";
import { CategoryData } from "@/data/categoryData";
import { cn } from "@/lib/utils";

interface CategoryContentProps {
  data: CategoryData;
}

const CategoryContent: React.FC<CategoryContentProps> = ({ data }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          
          {/* Detailed Content */}
          {data.details.map((detail, i) => (
            <div key={i} className="mb-20">
              <h2 className="text-2xl md:text-3xl font-black text-[#1e293b] mb-8 uppercase tracking-tight flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                {detail.title}
              </h2>
              <div className="prose prose-slate max-w-none prose-p:text-slate-600 prose-p:font-medium prose-p:leading-relaxed prose-p:text-lg">
                <p>{detail.content}</p>
              </div>
            </div>
          ))}

          {/* Training Stats/Info */}
          <div className="grid sm:grid-cols-2 gap-8 mb-20">
             <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
               <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-6">
                 <Clock className="w-6 h-6 text-orange-600" />
               </div>
               <h3 className="text-xl font-black text-[#1e293b] mb-3 uppercase tracking-tight">Flexible Schedules</h3>
               <p className="text-slate-500 font-medium">Choose from weekend workshops or weekday intensives. We offer multiple time slots across global timezones (EST, GMT, IST).</p>
             </div>
             <div className="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
               <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                 <HelpCircle className="w-6 h-6 text-blue-600" />
               </div>
               <h3 className="text-xl font-black text-[#1e293b] mb-3 uppercase tracking-tight">1-on-1 Mentorship</h3>
               <p className="text-slate-500 font-medium">Get direct access to our certified instructors for career guidance and exam preparation support even after course completion.</p>
             </div>
          </div>

          {/* FAQs */}
          {data.faqs.length > 0 && (
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-[#1e293b] mb-12 uppercase tracking-tight text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {data.faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-blue-200 transition-colors"
                  >
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left px-8 py-6 flex items-center justify-between group"
                    >
                      <span className="font-bold text-[#1e293b] text-base group-hover:text-blue-600 transition-colors">{faq.question}</span>
                      <ChevronDown className={cn("w-5 h-5 text-slate-400 transition-all", openFaq === i && "rotate-180 text-blue-600 scale-110")} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-8 pb-8"
                        >
                          <div className="pt-2 border-t border-slate-100">
                             <p className="text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default CategoryContent;
