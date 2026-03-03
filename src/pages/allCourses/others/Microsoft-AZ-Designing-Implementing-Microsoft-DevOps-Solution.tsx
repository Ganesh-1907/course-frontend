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

const MicrosoftAZDesigningImplementingMicrosoftDevOpsSolution = () => {
  const highlights = [
    { "text": "16 Hours Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Hands-on Azure Lab Access", icon: <Laptop className="w-5 h-5" /> },
    { "text": "Real-World Scenario-Based Exercises", icon: <FileText className="w-5 h-5" /> },
    { "text": "Official Microsoft-Aligned Training Content", icon: <Globe className="w-5 h-5" /> },
    { "text": "Flexible Learning Schedules", icon: <Settings className="w-5 h-5" /> },
    { "text": "AZ-400 Exam Preparation Guidance", icon: <Award className="w-5 h-5" /> },
    { "text": "Personalized Doubt-Clearing Sessions", icon: <Users className="w-5 h-5" /> },
    { "text": "Comprehensive Coverage of Microsoft DevOps Solutions", icon: <BookOpen className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Practical Azure DevOps Skills",
      "description": "Work with Azure DevOps tools that are actively used in real enterprise environments."
    },
    {
      "title": "Career Advancement",
      "description": "Earn a globally recognized certification that strengthens your résumé."
    },
    {
      "title": "CI/CD & Automation Mastery",
      "description": "Build strong continuous integration and deployment pipelines."
    },
    {
      "title": "Cloud & DevOps Relevance",
      "description": "Stay updated with modern cloud-native and DevOps practices."
    },
    {
      "title": "Higher Earning Potential",
      "description": "Increase salary opportunities with in-demand DevOps expertise."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Faster Software Delivery",
      "description": "Automate build and release pipelines to reduce time-to-market."
    },
    {
      "title": "Improved Quality Assurance",
      "description": "Implement continuous testing and monitoring for stable releases."
    },
    {
      "title": "Enhanced Security Governance",
      "description": "Apply Azure security policies and DevSecOps practices."
    },
    {
      "title": "Unified DevOps Culture",
      "description": "Bridge development and operations into a collaborative workflow."
    },
    {
      "title": "Infrastructure Consistency",
      "description": "Manage infrastructure using DevOps best practices and IaC."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      "group": [
        "DevOps Engineers",
        "Cloud Engineers",
        "Release Managers",
        "Azure Administrators",
        "Azure Developers",
        "Automation Engineers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design and implement CI/CD pipelines using Azure DevOps.",
    "Automate builds, testing, and deployments.",
    "Secure pipelines with proper governance and secrets management.",
    "Manage repositories with effective Git workflows.",
    "Monitor applications using Azure monitoring tools."
  ];

  const prerequisites = [
    "Experience with Azure administration or development.",
    "Knowledge of Git and pull requests.",
    "Basic understanding of CI/CD pipelines.",
    "Familiarity with Infrastructure as Code (ARM, Bicep, Terraform).",
    "Understanding of Agile practices and SDLC."
  ];

  const certificationSteps = [
    {
      "title": "Check Eligibility",
      "description": "Verify your Azure fundamentals and DevOps experience.",
      "color": "bg-blue-500"
    },
    {
      "title": "Join Training",
      "description": "Enroll in the Simpliaxis AZ-400 Certification course.",
      "color": "bg-orange-500"
    },
    {
      "title": "Practice Hands-On",
      "description": "Complete labs and real-world DevOps scenarios.",
      "color": "bg-green-500"
    },
    {
      "title": "Take Exam",
      "description": "Schedule and pass the Microsoft AZ-400 certification exam.",
      "color": "bg-purple-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: DevOps & Azure Transformation",
      "topics": [
        "Introduction to DevOps",
        "Azure DevOps transformation planning",
        "Source Control & Git basics",
        "Azure Repos & GitHub",
        "Azure Boards & Agile planning"
      ]
    },
    {
      "title": "Module 2: Enterprise Git & Collaboration",
      "topics": [
        "Git workflows and branching strategies",
        "Pull requests & governance",
        "Managing technical debt",
        "Inner source culture"
      ]
    },
    {
      "title": "Module 3: Continuous Integration",
      "topics": [
        "Azure Pipelines overview",
        "YAML pipelines",
        "CI strategies",
        "GitHub Actions integration"
      ]
    },
    {
      "title": "Module 4: Release Strategies",
      "topics": [
        "Continuous Delivery",
        "Deployment patterns",
        "Feature flags",
        "Release gates & dashboards"
      ]
    },
    {
      "title": "Module 5: Secure Continuous Deployment",
      "topics": [
        "Release pipelines",
        "Azure Key Vault integration",
        "Environment provisioning",
        "Pipeline templates"
      ]
    },
    {
      "title": "Module 6: Infrastructure as Code",
      "topics": [
        "ARM Templates",
        "Terraform automation",
        "Azure CLI",
        "Configuration management"
      ]
    },
    {
      "title": "Module 7: Security & Compliance",
      "topics": [
        "DevSecOps practices",
        "SonarQube integration",
        "WhiteSource security scanning"
      ]
    },
    {
      "title": "Module 8: Dependency Management",
      "topics": [
        "Azure Artifacts",
        "Versioning strategies",
        "Package management"
      ]
    },
    {
      "title": "Module 9: Containers & Kubernetes",
      "topics": [
        "Docker fundamentals",
        "AKS deployment",
        "Multi-container applications"
      ]
    },
    {
      "title": "Module 10: Monitoring & Feedback",
      "topics": [
        "Application Insights",
        "SRE practices",
        "Azure DevOps & Teams integration"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Implement CI/CD Pipelines",
      "description": "Design automated build, test, and release workflows."
    },
    {
      "title": "Secure DevOps Pipelines",
      "description": "Apply security, governance, and compliance practices."
    },
    {
      "title": "Manage Infrastructure as Code",
      "description": "Deploy and manage Azure infrastructure using IaC tools."
    },
    {
      "title": "Containerize Applications",
      "description": "Deploy and manage containers with AKS."
    },
    {
      "title": "Monitor & Optimize Applications",
      "description": "Implement continuous monitoring and feedback systems."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AZ-400 Certification FAQs",
      "items": [
        { "question": "1. What is AZ-400 Certification?", "answer": "Microsoft Certified: Azure DevOps Engineer Expert validates DevOps skills using Azure." },
        { "question": "2. Course duration?", "answer": "16 hours of live instructor-led training." },
        { "question": "3. Exam format?", "answer": "150 minutes, 40–60 scenario-based questions." },
        { "question": "4. Validity?", "answer": "Valid for one year; renewable via assessment." },
        { "question": "5. Passing score?", "answer": "700 out of 1000." },
        { "question": "6. Coding required?", "answer": "Basic scripting knowledge recommended." },
        { "question": "7. Prerequisites?", "answer": "Azure knowledge and CI/CD experience." },
        { "question": "8. Who should take it?", "answer": "DevOps, cloud, and automation professionals." },
        { "question": "9. Difficulty level?", "answer": "Moderate to challenging; hands-on practice helps." },
        { "question": "10. Exam cost?", "answer": "Around $165 USD (country-dependent)." },
        { "question": "11. Salary?", "answer": "US: $95K–$135K; India: ₹8–20 LPA." },
        { "question": "12. AZ-305 vs AZ-400?", "answer": "AZ-305 is architect-focused; AZ-400 is DevOps-focused." },
        { "question": "13. Direct attempt?", "answer": "Yes, but prior Azure experience recommended." },
        { "question": "14. Is it worth it?", "answer": "Yes, for automation and DevOps careers." },
        { "question": "15. Online course available?", "answer": "Yes, live instructor-led online training." },
        { "question": "16. How to pass first attempt?", "answer": "Practice labs and timed mock exams." },
        { "question": "17. Practice questions?", "answer": "Microsoft Learn and provider mock tests." },
        { "question": "18. Renewal process?", "answer": "Complete Microsoft renewal assessment annually." }
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
    { "title": "Global Recognition", "description": "Globally trusted certification provider." },
    { "title": "Expert Trainer", "description": "Learn from experienced Azure DevOps professionals." },
    { "title": "Flexible Learning", "description": "Weekday & weekend live batches available." },
    { "title": "Lifetime Access", "description": "Access training resources anytime." },
    { "title": "Proven Track Record", "description": "Trusted by enterprises worldwide." },
    { "title": "End-to-End Assistance", "description": "Full support from enrollment to certification." },
    { "title": "Interactive Training", "description": "Hands-on labs & real DevOps scenarios." },
    { "title": "Wide Range of Courses", "description": "Access multiple Microsoft certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AZ400',
      courseName: 'Microsoft Certified DevOps Engineer Expert (AZ-400) Certification Training',
      dateRange: 'Apr 20 - Apr 22, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Azure Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 35,000',
      discountedPrice: 'INR 28,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year (Renewable via Assessment)',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Microsoft Certified DevOps Engineer Expert (AZ-400) Certification Training",
    "breadcrumbName": "Microsoft AZ-400 DevOps Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Azure DevOps & CI/CD Pipelines",
    "benefits": [
      "16-Hour Live Training",
      "Hands-On Azure Labs",
      "Exam Preparation Support",
      "Industry-Recognized Certification"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AZ-400 Certification Overview",
    "description": [
      "The AZ-400 Certification Course equips professionals with practical Azure DevOps skills.",
      "Learn CI/CD, automation, source control, monitoring, and DevSecOps practices.",
      "Hands-on labs prepare you for real-world DevOps challenges and the Microsoft exam."
    ],
    "whatIsTitle": "What is AZ-400 Certification?",
    "whatIsDescription": [
      "AZ-400 is an expert-level certification validating DevOps solution implementation on Microsoft Azure."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Expert-led sessions",
      "Hands-on labs",
      "Practice tests",
      "Industry projects",
      "Lifetime access"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Azure Pipelines",
      "CI/CD Implementation",
      "Infrastructure as Code",
      "AKS Deployment",
      "Monitoring & Logging"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live instructor-led online training with weekday and weekend batches."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized corporate Azure DevOps training programs to accelerate delivery, strengthen security, and align teams with DevOps best practices."
  };

  const courseMetadata = {
    shortName: 'AZ-400',
    shortNameAlt: 'AZ-400',
    fullName: 'Microsoft Certified DevOps Engineer Expert (AZ-400)',
    fullNameAlt: 'Microsoft AZ-400 DevOps Solution',
    certificateName: 'Azure DevOps Engineer Expert',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your AZ-400 certification demonstrates your expertise in designing and implementing DevOps solutions on Azure, opening advanced career opportunities in cloud and automation.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Microsoft AZ-400 DevOps Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Microsoft Aligned',
      certificateType: 'Certificate of DevOps Expertise',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Azure Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "DevOps Engineers",
    "Cloud Engineers",
    "Release Managers",
    "Azure Administrators",
    "Azure Developers",
    "Automation Engineers"
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

export default MicrosoftAZDesigningImplementingMicrosoftDevOpsSolution;
