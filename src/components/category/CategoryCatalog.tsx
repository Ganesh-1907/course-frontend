import React from "react";
import { motion } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { CategoryData } from "@/data/categoryData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCatalogProps {
  data: CategoryData;
}

const CategoryCatalog: React.FC<CategoryCatalogProps> = ({ data }) => {
  const courses = data.courses || [];

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-3"
          >
            Available Programs
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-black text-[#001c3d] tracking-tight uppercase"
          >
            Explore all {data.name} Courses
          </motion.h2>
        </div>
        
        <Button variant="outline" className="border-[#001c3d] text-[#001c3d] font-bold h-10 px-6 rounded-lg hidden md:flex items-center gap-2 text-xs">
          Compare Courses
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {courses.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
          <p className="text-slate-500 font-bold text-lg">New courses for {data.name} arriving soon.</p>
          <p className="text-slate-400 font-medium mb-6">Stay tuned for official certification launches.</p>
          <Button className="bg-[#ff4e25] text-white font-black h-12 px-8 rounded-xl">
            Notify Me
          </Button>
        </div>
      )}

    </div>
  );
};

export default CategoryCatalog;
