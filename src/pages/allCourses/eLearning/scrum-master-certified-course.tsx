import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ELearningHero from "@/components/E-learning-courses/ELearningHero";
import ELearningIncludes from "@/components/E-learning-courses/ELearningIncludes";
import ELearningSidePanel from "@/components/E-learning-courses/ELearningSidePanel";

import ELearningCurriculum from "@/components/E-learning-courses/ELearningCurriculum";
import ELearningPrerequisites from "@/components/E-learning-courses/ELearningPrerequisites";
import ELearningWhoCanBuy from "@/components/E-learning-courses/ELearningWhoCanBuy";

const ScrumMasterCertifiedCourse = () => {
  const courseData = {
    courseName: "Scrum Master Certified Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "4Hrs",
    level: "Intermediate",
    description: "The Scrum Master Certified course introduces learners to the core principles that form the foundation of Agile methodologies. It provides an in-depth exploration of the Scrum framework along with an overview of key Agile practices. The course begins with an introduction to Scrum, the most widely used Agile framework, adopted by more than 70% of Agile projects. Through real-world examples and practical insights, participants learn how to apply Scrum concepts to solve real project challenges. Scrum is an Agile development approach that enables teams to deliver functional software incrementally throughout the project lifecycle while adapting to changing requirements. This course thoroughly covers the Scrum Master certification curriculum and prepares participants to successfully pass the certification exam.",
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
      { text: "Sample Simpliaxis mock exam content", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Exam details overview", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "4 hours of video content",
      "Learning materials overview",
      "Study plan and preparation guidance",
      "Sample Simpliaxis mock exam content",
      "Exam details overview"
    ],
    modules: [
      {
        title: "Course Outline",
        duration: "86 topics",
        lectures: [
          { title: "Course Introduction" },
          { title: "Instructor Introduction" },
          { title: "Lesson A: Course Overview" },
          { title: "Welcome to the Course" },
          { title: "Scrum and Agile Mentoring Community" },
          { title: "Understanding Course Objectives" },
          { title: "Bloom’s Taxonomy Overview" },
          { title: "Expectations from the Course" },
          { title: "Classroom and Online Guidelines" },
          { title: "Learning Conventions Used" },
          { title: "Quizzes and Practical Exercises" },
          { title: "Scrum Certification Exams" },
          { title: "Getting Started with Scrum" },
          { title: "Chapter 1 Quiz" },
          { title: "Introduction to Scrum" },
          { title: "Learning Objectives" },
          { title: "Important Terms and Concepts" },
          { title: "Scrum Overview" },
          { title: "Project Management as a Discipline" },
          { title: "Software Development Lifecycle Management" },
          { title: "Traditional Project Management" },
          { title: "History of Agile" },
          { title: "Agile Manifesto Principles (1–5)" },
          { title: "Agile Manifesto Principles (6–12)" },
          { title: "Agile Methods Overview" },
          { title: "History of Scrum" },
          { title: "Benefits of Scrum" },
          { title: "Scalability of Scrum" },
          { title: "Scrum Concepts and Principles" },
          { title: "Empirical Process Control" },
          { title: "Self-Organization in Scrum Teams" },
          { title: "Collaboration Principles" },
          { title: "Value-Based Prioritization" },
          { title: "Time-Boxing" },
          { title: "Iterative Development" },
          { title: "Scrum Phases and Processes" },
          { title: "Initiate Phase" },
          { title: "Plan and Estimate Phase" },
          { title: "Implementation Phase" },
          { title: "Review and Retrospect Phase" },
          { title: "Release Phase" },
          { title: "Scrum Roles and Organization" },
          { title: "Scrum Master Role and Responsibilities" },
          { title: "Scrum Master Authority" },
          { title: "Product Owner Role and Responsibilities" },
          { title: "Product Owner Authority" },
          { title: "Forming the Scrum Team" },
          { title: "Scrum Team Responsibilities" },
          { title: "Scrum Team Authority" },
          { title: "Stakeholder Identification" },
          { title: "Differences Between Traditional PM and Scrum" },
          { title: "Business Justification in Scrum" },
          { title: "Value-Driven Delivery" },
          { title: "Business Justification Techniques" },
          { title: "MoSCoW Analysis" },
          { title: "100-Point Method" },
          { title: "Kano Analysis" },
          { title: "Continuous Value Justification" },
          { title: "Quality Management in Scrum" },
          { title: "Quality Definition and Acceptance Criteria" },
          { title: "Definition of Done" },
          { title: "Managing Change in Scrum" },
          { title: "Risk Identification and Management" },
          { title: "Risk Assessment and Mitigation" },
          { title: "Risk Burndown Chart" },
          { title: "Minimizing Risk in Scrum" },
          { title: "Scrum Meetings Overview" },
          { title: "Project Vision Meeting" },
          { title: "User Group Meetings" },
          { title: "Creating the Product Backlog" },
          { title: "Writing User Stories" },
          { title: "Sprint Planning Meeting" },
          { title: "Planning Poker and Estimation Techniques" },
          { title: "Creating the Sprint Backlog" },
          { title: "Scrum Board Usage" },
          { title: "Sprint Burndown Chart" },
          { title: "Tracking Sprint Metrics" },
          { title: "Daily Stand-Up Meeting" },
          { title: "Product Backlog Grooming" },
          { title: "Sprint Review Meeting" },
          { title: "Sprint Retrospective Meeting" },
          { title: "Release Planning Meeting" },
          { title: "Scrum Artifacts" },
          { title: "Product Backlog and Sprint Backlog" },
          { title: "Creating Deliverables in Scrum" },
          { title: "Refactoring in Agile Development" },
          { title: "Scrum of Scrums" },
          { title: "Managing Distributed Scrum Teams" },
          { title: "Course Summary and Closure" },
          { title: "Scrum Master Checkpoint" },
          { title: "Scrum Master Manual" },
          { title: "Scrum Master Workbooks" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "There are no mandatory prerequisites for enrolling in this course."
    },
    whoCanBuy: [
      "Scrum Masters",
      "Business Analysts",
      "Software Engineers",
      "Software Testers",
      "Individuals aspiring for a Scrum Master career",
      "Project Leaders",
      "Team Leaders",
      "Scrum Team Members"
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
              
              <ELearningCurriculum modules={courseData.modules} />
              <ELearningPrerequisites 
                courseName={courseData.courseName} 
                description={courseData.prerequisites.description} 
              />
              <ELearningWhoCanBuy specificRoles={courseData.whoCanBuy} />
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

export default ScrumMasterCertifiedCourse;
