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

const PMIOrganizationalChangeManagementCourse = () => {
  const courseData = {
    courseName: "PMI: Organizational Change Management Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "5Hrs",
    level: "Beginner",
    description: "The PMI Organizational Change Management (OCM) course from Simpliaxis equips professionals with the essential knowledge and skills required to manage and lead organizational change effectively. The course focuses on critical topics such as stakeholder engagement, communication strategies, leadership alignment, and cultural transformation. Participants will learn practical approaches to plan, implement, and sustain successful change initiatives within organizations. Upon completion, learners will earn 4 PDUs and gain a strong understanding of OCM principles and best practices to drive sustainable business transformation.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "5 hours of video learning", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Module-wise lessons with quizzes", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Change management planning concepts", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Guidance for entry-level project roles", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Course completion certificate", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "5 hours of video learning",
      "Module-wise lessons with quizzes",
      "Change management planning concepts",
      "Guidance for entry-level project roles",
      "Course completion certificate"
    ],
    outcomes: [
      {
        title: "Foundations of Organizational Change Management",
        description: "Understand the key concepts, frameworks, and principles that guide successful organizational change initiatives."
      },
      {
        title: "Stakeholder Engagement Strategies",
        description: "Learn how to identify stakeholders, analyze their influence, and engage them effectively during change initiatives."
      },
      {
        title: "Change Communication Planning",
        description: "Develop clear communication strategies that ensure transparency, reduce resistance, and build trust during organizational transformation."
      },
      {
        title: "Implementing Change Initiatives",
        description: "Gain practical knowledge on planning and executing structured change initiatives within organizations."
      },
      {
        title: "Leadership and Cultural Transformation",
        description: "Learn how leadership plays a critical role in guiding teams through change and shaping a supportive organizational culture."
      },
      {
        title: "Measuring Change Effectiveness",
        description: "Understand how to monitor change initiatives, measure outcomes, and ensure long-term sustainability of improvements."
      }
    ],
    benefits: [
      {
        title: "Apply Practical OCM Tools",
        description: "Learn how to use proven frameworks, tools, and techniques to effectively plan, manage, and evaluate change initiatives."
      },
      {
        title: "Boost Organizational Efficiency",
        description: "Implement structured change management processes that minimize disruption and improve productivity across teams."
      },
      {
        title: "Strengthen Communication Skills",
        description: "Develop strong communication strategies that align teams, engage stakeholders, and clarify expectations during change initiatives."
      },
      {
        title: "PMP Knowledge Alignment",
        description: "Gain knowledge that complements PMP certification preparation, including change management and lifecycle management concepts."
      },
      {
        title: "Enhance Leadership Capabilities",
        description: "Build leadership skills required to guide teams through transitions, motivate employees, and foster collaboration."
      }
    ],
    modules: [
      {
        title: "Course Outline",
        duration: "7 topics",
        lectures: [
          { title: "Introduction to Change Management" },
          { title: "Managing Organizational Change" },
          { title: "Change Communication Strategies" },
          { title: "Implementing Change Initiatives" },
          { title: "Managing Organizational Complexity" },
          { title: "Program Management Concepts" },
          { title: "Developing and Leading Change Strategy" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "There are no mandatory prerequisites for this course. Anyone interested in organizational change management can enroll. However, basic knowledge of project management or organizational workflows can be helpful."
    },
    faqs: [
      {
        question: "1. How long does this Organizational Change Management course last?",
        answer: "The course includes approximately 5 hours of video-based learning modules, each supported by quizzes and practical learning content."
      },
      {
        question: "2. Do I need prior experience to enroll?",
        answer: "No prior experience is required. Anyone interested in learning about organizational change management can enroll."
      },
      {
        question: "3. Will I receive a certificate after completion?",
        answer: "Yes, participants will receive a Simpliaxis course completion certificate after successfully finishing the course."
      },
      {
        question: "4. Is this course suitable for PMP aspirants?",
        answer: "Yes, the course includes concepts aligned with project management practices that can support PMP certification preparation."
      },
      {
        question: "5. What skills will I gain from this course?",
        answer: "You will learn change management strategies, stakeholder engagement techniques, cultural transformation approaches, and methods to evaluate change effectiveness."
      },
      {
        question: "6. Is this course delivered as a live session?",
        answer: "No, the course is delivered through recorded video modules that can be accessed anytime."
      },
      {
        question: "7. Who should take this PMI OCM training?",
        answer: "This course is ideal for project managers, team leaders, HR professionals, change management practitioners, business analysts, and PMP candidates."
      },
      {
        question: "8. Can this PMI OCM course help advance my career?",
        answer: "Yes, learning organizational change management can significantly enhance your leadership and project management skills, helping you advance in roles that involve business transformation and organizational development."
      }
    ],
    whoCanBuy: [
      "Project Managers",
      "Team Leaders",
      "HR Professionals",
      "Business Analysts",
      "Change Management Practitioners",
      "Organizational Development Professionals",
      "PMP Certification Aspirants",
      "Anyone interested in organizational transformation"
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

export default PMIOrganizationalChangeManagementCourse;
