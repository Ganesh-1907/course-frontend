import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AdvisorModal from "@/components/modals/AdvisorModal";
import { useState } from "react";

const CategoryCTA = () => {
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  return (
    <section className="py-12 px-4 md:px-0 bg-white">
      <div className="container max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-[#0b121e] rounded-xl overflow-hidden relative min-h-[180px] flex items-center shadow-2xl"
        >
          {/* Decorative Gradients from Screenshot */}
          <div className="absolute top-0 right-0 w-[300px] h-full bg-gradient-to-l from-purple-900/20 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 right-[10%] w-24 h-48 bg-purple-600/20 rounded-full blur-[60px] -rotate-45 pointer-events-none" />

          <div className="w-full flex flex-col md:flex-row items-center relative z-10 px-6 md:px-12 py-6 md:py-0">
            
            {/* Left: Advisor Image & Message Icon */}
            <div className="w-full md:w-[35%] flex justify-center md:justify-start items-end relative h-full">
              <div className="relative z-10 w-48 md:w-56 h-auto -mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80" 
                  alt="Learning Advisor" 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Message Bubble Graphic (As seen in mockup) */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute top-4 left-[60%] md:left-[55%] bg-slate-800/60 backdrop-blur-sm p-3 rounded-lg border border-slate-700/50 hidden sm:block w-32"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="h-1 w-full bg-slate-600 rounded-full" />
                    <div className="h-1 w-[70%] bg-slate-600 rounded-full" />
                  </div>
                </div>
                {/* Speech Bubble Arrow */}
                <div className="absolute -bottom-1.5 left-3 w-3 h-3 bg-slate-800/60 border-r border-b border-slate-700/50 rotate-45 transform" />
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-[65%] text-center md:text-left space-y-3 md:pl-8 mt-6 md:mt-0">
              <p className="text-slate-400 font-bold text-xs uppercase tracking-wider">Got Questions?</p>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight font-display tracking-tight uppercase">
                Get a Free Counselling Session <br className="hidden lg:block" />
                from our Learning Advisor.
              </h2>
              <div className="pt-2">
                <Button 
                  onClick={() => setIsAdvisorOpen(true)}
                  className="h-10 px-6 rounded-lg bg-white text-[#0b121e] font-black hover:bg-slate-100 transition-all flex items-center gap-2 mx-auto md:mx-0 group uppercase text-[10px] tracking-widest"
                >
                  Connect with Us
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
            
            <AdvisorModal isOpen={isAdvisorOpen} onOpenChange={setIsAdvisorOpen} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryCTA;
