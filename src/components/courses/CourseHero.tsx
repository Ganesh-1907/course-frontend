import { Link } from "react-router-dom";
import { 
  Star, 
  Users, 
  CheckCircle2, 
  Play, 
  Download, 
  Calendar, 
  FileText,
  Share2,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";

interface CourseHeroProps {
  courseName: string;
  breadcrumbHome?: string;
  breadcrumbName?: string;
  topLabel?: string;
  categoryName?: string;
  categoryLink?: string;
  referEarnText?: string;
  referEarnLink?: string;
  rating: string;
  enrolledCount: string;
  enrolledSuffix?: string;
  subtitle: string;
  moneyBackText?: string;
  ltpLabel?: string;
  ltpLogos?: { src: string; alt: string }[];
  downloadBtnText?: string;
  viewSchedulesBtnText?: string;
  freeAssessmentBtnText?: string;
  benefits: string[];
  mainImage: string;
  badgeImage: string;
}

const CourseHero: React.FC<CourseHeroProps> = ({
  courseName,
  breadcrumbHome = "Home",
  breadcrumbName,
  topLabel = "TOP RATED CERTIFIED SCRUM MASTER CERTIFICATION",
  categoryName = "Agile",
  categoryLink = "/category/agile",
  referEarnText = "Refer & Earn",
  referEarnLink = "#",
  rating,
  enrolledCount,
  enrolledSuffix = "Enrolled",
  subtitle,
  moneyBackText = "100% Money Back Guarantee",
  ltpLabel = "Global LTP of Scrum Alliance",
  ltpLogos = [
    { src: "https://www.scrumalliance.org/ScrumAlliance/media/ScrumAllianceMedia/Logos/Scrum-Alliance-Logo.svg", alt: "Scrum Alliance" },
    { src: "https://www.scrumalliance.org/ScrumAlliance/media/ScrumAllianceMedia/Logos/Badge-CSM-Master.png", alt: "CSM" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Seal_of_the_United_States_Department_of_Education.svg/450px-Seal_of_the_United_States_Department_of_Education.svg.png", alt: "LTP" }
  ],
  downloadBtnText = "Download Brochure",
  viewSchedulesBtnText = "View Schedules",
  freeAssessmentBtnText = "Free Assesment",
  benefits,
  mainImage,
  badgeImage
}) => {
  return (
    <section className="bg-white py-8 md:py-10">
      <div className="container mx-auto">
        {/* Breadcrumb and Top Actions */}
        <div className="flex items-center justify-between mb-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-[12px] font-medium text-slate-600">{breadcrumbHome}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={categoryLink} className="text-[12px] font-medium text-slate-600 uppercase">{categoryName}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[12px] font-medium text-slate-900">{breadcrumbName || courseName}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <a href={referEarnLink} className="text-sm font-bold text-slate-900 hover:underline border-b-2 border-slate-900 pb-0.5 hidden md:block">
            {referEarnText}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr,0.7fr] gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-tight text-slate-900 uppercase">
                {topLabel}
              </span>
              <Share2 className="w-4 h-4 text-slate-400 cursor-pointer" />
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20">
                <img 
                  src={badgeImage} 
                  alt={`${courseName} Badge`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 text-[13px] font-bold mb-1">
                  <div className="flex items-center gap-0.5 text-yellow-500">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-500 font-medium">
                    <Users className="w-4 h-4" />
                    <span>{enrolledCount} {enrolledSuffix}</span>
                  </div>
                </div>
                <h1 className="text-xl md:text-[22px] font-bold text-[#1a1a1a] leading-tight">
                  {courseName}
                </h1>
              </div>
            </div>

            <p className="text-[17px] font-bold text-[#1a1a1a] leading-tight mt-4">
              {subtitle}
            </p>

            <div className="inline-flex items-center gap-2 bg-[#fefce8] border border-[#fef3c7] px-3 py-1.5 rounded-none mt-2">
              <span className="text-lg">💰</span>
              <span className="text-[13px] font-bold text-slate-900">{moneyBackText}</span>
              <Info className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <ul className="space-y-3 pt-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" />
                  <span className="text-[15px] font-medium text-slate-900 leading-snug">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-[13px] font-bold text-slate-900">{ltpLabel}</span>
                <div className="flex items-center gap-2">
                    {ltpLogos.map((logo, i) => (
                      <div key={i} className="w-10 h-10 rounded-none border border-slate-200 flex items-center justify-center p-1.5 bg-white shadow-sm transition-transform hover:scale-110">
                        <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" />
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Button variant="outline" className="border-[#ff4d2a] text-[#ff4d2a] hover:bg-[#ff4d2a]/5 font-bold rounded-md h-[46px] px-6 text-[15px]">
                <Download className="w-4 h-4 mr-2" />
                {downloadBtnText}
              </Button>
              <Button className="bg-[#ff4d2a] hover:bg-[#e64526] text-white font-bold rounded-md h-[46px] px-8 text-[15px] shadow-lg shadow-orange-500/20">
                {viewSchedulesBtnText}
              </Button>
              <Button variant="outline" className="border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb]/5 font-bold rounded-md h-[46px] px-6 text-[15px]">
                <FileText className="w-4 h-4 mr-2" />
                {freeAssessmentBtnText}
              </Button>
            </div>
          </div>

          {/* Right Media Section */}
          <div className="relative group lg:mt-6">
            <div className="relative overflow-hidden rounded-none shadow-xl bg-slate-100 aspect-video lg:aspect-[4/3] xl:aspect-video flex items-center justify-center">
              <img 
                src={mainImage} 
                alt={courseName} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              
              {/* Play Button Overlay */}
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/40 backdrop-blur-sm rounded-none flex items-center justify-center border-4 border-white/60 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
