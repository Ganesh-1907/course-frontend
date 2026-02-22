import React from "react";
import { Sparkles, Award, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCertificateProps {
  courseName: string;
}

const CourseCertificate: React.FC<CourseCertificateProps> = ({
  courseName,
}) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm mt-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-600 rounded-lg shadow-lg shadow-blue-600/20">
                <Award className="w-5 h-5 text-white" />
              </div>
              <span className="text-[12px] text-blue-600 font-black uppercase tracking-[0.2em]">Official Accreditation</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#001c3d] tracking-tight leading-[1.1]">
              Earn Your <span className="text-blue-600">Global</span> Recognition
            </h2>
            <p className="text-slate-500 font-medium text-[15px] leading-relaxed">
              Upon successful completion of the training, you will receive your {courseName} certification, globally recognized and issued directly by the governing body.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Digital Badge for LinkedIn & PDF Copy",
              "Access to Premium Alumni Network",
              "Validity for 2 Years with SEUs/PDUs",
              "Lifetime Access to Course Materials"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-600" />
                </div>
                <span className="text-[14px] font-bold text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group lg:ml-12"
        >
          {/* Shadow behind certificate */}
          <div className="absolute inset-4 bg-blue-900/5 blur-2xl rounded-xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
          
          <div className="relative aspect-[16/11] bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
            {/* Certificate Inner Design */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-between text-center">
              {/* Ornate Border */}
              <div className="absolute inset-4 border-2 border-slate-100 pointer-events-none" />
              <div className="absolute inset-6 border-4 border-double border-slate-200 pointer-events-none" />
              
              <div className="relative z-10 w-full flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-16 h-0.5 bg-blue-600 mb-2" />
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Scrum Alliance</span>
                </div>
                <h5 className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Certificate of Mastery</h5>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                   <p className="text-[10px] italic text-slate-400">This is to certify that</p>
                   <h3 className="text-3xl font-black text-[#001c3d] tracking-tight">ALEX BRYANT</h3>
                </div>
                <div className="h-px w-16 bg-blue-100 mx-auto" />
                <p className="text-[11px] font-bold text-slate-500 max-w-[280px] leading-relaxed mx-auto italic">
                  Has successfully fulfilled all requirements to be recognized as an
                </p>
                <h4 className="text-xl font-black text-blue-600 tracking-tight uppercase">{courseName}</h4>
              </div>

              <div className="w-full flex justify-between items-end px-10 relative z-10 mb-2">
                <div className="text-left space-y-2">
                  <div className="h-0.5 w-24 bg-slate-100" />
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Certified Trainer</p>
                </div>
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border border-blue-100 bg-blue-50/30 flex items-center justify-center relative overflow-hidden group-hover:rotate-12 transition-transform duration-1000">
                    <div className="absolute inset-0 border-2 border-dashed border-blue-200/50 rounded-full animate-spin-slow" />
                    <ShieldCheck className="w-8 h-8 text-blue-600/50" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white p-1 rounded-md text-[8px] font-black shadow-lg">GOLD</div>
                </div>

                <div className="text-right space-y-2">
                  <div className="h-0.5 w-24 bg-slate-100" />
                  <p className="text-[8px] font-black text-slate-400 uppercase tracking-tighter">Executive Director</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseCertificate;
