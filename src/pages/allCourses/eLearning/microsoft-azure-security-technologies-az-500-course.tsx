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

const MicrosoftAzureSecurityTechnologiesAZ500Course = () => {
  const courseData = {
    courseName: "Microsoft Azure Security Technologies AZ-500 Course",
    rating: "4.9",
    enrolledCount: "1.5k+",
    duration: "26.5Hrs",
    level: "Advanced",
    description: "The Microsoft Azure Security Technologies AZ-500 course prepares professionals to secure Azure cloud environments and protect organizational resources. This course focuses on implementing security controls, managing identities and access, protecting data, and maintaining the overall security posture of Azure services. Participants will gain hands-on experience with Azure security tools such as Azure Security Center, Azure Monitor, RBAC, and Azure Active Directory. The training also prepares learners for the Microsoft Certified: Azure Security Engineer Associate (AZ-500) certification exam.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "1 Day 2 Hrs 30 Minutes Course Duration", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Interactive Learning Modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Self-Paced Video Lessons", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "AZ-500 Exam Preparation Strategies", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Hands-On Practice With Azure Tools", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" }
    ],
    sidePanelInclusions: [
      "1 Day 2 Hrs 30 Minutes Course Duration",
      "Interactive Learning Modules",
      "Self-Paced Video Lessons",
      "AZ-500 Exam Preparation Strategies",
      "Hands-On Practice With Azure Tools"
    ],
    outcomes: [
      {
        title: "Manage Identity and Access",
        description: "Learn how to configure Azure Active Directory, manage identities, and implement role-based access control (RBAC) for secure cloud access."
      },
      {
        title: "Implement Platform Protection",
        description: "Understand how to secure Azure infrastructure using tools such as Azure Security Center, DDoS Protection, and network security controls."
      },
      {
        title: "Secure Data and Storage",
        description: "Learn best practices to protect Azure storage accounts, encrypt data, and manage access to sensitive cloud resources."
      },
      {
        title: "Manage Security Operations",
        description: "Use Azure Monitor and other security tools to detect threats, create alerts, and maintain the security posture of Azure environments."
      },
      {
        title: "Implement Backup and Recovery",
        description: "Configure Azure Backup and Site Recovery to protect critical workloads and ensure business continuity."
      },
      {
        title: "Governance and Compliance",
        description: "Understand compliance requirements and security governance practices to ensure Azure environments follow organizational policies."
      }
    ],
    benefits: [
      {
        title: "Career Growth",
        description: "Improve your professional profile and qualify for higher-paying roles in cloud security."
      },
      {
        title: "Practical Skills",
        description: "Learn security concepts through hands-on practice that directly applies to real-world Azure environments."
      },
      {
        title: "Global Recognition",
        description: "Earn a Microsoft certification that is highly valued by organizations worldwide."
      },
      {
        title: "Job Security",
        description: "Develop critical security skills that are highly demanded in today’s cloud-driven job market."
      },
      {
        title: "Cloud Expertise",
        description: "Master techniques for securing Azure services, applications, and infrastructure supporting business digital transformation."
      }
    ],
    modules: [
      {
        title: "Course content:",
        duration: "11 topics",
        lectures: [
          { title: "Azure Fundamentals" },
          { title: "Implement Azure AD Identities and RBAC" },
          { title: "Configure Azure Security Center and DDoS Protection" },
          { title: "Utilize Azure Security Center Console" },
          { title: "Implement Security Technologies" },
          { title: "Set Up Azure Backup and Site Recovery" },
          { title: "Secure Azure Storage" },
          { title: "Scale Azure Applications" },
          { title: "Create Custom Alerts in Azure Monitor" },
          { title: "Ensure Microsoft 365 Compliance" },
          { title: "Manage Microsoft 365 Security" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "Learners are recommended to complete AZ-104 and gain hands-on Azure experience before attempting AZ-500. A basic understanding of Azure Active Directory, networking, storage, and security concepts is beneficial. Prior completion of AZ-900 certification is helpful but not mandatory."
    },
    faqs: [
      {
        question: "1. What is the AZ 500 certification?",
        answer: "The AZ-500 certification verifies your ability to secure Azure resources, manage identities, and implement compliance and security controls."
      },
      {
        question: "2. What is the AZ 500 certification official name?",
        answer: "The official certification name is Microsoft Certified: Azure Security Engineer Associate."
      },
      {
        question: "3. What is the AZ-500 course about?",
        answer: "The course covers identity management, platform protection, data security operations, and governance in Azure environments."
      },
      {
        question: "4. What does the Microsoft AZ-500 certification exam measure?",
        answer: "The exam measures skills in implementing security controls, maintaining security posture, and protecting Azure resources."
      },
      {
        question: "5. Who is considered AZ-500 certified?",
        answer: "Anyone who successfully passes the AZ-500 exam and earns the Azure Security Engineer Associate certification."
      },
      {
        question: "6. How long is the AZ-500 exam?",
        answer: "The exam typically lasts around 100 minutes and evaluates skills related to securing identities, networks, compute, storage, and compliance."
      },
      {
        question: "7. How often must I renew this certification?",
        answer: "Microsoft certifications like AZ-500 require renewal every 12 months to stay current with evolving Azure technologies."
      },
      {
        question: "8. Who should attend this course?",
        answer: "Azure security engineers, IT administrators, and professionals responsible for managing and securing cloud environments."
      },
      {
        question: "9. What skills will I gain from this training?",
        answer: "You will learn how to secure Azure storage, manage identity access, configure monitoring and alerts, and implement cloud security best practices."
      },
      {
        question: "10. What is the cost of the AZ-500 certification exam?",
        answer: "The exam typically costs around $165 USD, although pricing may vary depending on the country or region."
      }
    ],
    whoCanBuy: [
      "Azure Security Engineers",
      "Cloud Security Professionals",
      "IT Administrators",
      "System Administrators",
      "Network Security Engineers",
      "Cloud Architects",
      "DevOps Engineers working with Azure",
      "Professionals preparing for AZ-500 certification"
    ],
    reviews: [
      {
        name: "David Wilson",
        role: "Cloud Security Engineer",
        rating: 5,
        content: "An excellent deep dive into Azure security. The hands-on components were particularly helpful for understanding the practical implementation of RBAC and Security Center.",
        date: "3 weeks ago"
      },
      {
        name: "Elena Rodriguez",
        role: "IT Security Manager",
        rating: 5,
        content: "Comprehensive coverage of AZ-500 topics. Helped me pass the exam on my first attempt. Highly recommended for any Azure professional.",
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

export default MicrosoftAzureSecurityTechnologiesAZ500Course;
