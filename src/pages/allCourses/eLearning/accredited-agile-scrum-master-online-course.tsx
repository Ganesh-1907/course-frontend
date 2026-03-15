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

const AccreditedAgileScrumMasterOnlineCourse = () => {
  const courseData = {
    courseName: "Accredited Agile Scrum Master Online Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "13Hrs",
    level: "Beginner",
    description: "Gain a strong understanding of Agile principles and the Scrum framework with our Accredited Agile Scrum Master E-Learning course. This program introduces Scrum values, roles, events, and artifacts, and explains how they work together to support successful project delivery. You will explore important topics such as Agile planning, team coaching, project metrics, and scaling Agile practices. Through practical exercises, case studies, and discussions, you will strengthen your Agile knowledge and develop the confidence to lead Scrum teams effectively. This course is ideal for professionals who want to improve their Agile project management skills and successfully guide Agile initiatives.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "13 hours of on-demand video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "21 downloadable learning materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "13 hours of on-demand video content",
      "21 downloadable learning materials",
      "Accessible on any device",
      "365 days of course access",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Understanding Agile Principles and Values:",
        description: "Learn the fundamental concepts of Agile methodology and understand the core values that guide Agile project management practices."
      },
      {
        title: "Understanding Scrum Framework:",
        description: "Explore the Scrum framework, including its roles, events, and artifacts, and learn how they promote collaboration and iterative development."
      },
      {
        title: "Applying Agile Estimation and Planning:",
        description: "Understand effective techniques for estimating and planning Agile projects while adapting to evolving requirements and priorities."
      },
      {
        title: "Coaching and Facilitating Scrum Teams:",
        description: "Develop coaching and facilitation skills that help improve collaboration, productivity, and performance within Scrum teams."
      },
      {
        title: "Applying Agile Metrics and Reporting:",
        description: "Learn how to track Agile project progress and measure success using practical Agile metrics and reporting techniques."
      },
      {
        title: "Scaling Agile Practices:",
        description: "Understand strategies for implementing Agile methodologies in larger organizations and adapting Agile practices for complex projects."
      }
    ],
    benefits: [
      {
        title: "Enhanced Project Management Skills:",
        description: "Build a strong understanding of Agile principles and Scrum practices that help you manage projects effectively in dynamic environments."
      },
      {
        title: "Improved Team Collaboration:",
        description: "Learn coaching and facilitation methods that encourage better communication and collaboration within Scrum teams."
      },
      {
        title: "Adaptive Planning and Estimation:",
        description: "Gain knowledge of Agile planning and estimation techniques that support flexible project management and quick adaptation to change."
      },
      {
        title: "Effective Scaling of Agile Practices:",
        description: "Explore approaches for applying Agile practices in larger teams and organizations while maintaining efficiency and collaboration."
      },
      {
        title: "Preparation for Scrum Master Certification:",
        description: "Acquire the knowledge and skills needed to prepare for Scrum Master certification exams and strengthen your professional credentials in Agile project management."
      }
    ],
    modules: [
      {
        title: "Accredited Agile Scrum Master Online Course",
        duration: "31 topics",
        lectures: [
          { title: "Course Overview" },
          { title: "Overview of the 2019 Syllabus Updates" },
          { title: "Agile Mindset and Thinking" },
          { title: "The Agile Manifesto" },
          { title: "Agile Principles" },
          { title: "Waterfall vs Agile" },
          { title: "Agile Methodologies" },
          { title: "Agile Methodologies – Part 2" },
          { title: "Agile Methodologies – Part 3" },
          { title: "Agile Methodologies – Part 4" },
          { title: "Agile Methodologies – 2019 Update" },
          { title: "The Scrum Team" },
          { title: "Developing Scrum Teams" },
          { title: "Common Team Challenges: Resistance" },
          { title: "Common Team Challenges – Part 2" },
          { title: "Common Team Challenges: Team Interactions" },
          { title: "Scrum Team Roles" },
          { title: "Introduction to Scrum Planning" },
          { title: "User Stories in Scrum Planning" },
          { title: "Product Backlog and User Stories" },
          { title: "Planning Layers in Scrum" },
          { title: "Sprint Planning Fundamentals" },
          { title: "Sprint Planning – Part 2" },
          { title: "Velocity, Capacity, and Estimation" },
          { title: "Estimation Techniques Continued" },
          { title: "Return on Investment in Scrum" },
          { title: "Tracking Sprint Progress" },
          { title: "Closing the Sprint" },
          { title: "Adapting to Agile Environments" },
          { title: "Exam Preparation" },
          { title: "Exam Preparation – Part 2" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "There are no mandatory prerequisites for enrolling in the Accredited Agile Scrum Master online course. However, having a basic understanding of Agile or Scrum concepts can be helpful."
    },
    faqs: [
      {
        question: "1. What is the Accredited Agile Scrum Master E-Learning Course?",
        answer: "The Accredited Agile Scrum Master E-Learning Course is an online training program designed to help learners understand Agile principles and the Scrum framework. It covers essential concepts such as Scrum roles, events, artifacts, Agile planning, team coaching, performance metrics, and scaling Agile practices."
      },
      {
        question: "2. How do I enroll in the Accredited Agile Scrum Master online course?",
        answer: "To enroll, visit the Viovn website and navigate to the E-Learning section. Select the Accredited Agile Scrum Master course, review the course details, complete the registration form, and make the payment. After registration is confirmed, you will receive login credentials to access the course materials and begin learning."
      },
      {
        question: "3. Is prior Agile experience required to enroll?",
        answer: "No prior experience in Agile is required to enroll in this course. However, having basic knowledge of Agile concepts can help you learn the material more quickly."
      },
      {
        question: "4. Do I need prior knowledge of Scrum to take this course?",
        answer: "No prior Scrum knowledge is required. The course starts with fundamental concepts, making it suitable for beginners."
      },
      {
        question: "5. How long does it take to complete the Accredited Agile Scrum Master online course?",
        answer: "The course includes approximately 13 hours of training content. Since it is self-paced, learners can complete it according to their own schedule."
      },
      {
        question: "6. Is the course self-paced or are there deadlines?",
        answer: "The course is completely self-paced. There are no strict deadlines, allowing learners to complete the program at their convenience."
      },
      {
        question: "7. Will I receive a certificate after completing the course?",
        answer: "Yes, participants will receive a course completion certificate from Viovn after successfully finishing the training."
      },
      {
        question: "8. Can I access the course on different devices?",
        answer: "Yes, the course can be accessed from multiple devices including laptops, tablets, and smartphones, allowing you to learn anytime and anywhere."
      }
    ],
    whoCanBuy: [
      "Project Managers",
      "Team Leaders",
      "Software Developers",
      "Software Testers",
      "Product Owners",
      "Business Analysts",
      "Quality Assurance Professionals",
      "Anyone interested in Agile methodologies"
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

export default AccreditedAgileScrumMasterOnlineCourse;
