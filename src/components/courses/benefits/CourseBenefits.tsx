import React from "react";
import { CheckCircle2, User, Building2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface BenefitItem {
  title: string;
  description: string;
}

interface CourseBenefitsProps {
  courseName: string;
  title?: string;
  subtitle?: string;
  description?: string;
  individualTitle?: string;
  corporateTitle?: string;
  buttonText?: string;
  individualBenefits: BenefitItem[];
  corporateBenefits: BenefitItem[];
}

const CourseBenefits: React.FC<CourseBenefitsProps> = ({
  courseName,
  title = "Impactful Gains",
  subtitle = "Benefits of Certification Training",
  description = "Elevate your professional trajectory with a certification that is recognized and respected by top organizations worldwide.",
  individualTitle = "Individual Growth",
  corporateTitle = "Corporate Impact",
  buttonText = "View Schedules & Pricing",
  individualBenefits,
  corporateBenefits
}) => {
  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 text-[12px] font-black uppercase tracking-[0.2em]">{title}</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
          {subtitle.split("Certification")[0]}<span className="text-blue-600">Certification</span>{subtitle.split("Certification")[1]}
        </h2>
        <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
          {description}
        </p>
      </div>

      {/* Benefits Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Individuals Benefits */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col h-full shadow-2xl shadow-blue-500/20"
        >
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8">
              <User className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-[24px] font-black text-white mb-10 tracking-tight">
              {individualTitle.split("Growth")[0]}<span className="text-blue-200">Growth</span>{individualTitle.split("Growth")[1]}
            </h3>

            <div className="space-y-8 flex-grow">
              {individualBenefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-[15px] font-medium text-blue-50 leading-relaxed">
                    <span className="font-black text-white">{benefit.title}:</span> {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Corporate Benefits */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-100 rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col h-full shadow-xl shadow-slate-200/50"
        >
          <div className="relative z-10">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
              <Building2 className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-[24px] font-black text-[#001c3d] mb-10 tracking-tight">
              {corporateTitle.split("Impact")[0]}<span className="text-blue-600">Impact</span>{corporateTitle.split("Impact")[1]}
            </h3>

            <div className="space-y-8 flex-grow">
              {corporateBenefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-[15px] font-bold text-slate-600 leading-relaxed">
                    <span className="font-black text-[#001c3d] tracking-tight">{benefit.title}:</span> {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer Action */}
      <div className="flex justify-center md:justify-start pt-6">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-8 text-[16px] rounded-2xl shadow-xl shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-[0.98]">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default CourseBenefits;
