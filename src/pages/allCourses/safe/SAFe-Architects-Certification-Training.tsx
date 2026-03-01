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

const SafeArchitectsCertificationTraining = () => {
  const highlights = [
    { "text": "24 Hours Live Online Training" },
    { "text": "Earn 24 PDUs & 24 SEUs" },
    { "text": "Comprehensive Exam Support" },
    { "text": "High First-Attempt Success Rate" },
    { "text": "Official Courseware & SAFe® Studio Access" },
    { "text": "Exam Fee Included in Training Cost" },
    { "text": "Access to SAFe® Community Portal" },
    { "text": "Mentorship from Agile Industry Experts" },
    { "text": "Unlimited Practice Test Attempts" },
    { "text": "Training Delivered by Platinum SPCT Partner" }
  ];

  const individualBenefits = [
    {
      "title": "Architectural Leadership Skills",
      "description": "Develop the ability to align enterprise architecture with business value."
    },
    {
      "title": "Strategic Alignment Expertise",
      "description": "Plan architectural runway and support value delivery across ARTs and Solution Trains."
    },
    {
      "title": "Lean-Agile Transformation Leadership",
      "description": "Lead architecture initiatives during enterprise SAFe® transformations."
    },
    {
      "title": "Improved Collaboration",
      "description": "Strengthen coordination between architects, Agile teams, and enterprise stakeholders."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enterprise Architecture Alignment",
      "description": "Ensure architecture decisions align with strategic themes and portfolio vision."
    },
    {
      "title": "Improved Delivery Performance",
      "description": "Support continuous delivery and DevOps practices for faster time-to-market."
    },
    {
      "title": "Stronger Governance",
      "description": "Enable Lean governance and quality management across large systems."
    },
    {
      "title": "Sustainable Business Agility",
      "description": "Empower organizations to scale Agile architecture across complex environments."
    }
  ];

  const careerStats = {
    averageIncome: "$140k - $190k",
    incomeLabel: "per annum",
    employmentGrowth: "22%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "System, Solution & Enterprise Architects",
        "Technical Leads",
        "Senior Developers",
        "Agile Coaches",
        "Architecture Managers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Align architecture with business strategy.",
    "Support DevOps and continuous delivery pipelines.",
    "Lead architectural initiatives during PI planning.",
    "Contribute to Lean Portfolio Management and Solution Intent.",
    "Drive enterprise-wide Agile architecture adoption."
  ];

  const prerequisites = [
    "Completion of at least one SAFe® course is recommended.",
    "Experience participating in at least one ART and one Program Increment (PI).",
    "Familiarity with Agile and Lean principles."
  ];

  const certificationSteps = [
    {
      "title": "Complete the Training",
      "description": "Attend the 3-day SAFe® for Architects certification course."
    },
    {
      "title": "Apply Practical Knowledge",
      "description": "Participate in exercises and real-world architectural case studies."
    },
    {
      "title": "Attempt the Exam",
      "description": "Take the 90-minute online SAFe® Architect certification exam."
    },
    {
      "title": "Earn Certification",
      "description": "Score 71% or higher to receive the SAFe® Architect credential."
    }
  ];

  const curriculumModules = [
    {
      "title": "Agile Architecture & SAFe®",
      "topics": [
        "Attributes of Agile Architecture",
        "SAFe® Architect Role",
        "Collaboration with Enterprise Roles",
        "Architecting with SAFe Principles"
      ]
    },
    {
      "title": "DevOps & Release on Demand",
      "topics": [
        "DevOps Culture",
        "Continuous Delivery Pipeline",
        "Continuous Integration & Deployment",
        "Release on Demand"
      ]
    },
    {
      "title": "Architecture with Business Value",
      "topics": [
        "Strategic Themes & Portfolio Vision",
        "Value Streams & ARTs",
        "Solution Intent & NFRs",
        "Portfolio Kanban & Enabler Epics"
      ]
    },
    {
      "title": "PI Execution",
      "topics": [
        "PI Planning Preparation",
        "Management Review",
        "Continuous Delivery Support",
        "Inspect & Adapt"
      ]
    },
    {
      "title": "Leading Lean-Agile Transformation",
      "topics": [
        "Lean-Agile Leadership",
        "Transition to Agile Architecture",
        "Transformation Action Plan"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Align Architecture with Business Value",
      "description": "Ensure architecture decisions support enterprise strategy."
    },
    {
      "title": "Support Continuous Delivery",
      "description": "Enable DevOps practices and release on demand."
    },
    {
      "title": "Lead PI Planning Activities",
      "description": "Contribute effectively during Program Increment planning."
    },
    {
      "title": "Drive Transformation",
      "description": "Guide enterprises through Lean-Agile architectural transformation."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "General FAQs",
      "items": [
        {
          "question": "1. Who is a SAFe® 6.0 Architect?",
          "answer": "A SAFe® Architect aligns enterprise architecture with business strategy and ensures value flow across Agile Release Trains and Solution Trains."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "Attending at least one SAFe® course and participating in an ART and PI is recommended."
        },
        {
          "question": "3. What is the exam format?",
          "answer": "The exam consists of 45 multiple-choice questions to be completed in 90 minutes with a passing score of 71%."
        },
        {
          "question": "4. How long is the certification valid?",
          "answer": "The certification is valid for one year and requires annual renewal."
        },
        {
          "question": "5. Is the exam fee included?",
          "answer": "Yes, the first attempt is included if taken within 30 days of course completion."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Is there any refund policy?",
          "answer": "Refunds are not available, but rescheduling options are provided."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Training FAQs",
      "items": [
        {
          "question": "1. Is online training available?",
          "answer": "Yes, live virtual sessions are available globally."
        },
        {
          "question": "2. Do I receive a certificate?",
          "answer": "Yes, you receive an official SAFe® Architect certification after passing the exam."
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
    { "title": "Global Recognition", "description": "Recognized worldwide by leading Agile enterprises." },
    { "title": "Expert Trainers", "description": "Learn from certified SPCT instructors with enterprise experience." },
    { "title": "Flexible Learning", "description": "Live online and corporate training formats available." },
    { "title": "Lifetime Learning Support", "description": "Access study materials and resources post-training." },
    { "title": "Proven Track Record", "description": "Trusted by enterprises across industries." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification renewal." },
    { "title": "Interactive Sessions", "description": "Hands-on exercises and real-world case studies." },
    { "title": "Wide Course Portfolio", "description": "Comprehensive Agile, Scrum, SAFe®, and DevOps programs." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'ARCH',
      courseName: 'SAFe® 6.0 for Architects (ARCH) Certification Training',
      dateRange: 'Mar 15 - Mar 17, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Expert SPCT',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 65,000',
      discountedPrice: 'INR 49,999',
      discountPercentage: '23',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "SAFe® 6.0 for Architects (ARCH) Certification Training",
    "breadcrumbName": "SAFe® Architect Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Lead Agile Architecture and Drive Enterprise Transformation.",
    "benefits": [
      "24 Hours Live Training",
      "Exam Fee Included",
      "Earn 24 PDUs & SEUs",
      "Official SAFe® Courseware",
      "Access to SAFe® Community"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "SAFe® 6.0 Architect Certification Overview",
    "description": [
      "This 3-day SAFe® for Architects training equips professionals to align architecture with business value in Lean-Agile enterprises.",
      "Learn to lead architectural initiatives, support DevOps practices, and drive enterprise transformation using SAFe® principles."
    ],
    "whatIsTitle": "What is SAFe® for Architects?",
    "whatIsDescription": [
      "The SAFe® for Architects course prepares system, solution, and enterprise architects to engage across the organization as effective leaders and change agents."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "24 Hours Live Training",
      "Official SAFe® Courseware",
      "Exam Fee Included",
      "One-year SAFe® Community Membership",
      "Electronic Study Guide"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Agile Architecture Strategy",
      "Strategic Theme Alignment",
      "Value Stream Orchestration",
      "Solution Intent Management",
      "Continuous Delivery Pipeline"
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
    "description": "We provide tailored SAFe® Architect training programs to help enterprises scale Agile architecture and sustain business agility."
  };

  const courseMetadata = {
    shortName: 'SAFe ARCH',
    shortNameAlt: 'ARCH',
    fullName: 'SAFe® 6.0 for Architects (ARCH) Certification Training',
    fullNameAlt: 'SAFe® 6.0 Architect Certification',
    certificateName: 'SAFe® Architect',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® Architect Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® Architect Training?',
    },
    certificate: {
      mockupName: 'DANIEL COOPER',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile',
      certificateType: 'SAFe® Architect (ARCH)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as a',
      signer1Role: 'SAFe Founder',
      signer2Role: 'Chief Methodologist',
    },
  };

  const commonAttendeesList = [
    "System, Solution & Enterprise Architects",
    "Technical Leads",
    "Senior Developers",
    "Agile Coaches",
    "Architecture Managers"
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

export default SafeArchitectsCertificationTraining;
