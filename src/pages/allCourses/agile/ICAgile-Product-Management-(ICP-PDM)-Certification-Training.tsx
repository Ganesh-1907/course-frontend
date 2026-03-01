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

const ICAgileProductManagementCertificationTraining = () => {
  const highlights = [
    { "text": "14-hour ICAgile-authorized training with PDUs" },
    { "text": "Instructor-led sessions by ICAgile-certified practitioners" },
    { "text": "Strong focus on customer discovery and product visioning" },
    { "text": "Hands-on exercises for strategy and prioritization" },
    { "text": "Practical Agile product management tools and techniques" },
    { "text": "Real-world scenarios and interactive activities" },
    { "text": "Lifetime-valid ICAgile certificate" }
  ];
  const individualBenefits = [
    {
      "title": "Individual Benefits",
      "description": "Build practical Agile product management and roadmap planning skills."
    },
    {
      "title": "Individual Benefits",
      "description": "Improve career opportunities for Product Manager, Product Owner, and Agile Product Lead roles."
    },
    {
      "title": "Individual Benefits",
      "description": "Strengthen decision-making using data-driven and outcome-based thinking."
    },
    {
      "title": "Individual Benefits",
      "description": "Gain hands-on learning through case studies and real-world exercises."
    },
    {
      "title": "Individual Benefits",
      "description": "Increase earning potential through validated product management expertise."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve alignment between product strategy and business goals."
    },
    {
      "title": "Corporate Benefits",
      "description": "Deliver products faster using iterative Agile approaches."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase product success through customer-focused decision-making."
    },
    {
      "title": "Corporate Benefits",
      "description": "Enable data-driven product investment decisions."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve collaboration across product, engineering, and business teams."
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
      "group": [
        "Translate customer insights into actionable product strategies",
        "Design and iterate MVPs to reduce risk and accelerate learning",
        "Prioritize features and refine roadmaps using Agile methods",
        "Integrate customer feedback to improve product outcomes",
        "Lead cross-functional teams toward aligned product delivery"
      ]
    }
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
    "Convert customer insights into value-driven strategies",
    "Build and iterate MVPs effectively",
    "Apply Agile prioritization and backlog management",
    "Use feedback loops to improve product adoption",
    "Collaborate effectively across cross-functional teams"
  ];

  const prerequisites = [
    'No mandatory prerequisites are required.',
    'Basic understanding of Scrum principles is recommended.',
    'Completion of formal training by a Scrum Alliance-approved CSD trainer is required.',
  ];

  const certificationSteps = [
    {
      "title": "Join the Course",
      "description": "Enroll in ICAgile ICP-PDM certification training."
    },
    {
      "title": "Develop Skills",
      "description": "Learn customer discovery, prioritization, and roadmap planning."
    },
    {
      "title": "Complete Training",
      "description": "Participate in activities and practical assessments throughout the program."
    },
    {
      "title": "Receive Certification",
      "description": "Earn the ICAgile ICP-PDM credential upon successful completion."
    }
  ];

  const curriculumModules = [
    {
      "title": "Understanding the Product & Market",
      "topics": [
        "Product lifecycle and ecosystem",
        "Market analysis and customer experience",
        "Research-driven product ideas",
        "Product manager responsibilities"
      ]
    },
    {
      "title": "Product Strategy & Vision",
      "topics": [
        "Creating outcome-driven product vision",
        "Defining value and key outcomes",
        "Strategy validation and alignment"
      ]
    },
    {
      "title": "Discovery & Experimentation",
      "topics": [
        "Idea generation and continuous discovery",
        "Hypothesis testing and experimentation",
        "Prototyping and feedback loops"
      ]
    },
    {
      "title": "Planning & Roadmapping",
      "topics": [
        "Outcome-oriented roadmaps",
        "Backlog management and prioritization",
        "Working effectively with product teams"
      ]
    },
    {
      "title": "Metrics & Data",
      "topics": [
        "Product performance metrics",
        "Data-driven decision-making"
      ]
    },
    {
      "title": "Agile & Team Collaboration",
      "topics": [
        "Applying Agile principles in product strategy",
        "Cross-functional collaboration",
        "Project-to-product mindset"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Agile Product Management",
      "description": "Learn Agile product principles, roles, and responsibilities in modern product organizations."
    },
    {
      "title": "Develop Customer-Centric Thinking",
      "description": "Identify customer problems and frame opportunities using Agile discovery practices."
    },
    {
      "title": "Explore Product Discovery Techniques",
      "description": "Validate ideas, test assumptions, and reduce risks through experimentation."
    },
    {
      "title": "Apply Value-Driven Prioritization",
      "description": "Prioritize initiatives based on business impact and customer value."
    },
    {
      "title": "Align Product Strategy with Business Goals",
      "description": "Connect product decisions to organizational strategy and market dynamics."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is ICP-PDM certification?",
          "answer": "ICP-PDM is an ICAgile certification focused on Agile product management, customer discovery, strategy, and value delivery."
        },
        {
          "question": "Is there an exam?",
          "answer": "No. Certification is granted through participation and practical assessments during training."
        },
        {
          "question": "Are prerequisites required?",
          "answer": "No formal prerequisites are required. Beginners and experienced professionals can join."
        },
        {
          "question": "Is ICP-PDM globally recognized?",
          "answer": "Yes, the certification is globally recognized and valued by Agile organizations."
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
      "title": "Authorized ICAgile Training Partner",
      "description": "Viovn is a certified ICAgile delivery partner, guaranteeing that our product management training is fully compliant with international quality and credentialing standards."
    },
    {
      "title": "Experienced Agile Product Management Instructors",
      "description": "Our ICP-PDM sessions are led by veteran product leaders who infuse deep practical knowledge, actionable strategies, and contemporary industry expertise into every lesson."
    },
    {
      "title": "Comprehensive ICAgile ICP-PDM Curriculum",
      "description": "Master essential competencies in product discovery, prioritization, and strategic roadmap execution through a curriculum specifically engineered for high-performing Agile teams."
    },
    {
      "title": "Interactive, Hands-On Learning Experience",
      "description": "We utilize immersive workshops, authentic case studies, and collaborative problem-solving to ensure you can confidently translate theoretical concepts into real-world business results."
    },
    {
      "title": "Flexible Training Delivery Options",
      "description": "Viovn offers both live virtual classrooms and bespoke corporate formats, allowing both individual specialists and entire organizations to progress at their own pace and convenience."
    },
    {
      "title": "Focus on Practical Product Skills",
      "description": "Our educational approach is designed for immediate workplace application, focusing on improving your ability to build customer-centric products and drive superior business outcomes."
    },
    {
      "title": "Structured Support and Guidance",
      "description": "At Viovn, we empower our learners with premium ICAgile resources, practical rehearsal sessions, and continuous mentorship to ensure long-term mastery and retention."
    },
    {
      "title": "Real-World Agile Product Scenarios",
      "description": "Analyze and solve challenges from actual product environments, gaining the specialized knowledge needed to bypass common pitfalls and lead products to success."
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
    "courseName": "ICAgile Product Management (ICP-PDM) Certification Training",
    "breadcrumbName": "ICAgile Product Management Certification | ICP-PDM Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Agile product management training focused on customer discovery, product strategy, and value-driven delivery.",
    "benefits": [
      "Create a compelling product vision focused on solving customer challenges",
      "Align product strategies with organizational goals",
      "Master the full product lifecycle from ideation to evolution",
      "Deliver innovative and customer-centric solutions",
      "Earn 14–16 PDUs with ICAgile ICP-PDM training"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "ICAgile Product Management (ICP-PDM) Course Overview",
    "description": [
      "The ICP-PDM certification course is a 14-hour professional training program designed to build strong Agile product management capabilities.",
      "It focuses on customer discovery, product vision, value proposition design, outcome-based roadmapping, and decision-making in uncertain environments."
    ],
    "whatIsTitle": "What is ICAgile Product Management (ICP-PDM)?",
    "whatIsDescription": [
      "ICP-PDM is an Agile product management mindset centered on discovery, experimentation, and evidence-based decision-making.",
      "It helps professionals understand customer problems, test solutions, and continuously refine product strategy based on feedback."
    ],
    "whatsIncludedTitle": "What’s Included in ICP-PDM Training?",
    "whatsIncludedDescription": [
      "14 hours of ICAgile-authorized instructor-led training",
      "Sessions led by ICAgile-certified practitioners",
      "Interactive discussions and practical exercises",
      "Real-world case-based learning",
      "Official ICAgile-aligned curriculum"
    ],
    "skillsTitle": "Skills Covered in ICP-PDM Certification Training",
    "skills": [
      "Customer discovery and problem validation",
      "Product vision creation and strategic alignment",
      "Value proposition design and positioning",
      "Outcome-based roadmapping and prioritization",
      "Stakeholder collaboration and decision-making",
      "Experimentation and continuous learning",
      "Translating insights into product decisions",
      "Continuous value delivery within Agile teams"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Virtual instructor-led live training",
      "Corporate training programs customized for enterprise teams"
    ]
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn delivers specialized enterprise training aimed at refining product strategy, fostering cross-functional synergy, and achieving higher delivery standards through customized learning tracks."
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

export default ICAgileProductManagementCertificationTraining;
