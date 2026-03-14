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
import ELearningContactBar from "@/components/E-learning-courses/ELearningContactBar";

const CertifiedAssociateInProjectManagementOnlineCourse = () => {
  const courseData = {
    courseName: "Certified Associate in Project Management (CAPM®) Online Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "15Hrs",
    level: "Beginner",
    description: "Start your journey in project management with our Certified Associate in Project Management (CAPM®) Exam Preparation E-Learning Course. This program is carefully designed to cover key CAPM exam concepts aligned with the PMBOK® Guide 5th Edition. The Project Management Institute (PMI) offers the CAPM certification as an entry-level credential for individuals who want to build a career in project management. Our course equips professionals with essential knowledge and practical skills needed to succeed in project management roles.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "15 hours of on-demand video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "14 downloadable learning resources", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Course completion certificate", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "15 hours of on-demand video content",
      "14 downloadable learning resources",
      "Accessible on any device",
      "365 days of course access",
      "Course completion certificate"
    ],
    outcomes: [
      {
        title: "Negotiating Project Agreements:",
        description: "Learn how to negotiate project agreements effectively to benefit both the team and stakeholders. Understand different negotiation approaches that help achieve balanced and mutually beneficial project outcomes."
      },
      {
        title: "Conflict Management Strategies:",
        description: "Understand how to manage conflicts within project teams by applying project management methodologies. Learn strategies that help maintain collaboration while ensuring project value and successful outcomes."
      },
      {
        title: "Effective Project Governance:",
        description: "Develop the ability to implement structured project change management processes and establish governance practices aligned with CAPM principles to support project success."
      },
      {
        title: "Strategic Business Value Delivery:",
        description: "Gain insights into managing project communications and risk effectively. Learn how to collaborate with stakeholders and ensure that project deliverables create real business value."
      },
      {
        title: "Proactive Project Continuity Management:",
        description: "Build the skills required to handle project challenges and adapt to organizational changes. Learn how proactive planning and quick responses can maintain project continuity."
      },
      {
        title: "Business Evolution through Analysis:",
        description: "Understand how business analysis techniques support organizational growth. Learn how to evaluate business changes and contribute to strategic improvements within an organization."
      }
    ],
    benefits: [
      {
        title: "Flexibility and Accessibility:",
        description: "E-learning enables learners to access CAPM training materials from anywhere with an internet connection. This flexibility allows students and professionals to learn at their own pace while balancing their studies with work or other commitments."
      },
      {
        title: "Cost-Effectiveness:",
        description: "Online learning is generally more affordable than traditional classroom training. Since travel, accommodation, and printed materials are not required, CAPM e-learning becomes a budget-friendly way to develop project management skills."
      },
      {
        title: "Interactive Learning Experience:",
        description: "CAPM e-learning programs are designed to be engaging and interactive. They include multimedia content, quizzes, and real-world case studies that improve understanding and help learners apply concepts effectively."
      },
      {
        title: "Self-Paced Learning:",
        description: "Participants can progress through the course material at their own speed. This allows learners to spend more time on complex topics, review difficult concepts, and move quickly through topics they already understand."
      },
      {
        title: "Global Recognition and Career Advancement:",
        description: "The CAPM certification is globally recognized and demonstrates a strong foundation in project management practices. Completing this course improves professional credibility and opens opportunities for career growth in project management roles."
      }
    ],
    modules: [
      {
        title: "Certified Associate in Project Management (CAPM) Part 1",
        duration: "34 topics",
        lectures: [
          { title: "Overview of CAPM Certification" },
          { title: "PMI Approach to Project Management" },
          { title: "Understanding the CAPM Exam Structure" },
          { title: "Tools and Resources for CAPM Exam Preparation" },
          { title: "Introduction to Project Management Methodologies" },
          { title: "Project Management Guiding Principles" },
          { title: "Project Management Domains" },
          { title: "PMI Code of Ethics and Professional Conduct" },
          { title: "Key Project Management Terminology" },
          { title: "Understanding the Project Management Plan" },
          { title: "Balancing Project Constraints" },
          { title: "Planning Performance Domain" },
          { title: "Project Schedule Planning" },
          { title: "Risk Planning and Management" },
          { title: "Stakeholder Management Planning" },
          { title: "Project Closing Process" },
          { title: "Understanding Project Stakeholders" },
          { title: "Role of Project Manager vs Project Sponsor" },
          { title: "Agile Roles and Servant Leadership" },
          { title: "Project Team Structure and Collaboration" },
          { title: "Emotional Intelligence for Project Managers" },
          { title: "Project Initiation and Benefits Management Plan" },
          { title: "Communication Management Strategies" },
          { title: "Effective Use of Meetings" },
          { title: "Problem-Solving Tools and Techniques" },
          { title: "Organizational Structures in Predictive Projects" },
          { title: "Project Processes and Deliverables" },
          { title: "Critical Path Method" },
          { title: "Earned Value Management and Scheduling" },
          { title: "Work Breakdown Structure (WBS)" },
          { title: "Quality Management Planning" },
          { title: "Project Integration Management" },
          { title: "Cost and Schedule Variance Analysis" },
          { title: "Downloadable Course Resources" }
        ]
      },
      {
        title: "Certified Associate in Project Management (CAPM) Part 2",
        duration: "26 topics",
        lectures: [
          { title: "Adaptive vs Predictive Project Management" },
          { title: "Understanding Adaptive Project Environments" },
          { title: "Iterative Development Progression" },
          { title: "Scope Management in Agile Projects" },
          { title: "Project Tracking Techniques" },
          { title: "Adaptive Project Artifacts" },
          { title: "Introduction to Scrum Framework" },
          { title: "Scaled Agile Framework (SAFe)" },
          { title: "Extreme Programming (XP) and Kanban" },
          { title: "Executing Agile Projects" },
          { title: "Defining Criteria for Success" },
          { title: "Agile Manifesto and Core Principles" },
          { title: "Sprint Planning and Execution" },
          { title: "Business Analysis and Related Roles" },
          { title: "Communication Methods and Tools" },
          { title: "Communication Between Cross-Functional Teams" },
          { title: "Requirements Gathering and Elicitation" },
          { title: "Requirement Modeling and Refinement" },
          { title: "Requirements Traceability Matrix" },
          { title: "Introduction to Product Roadmaps" },
          { title: "Business Analysis in Predictive Projects" },
          { title: "Business Analysis in Adaptive Projects" },
          { title: "Understanding Acceptance Criteria" },
          { title: "Validation and Evaluation Activities" },
          { title: "CAPM Exam Registration Process" },
          { title: "Downloadable Course Resources" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "There are no mandatory prerequisites to enroll in the CAPM® course. However, having basic knowledge of project management concepts can be helpful. Completing CAPM® training is recommended for individuals planning to pursue the Certified Associate in Project Management certification."
    },
    faqs: [
      {
        question: "1. Is the Certified Associate in Project Management (CAPM) certification valuable?",
        answer: "CAPM is an entry-level certification provided by PMI for individuals starting their careers in project management. It provides a strong foundation in project management concepts and practices. Earning the certification can improve employability and help individuals qualify for entry-level project management roles. It can also serve as a stepping stone toward advanced certifications like PMP."
      },
      {
        question: "2. What is the cost of the CAPM course?",
        answer: "The cost of the CAPM course typically ranges between $200 and $300."
      },
      {
        question: "3. Is the CAPM exam difficult?",
        answer: "The CAPM exam is generally considered manageable with proper preparation. Since the exam is based on PMI’s structured framework, studying the recommended materials and understanding key concepts can significantly improve your chances of passing."
      },
      {
        question: "4. How long does it take to complete the CAPM course?",
        answer: "The CAPM course usually includes around 15 hours of training content."
      },
      {
        question: "5. What is the earning potential after obtaining CAPM?",
        answer: "In the United States, professionals holding a CAPM certification earn an average hourly wage of approximately $44.27. Salaries typically range between $39.66 and $50.00 per hour, with some professionals earning as high as $67.07 per hour."
      },
      {
        question: "6. What job roles are available after completing the CAPM course?",
        answer: "After completing the CAPM course, you may pursue roles such as Associate Project Manager, Project Manager, IT Project Manager, Project Coordinator, Project Analyst, Project Leader, Senior Project Manager, Team Leader, Product Manager, Program Manager, or Project Sponsor."
      },
      {
        question: "7. Does the CAPM certification expire?",
        answer: "Yes, the CAPM certification is valid for three years. After this period, you must renew the certification to maintain its validity."
      },
      {
        question: "8. What is the passing score for the CAPM exam?",
        answer: "PMI does not officially publish the exact passing score for the CAPM exam, but achieving around 61% is generally considered sufficient to pass."
      },
      {
        question: "9. How many attempts are allowed for the CAPM exam?",
        answer: "Candidates are allowed up to three attempts to pass the CAPM exam within one year from the date of application approval."
      },
      {
        question: "10. Can I take the CAPM exam after completing the e-learning course?",
        answer: "Yes, after completing the CAPM e-learning course and preparing adequately for the exam, you can apply and take the CAPM certification exam."
      }
    ],
    whoCanBuy: [
      "Project Managers",
      "IT Project Managers",
      "Project Coordinators",
      "Project Analysts",
      "Team Leaders",
      "Associate Project Managers",
      "Product or Program Managers",
      "Anyone interested in learning CAPM"
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
        title: "Advanced Certified Scrum Master (A-CSM)",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400",
        price: "USD 249",
        rating: "4.9"
      },
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

export default CertifiedAssociateInProjectManagementOnlineCourse;

