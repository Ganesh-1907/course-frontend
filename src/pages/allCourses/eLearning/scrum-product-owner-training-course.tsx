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

const ScrumProductOwnerTrainingCourse = () => {
  const courseData = {
    courseName: "Scrum Product Owner Training Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "4Hrs",
    level: "Intermediate",
    description: "The Scrum Product Owner Certified (SPOC) course trains project and product managers to maximize return on investment (ROI) and minimize total cost of ownership (TCO) for products. It focuses on applying Agile practices to deliver better product outcomes. Participants learn how to define product requirements clearly, guide development teams effectively, and deliver value-driven products. The course covers user story creation, backlog prioritization, product backlog refinement, release planning, and stakeholder management. With practical training and real-world strategies, learners gain skills they can immediately apply in their workplace.",
    heroImage: "https://images.unsplash.com/photo-1542621334-a254cf46736d?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "4 hours of structured video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Module-wise lessons and quizzes", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Course Completion Certificate", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" },
      { text: "Downloadable resources and templates", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Scrum Artifact Management", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" }
    ],
    sidePanelInclusions: [
      "4 hours of structured video content",
      "Module-wise lessons and quizzes",
      "Course Completion Certificate",
      "Downloadable resources and templates",
      "Scrum Artifact Management"
    ],
    outcomes: [
      {
        title: "Scrum Framework Fundamentals",
        description: "Understand the principles of Agile and Scrum, including roles, artifacts, and events that help teams deliver high-value products."
      },
      {
        title: "Product Vision and Strategy",
        description: "Learn how to define a clear product vision, align product strategy with business goals, and guide development teams effectively."
      },
      {
        title: "User Stories and Backlog Management",
        description: "Develop skills to create effective user stories, maintain a prioritized product backlog, and ensure that backlog items deliver maximum value."
      },
      {
        title: "Sprint Planning and Release Management",
        description: "Understand sprint planning techniques, release planning strategies, and how to manage deliverables across multiple iterations."
      },
      {
        title: "Stakeholder Collaboration",
        description: "Learn how to communicate effectively with stakeholders, gather requirements, and ensure alignment between business objectives and development teams."
      },
      {
        title: "Agile Product Delivery",
        description: "Apply Agile methodologies to continuously deliver product improvements and maintain customer satisfaction through iterative development."
      }
    ],
    benefits: [
      {
        title: "Upskill Product Ownership",
        description: "Learn to manage product vision, backlog, and priorities that need to be managed in an agile manner to receive maximum business value from product delivery."
      },
      {
        title: "Cross-Team Collaboration",
        description: "Achieve clarity in translating requirements for stakeholders and improve collaboration with development teams and customers."
      },
      {
        title: "Improve Decision Making",
        description: "Build confidence in making product decisions by balancing customer requirements, technical constraints, and business objectives."
      },
      {
        title: "Effective Backlog Items",
        description: "Learn to draft user stories and backlog items that align with business objectives while satisfying customer needs."
      },
      {
        title: "Practical Application of Agility",
        description: "Use Scrum tools and ceremonies to continuously improve product delivery and maintain an adaptive development process."
      }
    ],
    modules: [
      {
        title: "Course outline",
        duration: "27 topics",
        lectures: [
          { title: "Overview" },
          { title: "Course Introduction" },
          { title: "Welcome to the Course" },
          { title: "My Scrum/Agile Mentoring Community" },
          { title: "Why Are You Here?" },
          { title: "Using Bloom’s Taxonomy" },
          { title: "Scrum Certification Exams" },
          { title: "Introduction to Scrum" },
          { title: "Agile Manifesto Principles" },
          { title: "Scrum Concepts and Principles" },
          { title: "Scrum Phases and Processes" },
          { title: "Roles and Responsibilities" },
          { title: "Product Owner Responsibilities" },
          { title: "Scrum Master Responsibilities" },
          { title: "Scrum Team Responsibilities" },
          { title: "Planning and Product Vision" },
          { title: "Creating and Prioritizing Product Backlog" },
          { title: "User Story Creation" },
          { title: "Backlog Prioritization Techniques" },
          { title: "Release Planning" },
          { title: "Quality Management" },
          { title: "Change and Risk Management" },
          { title: "Sprint Planning Meeting" },
          { title: "Daily Standup Meeting" },
          { title: "Sprint Review and Deliverables" },
          { title: "Product Backlog Grooming" },
          { title: "Sprint Summary and Checkpoints" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "There are no mandatory prerequisites for this training. A basic understanding of Agile principles or project management experience will help you learn more effectively."
    },
    faqs: [
      {
        question: "1. Who can attend the Scrum Product Owner Training?",
        answer: "This course is best suited for aspiring Product Owners, Project Managers, Business Analysts, Scrum team members, Agile practitioners, entrepreneurs, and anyone interested in pursuing CSPO or PSPO certification."
      },
      {
        question: "2. Do I require previous knowledge to join this course?",
        answer: "No prior experience is required. However, a basic understanding of Agile or project management concepts can be helpful."
      },
      {
        question: "3. What is the duration of this training?",
        answer: "This training includes approximately 4 hours of instructional video content organized into modules with lessons, quizzes, and additional study materials."
      },
      {
        question: "4. What are the key skills I will acquire?",
        answer: "You will learn Scrum artifact management, backlog prioritization, Agile sprint planning, stakeholder collaboration, and product delivery strategies."
      },
      {
        question: "5. How will this training help in my career?",
        answer: "This training strengthens Agile product management skills and prepares you for Scrum Product Owner certifications such as CSPO or PSPO."
      },
      {
        question: "6. Is this course delivered live or self-paced?",
        answer: "This is a self-paced eLearning course with video lessons, interactive quizzes, and downloadable resources."
      },
      {
        question: "7. What topics are covered in the training?",
        answer: "The course covers Scrum fundamentals, product backlog management, sprint planning, stakeholder collaboration, release planning, and Agile product delivery."
      },
      {
        question: "8. Does this course support certification preparation?",
        answer: "Yes, this training supports preparation for Scrum Product Owner certifications such as CSPO and PSPO."
      },
      {
        question: "9. Can I access the course anytime?",
        answer: "Yes, the course is delivered through recorded videos, allowing you to learn anytime at your own pace."
      },
      {
        question: "10. Will I get a certificate after completion?",
        answer: "Yes, you will receive a Course Completion Certificate from Simpliaxis after successfully completing all modules and quizzes."
      }
    ],
    whoCanBuy: [
      "Product Owners",
      "Project Managers",
      "Business Analysts",
      "Agile Practitioners",
      "Scrum Team Members",
      "Entrepreneurs and Startup Founders",
      "Product Managers",
      "Anyone interested in Agile product development"
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

export default ScrumProductOwnerTrainingCourse;
