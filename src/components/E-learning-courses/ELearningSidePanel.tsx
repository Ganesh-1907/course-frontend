import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Share2, CheckCircle, Smartphone, Clock, ShieldCheck, TrendingDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

interface ELearningSidePanelProps {
  previewImage: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
  timeLeft: string;
  courseInclusions: string[];
}

const ELearningSidePanel: React.FC<ELearningSidePanelProps> = ({
  previewImage,
  originalPrice,
  discountedPrice,
  discountPercentage,
  timeLeft,
  courseInclusions = ["Completion Certificate", "Mobile access", "365 days access"]
}) => {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <div className="sticky top-20 space-y-4 pt-4 lg:pt-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-[#FFEDD5] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(251,146,60,0.15)]"
      >
        {/* Course Preview */}
        <div className="relative group aspect-video cursor-pointer">
          <img 
            src={previewImage} 
            alt="Course Preview" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:bg-black/50">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 text-slate-900 fill-current ml-1" />
            </div>
            <span className="text-white font-bold mt-4 text-sm group-hover:underline">Preview this course</span>
          </div>
          
          <button className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Pricing & Actions */}
        <div className="p-5 md:p-6 space-y-6">
          <div className="space-y-6">
            <Tabs defaultValue="personal" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-2 bg-slate-100/50 p-1 rounded-2xl h-11">
                <TabsTrigger 
                  value="personal" 
                  className="rounded-xl font-bold text-sm h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  Personal
                </TabsTrigger>
                <TabsTrigger 
                  value="teams"
                  className="rounded-xl font-bold text-sm h-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  Teams
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-extrabold text-[#1a1a1a]">{discountedPrice}</span>
                <span className="text-slate-400 line-through font-bold">{originalPrice}</span>
                <span className="text-primary font-black text-sm">{discountPercentage} off</span>
              </div>
              
              <div className="flex items-center gap-2 text-[#92400E] bg-[#FEF3C7] px-3 py-1.5 rounded-lg w-fit">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-bold">{timeLeft} left at this price!</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
             <div className="text-[14px] font-bold text-slate-900">This course includes</div>
             <ul className="space-y-3">
               {courseInclusions.map((item, idx) => (
                 <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                   <CheckCircle className="w-5 h-5 text-primary fill-primary/10" />
                   {item}
                 </li>
               ))}
             </ul>
          </div>

          <div className="space-y-3">
            <Button className="w-full bg-primary hover:bg-orange-600 text-white font-black text-base h-13 rounded-2xl shadow-lg shadow-orange-500/20 active:scale-[0.98] transition-all">
              Buy now
            </Button>
            <div className="text-center">
              <span className="text-[13px] font-bold text-slate-500 flex items-center justify-center gap-2">
                30-Day Money-Back Guarantee
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Secondary Action/Info */}
      <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-5 text-center">
        <div className="text-sm font-bold text-slate-800 mb-2">Subscribe to thousands of top courses</div>
        <p className="text-xs text-slate-500 font-medium mb-4">Master high-demand skills and earn certificates.</p>
        <Button variant="outline" className="w-full border-slate-300 font-bold text-sm h-11 rounded-xl hover:bg-white transition-colors">
          Explore Subscription
        </Button>
      </div>
    </div>
  );
};

export default ELearningSidePanel;
