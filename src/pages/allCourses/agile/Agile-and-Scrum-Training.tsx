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

const AgileAndScrumTraining = () => {
  const highlights =  [
    { "text": "8 Hours of Live Instructor-Led Training" },
    { "text": "Earn 8 PDUs and 8 SEUs" },
    { "text": "Delivered by Certified Scrum Trainers (CSTs)" },
    { "text": "Comprehensive Coverage of Agile and Scrum Fundamentals" },
    { "text": "Hands-On Practical Exercises and Case Studies" },
    { "text": "Course Completion Certificate from Simpliaxis" },
    { "text": "24/7 Post-Training Support" },
    { "text": "Dedicated Doubt-Clearing Sessions" }
  ];

  const individualBenefits = [
    {
      "title": "Improved Adaptability",
      "description": "Respond effectively to changing project requirements."
    },
    {
      "title": "Enhanced Collaboration",
      "description": "Work efficiently within cross-functional Agile teams."
    },
    {
      "title": "Higher Productivity",
      "description": "Increase efficiency and deliver value consistently."
    },
    {
      "title": "Stronger Problem-Solving Skills",
      "description": "Develop analytical thinking through Agile practices."
    },
    {
      "title": "Career Growth Opportunities",
      "description": "Unlock new career paths in Agile and Scrum roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Faster Project Delivery",
      "description": "Accelerate time-to-market using Agile methodologies."
    },
    {
      "title": "Improved Customer Satisfaction",
      "description": "Deliver value-driven solutions aligned with customer needs."
    },
    {
      "title": "Enhanced Product Quality",
      "description": "Ensure continuous improvement through iterative development."
    },
    {
      "title": "Greater Employee Engagement",
      "description": "Encourage team ownership and collaboration."
    },
    {
      "title": "Reduced Project Risk",
      "description": "Identify and mitigate risks early through continuous feedback."
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
    "Develop a strong foundation in Agile principles and Scrum practices.",
    "Apply Scrum roles, artifacts, and ceremonies effectively in real projects.",
    "Use Agile estimation techniques such as Story Points and Planning Poker.",
    "Monitor progress using Agile metrics like burn-down and burn-up charts.",
    "Understand scaling approaches for enterprise-level Agile implementation."
  ];

  const prerequisites = [
    "No prior experience is required to enroll in this Agile and Scrum Training.",
    "Ideal for beginners and professionals planning to pursue certifications such as CSM, CSPO, PSM, or SAFe Scrum Master."
  ];

  const certificationSteps = [
    {
      title: 'Attend Training',
      description:
        'Complete the 16-hour A-CSM training delivered by Scrum Alliance-accredited trainers.',
    },
    {
      title: 'Validate Experience',
      description: 'Confirm at least 12 months of Scrum Master experience.',
    },
    {
      title: 'Accept License',
      description:
        'Log in to Scrum Alliance and acknowledge the license agreement.',
    },
    {
      title: 'Download Certificate',
      description:
        'Receive and download your Advanced Certified ScrumMaster credential.',
    },
  ];

  const curriculumModules =[
    {
      "title": "Module 1: Introduction to Agile",
      "topics": [
        "Evolution of Agile",
        "Traditional vs Agile Project Management",
        "Benefits of Agile Methodology"
      ]
    },
    {
      "title": "Module 2: Agile Foundations",
      "topics": [
        "Agile Manifesto",
        "Agile Values and Principles",
        "Customer Collaboration and Iterative Delivery"
      ]
    },
    {
      "title": "Module 3: Business Value in Agile",
      "topics": [
        "User Stories and the 3Cs",
        "Prioritization Techniques",
        "Minimum Viable Product (MVP)"
      ]
    },
    {
      "title": "Module 4: Agile Frameworks",
      "topics": [
        "Scrum Framework",
        "Kanban",
        "Extreme Programming (XP)",
        "Feature-Driven Development (FDD)"
      ]
    },
    {
      "title": "Module 5: Agile Project Management",
      "topics": [
        "APM Framework Phases",
        "Envision, Speculate, Explore, Adapt, Close"
      ]
    },
    {
      "title": "Module 6: Scrum Framework Deep Dive",
      "topics": [
        "Scrum Roles",
        "Scrum Artifacts",
        "Scrum Events"
      ]
    },
    {
      "title": "Module 7: Agile Estimation",
      "topics": [
        "Story Points",
        "Planning Poker",
        "T-Shirt Sizing"
      ]
    },
    {
      "title": "Module 8: Agile Planning and Tracking",
      "topics": [
        "Release Planning",
        "Iteration Planning",
        "Burn-down and Burn-up Charts"
      ]
    },
    {
      "title": "Module 9: Scaling Agile",
      "topics": [
        "SAFe",
        "DAD",
        "LeSS"
      ]
    },
    {
      "title": "Module 10: Agile Career Path",
      "topics": [
        "Agile Certifications",
        "Enterprise Agile Roles"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Agile Fundamentals",
      "description": "Understand Agile values and principles and explore frameworks such as Scrum, Kanban, and XP."
    },
    {
      "title": "User Stories and Business Value",
      "description": "Learn how to create effective user stories and prioritize development based on customer value."
    },
    {
      "title": "Agile Planning",
      "description": "Master product planning, release planning, and iteration planning techniques."
    },
    {
      "title": "Scrum Events",
      "description": "Gain clarity on Scrum ceremonies including Sprint Planning, Daily Scrum, Sprint Review, and Retrospective."
    },
    {
      "title": "Estimation and Metrics",
      "description": "Apply estimation techniques and measure performance using Agile metrics."
    },
    {
      "title": "Scaling Agile",
      "description": "Learn how to scale Agile practices successfully across large organizations."
    }
  ];

  const faqCategories = [
  {
    "id": "category_1",
    "label": "Agile & Scrum Certification FAQs",
    "items": [
      {
        "question": "What is Agile and Scrum Training?",
        "answer": "Agile and Scrum Training provides a comprehensive understanding of Agile principles and the Scrum framework. It helps professionals learn how to deliver value incrementally, collaborate effectively, and adapt quickly to changing requirements."
      },
      {
        "question": "Who should attend Agile and Scrum Training?",
        "answer": "This course is ideal for Developers, Testers, Project Managers, Product Owners, Scrum Masters, Business Analysts, and anyone involved in Agile projects."
      },
      {
        "question": "Are there any prerequisites for Agile and Scrum Training?",
        "answer": "There are no strict prerequisites. However, having basic knowledge of software development or project management concepts is beneficial."
      },
      {
        "question": "What will I learn in Agile and Scrum Training?",
        "answer": "You will learn Agile values and principles, Scrum roles (Scrum Master, Product Owner, Developers), Scrum events, artifacts, sprint planning, backlog management, estimation techniques, and Agile best practices."
      },
      {
        "question": "Is there an exam included in the training?",
        "answer": "Depending on the certification track, an assessment may be included. Exam details such as number of questions, duration, and passing score vary based on the certification body."
      },
      {
        "question": "How long is the Agile and Scrum certification valid?",
        "answer": "Certification validity depends on the certifying organization. Some certifications are lifetime, while others require renewal through SEUs or PDUs."
      },
      {
        "question": "How many PDUs and SEUs can I earn?",
        "answer": "Participants can typically earn up to 14–16 PDUs and SEUs upon completion of the 2-day Agile and Scrum training program."
      },
      {
        "question": "Is Agile and Scrum certification globally recognized?",
        "answer": "Yes, Agile and Scrum certifications are globally recognized and highly valued across industries adopting Agile methodologies."
      }
    ]
  },
  {
    "id": "category_2",
    "label": "Training & Course Delivery FAQs",
    "items": [
      {
        "question": "What is the duration of Agile and Scrum Training?",
        "answer": "The training is typically delivered over 2 days (approximately 16 hours) of instructor-led sessions."
      },
      {
        "question": "Is the training practical or theoretical?",
        "answer": "The training is highly interactive and includes case studies, group activities, simulations, sprint exercises, and real-world scenarios."
      },
      {
        "question": "Do I get hands-on Scrum experience during training?",
        "answer": "Yes, participants engage in practical Scrum simulations including sprint planning, daily scrum exercises, backlog refinement, and retrospectives."
      },
      {
        "question": "Is online training available?",
        "answer": "Yes, Agile and Scrum training is available in live virtual instructor-led mode as well as corporate onsite programs."
      },
      {
        "question": "Do you provide corporate Agile and Scrum training?",
        "answer": "Yes, we offer customized corporate training tailored to organizational needs and Agile transformation goals."
      },
      {
        "question": "Will I receive study materials?",
        "answer": "Yes, participants receive comprehensive course materials, templates, and supporting learning resources."
      }
    ]
  },
  {
    "id": "category_3",
    "label": "Payment & Enrollment FAQs",
    "items": [
      {
        "question": "How do I enroll in Agile and Scrum Training?",
        "answer": "Choose your preferred schedule, complete the registration process, make the payment, and you will receive confirmation with course access details."
      },
      {
        "question": "What payment methods are accepted?",
        "answer": "We accept credit cards, debit cards, net banking, wire transfers, PayPal, Stripe, and other secure payment methods."
      },
      {
        "question": "Do you offer installment payment options?",
        "answer": "Yes, installment options may be available. Please contact support for detailed payment plans."
      },
      {
        "question": "Are there group or corporate discounts available?",
        "answer": "Yes, we provide special pricing for corporate teams and group enrollments."
      },
      {
        "question": "Will I receive a payment receipt?",
        "answer": "Yes, you will receive an official invoice and confirmation email after successful payment."
      },
      {
        "question": "What is your refund policy?",
        "answer": "Refunds are generally not provided. However, participants may reschedule their training as per policy terms."
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
      "description": "Courses accredited by globally recognized certification bodies."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from certified professionals with real-world industry experience."
    },
    {
      "title": "Flexible Learning Options",
      "description": "Choose from live virtual, online, or corporate training formats."
    },
    {
      "title": "Lifetime Access",
      "description": "Access session recordings and learning resources anytime."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by organizations worldwide for measurable training outcomes."
    },
    {
      "title": "End-to-End Support",
      "description": "Comprehensive assistance before, during, and after training."
    },
    {
      "title": "Interactive Learning",
      "description": "Engaging sessions with real-world case studies and activities."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "International certifications across Agile, Scrum, SAFe, DevOps, and Project Management."
    }
  ]
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
    "courseName": "Agile and Scrum Training",
    "breadcrumbName": "Agile and Scrum Foundational Training by Simpliaxis",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Build a strong foundation in Agile principles and the Scrum framework in just one day.",
    "benefits": [
      "Attend a 1-Day Live Instructor-Led Training Session delivered by certified experts.",
      "Develop essential Agile and Scrum skills to build high-performing teams.",
      "Engage in interactive and practical learning for deeper conceptual clarity.",
      "Begin your journey toward globally recognized certifications such as CSM and PSM."
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Comprehensive Introduction to Agile and Scrum",
    "description": [
      "The Agile and Scrum Training by Simpliaxis validates your understanding of Agile principles and Scrum practices. This foundational program prepares professionals to pursue globally recognized certifications such as CSM, CSPO, PSM, and SAFe Scrum Master.",
      "Delivered by certified Scrum trainers, this course bridges traditional project management approaches with Agile methodologies. It is ideal for aspiring Scrum Masters, Product Owners, Project Managers, and Agile team members.",
      "Participants gain hands-on exposure through real-world exercises, enabling them to effectively implement Scrum within their organizations and improve project success rates."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "",
    "skills": [],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData ={
    "courseName": "Why Corporates Choose Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Simpliaxis delivers customized corporate training programs designed to address specific organizational challenges. Our expert trainers provide industry-aligned modules that enhance workforce capabilities and help enterprises remain competitive."
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

export default AgileAndScrumTraining;
