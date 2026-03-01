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

const AiEmpoweredSafeScrumMasterSSMCertificationTraining = () => {
  const highlights = [
    { text: "16 Hours of Instructor-Led Interactive Learning" },
    { text: "Earn 16 PDUs & 16 SEUs" },
    { text: "Comprehensive Exam Assistance" },
    { text: "Guidance from Scaled Agile® Platinum SPCT Partner" },
    { text: "Mentorship by Certified Agile Industry Experts" },
    { text: "Access to SAFe® Community Platform" },
    { text: "Gain Enterprise-Level Agile Skills" },
    { text: "High First-Attempt Success Rate" },
    { text: "Exam Fee Included in Training Cost" },
    { text: "Unlimited Access to Practice Tests" }
  ];

  const individualBenefits = [
    {
      title: "Global Recognition",
      description: "SAFe® Scrum Master (SSM) certification validates your Agile expertise and enhances your professional credibility in the global job market."
    },
    {
      title: "Career Advancement",
      description: "Gain a competitive advantage for Scrum Master roles across leading enterprises worldwide."
    },
    {
      title: "Professional Credibility",
      description: "Demonstrates your ability to lead Agile teams effectively within the SAFe® framework."
    },
    {
      title: "Enterprise Agility Expertise",
      description: "Learn how to scale Scrum practices and access a one-year SAFe® Community membership with tools and resources."
    }
  ];

  const corporateBenefits = [
    {
      title: "Cross-Team Coordination",
      description: "Enable seamless collaboration across Agile teams in enterprise environments."
    },
    {
      title: "Business Value Delivery",
      description: "Maximize ROI by aligning Lean-Agile execution with business strategy."
    },
    {
      title: "Agile Culture Development",
      description: "Promote a growth-oriented Agile mindset across departments."
    },
    {
      title: "Efficient Backlog Management",
      description: "Improve sprint planning and delivery through effective prioritization and story refinement."
    }
  ];

  const careerStats = {
    averageIncome: "$105k - $140k",
    incomeLabel: "per annum",
    employmentGrowth: "28%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      group: [
        "Aspiring Scrum Masters",
        "Current Scrum Masters",
        "Agile Coaches",
        "Team Leads and Project Managers",
        "Professionals working in SAFe® environments"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Scrum in a SAFe® enterprise context.",
    "Facilitate Program Increment (PI) Planning effectively.",
    "Coach high-performing Agile teams.",
    "Support Agile Release Train (ART) execution.",
    "Apply Lean-Agile principles to enterprise transformation."
  ];

  const prerequisites = [
    "Basic knowledge of Agile and Scrum principles.",
    "Familiarity with SAFe® concepts is beneficial.",
    "Experience in a Lean-Agile environment is recommended but not mandatory."
  ];

  const certificationSteps = [
    {
      title: "Enroll in Training",
      description: "Attend the 16-hour SAFe® Scrum Master training delivered by certified SAFe® Practice Consultants."
    },
    {
      title: "Gain Practical Knowledge",
      description: "Participate in real-world case studies, simulations, and interactive workshops."
    },
    {
      title: "Take the Certification Exam",
      description: "Complete the 90-minute online SAFe® Scrum Master exam."
    },
    {
      title: "Get Certified",
      description: "Earn your SAFe® Scrum Master (SSM) credential upon successfully passing the exam."
    }
  ];

  const curriculumModules = [
    {
      title: "Module 1: Introducing Scrum in SAFe®",
      topics: [
        "Agile and Scrum fundamentals",
        "Agile Teams in SAFe® enterprises",
        "High-performing team characteristics",
        "DevOps and Release on Demand",
        "AI in Lean-Agile ways of working"
      ]
    },
    {
      title: "Module 2: Scrum Master / Team Coach Role",
      topics: [
        "Scrum Master responsibilities",
        "Agile team coaching",
        "AI-augmented facilitation techniques",
        "Impediment removal and flow optimization"
      ]
    },
    {
      title: "Module 3: Supporting Team Events",
      topics: [
        "Iteration Planning",
        "Backlog Refinement",
        "Iteration Review & Retrospective",
        "AI-assisted collaboration tools"
      ]
    },
    {
      title: "Module 4: Supporting ART Events",
      topics: [
        "PI Planning",
        "Inspect & Adapt",
        "Managing dependencies",
        "AI-driven metrics and risk prediction"
      ]
    },
    {
      title: "Module 5: AI & the Future of Scrum Mastery",
      topics: [
        "AI fundamentals for Scrum Masters",
        "AI-augmented team collaboration",
        "Ethical AI usage in SAFe®",
        "Continuous improvement with AI insights"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Implement Scrum in SAFe® Enterprises",
      description: "Understand how Scrum operates within scaled Agile environments."
    },
    {
      title: "Master the SAFe® Scrum Master Role",
      description: "Coach and guide Agile teams to deliver enterprise-level value."
    },
    {
      title: "Facilitate PI Planning",
      description: "Plan and execute Program Increments successfully."
    },
    {
      title: "Drive Continuous Improvement",
      description: "Support teams in achieving sustainable performance improvements."
    },
    {
      title: "Enhance Business Results",
      description: "Build high-performing teams through servant leadership."
    },
    {
      title: "Apply AI for Agile Success",
      description: "Leverage AI tools to improve facilitation, collaboration, and decision-making."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "General Certification FAQs",
      "items": [
        {
          "question": "1. What is SAFe® Scrum Master (SSM) Certification?",
          "answer": "SAFe® Scrum Master (SSM) certification is offered by Scaled Agile, Inc. It validates your ability to perform the Scrum Master role within a SAFe® enterprise and support Agile teams in large-scale environments."
        },
        {
          "question": "2. How many PDUs and SEUs will I earn?",
          "answer": "You will earn 16 PDUs (Professional Development Units) and 16 SEUs (Scrum Education Units) upon completing the two-day training program."
        },
        {
          "question": "3. Is the exam fee included in the course fee?",
          "answer": "Yes. The first attempt of the SAFe® Scrum Master certification exam is included in the training fee."
        },
        {
          "question": "4. Who provides the SSM certification?",
          "answer": "The SAFe® Scrum Master (SSM) certification is provided by Scaled Agile, Inc., the official governing body of the SAFe® framework."
        },
        {
          "question": "5. How long is the SSM certification valid?",
          "answer": "The SAFe® Scrum Master certification is valid for one year from the date of certification and must be renewed annually."
        },
        {
          "question": "6. What are the benefits of SAFe® Community Membership?",
          "answer": "You receive one-year access to the SAFe® Community Platform, including study resources, toolkits, forums, webinars, and continuous learning materials."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam & Preparation FAQs",
      "items": [
        {
          "question": "1. What is the format of the SSM certification exam?",
          "answer": "The exam consists of 45 multiple-choice questions and must be completed within 90 minutes. It is conducted online through the SAFe® Community Platform."
        },
        {
          "question": "2. What is the passing score for the SSM exam?",
          "answer": "The passing score is 73%, which means you must answer at least 33 out of 45 questions correctly."
        },
        {
          "question": "3. How many attempts do I get?",
          "answer": "Your first attempt is included in the course fee. If you fail, retake attempts are available for an additional fee."
        },
        {
          "question": "4. Is the SSM exam proctored?",
          "answer": "Yes. The exam is conducted online and is proctored to ensure exam integrity."
        },
        {
          "question": "5. How can I prepare for the SSM exam?",
          "answer": "Attend the full training session, review the official SAFe® study guide, complete practice tests, and revise key concepts such as PI Planning, Agile Release Trains, and Scrum facilitation."
        },
        {
          "question": "6. When will I receive my results?",
          "answer": "Exam results are displayed immediately after submission. Upon passing, your digital certificate and badge will be available in your SAFe® profile."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Eligibility & Career FAQs",
      "items": [
        {
          "question": "1. Are there any prerequisites for the SSM course?",
          "answer": "There are no mandatory prerequisites, but familiarity with Agile and Scrum principles is recommended."
        },
        {
          "question": "2. Who should attend this training?",
          "answer": "Aspiring Scrum Masters, current Scrum Masters, Agile Coaches, Project Managers, Team Leads, and professionals working in SAFe® environments."
        },
        {
          "question": "3. What career opportunities are available after SSM certification?",
          "answer": "You can pursue roles such as SAFe® Scrum Master, Agile Coach, Release Train Engineer (RTE), SAFe® Advanced Scrum Master, or Product Owner/Product Manager in scaled enterprises."
        },
        {
          "question": "4. What is the average salary of a SAFe® Scrum Master?",
          "answer": "Salaries vary by country and experience, but globally certified SAFe® Scrum Masters typically earn competitive enterprise-level compensation packages."
        },
        {
          "question": "5. Is SAFe® Scrum Master certification worth it?",
          "answer": "Yes. It enhances your credibility in large-scale Agile environments and significantly improves career growth opportunities."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "Enrollment & Support FAQs",
      "items": [
        {
          "question": "1. What happens if I miss a class?",
          "answer": "You can reschedule your training session at no additional cost, subject to availability."
        },
        {
          "question": "2. Can I attend the training online?",
          "answer": "Yes. The training is available in live virtual instructor-led format and corporate group training modes."
        },
        {
          "question": "3. Will I receive a certificate after course completion?",
          "answer": "Yes. Upon successfully passing the exam, you will receive a digital SAFe® Scrum Master certification and badge."
        },
        {
          "question": "4. Can I pay in installments?",
          "answer": "Yes. Flexible payment options are available. Please contact the support team for details."
        },
        {
          "question": "5. How do I renew my SSM certification?",
          "answer": "Log in to the SAFe® Community Platform and pay the annual renewal fee to extend your certification validity for another year."
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
      title: "Global SAFe® Authorized Training Partner",
      description: "Training delivered by certified SPCs from a Scaled Agile® Platinum SPCT partner."
    },
    {
      title: "Expert-Led Interactive Sessions",
      description: "Learn from experienced Agile practitioners with real enterprise transformation insights."
    },
    {
      title: "Exam-Focused Curriculum",
      description: "Structured content designed to ensure high first-attempt pass rates."
    },
    {
      title: "Flexible Instructor-Led Formats",
      description: "Live virtual and corporate training options available."
    },
    {
      title: "Access to SAFe® Resources",
      description: "Receive one-year SAFe® Community membership and ongoing learning support."
    },
    {
      title: "Hands-On Simulations",
      description: "Apply concepts through practical exercises and group activities."
    },
    {
      title: "Global Alumni Network",
      description: "Access career guidance and job opportunities through our alumni network."
    },
    {
      title: "Affordable Corporate Pricing",
      description: "Competitive pricing with exclusive group and enterprise discounts."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'SCM',
      courseName: 'AI-Empowered SAFe® Scrum Master Certification Training',
      dateRange: 'Feb 28 - Mar 01, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert SPC',
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
    courseName: "AI-Empowered SAFe® Scrum Master Certification Training",
    breadcrumbName: "SAFe® 6.0 Scrum Master (SSM) Certification Course",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Lead Agile Teams in Enterprise SAFe® Environments with AI-Enhanced Scrum Mastery.",
    benefits: [
      "16 Hours Live Instructor-Led Training",
      "Official SAFe® Courseware Included",
      "Exam Fee Included",
      "Earn 16 PDUs & 16 SEUs",
      "Unlimited Practice Tests"
    ],
    mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "AI-Empowered SAFe® Scrum Master Certification Overview",
    description: [
      "This SAFe® Scrum Master course prepares professionals to lead Agile teams in scaled enterprise environments.",
      "Learn how to facilitate team events, support PI Planning, coach Agile teams, and drive continuous improvement using SAFe® 6.0 principles."
    ],
    whatIsTitle: "What is SAFe® Scrum Master Certification?",
    whatIsDescription: [
      "The SAFe® Scrum Master (SSM) certification validates your ability to perform the Scrum Master role within a SAFe® enterprise and support large-scale Agile transformations."
    ],
    whatsIncludedTitle: "What’s Included in the Training?",
    whatsIncludedDescription: [
      "16 hours live training",
      "Official SAFe® courseware",
      "First exam attempt included",
      "Practice tests",
      "One-year SAFe® Community membership"
    ],
    skillsTitle: "Skills Covered",
    skills: [
      "Agile & Scrum Facilitation",
      "PI Planning",
      "Agile Release Train Coordination",
      "Servant Leadership",
      "Continuous Improvement",
      "AI-Augmented Scrum Practices"
    ],
    modesTitle: "Training Modes",
    modesDescription: [
      "Live Virtual Instructor-Led Training",
      "Corporate Group Training"
    ]
  };

  const corporateData = {
    courseName: "Why Corporate Opt Us",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "We deliver customized enterprise SAFe® training programs to help organizations scale Agile effectively, align business strategy with execution, and accelerate value delivery."
  };

  const courseMetadata = {
    shortName: 'SAFe SSM',
    shortNameAlt: 'SSM',
    fullName: 'AI-Empowered SAFe® Scrum Master Certification Training',
    fullNameAlt: 'SAFe® 6.0 Scrum Master (SSM) Certification',
    certificateName: 'SAFe® Scrum Master',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® Scrum Master Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® Scrum Master Training?',
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
    "Aspiring Scrum Masters",
    "Current Scrum Masters",
    "Agile Coaches",
    "Team Leads and Project Managers",
    "Professionals working in SAFe® environments"
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
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.whatsIncludedDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.skillsTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.modesTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.modesDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
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

export default AiEmpoweredSafeScrumMasterSSMCertificationTraining;
