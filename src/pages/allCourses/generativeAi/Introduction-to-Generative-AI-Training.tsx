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

const IntroductionToGenerativeAITraining = () => {
  const highlights = [
    { text: "8 hours of live instructor-led online training", icon: <Star className="w-5 h-5" /> },
    { text: "Comprehensive Generative AI tools-focused curriculum", icon: <Star className="w-5 h-5" /> },
    { text: "Unlimited access to course content", icon: <Star className="w-5 h-5" /> },
    { text: "Real-time doubt resolution sessions", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on project-based learning", icon: <Star className="w-5 h-5" /> },
    { text: "Globally recognized certification", icon: <Star className="w-5 h-5" /> },
    { text: "Interactive workshop experience", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 learning assistance and support", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong AI Foundation",
      "description": "Gain a solid understanding of Generative AI concepts, models, and real-world applications."
    },
    {
      "title": "Creative Problem Solving",
      "description": "Learn how to use AI tools to solve real-world business and technical problems creatively."
    },
    {
      "title": "Prompt Engineering Skills",
      "description": "Master the art of crafting effective prompts to generate accurate and optimized AI responses."
    },
    {
      "title": "Hands-On Experience",
      "description": "Apply theoretical knowledge through practical exercises, case studies, and projects."
    },
    {
      "title": "Career Readiness",
      "description": "Prepare yourself for growing career opportunities in the Generative AI domain."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Workforce Upskilling",
      "description": "Equip teams with AI knowledge to boost productivity and innovation."
    },
    {
      "title": "Informed AI Adoption",
      "description": "Enable better decision-making regarding AI implementation and investment."
    },
    {
      "title": "Innovation Acceleration",
      "description": "Encourage development of AI-driven products and services."
    },
    {
      "title": "Competitive Advantage",
      "description": "Stay ahead of industry trends through Generative AI integration."
    },
    {
      "title": "Employee Engagement",
      "description": "Improve professional development opportunities and employee satisfaction."
    }
  ];

  const careerStats = {
    averageIncome: "$85k - $130k",
    incomeLabel: "Average Salary",
    employmentGrowth: "40%",
    growthLabel: "AI Jobs Growth"
  };

  const attendees = [
    {
      group: [
        "Business Leaders",
        "Product Managers",
        "Data Scientists",
        "Software Developers",
        "Content Creators",
        "Marketing Professionals"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Generative AI architectures.",
    "Master prompt engineering techniques.",
    "Use AI tools for content and code generation.",
    "Implement AI-driven workflows.",
    "Ethical and responsible AI usage."
  ];

  const prerequisites = [
    "No prior AI knowledge required.",
    "Familiarity with basic computing and the internet."
  ];

  const certificationSteps = [
    {
      title: "Enroll in Training",
      description: "Register for the Introduction to Generative AI Course.",
      color: "#3b82f6"
    },
    {
      title: "Attend Live Sessions",
      description: "Participate in 8 hours of expert-led training.",
      color: "#2563eb"
    },
    {
      title: "Complete Workshop",
      description: "Engage in hands-on activities and projects.",
      color: "#1d4ed8"
    },
    {
      title: "Earn Certification",
      description: "Receive your Introduction to Generative AI certification.",
      color: "#1e3a8a"
    }
  ];

  const curriculumModules = [
    {
      title: "Gen AI Basics",
      topics: [
        "What is Generative AI?",
        "Difference between AI/ML/GenAI",
        "History and evolution"
      ]
    },
    {
      title: "Large Language Models (LLMs)",
      topics: [
        "Understanding GPT and similar models",
        "Text generation and analysis",
        "Prompt engineering foundations"
      ]
    },
    {
      title: "Creative AI Tools",
      topics: [
        "Image and video generation tools",
        "Code-assistants for developers",
        "Music and audio generation"
      ]
    },
    {
      title: "Enterprise AI Solutions",
      topics: [
        "Customizing AI for business",
        "Integration and automation",
        "Ethical AI and security"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Foundational AI Knowledge",
      description: "Understand the core concepts and technologies behind Generative AI."
    },
    {
      title: "Tool Mastery",
      description: "Gain hands-on experience with leading Generative AI tools and platforms."
    },
    {
      title: "Actionable AI Skills",
      description: "Learn to apply AI to real-world tasks and workflows immediately."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Is this course suitable for non-technical people?",
          answer: "Yes, this course is designed for both technical and non-technical professionals."
        },
        {
          question: "2. Do I need to know programming?",
          answer: "No programming knowledge is required for this introductory course."
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
      title: 'Real-World Case',
      subtitle: 'Studies',
      color: 'bg-red-50 text-red-600',
    },
    {
      icon: Briefcase,
      title: 'Practical Project',
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
      name: 'Expert AI Instructor',
      role: 'Generative AI Specialist',
      rating: '4.8',
      experience: '8+ Years',
      description: 'Expert in LLMs, prompt engineering, and AI tool integration for business productivity.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    }
  ];

  const courseWhyViovn = [
    { title: "Fast-Track Learning", description: "Master AI basics in just 8 hours of live training." },
    { title: "Tool-Centric Approach", description: "Hands-on usage of modern Generative AI platforms." },
    { title: "Practical Use Cases", description: "Focus on real-world applications and workflow improvements." },
    { title: "Lifetime Community", description: "Join a network of AI-forward professionals." }
  ];

  

  const certificateBenefits = [
    'Introduction to GenAI Digital Badge',
    'AI Tools Resource Guide',
    'Prompt Library Access',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Introduction to Generative AI Training",
    breadcrumbName: "Generative AI Training | Introduction to AI Tools",
    rating: "4.8",
    enrolledCount: "2.5k+",
    subtitle: "Unlock the Potential of Generative AI for Your Career",
    benefits: [
      "Foundational AI concepts",
      "Hands-on tool workshops",
      "8-hour intensive session",
      "Course completion certificate"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of Introduction to Generative AI Training",
    "description": [
      "This course provides a fast-track entry into the world of Generative AI.",
      "In just 8 hours, you will go from understanding the basics to using AI tools to enhance your daily productivity and creativity."
    ],
    "whatIsTitle": "What is Generative AI Training?",
    "whatIsDescription": [
      "It is an introductory program designed to demystify AI and provide practical skills for using large language models and other generative tools.",
      "The training is focused on immediate application and building a solid foundation for future AI learning."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "8 Hours of Live Instructor-Led Training",
      "Step-by-Step AI Tool Workshops",
      "Cheat Sheets for Prompt Engineering",
      "Certification of Completion",
      "24/7 Support Access"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "GenAI Foundations",
      "Prompt Engineering",
      "Text/Image/Video Generation",
      "AI for Productivity",
      "Responsible AI Practices"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live interactive online workshops.",
      "Self-paced learning options with support."
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn for AI Foundation Training",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Build a shared AI baseline across your organization to drive innovation and efficiency."
  };

  const courseMetadata = {
    shortName: 'GenAI-Intro',
    shortNameAlt: 'Intro to GenAI',
    fullName: 'Introduction to Generative AI Training',
    fullNameAlt: 'Introduction to Generative AI Training',
    certificateName: 'Intro to Generative AI Certificate',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing this course, you will be part of the next generation of AI-enabled professionals ready to leverage modern tools.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for Introduction to Generative AI Training?',
    },
    certificate: {
      mockupName: 'SAMANTHA LEE',
      label: 'AI Foundational',
      titlePrefix: 'Earn Your',
      titleHighlight: 'AI',
      titleSuffix: 'Certificate',
      issuerName: 'Viovn',
      certificateType: 'Foundational Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized in',
      signer1Role: 'AI Program Lead',
      signer2Role: 'Academic Director',
    },
  };

  const commonAttendeesList = [
    "Business Leaders",
    "Product Managers",
    "Data Scientists",
    "Software Developers",
    "Content Creators",
    "Marketing Professionals"
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
      ltpLabel: 'AI Skills for Everyone',
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

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.modesTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.modesDescription.map((mode, i) => (
                  <li key={i}>{mode}</li>
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
          categoryName="generative ai"
          categoryLink="/category/generative-ai"
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
                <CourseSidePanel  courseName={heroData.courseName} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IntroductionToGenerativeAITraining;
