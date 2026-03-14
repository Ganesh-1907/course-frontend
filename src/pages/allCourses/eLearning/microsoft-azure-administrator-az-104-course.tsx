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

const MicrosoftAzureAdministratorCourse = () => {
  const courseData = {
    courseName: "Microsoft Azure Administrator (AZ-104) Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "27Hrs",
    level: "Intermediate",
    description: "The Microsoft Azure Administrator (AZ-104) course prepares learners for the Azure Administrator role by teaching how to manage, monitor, and maintain Azure environments. The course covers essential skills such as managing Azure resources, configuring virtual networks, deploying compute services, handling storage solutions, and implementing identity and governance controls. After completing the course and passing the certification exam, learners will be able to effectively manage Azure infrastructure, secure cloud environments, and support enterprise cloud operations.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "27 hours of video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Self-paced video learning modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "AZ-104 exam preparation guide", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Lifetime access to course content", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "24/7 customer support", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "27 hours of video content",
      "Self-paced video learning modules",
      "AZ-104 exam preparation guide",
      "Lifetime access to course content",
      "24/7 customer support"
    ],
    outcomes: [
      {
        title: "Manage Azure Identities and Governance",
        description: "Learn how to manage Azure Active Directory users, groups, roles, and implement governance using policies and role-based access control (RBAC)."
      },
      {
        title: "Implement and Manage Azure Storage",
        description: "Understand how to configure Azure storage accounts, Blob storage, file storage, and manage redundancy and data security."
      },
      {
        title: "Deploy and Manage Azure Compute Resources",
        description: "Learn how to deploy and manage Azure Virtual Machines, App Services, and other compute resources for cloud applications."
      },
      {
        title: "Configure Virtual Networking",
        description: "Gain skills to design and configure Azure Virtual Networks, VPN gateways, and connectivity services like ExpressRoute."
      },
      {
        title: "Monitor Azure Resources",
        description: "Understand how to monitor system performance, configure alerts, and use Azure monitoring tools to ensure reliable cloud operations."
      },
      {
        title: "Secure Azure Environments",
        description: "Learn security best practices, including identity protection, network security, and governance policies for protecting Azure resources."
      }
    ],
    benefits: [
      {
        title: "Career Advancement",
        description: "Achieving the AZ-104 certification strengthens your professional profile and opens opportunities for cloud administration roles worldwide."
      },
      {
        title: "Professional Recognition",
        description: "Earn global recognition as a Microsoft Certified Azure Administrator Associate and validate your expertise in managing cloud environments."
      },
      {
        title: "In-Demand Skills",
        description: "Develop essential skills in Azure resource management, networking, storage, and identity management that are highly valued in the cloud industry."
      },
      {
        title: "Higher Salary Potential",
        description: "Certified Azure Administrators often receive competitive salaries due to the growing demand for skilled cloud professionals."
      },
      {
        title: "Hands-On Knowledge",
        description: "Gain practical knowledge through real-world examples and hands-on exercises that prepare you for managing Azure infrastructure in professional environments."
      }
    ],
    modules: [
      {
        title: "Microsoft Azure Administrator (AZ-104) Part 1",
        duration: "5 topics",
        lectures: [
          { title: "Introduction to Azure administration" },
          { title: "Managing Azure subscriptions and resources" },
          { title: "Implementing Role-Based Access Control (RBAC)" },
          { title: "Monitoring and reporting Azure usage" },
          { title: "Azure governance fundamentals" }
        ]
      },
      {
        title: "Microsoft Azure Administrator (AZ-104) Part 2",
        duration: "8 topics",
        lectures: [
          { title: "Azure Blob Storage" },
          { title: "Azure Files" },
          { title: "Storage accounts and redundancy options" },
          { title: "Azure Virtual Machines (VMs)" },
          { title: "Azure App Services" },
          { title: "Azure Virtual Networks (VNETs)" },
          { title: "Azure VPN Gateway" },
          { title: "Azure ExpressRoute" }
        ]
      },
      {
        title: "Microsoft Azure Administrator (AZ-104) Part 3",
        duration: "5 topics",
        lectures: [
          { title: "Azure Active Directory users and groups" },
          { title: "Azure AD integration with on-premises AD" },
          { title: "Azure AD applications and service principals" },
          { title: "Managing Azure Policies" },
          { title: "Deploying Azure Resource Manager (ARM) templates" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "Basic knowledge of IT concepts such as networking, operating systems, and virtualization is recommended. Familiarity with cloud fundamentals and tools like PowerShell or Azure CLI can also be beneficial."
    },
    faqs: [
      {
        question: "1. What is the AZ-104 certification and why is it important?",
        answer: "AZ-104 is the official Microsoft certification for Azure Administrators. It validates skills in Azure resource management, networking, storage, and identity management."
      },
      {
        question: "2. What domains are covered in the AZ-104 certification?",
        answer: "The certification includes Azure identities and governance, Azure storage, Azure compute, Azure networking, and monitoring Azure resources."
      },
      {
        question: "3. What is the exam format for AZ-104?",
        answer: "The AZ-104 exam includes multiple-choice questions, case studies, drag-and-drop questions, and scenario-based tasks. The exam duration is 120 minutes and requires a passing score of 700 out of 1000."
      },
      {
        question: "4. What are the prerequisites for the AZ-104 training course?",
        answer: "Basic knowledge of networking, operating systems, virtualization, and cloud fundamentals is helpful. Experience with PowerShell or Azure CLI can also be beneficial."
      },
      {
        question: "5. How can the AZ-104 certification benefit my career?",
        answer: "The certification enhances your credibility as a cloud professional, increases job opportunities, and can lead to higher salary potential in IT and cloud administration roles."
      },
      {
        question: "6. What job roles can I apply for after AZ-104 certification?",
        answer: "Common job roles include Azure Administrator, Cloud Administrator, Systems Administrator, Network Administrator, and IT Support Specialist focused on cloud services."
      },
      {
        question: "7. What practical experience will I gain from Simpliaxis training?",
        answer: "Learners gain practical experience through hands-on labs, real-world scenarios, and training with Azure Portal, PowerShell, and CLI tools."
      },
      {
        question: "8. Is AZ-104 difficult to pass?",
        answer: "The exam is considered moderately challenging. With proper preparation, hands-on practice, and training, it is achievable."
      },
      {
        question: "9. Is the AZ-104 certification worth it?",
        answer: "Yes, AZ-104 is one of the most popular Microsoft certifications and is highly valued by organizations adopting cloud technologies."
      },
      {
        question: "10. How many attempts are allowed for AZ-104?",
        answer: "Microsoft allows candidates to retake the exam if they fail, with waiting periods between attempts according to Microsoft’s retake policy."
      }
    ],
    whoCanBuy: [
      "System administrators",
      "IT professionals working with cloud infrastructure",
      "Azure administrators",
      "Cloud engineers",
      "Network administrators",
      "DevOps engineers",
      "IT support professionals",
      "Anyone preparing for Microsoft Azure certifications"
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

export default MicrosoftAzureAdministratorCourse;
