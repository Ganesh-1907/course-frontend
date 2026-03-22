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
import { apiCall } from "@/lib/api";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51RBviLSBdkOysvco8uiMFym0JRvSm04DvaxwRgPytAXF2jHnizIDQg6TgbQgJQIgV7FiJxeaLSlBn1JWV9I4zYOY006qESc6Vt");

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
    mobile: "",
    city: "",
    zipCode: '000000',
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
      if (!formData.fullName || !formData.email || !formData.mobile || !formData.city) {
        toast.error("Please fill all required fields");
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
    // 0. Load Razorpay script
    const res = await loadRazorpayScript();

    if (!res) {
      toast.error("Failed to load Razorpay SDK. Please check your connection.");
      return;
    }

    try {
      // 1. Create order on backend
      const totalAmount = calculateTotal();
      
      // Get numeric schedule IDs, filtering out any non-numeric placeholders
      const scheduleIds = displayItems
        .map(item => parseInt(item.scheduleId || item.courseId))
        .filter(id => !isNaN(id));

      if (scheduleIds.length === 0) {
        console.error("No valid numeric schedule IDs found in cart items:", displayItems);
        toast.error("Could not find a valid course schedule ID. Please try re-adding the course to your cart.");
        return;
      }
      
      const orderRes = await apiCall('/user/payments/create-order', {
        method: 'POST',
        data: {
          amount: totalAmount,
          scheduleId: scheduleIds[0] 
        }
      });

      if (!orderRes.success) {
        toast.error("Failed to create payment order. Please try again.");
        return;
      }

      const orderData = orderRes.data;

      // 2. Define Razorpay options
      const razorpayKey = import.meta.env.VITE_RAZP_KEY || "rzp_test_Rbm66o8JPEj0P8"; 

      const options = {
        key: razorpayKey, 
        amount: orderData.amount,
        currency: orderData.currency,
        name: "VIOVN EduTech",
        description: "Course Enrollment Payment",
        order_id: orderData.id,
        handler: async function (response: any) {
          // This handler triggers upon successful payment in the Razorpay Iframe
          try {
            const verifyRes = await apiCall('/user/payments/verify-payment', {
              method: 'POST',
              data: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                scheduleIds: scheduleIds,
                amount: totalAmount,
                userData: {
                  name: formData.fullName,
                  email: formData.email,
                  mobile: formData.mobile,
                  city: formData.city
                }
              }
            });

            if (verifyRes.success) {
              toast.success("Payment successful! Your enrollment is confirmed.");
              setTimeout(() => {
                navigate("/");
              }, 1500);
            } else {
              toast.error("Payment verification failed. Please contact support.");
            }
          } catch (err: any) {
            console.error("Verification error:", err);
            toast.error(`Verification failed: ${err.message}`);
          }
        },
        prefill: {
          name: formData.fullName || "Test User",
          email: formData.email || "test@example.com",
          contact: formData.mobile || "9999999999",
        },
        theme: {
          color: "#0f172a",
        },
      };

      // 3. Initialize and open Razorpay iframe
      const paymentObject = new (window as any).Razorpay(options);
      
      paymentObject.on("payment.failed", function (response: any) {
        console.error("Payment Failed", response.error);
        toast.error(`Payment failed: ${response.error.description || "Unknown error"}`);
      });
      
      paymentObject.open();

    } catch (err: any) {
      console.error("Error opening Razorpay", err);
      toast.error(`Failed to initialize payment: ${err.message}`);
    }
  };

  const [stripeClientSecret, setStripeClientSecret] = useState<string | null>(null);
  const [isStripeModalOpen, setIsStripeModalOpen] = useState(false);

  const loadStripeScript = () => {
    // Already handled by @stripe/stripe-js
    return Promise.resolve(true);
  };

  const handleStripePayment = async () => {
    const totalAmount = calculateTotal();
    const scheduleIds = displayItems
      .map(item => parseInt(item.scheduleId || item.courseId))
      .filter(id => !isNaN(id));

    if (scheduleIds.length === 0) {
      toast.error("No valid course schedule selected.");
      return;
    }

    try {
      const res = await apiCall('/user/payments/stripe/create-intent', {
        method: 'POST',
        data: {
          amount: totalAmount,
          scheduleIds: scheduleIds
        }
      });

      if (res.success) {
        setStripeClientSecret(res.data.clientSecret);
        setIsStripeModalOpen(true);
      } else {
        toast.error("Failed to initialize Stripe payment.");
      }
    } catch (err: any) {
      console.error("Stripe initialization error:", err);
      toast.error("Error connecting to Stripe.");
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
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
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
                  className="bg-white rounded-2xl p-6 md:p-10 border border-slate-100 shadow-sm"
                >
                  <div className="space-y-8">
                    <h2 className="text-xl font-black text-slate-900 border-b border-slate-50 pb-4">Choose payment method</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Stripe Card */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 hover:shadow-md transition-all group">
                        <div className="h-12 flex items-center justify-center">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-10" />
                        </div>
                        <p className="text-slate-600 font-bold text-sm">Credit / Debit Cards accepted</p>
                        <p className="text-slate-400 text-[11px] font-medium leading-relaxed px-4">
                          You will be charged <span className="text-slate-900 font-bold">INR {calculateTotal().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> on your payment card through Stripe.
                        </p>
                        <div className="pt-4 w-full">
                          <Button 
                            onClick={handleStripePayment}
                            className="w-full bg-[#001c3d] hover:bg-[#002a5c] text-white font-black py-6 rounded-xl flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
                          >
                            Pay with Stripe <CheckCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Razorpay Card */}
                      <div className="bg-white rounded-2xl border border-slate-200 p-8 flex flex-col items-center text-center space-y-4 hover:border-blue-500/50 hover:shadow-md transition-all group">
                        <div className="h-12 flex items-center justify-center">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-10" />
                        </div>
                        <p className="text-slate-600 font-bold text-sm px-2">Credit/Debit Cards, NetBanking, EMI, UPI accepted</p>
                        <p className="text-slate-400 text-[11px] font-medium leading-relaxed px-4">
                          You will be charged <span className="text-slate-900 font-bold">INR {calculateTotal().toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> on your payment card through Razorpay.
                        </p>
                        <p className="text-[12px] font-bold text-[#22c55e] flex items-center gap-1">
                          As low as <span className="font-extrabold uppercase tracking-tight">INR {(calculateTotal() / 12).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} /month</span>
                          <div className="w-3.5 h-3.5 rounded-full border border-[#22c55e] flex items-center justify-center text-[9px] font-black">i</div>
                        </p>
                        <div className="pt-4 w-full">
                          <Button 
                            onClick={handleRazorpayPayment}
                            className="w-full bg-[#001c3d] hover:bg-[#002a5c] text-white font-black py-6 rounded-xl flex items-center justify-center gap-2 group-hover:scale-[1.02] transition-transform"
                          >
                            Pay with Razorpay <CheckCircle className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center border-t border-slate-50">
                      <Button onClick={handleBack} variant="ghost" className="font-black text-slate-400 hover:text-slate-900">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Back to details
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

      {/* Stripe Payment Modal */}
      <Dialog open={isStripeModalOpen} onOpenChange={setIsStripeModalOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden bg-white border-none shadow-2xl rounded-2xl">
          <div className="p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="h-10 flex items-center justify-center mb-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-8" />
              </div>
              <h2 className="text-xl font-black text-slate-900">Secure Payment</h2>
              <p className="text-slate-500 font-bold text-[12px]">Complete your enrollment securely via Stripe</p>
            </div>

            {stripeClientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret: stripeClientSecret }}>
                <StripePaymentForm 
                  totalAmount={calculateTotal()} 
                  onSuccess={() => {
                    setIsStripeModalOpen(false);
                    toast.success("Payment successful!");
                    setTimeout(() => navigate("/"), 1500);
                  }}
                  userData={{
                    name: formData.fullName,
                    email: formData.email,
                    mobile: formData.mobile,
                    city: formData.city
                  }}
                  scheduleIds={displayItems.map(item => parseInt(item.scheduleId || item.courseId)).filter(id => !isNaN(id))}
                />
              </Elements>
            )}
          </div>
        </DialogContent>
      </Dialog>
      ...

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

// Stripe Payment Form Component
const StripePaymentForm = ({ totalAmount, onSuccess, userData, scheduleIds }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + "/enroll",
        payment_method_data: {
          billing_details: {
            name: userData.name,
            email: userData.email,
            phone: userData.mobile,
            address: {
              line1: userData.city || 'N/A', // Use city as fallback for address
              city: userData.city || 'N/A',
              state: userData.city || 'N/A', // Use city as fallback for state
              postal_code: '000000', // Default postal code
              country: 'IN', // Default to India
            }
          }
        }
      },
      redirect: 'if_required'
    });

    if (error) {
      toast.error(error.message || "Payment failed");
      setIsProcessing(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // Verify with backend
      try {
        const verifyRes = await apiCall('/user/payments/stripe/verify', {
          method: 'POST',
          data: {
            paymentIntentId: paymentIntent.id,
            scheduleIds,
            amount: totalAmount,
            userData
          }
        });

        if (verifyRes.success) {
          onSuccess();
        } else {
          toast.error("Payment verification failed.");
        }
      } catch (err: any) {
        console.error("Stripe verification error:", err);
        toast.error("Verification error.");
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement options={{ layout: 'tabs' }} />
      <Button 
        type="submit" 
        disabled={!stripe || isProcessing} 
        className="w-full bg-[#1e293b] hover:bg-black text-white py-6 rounded-xl font-black flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            Pay INR {totalAmount.toLocaleString()}
          </>
        )}
      </Button>
      <p className="text-[10px] text-center text-slate-400 font-medium">
        Your payment is secured with 256-bit encryption.
      </p>
    </form>
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