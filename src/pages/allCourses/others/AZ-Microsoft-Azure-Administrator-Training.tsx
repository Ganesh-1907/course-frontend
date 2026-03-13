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
  Shield,
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

const AZMicrosoftAzureAdministratorTraining = () => {
  const highlights = [
    { "text": "16 Hours of Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Expert-Led Sessions with Real-World Insights", icon: <UserCheck className="w-5 h-5" /> },
    { "text": "Master Azure Governance, Networking, and Security", icon: <Shield className="w-5 h-5" /> },
    { "text": "Comprehensive AZ-104 Exam Preparation Guidance", icon: <Award className="w-5 h-5" /> },
    { "text": "Hands-On Azure Labs for Practical Learning", icon: <Laptop className="w-5 h-5" /> },
    { "text": "24/7 Learning Assistance and Query Support", icon: <Headset className="w-5 h-5" /> },
    { "text": "Flexible Interactive Online Learning Experience", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Boost Your Career with Microsoft Certified Credential", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Expanded Career Opportunities",
      "description": "Unlock roles such as Azure Administrator, Cloud Engineer, and Infrastructure Specialist."
    },
    {
      "title": "Higher Salary Potential",
      "description": "Certified professionals often command higher salaries in cloud administration roles."
    },
    {
      "title": "Industry Recognition",
      "description": "Demonstrates validated expertise in Azure administration and cloud services."
    },
    {
      "title": "Global Credential",
      "description": "Gain international recognition valued by recruiters worldwide."
    },
    {
      "title": "Professional Community",
      "description": "Become part of the Microsoft Certified professional network."
    },
    {
      "title": "Access to Microsoft Resources",
      "description": "Leverage Microsoft’s official documentation, labs, and certification ecosystem."
    },
    {
      "title": "Industry-Standard Skillset",
      "description": "Build standardized Azure administration skills aligned with market demands."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Improved Cloud Security",
      "description": "Enable secure Azure implementations with certified professionals."
    },
    {
      "title": "Skilled Workforce",
      "description": "Ensure employees can manage Azure environments efficiently."
    },
    {
      "title": "Access to Modern Technologies",
      "description": "Adopt advanced Azure solutions confidently."
    },
    {
      "title": "Cost Optimization",
      "description": "Improve infrastructure cost management through trained administrators."
    },
    {
      "title": "Enterprise-Ready Governance",
      "description": "Strengthen governance, compliance, and monitoring across Azure environments."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      "group": [
        "Cloud Administrators",
        "Infrastructure Engineers",
        "DevOps Engineers",
        "IT Professionals with Azure experience",
        "System Administrators"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Manage Azure identities and governance effectively.",
    "Implement and manage secure Azure storage solutions.",
    "Deploy and manage Azure compute resources.",
    "Configure and manage virtual networking.",
    "Monitor and back up critical Azure resources."
  ];

  const prerequisites = [
    "Six months of hands-on Azure experience recommended.",
    "Basic understanding of networking, storage, and virtualization.",
    "Familiarity with PowerShell and Azure CLI is beneficial.",
    "Understanding Azure Portal and ARM templates is helpful."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in AZ-104 Training",
      "description": "Join live instructor-led sessions with practical labs.",
      "color": "bg-primary"
    },
    {
      "title": "Complete Hands-On Practice",
      "description": "Work on labs covering governance, networking, storage, and compute.",
      "color": "bg-indigo-500"
    },
    {
      "title": "Attempt Practice Exams",
      "description": "Test your knowledge with mock exams aligned to AZ-104 objectives.",
      "color": "bg-purple-500"
    },
    {
      "title": "Schedule & Pass Exam",
      "description": "Register for AZ-104 exam and score the required passing marks.",
      "color": "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Manage Azure Identities and Governance",
      "topics": [
        "Manage Subscriptions and Governance",
        "Role-Based Access Control (RBAC)",
        "Administer Microsoft Entra ID"
      ]
    },
    {
      "title": "Implement and Manage Storage",
      "topics": [
        "Configure Storage Accounts",
        "Manage Azure Files",
        "Storage Security and Access"
      ]
    },
    {
      "title": "Deploy and Manage Azure Compute Resources",
      "topics": [
        "Virtual Machines Administration",
        "App Services",
        "Containers and Automation"
      ]
    },
    {
      "title": "Configure and Manage Virtual Networking",
      "topics": [
        "Virtual Networks",
        "VPN and ExpressRoute",
        "Network Security Groups"
      ]
    },
    {
      "title": "Monitor and Backup Azure Resources",
      "topics": [
        "Azure Monitor",
        "Backup and Recovery",
        "Data Protection"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Identity & Governance",
      "description": "Implement RBAC, manage identities, and enforce governance policies."
    },
    {
      "title": "Storage Management",
      "description": "Deploy and secure Azure storage solutions."
    },
    {
      "title": "Compute Deployment",
      "description": "Manage VMs, containers, and App Services."
    },
    {
      "title": "Networking Configuration",
      "description": "Configure VNETs, DNS, VPNs, and firewalls."
    },
    {
      "title": "Monitoring & Maintenance",
      "description": "Use Azure Monitor and backup tools to maintain performance."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AZ-104 Certification FAQs",
      "items": [
        { "question": "1. Exam duration?", "answer": "120 minutes." },
        { "question": "2. Number of questions?", "answer": "40–60 questions." },
        { "question": "3. Retake policy?", "answer": "Retake allowed after 24 hours for first failure." },
        { "question": "4. Exam format?", "answer": "Proctored, case studies, MCQs." },
        { "question": "5. Certification earned?", "answer": "Microsoft Certified: Azure Administrator Associate." },
        { "question": "6. Validity?", "answer": "Requires periodic renewal via Microsoft assessment." },
        { "question": "7. Coding required?", "answer": "Knowledge of CLI and PowerShell recommended." },
        { "question": "8. Who should take it?", "answer": "Cloud admins, infrastructure engineers, DevOps professionals." },
        { "question": "9. Does training prepare for exam?", "answer": "Yes, aligned with official objectives." },
        { "question": "10. What skills demonstrated?", "answer": "Configure, manage, secure Azure environments." }
      ]
    },

    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Token refund policy?", "answer": "Non-refundable after 15 days." },
        { "question": "2. Preferred currency?", "answer": "Local currency recommended." },
        { "question": "3. Payment mode?", "answer": "Online secure portal." },
        { "question": "4. Installments?", "answer": "Flexible options available." },
        { "question": "5. Refund policy?", "answer": "No refund; rescheduling allowed." }
      ]
    },

    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        { "question": "1. Missed class?", "answer": "Rescheduling available." },
        { "question": "2. Certificate provided?", "answer": "Yes, course completion certificate provided." },
        { "question": "3. Corporate training?", "answer": "Customized corporate programs available." },
        { "question": "4. Instructor expertise?", "answer": "Microsoft-certified trainers." },
        { "question": "5. Support?", "answer": "24/7 assistance available." }
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
    { "title": "Global Recognition", "description": "Microsoft-recognized certification accepted worldwide." },
    { "title": "Expert Trainers", "description": "Learn from experienced Azure-certified professionals." },
    { "title": "Flexible Learning", "description": "Interactive online sessions suitable for working professionals." },
    { "title": "Lifetime Learning Access", "description": "Access study materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by IT professionals globally." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world scenarios." },
    { "title": "Wide Course Portfolio", "description": "Access to multiple Microsoft and cloud certifications." }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Microsoft Certified Credential',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Microsoft Certified: Azure Administrator Associate AZ-104 Training",
    "breadcrumbName": "AZ-104 Microsoft Azure Administrator Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Azure Administration Skills",
    "benefits": [
      "16 Hours Live Training",
      "Hands-On Azure Labs",
      "Aligned with AZ-104 Exam",
      "Microsoft Certified Credential"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AZ-104 Azure Administrator Overview",
    "description": [
      "Prepare for the AZ-104 certification with real-world Azure administration training.",
      "Learn governance, networking, storage, compute, and monitoring.",
      "Designed for IT professionals aiming to become Azure Administrators."
    ],
    "whatIsTitle": "What is AZ-104 Certification?",
    "whatIsDescription": [
      "An intermediate-level certification validating Azure administration skills."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Live sessions",
      "Hands-on labs",
      "Practice exams",
      "Case studies"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Azure Identity",
      "Storage Management",
      "Virtual Networking",
      "Compute Resources",
      "Monitoring & Backup"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Live instructor-led online classes."
    ]
  };

  const corporateData = {
    "courseName": "Why SimpliAxis Is the First Choice for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Tailored Azure training solutions to enhance enterprise cloud capabilities."
  };

  const courseMetadata = {
    shortName: 'AZ-104',
    shortNameAlt: 'Azure Administrator',
    fullName: 'Microsoft Certified: Azure Administrator Associate AZ-104 Training',
    fullNameAlt: 'Microsoft Azure Administrator Training',
    certificateName: 'Azure Administrator Associate',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Microsoft Certified: Azure Administrator Associate AZ-104 Training, a wide selection of career options will open up, particularly in the cloud administration and infrastructure domains.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Microsoft Azure Administrator Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Microsoft Aligned',
      certificateType: 'Certificate of Infrastructure Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Azure Administrator',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Cloud Administrators",
    "Infrastructure Engineers",
    "DevOps Engineers",
    "IT Professionals with Azure experience",
    "System Administrators"
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


export default AZMicrosoftAzureAdministratorTraining;
