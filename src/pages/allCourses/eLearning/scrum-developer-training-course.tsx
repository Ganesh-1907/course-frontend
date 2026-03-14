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

const ScrumDeveloperTrainingCourse = () => {
  const courseData = {
    courseName: "Scrum Developer Training Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "3.5Hrs",
    level: "Intermediate",
    description: "The Scrum Developer Training Course is designed for software developers who want to work effectively within Agile and Scrum environments. This course introduces the responsibilities of a Scrum Developer, Agile engineering practices, and collaborative development techniques used by Scrum teams. Participants will learn how to write user stories, estimate tasks, participate in sprint planning, and contribute to continuous product improvement. Through structured modules and real-world development practices, the course prepares learners for Scrum Developer certifications such as CSD and helps them become effective contributors in Agile teams.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "3 hrs 30 mins of Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Module-Wise Lessons Quizzes", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Foundations of Scrum Developer Role", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Prep you for CSD Certification", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Lifetime Course Access", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "3 hrs 30 mins of Video Content",
      "Module-Wise Lessons Quizzes",
      "Foundations of Scrum Developer Role",
      "Prep you for CSD Certification",
      "Lifetime Course Access"
    ],
    outcomes: [
      {
        title: "Scrum Framework for Developers",
        description: "Understand the Scrum framework, including roles, events, and artifacts, and how developers contribute to Agile product delivery."
      },
      {
        title: "Agile Development Practices",
        description: "Learn Agile engineering practices such as iterative development, continuous integration, and collaboration within Scrum teams."
      },
      {
        title: "User Stories and Task Estimation",
        description: "Develop skills to create user stories, estimate tasks using Agile techniques like Planning Poker, and contribute to sprint planning."
      },
      {
        title: "Sprint Execution and Collaboration",
        description: "Learn how developers collaborate during sprints, participate in daily standups, and contribute to delivering product increments."
      },
      {
        title: "Backlog Management and Refinement",
        description: "Understand how to work with product backlogs, refine backlog items, and prioritize development tasks effectively."
      },
      {
        title: "Agile Team Communication",
        description: "Improve collaboration with Scrum Masters, Product Owners, and stakeholders to deliver high-quality software in Agile environments."
      }
    ],
    benefits: [
      {
        title: "Practical Learning",
        description: "Learn Scrum development practices through real-world Agile development methods."
      },
      {
        title: "Improve Collaboration",
        description: "Work effectively within cross-functional Scrum teams and Agile environments."
      },
      {
        title: "Speed up Delivery",
        description: "Deliver high-quality software faster through iterative development and Agile engineering practices."
      },
      {
        title: "Career Development",
        description: "Prepare for globally recognized Scrum Developer certifications and expand career opportunities."
      },
      {
        title: "Learn Anywhere",
        description: "Study at your own pace with online recorded lessons and lifetime access."
      }
    ],
    modules: [
      {
        title: "Course content",
        duration: "19 topics",
        lectures: [
          { title: "Course Introduction" },
          { title: "Introduction to Scrum" },
          { title: "Agile Manifesto and Agile Principles" },
          { title: "Scrum Framework Overview" },
          { title: "Scrum Concepts and Principles" },
          { title: "Scrum Roles and Responsibilities" },
          { title: "Creating Product Vision" },
          { title: "Developing Epics and User Stories" },
          { title: "Prioritized Product Backlog" },
          { title: "Sprint Planning" },
          { title: "Task Estimation Techniques" },
          { title: "Creating Sprint Backlog" },
          { title: "Daily Scrum Meetings" },
          { title: "Building Deliverables" },
          { title: "Backlog Grooming" },
          { title: "Sprint Review" },
          { title: "Sprint Retrospective" },
          { title: "Release Planning" },
          { title: "Project Closure" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "No mandatory prerequisites are required. Basic knowledge of software development or Agile concepts will help learners understand Scrum practices more effectively."
    },
    faqs: [
      {
        question: "1. What is Simpliaxis’s Scrum Developer Training?",
        answer: "Simpliaxis Scrum Developer Training is a recorded video learning program designed to help software developers work effectively within Scrum and Agile environments."
      },
      {
        question: "2. Who all are eligible to take this training?",
        answer: "Software developers, programmers, QA testers, architects, business analysts, Scrum Masters, and Product Owners can benefit from this training."
      },
      {
        question: "3. What type of skills can you get through this course?",
        answer: "You will learn the Scrum framework, Agile engineering practices, task estimation, sprint planning, and effective collaboration in Scrum teams."
      },
      {
        question: "4. Do I require prior Scrum experience?",
        answer: "No prior Scrum experience is required. The course covers fundamental Scrum concepts suitable for beginners."
      },
      {
        question: "5. Is this course suitable for distributed or remote teams?",
        answer: "Yes, the course includes collaboration strategies for both distributed and co-located Scrum teams."
      },
      {
        question: "6. Will I get a certification?",
        answer: "Yes, you will receive a Simpliaxis course completion certificate and gain preparation for Scrum Developer certifications like CSD or PSD."
      },
      {
        question: "7. What is the duration of this course?",
        answer: "The course includes approximately 3 hours and 30 minutes of video-based learning."
      },
      {
        question: "8. Can this course help prepare for other certifications?",
        answer: "Yes, this course provides a foundation for further Agile and Scrum certifications such as CSPO and CSM."
      },
      {
        question: "9. What is the difference between a Scrum Developer and a traditional software developer?",
        answer: "A Scrum Developer works within Agile teams using iterative development, collaboration, and Scrum ceremonies to deliver continuous product improvements."
      },
      {
        question: "10. Does this course help my career growth?",
        answer: "Yes, it strengthens Agile development skills and improves collaboration with Scrum teams, helping professionals move into Agile development roles."
      }
    ],
    whoCanBuy: [
      "Software Developers",
      "Programmers",
      "QA Engineers and Testers",
      "System Architects",
      "Agile Team Members",
      "DevOps Engineers",
      "Business Analysts",
      "Anyone interested in becoming a Scrum Developer"
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

export default ScrumDeveloperTrainingCourse;
