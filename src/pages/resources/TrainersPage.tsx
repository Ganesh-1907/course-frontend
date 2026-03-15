import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Star, ArrowRight, Award, Users, BookOpen, Clock, ChevronRight } from "lucide-react";

const courseCategories = [
  "All", "Agile & Scrum", "Project Management", "SAFe", "DevOps", "Cloud Computing", "Data Science", "Generative AI", "Quality",
];

const trainers = [
  {
    id: 1,
    name: "Dr. Alexandra Kim",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&facepad=3",
    rating: 4.9,
    reviews: 1240,
    yearsExp: 15,
    trained: "12,000+",
    specialties: ["CSM", "CSPO", "SAFe 6.0", "AgileCOACH"],
    category: "Agile & Scrum",
  },
  {
    id: 2,
    name: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&facepad=3",
    rating: 4.8,
    reviews: 980,
    yearsExp: 12,
    trained: "8,500+",
    specialties: ["PMP", "PRINCE2", "CAPM"],
    category: "Project Management",
  },
  {
    id: 3,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&facepad=3",
    rating: 4.9,
    reviews: 1560,
    yearsExp: 10,
    trained: "15,000+",
    specialties: ["AWS", "Azure", "GCP", "DevOps"],
    category: "Cloud Computing",
  },
  {
    id: 4,
    name: "Raj Sharma",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&facepad=3",
    rating: 4.7,
    reviews: 780,
    yearsExp: 8,
    trained: "6,200+",
    specialties: ["Python", "Machine Learning", "Data Science"],
    category: "Data Science",
  },
  {
    id: 5,
    name: "Emma Richardson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&facepad=3",
    rating: 4.8,
    reviews: 890,
    yearsExp: 11,
    trained: "9,400+",
    specialties: ["SAFe 6.0", "POPM", "Agile"],
    category: "SAFe",
  },
  {
    id: 6,
    name: "David Martinez",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&facepad=3",
    rating: 4.9,
    reviews: 1120,
    yearsExp: 14,
    trained: "11,800+",
    specialties: ["Docker", "Kubernetes", "Jenkins", "CI/CD"],
    category: "DevOps",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "1100K+", label: "Professionals Trained" },
  { value: "500+", label: "Workshops Conducted" },
  { value: "250+", label: "Expert Trainers" },
];

const TrainersPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? trainers
    : trainers.filter(t => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <Award className="w-4 h-4" /> World-class Trainers
              </div>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                Meet Our Highly Acclaimed{" "}
                <span className="text-orange-400">Trainer Community</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
                Learn from industry legends with decades of experience. Our trainers have helped 1.1 million professionals worldwide.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg active:scale-95 mx-auto">
                Explore Trainers <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 px-4 bg-amber-400">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-sm font-bold text-slate-700 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category filter */}
        <section className="py-6 px-4 bg-white border-b border-slate-100">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-2">
              {courseCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                    activeCategory === cat
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

        {/* Trainers Grid */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((trainer, i) => (
                <motion.div
                  key={trainer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-xl transition-all group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-orange-100 group-hover:border-orange-300 transition-colors flex-shrink-0"
                    />
                    <div>
                      <h3 className="font-black text-slate-900 text-[15px]">{trainer.name}</h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`w-3.5 h-3.5 ${j < Math.floor(trainer.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`} />
                        ))}
                        <span className="text-xs font-bold text-slate-600 ml-1">{trainer.rating}</span>
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-0.5">({trainer.reviews.toLocaleString()} reviews)</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="font-black text-slate-900 text-sm">{trainer.yearsExp}+</div>
                      <div className="text-xs text-slate-400 font-medium">Years Exp</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-3 text-center">
                      <div className="font-black text-slate-900 text-sm">{trainer.trained}</div>
                      <div className="text-xs text-slate-400 font-medium">Trained</div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <div className="text-xs font-black text-slate-500 uppercase tracking-wider mb-2">Certifications</div>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((s, j) => (
                        <span key={j} className="bg-indigo-50 text-indigo-700 text-[11px] font-bold px-2.5 py-1 rounded-full border border-indigo-100">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-black py-2.5 rounded-xl transition-all flex items-center justify-center gap-2">
                    View Profile <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrainersPage;
