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
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";
import { apiCall } from "@/lib/api";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

interface SigninModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  onForgotPassword: () => void;
}

export const SigninModal: React.FC<SigninModalProps> = ({ 
  isOpen, 
  onClose, 
  onSwitchToSignup,
  onForgotPassword 
}) => {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id.replace('signin-', '')]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await apiCall('/user/auth/login', {
        method: 'POST',
        data: formData
      });

      if (response.success) {
        toast.success("Welcome back!");
        login(response.data);
        onClose();
      }
    } catch (error: any) {
      toast.error(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="p-8">
            <DialogHeader className="mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 transition-transform hover:scale-110">
                <LogIn className="text-primary w-6 h-6" />
              </div>
              <DialogTitle className="text-3xl font-black tracking-tight text-slate-900">
                Welcome Back
              </DialogTitle>
              <DialogDescription className="text-slate-500 font-medium">
                Log in to access your dashboard and courses.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="signin-email" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</Label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="signin-email" 
                    type="email" 
                    placeholder="name@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-11 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-primary/10 rounded-xl transition-all font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1 mr-1">
                  <Label htmlFor="signin-password" className="text-xs font-black uppercase tracking-widest text-slate-400">Password</Label>
                  <button 
                    type="button" 
                    onClick={onForgotPassword}
                    className="text-[11px] font-black text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                  <Input 
                    id="signin-password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    value={formData.password}
                    onChange={handleChange}
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

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-12 bg-primary hover:bg-primary-dark text-white font-black rounded-xl shadow-lg shadow-primary/20 transition-all group mt-2"
              >
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Sign In</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-500 font-medium">
              Don't have an account?{" "}
              <button 
                onClick={onSwitchToSignup}
                className="text-primary font-black hover:underline underline-offset-4"
              >
                Sign Up
              </button>
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
