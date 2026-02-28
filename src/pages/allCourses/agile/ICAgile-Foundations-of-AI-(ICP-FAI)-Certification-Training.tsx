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

const ICAgileFoundationsOfAICertificationTraining = () => {
  const highlights = [
    { "text": "14-hour immersive instructor-led training" },
    { "text": "Earn 14 PDUs on completion" },
    { "text": "Clear understanding of fundamental AI concepts" },
    { "text": "Learn ethical and responsible AI practices" },
    { "text": "Practical AI application exposure" },
    { "text": "Guidance from experienced trainers" },
    { "text": "Globally recognized AI certification" },
    { "text": "Continuous learner support" }
  ];

  const individualBenefits = [
    {
      "title": "Individuals Benefits",
      "description": "Build a strong non-technical understanding of Artificial Intelligence and its practical applications."
    },
    {
      "title": "Individuals Benefits",
      "description": "Make smarter work decisions using AI-driven insights and problem-solving approaches."
    },
    {
      "title": "Individuals Benefits",
      "description": "Develop awareness of AI ethics, bias, and data privacy for responsible usage."
    },
    {
      "title": "Individuals Benefits",
      "description": "Gain practical exposure to AI use cases and prompt techniques for day-to-day work."
    },
    {
      "title": "Individuals Benefits",
      "description": "Strengthen career readiness with a globally recognized ICAgile AI certification."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Build an AI-ready workforce with shared foundational understanding."
    },
    {
      "title": "Corporate Benefits",
      "description": "Align AI initiatives with business goals and strategic priorities."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce risks related to ethics, compliance, and AI governance."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve collaboration between business and technical teams through shared AI knowledge."
    },
    {
      "title": "Corporate Benefits",
      "description": "Accelerate digital transformation by identifying meaningful AI opportunities."
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
        "Recognize ethical and responsible AI practices",
        "Identify AI opportunities aligned with business goals",
        "Collaborate effectively with AI and technical teams",
        "Understand AI concepts and terminology clearly",
        "Apply AI thinking in Agile and non-Agile environments"
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
    "Recognize ethical and responsible AI practices",
    "Identify AI opportunities aligned with organizational goals",
    "Communicate effectively with technical and AI teams",
    "Understand core AI terminology and concepts",
    "Apply AI thinking within business and Agile contexts"
  ];

  const prerequisites = [
    'A basic understanding of Agile principles and the Scrum framework',
    'Completion of a two-day (16-hour) CSM Certification training by Simpliaxis',
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Enroll in the ICAgile-authorized ICP-FAI training program."
    },
    {
      "title": "Gain Practical Understanding",
      "description": "Participate in case studies, discussions, and practical learning exercises."
    },
    {
      "title": "Complete Activities",
      "description": "Successfully finish all required learning exercises and assignments."
    },
    {
      "title": "Receive Certification",
      "description": "Earn the ICAgile ICP-FAI certification issued directly by ICAgile."
    }
  ];

  const curriculumModules = [
    {
      title: 'Agile and Scrum Introduction',
      topics: [
        'Agile Manifesto',
        '12 Guidelines',
        'Four values',
        '5 Scrum Values: the Scrum Foundations',
        "Describe the Agile Manifesto's 12 principles and 4 ideals",
        'Show how "responding to change" in Agile is preferable than "following a plan" in conventional project management',
        'Describe the connections between the Scrum artefacts, events, and roles and the Scrum values (courage, focus, commitment, respect, and openness)',
        'The three Scrum pillars of Transparency, Inspection, and Adaptation should be listed and explained',
        'Identify the distinctions between a framework and a methodology, and explain why Scrum is referred to as a framework',
        'Describe 5 approaches to adopting an agile mentality',
        'Give two examples of how Agile and Scrum differ from one another and why the two phrases should not be used interchangeably',
      ],
    },
    {
      title: 'Three Scrum Roles',
      topics: [
        'Roles and difficulties of scrum masters',
        'Obligations and tasks of the product owner',
        'Roles and duties of the Development Team.',
        'Make a list of three strategies to enhance performance and turnaround time.',
        'Describe the duties that a Scrum Master and a Product Owner have.',
        'Explain why the roles of a Scrum Master and a product owner should not overlap by listing three contrasts between them.',
        'Talk about the role of the product owner as a bridge between the development team and the stakeholders.',
        'Emphasise why a Scrum Master facilitates rather than actively participates in Scrum activities and ceremonies.',
        'List three drawbacks of having a development team of fewer than three or more than ten people.',
      ],
    },
    {
      title: 'Scrum traditions',
      topics: [
        'Planned a sprint.',
        'Daily Scrum',
        'Reviewing Sprint.',
        'Sprint Evaluation.',
        'An explanation of sprint planning, daily scrum, sprint review, and retrospectives should be explained.',
        "Recognize the rationale behind a sprint's fixed scope and time limit.",
        'Give three approaches to prevent spillover from the sprint backlog.',
        'Discuss the five advantages of having a sprint objective and define sprint goals.',
        'Recognise the manner in which the Product Owner and Scrum Master should coordinate with the team and provide five suggestions for enhancing these interactions.',
        'Talk about the three negative effects of sprint cancellation and how to prevent it.',
        'List 10 sprint anti-patterns and understand how they affect delivery and turnaround time (examples: sprint cancellation, variable sprint length).',
      ],
    },
    {
      title: 'Scrum Objects',
      topics: [
        'Backlog for products.',
        'Sprint Backlog',
        'Increment in the Products',
        'Examples of key characteristics of a well-formed product backlog, such as estimated and prioritized.',
        'Talk about two duties that the development team, scrum master, and product owner have while building and maintaining a product backlog.',
        'Purpose of having a product backlog and the best methods for refining the product backlog.',
        'Discuss and analyze the optimal amount of time and resources to devote to refining the product backlog.',
        'Showcase three activities that take place during a sprint review, such as the budget, timeline, and release plan.',
        'List five anti-patterns for sprint reviews (such delayed acceptance) and their detrimental effects.',
      ],
    },
    {
      title: 'Sprint Performing',
      topics: [
        'Planning for Sprint Execution',
        'Management of flow',
        'Resolution conferences',
        'Communication (task board, story point-based sprint burndown chart, hours of effort)',
        'Describe the differences between daily standups and resolution meetings.',
        'Describe the advantages of working with product owners.',
        'List 3 drawbacks of excessive product owner collaboration.',
        'Give 3 examples of how to remove obstacles and work together.',
        'Create a sprint burndown chart and demonstrate it.',
        'Explain 3 methods the team can use to become more effective.',
      ],
    },
    {
      title: 'Examinations for sprints and scrum Daily basis',
      topics: [
        'Maintain Daily Scrum Activity.',
        'Sprint retrospective activities.',
        "Describe the significance of the daily scrum meetings' 15-minute time limit.",
        'Give three contrasts between daily stand-ups and typical meetings.',
        'Describe the two roles that the Product Owner, Development team, and Scrum Master perform in daily scrum.',
        'List two duties that the development team, product owner, and scrum master have at the sprint retrospective.',
      ],
    },
    {
      title: 'Guidelines for Acceptance and the Definition of Done (DoD)',
      topics: [
        'A feature\'s (user narrative or product backlog item) definition of "Done"',
        'Explanation of done for a sprint',
        'Definition of done for a release',
        'Defining done versus accepting standards',
        'Done-Done vs Done',
        'Describe the three stages of "definition of done": user story (building code, for example), sprint, and release (creating release notes, for example).',
        'Describe three advantages of the Definition of Done and why it can change over time.',
        'Create a wish list for the DoD (with a minimum of 7 items).',
        'Mention three dangers that a weak DoD poses.',
        'List the top 5 qualities of effective acceptance criteria.',
        'Recognise who should participate in creating the admission criteria.',
        'List three consequences of not adhering to the acceptance criteria.',
      ],
    },
    {
      title: 'Ready definition',
      topics: [
        'Explanation of Ready for user story',
        'Get the definition of Ready for sprint',
        'Make a comprehensive list of the Definition of Done.',
        'List three consequences of a poorly constructed Definition of Done.',
        'List at least three advantages of having a common Definition of Done for teams working on the same product backlog.',
        'Give two suggestions for enhancing the term done.',
        'Distinguish between "done" and "done done".',
      ],
    },
    {
      title: 'Release Strategy',
      topics: [
        'About release planning',
        'Those involved in the release planning',
        'Releasing planned steps',
        'Results of the Release Planning',
        'Define and comprehend the release planning process.',
        'Give three advantages of a well-planned release.',
        'Describe three release planning outcomes.',
      ],
    },
    {
      title: 'Burndown chart for a sprint',
      topics: [
        'Definition',
        'Why and when to utilise a sprint burndown chart',
        'data obtained from the sprint burndown chart.',
        'Understand and define the sprint burndown chart.',
        'Identify the top 3 uses for burndown charts.',
        'Find out how to make a burndown chart and how to calculate it.',
        'Describe the process for modifying upcoming sprints depending on the burndown.',
        'List three important facts you learned from a burndown chart.',
        "Give a burndown chart's 5 benefits and 2 drawbacks.",
        'Recognise the five typical mistakes that cause burndown charts to contain inaccurate information.',
      ],
    },
    {
      title: 'Diagram for release burn-up',
      topics: [
        'Definition of burn-up chart',
        'Features about it',
        'How to create a determined burn-up chart (steps)',
        'Recognise the significance of having a release goal (based on prior experience and consensus).',
        'Explain the significance of release burn-up in figuring out the situation as it is.',
        'Compare and contrast burndown and burn-up charts in two ways.',
        'Describe how to modify release planning, if necessary, in light of the fire down.',
        'Give one main reason why a burnup chart is preferable than a burndown chart.',
      ],
    },
    {
      title: 'Product Management',
      topics: [
        'Recognise the significance of having a release goal (based on prior experience and consensus).',
        'How to plan a product.',
        'How to define product vision.',
        'How to build a backlog for products.',
        'A product roadmap.',
        'Minimum Marketable Features, also known as Minimum Releasable Features.',
        'Low-Risk Products.',
        'Learnings about Product',
        'Planning & implementation about product',
        'RoadMap of the product',
      ],
    },
    {
      title: 'User Stories',
      topics: [
        'How do user stories work',
        'User story elaboration and format',
        'INVEST standards',
        "Explain the definition of a user story, why it's important, and how it fits into real-world initiatives.",
        'Describe the three Cs of user stories.',
        'Describe the significance of acceptance criteria and provide three possible outcomes when they are not satisfied.',
      ],
    },
    {
      title: 'Agility in estimation',
      topics: [
        'Definition of Agile Estimation',
        'Benefits of it.',
        'Agile estimation Process.',
        'Give five advantages of agile estimation, with examples.',
        'Decide which of the seven widely used Agile estimating approaches is appropriate for your project by understanding them all.',
        'Discuss three advantages of Planning Poker and Relative Estimation.',
        'List three mistakes people often make while utilising relative estimation, along with their consequences.',
        'Talk in depth about the five essential steps in planning poker.',
      ],
    },
  ];

  const learningObjectives = [
    {
      "title": "Understand AI Fundamentals",
      "description": "Develop a clear understanding of Artificial Intelligence concepts, technologies, and real-world applications."
    },
    {
      "title": "Recognize Ethics and Bias in AI",
      "description": "Identify ethical risks, bias, and fairness challenges in AI systems and learn responsible approaches."
    },
    {
      "title": "Learn Prompt Engineering Basics",
      "description": "Build skills to create effective prompts for better AI interaction and output quality."
    },
    {
      "title": "Apply Agile Thinking to AI",
      "description": "Understand how Agile principles support iterative and value-driven AI implementation."
    },
    {
      "title": "Align AI with Business Goals",
      "description": "Connect AI initiatives to organizational strategy and measurable business outcomes."
    },
    {
      "title": "Explore Real-World AI Applications",
      "description": "Understand practical AI use cases such as automation, analytics, and decision support."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is ICAgile ICP-FAI Certification?",
          "answer": "ICP-FAI is an ICAgile certification that provides foundational understanding of Artificial Intelligence concepts, ethics, and business applications."
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
    "courseName": "ICAgile Foundations of AI (ICP-FAI) Certification Training",
    "breadcrumbName": "ICAgile Foundations of AI (ICP-FAI) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Foundational AI literacy program focused on responsible adoption, ethics, and practical business applications.",
    "benefits": [
      "14 hours of immersive live instructor-led ICAgile Foundations of AI training",
      "Understand core Artificial Intelligence concepts in a clear, practical way",
      "Learn ethical, responsible, and bias-aware AI practices",
      "Connect AI capabilities to real business value",
      "Earn a globally trusted ICAgile ICP-FAI credential"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of ICAgile Foundations of Artificial Intelligence (ICP-FAI) Certification Training",
    "description": [
      "The ICAgile Foundations of Artificial Intelligence (ICP-FAI) Certification Training is designed to build foundational AI literacy for professionals. The program focuses on understanding AI concepts, practical applications, ethical considerations, and organizational adoption strategies to help individuals and teams use AI responsibly and effectively."
    ],
    "whatIsTitle": "What Is ICP-FAI Certification?",
    "whatIsDescription": [
      "The ICP-FAI certification is an internationally recognized ICAgile credential that introduces professionals to the fundamentals of Artificial Intelligence. The course focuses on AI concepts, responsible usage, and practical adoption within Agile and business environments."
    ],
    "whatsIncludedTitle": "What’s Included in ICP-FAI Certification Training",
    "whatsIncludedDescription": [
      "ICAgile-authorized official learning content",
      "Instructor-led sessions using real-world AI examples",
      "Interactive discussions and applied learning activities",
      "Globally recognized ICP-FAI credential",
      "Practical guidance on AI ethics and adoption",
      "AI literacy development for modern workplaces"
    ],
    "skillsTitle": "Skills Covered in ICP-FAI Training",
    "skills": [
      "AI fundamentals and key concepts",
      "Ethics and responsible AI usage",
      "Bias and fairness in AI systems",
      "Data governance, compliance, and privacy",
      "Prompt engineering fundamentals",
      "Writing effective prompts",
      "Understanding prompt quality differences",
      "Agile mindset applied to AI initiatives",
      "Core components of the AI ecosystem",
      "Evolution of Artificial Intelligence",
      "Cross-functional collaboration for AI adoption",
      "Business value creation through AI",
      "Aligning AI initiatives with strategy",
      "Applying AI in real-world scenarios"
    ],
    "modesTitle": "Training Modes Available",
    "modesDescription": [
      "Training is delivered through live instructor-led virtual sessions and customized corporate programs. These flexible options help individuals and enterprise teams develop practical AI literacy skills."
    ]
  };

  const corporateData = {
    "courseName": "Why SimpliAxis Is Preferred by Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "SimpliAxis provides corporate learning solutions designed to help organizations build AI literacy, reduce adoption risk, and enable teams to apply AI responsibly for measurable business impact."
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

export default ICAgileFoundationsOfAICertificationTraining;
