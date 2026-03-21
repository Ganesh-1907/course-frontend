import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
//import CourseCard from "@/components/CourseCard";
import { CategoryData, Course } from "@/data/categoryData";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ClockIcon, Users, Loader2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { getSchedulesByCategory, ScheduleData } from "@/lib/courseService";
import { getCourseImage } from "@/utils/courseImages";

interface CategoryCatalogProps {
  data: CategoryData;
}

function CourseCard({ course }: { course: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full px-1 relative group"
    >
      <div className="bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_70px_-20px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 p-5 mt-4 overflow-hidden ring-1 ring-slate-100 ring-offset-4 ring-offset-transparent outline-none flex flex-col h-full">
        
        <div className="relative rounded-[1.8rem] overflow-hidden mb-4 h-[200px] shadow-sm">
          {/* Discount Badge on Image */}
          <div className="absolute top-3 left-3 z-[20]">
            <div className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-br-xl rounded-tl-xl shadow-lg shadow-orange-500/20 backdrop-blur-sm uppercase tracking-widest">
              {course.discount || course.discountPercentage}% OFF
            </div>
          </div>

          <img
            src={getCourseImage(course.id || course.courseId)}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            alt={course.title || course.courseName}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-primary bg-orange-50 text-[10px] font-black px-2 py-1 rounded-md border border-orange-100">
            {course.nextDate || course.dateRange}
          </span>
          <span className="flex font-black text-slate-500 text-[10px] items-center gap-1 uppercase tracking-widest">
            <span className="text-primary">●</span>
            {course.format || course.batchType || "Live Virtual"}
          </span>
          <span className="ml-auto text-[11px] font-black bg-slate-50 text-slate-700 px-2 py-1 rounded-lg border border-slate-100">
            ⭐ {typeof course.rating === 'number' ? course.rating.toFixed(1) : "4.8"}
          </span>
        </div>

        <h3 className="font-black text-slate-900 mb-3 text-lg leading-snug line-clamp-2 min-h-[50px]">
          {course.title || course.courseName}
        </h3>

        <div className="mb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Main Skill</p>
          <p className="text-[11px] font-black text-slate-700">{course.skills || "Agile Leadership"}</p>
        </div>

        <div className="flex items-center gap-4 py-3 border-y border-slate-50 mb-4">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
            <ClockIcon size={14} className="text-emerald-500" />
            {course.duration || course.timeRange || "09:00 AM - 01:00 PM"}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
            <Users size={14} className="text-blue-500" />
            <span className="uppercase">{course.enrolled || "250+ ENROLLED"}</span>
          </div>
        </div>

        <div className="flex justify-between items-end mt-auto">
          <div className="space-y-0.5">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Starting from</p>
            <div className="flex items-baseline gap-2">
              <span className="font-black text-xl text-slate-900">₹{(course.price || course.discountedPrice)?.toLocaleString()}</span>
              <del className="text-xs text-slate-400 font-bold">₹{(course.originalPrice)?.toLocaleString()}</del>
            </div>
          </div>

          <Link
            to={course.navigate || `/course/${encodeURIComponent(course.courseName || course.title)}/schedules`}
            className="bg-primary hover:bg-orange-600 text-white font-black text-xs px-5 py-2.5 rounded-xl flex items-center gap-1 shadow-lg shadow-orange-500/20 transition-all active:scale-[0.95]"
          >
            Enroll <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}


const categories = [
  "AGILE",
  "SAFe",
  "PROJECT",
  "BUSINESS",
  "Generative AI",
  "Microcredentials",
  "DEVOPS",
  "ON DEMAND MICROCREDENTIALS",
  "SERVICE",
  "QUALITY",
  "CLOUD COMPUTING",
  "DATA SCIENCE",
  "TECHNOLOGY",
  "OTHERS",
];

function CategoryMenu({ activeCategory }: { activeCategory: string }) {
  const navigate = useNavigate();
  return (
    <div className="relative rounded-xl border border-secondary shadow-md">
      <div className="flex items-center justify-between relative">
        <div className="flex gap-3 overflow-x-auto text-[0.875rem] custom-scrollbar whitespace-nowrap p-2 w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => navigate(`/category/${cat.toLowerCase().replace(/\s+/g, "-")}`, { state: { preventScroll: true } })}
              className={`px-4 py-2 font-black text-[11px] uppercase tracking-widest rounded-lg transition-all ${activeCategory.toUpperCase() === cat.toUpperCase() ? "bg-[#01203d] text-white shadow-lg shadow-slate-900/20" : "bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const CategoryCatalog: React.FC<CategoryCatalogProps> = ({ data }) => {
  const [schedules, setSchedules] = useState<ScheduleData[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSchedules = async () => {
      setLoading(true);
      try {
        // Use breadcrumbName if available, as it matches DB names like "AGILE", "SAFE" better than "Agile & Scrum"
        const searchTerm = data.breadcrumbName || data.name;
        
        // Use the new category-based schedule fetching API
        const result = await getSchedulesByCategory(searchTerm);
        if (result && result.schedules) {
          setSchedules(result.schedules);
        } else {
          setSchedules([]);
        }
      } catch (error) {
        console.error("Error fetching schedules:", error);
        setSchedules([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [data.name, data.breadcrumbName]);

  // Display only backend schedules. If empty, show "No schedules" block instead of dummy data.
  const displayItems = schedules.slice(0, 10);

  return (
    <div className="bg-secondary/30 rounded-[3rem] border border-border/50 p-8 md:p-14">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
        <div>
          <p className="text-primary font-black uppercase text-[10px] tracking-[0.2em] mb-2 px-1">
            EXPLORE OUR PROFESSIONAL {data.name.toUpperCase()} CERTIFICATION COURSES
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Certification For Build Your Future
          </h2>
        </div>
        
        {schedules.length > 0 && (
          <Button 
            onClick={() => navigate(`/schedules/${data.id || data.name.toLowerCase().replace(/\s+/g, '-')}`)}
            className="bg-primary hover:bg-orange-600 text-white font-black text-xs px-6 h-11 rounded-xl flex items-center gap-2 shadow-lg shadow-orange-500/20"
          >
            View Schedules <ArrowRight size={16} />
          </Button>
        )}
      </div>

      <div className="mb-10">
        <CategoryMenu activeCategory={data.name} />
      </div>

      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary" />
          <p className="text-slate-500 font-bold animate-pulse">Fetching latest schedules...</p>
        </div>
      ) : displayItems.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {displayItems.map((item, idx) => (
            <CourseCard key={item.id || idx} course={item} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-bold text-lg">New schedules for {data.name} arriving soon.</p>
          <p className="text-slate-400 font-medium mb-6">Stay tuned for official certification launches.</p>
          <Button 
            onClick={() => navigate('/')}
            className="bg-[#ff4e25] text-white font-black h-12 px-8 rounded-xl"
          >
            Explore Other Courses
          </Button>
        </div>
      )}

      {schedules.length > 10 && (
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate(`/schedules/${data.id || data.name.toLowerCase().replace(/\s+/g, '-')}`)}
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary/5 font-black h-14 px-10 rounded-2xl text-[13px] uppercase tracking-widest inline-flex items-center gap-3"
          >
            View More Courses <ChevronRight size={18} />
          </Button>
        </div>
      )}

    </div>
  );
};

export default CategoryCatalog;
