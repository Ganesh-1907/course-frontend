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

const CertifiedScrumDeveloperCertificationTraining = () => {
  const highlights = [
    { text: 'Earn 16 SEUs and 16 PDUs' },
    { text: 'Hands-On Agile Engineering and Coding Practice' },
    { text: '2-Year Scrum Alliance Membership' },
    { text: 'Simulation-Based Scrum Learning' },
    { text: 'Expert-Led Live Sessions' },
    { text: 'Globally Recognized Certification' },
    { text: 'Flexible Live and On-Demand Options' },
    { text: '24/7 Learning Support Assistance' },
  ];

  const individualBenefits = [
    {
      title: 'Enhanced Technical Collaboration',
      description:
        'Improves teamwork and cross-functional collaboration within Agile environments.',
    },
    {
      title: 'Stronger Agile Adaptability',
      description:
        'Develop the ability to quickly adapt to changing requirements and sprint goals.',
    },
    {
      title: 'Improved Coding & Testing Skills',
      description:
        'Strengthen core development practices including testing and refactoring.',
    },
    {
      title: 'Higher Career Potential',
      description:
        'Boost earning potential with a globally recognized Scrum certification.',
    },
    {
      title: 'Increased Industry Demand',
      description:
        'CSD-certified professionals are in high demand across Agile-driven organizations.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Stronger Technical Leadership',
      description:
        'Certified developers help guide teams toward delivering stable and scalable solutions.',
    },
    {
      title: 'Market-Aligned Product Delivery',
      description:
        'Ensures development aligns closely with market and stakeholder needs.',
    },
    {
      title: 'Improved Productivity',
      description:
        'Accelerates development cycles through Agile engineering best practices.',
    },
    {
      title: 'Innovation & Creativity',
      description:
        'Encourages innovative thinking and modern software engineering approaches.',
    },
    {
      title: 'Continuous Improvement Culture',
      description:
        'Fosters a culture of ongoing technical excellence and Agile maturity.',
    },
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
    'Strengthen multi-product management capabilities',
    'Improve collaboration with diverse stakeholders',
    'Enhance customer-focused product development skills',
    'Apply advanced backlog prioritization strategies effectively',
  ];

  const prerequisites = [
    'No mandatory prerequisites are required.',
    'Basic understanding of Scrum principles is recommended.',
    'Completion of formal training by a Scrum Alliance-approved CSD trainer is required.',
  ];

  const certificationSteps = [
    {
      title: 'Attend Training',
      description:
        'Complete the required live training delivered by a Scrum Alliance-approved CSD trainer.',
    },
    {
      title: 'Demonstrate Competency',
      description:
        'Participate in practical exercises and demonstrate understanding of Agile engineering practices.',
    },
    {
      title: 'Accept License Agreement',
      description:
        'Acknowledge the certification license agreement via Scrum Alliance.',
    },
    {
      title: 'Receive Certification',
      description: 'Download your Certified Scrum Developer credential.',
    },
  ];

  const curriculumModules = [
    {
      title: 'Lean, Agile & Scrum Foundations',
      topics: [
        'Sprint Backlog Utilization',
        'Incremental Value Delivery',
        'Product Backlog Refinement',
        'Measuring Progress',
      ],
    },
    {
      title: 'Team Collaboration & Dynamics',
      topics: [
        'Effective Team Structures',
        'Stakeholder Collaboration',
        'User Interaction Benefits',
      ],
    },
    {
      title: 'Design & Architecture',
      topics: [
        'Technical Excellence',
        'Design Best Practices',
        'Scalable Architecture',
      ],
    },
    {
      title: 'Refactoring Techniques',
      topics: ['Refactoring Benefits', 'Code Improvement Strategies'],
    },
    {
      title: 'Test-Driven Development',
      topics: [
        'TDD Cycle',
        'Agile vs Traditional Testing',
        'Refactor-Test Approach',
      ],
    },
    {
      title: 'Continuous Integration',
      topics: [
        'CI Pipelines',
        'Automation in Scrum',
        'Build and Testing Automation',
      ],
    },
  ];

  const learningObjectives = [
    {
      title: 'Agile Fundamentals',
      description:
        'Understand core Scrum and Agile principles and apply them in real development scenarios.',
    },
    {
      title: 'Remove Development Impediments',
      description:
        'Identify technical blockers early and implement solutions to ensure smooth delivery cycles.',
    },
    {
      title: 'Code Ownership & Collaboration',
      description:
        'Promote shared ownership and maintain clean, maintainable codebases.',
    },
    {
      title: 'Object-Oriented Best Practices',
      description:
        'Build scalable software using structured object-oriented techniques.',
    },
    {
      title: 'Quality-Driven Development',
      description:
        'Implement testing strategies and engineering standards for reliable software delivery.',
    },
    {
      title: 'Incremental Design Approach',
      description:
        'Adopt iterative development methods to reduce rework and enhance product stability.',
    },
  ];

  const faqCategories = [
    {
      id: 'courses',
      label: 'FAQ Courses',
      items: [
        {
          question: 'Who should take the CSD course?',
          answer:
            'The CSD course is ideal for software developers, QA professionals, architects, technical leads, and Agile team members who want to strengthen their engineering practices within Scrum environments.',
        },
        {
          question: 'Is there an exam for CSD certification?',
          answer:
            'No formal exam is required for CSD certification. The credential is awarded after completing the required training and demonstrating competency during practical sessions.',
        },
        {
          question: 'How long is the CSD certification valid?',
          answer:
            'The Certified Scrum Developer (CSD) certification is valid for two years. Renewal requires earning Scrum Education Units (SEUs) and paying the renewal fee through Scrum Alliance.',
        },
        {
          question: 'How many SEUs and PDUs will I earn in CSD training?',
          answer:
            'Participants earn 16 SEUs and 16 PDUs upon successful completion of the CSD training program.',
        },
      ],
    },
    {
      id: 'payment',
      label: 'FAQ Payment',
      items: [
        {
          question: 'What payment methods are available for CSD training?',
          answer:
            'We accept major credit cards, debit cards, net banking, PayPal, and corporate bank transfers.',
        },
        {
          question: 'Can I pay in installments?',
          answer:
            'Yes, installment options may be available depending on the region and schedule. Please contact our support team for detailed payment plans.',
        },
      ],
    },
    {
      id: 'generic',
      label: 'FAQ Generic',
      items: [
        {
          question:
            'Will I receive a certificate after completing the CSD course?',
          answer:
            'Yes, after successfully completing the training and meeting Scrum Alliance requirements, you will receive your Certified Scrum Developer certification.',
        },
        {
          question: 'Do you offer corporate CSD training programs?',
          answer:
            'Yes, we provide customized corporate training solutions tailored to enterprise Agile and engineering needs.',
        },
      ],
    },
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

  const courseWhySimpliaxis =   [
    {
      "title": "Global Recognition",
      "description": "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries."
    },
    {
      "title": "Expert Trainer",
      "description": "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes."
    },
    {
      "title": "Flexible Learning",
      "description": "Provides a variety of methods of learning, such as classes, online, and corporate Training, that meet the needs of different individuals and their schedules."
    },
    {
      "title": "Lifetime Access",
      "description": "Enjoy all-year access to the recordings of sessions, course materials, and study tools."
    },
    {
      "title": "Proven Track Record",
      "description": "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities and meet their career ambitions."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Simpliaxis Offers ongoing assistance prior to, during, and after Training and includes study material exams, guidance for participants on certification, and career choices."
    },
    {
      "title": "Interactive and engaging Training",
      "description": "Our Training sessions are designed to be extremely interactive, featuring real-world scenarios with group participation, questions & answers to aid in understanding."
    },
    {
      "title": "A wide range of courses",
      "description": "Simpliaxis offers various internationally acknowledged certification courses in Agile, Scrum, SAFe, DevOps, Project Management, and more."
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
    courseName: 'Certified Scrum Developer® (CSD) Certification Training',
    breadcrumbName: 'Certified Scrum Developer (CSD®) Certification Course',
    rating: '5.0',
    enrolledCount: '48k+',
    subtitle:
      'Master Agile Engineering Practices with Hands-On Scrum Development Training',
    benefits: [
      'Guaranteed-to-Run Interactive Live Training Sessions',
      'Extensive Hands-On Coding and Agile Engineering Practice',
      'Earn 16 SEUs and 16 PDUs Upon Completion',
      'Includes 2-Year Scrum Alliance Membership',
      'Globally Recognized Certified Scrum Developer Credential',
    ],
    mainImage:
      'https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif',
    badgeImage: '/csm-badge.png',
  };

  const overviewContent = {
    title: 'Course Overview',
    subtitle: 'Certified Scrum Developer (CSD) Program Overview',
    description: [
      'The Certified Scrum Developer (CSD) certification is designed for software developers and technical professionals who want to strengthen their Agile engineering and Scrum development skills.',
      'This program focuses on hands-on coding practices, Agile engineering principles, and real-world Scrum implementation. Participants gain practical experience in delivering high-quality increments within Agile environments.',
      'The course integrates Scrum with complementary practices such as Kanban and DevOps, ensuring a comprehensive understanding of modern Agile development approaches.',
    ],
    whatIsTitle: 'What is CSD Certification?',
    whatIsDescription: [
      'CSD is a Scrum Alliance certification that validates a developer’s ability to apply Scrum principles and Agile engineering techniques in real-world software development.',
      'It demonstrates technical excellence in Agile practices, collaborative development, and quality-driven coding standards.',
    ],
    whatsIncludedTitle: 'What’s Included in CSD Training?',
    whatsIncludedDescription: [
      '16+ Hours of Live Instructor-Led Training',
      'Hands-On Coding Workshops',
      'Real-Time Scrum Simulations',
      '16 SEUs and 16 PDUs',
      '2-Year Scrum Alliance Membership',
    ],
    skillsTitle: 'Skills Covered in the CSD Course',
    skills: [
      'Agile Engineering Practices',
      'Test-Driven Development (TDD)',
      'Continuous Integration',
      'Refactoring Techniques',
      'Incremental Design',
      'Collaborative Code Ownership',
    ],
    modesTitle: 'Training Modes',
    modesDescription: [
      'CSD training is available in live virtual instructor-led format with practical coding sessions and interactive Scrum simulations.',
    ],
  };

  const corporateData = {
    courseName: 'Corporate CSD Training Solutions',
    label: '',
    buttonText: 'Corporate Group Enquiry',
    description:
      'Enterprise-focused CSD training designed to enhance Agile engineering standards, strengthen technical collaboration, and accelerate high-quality software delivery across teams.',
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

export default CertifiedScrumDeveloperCertificationTraining;
