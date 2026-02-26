import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Calendar, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  TrendingDown,
  User,
  Phone as PhoneIcon,
  Mail,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";

interface Schedule {
  courseCode: string;
  courseName: string;
  dateRange: string;
  timeRange: string;
  trainerName: string;
  trainerImage: string;
  originalPrice: string;
  discountedPrice: string;
  discountPercentage: string;
}

interface CourseSidePanelProps {
  schedules: Schedule[];
}

const CourseSidePanel: React.FC<CourseSidePanelProps> = ({ schedules }) => {
  // Use the first schedule as the featured one for now
  const featuredSchedule = schedules[0];

  return (
    <div className="space-y-3">
      {/* Upcoming Schedule Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white border border-slate-100 rounded-xl shadow-md shadow-slate-200/30 relative overflow-hidden"
      >
        {/* Ribbon */}
        {featuredSchedule?.discountPercentage && (
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none z-10">
            <div className="absolute top-3 -right-8 w-28 h-7 bg-red-500 text-white text-[9px] font-black flex items-center justify-center rotate-45 transform shadow-md uppercase tracking-tight">
              {featuredSchedule.discountPercentage}% OFF
            </div>
          </div>
        )}

        <div className="p-3 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h3 className="text-[13px] font-black text-[#001c3d] flex items-center gap-1.5">
              <div className="p-1 bg-blue-50 rounded-md">
                <Calendar className="w-3 h-3 text-blue-600" />
              </div>
              Upcoming Schedule
            </h3>
          </div>

          {featuredSchedule && (
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 flex-shrink-0 bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center rounded-md italic font-black text-[9px] text-blue-600">
                  {featuredSchedule.courseCode}
                </div>
                <p className="text-[12px] font-black text-slate-800 leading-tight">
                  {featuredSchedule.courseName}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-1.5 bg-slate-50/50 p-2.5 rounded-lg border border-slate-100">
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                  <Calendar className="w-3 h-3 text-orange-500" />
                  <span>{featuredSchedule.dateRange}</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                  <Clock className="w-3 h-3 text-orange-500" />
                  <span>{featuredSchedule.timeRange}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-md overflow-hidden bg-slate-200 ring-1 ring-white shadow-sm">
                  <img src={featuredSchedule.trainerImage} alt={featuredSchedule.trainerName} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Master Trainer</p>
                  <p className="text-[12px] font-black text-blue-600">{featuredSchedule.trainerName}</p>
                </div>
              </div>

              <div className="flex items-end justify-between py-0.5">
                 <div className="flex flex-col">
                   <span className="text-[9px] text-slate-400 line-through font-bold">{featuredSchedule.originalPrice}</span>
                   <span className="text-xl leading-none font-black text-[#001c3d]">{featuredSchedule.discountedPrice}</span>
                 </div>
                 <div className="bg-red-50 text-red-600 text-[9px] font-black px-2 py-0.5 rounded-md flex items-center gap-1 border border-red-100">
                   <TrendingDown className="w-3 h-3" />
                   {featuredSchedule.discountPercentage}% OFF
                 </div>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <Button className="w-full bg-[#ff4d2a] hover:bg-[#e64526] text-white font-black text-[13px] rounded-md h-9 shadow-md shadow-orange-500/20 transition-all active:scale-[0.98]">
              Enroll Now
            </Button>
            <button className="w-full text-[10px] font-black text-slate-500 flex items-center justify-center gap-1 hover:text-blue-600 transition-colors uppercase tracking-widest">
              View all Schedules <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Enquiry Form Card */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-blue-200 rounded-lg shadow-sm p-2.5 space-y-2"
      >
        <div className="space-y-0.5">
          <h3 className="text-[13px] md:text-[14px] font-black text-[#1f2937]">Request More Details</h3>
          <p className="text-[10px] font-medium text-slate-600">
            Need more details about the course?
          </p>
        </div>
        
        <div className="space-y-1.5">
          <div className="relative group">
            <User className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <Input
              placeholder="Full Name*"
              className="h-7 rounded-none border-0 border-b border-b-slate-300 bg-transparent pl-5 pr-0 text-[11px] font-medium placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-blue-500"
            />
          </div>

          <div className="relative group">
            <Mail className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <Input
              placeholder="Email Address*"
              className="h-7 rounded-none border-0 border-b border-b-slate-300 bg-transparent pl-5 pr-0 text-[11px] font-medium placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-blue-500"
            />
          </div>
          
          <div className="flex items-center gap-2 h-7 border-b border-b-slate-300 group focus-within:border-b-blue-500">
            <div className="w-12 flex items-center justify-start gap-1 pr-1">
              <span className="text-[12px] font-semibold">🇮🇳</span>
              <span className="text-[9px] text-slate-400">▼</span>
            </div>
            <div className="flex-1 relative">
              <PhoneIcon className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
              <Input
                placeholder="Mobile Number*"
                className="h-7 border-0 bg-transparent pl-5 pr-0 text-[11px] font-medium placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="relative group">
            <MessageSquare className="pointer-events-none absolute left-0 top-3 w-3.5 h-3.5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            <Textarea 
              placeholder="Your Message..." 
              className="min-h-[28px] max-h-[28px] rounded-none border-0 border-b border-b-slate-300 bg-transparent pl-5 pr-0 py-1 text-[11px] font-medium placeholder:text-slate-500 resize-none overflow-hidden focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-blue-500"
            />
          </div>

          <Button variant="outline" className="w-full border-[#ff4d2a] text-[#1f2937] hover:bg-[#fff7f5] font-black rounded-md h-7 text-[11px] transition-all active:scale-[0.98]">
            Enquire Now
          </Button>

          <p className="text-[8px] text-slate-500 leading-tight text-center font-medium pt-0.5">
            By providing your contact details you agreed to our <span className="text-slate-700 font-bold hover:underline cursor-pointer">Privacy Policy</span> & <span className="text-slate-700 font-bold hover:underline cursor-pointer">Terms and Conditions</span>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseSidePanel;
