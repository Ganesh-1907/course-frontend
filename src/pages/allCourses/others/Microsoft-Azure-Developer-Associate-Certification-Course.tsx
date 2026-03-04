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
  Star,
  Clock
} from "lucide-react";

const MicrosoftAzureDeveloperAssociateCertificationCourse = () => {
  const highlights = [
    { "text": "16 Hours Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Hands-on Azure Lab Access", icon: <Laptop className="w-5 h-5" /> },
    { "text": "Real-World Scenario-Based Exercises", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Official Microsoft Training Content", icon: <FileText className="w-5 h-5" /> },
    { "text": "Flexible Learning Schedules", icon: <Clock className="w-5 h-5" /> },
    { "text": "AZ-204 Exam Preparation Guidance", icon: <Award className="w-5 h-5" /> },
    { "text": "Personalized Doubt Clearing Sessions", icon: <Headset className="w-5 h-5" /> },
    { "text": "Coverage of Azure Functions and API Management", icon: <Settings className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Practical Azure Development Skills",
      "description": "Gain hands-on experience building, deploying, and managing cloud applications."
    },
    {
      "title": "Career Advancement",
      "description": "Boost career prospects with validated Azure development expertise."
    },
    {
      "title": "Problem-Solving Confidence",
      "description": "Build confidence solving real-world cloud architecture and development challenges."
    },
    {
      "title": "Stay Industry-Ready",
      "description": "Stay updated with evolving Azure tools, SDKs, and platform enhancements."
    },
    {
      "title": "Project-Based Learning",
      "description": "Improve technical depth through labs, assignments, and real-time case studies."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Improved Application Security",
      "description": "Strengthen enterprise security using Entra ID, Key Vault, and RBAC policies."
    },
    {
      "title": "Enhanced Disaster Recovery",
      "description": "Implement reliable backup and replication strategies."
    },
    {
      "title": "Operational Efficiency",
      "description": "Centralize cloud resource management for better productivity."
    },
    {
      "title": "Cost Optimization",
      "description": "Reduce IT spending by rightsizing infrastructure and optimizing usage."
    },
    {
      "title": "Scalable Application Delivery",
      "description": "Deliver reliable and high-performing applications for better customer experience."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "Application Developers",
        "Backend Developers",
        "Cloud Engineers",
        "DevOps Engineers",
        "IT Professionals transitioning to Azure Development"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design scalable apps using Azure Functions, Containers, and App Services.",
    "Develop secure storage solutions with Cosmos DB and Blob Storage.",
    "Implement authentication using Entra ID and Azure Key Vault.",
    "Monitor performance with Application Insights and Azure Monitor.",
    "Build event-driven solutions using Service Bus and Event Grid."
  ];

  const prerequisites = [
    "At least 2 years of programming experience.",
    "Experience with APIs and cloud concepts.",
    "Understanding of Azure CLI or PowerShell.",
    "Familiarity with databases and authentication methods."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in AZ-204 Training",
      "description": "Join instructor-led sessions with practical labs.",
      "color": "bg-primary"
    },
    {
      "title": "Practice & Build Projects",
      "description": "Work on real-time projects and mock exams.",
      "color": "bg-indigo-500"
    },
    {
      "title": "Schedule Exam",
      "description": "Register via Pearson VUE or authorized testing center.",
      "color": "bg-purple-500"
    },
    {
      "title": "Earn Certification",
      "description": "Pass the AZ-204 exam and achieve Microsoft Azure Developer Associate credential.",
      "color": "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Develop Azure Compute Solutions",
      "topics": [
        "Azure Virtual Machines",
        "App Services",
        "Azure Functions",
        "Containers and Kubernetes"
      ]
    },
    {
      "title": "Develop for Azure Storage",
      "topics": [
        "Azure Blob Storage",
        "Cosmos DB",
        "Table Storage",
        "Relational Databases"
      ]
    },
    {
      "title": "Implement Azure Security",
      "topics": [
        "Microsoft Entra ID",
        "Managed Identities",
        "Azure Key Vault",
        "RBAC"
      ]
    },
    {
      "title": "Monitor and Optimize Solutions",
      "topics": [
        "Application Insights",
        "Azure Monitor",
        "Autoscaling",
        "Caching with Redis"
      ]
    },
    {
      "title": "Integrate and Build Messaging Solutions",
      "topics": [
        "API Management",
        "Event Grid",
        "Service Bus",
        "Queue Storage"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Develop Azure Compute Solutions",
      "description": "Build and deploy scalable applications using Azure compute services."
    },
    {
      "title": "Implement Secure Solutions",
      "description": "Apply authentication, authorization, and encryption best practices."
    },
    {
      "title": "Monitor and Troubleshoot Applications",
      "description": "Use monitoring tools to diagnose and optimize performance."
    },
    {
      "title": "Design Event-Driven Architectures",
      "description": "Create decoupled messaging systems using Azure services."
    },
    {
      "title": "Optimize for Scalability",
      "description": "Implement autoscaling and resiliency patterns for production-ready apps."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AZ-204 Certification FAQs",
      "items": [
        {
          "question": "1. What is AZ-204?",
          "answer": "AZ-204 is a Microsoft certification validating skills in developing and maintaining Azure cloud applications."
        },
        {
          "question": "2. Who should take this course?",
          "answer": "Developers and IT professionals with programming experience who want Azure expertise."
        },
        {
          "question": "3. What is the exam cost?",
          "answer": "Approximately $165 USD (varies by country)."
        },
        {
          "question": "4. What is the passing score?",
          "answer": "700 out of 1000."
        },
        {
          "question": "5. Is the exam proctored?",
          "answer": "Yes, it is proctored and not open-book."
        },
        {
          "question": "6. How long is the exam?",
          "answer": "100 minutes."
        },
        {
          "question": "7. What happens if I fail?",
          "answer": "You can retake after 24 hours. A 14-day gap applies for further attempts."
        },
        {
          "question": "8. Is this certification worth it?",
          "answer": "Yes, it is highly valued for cloud development roles."
        },
        {
          "question": "9. How long should I prepare?",
          "answer": "6–8 weeks of focused preparation is recommended."
        },
        {
          "question": "10. Is this suitable for beginners?",
          "answer": "It is best for developers with prior coding and basic cloud knowledge."
        }
      ]
    },

    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Token payment policy?",
          "answer": "Non-refundable after 15 days; adjustable within 6 months."
        },
        {
          "question": "2. Installment options?",
          "answer": "Flexible installment plans available."
        },
        {
          "question": "3. Refund policy?",
          "answer": "Refunds are not available; rescheduling is allowed."
        },
        {
          "question": "4. Payment methods?",
          "answer": "Credit/Debit Cards, Net Banking, Wire Transfer, PayPal."
        },
        {
          "question": "5. Will I receive an invoice?",
          "answer": "Yes, invoice will be emailed upon successful payment."
        }
      ]
    },

    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        {
          "question": "1. Will I receive a certificate?",
          "answer": "Yes, a course completion certificate is provided."
        },
        {
          "question": "2. Are there corporate training options?",
          "answer": "Yes, customized corporate training is available."
        },
        {
          "question": "3. Do you offer online training?",
          "answer": "Yes, live instructor-led online sessions are available."
        },
        {
          "question": "4. Who are the instructors?",
          "answer": "Certified Azure professionals with real-world experience."
        },
        {
          "question": "5. Do you provide career guidance?",
          "answer": "Yes, resume support and interview preparation assistance are available."
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
    {
      "title": "Global Recognition",
      "description": "Recognized Microsoft certification valued worldwide."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from experienced Azure-certified professionals."
    },
    {
      "title": "Flexible Learning",
      "description": "Live interactive sessions suitable for working professionals."
    },
    {
      "title": "Lifetime Access",
      "description": "Access training materials anytime."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by learners globally."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Support from enrollment to certification."
    },
    {
      "title": "Interactive Training",
      "description": "Hands-on labs with real-world case studies."
    },
    {
      "title": "Wide Range of Courses",
      "description": "Access multiple Microsoft and cloud certifications."
    }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AZ-204',
      courseName: 'Microsoft Azure Developer Associate (AZ-204) Certification Course',
      dateRange: 'Jul 15 - Jul 17, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Azure Dev Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 28,000',
      discountedPrice: 'INR 21,000',
      discountPercentage: '25',
    },
  ];

  const certificateBenefits = [
    'Microsoft Certified Badge',
    'Industry Recognition',
    'Career Growth Potential',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Microsoft Azure Developer Associate (AZ-204) Certification Course",
    "breadcrumbName": "Microsoft Azure Developer Associate (AZ-204) Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Azure Development and Earn AZ-204 Certification",
    "benefits": [
      "16+ Hours Live Training",
      "Hands-On Azure Labs",
      "Aligned with AZ-204 Objectives",
      "Microsoft Certified Credential"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AZ-204 Certification Course Overview",
    "description": [
      "Prepare for the Microsoft Azure Developer Associate certification with expert-led training and practical labs.",
      "Gain real-world Azure development experience aligned with exam objectives."
    ],
    "whatIsTitle": "What is AZ-204 Certification?",
    "whatIsDescription": [
      "AZ-204 validates your ability to design, build, test, and maintain Azure cloud applications."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Live instructor sessions",
      "Hands-on labs",
      "Practice exams",
      "Industry projects"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Azure Compute",
      "Azure Storage",
      "Security & Identity",
      "Monitoring & Optimization",
      "Messaging & Integration"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Live instructor-led online training with real-time interaction."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Azure developer training programs designed to improve enterprise cloud application development capabilities."
  };

  const courseMetadata = {
    shortName: 'AZ-204',
    shortNameAlt: 'Azure Developer',
    fullName: 'Microsoft Azure Developer Associate (AZ-204) Certification Course',
    fullNameAlt: 'Microsoft Azure Developer Training',
    certificateName: 'Azure Developer Associate',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Microsoft Azure Developer Associate (AZ-204) Certification Course, a wide selection of career options will open up, particularly in the cloud development and software engineering domains.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Microsoft Azure Developer Associate Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Microsoft Aligned',
      certificateType: 'Certificate of Development Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Azure Developer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Application Developers",
    "Backend Developers",
    "Cloud Engineers",
    "DevOps Engineers",
    "IT Professionals transitioning to Azure Development"
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
      ltpLabel: 'Global Training Provider',
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
          categoryName="others"
          categoryLink="/category/others"
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


export default MicrosoftAzureDeveloperAssociateCertificationCourse;
