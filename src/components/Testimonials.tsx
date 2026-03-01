import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Linkedin, ChevronLeft, ChevronRight, Quote, MessageSquare, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const platformReviews = {
  linkedin: [
    {
      name: "Jai Kumar Jadhav",
      role: "Product Owner",
      company: "Tech Mahindra",
      content: "I'm happy to share that I've obtained a new certification: Certified Scrum Product Owner (CSPO) from Scrum Alliance🙏 A heartfelt thank you to viovn for a well-structured training experience and to our amazing trainer.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Komal Wankhede",
      role: "Assistant Vice President",
      company: "Citi",
      content: "I am delighted to complete my Certified Scrum Master Certification and Training from Scrum Alliance. I am thankful to Maria Matarelli for training and viovn for facilitating this training session.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Benjamin Tanyi Oben",
      role: "Senior Project Manager",
      company: "Euromonitor",
      content: "What a great way to end the year by transforming 15+ years of experience managing projects to the next level earning a new certification PMP from PMI, all thanks to viovn.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 5
    }
  ],
  google: [
    {
      name: "Sandeep Rao",
      role: "DevOps Engineer",
      company: "Oracle",
      content: "Excellent training provided by viovn for the AWS Certified Solutions Architect. The course material was comprehensive and the labs were very helpful in understanding the concepts.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Meera Deshmukh",
      role: "HR Manager",
      company: "Accenture",
      content: "viovn has the best corporate training programs. We had an Agile workshop for our leadership team and the feedback was outstanding across all departments.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      rating: 5
    },
    {
      name: "Vikram Malhotra",
      role: "Senior Consultant",
      company: "Deloitte",
      content: "Top notch experience with the PMP training. The trainer was very knowledgeable and shared many real-world examples. Highly recommended for anyone serious about certifications.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face",
      rating: 5
    }
  ]
};

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState<"linkedin" | "google">("linkedin");
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = platformReviews[activeTab];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Reset index when switching tabs
  const handleTabChange = (tab: "linkedin" | "google") => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  return (
    <section id="testimonials" className="py-16 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container">
        {/* Standardized Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-3"
          >
            Learner Feedback
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl font-black font-display tracking-tight uppercase"
          >
            Our Learners <span className="text-primary italic">Love</span> the viovn Experience
          </motion.h2>
        </div>

        {/* Platform Tabs */}
        <div className="flex justify-center mb-10">
          <div className="p-1.5 bg-muted rounded-xl flex gap-2 border border-border/50 shadow-inner">
            <button
              onClick={() => handleTabChange("linkedin")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-xs transition-all duration-300",
                activeTab === "linkedin" 
                  ? "bg-white text-blue-600 shadow-md" 
                  : "text-muted-foreground hover:bg-white/50"
              )}
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn Reviews
            </button>
            <button
              onClick={() => handleTabChange("google")}
              className={cn(
                "flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold text-xs transition-all duration-300",
                activeTab === "google" 
                  ? "bg-white text-emerald-600 shadow-md" 
                  : "text-muted-foreground hover:bg-white/50"
              )}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h4.78c-.19 1.06-.92 2.72-2.72 3.96-1.56 1.07-3.56 1.72-5.78 1.72-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5c2.36 0 4.41.97 5.86 2.54l2.58-2.58C14.77 2.15 12.01 1 9 1 3.5 1 0 5.5 0 11s3.5 10 9 10c5.73 0 9.55-4.04 9.55-9.73 0-.65-.07-1.15-.14-1.64h-5.93z" />
              </svg>
              Google Reviews
            </button>
          </div>
        </div>

        {/* High-End Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[480px] md:h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-card rounded-xl p-6 md:p-10 border border-border/50 shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start"
              >
                {/* Visual Side */}
                <div className="relative flex-shrink-0">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-lg overflow-hidden border-4 border-background shadow-xl">
                    <img
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className={cn(
                    "absolute -bottom-3 -right-3 p-2 rounded-lg shadow-xl text-white",
                    activeTab === "linkedin" ? "bg-blue-600" : "bg-emerald-600"
                  )}>
                    {activeTab === "linkedin" ? <Linkedin className="w-5 h-5" /> : <Star className="w-5 h-5 fill-white" />}
                  </div>
                  <div className="absolute -top-3 -left-3 p-3 bg-primary rounded-full shadow-lg text-white">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 flex flex-col justify-between h-full pt-2">
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={cn("w-4 h-4", i < reviews[currentIndex].rating ? "fill-amber-400 text-amber-400" : "text-muted")} />
                      ))}
                    </div>
                    <p className="text-base md:text-lg font-medium leading-relaxed italic text-foreground/90 line-clamp-4 md:line-clamp-5">
                      "{reviews[currentIndex].content}"
                    </p>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4 border-t border-border/50 pt-6 mt-4">
                    <div>
                      <h4 className="font-black text-lg text-foreground mb-0.5">{reviews[currentIndex].name}</h4>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="text-muted-foreground font-bold">{reviews[currentIndex].role}</span>
                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                        <span className="text-primary font-black uppercase tracking-wider">{reviews[currentIndex].company}</span>
                      </div>
                    </div>
                    <button className={cn(
                      "flex items-center gap-2 text-[10px] font-black px-4 py-2 rounded-lg group/link transition-all uppercase tracking-widest",
                      activeTab === "linkedin" ? "bg-blue-50 text-blue-600 hover:bg-blue-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                    )}>
                      {activeTab === "linkedin" ? "Verify on LinkedIn" : "View on Google"}
                      <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-xl bg-white border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 group shadow-primary/5"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500", 
                    i === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/20"
                  )} 
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-xl bg-white border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 group shadow-primary/5"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Aggregate Ratings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 max-w-4xl mx-auto p-0.5 bg-gradient-to-r from-primary/20 via-blue-500/20 to-emerald-500/20 rounded-xl"
        >
          <div className="bg-white rounded-lg p-6 md:p-10 flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shadow-inner">
                <MessageSquare className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-2xl font-black text-foreground">15,000+</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Success Stories</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="text-center group cursor-pointer">
                <div className="flex justify-center gap-1 mb-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform" />)}
                </div>
                <p className="font-bold text-xs">4.9/5 Google Reviews</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="flex justify-center gap-1 mb-1">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-blue-600 text-blue-600 group-hover:scale-110 transition-transform" />)}
                </div>
                <p className="font-bold text-xs">Top Rated on LinkedIn</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
