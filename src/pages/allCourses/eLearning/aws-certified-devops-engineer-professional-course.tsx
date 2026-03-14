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

const AWSCertifiedDevOpsEngineerProfessionalCourse = () => {
  const courseData = {
    courseName: "AWS Certified DevOps Engineer - Professional Course",
    rating: "4.9",
    enrolledCount: "1.2k+",
    duration: "14.5Hrs",
    level: "Advanced",
    description: "The AWS Certified DevOps Engineer – Professional course prepares learners to design, implement, and manage automated DevOps pipelines on AWS. This course focuses on continuous integration and continuous delivery (CI/CD), infrastructure automation, monitoring, logging, and security best practices within AWS environments. Participants will learn how to use AWS DevOps tools and services to deploy scalable applications, automate infrastructure management, and maintain highly reliable cloud systems. The course also prepares learners for the AWS Certified DevOps Engineer – Professional (DOP-C02) certification exam.",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 398",
      discounted: "USD 199",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "14 hours 30 minutes of Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "AWS DOP C02 Exam Prep Strategies", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Covers AWS Fundamentals", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Interactive Learning Modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Beginner-Friendly Approach", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "14 hours 30 minutes of Video Content",
      "AWS DOP C02 Exam Prep Strategies",
      "Covers AWS Fundamentals",
      "Interactive Learning Modules",
      "Beginner-Friendly Approach"
    ],
    outcomes: [
      {
        title: "DevOps on AWS",
        description: "Understand the core DevOps principles and how they apply to AWS cloud environments."
      },
      {
        title: "CI/CD Pipeline Implementation",
        description: "Learn how to build and manage continuous integration and continuous delivery pipelines using AWS DevOps services."
      },
      {
        title: "Infrastructure Automation",
        description: "Automate infrastructure provisioning and management using Infrastructure as Code tools such as AWS CloudFormation."
      },
      {
        title: "Monitoring and Logging",
        description: "Use AWS monitoring tools like CloudWatch and CloudTrail to track performance, logs, and operational metrics."
      },
      {
        title: "Security and Compliance",
        description: "Implement security best practices, access management, and compliance controls in AWS DevOps environments."
      },
      {
        title: "Deployment Strategies",
        description: "Learn advanced deployment strategies such as blue/green deployments, rolling updates, and automated release management."
      }
    ],
    benefits: [
      {
        title: "Career Growth",
        description: "Increase your opportunities for career advancement in DevOps by obtaining a globally recognized AWS DevOps Engineer Professional certification."
      },
      {
        title: "Advanced Skills",
        description: "Develop strong skills in monitoring, automation, and cloud infrastructure management to solve real-world DevOps challenges."
      },
      {
        title: "Higher Payscale",
        description: "AWS DevOps professionals are highly sought after by organizations, often earning competitive salaries worldwide."
      },
      {
        title: "Practical Experience",
        description: "Gain hands-on experience through real-world DevOps practices and cloud deployment scenarios."
      },
      {
        title: "Industry Recognition",
        description: "Stand out in the IT industry by earning a certification that validates your expertise in AWS DevOps practices."
      }
    ],
    modules: [
      {
        title: "Course content:",
        duration: "7 topics",
        lectures: [
          { title: "Strong foundation and core concepts" },
          { title: "Professional training with hands-on experience" },
          { title: "Implementing AWS DevOps Tools" },
          { title: "Implementing DevOps Principles" },
          { title: "DevOps Automation" },
          { title: "Monitor Cloud Infrastructure" },
          { title: "Implementing DevOps Culture" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "Learners should have at least two years of experience managing AWS environments. Familiarity with programming, scripting, software development, or system administration is recommended."
    },
    faqs: [
      {
        question: "1. What is the DOP-C02 Certification exam?",
        answer: "The DOP-C02 exam is the latest version of the AWS Certified DevOps Engineer – Professional certification. It validates advanced skills in automating and managing application deployments on AWS."
      },
      {
        question: "2. Who should take this certification exam?",
        answer: "Professionals with at least two years of experience managing AWS environments should consider taking this certification exam."
      },
      {
        question: "3. How can this certification benefit my job?",
        answer: "As more organizations adopt AWS cloud services, the demand for AWS DevOps professionals continues to grow. This certification improves credibility and increases job opportunities."
      },
      {
        question: "4. How long is the certification valid?",
        answer: "The AWS Certified DevOps Engineer – Professional certification is valid for three years before renewal."
      },
      {
        question: "5. How much will the exam cost?",
        answer: "The exam costs approximately $300 USD, although pricing may vary depending on the country or exchange rates."
      },
      {
        question: "6. What is the exam format?",
        answer: "The exam contains around 75 questions and has a duration of 180 minutes."
      },
      {
        question: "7. What is the pass score for this certification test?",
        answer: "The passing score is typically 750 out of 1000."
      },
      {
        question: "8. What are the career opportunities after this certification?",
        answer: "Career roles include AWS DevOps Engineer, DevOps Architect, DevSecOps Engineer, Cloud Infrastructure Engineer, Cloud Consultant, Site Reliability Engineer, and Automation Specialist."
      },
      {
        question: "9. How much salary does an AWS Certified DevOps Engineer earn?",
        answer: "Certified AWS DevOps Engineers typically earn between $110,000 and $140,000 annually depending on location and experience."
      }
    ],
    whoCanBuy: [
      "DevOps Engineers",
      "Cloud Engineers",
      "AWS Administrators",
      "Site Reliability Engineers (SRE)",
      "Software Developers working with cloud environments",
      "System Administrators managing AWS infrastructure",
      "Cloud Architects",
      "Professionals preparing for AWS DevOps Engineer Professional certification"
    ],
    reviews: [
      {
        name: "Alex Thompson",
        role: "Senior DevOps Engineer",
        rating: 5,
        content: "Outstanding course! The deep dive into CI/CD pipelines and transition from associate level to professional level was very smooth. The hands-on examples with CloudFormation were invaluable.",
        date: "2 weeks ago"
      },
      {
        name: "Sarah Miller",
        role: "Cloud Architect",
        rating: 5,
        content: "Highly recommend for anyone pursuing DOP-C02. The content is very current and covers complex deployment strategies like blue/green and canary deployments in great detail.",
        date: "1 month ago"
      }
    ],
    relatedCourses: [
      {
        title: "AWS Certified Cloud Practitioner (CLF-C02)",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
        price: "USD 149",
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

export default AWSCertifiedDevOpsEngineerProfessionalCourse;
