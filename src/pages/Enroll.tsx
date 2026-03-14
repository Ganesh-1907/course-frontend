import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  ShoppingCart,
  User,
  CreditCard,
  Check,
  Plus,
  Minus,
  Trash2,
  Phone,
  Mail,
  MapPin,
  Tag,
  Gift,
  ArrowRight,
  ShieldCheck,
  Zap,
  Calendar,
  Clock,
  Info
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Course Details", icon: ShoppingCart },
  { id: 2, title: "Learner Details", icon: User },
  { id: 3, title: "Payment Details", icon: CreditCard },
];

const Enroll = () => {
  const { cart, removeFromCart, addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const [isBenefitsModalOpen, setIsBenefitsModalOpen] = useState(false);

  // Track items from location state for "clean flow" (no cart persistence)
  const [displayItems, setDisplayItems] = useState<any[]>([]);

  useEffect(() => {
    if (location.state?.items) {
      setDisplayItems(location.state.items);
    } else {
      setDisplayItems(cart);
    }
  }, [location.state, cart]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    referralCode: "",
  });

  const calculateSubtotal = () => {
    return displayItems.reduce((acc, item) => acc + ((item.discountedPrice || item.price || 0) * (item.quantity || 1)), 0);
  };

  const calculateGST = () => calculateSubtotal() * 0.18;
  const calculateTotal = () => calculateSubtotal() + calculateGST();

  const handleNext = () => {
    if (currentStep === 1 && displayItems.length === 0) {
      toast.error("No courses selected");
      return;
    }
    if (currentStep === 2) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
    else navigate(-1);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    // 1. Load Razorpay script
    const res = await loadRazorpayScript();

    if (!res) {
      toast.error("Failed to load Razorpay SDK. Please check your connection.");
      return;
    }

    // 2. Define Razorpay options
    // NOTE: To get the full Razorpay UI without a backend order ID,
    // you must use a globally valid Test Key or your own Test Key from Razorpay Dashboard.
    const razorpayKey = import.meta.env.VITE_RAZP_KEY || "rzp_test_1DP5mmOlF5G5ag"; 

    const options = {
      key: razorpayKey, 
      amount: Math.round(calculateTotal() * 100).toString(), // amount in paise (convert to string for safety)
      currency: "INR",
      name: "VIOVN EduTech",
      description: "Dummy Course Enrollment Payment",
      image: "https://your-logo-url.png",
      handler: function (response: any) {
        // This handler triggers upon successful payment in the Razorpay Iframe
        console.log("Payment Success:", response);
        toast.success(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        
        // Navigate to home after brief success visual
        setTimeout(() => {
           navigate("/");
        }, 1500);
      },
      prefill: {
        name: formData.fullName || "Test User",
        email: formData.email || "test@example.com",
        contact: formData.phone || "9999999999",
      },
      notes: {
        address: formData.city || "Test City",
      },
      theme: {
        color: "#0f172a", // Brand color
      },
    };

    try {
      // 3. Initialize and open Razorpay iframe
      const paymentObject = new (window as any).Razorpay(options);
      
      paymentObject.on("payment.failed", function (response: any) {
        console.error("Payment Failed", response.error);
        toast.error(`Payment failed: ${response.error.description || "Unknown error"}`);
      });
      
      paymentObject.open();
    } catch (err) {
      console.error("Error opening Razorpay", err);
      toast.error("Failed to initialize payment gateway. Please make sure your Test Key is valid.");
    }
  };

  const loadStripeScript = () => {
    return new Promise((resolve) => {
      // Avoid loading multiple times
      if (document.querySelector('script[src="https://checkout.stripe.com/checkout.js"]')) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleStripePayment = async () => {
    // 1. Load Stripe script
    const res = await loadStripeScript();

    if (!res) {
      toast.error("Failed to load Stripe SDK. Please check your connection.");
      return;
    }

    // 2. Define Stripe options
    // NOTE: To get the full Stripe UI without a backend,
    // you must use your own Publishable Test Key from Stripe Dashboard.
    const stripeKey = import.meta.env.VITE_STRIPE_KEY || "pk_test_TYooMQauvdEDq54NiTphI7jx"; // Fallback generic test key

    try {
      // 3. Initialize and open Stripe checkout
      const handler = (window as any).StripeCheckout.configure({
        key: stripeKey,
        locale: "auto",
        token: function (token: any) {
          // This handler triggers upon successful payment token generation in the Stripe UI
          console.log("Stripe Payment Token generated:", token);
          toast.success(`Payment successful! Token: ${token.id}`);
          
          // Navigate to home after brief success visual
          setTimeout(() => {
             navigate("/");
          }, 1500);
        }
      });

      handler.open({
        name: "VIOVN EduTech",
        description: "Dummy Course Enrollment Payment",
        amount: Math.round(calculateTotal() * 100),
        currency: "inr",
        email: formData.email || "test@example.com"
      });

      // Cleanup
      window.addEventListener('popstate', function() {
        handler.close();
      });

    } catch (err) {
      console.error("Error opening Stripe", err);
      toast.error("Failed to initialize Stripe payment gateway.");
    }
  };

  const handlePlanChange = (courseId: string, newPlan: 'Basic' | 'Premium') => {
    setDisplayItems(prevItems => prevItems.map(item => {
      if (item.courseId === courseId) {
        const base = item.basePrice || (item.plan === 'Premium' ? item.discountedPrice / 1.3 : item.discountedPrice);
        return {
          ...item,
          plan: newPlan,
          discountedPrice: newPlan === 'Premium' ? base * 1.3 : base,
          basePrice: base // Ensure basePrice is preserved
        };
      }
      return item;
    }));
  };

  const updateQuantity = (courseId: string, delta: number) => {
    setDisplayItems(prevItems => prevItems.map(item => {
      if (item.courseId === courseId) {
        const newQty = Math.max(1, (item.quantity || 1) + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-[#e2e8f0] pb-20 font-sans">
      <Header />
      
      <div className="pt-24 md:pt-28 container mx-auto px-4">
        {/* Stepper Breadcrumbs - Centered below header */}
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-2 mb-6 border border-white/40 shadow-sm overflow-x-auto max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 min-w-max px-2">
            {steps.map((step, idx) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-black border-2 transition-all",
                    currentStep === step.id 
                      ? "bg-white border-slate-900 text-slate-900 shadow-md ring-2 ring-slate-900/5 scale-105" 
                      : currentStep > step.id 
                        ? "bg-green-500 border-green-500 text-white" 
                        : "bg-transparent border-slate-300 text-slate-400"
                  )}>
                    {currentStep > step.id ? <Check className="w-3 h-3" /> : step.id}
                  </div>
                  <span className={cn(
                    "text-[11px] font-black tracking-tight",
                    currentStep === step.id ? "text-slate-900" : "text-slate-400"
                  )}>
                    {step.title}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex items-center">
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="px-6 py-6 border-b border-slate-50 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-xs font-black shadow-lg">1</div>
                      <h2 className="font-black text-[#1e293b] text-lg">Course Details</h2>
                      <span className="text-xs font-bold text-slate-400 ml-4">
                        Cart ({displayItems.length} {displayItems.length === 1 ? 'item' : 'items'})
                      </span>
                    </div>

                    <div className="p-0">
                      {displayItems.length === 0 ? (
                        <div className="text-center py-20 px-6 space-y-4">
                          <ShoppingCart className="w-12 h-12 text-slate-200 mx-auto" />
                          <p className="text-slate-500 font-bold">No courses selected for enrollment</p>
                          <Button onClick={() => navigate("/")} className="bg-[#1e293b]">Back to Courses</Button>
                        </div>
                      ) : (
                        <div className="divide-y divide-slate-100">
                          {displayItems.map((item) => (
                            <div key={item.courseId} className="p-6 md:p-8 flex flex-col md:flex-row gap-8 bg-white hover:bg-slate-50/30 transition-colors">
                              {/* Course Logo */}
                              <div className="w-full md:w-40 h-32 bg-slate-100 rounded-2xl flex-shrink-0 flex items-center justify-center border border-slate-200 relative group overflow-hidden">
                                {item.image ? (
                                  <img src={item.image} alt={item.courseName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                ) : (
                                  <span className="text-4xl font-black text-slate-300">a</span>
                                )}
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                              </div>

                              {/* Course Info */}
                              <div className="flex-1 space-y-4">
                                <div className="flex justify-between items-start">
                                  <h3 className="font-extrabold text-slate-900 text-lg leading-snug max-w-md">{item.courseName}</h3>
                                  <span className="text-xl font-black text-slate-900">INR {item.discountedPrice?.toLocaleString()}</span>
                                </div>

                                <div className="flex justify-between items-end">
                                  <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                                      <Calendar className="w-4 h-4 text-slate-400" />
                                      <span>{item.dateRange || 'Mar 16 - Mar 19, 2026'} • (4 Days)</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                                      <Clock className="w-4 h-4 text-slate-400" />
                                      <span>IST • {item.timeRange || '06:30 PM - 10:30 PM'}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[12px] font-bold text-slate-500">
                                      <User className="w-4 h-4 text-slate-400" />
                                      <span>No. of participants • {item.quantity || 1}</span>
                                    </div>

                                    <div className="flex items-center gap-4 pt-4">
                                      <div className="flex bg-[#ecf0f3] p-1 rounded-full border border-slate-200/50">
                                        <button
                                          onClick={() => handlePlanChange(item.courseId, 'Basic')}
                                          className={cn(
                                            "px-5 py-1.5 rounded-full text-[11px] font-black uppercase transition-all tracking-wider",
                                            (item.plan === 'Basic' || !item.plan) ? "bg-[#1e293b] text-white shadow-md shadow-slate-400/20" : "text-slate-500 hover:text-slate-700"
                                          )}
                                        >
                                          Basic
                                        </button>
                                        <button
                                          onClick={() => handlePlanChange(item.courseId, 'Premium')}
                                          className={cn(
                                            "px-5 py-1.5 rounded-full text-[11px] font-black uppercase transition-all tracking-wider",
                                            item.plan === 'Premium' ? "bg-[#1e293b] text-white shadow-md shadow-slate-400/20" : "text-slate-500 hover:text-slate-700"
                                          )}
                                        >
                                          Premium
                                        </button>
                                      </div>
                                      <button
                                        onClick={() => setIsBenefitsModalOpen(true)}
                                        className="text-[12px] font-black text-blue-600 hover:underline"
                                      >
                                        View Benefits
                                      </button>
                                    </div>
                                  </div>

                                  <div className="flex items-center gap-4 pb-1">
                                    <div className="flex items-center gap-4 bg-[#f8fafc] border border-slate-200 rounded-full py-1.5 px-3">
                                      <button
                                        onClick={() => updateQuantity(item.courseId, -1)}
                                        className="text-slate-300 hover:text-slate-600 transition-colors"
                                      >
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="text-sm font-black w-3 text-center">{item.quantity || 1}</span>
                                      <button
                                        onClick={() => updateQuantity(item.courseId, 1)}
                                        className="text-slate-300 hover:text-slate-600 transition-colors"
                                      >
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                    <button
                                      onClick={() => {
                                        setDisplayItems(prev => prev.filter(p => p.courseId !== item.courseId));
                                        if (displayItems.length === 1) toast.info("Cart is now empty");
                                      }}
                                      className="p-2 text-slate-300 hover:text-red-500 transition-colors"
                                    >
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {displayItems.length > 0 && (
                    <div className="flex justify-end pt-4">
                      <Button
                        onClick={handleNext}
                        className="bg-[#001c3d] hover:bg-[#002a5c] text-white font-black px-12 py-7 rounded-lg text-lg flex items-center gap-3 transition-all active:scale-[0.98] shadow-xl shadow-blue-900/10"
                      >
                        Continue <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="px-6 py-6 border-b border-slate-50 flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#1e293b] text-white flex items-center justify-center text-xs font-black shadow-lg">2</div>
                      <h2 className="font-black text-[#1e293b] text-lg">Learner Details</h2>
                    </div>
                    <div className="p-8 space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Full Name*</label>
                          <Input
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white rounded-xl font-bold"
                            placeholder="Enter full name"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Email Address*</label>
                          <Input
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white rounded-xl font-bold"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest">Phone Number*</label>
                          <Input
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white rounded-xl font-bold"
                            placeholder="+91 00000 00000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[11px] font-black uppercase text-slate-400 tracking-widest">City*</label>
                          <Input
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white rounded-xl font-bold"
                            placeholder="e.g. Hyderabad"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                        <Button onClick={handleBack} variant="ghost" className="font-black text-slate-400 hover:text-slate-900">
                          <ChevronLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <Button onClick={handleNext} className="bg-[#0f172a] hover:bg-[#1e293b] font-black px-10 h-14 rounded-lg">
                          Continue to Payment
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-2xl p-10 border border-slate-100 shadow-sm"
                >
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CreditCard className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-black text-slate-900">Select Payment Method</h2>
                    <p className="text-slate-500 font-bold">Please select one of our secure payment providers</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                      {['Razorpay', 'Stripe'].map((method) => (
                        <button 
                          key={method} 
                          onClick={() => {
                            if (method === 'Razorpay') {
                              handleRazorpayPayment();
                            } else if (method === 'Stripe') {
                              handleStripePayment();
                            } else {
                              toast.info(`${method} integration coming soon!`);
                            }
                          }}
                          className="p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:bg-blue-50/30 transition-all font-black text-lg text-slate-800 shadow-sm flex items-center justify-center"
                        >
                          {method}
                        </button>
                      ))}
                    </div>

                    <div className="pt-10 flex justify-center">
                      <Button onClick={handleBack} variant="ghost" className="font-black text-slate-400">
                        Back to details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar - Order Summary */}
          <div className="w-full lg:w-[380px] shrink-0 space-y-5">
            <h2 className="text-[22px] font-black text-[#1e293b] px-1 mb-1">Order Summary</h2>

            {/* Box 1: Cost Details */}
            <div className="bg-white rounded-[16px] p-6 shadow-sm border border-slate-200/60 space-y-4">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[#64748b] font-bold text-[13px]">Price ({displayItems.length} {displayItems.length === 1 ? 'item' : 'items'})</span>
                  <span className="text-[#0f172a] font-black text-[16px]">INR {calculateSubtotal().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-between items-center text-[#64748b] font-bold text-[13px]">
                  <span>Subtotal</span>
                  <span className="text-[#0f172a] font-black text-[14px]">INR {calculateSubtotal().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="h-0 border-t border-dotted border-slate-300 w-full my-1" />

                <div className="flex justify-between items-center text-[#64748b] font-bold text-[13px]">
                  <span>+ GST 18%</span>
                  <span className="text-[#0f172a] font-black text-[14px]">INR {calculateGST().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>

                <div className="flex justify-end pt-0">
                  <p className="text-[12px] font-bold text-[#3b82f6] flex items-center gap-1 cursor-pointer">
                    As low as <span className="font-extrabold hover:underline">INR {Math.round(calculateTotal() / 12).toLocaleString()} /month</span>
                    <div className="w-3.5 h-3.5 rounded-full border border-[#3b82f6] flex items-center justify-center text-[9px] font-black">i</div>
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-[16px] font-black text-[#0f172a]">Total</span>
                  <span className="text-[18px] font-black text-[#22c55e] tracking-tight">INR {calculateTotal().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              </div>
            </div>

            {/* Box 2: Coupon Code */}
            <div className="bg-white rounded-[16px] p-5 shadow-sm border border-slate-200/60 space-y-3">
              <p className="text-[14px] font-black text-[#1e293b]">Coupon Code</p>
              <div className="flex gap-2 bg-[#f8fafc] p-1.5 rounded-xl border border-slate-200">
                <Input
                  placeholder="Apply a Code"
                  className="border-none bg-transparent shadow-none focus-visible:ring-0 font-bold text-[13px] h-10 placeholder:text-slate-400"
                />
                <Button className="h-10 bg-[#e2e8f0] hover:bg-slate-300 text-[#475569] font-black px-6 rounded-lg uppercase text-[11px] tracking-widest shadow-none">Apply</Button>
              </div>
            </div>

            {/* Box 3: Gift card */}
            <div className="bg-white rounded-[16px] p-5 shadow-sm border border-slate-200/60 space-y-4">
              <div className="space-y-1">
                <p className="text-[14px] font-black text-[#1e293b]">Gift card</p>
                <p className="text-[11px] font-bold text-slate-400">Enter your gift card code below to redeem.</p>
              </div>
              <div className="flex gap-2 bg-[#f8fafc] p-1.5 rounded-xl border border-slate-200">
                <Input
                  placeholder="Enter gift card code"
                  className="border-none bg-transparent shadow-none focus-visible:ring-0 font-bold text-[13px] h-10 placeholder:text-slate-400"
                />
                <Button className="h-10 bg-[#e2e8f0] hover:bg-slate-300 text-[#475569] font-black px-6 rounded-lg uppercase text-[11px] tracking-widest shadow-none">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Logos Footer */}
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-200/50">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {['PayPal', 'Razorpay', 'Stripe', 'splitit', 'PayU', 'AMERICAN EXPRESS', 'mastercard', 'afterpay', 'VISA', 'Klarna'].map((icon) => (
            <span key={icon} className="text-[10px] md:text-sm font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors cursor-default">{icon}</span>
          ))}
        </div>
      </div>

      {/* Benefits Modal */}
      <Dialog open={isBenefitsModalOpen} onOpenChange={setIsBenefitsModalOpen}>
        <DialogContent className="max-w-xl p-0 overflow-hidden bg-[#f8fafc] border-none shadow-2xl rounded-xl">
          <div className="p-5 md:p-8 space-y-6">
             <div className="space-y-1 text-center max-w-xl mx-auto">
               <h2 className="text-xl font-black text-slate-900 tracking-tight">Plan Benefits Comparison</h2>
               <p className="text-slate-500 font-bold text-[11px] leading-tight">Compare features across our Basic and Premium enrollment plans.</p>
             </div>

             <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="py-3 px-4 text-[9px] font-black text-slate-500 uppercase tracking-widest">Compare Benefits</th>
                      <th className="py-3 px-3 text-center text-[9px] font-black text-slate-500 uppercase w-24 border-l border-slate-100">Basic</th>
                      <th className="py-3 px-3 text-center text-[9px] font-black text-blue-600 uppercase w-24 border-l border-slate-100">Premium</th>
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
                        <td className="py-3 px-4 text-[11px] font-bold text-slate-700">{feature.name}</td>
                        <td className="py-3 px-3 text-center border-l border-slate-50">
                          {feature.basic ? (
                            <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm"><CheckCircle className="w-3.5 h-3.5" /></div>
                          ) : (
                            <div className="w-5 h-5 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto opacity-40"><span className="text-sm leading-none">×</span></div>
                          )}
                        </td>
                        <td className="py-3 px-3 text-center border-l border-slate-50 bg-blue-50/5">
                          {feature.premium ? (
                            <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md shadow-blue-500/10"><CheckCircle className="w-3.5 h-3.5" /></div>
                          ) : (
                            <div className="w-5 h-5 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto opacity-40"><span className="text-sm leading-none">×</span></div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
             <div className="flex justify-center pt-1">
               <Button onClick={() => setIsBenefitsModalOpen(false)} className="h-10 px-8 text-[11px] font-black uppercase tracking-widest bg-slate-900 hover:bg-black rounded-lg shadow-lg">Close</Button>
             </div>
          </div>
        </DialogContent>
      </Dialog>

      <StepScroller currentStep={currentStep} />
    </div>
  );
};

// Helper component for better UX
const StepScroller = ({ currentStep }: { currentStep: number }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);
  return null;
};

export default Enroll;