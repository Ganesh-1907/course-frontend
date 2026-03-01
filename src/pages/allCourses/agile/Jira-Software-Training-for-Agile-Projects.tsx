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
import CourseWhySimpliaxis from "@/components/courses/CourseWhySimpliaxis";

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

const JiraSoftwareTrainingforAgileProjects = () => {
  const highlights = [
    { "text": "2-day live expert-led Jira training" },
    { "text": "Comprehensive Jira Agile project management coverage" },
    { "text": "Hands-on exercises with real-world scenarios" },
    { "text": "30-day Jira tool access" },
    { "text": "90-day retake option" },
    { "text": "Course completion certificate" },
    { "text": "24/7 post-training support" },
    { "text": "Dedicated doubt-clearing sessions" }
  ];

  const individualBenefits = [
    {
      "title": "Individual Benefits",
      "description": "Improve collaboration and team communication through shared visibility."
    },
    {
      "title": "Individual Benefits",
      "description": "Increase productivity by mastering Jira workflows and task tracking."
    },
    {
      "title": "Individual Benefits",
      "description": "Improve sprint planning and forecasting accuracy."
    },
    {
      "title": "Individual Benefits",
      "description": "Enhance accountability and clarity of roles in Agile projects."
    },
    {
      "title": "Individual Benefits",
      "description": "Support continuous improvement using Agile retrospectives and Jira insights."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Standardize Agile processes across teams for consistent delivery."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase project visibility and risk awareness."
    },
    {
      "title": "Corporate Benefits",
      "description": "Optimize resource allocation and project efficiency."
    },
    {
      "title": "Corporate Benefits",
      "description": "Scale Agile practices effectively across teams."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve delivery quality using structured workflows."
    }
  ];

  const careerStats = {
    averageIncome: '$110k-130k',
    incomeLabel: 'per annum',
    employmentGrowth: '67%',
    growthLabel: '(2022-2025)',
  };

  const attendees = [
    {
      "group": [
        "Confidently navigate Jira software interface",
        "Plan, track, and manage Agile projects effectively",
        "Improve collaboration and communication using Jira",
        "Use data-driven insights for project decision-making"
      ]
    }
  ];

  const companies = [
    {
      name: 'Amazon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Cognizant',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
    },
    {
      name: 'IBM',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
      name: 'Accenture',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    },
    {
      name: 'Wipro',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
    },
    {
      name: 'Eurofins',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg',
    },
    {
      name: 'JPMorgan',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg',
    },
  ];

  const outcomes = [
    "Understand Agile principles including Scrum and Kanban",
    "Set up and configure Jira projects effectively",
    "Use Jira boards for sprint planning and tracking",
    "Create workflows, issue types, and custom fields",
    "Generate reports and analyze project performance",
    "Improve collaboration through shared project visibility"
  ];

  const prerequisites = [
    "Basic understanding of Agile principles",
    "General project management knowledge",
    "Basic computer literacy"
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Join the Jira Agile training program from Viovn."
    },
    {
      "title": "Attend Live Sessions",
      "description": "Participate in instructor-led sessions and practical exercises."
    },
    {
      "title": "Complete Activities",
      "description": "Practice Jira project setup, boards, dashboards, and reporting."
    },
    {
      "title": "Receive Certificate",
      "description": "Get a course completion certificate after successfully completing training."
    }
  ];

  const curriculumModules = [
    {
      "title": "Introduction to Jira",
      "topics": [
        "Jira basics and navigation",
        "Project creation and configuration",
        "Product backlog and sprint setup"
      ]
    },
    {
      "title": "Working with Issues",
      "topics": [
        "Issue creation and editing",
        "Subtasks, linking, and attachments",
        "Issue lifecycle and best practices"
      ]
    },
    {
      "title": "Issue Management & Filters",
      "topics": [
        "JQL basics",
        "Saved filters and sharing",
        "Bulk issue updates and imports"
      ]
    },
    {
      "title": "Managing Jira Boards",
      "topics": [
        "Scrum, Kanban, and Scrumban boards",
        "Board customization and filters",
        "Quick filters and card layout"
      ]
    },
    {
      "title": "Dashboards & Reporting",
      "topics": [
        "Creating dashboards",
        "Adding gadgets and reports",
        "Sharing dashboards and project insights"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understanding Jira Fundamentals",
      "description": "Learn what Jira is, why it is used, and how it supports Agile project management."
    },
    {
      "title": "Using Jira for Different Roles",
      "description": "Understand how Scrum Masters, Product Owners, and Managers use Jira for project delivery."
    },
    {
      "title": "Project Creation in Jira",
      "description": "Gain hands-on experience creating and configuring projects from scratch."
    },
    {
      "title": "Scrum and Kanban Configuration",
      "description": "Learn how to configure and manage Scrum and Kanban boards for Agile teams."
    },
    {
      "title": "Sprint Boards and Planning",
      "description": "Create and manage sprint boards to improve visualization and tracking."
    },
    {
      "title": "Roadmaps and Releases",
      "description": "Build Agile roadmaps and release plans aligned with project goals."
    },
    {
      "title": "Work Item Management",
      "description": "Understand Epics, Stories, Tasks, and issue hierarchy inside Jira."
    },
    {
      "title": "Dashboards and Reporting",
      "description": "Create dashboards and reports to monitor progress and make informed decisions."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is Jira used for?",
          "answer": "Jira is a project management and issue tracking tool used for Agile project planning, task tracking, and reporting."
        },
        {
          "question": "Do I need coding skills to use Jira?",
          "answer": "No. Jira can be used effectively without coding knowledge."
        },
        {
          "question": "How long does Jira training take?",
          "answer": "This course is designed as a 2-day live instructor-led training."
        },
        {
          "question": "Is Jira suitable for Agile methodologies?",
          "answer": "Yes. Jira supports Scrum, Kanban, and scaled Agile frameworks."
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

  const courseWhySimpliaxis = [
    {
      "title": "Globally Recognized Certification",
      "description": "Our programs are endorsed by the world's most prestigious certification bodies, ensuring your credentials are valued and respected across all industries."
    },
    {
      "title": "Expert-Led Instruction",
      "description": "Gain deep insights from seasoned industry professionals who blend practical experience with real-world business wisdom in every class."
    },
    {
      "title": "Flexible Learning Formats",
      "description": "We offer versatile training formats—including virtual classrooms and corporate sessions—designed to align with your personal schedule and professional goals."
    },
    {
      "title": "Continuous Resource Access",
      "description": "Enjoy unrestricted, long-term access to all session recordings, comprehensive course materials, and advanced learning tools."
    },
    {
      "title": "Demonstrated Success",
      "description": "As a premier educational provider, we have a long history of helping individuals and enterprises enhance their capabilities and achieve their career milestones."
    },
    {
      "title": "Comprehensive Career Support",
      "description": "Viovn delivers comprehensive support at every stage, offering exam preparation, certification guidance, and career counseling both during and after your training."
    },
    {
      "title": "Interactive Workshop Experience",
      "description": "Our sessions are crafted to be highly participatory, utilizing authentic business scenarios and collaborative activities to deepen your understanding."
    },
    {
      "title": "Expansive Course Portfolio",
      "description": "Viovn provides a diverse portfolio of world-class certifications in disciplines such as Agile, Scrum, SAFe, DevOps, and Project Management."
    }
  ]

  const sidePanelSchedules = [
    {
      courseCode: 'SCM',
      courseName: 'Advanced Certified Scrum Master (A-CSM®) Training',
      dateRange: 'Feb 28 - Mar 01, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Naveen Nanjundappa',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 49,080',
      discountedPrice: 'INR 34,356',
      discountPercentage: '30',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Jira Software Training for Agile Projects",
    "breadcrumbName": "Jira Software Training for Agile Project Management",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Hands-on Jira training designed to help professionals manage Agile projects efficiently using Scrum and Kanban practices.",
    "benefits": [
      "2-day live expert-led Jira training",
      "Hands-on exercises with real-world Agile scenarios",
      "30-day Jira tool access",
      "90-day retake option",
      "Course completion certificate from Viovn"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Jira Agile Training Course Overview",
    "description": [
      "Mastering Jira for Agile Projects is a comprehensive program designed to help professionals manage Agile workflows effectively using Atlassian Jira.",
      "The training covers project creation, Scrum and Kanban configuration, roadmaps, dashboards, reporting, and Agile tracking practices.",
      "Participants gain practical exposure through hands-on exercises and real-world project scenarios, enabling confident usage of Jira in Agile environments.",
      "The course includes post-training support, doubt-clearing sessions, and certification guidance."
    ],
    "whatIsTitle": "What is Jira Training?",
    "whatIsDescription": [
      "Jira training helps professionals build project management and issue tracking skills using Jira software.",
      "Participants learn installation, configuration, workflow management, and Agile project tracking to improve team collaboration and delivery efficiency."
    ],
    "whatsIncludedTitle": "What’s Included in Our Jira Training?",
    "whatsIncludedDescription": [
      "2-day live instructor-led training",
      "Learning from certified Jira professionals",
      "Hands-on exercises and real-world scenarios",
      "30-day Jira tool access",
      "90-day retake option",
      "1:1 doubt-clearing sessions",
      "24/7 post-class support",
      "Course completion certificate"
    ],
    "skillsTitle": "Skills Covered in Jira Training",
    "skills": [
      "Understanding Jira fundamentals",
      "Jira configuration and workflow management",
      "Creating Scrum and Kanban boards",
      "Sprint planning and backlog management",
      "Dashboards and reporting",
      "Data analysis and project tracking",
      "Agile project collaboration using Jira"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live online instructor-led training",
      "Interactive e-learning modules with guided exercises",
      "Corporate training programs customized for teams"
    ]
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn delivers specialized Jira training solutions tailored to your team's needs, enhancing project visibility, workflow efficiency, and overall Agile execution."
  };

  const courseMetadata = {
    shortName: 'CSM',
    shortNameAlt: 'A-CSM',
    fullName: 'Advanced Certified Scrum Master (A-CSM®)',
    fullNameAlt: 'Advance Certified Scrum Master (A-CSM)',
    certificateName: 'Advanced Scrum Master',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Certified Scrum Master® Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Advanced Scrum Master Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scrum Alliance',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    'Scrum Masters',
    'Team Leads',
    'Development Managers',
    'Delivery Managers',
    'Product Owners',
    'Agile Coaches',
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
              <CourseWhySimpliaxis features={courseWhySimpliaxis} />
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

export default JiraSoftwareTrainingforAgileProjects;
