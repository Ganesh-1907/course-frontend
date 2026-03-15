import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Search, HelpCircle, ChevronRight, RefreshCw } from "lucide-react";

const questionCategories = [
  { name: "All", count: 280 },
  { name: "Agile & Scrum", count: 80 },
  { name: "Project Management", count: 60 },
  { name: "SAFe", count: 45 },
  { name: "DevOps", count: 35 },
  { name: "Cloud Computing", count: 40 },
  { name: "Certification Prep", count: 20 },
];

const questions = [
  { id: 1, title: "What is the role of a Scrum Master in daily standups?", category: "Agile & Scrum", views: 1240 },
  { id: 2, title: "How many PDUs are required to maintain PMP certification?", category: "Project Management", views: 980 },
  { id: 3, title: "What is the difference between SAFe 5.0 and SAFe 6.0?", category: "SAFe", views: 850 },
  { id: 4, title: "What is the CSM exam format and passing score?", category: "Certification Prep", views: 2100 },
  { id: 5, title: "How long does it take to prepare for the PMP exam?", category: "Project Management", views: 1760 },
  { id: 6, title: "What is Kanban and how does it differ from Scrum?", category: "Agile & Scrum", views: 1350 },
  { id: 7, title: "What are the prerequisites for the AWS Solutions Architect exam?", category: "Cloud Computing", views: 1100 },
  { id: 8, title: "What is continuous integration in DevOps?", category: "DevOps", views: 920 },
  { id: 9, title: "How do I choose between PMP and PRINCE2 certifications?", category: "Certification Prep", views: 1490 },
  { id: 10, title: "What is a Sprint Retrospective and how should it be conducted?", category: "Agile & Scrum", views: 870 },
  { id: 11, title: "What is the SAFe PI Planning process?", category: "SAFe", views: 740 },
  { id: 12, title: "How does Azure DevOps compare to AWS DevOps tools?", category: "Cloud Computing", views: 680 },
  { id: 13, title: "What is the CSPO certification process?", category: "Certification Prep", views: 1320 },
  { id: 14, title: "How to calculate story points in Agile?", category: "Agile & Scrum", views: 1880 },
  { id: 15, title: "What is the PMBOK Guide 7th edition changes?", category: "Project Management", views: 1610 },
  { id: 16, title: "How do Docker and Kubernetes work together?", category: "DevOps", views: 2340 },
];

const QuestionsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = questions.filter(q => {
    const matchesCategory = activeCategory === "All" || q.category === activeCategory;
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <HelpCircle className="w-4 h-4" /> Q&A Hub
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
                  Discover Answers to{" "}
                  <span className="text-orange-500">Your Questions</span>
                </h1>
                <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                  Browse our comprehensive library of certification questions answered by industry experts and certified trainers.
                </p>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-orange-400 focus:ring-4 focus:ring-orange-400/10 transition-all shadow-sm"
                  />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=450&fit=crop"
                  alt="Questions"
                  className="w-full rounded-2xl shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Questions Content */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="font-black text-slate-900 mb-4 text-sm uppercase tracking-wider">Filter by Category</h3>
                  <div className="space-y-1">
                    {questionCategories.map((cat, i) => (
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
                        <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-400">{cat.count}</span>
                      </button>
                    ))}
                  </div>

                  {/* Request Form */}
                  <div className="mt-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white">
                    <h4 className="font-black mb-2">Have a Question?</h4>
                    <p className="text-slate-300 text-sm font-medium mb-4">Our experts will answer within 24 hours.</p>
                    <input
                      placeholder="Your question..."
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm font-medium text-white placeholder:text-slate-400 focus:outline-none focus:border-orange-400 mb-3"
                    />
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-3 rounded-xl transition-colors text-sm">
                      Ask an Expert
                    </button>
                  </div>
                </div>
              </div>

              {/* Questions List */}
              <div className="lg:col-span-3">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black text-slate-900">
                    {filtered.length} Questions Found
                  </h2>
                  <span className="text-sm text-slate-400 font-medium">in {activeCategory}</span>
                </div>
                <div className="space-y-3">
                  {filtered.map((q, i) => (
                    <motion.div
                      key={q.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.03 }}
                      className="bg-white rounded-xl border border-slate-100 p-5 hover:shadow-md hover:border-orange-200 transition-all group cursor-pointer flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                        <RefreshCw className="w-5 h-5 text-orange-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-sm group-hover:text-orange-600 transition-colors">{q.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-orange-500 font-bold">{q.category}</span>
                          <span className="text-xs text-slate-400 font-medium">{q.views.toLocaleString()} views</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    </motion.div>
                  ))}
                </div>

                {filtered.length === 0 && (
                  <div className="text-center py-16">
                    <HelpCircle className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <h3 className="font-black text-slate-400">No questions found</h3>
                    <p className="text-sm text-slate-300 mt-1">Try searching with different keywords</p>
                  </div>
                )}

                <div className="mt-10 text-center">
                  <button className="bg-slate-900 hover:bg-slate-800 text-white font-black px-8 py-3.5 rounded-xl transition-all flex items-center gap-2 mx-auto">
                    Load More Questions <ArrowRight className="w-5 h-5" />
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

export default QuestionsPage;
