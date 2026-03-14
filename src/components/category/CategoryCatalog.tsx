import React from "react";
import { motion } from "framer-motion";
//import CourseCard from "@/components/CourseCard";
import { CategoryData, Course } from "@/data/categoryData";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, ClockIcon, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCatalogProps {
  data: CategoryData;
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="w-full px-1 course-item relative">
      <div className="">
        <div className="bg-white border rounded-xl shadow-md p-4 pb-2 mt-3 ">

          <div className="absolute top-[7%] right-[0%]">
            <img
              src="https://www.simpliaxis.com/frontend_assets/image/popularcards.webp"
              width="96"
              height="30"
              alt="popular"
            />
            <span className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold">
              {course.badge}
            </span>
          </div>

          <img
            src={course.image}
            className="w-full h-[150px] object-cover"
            alt="course"
          />

          <div className="mt-2 mb-2 flex items-center gap-2 text-sm">
            <span className="text-[#dc480c] bg-[#ffdfd2] rounded-sm text-xs p-2 font-bold">
              {course.nextDate}
            </span>
            <span className="flex font-bold text-[#4f6882] text-xs items-center gap-1">
              <span className="text-[10px]">●</span>
              {course.format}
            </span>

            <span className="ml-auto text-xs font-bold bg-[#ecf0f3] px-2 py-1 rounded-full">
              ⭐ {course.rating.toFixed(1)}
            </span>
          </div>

          <p className="font-bold mb-2 text-base">
            {course.title}
          </p>

          <p className="text-sm mb-2">
            <span className="font-bold">Skill you’ll gain : {course.skills}</span>
          </p>

          <div className="border-b pt-2 mb-2 h-[4rem] text-sm flex flex-col gap-2">

            <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground"><ClockIcon size={13} color="#0dae6b" /> {course.duration}</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground"><Users size={13} color="#0dae6b" /> <span className="uppercase">{course.enrolled}</span> Enrolled</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-[12px] text-muted-foreground font-semibold">Start from</p>
              <p className="font-bold text-base">
                ₹{course.price}
                <del className="text-sm text-gray-500 ml-2">₹{course.originalPrice}</del>
                <span className="text-green-600 ml-2 font-light text-sm">({course.discount}% OFF)</span>
              </p>
            </div>

            <Link
            to={course.navigate}
             className="bg-[#01203d] text-white text-sm w-[27%] py-2 rounded flex justify-center items-center"
            >
              Enroll <ChevronRight strokeWidth={'1.2'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
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

function CategoryMenu() {
  return (
    <div className="relative rounded-xl border border-[#01203d] shadow-md">
      <div className="flex items-center justify-between relative">
        <div className="flex gap-3 overflow-x-auto text-[0.875rem] custom-scrollbar whitespace-nowrap p-2 w-full">
          {categories.map((cat, i) => (
            <a key={cat} href={cat.toLowerCase().replace(/\s+/g, "-")}>
              <button
                className={`px-3 py-2 font-semibold rounded-sm ${i === 1 ? "bg-[#01203d] text-white" : "bg-transparent"
                  }`}
              >
                {cat}
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const CategoryCatalog: React.FC<CategoryCatalogProps> = ({ data }) => {
  const courses = data.courses || [];

  return (
    <div className=" bg-gray-100 rounded-lg md:px-12 py-6">
      <div className="flex flex-col">
        <p className="text-[#718aa5] font-semibold uppercase text-sm">EXPLORE OUR PROFESSIONAL SAFe CERTIFICATION COURSES</p>
        <h2 className="text-[1.65rem] font-semibold tracking-wide">Certification For Build Your Future</h2>
      </div>
      <div className="my-2 custom-scrollbar">
        <CategoryMenu />
      </div>
      {courses.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8">
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
