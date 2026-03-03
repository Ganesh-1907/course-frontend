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

const AWSDevOpsEngineerCertificationTraining = () => {
  const highlights = [
    { text: "3 Days of Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Guidance by AWS Certified Trainers", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Hands-On Experience with Real-World Applications", icon: <Laptop className="w-5 h-5" /> },
    { text: "Effective Knowledge Transfer Sessions", icon: <Award className="w-5 h-5" /> },
    { text: "Technical Support from Expert Mentors", icon: <Headset className="w-5 h-5" /> },
    { text: "Live Project Discussions & Industry Case Studies", icon: <FileText className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Higher Earning Potential",
      description: "Certified professionals typically earn higher salaries compared to non-certified peers."
    },
    {
      title: "Industry Recognition",
      description: "Demonstrates expertise across multiple AWS services and DevOps best practices."
    },
    {
      title: "Professional Networking",
      description: "Opportunity to interact and collaborate with other DevOps and cloud professionals."
    },
    {
      title: "Adoption of Modern Tools",
      description: "Helps professionals adapt to evolving DevOps methodologies and automation tools."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Organizational Performance",
      description: "DevOps culture enhances productivity and competitive advantage."
    },
    {
      title: "Reduced Production Failures",
      description: "Automation and CI/CD practices minimize deployment risks."
    },
    {
      title: "Faster Service Delivery",
      description: "Accelerated application deployment improves customer satisfaction."
    }
  ];

  const careerStats = {
    averageIncome: "$145,000",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "30%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "DevOps Engineers",
        "Cloud Architects",
        "System Administrators",
        "Software Developers",
        "IT Operations Professionals"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design and implement CI/CD pipelines on AWS.",
    "Automate infrastructure using Infrastructure as Code.",
    "Implement resilient and scalable cloud solutions.",
    "Monitor, log, and respond to events effectively.",
    "Ensure security, governance, and compliance in DevOps environments."
  ];

  const prerequisites = [
    "Minimum two years of experience with AWS services.",
    "Hands-on experience with at least one programming language (Java, Python, PHP, etc.).",
    "Understanding of DevOps practices and automation tools."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete 3 days of instructor-led AWS DevOps Engineer Professional training.",
      color: "bg-blue-500"
    },
    {
      title: "Hands-On Practice",
      description: "Work on CI/CD pipelines, automation, and real-world DevOps scenarios.",
      color: "bg-indigo-500"
    },
    {
      title: "Exam Preparation",
      description: "Review structured materials aligned with DOP-C02 exam objectives.",
      color: "bg-purple-500"
    },
    {
      title: "Pass the Exam",
      description: "Clear the 75-question certification exam to earn AWS DevOps Engineer – Professional certification.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      title: "SDLC Automation",
      topics: [
        "Implement CI/CD pipelines",
        "Automated testing integration",
        "Artifact management",
        "Deployment strategies (EC2, containers, serverless)"
      ]
    },
    {
      title: "Configuration Management & IaC",
      topics: [
        "Infrastructure as Code",
        "Multi-account & multi-region automation",
        "Large-scale automation solutions"
      ]
    },
    {
      title: "Resilient Cloud Solutions",
      topics: [
        "High availability architectures",
        "Scalable solutions",
        "Automated disaster recovery (RTO/RPO)"
      ]
    },
    {
      title: "Monitoring & Logging",
      topics: [
        "Log aggregation & metrics",
        "Audit & monitoring",
        "Automated event management"
      ]
    },
    {
      title: "Incident & Event Response",
      topics: [
        "Event-driven automation",
        "Configuration updates",
        "Troubleshooting failures"
      ]
    },
    {
      title: "Security & Compliance",
      topics: [
        "IAM at scale",
        "Security automation",
        "Compliance auditing"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Automate Infrastructure",
      description: "Test and release AWS infrastructure using DevOps automation tools."
    },
    {
      title: "Optimize Software Delivery",
      description: "Automate and streamline CI/CD pipelines."
    },
    {
      title: "Manage Cloud Environments",
      description: "Improve performance and operational efficiency."
    },
    {
      title: "Container Technologies",
      description: "Understand Docker and Kubernetes integration with AWS."
    },
    {
      title: "Configuration Management",
      description: "Work with Ansible, Chef, Puppet, and other automation tools."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "AWS DevOps Certification FAQs",
      items: [
        {
          question: "1. What are the benefits of AWS DevOps Engineer Certification?",
          answer: "Enhances career growth by demonstrating expertise in deployment, monitoring, automation, and scalable AWS solutions."
        },
        {
          question: "2. What is the annual income of AWS DevOps Engineer?",
          answer: "The global average salary ranges between $110,000 and $145,000 per year."
        },
        {
          question: "3. Who should attend this training?",
          answer: "DevOps engineers, cloud architects, system administrators, and software developers."
        },
        {
          question: "4. What is the exam pattern?",
          answer: "The exam consists of 75 questions including multiple-choice and multiple-response formats."
        },
        {
          question: "5. What are the career growth opportunities?",
          answer: "Opportunities include leadership roles in cloud automation, CI/CD, and infrastructure management."
        },
        {
          question: "6. What is the validity of the certification?",
          answer: "AWS DevOps Engineer certification is valid for 3 years."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. What happens to token payments?",
          answer: "Token payments are non-refundable after 15 days but can be adjusted within 6 months."
        },
        {
          question: "2. Are installment options available?",
          answer: "Yes, flexible payment options are available."
        }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        {
          question: "1. Do you offer corporate training?",
          answer: "Yes, customized corporate training programs are available."
        },
        {
          question: "2. Is online training available?",
          answer: "Yes, instructor-led virtual sessions are available."
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
      courseCode: 'DOP-C02',
      courseName: 'AWS Certified DevOps Engineer – Professional Training',
      dateRange: 'Mar 25 - Mar 27, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'AWS Professional',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 55,000',
      discountedPrice: 'INR 48,000',
      discountPercentage: '12',
    },
  ];

  const certificateBenefits = [
    'Official AWS Certified DevOps Engineer Badge',
    'Voucher for DOP-C02 Certification Exam',
    'Full Access to DevOps Labs & Resources',
    'Lifelong Membership to Viovn Alumni Network',
  ];

  const heroData = {
    "courseName": "AWS DevOps Engineer – Professional Certification Training",
    "breadcrumbName": "AWS DevOps Engineer (DOP-C02) Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master CI/CD, Automation & Cloud Operations on AWS",
    "benefits": [
      "3 Days Live Training",
      "Hands-On Labs",
      "CI/CD & Infrastructure Automation",
      "DOP-C02 Exam Preparation"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AWS DevOps Engineer – Professional Training Overview",
    "description": [
      "This course prepares professionals to implement DevOps practices on AWS.",
      "Learn CI/CD, Infrastructure as Code, monitoring, logging, and security automation.",
      "Gain practical exposure through real-world case studies and cloud labs.",
      "Get fully prepared for the AWS DevOps Engineer – Professional (DOP-C02) exam."
    ],
    "whatIsTitle": "What is AWS DevOps Engineer?",
    "whatIsDescription": [
      "The AWS Certified DevOps Engineer-Professional validates your technical expertise in provisioning, operating, and managing distributed application systems on the AWS platform."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Official course curriculum",
      "Hands-on practice labs",
      "DOP-C02 exam preparation guide",
      "24/7 technical support"
    ],
    "skillsTitle": "Skills You Will Gain",
    "skills": [
      "CI/CD pipeline automation",
      "Infrastructure as Code (CloudFormation/CDK)",
      "High availability and disaster recovery",
      "Security and compliance automation"
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
    "description": "We deliver tailored AWS DevOps corporate training programs to strengthen automation, cloud governance, and continuous delivery capabilities across enterprises."
  };

  const courseMetadata = {
    shortName: 'DOP-C02',
    shortNameAlt: 'AWS DevOps Engineer',
    fullName: 'AWS Certified DevOps Engineer – Professional Certification Training',
    fullNameAlt: 'AWS DevOps Professional Training',
    certificateName: 'AWS DevOps Engineer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your AWS DevOps Engineer Professional certification significantly enhances your professional profile, opening up opportunities in cloud architecture, CI/CD, and site reliability engineering.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AWS DevOps Engineer Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official AWS Badge',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Amazon Web Services',
      certificateType: 'Certified DevOps Engineer',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified AWS Trainer',
      signer2Role: 'Viovn Program Director',
    },
  };

  const commonAttendeesList = [
    "DevOps Engineers",
    "Cloud Architects",
    "System Administrators",
    "Software Developers",
    "IT Operations Professionals"
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

export default AWSDevOpsEngineerCertificationTraining;
