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

const BehaviourDrivenDevelopmentBDDTraining = () => {
  const highlights = [
    { text: "Hands-on Learning with Exercises, Quizzes, Case Studies & Projects", icon: <Briefcase className="w-5 h-5" /> },
    { text: "Course Content Designed by Industry Specialists", icon: <Award className="w-5 h-5" /> },
    { text: "Earn 16 PDUs and 16 SEUs", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Practical Experience in Writing Real BDD Feature Files", icon: <FileText className="w-5 h-5" /> },
    { text: "Training by Certified Experts with Real Industry Experience", icon: <Users className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Improved Collaboration",
      "description": "Work effectively with developers, testers, and business stakeholders using shared language."
    },
    {
      "title": "Better Requirement Clarity",
      "description": "Translate business requirements into clear, executable specifications."
    },
    {
      "title": "Enhanced Test Automation Skills",
      "description": "Learn to automate acceptance criteria using Cucumber and Gherkin."
    },
    {
      "title": "Faster Feedback Cycles",
      "description": "Improve product quality through early and continuous validation."
    },
    {
      "title": "Career Advancement",
      "description": "Strengthen your profile in Agile testing and automation roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Improved Product Quality",
      "description": "Reduce defects through better collaboration and shared understanding."
    },
    {
      "title": "Clear Documentation",
      "description": "Create living documentation through executable specifications."
    },
    {
      "title": "Reduced Rework",
      "description": "Minimize misunderstandings between business and technical teams."
    },
    {
      "title": "Faster Delivery",
      "description": "Enable quicker release cycles through automated scenario testing."
    },
    {
      "title": "Stronger Agile Adoption",
      "description": "Align development practices with Agile and DevOps principles."
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
        "Automation Test Engineers",
        "Software Developers",
        "QA Professionals",
        "Business Analysts",
        "Product Owners",
        "Agile Team Members"
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
    "Understand core principles of Behaviour Driven Development.",
    "Write effective Gherkin feature files.",
    "Automate BDD scenarios using Cucumber.",
    "Conduct Example Mapping and Discovery Workshops.",
    "Improve collaboration between business and technical teams."
  ];

  const prerequisites = [
    "Basic knowledge of software development lifecycle.",
    "Understanding of Object-Oriented Programming concepts.",
    "Experience in automation testing frameworks is recommended."
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete the Behaviour Driven Development (BDD) training program.",
      "color": "#3B82F6"
    },
    {
      "title": "Participate Actively",
      "description": "Engage in practical exercises, case studies, and scenario writing.",
      "color": "#10B981"
    },
    {
      "title": "Complete Project Work",
      "description": "Submit the required practical assignment or project.",
      "color": "#F59E0B"
    },
    {
      "title": "Receive Certification",
      "description": "Earn your BDD course completion certificate with lifetime validity.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      "title": "Behaviour Driven Development (BDD) Certification Training",
      "topics": [
        "Introduction to BDD",
        "Principles and Practices of BDD",
        "Differences Between TDD and BDD",
        "BDD in Agile Environments",
        "Introduction to Cucumber",
        "Gherkin Syntax: Features and Scenarios",
        "Translating Requirements into Executable Specifications",
        "Example Mapping & Discovery Workshops",
        "Scenario Writing Techniques",
        "Automating BDD Scenarios"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Executable Specifications",
      "description": "Convert business requirements into executable Gherkin scenarios."
    },
    {
      "title": "Collaboration Enhancement",
      "description": "Improve communication across cross-functional teams."
    },
    {
      "title": "Automation Skills",
      "description": "Implement automated testing using Cucumber."
    },
    {
      "title": "Agile Alignment",
      "description": "Integrate BDD practices within Agile frameworks."
    },
    {
      "title": "Quality Improvement",
      "description": "Deliver higher quality software through continuous validation."
    }
  ];

  const faqCategories = [
  {
    "id": "category_1",
    "label": "Certification & Course FAQs",
    "items": [
      {
        "question": "What is Behaviour Driven Development (BDD)?",
        "answer": "Behaviour Driven Development (BDD) is an Agile software development practice that enhances collaboration between developers, testers, and business stakeholders. It uses a shared language (Gherkin) to write executable specifications that define application behavior."
      },
      {
        "question": "Who should attend the BDD Training?",
        "answer": "This course is ideal for Automation Test Engineers, Developers, QA Professionals, Business Analysts, Product Owners, and Agile team members who want to improve collaboration and automate acceptance criteria."
      },
      {
        "question": "Are there any prerequisites for BDD Training?",
        "answer": "Basic knowledge of software development lifecycle and Object-Oriented Programming concepts is recommended. Experience in automation testing frameworks is beneficial but not mandatory."
      },
      {
        "question": "What tools are covered in this BDD course?",
        "answer": "The course primarily covers Cucumber for automation and Gherkin for writing feature files. Participants also learn how to integrate BDD into Agile workflows."
      },
      {
        "question": "Is there an exam for BDD certification?",
        "answer": "There is no formal exam. Participants receive a course completion certificate after successfully attending the training and completing the required project work."
      },
      {
        "question": "How long is the BDD certification valid?",
        "answer": "The Behaviour Driven Development (BDD) training certificate is valid for a lifetime."
      },
      {
        "question": "How many PDUs and SEUs will I earn?",
        "answer": "Participants can earn up to 16 PDUs and 16 SEUs upon successful completion of the 2-day training program."
      },
      {
        "question": "What will I be able to do after completing this course?",
        "answer": "You will be able to write clear Gherkin feature files, conduct example mapping sessions, automate scenarios using Cucumber, and improve collaboration between business and technical teams."
      }
    ]
  },
  {
    "id": "category_2",
    "label": "Training & Delivery FAQs",
    "items": [
      {
        "question": "What is the duration of the BDD training?",
        "answer": "The BDD training is typically delivered as a 2-day instructor-led program totaling approximately 16 hours of interactive learning."
      },
      {
        "question": "Is the training practical or theory-based?",
        "answer": "The training is highly practical, including exercises, quizzes, case studies, example mapping workshops, and real-time scenario automation."
      },
      {
        "question": "Do I get hands-on experience during the training?",
        "answer": "Yes, participants gain hands-on experience writing real-life BDD feature files and automating scenarios using Cucumber."
      },
      {
        "question": "Is online training available?",
        "answer": "Yes, the course is available in live online instructor-led format as well as corporate group training."
      },
      {
        "question": "Do you provide corporate BDD training?",
        "answer": "Yes, we offer customized corporate training programs tailored to organizational needs."
      }
    ]
  },
  {
    "id": "category_3",
    "label": "Payment & Enrollment FAQs",
    "items": [
      {
        "question": "Can I pay in installments?",
        "answer": "Yes, installment options may be available. Please contact our support team for detailed payment plans."
      },
      {
        "question": "Do you offer corporate or group discounts?",
        "answer": "Yes, we provide special pricing for corporate and group enrollments."
      },
      {
        "question": "What payment methods are accepted?",
        "answer": "We accept credit cards, debit cards, net banking, wire transfers, PayPal, Stripe, and other secure payment options."
      },
      {
        "question": "Will I receive a payment receipt?",
        "answer": "Yes, you will receive a confirmation email and invoice immediately after successful payment."
      },
      {
        "question": "Is there any refund policy?",
        "answer": "Refunds are not available. However, participants may reschedule their training as per policy terms."
      },
      {
        "question": "How do I enroll in the BDD training?",
        "answer": "Select your preferred schedule, complete the registration form, make the payment, and you will receive confirmation with further instructions."
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
      "title": "Industry-Aligned Curriculum",
      "description": "Content developed by experts aligned with global standards."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from certified professionals with real industry exposure."
    },
    {
      "title": "Practical Learning Approach",
      "description": "Hands-on exercises, real-world case studies, and projects."
    },
    {
      "title": "Lifetime Certification",
      "description": "Course completion certificate valid for lifetime."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted training provider with extensive experience."
    },
    {
      "title": "End-to-End Support",
      "description": "Guidance before, during, and after training."
    },
    {
      "title": "Interactive Sessions",
      "description": "Collaborative workshops and scenario-based learning."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Access to multiple Agile and DevOps certifications."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'BDD',
      courseName: 'Behaviour Driven Development (BDD) Training',
      dateRange: 'May 12 - May 13, 2026',
      timeRange: '09:30 AM - 05:30 PM IST',
      trainerName: 'BDD Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 28,000',
      discountedPrice: 'INR 23,800',
      discountPercentage: '15',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Behaviour Driven Development (BDD) Training",
    "breadcrumbName": "BDD Training | Behaviour Driven Development Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Behaviour Driven Development with hands-on automation and real-world collaboration techniques.",
    "benefits": [
      "16 Hours Instructor-Led Training",
      "Hands-On Gherkin & Cucumber Practice",
      "Project-Based Learning",
      "Earn 16 PDUs & 16 SEUs",
      "Lifetime Certification"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Behaviour Driven Development (BDD) Training Overview",
    "description": [
      "This Behaviour Driven Development (BDD) course helps professionals improve collaboration between business and technical teams.",
      "Participants learn how to write executable specifications using Gherkin and automate them using Cucumber.",
      "The training emphasizes real-world scenarios, example mapping, and Agile integration."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in This Course?",
    "whatsIncludedDescription": [
      "16 Hours of Expert-Led Training",
      "Official BDD Training Courseware",
      "Hands-on Exercises with Gherkin & Cucumber",
      "16 PDUs and 16 SEUs",
      "Course Completion Certificate"
    ],
    "skillsTitle": "Skills Covered in the BDD Course",
    "skills": [
      "Behaviour Driven Development Basics",
      "Writing Gherkin Features",
      "Cucumber Test Automation",
      "Example Mapping Techniques",
      "Shared Language Facilitation",
      "Agile Testing Integration"
    ],
    "modesTitle": "Training Delivery Modes",
    "modesDescription": [
      "Live Online Virtual Classroom",
      "Corporate/In-house Group Training",
      "Personalized Mentoring Sessions"
    ]
  };

  const corporateData = {
    "courseName": "Why Simpliaxis for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide enterprise-focused BDD training tailored to organizational needs, enabling improved collaboration, automation efficiency, and higher product quality across teams."
  };

  const courseMetadata = {
    shortName: 'BDD',
    shortNameAlt: 'BDD Certification',
    fullName: 'Behaviour Driven Development (BDD) Training',
    fullNameAlt: 'Behaviour Driven Development (BDD)',
    certificateName: 'Behaviour Driven Development',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Mastering BDD enhances your professional value by aligning development with customer needs, reducing defects, and accelerating delivery cycles.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for BDD Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Course Completion',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Professional',
      titleSuffix: 'Certificate',
      issuerName: 'Simpliaxis',
      certificateType: 'Certificate of Excellence',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully completed the prescribed requirements for',
      signer1Role: 'Head of Training',
      signer2Role: 'Managing Director',
    },
  };

  const commonAttendeesList = [
    "Automation Test Engineers",
    "Software Developers",
    "QA Professionals",
    "Business Analysts",
    "Product Owners",
    "Agile Team Members"
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
      ltpLabel: 'Certified Training Provider',
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
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {overviewContent.whatsIncludedDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {overviewContent.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-blue-500">✔</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.modesTitle}
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {overviewContent.modesDescription.map((mode, i) => (
                  <li key={i}>{mode}</li>
                ))}
              </ul>
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

export default BehaviourDrivenDevelopmentBDDTraining;
