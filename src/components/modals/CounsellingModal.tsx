import React from "react";
import { ChevronDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface CounsellingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const CounsellingModal: React.FC<CounsellingModalProps> = ({ isOpen, onOpenChange }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[720px] p-0 overflow-hidden rounded-xl border-none shadow-2xl">
        <div className="p-6 md:p-10 bg-white">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl md:text-2xl font-black text-[#0c121e] tracking-tight mb-2">
              Book a Private Counselling Session
            </DialogTitle>
            <DialogDescription className="text-slate-500 font-medium text-sm leading-relaxed max-w-lg">
              Whether to upskill or for any other query, please drop us a line and we'll be happy to get back to you.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-4">
                <div className="relative">
                  <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-blue-600 z-10">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    placeholder="Enter your name" 
                    className="h-11 rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 text-sm font-medium"
                  />
                </div>
                
                <div className="relative">
                  <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-blue-600 z-10">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-0 h-11 rounded-md border border-slate-200 overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500/10">
                    <div className="flex items-center gap-1 px-2 bg-slate-50 border-r border-slate-200 cursor-pointer">
                      <img src="https://flagcdn.com/in.svg" alt="India" className="w-4 h-auto" />
                      <span className="text-slate-600 font-bold text-[10px]">+91</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </div>
                    <Input 
                      placeholder="99999 99999" 
                      className="border-none h-full focus-visible:ring-0 text-sm font-medium"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-blue-600 z-10">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    placeholder="Enter your email" 
                    type="email"
                    className="h-11 rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 text-sm font-medium"
                  />
                </div>
                
                <div className="relative">
                  <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-blue-600 z-10">
                    Course <span className="text-red-500">*</span>
                  </label>
                  <Select>
                    <SelectTrigger className="h-11 rounded-md border-slate-200 text-slate-500 text-sm font-medium">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agile">Agile & Scrum</SelectItem>
                      <SelectItem value="pm">Project Management</SelectItem>
                      <SelectItem value="it">IT Service Management</SelectItem>
                      <SelectItem value="cyber">Cyber Security</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="absolute -top-2 left-3 px-1 bg-white text-[10px] font-bold text-blue-600 z-10">
                Message
              </label>
              <Textarea 
                placeholder="Type your message here..." 
                className="min-h-[100px] rounded-md border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 text-sm font-medium resize-none p-4"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox id="whatsapp" className="border-slate-300 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 rounded-sm" />
                  <label htmlFor="whatsapp" className="text-xs font-medium text-slate-500 cursor-pointer">
                    I want to receive updates directly on Whatsapp
                  </label>
                </div>
                <p className="text-[10px] text-slate-400 font-medium leading-none">
                  I agree to KnowledgeHut <span className="text-blue-600 underline cursor-pointer">Terms and Conditions</span>
                </p>
              </div>

              <Button className="h-12 px-10 rounded-md bg-[#0c121e] hover:bg-black text-white font-bold text-sm transition-all shadow-md">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CounsellingModal;
