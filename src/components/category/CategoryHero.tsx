import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Home, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryData } from "@/data/categoryData";
import AdvisorModal from "@/components/modals/AdvisorModal";
import { useState } from "react";

interface CategoryHeroProps {
  data: CategoryData;
}

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
];

const CategoryHero: React.FC<CategoryHeroProps> = ({ data }) => {
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  return (
    <section className="relative pt-8 pb-12 overflow-hidden bg-[#eff7fe]">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-6 text-slate-600 font-bold text-sm">
              <Home className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-slate-700 font-medium">{data.breadcrumbName || data.name}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-black font-display tracking-tight mb-4 text-[#001c3d] leading-tight uppercase">
              {data.title}
            </h1>
            
            <p className="text-base text-[#001c3d] font-bold mb-6 max-w-xl leading-relaxed opacity-90">
              {data.subtitle || data.description}
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Student"
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <span className="text-sm font-black text-[#001c3d]">{data.enrolledCount || "144,000+"} Enrolled</span>
            </div>
            
            {/* feature list */}
            <div className="space-y-3 mb-6">
              {data.highlights.map((highlight, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-[#001c3d] leading-tight">{highlight}</span>
                </div>
              ))}
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="outline" 
                onClick={() => setIsAdvisorOpen(true)}
                className="h-10 px-5 rounded-lg border-2 border-[#ff4e25] text-[#001c3d] font-black hover:bg-white/50 transition-all text-xs"
              >
                Contact Learning Advisor
              </Button>
              <Button 
                className="h-10 px-5 rounded-lg bg-[#ff4e25] hover:bg-[#e43d1a] text-white font-black transition-all shadow-md flex items-center gap-2 text-xs"
              >
                View Schedules
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            <AdvisorModal isOpen={isAdvisorOpen} onOpenChange={setIsAdvisorOpen} />
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Background Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[300px] h-[300px] bg-sky-200/50 rounded-full blur-[2px]" />
            </div>

            {/* Main Image in Circle */}
            <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-[8px] border-white/30 shadow-xl flex items-center justify-center z-10">
              <img 
                src="https://images.unsplash.com/photo-1544717305-27a734ef1904?w=600&q=80" 
                alt="Student Success" 
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Decorative Floating Dots */}
            <div className="absolute top-[25%] right-[0%] w-3 h-3 rounded-full bg-[#ff4e25] animate-ping" />
            <div className="absolute bottom-[25%] left-[0%] w-5 h-5 rounded-full bg-sky-400/40 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
