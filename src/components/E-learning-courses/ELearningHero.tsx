import React from "react";
import { Link } from "react-router-dom";
import { Star, Users, Clock, BarChart, Home } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ELearningHeroProps {
  courseName: string;
  rating: string;
  enrolledCount: string;
  duration: string;
  level: string;
  description: string;
  heroImage: string;
  breadcrumbs?: { label: string; href: string }[];
}

const ELearningHero: React.FC<ELearningHeroProps> = ({
  courseName,
  rating,
  enrolledCount,
  duration,
  level,
  description,
  heroImage,
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "E Learning", href: "/e-learning" },
  ],
}) => {
  return (
    <section className="bg-[#FFFBF2] py-2 md:py-3 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <Breadcrumb className="mb-1.5 md:mb-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-slate-600 hover:text-slate-900 transition-colors flex items-center gap-1.5">
                  <Home className="w-3.5 h-3.5" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {breadcrumbs.slice(1).map((crumb, idx) => (
              <React.Fragment key={idx}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={crumb.href} className="text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
                      {crumb.label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[13px] font-medium text-slate-900">{courseName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-xl md:text-3xl font-extrabold text-[#1a1a1a] leading-[1.15]">
              {courseName}
            </h1>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              {/* Enrolled Stats */}
              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Avatar key={i} className="border-2 border-white w-7 h-7 md:w-9 md:h-9">
                      <AvatarImage src={`https://i.pravatar.cc/150?u=elearning${i}`} />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold text-slate-900 leading-tight">1k+</span>
                  <span className="text-[11px] md:text-xs font-medium text-slate-500 uppercase tracking-wider">Enrolled</span>
                </div>
              </div>

              {/* Trust Ratings */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center p-1 bg-white rounded-md shadow-sm">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-900">4.9/5</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center">
                     <Star className="w-6 h-6 md:w-7 md:h-7 text-[#00b67a] fill-[#00b67a]" />
                  </div>
                  <span className="text-sm md:text-base font-bold text-slate-900">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Performance Badges */}
            <div className="flex flex-wrap gap-1.5 md:gap-2">
               <Badge className="bg-[#FEF3C7] text-[#92400E] border-none px-3 py-1.5 flex items-center gap-2 rounded-full shadow-sm hover:bg-[#FDE68A] transition-colors">
                <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                <span className="font-bold text-xs md:text-[13px]">{rating}</span>
              </Badge>
              <Badge className="bg-[#DBEAFE] text-[#1E40AF] border-none px-3 py-1.5 flex items-center gap-2 rounded-full shadow-sm hover:bg-[#BFDBFE] transition-colors">
                <Users className="w-3.5 h-3.5" />
                <span className="font-bold text-xs md:text-[13px]">{enrolledCount} Learners Enrolled</span>
              </Badge>
              <Badge className="bg-[#F3E8FF] text-[#5B21B6] border-none px-3 py-1.5 flex items-center gap-2 rounded-full shadow-sm hover:bg-[#E9D5FF] transition-colors">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-bold text-xs md:text-[13px]">{duration}</span>
              </Badge>
              <Badge className="bg-[#D1FAE5] text-[#065F46] border-none px-3 py-1.5 flex items-center gap-2 rounded-full shadow-sm hover:bg-[#A7F3D0] transition-colors">
                <BarChart className="w-3.5 h-3.5" />
                <span className="font-bold text-xs md:text-[13px]">{level}</span>
              </Badge>
            </div>

            <p className="text-[#525252] text-sm md:text-base leading-relaxed max-w-2xl font-medium">
              {description}
            </p>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#FEF3C7] to-[#FFEDD5] rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] opacity-40 blur-2xl -z-10"></div>
            
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 animate-pulse text-[#FCD34D] opacity-40">
                 <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                 </svg>
              </div>
              <div className="absolute bottom-1/4 -left-12 w-12 h-12 text-[#F87171] opacity-30">
                 <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
                 </svg>
              </div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-[#60A5FA] rounded-full opacity-20"></div>
              
              <div className="relative z-10 w-full max-w-[380px]">
                <img 
                  src={heroImage} 
                  alt={courseName} 
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Stats Card Overlay 1 */}
              <div className="absolute -top-6 -left-6 md:-left-12 bg-white p-3 md:p-4 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-3 z-20 animate-bounce-subtle">
                 <div className="w-10 h-10 bg-[#FEF3C7] rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#F59E0B] fill-[#F59E0B]" />
                 </div>
                 <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Best Seller</div>
                    <div className="text-xs font-bold text-slate-900">Top Rated Course</div>
                 </div>
              </div>

              {/* Stats Card Overlay 2 */}
              <div className="absolute bottom-10 -right-4 md:-right-8 bg-white p-3 md:p-4 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-3 z-20">
                 <div className="w-10 h-10 bg-[#ECFDF5] rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#059669]" />
                 </div>
                 <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Community</div>
                    <div className="text-xs font-bold text-slate-900">Active Learners</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}} />
    </section>
  );
};

export default ELearningHero;
