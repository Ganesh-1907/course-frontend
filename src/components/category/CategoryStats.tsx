import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, Globe } from "lucide-react";
import { CategoryData } from "@/data/categoryData";

const stats = [
  {
    icon: Users,
    value: "500,000+",
    label: "Professional Enrolled",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    icon: GraduationCap,
    value: "150+",
    label: "Global Trainers",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Building2,
    value: "300+",
    label: "Workshops Every Month",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Globe,
    value: "130+",
    label: "Countries",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
];

const CategoryStats = ({ data }:{data: CategoryData;}) => {
  return (
    <div className="container relative flex justify-center  ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-full w-full shadow-[0_15px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-6 md:px-12 md:py-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 items-center">
          {data.stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center group ${i !== data.stats.length - 1 ? 'lg:border-r border-slate-100' : ''}`}>
              <div className={`w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110 duration-500 mb-1`}>
                {stat.icon && <stat.icon className={`w-6 h-6 rotate-0 group-hover:-rotate-12 transition-transform duration-500 ${stat.color}`} />}
              </div>
              <h3 className="text-base md:text-[20px] font-black text-[#001c3d] tracking-tighter leading-none mb-1">
                {stat.value}
              </h3>
              <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none opacity-80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CategoryStats;
