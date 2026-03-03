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
import CourseWhyViovn from "@/components/courses/CourseWhyViovn";

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

const AIEmpoweredSAFeReleaseTrainEngineerRTECertificationTraining = () => {
  const highlights = [
    { text: "24 Hours of Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Earn 24 PDUs & 24 SEUs", icon: <Award className="w-5 h-5" /> },
    { text: "Complete Exam Assistance", icon: <FileText className="w-5 h-5" /> },
    { text: "Free Practice Tests with Unlimited Attempts", icon: <Laptop className="w-5 h-5" /> },
    { text: "Training by Platinum SPCT Partner of Scaled Agile", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Exam Fee Included in Training Cost", icon: <CreditCard className="w-5 h-5" /> },
    { text: "1-Year SAFe® Studio Access (For First SAFe Course)", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Examination Guidance by Certified Trainers", icon: <User className="w-5 h-5" /> },
    { text: "Free Access to Learning Resources", icon: <FileText className="w-5 h-5" /> },
    { text: "High First-Attempt Success Rate", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Comprehensive SAFe® Expertise",
      "description": "Gain in-depth knowledge of SAFe principles, roles, and practices to effectively implement Agile at scale."
    },
    {
      "title": "Leadership & Facilitation Skills",
      "description": "Develop strong facilitation and servant-leadership capabilities to guide Agile Release Trains successfully."
    },
    {
      "title": "Career Advancement",
      "description": "Enhance your professional credibility and unlock senior Agile leadership opportunities."
    },
    {
      "title": "Advanced Problem-Solving",
      "description": "Learn structured decision-making frameworks for complex scaled Agile environments."
    },
    {
      "title": "Continuous Improvement Mindset",
      "description": "Drive ART optimization through metrics, Inspect & Adapt events, and data-driven improvements."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Efficient Program Execution",
      "description": "Certified RTEs streamline ART coordination, enabling faster value delivery."
    },
    {
      "title": "Enhanced Cross-Functional Collaboration",
      "description": "Bridge communication gaps between business and technical teams."
    },
    {
      "title": "Increased Organizational Agility",
      "description": "Adapt quickly to market shifts with improved Lean-Agile execution."
    },
    {
      "title": "Improved Employee Engagement",
      "description": "Create a culture of alignment, motivation, and high productivity."
    },
    {
      "title": "Proactive Risk Management",
      "description": "Identify and mitigate cross-team risks to ensure predictable delivery."
    }
  ];

  const careerStats = {
    averageIncome: "$135k - $185k",
    incomeLabel: "per annum",
    employmentGrowth: "22%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Release Train Engineers",
        "Scrum Masters",
        "Agile Coaches",
        "Program Managers",
        "Product Managers",
        "Portfolio Managers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Facilitate effective PI Planning sessions.",
    "Lead Agile Release Trains with structured coordination.",
    "Manage cross-team dependencies and risks.",
    "Apply Lean-Agile and Responsible AI practices.",
    "Align ART execution with Lean Portfolio Management."
  ];

  const prerequisites = [
    "Familiarity with Agile frameworks such as Scrum or SAFe.",
    "Experience in program-level coordination is recommended."
  ];

  const certificationSteps = [
    {
      "title": "Complete the Training",
      "description": "Attend 24-hour live instructor-led sessions with Viovn."
    },
    {
      "title": "Prepare with Expert Guidance",
      "description": "Utilize official course materials and practice tests."
    },
    {
      "title": "Pass the Exam",
      "description": "Score 78% or above in the SAFe® RTE exam."
    },
    {
      "title": "Earn Certification",
      "description": "Receive your SAFe® 6.0 Release Train Engineer credential."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: The AI-Empowered RTE Role",
      "topics": [
        "RTE as servant leader",
        "ART lifecycle responsibilities",
        "AI-assisted facilitation",
        "Balancing leadership with AI"
      ]
    },
    {
      "title": "Module 2: SAFe Principles with AI Support",
      "topics": [
        "10 SAFe Principles",
        "AI-enabled prioritization",
        "Systems thinking",
        "Decentralized decision-making"
      ]
    },
    {
      "title": "Module 3: Organizing the ART",
      "topics": [
        "ART structure and roles",
        "Events and cadence",
        "Dependency management",
        "ART health metrics"
      ]
    },
    {
      "title": "Module 4: PI Execution",
      "topics": [
        "Preparing for PI Planning",
        "Facilitating PI Planning",
        "Risk identification",
        "Flow optimization"
      ]
    },
    {
      "title": "Module 5: Continuous Improvement",
      "topics": [
        "Inspect & Adapt events",
        "Performance metrics",
        "Relentless improvement frameworks"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Enable PI Planning",
      "description": "Lead and manage large-scale SAFe ceremonies effectively."
    },
    {
      "title": "Guide ART Execution",
      "description": "Streamline workflows and ensure value delivery."
    },
    {
      "title": "Coach Teams",
      "description": "Provide mentorship to Scrum Masters and ART stakeholders."
    },
    {
      "title": "Leverage Metrics",
      "description": "Use transparency and metrics to build trust."
    },
    {
      "title": "Leverage AI Tools",
      "description": "Apply AI-driven insights for improved decision-making."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "RTE Certification FAQs",
      "items": [
        {
          "question": "1. What is AI-Empowered SAFe RTE Certification?",
          "answer": "It is an advanced training program that prepares professionals to lead Agile Release Trains and drive enterprise-level Agile execution."
        },
        {
          "question": "2. Who should attend?",
          "answer": "Release Train Engineers, Scrum Masters, Agile Coaches, and Program Managers."
        },
        {
          "question": "3. Is it globally recognized?",
          "answer": "Yes, SAFe RTE certification is recognized worldwide."
        },
        {
          "question": "4. How long is certification valid?",
          "answer": "Certification is valid for one year and requires annual renewal."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam FAQs",
      "items": [
        {
          "question": "1. How many questions are in the exam?",
          "answer": "The RTE exam consists of 60 multiple-choice questions."
        },
        {
          "question": "2. What is the passing score?",
          "answer": "The minimum passing score is 78%."
        },
        {
          "question": "3. Can I retake the exam?",
          "answer": "Yes, retakes are allowed with applicable waiting periods and fees."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Is refund available?",
          "answer": "Refunds are not available, but rescheduling is permitted."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "General Training FAQs",
      "items": [
        {
          "question": "1. Is online training available?",
          "answer": "Yes, live instructor-led virtual training is available."
        },
        {
          "question": "2. Do I receive SAFe community access?",
          "answer": "Yes, one-year SAFe® membership is included."
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

  const courseWhyViovn = [
    {
      "title": "Authorized SAFe Training Partner",
      "description": "Official Platinum SPCT Partner of Scaled Agile."
    },
    {
      "title": "Expert SPC Trainers",
      "description": "Training delivered by certified SAFe Practice Consultants."
    },
    {
      "title": "Comprehensive Curriculum",
      "description": "In-depth ART facilitation and program execution content."
    },
    {
      "title": "Real-World Case Studies",
      "description": "Apply SAFe principles to practical enterprise scenarios."
    },
    {
      "title": "Structured Exam Support",
      "description": "Mock exams and preparation resources included."
    },
    {
      "title": "Flexible Learning Modes",
      "description": "Live online, classroom, and corporate options available."
    },
    {
      "title": "Continuous Learning Resources",
      "description": "Access updated materials and SAFe forums."
    },
    {
      "title": "Proven Global Success",
      "description": "High success rate in SAFe certifications worldwide."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'RTE',
      courseName: 'AI-Empowered SAFe® 6.0 Release Train Engineer (RTE) Certification Training',
      dateRange: 'Mar 22 - Mar 25, 2026',
      timeRange: '09:00 AM - 05:00 PM EST',
      trainerName: 'Expert SPCT',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 85,000',
      discountedPrice: 'INR 68,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "AI-Empowered SAFe® 6.0 Release Train Engineer (RTE) Certification Training",
    "breadcrumbName": "SAFe Release Train Engineer (RTE) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Lead Agile Release Trains and Drive Enterprise Agility with Confidence.",
    "benefits": [
      "24 Hours Live Training",
      "Exam Fee Included",
      "24 PDUs & 24 SEUs",
      "One-Year SAFe® Membership"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of AI-Empowered SAFe® RTE Certification",
    "description": [
      "This program prepares professionals to manage and optimize Agile Release Trains within the Scaled Agile Framework.",
      "Participants gain hands-on expertise in PI Planning, value delivery, Lean-Agile leadership, and Responsible AI integration."
    ],
    "whatIsTitle": "What is AI-Empowered SAFe RTE Certification?",
    "whatIsDescription": [
      "An immersive training program designed for professionals responsible for facilitating Agile Release Trains and ensuring continuous value delivery."
    ],
    "whatsIncludedTitle": "What's Included?",
    "whatsIncludedDescription": [
      "24 Hours Instructor-led Training",
      "Practice Tests",
      "Exam Fee",
      "One-Year SAFe Membership"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "ART Facilitation",
      "PI Planning Management",
      "Dependency Resolution",
      "Continuous Value Delivery",
      "Responsible AI Integration"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live virtual instructor-led sessions, corporate programs, and classroom workshops."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporate Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Enterprise-focused SAFe training tailored to align strategy, delivery, and Agile transformation objectives."
  };

  const courseMetadata = {
    shortName: 'SAFe RTE',
    shortNameAlt: 'RTE',
    fullName: 'AI-Empowered SAFe® 6.0 Release Train Engineer (RTE) Certification Training',
    fullNameAlt: 'SAFe® 6.0 Release Train Engineer (RTE) Certification',
    certificateName: 'Release Train Engineer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® Release Train Engineer Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® Release Train Engineer Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'SAFe® 6 Release Train Engineer (RTE)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Release Train Engineers",
    "Scrum Masters",
    "Agile Coaches",
    "Program Managers",
    "Product Managers",
    "Portfolio Managers"
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
      ltpLabel: 'Scaled Agile Global Partner',
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
              <CourseWhyViovn features={courseWhyViovn} />
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

export default AIEmpoweredSAFeReleaseTrainEngineerRTECertificationTraining;
