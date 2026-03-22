import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { getServiceTypes, getAllCourses } from "@/lib/courseService";
import { Search, ChevronRight } from "lucide-react";



const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [categories, setCategories] = useState(["All Courses"]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServiceTypes = async () => {
      const types = await getServiceTypes();
      if (types && types.length > 0) {
        setCategories(["All Courses", ...types.map(t => t.name)]);
      }
    };
    fetchServiceTypes();
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      const data = await getAllCourses(1, 9, activeCategory);
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
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
          nextDate: c.startDate ? new Date(c.startDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : "Coming Soon",
          serviceType: c.serviceType
        }));
        setCourses(formattedCourses);
      }
      setLoading(false);
    };
    fetchCourses();
  }, [activeCategory]);

  return (
    <section id="offers-cards" className="py-12 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-4"
          >
            Our Training Programs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black font-display tracking-tight uppercase"
          >
            Professional Certification & Training Courses
          </motion.h2>
        </div>

        {/* Category Tabs with Scrollable Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-8"
        >
          <div className="bg-slate-50 border border-slate-200 p-2 rounded-2xl shadow-sm">
            <div className="flex overflow-x-auto pb-2 gap-2 no-scrollbar scroll-smooth">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-black transition-all uppercase tracking-widest whitespace-nowrap border-2 ${
                    activeCategory === category
                      ? "bg-white border-primary text-primary shadow-sm"
                      : "bg-transparent border-transparent text-slate-500 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="h-[400px] bg-slate-100 animate-pulse rounded-2xl" />
            ))
          ) : courses.length > 0 ? (
            courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <Search className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <p className="text-slate-500 font-bold">No courses found matching this category.</p>
            </div>
          )}
        </div>

        {/* Explore All Courses Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/all-courses"
          >
            <Button className="h-14 px-8 bg-[#0f172a] hover:bg-[#1e293b] text-white rounded-xl font-black text-sm uppercase tracking-widest group shadow-xl shadow-slate-200 transition-all hover:scale-[1.02]">
              Explore All Courses
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
