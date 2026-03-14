import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface RelatedCourse {
  title: string;
  image: string;
  rating: string;
  price: string;
}

interface ELearningOtherCoursesProps {
  courses: RelatedCourse[];
}

const ELearningOtherCourses: React.FC<ELearningOtherCoursesProps> = ({ courses }) => {
  return (
    <div className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Other E-learning Courses</h2>
        <Link to="/e-learning" className="text-primary font-bold text-sm hover:underline flex items-center gap-2 group">
          Browse All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 shadow-sm border border-slate-100">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                <span className="text-[12px] font-bold text-slate-900">{course.rating}</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
                {course.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#1a1a1a]">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ELearningOtherCourses;
