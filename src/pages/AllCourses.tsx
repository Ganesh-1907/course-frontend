import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { getServiceTypes, getAllCourses } from "@/lib/courseService";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, BookOpen, Clock, Users, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryData } from "@/data/categoryData";

import { getCourseImage } from "@/utils/courseImages";

// Helper to find navigation path from categoryData
const getCourseNavigatePath = (courseName: string): string => {
  // Normalize course name for comparison
  const normalize = (s: string) => s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, ' ').trim();
  const normalizedSearch = normalize(courseName);

  for (const categoryId in categoryData) {
    const category = categoryData[categoryId];
    const course = category.courses.find(c => normalize(c.title) === normalizedSearch);
    if (course && course.navigate) {
      return course.navigate;
    }
  }
  
  // Fallback: search for partial match if exact fails
  for (const categoryId in categoryData) {
    const category = categoryData[categoryId];
    const course = category.courses.find(c => {
      const normalizedTitle = normalize(c.title);
      return normalizedSearch.includes(normalizedTitle) || normalizedTitle.includes(normalizedSearch);
    });
    if (course && course.navigate) {
      return course.navigate;
    }
  }
  return "#";
};

const AllCourses = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [categories, setCategories] = useState(["All Courses"]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalCourses, setTotalCourses] = useState(0);

  useEffect(() => {
    const fetchServiceTypes = async () => {
      const types = await getServiceTypes();
      if (types && types.length > 0) {
        setCategories(["All Courses", ...types.map(t => t.name)]);
      }
    };
    fetchServiceTypes();
  }, []);

  const fetchCourses = async (pageNum: number, category: string, reset: boolean = false) => {
    setLoading(true);
    const limit = 9;
    const data = await getAllCourses(pageNum, limit, category);
    if (data && data.courses) {
      const formattedCourses = data.courses.map((c: any) => ({
        id: c.id,
        title: c.courseName,
        category: c.serviceType?.toUpperCase() || "GENERAL",
        rating: 5.0,
        enrolled: "5K+",
        duration: c.duration ? `${c.duration} Days` : "02 Days",
        format: "Live Classroom",
        price: c.pricing[0]?.finalPrice || 0,
        originalPrice: c.pricing[0]?.price || 0,
        discount: c.pricing[0]?.discountPercentage || 0,
        badge: "Popular",
        image: getCourseImage(c.id),
        nextDate: c.startDate ? new Date(c.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Coming Soon",
        navigate: getCourseNavigatePath(c.courseName)
      }));

      if (reset) {
        setCourses(formattedCourses);
      } else {
        setCourses(prev => [...prev, ...formattedCourses]);
      }
      
      setTotalCourses(data.pagination.total);
      setHasMore(pageNum < data.pagination.pages);
    }
    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
    fetchCourses(1, activeCategory, true);
  }, [activeCategory]);

  const handleShowMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchCourses(nextPage, activeCategory);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#0f172a] text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
              Explore Our <span className="text-primary italic">Full Catalog</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium max-w-2xl">
              From Agile to AI, browse our comprehensive collection of professional certification programs designed to accelerate your career growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          {/* Controls */}
          <div className="flex flex-col gap-8 mb-12">
            {/* Category Tabs */}
            <div className="bg-slate-50 border border-slate-200 p-2 rounded-2xl shadow-sm overflow-hidden">
              <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar scroll-smooth">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-xl text-xs font-black transition-all uppercase tracking-widest whitespace-nowrap border-2 ${
                      activeCategory === category
                        ? "bg-white border-primary text-primary shadow-sm scale-[1.02]"
                        : "bg-transparent border-transparent text-slate-500 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between px-2">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Showing <span className="text-slate-900">{courses.length}</span> of <span className="text-slate-900">{totalCourses}</span> Courses
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {courses.map((course, index) => (
                <motion.div
                  key={`${course.id}-${index}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2, delay: index % 9 * 0.05 }}
                >
                  <CourseCard course={course} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && page === 1 && (
              Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="h-[450px] bg-slate-100 animate-pulse rounded-2xl border border-slate-200" />
              ))
            )}
          </div>

          {!loading && courses.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
              <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Courses Found</h3>
              <p className="text-slate-500 font-medium">Try selecting a different category or check back later.</p>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="mt-16 text-center">
              <Button 
                onClick={handleShowMore}
                disabled={loading}
                className="h-16 px-12 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-2xl font-black text-base uppercase tracking-widest group shadow-2xl transition-all active:scale-95"
              >
                {loading ? "Loading More..." : "Show More Courses"}
                {!loading && <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />}
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllCourses;
