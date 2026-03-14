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

const MicrosoftPowerBISkillsCourse = () => {
  const courseData = {
    courseName: "Microsoft Power BI Skills Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "6Hrs",
    level: "Beginner",
    description: "The Microsoft Power BI Skills eLearning Course from Simpliaxis helps learners transform raw data into meaningful dashboards, reports, and visual insights for business decision-making. Through practical exercises and guided lessons, participants will learn Power Query, data modeling, advanced BI tools, and data visualization techniques. This course is suitable for both beginners and professionals who want to strengthen their data analysis skills, interpret business data effectively, and create powerful Power BI reports that support informed decision-making.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "6 hours of video learning", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Module-wise lessons and quizzes", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Hands-on Power BI tools and features", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Data modeling and visualization techniques", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Power Query and BI functions", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "6 hours of video learning",
      "Module-wise lessons and quizzes",
      "Hands-on Power BI tools and features",
      "Data modeling and visualization techniques",
      "Power Query and BI functions"
    ],
    outcomes: [
      {
        title: "Power BI Fundamentals",
        description: "Understand the core features of Microsoft Power BI and learn how to use the platform to build data-driven reports and dashboards."
      },
      {
        title: "Data Transformation with Power Query",
        description: "Learn how to clean, transform, and prepare raw data using Power Query for accurate analysis and reporting."
      },
      {
        title: "Data Modeling Techniques",
        description: "Understand how to design efficient data models and relationships that help improve report performance and analytical capabilities."
      },
      {
        title: "Interactive Dashboard Creation",
        description: "Learn how to build visually appealing dashboards that present insights clearly and support business decision-making."
      },
      {
        title: "Advanced BI Functions",
        description: "Explore intermediate and advanced Power BI features used to perform deeper data analysis and generate meaningful insights."
      },
      {
        title: "Business Data Analysis",
        description: "Develop analytical skills that allow you to interpret business data and convert it into actionable insights."
      }
    ],
    benefits: [
      {
        title: "Build Job-Ready Skills",
        description: "Develop practical Power BI skills that are highly valued in data-driven organizations and can be applied in real-world reporting tasks."
      },
      {
        title: "Enhance Data Confidence",
        description: "Gain the confidence to analyze, interpret, and present complex datasets effectively using modern BI tools."
      },
      {
        title: "Create Impactful Dashboards",
        description: "Learn to design visually engaging and interactive dashboards that communicate insights clearly to stakeholders."
      },
      {
        title: "Boost Career Growth",
        description: "Acquire high-demand business intelligence skills that can open new career opportunities in analytics and reporting roles."
      },
      {
        title: "Stay Ahead in Analytics",
        description: "Understand modern business intelligence technologies and stay competitive in today’s data-driven business environment."
      }
    ],
    modules: [
      {
        title: "Course Outline",
        duration: "7 topics",
        lectures: [
          { title: "Mastering Power BI" },
          { title: "Using Power BI Desktop" },
          { title: "Performing Business Intelligence Analysis" },
          { title: "Creating Tabular Data Models" },
          { title: "Transforming Data with Power Query" },
          { title: "Intermediate Power BI Functions" },
          { title: "Excel Data Analysis Integration" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "No prior Power BI experience is required to enroll in this course. However, basic knowledge of Excel and general data concepts can help learners understand the material more easily."
    },
    faqs: [
      {
        question: "1. Who can attend the Microsoft Power BI Skills training?",
        answer: "Professionals, analysts, students, managers, or anyone interested in learning how to analyze, visualize, and share data effectively using Power BI."
      },
      {
        question: "2. Do I require previous knowledge to join this course?",
        answer: "No prior Power BI experience is required. However, familiarity with Excel and basic data concepts can help you learn more quickly."
      },
      {
        question: "3. How long is the Microsoft Power BI Skills course?",
        answer: "The course includes approximately six hours of structured video lessons along with quizzes and practical exercises."
      },
      {
        question: "4. What skills will I gain from this course?",
        answer: "You will learn data modeling, data visualization, dashboard creation, Power Query usage, and advanced BI functions for effective data analysis."
      },
      {
        question: "5. Will this course help my career?",
        answer: "Yes, Power BI skills are in high demand in data analytics and business intelligence roles, making this course valuable for career growth."
      },
      {
        question: "6. Is this course delivered as a live session?",
        answer: "No, the course is delivered through recorded video modules with guided exercises for flexible self-paced learning."
      },
      {
        question: "7. What topics are included in this course?",
        answer: "Topics include Power BI fundamentals, data visualization, data modeling, Power Query, dashboard design, and advanced BI functions."
      },
      {
        question: "8. Can this course help me get jobs in analytics or BI?",
        answer: "Yes, the course strengthens your business intelligence and data visualization skills, which are highly valued in analytics roles."
      },
      {
        question: "9. Can I access the course anytime?",
        answer: "Yes, the course is available on-demand, allowing you to learn anytime at your own pace."
      },
      {
        question: "10. Will I receive a certificate after completion?",
        answer: "Yes, you will receive a Simpliaxis Course Completion Certificate after successfully finishing the Power BI Skills course."
      }
    ],
    whoCanBuy: [
      "Data Analysts",
      "Business Analysts",
      "Students interested in data analytics",
      "Managers and decision makers",
      "IT professionals",
      "Excel users who want to learn Power BI",
      "Professionals working with data reports",
      "Anyone interested in business intelligence tools"
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

export default MicrosoftPowerBISkillsCourse;
