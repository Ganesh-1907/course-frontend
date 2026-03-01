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

const ProductManagerPOPMCertificationTraining = () => {
  const highlights = [
    { text: "16-Hour Live Instructor-Led Training" },
    { text: "Earn 16 PDUs & 16 SEUs" },
    { text: "Comprehensive Exam Support" },
    { text: "Official Courseware & SAFe Studio Access" },
    { text: "High First-Attempt Pass Rate" },
    { text: "Exam Fee Included in Training Cost" },
    { text: "Access to SAFe® Community Platform" },
    { text: "Training Delivered by SPCs & SPCTs" },
    { text: "Real-World Case Studies & Hands-On Learning" },
    { text: "Unlimited Practice Tests" }
  ];

  const individualBenefits = [
    {
      title: "Enhanced Product Leadership Skills",
      description: "Strengthen your expertise as a SAFe® Product Owner/Product Manager in scaled Agile enterprises."
    },
    {
      title: "Creative & Agile Product Execution",
      description: "Learn to execute product strategies aligned with Lean-Agile principles."
    },
    {
      title: "End-to-End Product Lifecycle Management",
      description: "Gain knowledge to manage product vision, roadmap, backlog, and delivery."
    },
    {
      title: "Scaled Product Development Expertise",
      description: "Understand how to scale product development across Agile Release Trains."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Product Delivery",
      description: "SAFe® enables organizations to build customer-centric solutions efficiently."
    },
    {
      title: "Strategic Business Alignment",
      description: "Align product initiatives with current and future business objectives."
    },
    {
      title: "Optimized Team Productivity",
      description: "Enhance collaboration and streamline workload distribution across teams."
    }
  ];

  const careerStats = {
    averageIncome: "$110k - $150k",
    incomeLabel: "per annum",
    employmentGrowth: "22%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      group: [
        "Product Owners",
        "Product Managers",
        "Business Analysts",
        "Agile Coaches",
        "Project Managers working in SAFe® environments"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand SAFe® Product Owner and Product Manager roles.",
    "Lead Program Increment (PI) planning activities.",
    "Align product strategy with enterprise objectives.",
    "Improve backlog prioritization and value delivery.",
    "Collaborate effectively across Agile Release Trains."
  ];

  const prerequisites = [
    "Experience in Agile or Lean environments is recommended.",
    "Familiarity with SAFe® framework concepts is beneficial."
  ];

  const certificationSteps = [
    {
      title: "Attend the Training",
      description: "Complete the 16-hour SAFe® POPM training delivered by certified SAFe Practice Consultants."
    },
    {
      title: "Gain Practical Knowledge",
      description: "Participate in interactive sessions, exercises, and real-world case studies."
    },
    {
      title: "Take the Certification Exam",
      description: "Attempt the 90-minute online SAFe® POPM certification exam."
    },
    {
      title: "Become Certified",
      description: "Score 80% or higher to earn your official SAFe® POPM credential."
    }
  ];

  const curriculumModules = [
    {
      "title": "Lesson 1: PO/PM Roles & Responsibilities",
      "topics": [
        "Lean-Agile Mindset",
        "Value Streams",
        "Product Ownership in SAFe®",
        "AI-Augmented Product Thinking"
      ]
    },
    {
      "title": "Lesson 2: PI Planning Preparation",
      "topics": [
        "Solution Vision & Roadmaps",
        "Backlog Management",
        "Customer-Centric Features",
        "AI-Enhanced Prioritization"
      ]
    },
    {
      "title": "Lesson 3: Leading PI Planning",
      "topics": [
        "PI Objectives",
        "Dependency Management",
        "Risk Handling",
        "Data-Driven Decision Making"
      ]
    },
    {
      "title": "Lesson 4: Iteration Execution",
      "topics": [
        "Story Mapping",
        "Iteration Planning",
        "Backlog Refinement",
        "DevOps & Release on Demand"
      ]
    },
    {
      "title": "Lesson 5: PI Execution",
      "topics": [
        "PO Sync",
        "System Demo",
        "Inspect & Adapt",
        "Continuous Improvement"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Agile Product Management",
      "description": "Build and maintain effective Lean backlogs."
    },
    {
      "title": "Understand SAFe Principles",
      "description": "Apply SAFe® values and Lean-Agile mindset across teams."
    },
    {
      "title": "Program Increment Planning",
      "description": "Successfully contribute to PI planning and execution."
    },
    {
      "title": "Backlog & Release Management",
      "description": "Manage program backlogs and support smooth value delivery."
    },
    {
      "title": "Customer-Centric Product Thinking",
      "description": "Deliver continuous value by integrating customer feedback."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "General FAQs",
      "items": [
        {
          "question": "1. What is SAFe® POPM certification?",
          "answer": "SAFe® POPM certification validates your ability to manage product backlogs, define features, and deliver value within Agile Release Trains in scaled enterprises."
        },
        {
          "question": "2. Who should take this course?",
          "answer": "Product Owners, Product Managers, Business Analysts, Agile Coaches, and professionals working in SAFe® environments."
        },
        {
          "question": "3. How long is the certification valid?",
          "answer": "The SAFe® POPM certification is valid for one year and requires annual renewal."
        },
        {
          "question": "4. Is the exam fee included?",
          "answer": "Yes, the first exam attempt is included in the training fee."
        },
        {
          "question": "5. What is the passing score?",
          "answer": "You must score at least 80% to pass the SAFe® POPM certification exam."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam FAQs",
      "items": [
        {
          "question": "1. What is the exam format?",
          "answer": "The exam consists of 45 multiple-choice questions to be completed in 90 minutes."
        },
        {
          "question": "2. Is the exam proctored?",
          "answer": "Yes, it is conducted online through the SAFe® platform."
        },
        {
          "question": "3. Can I retake the exam?",
          "answer": "Yes, retakes are allowed with an additional fee."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Enrollment FAQs",
      "items": [
        {
          "question": "1. Can I attend online?",
          "answer": "Yes, live virtual and corporate group training options are available."
        },
        {
          "question": "2. Are installment payments available?",
          "answer": "Yes, flexible payment options are available."
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
      "title": "Accredited SAFe® Training Partner",
      "description": "Training delivered by certified SAFe® instructors."
    },
    {
      "title": "Experienced Trainers",
      "description": "Learn from SPC-certified professionals with real enterprise experience."
    },
    {
      "title": "Flexible Learning Modes",
      "description": "Online and corporate training formats available."
    },
    {
      "title": "Comprehensive Curriculum",
      "description": "Covers backlog management, PI planning, and value delivery."
    },
    {
      "title": "Exam Readiness Support",
      "description": "Practice tests and structured exam preparation included."
    },
    {
      "title": "Global Training Presence",
      "description": "Accessible worldwide through live virtual sessions."
    },
    {
      "title": "Career Guidance",
      "description": "Post-training support and career insights provided."
    },
    {
      "title": "SAFe® Community Access",
      "description": "Includes official SAFe® community membership."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'POPM',
      courseName: 'SAFe® 6.0 AI-Empowered Product Owner/Product Manager (POPM) Certification Training',
      dateRange: 'Feb 28 - Mar 01, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert SPC',
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
    "courseName": "SAFe® 6.0 AI-Empowered Product Owner/Product Manager (POPM) Certification Training",
    "breadcrumbName": "SAFe® POPM Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Product Ownership & Management in Scaled Agile Enterprises.",
    "benefits": [
      "16 Hours Live Training",
      "Official Courseware Included",
      "Exam Fee Included",
      "Earn 16 PDUs & SEUs",
      "Unlimited Practice Tests"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AI-Empowered SAFe® POPM Certification Overview",
    "description": [
      "This SAFe® POPM training prepares professionals to manage products effectively in scaled Agile enterprises.",
      "Learn how to prioritize backlogs, align strategy with execution, and deliver customer-centric value."
    ],
    "whatIsTitle": "What is SAFe® POPM Certification?",
    "whatIsDescription": [
      "SAFe® POPM certification validates your ability to perform Product Owner/Product Manager roles within SAFe® enterprises."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "16 hours live training",
      "Official SAFe® courseware",
      "First exam attempt included",
      "Practice tests",
      "SAFe® Community membership"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Backlog Management",
      "PI Planning",
      "Value Stream Alignment",
      "Customer-Centric Design",
      "Lean-Agile Leadership"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live Virtual Training",
      "Corporate Group Training"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporate Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver customized SAFe® training programs that help enterprises align strategy with execution and scale Agile effectively."
  };

  const courseMetadata = {
    shortName: 'SAFe POPM',
    shortNameAlt: 'POPM',
    fullName: 'SAFe® 6.0 AI-Empowered Product Owner/Product Manager (POPM) Certification Training',
    fullNameAlt: 'SAFe® POPM Certification',
    certificateName: 'SAFe® POPM',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® POPM Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® POPM Training?',
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
    "Product Owners",
    "Product Managers",
    "Business Analysts",
    "Agile Coaches",
    "Project Managers working in SAFe® environments"
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
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.whatsIncludedDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.skillsTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.modesTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.modesDescription.map((item, i) => (
                  <li key={i}>{item}</li>
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

export default ProductManagerPOPMCertificationTraining;
