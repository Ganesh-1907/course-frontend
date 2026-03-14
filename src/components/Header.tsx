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
import { LikeModal } from "@/components/modals/LikeModal";
import { useAuth } from "@/context/AuthContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { useCart } from "@/context/CartContext";
import { LogOut, LayoutDashboard, History, UserCircle, Package, ClipboardList, Award, Library, LifeBuoy, Users } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import { elearningCourses, resourceLinks, userDropdownItems } from "@/data/navigationData";

const categories = [
  { id: "agile", name: "AGILE", slug: "agile", count: 0 },
  { id: "safe", name: "SAFE", slug: "safe", count: 0 },
  { id: "project", name: "PROJECT", slug: "project", count: 0 },
  { id: "business", name: "BUSINESS", slug: "business", count: 0 },
  { id: "cloud-computing", name: "CLOUD COMPUTING", slug: "cloud-computing", count: 0 },
  { id: "data-science", name: "DATA SCIENCE", slug: "data-science", count: 0 },
  { id: "devops", name: "DEVOPS", slug: "devops", count: 0 },
  { id: "generative-ai", name: "Generative AI", slug: "generative-ai", count: 0 },
  { id: "microcredentials", name: "Microcredentials", slug: "microcredentials", count: 0 },
  { id: "on-demand-microcredentials", name: "ON DEMAND MICROCREDENTIALS", slug: "on-demand-microcredentials", count: 0 },
  { id: "others", name: "OTHERS", slug: "others", count: 0 },
  { id: "service", name: "SERVICE", slug: "service", count: 0 },
  { id: "quality", name: "QUALITY", slug: "quality", count: 0 },
  { id: "technology", name: "TECHNOLOGY", slug: "technology", count: 0 },
];

interface HeaderProps {
  hidden?: boolean;
}

const Header: React.FC<HeaderProps> = ({ hidden = false }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("agile");
  const [scrolled, setScrolled] = useState(false);
  const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
  const { user, logout } = useAuth();
  const { openSignin, openSignup } = useAuthModal();
  const { cartCount, setIsCartOpen } = useCart();

  const handleCartClick = () => {
    if (user) {
      setIsCartOpen(true);
    } else {
      openSignin();
    }
  };

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
          <div className="h-16 md:h-20 flex items-center justify-between gap-4">
            
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link to="/" className="flex items-center gap-0 group">
                <div className="relative flex items-center justify-center h-12 md:h-16 transition-all mr-2">
                  <img 
                    src="/image.png" 
                    alt="Viovn Logo" 
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>

              {/* All Courses Toggle */}
              <div className="relative">
                <button 
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  className={cn(
                    "flex items-center gap-2.5 px-5 py-2.5 rounded-lg font-bold text-[15px] transition-all border",
                    isMegaMenuOpen 
                      ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                      : "bg-[#eff6ff] text-slate-800 border-[#cbd5e1] hover:bg-slate-100 hover:border-slate-300"
                  )}
                >
                  <Menu className="w-4 h-4" />
                  All Courses
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isMegaMenuOpen && "rotate-180")} />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-3xl hidden lg:block mx-2">
              <div className="relative group">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="What you want to learn today?"
                  className="w-full bg-[#eff6ff] border border-[#cbd5e1] rounded-lg py-3 pl-12 pr-6 text-[15px] font-medium placeholder:text-slate-500 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/5 transition-all outline-none text-slate-700"
                />
              </div>
            </div>

            {/* Nav Links & Actions */}
            <nav className="flex items-center gap-5">
              <div className="hidden xl:flex items-center gap-5 text-[13px] font-bold text-foreground/80">
                <div className="relative group">
                  <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                    <span className="bg-slate-900 text-[9px] text-white px-1.5 py-0.5 rounded leading-none font-black uppercase">New</span>
                    Combo Courses
                  </a>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer">
                    E-learning <ChevronDown className="w-3.5 h-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80 max-h-[400px] overflow-y-auto p-2 bg-white rounded-xl shadow-2xl border-border/50">
                    <div className="grid gap-1">
                      {elearningCourses.map((course, idx) => (
                        <DropdownMenuItem key={idx} className="p-0">
                          <Link 
                            to={course.path}
                            className="w-full px-3 py-2 text-[13px] font-medium hover:bg-slate-50 cursor-pointer rounded-lg block"
                          >
                            {course.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors outline-none cursor-pointer">
                    Resources <ChevronDown className="w-3.5 h-3.5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 p-2 bg-white rounded-xl shadow-2xl border-border/50">
                    <div className="grid gap-1">
                      {resourceLinks.map((link, idx) => (
                        <DropdownMenuItem key={idx} className="px-3 py-2 text-[13px] font-medium hover:bg-slate-50 cursor-pointer rounded-lg">
                          {link}
                        </DropdownMenuItem>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>

                <a href="#" className="hover:text-primary transition-colors">Corporate</a>
              </div>

              <div className="h-6 w-px bg-border hidden xl:block" />

              <div className="flex items-center gap-4">
                <button className="hover:text-primary transition-colors hidden sm:block">
                  <Phone className="w-5 h-5 opacity-70 hover:opacity-100" />
                </button>
                <div className="flex items-center gap-3">
                  {!user ? (
                    <button 
                      onClick={openSignup}
                      className="flex items-center gap-2 font-black text-sm bg-primary text-white px-6 py-2.5 rounded-xl shadow-[0_4px_14px_0_rgba(255,87,34,0.39)] hover:shadow-[0_6px_20px_rgba(255,87,34,0.23)] hover:bg-primary/90 transition-all active:scale-95 group"
                    >
                      Sign Up
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-4">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                          <div className="flex items-center gap-1.5 p-1.5 hover:bg-muted rounded-full transition-all group">
                            <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center border border-border/50 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                              <UserIcon className="w-4 h-4 text-slate-600 group-hover:text-primary" />
                            </div>
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors" />
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-64 p-2 bg-white rounded-xl shadow-2xl border-border/50" align="end">
                          <DropdownMenuLabel className="px-3 py-2">
                            <div className="flex flex-col">
                              <span className="text-sm font-black">{user.name}</span>
                              <span className="text-[11px] text-muted-foreground font-medium">{user.email}</span>
                            </div>
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator className="my-2" />
                          <DropdownMenuGroup>
                            {userDropdownItems.map((item, idx) => {
                              const Icon = {
                                LayoutDashboard,
                                Users,
                                History,
                                UserCircle,
                                Package,
                                ClipboardList,
                                Award,
                                Library,
                                LifeBuoy
                              }[item.icon];

                              return (
                                <DropdownMenuItem key={idx} className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-bold text-slate-700 hover:bg-slate-50 hover:text-primary cursor-pointer rounded-lg transition-colors">
                                  {Icon && <Icon className="w-4 h-4 opacity-70" />}
                                  {item.label}
                                </DropdownMenuItem>
                              );
                            })}
                          </DropdownMenuGroup>
                          <DropdownMenuSeparator className="my-2" />
                          <div className="p-1">
                            <button 
                              onClick={logout}
                              className="w-full flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white text-[13px] font-black rounded-lg hover:bg-slate-800 transition-all"
                            >
                              <LogOut className="w-4 h-4" />
                              Logout
                            </button>
                          </div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  )}
                </div>
                <div 
                  onClick={handleCartClick}
                  className="relative group cursor-pointer p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <ShoppingCart className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white translate-x-1 -translate-y-1">
                      {cartCount > 9 ? '9+' : cartCount}
                    </span>
                  )}
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
                        to={course.navigate || "/sub-category"} 
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
        <Link to="/" className="flex items-center">
          <img src="/image.png" alt="Viovn Logo" className="h-10 w-auto object-contain mr-2" />
          <div className="logo-text text-xl font-black">viovn</div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer" onClick={handleCartClick}>
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-white text-[9px] font-black rounded-full flex items-center justify-center border-2 border-white">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </div>
          <Menu className="w-6 h-6" />
        </div>
      </div>
      </motion.div>
      )}
      <LikeModal isOpen={isLikeModalOpen} onClose={() => setIsLikeModalOpen(false)} />
    </AnimatePresence>
  );
};

export default Header;
