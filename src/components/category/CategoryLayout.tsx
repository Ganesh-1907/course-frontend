import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import CategoryHero from "./CategoryHero";
import CategoryStats from "./CategoryStats";
import CategoryCatalog from "./CategoryCatalog";
import CategoryCertification from "./CategoryCertification";
import CategoryFAQ from "./CategoryFAQ";
import CategoryCTA from "./CategoryCTA";
import CategorySubNav from "./CategorySubNav";
import { CategoryData, FAQItem } from "@/data/categoryData";
import { Award, BadgeCheck, ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface CategoryLayoutProps {
  data: CategoryData;
}
const items = [
  { label: "Career Path", id: "catalog" },
  { label: "Trainers", id: "trainers" },
  { label: "Corporate", id: "corporate" },
  { label: "FAQs", id: "faq" },
  { label: "Reviews", id: "reviews" },
  { label: "Practice Test", id: "practice" },
  { label: "Blogs", id: "blogs" },
];

const itemIdSet = new Set(items.map(i => i.id))
function CategorySidebar({ data, isOpen, onClose }: { data: CategoryData; isOpen?: boolean; onClose?: () => void }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && itemIdSet.has(entry.target.id)) {
            console.log(entry.target.id)
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}
      {/* Sidebar */}
      <div className={`fixed lg:sticky top-[40px] w-full sm:w-[270px] lg:w-[270px] z-[25] lg:z-[3] transition-all duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="bg-white rounded-2xl py-4 shadow-md border border-border m-4 lg:m-0">
          <div className="flex flex-col">
            {items.map(({ label, id }, i) => (
              <a
                key={id}
                onClick={onClose}
                className={`px-3 py-2 text-sm font-semibold whitespace-nowrap cursor-pointer border-l-2 ${id === activeSection
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:border-primary/50"
                  }`}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 p-3 mt-2">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold text-sm py-2 rounded w-full transition-colors">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactAdvisor() {
  return (
    <section
      id="category_contact"
      className="w-full my-4 px-4 sm:px-0"
    >
      <div className="bg-slate-900 rounded-2xl px-6 sm:px-8 py-8 text-white relative shadow-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around text-center gap-4">

          <div className="hidden lg:block ">
            <img
              src="https://www.viovn.com/frontend_assets/image/corpo2.webp"
              className="absolute bottom-0"
              width="150"
              height="120"
              alt="background"
            />
            <img
              src="https://www.viovn.com/frontend_assets/image/corpo1.webp"
              className="relative top-6 align-middle"
              width="120"
              height="120"
              alt="advisor"
            />
          </div>

          <div className="flex flex-col max-w-xs lg:max-w-none">
            <p className="text-white font-semibold text-sm sm:text-base">
              Talk to Our expertise Learning advisor today
            </p>
            <p className="hidden lg:block text-sm">
              and Earn your SAFe Management success. Call Now!
            </p>
          </div>

          <button
            className="bg-white text-slate-900 font-bold px-3 sm:px-6 py-2.5 rounded-lg flex items-center gap-2 text-sm sm:text-base whitespace-nowrap hover:bg-slate-50 transition-colors shadow-lg"
          >
            Contact us →
          </button>

        </div>
      </div>
    </section>
  );
}


function CategoryOverview({ content }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-border/50">
      <h2 className="px-6 py-4 bg-secondary/50 text-slate-900 font-black text-lg sm:text-xl md:text-[22px] tracking-tight">
        Top SAFe Certification Courses Overview
      </h2>
      <div className="px-6 py-6 bg-white text-slate-700 text-sm sm:text-base leading-relaxed">

        {!expanded && (
          <div
            dangerouslySetInnerHTML={{
              __html: content.preview,
            }}
          />
        )}

        {/* Full content */}
        {expanded && (
          <div
            dangerouslySetInnerHTML={{
              __html: content.full,
            }}
          />
        )}

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 font-black text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-1 uppercase tracking-widest"
        >
          {expanded ? "View less ↑" : "View more ↓"}
        </button>
      </div>
    </div>
  );
}

function TrainersSection() {
  const trainers = [
    {
      name: "Aakash Srinivasan, CST",
      image:
        "https://www.viovn.com/storage/images/trainer_module_trainer_module_Aakash_CST_1636618351_1763109653.webp",
      certifications: "Certified Scrum Master (CSM®), Certified Scrum Product Owner (CSPO®)",
      description:
        "Aakash Srinivasan is an experienced Agile transformation leader and co-founder of Viovn Inc.",
      experience: "15+ Years",
    },
    {
      name: "Michel Goldenberg, CST",
      image:
        "https://www.viovn.com/storage/images/trainer_module_trainer_module_1573740473939_1623738195_1763109987.webp",
      certifications:
        "Certified Scrum Master (CSM®), ACSM®, CSPO®, ACSPO®, CSD®, ACSD®",
      description:
        "Michel started working with Agile in 2001 and has coached teams globally.",
      experience: "21+ Years",
    },
    {
      name: "Raj Kasturi, CST",
      image:
        "https://www.viovn.com/storage/images/trainer_module_trainer_module_Raj_CST_1636465024_1761813371.webp",
      certifications: "CSM",
      description:
        "Raj is an experienced Scrum Trainer helping organizations transition to Agile.",
      experience: "28+ Years",
    },

  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">

      <div className="mb-8">
        <p className="uppercase text-[10px] font-black text-primary tracking-[0.2em] mb-2 px-1">
          Our Experienced Training Expert
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
          Meet the Team That's Invested in Your Success
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 gap-3">
          <span className="text-white flex gap-2 items-center bg-slate-900 text-[10px] px-4 py-1.5 rounded-full font-black uppercase tracking-widest">
            <Award size={14} strokeWidth={2.5} /> Instructors
          </span>

          <a
            href="/trainers"
            className="text-xs sm:text-sm font-black text-primary hover:underline flex items-center gap-1"
          >
            View All Trainers <ArrowRight size={14} />
          </a>
        </div>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white border border-border/60 hover:border-primary/30 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-14 h-14 rounded-full  object-cover"
              />

              <div>
                <h3 className="font-semibold text-slate-800 text-sm">
                  {trainer.name}
                </h3>

                <p className="text-xs text-slate-500 line-clamp-2">
                  {trainer.certifications}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-600 mb-2 line-clamp-3">
              {trainer.description}
            </p>

            <button className="text-xs text-primary font-black uppercase tracking-widest hover:gap-2 transition-all flex items-center gap-1">
              Read Profile <ArrowRight size={12} />
            </button>

            <hr className="my-4" />

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span className="font-semibold">
                Experience: {trainer.experience}
              </span>

              <a
                href="https://www.linkedin.com/company/viovn-inc"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 fill-[#0077b5]"
                  viewBox="0 0 448 512"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CorporateTrainingSection() {
  const points = [
    "The tool-based learning, guiding, tracking, and grading.",
    "Customized curriculum as per the team's and company's needs.",
    "A pool of consultants catering to the work experience across industries.",
    "Flexibility in learning- Online, Offline, and Self paced learning.",
    "The global presence and can train the teams across the geographies."
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-0 my-12">
      <div className="bg-accent/40 rounded-[3rem] p-8 sm:p-10 md:p-12 border border-primary/10">
        <p className="uppercase text-[10px] font-black text-primary tracking-[0.2em] mb-2 px-1">
          SAFe Certification Course For Corporates
        </p>

        <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mt-2 mb-6">
          Why Viovn Is The First Choice For Corporates?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-3">
          Viovn provides In person and live virtual instructor-led corporate training
          program customized for enterprise teams who wish to train their employees on
          specific aspects of their job processes or responsibilities. The corporate training
          by our expert certified trainers will enhance your learning curve and enable your
          teams to utilize their skills to meet the industry standards.
        </p>

        {/* Bullet Points */}
        <ul className="mt-4 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">

              {/* Check Icon */}
              <BadgeCheck size={18} className="flex-shrink-0 mt-0.5" />

              {point}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-primary hover:bg-primary/90 text-white text-xs font-black uppercase tracking-[0.2em] py-4 px-8 rounded-2xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95">
            Corporate Group enquiry
          </button>
        </div>

      </div>
    </section>
  );
}

function AccordionItem({ faq, index }: { faq: FAQItem, index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-4 rounded-2xl bg-white border border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Header */}
      <div
        tabIndex={-1}
        onClick={() => setOpen(!open)}
        className="w-full flex border-b px-2 py-4 items-center justify-between text-left font-semibold text-[1rem]"
      >
        <span className="text-slate-900 font-bold group-hover:text-primary transition-colors">
          {index + 1}. {faq.question}
        </span>

        {/* Arrow */}
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>

      {/* Body */}
      <div
        className={`overflow-hidden  transition-all duration-200 ${open ? "max-h-40" : "max-h-0"
          }`}
      >
        <div className="text-[#34495f] text-[1rem] py-2 px-3 pb-4">
          {faq.answer}
        </div>
      </div>
    </div>
  );
}
function CourseReviews() {
  const [activeTab, setActiveTab] = useState("linkedin");

  const reviews = [
    {
      name: "Jai Kumar Jadhav",
      image:
        "https://www.viovn.com/storage/images/testimonial_module_jaikumarjadhav_1763386533.jfif",
      text:
        "I’m happy to share that I’ve obtained a new certification: Certified Scrum Product Owner (CSPO)...",
    },
    {
      name: "Komal Wankhede",
      role: "Assistant Vice President",
      company: "Citi",
      image:
        "https://www.viovn.com/storage/images/testimonial_module_komal_1762341028.jfif",
      text:
        "I am delighted to complete my Certified Scrum Master Certification and Training...",
    },
  ];

  return (
    <section className="w-full px-4 sm:px-0">
      <div className="px-0 sm:px-4 py-4 my-4">

        {/* Title */}
        <p className="text-slate-900 font-black text-xl md:text-2xl tracking-tight mb-4">
          Find out why 1,000+ professionals love Viovn
        </p>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-2">

          <div className="flex gap-2 p-2 rounded-lg shadow-sm border">

            <button
              onClick={() => setActiveTab("linkedin")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black uppercase tracking-widest transition-all ${activeTab === "linkedin"
                ? "bg-slate-900 text-white shadow-lg"
                : "text-slate-500 hover:text-slate-900"
                }`}
            >
              LinkedIn
            </button>

            <button
              onClick={() => setActiveTab("trustpilot")}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-black uppercase tracking-widest transition-all ${activeTab === "trustpilot"
                ? "bg-slate-900 text-white shadow-lg"
                : "text-slate-500 hover:text-slate-900"
                }`}
            >
              Trustpilot
            </button>

          </div>

          <a
            href="/reviews-testimonials"
            className="text-[#34495f] text-xs sm:text-sm font-semibold flex items-center"
          >
            <span className="underline">View All Reviews</span>
          </a>

        </div>

        {/* LinkedIn Reviews */}
        {activeTab === "linkedin" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">

            {reviews.map((review, i) => (
              <div
                key={i}
                 className="bg-white rounded-[2rem] border border-border/60 p-10 relative shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                {/* Quote icon */}
                <div className="absolute top-2 left-3 text-2xl text-gray-400">
                  ❝
                </div>

                {/* Text */}
                <p className="text-[#34495f] text-[1rem] mb-3">
                  {review.text}
                </p>

                <button className="text-[#34495f] underline text-sm">
                  Read More
                </button>

                <hr className="my-4" />

                {/* Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.image}
                    className="w-[60px] h-[60px] rounded-full"
                  />

                  <div>
                    <p className="font-semibold text-[#01203d]">
                      {review.name}
                    </p>

                    {review.role && (
                      <p className="text-sm text-[#34495f]">
                        {review.role}
                      </p>
                    )}

                    {review.company && (
                      <p className="text-sm text-[#34495f]">
                        {review.company}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Trustpilot */}
        {activeTab === "trustpilot" && (
          <div className="mt-4">
            <iframe
              src="https://widget.trustpilot.com/trustboxes/54ad5defc6454f065c28af8b/index.html"
              className="w-full h-[240px]"
            />
          </div>
        )}
      </div>
    </section>
  );
}
function FAQSection({ data }: { data: CategoryData }) {
  return (
    <section className="bg-secondary/30 border border-border/50 rounded-[3rem] mb-8 overflow-hidden">
      <div className="px-8 py-10 w-full">
        <div className="my-2">
          <p className="uppercase text-[10px] font-black text-primary tracking-[0.2em] mb-2 px-1">
            {data.breadcrumbName} Courses FAQs
          </p>

          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight my-2 mb-8">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-wrap gap-3 p-2 rounded-2xl bg-white/50 backdrop-blur-sm mb-8 border border-border/50">
            <button className="text-[10px] font-black uppercase tracking-widest bg-slate-900 rounded-xl px-5 py-3 text-white shadow-lg">
              Category Related
            </button>

            <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 rounded-xl px-5 py-3 hover:bg-white transition-all">
              Payment Related
            </button>

            <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-slate-900 rounded-xl px-5 py-3 hover:bg-white transition-all">
              General Questions
            </button>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <AccordionItem key={index} faq={faq} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeTestSection() {
  return (
    <section className="px-0 mt-8 mb-12">
      <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="uppercase text-[10px] font-black text-primary tracking-[0.2em] mb-4">
              UNSURE ABOUT YOUR PREP?
            </p>

            <h2 className="text-white font-black text-2xl md:text-3xl tracking-tight mb-8">
              Enhance and Elevate Your Skills with SAFe Practice Test
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Immediate Result', 'Sample Papers', 'Time-Limited', 'Comprehensive Explanation', 'Previous Exam'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 font-bold text-sm">
                  <BadgeCheck size={18} className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-[320px] bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 shadow-2xl">
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src="https://www.viovn.com/frontend_assets/image/practicetestbg.webp"
                className="w-full h-full object-cover"
                alt="practice"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg border border-white/10">
                  SAFe Practice Test
                </span>
              </div>
            </div>

            <div className="px-2">
              <h3 className="font-black text-white text-lg mb-4">
                Expert Practice Hub
              </h3>

              <div className="flex items-center justify-between text-[11px] font-bold text-white/60 mb-6 uppercase tracking-widest">
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                  12 Tests
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/5">
                  570 Questions
                </span>
              </div>

              <a
                href="https://www.viovn.com/practice-tests"
                className="block"
              >
                <button className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-95">
                  Take Test Now →
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}



function LatestBlogs() {
  const blogs = [
    {
      tag: "SAFe",
      date: "March 2026",
      title:
        "Product Manager Certification Guide Salary, Cost & Career Path",
      desc:
        "Complete guide to product manager certification, global salary, eligibility, cost, career path & top options like SAFe POPM, SAFe APM, ICP-PDM.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=450&fit=crop",
      link: "https://www.viovn.com/resources/product-manager-certification-guide",
    },
    {
      tag: "Agile",
      date: "March 2026",
      title: "Mastering Agile Transformations in 2026",
      desc: "Key insights into scaling agile practices across enterprise teams for maximum efficiency and velocity.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
      link: "#",
    }
  ];

  return (
    <section className="w-full mt-12 mb-8 px-4 sm:px-0">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="uppercase text-xs font-black text-primary tracking-[0.2em] mb-2 px-1">
            Our Knowledge Hub
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Latest from Our Blog
          </h2>
        </div>
        <button className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all">
          View All Blogs <ArrowRight size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                <span className="bg-white/95 backdrop-blur-md text-primary text-[10px] font-black px-3 py-1.5 rounded-full shadow-sm w-fit">
                  {blog.tag}
                </span>
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-primary/20 w-fit">
                  20% OFF
                </span>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="flex items-center gap-3 mb-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                <Clock size={14} className="text-primary" />
                {blog.date}
              </div>
              <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors mb-3 line-clamp-2 leading-snug">
                {blog.title}
              </h3>
              <p className="text-slate-600 text-[14px] leading-relaxed mb-4 line-clamp-2 font-medium">
                {blog.desc}
              </p>
              <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                Read Story <ArrowRight size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
function RelatedCourses() {
  const courses = [
    {
      title: "Generative AI For Business Leaders",
      url: "https://www.viovn.com/generative-ai-for-business-leaders",
    },
    {
      title: "Generative AI For Business Analysts and IT Consultants",
      url: "https://www.viovn.com/generative-ai-for-business-analysts-and-it-consultants",
    },
    {
      title: "Cloud Fundamentals For Business Managers and Product Managers",
      url: "https://www.viovn.com/cloud-fundamentals-for-business-managers-product-managers",
    },
    {
      title: "Generative AI Architect Advanced Program",
      url: "https://www.viovn.com/generative-ai-architect-advanced-program",
    },
    {
      title: "Multi Cloud Finops AWS GCP Azure",
      url: "https://www.viovn.com/multi-cloud-finops-aws-gcp-azure",
    },
    {
      title: "Introduction To Generative AI",
      url: "https://www.viovn.com/introduction-to-generative-ai",
    },
    {
      title: "Generative AI For Agile Leaders",
      url: "https://www.viovn.com/generative-ai-for-agile-leaders-training",
    },
    {
      title: "Mastering Generative AI Tools Online",
      url: "https://www.viovn.com/mastering-generative-ai-tools-online",
    },
    {
      title: "Generative AI For Product Owners Managers",
      url: "https://www.viovn.com/generative-ai-for-product-owners-managers-training",
    },
    {
      title: "Prompt Engineering",
      url: "https://www.viovn.com/prompt-engineering-course",
    },
    {
      title: "Generative AI For Project Managers",
      url: "https://www.viovn.com/generative-ai-for-project-managers-training",
    },
    {
      title: "Generative AI For Software Developers",
      url: "https://www.viovn.com/generative-ai-for-software-developers",
    },
    {
      title: "Generative AI in HR",
      url: "https://www.viovn.com/generative-ai-hr-certification-course",
    },
    {
      title: "Generative AI For Scrum Masters",
      url: "https://www.viovn.com/generative-ai-for-scrum-masters-training",
    },
    {
      title: "AI-Native Change Agent",
      url: "https://www.viovn.com/ai-native-change-agent-certification-training",
    },
    {
      title: "AI-Native Foundations Agent",
      url: "https://www.viovn.com/ai-native-foundations-certification-training",
    },
  ];

  return (
    <section className=" bg-white relative">
      <div className="px-4 pb-3 relative">
        <div className="pt-3">
          <h3 className="text-slate-900 font-extrabold text-[1.3rem] mb-3">
            Browse Related Courses
          </h3>

          <div className="flex flex-wrap gap-2 pt-2">
            {courses.map((course, index) => (
              <a
                key={index}
                href={course.url}
                className="bg-secondary/50 hover:bg-primary/10 hover:text-primary text-slate-700 text-[0.85rem] px-3 py-2 rounded-lg font-medium transition-colors border border-border/50"
              >
                {course.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const CategoryLayout: React.FC<CategoryLayoutProps> = ({ data }) => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSubNav(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '"Open Sans", Arial, sans-serif' }}>
      <Header hidden={showSubNav} />

      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-20 right-4 z-30 bg-[#34495f] text-white p-2 rounded-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {sidebarOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <main className="pt-16">
        <CategoryHero data={data} />

        <section className="-mt-16 z-20 hidden md:block">
          <CategoryStats data={data} />
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 lg:gap-16 relative container pt-8 md:pt-20">
          <div className="lg:col-span-3">
            <CategorySidebar data={data} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
          <div className="lg:col-span-9">
            <section id="catalog" >

              <CategoryCatalog data={data} />
            </section>

            <section>
              <ContactAdvisor />
            </section>
            <section className="my-2">
              <CategoryOverview content={{ preview: "Scaled Agile Framework has emerged as the most trusted system for aligning teams, improving collaboration, and achieving enterprise-wide agility. Through Viovn’s SAFe® Certification Trainings, professionals gain the skills and confidence to lead Agile transformations and accelerate business success in a structured, globally recognized way.What..." }} />
            </section>

            <section id="trainers">
              <TrainersSection />
            </section>

            <section id="corporate">
              <CorporateTrainingSection />
            </section>

            <section id="faq" className="my-8">
              <FAQSection data={data} />
            </section>

            <section id="reviews">
              <CourseReviews />
            </section>

            <section id="practice">
              <PracticeTestSection />
            </section>
            <section id="blogs">
              <LatestBlogs />
            </section>

            <section id="related-course">
              
<RelatedCourses/>
            </section>


          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryLayout;
