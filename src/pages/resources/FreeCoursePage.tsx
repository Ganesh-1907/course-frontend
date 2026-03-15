import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Globe, DollarSign, Clock, CheckCircle, BookOpen, Star, Users, ArrowRight, Play } from "lucide-react";

const freeCourses = [
  {
    id: 1,
    title: "Introduction to Agile & Scrum",
    category: "Agile",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop",
    rating: 4.8,
    enrolled: 12400,
    duration: "6 hours",
    badge: "FREE",
  },
  {
    id: 2,
    title: "Project Management Fundamentals",
    category: "Project",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&h=200&fit=crop",
    rating: 4.7,
    enrolled: 9800,
    duration: "4 hours",
    badge: "FREE",
  },
  {
    id: 3,
    title: "Introduction to Cloud Computing",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
    rating: 4.9,
    enrolled: 15200,
    duration: "5 hours",
    badge: "FREE",
  },
  {
    id: 4,
    title: "DevOps Essentials",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop",
    rating: 4.6,
    enrolled: 7600,
    duration: "8 hours",
    badge: "FREE",
  },
  {
    id: 5,
    title: "Data Science with Python - Basics",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop",
    rating: 4.8,
    enrolled: 18500,
    duration: "7 hours",
    badge: "FREE",
  },
  {
    id: 6,
    title: "Generative AI Introduction",
    category: "Generative AI",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=200&fit=crop",
    rating: 4.9,
    enrolled: 22000,
    duration: "3 hours",
    badge: "FREE",
  },
  {
    id: 7,
    title: "Lean Six Sigma Overview",
    category: "Quality",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
    rating: 4.7,
    enrolled: 8900,
    duration: "5 hours",
    badge: "FREE",
  },
  {
    id: 8,
    title: "Business Analysis Foundations",
    category: "Business",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop",
    rating: 4.5,
    enrolled: 6200,
    duration: "4 hours",
    badge: "FREE",
  },
];

const features = [
  { icon: Award, title: "Certified Experts", desc: "Learn from industry-certified trainers" },
  { icon: BookOpen, title: "Skill-focused", desc: "Content curated for practical skill building" },
  { icon: DollarSign, title: "Zero-cost", desc: "100% free access with no hidden charges" },
  { icon: Clock, title: "Flexible Learning", desc: "Learn at your own pace, anytime" },
];

const FreeCoursePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Agile", "Project", "Cloud", "DevOps", "Data Science", "Generative AI", "Quality", "Business"];

  const filtered = selectedCategory === "All"
    ? freeCourses
    : freeCourses.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  100% Free Access
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Level Up Your Career with{" "}
                  <span className="text-orange-500">Free Online Courses</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                  Access world-class learning content with no cost. Start building skills that matter with our industry-expert designed free courses.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500" /> Completion Certificate
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500" /> 100% Success Rate
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold text-sm">
                    <CheckCircle className="w-5 h-5 text-green-500" /> 11+ Countries
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-orange-200 active:scale-95">
                    Explore Free Courses <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-300 text-slate-700 font-bold px-8 py-3.5 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all">
                    View All Courses
                  </button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop"
                  alt="Free online courses"
                  className="w-full rounded-2xl shadow-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                    <f.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-4 px-4 bg-white border-y border-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-black text-slate-900">
                Free Courses <span className="text-orange-500">({filtered.length})</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((course, i) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all overflow-hidden group border border-slate-100"
                >
                  <div className="relative overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-black px-3 py-1 rounded-full">{course.badge}</span>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-orange-500 ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-black text-orange-500 uppercase tracking-wider">{course.category}</span>
                    <h3 className="font-black text-slate-900 text-[15px] mt-2 mb-3 leading-tight">{course.title}</h3>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-slate-700">{course.rating}</span>
                      <span className="text-xs text-slate-400 ml-1">({course.enrolled.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
                      <Clock className="w-3.5 h-3.5" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-bold text-slate-600">Completion Certificate</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 border border-slate-300 text-slate-700 font-bold text-sm py-2 rounded-lg hover:border-orange-400 hover:text-orange-500 transition-colors">
                        View Course
                      </button>
                      <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-black text-sm py-2 rounded-lg transition-colors">
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="py-12 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "1100K+", label: "Enrolled Learners" },
                { value: "4500+", label: "Companies Worldwide" },
                { value: "100%", label: "Success Rate" },
                { value: "11+", label: "Countries" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-orange-400 mb-1">{stat.value}</div>
                  <div className="text-slate-300 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FreeCoursePage;
