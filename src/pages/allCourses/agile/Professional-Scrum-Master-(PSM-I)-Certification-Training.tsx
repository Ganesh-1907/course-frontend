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

const ProfessionalScrumMasterCertificationTraining = () => {
  const highlights = [
    { "text": "16 Hours Live Instructor-Led Training" },
    { "text": "Earn 16 SEUs and 16 PDUs" },
    { "text": "Real-World Case Studies" },
    { "text": "Comprehensive Study Materials" },
    { "text": "Scrum Framework Deep Dive" },
    { "text": "24/7 Learner Support" }
  ];

  const individualBenefits = [
    {
      "title": "Enhanced Scrum Expertise",
      "description": "Demonstrate strong knowledge of Scrum principles and practices."
    },
    {
      "title": "Career Advancement",
      "description": "Increase professional credibility and unlock new Agile leadership opportunities."
    },
    {
      "title": "Expanded Job Opportunities",
      "description": "Meet the growing industry demand for certified Scrum Masters."
    },
    {
      "title": "Improved Collaboration Skills",
      "description": "Develop effective communication and team facilitation skills."
    },
    {
      "title": "Agile Transformation Capability",
      "description": "Support Agile adoption and scaling initiatives within organizations."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Increased Productivity",
      "description": "Implement Scrum practices that enhance team efficiency and product quality."
    },
    {
      "title": "Faster Time-to-Market",
      "description": "Deliver products incrementally and adapt quickly to market changes."
    },
    {
      "title": "Improved Employee Engagement",
      "description": "Foster a collaborative and high-performing work environment."
    },
    {
      "title": "Better Risk Management",
      "description": "Identify and mitigate risks early through iterative development."
    },
    {
      "title": "Organizational Agility",
      "description": "Enable adaptability and responsiveness to evolving business needs."
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
    "Apply Scrum principles effectively in real-world projects.",
    "Facilitate Sprint events and manage Scrum artifacts.",
    "Improve Agile team collaboration and productivity.",
    "Prepare confidently for the PSM I certification assessment."
  ];

  const prerequisites = [
    'Active Certified ScrumMaster (CSM) certification',
    'Minimum 12 months of Scrum Master experience within the last five years',
  ];

  const certificationSteps = [
    {
      "title": "Attend the Training",
      "description": "Complete 16 hours of live PSM I training."
    },
    {
      "title": "Receive Exam Access",
      "description": "Obtain your assessment access code from Scrum.org."
    },
    {
      "title": "Pass the Exam",
      "description": "Score a minimum of 85% in the 60-minute online assessment."
    },
    {
      "title": "Earn Certification",
      "description": "Download your lifetime-valid PSM I certificate."
    }
  ];

  const curriculumModules = [
    {
      "title": "Scrum Introduction",
      "topics": [
        "Scrum values, rules, and empirical process control",
        "How Scrum functions in real-world environments",
        "Underlying theories and principles of Scrum",
        "Why Scrum is effective for product development",
        "Differences between Scrum and traditional project management"
      ]
    },
    {
      "title": "Using the Scrum Framework",
      "topics": [
        "Role of time-boxed events in Scrum",
        "Significance of Scrum roles and accountabilities",
        "Importance of rules within Scrum theory",
        "Impact of Scrum artifacts on transparency",
        "Design principles behind the Scrum framework",
        "Managing risks using Scrum practices",
        "Maximizing value delivery through Scrum"
      ]
    },
    {
      "title": "Scrum Roles and Responsibilities",
      "topics": [
        "Product Owner, Scrum Master, and Developers",
        "Applying empiricism to product development",
        "Duties, responsibilities, and required skills",
        "Collaboration within the Scrum Team"
      ]
    },
    {
      "title": "Definition of Done and Acceptance Criteria",
      "topics": [
        "Understanding the Definition of Done (DoD)",
        "Establishing clear acceptance criteria",
        "Ensuring quality in incremental delivery"
      ]
    },
    {
      "title": "Product Delivery with Scrum",
      "topics": [
        "Scrum framework processes and flow",
        "Managing people-related and team challenges",
        "Common organizational challenges in Scrum adoption"
      ]
    },
    {
      "title": "Working with People and Teams",
      "topics": [
        "Navigating organizational challenges",
        "Key components of an Agile work style",
        "Promoting collaboration and team accountability"
      ]
    },
    {
      "title": "Managing Organizational Change",
      "topics": [
        "Overcoming resistance to change",
        "Aligning Scrum implementation with business goals"
      ]
    },
    {
      "title": "Agile Mindset and Continuous Improvement",
      "topics": [
        "Developing an Agile mindset",
        "Continuous improvement and adaptation practices"
      ]
    },
    {
      "title": "Scrum Tools for Product Development",
      "topics": [
        "Digital tools for backlog management",
        "Tracking progress and facilitating collaboration"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Lead Scrum Teams",
      "description": "Understand the responsibilities of a Scrum Master and effectively guide Scrum teams toward achieving Sprint goals."
    },
    {
      "title": "Master Scrum Fundamentals",
      "description": "Gain comprehensive knowledge of Scrum values, principles, and framework components."
    },
    {
      "title": "Develop Servant Leadership",
      "description": "Cultivate servant leadership skills to empower teams and drive Agile transformation."
    },
    {
      "title": "Resolve Team Conflicts",
      "description": "Apply facilitation and conflict resolution strategies within Scrum teams."
    },
    {
      "title": "Ensure Successful Delivery",
      "description": "Use Scrum practices to manage risks and ensure consistent value delivery."
    },
    {
      "title": "Improve Team Dynamics",
      "description": "Strengthen collaboration, transparency, and accountability within Agile teams."
    }
  ];


  const faqCategories = [
    {
      "id": "category_1",
      "label": "PSM I Certification FAQs",
      "items": [
        {
          "question": "How long is the PSM I certification valid?",
          "answer": "The PSM I certification is valid for a lifetime. There is no renewal requirement."
        },
        {
          "question": "How many attempts are included with the exam?",
          "answer": "After registration, two attempts are typically included. If unsuccessful, additional attempts require a separate fee."
        },
        {
          "question": "Is the PSM I exam difficult?",
          "answer": "The PSM I exam is considered rigorous and requires a strong understanding of Scrum theory and application. Proper preparation and practice significantly improve success rates."
        },
        {
          "question": "Can I take the PSM I exam without training?",
          "answer": "Yes, training is not mandatory. However, professional training provides structured guidance and increases the likelihood of passing the exam."
        },
        {
          "question": "What is the next step after PSM I?",
          "answer": "After completing PSM I, you can advance to PSM II or other advanced Scrum certifications."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam Details FAQs",
      "items": [
        {
          "question": "Is the PSM I exam open book?",
          "answer": "Yes, the PSM I assessment is open book. However, a strong conceptual understanding is essential due to time constraints."
        },
        {
          "question": "What is the duration and format of the exam?",
          "answer": "The exam consists of 80 questions to be completed within 60 minutes. A minimum score of 85% is required to pass."
        },
        {
          "question": "Can the exam be paused?",
          "answer": "No, the assessment must be completed in one sitting within the allotted 60 minutes."
        },
        {
          "question": "Can I retake the exam if I fail?",
          "answer": "Yes, you may retake the exam. Additional attempts require payment as per Scrum.org policies."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Payment & Enrollment FAQs",
      "items": [
        {
          "question": "What happens to my token or partial payment if I don’t enroll immediately?",
          "answer": "Token or partial payments become non-refundable after 15 days. However, the amount can be adjusted toward enrollment within six months from the payment date."
        },
        {
          "question": "Do you offer installment options?",
          "answer": "Yes, flexible payment options including installment plans are available."
        },
        {
          "question": "Are refunds available?",
          "answer": "Refunds are not provided. However, training sessions may be rescheduled as per policy."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "Training & Support FAQs",
      "items": [
        {
          "question": "What if I miss a class?",
          "answer": "Missed sessions can be rescheduled at no additional cost, subject to availability."
        },
        {
          "question": "Do you offer corporate training?",
          "answer": "Yes, we provide customized corporate training programs tailored to organizational needs."
        },
        {
          "question": "Who are the instructors?",
          "answer": "All trainers are certified professionals with extensive industry experience in Agile and Scrum."
        }
      ]
    }
  ]
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
      "description": "Every Course is recognized by the most reputable certification organizations globally, ensuring credibility and acceptance across all industries. Our A-CSM certification, provided by the Scrum Alliance, offers global recognition in Scrum practices."
    },
    {
      "title": "Expert Trainers",
      "description": "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes. Experienced CSTs deliver our Advanced Certified ScrumMaster (A-CSM) training, bringing over 15 years of experience."
    },
    {
      "title": "Flexible Learning",
      "description": "Our Advanced Certified ScrumMaster (A-CSM) certification training offers a variety of methods of learning, such as online, 1:1 doubt clearing, and corporate Training, that meet the needs of different individuals and their schedules."
    },
    {
      "title": "Lifetime Access",
      "description": "Enjoy all-year access to the recordings of A-CSM training sessions, course materials, and study tools."
    },
    {
      "title": "Proven Track Record",
      "description": "We are a reputable training provider with extensive experience in helping professional and business organizations enhance their capabilities and achieve their career objectives. You can trust us regarding your A-CSM training needs."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Simpliaxis provides ongoing support before, during, and after training, including study materials, guidance for participants on A-CSM certification, and assistance with career choices."
    },
    {
      "title": "Interactive and Engaging Training",
      "description": "Our Advanced Certified ScrumMaster (A-CSM) training sessions are designed to be highly interactive, featuring real-world scenarios with group participation and Q&A sessions to facilitate a deeper understanding of the material."
    },
    {
      "title": "Career Growth",
      "description": "A-CSM certification is the new and additional certification introduced by Scrum Alliance. If you are working in a Scrum Master role, it can be a skill development process that helps in your career advancement and opens up multiple opportunities."
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
    "courseName": "PSM Certification Training Course",
    "breadcrumbName": "Professional Scrum Master I (PSM I) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Scrum principles and prepare confidently for the PSM I certification exam.",
    "benefits": [
      "16 Hours of Live Interactive Instructor-Led Training",
      "Earn 16 SEUs and 16 PDUs",
      "Delivered by Certified Professional Scrum Trainers (PSTs)",
      "Globally Recognized PSM I Certification with Lifetime Validity",
      "Comprehensive Exam Preparation with Real-World Scenarios"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Professional Scrum Master I (PSM I) Certification Training",
    "description": [
      "The Professional Scrum Master I (PSM I) certification training equips participants with in-depth knowledge of Scrum principles, roles, and practices. This program strengthens your ability to apply Scrum effectively within Agile teams.",
      "Delivered by Scrum.org-certified Professional Scrum Trainers (PSTs), the course combines theory, real-world case studies, and exam-focused practice sessions to help participants confidently clear the PSM I assessment."
    ],
    "whatIsTitle": "What is PSM I Certification?",
    "whatIsDescription": [
      "PSM I is a globally recognized Scrum Master certification offered by Scrum.org. It validates your understanding of Scrum theory, framework, and servant leadership principles required to lead Agile teams successfully."
    ],
    "whatsIncludedTitle": "What’s Included in the PSM I Training?",
    "whatsIncludedDescription": [
      "2 Days Live Interactive Training",
      "16 SEUs and 16 PDUs",
      "Exam Preparation Support",
      "Scenario-Based Learning",
      "Comprehensive Study Materials",
      "Post-Training Guidance"
    ],
    "skillsTitle": "Skills Covered in the PSM I Course",
    "skills": [
      "Scrum Theory and Empiricism",
      "Scrum Roles, Events, and Artifacts",
      "Backlog Management",
      "Timeboxing and Sprint Planning",
      "Facilitation and Conflict Resolution",
      "Servant Leadership Principles"
    ],
    "modesTitle": "Training Delivery Mode",
    "modesDescription": [
      "The PSM I certification training is delivered through live virtual instructor-led sessions. The course includes interactive discussions, practical exercises, and real-world simulations to enhance learning outcomes."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver customized corporate PSM training programs designed to enhance Agile capabilities within organizations. Our expert trainers provide tailored learning solutions aligned with industry standards and enterprise objectives."
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

export default ProfessionalScrumMasterCertificationTraining;
