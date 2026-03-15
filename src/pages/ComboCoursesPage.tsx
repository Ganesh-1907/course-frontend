import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ShieldCheck, Star, ArrowRight, Share2, Plus, Users, Clock, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const comboCategories = ["Other Combo", "PMI Combo", "Scaled Agile Combo", "Scrum Alliance Combo"];

const comboCourses = [
  {
    id: 1,
    title: "Leading SAFe Certification Training & PMP Certification Training and Exam bundle",
    category: "Scaled Agile Combo",
    rating: "4.9",
    enrolled: "9k+",
    mode: "Live Classroom",
    currentPrice: "₹70,999",
    originalPrice: "₹84,399",
    discount: "₹13,400 off",
    badge: "BEST VALUE",
    icons: ["https://www.viovn.com/course-images/scaled-agile-logo.png", "https://www.viovn.com/course-images/pmi-logo.png"]
  },
  {
    id: 2,
    title: "SSM Certification Training & PMP Certification Training and Exam bundle",
    category: "Scaled Agile Combo",
    rating: "4.8",
    enrolled: "8k+",
    mode: "Live Classroom",
    currentPrice: "₹65,999",
    originalPrice: "₹78,999",
    discount: "₹13,000 off",
    badge: "TRENDING",
    icons: ["https://www.viovn.com/course-images/scaled-agile-logo.png", "https://www.viovn.com/course-images/pmi-logo.png"]
  },
  {
    id: 3,
    title: "SAFe POPM Certification Training & PMP Certification Training and Exam bundle",
    category: "Scaled Agile Combo",
    rating: "4.9",
    enrolled: "8k+",
    mode: "Live Classroom",
    currentPrice: "₹70,999",
    originalPrice: "₹84,399",
    discount: "₹13,400 off",
    badge: "BEST VALUE",
    icons: ["https://www.viovn.com/course-images/scaled-agile-logo.png", "https://www.viovn.com/course-images/pmi-logo.png"]
  },
  {
    id: 4,
    title: "CSM Certification & CSPO Certification Training bundle",
    category: "Scrum Alliance Combo",
    rating: "4.9",
    enrolled: "12k+",
    mode: "Live Classroom",
    currentPrice: "₹45,999",
    originalPrice: "₹55,999",
    discount: "₹10,000 off",
    badge: "BEST SELLER",
    icons: ["https://www.viovn.com/course-images/scrum-alliance-logo.png", "https://www.viovn.com/course-images/scrum-alliance-logo.png"]
  }
];

const faqData = [
  {
    question: "What are Viovn Combo Courses?",
    answer: "Viovn Combo Courses combine two or more related certifications into a single, streamlined learning path to help you learn faster and save on fees."
  },
  {
    question: "How do Combo Courses help save costs?",
    answer: "By enrolling in multiple courses at once, you get significant discounts compared to buying each course individually. It reduces the overall certification cost while providing broader expertise."
  },
  {
    question: "Can I choose my own course combinations?",
    answer: "We offer pre-designed top-selling combos, but you can also contact our advisor to create a customized combo that fits your career path."
  },
  {
    question: "Will I get separate certificates for each course?",
    answer: "Yes, once you complete each individual part of the combo and meet its certification requirements, you will receive the official certificate for each course separately."
  }
];

const ComboCoursesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Scaled Agile Combo");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredCombos = comboCourses.filter(c => c.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="bg-[#FCFBF7] py-16 lg:py-24 overflow-hidden relative">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <ShieldCheck className="w-4 h-4" /> 100% Money Back Guarantee
                </div>
                <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight">
                  <span className="text-orange-500 relative">
                    All-in-One Learning
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5 L 100 10 L 0 10 Z" />
                    </svg>
                  </span>
                  <br />
                  Maximize Your Learning with Combo Courses
                </h1>
                <p className="text-lg text-slate-600 mb-8 font-medium max-w-xl">
                  Earn multiple globally recognized certifications faster and more affordably. Learn from industry experts and gain a comprehensive understanding of related frameworks.
                </p>
                
                <div className="flex flex-wrap gap-8 items-center mb-10">
                  <div className="flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/00/Trustpilot_Logo_2017.svg" alt="Trustpilot" className="h-6" />
                    <div className="flex text-green-500"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                    <span className="font-bold text-slate-700">4.9/5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5" />
                    <div className="flex text-yellow-500"><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/><Star className="w-4 h-4 fill-current"/></div>
                    <span className="font-bold text-slate-700">4.9/5</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-8 py-3.5 rounded-xl transition-all shadow-lg active:scale-95">
                    Contact Course Advisor
                  </button>
                  <button className="border-2 border-orange-500 text-orange-500 font-black px-8 py-3.5 rounded-xl hover:bg-orange-50 transition-all">
                    Explore Combo Courses
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100/50 rounded-full blur-3xl -z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop" 
                    alt="Professional" 
                    className="w-full max-w-lg mx-auto rounded-3xl z-10 relative shadow-2xl"
                  />
                  {/* Floating badges */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Expert Instructor</div>
                      <div className="text-xs text-slate-500">Industry Leaders</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20 border border-slate-100"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <Star className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Top Rated Training</div>
                      <div className="text-xs text-slate-500">5-Star Reviews</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- TRUSTED BY --- */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl">
            <h3 className="text-center text-slate-400 font-bold uppercase tracking-wider text-sm mb-8">Trusted by Global Leaders</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {["Bosch", "Capgemini", "KPMG", "Accenture", "Infosys", "Cognizant"].map((brand, i) => (
                <span key={i} className="text-2xl font-black text-slate-300 pointer-events-none">{brand}</span>
              ))}
            </div>
          </div>
        </section>

        {/* --- KEY BENEFITS --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Key Benefits of Combo Courses</h2>
              <p className="text-slate-500 font-medium">Why smart professionals choose our bundled certification paths</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Cost Effective Investment", icon: "💰", desc: "Save up to 30% compared to enrolling in individual courses separately." },
                { title: "Broader Expertise", icon: "📈", desc: "Master multiple frameworks simultaneously to build a versatile professional profile." },
                { title: "Flexible Schedule", icon: "🕒", desc: "Access multiple training sessions with flexible dates that fit your work life." }
              ].map((benefit, i) => (
                <div key={i} className="bg-[#FCFBF7] p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{benefit.icon}</div>
                  <h4 className="text-xl font-black text-slate-900 mb-3">{benefit.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- COURSE FILTER SECTION --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-[#1a237e] mb-4">Unbeatable Saving Combo Schedule</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {comboCategories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                    activeTab === cat 
                    ? "bg-[#1a237e] text-white shadow-lg" 
                    : "bg-white text-slate-600 hover:bg-white/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredCombos.map((combo, i) => (
                  <motion.div
                    key={combo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col relative border border-slate-100"
                  >
                    {/* Ribbon */}
                    <div className="absolute top-0 left-0">
                      <div className="bg-red-500 text-white text-[10px] font-black px-8 py-1.5 -rotate-45 -translate-x-6 translate-y-2 shadow-md">
                        {combo.badge}
                      </div>
                    </div>
                    
                    <button className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-orange-100 rounded-full transition-colors text-slate-400 hover:text-orange-500">
                      <Share2 className="w-4 h-4" />
                    </button>

                    <div className="p-8 pt-12 flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-slate-50 rounded-xl p-3 flex items-center justify-center border border-slate-100">
                          <img src={combo.icons[0]} alt="Icon 1" className="max-h-full object-contain" />
                        </div>
                        <Plus className="w-5 h-5 text-slate-300" />
                        <div className="w-16 h-16 bg-slate-50 rounded-xl p-3 flex items-center justify-center border border-slate-100">
                          <img src={combo.icons[1]} alt="Icon 2" className="max-h-full object-contain" />
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-[#1a237e] mb-4 leading-snug group-hover:text-orange-500 transition-colors">
                        {combo.title}
                      </h4>

                      <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-6">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-blue-500" /> {combo.enrolled}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-blue-500" /> {combo.mode}
                        </div>
                      </div>

                      <div className="bg-slate-50 p-6 rounded-2xl mb-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl font-black text-slate-900">{combo.currentPrice}</span>
                          <span className="text-slate-400 line-through text-lg">{combo.originalPrice}</span>
                        </div>
                        <span className="text-orange-600 font-black text-sm">{combo.discount}</span>
                      </div>

                      <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-md active:scale-95">
                        ENROLL NOW
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* --- UNLOCK MORE SECTION --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-[#1a237e] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-400/20 rounded-full blur-3xl" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                   <div className="lg:w-1/2">
                      <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">Unlock More with Viovn Combo Courses</h2>
                      <div className="space-y-6">
                        {[
                          "Learn Multiple Skills Together",
                          "Dual/Multiple Certifications",
                          "Save More, Gain More",
                          "Flexible Learning Access",
                          "Career-Ready Curriculum"
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                              <CheckCircle className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-blue-100">{item}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div className="lg:w-1/2 flex justify-center">
                      <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                         <h4 className="text-2xl font-black text-orange-400 mb-4">Start Saving Today</h4>
                         <p className="text-blue-100 mb-8 font-medium">Join 250,000+ professionals who accelerated their career with our certification paths.</p>
                         <button className="w-full bg-white text-blue-900 font-black py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center gap-2">
                           View All Combos <ArrowRight className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-500 font-medium">Clear your doubts about our bundle offers</p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all shadow-sm">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between group"
                  >
                    <span className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors">{faq.question}</span>
                    <div className={`transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}>
                      <ChevronDown className="w-6 h-6 text-slate-400" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8 text-slate-600 font-medium leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BOTTOM CTA --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-gradient-to-r from-orange-200 to-yellow-100 rounded-[3rem] p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
              <div className="lg:w-2/3 relative z-10 text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                  Have more questions or require individualized guidance?
                </h2>
                <button className="bg-slate-900 hover:bg-slate-800 text-white font-black px-10 py-4 rounded-xl flex items-center gap-2 mx-auto lg:mx-0 transition-all shadow-lg active:scale-95">
                  Request for Query? <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
              <div className="lg:w-1/3 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop" 
                  alt="Discussion" 
                  className="w-full rounded-2xl shadow-xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/30 rounded-full blur-3xl" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ComboCoursesPage;
