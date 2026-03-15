import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  Users, 
  Globe, 
  Star, 
  Play, 
  Download, 
  PhoneCall, 
  ChevronRight,
  TrendingUp,
  UserCheck,
  Award,
  Lightbulb,
  ArrowRight,
  X
} from "lucide-react";

// --- Types ---
interface TrainingSolution {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

// --- Data ---
const trainingSolutions: TrainingSolution[] = [
  {
    title: "Fundamental Training Programs",
    desc: "Learn essential skills needed for various tasks and roles. We focus on fundamental knowledge to build a strong understanding from the ground up.",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Advanced Training Programs",
    desc: "Take your skills to the next level with our advanced training programs. These courses explore specific subjects more deeply and provide comprehensive learning experiences.",
    icon: <Award className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "Customized Workshops",
    desc: "We tailor hands-on Agile workshops to tackle your organization's hurdles and pave the way for success. Our workshops are designed to meet your specific needs.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600"
  }
];

const CorporateTrainingPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* --- HERO SECTION --- */}
        <section className="bg-[#f8fafc] py-16 lg:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt="User" 
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-slate-600 font-bold text-sm">144,000+ Enrolled</span>
                </div>

                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-6 leading-tight">
                  Drive Success and Capability Through <span className="text-orange-600 italic">Team Skill Enhancement</span>
                </h1>
                
                <p className="text-xl text-slate-600 mb-8 font-medium">
                  Upskill Your Team with Agile, Project Management, and Scaled Agile Framework. Choose Viovn for customized corporate training.
                </p>

                <ul className="space-y-4 mb-10">
                  {[
                    "Update your team with trending skills through interactive learning.",
                    "Get Success with Expert Scaled Agile Training",
                    "Get your team trained by globally certified professionals after training"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-black px-8 py-4 rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2"
                  >
                    Free Consultation <ChevronRight className="w-5 h-5" />
                  </button>
                  <button className="border-2 border-slate-900 text-slate-900 font-black px-8 py-4 rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                    <Download className="w-5 h-5" /> Download Brochure
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1522071823991-b19c06511a47?w=800&h=500&fit=crop" 
                    alt="Corporate Training" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                      <Play className="w-8 h-8 text-orange-600 fill-current ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-slate-900">260k+</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Learners Trained</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- STATS BAR --- */}
        <section className="bg-gradient-to-r from-[#5c55d2] to-[#7b68ee] py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Curated Courses", val: "100+", icon: <Globe className="w-6 h-6" /> },
                { label: "Students Enrolled", val: "150K+", icon: <Users className="w-6 h-6" /> },
                { label: "Countries", val: "50+", icon: <Star className="w-6 h-6" /> },
                { label: "Ratings", val: "4.9+", icon: <Star className="w-6 h-6" /> }
              ].map((stat, i) => (
                <div key={i} className="text-white space-y-2">
                  <div className="text-3xl lg:text-4xl font-black">{stat.val}</div>
                  <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BENEFITS & SIDEBAR SECTION --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Sidebar */}
              <aside className="lg:w-1/4">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-100">
                    <nav className="space-y-2">
                      {["Benefits", "Schedules", "Advantages", "Corporate Training", "Reviews"].map((link) => (
                        <a 
                          key={link}
                          href={`#${link.toLowerCase().replace(" ", "-")}`} 
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-white hover:shadow-sm text-slate-600 font-bold text-sm transition-all group"
                        >
                          {link} <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-orange-600 transition-colors" />
                        </a>
                      ))}
                    </nav>
                  </div>

                  <div className="bg-orange-600 rounded-2xl p-6 text-white shadow-xl">
                    <h4 className="text-xl font-black mb-4">Ready to Upskill?</h4>
                    <p className="text-sm text-white/80 mb-6 font-medium">Get a customized training plan for your organization today.</p>
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="w-full bg-white text-orange-600 font-black py-3 rounded-xl hover:bg-orange-50 transition-colors mb-3"
                    >
                      Free Consultation
                    </button>
                    <button className="w-full bg-orange-700 text-white font-black py-3 rounded-xl hover:bg-orange-800 transition-colors flex items-center justify-center gap-2">
                      <Download className="w-4 h-4" /> Download Brochure
                    </button>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                    <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <div className="text-sm font-black text-slate-900">4.9/5 Average Rating</div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">From 2800+ Corporate Reviews</div>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:w-3/4 space-y-24">
                {/* Training Solutions */}
                <div id="benefits">
                  <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Benefits of Corporate Training</h2>
                  <p className="text-lg text-slate-600 mb-12 font-medium max-w-3xl">
                    Are you looking to train your employees in subjects like Project Management, DevOps, Agile, Data Science? 
                    Viovn offers customized, easy-to-understand programs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {trainingSolutions.map((solution, i) => (
                      <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-2xl transition-all group hover:-translate-y-2 duration-300">
                        <div className={`w-16 h-16 ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                          {solution.icon}
                        </div>
                        <h4 className="text-xl font-black text-slate-900 mb-4">{solution.title}</h4>
                        <p className="text-slate-500 font-medium leading-relaxed mb-6">{solution.desc}</p>
                        <button className="text-orange-600 font-black text-sm flex items-center gap-2 group/btn">
                          Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clients Section */}
                <div className="bg-[#f8fafc] rounded-[3rem] p-12 lg:p-16">
                  <div className="text-center mb-12">
                     <h2 className="text-2xl font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Take a Look at Our Clients</h2>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                    {["BOSCH", "Capgemini", "KPMG", "HEXAWARE", "Deloitte", "Thomson Reuters", "WELLS FARGO"].map((client) => (
                      <span key={client} className="text-2xl lg:text-3xl font-black text-slate-300">{client}</span>
                    ))}
                  </div>
                </div>

                {/* Featured Courses Tabs */}
                <div>
                   <div className="text-center mb-12">
                      <span className="text-orange-600 font-black text-sm uppercase tracking-widest\">Explore Our Professional Agile Certification Courses</span>
                      <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight">Certification For Build Your Future</h2>
                   </div>
                   
                   <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-slate-100 pb-8">
                     {["All Courses", "AGILE", "SAFe", "PROJECT", "BUSINESS", "DEVOPS"].map((tab, i) => (
                       <button 
                        key={i}
                        className={`px-6 py-2 rounded-full font-black text-sm transition-all ${i === 0 ? "bg-orange-600 text-white shadow-lg" : "text-slate-500 hover:text-slate-900"}`}
                       >
                         {tab}
                       </button>
                     ))}
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all">
                           <div className="h-48 overflow-hidden relative">
                              <img src={`https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&q=80&img=${i}`} alt="Course" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-slate-900 uppercase">Interactive Training</div>
                           </div>
                           <div className="p-6">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="flex text-yellow-400"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                                <span className="text-xs text-slate-400 font-bold">(4.9/5)</span>
                              </div>
                              <h4 className="font-black text-slate-900 mb-4 line-clamp-2">PMP Certification Training and Exam Prep Course</h4>
                              <div className="flex items-center justify-between">
                                 <span className="text-orange-600 font-black">₹ 12,999</span>
                                 <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all">
                                    <ArrowRight className="w-4 h-4" />
                                 </button>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- WHY VIOVN --- */}
        <section className="py-20 bg-[#f8fafc]">
          <div className="container mx-auto px-4 max-w-7xl">
             <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">How Corporate Training Helps Industry</h2>
                <p className="text-slate-500 font-medium">Empower your team and transform your organization</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { title: "Productivity", val: "Increase in production with higher efficiency and fewer errors." },
                  { title: "Employee Retention", val: "Improve job satisfaction and loyalty through career development." },
                  { title: "Employer Brand", val: "Attract top talent by demonstrating commitment to growth." },
                  { title: "Innovation", val: "Foster a culture of creativity and modern problem-solving." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-all">
                     <h4 className="text-xl font-black text-slate-900 mb-4 text-orange-600">{item.title}</h4>
                     <p className="text-slate-600 text-sm font-bold leading-relaxed">{item.val}</p>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* --- BOTTOM CTA --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]" />
               <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]" />
               
               <div className="max-w-2xl relative z-10 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-5xl font-black mb-6 leading-tight">Empower your workforce with Viovn's Expert Training</h2>
                  <p className="text-xl text-slate-400 mb-8 font-medium">Join 500+ global enterprises that trust us for their team skill development.</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="bg-orange-600 hover:bg-orange-700 text-white font-black px-10 py-4 rounded-xl shadow-lg transition-all flex items-center gap-2"
                    >
                      Contact Us <ChevronRight className="w-5 h-5" />
                    </button>
                    <a href="tel:+919036554933" className="border-2 border-white/20 text-white font-black px-10 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
                       <PhoneCall className="w-5 h-5" /> Request a Call Back
                    </a>
                  </div>
               </div>
               
               <div className="lg:w-1/3 relative z-10 hidden lg:block">
                  <div className="grid grid-cols-2 gap-4">
                     {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${i % 2 !== 0 ? "mt-8" : ""}`}>
                           <UserCheck className="w-8 h-8 text-orange-500" />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* --- ENQUIRY MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2rem] shadow-2xl w-full max-w-4xl overflow-hidden relative z-10 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 bg-gradient-to-br from-[#1a2b4b] to-[#1a2b4b] p-12 text-white relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black mb-6">Let's Build Your Team's Success</h3>
                  <p className="text-blue-200 mb-8 font-medium">Fill out the form and our learning advisor will get back to you within 24 hours.</p>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><PhoneCall className="w-5 h-5" /></div>
                      <span className="font-bold">+91 90365 54933</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center"><Globe className="w-5 h-5" /></div>
                      <span className="font-bold">hello@viovn.com</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-600/20 to-transparent pointer-events-none" />
              </div>

              <div className="md:w-3/5 p-12 bg-white relative">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>

                <h4 className="text-2xl font-black text-slate-900 mb-8">Fill the Required Details</h4>
                
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name*" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-orange-600 focus:bg-white transition-all font-medium" />
                  <input type="email" placeholder="Email*" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-orange-600 focus:bg-white transition-all font-medium" />
                  <div className="flex gap-4">
                     <select className="px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none font-medium w-1/3">
                        <option>India (+91)</option>
                     </select>
                     <input type="text" placeholder="Phone Number*" className="flex-1 px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-orange-600 focus:bg-white transition-all font-medium" />
                  </div>
                  <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-orange-600 focus:bg-white transition-all font-medium appearance-none">
                    <option>Select Course</option>
                    <option>PMP Certification</option>
                    <option>SAFe 6.0 Agilist</option>
                    <option>DevOps Foundation</option>
                  </select>
                  <textarea placeholder="Message" className="w-full px-6 py-4 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-orange-600 focus:bg-white transition-all font-medium h-32 resize-none"></textarea>
                  
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-black py-4 rounded-xl shadow-lg transition-all active:scale-[0.98] mt-4">
                    Send Inquiry
                  </button>
                  <p className="text-[10px] text-slate-400 text-center font-medium mt-4">
                    By providing your contact details you agreed to our Privacy Policy & Terms and Conditions.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CorporateTrainingPage;
