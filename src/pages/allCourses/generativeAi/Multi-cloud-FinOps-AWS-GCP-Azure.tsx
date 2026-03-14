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

const MultiCloudFinOpsAWsgcpAzureTraining = () => {
  const highlights = [
    { text: "Learn from expert cloud FinOps leaders", icon: <Star className="w-5 h-5" /> },
    { text: "Hands-on labs and practical cost optimization exercises", icon: <Star className="w-5 h-5" /> },
    { text: "Interactive learning experience with real-world scenarios", icon: <Star className="w-5 h-5" /> },
    { text: "Comprehensive and industry-aligned curriculum", icon: <Star className="w-5 h-5" /> },
    { text: "Globally recognized certification", icon: <Star className="w-5 h-5" /> },
    { text: "24/7 customer support and guidance", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Multi-Cloud Cost Mastery",
      "description": "Gain the ability to manage and optimize costs across AWS, GCP, and Azure environments."
    },
    {
      "title": "Practical FinOps Expertise",
      "description": "Apply FinOps principles through hands-on labs and real-world case studies."
    },
    {
      "title": "Tool Proficiency",
      "description": "Master cloud-native cost management and governance tools."
    },
    {
      "title": "Career Advancement",
      "description": "Enhance your profile with in-demand multi-cloud financial management skills."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Cloud Cost Optimization",
      "description": "Reduce unnecessary cloud spending through governance and optimization strategies."
    },
    {
      "title": "Improved Financial Visibility",
      "description": "Establish clear budgeting, forecasting, and chargeback models."
    },
    {
      "title": "Multi-Cloud Governance",
      "description": "Implement cost controls and tagging policies across providers."
    },
    {
      "title": "Strategic Cloud Efficiency",
      "description": "Align cloud investments with measurable business value."
    }
  ];

  const careerStats = {
    averageIncome: "$115k - $160k",
    incomeLabel: "Average Salary",
    employmentGrowth: "22%",
    growthLabel: "FinOps Roles Growth"
  };

  const attendees = [
    {
      group: [
        "Cloud Architects",
        "Cloud Engineers",
        "Finance Managers",
        "IT Administrators",
        "DevOps Engineers",
        "Business Analysts"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Manage multi-cloud costs effectively.",
    "Implement cloud governance and policies.",
    "Master cloud-native cost management tools.",
    "Design and implement FinOps strategies."
  ];

  const prerequisites = [
    "Basic understanding of cloud computing (AWS, GCP, or Azure).",
    "Familiarity with financial management concepts is beneficial."
  ];

  const certificationSteps = [
    {
      title: "Enroll in the Program",
      description: "Register for the Multi-cloud FinOps Training.",
      color: "#3b82f6"
    },
    {
      title: "Attend Live Training",
      description: "Participate in intensive instructor-led sessions.",
      color: "#2563eb"
    },
    {
      title: "Complete Practical Labs",
      description: "Perform hands-on cost optimization exercises.",
      color: "#1d4ed8"
    },
    {
      title: "Earn Certification",
      description: "Receive your Multi-cloud FinOps certification.",
      color: "#1e3a8a"
    }
  ];

  const curriculumModules = [
    {
      title: "FinOps Fundamentals",
      topics: [
        "What is FinOps?",
        "FinOps principles and lifecycle",
        "Cost visibility and reporting"
      ]
    },
    {
      title: "AWS Cost Management",
      topics: [
        "AWS Cost Explorer and Budgets",
        "Savings Plans and Reserved Instances",
        "AWS tagging strategies"
      ]
    },
    {
      title: "Azure Cost Management",
      topics: [
        "Azure Cost Management + Billing",
        "Azure Reservations",
        "Azure policy and governance"
      ]
    },
    {
      title: "GCP Cost Management",
      topics: [
        "GCP Billing console and budgets",
        "Committed Use Discounts (CUDs)",
        "GCP labels and hierarchy"
      ]
    },
    {
      title: "Multi-Cloud FinOps Strategies",
      topics: [
        "Cross-cloud cost optimization",
        "Multi-cloud governance frameworks",
        "Establishing a FinOps culture"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Master Multi-Cloud Cost Management",
      description: "Manage costs efficiently across AWS, Azure, and GCP."
    },
    {
      title: "Implement FinOps Lifecycle",
      description: "Understand and apply Inform, Optimize, and Operate phases."
    },
    {
      title: "Cloud Governance Proficiency",
      description: "Establish effective multi-cloud cost controls and policies."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Course FAQs",
      items: [
        {
          question: "1. Who should attend this FinOps training?",
          answer: "Cloud architects, engineers, finance managers, and IT administrators looking to master multi-cloud cost management."
        },
        {
          question: "2. Do I need prior cloud knowledge?",
          answer: "A basic understanding of cloud computing services is recommended."
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
      title: 'Hands-On Labs',
      subtitle: 'Experience',
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  const courseClients = [
    { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
    { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
    { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' },
    { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg' },
    { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg' },
    { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
    { name: 'Cognizant', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
    { name: 'Hexaware', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexaware_new_logo.svg' },
    { name: 'Thomson Reuters', logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Thomson_Reuters_logo.svg' },
  ];

  const courseTrainers = [
    {
      name: 'Expert Trainer',
      role: 'Cloud FinOps Architect',
      rating: '4.9',
      experience: '12+ Years',
      description: 'Expert in multi-cloud cost optimization and enterprise cloud financial management.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    }
  ];

  const courseWhyViovn = [
    { title: "Hands-on Focus", description: "Practical labs for real-world multi-cloud optimization." },
    { title: "Multi-Cloud Content", description: "In-depth coverage of AWS, Azure, and GCP cost management." },
    { title: "Expert Guidance", description: "Learn from leaders in the cloud FinOps industry." },
    { title: "Flexible Schedule", description: "Online sessions designed for working professionals." }
  ];

  

  const certificateBenefits = [
    'Recognized Multi-cloud FinOps Digital Badge',
    'Financial Visibility Management Toolkit',
    'FinOps Policy Templates',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Multi-cloud FinOps: AWS, GCP, Azure",
    breadcrumbName: "Multi-cloud FinOps Training | AWS, GCP, Azure Cost Optimization",
    rating: "4.9",
    enrolledCount: "850+",
    subtitle: "Master Cost Optimization Across Major Cloud Environments",
    benefits: [
      "AWS, GCP, & Azure FinOps",
      "Practical cost-saving labs",
      "Expert-led sessions",
      "Globally recognized certification"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of Multi-cloud FinOps Training",
    "description": [
      "This course provides a comprehensive practical guide to mastering FinOps across AWS, GCP, and Azure.",
      "You will learn to manage and optimize multi-cloud costs by establishing clear visibility, governance, and optimization strategies."
    ],
    "whatIsTitle": "What is Multi-cloud FinOps?",
    "whatIsDescription": [
      "FinOps is an operational framework and cultural practice that enables organizations to maximize business value from cloud spending.",
      "Multi-cloud FinOps applies these principles across multiple cloud providers, ensuring consistency and efficiency in financial management."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Intensive Instructor-Led Online Training",
      "Hands-on Labs for AWS, GCP, and Azure",
      "Cost Optimization Frameworks and Tools",
      "Certification of Completion",
      "Post-Training Support"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "AWS Cost Management",
      "Azure Governance",
      "GCP Billing Optimization",
      "Cross-Cloud Visibility",
      "Budgeting & Forecasting",
      "Unit Economics for Cloud"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live interactive online sessions.",
      "Corporate group training available."
    ]
  };

  const corporateData = {
    courseName: "Why Corporates Choose Viovn for FinOps Training",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Equip your teams with the strategies to control spiraling cloud costs across multi-cloud environments."
  };

  const courseMetadata = {
    shortName: 'FinOps-MC',
    shortNameAlt: 'Multi-cloud FinOps',
    fullName: 'Multi-cloud FinOps Training',
    fullNameAlt: 'Multi-cloud FinOps Training',
    certificateName: 'Multi-cloud FinOps Certification',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Multi-cloud FinOps Certification, you will be able to drive significant cost savings and financial efficiency for your organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for Multi-cloud FinOps Training?',
    },
    certificate: {
      mockupName: 'CHARLIE DAVIS',
      label: 'Financial Excellence',
      titlePrefix: 'Earn Your',
      titleHighlight: 'FinOps',
      titleSuffix: 'Certification',
      issuerName: 'Viovn',
      certificateType: 'Multi-cloud Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as a',
      signer1Role: 'Lead FinOps Consultant',
      signer2Role: 'FinOps Program Manager',
    },
  };

  const commonAttendeesList = [
    "Cloud Architects",
    "Cloud Engineers",
    "Finance Managers",
    "IT Administrators",
    "DevOps Engineers",
    "Business Analysts"
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
      ltpLabel: 'Cloud Financial Management Training',
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

export default MultiCloudFinOpsAWsgcpAzureTraining;
