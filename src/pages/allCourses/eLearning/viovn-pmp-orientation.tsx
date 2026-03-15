import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ELearningHero from "@/components/E-learning-courses/ELearningHero";
import ELearningIncludes from "@/components/E-learning-courses/ELearningIncludes";
import ELearningSidePanel from "@/components/E-learning-courses/ELearningSidePanel";

import ELearningBenefits from "@/components/E-learning-courses/ELearningBenefits";

import ELearningCurriculum from "@/components/E-learning-courses/ELearningCurriculum";
import ELearningFAQs from "@/components/E-learning-courses/ELearningFAQs";
import ELearningReviews from "@/components/E-learning-courses/ELearningReviews";
import ELearningOtherCourses from "@/components/E-learning-courses/ELearningOtherCourses";

const ViovnPMPOrientationCourse = () => {
  const courseData = {
    courseName: "Viovn PMP Orientation",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "4Hrs",
    level: "Beginner",
    description: "The Project Management Professional (PMP) certification is a globally recognized credential for project managers that validates their ability to lead teams and successfully manage projects. Achieving PMP certification requires proper training along with dedicated self-study. Without the right guidance and preparation, passing the exam can be challenging. In this orientation, we explain why Viovn is a reliable choice for PMP certification training. Our sessions use interactive flash-based slides instead of traditional presentations to create engaging learning experiences. We also utilize tools such as Menti and Miro to encourage collaboration and simplify complex concepts. Join our PMP certification program to benefit from expert guidance, personalized support, and structured exam preparation.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "4 hours of video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Learning materials overview", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Study plan and preparation guidance", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Sample content from Viovn mock exams", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Overview of PMP exam details", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "4 hours of video content",
      "Learning materials overview",
      "Study plan and preparation guidance",
      "Sample content from Viovn mock exams",
      "Overview of PMP exam details"
    ],
    benefits: [
      {
        title: "Understand the PMP Process:",
        description: "Participants will learn about the PMP certification journey, including training requirements, exam preparation strategies, and the overall process needed to become a certified project manager."
      },
      {
        title: "Content Overview:",
        description: "Learners will gain an introduction to the PMBOK Guide and understand how it can be used effectively during exam preparation. Additional resources and preparation strategies are also discussed."
      },
      {
        title: "Interactive Session:",
        description: "The interactive orientation session provides insights into what the complete 35-hour PMP training includes and how it supports effective exam preparation."
      },
      {
        title: "Cost-Effective Introduction:",
        description: "This complimentary orientation helps participants understand the training approach offered by Viovn and evaluate the course before investing in the full program."
      },
      {
        title: "Exam Preparation Guidance:",
        description: "Participants receive guidance on how to strengthen their understanding of PMP concepts and apply them effectively to their professional roles, making exam preparation easier."
      }
    ],
    modules: [
      {
        title: "PMP Orientation",
        duration: "10 topics",
        lectures: [
          { title: "Learning Materials Overview" },
          { title: "Recommended Study Resources" },
          { title: "Suggested Study Sequence" },
          { title: "PMP Exam Details" },
          { title: "PMP Question Format" },
          { title: "Complete PMP Journey: Bootcamp, Application Guidance, Self-Study, and Exam Preparation" },
          { title: "Study Plan and Preparation Guidance" },
          { title: "Sample Viovn Mock Exam Content" },
          { title: "Sample Viovn Affinity Board for High-Velocity Learning" },
          { title: "Sample Concept Flow Mind Map" }
        ]
      }
    ],
    faqs: [
      {
        question: "1. How does the orientation help in making a decision?",
        answer: "The orientation provides a clear overview of the PMP training process and the support provided by Viovn. This helps participants make an informed decision when choosing a training provider."
      },
      {
        question: "2. Is the PMP exam difficult to pass?",
        answer: "The PMP exam can be challenging, but with proper training, guidance, and consistent study, candidates can successfully pass the exam."
      },
      {
        question: "3. Why are PMP exam applications sometimes rejected?",
        answer: "Applications may be rejected if specific instructions or documentation requirements are not followed correctly. Viovn provides guidance to help applicants complete the process accurately."
      },
      {
        question: "4. Is studying the PMBOK Guide enough to pass the exam?",
        answer: "While the PMBOK Guide is an important resource, candidates should also study the Scrum Guide and the Agile Practice Guide for comprehensive preparation."
      },
      {
        question: "5. Should I study PMBOK 6 or PMBOK 7 for the PMP exam?",
        answer: "Both PMBOK 6 and PMBOK 7 should be considered during preparation. PMBOK 6 explains the detailed processes, while PMBOK 7 focuses on principles and performance domains."
      }
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
              
              <ELearningBenefits benefits={courseData.benefits} />
              <ELearningCurriculum modules={courseData.modules} />
              
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

export default ViovnPMPOrientationCourse;
