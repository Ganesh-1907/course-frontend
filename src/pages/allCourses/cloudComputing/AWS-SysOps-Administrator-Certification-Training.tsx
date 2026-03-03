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

const AWSSysOpsAdministratorCertificationTraining = () => {
  const highlights = [
    { text: "Get AWS SysOps Certified with 3 Days of Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "AWS-Authorized Certified Trainers", icon: <UserCheck className="w-5 h-5" /> },
    { text: "End-to-End SOA-C02 Exam Preparation Guidance", icon: <Award className="w-5 h-5" /> },
    { text: "Lifetime Course Access", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Hands-On Cloud Lab Experience", icon: <Laptop className="w-5 h-5" /> },
    { text: "Practice Assignments for Real-World Implementation", icon: <FileText className="w-5 h-5" /> },
    { text: "24/7 Customer Support", icon: <Headset className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Advanced AWS Operations Skills",
      description: "Develop expertise in deploying, managing, and operating scalable AWS systems."
    },
    {
      title: "Enhanced Career Opportunities",
      description: "Increase job prospects and earning potential in cloud administration and DevOps roles."
    },
    {
      title: "Performance & Cost Optimization",
      description: "Gain practical skills to monitor, optimize, and manage AWS costs effectively."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Cloud Performance",
      description: "Enable teams to efficiently integrate and manage AWS services across the organization."
    },
    {
      title: "Enhanced Security & Compliance",
      description: "Strengthen governance and compliance using AWS security best practices."
    },
    {
      title: "Reliable Cloud Infrastructure",
      description: "Improve system reliability, scalability, and operational efficiency."
    }
  ];

  const careerStats = {
    averageIncome: "$120,000",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "25%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "System Administrators",
        "Cloud Engineers",
        "DevOps Engineers",
        "IT Operations Professionals",
        "AWS Developers seeking operations expertise"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Monitor, log, and remediate AWS workloads.",
    "Implement high availability and disaster recovery strategies.",
    "Automate AWS infrastructure provisioning.",
    "Secure AWS environments and ensure compliance.",
    "Optimize performance and cost of AWS resources."
  ];

  const prerequisites = [
    "Knowledge of AWS core services and architecture.",
    "Understanding of networking and security concepts.",
    "Hands-on experience with AWS CLI, SDKs, and API tools.",
    "Experience in deployment and management of AWS workloads."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete 3 days of instructor-led AWS SysOps Administrator training.",
      color: "bg-blue-500"
    },
    {
      title: "Practice with Labs",
      description: "Work on hands-on cloud labs and real-world scenarios.",
      color: "bg-indigo-500"
    },
    {
      title: "Prepare for SOA-C02 Exam",
      description: "Review mock tests and structured exam guidance.",
      color: "bg-purple-500"
    },
    {
      title: "Pass the Exam",
      description: "Score 720 out of 1000 in the 65-question exam within 130 minutes.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      title: "Monitoring, Logging & Remediation",
      topics: [
        "AWS Monitoring & Logging Services",
        "Metrics, Alarms & Filters",
        "Issue Remediation"
      ]
    },
    {
      title: "Reliability & Business Continuity",
      topics: [
        "Scalability & Elasticity",
        "High Availability Architecture",
        "Backup & Restore Strategies"
      ]
    },
    {
      title: "Deployment & Automation",
      topics: [
        "Provisioning Cloud Resources",
        "Infrastructure Automation"
      ]
    },
    {
      title: "Security & Compliance",
      topics: [
        "Security Policies",
        "Data Protection Strategies"
      ]
    },
    {
      title: "Networking & Content Delivery",
      topics: [
        "VPC & Connectivity",
        "DNS & Content Delivery",
        "Troubleshooting Connectivity"
      ]
    },
    {
      title: "Cost & Performance Optimization",
      topics: [
        "Cost Control Strategies",
        "Performance Monitoring & Optimization"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Monitor & Maintain AWS Systems",
      description: "Manage workloads using AWS monitoring tools and Well-Architected Framework."
    },
    {
      title: "Implement Security Controls",
      description: "Apply AWS security best practices and compliance policies."
    },
    {
      title: "Ensure Business Continuity",
      description: "Design disaster recovery and backup strategies."
    },
    {
      title: "Optimize Costs & Performance",
      description: "Estimate AWS usage costs and implement cost-saving measures."
    },
    {
      title: "Automate Infrastructure",
      description: "Automate applications, networks, and system deployments."
    },
    {
      title: "Use AWS CLI & Console",
      description: "Perform operations using AWS Management Console and CLI."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "AWS SysOps Certification FAQs",
      items: [
        {
          question: "1. What is AWS Certified SysOps Administrator Associate?",
          answer: "It validates skills in managing, operating, and deploying AWS cloud environments."
        },
        {
          question: "2. How many questions are in the exam?",
          answer: "The exam consists of 65 multiple-choice and multiple-response questions."
        },
        {
          question: "3. What is the passing score?",
          answer: "720 out of 1000."
        },
        {
          question: "4. How long is the exam?",
          answer: "130 minutes."
        },
        {
          question: "5. How long is the certification valid?",
          answer: "AWS certifications are valid for 3 years."
        },
        {
          question: "6. How many attempts can I take?",
          answer: "There is no limit, but a 14-day waiting period applies between attempts."
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
          question: "2. Is refund possible?",
          answer: "Refunds are not available, but rescheduling is allowed."
        }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        {
          question: "1. Is the training online?",
          answer: "Yes, instructor-led virtual sessions are available."
        },
        {
          question: "2. Do you offer corporate training?",
          answer: "Yes, customized corporate AWS training is available."
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
    { "title": "Global Recognition", "description": "Globally recognized AWS certification training." },
    { "title": "Certified Trainers", "description": "Learn from AWS-authorized certified professionals." },
    { "title": "Flexible Learning", "description": "Weekend and weekday online training options." },
    { "title": "Lifetime Access", "description": "Access recordings and materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals worldwide." },
    { "title": "End-to-End Assistance", "description": "Full support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world assignments." },
    { "title": "Wide Course Portfolio", "description": "Access additional AWS and DevOps certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'SOA-C02',
      courseName: 'AWS Certified SysOps Administrator – Associate Training',
      dateRange: 'Mar 21 - Mar 23, 2026',
      timeRange: '09:30 AM - 05:30 PM IST',
      trainerName: 'AWS certified Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 38,000',
      discountPercentage: '15',
    },
  ];

  const certificateBenefits = [
    'Official AWS Certified SysOps Administrator Badge',
    'Voucher for SOA-C02 Certification Exam',
    'Free Access to Practice Exams & Labs',
    'Lifelong Membership to Viovn Alumni Network',
  ];

  const heroData = {
    "courseName": "AWS Certified SysOps Administrator – Associate Training",
    "breadcrumbName": "AWS SysOps Administrator (SOA-C02) Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master AWS Cloud Operations & Pass the SOA-C02 Exam",
    "benefits": [
      "3 Days Live Instructor-Led Training",
      "Hands-On AWS Labs",
      "SOA-C02 Exam Preparation",
      "Lifetime Course Access"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AWS SysOps Administrator – Associate Training Overview",
    "description": [
      "This course prepares professionals to manage and operate scalable AWS environments.",
      "Learn installation, automation, monitoring, troubleshooting, and cost optimization strategies.",
      "Gain hands-on experience through real-world labs and assignments.",
      "Build confidence to pass the SOA-C02 certification exam."
    ],
    "whatIsTitle": "What is AWS SysOps Administrator?",
    "whatIsDescription": [
      "The AWS Certified SysOps Administrator-Associate validates your technical expertise in deployment, management, and operations on the AWS platform."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Official course curriculum",
      "Hands-on practice labs",
      "SOA-C02 exam preparation guide",
      "24/7 technical support"
    ],
    "skillsTitle": "Skills You Will Gain",
    "skills": [
      "Cloud implementation and management",
      "Security and compliance best practices",
      "Infrastructure automation and monitoring",
      "Resource optimization and cost management"
    ],
    "modesTitle": "Flexible Training Options",
    "modesDescription": [
      "Live virtual classroom sessions",
      "Corporate group training",
      "Self-paced learning materials"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Simpliaxis",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Simpliaxis provides tailored AWS training solutions to help organizations strengthen cloud governance, security, scalability, and operational excellence."
  };

  const courseMetadata = {
    shortName: 'SOA-C02',
    shortNameAlt: 'AWS SysOps Administrator',
    fullName: 'AWS Certified SysOps Administrator – Associate Training',
    fullNameAlt: 'AWS SysOps Associate Training',
    certificateName: 'AWS SysOps Administrator',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your AWS SysOps Administrator Associate certification significantly enhances your professional profile, opening up opportunities in cloud administration, DevOps, and systems operations.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AWS SysOps Administrator Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official AWS Badge',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Amazon Web Services',
      certificateType: 'Certified SysOps Administrator',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified AWS Trainer',
      signer2Role: 'Viovn Program Director',
    },
  };

  const commonAttendeesList = [
    "System Administrators",
    "Cloud Engineers",
    "DevOps Engineers",
    "IT Operations Professionals",
    "AWS Developers"
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
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {overviewContent.whatsIncludedDescription.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {overviewContent.skillsTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.skillsTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {overviewContent.skills.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {overviewContent.modesTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.modesTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {overviewContent.modesDescription.map((p, i) => (
                      <li key={i}>{p}</li>
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

export default AWSSysOpsAdministratorCertificationTraining;
