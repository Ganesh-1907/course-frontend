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

const AWSCertifiedCloudPractitionerCourse = () => {
  const courseData = {
    courseName: "AWS Certified Cloud Practitioner CLF-C02 Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "18.5Hrs",
    level: "Beginner",
    description: "The AWS Cloud Practitioner course is designed for beginners who want to understand the fundamentals of cloud computing and Amazon Web Services (AWS). This course introduces key AWS services such as EC2, Lambda, S3, EBS, VPC, and RDS while covering essential cloud concepts including security, compliance, and cost management. By the end of the course, participants will gain a strong foundational understanding of AWS cloud services and be prepared to take the AWS Certified Cloud Practitioner (CLF-C02) certification exam.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "18.5 hours of video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Comprehensive AWS fundamentals coverage", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Interactive learning modules", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Beginner-friendly learning approach", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "CLF-C02 certification exam preparation", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "18.5 hours of video content",
      "Comprehensive AWS fundamentals coverage",
      "Interactive learning modules",
      "Beginner-friendly learning approach",
      "CLF-C02 certification exam preparation"
    ],
    outcomes: [
      {
        title: "Cloud Computing Fundamentals",
        description: "Understand the core concepts of cloud computing, including service models such as IaaS, PaaS, and SaaS."
      },
      {
        title: "AWS Core Services",
        description: "Learn about essential AWS services such as EC2, S3, Lambda, RDS, and VPC and how they are used in real-world applications."
      },
      {
        title: "AWS Security and Compliance",
        description: "Understand the AWS shared responsibility model, identity and access management, and best practices for securing cloud environments."
      },
      {
        title: "AWS Pricing and Billing",
        description: "Learn how AWS pricing works, including billing models, cost management tools, and strategies for optimizing cloud costs."
      },
      {
        title: "AWS Cloud Architecture Basics",
        description: "Gain knowledge about designing basic cloud solutions using AWS infrastructure and services."
      },
      {
        title: "CLF-C02 Exam Preparation",
        description: "Understand the structure of the AWS Certified Cloud Practitioner exam and review the key domains required to pass the certification."
      }
    ],
    benefits: [
      {
        title: "Build a Strong Cloud Foundation",
        description: "Learn the fundamentals of cloud computing and AWS services, enabling you to begin your cloud career with confidence."
      },
      {
        title: "Improve Career Opportunities",
        description: "AWS certifications are globally recognized and can open career opportunities in IT, consulting, and business roles."
      },
      {
        title: "Understand AWS Pricing Models",
        description: "Learn about AWS pricing, billing tools, and cost optimization strategies to help organizations manage cloud expenses effectively."
      },
      {
        title: "Strengthen Cloud Security Knowledge",
        description: "Understand the AWS shared responsibility model, compliance standards, and security best practices for building secure cloud environments."
      },
      {
        title: "Prepare for Advanced Certifications",
        description: "This certification acts as a foundation for advanced AWS certifications such as Solutions Architect, Developer, and SysOps Administrator."
      }
    ],
    modules: [
      {
        title: "Course Outline",
        duration: "7 topics",
        lectures: [
          { title: "AWS Fundamentals" },
          { title: "Overview of AWS Core Services" },
          { title: "Introduction to CloudFormation" },
          { title: "Cloud Computing Fundamentals" },
          { title: "Cloud Certification Preparation" },
          { title: "Cloud Exam Preparation" },
          { title: "Overview of Other Cloud Platforms" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "No prior technical experience is required to enroll in this course. However, basic familiarity with IT concepts or business processes can help learners understand the material more easily."
    },
    faqs: [
      {
        question: "1. What is the AWS Certified Cloud Practitioner (CLF-C02) certification?",
        answer: "The AWS Certified Cloud Practitioner (CLF-C02) certification is an entry-level AWS certification that validates a candidate’s understanding of cloud concepts, AWS services, security, compliance, and pricing."
      },
      {
        question: "2. How difficult is the AWS Certified Cloud Practitioner CLF-C02 exam?",
        answer: "The CLF-C02 exam is designed for beginners and is considered one of the easiest AWS certifications when proper preparation and study are done."
      },
      {
        question: "3. Who should take the AWS Certified Cloud Practitioner certification course?",
        answer: "This course is ideal for beginners, business professionals, sales and marketing teams, project managers, and anyone planning to pursue advanced AWS certifications."
      },
      {
        question: "4. How long is this AWS CCP course?",
        answer: "The course includes approximately 18.5 hours of video learning designed to cover all key topics required for the certification."
      },
      {
        question: "5. What skills are covered in this course?",
        answer: "The course covers cloud fundamentals, AWS core services, cloud security, cost management, and certification exam preparation."
      },
      {
        question: "6. What does the AWS Certified Cloud Practitioner CLF-C02 exam validate?",
        answer: "The certification validates knowledge of cloud concepts, AWS services, security and compliance practices, billing and pricing models, and the AWS shared responsibility model."
      },
      {
        question: "7. What is the exam domain weightage for CLF-C02?",
        answer: "The exam focuses on cloud concepts (24%), security and compliance (30%), AWS services and technology (34%), and billing, pricing, and support (12%)."
      },
      {
        question: "8. What is the difference between CLF-C01 and CLF-C02?",
        answer: "CLF-C02 is the updated version of the AWS Cloud Practitioner exam and includes revised topics that reflect the latest AWS services and best practices."
      },
      {
        question: "9. Can this certification help my career?",
        answer: "Yes, the certification provides a strong foundation in cloud computing and is valuable for both technical and non-technical roles working with AWS."
      },
      {
        question: "10. Is prior technical knowledge required?",
        answer: "No, the course is designed for beginners and does not require prior technical experience."
      }
    ],
    whoCanBuy: [
      "IT professionals beginning their cloud journey",
      "Students interested in cloud computing",
      "Business and non-technical professionals working with cloud technologies",
      "Project managers and business analysts",
      "Developers exploring AWS cloud services",
      "Individuals preparing for AWS certification",
      "Consultants working with cloud-based solutions",
      "Anyone interested in learning AWS fundamentals"
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

export default AWSCertifiedCloudPractitionerCourse;
