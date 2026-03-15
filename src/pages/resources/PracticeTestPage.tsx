import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle, Star, Users, ArrowRight, Target, Clock, BarChart2, ShieldCheck, Trophy } from "lucide-react";

const practiceTests = [
  {
    id: 1,
    title: "PMP Practice Test",
    logo: "🏆",
    color: "bg-blue-50 border-blue-200",
    rating: 4.9,
    reviews: 2300,
    freeTests: 5,
    users: "45,000+",
    popular: true,
  },
  {
    id: 2,
    title: "CSM Practice Test",
    logo: "🎯",
    color: "bg-purple-50 border-purple-200",
    rating: 4.8,
    reviews: 1800,
    freeTests: 3,
    users: "32,000+",
    popular: true,
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner Test",
    logo: "☁️",
    color: "bg-orange-50 border-orange-200",
    rating: 4.7,
    reviews: 3100,
    freeTests: 4,
    users: "58,000+",
    popular: true,
  },
  {
    id: 4,
    title: "CISSP Practice Test",
    logo: "🔐",
    color: "bg-red-50 border-red-200",
    rating: 4.8,
    reviews: 1400,
    freeTests: 3,
    users: "21,000+",
    popular: false,
  },
  {
    id: 5,
    title: "Lean Six Sigma Green Belt Test",
    logo: "📊",
    color: "bg-green-50 border-green-200",
    rating: 4.6,
    reviews: 980,
    freeTests: 2,
    users: "15,000+",
    popular: false,
  },
  {
    id: 6,
    title: "Azure AZ-900 Practice Test",
    logo: "💎",
    color: "bg-sky-50 border-sky-200",
    rating: 4.9,
    reviews: 2700,
    freeTests: 5,
    users: "61,000+",
    popular: true,
  },
];

const features = [
  {
    icon: Target,
    title: "Real Exam Simulation",
    desc: "Questions designed to mirror actual certification exams",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BarChart2,
    title: "Detailed Analytics",
    desc: "Track your performance with in-depth score analysis",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Expert-validated",
    desc: "All questions verified by certified industry professionals",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Clock,
    title: "Timed Practice",
    desc: "Practice under realistic exam time constraints",
    color: "bg-orange-100 text-orange-600",
  },
];

const PracticeTestPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 border border-orange-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Trophy className="w-4 h-4" /> Certification-Ready
                </div>
                <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Master Your{" "}
                  <span className="text-orange-400">Certifications</span>{" "}
                  with Practice Tests
                </h1>
                <div className="space-y-3 mb-8">
                  {["Exam-aligned question bank", "Detailed answer explanations", "Performance tracking dashboard", "Unlimited retakes"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-orange-900/30 active:scale-95">
                    Start Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="border border-white/30 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                    Free Consultation
                  </button>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=450&fit=crop"
                  alt="Practice tests"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-3">Focused Learning Journey</h2>
            <p className="text-slate-500 text-center mb-12 font-medium">Everything you need to pass your certification exam</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 hover:shadow-md transition-all text-center"
                >
                  <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Tests Grid */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-slate-900 mb-3">Top-Related Practice Test Series</h2>
            <p className="text-slate-500 mb-10 font-medium">Curated tests to help you ace industry certifications</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceTests.map((test, i) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-white rounded-2xl border-2 ${test.color} p-6 relative overflow-hidden hover:shadow-xl transition-all group`}
                >
                  {test.popular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-[10px] font-black px-2 py-1 rounded">
                      POPULAR
                    </div>
                  )}
                  <div className="text-4xl mb-4">{test.logo}</div>
                  <h3 className="font-black text-slate-900 text-lg mb-3">{test.title}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < Math.floor(test.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                    ))}
                    <span className="text-sm font-bold text-slate-700 ml-1">{test.rating}</span>
                    <span className="text-xs text-slate-400">({test.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">
                      {test.freeTests} Free Tests
                    </span>
                    <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Users className="w-3 h-3" /> {test.users}
                    </span>
                  </div>
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                    Start Now <ArrowRight className="w-4 h-4" />
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

export default PracticeTestPage;
