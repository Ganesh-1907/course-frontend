import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Home, ChevronRight, ArrowUpRight, CheckCircle, CircleCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryData } from "@/data/categoryData";
import AdvisorModal from "@/components/modals/AdvisorModal";
import { useState } from "react";
import CategoryStats from "./CategoryStats";
import { Link, useParams } from "react-router-dom";

const DEFAULT_COURSE_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop";

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
  const { categoryId } = useParams<{ categoryId: string }>();

  return (
    <section className="relative pt-8 pb-[8rem] overflow-hidden bg-[#f0f9ff]">
      <div className="container relative z-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-4 text-slate-600 font-bold text-sm">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 text-slate-400" />
          <span className="text-slate-700 font-medium">{data.breadcrumbName || data.name}</span>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="text-3xl md:text-3xl lg:text-[36px] font-black font-display mb-5 leading-tight tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-primary">
                {data.title}
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-[17px] font-medium text-[#001c3d]/80 mb-8 max-w-xl leading-relaxed">
              {data.subtitle || data.description}
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Student"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-[#001c3d] opacity-90">{data.enrolledCount || "144,000+"} Enrolled</span>
            </div>

            {/* feature list */}
            <div className="space-y-4 mb-10">
              {data.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="rounded-full p-1 bg-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check color="white" size={10} strokeWidth={4} />
                  </div>
                  <span className="text-[14px] font-medium text-[#001c3d]/90 leading-snug">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-5">
              <button
                onClick={() => setIsAdvisorOpen(true)}
                className="h-11 px-6 border-2 rounded-xl border-[#fa4a23] text-[#fa4a23] font-bold hover:bg-[#fa4a23] hover:text-white transition-all text-[13px] shadow-sm active:scale-[0.98]"
              >
                Contact Learning Advisor
              </button>
              <Link
                to={`/schedules/${categoryId || data.id || data.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="h-11 px-6 rounded-xl bg-[#fa4a23] hover:bg-[#e43d1a] text-white font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center gap-2 text-[13px] active:scale-[0.98]"
              >
                View Schedules
                <ArrowUpRight className="w-4 h-4" />
              </Link>
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
            {/* Background Circle to match screenshot layout */}
            <div className="absolute w-[500px] h-[500px] bg-sky-100/60 rounded-full" />
            
            {/* Main Image in Circle with masking */}
            <div className="relative z-10 w-[460px] h-[460px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img
                src={data.heroImage}
                alt="Student Success"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
