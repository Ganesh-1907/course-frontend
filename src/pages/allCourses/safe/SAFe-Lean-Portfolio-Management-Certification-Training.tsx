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

const SafeLeanPortfolioManagementCertificationTraining = () => {
  const highlights = [
    { text: "16 Hours Live Instructor-Led Training" },
    { text: "Earn 16 PDUs & 16 SEUs" },
    { text: "Exam Fee Included in Course Cost" },
    { text: "Comprehensive Exam Preparation Assistance" },
    { text: "Unlimited Practice Tests" },
    { text: "Official Courseware & SAFe® Studio Access" },
    { text: "Learn from Certified SPCTs" },
    { text: "Real-World Case Studies & Hands-On Learning" },
    { text: "Access to SAFe® Community Portal" },
    { text: "High First-Attempt Success Rate" }
  ];

  const individualBenefits = [
    {
      title: "Validated Lean Portfolio Expertise",
      description: "LPM certification validates your expertise in Lean Portfolio Management principles."
    },
    {
      title: "Strategic Leadership Impact",
      description: "Play a critical role in driving enterprise strategy and value delivery."
    },
    {
      title: "Data-Driven Portfolio Decisions",
      description: "Make informed portfolio-level decisions using Lean governance and economic frameworks."
    },
    {
      title: "Improved Collaboration",
      description: "Strengthen stakeholder communication and cross-team alignment."
    },
    {
      title: "Agility & Adaptability",
      description: "Develop the ability to adapt quickly, manage risk, and respond to change effectively."
    },
    {
      title: "Career Growth in Agile Leadership",
      description: "Stay ahead with modern Lean portfolio tools and Agile transformation strategies."
    }
  ];

  const corporateBenefits = [
    {
      title: "Strategic Alignment",
      description: "Align teams around business goals and accelerate strategy execution."
    },
    {
      title: "Optimized Resource Allocation",
      description: "Use Portfolio Kanban and Lean budgeting to reduce waste and improve prioritization."
    },
    {
      title: "Faster Delivery & Innovation",
      description: "Drive agility across portfolios and enable continuous innovation."
    },
    {
      title: "Proactive Risk Management",
      description: "Identify risks early and adapt quickly to maintain execution momentum."
    },
    {
      title: "Improved Transparency",
      description: "Increase visibility into portfolio initiatives for smarter decision-making."
    },
    {
      title: "Empowered Teams",
      description: "Encourage ownership, accountability, and motivation across value streams."
    }
  ];

  const careerStats = {
    averageIncome: "$130k - $175k",
    incomeLabel: "per annum",
    employmentGrowth: "24%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      group: [
        "Portfolio Managers",
        "PMO Leaders",
        "Product & Program Managers",
        "Enterprise Architects",
        "Senior Executives & Strategy Leaders"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Link portfolio strategy to Agile execution through Lean budgeting.",
    "Establish Lean guardrails and manage flow efficiently.",
    "Implement Portfolio Kanban and epic prioritization.",
    "Apply Lean governance and measure portfolio performance.",
    "Understand SAFe® Agile capitalization practices."
  ];

  const prerequisites = [
    "Familiarity with Agile principles.",
    "Experience working in Lean-Agile environments is beneficial.",
    "Understanding of value streams and portfolio-level thinking."
  ];

  const certificationSteps = [
    {
      title: "Register",
      description: "Enroll in the SAFe® Lean Portfolio Management course."
    },
    {
      title: "Attend 2-Day Training",
      description: "Complete 16 hours of live instructor-led LPM training."
    },
    {
      title: "Take the Certification Exam",
      description: "Attempt the 90-minute online SAFe® LPM certification exam."
    },
    {
      title: "Get Certified",
      description: "Score 77% or higher to earn the SAFe® LPM credential."
    }
  ];

  const curriculumModules = [
    {
      "title": "Introducing Lean Portfolio Management",
      "topics": [
        "SAFe® LPM Purpose",
        "Lean-Agile Mindset",
        "Portfolio Structure",
        "Organizing Around Value"
      ]
    },
    {
      "title": "Portfolio Strategy & Vision",
      "topics": [
        "Enterprise Strategy Alignment",
        "Portfolio Vision",
        "Roadmapping"
      ]
    },
    {
      "title": "Realizing Vision Through Epics",
      "topics": [
        "Portfolio Epics",
        "Epic Costing",
        "Lean Startup Cycle"
      ]
    },
    {
      "title": "Investment Funding",
      "topics": [
        "Lean Budget Guardrails",
        "Participatory Budgeting",
        "Portfolio Sync"
      ]
    },
    {
      "title": "Managing Portfolio Flow",
      "topics": [
        "Portfolio Kanban",
        "WSJF Prioritization"
      ]
    },
    {
      "title": "Agile Portfolio Operations",
      "topics": [
        "Value Stream Coordination",
        "Operational Excellence"
      ]
    },
    {
      "title": "Lean Governance",
      "topics": [
        "Portfolio Metrics",
        "Continuous Compliance"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Strategic Alignment",
      "description": "Translate enterprise strategy into actionable Lean portfolio initiatives."
    },
    {
      "title": "Lean Budgeting",
      "description": "Apply guardrails and dynamic funding models."
    },
    {
      "title": "Portfolio Flow Management",
      "description": "Visualize and optimize portfolio-level workflow."
    },
    {
      "title": "Operational Excellence",
      "description": "Improve governance and Agile PMO practices."
    },
    {
      "title": "Performance Measurement",
      "description": "Track key portfolio metrics and drive improvements."
    },
    {
      "title": "Implementation Planning",
      "description": "Create a practical roadmap for Lean Portfolio adoption."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "General LPM FAQs",
      "items": [
        {
          "question": "1. What is SAFe® LPM Certification?",
          "answer": "SAFe® Lean Portfolio Management certification validates expertise in aligning strategy with execution across Agile enterprises."
        },
        {
          "question": "2. Who should attend this course?",
          "answer": "Portfolio managers, PMO leaders, executives, and professionals involved in enterprise portfolio strategy."
        },
        {
          "question": "3. Is the exam fee included?",
          "answer": "Yes, the first exam attempt is included if taken within 30 days of course completion."
        },
        {
          "question": "4. What is the course duration?",
          "answer": "The LPM course is a 16-hour instructor-led training program."
        },
        {
          "question": "5. How long is the certification valid?",
          "answer": "The SAFe® LPM certification is valid for one year and requires annual renewal."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam FAQs",
      "items": [
        {
          "question": "1. What is the exam format?",
          "answer": "The exam consists of 45 multiple-choice questions completed within 90 minutes."
        },
        {
          "question": "2. What is the passing score?",
          "answer": "Candidates must score 77% or higher to pass."
        },
        {
          "question": "3. Are retakes allowed?",
          "answer": "Yes, retakes are available with additional fees as per SAFe® guidelines."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Enrollment FAQs",
      "items": [
        {
          "question": "1. Can I attend online?",
          "answer": "Yes, live virtual training is available globally."
        },
        {
          "question": "2. Are installment payments available?",
          "answer": "Flexible payment options are available."
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
    { "title": "Global Recognition", "description": "Recognized by leading certification bodies worldwide." },
    { "title": "Expert Trainers", "description": "Learn from experienced SPCT-certified professionals." },
    { "title": "Flexible Learning", "description": "Live virtual and corporate training formats available." },
    { "title": "Lifetime Learning Support", "description": "Access recordings, materials, and ongoing support." },
    { "title": "Proven Track Record", "description": "Trusted by enterprises across industries." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after certification." },
    { "title": "Interactive Training", "description": "Hands-on case studies and collaborative exercises." },
    { "title": "Wide Course Portfolio", "description": "Extensive Agile, Scrum, SAFe®, and DevOps programs." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'LPM',
      courseName: 'SAFe® 6.0 Lean Portfolio Management (LPM) Certification Training',
      dateRange: 'Feb 28 - Mar 01, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert SPCT',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 59,000',
      discountedPrice: 'INR 45,000',
      discountPercentage: '24',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "SAFe® 6.0 Lean Portfolio Management (LPM) Certification Training",
    "breadcrumbName": "SAFe® 6.0 LPM Certification",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Align Strategy with Execution Using Lean Portfolio Management.",
    "benefits": [
      "16 Hours Live Training",
      "Exam Fee Included",
      "Earn 16 PDUs & SEUs",
      "Official SAFe® Courseware",
      "Access to SAFe® Community"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "SAFe® Lean Portfolio Management Overview",
    "description": [
      "This LPM certification training enables professionals to implement Lean governance and align portfolio strategy with enterprise Agile execution.",
      "Gain expertise in Lean budgeting, portfolio Kanban, value stream funding, and performance measurement."
    ],
    "whatIsTitle": "What is SAFe® LPM Certification?",
    "whatIsDescription": [
      "SAFe® Lean Portfolio Management certification validates expertise in aligning strategy with execution across Agile enterprises."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "16 Hours Live Training",
      "Official SAFe® Courseware",
      "Exam Fee Included",
      "Access to SAFe® Studio",
      "SAFe® Community Membership"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Lean Portfolio Strategy",
      "Portfolio Kanban",
      "Lean Budgeting Guardrails",
      "Value Stream Funding",
      "Lean Governance & Performance"
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
    "description": "We deliver tailored Lean Portfolio Management training programs to help enterprises align strategy, funding, and Agile execution effectively."
  };

  const courseMetadata = {
    shortName: 'SAFe LPM',
    shortNameAlt: 'LPM',
    fullName: 'SAFe® 6.0 Lean Portfolio Management (LPM) Certification Training',
    fullNameAlt: 'SAFe® 6.0 LPM Certification',
    certificateName: 'SAFe® Lean Portfolio Manager',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® LPM Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® LPM Training?',
    },
    certificate: {
      mockupName: 'SAMANTHA REED',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile',
      certificateType: 'SAFe® Lean Portfolio Manager (LPM)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as a',
      signer1Role: 'SAFe Founder',
      signer2Role: 'Chief Methodologist',
    },
  };

  const commonAttendeesList = [
    "Portfolio Managers",
    "PMO Leaders",
    "Product & Program Managers",
    "Enterprise Architects",
    "Senior Executives & Strategy Leaders"
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

export default SafeLeanPortfolioManagementCertificationTraining;
