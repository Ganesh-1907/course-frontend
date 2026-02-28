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

const AgileProjectManagementCourse = () => {
  const highlights = [
    { "text": "11 weeks of training" },
    { "text": "Hands-on tools: Confluence, Jira, Smartsheet" },
    { "text": "Resume review support" },
    { "text": "LinkedIn profile optimization" },
    { "text": "Access to recruiters" },
    { "text": "Career accelerator discount" }
  ];

  const individualBenefits = [
    {
      "title": "Individual Benefits",
      "description": "Develop strong Agile and traditional project management skills."
    },
    {
      "title": "Individual Benefits",
      "description": "Gain hands-on experience with industry tools like Jira and Confluence."
    },
    {
      "title": "Individual Benefits",
      "description": "Receive career mentoring and recruiter access."
    },
    {
      "title": "Individual Benefits",
      "description": "Improve professional visibility through resume and LinkedIn reviews."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve project delivery consistency through standardized practices."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase team efficiency with Agile tools and collaboration workflows."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce project risks through better planning and governance."
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
      group: [
        'Scrum Masters',
        'Delivery Managers',
        'Product Owners',
        'Agile Coaches',
      ],
    },
    { group: ['Team Leads', 'Development Managers'] },
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
    "Understand core project management fundamentals and Agile principles",
    "Work with SDLC, Waterfall, and Agile delivery models",
    "Create stakeholder registers, project charters, and WBS structures",
    "Manage schedules, risks, and project budgets",
    "Use Jira and Confluence for Agile project execution",
    "Participate in Scrum ceremonies and backlog management",
    "Prepare for project management career opportunities"
  ];

  const prerequisites = [
    'No mandatory prerequisites are required to attend the CSPO training.',
    'Basic understanding of Scrum or Agile methodologies is beneficial but not compulsory.',
    'The course is suitable for professionals involved in product management or Agile teams.',
    'Attending training delivered by a Certified Scrum Trainer ensures proper certification eligibility.',
  ];

  const certificationSteps = [
    {
      title: 'Attend the Training',
      description:
        "Enroll in Viovn's A-CSM training, which is accredited by Scrum Alliance. Attend the 16 hours training program.",
      color: '#ff843d',
    },
    {
      title: 'Validate your Experience',
      description:
        'Authenticate your Scrum Master experience for at least 1 year or 12 months within the last five years.',
      color: '#2ecc71',
    },
    {
      title: 'License Agreement',
      description:
        "Acknowledge the welcome email sent by Scrum Alliance. You'll have to enter your credentials and log in to your account on Scrum Alliance's official website. Acknowledge the license agreement.",
      color: '#3498db',
    },
    {
      title: 'Certification',
      description:
        'Download the A-CSM certification instantly and get A-CSM certified.',
      color: '#e84393',
    },
  ];

  const curriculumModules = [
    {
      "title": "Project Management Fundamentals",
      "topics": [
        "Role of project manager",
        "Project lifecycle and failures",
        "PMP exam basics"
      ]
    },
    {
      "title": "SDLC & Waterfall",
      "topics": [
        "Project stakeholders",
        "SDLC process",
        "Knowledge areas"
      ]
    },
    {
      "title": "Integration & Scope Management",
      "topics": [
        "Project charter creation",
        "Stakeholder management",
        "Change control processes"
      ]
    },
    {
      "title": "Quality, Schedule & Testing",
      "topics": [
        "Requirements management",
        "WBS creation",
        "Testing techniques"
      ]
    },
    {
      "title": "Cost & Risk Management",
      "topics": [
        "Budget planning",
        "Risk identification and mitigation"
      ]
    },
    {
      "title": "Agile Scrum",
      "topics": [
        "Agile mindset",
        "Scrum roles and ceremonies",
        "Backlog development"
      ]
    },
    {
      "title": "Scrum Tools Masterclass",
      "topics": [
        "Jira backlog migration",
        "Sprint simulation",
        "Confluence retrospectives"
      ]
    },
    {
      "title": "Career Development",
      "topics": [
        "Resume preparation",
        "Industry panel sessions",
        "Recruiter networking"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Project Management Foundations",
      "description": "Understand project manager roles, project types, and reasons projects fail."
    },
    {
      "title": "SDLC & Waterfall",
      "description": "Learn software development lifecycle stages and project knowledge areas."
    },
    {
      "title": "Integration and Scope Management",
      "description": "Create project charters, stakeholder registers, and scope management plans."
    },
    {
      "title": "Quality and Schedule Management",
      "description": "Develop WBS, testing approaches, scheduling strategies, and estimation techniques."
    },
    {
      "title": "Cost and Risk Management",
      "description": "Build project budgets and apply risk mitigation practices."
    },
    {
      "title": "Agile Scrum Practices",
      "description": "Create product backlogs, prioritize stories, and execute Scrum ceremonies."
    },
    {
      "title": "Jira & Confluence Masterclass",
      "description": "Manage backlog, sprint planning, and retrospectives using Agile tools."
    },
    {
      "title": "Career Development",
      "description": "Improve resume, connect with recruiters, and prepare for industry roles."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "Is the class live or pre-recorded?",
          "answer": "The training is live and instructor-led with interactive sessions and practical exercises."
        },
        {
          "question": "Who should learn project management?",
          "answer": "Anyone interested in organizing teams, managing projects, and leading initiatives can benefit from project management training."
        },
        {
          "question": "What industries can project managers work in?",
          "answer": "Project managers work across IT, healthcare, finance, government, marketing, and construction industries."
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
      "title": "Get Global Recognition",
      "description": "You can gain a global CSPO certification that demonstrates your proficiency as a Product Owner and gives you a competitive edge by completing the certification training."
    },
    {
      "title": "Trained By Experienced CSTs",
      "description": "You can obtain your CSPO certification with the assistance of experienced CSTs, who have at least 15 years of expertise. Using real-world experiences, case studies, and doubt-clearing sessions makes the learning practical and helpful."
    },
    {
      "title": "Flexible Learning & Payment",
      "description": "The extensive curriculum of our CSPO course is designed to enhance your capabilities as a Product Owner. You can accomplish your project goals by using a variety of learning techniques."
    },
    {
      "title": "Access to Course Material",
      "description": "After completing Simpliaxis's CSPO certification training, participants can access course materials, videos, and study aids."
    },
    {
      "title": "Proven Track Record",
      "description": "We are the Registered Education Allies of Scrum Alliance. Our CSPO training assisted numerous companies and professionals in reaching their career objectives and enhancing their skills."
    },
    {
      "title": "End-to-End Support",
      "description": "Simpliaxis offers professionals CSPO certification training with end-to-end support. To assist you in understanding the procedure, we provide you with case studies, practical exercises, and study aids to help you know the facts."
    },
    {
      "title": "Real-World Stimulation",
      "description": "Real-world examples, group projects, and Q&A sessions are all incorporated into our dynamic CSPO training to assist learners in comprehending complex procedures."
    },
    {
      "title": "Affordable Price",
      "description": "Simpliaxis provides the most comprehensive CSPO certification training at affordable costs. We guarantee that your hard-earned investment will yield the best outcomes."
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
    "courseName": "Agile Project Management Course",
    "breadcrumbName": "Agile Project Management Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Comprehensive Agile project management training covering PMP fundamentals, SDLC, Agile Scrum, Jira, and career preparation.",
    "benefits": [
      "11 weeks of live training",
      "Hands-on tools: Jira, Confluence, Smartsheet",
      "Resume review and LinkedIn optimization",
      "Access to recruiters and industry mentors",
      "Career accelerator discount"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Agile Project Management Course Overview",
    "description": [
      "This Agile Project Management course provides structured training in project management fundamentals, SDLC, Agile methodologies, and industry tools such as Jira and Confluence.",
      "Participants learn predictive and Agile approaches, project planning, integration, scope, schedule, cost, risk, and Scrum practices through practical sessions.",
      "The program also focuses on career development with recruiter access, resume review, and industry mentorship."
    ],
    "whatIsTitle": "What is Agile Project Management Training?",
    "whatIsDescription": [
      "Agile Project Management training helps professionals plan, execute, and deliver projects using Agile principles and modern collaboration tools.",
      "It combines traditional project management foundations with Agile frameworks like Scrum to support adaptive delivery and continuous improvement."
    ],
    "whatsIncludedTitle": "What’s Included in This Course?",
    "whatsIncludedDescription": [
      "11-week instructor-led live training",
      "Hands-on practice with Jira, Confluence, and Smartsheet",
      "Resume and LinkedIn profile review",
      "Career mentoring and recruiter access",
      "Industry panel sessions"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Project management fundamentals",
      "SDLC and Waterfall processes",
      "Agile Scrum framework",
      "Stakeholder and scope management",
      "Schedule, cost, and risk management",
      "Backlog creation and prioritization",
      "Jira and Confluence usage",
      "Career preparation for PM roles"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live instructor-led online training",
      "Interactive team-based learning",
      "Hands-on practical project exercises"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Simpliaxis provides tailored corporate training programs designed to improve project delivery, Agile adoption, and workforce capability through customized learning solutions."
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

export default AgileProjectManagementCourse;
