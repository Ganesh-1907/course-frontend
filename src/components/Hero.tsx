import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Star, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              <span className="text-primary">Enhance skills with our specialists -</span>
              <br />
              <span className="text-foreground">anytime, anywhere</span>
            </h1>

            {/* Enrolled Count */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-3">
                {avatars.map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt="Enrolled user"
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="font-bold text-lg">1100K+</span>
                <span className="text-muted-foreground">Enrolled</span>
              </div>
            </div>

            <p className="text-muted-foreground text-lg mb-6 max-w-xl">
              Prepare to take the next step in your career with the leading training provider globally. 
              Begin your immersive learning journey with us.
            </p>

            {/* Trust Logos */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-3">Trusted by</p>
              <div className="flex flex-wrap items-center gap-6">
                {trustLogos.map((logo, i) => (
                  <span 
                    key={i} 
                    className="text-muted-foreground font-medium text-sm md:text-base grayscale hover:grayscale-0 transition-all"
                  >
                    {logo.text || logo.letter}
                  </span>
                ))}
              </div>
            </div>

            {/* Ratings */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Trustpilot</span>
                <span className="font-bold">4.8/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-blue-600">Google</span>
                <span className="font-bold">4.9/5</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <Button className="btn-primary text-base">
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Right Content - Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
                alt="Professional training"
                className="w-full h-auto object-cover"
              />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl"
                >
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </motion.button>
              </div>
              {/* Logo Badge */}
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded text-sm font-medium">
                simpliaxis
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
