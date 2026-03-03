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

const PromptEngineeringCourse = () => {
  const highlights = [
    { text: "16 hours live instructor-led online training", icon: <Star className="w-5 h-5" /> },
    { text: "Advanced prompt drafting techniques", icon: <Star className="w-5 h-5" /> },
    { text: "AI prompt engineering focused curriculum", icon: <Star className="w-5 h-5" /> },
    { text: "Unlimited access to course content", icon: <Star className="w-5 h-5" /> },
    { text: "Real-time doubt resolution", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on project-based learning", icon: <Star className="w-5 h-5" /> },
    { text: "Globally recognized prompt engineering certification", icon: <Star className="w-5 h-5" /> },
    { text: "Interactive workshops and practical labs", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 learning assistance and support", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Build AI Applications",
      description: "Learn to use LLMs and Generative AI to build innovative AI-powered applications."
    },
    {
      title: "Advanced Prompt Strategies",
      description: "Break down complex tasks using structured prompt engineering techniques."
    },
    {
      title: "Workflow Optimization",
      description: "Streamline workflows, reduce errors, and optimize resources with precise prompts."
    },
    {
      title: "Creative Prompting Skills",
      description: "Design effective and out-of-the-box prompts to generate high-quality AI outputs."
    }
  ];

  const corporateBenefits = [
    {
      title: "Enhanced Team Productivity",
      description: "Enable teams to generate faster and higher-quality AI-driven results."
    },
    {
      title: "Cost Optimization",
      description: "Reduce dependency on external AI consultants by building in-house AI expertise."
    },
    {
      title: "Accelerated AI Adoption",
      description: "Drive AI implementation across departments with structured prompt engineering practices."
    },
    {
      title: "Standardized AI Workflows",
      description: "Use prompt templates to streamline and standardize AI usage across teams."
    },
    {
      title: "Improved Business Productivity",
      description: "Leverage AI technologies effectively to enhance operational efficiency."
    }
  ];

  const careerStats = {
    averageIncome: "$120k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "25%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "AI professionals",
        "Software developers",
        "Data scientists",
        "Business analysts",
        "Automation specialists",
        "Anyone interested in mastering Generative AI"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design clear and powerful prompts for AI systems.",
    "Build and customize intelligent AI chatbots.",
    "Understand the structure and working of Large Language Models.",
    "Gain hands-on experience with OpenAI tools and real-world projects.",
    "Apply prompt engineering strategies to real-world AI challenges."
  ];

  const prerequisites = [
    "Basic understanding of Python programming (recommended but not mandatory)",
    "Problem-solving mindset",
    "Interest in AI and machine learning concepts",
    "Beginner-friendly approach suitable for freshers and professionals"
  ];

  const certificationSteps = [
    {
      title: "Enroll",
      description: "Register and join live instructor-led sessions."
    },
    {
      title: "Learn",
      description: "Master prompt engineering techniques and AI tools."
    },
    {
      title: "Practice",
      description: "Work on hands-on projects and chatbot implementations."
    },
    {
      title: "Certification",
      description: "Receive your Prompt Engineering Course completion certificate."
    }
  ];

  const curriculumModules = [
    {
      title: "Module 1: Generative AI Fundamentals",
      topics: [
        "Generative AI principles",
        "Types of generative models",
        "Applications and use cases",
        "Ethical considerations"
      ]
    },
    {
      title: "Module 2: NLP and Deep Learning",
      topics: [
        "Natural Language Processing essentials",
        "Text preprocessing and classification",
        "Neural networks and LSTM",
        "Deep learning applications"
      ]
    },
    {
      title: "Module 3: Language Models & Transformers",
      topics: [
        "Transformer architecture",
        "GPT and BERT models",
        "Applications of transformer-based systems"
      ]
    },
    {
      title: "Module 4: Prompt Engineering Core Concepts",
      topics: [
        "Prompt design strategies",
        "Zero-shot and few-shot prompting",
        "Chain-of-thought prompting",
        "Parameter tuning"
      ]
    },
    {
      title: "Module 5: Working with OpenAI API",
      topics: [
        "Using OpenAI Playground",
        "API integration",
        "Embeddings",
        "Fine-tuning techniques"
      ]
    },
    {
      title: "Module 6: ChatGPT Advanced Features",
      topics: [
        "Function calling",
        "Custom instructions",
        "JavaScript integration",
        "Building chatbots"
      ]
    },
    {
      title: "Module 7: Data Privacy & AI Ethics",
      topics: [
        "AI bias mitigation",
        "Data privacy best practices",
        "Ethical AI development"
      ]
    },
    {
      title: "Module 8: Advanced Chatbot Development",
      topics: [
        "Building OrderBot",
        "Automated responses",
        "AI workflow automation"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand Large Language Models",
      description: "Learn how LLMs work and how to harness their capabilities effectively."
    },
    {
      title: "Master Prompt Engineering",
      description: "Craft precise prompts to generate accurate and meaningful AI outputs."
    },
    {
      title: "Develop AI Chatbots",
      description: "Build and customize AI chatbots for real-world applications."
    },
    {
      title: "Work with OpenAI Tools",
      description: "Gain hands-on experience with OpenAI Playground, APIs, and fine-tuning."
    },
    {
      title: "Process and Transform Text",
      description: "Use AI to summarize, expand, infer, and transform text efficiently."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Is coding required for prompt engineering?",
          answer: "Basic programming knowledge, especially Python, is beneficial but not mandatory."
        },
        {
          question: "2. Is this course suitable for beginners?",
          answer: "Yes, the course is beginner-friendly and also valuable for professionals."
        },
        {
          question: "3. Will prompt engineering be important in the future?",
          answer: "Yes, prompt engineering is a high-demand skill as AI adoption increases globally."
        },
        {
          question: "4. Do I receive a certificate?",
          answer: "You will receive a course completion certificate from Viovn."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. Are installment options available?",
          answer: "Yes, flexible payment options are available."
        },
        {
          question: "2. Are refunds available?",
          answer: "Refunds are not available, but you can reschedule your batch."
        }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        {
          question: "1. Do you offer corporate training?",
          answer: "Yes, customized corporate AI training programs are available."
        },
        {
          question: "2. Can I attend remotely?",
          answer: "Yes, the course is delivered online and accessible globally."
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
    { title: "Expert Trainers", description: "Learn from certified AI professionals with real-world experience." },
    { title: "Flexible Learning", description: "Choose weekday or weekend live batches." },
    { title: "Global Recognition", description: "Earn an industry-recognized prompt engineering certification." },
    { title: "Lifetime Access", description: "Access recordings and materials anytime." },
    { title: "Proven Track Record", description: "Trusted by professionals worldwide." },
    { title: "End-to-End Assistance", description: "Complete support from enrollment to certification." },
    { title: "Interactive Learning", description: "Hands-on exercises and AI labs." },
    { title: "Wide Range of AI Programs", description: "Access advanced AI and automation courses." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'PE-01',
      courseName: 'Prompt Engineering Course',
      dateRange: 'May 15 - May 16, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert AI Trainer',
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
    'Prompt Engineering Resource Guide',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Prompt Engineering Course",
    "breadcrumbName": "Prompt Engineering Training Course Online | Viovn",
    "rating": "5.0",
    "enrolledCount": "1.8k+",
    "subtitle": "Master AI Prompting and Build Intelligent Solutions",
    "benefits": [
      "16 hours live expert-led training",
      "Hands-on ChatGPT and OpenAI API practice",
      "Build real-world AI applications",
      "Globally recognized certification"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Overview of Prompt Engineering Course",
    description: [
      "This course teaches how to effectively communicate with AI systems using structured prompt engineering techniques.",
      "Gain practical experience with Large Language Models, ChatGPT, and OpenAI tools through hands-on learning."
    ],
    whatIsTitle: "What is Prompt Engineering?",
    whatIsDescription: [
      "Prompt engineering is the practice of crafting clear and structured instructions to guide AI systems in generating accurate outputs.",
      "This course blends theory and practical implementation to help learners build real-world AI solutions."
    ],
    whatsIncludedTitle: "What’s Included",
    whatsIncludedDescription: [
      "Live instructor-led sessions",
      "Hands-on labs",
      "AI tool access",
      "Certification",
      "Career guidance"
    ],
    skillsTitle: "Skills Covered",
    skills: [
      "Prompt engineering techniques",
      "LLM application development",
      "Chatbot creation",
      "OpenAI API integration",
      "Generative AI workflows"
    ],
    modesTitle: "Training Modes",
    modesDescription: [
      "Live instructor-led online sessions",
      "Weekend and weekday flexible batches"
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Viovn delivers industry-aligned prompt engineering training tailored for enterprise teams. Organizations benefit from practical AI implementation strategies, structured prompt frameworks, and scalable training models designed to accelerate AI adoption."
  };

  const courseMetadata = {
    shortName: 'Prompt-E',
    shortNameAlt: 'Prompt Eng',
    fullName: 'Prompt Engineering Course',
    fullNameAlt: 'Prompt Engineering Certification Training',
    certificateName: 'Prompt Engineering',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "By completing this course, you will be proficient in designing complex prompts and building AI-powered applications tailored to business needs.",
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
      signer1Role: 'Certified AI Expert',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "AI professionals",
    "Software developers",
    "Data scientists",
    "Business analysts",
    "Automation specialists",
    "Anyone interested in mastering Generative AI"
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

export default PromptEngineeringCourse;
