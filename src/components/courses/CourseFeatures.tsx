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

const features = [
  {
    icon: Users,
    title: "Guaranteed to",
    subtitle: "Run Workshops",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: BookOpen,
    title: "Expert-Led Study",
    subtitle: "Sessions",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Network,
    title: "Networking",
    subtitle: "Opportunities",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: CreditCard,
    title: "Flexible Monthly",
    subtitle: "Payment Plans",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: FileText,
    title: "Real-World Case",
    subtitle: "Studies",
    color: "bg-red-50 text-red-600"
  },
  {
    icon: Briefcase,
    title: "Hands-On Project",
    subtitle: "Experience",
    color: "bg-cyan-50 text-cyan-600"
  }
];

const CourseFeatures = () => {
  return (
    <section className="bg-slate-50/50 py-16 border-y border-slate-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-blue-600 text-xs font-black uppercase tracking-[0.2em]">Our Exclusive Prime</span>
            <h2 className="text-3xl font-black text-[#001c3d] tracking-tight">
              Our Key to Exam and Career Success
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-sm max-w-xs leading-relaxed">
            Unlocking professional potential through curated learning experiences.
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
