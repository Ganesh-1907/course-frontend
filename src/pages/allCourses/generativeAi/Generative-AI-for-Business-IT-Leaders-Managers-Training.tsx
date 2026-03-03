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

const GenerativeAIForBusinessITLeadersManagersTraining = () => {
  const highlights = [
    { text: "16 hours online live training session", icon: <Star className="w-5 h-5" /> },
    { text: "Industry-specific insights for business and IT leaders", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on learning with modern Generative AI tools", icon: <Star className="w-5 h-5" /> },
    { text: "Learn from experienced Generative AI professionals", icon: <Star className="w-5 h-5" /> },
    { text: "Develop an AI integration blueprint for your organization", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 customer support assistance", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strategic AI Leadership",
      "description": "Develop the capability to lead Generative AI initiatives and drive innovation across business functions."
    },
    {
      "title": "Enhanced Decision-Making",
      "description": "Leverage AI-driven insights to support data-informed executive decisions."
    },
    {
      "title": "Innovation Acceleration",
      "description": "Use Generative AI to accelerate product design, research, and development cycles."
    },
    {
      "title": "Competitive Advantage",
      "description": "Position yourself as a forward-thinking leader in AI-enabled digital transformation."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enterprise AI Strategy Development",
      "description": "Build structured AI adoption roadmaps aligned with business objectives."
    },
    {
      "title": "Operational Efficiency",
      "description": "Automate processes and optimize workflows using Generative AI solutions."
    },
    {
      "title": "Cross-Department Innovation",
      "description": "Enable collaboration between IT and business units for AI-driven transformation."
    },
    {
      "title": "Responsible AI Governance",
      "description": "Implement ethical and compliant AI frameworks within enterprise systems."
    }
  ];

  const careerStats = {
    averageIncome: "$140k - $210k",
    incomeLabel: "Average Salary",
    employmentGrowth: "28%",
    growthLabel: "AI Leadership Growth"
  };

  const attendees = [
    {
      group: [
        "Business Executives",
        "IT Leaders & Managers",
        "Project Managers",
        "Digital Transformation Leaders",
        "Innovation & Strategy Consultants"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Develop a Generative AI roadmap.",
    "Assess AI readiness for the enterprise.",
    "Implement AI governance and ethics.",
    "Optimize IT infrastructure for AI.",
    "Lead AI-driven cross-functional teams."
  ];

  const prerequisites = [
    "Prior managerial or leadership experience.",
    "Basic awareness of cloud and digital technologies."
  ];

  const certificationSteps = [
    {
      title: "Enroll in Program",
      description: "Register for the Gen AI for Leaders Training.",
      color: "#3b82f6"
    },
    {
      title: "Attend Live Sessions",
      description: "Participate in 16 hours of strategic training.",
      color: "#2563eb"
    },
    {
      title: "Develop AI Blueprint",
      description: "Create an AI integration plan for your unit.",
      color: "#1d4ed8"
    },
    {
      title: "Earn Certification",
      description: "Receive your AI for Business & IT Leaders certification.",
      color: "#1e3a8a"
    }
  ];

  const curriculumModules = [
    {
      title: "AI Strategy for Leaders",
      topics: [
        "Gen AI landscape for enterprises",
        "Identifying high-value AI use cases",
        "ROI and value measurement"
      ]
    },
    {
      title: "IT Infrastructure for AI",
      topics: [
        "Cloud-native AI integration",
        "Data strategy and sovereignty",
        "Security and privacy for Gen AI"
      ]
    },
    {
      title: "AI Governance & Ethics",
      topics: [
        "Responsible AI frameworks",
        "Compliance and regulatory landscape",
        "Managing AI risks"
      ]
    },
    {
      title: "Leading AI Teams",
      topics: [
        "Upskilling the workforce",
        "AI-native cultural transformation",
        "Change management for AI"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Enterprise AI Strategy",
      description: "Learn to design and execute a comprehensive AI roadmap."
    },
    {
      title: "Risk & Governance",
      description: "Understand how to implement AI safely and ethically."
    },
    {
      title: "Strategic Decision-Making",
      description: "Master the use of AI to drive business value and efficiency."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Is this course focused on coding?",
          answer: "No, this is a strategic leadership course focused on business and IT management."
        },
        {
          question: "2. Can this be customized for my organization?",
          answer: "Yes, we offer tailored corporate training for leadership teams."
        }
      ]
    }
  ];
  const courseFeatures = [
    {
      icon: Users,
      title: 'Guaranteed to',
      subtitle: 'Run Workshops',
      color: 'bg-accent text-primary',
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
      title: 'Strategic Case',
      subtitle: 'Studies',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Briefcase,
      title: 'AI Blueprint',
      subtitle: 'Development',
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
      name: 'Expert AI Leader',
      role: 'Enterprise AI Consultant',
      rating: '4.9',
      experience: '15+ Years',
      description: 'Specializes in AI transformation and strategy for Fortune 500 leadership teams.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    }
  ];

  const courseWhyViovn = [
    { title: "Strategic Focus", description: "Beyond tools, we focus on enterprise-wide AI strategy." },
    { title: "Leadership Insights", description: "Designed specifically for decision-makers and IT heads." },
    { title: "Blueprint Output", description: "Walk away with a tangible AI integration plan." },
    { title: "Executive Network", description: "Connect with other leaders driving AI change." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-LEAD',
      courseName: 'Gen AI for Business & IT Leaders',
      dateRange: 'Sep 10 - Sep 11, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Expert AI Leader',
      trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 55,000',
      discountedPrice: 'INR 45,000',
      discountPercentage: '18',
    },
  ];

  const certificateBenefits = [
    'Executive AI Leadership Digital Badge',
    'AI Strategy Framework Guide',
    'Governance Policy Templates',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Generative AI for Business & IT Leaders & Managers Training",
    breadcrumbName: "Generative AI for Leaders | IT & Business Strategy",
    rating: "4.9",
    enrolledCount: "1.8k+",
    subtitle: "Lead Your Organization Through the Generative AI Revolution",
    benefits: [
      "Strategic AI blueprinting",
      "Executive governance & ethics",
      "16-hour intensive leadership track",
      "Globally recognized certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of AI for Business & IT Leaders",
    "description": [
      "This course empowers executives and IT leaders to navigate the complexities of AI adoption.",
      "You will learn to identify strategic opportunities and implement robust governance frameworks."
    ],
    "whatIsTitle": "Why Generative AI for Leaders?",
    "whatIsDescription": [
      "Leadership in the AI era requires more than technical awareness; it demands strategic vision and a commitment to ethical integration.",
      "This training provides the tools to lead teams and organizations through profound digital shifts."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "16 Hours of Executive Instructor-Led Training",
      "AI Strategy Templates & Roadmaps",
      "Governance & Ethical Frameworks",
      "Certification of AI Leadership",
      "Executive Case Library Access"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "AI Strategy",
      "Organizational Change",
      "Risk Management",
      "Ethics & Compliance",
      "ROI Analysis",
      "Infrastructure Scaling"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live interactive online sessions.",
      "Private executive training available."
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn for AI Leadership",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Equip your leadership layer with the strategic foresight to dominate in the AI-native marketplace."
  };

  const courseMetadata = {
    shortName: 'GenAI-Leader',
    shortNameAlt: 'GenAI for Leaders',
    fullName: 'Generative AI for Business & IT Leaders Training',
    fullNameAlt: 'Generative AI for Business & IT Leaders Training',
    certificateName: 'AI Strategy for Leaders Certificate',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Graduates of this program lead the charge in enterprise AI transformation, driving real business value through innovation.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for AI for Leaders Training?',
    },
    certificate: {
      mockupName: 'ROBERT THOMPSON',
      label: 'AI Strategy',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Leadership',
      titleSuffix: 'Certification',
      issuerName: 'Viovn',
      certificateType: 'Executive Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully demonstrated excellence in AI strategy and',
      signer1Role: 'Head of AI Strategy',
      signer2Role: 'Chief Technology Officer',
    },
  };

  const commonAttendeesList = [
    "Business Executives",
    "IT Leaders & Managers",
    "Project Managers",
    "Digital Transformation Leaders",
    "Innovation & Strategy Consultants"
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
      ltpLabel: 'Strategic AI Leadership Training',
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
            <h4 className="text-[14px] text-primary font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
              {overviewContent.title}
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
              {overviewContent.subtitle}{' '}
              <span className="text-primary">✦</span>
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

export default GenerativeAIForBusinessITLeadersManagersTraining;
