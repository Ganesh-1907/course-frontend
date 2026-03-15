import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ELearningHero from "@/components/E-learning-courses/ELearningHero";
import ELearningIncludes from "@/components/E-learning-courses/ELearningIncludes";
import ELearningOutcomes from "@/components/E-learning-courses/ELearningOutcomes";
import ELearningSidePanel from "@/components/E-learning-courses/ELearningSidePanel";
import ELearningBenefits from "@/components/E-learning-courses/ELearningBenefits";
import ELearningCurriculum from "@/components/E-learning-courses/ELearningCurriculum";
import ELearningPrerequisites from "@/components/E-learning-courses/ELearningPrerequisites";
import ELearningWhoCanBuy from "@/components/E-learning-courses/ELearningWhoCanBuy";
import ELearningFAQs from "@/components/E-learning-courses/ELearningFAQs";
import ELearningReviews from "@/components/E-learning-courses/ELearningReviews";
import ELearningOtherCourses from "@/components/E-learning-courses/ELearningOtherCourses";

const CISATrainingCourse = () => {
  const courseData = {
    courseName: "Certified Information Systems Auditor: CISA Training",
    rating: "4.8",
    enrolledCount: "1.8k+",
    duration: "26.5Hrs",
    level: "Intermediate",
    description: "Are you aiming to become a trusted IT auditor and make yourself a credible player in the cybersecurity field? This course by Viovn helps you to master IS audit essentials, governance, risk, system lifecycle, and security controls aligned with ISACA’s CISA exam domains. Get real-world audit skills and confidence to crack the CISA certification and stand out in the industry. Let’s begin your dream career as a Certified Information Systems Auditor with us. Enroll Today!",
    heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1554224155-1696413565d3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 398",
      discounted: "USD 199",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "26 hrs 30 mins of Video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Interactive learning modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Career–focused coaching", image: "https://cdn-icons-png.flaticon.com/512/2991/2991231.png" },
      { text: "Hands-On Practice & Real-World Scenarios", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Lifetime Access to Course Materials", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "26 hrs 30 mins of Video content",
      "Interactive learning modules",
      "Career–focused coaching",
      "Hands-On Practice & Real-World Scenarios",
      "Lifetime Access to Course Materials"
    ],
    outcomes: [
      {
        title: "IS Audit Process",
        description: "Understand the complete lifecycle of information systems auditing including planning, execution, testing controls, and reporting audit findings."
      },
      {
        title: "IT Governance and Management",
        description: "Learn governance frameworks, IT management practices, and how organizations align IT strategies with business objectives."
      },
      {
        title: "Risk Management and Control Evaluation",
        description: "Identify vulnerabilities, analyze risks, and evaluate security controls to protect organizational information assets."
      },
      {
        title: "Information Systems Acquisition and Development",
        description: "Understand how systems are designed, developed, implemented, and audited to ensure secure and efficient operations."
      },
      {
        title: "Operations and Business Resilience",
        description: "Learn how to assess IT operations, incident response procedures, and business continuity strategies."
      },
      {
        title: "Protection of Information Assets",
        description: "Gain knowledge about securing data, implementing information security policies, and protecting sensitive business information."
      }
    ],
    benefits: [
      {
        title: "Guided CISA Exam Prep",
        description: "Follow a domain-based learning path aligned with ISACA’s exam content outline."
      },
      {
        title: "Real-World Audit Skills",
        description: "Gain practical audit techniques for planning, testing controls, and reporting findings effectively."
      },
      {
        title: "Stronger IT Governance Knowledge",
        description: "Build competency in governance, risk management, and IT resource management frameworks."
      },
      {
        title: "Improved Security & Risk Awareness",
        description: "Learn to identify vulnerabilities, assess risks, and protect information assets confidently."
      },
      {
        title: "Career Upgradation",
        description: "Increase your professional credibility and prepare for high-growth IT audit and cybersecurity roles."
      }
    ],
    modules: [
      {
        title: "Course outline",
        duration: "9 topics",
        lectures: [
          { title: "Introduction to IS Auditing fundamentals and audit lifecycle" },
          { title: "IS Audit Process and audit methodologies" },
          { title: "IT Governance and IT Management Controls" },
          { title: "Risk Assessment and Control Evaluation" },
          { title: "Information Systems Acquisition and Development" },
          { title: "Information Systems Operations and Business Resilience" },
          { title: "Protection of Information Assets" },
          { title: "Information Assurance Lifecycle Implementation" },
          { title: "Certification Preparation and Exam Guidance" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "There are no mandatory prerequisites. Anyone who is interested in preparing to achieve CISA Certification can enroll in this course. Although this course is not ISACA-accredited, but follows official guidelines and provides you with the tools, confidence, and knowledge needed to successfully prepare for the CISA exam prep."
    },
    faqs: [
      {
        question: "1. What is the CISA certification?",
        answer: "The CISA (Certified Information Systems Auditor) certification is a globally recognized certification from ISACA, validating expertise in information systems auditing, control, governance, and security."
      },
      {
        question: "2. Who should take this CISA E-Learning course?",
        answer: "This course is ideal for IT auditors, security analysts, compliance professionals, IT governance specialists, risk managers, and professionals aspiring to build a career in information systems auditing."
      },
      {
        question: "3. What topics are covered in this CISA e-learning program?",
        answer: "The course covers IS audit planning, governance and IT management, systems acquisition & development, IS operations and business resilience, and protection of information assets."
      },
      {
        question: "4. How long is the training program?",
        answer: "The course duration is 1 day, 2 hours, 30 minutes of intensive learning and exam preparation."
      },
      {
        question: "5. Is this course aligned with the CISA exam?",
        answer: "Yes, our course is aligned with ISACA’s CISA exam guidelines and covers all key domains to help you prepare for the CISA Exam confidently, but it’s not ISACA-accredited."
      },
      {
        question: "6. Does completing this course give me the official CISA certification?",
        answer: "No. You will need to take and pass the official CISA exam from ISACA to become certified."
      },
      {
        question: "7. What skills will I gain from this course?",
        answer: "You will develop skills in IS auditing, risk assessment, IT governance and control evaluation, information security review techniques, audit reporting, and certification exam readiness."
      }
    ],
    whoCanBuy: [
      "IT Auditors",
      "Security Analysts",
      "Risk and Compliance Professionals",
      "IT Governance Professionals",
      "Information Security Managers",
      "Cybersecurity Professionals",
      "IT Consultants",
      "Professionals preparing for CISA Certification"
    ],
    reviews: [
      {
        name: "Robert Miller",
        role: "Senior IT Auditor",
        rating: 5,
        content: "A very detailed course that covers all CISA domains. The practical insights into IT governance and risk management were extremely helpful.",
        date: "2 weeks ago"
      },
      {
        name: "Susan Lee",
        role: "Compliance Manager",
        rating: 5,
        content: "Excellent preparation material. The information systems acquisition and development module was particularly clear.",
        date: "1 month ago"
      }
    ],
    relatedCourses: [
      {
        title: "CISSP Training Course",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400",
        price: "USD 249",
        rating: "4.9"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20 md:pt-24 pb-20">
        <ELearningHero 
          courseName={courseData.courseName}
          rating={courseData.rating}
          enrolledCount={courseData.enrolledCount}
          duration={courseData.duration}
          level={courseData.level}
          description={courseData.description}
          heroImage={courseData.heroImage}
        />
        
        <div className="container mx-auto px-4 md:px-6 mt-12 md:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12">
            {/* Left Content Area */}
            <div className="space-y-4">
              <ELearningIncludes inclusions={courseData.inclusions} />
              <div className="h-px bg-slate-100 w-full my-8"></div>
              <ELearningOutcomes outcomes={courseData.outcomes} />
              <ELearningBenefits benefits={courseData.benefits} />
              <ELearningCurriculum modules={courseData.modules} />
              <ELearningPrerequisites 
                courseName={courseData.courseName} 
                description={courseData.prerequisites.description} 
              />
              <ELearningWhoCanBuy specificRoles={courseData.whoCanBuy} />
              <ELearningFAQs faqs={courseData.faqs} />
              <ELearningReviews reviews={courseData.reviews} />
              <ELearningOtherCourses courses={courseData.relatedCourses} />
            </div>

            {/* Right Sidebar Area */}
            <div>
              <ELearningSidePanel 
                previewImage={courseData.previewImage}
                originalPrice={courseData.pricing.original}
                discountedPrice={courseData.pricing.discounted}
                discountPercentage={courseData.pricing.percentage}
                timeLeft={courseData.pricing.timeLeft}
                courseInclusions={courseData.sidePanelInclusions}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CISATrainingCourse;
