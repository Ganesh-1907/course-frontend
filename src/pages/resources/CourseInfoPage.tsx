import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, TrendingUp, ArrowRight, BookOpen, ChevronRight, Search, Download } from "lucide-react";

const categories = [
  { name: "Agile", count: 32 },
  { name: "Project Management", count: 28 },
  { name: "SAFe", count: 18 },
  { name: "DevOps", count: 14 },
  { name: "Cloud Computing", count: 22 },
  { name: "Data Science", count: 20 },
  { name: "Cybersecurity", count: 16 },
  { name: "Six Sigma", count: 13 },
];

const courseInfoItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=220&fit=crop",
    category: "Agile",
    title: "What is Agile? A Complete Guide for Beginners",
    description: "Understand the core principles, frameworks, and methodologies of Agile. Perfect for those starting their Agile journey.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=220&fit=crop",
    category: "Project Management",
    title: "PMP Certification: Everything You Need to Know",
    description: "Complete guide to PMP certification — eligibility, exam format, preparation tips, and career impact.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=220&fit=crop",
    category: "Cloud Computing",
    title: "AWS vs Azure: Which Cloud Path is Right for You?",
    description: "Detailed comparison of the two leading cloud platforms to help you choose the right certification path.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=220&fit=crop",
    category: "DevOps",
    title: "Understanding the DevOps Lifecycle: A Practical Overview",
    description: "Explore the stages of DevOps from planning and coding to monitoring and operations.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=220&fit=crop",
    category: "Data Science",
    title: "Python for Data Science: Where to Begin",
    description: "Your definitive starting point for data science with Python — libraries, tools, and learning resources.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=220&fit=crop",
    category: "Generative AI",
    title: "Generative AI for Professionals: Practical Applications",
    description: "Discover how generative AI is being used in industries and how professionals can leverage it.",
  },
];

const CourseInfoPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("Individual");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <FileText className="w-4 h-4" /> Course Information
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Tap Into New Info to{" "}
                  <span className="text-orange-500">Advance Your Career</span>
                </h1>
                <p className="text-lg text-slate-600 mb-6 font-medium leading-relaxed">
                  Get comprehensive information about every certification course — eligibility, exam format, career impact, and step-by-step preparation guides.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Detailed course syllabi and outlines",
                    "Exam eligibility requirements",
                    "Industry salary insights post-certification",
                    "Expert-recommended study resources",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-orange-200 active:scale-95">
                  Explore Course Info <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=450&fit=crop"
                  alt="Course information"
                  className="w-full rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <div className="mb-4 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      placeholder="Search topics..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-9 pr-3 text-sm font-medium focus:outline-none focus:border-orange-400 transition-all"
                    />
                  </div>
                  <h3 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wider">Topics</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveCategory("All")}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                        activeCategory === "All"
                          ? "bg-orange-50 text-orange-600 border border-orange-200"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      All Topics
                    </button>
                    {categories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                          activeCategory === cat.name
                            ? "bg-orange-50 text-orange-600 border border-orange-200"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-400">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 gap-6">
                  {courseInfoItems.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer flex gap-0 flex-col sm:flex-row"
                    >
                      <div className="sm:w-40 overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-40 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-black text-orange-500 uppercase tracking-wider">{item.category}</span>
                        <h3 className="font-black text-slate-900 mt-1.5 mb-2 leading-tight text-[15px] group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium mb-4 leading-relaxed">{item.description}</p>
                        <div className="flex items-center gap-3">
                          <button className="flex items-center gap-1.5 text-orange-500 font-bold text-sm hover:gap-2.5 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                          <button className="flex items-center gap-1.5 text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors">
                            <Download className="w-3.5 h-3.5" /> Download
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar - Request Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-black text-slate-900 mb-1">Request More Details</h3>
                  <p className="text-sm text-slate-500 font-medium mb-4">Get personalized course information</p>
                  <div className="flex gap-1 mb-5 bg-slate-100 rounded-xl p-1">
                    {["Individual", "Corporate"].map(tab => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-2 rounded-lg text-sm font-black transition-all ${
                          activeTab === tab ? "bg-white shadow-sm text-slate-900" : "text-slate-500"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <input placeholder="Full Name *" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-400 transition-all" />
                    <input placeholder="Email Address *" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-400 transition-all" />
                    <input placeholder="Phone Number *" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-400 transition-all" />
                    <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-orange-400 transition-all text-slate-600">
                      <option>Select Course</option>
                      <option>Agile & Scrum</option>
                      <option>PMP Certification</option>
                      <option>AWS Cloud</option>
                      <option>Azure</option>
                    </select>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3 rounded-xl transition-colors">
                      Submit Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CourseInfoPage;
