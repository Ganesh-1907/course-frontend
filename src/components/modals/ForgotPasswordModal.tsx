import React, { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight, Loader2, KeyRound, ShieldCheck, Eye, EyeOff } from "lucide-react";
import { apiCall } from "@/lib/api";
import { toast } from "sonner";

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToSignin: () => void;
}

type Step = 'EMAIL' | 'OTP' | 'RESET';

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({ 
  isOpen, 
  onClose, 
  onBackToSignin 
}) => {
  const [step, setStep] = useState<Step>('EMAIL');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiCall('/user/auth/forgot-password', {
        method: 'POST',
        data: { email }
      });
      if (response.success) {
        toast.success(response.message);
        setStep('OTP');
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiCall('/user/auth/verify-otp', {
        method: 'POST',
        data: { email, otp }
      });
      if (response.success) {
        toast.success(response.message);
        setResetToken(response.data.resetToken);
        setStep('RESET');
      }
    } catch (error: any) {
      toast.error(error.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await apiCall('/user/auth/reset-password', {
        method: 'POST',
        data: { 
          email, 
          resetToken, 
          newPassword: passwords.newPassword, 
          confirmPassword: passwords.confirmPassword 
        }
      });
      if (response.success) {
        toast.success(response.message);
        onClose();
        onBackToSignin();
      }
    } catch (error: any) {
      toast.error(error.message || "Reset failed");
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setStep('EMAIL');
    setEmail("");
    setOtp("");
    setResetToken("");
    setPasswords({ newPassword: "", confirmPassword: "" });
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetState, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-8">
            <AnimatePresence mode="wait">
              {step === 'EMAIL' && (
                <motion.div
                  key="email-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <DialogHeader className="mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                      <KeyRound className="text-primary w-6 h-6" />
                    </div>
                    <DialogTitle className="text-3xl font-black tracking-tight text-slate-900">
                      Forgot Password?
                    </DialogTitle>
                    <DialogDescription className="text-slate-500 font-medium pt-2">
                       Don't worry! Enter your email and we'll send you an OTP to reset your password.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleEmailSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input 
                          id="reset-email" 
                          type="email" 
                          placeholder="name@example.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="pl-11 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-xl transition-all font-medium" 
                          required 
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all group"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                        <>
                          <span>Send OTP</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}

              {step === 'OTP' && (
                <motion.div
                  key="otp-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <DialogHeader className="mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                      <ShieldCheck className="text-primary w-6 h-6" />
                    </div>
                    <DialogTitle className="text-3xl font-black tracking-tight text-slate-900">
                      Verify OTP
                    </DialogTitle>
                    <DialogDescription className="text-slate-500 font-medium pt-2">
                      We've sent a 6-digit code to <span className="text-slate-900 font-bold">{email}</span>.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleOtpSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="reset-otp" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">6-Digit Code</Label>
                      <Input 
                        id="reset-otp" 
                        placeholder="000000" 
                        maxLength={6}
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                        className="h-14 text-center text-2xl tracking-[0.5em] font-black bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-xl transition-all" 
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading || otp.length !== 6}
                      className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all group"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                        <>
                          <span>Verify Code</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>

                    <p className="text-center text-sm text-slate-500 font-medium">
                      Didn't receive the code?{" "}
                      <button type="button" onClick={handleEmailSubmit} className="text-primary font-black hover:underline">
                        Resend
                      </button>
                    </p>
                  </form>
                </motion.div>
              )}

              {step === 'RESET' && (
                <motion.div
                  key="reset-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <DialogHeader className="mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                      <Lock className="text-primary w-6 h-6" />
                    </div>
                    <DialogTitle className="text-3xl font-black tracking-tight text-slate-900">
                      New Password
                    </DialogTitle>
                    <DialogDescription className="text-slate-500 font-medium pt-2">
                      Almost there! Set a new strong password for your account.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleResetSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <Label htmlFor="new-password" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">New Password</Label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input 
                          id="new-password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••" 
                          value={passwords.newPassword}
                          onChange={(e) => setPasswords({...passwords, newPassword: e.target.value})}
                          className="pl-11 pr-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-xl transition-all font-medium" 
                          required 
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="confirm-password" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Confirm Password</Label>
                      <div className="relative group">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input 
                          id="confirm-password" 
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••" 
                          value={passwords.confirmPassword}
                          onChange={(e) => setPasswords({...passwords, confirmPassword: e.target.value})}
                          className="pl-11 pr-10 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-xl transition-all font-medium" 
                          required 
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading}
                      className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all group mt-2"
                    >
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : (
                        <>
                          <span>Reset Password</span>
                          <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <button 
                onClick={onBackToSignin}
                className="w-full text-center text-sm font-black text-slate-400 hover:text-primary transition-colors"
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
