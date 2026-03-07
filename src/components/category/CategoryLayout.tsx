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
import { CategoryData } from "@/data/categoryData";
import { Award, BadgeCheck } from "lucide-react";

interface CategoryLayoutProps {
  data: CategoryData;
}
function CategorySidebar() {
  const items = [
    "Career Path",
    "Schedules",
    "Trainers",
    "Corporate",
    "FAQs",
    "Reviews",
    "Practice Test",
    "Blogs",
  ];

  return (
    <div className="sticky top-[40px] w-[270px] z-[3] transition-all duration-500">
      <div className="bg-white rounded-2xl py-4 shadow-md border border-[#718aa5] ">
        <div className="flex flex-col">
          {items.map((item, i) => (
            <a
              key={item}
              className={`px-3 py-2 text-sm font-semibold whitespace-nowrap cursor-pointer border-l-2 ${i === 0
                ? "border-[#34495f] text-[#01203d]"
                : "border-transparent text-[#718aa5] hover:border-[#01203d]"
                }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-3 mt-2">
          <button className="bg-[#fa4a23] text-white font-bold text-sm py-2 rounded">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactAdvisor() {
  return (
    <section
      id="category_contact"
      className="w-full my-4"
    >
      <div className="bg-[#07447d] rounded-xl px-4 py-6 text-white relative">
        <div className="flex flex-col lg:flex-row items-center justify-around text-center gap-4">

          <div className="hidden lg:block ">
            <img
              src="https://www.simpliaxis.com/frontend_assets/image/corpo2.webp"
              className="absolute bottom-0"
              width="150"
              height="120"
              alt="background"
            />
            <img
              src="https://www.simpliaxis.com/frontend_assets/image/corpo1.webp"
              className="relative top-6 align-middle"
              width="120"
              height="120"
              alt="advisor"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-white font-semibold">
              Talk to Our expertise Learning advisor today
            </p>
            <p className="hidden lg:block text-sm">
              and Earn your SAFe Management success. Call Now!
            </p>
          </div>

          <button
            className="bg-white text-black font-bold px-4 py-2 rounded flex items-center gap-2"
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
    <div className="w-full  rounded-xl">

      <h2 className="px-4 py-3 bg-[#f7f8fa] rounded-xl text-[calc(1.325rem+.9vw)]">
        Top SAFe Certification Courses Overview
      </h2>

      <div className="px-4 py-3 bg-[#f7f8fa] rounded-xl mt-2">

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
          className="mt-3 font-bold text-blue-600"
        >
          {expanded ? "View less..." : "View more..."}
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
        "https://www.simpliaxis.com/storage/images/trainer_module_trainer_module_Aakash_CST_1636618351_1763109653.webp",
      certifications: "Certified Scrum Master (CSM®), Certified Scrum Product Owner (CSPO®)",
      description:
        "Aakash Srinivasan is an experienced Agile transformation leader and co-founder of SimpliAxis Inc.",
      experience: "15+ Years",
    },
    {
      name: "Michel Goldenberg, CST",
      image:
        "https://www.simpliaxis.com/storage/images/trainer_module_trainer_module_1573740473939_1623738195_1763109987.webp",
      certifications:
        "Certified Scrum Master (CSM®), ACSM®, CSPO®, ACSPO®, CSD®, ACSD®",
      description:
        "Michel started working with Agile in 2001 and has coached teams globally.",
      experience: "21+ Years",
    },
    {
      name: "Raj Kasturi, CST",
      image:
        "https://www.simpliaxis.com/storage/images/trainer_module_trainer_module_Raj_CST_1636465024_1761813371.webp",
      certifications: "CSM",
      description:
        "Raj is an experienced Scrum Trainer helping organizations transition to Agile.",
      experience: "28+ Years",
    },

  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8">

      <div className="mb-6">
        <p className="uppercase text-sm font-semibold text-slate-500">
          Our Experienced Training Expert
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-2">
          Meet the Team That's Invested in Your Success
        </h2>

        <div className="flex items-center justify-between mt-4">
          <span className=" text-white flex gap-2 items-center bg-[#34495f] text-xs px-3 py-1 rounded-full font-semibold">
            <Award strokeWidth={1.25} /> Instructors
          </span>

          <a
            href="/trainers"
            className="text-sm font-semibold underline text-blue-900"
          >
            View All Trainers →
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {trainers.map((trainer, index) => (
          <div
            key={index}
            className="bg-white border border-[#718aa5] rounded-2xl p-5 shadow-sm hover:shadow-md transition"
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

            <button className="text-sm text-blue-900 font-semibold underline">
              Read More
            </button>

            <hr className="my-4" />

            {/* Footer */}
            <div className="flex items-center justify-between text-sm text-slate-600">
              <span className="font-semibold">
                Experience: {trainer.experience}
              </span>

              <a
                href="https://www.linkedin.com/company/simpliaxis-inc"
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
    <section className="w-full max-w-5xl mx-auto ">
      <div className="bg-sky-50 rounded-2xl p-6 md:p-8">

        {/* Heading */}
        <p className="uppercase text-sm font-semibold text-slate-500">
          SAFe Certification Course For Corporates
        </p>

        <h2 className="text-2xl font-bold text-slate-900 mt-2 mb-4">
          Why SimpliAxis Is The First Choice For Corporates?
        </h2>

        {/* Description */}
        <p className="text-base text-slate-700 leading-relaxed mb-3">
          Simpliaxis provides In person and live virtual instructor-led corporate training
          program customized for enterprise teams who wish to train their employees on
          specific aspects of their job processes or responsibilities. The corporate training
          by our expert certified trainers will enhance your learning curve and enable your
          teams to utilize their skills to meet the industry standards.
        </p>

        {/* Bullet Points */}
        <ul className="mt-4 space-y-2">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-800">

              {/* Check Icon */}
              <BadgeCheck size={18} />

              {point}
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="mt-6 w-full sm:w-1/2 lg:w-1/3">
          <button className="w-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded">
            Corporate Group enquiry
          </button>
        </div>

      </div>
    </section>
  );
}

function AccordionItem() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="mb-4 rounded bg-white "
      style={{
        boxShadow: "0px 2px 7px -3px #34495f",
        fontFamily: "Open Sans, Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        tabIndex={-1}
        onClick={() => setOpen(!open)}
        className="w-full flex border-b px-2 py-4 items-center justify-between text-left font-semibold text-[1rem]"
      >
        <span className="text-[#34495f] font-semibold">
          1. How long does SAFe® certification training take?
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
          Most SAFe® certifications involve 2-4 days of live interactive
          training, followed by an online exam conducted by Scaled Agile, Inc.
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
        "https://www.simpliaxis.com/storage/images/testimonial_module_jaikumarjadhav_1763386533.jfif",
      text:
        "I’m happy to share that I’ve obtained a new certification: Certified Scrum Product Owner (CSPO)...",
    },
    {
      name: "Komal Wankhede",
      role: "Assistant Vice President",
      company: "Citi",
      image:
        "https://www.simpliaxis.com/storage/images/testimonial_module_komal_1762341028.jfif",
      text:
        "I am delighted to complete my Certified Scrum Master Certification and Training...",
    },
  ];

  return (
    <section className="w-full">
      <div className="px-4 py-4 my-4">

        {/* Title */}
        <p className="text-[#01203d] font-bold text-[1.3rem] mb-4">
          Find out why 1,000+ professionals love SimpliAxis
        </p>

        {/* Tabs */}
        <div className="flex justify-between items-center flex-wrap py-2">

          <div className="flex gap-2 p-2 rounded-lg shadow-sm border">

            <button
              onClick={() => setActiveTab("linkedin")}
              className={`px-3 py-2 rounded text-sm font-semibold ${activeTab === "linkedin"
                ? "bg-[#34495f] text-white"
                : "text-[#34495f]"
                }`}
            >
              LinkedIn
            </button>

            <button
              onClick={() => setActiveTab("trustpilot")}
              className={`px-3 py-2 rounded text-sm font-semibold ${activeTab === "trustpilot"
                ? "bg-[#34495f] text-white"
                : "text-[#34495f]"
                }`}
            >
              Trustpilot
            </button>

          </div>

          <a
            href="/reviews-testimonials"
            className="text-[#34495f] text-sm font-semibold flex items-center"
          >
            <span className="underline">View All Reviews</span>
          </a>

        </div>

        {/* LinkedIn Reviews */}
        {activeTab === "linkedin" && (
          <div className="grid md:grid-cols-2 gap-4 mt-4">

            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 relative"
                style={{ boxShadow: "0px 2px 7px -3px #34495f" }}
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
function FAQSection() {
  return (
    <section className="bg-[#e9eff5] rounded-2xl mb-4">
      <div className="px-4 py-4 w-full">
        <div className="my-2">

          <p className="uppercase text-sm font-semibold text-[#01203d]">
            Agile Courses FAQs
          </p>

          <h2 className="text-2xl font-bold text-[#01203d] my-2 mb-4">
            Frequently Asked Questions
          </h2>

          {/* FAQ Tabs */}
          <div className="flex gap-2 border-2 border-[#34495f] overflow-x-auto w-full p-2  rounded-[8px] bg-white mb-6">

            <button className="text-sm font-semibold bg-[#34495f] rounded px-3 py-2 text-white">
              Category Related
            </button>

            <button className="text-sm font-semibold text-[#34495f] rounded px-3 py-2 bg-gray-100 hover:bg-gray-300">
              Payment Related
            </button>

            <button className="text-sm font-semibold text-[#34495f] rounded px-3 py-2 bg-gray-100 hover:bg-gray-300">
              General Questions
            </button>

          </div>

          <div className="space-y-3">

            <AccordionItem />
            <AccordionItem />
            <AccordionItem />


          </div>

        </div>
      </div>
    </section>
  );
}

function PracticeTestSection() {
  return (
    <section className="px-6 mt-2 rounded-2xl">
      <div className="bg-[#e9eff5] px-4 py-4  rounded-2xl relative">

        <p className="uppercase text-[0.85rem] font-semibold text-[#34495f]">
          UNSURE ABOUT YOUR PREP?
        </p>

        <h2 className="text-[#01203d] font-extrabold text-[1.3rem] mt-2 mb-3">
          Enhance and Elevate Your Skills with SAFe Practice Test
        </h2>

        <div className="flex flex-col md:flex-row gap-8">

          <div className="flex-1">

            <ul className="flex flex-col gap-3 text-[1rem] text-[#01203d] font-semibold list-disc ml-5">
              <li>Immediate Result</li>
              <li>Sample Papers</li>
              <li>Time-Limited</li>
              <li>Comprehensive Explanation</li>
              <li>Previous Exam</li>
            </ul>

          </div>

          <div className="w-[320px] px-2 py-2 bg-white rounded-lg shadow-md ">

            <img
              src="https://www.simpliaxis.com/frontend_assets/image/practicetestbg.webp"
              className="h-[3.25rem] "
              alt="practice"
            />

            <div>

              <span className="bg-[#01203d] text-white relative bottom-[4.5rem] left-[50%] p-2 rounded text-xs">
                SAFe Practice Test
              </span>

              <h3 className="font-bold mt-2 text-[#01203d]">
                SAFe Practice Test
              </h3>

              <div className="flex gap-4 text-sm text-[#34495f] mt-2">
                <span>12 Tests</span>
                <span>570 Questions</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between text-sm text-[#34495f]">
                <span>19 hrs</span>
                <span>Online</span>
              </div>

              <a
                href="https://www.simpliaxis.com/practice-tests"
                className="block mt-3 text-right"
              >
                <button className="px-3 py-1 bg-[#fa4a23] text-white rounded text-sm">
                  Take Test →
                </button>
              </a>

            </div>
          </div>

        </div>
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
        "Complete guide to product manager certification, global salary, eligibility, cost, career path & top options like SAFe POPM ,SAFe APM ,ICP-PDM.",
      img: "https://www.simpliaxis.com/frontend_assets/image/home-blog-img.webp",
      link: "https://www.simpliaxis.com/resources/product-manager-certification-guide",
    },
  ];

  return (
    <section className="w-full mt-6 mb-2 rounded-2xl">
      <div className="bg-[#f7f8fa] px-4 py-4 rounded-2xl">

        <p className="uppercase text-[0.85rem] font-semibold text-[#34495f]">
          LEARNER REVIEWS FROM THE WORLD OVER
        </p>

        {/* title */}
        <h2 className="text-[#01203d] font-extrabold text-[1.3rem] mt-2 mb-4">
          Our Latest Blogs
        </h2>

        {/* blog cards */}
        <div className="grid md:grid-cols-2 gap-4">

          {blogs.map((blog, i) => (
            <div
              key={i}
              className="border rounded-lg bg-white overflow-hidden"
            >
              <img
                src={blog.img}
                className="w-full h-[160px] object-cover"
              />

              <div className="p-3">

                <div className="flex justify-between items-center mb-2">
                  <span className="bg-[#fa4a23] text-white text-sm px-3 py-1 rounded-full font-semibold">
                    {blog.tag}
                  </span>

                  <span className="text-sm text-gray-600">
                    {blog.date}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                <p className="text-[0.85rem] font-semibold text-[#34495f] mb-3">
                  {blog.desc}
                </p>

                <a
                  href={blog.link}
                  className="underline text-gray-900 text-sm"
                >
                  Read More
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
const CategoryLayout: React.FC<CategoryLayoutProps> = ({ data }) => {
  const [showSubNav, setShowSubNav] = useState(false);

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

   

      <main className="pt-16">
        <CategoryHero data={data} />

        <CategoryStats />

        <div className="grid grid-cols-12 gap-16 relative container md:max-w-[1120px] pt-20">
          <div className="col-span-3">
            <CategorySidebar />
          </div>
          <div className="col-span-9">
            <section id="catalog" >

              <CategoryCatalog data={data} />
            </section>

            <section>
              <ContactAdvisor />
            </section>
            <section className="my-2">
              <CategoryOverview content={{ preview: "Scaled Agile Framework has emerged as the most trusted system for aligning teams, improving collaboration, and achieving enterprise-wide agility. Through Simpliaxis’s SAFe® Certification Trainings, professionals gain the skills and confidence to lead Agile transformations and accelerate business success in a structured, globally recognized way.What..." }} />
            </section>

            <section id="trainers">
              <TrainersSection />
            </section>

            <section id="corporate">
              <CorporateTrainingSection />
            </section>

            <section id="faq" className="my-8">
              <FAQSection />
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


          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CategoryLayout;
