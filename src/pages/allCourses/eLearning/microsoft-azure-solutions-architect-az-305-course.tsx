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

const MicrosoftAzureSolutionsArchitectAZ305Course = () => {
  const courseData = {
    courseName: "Designing Microsoft Azure Infrastructure Solutions (AZ-305) Course",
    rating: "4.9",
    enrolledCount: "1.2k+",
    duration: "19Hrs",
    level: "Advanced",
    description: "The Designing Microsoft Azure Infrastructure Solutions (AZ-305) course prepares professionals to design secure, scalable, and reliable cloud solutions using Microsoft Azure. This training focuses on key architecture concepts such as identity management, governance, networking, compute resources, storage solutions, and disaster recovery strategies. Participants will learn how to architect cloud infrastructure that meets performance, security, and cost optimization requirements. The course is aligned with Microsoft’s AZ-305 certification exam objectives and helps learners gain the skills needed to become a Microsoft Certified Azure Solutions Architect.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 398",
      discounted: "USD 199",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "19 hrs of Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Interactive Learning Modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Self-Paced Course, Learn Anytime", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" },
      { text: "Lifetime Access to All Learning Materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991231.png" },
      { text: "24/7 Learning Support Team", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" }
    ],
    sidePanelInclusions: [
      "19 hrs of Video Content",
      "Interactive Learning Modules",
      "Self-Paced Course, Learn Anytime",
      "Lifetime Access to All Learning Materials",
      "24/7 Learning Support Team"
    ],
    outcomes: [
      {
        title: "Design Azure Infrastructure Solutions",
        description: "Learn how to design scalable and secure Azure infrastructure solutions that meet business requirements."
      },
      {
        title: "Identity and Access Management",
        description: "Understand how to implement Azure Active Directory, RBAC, and identity governance for secure access control."
      },
      {
        title: "Networking and Hybrid Connectivity",
        description: "Design secure virtual networks, hybrid cloud connectivity, VPNs, and load balancing solutions."
      },
      {
        title: "High Availability and Disaster Recovery",
        description: "Plan architectures that ensure business continuity through redundancy, failover, and disaster recovery strategies."
      },
      {
        title: "Data Storage and Security",
        description: "Design storage solutions and implement data protection, encryption, and compliance strategies."
      },
      {
        title: "Cost Optimization and Governance",
        description: "Learn to manage Azure costs effectively while implementing governance policies and compliance controls."
      }
    ],
    benefits: [
      {
        title: "Industry Ready Skills",
        description: "Build practical cloud design and architecture skills that you can apply in real projects from day one of your job."
      },
      {
        title: "Job-Ready Confidence",
        description: "Gain confidence to work as an Azure Solutions Architect and handle complex cloud infrastructure responsibilities."
      },
      {
        title: "High-Paying Roles",
        description: "Open doors to well-paid cloud architecture and engineering jobs across top companies and industries worldwide."
      },
      {
        title: "Certification Advantage",
        description: "Prepare effectively for the AZ-305 exam and strengthen your profile with a globally recognized Azure certification."
      },
      {
        title: "Better Cloud Decisions",
        description: "Learn to make smart decisions around performance, security, compliance, and cost in Azure solutions."
      }
    ],
    modules: [
      {
        title: "Course content:",
        duration: "19 topics",
        lectures: [
          { title: "Understand Azure Core Services" },
          { title: "Learn Identity and Access Control" },
          { title: "Design Secure Virtual Networks" },
          { title: "Build Scalable Compute Environments" },
          { title: "Plan Effective Storage Solutions" },
          { title: "Apply Governance and Policies" },
          { title: "Design Hybrid Cloud Connectivity" },
          { title: "Plan High-Availability Architecture" },
          { title: "Set Up Disaster Recovery Strategies" },
          { title: "Optimize Cloud Cost Efficiency" },
          { title: "Implement Data Protection Controls" },
          { title: "Practice Real Architecture Labs" },
          { title: "Architecting Azure Solutions" },
          { title: "Scaling Azure Applications" },
          { title: "Azure Cloud Deployment" },
          { title: "Configuring Azure Cloud Services" },
          { title: "Ensure Microsoft 365 Compliance" },
          { title: "Cloud Architecture Design" },
          { title: "AZ-305 Certification Exam Preparation" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "Learners should have a basic understanding of Azure services and cloud computing concepts. Experience with Azure administration (AZ-104) or similar cloud infrastructure knowledge is recommended but not mandatory."
    },
    faqs: [
      {
        question: "1. What is the Designing Microsoft Azure Infrastructure Solutions (AZ-305) course?",
        answer: "The Designing Microsoft Azure Infrastructure Solutions (AZ-305) course teaches you how to design secure, scalable, and reliable cloud systems on Microsoft Azure. It helps you learn cloud architecture skills like networking, security, storage, and identity, and prepares you for the Azure Solutions Architect certification exam."
      },
      {
        question: "2. Do I need prior Azure experience to join this course?",
        answer: "Basic Azure knowledge is helpful, but the course explains concepts clearly for all learners."
      },
      {
        question: "3. Will this course help me pass the AZ-305 exam?",
        answer: "Yes, it is designed to prepare you with concepts, labs, and practice guidance for the exam."
      },
      {
        question: "4. Is this course self-paced?",
        answer: "Yes, you can learn at your own pace with lifetime access to course materials."
      },
      {
        question: "5. Do I get hands-on practice?",
        answer: "Yes, the course includes practice labs, real architecture scenarios, and guided exercises."
      },
      {
        question: "6. Will I receive a certificate after completion?",
        answer: "Yes, you will receive a course completion certificate from Simpliaxis after finishing all modules."
      },
      {
        question: "7. Can beginners join this program?",
        answer: "Beginners can join, but having basic Azure or cloud knowledge will make learning easier."
      },
      {
        question: "8. Do I need an Azure subscription?",
        answer: "Yes, a free Azure account is enough for labs and practice."
      },
      {
        question: "9. Can I access lessons from mobile?",
        answer: "Yes, lessons and resources are accessible from desktop, laptop, and mobile devices."
      },
      {
        question: "10. Do I need programming knowledge?",
        answer: "No coding is required; focus is on architecture, infrastructure, and solution design."
      }
    ],
    whoCanBuy: [
      "Cloud Architects",
      "Azure Solutions Architects",
      "Cloud Engineers",
      "DevOps Engineers",
      "System Administrators",
      "IT Infrastructure Engineers",
      "Cloud Consultants",
      "Professionals preparing for AZ-305 certification"
    ],
    reviews: [
      {
        name: "David Chen",
        role: "Senior Cloud Architect",
        rating: 5,
        content: "An excellent deep dive into Azure architecture. The sections on high availability and disaster recovery were particularly insightful and provided real-world value.",
        date: "2 weeks ago"
      },
      {
        name: "Sarah Jenkins",
        role: "Solutions Architect",
        rating: 5,
        content: "Highly recommend for anyone pursuing AZ-305. The content is very comprehensive and up-to-date with current Microsoft best practices.",
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

export default MicrosoftAzureSolutionsArchitectAZ305Course;
