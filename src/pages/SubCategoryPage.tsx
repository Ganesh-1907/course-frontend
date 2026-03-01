import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import CallToAction from "@/components/CallToAction";
import SuccessRoadmap from "@/components/SuccessRoadmap";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Target,
  Trophy,
  Briefcase,
  Star,
  BookOpen
} from "lucide-react";

const subCategoryCourses = [
  {
    id: 1,
    title: "Certified Scrum Master (CSM®) Certification Training",
    category: "Scrum Alliance",
    rating: 5.0,
    enrolled: "73k+",
    duration: "02 Days",
    format: "Live Classroom",
    price: 349,
    originalPrice: 499,
    discount: 30,
    badge: "Most Popular",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    nextDate: "February 22, 2026",
  },
  {
    id: 2,
    title: "Certified Scrum Product Owner (CSPO®)",
    category: "Scrum Alliance",
    rating: 4.9,
    enrolled: "45k+",
    duration: "02 Days",
    format: "Live Classroom",
    price: 399,
    originalPrice: 599,
    discount: 33,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    nextDate: "February 24, 2026",
  },
];

const highlights = [
  "Official Scrum Alliance Course Material",
  "Taught by Certified Scrum Trainers (CSTs)",
  "Includes Examination Fee & 2-Yr Membership",
  "16-20 SEUs and PDUs as applicable",
  "Hands-on Simulations & Interactive Exercises",
  "Lifetime access to specialized Agile community"
];

const SubCategoryPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20">
        {/* Sub-Category Hero */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                    Certification Track
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Scrum Alliance</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-display tracking-tight mb-8 leading-[1.05]">
                  Become a Certified <br />
                  <span className="text-primary italic">Scrum Professional</span>
                </h1>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {highlights.map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground/80 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="btn-primary h-14 px-8 rounded-2xl text-lg shadow-xl shadow-primary/20">
                    View Course Schedules
                  </Button>
                  <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-bold hover:bg-muted transition-all">
                    Download Career Path
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white ring-1 ring-border">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&h=600&fit=crop" 
                    alt="Scrum Training"
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex items-center gap-4 text-white">
                      <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="Trainer" />
                      </div>
                      <div>
                        <p className="text-sm font-black">Learn from Aakash Srinivasan</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider opacity-80">Certified Scrum Trainer (CST)</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating Stats */}
                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border animate-bounce-slow">
                   <div className="flex items-center gap-2 mb-1">
                     <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                     <span className="font-black">4.9/5</span>
                   </div>
                   <p className="text-[10px] font-bold text-muted-foreground uppercase">Top Rated Track</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Stats Bar */}
        <section className="bg-muted/30 py-12 border-y border-border">
          <div className="container overflow-x-auto no-scrollbar">
            <div className="flex flex-nowrap md:flex-wrap items-center justify-between gap-12">
              <div className="flex items-center gap-4 flex-shrink-0">
                <Clock className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-xl font-black">16 Hours</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Immersion</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <Target className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-xl font-black">Live Interaction</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Real-time labs</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <Trophy className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-xl font-black">Global Cert</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Scrum Alliance</p>
                </div>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <Briefcase className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-xl font-black">Career Support</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Interview Prep</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Course Grid for Sub-category */}
        <section className="py-24">
          <div className="container">
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-black tracking-tight mb-4 uppercase">Available Scrum Alliance Courses</h2>
              <p className="text-muted-foreground font-medium">Choose your focus area within the Scrum framework and start your professional journey today.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subCategoryCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
              {/* Add a "Coming Soon" or special workshop tile to round out the grid */}
              <div className="rounded-[2.5rem] bg-muted/20 border-2 border-dashed border-border p-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-3xl bg-white flex items-center justify-center shadow-sm mb-6">
                  <BookOpen className="w-8 h-8 text-primary/40" />
                </div>
                <h3 className="font-bold text-lg mb-2">Private Team Training</h3>
                <p className="text-sm text-muted-foreground mb-6">Customized Scrum training for your entire corporate squad.</p>
                <Button variant="outline" className="rounded-full font-bold">Inquire Now</Button>
              </div>
            </div>
          </div>
        </section>

        <SuccessRoadmap />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default SubCategoryPage;
