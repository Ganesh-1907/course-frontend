import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, User, Calendar, Tag, Search, ChevronRight } from "lucide-react";

const categories = [
  { name: "Agile", count: 48 },
  { name: "Project Management", count: 35 },
  { name: "SAFe", count: 22 },
  { name: "DevOps", count: 18 },
  { name: "Cloud Computing", count: 30 },
  { name: "Data Science", count: 25 },
  { name: "Generative AI", count: 15 },
  { name: "Quality", count: 20 },
  { name: "Business Analysis", count: 17 },
  { name: "Cybersecurity", count: 12 },
];

const blogs = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    category: "Agile",
    title: "How to Become an Agile Coach in 2026: The Complete Roadmap",
    author: "James Wilson",
    date: "March 10, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
    category: "Cloud Computing",
    title: "AWS vs Azure vs GCP: Which Cloud Certification Should You Pursue?",
    author: "Emily Davis",
    date: "March 8, 2026",
    readTime: "12 min read",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1667372393913-3f6c245f9e5a?w=400&h=250&fit=crop",
    category: "Generative AI",
    title: "10 Ways Generative AI is Reshaping Project Management",
    author: "Raj Patel",
    date: "March 5, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
    category: "Project Management",
    title: "PMP Exam Prep: 5 Strategies That Actually Work",
    author: "Michelle Lee",
    date: "March 3, 2026",
    readTime: "10 min read",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
    category: "DevOps",
    title: "DevOps vs SRE: Understanding the Key Differences",
    author: "Carlos Martinez",
    date: "March 1, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop",
    category: "Data Science",
    title: "From Zero to Data Scientist: A Step-by-Step Learning Path",
    author: "Ananya Singh",
    date: "Feb 28, 2026",
    readTime: "15 min read",
  },
];

const BlogsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Tag className="w-4 h-4" /> Knowledge Hub
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                  GO BEYOND THE{" "}
                  <span className="text-orange-500">CURRICULUM</span>
                </h1>
                <div className="space-y-3 mb-8">
                  {[
                    "Expert-written articles on trending tech topics",
                    "Practical insights from certified professionals",
                    "Career guides and certification tips",
                    "Industry news and analysis",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <ChevronRight className="w-5 h-5 text-orange-500 flex-shrink-0" />
                      <span className="text-slate-600 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="relative max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl py-3.5 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all shadow-sm"
                  />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop"
                  alt="Blogs"
                  className="w-full rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wider">Categories</h3>
                  <div className="space-y-1">
                    <button
                      onClick={() => setActiveCategory("All")}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        activeCategory === "All"
                          ? "bg-orange-50 text-orange-600 border border-orange-200"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      All Articles
                    </button>
                    {categories.map((cat, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveCategory(cat.name)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between ${
                          activeCategory === cat.name
                            ? "bg-orange-50 text-orange-600 border border-orange-200"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">{cat.count}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Blog Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {blogs.map((blog, i) => (
                    <motion.div
                      key={blog.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-5">
                        <span className="text-xs font-black text-orange-500 uppercase tracking-wider">{blog.category}</span>
                        <h3 className="font-black text-slate-900 mt-2 mb-3 leading-tight text-[15px] group-hover:text-orange-500 transition-colors">
                          {blog.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mb-4">
                          <span className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" /> {blog.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" /> {blog.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-400 font-medium">{blog.readTime}</span>
                          <button className="flex items-center gap-1.5 text-orange-500 font-bold text-sm hover:gap-2.5 transition-all">
                            Read More <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <button className="bg-slate-900 hover:bg-slate-800 text-white font-black px-8 py-3.5 rounded-xl transition-all">
                    Load More Articles
                  </button>
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

export default BlogsPage;
