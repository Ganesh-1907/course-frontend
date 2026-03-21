import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ChevronLeft,
  ChevronRight,
  Calendar, 
  Clock, 
  Filter, 
  X, 
  ChevronDown, 
  Search,
  ShoppingCart,
  Zap,
  Star,
  Users,
  Download,
  AlertCircle,
  TrendingDown,
  CheckCircle,
  ShieldCheck,
  Loader2,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { getAllSchedules, getSchedulesByCategory, ScheduleData } from '@/lib/courseService';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useAuthModal } from '@/context/AuthModalContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface TimeSlot {
  id: string;
  label: string;
  hours: [number, number];
}

const TIME_SLOTS: TimeSlot[] = [
  { id: 'morning', label: 'Morning (6 AM - 12 PM)', hours: [6, 12] },
  { id: 'afternoon', label: 'Afternoon (12 PM - 6 PM)', hours: [12, 18] },
  { id: 'evening', label: 'Evening (5 PM - 7 PM)', hours: [17, 19] },
  { id: 'night', label: 'Night (After 7 PM)', hours: [19, 24] },
];

const getCurrencySymbol = (currency: string | undefined) => {
  switch (currency) {
    case 'INR': return '₹';
    case 'USD': return '$';
    case 'CAD': return 'C$';
    case 'AUD': return 'A$';
    case 'GBP': return '£';
    case 'EUR': return '€';
    case 'SGD': return 'S$';
    default: return currency || '₹';
  }
};

const SchedulesPage: React.FC = () => {
  const { courseName, categoryId } = useParams<{ courseName?: string; categoryId?: string }>();
  const navigate = useNavigate();
  const { addToCart, isInCart, loading: cartLoading } = useCart();
  const { user } = useAuth();
  const { openSignin } = useAuthModal();

  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [courseInfo, setCourseInfo] = useState<{ id: number; name: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filters
  const [activeQuickFilters, setActiveQuickFilters] = useState<string[]>([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([]);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  // Timer for promotional banner
  const [timeLeft, setTimeLeft] = useState('00:08:22');

  useEffect(() => {
    const timer = setInterval(() => {
      // Dummy timer logic
      const parts = timeLeft.split(':');
      let h = parseInt(parts[0]);
      let m = parseInt(parts[1]);
      let s = parseInt(parts[2]);

      if (s > 0) s--;
      else if (m > 0) { m--; s = 59; }
      else if (h > 0) { h--; m = 59; s = 59; }

      setTimeLeft(
        `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
      );
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const searchTarget = courseName || categoryId;
    if (searchTarget) {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          let data;
          if (courseName) {
            data = await getAllSchedules(courseName);
            if (data) {
              setSchedules(data.schedules);
              setCourseInfo(data.course);
            }
          } else if (categoryId) {
            const result = await getSchedulesByCategory(categoryId);
            if (result) {
              setSchedules(result.schedules);
              // For category view, we don't have a specific courseInfo object yet, 
              // but we can set a dummy one or handle it in displayName
              setCourseInfo(null);
            }
          }
          
          if (!schedules.length && !schedules) {
             // Checking data again if needed, but the logic above sets schedules
          }
        } catch (err) {
          setError('Failed to fetch schedules. Please try again later.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [courseName, categoryId]);

  const displayName = useMemo(() => {
    if (courseInfo) return courseInfo.name;
    const target = courseName || categoryId || '';
    return decodeURIComponent(target).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }, [courseName, categoryId, courseInfo]);

  const monthOptions = useMemo(() => {
    const options = [];
    const date = new Date();
    for (let i = 0; i < 12; i++) {
      const d = new Date(date.getFullYear(), date.getMonth() + i, 1);
      const label = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      options.push(label);
    }
    return options;
  }, []);

  const filteredSchedules = useMemo(() => {
    return schedules.filter(s => {
      const scheduleDate = new Date(s.startDate || '');
      const isWeekend = scheduleDate.getDay() === 0 || scheduleDate.getDay() === 6;
      const currentMonth = new Date().getMonth();
      const nextMonth = (currentMonth + 1) % 12;
      const scheduleMonth = scheduleDate.getMonth();

      // Quick Filters
      if (activeQuickFilters.includes('this-month') && scheduleMonth !== currentMonth) return false;
      if (activeQuickFilters.includes('next-month') && scheduleMonth !== nextMonth) return false;
      if (activeQuickFilters.includes('weekdays') && isWeekend) return false;
      if (activeQuickFilters.includes('weekend') && !isWeekend) return false;

      // Month Filter
      if (selectedMonths.length > 0) {
        const scheduleMonthYear = scheduleDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        if (!selectedMonths.includes(scheduleMonthYear)) return false;
      }

      // Time Slot Filter
      if (selectedTimeSlots.length > 0) {
        const startHour = parseInt(s.startTime?.split(':')[0] || '0');
        const matchesAnySlot = selectedTimeSlots.some(slotId => {
          const slot = TIME_SLOTS.find(ts => ts.id === slotId);
          if (!slot) return false;
          return startHour >= slot.hours[0] && startHour < slot.hours[1];
        });
        if (!matchesAnySlot) return false;
      }

      return true;
    });
  }, [schedules, activeQuickFilters, selectedMonths, selectedTimeSlots]);

  const toggleQuickFilter = (id: string) => {
    setActiveQuickFilters(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setActiveQuickFilters([]);
    setSelectedTimeSlots([]);
    setSelectedMonths([]);
  };

  const handleEnroll = async (schedule: ScheduleData) => {
    if (!user) {
      openSignin();
      return;
    }
    await addToCart({
      courseName: schedule.courseName || displayName,
      courseId: schedule.courseId?.toString() || courseInfo?.id.toString(),
      price: Number(schedule.originalPrice),
      discountedPrice: Number(schedule.discountedPrice),
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f8fbff] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
            <p className="text-slate-500 font-bold animate-pulse">Loading amazing schedules...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fbff] text-slate-900 font-sans selection:bg-primary selection:text-white">
      <Header />
      
      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Navigation & Header */}
        <div className="mb-10">
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/category/${categoryId || 'agile'}`)}
            className="mb-6 -ml-2 text-slate-500 hover:text-primary hover:bg-white border border-transparent hover:border-slate-200 transition-all rounded-full px-4"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Category Details
          </Button>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to={`/category/${categoryId || 'agile'}`} className="hover:text-primary transition-colors">Category</Link>
            <ChevronRight className="w-3 h-3" />
            <button 
              onClick={() => navigate(`/category/${categoryId || 'agile'}`)} 
              className="hover:text-primary transition-colors truncate max-w-[250px] uppercase"
            >
              {displayName}
            </button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary cursor-default">Schedules</span>
          </nav>

          <div className="space-y-4 pt-2">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] bg-primary/5 px-3 py-1 rounded-full border border-primary/10">Course Schedules</span>
            <h1 className="text-4xl md:text-5xl font-black text-[#001c3d] leading-[1.15] tracking-tight">
              Schedules for <br />
              <span className="text-primary italic inline-block mt-2">{displayName}</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Filters Bar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'this-month', label: 'This Month' },
                  { id: 'next-month', label: 'Next Month' },
                  { id: 'weekdays', label: 'Weekdays' },
                  { id: 'weekend', label: 'Weekend' },
                ].map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => toggleQuickFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-[12px] font-bold transition-all border ${
                      activeQuickFilters.includes(filter.id)
                        ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105'
                        : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary'
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

              <div className="h-6 w-px bg-slate-100 hidden md:block mx-1" />

              {/* Time Slot Dropdown */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="rounded-full text-[12px] font-bold h-10 border-slate-200 gap-2 relative">
                    <Clock className="w-4 h-4 text-primary" />
                    Time Slot
                    {selectedTimeSlots.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-in zoom-in">
                        {selectedTimeSlots.length}
                      </span>
                    )}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3 rounded-xl shadow-2xl border-slate-100" align="start">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Select Preferences</p>
                    {TIME_SLOTS.map(slot => (
                      <div key={slot.id} className="flex items-center space-x-2 p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" onClick={() => {
                        setSelectedTimeSlots(prev => prev.includes(slot.id) ? prev.filter(id => id !== slot.id) : [...prev, slot.id]);
                      }}>
                        <Checkbox id={slot.id} checked={selectedTimeSlots.includes(slot.id)} />
                        <label className="text-[12px] font-bold cursor-pointer flex-1">{slot.label}</label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              {/* Calendar Dropdown */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="rounded-full text-[12px] font-bold h-10 border-slate-200 gap-2 relative">
                    <Calendar className="w-4 h-4 text-primary" />
                    Calendar
                    {selectedMonths.length > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-black animate-in zoom-in">
                        {selectedMonths.length}
                      </span>
                    )}
                    <ChevronDown className="w-3 h-3 ml-1" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-3 rounded-xl shadow-2xl border-slate-100 max-h-[350px] overflow-y-auto" align="start">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">Select Months</p>
                    {monthOptions.map(month => (
                      <div key={month} className="flex items-center space-x-2 p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer" onClick={() => {
                        setSelectedMonths(prev => prev.includes(month) ? prev.filter(m => m !== month) : [...prev, month]);
                      }}>
                        <Checkbox id={month} checked={selectedMonths.includes(month)} />
                        <label className="text-[12px] font-bold cursor-pointer flex-1">{month}</label>
                      </div>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              {(activeQuickFilters.length > 0 || selectedTimeSlots.length > 0 || selectedMonths.length > 0) && (
                <button 
                  onClick={clearFilters}
                  className="text-[11px] font-black text-slate-400 hover:text-red-500 transition-colors uppercase tracking-widest flex items-center gap-1.5 ml-auto"
                >
                  <X className="w-3.5 h-3.5" />
                  Clear All
                </button>
              )}
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">
              <span>Showing 1 to {filteredSchedules.length} of {filteredSchedules.length} Results</span>
            </div>

            {/* Schedule Cards List */}
            <div className="space-y-4">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((schedule, idx) => (
                  <motion.div
                    key={schedule.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:border-primary/20 flex flex-col md:flex-row gap-6 relative overflow-hidden"
                  >
                    {/* Time of day tag */}
                    <div className="absolute top-0 left-0">
                       <div className={`px-4 py-1.5 rounded-br-2xl text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 ${
                         parseInt(schedule.startTime?.split(':')[0] || '0') < 12 
                          ? 'bg-amber-50 text-amber-600' 
                          : 'bg-indigo-50 text-indigo-600'
                       }`}>
                         {parseInt(schedule.startTime?.split(':')[0] || '0') < 12 ? (
                           <><Zap className="w-3 h-3 fill-amber-600" /> Morning</>
                         ) : (
                           <><Zap className="w-3 h-3 fill-indigo-600" /> Evening</>
                         )}
                       </div>
                    </div>

                    {/* Date & Time */}
                    <div className="md:w-1/3 pt-6 md:pt-2 space-y-4 md:border-r border-slate-100 pr-0 md:pr-6">
                      <div className="space-y-1">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Date & Schedule</p>
                        <h3 className="text-xl font-black text-[#001c3d] tracking-tight">{schedule.dateRange}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5 text-[12px] font-bold text-slate-600">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{schedule.timeRange}</span>
                        </div>
                        <div className="flex items-center gap-3">
                           <Badge variant="secondary" className="bg-slate-50 text-slate-600 border-none font-bold text-[10px] px-2.5 py-1">
                             {schedule.batchType || 'Online Batch'}
                           </Badge>
                           <Badge variant="secondary" className="bg-slate-50 text-slate-600 border-none font-bold text-[10px] px-2.5 py-1">
                             {schedule.language || 'English'}
                           </Badge>
                        </div>
                      </div>

                      {/* Trainer */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ring-2 ring-slate-100 shadow-sm">
                          <User className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Master Trainer</p>
                          <p className="text-sm font-black text-primary leading-tight">{schedule.trainerName}</p>
                        </div>
                      </div>
                    </div>

                    {/* Middle Section: CTA & Details */}
                    <div className="flex-1 flex flex-col justify-center space-y-4 md:border-r border-slate-100 pr-0 md:pr-6">
                      <div className="flex flex-col items-center gap-3">
                         <Button variant="ghost" className="text-primary hover:text-primary/80 font-black text-[12px] gap-2">
                           <Download className="w-4 h-4" />
                           Download Curriculum
                         </Button>

                         {/* Quantity / Info */}
                         <div className="flex items-center gap-4 py-2 px-4 bg-slate-50 rounded-full border border-slate-100">
                            <button className="text-slate-400 hover:text-primary transition-colors font-black text-lg">-</button>
                            <span className="font-black text-sm text-[#001c3d]">1</span>
                            <button className="text-slate-400 hover:text-primary transition-colors font-black text-lg">+</button>
                         </div>

                         {schedule.capacityRemaining !== undefined && schedule.capacityRemaining !== null && schedule.capacityRemaining > 0 && schedule.capacityRemaining <= 10 && (
                           <div className="flex items-center gap-1.5 text-[11px] font-bold text-red-500 animate-pulse">
                             <AlertCircle className="w-3.5 h-3.5" />
                             Only {schedule.capacityRemaining} seats left!
                           </div>
                         )}
                      </div>
                    </div>

                    {/* Pricing Section */}
                    <div className="md:w-1/4 flex flex-col justify-center items-center md:items-end space-y-4 pt-6 md:pt-0">
                      <div className="text-center md:text-right">
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Hurry! Sale Ends Soon</p>
                        <div className="flex items-center justify-center md:justify-end gap-2 mb-1">
                          <span className="text-slate-400 line-through text-sm font-bold">{getCurrencySymbol(schedule.currency)}{schedule.originalPrice?.toLocaleString()}</span>
                          <span className="bg-red-50 text-red-600 text-[10px] font-black px-1.5 py-0.5 rounded border border-red-100">
                            {schedule.discountPercentage}% OFF
                          </span>
                        </div>
                        <h2 className="text-2xl font-black text-[#001c3d]">{getCurrencySymbol(schedule.currency)}{schedule.discountedPrice?.toLocaleString()}</h2>
                      </div>

                      <div className="flex flex-col w-full gap-2 pt-2">
                        <Button
                          onClick={() => handleEnroll(schedule)}
                          className={`w-full h-11 font-black text-[13px] rounded-xl shadow-lg transition-all active:scale-[0.98] ${
                            isInCart(schedule.courseName || displayName)
                              ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-200'
                              : 'bg-primary hover:bg-[#e64526] text-white shadow-orange-200'
                          }`}
                        >
                          {isInCart(schedule.courseName || displayName) ? (
                            <><CheckCircle className="w-4 h-4 mr-2" /> Added to Cart</>
                          ) : (
                            'ENROLL NOW'
                          )}
                        </Button>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            className="flex-1 h-10 border-slate-200 rounded-xl hover:bg-slate-50"
                            onClick={() => handleEnroll(schedule)}
                          >
                            <ShoppingCart className="w-4 h-4 text-primary" />
                          </Button>
                          <Button variant="outline" className="flex-1 h-10 border-slate-200 rounded-xl hover:bg-slate-50">
                            <Badge className="bg-slate-100 text-slate-600 border-none p-1">Share</Badge>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white rounded-3xl p-12 shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="p-6 bg-slate-50 rounded-full">
                    <Calendar className="w-12 h-12 text-slate-200" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-black text-[#001c3d]">No schedules match your filters</h3>
                    <p className="text-slate-500 font-medium max-w-sm">Try adjusting your filters or search for another date range to see availability.</p>
                  </div>
                  <Button onClick={clearFilters} variant="outline" className="rounded-full font-black border-primary text-primary hover:bg-primary/5">
                    Reset All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Why Viovn? Mini Card */}
            <div className="bg-[#001c3d] rounded-2xl p-8 text-white shadow-2xl shadow-slate-900/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <ShieldCheck className="w-24 h-24 -mr-8 -mt-8" />
               </div>
               <h3 className="text-xl font-black text-white flex items-center gap-3 mb-6 relative z-10">
                 <ShieldCheck className="w-7 h-7 text-green-400" />
                 Viovn Advantage
               </h3>
               <ul className="space-y-4 relative z-10">
                 {[
                   "100% Practical Training",
                   "Industry Expert Mentors",
                   "Global Certification",
                   "Career Support & Placement",
                   "Lifetime Access to Course Portal"
                 ].map((item, i) => (
                   <li key={i} className="flex items-start gap-4 text-[14px] font-bold text-slate-300">
                     <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                     {item}
                   </li>
                 ))}
               </ul>
            </div>

            {/* Social Proof Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2 border-r border-slate-50 pr-4">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-green-500 fill-green-500" />
                    <span className="text-sm font-black">Trustpilot</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <div key={i} className="w-4 h-4 bg-green-500 rounded-sm" />)}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400">TrustScore <span className="font-black text-slate-700">4.9</span> | 2,859 reviews</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-blue-600 font-serif">Google</span>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                  </div>
                  <p className="text-[10px] font-bold text-slate-400"><span className="font-black text-slate-700">4.9 / 5</span> | 182 reviews</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-sm relative z-[10-i]">
                        <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-4 border-white bg-[#001c3d] flex items-center justify-center text-[10px] font-black text-white relative z-0">
                      250+
                    </div>
                  </div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Enrolled Professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchedulesPage;
