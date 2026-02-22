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
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Globe,
    title: "Global Recognition",
    description: "Every Course is recognized by the most reputable certification organizations globally, ensuring credibility and acceptance across all industries. Our A-CSM certification, provided by the Scrum Alliance, offers global recognition in Scrum practices."
  },
  {
    icon: User,
    title: "Expert Trainers",
    description: "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes. Experienced CSTs deliver our Advanced Certified ScrumMaster (A-CSM) training, bringing over 15 years of experience."
  },
  {
    icon: Book,
    title: "Flexible Learning",
    description: "Our Advanced Certified ScrumMaster (A-CSM) certification training offers a variety of methods of learning, such as online, 1:1 doubt clearing, and corporate Training, that meet the needs of different individuals and their schedules."
  },
  {
    icon: Network,
    title: "Lifetime Access",
    description: "Enjoy all-year access to the recordings of A-CSM training sessions, course materials, and study tools."
  },
  {
    icon: Users,
    title: "Proven Track Record",
    description: "We are a reputable training provider with extensive experience in helping professional and business organizations enhance their capabilities and achieve their career objectives. You can trust us regarding your A-CSM training needs."
  },
  {
    icon: Laptop,
    title: "End-to-End Assistance",
    description: "Simpliaxis provides ongoing support before, during, and after training, including study materials, guidance for participants on A-CSM certification, and assistance with career choices."
  },
  {
    icon: Headset,
    title: "Interactive and Engaging Training",
    description: "Our Advanced Certified ScrumMaster (A-CSM) training sessions are designed to be highly interactive, featuring real-world scenarios with group participation and Q&A sessions to facilitate a deeper understanding of the material."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "A-CSM certification is the new and additional certification introduced by Scrum Alliance. If you are working in a Scrum Master role, it can be a skill development process that helps in your career advancement and opens up multiple opportunities."
  }
];

const CourseWhySimpliaxis = () => {
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
              <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">Excellence Defined</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
              Why Choose <span className="text-blue-600">Simpliaxis</span>?
            </h2>
          </div>
          <p className="text-slate-500 font-medium text-[15px] max-w-sm leading-relaxed">
            Empowering professionals with industry-leading expertise and holistic support systems.
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
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 group-hover:border-blue-600">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
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
