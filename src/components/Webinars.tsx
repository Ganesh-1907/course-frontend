import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, Calendar, Clock, User, Play, ExternalLink, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const upcomingWebinars = [
  {
    id: 1,
    title: "Mastering Agile Transformation in 2026",
    speaker: "Dr. Sarah Jenkins",
    role: "Agile Coach, ex-Google",
    date: "Feb 15, 2026",
    time: "10:00 AM EST",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=400&h=250&fit=crop",
    category: "Agile & Leadership"
  },
  {
    id: 2,
    title: "AI-Powered Project Management: The Future is Here",
    speaker: "Marcus Chen",
    role: "Product Lead, viovn",
    date: "Feb 18, 2026",
    time: "02:00 PM EST",
    status: "Live",
    image: "https://images.unsplash.com/photo-1591115765373-520b7a05728b?w=400&h=250&fit=crop",
    category: "Generative AI"
  },
  {
    id: 3,
    title: "Scaling Scrum for Global Enterprises",
    speaker: "Elena Rodriguez",
    role: "Scrum Master, Spotify",
    date: "Feb 22, 2026",
    time: "11:30 AM EST",
    status: "Recordings Available",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=250&fit=crop",
    category: "Business Strategy"
  }
];

const Webinars = () => {
  return (
    <section id="webinars" className="relative py-24 overflow-hidden bg-background">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="container relative">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3 h-3" />
              Live Events & Workshops
            </div>
            <h2 className="text-3xl md:text-5xl font-black font-display tracking-tight mb-6">
              Learn from the <span className="text-primary italic">Best</span> In the Industry
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Join our exclusive webinars featuring industry leaders sharing real-world insights, 
              advanced techniques, and the latest trends in technology and management.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="h-12 border-2 px-8 rounded-full hover:bg-primary hover:text-white transition-all">
              See All Sessions
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Webinars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingWebinars.map((webinar, index) => (
            <motion.div
              key={webinar.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={webinar.image} 
                  alt={webinar.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold text-white uppercase tracking-widest border border-white/20">
                    {webinar.category}
                  </span>
                  {webinar.status === "Live" && (
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-red-500 rounded-full text-[10px] font-bold text-white uppercase tracking-widest animate-pulse">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                      Live Now
                    </span>
                  )}
                </div>

                <motion.div 
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-2 text-white/90 text-xs py-1 px-2 rounded-lg bg-black/40 backdrop-blur-sm">
                    <Calendar className="w-3 h-3 text-primary" />
                    {webinar.date}
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-xs py-1 px-2 rounded-lg bg-black/40 backdrop-blur-sm">
                    <Clock className="w-3 h-3 text-primary" />
                    {webinar.time}
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                  {webinar.title}
                </h3>
                
                {/* Speaker Info */}
                <div className="flex items-center gap-3 mb-8 p-3 rounded-2xl bg-muted/50 border border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{webinar.speaker}</p>
                    <p className="text-xs text-muted-foreground">{webinar.role}</p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between">
                  <Button 
                    className={cn(
                      "rounded-xl font-bold transition-all px-6",
                      webinar.status === "Live" ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20" : "btn-primary"
                    )}
                  >
                    {webinar.status === "Live" ? (
                      <><Play className="w-4 h-4 mr-2" /> Join Now</>
                    ) : (
                      "Register Today"
                    )}
                  </Button>
                  <button className="w-11 h-11 rounded-xl bg-muted hover:bg-primary group/btn transition-all flex items-center justify-center">
                    <PlusIcon className="w-5 h-5 text-muted-foreground group-hover/btn:text-white transition-all rotate-0 group-hover/btn:rotate-90" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlusIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default Webinars;
