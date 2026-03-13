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


const GenerativeAIforAgileLeadersTraining = () => {
  const highlights = [
    { text: "16 Hours of expert-led live training by industry practitioners", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on learning with real-time Generative AI tools", icon: <Star className="w-5 h-5" /> },
    { text: "Practical frameworks and templates for AI-driven Agile processes", icon: <Star className="w-5 h-5" /> },
    { text: "Real-world case studies on Generative AI adoption in Agile environments", icon: <Star className="w-5 h-5" /> },
    { text: "Integration guidance for leading AI tools and platforms", icon: <Star className="w-5 h-5" /> },
    { text: "Access to AI prompt libraries, checklists, and Agile+AI workflow guides", icon: <Star className="w-5 h-5" /> },
    { text: "Course completion certificate from Viovn validating your expertise", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "AI-Enhanced Agile Leadership",
      description: "Develop a clear understanding of how Generative AI enhances Agile leadership and delivery."
    },
    {
      title: "AI Integration in Agile Ceremonies",
      description: "Learn to integrate AI tools into backlog refinement, sprint planning, and retrospectives."
    },
    {
      title: "Prompt Engineering for Agile",
      description: "Specialize in crafting effective prompts to optimize AI outcomes within Agile workflows."
    },
    {
      title: "Hands-On Agile Simulations",
      description: "Apply AI strategies through practical Agile simulations and real-time exercises."
    },
    {
      title: "Future-Ready Leadership",
      description: "Prepare yourself to lead AI-driven Agile transformations successfully."
    }
  ];

  const corporateBenefits = [
    {
      title: "Accelerated Delivery Cycles",
      description: "Improve Agile delivery cycles using AI-backed planning and prioritization."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Enhance forecasting accuracy with AI-driven analytics."
    },
    {
      title: "Workflow Innovation",
      description: "Integrate AI into product development workflows to promote innovation."
    },
    {
      title: "Improved Team Alignment",
      description: "Use AI-powered insights to improve collaboration and transparency."
    },
    {
      title: "Scalable AI Adoption",
      description: "Scale AI practices across Agile teams for enterprise-wide efficiency."
    }
  ];

  const careerStats = {
    averageIncome: "$120k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "12%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "Agile Coaches",
        "Scrum Masters",
        "Product Owners",
        "Release Train Engineers",
        "Portfolio Managers",
        "Executives leading Agile transformations"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Apply Generative AI in Agile leadership scenarios.",
    "Enhance sprint planning and backlog refinement with AI.",
    "Use AI-powered dashboards and metrics.",
    "Integrate AI into scaling frameworks like SAFe, LeSS, and Scrum@Scale.",
    "Lead responsible AI adoption within Agile teams."
  ];

  const prerequisites = [
    "Basic knowledge of Agile principles and frameworks like Scrum or SAFe.",
    "Experience in Agile leadership or product roles is beneficial.",
    "Interest in applying AI within Agile environments."
  ];

  const certificationSteps = [
    {
      title: "Enroll",
      description: "Join live instructor-led training sessions."
    },
    {
      title: "Learn",
      description: "Understand AI applications in Agile workflows."
    },
    {
      title: "Practice",
      description: "Apply AI prompts and automation strategies in Agile simulations."
    },
    {
      title: "Certification",
      description: "Receive a Viovn Course Completion Certificate."
    }
  ];

  const curriculumModules = [
    {
      title: "Module 1: Introduction to Generative AI in Agile",
      topics: [
        "Fundamentals of Generative AI",
        "Role of AI in Agile leadership",
        "Agile use cases",
        "Hands-on AI tool exploration"
      ]
    },
    {
      title: "Module 2: AI in Lean Portfolio Management",
      topics: [
        "Strategic planning optimization",
        "Value stream mapping with AI",
        "AI-powered prioritization"
      ]
    },
    {
      title: "Module 3: AI-Driven Backlog & PI Planning",
      topics: [
        "AI for backlog grooming",
        "Feature creation and estimation",
        "Risk identification automation"
      ]
    },
    {
      title: "Module 4: AI for Agile Coordination",
      topics: [
        "Tracking dependencies",
        "Resolving impediments",
        "Improving team synchronization"
      ]
    },
    {
      title: "Module 5: AI-Powered Sprint Planning",
      topics: [
        "Task breakdown automation",
        "Capacity planning with AI",
        "Goal setting optimization"
      ]
    },
    {
      title: "Module 6: AI in Daily Stand-ups",
      topics: [
        "Automating updates",
        "Detecting blockers",
        "Summarizing team health"
      ]
    },
    {
      title: "Module 7: AI in Retrospectives",
      topics: [
        "Root cause analysis",
        "Performance forecasting",
        "Continuous improvement insights"
      ]
    },
    {
      title: "Module 8: AI for Product Ownership",
      topics: [
        "User story generation",
        "Acceptance criteria drafting",
        "Story splitting automation"
      ]
    },
    {
      title: "Module 9: Metrics & Dashboards",
      topics: [
        "AI-generated KPIs",
        "Predictive analytics",
        "Delivery forecasting"
      ]
    },
    {
      title: "Module 10: Workflow Automation",
      topics: [
        "Integrating AI with Jira and Asana",
        "Automating repetitive Agile tasks"
      ]
    },
    {
      title: "Module 11: AI for Agile Transformation",
      topics: [
        "Agile maturity assessment",
        "Transformation roadmap creation",
        "Governance with AI insights"
      ]
    },
    {
      title: "Module 12: Ethical AI & Future Trends",
      topics: [
        "Responsible AI practices",
        "Bias mitigation",
        "Emerging Agile+AI trends"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Generative AI in Agile Leadership",
      description: "Understand how AI supports Agile leadership and team enablement."
    },
    {
      title: "AI-Driven Decision Making",
      description: "Use AI insights to improve tactical and strategic decisions."
    },
    {
      title: "Innovation Acceleration",
      description: "Leverage AI to enhance idea generation and product design."
    },
    {
      title: "Scaling Agile with AI",
      description: "Integrate AI within SAFe, LeSS, and Scrum@Scale frameworks."
    },
    {
      title: "Responsible AI Adoption",
      description: "Lead ethical and transparent AI implementation."
    },
    {
      title: "Real-World Simulations",
      description: "Apply learning through case studies and simulations."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. What is the target audience for this certification course?",
          answer: "This course is designed for Business Managers, Product Managers, and professionals seeking a foundational understanding of cloud computing."
        },
        {
          question: "2. Do I need prior technical knowledge?",
          answer: "No prior technical knowledge is required. The course explains cloud concepts in a business-friendly manner."
        },
        {
          question: "3. What topics are covered?",
          answer: "The course covers cloud models, providers, security, compliance, cost management, and product integration."
        },
        {
          question: "4. How long is the training?",
          answer: "The course includes 20 hours of live online training."
        },
        {
          question: "5. Is there a certification exam?",
          answer: "Yes, participants must complete a final assessment to receive certification."
        },
        {
          question: "6. Will I receive a certificate?",
          answer: "Yes, successful participants receive a Cloud Fundamentals certification."
        },
        {
          question: "7. How can I enroll?",
          answer: "You can register via the Viovn website or contact the enrollment team."
        },
        {
          question: "8. Is post-training support available?",
          answer: "Yes, additional learning resources and updates are provided after completion."
        }
      ]
    },

    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. What happens to my token payment if I don’t enroll immediately?",
          answer: "Token payments become non-refundable after 15 days but can be used for enrollment within 6 months."
        },
        {
          question: "2. Can I pay in installments?",
          answer: "Yes, flexible installment options are available."
        },
        {
          question: "3. What payment methods are accepted?",
          answer: "Credit cards, debit cards, net banking, PayPal, and wire transfers are accepted."
        }
      ]
    },

    {
      id: "category_3",
      label: "General Training FAQs",
      items: [
        {
          question: "1. What if I miss a class?",
          answer: "You can reschedule without additional charges."
        },
        {
          question: "2. Do you provide corporate training?",
          answer: "Yes, customized corporate cloud training is available."
        },
        {
          question: "3. Are your courses affordable?",
          answer: "Yes, competitive pricing and discounts are available."
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
    { "title": "Global Recognition", "description": "Industry-recognized certification valued worldwide." },
    { "title": "Expert Trainers", "description": "Delivered by certified Agile and AI practitioners." },
    { "title": "Flexible Learning", "description": "Live online sessions tailored to professionals." },
    { "title": "Lifetime Access", "description": "Access recordings and materials post-training." },
    { "title": "Proven Track Record", "description": "Trusted by global enterprises." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on workshops and real-world simulations." },
    { "title": "Wide Range of Courses", "description": "Access to multiple Agile and AI certifications." }
  ];

  

  const certificateBenefits = [
    'Professional Certificate from Viovn',
    'Access to Global Agile+AI Community',
    'AI Prompt Library for Agile Ceremonies',
    'Lifetime Access to Program Content',
  ];

  const heroData = {
    courseName: "Generative AI for Agile Leaders Training",
    breadcrumbName: "Generative AI for Agile Leaders Training Course | Viovn",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Transform Agile Leadership with Generative AI",
    benefits: [
      "16 hours live expert training",
      "AI-driven Agile workflow optimization",
      "Prompt engineering mastery",
      "Real-world Agile+AI case studies"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Overview of Generative AI for Agile Leaders Certification",
    description: [
      "This course enables Agile leaders to embed Generative AI into Agile ceremonies and workflows.",
      "Gain hands-on experience applying AI tools to sprint planning, backlog refinement, and retrospectives.",
      "Learn strategies to enhance productivity, innovation, and team collaboration."
    ],
    whatIsTitle: "",
    whatIsDescription: [],
    whatsIncludedTitle: "",
    whatsIncludedDescription: [],
    skillsTitle: "Skills Covered",
    skills: [
      "AI-Backed Sprint Planning",
      "User Story Generation",
      "AI-Powered Metrics & Dashboards",
      "Workflow Automation",
      "Ethical AI Implementation"
    ],
    modesTitle: "",
    modesDescription: []
  };

  const corporateData = {
    courseName: "Why Viovn is the First Choice for Corporates",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Customized Agile+AI training programs designed to upskill teams, drive innovation, and enhance competitive advantage."
  };

  const courseMetadata = {
    shortName: 'GenAI-AL',
    shortNameAlt: 'GenAI-AL',
    fullName: 'Generative AI for Agile Leaders',
    fullNameAlt: 'Generative AI for Agile Leaders',
    certificateName: 'Generative AI for Agile Leaders',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Generative AI for Agile Leaders Training, you will be prepared to lead AI-driven Agile transformations successfully.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Generative AI for Agile Leaders Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Viovn',
      certificateType: 'Certificate of Excellence',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with a',
      signer1Role: 'Certified Agile Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Agile Coaches",
    "Scrum Masters",
    "Product Owners",
    "Release Train Engineers",
    "Portfolio Managers",
    "Executives leading Agile transformations"
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

              {overviewContent.skillsTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.skillsTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {overviewContent.skills.map((skill, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-bold border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}

              {overviewContent.modesTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.modesTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2">
                    {overviewContent.modesDescription.map((mode, i) => (
                      <li key={i}>{mode}</li>
                    ))}
                  </ul>
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

export default GenerativeAIforAgileLeadersTraining;
