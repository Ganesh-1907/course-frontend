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

const CertifiedScrumProductOwnerCertificationTraining = () => {
  const highlights = [
    { text: '16 Hours of Live Virtual Training' },
    { text: 'Earn 16 PDUs and SEUs Credits' },
    { text: 'Sessions Led by Certified Scrum Trainers' },
    { text: 'Globally Valid Scrum Alliance Certification' },
    { text: '2-Year Professional Membership Included' },
    { text: 'Comprehensive and Structured Curriculum' },
    { text: 'Interactive Q&A and Doubt-Clearing Sessions' },
    { text: 'Dedicated Learning Support Assistance' },
  ];

  const individualBenefits = [
    {
      title: 'Expanded Career Opportunities',
      description:
        'Enhance your professional profile and qualify for high-demand leadership roles in Agile product management.',
    },
    {
      title: 'Improved Creativity',
      description:
        'Develop innovative thinking skills to transform product ideas into impactful solutions.',
    },
    {
      title: 'Competitive Edge',
      description:
        'Stand out in the job market with recognized certification and practical Agile expertise.',
    },
    {
      title: 'Efficient Backlog Management',
      description:
        'Learn structured approaches to organize and prioritize product backlogs effectively.',
    },
    {
      title: 'Advanced Analytical Skills',
      description:
        'Strengthen your ability to analyze requirements and articulate product strategies clearly.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Encourages Innovation',
      description:
        'Promotes creative thinking and strategic alignment within product development teams.',
    },
    {
      title: 'Improved Customer Satisfaction',
      description:
        'Ensures delivery of high-value features that meet customer expectations.',
    },
    {
      title: 'Enhanced Productivity',
      description:
        'Aligns teams with clear product vision and optimized backlog workflows.',
    },
    {
      title: 'Better Prioritization',
      description:
        'Helps organizations focus resources on high-impact initiatives.',
    },
    {
      title: 'Stronger Communication',
      description:
        'Establishes transparent communication channels across teams and stakeholders.',
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
    'Develop the ability to manage stakeholders effectively and align product goals with business needs.',
    'Learn to structure and prioritize a high-value product backlog.',
    'Understand Scrum principles deeply and apply them efficiently within teams.',
    'Define clear product strategies that enhance customer satisfaction.',
    'Strengthen leadership and decision-making abilities as a Product Owner.',
    'Promote collaborative teamwork and transparent communication.',
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
      title: 'Module 1: Foundations of Scrum',
      topics: [
        'Core Scrum Elements',
        'Key Terminologies in Scrum',
        'Fundamental Scrum Principles',
        'Understanding the Scrum Workflow',
        'Overview of the Scrum Framework',
      ],
    },
    {
      title: 'Module 2: Roles and Accountabilities',
      topics: [
        'Detailed Overview of Scrum Roles',
        'Responsibilities of the Scrum Master',
        'Role of the Product Owner',
        'Project Manager vs Agile Roles',
        'Agile Product Leadership',
      ],
    },
    {
      title: 'Module 3: Defining Product Vision',
      topics: [
        'Creating a Clear Product Vision',
        'Encouraging Scrum Adoption within Teams',
        'Characteristics of an Effective Product Vision',
        'Aligning Product Roadmaps with Strategic Vision',
      ],
    },
    {
      title: 'Module 4: Estimation Techniques',
      topics: [
        'Understanding Project Estimation Methods',
        'Impact of Accurate Estimation',
        'Different Estimation Levels in Scrum',
        'Measuring Estimation Accuracy',
        'Understanding Estimation Precision',
        'Sizing Techniques in Agile',
        'Difference Between Commitment and Estimation',
      ],
    },
    {
      title: 'Module 5: Managing the Product Backlog',
      topics: [
        'Fundamentals of Product Backlog Creation',
        'Backlog Refinement and Grooming Practices',
      ],
    },
    {
      title: 'Module 6: Prioritization Strategies',
      topics: [
        'Techniques for Backlog Prioritization',
        'Importance of Value-Based Prioritization',
        'Adjusting Work Sequence Effectively',
      ],
    },
    {
      title: 'Module 7: Release Planning & Management',
      topics: [
        'Effective Release Planning Methods',
        'Determining Release Frequency',
        'Maintaining Quality Standards',
        'Goals and Best Practices in Release Planning',
        'Managing Technical Debt',
        'Understanding Software Release Cycles',
        'Measuring Team Velocity',
        'Using Release Burndown Charts',
        'Forecasting with Release Plans',
      ],
    },
    {
      title: 'Module 8: Sprint Execution',
      topics: [
        'Product Owner’s Role in Scrum Ceremonies',
        'Collaboration Between Product Owner and Development Team',
        'Timeboxing and Sprint Protection',
        'Understanding Sustainable Pace',
        'Building Strong Team Commitment',
      ],
    },
  ];

  const learningObjectives = [
    {
      title: 'Master Product Ownership:',
      description:
        'Build essential skills required to manage product backlogs, prioritize effectively, and deliver customer-centric solutions.',
    },
    {
      title: 'Lead Agile Teams:',
      description:
        'Gain confidence in guiding Agile teams by setting clear goals and fostering collaboration.',
    },
    {
      title: 'Enhance Communication:',
      description:
        'Improve stakeholder interaction and ensure transparency across development cycles.',
    },
    {
      title: 'Apply Scrum Practices:',
      description:
        'Understand and implement Scrum frameworks to maximize team performance.',
    },
    {
      title: 'Strategic Planning:',
      description:
        'Develop expertise in sprint planning, roadmap creation, and release forecasting.',
    },
    {
      title: 'Risk Management:',
      description:
        'Identify potential risks early and implement strategies to minimize project disruptions.',
    },
    {
      title: 'Drive ROI:',
      description:
        'Learn to prioritize features that maximize return on investment and business value.',
    },
    {
      title: 'Accelerate Delivery:',
      description:
        'Adopt Agile techniques that enable faster and consistent product delivery.',
    },
    {
      title: 'Clarify Role Scope:',
      description:
        'Understand the responsibilities and long-term career path of a Scrum Product Owner.',
    },
  ];

  const faqCategories = [
    {
      id: 'courses',
      label: 'FAQ Courses',
      items: [
        {
          question:
            'What is Certified Scrum Product Owner (CSPO) certification?',
          answer:
            'Certified Scrum Product Owner (CSPO) is a Scrum Alliance credential designed for professionals responsible for maximizing product value. It focuses on product vision, backlog management, stakeholder collaboration, and Agile delivery.',
        },
        {
          question: 'Who should take the CSPO certification course?',
          answer:
            'The CSPO course is ideal for Product Owners, Business Analysts, Project Managers, Product Managers, Entrepreneurs, and professionals who work closely with Agile teams.',
        },
        {
          question: 'Is there an exam for CSPO certification?',
          answer:
            'No, there is no formal exam for CSPO certification. You earn the credential after successfully completing the required training delivered by a Certified Scrum Trainer (CST).',
        },
        {
          question: 'How long is CSPO certification valid?',
          answer:
            'The CSPO certification is valid for two years. Renewal requires earning Scrum Education Units (SEUs) and paying the renewal fee through Scrum Alliance.',
        },
        {
          question: 'How many SEUs and PDUs will I earn in CSPO training?',
          answer:
            'Participants typically earn 16 SEUs and 16 PDUs upon successful completion of the CSPO training program.',
        },
      ],
    },
    {
      id: 'payment',
      label: 'FAQ Payment',
      items: [
        {
          question: 'What payment options are available for CSPO training?',
          answer:
            'We accept major credit cards, debit cards, net banking, PayPal, and corporate bank transfers.',
        },
        {
          question: 'Can I pay for CSPO training in installments?',
          answer:
            'Yes, installment options may be available depending on the schedule and region. Please contact our support team for details.',
        },
        {
          question: 'Is the registration fee refundable?',
          answer:
            'Registration fees are generally non-refundable, but rescheduling options may be available according to our policy.',
        },
      ],
    },
    {
      id: 'generic',
      label: 'FAQ Generic',
      items: [
        {
          question:
            'Will I receive a certificate after completing the CSPO course?',
          answer:
            'Yes, after successfully completing the training and fulfilling Scrum Alliance requirements, you will receive your Certified Scrum Product Owner certification.',
        },
        {
          question: 'Do you provide corporate CSPO training?',
          answer:
            'Yes, we offer customized corporate CSPO training programs tailored to organizational Agile and product management needs.',
        },
        {
          question:
            'What career opportunities are available after CSPO certification?',
          answer:
            'CSPO certification can open opportunities such as Product Owner, Product Manager, Agile Business Analyst, and other product leadership roles in Agile organizations.',
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
    courseName: 'CSPO Certification Training',
    breadcrumbName:
      'Certified Scrum Product Owner (CSPO®) Certification Training',
    rating: '5.0',
    enrolledCount: '73k+',
    subtitle:
      'The Most Comprehensive Certification Course for Guaranteed Career Success',
    benefits: [
  "Guaranteed-to-Run Live Training Sessions Led by Certified Scrum Trainers",
  "16 Hours of Comprehensive Instructor-Led Learning",
  "Earn 16 PDUs and 16 SEUs Upon Completion",
  "Includes 2-Year Scrum Alliance Membership",
  "Globally Recognized CSPO Certification Credential"
],
    mainImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
    badgeImage: '/csm-badge.png',
  };

  const overviewContent = {
    title: 'Course Overview',
    subtitle: 'Complete Overview of CSPO Certification',
    description: [
      'The CSPO certification program is designed to build strong foundations in Agile product ownership and Scrum practices. Participants gain clarity on managing product backlogs, aligning stakeholder expectations, and driving product value through structured Agile methodologies.',
      'This training empowers professionals to define product vision, measure performance, and prioritize development tasks effectively. It is ideal for Business Analysts, Product Managers, and Project Leaders seeking to strengthen their expertise in Agile environments.',
      'Accredited by Scrum Alliance, this program is delivered by Certified Scrum Trainers who provide practical exposure through case discussions, simulations, and interactive learning. Earning this certification enhances credibility and opens new opportunities for professional growth.',
    ],
    whatIsTitle: 'What is CSPO Certification Training?',
    whatIsDescription: [
      'Certified Scrum Product Owner (CSPO) certification equips professionals with the knowledge and tools required to excel in the Product Owner role within Scrum teams.',
      'The course focuses on strategic decision-making, stakeholder collaboration, and effective backlog prioritization, enabling participants to deliver maximum business value.',
    ],
    whatsIncludedTitle: 'What’s Included in the CSPO Training Program?',
    whatsIncludedDescription: [
      '16 Hours of Instructor-Led Interactive Sessions',
      'Eligibility for 16 SEUs & PDUs',
      'Training by Certified Scrum Trainers (CSTs)',
      '2-Year Scrum Alliance Membership',
      'Globally Recognized Certification Credential',
      'Comprehensive Learning Resources',
      'Hands-On Workshops',
      'Structured Course Curriculum',
    ],
    skillsTitle: 'Key Skills Covered in the CSPO Course',
    skills: [
      'Advanced Stakeholder Communication',
      'Product Backlog Optimization',
      'Strategic Release Planning',
      'Agile Value-Based Planning',
      'Ownership and Decision-Making Skills',
      'Strong Understanding of Scrum Framework',
    ],
    modesTitle: 'Modes of CSPO Training Available',
    modesDescription: [
      'We offer live virtual instructor-led CSPO sessions that provide interactive learning experiences. Participants benefit from structured discussions, real-time case examples, and guided mentorship from experienced trainers.',
    ],
  };

  const corporateData = {
    courseName: 'Why Organizations Choose Our CSPO Corporate Training',
    label: 'Corporate Training Solutions',
    buttonText: 'Request Corporate Inquiry',
    description:
      'Our enterprise-focused CSPO training programs are tailored to address organizational goals and skill gaps. We deliver globally accessible corporate learning solutions designed to improve team performance and product delivery standards. Trusted by multinational corporations and growing enterprises alike, our certified trainers ensure measurable outcomes and long-term professional growth.',
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

export default CertifiedScrumProductOwnerCertificationTraining;
