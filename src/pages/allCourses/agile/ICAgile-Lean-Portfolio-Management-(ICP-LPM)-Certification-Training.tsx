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

const ICAgileLeanPortfolioManagementCertificationTraining = () => {
  const highlights = [
    { "text": "14 hours of live instructor-led online training" },
    { "text": "Globally recognized ICAgile ICP-LPM certification" },
    { "text": "Hands-on learning through portfolio simulations" },
    { "text": "Official ICAgile-authorized courseware included" },
    { "text": "Mentorship from enterprise Agile experts" }
  ];

  const individualBenefits = [
    {
      "title": "Individuals Benefits",
      "description": "Gain adaptable Lean Portfolio Management knowledge applicable across industries."
    },
    {
      "title": "Individuals Benefits",
      "description": "Increase career flexibility in strategy, portfolio, and transformation roles."
    },
    {
      "title": "Individuals Benefits",
      "description": "Strengthen professional credibility with a globally recognized ICAgile certification."
    },
    {
      "title": "Individuals Benefits",
      "description": "Develop strong strategic decision-making capabilities at the enterprise level."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve alignment between strategy, funding, and execution across portfolios."
    },
    {
      "title": "Corporate Benefits",
      "description": "Enable faster and smarter decision-making using Lean governance and funding models."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase organizational agility by moving toward value-driven portfolio structures."
    },
    {
      "title": "Corporate Benefits",
      "description": "Drive sustainable business outcomes through continuous learning and investment optimization."
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
        "Apply Lean Portfolio Management principles at enterprise scale",
        "Align strategy, funding, and execution effectively",
        "Enable decentralized decision-making with lightweight governance",
        "Optimize flow across portfolios and value streams",
        "Support long-term enterprise agility"
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
    "Apply Lean Portfolio Management practices across enterprise portfolios",
    "Connect strategy, funding, and execution for better outcomes",
    "Enable decentralized and adaptive governance",
    "Optimize value delivery across portfolios and value streams"
  ];

  const prerequisites = [
    'No mandatory prerequisites are required.',
    'Basic understanding of Scrum principles is recommended.',
    'Completion of formal training by a Scrum Alliance-approved CSD trainer is required.',
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete the ICAgile-authorized ICP-LPM training program."
    },
    {
      "title": "Participate Actively",
      "description": "Engage in discussions, exercises, and real-world portfolio simulations."
    },
    {
      "title": "Demonstrate Learning",
      "description": "Successfully finish all required activities and reflective exercises."
    },
    {
      "title": "Receive Certification",
      "description": "Earn the globally recognized ICP-LPM certification issued directly by ICAgile."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Lean Portfolio Management in Context",
      "topics": [
        "Introduction to Lean Portfolio Management",
        "Why LPM is Essential for Business Agility",
        "Core Principles of Lean Portfolio Management"
      ]
    },
    {
      "title": "Module 2: Enabling Lean Portfolio Management",
      "topics": [
        "Aligning Strategy with Execution",
        "Adaptive Funding and Budgeting",
        "Portfolio Governance and Metrics",
        "Managing Risk and Variance"
      ]
    },
    {
      "title": "Module 3: Structuring for Lean Portfolio Management",
      "topics": [
        "Organizational Design for Portfolio Agility",
        "Transitioning from Projects to Products",
        "Portfolio Types and Portfolio Kanban",
        "Common Portfolio Anti-Patterns"
      ]
    },
    {
      "title": "Module 4: Executing Lean Portfolio Management",
      "topics": [
        "Cross-Team Visibility and Collaboration",
        "Portfolio Roadmaps and Planning",
        "Managing Capacity and Demand",
        "Continuous Planning and Improvement"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Lean Portfolio Management Fundamentals",
      "description": "Understand how Lean Portfolio Management differs from traditional portfolio approaches and why it supports business agility."
    },
    {
      "title": "Strategy-to-Execution Alignment",
      "description": "Connect enterprise strategy to initiatives and outcomes through adaptive portfolio practices."
    },
    {
      "title": "Lean Funding and Budgeting",
      "description": "Move from rigid annual budgeting toward incremental funding and investment guardrails."
    },
    {
      "title": "Portfolio Governance and Metrics",
      "description": "Apply transparent governance models and meaningful metrics to monitor portfolio health."
    },
    {
      "title": "Value Stream and Product Design",
      "description": "Understand how portfolio structures evolve when transitioning from projects to products."
    },
    {
      "title": "Portfolio Execution and Improvement",
      "description": "Manage portfolio flow, capacity, and prioritization using continuous planning and feedback loops."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is ICAgile Lean Portfolio Management (ICP-LPM)?",
          "answer": "ICP-LPM is an ICAgile certification that validates your ability to apply Lean and Agile principles at the portfolio level to support business agility."
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
      "title": "ICAgile-Authorized Training Partner",
      "description": "Viovn provides ICP-LPM training sessions that strictly follow ICAgile's curriculum, quality benchmarks, and certification protocols."
    },
    {
      "title": "Experienced Enterprise Practitioners",
      "description": "Receive instruction from experts with a wealth of practical knowledge in implementing Lean Portfolio Management and enterprise-wide Agile strategies."
    },
    {
      "title": "Practice-Focused Learning Approach",
      "description": "Our curriculum prioritizes concrete application through hands-on exercises and simulations, moving beyond mere theoretical teaching."
    },
    {
      "title": "Interactive and Engaging Sessions",
      "description": "Join collaborative workshops and guided dialogues designed to foster deep comprehension and the development of actionable skills."
    },
    {
      "title": "Industry-Relevant Case Studies",
      "description": "Explore actual corporate scenarios that illustrate the effective deployment of Lean Portfolio Management within intricate business landscapes."
    },
    {
      "title": "Globally Recognized Certification",
      "description": "Obtain the ICAgile ICP-LPM credential, a prestigious and internationally accepted certification valued by leading organizations everywhere."
    },
    {
      "title": "Flexible Training Delivery Options",
      "description": "Pick from various learning formats, such as live virtual classes or bespoke corporate sessions, created to align with your career commitments."
    },
    {
      "title": "Strong Post-Training Support",
      "description": "Viovn extends its commitment beyond the classroom, offering ongoing mentorship and a suite of resources to ensure successful implementation."
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
    "courseName": "ICAgile Lean Portfolio Management (ICP-LPM) Certification Training",
    "breadcrumbName": "ICAgile Lean Portfolio Management (ICP-LPM) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Enterprise-level Agile program focused on Lean portfolio strategy, funding, governance, and value delivery.",
    "benefits": [
      "14 hours of immersive instructor-led ICAgile ICP-LPM training",
      "Hands-on practice with portfolio mapping, value streams, and metrics",
      "Learn to balance investments, manage risk, and optimize value flow",
      "Understand adaptive governance, portfolio visioning, and funding models",
      "Earn a globally recognized ICP-LPM certification"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of ICAgile Lean Portfolio Management (ICP-LPM) Certification Training",
    "description": [
      "The ICAgile Lean Portfolio Management (ICP-LPM) Certification Training is designed for leaders and practitioners responsible for enterprise portfolio strategy, investment decisions, and value delivery at scale. The course helps organizations shift from rigid planning and annual budgeting toward continuous value optimization, adaptive funding, and decentralized decision-making."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in ICP-LPM Certification Training",
    "whatsIncludedDescription": [
      "Official ICAgile-authorized learning materials",
      "Real-world portfolio management scenarios and case studies",
      "Interactive exercises and simulation-based learning",
      "Globally recognized ICP-LPM credential",
      "Guidance from experienced enterprise Agile practitioners",
      "Career growth support within the global Agile ecosystem"
    ],
    "skillsTitle": "Skills Covered in ICP-LPM Training",
    "skills": [
      "Lean Portfolio Management mindset and principles",
      "Strategy-to-execution alignment",
      "Value stream identification and optimization",
      "Lean budgeting and adaptive funding models",
      "Portfolio prioritization and investment decisions",
      "Portfolio Kanban and flow management",
      "Outcome-driven governance and metrics",
      "Enterprise agility and systems thinking"
    ],
    "modesTitle": "Training Modes Available",
    "modesDescription": [
      "Training is delivered through live instructor-led virtual sessions and customized corporate programs. These formats ensure practical learning and enterprise-level application for both individuals and organizational teams."
    ]
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn delivers customized corporate training solutions tailored to organizational needs. The programs help enterprises close skill gaps, improve portfolio decision-making, and accelerate transformation through expert-led, practical learning."
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

export default ICAgileLeanPortfolioManagementCertificationTraining;
