import React from "react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";

interface AdvisorModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden rounded-xl border-none shadow-2xl">
        <div className="flex flex-col md:flex-row min-h-[420px]">
          {/* Left Side: Graphic */}
          <div className="hidden md:flex flex-1 bg-[#fff8ef] p-10 items-center justify-center relative overflow-hidden">
            <div className="relative z-10 w-full max-w-[280px]">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" 
                  alt="Advisor Illustration" 
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Floating Tags */}
                <div className="absolute top-4 -right-2 bg-white px-2 py-1 rounded shadow-sm border border-orange-100 flex items-center gap-1">
                   <div className="w-1 h-1 rounded-full bg-orange-500" />
                   <span className="text-[9px] font-bold text-slate-800 uppercase tracking-tight">Promotion</span>
                </div>
                <div className="absolute top-1/2 -left-4 bg-white px-2 py-1 rounded shadow-sm border border-blue-100 flex items-center gap-1">
                   <div className="w-1 h-1 rounded-full bg-blue-500" />
                   <span className="text-[9px] font-bold text-slate-800 uppercase tracking-tight">Career Switch</span>
                </div>
                <div className="absolute bottom-6 right-0 bg-white px-2 py-1 rounded shadow-sm border border-emerald-100 flex items-center gap-1">
                   <div className="w-1 h-1 rounded-full bg-emerald-500" />
                   <span className="text-[9px] font-bold text-slate-800 uppercase tracking-tight">Salary Hike</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 bg-white p-8 md:p-10">
            <div className="max-w-[320px] mx-auto space-y-6 h-full flex flex-col justify-center">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-[#0c121e] tracking-tight mb-2">
                  Welcome! Sign up or Login
                </h2>
                <p className="text-slate-500 font-medium text-xs leading-relaxed">
                  All the essentials details about the course at your fingertips
                </p>
              </div>

              <form className="space-y-5">
                <div className="space-y-4">
                  <div className="flex gap-0 h-11 rounded-md border border-slate-200 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/10">
                    <div className="flex items-center gap-1.5 px-3 bg-slate-50 border-r border-slate-200">
                      <img src="https://flagcdn.com/in.svg" alt="India" className="w-4 h-auto" />
                      <span className="text-slate-600 font-bold text-xs">+91</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                    <Input 
                      placeholder="Phone Number *" 
                      className="border-none h-full focus-visible:ring-0 text-sm font-medium"
                    />
                  </div>

                  <Input 
                    placeholder="Email *" 
                    type="email"
                    className="h-11 rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 text-sm font-medium px-4"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox 
                    id="whatsapp-adv" 
                    className="border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 rounded-sm" 
                    defaultChecked
                  />
                  <label htmlFor="whatsapp-adv" className="text-xs font-medium text-slate-500 cursor-pointer">
                    I want to receive updates directly on Whatsapp
                  </label>
                </div>

                <Button className="w-full h-11 rounded-md bg-[#dfe7f2] hover:bg-[#d0dbe9] text-[#001c3d] font-bold text-sm transition-all border-none shadow-none">
                  Get OTP
                </Button>

                <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                  By tapping submit, you agree to viovn <br />
                  <span className="text-slate-900 font-bold underline cursor-pointer">Privacy Policy</span> and <span className="text-slate-900 font-bold underline cursor-pointer">Terms & Conditions</span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdvisorModal;
