import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Briefcase, DollarSign, ArrowRight, Search, Filter, Clock, Users } from "lucide-react";

const jobRoles = ["All Roles", "Trainer", "Content Developer", "Sales Manager", "Marketing Specialist", "Customer Success", "Tech Lead", "Operations"];
const locations = ["All Locations", "Remote", "Bangalore", "Delhi", "Mumbai", "Hyderabad", "Dubai", "Singapore"];

const jobs = [
  {
    id: 1,
    title: "Senior Agile Trainer",
    department: "Training & Development",
    location: "Remote",
    type: "Full-time",
    salary: "₹15L - ₹25L",
    posted: "2 days ago",
    openings: 3,
    role: "Trainer",
    tags: ["Agile", "CSM", "SAFe"],
  },
  {
    id: 2,
    title: "Content Developer - Project Management",
    department: "Content",
    location: "Bangalore",
    type: "Full-time",
    salary: "₹8L - ₹14L",
    posted: "5 days ago",
    openings: 2,
    role: "Content Developer",
    tags: ["PMP", "PRINCE2", "Content Writing"],
  },
  {
    id: 3,
    title: "Enterprise Sales Manager",
    department: "Sales",
    location: "Mumbai",
    type: "Full-time",
    salary: "₹18L - ₹30L",
    posted: "1 week ago",
    openings: 1,
    role: "Sales Manager",
    tags: ["B2B Sales", "EdTech", "Enterprise"],
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "₹7L - ₹12L",
    posted: "3 days ago",
    openings: 2,
    role: "Marketing Specialist",
    tags: ["SEO", "SEM", "Social Media"],
  },
  {
    id: 5,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Hyderabad",
    type: "Full-time",
    salary: "₹10L - ₹16L",
    posted: "1 week ago",
    openings: 4,
    role: "Customer Success",
    tags: ["Account Management", "EdTech", "CRM"],
  },
  {
    id: 6,
    title: "Cloud Trainer - AWS & Azure",
    department: "Training & Development",
    location: "Singapore",
    type: "Contract",
    salary: "SGD 8,000 - 12,000",
    posted: "4 days ago",
    openings: 1,
    role: "Trainer",
    tags: ["AWS", "Azure", "Cloud"],
  },
  {
    id: 7,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "₹12L - ₹20L",
    posted: "6 days ago",
    openings: 2,
    role: "Tech Lead",
    tags: ["React", "TypeScript", "TailwindCSS"],
  },
  {
    id: 8,
    title: "DevOps Trainer",
    department: "Training & Development",
    location: "Dubai",
    type: "Contract",
    salary: "AED 12,000 - 18,000",
    posted: "2 days ago",
    openings: 1,
    role: "Trainer",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
];

const typeColors: Record<string, string> = {
  "Full-time": "bg-green-100 text-green-700",
  "Contract": "bg-blue-100 text-blue-700",
  "Part-time": "bg-purple-100 text-purple-700",
};

const CareersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = jobs.filter(job => {
    const matchesRole = selectedRole === "All Roles" || job.role === selectedRole;
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRole && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                  <Briefcase className="w-4 h-4" /> We're Hiring!
                </div>
                <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                  Your Talent,{" "}
                  <span className="text-yellow-200">Our Mission</span>
                </h1>
                <p className="text-xl text-orange-50 mb-8 font-medium leading-relaxed">
                  Join our global team of educators, innovators, and professionals. Help shape the future of professional learning.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-200">250+</div>
                    <div className="text-orange-100 text-sm font-medium">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-200">11+</div>
                    <div className="text-orange-100 text-sm font-medium">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-200">100%</div>
                    <div className="text-orange-100 text-sm font-medium">Remote Friendly</div>
                  </div>
                </div>
                <button className="bg-white text-orange-600 hover:bg-orange-50 font-black px-8 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-lg active:scale-95">
                  See Career Paths <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=450&fit=crop"
                  alt="Careers"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Job Board */}
        <section className="py-16 px-4 bg-slate-50">
          <div className="container mx-auto max-w-6xl">
            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 mb-8 flex flex-wrap gap-4 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search job title or department..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-sm font-medium focus:outline-none border border-slate-200 rounded-xl focus:border-orange-400 transition-all"
                />
              </div>
              <div className="text-sm font-bold text-slate-500">{filtered.length} positions found</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-slate-100 p-6 sticky top-24">
                  <div className="flex items-center gap-2 mb-5">
                    <Filter className="w-4 h-4 text-orange-500" />
                    <h3 className="font-black text-slate-900">All Filters</h3>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Job Role</h4>
                    <div className="space-y-1">
                      {jobRoles.map((role, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedRole(role)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                            selectedRole === role
                              ? "bg-orange-50 text-orange-600 border border-orange-200"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {role}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Location</h4>
                    <div className="space-y-1">
                      {locations.map((loc, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedLocation(loc)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                            selectedLocation === loc
                              ? "bg-orange-50 text-orange-600 border border-orange-200"
                              : "text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Listings */}
              <div className="lg:col-span-3">
                {filtered.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                    <Briefcase className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                    <h3 className="font-black text-slate-400">No positions found</h3>
                    <p className="text-sm text-slate-300 mt-1">Try adjusting your filters</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filtered.map((job, i) => (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-lg hover:border-orange-200 transition-all group"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className="font-black text-slate-900 text-lg group-hover:text-orange-500 transition-colors">
                                {job.title}
                              </h3>
                              <span className={`text-[11px] font-black px-2.5 py-1 rounded-full ${typeColors[job.type] || "bg-slate-100 text-slate-600"}`}>
                                {job.type}
                              </span>
                            </div>
                            <div className="text-sm text-slate-500 font-medium mb-4">{job.department}</div>
                            <div className="flex flex-wrap gap-4 mb-4">
                              <span className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                                <MapPin className="w-4 h-4 text-orange-400" /> {job.location}
                              </span>
                              <span className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                                <DollarSign className="w-4 h-4 text-green-400" /> {job.salary}
                              </span>
                              <span className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                                <Users className="w-4 h-4 text-blue-400" /> {job.openings} opening{job.openings > 1 ? "s" : ""}
                              </span>
                              <span className="flex items-center gap-1.5 text-sm text-slate-400 font-medium">
                                <Clock className="w-4 h-4" /> {job.posted}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {job.tags.map((tag, j) => (
                                <span key={j} className="bg-slate-100 text-slate-600 text-xs font-bold px-2.5 py-1 rounded-full">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <button className="bg-orange-500 hover:bg-orange-600 text-white font-black px-6 py-3 rounded-xl transition-all flex items-center gap-2 flex-shrink-0 text-sm">
                            Apply Now <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CareersPage;
