import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { User, Building2, CheckCircle2, ArrowRight, Sparkles, GraduationCap, Briefcase, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const tracks = {
  individual: {
    title: "viovn for Individuals",
    subtitle: "Accelerate Your Personal Career Growth",
    color: "from-orange-500 to-orange-400",
    icon: GraduationCap,
    benefits: [
      { text: "Master Agile & explore more career opportunities.", icon: Zap },
      { text: "Sharpen your Scrum skills & improve your chances of getting hired.", icon: Sparkles },
      { text: "Become a part of the renowned Agile community & connect with experts.", icon: User },
      { text: "Expand your Scrum knowledge & boost team collaboration.", icon: CheckCircle2 },
      { text: "Collaborate with customers & prioritize projects.", icon: Briefcase },
    ],
    cta: "Contact Course Advisor"
  },
  corporate: {
    title: "viovn for Enterprises",
    subtitle: "Empower Your Teams with Modern Agility",
    color: "from-blue-600 to-blue-400",
    icon: Building2,
    benefits: [
      { text: "Develop an Agile mindset and direct your team toward success.", icon: Zap },
      { text: "Direct teams with an interesting product vision.", icon: Sparkles },
      { text: "Foster seamless collaboration among stakeholders and teams.", icon: Building2 },
      { text: "Ensure the delivery of high-quality products to meet customer expectations.", icon: CheckCircle2 },
      { text: "Embrace Scrum, Adopt Agility, and help teams to excel in Agile environments.", icon: Briefcase },
    ],
    cta: "Corporate Enquiry"
  }
};

const Benefits = () => {
  const [activeTab, setActiveTab] = useState<"individual" | "corporate">("individual");
  const track = tracks[activeTab];

  return (
    <section id="benefits" className="py-16 bg-background relative overflow-hidden">
      {/* Dynamic Background Blurs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className={cn(
          "absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000",
          activeTab === "individual" ? "bg-orange-500/10" : "bg-blue-500/10"
        )}
      />

      <div className="container">
        {/* Standardized Header - Reduced Size */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            Program Advantages
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black font-display tracking-tight uppercase"
          >
            Individual & Organizational <span className={cn("transition-colors duration-500", activeTab === "individual" ? "text-orange-500" : "text-blue-500")}>Benefits</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* High-End Toggle */}
          <div className="flex justify-center mb-10">
            <div className="p-1.5 bg-muted rounded-xl flex gap-2 border border-border/50 shadow-inner">
              <button
                onClick={() => setActiveTab("individual")}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-lg font-black text-xs transition-all duration-300 uppercase tracking-widest",
                  activeTab === "individual" 
                    ? "bg-white text-orange-600 shadow-md" 
                    : "text-muted-foreground hover:bg-white/50"
                )}
              >
                <User className="w-4 h-4" />
                Individual Track
              </button>
              <button
                onClick={() => setActiveTab("corporate")}
                className={cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-lg font-black text-xs transition-all duration-300 uppercase tracking-widest",
                  activeTab === "corporate" 
                    ? "bg-white text-blue-600 shadow-md" 
                    : "text-muted-foreground hover:bg-white/50"
                )}
              >
                <Building2 className="w-4 h-4" />
                Corporate Track
              </button>
            </div>
          </div>

          {/* Interactive Card Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Image/Badge Column */}
            <motion.div 
              key={`${activeTab}-visual`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 relative group"
            >
              <div className={cn(
                "w-full aspect-square rounded-2xl p-1 shadow-2xl transition-all duration-1000",
                activeTab === "individual" ? "bg-gradient-to-br from-orange-100 to-orange-50" : "bg-gradient-to-br from-blue-100 to-blue-50"
              )}>
                <img 
                  src={activeTab === "individual" 
                    ? "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=600&fit=crop" 
                    : "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=600&fit=crop"
                  }
                  alt={track.title}
                  className="w-full h-full object-cover rounded-xl opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              {/* Floating Stat Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-2xl border border-border/50 z-10"
              >
                <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center mb-2", activeTab === "individual" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600")}>
                  <track.icon className="w-5 h-5" />
                </div>
                <p className="font-black text-xl h-6">
                  {activeTab === "individual" ? "73k+" : "150+"}
                </p>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                  {activeTab === "individual" ? "Learners Transformed" : "Global Partners"}
                </p>
              </motion.div>
            </motion.div>

            {/* Right Benefits List */}
            <div className="lg:col-span-7 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-black mb-2">{track.title}</h3>
                  <p className="text-muted-foreground mb-8 font-medium">{track.subtitle}</p>
                  
                  <div className="grid gap-4">
                    {track.benefits.map((benefit, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex items-start gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 border border-border/10 hover:border-primary/20 transition-all duration-300"
                      >
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3",
                          activeTab === "individual" ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
                        )}>
                          <benefit.icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold leading-relaxed pt-2">
                          {benefit.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Button className={cn(
                      "h-14 px-10 rounded-2xl font-bold shadow-xl transition-all group border-none",
                      activeTab === "individual" 
                        ? "bg-gradient-to-r from-orange-600 to-orange-500 shadow-orange-500/20 text-white" 
                        : "bg-gradient-to-r from-blue-600 to-blue-500 shadow-blue-500/20 text-white"
                    )}>
                      {track.cta}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
