import React from "react";
import { 
  Star, 
  Linkedin, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  ArrowUpRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Trainer {
  name: string;
  role: string;
  rating: string;
  experience: string;
  description: string;
  image: string;
}

interface CourseTrainersProps {
  title?: string;
  subtitle?: string;
  description?: string;
  trainers: Trainer[];
}

const CourseTrainers: React.FC<CourseTrainersProps> = ({
  title = "World-Class Faculty",
  subtitle = "Learn from Elite Global Instructors",
  description = "Meet the industry experts who will guide you through your Scrum transformation journey with real-world case studies and practical insights.",
  trainers
}) => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl text-left">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-yellow-400/10 rounded-lg">
                <Lightbulb className="w-5 h-5 text-yellow-600 fill-yellow-600/20" />
              </div>
              <span className="text-[12px] text-yellow-600 font-black uppercase tracking-[0.2em]">{title}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
              {subtitle.split("Elite")[0]}<span className="text-blue-600">Elite</span>{subtitle.split("Elite")[1]}
            </h2>
            <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-blue-600 hover:text-blue-600 transition-all text-slate-400 group">
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button className="w-12 h-12 rounded-xl border border-blue-600 flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all group">
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col items-center text-center relative"
            >
              {/* Top Bar Indicators */}
              <div className="w-full flex justify-between items-center mb-8">
                <div className="bg-green-50 text-green-600 p-1.5 rounded-lg flex items-center gap-1.5 px-2.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-black uppercase tracking-wider">Verified</span>
                </div>
                <button className="p-2.5 bg-blue-50/50 rounded-xl hover:bg-[#0077b5] group/ln transition-all">
                  <Linkedin className="w-5 h-5 text-[#0077b5] fill-current group-hover/ln:text-white transition-colors" />
                </button>
              </div>

              {/* Profile Image with Ring Animation */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-10 transition-all duration-500" />
                <div className="w-32 h-32 p-3 ring-1 ring-slate-100 rounded-full bg-white shadow-sm overflow-hidden z-10 relative">
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center p-2 border border-slate-50">
                  <Award className="w-6 h-6 text-yellow-500 fill-yellow-500/10" />
                </div>
              </div>

              <div className="space-y-4 w-full">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#001c3d] tracking-tight">{trainer.name}</h3>
                  <p className="text-[13px] font-black text-blue-600 bg-blue-50 py-1.5 px-4 rounded-full inline-block uppercase tracking-widest">{trainer.role}</p>
                </div>
                
                <div className="flex items-center justify-center gap-6 py-4 border-y border-slate-50">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-[15px] font-black text-slate-800">{trainer.rating}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Rating</span>
                  </div>
                  <div className="w-px h-8 bg-slate-100" />
                  <div className="flex flex-col items-center">
                    <span className="text-[15px] font-black text-slate-800 mb-1">{trainer.experience}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Real Experience</span>
                  </div>
                </div>

                <p className="text-[14px] font-bold text-slate-500 leading-relaxed line-clamp-3 italic">
                  "{trainer.description}"
                </p>

                <Button variant="ghost" className="w-full text-blue-600 font-black text-[13px] uppercase tracking-widest group/btn py-6 hover:bg-blue-50 rounded-2xl">
                  Profile Details <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTrainers;
