import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Heart, Send, Star, User, MessageCircle } from "lucide-react";

interface LikeModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle?: string;
}

export const LikeModal: React.FC<LikeModalProps> = ({ 
  isOpen, 
  onClose, 
  courseTitle = "this course" 
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle like logic here
    console.log("Like submitted");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden border-none bg-transparent shadow-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Header area with animated heart */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-600 h-32 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-white/20 p-4 rounded-full backdrop-blur-md"
            >
              <Heart className="text-white w-10 h-10 fill-white" />
            </motion.div>
          </div>
          
          <div className="p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-black tracking-tight text-slate-900 leading-tight">
                Show some love!
              </DialogTitle>
              <DialogDescription className="text-slate-500 font-medium">
                You're liking <span className="text-rose-600 font-black italic">{courseTitle}</span>. 
                Want to leave a quick testimonial?
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="like-name" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Your Name</Label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
                  <Input 
                    id="like-name" 
                    placeholder="Enter your name" 
                    className="pl-11 h-12 bg-slate-50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-rose-500/10 rounded-xl transition-all font-medium" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="like-message" className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Short Message (Optional)</Label>
                <div className="relative group">
                  <MessageCircle className="absolute left-4 top-4 w-4 h-4 text-slate-400 group-focus-within:text-rose-500 transition-colors" />
                  <textarea 
                    id="like-message" 
                    placeholder="Why did you like this course?" 
                    className="w-full pl-11 pt-3 pb-3 min-h-[100px] bg-slate-50 border border-slate-200 focus:bg-white focus:ring-4 focus:ring-rose-500/10 rounded-xl transition-all font-medium outline-none resize-none text-[14px]" 
                  />
                </div>
              </div>

              <div className="bg-rose-50 p-4 rounded-xl flex items-center justify-between border border-rose-100">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-rose-500 fill-rose-500" />
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-rose-600">Verified student</span>
              </div>

              <Button type="submit" className="w-full h-12 bg-rose-600 hover:bg-rose-700 text-white font-black rounded-xl shadow-lg shadow-rose-600/20 transition-all group mt-2 flex items-center justify-center">
                <span>Submit Love</span>
                <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};
