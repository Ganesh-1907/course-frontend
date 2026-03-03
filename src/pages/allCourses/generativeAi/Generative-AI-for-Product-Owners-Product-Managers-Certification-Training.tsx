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

const GenerativeAIForProductOwnersProductManagersCertificationTraining = () => {
  const highlights = [
    { text: "16-hour live instructor-led sessions with practical AI applications", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on activities in AI-driven product strategy and roadmapping", icon: <Star className="w-5 h-5" /> },
    { text: "Aligned with modern product management and AI leadership practices", icon: <Star className="w-5 h-5" /> },
    { text: "Real-world projects on generative AI in product discovery and prioritization", icon: <Star className="w-5 h-5" /> },
    { text: "AI prompts, templates, and frameworks for planning and decision-making", icon: <Star className="w-5 h-5" /> },
    { text: "AI-enhanced workflows from ideation to release", icon: <Star className="w-5 h-5" /> },
    { text: "Case studies and simulations on AI adoption in agile environments", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "AI Knowledge in Product Management",
      "description": "Gain in-depth understanding of generative AI concepts and their direct applications in product strategy and execution."
    },
    {
      "title": "Advanced Prompt Creation",
      "description": "Develop structured prompt-writing skills to generate accurate and context-specific AI outputs."
    },
    {
      "title": "Improved Product Efficiency",
      "description": "Enhance efficiency in market research, backlog refinement, and feature prioritization using AI tools."
    },
    {
      "title": "Data-Driven Decision Making",
      "description": "Strengthen decision-making skills through AI-powered analysis and competitive intelligence."
    },
    {
      "title": "Creative Problem Solving",
      "description": "Use AI-driven ideation and prototyping to nurture innovation and creative thinking."
    },
    {
      "title": "Adaptability to Market Changes",
      "description": "Respond faster to evolving customer and market needs using AI-assisted insights."
    },
    {
      "title": "Career Growth in AI Leadership",
      "description": "Unlock new opportunities in AI-integrated product leadership roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Accelerated Product Development",
      "description": "Enhance development cycles with AI-backed planning and execution."
    },
    {
      "title": "Improved Product-Market Fit",
      "description": "Leverage AI-driven customer insights and predictive analytics to refine offerings."
    },
    {
      "title": "Optimized Backlog & ROI",
      "description": "Prioritize features effectively to maximize business value and ROI."
    },
    {
      "title": "Enhanced Cross-Functional Collaboration",
      "description": "Improve communication and documentation through AI-powered tools."
    },
    {
      "title": "Reduced Time-to-Market",
      "description": "Automate repetitive research and reporting tasks to launch faster."
    },
    {
      "title": "Strategic Forecasting",
      "description": "Support leadership decisions with AI-generated market trends and forecasts."
    },
    {
      "title": "Culture of Innovation",
      "description": "Encourage continuous improvement and innovation using AI capabilities."
    }
  ];

  const careerStats = {
    averageIncome: "$145k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "18%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "Product Owners",
        "Product Managers",
        "Business Analysts",
        "Agile Practitioners",
        "Product Strategists",
        "Aspiring Product Leaders"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Apply generative AI in product discovery and customer research.",
    "Create AI-driven product roadmaps aligned with business goals.",
    "Prioritize backlog items using AI-based scoring models.",
    "Automate product documentation and stakeholder communication.",
    "Embed AI workflows across the entire product lifecycle.",
    "Drive innovation through AI-powered experimentation."
  ];

  const prerequisites = [
    "Basic understanding of product lifecycle and management concepts",
    "Familiarity with fundamental AI concepts (recommended)",
    "Experience in product ownership or product management roles",
    "Interest in leveraging AI for innovation and strategy"
  ];

  const certificationSteps = [
    {
      "title": "Enroll",
      "description": "Register for the Generative AI training tailored for Product Owners and Managers."
    },
    {
      "title": "Participate",
      "description": "Attend interactive sessions, discussions, and hands-on AI exercises."
    },
    {
      "title": "Earn Certification",
      "description": "Receive a course completion certificate validating AI expertise in product management."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Introduction to Generative AI for Product Management",
      "topics": [
        "Generative AI fundamentals",
        "ChatGPT for product workflows",
        "Hands-on AI experimentation"
      ]
    },
    {
      "title": "Module 2: AI-Driven Market Research",
      "topics": [
        "Market research using AI",
        "Competitor analysis with AI tools"
      ]
    },
    {
      "title": "Module 3: Product Roadmapping",
      "topics": [
        "Creating AI-powered product roadmaps",
        "Strategic prioritization using AI"
      ]
    },
    {
      "title": "Module 4: Requirement Gathering & User Stories",
      "topics": [
        "AI-assisted requirement gathering",
        "User story creation",
        "Acceptance criteria generation"
      ]
    },
    {
      "title": "Module 5: Sprint Planning & Backlog Management",
      "topics": [
        "AI for sprint planning",
        "Backlog optimization",
        "Retrospective insights using AI"
      ]
    },
    {
      "title": "Module 6: Risk & Communication Management",
      "topics": [
        "AI-based risk identification",
        "Status reporting automation",
        "Presentation creation using AI"
      ]
    },
    {
      "title": "Module 7: Product Launch & Marketing",
      "topics": [
        "AI-driven launch planning",
        "Collaboration using AI tools"
      ]
    },
    {
      "title": "Module 8: Post-Launch Analysis",
      "topics": [
        "AI-powered performance tracking",
        "Continuous improvement strategies"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Generative AI Fundamentals",
      "description": "Understand AI capabilities and their relevance in modern product management."
    },
    {
      "title": "AI-Driven Product Discovery",
      "description": "Use AI tools to analyze customer behavior and market trends."
    },
    {
      "title": "Strategic Roadmapping",
      "description": "Develop AI-powered product strategies aligned with business goals."
    },
    {
      "title": "Backlog Prioritization",
      "description": "Implement AI scoring models for high-value feature selection."
    },
    {
      "title": "Workflow Automation",
      "description": "Automate tasks across ideation, planning, and release cycles."
    },
    {
      "title": "Real-World AI Application",
      "description": "Apply AI concepts through practical case studies and simulations."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Course FAQs",
      "items": [
        {
          "question": "1. Do I need prior AI knowledge?",
          "answer": "No, the course starts with AI fundamentals and gradually moves to practical product management applications."
        },
        {
          "question": "2. Who should attend this course?",
          "answer": "Product Owners, Product Managers, Business Analysts, and professionals involved in product strategy."
        },
        {
          "question": "3. What tools are covered?",
          "answer": "Tools such as ChatGPT, Claude, Gemini, Copilot, Jira, Miro, and Azure DevOps are introduced."
        },
        {
          "question": "4. Will I receive certification?",
          "answer": "Yes, you will receive a course completion certificate from Viovn."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Are refunds provided?",
          "answer": "Refunds are not available, but you may reschedule your batch."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        {
          "question": "1. Is this course delivered online?",
          "answer": "Yes, it is conducted through live instructor-led virtual sessions."
        },
        {
          "question": "2. Do you offer corporate training?",
          "answer": "Yes, customized enterprise training programs are available."
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
    { title: "Global Recognition", description: "Industry-recognized certification valued worldwide." },
    { title: "Expert Trainers", description: "Learn from experienced AI and product management professionals." },
    { title: "Flexible Learning", description: "Choose weekday or weekend live batches." },
    { title: "Lifetime Access", description: "Access learning materials and session recordings anytime." },
    { title: "Proven Track Record", description: "Trusted by professionals and enterprises globally." },
    { title: "End-to-End Assistance", description: "Complete guidance before, during, and after training." },
    { title: "Interactive Training", description: "Hands-on workshops, case studies, and simulations." },
    { title: "Wide Range of Courses", description: "Access multiple AI and product management certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-PO-PM',
      courseName: 'Generative AI for Product Owners/Product Managers Certification Training',
      dateRange: 'May 15 - May 16, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert AI & Product Trainer',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 48,000',
      discountedPrice: 'INR 35,000',
      discountPercentage: '27',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'AI-PO/PM Resource Guide Access',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Generative AI for Product Owners/Product Managers Certification Training",
    "breadcrumbName": "Generative AI for Product Owners & Managers Training | Viovn",
    "rating": "5.0",
    "enrolledCount": "1.2k+",
    "subtitle": "Integrate AI into Product Strategy and Leadership",
    "benefits": [
      "Live instructor-led AI training",
      "Hands-on real-world product simulations",
      "AI-driven roadmap and backlog frameworks",
      "Globally recognized certification"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of Generative AI for Product Owners/Product Managers Certification",
    "description": [
      "This course empowers product leaders to leverage AI for faster innovation and data-driven decisions.",
      "Through live interactive sessions, you gain practical experience embedding AI across the product lifecycle."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "AI-powered market research",
      "Backlog prioritization models",
      "Product roadmap optimization",
      "AI-driven decision-making",
      "Workflow automation"
    ],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData = {
    "courseName": "Why Viovn Is the First Choice for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn delivers enterprise-focused AI training designed to accelerate product innovation, enhance collaboration, and drive strategic transformation across organizations."
  };

  const courseMetadata = {
    shortName: 'GenAI-PO-PM',
    shortNameAlt: 'GenAI PO/PM',
    fullName: 'Generative AI for Product Owners/Product Managers Certification Training',
    fullNameAlt: 'Generative AI for Product Owners/Product Managers Certification Training',
    certificateName: 'Generative AI for Product Owners/Managers',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "By completing this course, you will be prepared to lead AI-driven product transformations and optimize your organization's product delivery pipeline.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Generative AI for Product Owners/Product Managers Certification Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Viovn',
      certificateType: 'Certificate of Achievement',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with a',
      signer1Role: 'Certified AI Product Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Agile Practitioners",
    "Product Strategists",
    "Aspiring Product Leaders"
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

              {overviewContent.skills.length > 0 && (
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

export default GenerativeAIForProductOwnersProductManagersCertificationTraining;
