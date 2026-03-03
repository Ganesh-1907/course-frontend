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

const GenerativeAIForProjectManagersTraining = () => {
  const highlights = [
    { text: "16 hours of live interactive sessions", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on training with AI tools", icon: <Star className="w-5 h-5" /> },
    { text: "Real-world project simulations", icon: <Star className="w-5 h-5" /> },
    { text: "Practical exercises and activities", icon: <Star className="w-5 h-5" /> },
    { text: "Ready-to-use AI prompts for daily PM tasks", icon: <Star className="w-5 h-5" /> },
    { text: "AI applications across project processes", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 learning assistance and support", icon: <Star className="w-5 h-5" /> },
    { text: "AI integration with modern project tools", icon: <Star className="w-5 h-5" /> },
    { text: "1-on-1 post-class doubt-solving sessions", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Task Automation",
      description: "Automate repetitive project management tasks and save valuable time."
    },
    {
      title: "Confidence with AI Tools",
      description: "Use popular AI tools confidently across project processes."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Make faster and well-informed project decisions using AI insights."
    },
    {
      title: "Increased Productivity",
      description: "Achieve better project outcomes by working smarter with AI."
    },
    {
      title: "Future-Ready Skills",
      description: "Stay relevant in the fast-evolving AI-driven project management landscape."
    }
  ];

  const corporateBenefits = [
    {
      title: "Faster Project Delivery",
      description: "Deliver projects quicker with fewer errors and reduced escalations."
    },
    {
      title: "Improved Cross-Functional Collaboration",
      description: "Enable teams to collaborate effectively using AI-driven insights."
    },
    {
      title: "Predictive Risk Management",
      description: "Identify and mitigate risks early with AI-powered analytics."
    },
    {
      title: "Technology Adoption Made Easy",
      description: "Simplify AI adoption across departments without complexity."
    },
    {
      title: "Future-Ready Leadership",
      description: "Prepare leaders to manage projects effectively in a digital-first environment."
    },
    {
      title: "Smart Digital Transformation",
      description: "Support your organization’s transition toward intelligent technology adoption."
    }
  ];

  const careerStats = {
    averageIncome: "$135k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "15%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "Project Managers",
        "Program Managers",
        "Scrum Masters",
        "Product Owners",
        "Business Analysts",
        "PMO Professionals"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Automate project tasks using AI tools.",
    "Create and optimize project plans with AI assistance.",
    "Generate project documentation and proposals efficiently.",
    "Use predictive analytics for project forecasting.",
    "Optimize risk, cost, and resource allocation using AI."
  ];

  const prerequisites = [
    "Basic project management knowledge",
    "Understanding of Agile or traditional methodologies",
    "Interest in AI technologies",
    "Analytical mindset"
  ];

  const certificationSteps = [
    {
      title: "Enroll",
      description: "Attend live interactive training sessions led by experts."
    },
    {
      title: "Learn",
      description: "Master AI tools and prompts for project workflows."
    },
    {
      title: "Practice",
      description: "Apply AI in planning, scheduling, and decision-making exercises."
    },
    {
      title: "Certification",
      description: "Receive your Generative AI for Project Managers certificate from Viovn."
    }
  ];

  const curriculumModules = [
    {
      title: "Module 1: Introduction to Generative AI for Project Management",
      topics: [
        "Basics of Generative AI",
        "AI importance in project management",
        "Overview of key AI tools"
      ]
    },
    {
      title: "Module 2: AI in Project Planning and Scheduling",
      topics: [
        "Task allocation using AI",
        "Timeline optimization",
        "AI-based resource planning"
      ]
    },
    {
      title: "Module 3: AI for Team Collaboration",
      topics: [
        "AI-driven communication tools",
        "Enhancing virtual team collaboration",
        "Cross-functional AI integration"
      ]
    },
    {
      title: "Module 4: AI in Risk Management",
      topics: [
        "Risk identification with AI",
        "Predictive risk analytics",
        "AI mitigation strategies"
      ]
    },
    {
      title: "Module 5: AI in Budgeting and Cost Estimation",
      topics: [
        "AI financial forecasting",
        "Budget tracking automation",
        "Cost optimization techniques"
      ]
    },
    {
      title: "Module 6: AI for Stakeholder Communication",
      topics: [
        "Automated stakeholder reports",
        "Personalized engagement",
        "Real-time feedback systems"
      ]
    },
    {
      title: "Module 7: AI for Decision Support",
      topics: [
        "AI-driven decision systems",
        "Improving decision outcomes",
        "Data-backed project insights"
      ]
    },
    {
      title: "Module 8: AI Integration with PM Tools",
      topics: [
        "AI integration with Jira and MS Project",
        "Custom AI workflows",
        "Enhancing PM software"
      ]
    },
    {
      title: "Module 9: AI for Quality Optimization",
      topics: [
        "AI-based quality control",
        "Early defect detection",
        "Continuous quality improvement"
      ]
    },
    {
      title: "Module 10: AI in Agile and Scrum",
      topics: [
        "AI for Agile frameworks",
        "Automating Scrum ceremonies",
        "Improving agility with AI"
      ]
    },
    {
      title: "Module 11: Ethical AI in Projects",
      topics: [
        "Bias mitigation",
        "Ethical AI guidelines",
        "Transparency and compliance"
      ]
    },
    {
      title: "Module 12: Future Trends in AI for Project Management",
      topics: [
        "Emerging AI tools",
        "AI-driven transformation strategies",
        "Future of digital project leadership"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "AI for Planning & Scheduling",
      description: "Automate and optimize project planning using Generative AI."
    },
    {
      title: "AI for Resource Management",
      description: "Improve allocation and workload balancing with AI insights."
    },
    {
      title: "AI in Risk Management",
      description: "Predict and reduce risks using historical data analysis."
    },
    {
      title: "AI for Communication",
      description: "Enhance reporting and collaboration with AI tools."
    },
    {
      title: "AI for Budgeting",
      description: "Create accurate forecasts and manage project finances efficiently."
    },
    {
      title: "AI for Decision Support",
      description: "Use AI-backed insights to make confident project decisions."
    },
    {
      title: "AI for Quality Assurance",
      description: "Ensure deliverables meet standards with AI-driven quality checks."
    },
    {
      title: "AI for Stakeholder Engagement",
      description: "Improve stakeholder satisfaction using AI-enabled communication."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. What is this course about?",
          answer: "This course teaches project managers how to integrate Generative AI tools into daily project workflows."
        },
        {
          question: "2. Will I get hands-on experience?",
          answer: "Yes, the course includes real-world projects and AI tool practice sessions."
        },
        {
          question: "3. Is certification included?",
          answer: "Yes, you will receive a course completion certificate from Viovn."
        },
        {
          question: "4. Is this suitable for working professionals?",
          answer: "Yes, weekday and weekend batches are available."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. Are payments refundable?",
          answer: "Refunds are not available, but you can reschedule your batch."
        },
        {
          question: "2. Are installment options available?",
          answer: "Yes, flexible payment options are offered."
        }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        {
          question: "1. What if I miss a class?",
          answer: "You can reschedule without additional charges."
        },
        {
          question: "2. Do you offer corporate training?",
          answer: "Yes, customized corporate training is available."
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
    { title: "Expert Trainers", description: "Learn from experienced project management and AI professionals." },
    { title: "Flexible Learning", description: "Choose schedules that fit your availability." },
    { title: "Lifetime Access", description: "Access recordings and materials anytime." },
    { title: "Proven Track Record", description: "Trusted by professionals and enterprises globally." },
    { title: "End-to-End Assistance", description: "Support before, during, and after training." },
    { title: "Interactive Training", description: "Highly engaging real-world simulations." },
    { title: "Wide Range of Courses", description: "Access multiple AI and project management certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-PM',
      courseName: 'Generative AI for Project Managers Training Course',
      dateRange: 'May 15 - May 16, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert AI PM Trainer',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 32,000',
      discountPercentage: '30',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'AI-PM Resource Guide Access',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Generative AI for Project Managers Training",
    breadcrumbName: "Generative AI for Project Managers Training by Viovn",
    rating: "5.0",
    enrolledCount: "1.5k+",
    subtitle: "Transform Project Management with AI-Powered Intelligence",
    benefits: [
      "16 hours live instructor-led training",
      "Hands-on AI tool integration",
      "Real-world project simulations",
      "Globally recognized certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Overview of Generative AI for Project Managers Certification",
    description: [
      "This course helps project managers integrate AI tools into planning, execution, monitoring, and reporting processes.",
      "Gain hands-on experience with industry-leading AI tools and apply them in real-world project scenarios."
    ],
    whatIsTitle: "What is Generative AI for Project Managers Training?",
    whatIsDescription: [
      "This training focuses on using Generative AI to optimize project life cycles, from inception to completion.",
      "Learn to use AI for better forecasting, risk mitigation, and team productivity."
    ],
    whatsIncludedTitle: "What’s Included in This Training?",
    whatsIncludedDescription: [
      "Live instructor-led sessions",
      "AI prompt library for PM tasks",
      "Hands-on project exercises",
      "Tool integration guides",
      "Industry-recognized certification"
    ],
    skillsTitle: "Skills Covered",
    skills: [
      "AI-assisted planning and scheduling",
      "Project workflow automation",
      "AI-driven risk management",
      "Predictive analytics",
      "Prompt engineering for PM"
    ],
    modesTitle: "Training Modes",
    modesDescription: [
      "Interactive live online classroom.",
      "Custom corporate training available."
    ]
  };

  const corporateData = {
    courseName: "Why Viovn is the First Choice for Corporates",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Customized AI-powered project management training programs designed to accelerate digital transformation and improve enterprise-level project outcomes."
  };

  const courseMetadata = {
    shortName: 'GenAI-PM',
    shortNameAlt: 'Generative AI-PM',
    fullName: 'Generative AI for Project Managers Training Course',
    fullNameAlt: 'Generative AI for Project Managers Training Course',
    certificateName: 'Generative AI for Project Managers',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "By completing this course, you will be able to leverage AI to lead projects more effectively, reduce operational overhead, and deliver higher value to stakeholders.",
    },
    prerequisites: {
      subtitle:
        `What are the Prerequisites Required for the ${heroData.courseName}?`,
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
      signer1Role: 'Certified AI PM Expert',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Project Managers",
    "Program Managers",
    "Scrum Masters",
    "Product Owners",
    "Business Analysts",
    "PMO Professionals"
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

export default GenerativeAIForProjectManagersTraining;
