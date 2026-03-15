import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Globe, Users, Video, Award, BookOpen, ChevronDown } from "lucide-react";

const webinars = [
  {
    id: 1,
    title: "Agile Transformation: From Theory to Practice",
    date: "March 25, 2026",
    time: "2:00 PM - 3:30 PM IST",
    speaker: "John Smith",
    speakerRole: "Agile Coach & Trainer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&facepad=2",
    country: "India",
    badge: "FREE",
  },
  {
    id: 2,
    title: "Mastering PMP Certification in 2026",
    date: "March 28, 2026",
    time: "3:00 PM - 4:30 PM IST",
    speaker: "Sarah Johnson",
    speakerRole: "PMP Certified Trainer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&facepad=2",
    country: "USA",
    badge: "FREE",
  },
  {
    id: 3,
    title: "AI in Project Management: A Practical Guide",
    date: "April 2, 2026",
    time: "4:00 PM - 5:30 PM IST",
    speaker: "Michael Chen",
    speakerRole: "AI & PM Specialist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&facepad=2",
    country: "Singapore",
    badge: "FREE",
  },
  {
    id: 4,
    title: "AWS Cloud Certification Bootcamp",
    date: "April 5, 2026",
    time: "2:00 PM - 4:00 PM IST",
    speaker: "Emma Williams",
    speakerRole: "AWS Solutions Architect",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&facepad=2",
    country: "UK",
    badge: "FREE",
  },
  {
    id: 5,
    title: "DevOps Culture & Practices",
    date: "April 10, 2026",
    time: "3:00 PM - 4:30 PM IST",
    speaker: "David Kumar",
    speakerRole: "Senior DevOps Engineer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&facepad=2",
    country: "India",
    badge: "FREE",
  },
  {
    id: 6,
    title: "Scrum Master Excellence: Advanced Techniques",
    date: "April 15, 2026",
    time: "1:00 PM - 2:30 PM IST",
    speaker: "Priya Patel",
    speakerRole: "Certified Scrum Trainer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=80&h=80&fit=crop&facepad=2",
    country: "India",
    badge: "FREE",
  },
];

const whyFeatures = [
  { icon: Video, title: "Live Interactive Sessions", desc: "Real-time Q&A with expert trainers", color: "bg-blue-500" },
  { icon: Award, title: "Get Certified", desc: "Earn certificates of participation", color: "bg-orange-500" },
  { icon: Globe, title: "Global Community", desc: "Connect with learners worldwide", color: "bg-green-500" },
  { icon: BookOpen, title: "Expert Knowledge", desc: "Learn from industry leaders", color: "bg-purple-500" },
];

const countries = ["All", "India", "USA", "UK", "Singapore", "UAE", "Australia"];

const WebinarsPage: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filtered = selectedCountry === "All"
    ? webinars
    : webinars.filter(w => w.country === selectedCountry);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live Events
              </div>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
                Explore the Upcoming{" "}
                <span className="text-orange-300">Live Webinars</span>
              </h1>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
                Join industry experts for free live sessions. Learn, ask questions, and grow your career from anywhere.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg active:scale-95">
                  Explore Webinars <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-white/50 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all">
                  Free Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-3">Why Choose Our Webinars?</h2>
            <p className="text-slate-500 text-center mb-12 font-medium">Everything you get when you join our live sessions</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all text-center group"
                >
                  <div className={`w-14 h-14 ${f.color} bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <f.icon className={`w-7 h-7 text-white`} style={{ filter: "drop-shadow(0 0 8px rgba(0,0,0,0.3))" }} />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Webinars List */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <h2 className="text-3xl font-black text-slate-900">Upcoming Webinar Events</h2>
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 cursor-pointer hover:border-orange-400 transition-colors">
                <Globe className="w-4 h-4 text-orange-500" />
                {selectedCountry}
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
            </div>
            {/* Country filters */}
            <div className="flex flex-wrap gap-2 mb-8">
              {countries.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCountry(c)}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    selectedCountry === c
                      ? "bg-orange-500 text-white"
                      : "bg-white border border-slate-200 text-slate-600 hover:border-orange-300"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((webinar, i) => (
                <motion.div
                  key={webinar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 relative">
                    <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded">
                      {webinar.badge}
                    </span>
                    <div className="flex items-center gap-2 text-blue-100 text-sm font-medium mb-1">
                      <Calendar className="w-4 h-4" /> {webinar.date}
                    </div>
                    <div className="flex items-center gap-2 text-blue-200 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5" /> {webinar.time}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-black text-slate-900 text-[15px] mb-4 leading-tight">{webinar.title}</h3>
                    <div className="flex items-center gap-3 mb-5">
                      <img src={webinar.image} alt={webinar.speaker} className="w-10 h-10 rounded-full object-cover border-2 border-orange-200" />
                      <div>
                        <div className="font-bold text-sm text-slate-900">{webinar.speaker}</div>
                        <div className="text-xs text-slate-400 font-medium">{webinar.speakerRole}</div>
                      </div>
                    </div>
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-2.5 rounded-xl transition-colors">
                      Register Now
                    </button>
                  </div>
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

export default WebinarsPage;
