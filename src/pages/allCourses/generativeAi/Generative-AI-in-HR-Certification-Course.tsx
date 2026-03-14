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

const GenerativeAIinHRCertificationCourse = () => {
  const highlights = [
    { text: "16 hours live instructor-led online training", icon: <Star className="w-5 h-5" /> },
    { text: "Unlimited access to course content", icon: <Star className="w-5 h-5" /> },
    { text: "Real-time doubt resolution", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on project-based learning", icon: <Star className="w-5 h-5" /> },
    { text: "Globally recognized certification", icon: <Star className="w-5 h-5" /> },
    { text: "Interactive workshops and case studies", icon: <Star className="w-5 h-5" /> },
    { text: "Comprehensive AI-driven HR curriculum", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 support and learning assistance", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Automation of Routine Tasks",
      description: "Automate repetitive HR activities to focus on strategic initiatives."
    },
    {
      title: "Personalized Learning & Development",
      description: "Create AI-powered personalized development paths based on skill gaps."
    },
    {
      title: "Real-Time Feedback & Coaching",
      description: "Leverage AI tools to provide instant employee feedback and performance insights."
    },
    {
      title: "Practical Scenario Simulation",
      description: "Generate AI-based practice scenarios to prepare for real-world HR challenges."
    },
    {
      title: "Continuous Performance Assessment",
      description: "Track employee progress with AI-driven evaluation and improvement systems."
    }
  ];

  const corporateBenefits = [
    {
      title: "Smarter Talent Management",
      description: "Use AI-driven insights to optimize recruitment, retention, and workforce planning."
    },
    {
      title: "Data-Backed HR Decision Making",
      description: "Improve HR strategies using predictive analytics and AI modeling."
    },
    {
      title: "Operational Efficiency",
      description: "Automate HR workflows to reduce time and resource consumption."
    },
    {
      title: "Enhanced Employee Engagement",
      description: "Implement AI-powered personalized development and engagement strategies."
    },
    {
      title: "Strategic Workforce Planning",
      description: "Support long-term HR strategy with advanced AI forecasting tools."
    }
  ];

  const careerStats = {
    averageIncome: "$115k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "18%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "HR Recruiters",
        "Talent Acquisition Specialists",
        "HR Managers",
        "HR Operations Professionals",
        "People Analytics Specialists",
        "Directors of Human Resources"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand AI’s transformative role in HR practices.",
    "Apply AI tools in recruitment, onboarding, and talent management.",
    "Ensure ethical and unbiased AI adoption in HR.",
    "Navigate legal and regulatory frameworks for AI in HR.",
    "Adapt to future HR trends powered by AI technologies."
  ];

  const prerequisites = [
    "Basic understanding of HR operations (recommended but not mandatory).",
    "Interest in AI-driven HR transformation.",
    "No prior coding or AI experience required."
  ];

  const certificationSteps = [
    {
      title: "Enroll",
      description: "Register and attend the live instructor-led sessions."
    },
    {
      title: "Learn",
      description: "Understand AI applications across recruitment, engagement, and performance."
    },
    {
      title: "Practice",
      description: "Complete hands-on projects, quizzes, and case studies."
    },
    {
      title: "Certification",
      description: "Receive your Generative AI in HR Certification from Viovn."
    }
  ];

  const curriculumModules = [
    {
      title: "Module 1: Introduction to Generative AI in HR",
      topics: [
        "Generative AI fundamentals",
        "Applications of AI in HR",
        "AI integration roadmap for HR workflows",
        "Benefits of AI-driven HR processes"
      ]
    },
    {
      title: "Module 2: AI-Driven Recruitment & Talent Acquisition",
      topics: [
        "AI-powered resume screening",
        "Job description generation using ChatGPT",
        "ATS systems and onboarding automation",
        "AI virtual assistants in HR"
      ]
    },
    {
      title: "Module 3: AI in HR Operations & Performance Management",
      topics: [
        "AI-powered performance monitoring",
        "360-degree feedback systems",
        "Skills gap analysis and training recommendations",
        "AI-based employee success modeling"
      ]
    },
    {
      title: "Module 4: Ethical AI & Future Trends in HR",
      topics: [
        "Regulatory compliance in AI adoption",
        "Bias mitigation strategies",
        "Data privacy and cybersecurity",
        "Future of HR in an AI-driven workplace"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Generative AI in HR Context",
      description: "Understand the impact of AI across HR functions and workforce management."
    },
    {
      title: "AI Tools for HR Workflows",
      description: "Explore and implement leading AI tools in recruitment and HR operations."
    },
    {
      title: "AI-Based Resume Screening",
      description: "Identify top candidates quickly using AI-powered screening systems."
    },
    {
      title: "AI in Performance Management",
      description: "Enhance evaluation, compensation, and employee development with AI insights."
    },
    {
      title: "Organizational Readiness for AI",
      description: "Assess and prepare organizations for successful AI integration."
    },
    {
      title: "Ethical AI in HR",
      description: "Design responsible AI frameworks ensuring fairness and transparency."
    },
    {
      title: "Evolving HR Roles",
      description: "Adapt HR leadership strategies for AI-enabled workplaces."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. What is the Generative AI in HR course?",
          answer: "This course helps HR professionals understand and implement AI tools across recruitment, onboarding, engagement, and performance management."
        },
        {
          question: "2. Will AI replace HR professionals?",
          answer: "No. AI enhances HR efficiency, but human expertise remains critical for strategy and relationship building."
        },
        {
          question: "3. Do I need prior AI knowledge?",
          answer: "No prior AI or coding knowledge is required."
        },
        {
          question: "4. What certification will I receive?",
          answer: "You will receive a Generative AI in HR Certification from Viovn."
        },
        {
          question: "5. What job roles can I pursue after this course?",
          answer: "HR Recruiter, Talent Acquisition Specialist, HR Manager, HR Operations Specialist, and HR Director roles."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. What happens to token payments?",
          answer: "Token payments become non-refundable after 15 days but are adjustable within 6 months."
        },
        {
          question: "2. Can I pay in installments?",
          answer: "Yes, flexible payment options are available."
        },
        {
          question: "3. What payment methods are accepted?",
          answer: "Credit cards, debit cards, net banking, PayPal, and wire transfers."
        }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        {
          question: "1. What if I miss a class?",
          answer: "You can reschedule your training without additional charges."
        },
        {
          question: "2. Do you offer corporate training?",
          answer: "Yes, customized corporate training programs are available."
        },
        {
          question: "3. Is post-training support available?",
          answer: "Yes, 24/7 learning assistance is provided."
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
    { title: "Global Recognition", description: "Industry-recognized certification valued worldwide." },
    { title: "Expert Trainers", description: "Delivered by experienced AI and HR industry professionals." },
    { title: "Flexible Learning", description: "Live online training designed for working professionals." },
    { title: "Lifetime Access", description: "Access course materials and recordings after completion." },
    { title: "Proven Track Record", description: "Trusted by enterprises and HR leaders globally." },
    { title: "End-to-End Assistance", description: "Support before, during, and after training." },
    { title: "Interactive Learning", description: "Hands-on workshops and real-world HR case studies." },
    { title: "Wide Range of Courses", description: "Access to multiple AI and HR certifications." }
  ];

  

  const certificateBenefits = [
    'Professional Certificate from Viovn',
    'AI-HR Specialization Toolkit',
    'Case Study Resource Library',
    'Lifetime Access to Program Content',
  ];

  const heroData = {
    courseName: "Generative AI in HR Certification Course",
    breadcrumbName: "Generative AI in HR Certification Course | AI in HR Training",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Transform HR Practices with AI-Powered Intelligence",
    benefits: [
      "16 hours live expert-led training",
      "Hands-on AI tools for HR workflows",
      "AI-powered recruitment and performance systems",
      "Globally recognized certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Generative AI in HR Course Overview",
    description: [
      "This course equips HR professionals with AI-powered tools to streamline recruitment, onboarding, engagement, and performance management.",
      "Learn through real-world case studies, hands-on exercises, and AI tool demonstrations.",
      "Stay ahead in the evolving HR landscape by mastering AI-driven strategies."
    ],
    whatIsTitle: "",
    whatIsDescription: [],
    whatsIncludedTitle: "",
    whatsIncludedDescription: [],
    skillsTitle: "Skills Covered in this Certification",
    skills: [
      "AI-Powered Recruitment",
      "Talent Analytics & Decision Making",
      "AI-Driven Performance Management",
      "Learning & Development Automation",
      "Ethical AI Governance in HR"
    ],
    modesTitle: "",
    modesDescription: []
  };

  const corporateData = {
    courseName: "Why Corporates Opt for Viovn",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Customized AI-enabled HR training programs designed to enhance workforce efficiency, reduce operational costs, and drive strategic HR transformation across organizations."
  };

  const courseMetadata = {
    shortName: 'GenAI-HR',
    shortNameAlt: 'GenAI-HR',
    fullName: 'Generative AI in HR',
    fullNameAlt: 'Generative AI in HR',
    certificateName: 'Generative AI in HR',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Generative AI in HR Certification Course, you will be prepared to lead AI-driven HR transformations and strategically manage talent.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Generative AI in HR Certification Course?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'HR',
      titleSuffix: 'Certification',
      issuerName: 'Viovn',
      certificateType: 'Certificate of Excellence',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with a',
      signer1Role: 'Certified HR Expert',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "HR Recruiters",
    "Talent Acquisition Specialists",
    "HR Managers",
    "HR Operations Professionals",
    "People Analytics Specialists",
    "Directors of Human Resources"
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

export default GenerativeAIinHRCertificationCourse;
