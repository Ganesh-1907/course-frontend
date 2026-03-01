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
  Award,
  BookOpen,
  Network,
  CreditCard,
  FileText,
  Briefcase,
  Globe,
  User,
  Laptop,
  Headset,
  TrendingUp,
  Star
} from "lucide-react";

const PMIAgileCertifiedPractitionerPMIACP = () => {
  const highlights = [
    { "text": "28 Hours of Live Instructor-Led Training" },
    { "text": "Earn 28 Contact Hours" },
    { "text": "Earn 28 PDUs" },
    { "text": "Expert Trainers with Extensive Industry Experience" },
    { "text": "PMI-ACP Exam Application Support" },
    { "text": "Real-World Case Studies and Scenarios" },
    { "text": "Interactive Simulation Exercises" },
    { "text": "Post-Training Doubt-Clearing Sessions" },
    { "text": "24/7 Learning Support" }
  ];

  const individualBenefits = [
    {
      "title": "Enhanced Agile Expertise",
      "description": "Strengthen knowledge and application of Agile practices across industries."
    },
    {
      "title": "Improved Project Management Skills",
      "description": "Manage Agile projects efficiently with structured frameworks."
    },
    {
      "title": "Expanded Career Opportunities",
      "description": "Unlock global career growth with PMI-ACP certification."
    },
    {
      "title": "Professional Recognition",
      "description": "Demonstrate commitment to continuous professional development."
    },
    {
      "title": "Leadership Development",
      "description": "Enhance leadership, communication, and analytical capabilities."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Faster Project Delivery",
      "description": "Accelerate project timelines through Agile best practices."
    },
    {
      "title": "Improved Collaboration",
      "description": "Enhance teamwork and communication within Agile teams."
    },
    {
      "title": "Higher Success Rates",
      "description": "Increase project success through structured Agile implementation."
    },
    {
      "title": "Greater Customer Satisfaction",
      "description": "Deliver value-driven solutions aligned with customer expectations."
    },
    {
      "title": "Organizational Agility",
      "description": "Enable rapid adaptation to market and business changes."
    }
  ];

  const careerStats = {
    averageIncome: '$110k-130k',
    incomeLabel: 'per annum',
    employmentGrowth: '67%',
    growthLabel: '(2022-2025)',
  };

  const attendees = [
    {
      group: [
        'Scrum Masters',
        'Delivery Managers',
        'Product Owners',
        'Agile Coaches',
      ],
    },
    { group: ['Team Leads', 'Development Managers'] },
  ];

  const companies = [
    {
      name: 'Amazon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Cognizant',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
    },
    {
      name: 'IBM',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
      name: 'Accenture',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    },
    {
      name: 'Wipro',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
    },
    {
      name: 'Eurofins',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg',
    },
    {
      name: 'JPMorgan',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg',
    },
  ];

  const outcomes = [
    "Develop a strong Agile mindset and practical application skills.",
    "Implement Scrum, Kanban, Lean, and other Agile frameworks effectively.",
    "Manage Agile projects with improved adaptability and stakeholder alignment.",
    "Utilize Agile metrics for performance tracking and continuous improvement.",
    "Prepare confidently for the PMI-ACP certification examination."
  ];

  const prerequisites = [
    'Active Certified ScrumMaster (CSM) certification',
    'Minimum 12 months of Scrum Master experience within the last five years',
  ];

  const certificationSteps = [
    {
      "title": "Eligibility Verification",
      "description": "Confirm educational qualifications and Agile project experience as per PMI requirements."
    },
    {
      "title": "Complete Training",
      "description": "Attend 28 hours of authorized PMI-ACP training."
    },
    {
      "title": "Prepare for Examination",
      "description": "Practice exam-focused questions and Agile methodologies thoroughly."
    },
    {
      "title": "Earn Certification",
      "description": "Successfully pass the PMI-ACP examination to receive global certification."
    }
  ];

  const curriculumModules = [
    {
      "title": "Agile Foundation",
      "topics": [
        "Experiment Early and Encourage Iterative Learning",
        "Embrace and Promote an Agile Mindset",
        "Build Collaborative and High-Performing Teams",
        "Establish Transparency in Agile Processes",
        "Foster Psychological Safety within Teams",
        "Shorten Feedback Loops for Continuous Improvement",
        "Adapt to Change Effectively",
        "Empower Self-Organized Teams",
        "Facilitate Structured Problem Resolution",
        "Promote Knowledge Sharing Practices",
        "Refine and Prioritize the Product Backlog",
        "Manage Incremental Value Delivery",
        "Visualize Work Using Agile Tools",
        "Actively Engage Customers in Feedback Cycles",
        "Manage Agile Metrics and Risk",
        "Optimize Workflow and Eliminate Waste",
        "Agile Analysis and Design Tools: Roadmaps, User Stories, Personas, Story Maps, Wireframes, Workshops",
        "Agile Estimation Techniques: Story Points, T-Shirt Sizing, Planning Poker, Affinity Estimating",
        "Communication Practices: Information Radiators, Agile Tools, Active Listening, Brainstorming",
        "Agile Metrics: Velocity, Cycle Time, Lead Time, Defect Rate, Work-in-Progress Tracking",
        "Planning and Monitoring: Timeboxing, Iteration Planning, Burn Charts, CFD, Backlog Refinement"
      ]
    },
    {
      "title": "Agile Fundamentals",
      "topics": [
        "Project Charter and Agile Themes",
        "Product Roadmap Development",
        "Product Backlog Management",
        "Minimum Marketable Feature (MMF)",
        "Value-Based Prioritization Techniques",
        "Backlog Grooming Practices",
        "User Story Creation",
        "Personas and Story Mapping",
        "Epics and Feature Breakdown"
      ]
    },
    {
      "title": "Value-Based Prioritization",
      "topics": [
        "Time Value of Money",
        "Return on Investment (ROI)",
        "Net Present Value (NPV)",
        "Internal Rate of Return (IRR)",
        "Opportunity Cost Analysis",
        "Payback Period Evaluation",
        "Customer-Driven Prioritization",
        "Agile Compliance Considerations",
        "Business Case Development"
      ]
    },
    {
      "title": "Agile Methodologies",
      "topics": [
        "Introduction to Agile Frameworks",
        "Scrum Framework Overview",
        "Sprint Planning and Sprint Goals",
        "Sprint Backlog Management",
        "Daily Scrum and Sprint Reviews",
        "Sprint Retrospectives",
        "Scrum of Scrums",
        "Extreme Programming (XP)",
        "Lean Software Development"
      ]
    },
    {
      "title": "Agile Communications",
      "topics": [
        "Agile Communication Management",
        "Co-Located and Distributed Teams",
        "Information Radiators",
        "Kanban and Task Boards",
        "Work-in-Progress Limits",
        "Cumulative Flow Diagram (CFD)",
        "Sprint Burndown and Burnup Charts"
      ]
    },
    {
      "title": "Agile Estimating",
      "topics": [
        "Relative Sizing Techniques",
        "Story Points Estimation",
        "Wideband Delphi Method",
        "Planning Poker",
        "Velocity and Cycle Time",
        "Affinity Estimation",
        "Agile Cost Estimation"
      ]
    },
    {
      "title": "Planning, Monitoring and Adapting",
      "topics": [
        "Timeboxing Strategies",
        "Release and Iteration Planning",
        "Daily Standup Meetings",
        "Variance and Trend Analysis",
        "Agile Task Boards",
        "Kanban Implementation",
        "Work-in-Progress Limits"
      ]
    },
    {
      "title": "Product Quality",
      "topics": [
        "Quality Standards in Agile",
        "Agile Testing Quadrants",
        "Test-Driven Development (TDD)",
        "Acceptance Test-Driven Development (ATDD)",
        "Continuous Integration (CI)",
        "Definition of Done (DoD)",
        "Technical Debt Management"
      ]
    },
    {
      "title": "Agile Risk Management",
      "topics": [
        "Risk Identification and Prioritization",
        "Risk-Adjusted Product Backlog",
        "Expected Monetary Value (EMV)",
        "Risk Burn-Down Chart",
        "Spike Solutions"
      ]
    },
    {
      "title": "Agile Leadership and Soft Skills",
      "topics": [
        "Leadership Theories in Agile",
        "Emotional Intelligence",
        "Conflict Resolution",
        "Negotiation Skills",
        "Servant Leadership",
        "Building High-Performance Teams"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Agile Principles and Mindset",
      "description": "Understand Agile values, principles, and product development strategies aligned with PMI standards."
    },
    {
      "title": "Agile Knowledge and Skills",
      "description": "Enhance leadership, emotional intelligence, collaboration, and problem-solving skills within Agile frameworks."
    },
    {
      "title": "Communication and Team Collaboration",
      "description": "Strengthen communication strategies and promote high-performing Agile teams."
    },
    {
      "title": "Adaptive Planning",
      "description": "Apply adaptive planning techniques to respond effectively to evolving project requirements."
    },
    {
      "title": "Data-Driven Decision Making",
      "description": "Use Agile metrics and reporting tools to evaluate performance and guide improvements."
    },
    {
      "title": "Value-Driven Delivery",
      "description": "Deliver customer-centric solutions through iterative development and continuous feedback."
    },
    {
      "title": "Stakeholder Engagement",
      "description": "Align project goals with stakeholder expectations through structured communication."
    },
    {
      "title": "Risk Management",
      "description": "Identify and mitigate risks effectively within Agile project environments."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "PMI-ACP Certification FAQs",
      "items": [
        {
          "question": "What is the format of the PMI-ACP exam?",
          "answer": "The PMI-ACP exam consists of 120 questions. Out of these, 100 questions are scored and 20 are pre-test questions. The total exam duration is 3 hours."
        },
        {
          "question": "How many PDUs are required for renewal?",
          "answer": "To renew the PMI-ACP certification, you must earn 30 PDUs within a 3-year certification cycle and submit them through PMI’s Continuing Certification Requirements (CCR) system."
        },
        {
          "question": "What is the exam fee?",
          "answer": "The exam fee is $435 for PMI members and $495 for non-members."
        },
        {
          "question": "What is the eligibility requirement?",
          "answer": "Candidates must have a secondary degree, 28 hours of Agile training, 12 months of general project experience (or active PMP/PgMP), and 8 months of Agile project experience."
        },
        {
          "question": "Is PMI-ACP certification worth it?",
          "answer": "Yes. PMI-ACP is globally recognized and highly valued in organizations adopting Agile methodologies. It enhances career growth and professional credibility."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam Structure FAQs",
      "items": [
        {
          "question": "How many attempts are allowed?",
          "answer": "You may attempt the PMI-ACP exam up to three times within your one-year eligibility period."
        },
        {
          "question": "Is there a break during the exam?",
          "answer": "Yes. A 10-minute break is provided after completing the first 60 questions."
        },
        {
          "question": "Can I review previous answers after the break?",
          "answer": "No. Once you begin the break, you cannot return to previously answered questions."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Payment & Enrollment FAQs",
      "items": [
        {
          "question": "Are payments refundable?",
          "answer": "Payments are non-refundable. However, training sessions may be rescheduled as per policy."
        },
        {
          "question": "Do you offer installment options?",
          "answer": "Yes. Flexible payment options including installment plans are available."
        }
      ]
    }
  ];
  const courseFeatures = [
    {
      icon: Users,
      title: 'Guaranteed to',
      subtitle: 'Run Workshops',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: BookOpen,
      title: 'Expert-Led Study',
      subtitle: 'Sessions',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Network,
      title: 'Networking',
      subtitle: 'Opportunities',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: CreditCard,
      title: 'Flexible Monthly',
      subtitle: 'Payment Plans',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: FileText,
      title: 'Real-World Case',
      subtitle: 'Studies',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Briefcase,
      title: 'Hands-On Project',
      subtitle: 'Experience',
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  const courseClients = [
    {
      name: 'Wells Fargo',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg',
    },
    {
      name: 'Infosys',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
    },
    {
      name: 'Bosch',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
    },
    {
      name: 'Capgemini',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg',
    },
    {
      name: 'KPMG',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg',
    },
    {
      name: 'Accenture',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    },
    {
      name: 'Cognizant',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
    },
    {
      name: 'Deloitte',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
    },
    {
      name: 'Hexaware',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexaware_new_logo.svg',
    },
    {
      name: 'Thomson Reuters',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Thomson_Reuters_logo.svg',
    },
  ];

  const courseTrainers = [
    {
      name: 'Ram Srinivasan',
      role: 'Certified Scrum Trainer (CST)',
      rating: '4.8',
      experience: '15+ Years',
      description:
        'Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Axel Wilhelm Berle',
      role: 'Senior Agile Coach',
      rating: '4.9',
      experience: '20+ Years',
      description:
        'Axel Wilhelm Berle has been an international IT consultant and software developer in a wide range of industries, helping teams achieve peak performance.',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: 'Raquel Silva',
      role: 'Agile Coach & Mentor',
      rating: '4.8',
      experience: '10+ Years',
      description:
        'Raquel Silva is an Agile Coach who cares passionately about helping deliver value to clients through sustainable and effective Scrum practices.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const courseWhySimpliaxis = [
    {
      "title": "Global Recognition",
      "description": "PMI-ACP certification is globally recognized and valued across industries."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from certified professionals with extensive real-world Agile experience."
    },
    {
      "title": "Flexible Learning Options",
      "description": "Choose from live virtual and corporate training formats."
    },
    {
      "title": "Lifetime Access",
      "description": "Access session recordings and study materials anytime."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by professionals and enterprises worldwide."
    },
    {
      "title": "End-to-End Support",
      "description": "Comprehensive guidance from enrollment to certification."
    },
    {
      "title": "Interactive Learning Experience",
      "description": "Participate in engaging sessions with practical simulations."
    },
    {
      "title": "Advanced Course Portfolio",
      "description": "Explore certifications across Agile, Scrum, SAFe, DevOps, and Project Management."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'SCM',
      courseName: 'Advanced Certified Scrum Master (A-CSM®) Training',
      dateRange: 'Feb 28 - Mar 01, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Naveen Nanjundappa',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 49,080',
      discountedPrice: 'INR 34,356',
      discountPercentage: '30',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "PMI-ACP Certification Training Course",
    "breadcrumbName": "PMI-ACP Certification Training Course | Top-Rated Program",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Agile principles and prepare confidently for the PMI-ACP certification exam.",
    "benefits": [
      "Attend 28 hours of live instructor-led interactive training.",
      "Earn 28 PDUs upon successful completion of the course.",
      "Learn from certified Agile practitioners and industry experts.",
      "Gain hands-on experience through real-world simulations and case studies.",
      "Comprehensive exam preparation aligned with PMI-ACP standards."
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Comprehensive PMI-ACP Certification Training",
    "description": [
      "The PMI-ACP certification training equips professionals with in-depth knowledge of Agile principles, frameworks, and best practices. It enhances the ability to apply Agile methodologies effectively across diverse projects and industries.",
      "Authorized by the Project Management Institute (PMI), this program is designed for Scrum Masters, Product Owners, Project Managers, and Agile practitioners seeking global recognition.",
      "Our expert-led sessions combine practical case studies, simulations, and exam-focused preparation to ensure participants are fully prepared for the PMI-ACP certification examination."
    ],
    "whatIsTitle": "What is PMI-ACP Training?",
    "whatIsDescription": [
      "PMI-ACP training prepares professionals to apply Agile methodologies such as Scrum, Kanban, Lean, XP, and TDD in real-world environments.",
      "The program covers both conceptual foundations and practical implementation strategies through live instructor-led sessions and hands-on activities."
    ],
    "whatsIncludedTitle": "What’s Included in the PMI-ACP Training?",
    "whatsIncludedDescription": [
      "28 hours of live instructor-led training",
      "PMI-ACP exam application guidance",
      "Real-world Agile simulation exercises",
      "Experienced trainers with 15+ years of industry expertise",
      "Dedicated revision and doubt-clearing sessions"
    ],
    "skillsTitle": "Skills Covered in the PMI-ACP Course",
    "skills": [
      "Agile principles and mindset",
      "Adaptive planning and Agile project management",
      "Scrum and Kanban implementation",
      "Value-driven delivery strategies",
      "Risk management in Agile environments",
      "Continuous improvement techniques",
      "Agile metrics and performance measurement"
    ],
    "modesTitle": "Training Delivery Mode",
    "modesDescription": [
      "The PMI-ACP training is delivered through live virtual instructor-led sessions. Participants receive structured guidance, interactive discussions, study materials, practice exams, and ongoing support throughout their preparation journey."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Us for PMI-ACP Training",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Simpliaxis delivers customized PMI-ACP corporate training programs tailored to organizational needs. Our expert trainers provide structured Agile learning solutions that improve workforce capabilities, enhance project efficiency, and strengthen competitive advantage."
  };

  const courseMetadata = {
    shortName: 'CSM',
    shortNameAlt: 'A-CSM',
    fullName: 'Advanced Certified Scrum Master (A-CSM®)',
    fullNameAlt: 'Advance Certified Scrum Master (A-CSM)',
    certificateName: 'Advanced Scrum Master',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Certified Scrum Master® Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Advanced Scrum Master Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scrum Alliance',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    'Scrum Masters',
    'Team Leads',
    'Development Managers',
    'Delivery Managers',
    'Product Owners',
    'Agile Coaches',
  ];

  const pageCaptions = {
    tabs: {
      overview: 'Course overview',
      benefits: 'Benefits',
      prerequisites: 'Prerequisites',
      curriculum: 'Curriculum',
      faqs: 'FAQs',
    },
    hero: {
      referEarnText: 'Refer & Earn',
      enrolledSuffix: 'Enrolled',
      moneyBackText: '100% Money Back Guarantee',
      ltpLabel: 'Global LTP of Scrum Alliance',
      downloadBtnText: 'Download Brochure',
      viewSchedulesBtnText: 'View Schedules',
      freeAssessmentBtnText: 'Free Assesment',
    },
  };

  const tabs = [
    {
      id: 'overview',
      label: pageCaptions.tabs.overview,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
            <h4 className="text-[14px] text-slate-500 font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
              {overviewContent.title}
            </h4>
            <h2 className="text-2xl md:text-3xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
              {overviewContent.subtitle}{' '}
              <span className="text-blue-400">✦</span>
            </h2>
            <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
              {overviewContent.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.whatIsTitle}
              </h3>
              {overviewContent.whatIsDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.whatsIncludedTitle}
              </h3>
              <p>{overviewContent.whatsIncludedDescription}</p>
            </div>
          </div>

          <CourseHighlights
            courseName={heroData.courseName}
            highlights={highlights}
          />
          <CourseCareerUpliftment
            courseName={heroData.courseName}
            stats={careerStats}
            attendees={attendees}
            companies={companies}
            outcomes={outcomes}
            outcomesTitle={sectionsLabels.careerUpliftment.outcomesTitle}
            outcomesFooter={sectionsLabels.careerUpliftment.outcomesFooter}
          />
        </div>
      ),
    },
    {
      id: 'benefits',
      label: pageCaptions.tabs.benefits,
      content: (
        <div className="space-y-6">
          <CourseBenefits
            courseName={heroData.courseName}
            individualBenefits={individualBenefits}
            corporateBenefits={corporateBenefits}
          />
          <CourseCommonAttendees
            courseName={heroData.courseName}
            attendees={commonAttendeesList}
          />
        </div>
      ),
    },
    {
      id: 'prerequisites',
      label: pageCaptions.tabs.prerequisites,
      content: (
        <div className="space-y-6">
          <CoursePrerequisites
            courseName={courseMetadata.shortNameAlt}
            prerequisites={prerequisites}
            subtitle={sectionsLabels.prerequisites.subtitle}
            title={heroData.courseName}
            
          />
          <CourseStepByStepProcess
            courseName={heroData.courseName}
            steps={certificationSteps}
          />
          <CourseCertificate
            courseName={courseMetadata.certificateName}
            certificateBenefits={certificateBenefits}
            mockupName={sectionsLabels.certificate.mockupName}
            label={sectionsLabels.certificate.label}
            titlePrefix={sectionsLabels.certificate.titlePrefix}
            titleHighlight={sectionsLabels.certificate.titleHighlight}
            titleSuffix={sectionsLabels.certificate.titleSuffix}
            issuerName={sectionsLabels.certificate.issuerName}
            certificateType={sectionsLabels.certificate.certificateType}
            certifyText={sectionsLabels.certificate.certifyText}
            requirementText={sectionsLabels.certificate.requirementText}
            signer1Role={sectionsLabels.certificate.signer1Role}
            signer2Role={sectionsLabels.certificate.signer2Role}
          />
        </div>
      ),
    },
    {
      id: 'curriculum',
      label: pageCaptions.tabs.curriculum,
      content: (
        <div className="space-y-6">
          <CourseCurriculum
            courseName={courseMetadata.shortNameAlt}
            modules={curriculumModules}
          />
        </div>
      ),
    },
    {
      id: 'faqs',
      label: pageCaptions.tabs.faqs,
      content: (
        <CourseFAQs
          courseName={courseMetadata.shortNameAlt}
          categories={faqCategories}
        />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
      <Header />

      <main className="pt-16">
        <CourseHero
          courseName={heroData.courseName}
          breadcrumbName={heroData.breadcrumbName}
          rating={heroData.rating}
          enrolledCount={heroData.enrolledCount}
          subtitle={heroData.subtitle}
          benefits={heroData.benefits}
          mainImage={heroData.mainImage}
          badgeImage={heroData.badgeImage}
          referEarnText={pageCaptions.hero.referEarnText}
          enrolledSuffix={pageCaptions.hero.enrolledSuffix}
          moneyBackText={pageCaptions.hero.moneyBackText}
          ltpLabel={pageCaptions.hero.ltpLabel}
          downloadBtnText={pageCaptions.hero.downloadBtnText}
          viewSchedulesBtnText={pageCaptions.hero.viewSchedulesBtnText}
          freeAssessmentBtnText={pageCaptions.hero.freeAssessmentBtnText}
        />

        <CourseFeatures features={courseFeatures} />

        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Left Main Content */}
            <div>
              <CourseTabs tabs={tabs} />

              <CourseLearningObjectives
                courseName={heroData.courseName}
                objectives={learningObjectives}
              />

              <CourseCorporateOptUs
                courseName={corporateData.courseName}
                description={corporateData.description}
                label={corporateData.label}
                buttonText={corporateData.buttonText}
              />

              <CourseClients clients={courseClients} />
              <CourseTrainers trainers={courseTrainers} />
              <CourseWhySimpliaxis features={courseWhySimpliaxis} />
            </div>

            {/* Right Side Panel */}
            <div className="relative w-full lg:w-[340px] xl:w-[360px] lg:justify-self-end">
              <div className="sticky top-24">
                <CourseSidePanel schedules={sidePanelSchedules} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PMIAgileCertifiedPractitionerPMIACP;
