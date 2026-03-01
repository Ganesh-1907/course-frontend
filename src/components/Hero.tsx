import React, { useState, useRef } from "react";
import { 
  motion, 
  useMotionValue, 
  useMotionTemplate, 
  useAnimationFrame,
  MotionValue
} from "framer-motion";
import { ArrowRight, TrendingUp, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustLogos = [
  { name: "Accenture", letter: "H" },
  { name: "Accenture", text: "accenture" },
  { name: "Microsoft", text: "Microsoft" },
  { name: "Netflix", text: "NETFLIX" },
  { name: "Cognizant", text: "cognizant" },
  { name: "Meta", text: "Meta" },
];

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
];

const GridPattern = ({ offsetX, offsetY, id }: { offsetX: MotionValue<number>, offsetY: MotionValue<number>, id: string }) => {
  return (
    <svg className="w-full h-full">
      <defs>
        <motion.pattern
          id={id}
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-muted-foreground" 
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + 0.5) % 40);
    gridOffsetY.set((gridOffsetY.get() + 0.5) % 40);
  });

  const maskImage = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-[120px] pb-10 md:pt-[160px] md:pb-16 bg-background overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-bg-1" />
      </div>
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} id="grid-bg-2" />
      </motion.div>

      {/* Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute right-[-10%] top-[-10%] w-[40%] h-[40%] rounded-full bg-orange-500/10 dark:bg-orange-600/5 blur-[120px]" />
        <div className="absolute left-[-10%] bottom-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 dark:bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Learning Platform
            </motion.div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black font-display leading-[1.2] mb-4 tracking-tight uppercase">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400">Enhance skills</span> with our specialists
            </h1>

            {/* Enrolled Count */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex -space-x-2">
                {avatars.map((avatar, i) => (
                  <motion.img
                    key={i}
                    initial={{ scale: 0, x: -10 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    src={avatar}
                    alt="Enrolled user"
                    className="w-8 h-8 rounded-full border-2 border-background object-cover shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm">1100K+ Enrolled</span>
                  <TrendingUp className="w-3.5 h-3.5 text-green-500" />
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-base mb-6 max-w-xl leading-relaxed font-medium">
              Join the world's most immersive learning community. Prepare for the future of work with industry-standard certifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-primary text-xs px-6 h-10 rounded-lg shadow-md uppercase font-black tracking-widest group">
                Explore Courses
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-xs px-6 h-10 rounded-lg border-2 hover:bg-secondary/50 uppercase font-black tracking-widest">
                Corporate Training
              </Button>
            </div>

            {/* Trust Logos - Infinite Marquee */}
            <div className="border-t border-border pt-8 overflow-hidden">
              <p className="text-sm font-bold text-muted-foreground mb-6">Trusted by 4500+ companies worldwide</p>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
                
                <motion.div 
                  className="flex gap-12 items-center"
                  animate={{ x: [0, -1000] }}
                  transition={{ 
                    duration: 30, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                >
                  {[...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Capgemini_logo.svg/1024px-Capgemini_logo.svg.png" alt="Capgemini" className="h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/1024px-Bosch-logo.svg.png" alt="Bosch" className="h-5 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1024px-Accenture.svg.png" alt="Accenture" className="h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/1024px-Microsoft_logo_%282012%29.svg.png" alt="Microsoft" className="h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="Netflix" className="h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" alt="Google" className="h-5 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1024px-BMW.svg.png" alt="BMW" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-colors cursor-pointer" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1024px-Logo_of_Twitter.svg.png" alt="Twitter" className="h-4 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                    </React.Fragment>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Unique Animated Showcase */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Student 1 - Large Circle */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl z-20"
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop" 
                alt="Student Success"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Success Badge 1 */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-40 left-0 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-border z-30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Salary Hike</p>
                <p className="text-lg font-black text-foreground">150% Increase</p>
              </div>
            </motion.div>

            {/* Student 2 - Medium Circle */}
            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop" 
                alt="Student Success"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Success Badge 2 - Microsoft */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-40 right-0 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-border z-30 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-blue-600 fill-blue-600" />
              </div>
              <div>
                <p className="text-xs font-bold text-muted-foreground uppercase">Hired At</p>
                <p className="text-lg font-black text-foreground text-blue-600">Microsoft</p>
              </div>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-dashed border-muted-foreground/30 rounded-full pointer-events-none"
            />
            
            <div className="absolute top-[20%] right-[20%] w-4 h-4 rounded-full bg-orange-500 animate-pulse" />
            <div className="absolute bottom-[20%] left-[20%] w-6 h-6 rounded-full bg-blue-500/40 animate-bounce" />
            <div className="absolute top-[60%] left-[10%] w-3 h-3 rounded-full bg-primary animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
