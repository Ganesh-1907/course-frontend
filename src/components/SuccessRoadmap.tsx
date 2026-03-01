import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Star, BookOpen, Trophy, Target, Zap } from "lucide-react";

const milestones = [
  {
    icon: Target,
    title: "Define Your Goal",
    description: "Start with a personalized career assessment to identify the most in-demand skills for your desired role.",
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    icon: BookOpen,
    title: "Immersive Training",
    description: "Engage in live, hands-on sessions led by industry experts who have worked at top-tier tech companies.",
    color: "bg-orange-500",
    shadow: "shadow-orange-500/20"
  },
  {
    icon: Zap,
    title: "Real-world Projects",
    description: "Apply your knowledge to actual industry case studies and build a portfolio that stands out to recruiters.",
    color: "bg-purple-500",
    shadow: "shadow-purple-500/20"
  },
  {
    icon: CheckCircle2,
    title: "Global Certification",
    description: "Earn globally recognized credentials from leading governing bodies like Scrum Alliance and PMI.",
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    icon: Trophy,
    title: "Career Acceleration",
    description: "Receive 1-on-1 career coaching, resume building, and placement support to land your dream job.",
    color: "bg-amber-500",
    shadow: "shadow-amber-500/20"
  }
];

const SuccessRoadmap = () => {
  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            The viovn Pathway
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black font-display tracking-tight mb-4 uppercase"
          >
            Your Journey from <span className="text-primary">Learning</span> to <span className="text-blue-600">Leadership</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-xl mx-auto"
          >
            We don't just teach courses; we build careers. Our structured roadmap ensures you stay on track and hit every milestone.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central line (desktop) / Left line (mobile) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-500 to-emerald-500 opacity-20" />

          <div className="space-y-10 md:space-y-0">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Milestone Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: index * 0.1 }}
                  className="absolute left-8 md:left-1/2 -translate-x-[12px] md:-translate-x-1/2 z-10 w-6 h-6 rounded-full border-4 border-background bg-white shadow-lg flex items-center justify-center p-0.5"
                >
                  <div className={`w-full h-full rounded-full ${milestone.color} ${milestone.shadow} shadow-md animate-pulse`} />
                </motion.div>

                {/* Content Area */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="group py-6"
                  >
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${milestone.color} text-white mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg ${milestone.shadow}`}>
                      <milestone.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-black mb-2 group-hover:text-primary transition-colors">
                      {index + 1}. {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty spacer for desktop symmetry */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Banner at the end */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-10 rounded-xl bg-[#0b121e] text-white text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden group border border-white/5"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange-400/10 pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-black mb-4 relative z-10 uppercase tracking-tight">
            Ready to start your journey?
          </h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto relative z-10 font-medium text-sm">
            Join thousands of successful professionals who have transformed their careers through the viovn pathway.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
            <button className="px-8 py-3 bg-primary text-white font-black rounded-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl active:scale-95 uppercase text-xs tracking-widest">
              Get Started Now
            </button>
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span>4.9/5 Rating from Alumni</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessRoadmap;
