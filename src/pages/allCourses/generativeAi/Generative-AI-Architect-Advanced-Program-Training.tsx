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

const GenerativeAIArchitectAdvancedProgramTraining = () => {
  const highlights = [
    { text: "16 hours of live instructor-led online training", icon: <Star className="w-5 h-5" /> },
    { text: "Dedicated doubt-clearing sessions", icon: <Star className="w-5 h-5" /> },
    { text: "Training by certified and experienced AI architects", icon: <Star className="w-5 h-5" /> },
    { text: "Advanced-quality course materials", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on experience with 10+ Generative AI tools", icon: <Star className="w-5 h-5" /> },
    { text: "End-to-end real-world Generative AI project", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 support and learning assistance", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Advanced AI Expertise",
      "description": "Gain deep technical knowledge of advanced Generative AI architectures and algorithms."
    },
    {
      "title": "Architect-Level Skill Development",
      "description": "Design, train, and optimize custom Generative AI solutions for enterprise use cases."
    },
    {
      "title": "Hands-on Implementation Experience",
      "description": "Work on real-world AI projects covering development, deployment, and optimization."
    },
    {
      "title": "Career Advancement",
      "description": "Strengthen your profile as a Generative AI Architect ready for enterprise-level challenges."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enterprise AI Capability Building",
      "description": "Develop in-house expertise to architect scalable Generative AI solutions."
    },
    {
      "title": "Innovation Enablement",
      "description": "Leverage advanced AI models for product innovation and automation."
    },
    {
      "title": "Scalable AI Deployment",
      "description": "Implement optimized and production-ready Generative AI systems."
    },
    {
      "title": "Responsible AI Practices",
      "description": "Adopt ethical AI governance and compliance standards."
    }
  ];

  const careerStats = {
    averageIncome: "$145k - $210k+",
    incomeLabel: "Average Salary",
    employmentGrowth: "32%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "AI Engineers",
        "Machine Learning Engineers",
        "Data Scientists",
        "AI Researchers",
        "Technical Architects"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design advanced Generative AI architectures.",
    "Train and fine-tune large-scale AI models.",
    "Deploy production-ready AI solutions.",
    "Optimize AI systems for scalability and performance.",
    "Implement responsible AI practices."
  ];

  const prerequisites = [
    "Primary knowledge of machine learning and neural networks.",
    "Familiarity with Python programming.",
    "Basic understanding of Generative AI concepts (recommended)."
  ];

  const certificationSteps = [
    {
      title: "Enroll in the Program",
      description: "Register for the Generative AI Architect – Advanced Program.",
      color: "#3b82f6"
    },
    {
      title: "Attend Live Training",
      description: "Participate in 16 hours of instructor-led sessions.",
      color: "#2563eb"
    },
    {
      title: "Complete Hands-On Project",
      description: "Work on an end-to-end Generative AI implementation project.",
      color: "#1d4ed8"
    },
    {
      title: "Final Assessment",
      description: "Complete the program evaluation successfully.",
      color: "#1e40af"
    },
    {
      title: "Earn Certification",
      description: "Receive your Advanced Generative AI Architect certification.",
      color: "#1e3a8a"
    }
  ];

  const curriculumModules = [
    {
      title: "Advanced Generative AI Fundamentals",
      topics: [
        "Advanced GANs and VAEs",
        "Mathematics behind generative algorithms",
        "Transformer-based architectures"
      ]
    },
    {
      title: "Advanced Model Training Techniques",
      topics: [
        "Optimization strategies",
        "Transfer learning",
        "Large-scale distributed training"
      ]
    },
    {
      title: "Creative Applications",
      topics: [
        "AI in art and design",
        "Music generation",
        "Advanced NLP text generation"
      ]
    },
    {
      title: "Custom AI Solutions",
      topics: [
        "Architecting enterprise AI systems",
        "Use-case-specific implementations",
        "Responsible AI frameworks"
      ]
    },
    {
      title: "Deployment & Optimization",
      topics: [
        "Production deployment strategies",
        "Performance tuning",
        "Monitoring & maintenance"
      ]
    },
    {
      title: "Industry Trends & Insights",
      topics: [
        "Enterprise AI case studies",
        "Emerging AI research trends",
        "Opportunities and challenges"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Advanced AI Architecture Knowledge",
      description: "Understand deep generative architectures and their mathematical foundations."
    },
    {
      title: "Model Training Mastery",
      description: "Optimize and fine-tune complex Generative AI systems."
    },
    {
      title: "Creative AI Applications",
      description: "Apply AI in art, music, and advanced language models."
    },
    {
      title: "Custom Enterprise Solutions",
      description: "Design AI solutions tailored to business needs."
    },
    {
      title: "Deployment Proficiency",
      description: "Deploy scalable AI models into production environments."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Who should enroll in the Generative AI Architect – Advanced Program?",
          answer: "This program is ideal for AI engineers, ML engineers, data scientists, and professionals seeking architect-level expertise in Generative AI."
        },
        {
          question: "2. Is prior technical knowledge required?",
          answer: "Yes. Participants should have foundational knowledge in machine learning, neural networks, and Python programming."
        },
        {
          question: "3. What will I learn in this program?",
          answer: "You will learn advanced Generative AI architectures, model training techniques, deployment strategies, and enterprise-level solution design."
        },
        {
          question: "4. Is there a hands-on project?",
          answer: "Yes. The course includes an end-to-end Generative AI project covering design, training, and deployment."
        },
        {
          question: "5. Will I receive certification?",
          answer: "Yes. Participants who complete the program and assessment receive an Advanced Generative AI Architect certification."
        },
        {
          question: "6. Can this course be customized for corporate teams?",
          answer: "Yes. Corporate customization options are available to address specific enterprise AI requirements."
        }
      ]
    },

    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. What happens to my token payment if I don’t enroll immediately?",
          answer: "Token payments become non-refundable after 15 days but can be applied toward enrollment within 6 months."
        },
        {
          question: "2. Can I pay in installments?",
          answer: "Yes, flexible installment options are available."
        },
        {
          question: "3. What payment methods are accepted?",
          answer: "Credit cards, debit cards, net banking, PayPal, Stripe, Splitit, and wire transfers are accepted."
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
          answer: "Yes, customized corporate AI training programs are available."
        },
        {
          question: "3. Do I receive post-training support?",
          answer: "Yes, participants receive access to support and additional resources after completion."
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
    { title: "Global Recognition", description: "Courses aligned with internationally recognized standards." },
    { title: "Expert Trainers", description: "Delivered by industry practitioners with real-world experience." },
    { title: "Flexible Learning", description: "Live online training suitable for global professionals." },
    { title: "Lifetime Access", description: "Access recordings and resources anytime." },
    { title: "Proven Track Record", description: "Trusted training provider for enterprises worldwide." },
    { title: "End-to-End Assistance", description: "Support before, during, and after training." },
    { title: "Interactive Sessions", description: "Case-based collaborative learning approach." },
    { title: "Wide Course Portfolio", description: "Access to diverse technology and leadership certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'GAI-ARCH',
      courseName: 'Generative AI Architect - Advanced Program Training',
      dateRange: 'Jun 20 - Jun 21, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert AI Architect',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 60,000',
      discountedPrice: 'INR 42,000',
      discountPercentage: '30',
    },
  ];

  const certificateBenefits = [
    'Advanced Digital Badge for Professional Profiles',
    'Access to Elite AI Architect Network',
    'Advanced Resource Toolkit',
    'Lifetime Access to Program Content',
  ];

  const heroData = {
    courseName: "Generative AI Architect - Advanced Program",
    breadcrumbName: "Advanced Generative AI Architect Course | Enterprise AI Training",
    rating: "5.0",
    enrolledCount: "1.2k+",
    subtitle: "Master Enterprise-Level Generative AI Architecture",
    benefits: [
      "Advanced AI architectures",
      "Hands-on enterprise project",
      "Expert-led training",
      "Architect-level certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Generative AI Architect – Advanced Program Overview",
    "description": [
      "This advanced program is designed for professionals seeking architect-level expertise in Generative AI.",
      "Participants explore advanced architectures, training optimization, deployment strategies, and ethical AI frameworks.",
      "Hands-on projects ensure readiness for real-world enterprise AI implementation."
    ],
    "whatIsTitle": "What is the Generative AI Architect Program?",
    "whatIsDescription": [
      "The program focuses on building scalable, production-ready Generative AI systems using state-of-the-art models and tools.",
      "You will learn to design complex AI architectures and lead technical implementations at an enterprise scale."
    ],
    "whatsIncludedTitle": "What’s Included in the Program?",
    "whatsIncludedDescription": [
      "16 Hours of Live Instructor-Led Training",
      "Real-World AI Architect Project",
      "Advanced AI Toolkit & Resources",
      "Globally Recognized Certification",
      "Flexible Learning Options"
    ],
    "skillsTitle": "Skills Covered in this Program",
    "skills": [
      "Advanced GANs & VAEs",
      "Transformer Architectures",
      "Model Optimization",
      "Distributed Training",
      "Enterprise AI Solution Design",
      "Responsible AI Frameworks"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Delivered via live interactive online sessions.",
      "Customized corporate training available for teams."
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn for AI Architect Training",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Customized enterprise AI architect training tailored to organizational needs and specialized industry use cases."
  };

  const courseMetadata = {
    shortName: 'GenAI-Arch',
    shortNameAlt: 'GenAI-Arch',
    fullName: 'Generative AI Architect - Advanced Program',
    fullNameAlt: 'Generative AI Architect - Advanced Program',
    certificateName: 'Advanced Generative AI Architect',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Advanced Generative AI Architect Certification, you will be equipped to design and deploy complex AI systems that drive enterprise-wide innovation.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Generative AI Architect – Advanced Program?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Advanced Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Expert',
      titleSuffix: 'Recognition',
      issuerName: 'Viovn',
      certificateType: 'Architect Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Lead AI Architect',
      signer2Role: 'Program Director',
    },
  };

  const commonAttendeesList = [
    "AI Engineers",
    "Machine Learning Engineers",
    "Data Scientists",
    "AI Researchers",
    "Technical Architects"
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

export default GenerativeAIArchitectAdvancedProgramTraining;
