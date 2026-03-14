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

const AccreditedDevOpsFoundationCourse = () => {
  const courseData = {
    courseName: "Accredited DevOps Foundation Training Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "7.5Hrs",
    level: "Beginner",
    description: "The Accredited DevOps Foundation Training Course introduces learners to the core concepts, practices, and cultural principles of DevOps. This course explains how development and operations teams collaborate to deliver software faster, more reliably, and with improved quality. Participants will learn about DevOps lifecycle stages, Lean and Agile influences, DevOps culture, automation, DevSecOps practices, and the tools used to streamline software delivery. The training also prepares learners for the DevOps Foundation certification exam and equips them with practical knowledge to implement DevOps practices in modern IT environments.",
    heroImage: "https://images.unsplash.com/photo-1667372333374-0d74586d7af0?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2ee?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "7 hrs 30 mins Minutes of Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Interactive Learning Modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Self-Paced Video Lessons", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Hands-On Practice With DevOps Tools", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Lifetime Access to Course Content", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "7 hrs 30 mins Minutes of Video Content",
      "Interactive Learning Modules",
      "Self-Paced Video Lessons",
      "Hands-On Practice With DevOps Tools",
      "Lifetime Access to Course Content"
    ],
    outcomes: [
      {
        title: "DevOps Fundamentals",
        description: "Understand the core principles, lifecycle stages, and objectives of DevOps in modern software development and IT operations."
      },
      {
        title: "Lean and Agile Integration",
        description: "Learn how Lean manufacturing and Agile methodologies influence DevOps practices and improve software delivery pipelines."
      },
      {
        title: "DevOps Culture and Collaboration",
        description: "Explore how DevOps encourages collaboration between development and operations teams to build efficient and productive work environments."
      },
      {
        title: "DevSecOps Practices",
        description: "Understand how to integrate security into DevOps pipelines by applying DevSecOps principles throughout the development lifecycle."
      },
      {
        title: "DevOps Tools and Automation",
        description: "Learn about automation tools and platforms such as AWS DevOps and Azure DevOps used to streamline CI/CD and infrastructure management."
      },
      {
        title: "DevOps Implementation Strategies",
        description: "Gain insights into implementing DevOps practices within organizations to improve productivity, reliability, and software delivery speed."
      }
    ],
    benefits: [
      {
        title: "Strong Foundation",
        description: "Develop a thorough grasp of DevOps concepts and principles of Lean and Agile to make them practical for workplace applications."
      },
      {
        title: "Cultural Shift",
        description: "Learn how to encourage cooperation, teamwork, and trust through establishing an empowering DevOps culture."
      },
      {
        title: "Security Focus",
        description: "Learn about DevSecOps to incorporate security practices early in development and operational procedures."
      },
      {
        title: "Tool Mastery",
        description: "Know AWS as well as Azure DevOps tools to automate workflows and increase the efficiency of cloud-based projects."
      },
      {
        title: "Practical Integration",
        description: "Find out the ways DevOps integrates automation, data, and the real-world needs of business to achieve greater impact."
      }
    ],
    modules: [
      {
        title: "Course Content:",
        duration: "19 topics",
        lectures: [
          { title: "Tracing the Historical Context" },
          { title: "Development Phases of DevOps" },
          { title: "Exploring How Lean Manufacturing Principles Influence DevOps" },
          { title: "Influence of Agile Methodologies in DevOps" },
          { title: "Detailing the Fundamental Principles" },
          { title: "Successful DevOps Implementations" },
          { title: "Analyzing the Challenges Inherent in DevOps Practices" },
          { title: "Strategies for Overcoming Them" },
          { title: "Discussing How DevOps Impacts Organizational Structure" },
          { title: "DevOps Impacts on Technological Architecture" },
          { title: "Practice Exam Questions" },
          { title: "DevOps Foundation Exam Guidance" },
          { title: "Implementing DevOps Principles" },
          { title: "Implementing DevOps Culture" },
          { title: "Implementing DevSecOps" },
          { title: "Implementing AWS DevOps Tools" },
          { title: "Integrating Data and DevOps" },
          { title: "Azure DevOps Implementation" },
          { title: "DevOps Automation" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "There are no mandatory prerequisites for this course. Basic knowledge of IT concepts, software development, or cloud computing can help learners understand DevOps concepts more easily."
    },
    faqs: [
      {
        question: "1. What does this Accredited DevOps Foundation course mean?",
        answer: "It's a basic program that provides DevOps practices, principles, tools, and actual applications within organizations."
      },
      {
        question: "2. Who should attend this course?",
        answer: "IT professionals, as well as developers, system administrators, project managers, and all those interested in DevOps methods."
      },
      {
        question: "3. What are the outcomes for learning from this course?",
        answer: "You will be taught how to apply DevOps principles, apply Lean and Agile methods, and prepare yourself to take the DevOps Foundation certification exam confidently."
      },
      {
        question: "4. What is the duration of the course?",
        answer: "This course has 7 hours and 30 minutes of an expert video recorded online course."
      },
      {
        question: "5. What are the skills I can acquire?",
        answer: "You will develop abilities in DevOps practices, DevSecOps, automation, AWS tools, Azure DevOps, and data integration."
      },
      {
        question: "6. Do I require any pre-eligibility criteria?",
        answer: "No. There aren't any prerequisites for anyone who wants to take this class."
      },
      {
        question: "7. What will this course have on my career?",
        answer: "It increases your knowledge and helps you prepare for DevOps positions, and expands your chances of employment in IT and cloud."
      },
      {
        question: "8. What kind of exam preparation does this course provide?",
        answer: "It also includes real DevOps Foundation exam-style questions and a guideline to help you prepare for the DevOps Foundation certification."
      },
      {
        question: "9. How many questions are in the exam?",
        answer: "The test has 40 multiple-choice questions."
      },
      {
        question: "10. What's the format for the exam?",
        answer: "It's a multiple-choice, open-book test."
      }
    ],
    whoCanBuy: [
      "Software Developers",
      "System Administrators",
      "DevOps Engineers",
      "Cloud Engineers",
      "IT Professionals",
      "Project Managers",
      "Quality Assurance Engineers",
      "Anyone interested in learning DevOps practices"
    ],
    reviews: [
      {
        name: "John Smith",
        role: "Release Manager",
        rating: 5,
        content: "A fantastic introduction to DevOps culture. The sections on Lean principles were particularly eye-opening.",
        date: "2 weeks ago"
      },
      {
        name: "Maria Garcia",
        role: "Systems Analyst",
        rating: 5,
        content: "Highly clear and structured content. The practice questions were very similar to the actual foundation exam.",
        date: "1 month ago"
      }
    ],
    relatedCourses: [
      {
        title: "AWS Certified DevOps Engineer - Professional",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2ee?auto=format&fit=crop&q=80&w=400",
        price: "USD 199",
        rating: "4.9"
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

export default AccreditedDevOpsFoundationCourse;
