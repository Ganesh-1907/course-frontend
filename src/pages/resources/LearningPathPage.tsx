import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Route, CheckCircle, Users, Star, ChevronRight } from "lucide-react";

const learningPaths = [
  {
    role: "Scrum Master",
    icon: "🎯",
    color: "bg-blue-500",
    gradient: "from-blue-500 to-blue-700",
    description: "Navigate the Scrum Master Journey",
    steps: [
      { title: "CSM Certification", level: "Beginner", duration: "2 days" },
      { title: "A-CSM Training", level: "Intermediate", duration: "2 days" },
      { title: "CSP-SM Certification", level: "Advanced", duration: "2 days" },
      { title: "CST Assessment", level: "Expert", duration: "Ongoing" },
    ],
  },
  {
    role: "Product Owner",
    icon: "🚀",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-700",
    description: "Accelerate Your Product Owner Career",
    steps: [
      { title: "CSPO Certification", level: "Beginner", duration: "2 days" },
      { title: "A-CSPO Training", level: "Intermediate", duration: "2 days" },
      { title: "CSP-PO Certification", level: "Advanced", duration: "2 days" },
      { title: "ICP-APO Program", level: "Expert", duration: "2 days" },
    ],
  },
  {
    role: "Project Manager",
    icon: "📊",
    color: "bg-orange-500",
    gradient: "from-orange-500 to-red-500",
    description: "Master Project Management Excellence",
    steps: [
      { title: "CAPM Certification", level: "Beginner", duration: "3 days" },
      { title: "PMP Certification", level: "Intermediate", duration: "4 days" },
      { title: "PgMP Program", level: "Advanced", duration: "4 days" },
      { title: "PfMP Portfolio", level: "Expert", duration: "3 days" },
    ],
  },
  {
    role: "Agile Coach",
    icon: "🏆",
    color: "bg-green-500",
    gradient: "from-green-500 to-emerald-600",
    description: "Become an Elite Agile Coach",
    steps: [
      { title: "ICP Fundamentals", level: "Beginner", duration: "2 days" },
      { title: "ICP-ATF Facilitation", level: "Intermediate", duration: "2 days" },
      { title: "ICP-ACC Coaching", level: "Advanced", duration: "3 days" },
      { title: "ICE-AC Enterprise", level: "Expert", duration: "3 days" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-purple-100 text-purple-700",
  Expert: "bg-orange-100 text-orange-700",
};

const LearningPathPage: React.FC = () => {
  const [selectedPath, setSelectedPath] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-400/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Route className="w-4 h-4" /> Structured Career Paths
                </div>
                <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Agile & Scrum{" "}
                  <span className="text-orange-400">Certification</span>{" "}
                  Learning Path
                </h1>
                <p className="text-xl text-blue-100 mb-6 font-medium leading-relaxed">
                  Follow structured learning paths designed by industry experts to fast-track your certification journey.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-white/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex -space-x-2">
                      {["https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop","https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop"].map((src, i) => (
                        <img key={i} src={src} alt="User" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                      ))}
                    </div>
                    <div>
                      <div className="font-black text-white">144,000+ Enrolled</div>
                      <div className="text-blue-200 text-sm font-medium flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> 4.9/5 Average Rating
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg active:scale-95">
                    Explore Paths <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                    Free Consultation
                  </button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=450&fit=crop"
                  alt="Learning Path"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Role Selector */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-3">Choose Your Career Path</h2>
            <p className="text-slate-500 text-center mb-12 font-medium">Select your target role and explore the step-by-step certification journey</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {learningPaths.map((path, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedPath(selectedPath === i ? null : i)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all border-2 ${
                    selectedPath === i
                      ? "border-orange-500 bg-orange-50 shadow-lg"
                      : "border-slate-100 bg-white hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${path.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                    {path.icon}
                  </div>
                  <h3 className="font-black text-slate-900 text-lg mb-1">{path.role}</h3>
                  <p className="text-sm text-slate-500 font-medium mb-3">{path.description}</p>
                  <div className="text-xs text-orange-500 font-bold flex items-center gap-1">
                    {path.steps.length} Certifications <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Path Detail */}
            {selectedPath !== null && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
              >
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  Navigate the <span className="text-orange-500">{learningPaths[selectedPath].role}</span> Journey
                </h3>
                <p className="text-slate-500 font-medium mb-8">{learningPaths[selectedPath].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {learningPaths[selectedPath].steps.map((step, j) => (
                    <div
                      key={j}
                      className="bg-white rounded-xl p-5 border border-slate-100 relative"
                    >
                      <div className="absolute -top-3 -left-3 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm">
                        {j + 1}
                      </div>
                      <span className={`text-[11px] font-black px-2.5 py-1 rounded-full ${levelColors[step.level]} mb-3 inline-block`}>
                        {step.level}
                      </span>
                      <h4 className="font-black text-slate-900 mb-2 text-sm">{step.title}</h4>
                      <div className="text-xs text-slate-400 font-medium">{step.duration}</div>
                      <button className="mt-3 text-orange-500 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                        Learn More <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl transition-all flex items-center gap-2">
                    Start This Path <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-slate-300 text-slate-700 font-bold px-8 py-3.5 rounded-xl hover:border-orange-400 hover:text-orange-500 transition-all">
                    Download Guide
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearningPathPage;
