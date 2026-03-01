import { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";

const categories = [
  "All Courses",
  "Agile & Scrum",
  "Project Management",
  "IT Service Management",
  "Quality & Process",
  "Leadership & Coaching",
  "Business Skills",
  "AI & Technology",
];

const courses = [
  {
    id: 1,
    title: "Certified Scrum Master (CSM®) Certification Training",
    category: "AGILE",
    rating: 5.0,
    enrolled: "73k+",
    duration: "02 Days",
    format: "Live Classroom",
    price: 349,
    originalPrice: 499,
    discount: 30,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    nextDate: "February 6, 2026",
  },
  {
    id: 2,
    title: "ITIL 4® Foundation Certification Training",
    category: "SERVICE",
    rating: 5.0,
    enrolled: "5K+",
    duration: "02 or 04 Days",
    format: "Live Classroom",
    price: 995,
    originalPrice: 1990,
    discount: 50,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
    nextDate: "February 6, 2026",
  },
  {
    id: 3,
    title: "Agile Objectives and Key Results (Agile OKRs) MicroCredential Training",
    category: "AGILE",
    rating: 5.0,
    enrolled: "1.5K+",
    duration: "01 Day",
    format: "Live Classroom",
    price: 175,
    originalPrice: 250,
    discount: 30,
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    nextDate: "February 6, 2026",
  },
  {
    id: 4,
    title: "Leading SAFe® 6.0 Certification Training",
    category: "SAFe",
    rating: 5.0,
    enrolled: "9K+",
    duration: "02 or 03 Days",
    format: "Live Classroom",
    price: 515,
    originalPrice: 1030,
    discount: 50,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    nextDate: "February 6, 2026",
  },
  {
    id: 5,
    title: "Project Management Professional (PMP®) Certification Training",
    category: "PROJECT",
    rating: 5.0,
    enrolled: "30K+",
    duration: "04 or 08 Days",
    format: "Live Classroom",
    price: 495,
    originalPrice: 990,
    discount: 50,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
    nextDate: "February 6, 2026",
  },
  {
    id: 6,
    title: "AI-Empowered SAFe® 6.0 Scrum Master (SSM) Certification Training",
    category: "SAFe",
    rating: 5.0,
    enrolled: "8K+",
    duration: "02 or 03 Days",
    format: "Live Classroom",
    price: 515,
    originalPrice: 1030,
    discount: 50,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
    nextDate: "February 6, 2026",
  },
];

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState("All Courses");

  const filteredCourses = activeCategory === "All Courses" 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all uppercase tracking-widest ${
                activeCategory === category
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View More
          </Button>
          <div className="mt-4">
            <Button className="btn-primary">
              Explore all Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
