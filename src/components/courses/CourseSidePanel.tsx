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
  MessageSquare,
  ShoppingCart,
  CheckCircle,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { useAuthModal } from "@/context/AuthModalContext";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getRecentSchedule, ScheduleData } from "@/lib/courseService";

interface Schedule {
  id?: number | string;
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
  schedules?: Schedule[];
  courseId?: string;
  courseName?: string;
}

const CourseSidePanel: React.FC<CourseSidePanelProps> = ({ schedules = [], courseId, courseName }) => {
  const [dynamicSchedule, setDynamicSchedule] = React.useState<ScheduleData | null>(null);
  const [isFetching, setIsFetching] = React.useState(false);
  const [isPlanModalOpen, setIsPlanModalOpen] = React.useState(false);

  // Prioritize dynamic schedule over initial props
  const featuredSchedule = dynamicSchedule || (schedules?.length > 0 ? schedules[0] : null);
  
  const { user } = useAuth();
  const { openSignin } = useAuthModal();
  const { addToCart, isInCart, loading } = useCart();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (courseName) {
      const fetchSchedule = async () => {
        setIsFetching(true);
        try {
          const data = await getRecentSchedule(courseName);
          if (data) {
            setDynamicSchedule(data);
          }
        } catch (error) {
          console.error('Failed to fetch dynamic schedule:', error);
        } finally {
          setIsFetching(false);
        }
      };
      fetchSchedule();
    }
  }, [courseName]);

  const name = courseName || featuredSchedule?.courseName || 'This course';
  const inCart = isInCart(courseId || name);

  // Parse price strings like "₹15,000" → 15000 for the payload
  const parsePrice = (price?: string | number): number => {
    if (price === undefined || price === null) return 0;
    if (typeof price === "number") return price;
    const num = parseFloat(price.replace(/[^0-9.]/g, ''));
    return isNaN(num) ? 0 : num;
  };

  const handleEnroll = async () => {
    setIsPlanModalOpen(true);
  };

  const handleSelectPlan = (plan: 'Basic' | 'Premium') => {
    if (!featuredSchedule) return;

    const basePrice = parsePrice(featuredSchedule.discountedPrice);
    const finalPrice = plan === 'Premium' ? basePrice * 1.3 : basePrice;

    // Navigate to enroll with state instead of adding to cart (frontend-only flow)
    const enrollItem = {
      courseId: String(featuredSchedule.id || courseId || name),
      courseName: featuredSchedule.courseName,
      price: parsePrice(featuredSchedule.originalPrice),
      basePrice: basePrice,
      discountedPrice: finalPrice,
      image: featuredSchedule.trainerImage,
      plan: plan,
      dateRange: featuredSchedule.dateRange,
      timeRange: featuredSchedule.timeRange
    };

    setIsPlanModalOpen(false);
    navigate('/enroll', { state: { items: [enrollItem] } });
  };

  return (
    <div className="space-y-3">
      {/* Upcoming Schedule Card */}
      {(featuredSchedule || isFetching) && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border border-slate-100 rounded-xl shadow-md shadow-slate-200/30 relative overflow-hidden"
        >
          {isFetching ? (
            <div className="p-8 flex flex-col items-center justify-center space-y-3">
              <Loader2 className="w-6 h-6 animate-spin text-primary/50" />
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Checking Schedules...</p>
            </div>
          ) : (
            <>
              {/* Ribbon */}
              {featuredSchedule?.discountPercentage && featuredSchedule.discountPercentage !== '0' && (
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none z-10">
                  <div className="absolute top-3 -right-8 w-28 h-7 bg-red-500 text-white text-[9px] font-black flex items-center justify-center rotate-45 transform shadow-md uppercase tracking-tight">
                    {featuredSchedule.discountPercentage}% OFF
                  </div>
                </div>
              )}

              <div className="p-3 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                  <h3 className="text-[13px] font-black text-[#001c3d] flex items-center gap-1.5">
                    <div className="p-1 bg-accent rounded-md">
                      <Calendar className="w-3 h-3 text-primary" />
                    </div>
                    Upcoming Schedule
                  </h3>
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-start gap-2.5">
                    <div className="w-9 h-9 flex-shrink-0 bg-slate-50 border border-slate-100 p-1.5 flex items-center justify-center rounded-md italic font-black text-[9px] text-primary">
                      {featuredSchedule.courseCode || 'LIVE'}
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
                      <p className="text-[12px] font-black text-primary">{featuredSchedule.trainerName}</p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between py-0.5">
                     <div className="flex flex-col">
                       <span className="text-[9px] text-slate-400 line-through font-bold">{featuredSchedule.originalPrice}</span>
                       <span className="text-xl leading-none font-black text-[#001c3d]">{featuredSchedule.discountedPrice}</span>
                     </div>
                     {featuredSchedule.discountPercentage && featuredSchedule.discountPercentage !== '0' && (
                       <div className="bg-red-50 text-red-600 text-[9px] font-black px-2 py-0.5 rounded-md flex items-center gap-1 border border-red-100">
                         <TrendingDown className="w-3 h-3" />
                         {featuredSchedule.discountPercentage}% OFF
                       </div>
                     )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Button
                    onClick={handleEnroll}
                    disabled={loading}
                    className={`w-full font-black text-[13px] rounded-md h-9 shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${
                      inCart
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-500/20'
                        : 'bg-[#ff4d2a] hover:bg-[#e64526] text-white shadow-orange-500/20'
                    }`}
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : inCart ? (
                      <><CheckCircle className="w-4 h-4" /> Added to Cart</>
                    ) : (
                      <><ShoppingCart className="w-4 h-4" /> Enroll Now</>
                    )}
                  </Button>
                  <button 
                    onClick={() => navigate(`/course/${encodeURIComponent(name)}/schedules`)}
                    className="w-full text-[10px] font-black text-slate-500 flex items-center justify-center gap-1 hover:text-primary transition-colors uppercase tracking-widest"
                  >
                    View all Schedules <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </>
          )}
        </motion.div>
      )}

      {/* Enquiry Form Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white border border-primary/20 rounded-lg shadow-sm p-2.5 space-y-2"
      >
        <div className="space-y-0.5">
          <h3 className="text-[13px] md:text-[14px] font-black text-[#1f2937]">Request More Details</h3>
          <p className="text-[10px] font-medium text-slate-600">
            Need more details about the course?
          </p>
        </div>

        <div className="space-y-1.5">
          <div className="relative group">
            <User className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Full Name*"
              className="h-7 rounded-none border-0 border-b border-b-slate-300 bg-transparent pl-5 pr-0 text-[11px] font-medium placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-primary"
            />
          </div>

          <div className="relative group">
            <Mail className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Email Address*"
              className="h-7 rounded-none border-0 border-b border-b-slate-300 bg-transparent pl-5 pr-0 text-[11px] font-medium placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-primary"
            />
          </div>

          <div className="flex items-center gap-2 h-7 border-b border-b-slate-300 group focus-within:border-b-primary">
            <div className="w-12 flex items-center justify-start gap-1 pr-1">
              <span className="text-[12px] font-semibold">🇮🇳</span>
              <span className="text-[9px] text-slate-400">▼</span>
            </div>
            <div className="flex-1 relative">
              <PhoneIcon className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Mobile Number*"
                className="h-7 border-0 bg-transparent pl-5 pr-0 text-[11px] font-medium placeholder:text-slate-500 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="relative group">
            <MessageSquare className="pointer-events-none absolute left-0 top-3 w-3.5 h-3.5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Textarea
              placeholder="Your Message..."
              className="min-h-[28px] max-h-[28px] rounded-none border-0 border-b border-b-slate-300 bg-transparent pl-5 pr-0 py-1 text-[11px] font-medium placeholder:text-slate-500 resize-none overflow-hidden focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-primary"
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

      {/* Plan Selection Modal */}
      <Dialog open={isPlanModalOpen} onOpenChange={setIsPlanModalOpen}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-[#f8fafc] border-none shadow-2xl">
          <div className="p-4 md:p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-white w-fit px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Quantity - 1</span>
              </div>
            </div>

            <div className="space-y-1 text-center max-w-xl mx-auto">
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Select Your Plan and Level Up Now!</h2>
              <p className="text-slate-500 font-bold text-[10px] leading-tight">Premium Plan students achieved a 99% first-attempt success rate.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-1">
              {/* Basic Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-slate-200 rounded-xl translate-y-1 translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                <div className="relative bg-white rounded-xl border border-slate-200 p-3 flex flex-col h-full group-hover:border-slate-300 transition-all">
                  <div className="absolute top-2 right-2 font-black text-[7px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full border border-green-100 uppercase">50% OFF</div>
                  <div className="space-y-2 flex-1 pt-1">
                    <div className="space-y-0">
                      <h3 className="text-md font-black text-slate-800">Basic Plan</h3>
                      <p className="text-[7px] font-black text-slate-400 uppercase tracking-[0.1em]">Essentials</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-lg font-black text-slate-900 tracking-tight">INR {Math.round(parsePrice(featuredSchedule?.discountedPrice)).toLocaleString()}</p>
                      <p className="text-[9px] text-slate-400 line-through font-bold">INR {Math.round(parsePrice(featuredSchedule?.originalPrice)).toLocaleString()}</p>
                    </div>
                    <p className="text-[8px] font-bold text-blue-600 bg-blue-50 w-fit px-1.5 py-0.5 rounded-md">From INR {Math.round(parsePrice(featuredSchedule?.discountedPrice) / 12).toLocaleString()} /mo</p>
                  </div>
                  <Button
                    onClick={() => handleSelectPlan('Basic')}
                    variant="outline"
                    className="mt-3 h-8 w-full font-black border border-slate-200 text-slate-800 hover:bg-slate-50 text-[10px] transition-all rounded-lg"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>

              {/* Premium Plan */}
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/10 rounded-xl translate-y-1.5 translate-x-0.5 blur-md opacity-0 group-hover:opacity-100 transition-all" />
                <div className="absolute inset-0 bg-blue-600 rounded-xl translate-y-1 translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
                <div className="relative bg-[#001c3d] rounded-xl border border-blue-500/30 p-3 flex flex-col h-full overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-orange-400 to-rose-400" />
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-[7px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap z-10 uppercase tracking-widest">
                    90% Preferred
                  </div>
                  <div className="absolute top-2 right-2 font-black text-[7px] text-green-400 bg-green-950/50 px-1.5 py-0.5 rounded-full border border-green-500/20 uppercase">65% OFF</div>

                  <div className="space-y-2 flex-1 pt-3">
                    <div className="space-y-0">
                      <h3 className="text-md font-black text-white">Premium Plan</h3>
                      <p className="text-[7px] font-black text-blue-400 uppercase tracking-[0.1em]">Full Experience</p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-lg font-black text-white tracking-tight">INR {Math.round(parsePrice(featuredSchedule?.discountedPrice) * 1.3).toLocaleString()}</p>
                      <p className="text-[9px] text-slate-400 line-through font-bold">INR {Math.round(parsePrice(featuredSchedule?.originalPrice) * 1.5).toLocaleString()}</p>
                    </div>
                    <p className="text-[8px] font-bold text-blue-300 bg-blue-900/30 w-fit px-1.5 py-0.5 rounded-md">From INR {Math.round((parsePrice(featuredSchedule?.discountedPrice) * 1.3) / 12).toLocaleString()} /mo</p>
                  </div>
                  <Button
                    onClick={() => handleSelectPlan('Premium')}
                    className="mt-3 h-8 w-full font-black bg-gradient-to-r from-[#ff4d2a] to-[#ff2a6c] hover:from-[#e64526] hover:to-[#e62661] text-white text-[10px] border-none transition-all rounded-lg shadow-lg shadow-orange-500/10"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>

            {/* Features Comparison Table */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="py-2.5 px-3 text-[9px] font-black text-slate-500 uppercase tracking-widest">Compare Benefits</th>
                    <th className="py-2.5 px-3 text-center text-[9px] font-black text-slate-500 uppercase w-20 border-l border-slate-50">Basic</th>
                    <th className="py-2.5 px-3 text-center text-[9px] font-black text-blue-600 uppercase w-20 border-l border-slate-50">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { name: 'Self-paced video training', basic: true, premium: true },
                    { name: 'Live virtual classroom training', basic: false, premium: true },
                    { name: 'Exam Fee Included in Course Fee', basic: true, premium: true },
                    { name: 'Certification from Scaled Agile, Inc.', basic: true, premium: true },
                    { name: 'Earn 16 PDUs and 16 SEUs', basic: true, premium: true },
                    { name: '100% Satisfaction Guarantee', basic: true, premium: true },
                    { name: 'Post-training support & Mentorship', basic: false, premium: true },
                    { name: 'Unlimited retake session for 120 days', basic: false, premium: true },
                  ].map((feature, idx) => (
                    <tr key={idx} className="group hover:bg-slate-50/50 transition-colors">
                      <td className="py-3 px-3 text-[10px] font-bold text-slate-700">{feature.name}</td>
                      <td className="py-3 px-3 text-center border-l border-slate-50">
                        {feature.basic ? (
                          <div className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto"><CheckCircle className="w-3 h-3" /></div>
                        ) : (
                          <div className="w-4 h-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto opacity-30"><span className="text-sm leading-none">×</span></div>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center border-l border-slate-100 bg-blue-50/10">
                        {feature.premium ? (
                          <div className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-sm shadow-blue-500/10"><CheckCircle className="w-3 h-3" /></div>
                        ) : (
                          <div className="w-4 h-4 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto opacity-30"><span className="text-sm leading-none">×</span></div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseSidePanel;
