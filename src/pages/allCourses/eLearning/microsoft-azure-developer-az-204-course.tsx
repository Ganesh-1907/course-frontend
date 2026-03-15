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

const MicrosoftAzureDeveloperAZ204Course = () => {
  const courseData = {
    courseName: "Developing Solutions for Microsoft Azure (AZ-204) Course",
    rating: "4.8",
    enrolledCount: "1.4k+",
    duration: "14.5Hrs",
    level: "Intermediate",
    description: "Are you passionate about building secure, scalable cloud applications and becoming a certified Azure Developer? This AZ-204 course by Viovn helps you master Azure app development, APIs, storage, identity, containers, serverless functions, and deployment, aligned with Microsoft’s exam objectives. Gain hands-on skills, real project confidence, and land in a higher-pay cloud computing field. Let’s start your Azure Developer learning path today. Enroll Now!",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "14 hrs 30 mins of Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Interactive Learning Modules & Labs", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Self-Paced Course, Learn Anytime", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" },
      { text: "Lifetime Access to All Learning Materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991231.png" },
      { text: "24/7 Learning Support", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" }
    ],
    sidePanelInclusions: [
      "14 hrs 30 mins of Video Content",
      "Interactive Learning Modules & Labs",
      "Self-Paced Course, Learn Anytime",
      "Lifetime Access to All Learning Materials",
      "24/7 Learning Support"
    ],
    outcomes: [
      {
        title: "Azure Application Development",
        description: "Build and deploy scalable cloud applications using Azure App Services, Azure Functions, and containerized workloads."
      },
      {
        title: "Azure Storage Solutions",
        description: "Learn to implement Azure storage services including Blob storage, Cosmos DB, and database solutions for modern applications."
      },
      {
        title: "API Development and Integration",
        description: "Create, manage, and secure APIs using Azure API Management and integrate them into enterprise applications."
      },
      {
        title: "Identity and Security Implementation",
        description: "Implement authentication, authorization, and identity management using Azure Active Directory and conditional access."
      },
      {
        title: "Monitoring and Troubleshooting",
        description: "Use Azure monitoring tools to track application performance, diagnose issues, and maintain reliable cloud systems."
      },
      {
        title: "Event-Driven and Serverless Solutions",
        description: "Develop event-driven applications using Azure Event Grid, Service Bus, and serverless compute services."
      }
    ],
    benefits: [
      {
        title: "Learn Exactly What the Exam Covers",
        description: "Study all AZ-204 exam-related domains with a structured, Microsoft-outlined course roadmap."
      },
      {
        title: "Hands-On Labs for Real Azure Skills",
        description: "Practice live Azure deployments, security, APIs, and monitoring, not just boring theory explanations."
      },
      {
        title: "Build Confidence for Real Exam Scenarios",
        description: "Work on tasks similar to exam questions so you know what to expect on test day."
      },
      {
        title: "Master Core Azure Tools & Services",
        description: "Use Azure CLI, PowerShell, Functions, Storage, and App Services to build real solutions."
      },
      {
        title: "Improve Your Cloud Problem-Solving Ability",
        description: "Develop skills to troubleshoot apps, optimize performance, and secure cloud workloads, key exam focus."
      }
    ],
    modules: [
      {
        title: "Course outline",
        duration: "20 topics",
        lectures: [
          { title: "Introduction to Azure Development" },
          { title: "Managing Azure Subscriptions and Resources" },
          { title: "Azure Identity and Access Management" },
          { title: "Implementing Azure Storage Solutions" },
          { title: "Developing Solutions Using Cosmos DB" },
          { title: "Developing Azure Compute Solutions" },
          { title: "Implementing Secure Cloud Solutions" },
          { title: "Developing Event-Driven Solutions" },
          { title: "Building Message-Based Applications" },
          { title: "API Development and Integration" },
          { title: "Implementing Containerized Solutions" },
          { title: "Azure Monitoring and Troubleshooting" },
          { title: "Optimizing and Scaling Azure Applications" },
          { title: "Azure Governance and Compliance" },
          { title: "Final Capstone Lab" },
          { title: "Architecting Azure Solutions" },
          { title: "Azure API Development" },
          { title: "Configuring Azure Cloud Services" },
          { title: "Using Azure CLI" },
          { title: "Implementing Conditional Access" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "Learners should have basic knowledge of programming concepts and familiarity with cloud computing principles. Experience with Azure fundamentals (AZ-900) and understanding of REST APIs, containers, or DevOps practices can be beneficial but is not mandatory."
    },
    faqs: [
      {
        question: "1. What is the AZ-204 certification?",
        answer: "The AZ-204 certification validates your ability to develop, deploy, and maintain cloud applications using Microsoft Azure services, including storage, compute, networking, security, APIs, and monitoring tools."
      },
      {
        question: "2. Who should take this AZ-204 course?",
        answer: "This course is ideal for cloud developers, software engineers, DevOps professionals, and IT administrators who want hands-on skills in building and managing Azure-based applications."
      },
      {
        question: "3. What skills will I gain from this course?",
        answer: "You will learn to manage Azure resources, build secure applications, deploy virtual machines, work with Azure storage, implement identity and access controls, and monitor cloud environments effectively."
      },
      {
        question: "4. How long is the course, and what is the format?",
        answer: "The course includes 14 hours and 30 minutes of content, covering essential Azure development and management topics with guided practice for real-world implementation and exam readiness."
      },
      {
        question: "5. Does this course help me prepare for the AZ-204 exam?",
        answer: "Yes. The curriculum is aligned with Microsoft’s exam objectives, offering hands-on labs, practical scenarios, and core concepts to help you confidently clear the AZ-204 certification exam."
      }
    ],
    whoCanBuy: [
      "Cloud Developers",
      "Software Engineers",
      "Azure Developers",
      "DevOps Engineers",
      "Application Developers",
      "IT Professionals working with Azure",
      "System Administrators",
      "Professionals preparing for AZ-204 certification"
    ],
    reviews: [
      {
        name: "Kevin Peterson",
        role: "Cloud Developer",
        rating: 5,
        content: "Excellent labs! The hands-on part with Azure Functions and Cosmos DB was exactly what I needed to understand cloud integration patterns.",
        date: "3 weeks ago"
      },
      {
        name: "Jane Smith",
        role: "Software Engineer",
        rating: 5,
        content: "The content is very well aligned with the AZ-204 exam. The sections on monitoring and identity management were particularly useful.",
        date: "1 month ago"
      }
    ],
    relatedCourses: [
      {
        title: "Microsoft Azure Administrator (AZ-104)",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=400",
        price: "USD 149",
        rating: "4.8"
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

export default MicrosoftAzureDeveloperAZ204Course;
