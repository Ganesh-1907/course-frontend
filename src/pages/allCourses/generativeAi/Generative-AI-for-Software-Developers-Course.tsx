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

const GenerativeAIforSoftwareDevelopersTraining = () => {
  const highlights = [
    { text: "16 hours of live instructor-led training", icon: <Star className="w-5 h-5" /> },
    { text: "Gen AI tools focused curriculum", icon: <Star className="w-5 h-5" /> },
    { text: "Prompt engineering techniques for developers", icon: <Star className="w-5 h-5" /> },
    { text: "Unlimited lifetime course content access", icon: <Star className="w-5 h-5" /> },
    { text: "Real-time doubt resolution support", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on practical project learning", icon: <Star className="w-5 h-5" /> },
    { text: "Globally valued professional certification", icon: <Star className="w-5 h-5" /> },
    { text: "Highly engaging interactive workshops", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 learning help and support", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Improved Problem Solving",
      description: "Apply AI tools to solve complex software challenges efficiently and creatively."
    },
    {
      title: "Career Advancement",
      description: "Gain in-demand AI development skills that open doors to advanced technical roles and higher earning potential."
    },
    {
      title: "Code Optimization",
      description: "Use AI to generate clean, efficient, and scalable code while reducing development time."
    },
    {
      title: "Automated Testing",
      description: "Leverage AI-powered tools to generate test cases and improve overall software quality."
    },
    {
      title: "Personalized User Experiences",
      description: "Build adaptive applications that personalize experiences using AI-driven insights."
    }
  ];

  const corporateBenefits = [
    {
      title: "Innovation Catalyst",
      description: "Enable development teams to build AI-powered products and stay ahead of competitors."
    },
    {
      title: "Cost Reduction",
      description: "Automate repetitive coding and testing tasks, allowing developers to focus on high-value work."
    },
    {
      title: "Faster Time-to-Market",
      description: "Accelerate development cycles using AI-assisted coding and debugging."
    },
    {
      title: "Improved Customer Satisfaction",
      description: "Deliver intelligent, user-centric applications powered by AI personalization."
    },
    {
      title: "Scalable AI Solutions",
      description: "Build adaptable and future-ready software systems aligned with business growth."
    }
  ];

  const careerStats = {
    averageIncome: "$125k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "22%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "Software Developers",
        "Backend and Frontend Engineers",
        "Full Stack Developers",
        "QA Engineers and Testers",
        "Tech Leads and Engineering Managers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Generative AI fundamentals for development.",
    "Create effective prompts for coding workflows.",
    "Use ChatGPT for coding, debugging, and documentation.",
    "Automate tasks with GitHub Copilot.",
    "Apply AI tools to real-world software projects."
  ];

  const prerequisites = [
    "Basic programming knowledge",
    "Problem-solving skills"
  ];

  const certificationSteps = [
    {
      title: "Enroll",
      description: "Register and join the live instructor-led sessions."
    },
    {
      title: "Learn",
      description: "Understand Generative AI tools, prompt engineering, and AI-assisted development."
    },
    {
      title: "Practice",
      description: "Complete hands-on coding exercises and AI-powered development projects."
    },
    {
      title: "Certification",
      description: "Receive your Generative AI for Software Developers Course Completion Certificate."
    }
  ];

  const curriculumModules = [
    {
      title: "Module 1: Introduction to Generative AI",
      topics: [
        "Generative AI fundamentals",
        "Generative vs discriminative models",
        "Types of generative models",
        "Applications of Generative AI in software development",
        "Ethical considerations in AI"
      ]
    },
    {
      title: "Module 2: Prompt Engineering Techniques",
      topics: [
        "Prompt engineering principles",
        "Types of prompting techniques",
        "Best practices for effective prompts",
        "Parameter tuning strategies",
        "Advanced prompt optimization"
      ]
    },
    {
      title: "Module 3: Generative AI for Software Development",
      topics: [
        "Programming with ChatGPT",
        "Code generation and debugging",
        "API integration concepts",
        "AI-powered documentation",
        "Software testing using ChatGPT"
      ]
    },
    {
      title: "Module 4: GitHub Copilot for Developers",
      topics: [
        "Integrating Copilot into development workflows",
        "Automated code suggestions",
        "Refactoring and optimization",
        "Unit test generation",
        "AI-assisted DevOps practices"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Generative AI Foundations",
      description: "Understand how Generative AI models work and how they apply to software engineering."
    },
    {
      title: "Prompt Engineering Mastery",
      description: "Design precise prompts to achieve optimal outputs from AI tools."
    },
    {
      title: "AI-Assisted Programming",
      description: "Use ChatGPT and Copilot for faster coding, debugging, and documentation."
    },
    {
      title: "AI-Powered Testing",
      description: "Automate test case generation and improve testing efficiency using AI."
    },
    {
      title: "Responsible AI Usage",
      description: "Apply ethical AI practices in real-world development scenarios."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Will I learn to generate code using AI?",
          answer: "Yes. You will learn how to use tools like ChatGPT and GitHub Copilot for generating, debugging, and optimizing code."
        },
        {
          question: "2. Is this course suitable for working professionals?",
          answer: "Yes. The course is designed with flexible live sessions suitable for busy professionals."
        },
        {
          question: "3. Will Generative AI replace developers?",
          answer: "No. AI enhances productivity but does not replace developers. It acts as a powerful assistant."
        },
        {
          question: "4. What certification will I receive?",
          answer: "You will receive a Generative AI for Software Developers Course Completion Certificate from Viovn."
        },
        {
          question: "5. What tools are covered in this course?",
          answer: "The course covers ChatGPT, GitHub Copilot, prompt engineering tools, and AI-based testing utilities."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. What happens to token payments?",
          answer: "Token payments become non-refundable after 15 days but can be adjusted within 6 months."
        },
        {
          question: "2. Can I pay in installments?",
          answer: "Yes, installment options are available."
        },
        {
          question: "3. What payment methods are accepted?",
          answer: "Credit cards, debit cards, net banking, PayPal, and wire transfers."
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
    { title: "Expert Instructors", description: "Learn from industry experts with extensive AI and software engineering experience." },
    { title: "Project-Based Learning", description: "Gain hands-on experience through real-world AI-driven software projects." },
    { title: "Flexible Learning Options", description: "Choose weekday or weekend batches with access to session recordings." },
    { title: "Industry-Valued Certification", description: "Earn a globally recognized certification to boost your resume value." },
    { title: "Anytime Learning Access", description: "Access course materials and recordings anytime to strengthen your skills." },
    { title: "Proven Track Record", description: "Join a global community of developers who have successfully upskilled in AI." },
    { title: "Personalized Mentorship", description: "Receive one-on-one guidance to implement AI effectively in your projects." },
    { title: "Comprehensive AI Ecosystem", description: "Explore additional AI and automation courses to stay future-ready." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-SD',
      courseName: 'Generative AI for Software Developers Training Course',
      dateRange: 'May 15 - May 16, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert AI Developer',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 32,000',
      discountPercentage: '30',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to AI Resource Guide',
    'AI-Assisted Repo Samples',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Generative AI for Software Developers Training Course",
    "breadcrumbName": "Generative AI for Software Developers Course | Viovn",
    "rating": "5.0",
    "enrolledCount": "1.2k+",
    "subtitle": "Supercharge Your Coding with AI-Powered Development",
    "benefits": [
      "16 hours live instructor-led training",
      "Hands-on AI coding projects",
      "Master ChatGPT and GitHub Copilot",
      "Globally valued certification"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Overview of Generative AI for Software Developers Course",
    description: [
      "This course helps developers integrate AI into every stage of the software development lifecycle.",
      "Learn to leverage LLMs for code generation, debugging, documentation, and testing.",
      "Gain hands-on experience using ChatGPT and GitHub Copilot in real-world projects."
    ],
    whatIsTitle: "What is Generative AI for Software Developers Training?",
    whatIsDescription: [
      "This training helps developers adapt to AI-driven development environments.",
      "Learn how to collaborate with LLMs to build scalable, optimized, and secure software systems."
    ],
    whatsIncludedTitle: "What’s Included in This Training?",
    whatsIncludedDescription: [
      "Expert-led live sessions",
      "Hands-on development projects",
      "Real-world case studies",
      "AI tool access",
      "Career guidance and mentorship"
    ],
    skillsTitle: "Skills Covered",
    skills: [
      "Prompt Engineering",
      "AI-Assisted Coding",
      "ChatGPT Integration",
      "GitHub Copilot Workflows",
      "AI-Based Testing & Debugging",
      "Modern AI-Driven Software Engineering"
    ],
    modesTitle: "Training Modes",
    modesDescription: [
      "Live interactive instructor-led online sessions.",
      "Weekday and weekend batch options available.",
      "Recorded sessions accessible after live classes."
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Viovn delivers tailored AI-powered corporate training programs to bridge skill gaps and enable enterprises to adopt Generative AI effectively in their software development teams."
  };

  const courseMetadata = {
    shortName: 'GenAI-SD',
    shortNameAlt: 'Generative AI-SD',
    fullName: 'Generative AI for Software Developers Training Course',
    fullNameAlt: 'Generative AI for Software Developers Training Course',
    certificateName: 'Generative AI for Software Developers',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing this course, you will be proficient in using Generative AI tools to accelerate your development workflows and build intelligent software solutions.",
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
    "Software Developers",
    "Backend and Frontend Engineers",
    "Full Stack Developers",
    "QA Engineers and Testers",
    "Tech Leads and Engineering Managers"
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

export default GenerativeAIforSoftwareDevelopersTraining;
