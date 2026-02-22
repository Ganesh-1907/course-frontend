import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  ChevronDown, 
  Phone, 
  ShoppingCart, 
  Menu, 
  Sparkles,
  Search as SearchIcon,
  User as UserIcon,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { categoryData } from "@/data/categoryData";

const categories = [
  { id: "agile", name: "AGILE", slug: "agile-scrum", count: 0 },
  { id: "safe", name: "SAFE", slug: "agile-scrum", count: 0 },
  { id: "project", name: "PROJECT", slug: "project-management", count: 0 },
  { id: "business", name: "BUSINESS", slug: "business-skills", count: 0 },
  { id: "cloud-computing", name: "CLOUD COMPUTING", slug: "ai-technology", count: 0 },
  { id: "data-science", name: "DATA SCIENCE", slug: "ai-technology", count: 0 },
  { id: "devops", name: "DEVOPS", slug: "ai-technology", count: 0 },
  { id: "generative-ai", name: "Generative AI", slug: "ai-technology", count: 0 },
  { id: "microcredentials", name: "Microcredentials", slug: "ai-technology", count: 0 },
  { id: "on-demand-microcredentials", name: "ON DEMAND MICROCREDENTIALS", slug: "ai-technology", count: 0 },
  { id: "others", name: "OTHERS", slug: "ai-technology", count: 0 },
  { id: "service", name: "SERVICE", slug: "it-service-management", count: 0 },
  { id: "quality", name: "QUALITY", slug: "quality-process", count: 0 },
  { id: "technology", name: "TECHNOLOGY", slug: "ai-technology", count: 0 },
];

interface HeaderProps {
  hidden?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hidden = false }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("agile");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
      {/* Top Sale Banner
      <motion.div 
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 text-white py-2 text-center relative overflow-hidden hidden md:block"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container relative z-10 flex items-center justify-center gap-4 text-sm font-bold">
          <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest border border-white/20">Limited Time</span>
          <p className="flex items-center gap-2">
            Feb Flash Sale Is Live <Sparkles className="w-4 h-4 fill-white" /> 
            <span className="text-white/80 font-medium">Unlock Up to 50% Off On All Courses</span>
          </p>
          <button className="ml-4 bg-white text-orange-600 px-4 py-1 rounded-full text-xs font-black hover:bg-slate-100 transition-colors">
            Get Offer
          </button>
        </div>
      </motion.div> */}

      {/* Main Header */}
      <header className={cn(
        "transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"
      )}>
        <div className="container">
          <div className="h-16 flex items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-0 group">
                <div className="relative flex items-center justify-center w-12 h-12 transition-all mr-3">
                  <img 
                    src="/logo.png" 
                    alt="Viovn Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-[#001c3d] tracking-tighter leading-none">Viovn</span>
                  <span className="text-[10px] font-bold text-blue-500/80 uppercase tracking-widest leading-none mt-0.5">Technologies</span>
                </div>
              </Link>

              {/* All Courses Toggle */}
              <div className="relative">
                <button 
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all",
                    isMegaMenuOpen ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-muted hover:bg-muted-dark border border-border/50"
                  )}
                >
                  <Menu className="w-4 h-4" />
                  All Courses
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isMegaMenuOpen && "rotate-180")} />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl hidden lg:block mx-8">
              <div className="relative group">
                <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="What do you want to learn today?"
                  className="w-full bg-slate-100 border-none rounded-full py-3.5 pl-14 pr-6 text-sm font-medium focus:ring-2 focus:ring-blue-600/10 transition-all outline-none text-slate-700"
                />
              </div>
            </div>

            {/* Nav Links & Actions */}
            <nav className="flex items-center gap-5">
              <div className="hidden xl:flex items-center gap-5 text-[13px] font-bold text-foreground/80">
                <a href="#" className="hover:text-primary transition-colors">Corporate</a>
                <a href="#" className="hover:text-primary transition-colors">Newsletter</a>
              </div>

              <div className="h-6 w-px bg-border hidden xl:block" />

              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-colors hidden sm:block">
                  <Phone className="w-5 h-5 opacity-70 hover:opacity-100" />
                </button>
                <div className="p-1 bg-muted rounded-xl flex items-center">
                  <button className="flex items-center gap-2 font-black text-sm bg-white border border-border/50 px-4 py-1.5 rounded-lg shadow-sm hover:text-primary transition-colors">
                    Sign In
                  </button>
                </div>
                <div className="relative group cursor-pointer p-2 hover:bg-muted rounded-full transition-colors">
                  <ShoppingCart className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white translate-x-1 -translate-y-1">
                    0
                  </span>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mega Menu implementation */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              className="absolute top-full left-0 right-0 bg-white border-t border-border shadow-2xl overflow-hidden z-[60]"
            >
              <div className="container px-0 flex h-[500px]">
                {/* Categories Column */}
                <div className="w-72 bg-muted/30 border-r border-border py-6 overflow-y-auto">
                  <div className="px-8 mb-4 text-[10px] font-black tracking-widest text-muted-foreground uppercase">Categories</div>
                  {categories.map((cat) => (
                    <Link
                      to={`/category/${cat.slug}`}
                      key={cat.id}
                      onMouseEnter={() => setActiveCategory(cat.id)}
                      className={cn(
                        "w-full text-left px-8 py-3.5 flex items-center justify-between group transition-all",
                        activeCategory === cat.id ? "bg-white text-primary font-bold shadow-sm" : "text-foreground/70 hover:bg-white/50"
                      )}
                    >
                      <span className="text-[13px]">{cat.name}</span>
                      <ArrowRight className={cn(
                        "w-4 h-4 opacity-0 transition-all group-hover:opacity-100",
                        activeCategory === cat.id && "opacity-100 translate-x-0"
                      )} />
                    </Link>
                  ))}
                </div>

                {/* Courses Column */}
                <div className="flex-1 py-8 px-10 overflow-y-auto">
                  <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                    <h3 className="font-black text-lg uppercase tracking-tight">
                      {categoryData[activeCategory]?.name.toUpperCase()} <span className="text-muted-foreground font-medium ml-2 text-sm">({categoryData[activeCategory]?.courses.length || 0} Courses)</span>
                    </h3>
                    <a href="#" className="text-primary text-xs font-bold hover:underline">View all Courses</a>
                  </div>

                  <div className="grid gap-6">
                    {(categoryData[activeCategory]?.courses || []).map((course, i) => (
                      <Link 
                        to="/sub-category" 
                        key={i} 
                        className="flex items-start gap-4 group cursor-pointer"
                        onClick={() => setIsMegaMenuOpen(false)}
                      >
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors italic font-black text-primary text-xs">
                          {course.title.charAt(0)}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="font-bold text-[14px] group-hover:text-primary transition-colors leading-tight">{course.title}</h4>
                            <span className={cn(
                              "text-[10px] px-2 py-0.5 rounded font-black uppercase text-white bg-blue-600"
                            )}>Popular</span>
                          </div>
                          <p className="text-[11px] text-muted-foreground font-medium">{course.duration} | {course.format}</p>
                        </div>
                      </Link>
                    ))}
                    {(!categoryData[activeCategory]?.courses || categoryData[activeCategory]?.courses.length === 0) && (
                      <p className="text-muted-foreground text-sm font-medium italic">New courses arriving soon for this category.</p>
                    )}
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      
      <div className="md:hidden bg-white border-b border-border py-4 px-4 flex items-center justify-between">
        <div className="logo-text text-2xl">viovn</div>
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-6 h-6" />
          <Menu className="w-6 h-6" />
        </div>
      </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
