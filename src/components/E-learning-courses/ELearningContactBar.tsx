import React from "react";
import { Phone, Mail, MessageSquare } from "lucide-react";

interface ELearningContactBarProps {
  phone?: string;
  email?: string;
}

const ELearningContactBar: React.FC<ELearningContactBarProps> = ({ 
  phone = "+91-9036554933", 
  email = "hello@simpliaxis.com" 
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1a1a1a] text-white overflow-hidden hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Left Actions */}
          <div className="flex items-center gap-8 lg:gap-12">
            <button className="flex items-center gap-3 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-tight">Request a call back</span>
            </button>

            <button className="flex items-center gap-3 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-tight">{phone}</span>
            </button>

            <button className="flex items-center gap-3 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold tracking-tight">{email}</span>
            </button>
          </div>

          {/* Right Action (Optional visual placeholder for now) */}
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-orange-600 text-white font-black px-6 py-2.5 rounded-full text-sm shadow-lg shadow-orange-500/20 active:scale-95 transition-all">
              Chat with Expert
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ELearningContactBar;
