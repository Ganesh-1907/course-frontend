import React from "react";
import { 
  Users, 
  BookOpen, 
  Network, 
  CreditCard, 
  FileText, 
  Briefcase 
} from "lucide-react";
import { motion } from "framer-motion";

interface Feature {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  color: string;
}

interface CourseFeaturesProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features: Feature[];
}

const CourseFeatures: React.FC<CourseFeaturesProps> = ({
  title = "Our Exclusive Prime",
  subtitle = "Our Key to Exam and Career Success",
  description = "Unlocking professional potential through curated learning experiences.",
  features
}) => {
  return (
    <section className="bg-slate-50/50 py-16 border-y border-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em]">{title}</span>
            <h2 className="text-3xl font-black text-[#001c3d] tracking-tight">
              {subtitle}
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm max-w-xs leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center group cursor-default"
            >
              <div className={`w-14 h-14 ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 rounded-xl`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-[14px] font-black text-slate-800 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[14px] font-black text-slate-800 leading-tight">
                  {feature.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseFeatures;
