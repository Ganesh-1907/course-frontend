import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseHero from "@/components/courses/CourseHero";
import CourseFeatures from "@/components/courses/CourseFeatures";
import CourseTabs from "@/components/courses/CourseTabs";
import CourseSidePanel from "@/components/courses/CourseSidePanel";
import CourseHighlights from "@/components/courses/overview/CourseHighlights";
import CourseCareerUpliftment from "@/components/courses/overview/CourseCareerUpliftment";
import CourseBenefits from "@/components/courses/benefits/CourseBenefits";
import CourseCommonAttendees from "@/components/courses/benefits/CourseCommonAttendees";
import CoursePrerequisites from "@/components/courses/prerequisites/CoursePrerequisites";
import CourseStepByStepProcess from "@/components/courses/prerequisites/CourseStepByStepProcess";
import CourseCertificate from "@/components/courses/prerequisites/CourseCertificate";
import CourseCurriculum from "@/components/courses/curriculum/CourseCurriculum";
import CourseLearningObjectives from "@/components/courses/curriculum/CourseLearningObjectives";
import CourseCorporateOptUs from "@/components/courses/CourseCorporateOptUs";
import CourseClients from "@/components/courses/CourseClients";
import CourseTrainers from "@/components/courses/CourseTrainers";
import CourseFAQs from "@/components/courses/faqs/CourseFAQs";
import CourseWhySimpliaxis from "@/components/courses/CourseWhySimpliaxis";

import { 
  Users, 
  Monitor, 
  Settings, 
  UserCheck, 
  Map,
  Award
} from "lucide-react";

const QualitySixSigmaFundamentals = () => {
  // --- Page Content Constants ---
  const heroData = {
  courseName: "Six Sigma Fundamentals Certification Training",
  breadcrumbName: "Six Sigma Fundamentals Training",
  rating: "5.0",
  enrolledCount: "45k+",
  subtitle: "Build a Strong Foundation in Process Excellence and Quality Management",
  topLabel: "Certified Six Sigma Fundamentals Program",
  benefits: [
    "Six Sigma was pioneered in 1986 to enhance business performance through defect reduction.",
    "The methodology focuses on improving operational efficiency and maximizing customer satisfaction.",
    "Organizations value professionals skilled in Six Sigma principles and quality tools.",
    "This foundational program introduces core Six Sigma concepts in a structured format.",
    "Ideal starting point for individuals planning to pursue advanced Green Belt and Black Belt certifications."
  ],
  mainImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070",
  badgeImage: "/csm-badge.png"
};

const highlights = [
  {
    icon: <Users className="w-6 h-6" />,
    text: "Develop structured problem-solving capabilities using proven quality methodologies."
  },
  {
    icon: <Award className="w-6 h-6" />,
    text: "Gain competitive advantage in quality and operations roles across industries."
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    text: "Learn to apply DMAIC framework for systematic process improvement."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    text: "Strengthen analytical thinking and data-based decision-making skills."
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    text: "Improve operational performance by reducing variation and process defects."
  },
  {
    icon: <Map className="w-6 h-6" />,
    text: "Build foundation for advanced Six Sigma certifications."
  }
];

 const careerUpliftmentData = {
  courseName: "Six Sigma Fundamentals",
  stats: {
    averageIncome: "$85k-115k",
    incomeLabel: "average annual salary range",
    employmentGrowth: "High Demand",
    growthLabel: "Across Manufacturing, IT & Services"
  },
  attendees: [
    { group: ["Quality Professionals", "Process Improvement Specialists", "Operations Managers", "Business Analysts"] },
    { group: ["Project Coordinators", "Team Leaders", "Manufacturing Engineers"] }
  ],
  companies: [
    { name: "General Electric", url: "" },
    { name: "Toyota", url: "" },
    { name: "Motorola", url: "" },
    { name: "Siemens", url: "" },
    { name: "Microsoft", url: "" }
  ],
  outcomes: [
    "Understand process variation and defect reduction techniques.",
    "Apply DMAIC framework in real business environments.",
    "Use quality tools to improve efficiency and reduce operational risks.",
    "Support continuous improvement initiatives within organizations."
  ],
  outcomesTitle: "Key Learning Outcomes",
  outcomesFooter: "Upon completion, participants can contribute effectively to process optimization and quality enhancement initiatives across various domains."
};

  const individualBenefits = [
    {
      title: "Enhance Problem-Solving Skills",
      description: "Six Sigma fundamentals training will strengthen your analytical and problem-solving abilities, making you a valuable asset to any organization."
    },
    {
      title: "Provide Career Advancement",
      description: "Six Sigma certification training will increase your marketability and open doors to higher positions in quality and operations management."
    },
    {
      title: "Earn Global Recognition",
      description: "The Six Sigma Fundamentals certification is recognized worldwide, enabling you to apply your skills effectively and excel in your career path globally."
    }
  ];

  const corporateBenefits = [
    {
      title: "Boost Operational Efficiency",
      description: "Six Sigma training will increase the organization's operational efficiency by streamlining processes and reducing waste and defects."
    },
    {
      title: "Reduce Costs",
      description: "By identifying and eliminating process inefficiencies, organizations can significantly reduce operational costs."
    },
    {
      title: "Improve Quality Standards",
      description: "Six Sigma methodologies ensure consistent quality across all business processes and products."
    },
    {
      title: "Increase Customer Satisfaction",
      description: "Organizations can enhance customer satisfaction by delivering higher quality products and services through Six Sigma practices."
    }
  ];

  const attendeesList = [
    "Quality Managers",
    "Process Analysts",
    "Operations Managers",
    "Business Analysts",
    "Team Leads",
    "Project Managers",
    "Manufacturing Supervisors"
  ];

  const prerequisitesData = {
    courseName: "Six Sigma Fundamentals",
    items: [
      "Basic understanding of business processes.",
      "High school diploma or equivalent.",
      "Willingness to learn statistical and process improvement concepts."
    ],
    subtitle: "What are the Prerequisites Required for Six Sigma Fundamentals Training?"
  };

  const certificationSteps = [
    {
      title: "Enroll in Training",
      description: "Register for Simpliaxis's Six Sigma Fundamentals training program and receive access to all course materials.",
      color: "#ff843d"
    },
    {
      title: "Complete the Course",
      description: "Attend the 8-hour live training sessions and complete all assignments and case studies.",
      color: "#2ecc71"
    },
    {
      title: "Pass the Exam",
      description: "Successfully complete the Six Sigma Fundamentals certification exam demonstrating your understanding of core concepts.",
      color: "#3498db"
    },
    {
      title: "Get Certified",
      description: "Receive your Six Sigma Fundamentals certification instantly and gain access to the professional community.",
      color: "#9b59b6" 
    }
  ];

  const curriculumModules = [
    {
      title: "Understand the basics and definition of Six Sigma.",
      topics: [
        "What is Six Sigma?",
        "History and evolution of Six Sigma",
        "Six Sigma vs Lean methodologies",
        "Benefits of Six Sigma"
      ]
    },
    {
      title: "Learn the DMAIC (Define, Measure, Analyze, Improve, Control) approach.",
      topics: [
        "Define phase overview",
        "Measure phase techniques",
        "Analyze phase strategies",
        "Improve phase implementation",
        "Control phase maintenance"
      ]
    },
    {
      title: "Explore the evolution of continuous improvement methods.",
      topics: [
        "Basic statistics and variation",
        "Normal distribution",
        "Process capability",
        "Hypothesis testing fundamentals"
      ]
    },
    {
      title: "Know when to apply Six Sigma in business processes.",
      topics: [
        "Process mapping techniques",
        "Value stream mapping",
        "Identifying bottlenecks",
        "Process optimization"
      ]
    },
    {
      title: "Understand the different roles within Six Sigma.",
      topics: [
        "Control charts",
        "Fishbone diagrams",
        "Pareto analysis",
        "Root cause analysis"
      ]
    }
  ];

 const learningObjectives = [
  {
    title: "Understand Six Sigma Principles",
    description: "Acquire foundational knowledge of Six Sigma philosophy and quality management concepts."
  },
  {
    title: "Apply DMAIC Framework",
    description: "Learn how to implement Define, Measure, Analyze, Improve, and Control phases effectively."
  },
  {
    title: "Interpret Statistical Data",
    description: "Develop capability to analyze data trends and process performance metrics."
  },
  {
    title: "Utilize Quality Improvement Tools",
    description: "Apply essential tools like Pareto charts, fishbone diagrams, and control charts."
  },
  {
    title: "Drive Continuous Improvement",
    description: "Support sustainable operational improvements across business functions."
  },
  {
    title: "Prepare for Advanced Levels",
    description: "Build a strong base for pursuing Six Sigma Green Belt and Black Belt certifications."
  }
];

  const faqCategories = [
    {
      id: "courses",
      label: "FAQ Courses",
      items: [
        {
          question: "What is Six Sigma Fundamentals Certification?",
          answer: "Six Sigma Fundamentals certification provides foundational knowledge of Six Sigma methodology, DMAIC framework, and quality improvement tools. It's designed for professionals starting their Six Sigma journey."
        },
        {
          question: "What are the prerequisites for Six Sigma Fundamentals training?",
          answer: "There are no strict prerequisites. Basic understanding of business processes and willingness to learn is sufficient. High school diploma or equivalent is recommended."
        },
        {
          question: "What are the benefits of Six Sigma Fundamentals certification?",
          answer: "Benefits include enhanced problem-solving skills, career advancement opportunities, global recognition, and the ability to drive process improvements in your organization."
        },
        {
          question: "How long does the Six Sigma Fundamentals course take?",
          answer: "The course consists of 8 hours of live training. Most participants complete the entire program within 2-3 weeks, attending sessions at their convenience."
        }
      ]
    },
    {
      id: "payment",
      label: "FAQ Payment",
      items: [
        {
          question: "What are the payment options available?",
          answer: "We accept all major credit cards, debit cards, and net banking. You can also pay via PayPal or bank transfer for corporate bookings."
        }
      ]
    },
    {
      id: "generic",
      label: "FAQ Generic",
      items: [
        {
          question: "Will I get a certificate after the training?",
          answer: "Yes, upon successful completion of the training and certification exam, you will receive your Six Sigma Fundamentals certificate instantly."
        }
      ]
    }
  ];

  const corporateOptUsData = {
    courseName: "Six Sigma Fundamentals",
    description: "At Simpliaxis, we provide customized corporate training designed to align with your team’s unique environment, challenges, and business objectives. Our tailored learning approach helps organizations bridge skill gaps and stay competitive in today’s fast-evolving industry landscape. Delivering training programs globally, we support MNCs, startups, and enterprises across diverse sectors with industry-relevant knowledge and practical expertise. Trusted by numerous clients worldwide, our highly qualified trainers and subject matter experts design and deliver customized modules that address specific organizational needs and drive measurable business outcomes."
  };

const overviewText = {
  title: "Overview of Six Sigma Fundamentals Course",
  sections: [
    {
      text: "Six Sigma Fundamentals is an intensive one-day program that can be completed either online or in an offline classroom format based on your convenience. The course introduces participants to the essential principles of Six Sigma and demonstrates how these concepts can be applied within organizations to drive measurable success."
    },
    {
      text: "As organizations increasingly seek skilled Six Sigma professionals, enrolling in this foundational course at an early stage can provide a competitive advantage. The program is designed to build a strong base in quality improvement methodologies and practical implementation techniques."
    }
  ],
  q1: {
    title: "How is the Training Delivered?",
    content: [
      "The training is conducted through interactive online sessions that allow live face-to-face engagement with experienced trainers. These sessions provide a collaborative learning environment where participants can clarify doubts and gain deeper insights into Six Sigma concepts.",
      "Workshops are also organized to provide practical exposure, enabling learners to understand real-world scenarios and develop problem-solving capabilities through guided exercises."
    ]
  },
  q2: {
    title: "What Does the Course Include?",
    content: [
      "Participants receive recorded sessions for flexible revision, along with weekend assignments to reinforce learning and strengthen conceptual clarity.",
      "Regular assessments and progress evaluations are conducted by trainers to ensure continuous improvement throughout the program.",
      "The complete online training typically spans up to 28 hours, ensuring participants gain comprehensive knowledge and confidence to apply Six Sigma principles professionally."
    ]
  }
};

  // --- Tab Contents ---
  const overviewTab = (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
        <h4 className="text-[14px] text-slate-500 font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
          Course Overview
        </h4>
        <h2 className="text-2xl md:text-3xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
          {overviewText.title} <span className="text-blue-400">✦</span>
        </h2>
        <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
          {overviewText.sections.map((section, idx) => (
            <p key={idx}>{section.text}</p>
          ))}
          
          <h3 className="text-2xl font-black text-[#001c3d] pt-4">{overviewText.q1.title}</h3>
          {overviewText.q1.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <h3 className="text-2xl font-black text-[#001c3d] pt-4">{overviewText.q2.title}</h3>
          {overviewText.q2.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      <CourseHighlights 
        courseName="Six Sigma Fundamentals" 
        highlights={highlights} 
      />
      <CourseCareerUpliftment 
        courseName={careerUpliftmentData.courseName}
        stats={careerUpliftmentData.stats}
        attendees={careerUpliftmentData.attendees}
        companies={careerUpliftmentData.companies}
        outcomes={careerUpliftmentData.outcomes}
        outcomesTitle={careerUpliftmentData.outcomesTitle}
        outcomesFooter={careerUpliftmentData.outcomesFooter}
      />
    </div>
  );

  const benefitsTab = (
    <div className="space-y-6">
      <CourseBenefits 
        courseName="Six Sigma Fundamentals"
        individualBenefits={individualBenefits}
        corporateBenefits={corporateBenefits}
      />
      <CourseCommonAttendees 
        courseName="Six Sigma Fundamentals"
        attendees={attendeesList}
      />
    </div>
  );

  const prerequisitesTab = (
    <div className="space-y-6">
      <CoursePrerequisites 
        courseName={prerequisitesData.courseName}
        prerequisites={prerequisitesData.items}
        subtitle={prerequisitesData.subtitle}
      />
      <CourseStepByStepProcess 
        courseName="Six Sigma Fundamentals"
        steps={certificationSteps}
      />
      <CourseCertificate 
        courseName="Six Sigma Fundamentals" 
      />
    </div>
  );

  const tabs = [
    { id: "overview", label: "Course overview", content: overviewTab },
    { id: "benefits", label: "Benefits", content: benefitsTab },
    { id: "prerequisites", label: "Prerequisites", content: prerequisitesTab },
    { 
      id: "curriculum", 
      label: "Curriculum", 
      content: <CourseCurriculum courseName="Six Sigma Fundamentals" modules={curriculumModules} /> 
    },
    { 
      id: "faqs", 
      label: "FAQs", 
      content: <CourseFAQs courseName="Six Sigma Fundamentals" categories={faqCategories} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-green-600 via-green-500 to-green-600" />
      <Header />

      <main className="pt-16">
        <CourseHero {...heroData} />
        
        {/* <CourseFeatures /> */}

        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Left Main Content */}
            <div>
              <CourseTabs tabs={tabs} />
              
              <CourseLearningObjectives 
                courseName="Six Sigma Fundamentals"
                objectives={learningObjectives}
              />

              <CourseCorporateOptUs {...corporateOptUsData} />

              {/* <CourseClients />
              <CourseTrainers />
              <CourseWhySimpliaxis /> */}
            </div>

            {/* Right Side Panel */}
            <div className="relative w-full lg:w-[340px] xl:w-[360px] lg:justify-self-end">
              <div className="sticky top-24">
                {/* <CourseSidePanel /> */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QualitySixSigmaFundamentals;
