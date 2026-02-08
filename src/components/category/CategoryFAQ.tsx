import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { CategoryData } from "@/data/categoryData";
import { cn } from "@/lib/utils";

interface CategoryFAQProps {
  data: CategoryData;
}

const CategoryFAQ: React.FC<CategoryFAQProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const faqs = data?.faqs || [];

  return (
    <section id="faqs" className="py-16 bg-slate-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3"
          >
            Got Questions?
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black text-[#001c3d] tracking-tight uppercase"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              key={i}
              className={cn(
                "bg-white rounded-lg border transition-all duration-300",
                activeIndex === i ? "border-blue-200 shadow-md shadow-blue-500/5" : "border-slate-100"
              )}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between group"
              >
                <span className={cn(
                  "font-bold text-base md:text-lg transition-colors",
                  activeIndex === i ? "text-slate-900" : "text-slate-700"
                )}>
                  {i + 1}. {faq.question}
                </span>
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  activeIndex === i ? "rotate-180" : ""
                )}>
                  <ChevronDown className="w-6 h-6 text-emerald-500" />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed pt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* View All Button from Mockup */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-[#001c3d] font-black text-sm uppercase tracking-widest hover:underline group">
            <span className="border-b-2 border-[#001c3d] pb-0.5">View All</span>
            <div className="flex flex-col -gap-1 group-hover:translate-y-1 transition-transform">
               <ChevronDown className="w-4 h-4" />
               <ChevronDown className="w-4 h-4 -mt-2" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryFAQ;
