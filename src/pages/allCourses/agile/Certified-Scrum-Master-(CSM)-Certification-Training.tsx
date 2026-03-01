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

const CertifiedScrumMasterCertificationTraining = () => {
  const highlights = [
    {
      text: 'CSM Training given by Certified Scrum Trainers(CSTs) with 15+ years of experience',
    },
    {
      text: 'The CSM Certification grants 16 PDUs and SEUs',
    },
    {
      text: '16 Hours Of Interactive Live CSM Certification Training',
    },
    {
      text: 'Industry Experts Designed Curriculum',
    },
    {
      text: '2-Year Membership With Scrum Alliance Included',
    },
    {
      text: 'CSM Exam Fee Is included In CSM Course Cost',
    },
    {
      text: 'Crack the CSM Exam on Your 1st Attempt',
    },
    {
      text: 'Engage In Interactive Doubt-Clearing Sessions',
    },
    {
      text: 'Access 24/7 Support And Learning Assistance',
    },
    {
      text: 'Unlimited Retake Training for 120 Days',
    },
    {
      text: 'Interview Preparation Toolkit for Scrum Master Roles',
    },
    {
      text: 'Get 2 Free Exam Attempts',
    },
    {
      text: '20 SEUs and 20 PDUs for CSM Certification Renewal',
    },
  ];

  const individualBenefits = [
    {
      title: 'Individuals Benefits',
      description: '',
    },
    {
      title: 'Individuals Benefits',
      description:
        'Improved understanding and application of Agile and Scrum methodologies inproject management.',
    },
    {
      title: 'Individuals Benefits',
      description: '',
    },
    {
      title: 'Individuals Benefits',
      description:
        'Build on career prospects with recognised certification and practical Scrum Master skills.',
    },
    {
      title: 'Individuals Benefits',
      description: '',
    },
    {
      title: 'Individuals Benefits',
      description:
        'Increased ability to lead teams effectively through facilitation and servant leadership principles.',
    },
    {
      title: 'Individuals Benefits',
      description: '',
    },
    {
      title: 'Individuals Benefits',
      description:
        'Encouraged collaboration skills within teams, fostering a productive and positive work environment.',
    },
    {
      title: 'Individuals Benefits',
      description: '',
    },
    {
      title: 'Individuals Benefits',
      description:
        'Personal growth in adaptive problem-solving and continuous improvement mindset.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Corporate Benefits',
      description: '',
    },
    {
      title: 'Corporate Benefits',
      description:
        'Faster delivery of high-quality products through streamlined Agile practices.',
    },
    {
      title: 'Corporate Benefits',
      description: '',
    },
    {
      title: 'Corporate Benefits',
      description:
        'Improved team morale and retention with empowered and self-organizing Scrum teams.',
    },
    {
      title: 'Corporate Benefits',
      description: '',
    },
    {
      title: 'Corporate Benefits',
      description:
        'Make better transparency and visibility into project progress with Agile metrics and reporting.',
    },
    {
      title: 'Corporate Benefits',
      description: '',
    },
    {
      title: 'Corporate Benefits',
      description:
        'Increased customer satisfaction through iterative delivery and responsiveness to change.',
    },
    {
      title: 'Corporate Benefits',
      description: '',
    },
    {
      title: 'Corporate Benefits',
      description:
        'Reduced risks with early issue detection and adaptation to market demands.',
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
    'CSM certification will help improve communication between the Scrum Team members, customers, stakeholders, executives, and Product Owners.',
    'Learn to boost your risk capabilities when encountering challenges.',
    'Increase engagement with people from different backgrounds and expand your network.',
    'Upscale your efficiency to individuals or as a team member.',
  ];

  const prerequisites = [
    'A basic understanding of Agile principles and the Scrum framework',
    'Completion of a two-day (16-hour) CSM Certification training by Simpliaxis',
  ];

  const certificationSteps = [
    {
      title: 'Register',
      description:
        'Attend live Scrum training sessions provided by Certified Scrum Trainers from diverse industry verticals.',
    },
    {
      title: 'Scrum Knowledge',
      description:
        'Acquire an in-depth knowledge of Scrum with the help of a curriculum designed by globally recognized Scrum experts.',
    },
    {
      title: 'Practical Skills',
      description:
        'Gain hands-on experience by engaging in role-play exercises, Scrum activities, and real-life case studies.',
    },
    {
      title: 'CSM Exam',
      description:
        'Appear for the CSM exam comprising 50 multiple-choice questions. You’ll have to obtain a score of at least 74% to pass the exam.',
    },
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
      title: 'Advanced Scrum Knowledge:',
      description:
        'The course enhances your Scrum knowledge by exploring variation in roles, events, allowing you to fine-tune your Scrum application.',
    },
    {
      title: 'Elevated Scrum Master Role:',
      description:
        "You'll explore advanced techniques for excelling in the Scrum Master role, including fostering self-organizing teams, coaching stakeholders, and orchestrating complex Agile transformations.",
    },
    {
      title: 'Strategic Agile Implementation:',
      description:
        "Beyond the basics, you'll learn how to strategically implement Agile practices across different departments, projects, or even organizations, ensuring alignment with business goals.",
    },
    {
      title: 'Sprint Planning Excellence:',
      description:
        "You'll refine your skills in sprint planning, mastering techniques to efficiently allocate resources, manage dependencies, and set realistic sprint goals.",
    },
    {
      title: 'Enhanced Daily Scrum Facilitation:',
      description:
        'The course will elevate your Daily Scrum facilitation abilities, enabling you to guide discussions towards deeper insights, impediment removal, and better synchronisation.',
    },
    {
      title: 'Stakeholder Engagement and Sprint Review:',
      description:
        "You'll learn advanced stakeholder engagement strategies, ensuring the Sprint Review becomes a platform for meaningful collaboration, feedback incorporation, and customer satisfaction.",
    },
    {
      title: 'Leadership Through Scrum Values:',
      description:
        "You'll explore how to implement the Scrum values at an advanced level, becoming a role model for commitment, courage, focus, openness, and respect within the organization.",
    },
    {
      title: 'Real-world Application:',
      description:
        'Through intricate case studies and real-world scenarios, the course will challenge you to apply advanced Scrum concepts to complex situations, enhancing your problem-solving capabilities.',
    },
  ];

  const faqCategories = [
    {
      id: 'category_1',
      label: 'FAQ Category 1',
      items: [
        {
          question: '1. What is Certified Scrum Master (CSM) Certification?',
          answer:
            'The CSM certification is valuable for those looking to advance their careers in Scrum project management. It provides a strong foundation in the Scrum methodology and demonstrates your ability to lead Scrum teams. Completing the Certified Scrum Master course and showcasing your Scrum knowledge can make you stand out in job hunting. The certification equips you to guide Scrum teams and ensure projects are managed efficiently. The Scrum Alliance Certification, particularly the CSM qualification, demonstrates that you have the required skills and knowledge to become a top-quality Scrum professional.',
        },
        {
          question:
            '2. What are the effective preparation strategies for passing the CSM certification exam?',
          answer:
            "Here are some practical ways to complete your CSM Certification Exam Preparation-Understand its roles, events, and principles.Study the guides and materials aligned with the exam's content.Simpliaxis provides comprehensive training in Agile and Scrum.Get mock tests to evaluate your understanding.Gain hands-on experience in Scrum projects.Join workshops and discussions to apply knowledge.Understand the exam structure and topics.",
        },
        {
          question:
            '3. What are the primary differences between CSM (Certified Scrum Master) and PSM (Professional Scrum Master) certifications?',
          answer:
            'The primary differences between CSM (Certified Scrum Master) and PSM (Professional Scrum Master) certifications lie in their certifying bodies, curriculum focus, and assessment approaches.CSM, offered by Scrum Alliance, emphasizes practical application, workshops, and collaboration and requires a two-day training requirement. On the other hand, PSM, provided by Scrum.org, focuses on comprehensive Scrum knowledge through a more rigorous assessment that covers theory and practical scenarios. While CSM offers a network and community support, PSM is known for its depth and precision. The choice between the two depends on whether you value hands-on experience and community engagement (CSM) or in-depth Scrum mastery (PSM).',
        },
        {
          question:
            '4. What is the expected salary after completing Scrum Master Certification?',
          answer:
            'The average expected salary for a Scrum Master mostly depends upon some factors such as location, years of experience, and the Industries. In the United States, the average annual salary for a Scrum Master is around $90,000 to $110,000. However, salaries can range from approximately $70,000 for entry-level positions to well over $130,000 for highly experienced Scrum Masters in certain metropolitan areas.',
        },
        {
          question: '5. What are the Criteria for CSM Certification?',
          answer:
            'To obtain a CSM certification, there are no specific eligibility criteria, but having some familiarity with the Scrum framework is recommended. You will need to attend a two-day course, which is 16 hours long, and is conducted by a Certified Scrum Trainer (CST) who will provide you with an overview of supporting and organizing a Scrum team.',
        },
        {
          question: '6. What is the exam pattern for the CSM certification?',
          answer:
            "The CSM test comprises 50 multiple-choice questions that are based on the CSM Learning Objectives. Participants will have 1 hour to complete the test, and the passing score is 74%. You won't be able to pause the test, but you can bookmark questions to answer them later within the 60-minute time limit.",
        },
        {
          question: '7. Who should attend CSM Certification Training?',
          answer:
            'The CSM Certification Training is ideal for a wide range of professionals involved in product development, project management, and team leadership. Here are some of the roles that would benefit from attending certification course:Software DevelopersProduct OwnersTeam MembersProject ManagersScrum MastersAnyone interested in Agile Practices',
        },
        {
          question: '8. What is the duration of the CSM course?',
          answer:
            'To earn your CSM, you must attend a course taught by a Certified Scrum Trainer (CST) with the Scrum Alliance. The Simpliaxis CSM certification course is 16 hours long and can be attended Online or in person.',
        },
        {
          question: '9. What is the validity duration for CSM certification?',
          answer:
            'The Certified ScrumMaster (CSM) certification remains valid for a period of 2 years, after which it needs to be renewed. To renew the CSM certification, the candidate is required to pay a renewal fee of $100 and also submit 20 Scrum Educational Units (SEUs).',
        },
        {
          question: '10. Does CSM require renewal?',
          answer:
            "To maintain your CSM (Certified Scrum Master) certification, you must renew it every two years by collecting 20 SEUs (Scrum Education Units) and paying a renewal fee of $100. However, you don't need to renew your PSM (Professional Scrum Master) credential as it has lifetime validity once obtained.",
        },
        {
          question: '11. What are the benefits of CSM certification?',
          answer:
            'Having the CSM designation can enhance your CV or resume, as it signifies to prospective employers that you possess the necessary abilities, expertise, and experience required to drive beneficial organizational change, steer agile teams effectively, and fulfill the duties and responsibilities of a scrum master.',
        },
      ],
    },
    {
      id: 'category_2',
      label: 'FAQ Category 2',
      items: [
        {
          question:
            '1. What happens to my token or partial payment if I don’t enroll immediately?',
          answer:
            'Token or partial payments will become non-refundable after 15 days from the date of payment.Any token or partial amount paid can be applied towards enrollment for any available sessions on our website within 6 months of the payment date.',
        },
        {
          question:
            '2. Is there a preferred currency for payment, especially for international students?',
          answer:
            'While we accept payments in various currencies, we recommend using the currency from where you want to attend the course.',
        },
        {
          question:
            '3. Can payments be made online through your website, or do I need to visit a physical location?',
          answer:
            'Payments can be made conveniently through our secure online payment portal on our website. We do not require visiting a physical location for payment.',
        },
        {
          question:
            '4. Do you offer any discounts or promotions for early payment?',
          answer:
            'Yes, we offer discounts and promotions for early payments or certain corporate Training. Keep an eye on our website or contact us to get exciting offers.',
        },
        {
          question:
            '5. Can I pay for the course in installments, or is full payment required upfront?',
          answer:
            'You have the flexibility to pay for the course either in full upfront or in installments, depending on your preference. To know more details about it contact us.',
        },
        {
          question: '6. Will I get a refund if I cancel my enrollment?',
          answer:
            'No, refund is not possible. You can reschedule your course. To know more about refunds, visit our Refund Policy.',
        },
        {
          question: '7. Where will I get my payment receipt?',
          answer:
            'Upon successful completion of payment, you will receive a confirmation email of your payment along with payment invoices.',
        },
        {
          question: '8. Is there any transaction or processing fee?',
          answer: 'No, there is no transaction processing fee.',
        },
        {
          question: '9. What cards do you accept?',
          answer:
            'We accept payments from VISA, Master, Maestro, AMEX, and Discover.',
        },
        {
          question: '10. What payment options are available?',
          answer:
            'All types of payment methods are available. You can pay Online through Credit Cards, Debit Cards and Net Banking, Direct Bank Transfer/Wire Transfer/Wallet to our account and many more.Other payment options available are stripe, Splitit, PayPal for US & CA regions.',
        },
      ],
    },
    {
      id: 'category_3',
      label: 'FAQ Category 3',
      items: [
        {
          question:
            '1. What if I miss a class? Are there any money back options?',
          answer:
            "No, you won't get your money back. But, as per your convenience, we can reschedule your training without any extra charges.",
        },
        {
          question:
            '2. If I want to know more about Training, whom should I connect with?',
          answer:
            'If you want to know more about the course you can connect us in mail hello@simpliaxis.com or you can call us.',
        },
        {
          question:
            '3. Is there any option to complete the Training in the native language if a participant chooses to?',
          answer:
            'English is the preferred language for training delivery. For corporate Training, any language other than English will have to be requested as a custom service. However, this will be subject to additional costs and the availability of a native language trainer. Please note that only official languages will be considered for this request.',
        },
        {
          question: '4. Can I receive personalized Training at my convenience?',
          answer:
            'Yes, we’ll be posting multiple schedules every week for all the courses. Based on your convenience, you can select the training schedule. Also, we’ve E-Learning programs for popular courses, you can enroll and watch the training modules whenever you want.',
        },
        {
          question: '5. Where do I find the upcoming schedules of my course?',
          answer:
            'Select the course of your interest from the website and view all the upcoming workshop schedules. You can select your course from the website https://www.simpliaxis.com/',
        },
        {
          question:
            '6. After enrollment, can I change the date of my training class?',
          answer:
            'Yes, you can change the date, but you have to inform it 3-4 days before the Scheduled date.',
        },
        {
          question:
            '7. Do I get any certificate upon completion of the course?',
          answer:
            'Yes, you will receive a certificate after successful completion of the training course.',
        },
        {
          question: '8. How do I enroll in the training course?',
          answer:
            'Choose the course of your interest, schedule it at your convenience from our upcoming schedule list, and register for the training by submitting your details. Proceed to make a payment and you will receive a confirmation email of your course enrolment. Or you can connect our career advisors to consult & choose your course.',
        },
        {
          question: '9. What are the different courses offered by Simpliaxis?',
          answer:
            'At Simpliaxis we provide training for courses of all the in-demand technologies. One can choose a course from Project Management, Agile, IT, DevOps, Business, IT Service Management, Quality Management, etc based on their choice of interest. To know more, please visit https://www.simpliaxis.com/',
        },
        {
          question:
            '10. What are the different modes of Training available for Simpliaxis courses?',
          answer:
            'We provide different modes of Training: virtual Online Training, Live Virtual Training, Corporate Training & also E-learning.',
        },
        {
          question: '11. Do you offer online Training?',
          answer: 'Yes, For every course, online Training is available.',
        },
        {
          question: '12. Do you offer corporate Training?',
          answer:
            "Yes, we do provide corporate Training. We customize Training based on our clients' needs.",
        },
        {
          question: '13. Who are the instructors of my course?',
          answer:
            'All our trainers are highly qualified and certified, having numerous years of experience in the training industry. You can choose your instructors for your course.',
        },
        {
          question:
            '14. Is there any discount available for the Simpliaxis courses?',
          answer:
            'Yes, we do provide discounts on multiple courses. Please visit the schedules page to view the available discounts.',
        },
        {
          question:
            '15. Whom do I contact if I have more queries regarding my course?',
          answer:
            'You can reach out to our experienced career counseloror email us on support@simpliaxis.comor contact any of our phone numbersor you can chat with us anytimeor visit our contact us page https://www.simpliaxis.com/contact-us',
        },
        {
          question: '16. Are your courses affordable?',
          answer:
            'Yes, course fees for all technologies are affordable. Along with that, we do provide discounts on various courses.',
        },
        {
          question: '17. Why should I choose Simpliaxis?',
          answer:
            "Simpliaxis offers personalized corporate training programs designed for enterprise teams seeking to refine their employees' skills in various job processes or roles, whether through in-person sessions or live virtual instruction. Led by our skilled and certified trainers, these certification programs not only elevate learning curves but also empower teams to effectively apply their newfound skills to meet industry benchmarks. With over 40 certification programs available, the impact is profound, evident in a remarkable 45% improvement in employee retention rates. On average, there's been a notable 30% enhancement in both work satisfaction and capabilities, showcasing the tangible benefits of our training initiatives.",
        },
        {
          question: '18. What is the object of Simpliaxis?',
          answer:
            'To provide high-quality training and help our professional participants & clients to build a high-performing workforce.',
        },
        {
          question:
            '19. How much discount will I get if I enroll for the Training?',
          answer:
            'It totally depends upon the course. Please check our website regularly for new offers and discounts throughout the year. You can also chat with one of our career consultants to see if any discounts are available.',
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
    courseName: 'CSM Certification Training Course',
    breadcrumbName: 'Certified Scrum Master (CSM®) Certification Training',
    rating: '5.0',
    enrolledCount: '73k+',
    subtitle:
      'Join our Certified Scrum Master training with real-time Scrum simulations!',
    benefits: [
      '30+ Guaranteed Live CSM Training Sessions Every Month!',
      'Get Trained by Certified Scrum Trainers with 15+ Years of Experience!',
      'Achieve Scrum Master Certification + 2-Year Scrum Alliance Membership!',
      'CSM Certification Exam Fee Included With Our CSM Training Cost!',
      'Practice Exams, Quizzes, Interview Toolkit Included in Our CSM Course!',
    ],
    mainImage:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
    badgeImage: '/csm-badge.png',
  };

  const overviewContent = {
    title: 'Course Overview',
    subtitle: 'CSM Certification Course Overview',
    description: [
      'The CSM certification or Certified Scrum Master certification is a globally recognized entry-level credential from the Scrum Alliance validating your Scrum expertise. Simpliaxis offers 16 hours of extensive CSM certification training led by Certified Scrum Trainers , covering Scrum Master certification curriculum essentials like core Scrum concepts, Scrum Values, Principles, Empiricism and Iteration and Incremental Delivery.',
      'Participants gain proficiency in the roles and responsibilities of a Scrum Master, such as:',
      'As organisations increasingly adopt Agile methodologies, our CSM course equips you to resolve real-world scrum implementation challenges, boost team productivity, and make you stand out as a Certified ScrumMaster .',
      'Simpliaxis is a Scrum Alliance’s Registered Education Ally, ensuring you pass the CSM certification exam on your first attempt. Whether you are new to Agile or looking for upskilling, our CSM Certification Course creates a successful path to earning the Scrum Master Certification. Enroll Now and join the next generation of agile leaders!',
    ],
    whatIsTitle: '',
    whatIsDescription: [],
    whatsIncludedTitle: 'What’s Included in Our CSM Training?',
    whatsIncludedDescription: [
      'Engaging and Interactive Sessions',
      'Weekend Scrum Certification Training',
      'Mock Test Series and Quizzes',
      'Globally Valued Certificate',
      'Interview Prep Toolkit',
      'Scrum Master Handbook',
      'Scrum Master Resume Review',
      'Industry Case Studies',
    ],
    skillsTitle: 'Key Scrum Master Skills in Our CSM Course:',
    skills: [
      'Agile and Scrum Practices',
      'Agile Mindset',
      'Product Backlog Management',
      'Communication and Collaboration',
      'Conflict Resolution',
      'Sprint Planning',
      'Time-Boxing and Decision Making',
      'Servant Leadership',
      'Team Motivation and Coaching',
      'Scrum Event Facilitation',
    ],
    modesTitle: '',
    modesDescription: [],
  };

  const corporateData = {
    courseName: 'Why SimpliAxis Is the First Choice for Corporates?',
    label: '',
    buttonText: 'Corporate Group enquiry',
    description:
      'With learning targeted to your unique team environment, we at Simpliaxis help to resolve your specific issues and meet your specific needs with tailored training methods. We offer corporate training globally to keep Organizations up to date by building the knowledge gap required and make them strive in the competitive world with the right skills according to the industry needs. Preferred by many MNC’s, Startups, and Organizations among all sectors. Trusted by X clients and meet their training needs. Skilled training experts and professionals around the world with good command of the subjects. Delivering tailoring modules for your enterprises by highly qualified experts.',
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

export default CertifiedScrumMasterCertificationTraining;
