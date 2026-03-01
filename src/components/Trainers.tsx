import { motion } from "framer-motion";
import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const trainers = [
  {
    name: "Aakash Srinivasan",
    role: "Certified Scrum Trainer (CST)",
    company: "Google",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Michel Goldenberg",
    role: "Certified Scrum Trainer (CST)",
    company: "Spotify",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Raj Kasturi",
    role: "Enterprise Agile Coach",
    company: "Microsoft",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Abid Quereshi",
    role: "Certified Scrum Trainer (CST)",
    company: "Amazon",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-16 bg-background relative overflow-hidden">
      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            World-Class Mentors
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black font-display tracking-tight uppercase"
          >
            Learn from the Industry <span className="text-primary italic">Leaders</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Ultra-Minimalist Premium Card */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted shadow-2xl transition-all duration-700 group-hover:shadow-primary/20 group-hover:-translate-y-4">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <motion.div
                    className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    <h3 className="text-white text-2xl font-black mb-1">{trainer.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-primary font-bold text-xs uppercase tracking-widest">{trainer.company}</span>
                      <div className="w-1 h-1 rounded-full bg-white/30" />
                      <span className="text-white/60 text-[10px] font-medium italic">{trainer.role}</span>
                    </div>
                  </motion.div>
                  
                  {/* Social Reveal */}
                  <div className="flex gap-4 mt-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <button className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Accent behind card */}
              <div className="absolute -z-10 -inset-4 bg-primary/10 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button className="group flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-all">
            Explore All Mentors
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              <ExternalLink className="w-3 h-3" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
