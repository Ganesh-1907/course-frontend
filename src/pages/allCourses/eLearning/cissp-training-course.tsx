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

const CISSPTrainingCourse = () => {
  const courseData = {
    courseName: "CISSP Certified Information Systems Security Professional (2024) Training",
    rating: "4.9",
    enrolledCount: "2.1k+",
    duration: "39.5Hrs",
    level: "Advanced",
    description: "The CISSP Certified Information Systems Security Professional (2024) Training course prepares professionals to design, implement, and manage a strong cybersecurity program. This comprehensive course covers the eight CISSP domains including security and risk management, asset security, security architecture, network security, identity and access management, security operations, and software development security. Participants will gain a deep understanding of modern cybersecurity practices and governance models used to protect enterprise systems and data. The training also prepares learners for the globally recognized ISC2 CISSP certification exam.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 498",
      discounted: "USD 249",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "39.5 Hours Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Interactive Learning Modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Launch Your Cybersecurity Career", image: "https://cdn-icons-png.flaticon.com/512/2991/2991231.png" },
      { text: "ISC2 CISSP Exam Prep Strategies", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Lifetime Course Content Access", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "39.5 Hours Video Content",
      "Interactive Learning Modules",
      "Launch Your Cybersecurity Career",
      "ISC2 CISSP Exam Prep Strategies",
      "Lifetime Course Content Access"
    ],
    outcomes: [
      {
        title: "Security and Risk Management",
        description: "Learn how to design governance frameworks, manage security policies, and evaluate organizational risks in cybersecurity environments."
      },
      {
        title: "Network and Infrastructure Security",
        description: "Understand how to secure network architectures, protocols, and communication systems against cyber threats."
      },
      {
        title: "Identity and Access Management",
        description: "Learn authentication, authorization, and access control techniques used to secure enterprise systems."
      },
      {
        title: "Cryptography and Data Protection",
        description: "Understand encryption, cryptographic protocols, and data protection techniques used to secure sensitive information."
      },
      {
        title: "Security Operations and Incident Response",
        description: "Learn how to detect, monitor, and respond to cybersecurity threats through security operations and incident management strategies."
      },
      {
        title: "Software and Application Security",
        description: "Understand secure software development practices and how to protect applications from vulnerabilities."
      }
    ],
    benefits: [
      {
        title: "Industry Recognition",
        description: "Earn an internationally acknowledged CISSP certification to enhance your professional standing."
      },
      {
        title: "Career Growth",
        description: "Opening doors to higher levels in management and information security positions."
      },
      {
        title: "Practical Skills",
        description: "Learn practical security concepts to secure networks, systems, and data."
      },
      {
        title: "Flexible Learning",
        description: "Learn online on your own time, at any time, and from any location."
      },
      {
        title: "Exam Preparation",
        description: "Prepare yourself for your CISSP certification exam with professional assistance."
      }
    ],
    modules: [
      {
        title: "Course Content:",
        duration: "15 topics",
        lectures: [
          { title: "Introduction to CISSP and Information Security" },
          { title: "Access Control & Security Principles" },
          { title: "Cryptography & Physical Security" },
          { title: "Security Operations & Risk Management" },
          { title: "Business Continuity & Disaster Recovery Planning" },
          { title: "Legal, Regulatory, and Software Security" },
          { title: "Security Program Management & Lifecycle" },
          { title: "Networking & Advanced Security Skills" },
          { title: "Obtaining Security Certifications" },
          { title: "Ensure Information Security" },
          { title: "Assessing Information Security Risk" },
          { title: "Security Program Management" },
          { title: "Information Assurance Lifecycle Implementation" },
          { title: "Understand Network Security Protocols" },
          { title: "Identify Security Terminology" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "Candidates are recommended to have at least five years of professional experience in information security or related fields such as IT security, risk management, or network security. However, learners without this experience can still take the course to build foundational cybersecurity knowledge."
    },
    faqs: [
      {
        question: "1. Who offers this CISSP certification?",
        answer: "This CISSP certification is provided by (ISC)², the International Information System Security Certification Consortium, which is a world-renowned organisation in cybersecurity."
      },
      {
        question: "2. Who should be taking this course?",
        answer: "Professionals who have experience in IT security or security management, or anyone who wants to establish a solid security foundation, can enroll in this course."
      },
      {
        question: "3. What are the prerequisites for CISSP?",
        answer: "Ideally, the candidates must be able to demonstrate at least five years of experience in the field of information security."
      },
      {
        question: "4. What to Expect in the CISSP Exam?",
        answer: "The CISSP exam covers eight of the most important areas of information security: Security and Risk Management, Asset Security, Security Architecture and Engineering, Communication and Network Security, Identity and Access Management (IAM), Security Assessment and Testing, Security Operations, and Software Development Security."
      },
      {
        question: "5. What is the duration of the CISSP course?",
        answer: "Our Viovn offers more than 39 hours of video content that makes you crack the certification with confidence."
      },
      {
        question: "6. What is the difficulty level of the CISSP exam?",
        answer: "The CISSP test is considered to be somewhat difficult as it covers eight areas of security. A thorough training program and preparation will greatly increase your chances of passing."
      },
      {
        question: "7. What is the CISSP exam format?",
        answer: "The CISSP exam consists of multiple-choice and advanced innovative questions."
      },
      {
        question: "8. How many questions are on the exam?",
        answer: "There are 100–150 questions in the CAT (Computer Adaptive Testing) format."
      },
      {
        question: "9. How long is the CISSP exam, and what is the passing score?",
        answer: "The test has a time limit of 3 hours, and the score for passing is 700 points out of 1000 points"
      },
      {
        question: "10. What is the average salary for a Certified Information Systems Security Professional?",
        answer: "The salary of a Certified Information Systems Security Professional (CISSP) ranges from $120,000 to $147,000 a year."
      }
    ],
    whoCanBuy: [
      "Security Analysts",
      "Information Security Managers",
      "Security Consultants",
      "IT Auditors",
      "Network Architects",
      "Security Engineers",
      "Chief Information Security Officers (CISOs)",
      "Professionals preparing for CISSP certification"
    ],
    reviews: [
      {
        name: "James Anderson",
        role: "CISO",
        rating: 5,
        content: "The depth of this course is outstanding. It clearly explains the eight domains and provides excellent strategies for the exam. Highly recommended for cybersecurity professionals.",
        date: "2 weeks ago"
      },
      {
        name: "Lisa Wong",
        role: "Security Analyst",
        rating: 5,
        content: "Comprehensive and well-structured. The sections on risk management and network security were particularly detailed and easy to follow.",
        date: "1 month ago"
      }
    ],
    relatedCourses: [
      {
        title: "Certified Information Security Manager (CISM)",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=400",
        price: "USD 249",
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

export default CISSPTrainingCourse;
