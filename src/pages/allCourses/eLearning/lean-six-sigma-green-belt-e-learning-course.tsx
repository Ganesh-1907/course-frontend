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
import ELearningContactBar from "@/components/E-learning-courses/ELearningContactBar";

const LeanSixSigmaGreenBeltELearningCourse = () => {
  const courseData = {
    courseName: "Lean Six Sigma - Green Belt E-learning Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "10Hrs",
    level: "Intermediate",
    description: "Enhance your career growth with the Viovn Lean Six Sigma Green Belt E-learning course. This program is specifically designed for professionals who want to specialize in process improvement and operational excellence. The course explores advanced Six Sigma concepts, tools, and methodologies that help organizations improve quality and efficiency. Ideal for team leaders, project managers, and quality assurance professionals, this training equips learners with the skills needed to lead process improvement initiatives and drive organizational excellence using the Six Sigma framework.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "10 hours of on-demand video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "14 downloadable learning materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "10 hours of on-demand video content",
      "14 downloadable learning materials",
      "Accessible on any device",
      "365 days of course access",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Comprehensive Six Sigma Methodology:",
        description: "Develop an in-depth understanding of the Six Sigma methodology, including its core principles and structured approach to achieving effective process improvement."
      },
      {
        title: "Performance Measurement:",
        description: "Learn how to define and measure process performance using key metrics that help evaluate and improve organizational efficiency."
      },
      {
        title: "Analytical Proficiency:",
        description: "Strengthen your analytical skills by learning how to evaluate process data, identify improvement opportunities, and apply statistical tools to support data-driven decisions."
      },
      {
        title: "Process Enhancement Strategies:",
        description: "Understand how to systematically improve processes using proven Six Sigma techniques designed to enhance efficiency and minimize defects."
      },
      {
        title: "Sustainable Improvement:",
        description: "Learn how to control and sustain process improvements to ensure that performance gains are maintained and integrated into long-term organizational practices."
      },
      {
        title: "Integration of Lean Principles:",
        description: "Explore Lean principles and tools that complement Six Sigma methodologies, enabling you to eliminate waste, streamline processes, and improve overall efficiency."
      }
    ],
    benefits: [
      {
        title: "Cost-Efficiency:",
        description: "The Viovn Six Sigma Green Belt E-learning program eliminates travel and printed material expenses, making it a cost-effective training option for both individuals and organizations."
      },
      {
        title: "Time Savings:",
        description: "Learners can progress through the course at their own pace, allowing them to focus on key topics and complete the training efficiently without disrupting their work schedule."
      },
      {
        title: "Global Accessibility:",
        description: "The online learning format enables professionals from around the world to access the Six Sigma Green Belt training, creating a diverse and inclusive learning environment."
      },
      {
        title: "Flexible Scheduling:",
        description: "Participants can choose study times that fit their personal or professional commitments, making the course ideal for working professionals with busy schedules."
      },
      {
        title: "Consistent Learning Experience:",
        description: "Viovn E-learning ensures a standardized learning experience where all participants receive the same high-quality course content, assessments, and learning support."
      }
    ],
    modules: [
      {
        title: "Lean Six Sigma - Green Belt E-learning Course",
        duration: "21 topics",
        lectures: [
          { title: "Course Overview" },
          { title: "Introduction to Lean Six Sigma" },
          { title: "Process Improvement Fundamentals" },
          { title: "Process Improvement Fundamentals - Part 2" },
          { title: "Lean Six Sigma Metrics Basics" },
          { title: "Core Concepts and Terminology" },
          { title: "Models and Methodologies" },
          { title: "Seven Basic Quality Tools" },
          { title: "Seven Basic Quality Tools - Part 2" },
          { title: "Seven Basic Quality Tools - Part 3" },
          { title: "Waste, Voice of the Customer, and Critical to Quality (CTQ)" },
          { title: "Waste, Voice of the Customer, and CTQ - Part 2" },
          { title: "Suppliers, Inputs, Process, Outputs, Customers (SIPOC)" },
          { title: "Important Graphs and Charts" },
          { title: "DMAIC Model - Define Phase" },
          { title: "DMAIC Model - Define Phase Part 2" },
          { title: "DMAIC Model - Measure Phase" },
          { title: "DMAIC Model - Analyze Phase" },
          { title: "DMAIC Model - Improve Phase" },
          { title: "DMAIC Model - Control Phase" },
          { title: "DMAIC Model - Review" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "To pursue the Lean Six Sigma Green Belt certification, learners typically need a high school diploma or an undergraduate degree along with prior knowledge of Six Sigma fundamentals, often demonstrated through a Six Sigma Yellow Belt certification."
    },
    faqs: [
      {
        question: "1. What is Lean Six Sigma Green Belt?",
        answer: "Lean Six Sigma Green Belt is a professional certification that focuses on improving business processes and operational efficiency. It combines Lean principles, which eliminate waste, with Six Sigma techniques that reduce defects and variation. Professionals with this certification participate in improvement projects and use data-driven methods to enhance overall business performance."
      },
      {
        question: "2. Is Lean Six Sigma Green Belt worth pursuing?",
        answer: "Yes, the certification is highly valued in industries that prioritize process optimization and operational excellence. It equips professionals with skills in data-driven decision-making, quality improvement, and waste reduction, making it beneficial for careers in quality management, project management, and operations."
      },
      {
        question: "3. Is the Six Sigma Green Belt course difficult?",
        answer: "The course is designed to be accessible and easy to understand. With well-structured lessons and guidance from experienced trainers, participants can learn the concepts effectively and complete the course with confidence."
      },
      {
        question: "4. What is a Green Belt qualification?",
        answer: "A Green Belt qualification indicates that an individual has been trained in Six Sigma tools and techniques and can contribute to process improvement initiatives within an organization. Green Belts typically support or lead improvement projects using structured methodologies such as DMAIC."
      },
      {
        question: "5. What is the duration of the Lean Six Sigma Green Belt course?",
        answer: "The Lean Six Sigma Green Belt E-learning course includes approximately 10 hours of training content, allowing participants to complete the program at their own pace."
      },
      {
        question: "6. Can I learn Six Sigma online?",
        answer: "Yes, Six Sigma can be learned online through flexible E-learning programs. Viovn offers online training that includes video lectures, interactive materials, and assessments to support effective learning."
      },
      {
        question: "7. Does access to the Six Sigma Green Belt course expire?",
        answer: "No, access to the Lean Six Sigma Green Belt E-learning course does not expire, allowing learners to revisit the course materials whenever needed."
      },
      {
        question: "8. Which platform is best for Lean Six Sigma Green Belt exam preparation?",
        answer: "Viovn provides a well-structured Lean Six Sigma Green Belt training program with flexible online learning, comprehensive course materials, and practical insights designed to help learners prepare effectively for certification."
      }
    ],
    whoCanBuy: [
      "Quality Professionals",
      "Process Engineers",
      "Project Managers",
      "Operations Managers",
      "Business Analysts",
      "Manufacturing Professionals",
      "Healthcare Professionals",
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
        title: "Advanced Certified Scrum Master (A-CSM)",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
        price: "USD 249",
        rating: "4.9"
      },
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

export default LeanSixSigmaGreenBeltELearningCourse;
