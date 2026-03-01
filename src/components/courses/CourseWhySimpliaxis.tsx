import React from "react";
import { 
  Globe, 
  User, 
  Book, 
  Network, 
  Users, 
  Laptop, 
  Headset,
  TrendingUp,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  // icon: React.ElementType;
  title: string;
  description: string;
}

interface CourseWhySimpliaxisProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
}

const CourseWhySimpliaxis: React.FC<CourseWhySimpliaxisProps> = ({
  title = "Excellence Defined",
  subtitle = "Why Choose Viovn?",
  description = "Empowering professionals with industry-leading expertise and holistic support systems.",
  features
}) => {
  return (
    <div className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-20 border-b border-slate-200 pb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">{title}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
              {subtitle.split("Viovn")[0]}<span className="text-blue-600">Viovn</span>{subtitle.split("Viovn")[1]}
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-[15px] max-w-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group p-2 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="flex gap-6 p-4">
                {/* <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 group-hover:border-blue-600"> */}
                  {/* <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" /> */}
                {/* </div> */}
                <div className="space-y-3">
                  <h3 className="text-[19px] font-black text-[#001c3d] group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] font-bold text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseWhySimpliaxis;
