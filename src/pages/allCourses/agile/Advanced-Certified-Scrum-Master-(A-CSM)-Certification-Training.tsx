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

const AdvancedCertifiedScrumMasterCertificationTraining = () => {
  const highlights = [
    { text: '16 Hours of Live Online Training' },
    { text: 'Earn 16 PDUs and SEUs' },
    { text: '2-Year Scrum Alliance Membership' },
    { text: 'Training by Certified Scrum Trainers' },
    { text: 'Global Recognition for Advanced ScrumMaster' },
  ];

  const individualBenefits = [
    {
      title: 'Improve Leadership Quality',
      description:
        'Strengthens leadership capabilities and prepares professionals to confidently guide Agile teams.',
    },
    {
      title: 'Professional Growth Advantage',
      description:
        'Enhances career value by positioning you as an advanced-level Scrum professional within your organization.',
    },
    {
      title: 'Global Recognition',
      description:
        'A-CSM is a globally recognized credential that validates advanced Scrum expertise and Agile leadership.',
    },
    {
      title: 'Enhanced Scrum Knowledge',
      description:
        'Deepens your understanding of Scrum principles, practices, and real-world Agile implementation.',
    },
    {
      title: 'Increased Earning Potential',
      description:
        'Advanced Scrum Masters often earn higher salaries due to their expertise and ability to lead high-performing teams.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Enhanced Productivity',
      description:
        'Improves organizational productivity by identifying risks early and removing workflow bottlenecks.',
    },
    {
      title: 'Stronger Team Collaboration',
      description:
        'Encourages teamwork and cross-functional collaboration essential for successful Agile delivery.',
    },
    {
      title: 'Improved Communication',
      description:
        'Promotes transparent communication across teams, stakeholders, and leadership.',
    },
    {
      title: 'High-Performance Work Environment',
      description:
        'Supports the development of high-performing Agile teams through advanced Scrum leadership.',
    },
    {
      title: 'Greater Organizational Accountability',
      description:
        'Enhances engagement, ownership, and accountability within Agile teams.',
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
    'Improve communication across Scrum Teams and stakeholders',
    'Strengthen risk management capabilities',
    'Expand professional networking opportunities',
    'Enhance team and individual productivity',
  ];

  const prerequisites = [
    'Active Certified ScrumMaster (CSM) certification',
    'Minimum 12 months of Scrum Master experience within the last five years',
  ];

  const certificationSteps = [
    {
      title: 'Attend Training',
      description:
        'Complete the 16-hour A-CSM training delivered by Scrum Alliance-accredited trainers.',
    },
    {
      title: 'Validate Experience',
      description: 'Confirm at least 12 months of Scrum Master experience.',
    },
    {
      title: 'Accept License',
      description:
        'Log in to Scrum Alliance and acknowledge the license agreement.',
    },
    {
      title: 'Download Certificate',
      description:
        'Receive and download your Advanced Certified ScrumMaster credential.',
    },
  ];

  const curriculumModules = [
    {
      title: 'Coaching Concepts',
      topics: [
        'Coaching Techniques',
        'Agile Mentoring',
        'Scrum Team Facilitation',
      ],
    },
    {
      title: 'Agile Facilitation',
      topics: [
        'Decision-Making Techniques',
        'Divergent and Convergent Thinking',
        'Managing the Groan Zone',
      ],
    },
    {
      title: 'Lean, Agile & Scrum Deep Dive',
      topics: [
        'Lean Principles',
        'Agile Values',
        'Scrum Framework Enhancements',
      ],
    },
  ];

  const learningObjectives = [
    {
      title: 'Advanced Scrum Expertise',
      description:
        'Develop deeper knowledge of Scrum methodologies and their practical applications.',
    },
    {
      title: 'Team Collaboration',
      description: 'Enhance team engagement, accountability, and performance.',
    },
    {
      title: 'Risk Management',
      description:
        'Identify risks early and apply mitigation strategies effectively.',
    },
    {
      title: 'Communication Excellence',
      description:
        'Strengthen communication across teams, stakeholders, and leadership.',
    },
  ];

  const faqCategories = [
    {
      id: 'courses',
      label: 'FAQ Courses',
      items: [
        {
          question:
            'What is an Advanced Certified ScrumMaster (A-CSM) Certification?',
          answer:
            'A-CSM is an advanced-level Scrum certification from Scrum Alliance that validates deeper knowledge of Scrum principles, Agile facilitation, coaching techniques, and team leadership skills beyond the foundational CSM level.',
        },
        {
          question: 'What are the prerequisites for A-CSM certification?',
          answer:
            'To earn A-CSM certification, you must hold an active Certified ScrumMaster (CSM) certification and have at least 12 months of Scrum Master experience within the past five years.',
        },
        {
          question: 'How long is the A-CSM certification valid?',
          answer:
            'The A-CSM certification is valid for two years. It can be renewed by earning Scrum Education Units (SEUs) and paying the renewal fee through Scrum Alliance.',
        },
        {
          question: 'Is there an exam for A-CSM certification?',
          answer:
            'No, there is no formal exam for A-CSM. Certification is awarded after completing the required training and fulfilling Scrum Alliance criteria.',
        },
      ],
    },
    {
      id: 'payment',
      label: 'FAQ Payment',
      items: [
        {
          question: 'What payment methods are available for A-CSM training?',
          answer:
            'We accept major credit cards, debit cards, net banking, PayPal, and bank transfers. Corporate participants can opt for invoice-based payments.',
        },
        {
          question: 'Can I pay in installments?',
          answer:
            'Yes, installment options may be available depending on the training schedule and region. Please contact the support team for details.',
        },
      ],
    },
    {
      id: 'generic',
      label: 'FAQ Generic',
      items: [
        {
          question:
            'Will I receive a certificate after completing A-CSM training?',
          answer:
            'Yes, once you complete the training and meet Scrum Alliance requirements, you will receive your Advanced Certified ScrumMaster certification.',
        },
        {
          question: 'Do you offer corporate A-CSM training?',
          answer:
            'Yes, we provide customized corporate training programs tailored to organizational needs.',
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
      icon: Globe,
      title: 'Global Recognition',
      description:
        'Every Course is recognized by the most reputable certification organizations globally, ensuring credibility and acceptance across all industries. Our A-CSM certification, provided by the Scrum Alliance, offers global recognition in Scrum practices.',
    },
    {
      icon: User,
      title: 'Expert Trainers',
      description:
        'Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes. Experienced CSTs deliver our Advanced Certified ScrumMaster (A-CSM) training, bringing over 15 years of experience.',
    },
    {
      icon: BookOpen,
      title: 'Flexible Learning',
      description:
        'Our Advanced Certified ScrumMaster (A-CSM) certification training offers a variety of methods of learning, such as online, 1:1 doubt clearing, and corporate Training, that meet the needs of different individuals and their schedules.',
    },
    {
      icon: Network,
      title: 'Lifetime Access',
      description:
        'Enjoy all-year access to the recordings of A-CSM training sessions, course materials, and study tools.',
    },
    {
      icon: Users,
      title: 'Proven Track Record',
      description:
        'We are a reputable training provider with extensive experience in helping professional and business organizations enhance their capabilities and achieve their career objectives. You can trust us regarding your A-CSM training needs.',
    },
    {
      icon: Laptop,
      title: 'End-to-End Assistance',
      description:
        'Vivon provides ongoing support before, during, and after training, including study materials, guidance for participants on A-CSM certification, and assistance with career choices.',
    },
    {
      icon: Headset,
      title: 'Interactive and Engaging Training',
      description:
        'Our Advanced Certified ScrumMaster (A-CSM) training sessions are designed to be highly interactive, featuring real-world scenarios with group participation and Q&A sessions to facilitate a deeper understanding of the material.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description:
        'A-CSM certification is the new and additional certification introduced by Scrum Alliance. If you are working in a Scrum Master role, it can be a skill development process that helps in your career advancement and opens up multiple opportunities.',
    },
  ];

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
    courseName: 'Advanced Certified ScrumMaster (A-CSM) Certification Training',
    breadcrumbName:
      'Advanced Certified ScrumMaster (A-CSM®) Certification Training',
    rating: '5.0',
    subtitle:
      'Advanced ScrumMaster Certification for Experienced Agile Professionals',
    benefits: [
      '16 Hours of Live Online Interactive Training',
      'Earn 16 SEUs and PDUs Upon Completion',
      'Includes 2-Year Scrum Alliance Membership',
      'Delivered by Certified Scrum Trainers (CSTs)',
      'Globally Recognized Advanced ScrumMaster Credential',
    ],
    mainImage:
      'https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif',
    badgeImage: '/csm-badge.png',
  };

  const overviewContent = {
    title: 'Course Overview',
    subtitle: 'Overview of A-CSM Certification Course',
    description: [
      'The Advanced Certified ScrumMaster (A-CSM) training program deepens your understanding of Scrum values, principles, and advanced facilitation practices. It enhances your ability to guide teams effectively and handle complex project environments.',
      'This course empowers Scrum Masters to strengthen collaboration, resolve conflicts, improve productivity, and confidently address challenging scenarios within Agile teams.',
    ],
    whatIsTitle: 'What is A-CSM Training?',
    whatIsDescription: [
      'A-CSM is an advanced-level ScrumMaster certification designed for professionals who already hold a CSM credential. It validates advanced Scrum facilitation, mentoring, and team coaching skills.',
      'This certification enables Scrum Masters to expand their Agile expertise, drive high-performing teams, and unlock better career opportunities in Agile project environments.',
    ],
    whatsIncludedTitle: 'What’s Included in Our A-CSM Training?',
    whatsIncludedDescription: [
      '16 Hours of Instructor-Led Training',
      '16 SEUs & PDUs',
      'Hands-on Scrum Activities and Case Studies',
      'Training by Experienced Certified Scrum Trainers',
      '2-Year Scrum Alliance Membership',
      'Access to the Global Scrum Community',
    ],
    skillsTitle: 'Skills Covered in the A-CSM Course',
    skills: [
      'Advanced Agile Coaching',
      'Scrum and Agile Principles',
      'Conflict Resolution & Team Facilitation',
      'Complex Problem Solving',
      'Agile Implementation Strategies',
      'Improved Decision-Making',
      'Scrum Productivity Optimization',
    ],
  };

  const corporateData = {
    courseName: 'Corporate A-CSM Training Solutions',
    buttonText: 'Corporate Group Enquiry',
    description:
      'Customized enterprise A-CSM training programs designed to enhance Agile leadership, team collaboration, and productivity across organizations.',
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
        'What are the Learning Outcomes of the CSM Certification Course?',
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
            courseName={courseMetadata.shortName}
            highlights={highlights}
          />
          <CourseCareerUpliftment
            courseName={courseMetadata.shortName}
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
            courseName={courseMetadata.shortName}
            individualBenefits={individualBenefits}
            corporateBenefits={corporateBenefits}
          />
          <CourseCommonAttendees
            courseName={courseMetadata.shortName}
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
          />
          <CourseStepByStepProcess
            courseName={courseMetadata.fullNameAlt}
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
                courseName={courseMetadata.shortNameAlt}
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

export default AdvancedCertifiedScrumMasterCertificationTraining;
