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

const GenerativeAIForBusinessAnalystsFunctionalITConsultantsTraining = () => {
  const highlights = [
    { text: "16 hours of intensive live online training", icon: <Star className="w-5 h-5" /> },
    { text: "In-depth coverage of Generative AI concepts", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on practical sessions with real tools", icon: <Star className="w-5 h-5" /> },
    { text: "Real-world case studies and business projects", icon: <Star className="w-5 h-5" /> },
    { text: "Expert-led sessions by industry professionals", icon: <Star className="w-5 h-5" /> },
    { text: "Access to a dedicated learning portal", icon: <Star className="w-5 h-5" /> },
    { text: "Networking opportunities with peers and AI experts", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "AI-Enhanced Business Analysis Skills",
      "description": "Learn to apply Generative AI techniques to improve requirement gathering, solution design, and data-driven analysis."
    },
    {
      "title": "Improved Consulting Capabilities",
      "description": "Use AI-powered insights to recommend optimized technology and business solutions to clients."
    },
    {
      "title": "Data-Driven Decision Making",
      "description": "Leverage AI-generated datasets and predictive insights to enhance forecasting and reporting accuracy."
    },
    {
      "title": "Career Advancement",
      "description": "Gain recognized certification that strengthens your professional profile in AI-enabled consulting roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enhanced Process Optimization",
      "description": "Enable teams to streamline workflows and improve efficiency using Generative AI solutions."
    },
    {
      "title": "Improved Solution Design",
      "description": "Integrate AI capabilities into enterprise IT consulting projects for smarter business outcomes."
    },
    {
      "title": "Data Augmentation & Insights",
      "description": "Generate high-quality synthetic datasets to enhance analytics and business intelligence initiatives."
    },
    {
      "title": "Responsible AI Adoption",
      "description": "Implement ethical AI frameworks to ensure governance, compliance, and transparency."
    }
  ];

  const careerStats = {
    averageIncome: "$110k - $155k",
    incomeLabel: "Average Salary",
    employmentGrowth: "32%",
    growthLabel: "AI Consultant Demand"
  };

  const attendees = [
    {
      group: [
        "Business Analysts",
        "Functional IT Consultants",
        "Solution Designers",
        "Digital Transformation Professionals",
        "IT Project Managers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Apply Generative AI to business analysis.",
    "Automate requirement gathering workflows.",
    "Enhance solution design using AI logic.",
    "Perform data synthesis for analysis.",
    "Implement AI-driven client recommendations."
  ];

  const prerequisites = [
    "Prior experience in business analysis or IT consulting.",
    "Familiarity with software development lifecycles (SDLC)."
  ];

  const certificationSteps = [
    {
      title: "Enroll in Program",
      description: "Register for the BA & IT Consultant AI Training.",
      color: "#3b82f6"
    },
    {
      title: "Attend Live Sessions",
      description: "Participate in 16 hours of specialized training.",
      color: "#2563eb"
    },
    {
      title: "Complete Case Studies",
      description: "Apply AI to real-world business analysis scenarios.",
      color: "#1d4ed8"
    },
    {
      title: "Earn Certification",
      description: "Receive your AI for Analysts & Consultants certification.",
      color: "#1e3a8a"
    }
  ];

  const curriculumModules = [
    {
      title: "AI for Business Analysis",
      topics: [
        "Automating user story generation",
        "AI-powered stakeholder mapping",
        "Gap analysis with Generative AI"
      ]
    },
    {
      title: "Solution Design with AI",
      topics: [
        "AI-assisted prototyping",
        "Optimizing system architectures",
        "Functional specification automation"
      ]
    },
    {
      title: "Data Stewardship & Synthesis",
      topics: [
        "Generating synthetic data for testing",
        "AI-driven business intelligence",
        "Data quality and governance"
      ]
    },
    {
      title: "AI Consulting Frameworks",
      topics: [
        "Building an AI consulting practice",
        "Managing client expectations for AI",
        "Ethics and transparency in consulting"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Analysis Automation",
      description: "Master the tools to automate repetitive analysis and documentation tasks."
    },
    {
      title: "Consultant Proficiency",
      description: "Learn to provide high-value AI-driven advisory services to clients."
    },
    {
      title: "Practical AI Implementation",
      description: "Gain hands-on skills to embed AI into functional project lifecycles."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Is this course for technical or functional consultants?",
          answer: "It is specifically tailored for functional consultants and business analysts."
        },
        {
          question: "2. Do I need to be a data scientist?",
          answer: "No, the course focuses on application and strategy rather than model building."
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
      title: 'Analysis Case',
      subtitle: 'Studies',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Briefcase,
      title: 'Practical Lab',
      subtitle: 'Experience',
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  const courseClients = [
    { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg' },
    { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Hexaware', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexaware_new_logo.svg' },
    { name: 'Thomson Reuters', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Thomson_Reuters_logo.svg' },
  ];

  const courseTrainers = [
    {
      name: 'Expert Consultant',
      role: 'Principal Solutions Architect',
      rating: '4.8',
      experience: '12+ Years',
      description: 'Expert in bridging business needs with AI-native technology solutions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    }
  ];

  const courseWhyViovn = [
    { title: "Functional Focus", description: "Specifically designed for analysis and consulting roles." },
    { title: "Case-Drive Learning", description: "Real-world business analysis use cases and workshops." },
    { title: "Industry-Ready Skills", description: "Immediate application to consulting projects." },
    { title: "Global Network", description: "Access to a community of AI-enabled consultants." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-BA',
      courseName: 'Gen AI for Business Analysts',
      dateRange: 'Oct 12 - Oct 13, 2026',
      timeRange: '10:00 AM - 06:00 PM IST',
      trainerName: 'Expert Consultant',
      trainerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 40,000',
      discountedPrice: 'INR 29,999',
      discountPercentage: '25',
    },
  ];

  const certificateBenefits = [
    'AI-Native Consultant Digital Badge',
    'Requirement Automation Toolkit',
    'Consulting Framework Templates',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Generative AI for Business Analysts, Functional IT Consultants Training",
    breadcrumbName: "Generative AI for BA & Consultants | Functional Training",
    rating: "4.8",
    enrolledCount: "1.5k+",
    subtitle: "Reimagine Business Analysis and Consulting with Generative AI",
    benefits: [
      "Requirement automation labs",
      "AI-driven solution design",
      "16-hour expert-led training",
      "Globally recognized certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of AI for Analysts & Consultants",
    "description": [
      "This course provides the specialized skills needed to apply Generative AI in business analysis and IT consulting.",
      "You will learn to use AI to speed up documentation, enhance problem-solving, and provide better solution recommendations."
    ],
    "whatIsTitle": "Why AI for Functional Roles?",
    "whatIsDescription": [
      "Business Analysts and Consultants are the bridge between strategy and execution. AI allows this bridge to be built faster and more accurately.",
      "By mastering Generative AI, functional professionals can focus on high-level strategy while automating routine analysis tasks."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "16 Hours of Intensive Live Online Training",
      "Hands-on Labs for Business Analysis Tools",
      "AI Configuration Frameworks for SDLC",
      "Certification of Proficiency",
      "Post-Training Strategy Session"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Automated Analysis",
      "Synthethic Data Creation",
      "AI Strategy Advisory",
      "Process Optimization",
      "SDLC Automation",
      "Predictive Modeling Basics"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live interactive online workshops.",
      "Custom corporate group sessions."
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn for Analyst Training",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Empower your business analysis and consulting teams with AI to deliver faster and more accurate projects."
  };

  const courseMetadata = {
    shortName: 'GenAI-BA-FC',
    shortNameAlt: 'GenAI for BA & Consultants',
    fullName: 'Generative AI for Business Analysts Training',
    fullNameAlt: 'Generative AI for Business Analysts Training',
    certificateName: 'AI for Business Analysis Certificate',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Participants emerge from this course ready to lead AI-driven projects and provide superior functional consulting services.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for AI for Analysts Training?',
    },
    certificate: {
      mockupName: 'DANIEL WRIGHT',
      label: 'Consulting Excellence',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Specialist',
      titleSuffix: 'Certification',
      issuerName: 'Viovn',
      certificateType: 'Functional Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully completed the requirements to be recognized as an',
      signer1Role: 'Principal Consultant',
      signer2Role: 'Chief Strategy Officer',
    },
  };

  const commonAttendeesList = [
    "Business Analysts",
    "Functional IT Consultants",
    "Solution Designers",
    "Digital Transformation Professionals",
    "IT Project Managers"
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
      ltpLabel: 'Functional AI Consulting Training',
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

              {overviewContent.whatIsTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.whatIsTitle}
                  </h3>
                  {overviewContent.whatIsDescription.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </>
              )}

              {overviewContent.whatsIncludedTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.whatsIncludedTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {overviewContent.whatsIncludedDescription.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {overviewContent.skills && overviewContent.skills.length > 0 && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.skillsTitle || "Skills Covered"}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {overviewContent.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-bold border border-slate-200 uppercase tracking-tighter">
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}
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

export default GenerativeAIForBusinessAnalystsFunctionalITConsultantsTraining;
