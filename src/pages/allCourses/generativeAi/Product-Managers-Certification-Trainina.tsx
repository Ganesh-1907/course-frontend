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

const CloudFundamentalsForBusinessManagersProductManagersTraining = () => {
  const highlights = [
    { text: "20 hours of intensive live online training" },
    { text: "Industry-specific insights for Business and Product Managers" },
    { text: "Hands-on learning with modern cloud tools and platforms" },
    { text: "Expert-led sessions by experienced cloud professionals" },
    { text: "Develop a strategic cloud adoption roadmap for your organization" },
    { text: "24/7 customer support assistance" }
  ];

  const individualBenefits = [
    {
      title: "Strategic Cloud Knowledge",
      description: "Understand how cloud computing impacts business strategy, product development, and digital transformation."
    },
    {
      title: "Improved Decision-Making",
      description: "Evaluate cloud service models and providers to make informed technology and budgeting decisions."
    },
    {
      title: "Product Innovation Enablement",
      description: "Leverage cloud capabilities to enhance scalability, collaboration, and speed-to-market."
    },
    {
      title: "Career Advancement",
      description: "Gain a recognized certification that strengthens your leadership profile in cloud-enabled environments."
    }
  ];

  const corporateBenefits = [
    {
      title: "Cost Optimization",
      description: "Implement effective cloud cost management strategies to improve financial efficiency."
    },
    {
      title: "Operational Scalability",
      description: "Enable scalable infrastructure that supports business growth and remote collaboration."
    },
    {
      title: "Secure Cloud Adoption",
      description: "Adopt best practices in cloud security, compliance, and governance."
    },
    {
      title: "Faster Product Delivery",
      description: "Use DevOps and CI/CD principles to accelerate product releases."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "Business Managers",
        "Product Managers",
        "Project Managers",
        "Digital Transformation Leaders",
        "IT Decision Makers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand cloud service and deployment models.",
    "Evaluate leading cloud providers (AWS, Azure, Google Cloud).",
    "Implement cloud cost management strategies.",
    "Integrate cloud technologies into product roadmaps.",
    "Apply security and compliance best practices."
  ];

  const prerequisites = [
    "No prior technical expertise required.",
    "Basic understanding of business or product management is helpful."
  ];

  const certificationSteps = [
    {
      title: "Enroll in the Program",
      description: "Register for the Cloud Fundamentals training with Viovn."
    },
    {
      title: "Attend Live Sessions",
      description: "Participate in 20 hours of instructor-led online training."
    },
    {
      title: "Complete Practical Exercises",
      description: "Engage in case studies and hands-on learning activities."
    },
    {
      title: "Final Assessment",
      description: "Complete the certification assessment successfully."
    },
    {
      title: "Get Certified",
      description: "Receive your Cloud Fundamentals certification upon successful completion."
    }
  ];

  const curriculumModules = [
    {
      title: "Introduction to Cloud Computing",
      topics: [
        "Definition and characteristics",
        "IaaS, PaaS, SaaS models",
        "Public, Private, Hybrid deployments",
        "Scalability and flexibility",
        "Security and compliance basics"
      ]
    },
    {
      title: "Cloud Essentials for Business Managers",
      topics: [
        "AWS, Azure, Google Cloud overview",
        "Provider comparison strategies",
        "Cloud pricing models",
        "Budgeting and forecasting",
        "Cost optimization techniques"
      ]
    },
    {
      title: "Cloud Fundamentals for Product Managers",
      topics: [
        "Cloud in product roadmaps",
        "Innovation through cloud",
        "Collaboration tools",
        "Remote team enablement"
      ]
    },
    {
      title: "Cloud Product Management Best Practices",
      topics: [
        "Agile with cloud technologies",
        "CI/CD pipelines",
        "DevOps principles",
        "Shared responsibility model",
        "Compliance frameworks"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Cloud Computing Fundamentals",
      description: "Understand cloud models, infrastructure, and deployment strategies."
    },
    {
      title: "Business Value of Cloud",
      description: "Identify scalability, flexibility, and cost benefits."
    },
    {
      title: "Cloud Infrastructure Knowledge",
      description: "Explore storage, networking, virtualization, and computing resources."
    },
    {
      title: "Cloud Security Awareness",
      description: "Learn data protection, encryption, compliance, and governance best practices."
    },
    {
      title: "Cost Management Strategies",
      description: "Implement monitoring and optimization techniques to control cloud expenses."
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
    { title: "Global Recognition", description: "Courses aligned with internationally recognized standards." },
    { title: "Expert Trainers", description: "Delivered by industry practitioners with real-world experience." },
    { title: "Flexible Learning", description: "Live online training suitable for global professionals." },
    { title: "Lifetime Access", description: "Access recordings and resources anytime." },
    { title: "Proven Track Record", description: "Trusted training provider for enterprises worldwide." },
    { title: "End-to-End Assistance", description: "Support before, during, and after training." },
    { title: "Interactive Sessions", description: "Case-based collaborative learning approach." },
    { title: "Wide Course Portfolio", description: "Access to diverse technology and leadership certifications." }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Cloud Resource Guide Access',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Cloud Fundamentals for Business Managers & Product Managers",
    breadcrumbName: "Cloud Fundamentals for Business & Product Managers Training",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Build Strong Cloud Foundations for Business & Product Strategy",
    benefits: [
      "20-hour live training",
      "Business-focused cloud fundamentals",
      "Expert-led sessions",
      "Recognized certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Cloud Fundamentals for Business & Product Managers",
    description: [
      "This course provides business and product leaders with essential cloud computing knowledge.",
      "Participants learn cloud models, provider evaluation, cost management, and security best practices.",
      "Real-world case studies and practical strategies prepare leaders to drive cloud-enabled innovation."
    ],
    whatIsTitle: "",
    whatIsDescription: [],
    whatsIncludedTitle: "",
    whatsIncludedDescription: [],
    skillsTitle: "",
    skills: [],
    modesTitle: "",
    modesDescription: []
  };

  const corporateData = {
    courseName: "Why Corporates Opt Us",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Customized enterprise cloud training aligned to business and product goals."
  };

  const courseMetadata = {
    shortName: 'Cloud-F',
    shortNameAlt: 'Cloud-F',
    fullName: 'Cloud Fundamentals for Business Managers & Product Managers',
    fullNameAlt: 'Cloud Fundamentals for Business Managers & Product Managers',
    certificateName: 'Cloud Fundamentals',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Cloud Fundamentals certification, you will be prepared to lead cloud-driven strategies and optimize technology investments within your organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Cloud Fundamentals for Business Managers & Product Managers Training?',
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
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Business Managers",
    "Product Managers",
    "Project Managers",
    "Digital Transformation Leaders",
    "IT Decision Makers"
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

export default CloudFundamentalsForBusinessManagersProductManagersTraining;
