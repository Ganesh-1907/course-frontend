import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Building2, Globe } from "lucide-react";

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

const CategoryStats = () => {
  return (
    <div className="container relative flex justify-center  -mt-16 z-20 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-full max-w-[1000px] shadow-xl shadow-slate-200/50 border border-slate-100 p-4 md:px-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className={`w-10 h-10  flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <h3 className="text-sm md:text-sm font-bold text-[#001c3d] mb-0.5">
                {stat.value}
              </h3>
              <p className="md:text-sm font-light text-slate-500 tracking-wide">
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
