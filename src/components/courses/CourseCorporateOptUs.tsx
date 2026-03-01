import React from "react";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCorporateOptUsProps {
  courseName: string;
  label?: string;
  title?: string;
  subtitle?: string;
  description: string;
  buttonText?: string;
}

const CourseCorporateOptUs: React.FC<CourseCorporateOptUsProps> = ({
  courseName,
  label = "Corporate Solutions",
  title,
  subtitle,
  description,
  buttonText = "Corporate Group Inquiry",
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-white to-blue-50/50 border border-slate-200 rounded-[2.5rem] p-10 md:p-14 mt-16 relative overflow-hidden shadow-xl shadow-slate-200/50"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 p-20 pointer-events-none" />
      <div className="absolute bottom-4 right-12 opacity-5 pointer-events-none">
        <Users className="w-48 h-48 text-blue-600" />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">{label}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1] max-w-4xl">
            {title || `Why Corporates Choose Us for ${courseName} Training`}
          </h2>
        </div>

        <p className="text-[17px] font-bold text-slate-500 leading-relaxed max-w-4xl italic">
          "{description}"
        </p>

        <div className="pt-4">
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-8 text-[16px] rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:-translate-y-1 active:scale-[0.98] gap-3"
          >
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCorporateOptUs;
