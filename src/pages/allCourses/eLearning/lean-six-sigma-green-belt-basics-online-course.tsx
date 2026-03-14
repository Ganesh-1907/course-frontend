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

const LeanSixSigmaGreenBeltBasicsOnlineCourse = () => {
  const courseData = {
    courseName: "Lean Six Sigma Green Belt Basics Online Course",
    rating: "4.8",
    enrolledCount: "1k+",
    duration: "2Hrs",
    level: "Beginner",
    description: "Learn the fundamentals of Lean Six Sigma Green Belt with this comprehensive online certification course. It is designed for project managers, IT professionals, architects, and anyone interested in building a career in process improvement. Developed by an experienced Senior Project Manager with a PhD in Management, this course covers essential topics such as Lean principles, Six Sigma methodology, statistical concepts, Just-In-Time (JIT), Kaizen, quality control, and more. By the end of the course, you will gain practical skills to improve operational efficiency and understand key concepts of process optimization.",
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    previewImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    pricing: {
      original: "USD 298",
      discounted: "USD 149",
      percentage: "50%",
      timeLeft: "2 days"
    },
    inclusions: [
      { text: "2 hours of on-demand video content", image: "https://cdn-icons-png.flaticon.com/512/3048/3048381.png" },
      { text: "3 downloadable learning materials", image: "https://cdn-icons-png.flaticon.com/512/2991/2991195.png" },
      { text: "Accessible on any device", image: "https://cdn-icons-png.flaticon.com/512/689/689307.png" },
      { text: "365 days of course access", image: "https://cdn-icons-png.flaticon.com/512/4305/4305432.png" },
      { text: "Certificate of completion", image: "https://cdn-icons-png.flaticon.com/512/2912/2912761.png" }
    ],
    sidePanelInclusions: [
      "2 hours of on-demand video content",
      "3 downloadable learning materials",
      "Accessible on any device",
      "365 days of course access",
      "Certificate of completion"
    ],
    outcomes: [
      {
        title: "Operate as a Six Sigma Green Belt Manager:",
        description: "Develop the knowledge and skills required to effectively perform the responsibilities of a Six Sigma Green Belt manager within an organization."
      },
      {
        title: "Optimize Operational Efficiency:",
        description: "Learn how to apply Six Sigma techniques to improve operational efficiency and streamline processes in your organization."
      },
      {
        title: "Master Six Sigma Tools:",
        description: "Gain practical experience with essential tools used in Six Sigma methodology for analyzing and improving processes."
      },
      {
        title: "Comprehend Lean Principles:",
        description: "Understand the core concepts of Lean principles and how they differ from Six Sigma, enabling you to apply both approaches effectively for process improvement."
      },
      {
        title: "Enhance Productivity:",
        description: "Learn strategies to increase productivity by applying Six Sigma methods to identify inefficiencies and optimize workflows."
      },
      {
        title: "Quality-Oriented Management:",
        description: "Develop a strong focus on quality management by understanding continuous improvement principles through Lean Six Sigma practices."
      }
    ],
    benefits: [
      {
        title: "Flexible Learning Environment:",
        description: "Study at your own pace with the convenience of online learning. The course allows you to access materials anytime and anywhere, making it easy to balance learning with your personal and professional commitments."
      },
      {
        title: "Accessible Resources:",
        description: "Gain access to a variety of digital learning resources including video lectures, interactive modules, and downloadable materials designed to support different learning styles."
      },
      {
        title: "Quality-Oriented Management:",
        description: "Develop a quality-driven mindset by learning continuous improvement strategies that help organizations deliver better products and services."
      },
      {
        title: "Versatile Applicability:",
        description: "The course covers topics such as Lean principles, DMAIC, DMADV, and basic statistical tools. These concepts are applicable across multiple industries including project management, IT, manufacturing, and business operations."
      },
      {
        title: "Cost-Effective Learning:",
        description: "Online learning eliminates travel and accommodation costs associated with traditional classroom training, making this course an affordable way to gain valuable professional skills."
      }
    ],
    modules: [
      {
        title: "Lean Six Sigma Green Belt Basics",
        duration: "25 topics",
        lectures: [
          { title: "Course Introduction" },
          { title: "Course Structure Overview" },
          { title: "Introduction to Six Sigma" },
          { title: "Introduction to Lean" },
          { title: "Importance of Lean Six Sigma" },
          { title: "Understanding Six Sigma Green Belt Certification" },
          { title: "Define Phase" },
          { title: "Measure Phase" },
          { title: "Analyze Phase" },
          { title: "Improve Phase" },
          { title: "Control Phase" },
          { title: "Design Processes and DMADV" },
          { title: "Understanding Metrics" },
          { title: "Standard Normal Distribution and Central Limit Theorem" },
          { title: "SPSS – Creating a Pareto Chart" },
          { title: "5S Methodology" },
          { title: "Just-In-Time (JIT) and Kanban" },
          { title: "Total Productive Maintenance (TPM)" },
          { title: "Quality Management Focus" },
          { title: "Kaizen and Continuous Improvement" },
          { title: "Leadership and Learning" },
          { title: "Controlling Projects" },
          { title: "Lean Six Sigma in the Service Industry" },
          { title: "Understanding Customer Needs" },
          { title: "Course Conclusion" }
        ]
      }
    ],
    prerequisites: {
      title: "Prerequisites:",
      description: "To complete the Lean Six Sigma Green Belt Basics certification, learners should have a basic understanding of mathematics and some familiarity with statistical concepts. Basic knowledge of Microsoft Excel, including working with charts and graphs, is also helpful for completing certain exercises in the course."
    },
    faqs: [
      {
        question: "1. What does the Lean Six Sigma Green Belt Basics course cover?",
        answer: "The course introduces the core principles and tools of Lean Six Sigma methodology. Topics include the DMAIC framework, Lean principles for eliminating waste, Six Sigma techniques for reducing defects, project management fundamentals, data analysis, and process improvement strategies."
      },
      {
        question: "2. What skills should a Six Sigma Green Belt possess?",
        answer: "A Six Sigma Green Belt should be proficient in the DMAIC methodology, capable of performing root cause analysis, and skilled in using statistical tools for data analysis. They should also be able to map processes, design data collection plans, apply Lean principles, and effectively manage improvement projects."
      },
      {
        question: "3. What is the Lean Six Sigma Green Belt concept?",
        answer: "The Lean Six Sigma Green Belt represents a level of expertise in process improvement. Professionals with this certification are trained to apply Lean principles and Six Sigma tools to improve quality and efficiency within organizational processes."
      },
      {
        question: "4. Is the Lean Six Sigma Green Belt Basics course difficult?",
        answer: "The course is designed to provide foundational knowledge in Lean Six Sigma concepts. While some topics involve statistical thinking and structured problem-solving, the material is presented in a practical and accessible manner for learners from various backgrounds."
      },
      {
        question: "5. What are the requirements for the Lean Six Sigma Green Belt Basics course?",
        answer: "Learners should have basic mathematical knowledge and a general understanding of statistical terms. Familiarity with Microsoft Excel is also helpful for analyzing data and creating charts."
      },
      {
        question: "6. Which platform is best for preparing for the Lean Six Sigma Green Belt Basics certification?",
        answer: "Simpliaxis offers a well-structured Lean Six Sigma Green Belt Basics course with flexible online learning, practical insights, and accessible resources that help learners prepare effectively."
      },
      {
        question: "7. What is the difference between Six Sigma Green Belt and Lean Six Sigma Green Belt Basics?",
        answer: "Six Sigma Green Belt primarily focuses on reducing defects and minimizing variation using statistical methods. Lean Six Sigma Green Belt combines Six Sigma with Lean principles, emphasizing both defect reduction and waste elimination to improve overall efficiency."
      },
      {
        question: "8. Will I have access to course materials after completing the course?",
        answer: "Yes, learners will continue to have lifetime access to the course materials even after completing the training."
      },
      {
        question: "9. How can I register for the Lean Six Sigma Green Belt Basics course?",
        answer: "To register, visit the Simpliaxis website, create an account, select the Lean Six Sigma Green Belt Basics course from the catalog, complete the registration form, and finalize the payment process. Once registration is complete, you can log in and begin the course."
      },
      {
        question: "10. Can the Lean Six Sigma Green Belt Basics course be accessed on any device?",
        answer: "Yes, the course is accessible on multiple devices including laptops, tablets, and smartphones, allowing you to learn anytime and anywhere."
      }
    ],
    whoCanBuy: [
      "Project Team Members",
      "Process Improvement Professionals",
      "Managers and Supervisors",
      "Quality Assurance Professionals",
      "Operations Managers",
      "Business Analysts",
      "Engineers and Technical Professionals",
      "Anyone interested in process improvement"
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

export default LeanSixSigmaGreenBeltBasicsOnlineCourse;
