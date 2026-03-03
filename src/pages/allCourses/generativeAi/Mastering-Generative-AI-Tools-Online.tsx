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

const MasteringGenerativeAIToolsOnline = () => {
  const highlights = [
    { text: "16 Hours Online Live Instructor-led Training", icon: <Star className="w-5 h-5" /> },
    { text: "Unlimited Access to Course Content", icon: <Star className="w-5 h-5" /> },
    { text: "Resolve Doubts in Real-time", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-On Project-Based Learning", icon: <Star className="w-5 h-5" /> },
    { text: "Globally Recognised Certification", icon: <Star className="w-5 h-5" /> },
    { text: "Interactive Workshops", icon: <Star className="w-5 h-5" /> },
    { text: "Comprehensive Curriculum Covering Modern AI Tools", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 Learning Support and Assistance", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Advanced AI Knowledge",
      "description": "Master advanced generative AI concepts, tools, and techniques used across industries."
    },
    {
      "title": "Hands-On Tool Experience",
      "description": "Gain practical exposure to industry-leading AI platforms for text, image, video, and code generation."
    },
    {
      "title": "Enhanced Problem-Solving Skills",
      "description": "Apply AI tools to solve creative and technical challenges efficiently."
    },
    {
      "title": "Career Advancement",
      "description": "Boost employability with in-demand AI skills validated by certification."
    },
    {
      "title": "Responsible AI Understanding",
      "description": "Develop strong knowledge of AI ethics, governance, and responsible implementation."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Innovation Acceleration",
      "description": "Empower teams with AI tools to automate workflows and drive innovation."
    },
    {
      "title": "Operational Efficiency",
      "description": "Integrate generative AI into business processes to enhance productivity."
    },
    {
      "title": "AI Adoption Culture",
      "description": "Build a culture of continuous AI learning and transformation."
    },
    {
      "title": "Competitive Advantage",
      "description": "Develop AI-driven solutions tailored to business and industry needs."
    },
    {
      "title": "Data-Driven Decisions",
      "description": "Leverage AI-powered insights to improve strategy and outcomes."
    }
  ];

  const careerStats = {
    averageIncome: "$110k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "22%",
    growthLabel: "Annual Growth"
  };

  const attendees = [
    {
      group: [
        "Students and Fresh Graduates",
        "Working Professionals",
        "Content Creators and Designers",
        "Developers and Technocrats",
        "Entrepreneurs and Business Professionals",
        "Anyone interested in learning Generative AI tools"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand generative AI fundamentals and applications.",
    "Automate routine tasks using AI tools.",
    "Create AI-generated content including text, images, and videos.",
    "Build simple AI-powered applications.",
    "Apply ethical AI practices responsibly."
  ];

  const prerequisites = [
    "No prior experience in AI is required.",
    "Basic computer knowledge and interest in learning AI tools is sufficient."
  ];

  const certificationSteps = [
    {
      "title": "Enroll",
      "description": "Register for the Mastering Generative AI Tools online program.",
      "color": "#3b82f6"
    },
    {
      "title": "Attend Live Sessions",
      "description": "Participate in interactive instructor-led sessions and hands-on exercises.",
      "color": "#2563eb"
    },
    {
      "title": "Receive Certification",
      "description": "Earn a Viovn course completion certificate validating your AI skills.",
      "color": "#1e40af"
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Generative AI Fundamentals",
      "topics": [
        "Introduction to Generative AI",
        "Generative vs Discriminative Models",
        "Popular Generative AI Tools",
        "Applications and Use Cases",
        "Advantages, Limitations and Ethics"
      ]
    },
    {
      "title": "Module 2: AI for Productivity & Workflow Automation",
      "topics": [
        "Working with ChatGPT and Gemini",
        "Prompt Engineering Techniques",
        "Excel Automation with AI",
        "Content Marketing and SEO",
        "Resume and LinkedIn Optimisation",
        "Presentation Creation Tools",
        "Workflow Enhancement Using AI"
      ]
    },
    {
      "title": "Module 3: Multimedia Creation with AI",
      "topics": [
        "DALL-E and Midjourney Fundamentals",
        "Creating Logos and Marketing Assets",
        "AI Image Generation Techniques",
        "AI Video Creation with Synthesia",
        "Mobile UI Concepts Using AI"
      ]
    },
    {
      "title": "Module 4: AI for Developers and Technocrats",
      "topics": [
        "Coding with ChatGPT",
        "Debugging and Testing with AI",
        "GitHub Copilot Setup and Usage",
        "API Fundamentals",
        "Real-Life Coding Use Cases",
        "AI-Based Application Development"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Generative AI",
      "description": "Learn the working principles, tools, and ethical practices of generative AI."
    },
    {
      "title": "Master Prompt Engineering",
      "description": "Develop structured prompt-writing skills for optimal AI responses."
    },
    {
      "title": "Enhance Workflows",
      "description": "Use AI tools to automate tasks, improve productivity, and streamline operations."
    },
    {
      "title": "Create Multimedia Content",
      "description": "Generate professional-quality images, videos, and marketing assets using AI."
    },
    {
      "title": "AI-Assisted Coding",
      "description": "Leverage AI for programming, debugging, documentation, and automation."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Course FAQs",
      "items": [
        {
          "question": "1. What are Generative AI tools?",
          "answer": "Generative AI tools are technologies that create text, images, videos, music, and code using machine learning models trained on large datasets."
        },
        {
          "question": "2. Is this course suitable for beginners?",
          "answer": "Yes, this course is designed for beginners and professionals with step-by-step guidance and hands-on practice."
        },
        {
          "question": "3. Do I get a certificate?",
          "answer": "Yes, you will receive a Viovn course completion certificate."
        },
        {
          "question": "4. What tools will I learn?",
          "answer": "You will work with tools such as ChatGPT, Gemini, DALL-E, Midjourney, GitHub Copilot, and other AI productivity platforms."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available for learners."
        },
        {
          "question": "2. Is refund available?",
          "answer": "Refunds are not available, but rescheduling options are provided."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        {
          "question": "1. Is the training online?",
          "answer": "Yes, the program is delivered through live instructor-led online sessions."
        },
        {
          "question": "2. Do you provide corporate training?",
          "answer": "Yes, customised corporate AI training programs are available."
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
    { title: "Expert-Led Training", description: "Learn from experienced AI professionals with strong industry backgrounds." },
    { title: "Hands-On Learning", description: "Work on real-world projects and AI tool implementations." },
    { title: "Flexible Learning", description: "Choose weekday or weekend batches with recorded session access." },
    { title: "Globally Valued Certification", description: "Earn industry-recognised certification validating AI tool proficiency." },
    { title: "Lifetime Learning Access", description: "Access materials, templates, and AI resources anytime." },
    { title: "Proven Track Record", description: "Trusted by professionals and organisations worldwide." },
    { title: "Personalised Guidance", description: "Receive mentorship support throughout your learning journey." },
    { title: "Complete AI Ecosystem", description: "Explore additional AI and automation programs for continuous growth." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-TOOLS',
      courseName: 'Mastering Generative AI Tools Online',
      dateRange: 'May 15 - May 16, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert AI Trainer',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 35,000',
      discountedPrice: 'INR 25,000',
      discountPercentage: '28',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'AI Tools Resource Guide Access',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Mastering Generative AI Tools Online",
    "breadcrumbName": "Mastering Generative AI Tools Online Training Course",
    "rating": "5.0",
    "enrolledCount": "1.8k+",
    "subtitle": "Learn to Use Modern AI Tools for Productivity, Creativity, and Automation",
    "benefits": [
      "16 Hours Live Instructor-Led AI Training",
      "Hands-On Practice with Leading Generative AI Tools",
      "Automate Tasks and Boost Productivity",
      "Industry-Recognised Certificate"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of the Mastering Generative AI Tools Course",
    "description": [
      "The Generative AI market is rapidly expanding across industries, creating strong demand for skilled professionals.",
      "This course equips learners with practical knowledge and hands-on experience in using generative AI tools effectively for business, creativity, and development."
    ],
    "whatIsTitle": "What is the Mastering Generative AI Tools Course?",
    "whatIsDescription": [
      "This training program helps beginners and professionals understand how modern AI systems generate content and automate workflows.",
      "You will gain practical exposure to real-world AI applications and develop confidence in using AI tools effectively."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Live Instructor-Led Sessions",
      "Hands-On AI Tool Practice",
      "Real Business Use Cases",
      "Certificate of Completion",
      "Flexible Batch Schedules"
    ],
    "skillsTitle": "Skills Covered in this Course",
    "skills": [
      "Generative AI Fundamentals",
      "Prompt Engineering",
      "AI Workflow Automation",
      "Multimedia Content Creation",
      "AI-Assisted Coding"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Delivered through live interactive online sessions.",
      "Multiple weekday and weekend batches available for flexibility."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Viovn for Generative AI Training",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn supports organisations in adopting Generative AI at scale through practical, customised training programs focused on real-world AI implementation, productivity enhancement, and workflow automation."
  };

  const courseMetadata = {
    shortName: 'GAI-TOOLS',
    shortNameAlt: 'GAI TOOLS',
    fullName: 'Mastering Generative AI Tools Online',
    fullNameAlt: 'Mastering Generative AI Tools Online',
    certificateName: 'Mastering Generative AI Tools',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "By completing this course, you will be prepared to leverage modern AI tools to optimize your productivity and lead innovation in your field.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Mastering Generative AI Tools Online?',
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
      signer1Role: 'Certified AI Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Students and Fresh Graduates",
    "Working Professionals",
    "Content Creators and Designers",
    "Developers and Technocrats",
    "Entrepreneurs and Business Professionals",
    "Anyone interested in learning Generative AI tools"
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

export default MasteringGenerativeAIToolsOnline;
