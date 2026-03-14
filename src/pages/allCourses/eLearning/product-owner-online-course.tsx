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

const AccreditedAgileRolesProductOwnerOnlineCourse = () => {
  const courseData = {
    courseName: "Accredited Agile Roles - Product Owner Online Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "4.5Hrs",
    level: "Intermediate",
    description: "The Accredited Agile Roles – Product Owner online course provides participants with a strong understanding of Agile and Scrum principles. The program focuses on essential topics such as user stories, product backlog management, sprint planning, and sprint reviews. Designed for both aspiring and current Product Owners, this course builds a solid foundation for managing product vision and aligning it with business objectives. Through a combination of theoretical lessons and video-based learning exercises, participants develop the skills required to effectively lead Agile product development.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "4.5 hours of on-demand video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "1 downloadable learning material", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "4.5 hours of on-demand video content",
      "1 downloadable learning material",
      "Accessible on any device",
      "365 days of course access",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Understanding the Agile Manifesto and Agile Principles:",
        description: "Develop a clear understanding of the Agile Manifesto and its core principles. Learn how Agile methodologies emphasize adaptability, teamwork, and customer satisfaction."
      },
      {
        title: "Understanding the Scrum Framework and Key Roles:",
        description: "Explore the Scrum framework and understand the responsibilities of key roles, including the Product Owner. Learn how these roles collaborate within a Scrum team."
      },
      {
        title: "Learning How Agile and Scrum Support Continuous Delivery and Improvement:",
        description: "Discover how Agile and Scrum promote continuous delivery through iterative and incremental development. Learn about improvement practices such as retrospectives and feedback loops."
      },
      {
        title: "Understanding the Product Owner's Responsibilities and Key Competencies:",
        description: "Gain a detailed understanding of the Product Owner’s role in Scrum. Develop key competencies such as communication, prioritization, and strategic decision-making."
      },
      {
        title: "Learning How to Define and Communicate Product Vision and Goals:",
        description: "Learn how to clearly define and communicate a compelling product vision. Understand how to align product goals with stakeholder expectations and team objectives."
      },
      {
        title: "Learning to Create and Manage the Product Backlog:",
        description: "Understand how to create, organize, and continuously refine the product backlog to ensure it reflects changing priorities and evolving product requirements."
      }
    ],
    benefits: [
      {
        title: "Expert Knowledge Acquisition:",
        description: "The course delivers comprehensive and up-to-date content developed by industry experts. Participants gain practical knowledge of Agile methodologies, product ownership practices, and proven best practices."
      },
      {
        title: "Global Recognition and Credibility:",
        description: "Completing an accredited course enhances the credibility of your Product Owner skills. It demonstrates your expertise and improves your professional reputation within the Agile community."
      },
      {
        title: "Alignment with Industry Standards:",
        description: "The course is designed in alignment with widely accepted Agile frameworks and industry standards, helping learners stay updated with modern Agile practices and tools."
      },
      {
        title: "Application of Practical Skills:",
        description: "Participants engage in practical exercises and real-world scenarios that help them apply Agile concepts effectively in their professional environments."
      },
      {
        title: "Networking Opportunities:",
        description: "The course environment encourages networking with fellow professionals, instructors, and industry experts, allowing participants to exchange ideas and build valuable professional connections."
      }
    ],
    modules: [
      {
        title: "Accredited Agile Roles - Product Owner E-learning Course",
        duration: "10 topics",
        lectures: [
          { title: "Course Introduction" },
          { title: "The Role of the Product Owner" },
          { title: "User Personas and User Stories" },
          { title: "User Personas and User Stories - Part 2" },
          { title: "Planning Levels: Product Vision and Roadmap" },
          { title: "Five Levels of Planning: Release Planning" },
          { title: "Five Levels of Planning: Iteration Planning - Part 1" },
          { title: "Five Levels of Planning: Iteration Planning - Part 2" },
          { title: "Agile Metrics" },
          { title: "Leadership Behaviors in Agile Teams" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "Although there are no strict prerequisites, participants typically benefit from having a background in software development, data analytics, or a related field. Prior experience in project management or team leadership can also be advantageous."
    },
    faqs: [
      {
        question: "1. What is the Accredited Agile Roles - Product Owner online course?",
        answer: "This course focuses on the responsibilities and skills required for the Product Owner role in Agile environments. It covers important topics such as backlog management, stakeholder collaboration, and aligning product vision with development goals."
      },
      {
        question: "2. Who should enroll in the Accredited Agile Roles - Product Owner E-learning course?",
        answer: "This course is suitable for professionals such as Project Managers, Product Owners, Software Architects, Product Managers, Developers, Software Testers, and team members interested in learning Scrum and Agile product development."
      },
      {
        question: "3. Is prior Agile experience required to enroll?",
        answer: "No prior experience with Agile is required. However, having a basic understanding of Agile concepts may help learners understand the material more quickly."
      },
      {
        question: "4. Can organizations enroll multiple employees in this course?",
        answer: "Yes, many organizations enroll teams in Agile training programs. Training providers often offer group enrollment options, discounts, and customized learning solutions for companies."
      },
      {
        question: "5. Are there practical exercises or case studies included in the course?",
        answer: "Yes, the course includes downloadable resources and learning materials that help participants apply Agile concepts in real-world scenarios."
      },
      {
        question: "6. Is it worth taking the Accredited Agile Roles - Product Owner online course?",
        answer: "Yes, the course can be highly beneficial for professionals involved in product management or those aspiring to become Product Owners. It provides valuable knowledge about backlog management, stakeholder collaboration, and Agile product development practices."
      }
    ],
    whoCanBuy: [
      "Aspiring Product Owners",
      "Current Product Owners",
      "Business Analysts",
      "Project Managers",
      "Scrum Masters",
      "Entrepreneurs and Product Managers",
      "Team Members",
      "Anyone interested in Agile product development"
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

export default AccreditedAgileRolesProductOwnerOnlineCourse;
