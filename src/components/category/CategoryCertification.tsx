import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, CheckCircle2, FileCheck } from "lucide-react";
import { CategoryData } from "@/data/categoryData";

interface CategoryCertificationProps {
  data: CategoryData;
}

const CategoryCertification: React.FC<CategoryCertificationProps> = ({ data }) => {
  return (
    <section id="certification" className="py-16 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6 shadow-sm">
              Official Validation
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-8 uppercase leading-tight">
              Get Certified by Global <br /> <span className="text-primary">Authority Bodies</span>
            </h2>
            <p className="text-base text-slate-500 font-medium mb-8 leading-relaxed max-w-xl">
              Our {data.name} programs are meticulously designed and accredited by the world's leading bodies, ensuring your certification is recognized in over 130 countries.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, title: "Lifetime Validity", desc: "Recognized forever in many industry tracks." },
                { icon: Award, title: "Official Badge", desc: "Shareable digital badges for LinkedIn & CVs." },
                { icon: FileCheck, title: "Global Accreditation", desc: "Partnering with PMI, Scrum Alliance & more." },
                { icon: CheckCircle2, title: "Exam Support", desc: "Comprehensive guidance for high pass rates." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                    <item.icon className="w-6 h-6 text-slate-900 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 tracking-tight">{item.title}</h4>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificate Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-50 rounded-xl p-6 md:p-10 border-2 border-slate-100 shadow-2xl relative z-10">
              <div className="aspect-[1.414/1] bg-white rounded-lg shadow-sm border-[12px] border-slate-50 relative overflow-hidden p-8 flex flex-col items-center text-center">
                {/* Certificate Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                   <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                </div>
                
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                   <Award className="w-full h-full text-[#ff4e25] opacity-20" />
                </div>

                <div className="border-b-2 border-slate-100 w-full mb-6" />
                
                <h3 className="text-xl font-serif text-slate-800 mb-1">Certificate of Completion</h3>
                <p className="text-slate-400 text-xs mb-6 font-medium">This is to certify that</p>
                
                <p className="text-2xl font-black text-slate-900 mb-6 font-display">JOHN DOE</p>
                
                <p className="text-slate-500 text-xs max-w-xs mx-auto leading-relaxed font-medium">
                  Has successfully completed the prescribed requirements for the <span className="font-bold">{data.name} Masterclass</span>
                </p>

                <div className="mt-auto flex justify-between w-full pt-6 border-t border-slate-100">
                  <div className="text-left">
                    <div className="h-4 w-20 border-b border-slate-200 mb-1" />
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Program Director</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                       <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase">Verified Credential</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-xl border border-slate-100 flex items-center justify-center p-4 z-20 animate-bounce">
              <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Scrum_Alliance_logo.svg/1200px-Scrum_Alliance_logo.svg.png" alt="Accreditation" className="w-full h-auto grayscale opacity-50" />
            </div>
            <div className="absolute -bottom-10 -left-6 w-36 h-14 bg-slate-900 rounded-xl shadow-xl flex items-center justify-center gap-2 px-4 z-20 border border-white/10">
               <ShieldCheck className="w-5 h-5 text-primary" />
               <span className="text-white text-[10px] font-black uppercase tracking-widest">ISO 9001:2015</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CategoryCertification;
