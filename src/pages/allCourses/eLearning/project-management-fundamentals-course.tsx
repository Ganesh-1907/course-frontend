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

const ProjectManagementFundamentalsCourse = () => {
  const courseData = {
    courseName: "Project Management Fundamentals Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "6.5Hrs",
    level: "Beginner",
    description: "The Project Management Fundamentals course is an online e-learning program designed for beginners who want to understand the core concepts of project management. The course covers key topics such as project types, team building, scheduling, budgeting, execution, resource management, risk handling, and project closure. It also introduces both Agile and predictive project management methodologies, providing a solid foundation for those planning to pursue PMP certification. Learners will gain practical skills to initiate, plan, execute, monitor, and successfully manage projects in real-world professional environments.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "6 hours 30 minutes of video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Module-wise content with quizzes", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Strong foundation for PMP preparation", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Fundamentals of project lifecycle management", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "PMP exam guidance", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "6 hours 30 minutes of video content",
      "Module-wise content with quizzes",
      "Strong foundation for PMP preparation",
      "Fundamentals of project lifecycle management",
      "PMP exam guidance"
    ],
    outcomes: [
      {
        title: "Understand Project Management Basics:",
        description: "Learn the core principles, terminologies, and phases of the project lifecycle."
      },
      {
        title: "Agile vs. Predictive Methologies:",
        description: "Explore the differences and practical applications of Agile and predictive project management approaches."
      },
      {
        title: "Master Project Planning:",
        description: "Develop practical skills for defining scope, building a strong team, creating schedules, and forecasting project budgets."
      },
      {
        title: "Risk & Resource Management:",
        description: "Assess potential project risks and allocate necessary resources effectively to ensure successful outcomes."
      },
      {
        title: "Execution and Control:",
        description: "Implement tools for monitoring execution progress, tracking changes, and reporting status updates to stakeholders."
      },
      {
        title: "Effective Project Closure:",
        description: "Document lessons learned, release project resources, and wrap up team activities successfully."
      }
    ],
    benefits: [
      {
        title: "Build a Strong Foundation",
        description: "Understand the core concepts of project management including planning, scheduling, budgeting, and execution. This course is ideal for beginners entering the field."
      },
      {
        title: "Expand Career Opportunities",
        description: "Project management skills are highly valued across industries. Adding these skills to your resume can enhance your career opportunities globally."
      },
      {
        title: "Prepare for the PMP Certification",
        description: "Gain foundational knowledge of the key concepts and topics that support PMP exam preparation."
      },
      {
        title: "Learn Predictive and Agile Methods",
        description: "Develop an understanding of both traditional and Agile project management methodologies to work effectively in different project environments."
      },
      {
        title: "Enhance Your Project Management Skills",
        description: "Learn how to initiate, plan, execute, and close projects effectively while managing risks, resources, and stakeholders with confidence."
      }
    ],
    modules: [
      {
        title: "Course Outline",
        duration: "5 topics",
        lectures: [
          { title: "Getting Started" },
          { title: "Instructor Introduction" },
          { title: "Course Objectives" },
          { title: "Agenda" },
          { title: "Module 1 Quiz" }
        ]
      },
      {
        title: "Module 2 - Project Management Basics",
        duration: "18 topics",
        lectures: [
          { title: "PMI’s PMBOK Overview" },
          { title: "What is a Project?" },
          { title: "Attributes of a Project" },
          { title: "Examples of Projects" },
          { title: "Introduction to Project Management" },
          { title: "Project Constraints" },
          { title: "The Iron Triangle" },
          { title: "Scope" },
          { title: "Cost" },
          { title: "Time" },
          { title: "The Fundamental Project Life Cycle" },
          { title: "Project Management Processes" },
          { title: "Project Management Tools" },
          { title: "Stakeholders and Roles" },
          { title: "Project Manager Responsibilities" },
          { title: "Time Management Matrix" },
          { title: "Benefits of Project Management" },
          { title: "Module 2 Quiz" }
        ]
      },
      {
        title: "Module 3 - Where Do Projects Come From",
        duration: "13 topics",
        lectures: [
          { title: "Types of Organizations" },
          { title: "Enterprise Portfolio Management" },
          { title: "Mission, Vision, and Goals" },
          { title: "Business Strategy" },
          { title: "Balanced Scorecard Approach" },
          { title: "SMART Objectives" },
          { title: "Key Performance Indicators" },
          { title: "Action Plans" },
          { title: "Programs and Portfolios" },
          { title: "Project Selection and Prioritization" },
          { title: "Business Case Development" },
          { title: "Project Selection Funnel" },
          { title: "Module 3 Quiz" }
        ]
      },
      {
        title: "Module 4 - Types of Projects",
        duration: "7 topics",
        lectures: [
          { title: "Types of Projects" },
          { title: "Predictive vs Agile Project Management" },
          { title: "Traditional vs Agile Project Management" },
          { title: "Predictive Project Life Cycle" },
          { title: "Agile Project Life Cycle" },
          { title: "Scrum Framework Overview" },
          { title: "Module 4 Quiz" }
        ]
      },
      {
        title: "Module 5 - Initiation",
        duration: "6 topics",
        lectures: [
          { title: "Project Initiation" },
          { title: "Project Management Information Systems" },
          { title: "Project Charter" },
          { title: "Stakeholder Register" },
          { title: "Iron Triangle Concept" },
          { title: "Module 5 Quiz" }
        ]
      },
      {
        title: "Module 6 - Building the Team",
        duration: "8 topics",
        lectures: [
          { title: "Building a High Performing Team" },
          { title: "Stages of Team Development" },
          { title: "Team Charter" },
          { title: "Working Agreements" },
          { title: "Leadership and Servant Leadership" },
          { title: "Kickoff Meeting" },
          { title: "Conducting Effective Meetings" },
          { title: "Module 6 Quiz" }
        ]
      },
      {
        title: "Module 7 - Building the Schedule",
        duration: "7 topics",
        lectures: [
          { title: "Project Scheduling Fundamentals" },
          { title: "Benefits of a Project Schedule" },
          { title: "Steps to Build a Schedule" },
          { title: "Work Breakdown Structure" },
          { title: "Scheduling Tools" },
          { title: "Project Schedule in Excel and Microsoft Project" },
          { title: "Module 7 Quiz" }
        ]
      },
      {
        title: "Module 8 - Creating the Budget",
        duration: "6 topics",
        lectures: [
          { title: "Project Cost Management" },
          { title: "Types of Costs" },
          { title: "Budget Planning" },
          { title: "Cost Management Processes" },
          { title: "Budget Tools" },
          { title: "Module 8 Quiz" }
        ]
      },
      {
        title: "Module 9 - Planning Wrap Up",
        duration: "4 topics",
        lectures: [
          { title: "Planning Phase Review" },
          { title: "Project Baseline" },
          { title: "Progressive Elaboration" },
          { title: "Module 9 Quiz" }
        ]
      },
      {
        title: "Module 10 - Execution",
        duration: "7 topics",
        lectures: [
          { title: "Project Execution" },
          { title: "Managing Project Work" },
          { title: "Risk Management" },
          { title: "Risk Register" },
          { title: "Issue Log" },
          { title: "Status Reports" },
          { title: "Module 10 Quiz" }
        ]
      },
      {
        title: "Module 11 - Monitoring and Controlling",
        duration: "8 topics",
        lectures: [
          { title: "Project Monitoring" },
          { title: "Scope Control" },
          { title: "Schedule Control" },
          { title: "Cost Control" },
          { title: "Earned Value Management" },
          { title: "Quality Control Tools" },
          { title: "Change Management" },
          { title: "Module 11 Quiz" }
        ]
      },
      {
        title: "Module 12 - Project Closure",
        duration: "6 topics",
        lectures: [
          { title: "Lessons Learned" },
          { title: "Project Summary Report" },
          { title: "Customer Feedback" },
          { title: "Documentation Close-Out" },
          { title: "Celebration and Recognition" },
          { title: "Module 12 Quiz" }
        ]
      },
      {
        title: "Module 13 - Course Wrap Up",
        duration: "5 topics",
        lectures: [
          { title: "Procurement Management" },
          { title: "Contract Types" },
          { title: "Procurement Control" },
          { title: "Course Objectives Review" },
          { title: "Module 13 Quiz" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "There are no mandatory eligibility requirements for this course. Anyone interested in learning project management fundamentals can enroll."
    },
    faqs: [
      {
        question: "1. Who can take this Project Management Fundamentals training?",
        answer: "Beginners, working professionals, and individuals preparing for the PMP certification who want to build a strong foundation in project management."
      },
      {
        question: "2. Do I need prior experience?",
        answer: "No prior experience is required. However, basic knowledge of project workflows or tools like MS Project can be helpful."
      },
      {
        question: "3. How long is the Project Management Fundamentals course?",
        answer: "The course includes 6 hours and 30 minutes of video content with structured modules and quizzes."
      },
      {
        question: "4. What skills will I gain?",
        answer: "You will learn project initiation, planning, scheduling, budgeting, risk management, Agile vs predictive methods, and core PMP concepts."
      },
      {
        question: "5. Will this course help with PMP exam preparation?",
        answer: "Yes. The course provides a strong conceptual foundation aligned with PMI’s PMP topics."
      },
      {
        question: "6. Is this a live session?",
        answer: "No. The course is self-paced and includes recorded modules."
      },
      {
        question: "7. What modules are covered in the course?",
        answer: "Modules include project basics, project selection, initiation, team building, scheduling, budgeting, execution, monitoring, and project closure."
      },
      {
        question: "8. Is this course helpful for project management jobs?",
        answer: "Yes. It helps build foundational project management skills that strengthen your resume."
      },
      {
        question: "9. Does this course cover PMP exam topics?",
        answer: "Yes. It introduces core PMP concepts and serves as a starting point for PMP preparation."
      },
      {
        question: "10. Can I access the course anytime?",
        answer: "Yes. The course is self-paced and accessible anytime."
      }
    ],
    whoCanBuy: [
      "Beginners in Project Management",
      "Aspiring Project Managers",
      "Working Professionals",
      "Individuals Preparing for PMP Certification",
      "Team Leaders",
      "Business Analysts"
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

export default ProjectManagementFundamentalsCourse;
