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

const AdvancedSAFePracticeConsultantASPCCertificationPath = () => {
  const highlights = [
    { text: "4 Days Live Online Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Mentorship by Agile Industry Experts", icon: <Users className="w-5 h-5" /> },
    { text: "Official Courseware & SAFe® Studio Access", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Exam Fee Included", icon: <CreditCard className="w-5 h-5" /> },
    { text: "Training by Certified SPCTs", icon: <UserCheck className="w-5 h-5" /> },
    { text: "24/7 Customer Support", icon: <Headset className="w-5 h-5" /> },
    { text: "Access to Practice Tests", icon: <Laptop className="w-5 h-5" /> },
    { text: "One-Year SAFe® Community Portal Access", icon: <Globe className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Advanced Enterprise Transformation Expertise",
      "description": "Gain mastery in Lean Portfolio Management, value stream alignment, and enterprise strategy execution."
    },
    {
      "title": "Stronger Leadership Credibility",
      "description": "Demonstrate advanced transformation leadership capability and enhance credibility among executives and Agile teams."
    },
    {
      "title": "Expanded Career Opportunities",
      "description": "Qualify for senior roles such as Enterprise Agile Coach, Transformation Consultant, and Lean Portfolio Advisor."
    },
    {
      "title": "Enhanced Strategic Thinking",
      "description": "Align Agile delivery with business strategy and drive measurable enterprise outcomes."
    },
    {
      "title": "Global SAFe® Recognition",
      "description": "Strengthen long-term career growth with recognition within the global SAFe® ecosystem."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Stronger Enterprise Agile Leadership",
      "description": "Enable structured SAFe® transformations with governance and measurable business outcomes."
    },
    {
      "title": "Strategy-to-Execution Alignment",
      "description": "Align Lean Portfolio Management with enterprise business objectives."
    },
    {
      "title": "Sustainable Agile Adoption",
      "description": "Minimize transformation friction and implement SAFe® practices smoothly across departments."
    },
    {
      "title": "Enhanced Executive Engagement",
      "description": "Improve leadership alignment and enterprise-wide communication clarity."
    },
    {
      "title": "Optimized Portfolio Management",
      "description": "Improve visibility into value streams, budgeting, and enterprise resource allocation."
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
      "group": [
        "Certified SAFe® Practice Consultants (SPCs)",
        "Enterprise Agile Coaches",
        "Transformation Leaders",
        "Lean Portfolio Managers",
        "Release Train Engineers (RTEs)",
        "Professionals Leading SAFe® Transformations"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Apply advanced SAFe® transformation strategies at enterprise scale.",
    "Customize SAFe® implementation while preserving framework integrity.",
    "Integrate AI-powered insights into portfolio governance.",
    "Lead sustainable large-scale Agile transformations.",
    "Prepare thoroughly for the ASPC certification exam."
  ];

  const prerequisites = [
    "Active SAFe® Practice Consultant (SPC) 6.0 certification.",
    "Hands-on experience implementing SAFe® in enterprise environments."
  ];

  const certificationSteps = [
    {
      "title": "Meet Prerequisites",
      "description": "Hold an active SPC certification and practical SAFe® implementation experience."
    },
    {
      "title": "Complete Learning Modules",
      "description": "Finish self-paced modules and instructor-led advanced transformation sessions."
    },
    {
      "title": "Participate in Learning Lab",
      "description": "Engage in peer-learning and real-world transformation simulations."
    },
    {
      "title": "Pass the ASPC Exam",
      "description": "Successfully complete the Advanced SPC certification exam to validate expertise."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Developing a Transformation Strategy",
      "topics": [
        "Define measurable transformation objectives",
        "Create transformation backlog and roadmap",
        "Communicate strategy in business language"
      ]
    },
    {
      "title": "Module 2: Lean Portfolio Management Excellence",
      "topics": [
        "Pitching LPM adoption",
        "Addressing implementation challenges",
        "Facilitating portfolio syncs and reviews"
      ]
    },
    {
      "title": "Module 3: Engaging Enterprise Leaders",
      "topics": [
        "Cultural impact on SAFe® transformation",
        "Emotional competence in leadership",
        "Building influence with executives"
      ]
    },
    {
      "title": "Module 4: Driving Relentless Improvement",
      "topics": [
        "Continuous improvement frameworks",
        "Enterprise metrics and decision models",
        "Balanced transformation measurement systems"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Transformation Strategy Mastery",
      "description": "Design enterprise-level Agile transformation strategies aligned with business goals."
    },
    {
      "title": "Lean Portfolio Optimization",
      "description": "Apply LPM to drive funding alignment and strategic execution."
    },
    {
      "title": "Executive Influence",
      "description": "Coach leaders and foster enterprise-wide Agile culture."
    },
    {
      "title": "Continuous Enterprise Improvement",
      "description": "Establish systems for sustainable long-term Agile success."
    },
    {
      "title": "AI-Driven Decision Intelligence",
      "description": "Leverage predictive metrics and analytics for enterprise transformation governance."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "ASPC Certification FAQs",
      "items": [
        {
          "question": "1. What is the Advanced SPC certification?",
          "answer": "It is an advanced credential for experienced SPCs to deepen enterprise transformation expertise."
        },
        {
          "question": "2. Who should take ASPC training?",
          "answer": "Certified SPCs, Enterprise Coaches, Transformation Leaders, and Lean Portfolio Managers."
        },
        {
          "question": "3. Is there an exam?",
          "answer": "Yes, candidates must pass a scenario-based multiple-choice exam."
        },
        {
          "question": "4. How long is certification valid?",
          "answer": "The certification is valid for one year and requires annual renewal."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam FAQs",
      "items": [
        {
          "question": "1. What is the exam format?",
          "answer": "Web-based, closed-book, multiple-choice exam."
        },
        {
          "question": "2. What is the passing score?",
          "answer": "75% or higher."
        },
        {
          "question": "3. Are retakes allowed?",
          "answer": "Yes, retakes are permitted with applicable fees."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Is refund available?",
          "answer": "Refunds are not available, but rescheduling is permitted."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "General Training FAQs",
      "items": [
        {
          "question": "1. Is online training available?",
          "answer": "Yes, this course is delivered via live virtual format."
        },
        {
          "question": "2. Do I receive SAFe® community access?",
          "answer": "Yes, one-year SAFe® community membership is included."
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
      "title": "Authorized Platinum SPCT Partner",
      "description": "Official training aligned with Scaled Agile standards."
    },
    {
      "title": "Flexible Learning Options",
      "description": "Designed for working professionals with enterprise responsibilities."
    },
    {
      "title": "Expert-Led Instruction",
      "description": "Delivered by experienced SAFe® Practice Consultants."
    },
    {
      "title": "Scenario-Based Learning",
      "description": "Hands-on labs and transformation simulations."
    },
    {
      "title": "AI-Integrated Approach",
      "description": "Incorporates AI-supported portfolio and governance insights."
    },
    {
      "title": "Structured Exam Support",
      "description": "End-to-end guidance aligned with ASPC exam objectives."
    },
    {
      "title": "Global Professional Recognition",
      "description": "Enhance credibility within global SAFe® networks."
    },
    {
      "title": "Ongoing Professional Support",
      "description": "Post-certification guidance for continuous growth."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'ASPC',
      courseName: 'Advanced SAFe® Practice Consultant (ASPC®) Certification Path',
      dateRange: 'Mar 15 - Mar 18, 2026',
      timeRange: '09:00 AM - 05:00 PM EST',
      trainerName: 'Expert SPCT',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 98,000',
      discountedPrice: 'INR 78,400',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "AI-Empowered Advanced SAFe® Practice Consultant (ASPC®) Certification Path",
    "breadcrumbName": "Advanced SAFe® Practice Consultant (ASPC®) Certification",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Elevate Enterprise Transformation Leadership with Advanced SAFe® Expertise.",
    "benefits": [
      "4-Day Advanced Training",
      "Exam Fee Included",
      "AI-Driven Enterprise Insights",
      "One-Year SAFe® Community Access"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AI-Empowered Advanced SPC Certification Overview",
    "description": [
      "The Advanced SPC Certification Path equips experienced SPCs with enterprise transformation mastery.",
      "Learn advanced Lean Portfolio Management, executive engagement, and AI-driven transformation governance."
    ],
    "whatIsTitle": "What Is Included?",
    "whatIsDescription": [
      "4 days instructor-led training",
      "AI-powered portfolio analytics insights",
      "Scenario-based enterprise simulations",
      "Exam preparation support"
    ],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Enterprise Transformation Strategy",
      "Lean Portfolio Management",
      "Executive Coaching",
      "AI-Supported Decision Governance",
      "Continuous Improvement Systems"
    ],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData = {
    "courseName": "Why Simpliaxis for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Enterprise-focused ASPC training tailored to align leadership strategy, portfolio governance, and transformation execution."
  };

  const courseMetadata = {
    shortName: 'SAFe ASPC',
    shortNameAlt: 'ASPC',
    fullName: 'AI-Empowered Advanced SAFe® Practice Consultant (ASPC®) Certification Path',
    fullNameAlt: 'Advanced SAFe® Practice Consultant (ASPC®) Certification',
    certificateName: 'Advanced Practice Consultant',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Advanced SAFe® Practice Consultant Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Advanced SAFe® Practice Consultant Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'Advanced SAFe® Practice Consultant (ASPC®)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "Certified SAFe® Practice Consultants (SPCs)",
    "Enterprise Agile Coaches",
    "Transformation Leaders",
    "Lean Portfolio Managers",
    "Release Train Engineers (RTEs)",
    "Professionals Leading SAFe® Transformations"
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
      ltpLabel: 'Scaled Agile Global Partner',
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

export default AdvancedSAFePracticeConsultantASPCCertificationPath;
