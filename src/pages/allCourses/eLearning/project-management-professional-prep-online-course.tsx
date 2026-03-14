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

const ProjectManagementProfessionalPrepOnlineCourse = () => {
  const courseData = {
    courseName: "Project Management Professional Prep (PMP) Online Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "22Hrs",
    level: "Intermediate",
    description: "The PMP Certification Preparation Course is designed to help professionals prepare for the globally recognized Project Management Professional (PMP) exam. The course covers the PMBOK guide along with industry best practices and includes interactive lectures, real-world case studies, and practical exercises. Key topics include project integration, scope, schedule, cost, quality, resource, communication, risk, procurement, and stakeholder management. With proven exam strategies and practice tests, this program equips participants with the knowledge and skills required to become successful certified project managers.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "22 hours of on-demand video training", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "14 downloadable learning materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "22 hours of on-demand video training",
      "14 downloadable learning materials",
      "Accessible on any device",
      "365 days of course access",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Foundational Principles:",
        description: "Develop a deeper understanding of the core principles that support effective project management. Learn how to analyze stakeholder expectations, define project scope, and evaluate potential risks to build strong project management processes."
      },
      {
        title: "Best Practices:",
        description: "Learn how to align your project management approach with globally recognized standards and best practices. Apply these methods to successfully plan, execute, and monitor projects for improved outcomes."
      },
      {
        title: "Problem-solving Proficiency:",
        description: "Gain the ability to identify challenges and resolve issues throughout the project lifecycle. Strengthening your risk analysis and problem-solving skills will help you become a more capable and confident project manager."
      },
      {
        title: "Effective Communication:",
        description: "Learn how to establish clear and effective communication with project teams, sponsors, and stakeholders. Strong communication improves collaboration, transparency, and overall project success."
      },
      {
        title: "Financial and Timeline Oversight:",
        description: "Understand how to effectively manage project budgets and schedules. Learn techniques for planning financial resources and maintaining timelines to ensure projects are delivered successfully."
      },
      {
        title: "Leadership Advancement:",
        description: "Develop leadership skills required to motivate teams, resolve conflicts, and guide projects toward successful completion. Strengthening leadership capabilities enhances overall project management performance."
      }
    ],
    benefits: [
      {
        title: "Flexibility and Convenience:",
        description: "The Simpliaxis PMP E-Learning course allows learners to study at their own pace, making it easier to balance professional responsibilities and personal commitments."
      },
      {
        title: "Comprehensive Content:",
        description: "The course provides detailed coverage of the PMBOK guide along with industry best practices, ensuring learners gain a strong understanding of project management principles required for PMP certification."
      },
      {
        title: "Interactive Learning:",
        description: "Participate in engaging learning modules that include lectures, real-world case studies, and practical exercises designed to strengthen your understanding of project management concepts."
      },
      {
        title: "Cost-Effective:",
        description: "Choosing the Simpliaxis PMP E-Learning course offers a more affordable learning option by removing travel and accommodation costs associated with traditional classroom training."
      },
      {
        title: "Exam Readiness:",
        description: "Prepare for the PMP certification exam with effective exam strategies, practice tests, and assessments that help improve confidence and exam performance."
      }
    ],
    modules: [
      {
        title: "Project Management Professional Prep - 2021 Part 1",
        duration: "27 topics",
        lectures: [
          { title: "Course Introduction and Overview" },
          { title: "PMP Exam Introduction" },
          { title: "Understanding the Three PMP Domains" },
          { title: "Project Management Methodologies" },
          { title: "Predictive, Hybrid, and Agile Approaches" },
          { title: "Introduction to Agile" },
          { title: "Understanding the Agile Manifesto" },
          { title: "Agile Values Overview" },
          { title: "Agile Principles and Practices" },
          { title: "Agile Teams and Their Roles" },
          { title: "Agile Planning Techniques" },
          { title: "Agile Terminology" },
          { title: "Agile Estimation Methods" },
          { title: "Sprint Planning Demonstration" },
          { title: "Introduction to PMI Concepts" },
          { title: "Project Management Terminology" },
          { title: "Roles in Project Management" },
          { title: "Project Management Environment" },
          { title: "Core Skills Required for Project Managers" },
          { title: "Managing Competing Project Constraints" },
          { title: "Project Lifecycle and Work Authorization Systems" },
          { title: "Understanding the Project Management Plan" },
          { title: "Inputs, Tools, Techniques, and Outputs" },
          { title: "Enterprise Environmental Factors" },
          { title: "Organizational Process Assets" },
          { title: "The Project Charter" },
          { title: "Understanding the Modern PMP Exam Structure" }
        ]
      },
      {
        title: "Project Management Professional Prep - 2021 Part 2",
        duration: "20 topics",
        lectures: [
          { title: "Building an Effective Project Team" },
          { title: "Establishing Team Ground Rules" },
          { title: "Creating Shared Understanding Within Teams" },
          { title: "Negotiating Project Agreements" },
          { title: "Empowering Team Members" },
          { title: "Training Team Members and Stakeholders" },
          { title: "Supporting Virtual Teams" },
          { title: "Collaborating with Stakeholders" },
          { title: "Leading Project Teams" },
          { title: "Supporting Team Performance" },
          { title: "Conflict Management Strategies" },
          { title: "Mentoring Stakeholders" },
          { title: "Emotional Intelligence in Team Performance" },
          { title: "Scope Planning and Management" },
          { title: "Work Breakdown Structure (WBS)" },
          { title: "Agile Scope Management" },
          { title: "Budget and Resource Planning" },
          { title: "Agile Budget Management" },
          { title: "Project Schedule Planning" },
          { title: "Agile Scheduling Methods" }
        ]
      },
      {
        title: "Project Management Professional Prep - 2021 Part 3",
        duration: "27 topics",
        lectures: [
          { title: "Critical Path Scheduling Method" },
          { title: "Quality Management of Deliverables" },
          { title: "Quality Leadership in Projects" },
          { title: "Integrating Project Planning Activities" },
          { title: "Procurement Planning" },
          { title: "Understanding Contract Types" },
          { title: "Selecting Appropriate Project Methodologies" },
          { title: "Project Governance Structure" },
          { title: "Project or Phase Closure" },
          { title: "Communication Management" },
          { title: "Risk Identification and Management" },
          { title: "Qualitative and Quantitative Risk Analysis" },
          { title: "Stakeholder Engagement Strategies" },
          { title: "Managing Project Artifacts" },
          { title: "Managing Project Changes" },
          { title: "Handling Project Issues" },
          { title: "Knowledge Transfer and Project Continuity" },
          { title: "Project Compliance Planning" },
          { title: "Evaluating External Business Environment" },
          { title: "Supporting Organizational Change" },
          { title: "Delivering Project Value" },
          { title: "Creating an Effective Study Plan" },
          { title: "Understanding the PMP Exam Structure" },
          { title: "Analyzing PMP Exam Questions" },
          { title: "PMI Code of Ethics and Conduct" },
          { title: "Completing the PMP Application" },
          { title: "Exam Day Preparation" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "To be eligible for the PMP certification, candidates must meet one of the following requirements. Option 1: Candidates with a secondary degree (high school diploma, associate degree, or global equivalent) must have at least five years or 60 months of project management experience, including 7,500 hours leading and directing projects, along with 35 hours of project management education. Option 2: Candidates with a four-year bachelor's degree or global equivalent must have at least three years or 36 months of project management experience, including 4,500 hours leading and directing projects, along with 35 hours of project management education."
    },
    faqs: [
      {
        question: "1. How can I prepare for the PMP exam?",
        answer: "Effective PMP preparation includes studying official materials such as the PMBOK Guide, completing a PMP training course, developing a structured study plan, and practicing with mock exams. Reviewing concepts regularly and discussing topics with other learners can also improve understanding and exam readiness."
      },
      {
        question: "2. Which platform is best for PMP exam preparation?",
        answer: "Simpliaxis is a popular platform for PMP exam preparation, offering comprehensive learning materials, expert instruction, and flexible online learning options aligned with PMI standards."
      },
      {
        question: "3. Can I prepare for the PMP exam on my own?",
        answer: "While self-study is possible, many candidates find that guided training from certified instructors improves their understanding of complex topics and increases their chances of passing the exam."
      },
      {
        question: "4. How do I start the PMP exam process?",
        answer: "Begin by creating an account on the Project Management Institute (PMI) website. Submit your personal details, educational background, and project experience. Once your application is approved, you can pay the exam fee and schedule your exam."
      },
      {
        question: "5. Can I take the PMP course online?",
        answer: "Yes, the PMP certification course can be completed online through platforms like Simpliaxis, which offer flexible, self-paced learning supported by expert instructors and practice assessments."
      },
      {
        question: "6. Are online PMP courses helpful for passing the exam?",
        answer: "Yes. Online PMP courses provide structured learning, practice exams, and expert guidance, which significantly improves preparation and increases the chances of passing the certification exam."
      },
      {
        question: "7. What is the most effective way to study for the PMP exam?",
        answer: "The most effective approach is to combine official study materials, mock exams, and practice questions with a structured study schedule. Engaging with online communities and reviewing difficult topics regularly can also improve exam performance."
      },
      {
        question: "8. How long does it take to complete the PMP e-learning course?",
        answer: "The PMP e-learning course contains approximately 22 hours of training content. Since the course is self-paced, learners can complete it according to their own schedule."
      }
    ],
    whoCanBuy: [
      "Project Managers",
      "Project Team Members preparing for PMP®",
      "Experienced or Senior Project Managers",
      "Project Coordinators",
      "IT Project Managers",
      "Project Leaders",
      "Project Analysts",
      "Team Leaders"
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

export default ProjectManagementProfessionalPrepOnlineCourse;
