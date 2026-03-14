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

const CertifiedInformationSecurityManagerCourse = () => {
  const courseData = {
    courseName: "Certified Information Security Manager (CISM) Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "14Hrs",
    level: "Advanced",
    description: "The Certified Information Security Manager (CISM) course prepares professionals to manage, design, and oversee enterprise information security programs. This course focuses on key cybersecurity management concepts such as information security governance, risk management, incident management, and security program development. Participants will gain practical knowledge to align security strategies with business objectives and effectively manage organizational security risks. The course also prepares learners for the globally recognized CISM certification exam, enabling them to advance their careers in cybersecurity leadership roles.",
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "14 Hrs Engaging Video Content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "Flexible Self-Paced Learning Modules", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "CISM Exam Preparation Guide", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "Comprehensive Security Management Concepts", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Lifetime Course Access", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "14 Hrs Engaging Video Content",
      "Flexible Self-Paced Learning Modules",
      "CISM Exam Preparation Guide",
      "Comprehensive Security Management Concepts",
      "Lifetime Course Access"
    ],
    outcomes: [
      {
        title: "Information Security Governance",
        description: "Learn how to design and implement security governance frameworks that align security strategies with business goals."
      },
      {
        title: "Information Risk Management",
        description: "Understand risk assessment methodologies and learn how to identify, evaluate, and mitigate cybersecurity risks within organizations."
      },
      {
        title: "Security Program Development",
        description: "Develop skills to design, implement, and manage enterprise information security programs and policies."
      },
      {
        title: "Incident Management",
        description: "Learn how to plan, respond to, and manage security incidents to minimize organizational impact."
      },
      {
        title: "Compliance and Security Controls",
        description: "Understand regulatory requirements and how to implement effective security controls and compliance frameworks."
      },
      {
        title: "Measuring Security Effectiveness",
        description: "Learn techniques to evaluate the effectiveness of information security programs using metrics, audits, and performance indicators."
      }
    ],
    benefits: [
      {
        title: "Career Advancement",
        description: "Achieving CISM certification paves the path to advanced roles such as Information Security Manager, CISO, and other leadership positions in cybersecurity."
      },
      {
        title: "Achieve High Pay",
        description: "CISM-certified professionals often earn 20–40% higher salaries compared to non-certified cybersecurity professionals."
      },
      {
        title: "Professional Credibility",
        description: "CISM certification demonstrates your expertise in managing enterprise security programs and enhances your credibility among employers and peers."
      },
      {
        title: "Global Networking",
        description: "Gain access to a global community of cybersecurity professionals, opening opportunities for collaboration and career growth."
      },
      {
        title: "Career Growth",
        description: "Organizations prioritize certified professionals for leadership roles in information security and risk management."
      }
    ],
    modules: [
      {
        title: "Course outline",
        duration: "7 topics",
        lectures: [
          { title: "Operations Security Management" },
          { title: "Security Program Management" },
          { title: "Certificate Management" },
          { title: "Cybersecurity Risk Management" },
          { title: "Obtaining Security Certifications" },
          { title: "Assessing Information Security Risk" },
          { title: "Measuring Information Security Effectiveness" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites",
      description: "Candidates are recommended to have experience in information security, risk management, or IT governance. For official CISM certification, ISACA requires at least five years of professional work experience in information security, including three years in security management domains."
    },
    faqs: [
      {
        question: "1. What is this CISM course from Simplaixis about?",
        answer: "The CISM course prepares IT specialists to manage, design, and oversee enterprise information security programs. It covers governance, risk management, compliance, and incident response."
      },
      {
        question: "2. Who is the target audience for this CISM Training?",
        answer: "This program is designed for IT security managers, auditors, risk professionals, compliance specialists, and professionals aspiring for senior cybersecurity roles."
      },
      {
        question: "3. What skills will I master?",
        answer: "You will learn information security governance, risk management, security program development, incident management, and security performance evaluation."
      },
      {
        question: "4. What are the prerequisites for CISM?",
        answer: "ISACA recommends at least five years of work experience in information security, including three years in governance, risk management, or incident management domains."
      },
      {
        question: "5. What is the length of the course?",
        answer: "The Simpliaxis CISM course includes approximately 14 hours of self-paced video learning with lifetime access."
      },
      {
        question: "6. What is the career impact after this course?",
        answer: "The course prepares professionals for senior cybersecurity roles such as Information Security Manager, Risk Manager, Security Consultant, and Chief Information Security Officer (CISO)."
      },
      {
        question: "7. Is this course offered as a live session?",
        answer: "No, the course is delivered as a self-paced e-learning program with recorded video modules and 24/7 support."
      },
      {
        question: "8. Do I get a certificate upon completion?",
        answer: "Yes, Simpliaxis provides a course completion certificate after successfully finishing the course modules."
      },
      {
        question: "9. What job opportunities are available after CISM certification?",
        answer: "CISM certification can lead to roles such as Information Security Manager, Risk Manager, Compliance Officer, IT Auditor, Security Consultant, and CISO."
      },
      {
        question: "10. What are the four domains of CISM?",
        answer: "The CISM certification focuses on four domains: Information Security Governance, Information Risk Management, Security Program Development and Management, and Incident Management."
      }
    ],
    whoCanBuy: [
      "Information Security Managers",
      "IT Security Professionals",
      "Risk Management Professionals",
      "Security Consultants",
      "IT Auditors",
      "Compliance Officers",
      "Cybersecurity Analysts",
      "Professionals preparing for the CISM certification"
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

export default CertifiedInformationSecurityManagerCourse;
