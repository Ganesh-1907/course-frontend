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

const LeanSixSigmaYellowBeltELearningCourse = () => {
  const courseData = {
    courseName: "Lean Six Sigma - Yellow Belt E-learning Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "7Hrs",
    level: "Beginner",
    description: "The Lean Six Sigma Yellow Belt online course is an introductory training program that introduces learners to the core concepts of the Six Sigma methodology. The course covers important topics such as statistical process control, process mapping, and project management while emphasizing the use of data to solve quality-related issues. Designed for individuals who want to improve workplace quality and productivity, this program prepares participants for the Six Sigma Yellow Belt certification exam and helps them contribute to a culture of continuous improvement.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "7 hours of on-demand video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "5 downloadable learning materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "7 hours of on-demand video content",
      "5 downloadable learning materials",
      "Accessible on any device",
      "365 days of course access",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Comprehensive Understanding of Six Sigma Methodology:",
        description: "Develop a solid understanding of the Six Sigma methodology, including its principles, tools, and techniques used to improve processes and reduce defects."
      },
      {
        title: "Process Performance Definition and Measurement:",
        description: "Learn how to define and measure process performance using relevant metrics and key performance indicators (KPIs) to establish a baseline for improvement."
      },
      {
        title: "Critical Analysis of Process Performance:",
        description: "Gain the ability to analyze process performance, identify inefficiencies and bottlenecks, and apply data-driven methods to discover improvement opportunities."
      },
      {
        title: "Process Performance Improvement Strategies:",
        description: "Explore methods for improving process performance by applying Six Sigma tools and techniques to increase efficiency and enhance quality."
      },
      {
        title: "Control and Sustainability of Process Improvements:",
        description: "Understand how to implement control mechanisms that maintain improvements over time and prevent processes from returning to previous performance levels."
      },
      {
        title: "Development of Team Leadership and Communication Skills:",
        description: "Strengthen leadership and communication abilities that support teamwork and collaboration during process improvement initiatives."
      }
    ],
    benefits: [
      {
        title: "Effective Problem Resolution:",
        description: "The course introduces a structured approach to identifying and solving problems by focusing on root causes, which helps teams improve processes and maintain long-term business improvements."
      },
      {
        title: "Potential for Salary Enhancement:",
        description: "Lean Six Sigma Yellow Belt certification enhances your professional profile by demonstrating valuable problem-solving and process improvement skills, which can increase career opportunities and earning potential."
      },
      {
        title: "Contributions to Project Success:",
        description: "Yellow Belt professionals play an important role in improvement projects by supporting Green Belt and Black Belt leaders and contributing to successful project outcomes."
      },
      {
        title: "Efficient Learning Duration:",
        description: "This course is designed to be completed quickly, allowing professionals to learn the fundamentals of Six Sigma within a short time while still gaining valuable knowledge."
      },
      {
        title: "Empowering a Culture of Continuous Improvement:",
        description: "Organizations with trained Yellow Belt professionals can build a culture focused on continuous improvement, encouraging teams to identify problems, analyze data, and implement effective solutions."
      }
    ],
    modules: [
      {
        title: "Lean Six Sigma - Yellow Belt",
        duration: "17 topics",
        lectures: [
          { title: "Course Overview" },
          { title: "Introduction to Lean Six Sigma" },
          { title: "History of Lean Six Sigma" },
          { title: "Understanding Waste and Defects" },
          { title: "Waste and Defects - Part 2" },
          { title: "Project Management Fundamentals" },
          { title: "The PDCA Process" },
          { title: "Define Phase" },
          { title: "Define Phase - Part 2" },
          { title: "Define Phase - Part 3" },
          { title: "Measure Phase" },
          { title: "Measure Phase - Part 2" },
          { title: "Analyze Phase" },
          { title: "Improve Phase" },
          { title: "Control Phase" },
          { title: "Achieving Stakeholder Buy-In" },
          { title: "Next Steps in Six Sigma" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "To pursue the Lean Six Sigma Yellow Belt certification, participants typically need a high school diploma or an undergraduate degree along with a Six Sigma White Belt certification or basic knowledge of Six Sigma concepts."
    },
    faqs: [
      {
        question: "1. What is a Lean Six Sigma Yellow Belt?",
        answer: "A Lean Six Sigma Yellow Belt is a professional who understands the fundamental concepts of Lean Six Sigma methodology. Yellow Belts can lead small improvement projects and also support larger initiatives managed by Green Belt or Black Belt professionals."
      },
      {
        question: "2. Is the Lean Six Sigma Yellow Belt certification worth it?",
        answer: "Yes, the certification is valuable for professionals who want to gain foundational knowledge in process improvement and quality management. It also serves as a stepping stone toward advanced certifications such as Green Belt or Black Belt."
      },
      {
        question: "3. Who is eligible for the Six Sigma Yellow Belt certification?",
        answer: "Professionals such as managers, supervisors, team leaders, project team members, quality assurance professionals, and individuals interested in improving quality and productivity are eligible for the certification."
      },
      {
        question: "4. How much do Yellow Belt professionals earn?",
        answer: "According to Payscale data, professionals with a Lean Six Sigma Yellow Belt certification earn an average annual salary of approximately $71,000."
      },
      {
        question: "5. Is the Six Sigma Yellow Belt exam difficult?",
        answer: "The exam is generally considered beginner-friendly because the course focuses on foundational concepts and practical applications of Six Sigma principles."
      },
      {
        question: "6. Can I skip the Yellow Belt certification?",
        answer: "Although it is possible to skip the Yellow Belt level, it is recommended for beginners because it provides the foundational knowledge required before progressing to advanced levels such as Green Belt."
      },
      {
        question: "7. How long is the Six Sigma Yellow Belt online course?",
        answer: "The training program includes approximately 7 hours of learning content designed to provide a concise yet comprehensive introduction to Six Sigma concepts."
      },
      {
        question: "8. Does the Lean Six Sigma Yellow Belt certification expire?",
        answer: "No, Lean Six Sigma Yellow Belt certification generally does not have an expiration date."
      },
      {
        question: "9. Which platform is best for preparing for the Lean Six Sigma Yellow Belt exam?",
        answer: "Simpliaxis offers structured Lean Six Sigma courses with flexible learning options, practical insights, and comprehensive materials designed to help learners prepare effectively for certification."
      }
    ],
    whoCanBuy: [
      "Managers",
      "Supervisors",
      "Team Leaders",
      "Project Team Members",
      "Quality Assurance Professionals",
      "Process Improvement Practitioners",
      "Anyone interested in quality and productivity",
      "IT Professionals"
    ],
    reviews: [
      {
        name: "Sarah Johnson",
        role: "Project Manager",
        rating: 5,
        content: "The course was incredibly comprehensive and well-structured. The practical examples helped me apply Agile principles to my team immediately.",
        date: "2 weeks ago"
      },
      {
        name: "Michael Chen",
        role: "DevOps Engineer",
        rating: 5,
        content: "Excellent content! The sections on Scrum rituals and artifacts are particularly well-explained.",
        date: "1 month ago"
      }
    ],
    relatedCourses: [
      {
        title: "Agile Project Management Certificate",
        image: "https://images.unsplash.com/photo-1542621334-a254cf46736d?auto=format&fit=crop&q=80&w=400",
        price: "USD 199",
        rating: "4.7"
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

export default LeanSixSigmaYellowBeltELearningCourse;
