import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CounsellingModal from "@/components/modals/CounsellingModal";
import AdvisorModal from "@/components/modals/AdvisorModal";

const navItems = [
  { id: "courses", label: "Courses", target: "#catalog" },
  { id: "benefits", label: "Certification", target: "#certification" },
  { id: "reviews", label: "Course Reviews", target: "#testimonials" },
  { id: "faqs", label: "FAQs", target: "#faqs" },
];

interface CategorySubNavProps {
  forcedVisible?: boolean;
}

const CategorySubNav: React.FC<CategorySubNavProps> = ({ forcedVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("courses");
  const [isCounsellingOpen, setIsCounsellingOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  const effectiveVisibility = forcedVisible !== undefined ? forcedVisible : isVisible;

  useEffect(() => {
    const handleScroll = () => {
      // Sub-nav should appear after scrolling past the hero/stats (approx 600px)
      const shouldShow = window.scrollY > 600;
      setIsVisible(shouldShow);

      // Simple active tab logic based on section positions
      navItems.forEach(item => {
        const element = document.querySelector(item.target);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveTab(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, target: string, id: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveTab(id);
    }
  };

  return (
    <AnimatePresence>
      {effectiveVisibility && (
        <motion.div
           initial={{ y: -100, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           exit={{ y: -100, opacity: 0 }}
           transition={{ duration: 0.3 }}
           className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-slate-200 shadow-lg py-4"
        >
          <div className="container flex items-center justify-between gap-8 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-8">
               {navItems.map((item) => (
                 <a
                   key={item.id}
                   href={item.target}
                   onClick={(e) => scrollToSection(e, item.target, item.id)}
                   className={cn(
                     "whitespace-nowrap text-sm font-bold transition-all border-b-2 py-2 mb-[-1.1rem]",
                     activeTab === item.id 
                       ? "text-blue-600 border-blue-600" 
                       : "text-slate-500 border-transparent hover:text-slate-700"
                   )}
                 >
                   {item.label}
                 </a>
               ))}
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
               <button 
                onClick={() => setIsCounsellingOpen(true)}
                className="text-xs font-black text-[#001c3d] px-4 py-2 hover:underline"
              >
                 Book 1:1 Session
               </button>
               <Button 
                onClick={() => setIsAdvisorOpen(true)}
                className="h-10 px-6 rounded-lg bg-[#001c3d] text-white font-black text-xs"
               >
                 Contact Learning Advisor
               </Button>
            </div>

            <CounsellingModal isOpen={isCounsellingOpen} onOpenChange={setIsCounsellingOpen} />
            <AdvisorModal isOpen={isAdvisorOpen} onOpenChange={setIsAdvisorOpen} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategorySubNav;
