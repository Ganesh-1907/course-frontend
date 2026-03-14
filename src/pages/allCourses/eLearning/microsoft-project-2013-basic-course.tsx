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

const MicrosoftProject2013BasicCourse = () => {
  const courseData = {
    courseName: "Microsoft Project 2013: Basic Training Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "4Hrs",
    level: "Beginner",
    description: "The Microsoft Project 2013: Basic Training Course is designed for beginners who want to learn how to plan, manage, and track projects using Microsoft Project. This course introduces the essential tools and features required to create project schedules, assign resources, manage timelines, and monitor progress. Through step-by-step lessons and hands-on practice, learners will gain the confidence to organize project tasks, manage resources effectively, and maintain project plans using Microsoft Project 2013.",
    heroImage: "https://images.unsplash.com/photo-1542621334-a254cf46736d?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "4 Hrs of Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Unit-wise Lessons", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Hands-on Tools Practice", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Manage Projects Using Microsoft Project", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Lifetime Course Access", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "4 Hrs of Video Content",
      "Unit-wise Lessons",
      "Hands-on Tools Practice",
      "Manage Projects Using Microsoft Project",
      "Lifetime Course Access"
    ],
    outcomes: [
      {
        title: "Project Setup in Microsoft Project",
        description: "Learn how to create a new project, define project settings, and set up calendars and timelines."
      },
      {
        title: "Task and Milestone Management",
        description: "Understand how to add tasks, milestones, and dependencies to build structured project schedules."
      },
      {
        title: "Resource Allocation",
        description: "Assign resources to tasks and manage workloads efficiently using Microsoft Project tools."
      },
      {
        title: "Project Scheduling",
        description: "Learn how to manage project timelines using scheduling features and calendars."
      },
      {
        title: "Tracking Project Progress",
        description: "Monitor project progress by updating tasks, comparing baselines, and analyzing project data."
      },
      {
        title: "Project Reporting and Analysis",
        description: "Generate reports and analyze project performance to improve planning and decision-making."
      }
    ],
    benefits: [
      {
        title: "Easy Start",
        description: "Gain confidence in using Microsoft Project 2013 right from the beginning."
      },
      {
        title: "Strong Foundation",
        description: "Build essential project management skills to manage small or medium projects effectively."
      },
      {
        title: "Better Planning",
        description: "Learn to add tasks, milestones, and resources for well-structured project plans."
      },
      {
        title: "Time Management",
        description: "Use calendars and schedules to control project timelines and meet deadlines."
      },
      {
        title: "Resource Handling",
        description: "Allocate and balance resources efficiently to avoid overwork and delays."
      }
    ],
    modules: [
      {
        title: "Course content:",
        duration: "7 topics",
        lectures: [
          { title: "Project Initiation" },
          { title: "Project Setup" },
          { title: "Efficient Navigation in MS Project" },
          { title: "Advanced Microsoft Project Usage" },
          { title: "Creating Project Baselines" },
          { title: "Project Data Analysis" },
          { title: "Project Management" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "Basic computer knowledge is recommended. Familiarity with project management concepts can be helpful but is not mandatory."
    },
    faqs: [
      {
        question: "1. Who should attend the Microsoft Project 2013 Basic course?",
        answer: "This course is ideal for beginners, project managers, team leaders, and project staff who want to efficiently manage tasks, schedules, and resources using Microsoft Project 2013."
      },
      {
        question: "2. What topics are covered in this course?",
        answer: "The course covers creating and managing task lists, establishing project schedules, setting up calendars, assigning tasks to resources, and tracking project costs."
      },
      {
        question: "3. Do I need prior experience with Microsoft Project?",
        answer: "No prior experience is required. This beginner-level course is designed to help new users get started with Microsoft Project 2013."
      },
      {
        question: "4. Can this course help me transition from older versions of Microsoft Project?",
        answer: "Yes. The course provides guidance for users transitioning from older versions such as Microsoft Project 2010 to Microsoft Project 2013."
      },
      {
        question: "5. What skills will I gain after completing this course?",
        answer: "You will learn how to manage tasks, schedules, and resources effectively and use Microsoft Project 2013 tools to handle daily project management activities."
      },
      {
        question: "6. Will I get a certification?",
        answer: "Yes, upon successful completion of the course, you will receive a course completion certificate."
      },
      {
        question: "7. What is the duration of this course?",
        answer: "The course is designed to be completed in approximately 4 hours of video learning."
      },
      {
        question: "8. Can this course assist me in preparing for certifications in other fields?",
        answer: "Yes, this course builds a foundation in project management tools that can support further certification preparation."
      },
      {
        question: "9. Does this course help my career further?",
        answer: "Yes, it improves project planning and management skills, which can support professional growth in project-related roles."
      }
    ],
    whoCanBuy: [
      "Project Managers",
      "Team Leaders",
      "Project Coordinators",
      "Project Assistants",
      "Business Analysts",
      "Students learning project management tools",
      "Professionals managing small or medium projects",
      "Anyone interested in learning Microsoft Project"
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

export default MicrosoftProject2013BasicCourse;
