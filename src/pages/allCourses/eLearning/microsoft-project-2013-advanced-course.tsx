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

const MicrosoftProject2013AdvancedCourse = () => {
  const courseData = {
    courseName: "Microsoft Project 2013: Advanced Training",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "4Hrs",
    level: "Advanced",
    description: "The Microsoft Project 2013: Advanced Training course is designed for professionals who want to master advanced project planning and management techniques using Microsoft Project. This course focuses on advanced scheduling, resource optimization, project analysis, and reporting tools that help manage complex projects effectively. Learners will gain hands-on experience with advanced features such as baseline tracking, data analysis, customized reporting, and integration with tools like Excel and Access. By the end of the course, participants will be able to manage large-scale projects more efficiently and generate meaningful project insights for stakeholders.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
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
        title: "Advanced Project Scheduling",
        description: "Learn how to manage complex schedules, dependencies, and project timelines using advanced scheduling techniques."
      },
      {
        title: "Resource Optimization",
        description: "Understand how to allocate, balance, and level resources to prevent over-allocation and ensure efficient project execution."
      },
      {
        title: "Project Baselines and Tracking",
        description: "Learn how to create project baselines and track performance against planned schedules and budgets."
      },
      {
        title: "Advanced Data Analysis",
        description: "Use Microsoft Project’s analytical tools to monitor project performance and make data-driven decisions."
      },
      {
        title: "Reporting and Visualization",
        description: "Generate professional reports and dashboards to communicate project progress clearly to stakeholders."
      },
      {
        title: "Integration with Other Tools",
        description: "Learn how to export and integrate project data with tools such as Microsoft Excel and Access for advanced reporting and analysis."
      }
    ],
    benefits: [
      {
        title: "Skill Upgrade",
        description: "Acquire advanced knowledge of Microsoft Project 2013 to manage complex projects efficiently and confidently."
      },
      {
        title: "Task Mastery",
        description: "Learn how to organize, link, and manage project tasks to improve planning accuracy and project outcomes."
      },
      {
        title: "Resource Efficiency",
        description: "Manage people, materials, and equipment effectively to avoid resource conflicts and delays."
      },
      {
        title: "Clear Reporting",
        description: "Prepare professional reports that keep stakeholders informed and support better decision-making."
      },
      {
        title: "Smooth Transition",
        description: "Upgrade easily from previous versions such as Microsoft Project 2010 and learn the enhanced capabilities of Project 2013."
      }
    ],
    modules: [
      {
        title: "Course content:",
        duration: "8 topics",
        lectures: [
          { title: "Advanced Microsoft Project Usage" },
          { title: "Project Data Analysis" },
          { title: "Mastering Advanced Access Features" },
          { title: "Efficient Navigation in MS Project" },
          { title: "Project Management" },
          { title: "Mastering Excel Features" },
          { title: "Exporting and Importing Projects" },
          { title: "Project Reporting Techniques" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "It is recommended that learners have a basic understanding of Microsoft Project 2013 or earlier versions. Familiarity with project management concepts will help in understanding advanced features more effectively."
    },
    faqs: [
      {
        question: "1. Who should attend the Microsoft Project 2013 advanced course?",
        answer: "This course is perfect for team leaders, planners, and professionals who already use Microsoft Project and want to learn advanced features for managing complex projects."
      },
      {
        question: "2. What topics are covered in this Microsoft Project 2013 advanced online course?",
        answer: "You will explore advanced scheduling features, budgeting, resource management, baselines, customized views, project data analysis, and integration with Excel and Access."
      },
      {
        question: "3. Do I need prior experience with Microsoft Project?",
        answer: "Yes, a basic understanding of Microsoft Project is recommended to effectively learn advanced techniques."
      },
      {
        question: "4. How does the Microsoft Project 2013 Advanced Course differ from the Basic Course?",
        answer: "The Basic Course focuses on creating task lists, assigning resources, and generating simple reports, while the Advanced Course covers complex scheduling, baseline tracking, resource leveling, cost management, and custom reporting."
      },
      {
        question: "5. What skills will I gain after completing this course?",
        answer: "You will gain the ability to manage complex projects, perform project data analysis, optimize resources, and create advanced reports."
      },
      {
        question: "6. Will I get a certification?",
        answer: "Yes, you will receive a course completion certificate from Viovn."
      },
      {
        question: "7. What is the length of this class?",
        answer: "This is a 4-hour online recorded video course."
      },
      {
        question: "8. Can this course assist me in preparing for certifications in other fields?",
        answer: "Yes, the skills gained in project planning, scheduling, and reporting support preparation for certifications such as PMP®, CAPM®, and PRINCE2®."
      },
      {
        question: "9. Does this course help my career further?",
        answer: "Yes, advanced Microsoft Project skills improve project planning capabilities and strengthen your profile for senior project management roles."
      }
    ],
    whoCanBuy: [
      "Project Managers",
      "Project Coordinators",
      "Team Leaders",
      "Project Planners",
      "Business Analysts",
      "PMO Professionals",
      "Professionals already using Microsoft Project",
      "Anyone looking to master advanced project planning tools"
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

export default MicrosoftProject2013AdvancedCourse;
