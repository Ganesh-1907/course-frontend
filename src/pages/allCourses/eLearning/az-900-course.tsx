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

const MicrosoftAzureFundamentalsCourse = () => {
  const courseData = {
    courseName: "Microsoft Azure Fundamentals (AZ-900) Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "7Hrs",
    level: "Beginner",
    description: "The Microsoft Azure Fundamentals (AZ-900) course is an entry-level certification program designed for individuals who want to understand the basics of cloud computing and Azure cloud services. This course provides a foundational overview of cloud concepts and the Microsoft Azure platform, helping learners explore Azure services and tools. Participants will learn about key Azure features such as virtual machines, storage solutions, networking services, and other essential components of the Azure ecosystem.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "7 hours of video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Learning materials overview", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Study plan and preparation guidance", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "7 hours of video content",
      "Learning materials overview",
      "Study plan and preparation guidance",
      "Accessible on any device",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Comprehend Azure Services:",
        description: "Develop a strong understanding of Azure services such as computing, storage, networking, databases, and analytics, enabling organizations to build, deploy, and manage applications efficiently."
      },
      {
        title: "Create and Manage Azure Resources:",
        description: "Learn how to use the Azure Portal and Azure CLI to create, configure, and manage cloud resources while supporting IT and cloud infrastructure operations."
      },
      {
        title: "Understand Azure Governance:",
        description: "Gain knowledge of governance tools, policies, and processes used to manage and control Azure environments while ensuring compliance with organizational standards."
      },
      {
        title: "Monitor and Troubleshoot Azure Resources:",
        description: "Learn how to monitor Azure services, identify performance issues, and troubleshoot problems using Azure monitoring and diagnostic tools."
      },
      {
        title: "Understand Azure Security and Compliance:",
        description: "Explore the security and compliance capabilities of Azure, including identity management, data protection, and security policies used to safeguard cloud resources."
      },
      {
        title: "Understand Azure Pricing and Support:",
        description: "Learn how Azure pricing works under the pay-as-you-go model and understand factors such as service usage, location, and support plans that influence the overall cost of cloud services."
      }
    ],
    benefits: [
      {
        title: "Effective Problem Resolution:",
        description: "The course helps professionals understand how to handle dynamic workloads in the cloud and adjust resources efficiently to optimize performance and costs."
      },
      {
        title: "Career and Salary Growth:",
        description: "Microsoft Azure Fundamentals certification enhances professional credibility and can increase career opportunities and earning potential in the cloud computing domain."
      },
      {
        title: "Skill Development:",
        description: "The course helps learners strengthen their cloud computing knowledge and demonstrate their technical capabilities in Azure technologies."
      },
      {
        title: "Strong Foundation in Cloud Computing:",
        description: "Azure Fundamentals provides a solid foundation for understanding cloud technologies and serves as a starting point before pursuing advanced Azure certifications."
      },
      {
        title: "Pathway to Advanced Certifications:",
        description: "After completing this course, learners can move on to associate-level Azure certifications and expand their expertise in cloud computing."
      }
    ],
    modules: [
      {
        title: "Course Outline",
        duration: "1 topics",
        lectures: [
          { title: "Microsoft Azure Fundamentals (AZ-900)" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "There are no mandatory prerequisites for this course. However, having basic familiarity with IT concepts and terminology can help learners understand the material more easily."
    },
    faqs: [
      {
        question: "1. What will you learn in the Microsoft Azure Fundamentals (AZ-900) course?",
        answer: "This course introduces key cloud computing concepts along with Azure services such as storage, networking, security, IoT, and machine learning."
      },
      {
        question: "2. What is the main goal of the Microsoft Azure Fundamentals AZ-900 course?",
        answer: "The main goal of the course is to help learners understand cloud computing fundamentals, explore Azure services, and gain knowledge about security, privacy, compliance, and pricing in the Azure environment."
      },
      {
        question: "3. What skills will you develop through this course?",
        answer: "Participants will gain knowledge of Azure fundamentals, cloud service models, configuring Azure resources, and understanding how cloud platforms such as Azure support scalable applications."
      },
      {
        question: "4. What will you gain from the Microsoft Azure Fundamentals certification course?",
        answer: "Learners will understand the key benefits of Azure cloud services, including virtual machines, storage, networking, security features, and Azure monitoring and management tools."
      },
      {
        question: "5. Is the Microsoft Azure Fundamentals course worth it?",
        answer: "Yes, the course covers essential cloud computing concepts such as IaaS, PaaS, and SaaS, making it an excellent starting point for individuals looking to build a career in cloud computing."
      }
    ],
    whoCanBuy: [
      "IT professionals",
      "Students or beginners interested in Azure",
      "Non-technical professionals exploring cloud computing",
      "Database professionals",
      "Software developers",
      "Anyone interested in cloud technologies",
      "Existing Azure users",
      "Marketing professionals working with cloud solutions"
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

export default MicrosoftAzureFundamentalsCourse;
