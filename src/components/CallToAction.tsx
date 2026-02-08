import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, MessageCircle, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const CallToAction = () => {
  return (
    <section id="cta" className="py-16 bg-background relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-foreground rounded-xl overflow-hidden shadow-2xl p-8 md:p-12 lg:p-14"
        >
          {/* Immersive Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-8 border border-white/10 backdrop-blur-md"
              >
                <Zap className="w-3 h-3 text-primary" />
                Expert Guidance Guaranteed
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl md:text-4xl font-black font-display tracking-tight text-white mb-6 uppercase leading-tight"
              >
                Start Your Career <br />
                <span className="text-primary italic">Transformation</span> Today
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed"
              >
                Still have questions? Schedule a 1-on-1 discovery call with our learning advisors for a personalized career roadmap.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button className="h-12 px-8 rounded-lg bg-primary hover:bg-orange-500 text-white font-black shadow-lg shadow-primary/20 transition-all active:scale-95 text-sm group uppercase tracking-widest border-none">
                  <Phone className="w-4 h-4 mr-2" />
                  Request a Callback
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="h-12 px-8 rounded-lg border-white/10 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm font-black text-sm transition-all uppercase tracking-widest">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Event
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-8 mt-12 text-white/40 border-t border-white/5 pt-8"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Secure Enrollment</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">24/7 Support</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden border-4 border-white/5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
                  alt="Learning Advisor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Float Card */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 left-6 right-6 p-4 bg-white rounded-xl shadow-2xl"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-foreground">Free Counselling</p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">Next slot in 15 mins</p>
                    </div>
                  </div>
                  <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[60px] animate-pulse" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px]" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
