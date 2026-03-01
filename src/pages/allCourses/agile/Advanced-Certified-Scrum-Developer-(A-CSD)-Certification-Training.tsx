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

const AdvancedCertifiedScrumDeveloperCertificationTraining = () => {
  const highlights = [
    { text: '16 Hours of Advanced Product Owner Training' },
    { text: 'Earn 16 SEUs and PDUs' },
    { text: 'Real-World Agile Product Simulations' },
    { text: 'Lifetime Trainer Support via Email' },
    { text: 'Delivered by Certified Scrum Trainers' },
    { text: 'Access to Premium Learning Materials' },
  ];

  const individualBenefits = [
    {
      title: 'Enhanced Product Expertise',
      description:
        'Deepens understanding of advanced product ownership and Agile product strategy.',
    },
    {
      title: 'Expanded Career Opportunities',
      description:
        'Opens doors to senior Product Owner and leadership roles in Agile organizations.',
    },
    {
      title: 'Professional Differentiation',
      description:
        'Distinguishes you from peers with advanced-level Scrum Product Owner credentials.',
    },
    {
      title: 'Scrum Alliance Membership',
      description:
        'Gain access to the global Scrum community and exclusive member resources.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Improved Product Quality',
      description:
        'Helps organizations deliver higher-value, customer-centric products.',
    },
    {
      title: 'Stronger Leadership',
      description:
        'Enhances leadership capabilities within Agile product teams.',
    },
    {
      title: 'Streamlined Communication',
      description:
        'Improves coordination between stakeholders, product teams, and leadership.',
    },
    {
      title: 'Risk Mitigation',
      description:
        'Enables early identification and resolution of product risks.',
    },
    {
      title: 'Continuous Improvement Culture',
      description:
        'Encourages iterative growth and value-driven product development.',
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
    'Active Certified Scrum Product Owner (CSPO) certification',
    'Minimum 12 months of Product Owner experience within the last five years',
  ];

  const certificationSteps = [
    {
      title: 'Enroll in Training',
      description:
        'Register for the 16-hour A-CSPO training delivered by a Scrum Alliance-approved education partner.',
    },
    {
      title: 'Demonstrate Scrum Knowledge',
      description:
        'Actively participate and demonstrate advanced Scrum Product Owner understanding.',
    },
    {
      title: 'Accept License Agreement',
      description:
        'Acknowledge the Scrum Alliance license agreement upon course completion.',
    },
    {
      title: 'Receive Certification',
      description:
        'Download your Advanced Certified Scrum Product Owner credential.',
    },
  ];

  const curriculumModules = [
    {
      title: 'Advanced Product Owner Skills',
      topics: [
        'Stakeholder Collaboration',
        'Multi-Team Product Ownership',
        'Role Clarity and Accountability',
      ],
    },
    {
      title: 'Strategic Product Planning',
      topics: [
        'Advanced Product Forecasting',
        'Outcome vs Output Differentiation',
      ],
    },
    {
      title: 'Customer-Centric Development',
      topics: ['Product Discovery', 'User Research and Empathy'],
    },
    {
      title: 'Business Value Validation',
      topics: [
        'Sprint Reviews and Evaluation',
        'Hypothesis Testing',
        'ROI Optimization',
      ],
    },
    {
      title: 'Advanced Backlog Techniques',
      topics: [
        'Backlog Refinement Strategies',
        'Value-Based Ordering',
        'Defining Measurable Value',
      ],
    },
  ];

  const learningObjectives = [
    {
      title: 'Advanced Product Ownership',
      description:
        'Master advanced responsibilities of a Product Owner and collaborate efficiently with cross-functional teams.',
    },
    {
      title: 'Backlog Optimization',
      description:
        'Apply modern prioritization and refinement techniques to maximize product value.',
    },
    {
      title: 'Customer Validation',
      description:
        'Validate assumptions through hypothesis-driven development and user feedback.',
    },
    {
      title: 'Strategic Product Planning',
      description:
        'Develop sustainable product strategies and forecasting techniques.',
    },
    {
      title: 'Value-Driven Decision Making',
      description: 'Focus on measurable outcomes and ROI-based prioritization.',
    },
  ];

  const faqCategories = [
    {
      id: 'courses',
      label: 'FAQ Courses',
      items: [
        {
          question:
            'What is Advanced Certified Scrum Product Owner (A-CSPO) certification?',
          answer:
            'A-CSPO is an advanced Scrum Alliance certification designed for experienced Product Owners. It focuses on strategic backlog management, stakeholder alignment, value optimization, and advanced product ownership skills.',
        },
        {
          question: 'What are the prerequisites for A-CSPO certification?',
          answer:
            'To earn A-CSPO certification, you must hold an active Certified Scrum Product Owner (CSPO) certification and have at least 12 months of Product Owner experience within the past five years.',
        },
        {
          question: 'Does A-CSPO certification expire?',
          answer:
            'Yes, A-CSPO certification is valid for two years and must be renewed by earning Scrum Education Units (SEUs) and paying the renewal fee.',
        },
        {
          question: 'What skills are covered in A-CSPO training?',
          answer:
            'The training covers advanced backlog refinement, product strategy, stakeholder collaboration, customer validation, value-based prioritization, and scaling Agile practices.',
        },
      ],
    },
    {
      id: 'payment',
      label: 'FAQ Payment',
      items: [
        {
          question: 'What payment options are available for A-CSPO training?',
          answer:
            'We accept credit cards, debit cards, net banking, PayPal, and corporate bank transfers.',
        },
        {
          question: 'Is the registration fee refundable?',
          answer:
            'Registration fees are generally non-refundable, but rescheduling options may be available based on policy.',
        },
      ],
    },
    {
      id: 'generic',
      label: 'FAQ Generic',
      items: [
        {
          question:
            'Will I receive a certificate after completing A-CSPO training?',
          answer:
            'Yes, after completing the training and fulfilling Scrum Alliance requirements, you will receive your Advanced Certified Scrum Product Owner certification.',
        },
        {
          question: 'Do you provide corporate A-CSPO training?',
          answer:
            'Yes, we offer enterprise-focused A-CSPO training tailored to organizational product and Agile needs.',
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

  const courseWhySimpliaxis = [
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
    courseName:
      'Advanced Certified Scrum Product Owner (A-CSPO) Certification Training',
    breadcrumbName:
      'Advanced Scrum Product Owner (A-CSPO®) Certification Course',
    rating: '5.0',
    enrolledCount: '73k+',
    subtitle:
      'Advance Your Product Ownership Expertise with Strategic Agile Leadership',
    benefits: [
      'Guaranteed-to-Run Live Sessions by Certified Scrum Trainers',
      'Earn 16 SEUs and PDUs Upon Completion',
      'Hands-On Learning with Real-World Case Studies and Simulations',
      'Includes 2-Year Scrum Alliance Membership',
      'Globally Recognized Advanced CSPO Certification',
    ],
    mainImage:
      'https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif',
    badgeImage: '/csm-badge.png',
  };

  const overviewContent = {
    title: 'Course Overview',
    subtitle: 'Advanced CSPO Certification Program Overview',
    description: [
      'The Advanced Certified Scrum Product Owner (A-CSPO) training focuses on maximizing business value through strategic backlog optimization and effective stakeholder alignment. This program strengthens your ability to deliver high-impact products in Agile environments.',
      'The globally recognized A-CSPO credential enhances your professional credibility and positions you as an advanced-level Product Owner capable of handling complex products and cross-functional teams.',
      'Upon completion, participants gain expertise in defining product vision, validating assumptions, managing stakeholder expectations, and delivering measurable business outcomes.',
    ],
    whatIsTitle: 'What is A-CSPO Certification?',
    whatIsDescription: [
      'A-CSPO is an advanced-level Scrum Product Owner certification designed for professionals who already hold a CSPO credential.',
      'It validates advanced product ownership capabilities, including backlog refinement, strategic alignment, value-driven decision-making, and customer-centric product development.',
    ],
    whatsIncludedTitle: 'What’s Included in A-CSPO Training?',
    whatsIncludedDescription: [
      '16 Hours of Live Instructor-Led Training',
      '16 SEUs & PDUs',
      'Practical Exercises and Product Simulations',
      'Interactive Group Discussions',
      '2-Year Scrum Alliance Membership',
    ],
    skillsTitle: 'Skills Covered in the A-CSPO Course',
    skills: [
      'Advanced Product Backlog Management',
      'Stakeholder Collaboration Strategies',
      'Product Vision and Roadmap Alignment',
      'Value-Based Prioritization',
      'Customer Research and Product Discovery',
      'Business Value Validation Techniques',
    ],
    modesTitle: 'Training Modes',
    modesDescription: [
      'A-CSPO certification is delivered through interactive live virtual sessions conducted by Certified Scrum Trainers. The program includes collaborative activities, case studies, and practical product simulations.',
    ],
  };

  const corporateData = {
    courseName: 'Corporate A-CSPO Training Solutions',
    label: '',
    buttonText: 'Corporate Group Enquiry',
    description:
      'Customized enterprise A-CSPO training designed to strengthen product strategy, improve stakeholder collaboration, and maximize business value across Agile teams.',
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

export default AdvancedCertifiedScrumDeveloperCertificationTraining;
