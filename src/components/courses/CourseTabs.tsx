import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface CourseTabsProps {
  tabs: Tab[];
}

const CourseTabs: React.FC<CourseTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full">
      {/* Tab Navigation - Sticky with Glassmorphism */}
      <div className="sticky top-16 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-10 min-w-max">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "py-5 px-1 text-[13px] uppercase tracking-widest font-black transition-all relative group",
                activeTab === tab.id 
                  ? "text-blue-600" 
                  : "text-slate-400 hover:text-slate-600"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 shadow-sm"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content with Animation */}
      <div className="py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CourseTabs;
