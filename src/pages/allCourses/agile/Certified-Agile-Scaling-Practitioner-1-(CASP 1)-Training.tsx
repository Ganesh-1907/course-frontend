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

const CertifiedAgileScalingPractitioner1Training = () => {
  const highlights = [
    { "text": "16-Hour Live Instructor-Led Sessions" },
    { "text": "Experienced Agile Scaling Experts" },
    { "text": "Two-Year Scrum Alliance Membership" },
    { "text": "Pattern-Based Scaling Approach" },
    { "text": "24/7 Learner Assistance" }
  ];


  const individualBenefits = [
    {
      "title": "Advanced Scaling Expertise",
      "description": "Develop the mindset and skills required to adapt Agile practices to complex organizational environments."
    },
    {
      "title": "Framework Evaluation Capability",
      "description": "Recognize and apply scaling patterns across frameworks such as LeSS, SAFe, and Spotify."
    },
    {
      "title": "Strategic Alignment",
      "description": "Align scaling approaches with organizational goals and enterprise strategies."
    },
    {
      "title": "Continuous Improvement Mindset",
      "description": "Understand how scaling models must evolve as organizational needs change."
    },
    {
      "title": "Global Agile Community Access",
      "description": "Join a global network of Agile practitioners for continuous learning and professional growth."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enterprise Agility",
      "description": "Enable large-scale Agile adoption without compromising responsiveness."
    },
    {
      "title": "Improved Collaboration",
      "description": "Foster a shared understanding of Agile principles across departments."
    },
    {
      "title": "Reduced Communication Gaps",
      "description": "Establish a common Agile language across teams."
    },
    {
      "title": "Higher Employee Engagement",
      "description": "Empower teams with ownership and autonomy."
    },
    {
      "title": "Proactive Risk Management",
      "description": "Identify and mitigate scaling challenges early in the project lifecycle."
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
    "Understand what scaling Agile means in enterprise contexts.",
    "Apply Agile patterns to overcome scaling challenges.",
    "Align scaling strategies with enterprise objectives.",
    "Manage complexity across multi-team, multi-site environments.",
    "Drive sustainable Agile transformation initiatives."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic understanding of Agile and Scrum is recommended.",
    "Experience working in Agile teams is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Register for the CASP 1 training program."
    },
    {
      "title": "Active Participation",
      "description": "Engage in workshops, discussions, and collaborative exercises."
    },
    {
      "title": "Complete Learning Activities",
      "description": "Successfully complete course activities and evaluations."
    },
    {
      "title": "Earn Certification",
      "description": "Receive your CASP 1 certification upon successful completion."
    }
  ];

  const curriculumModules = [
    {
      "title": "Part 1: Understanding Scaling",
      "topics": [
        "Definition of Scaling Agile",
        "Why Scaling is Necessary",
        "Philosophies of Scaling: Scaled vs Scaling vs Descaling",
        "Common Scaling Challenges"
      ]
    },
    {
      "title": "Part 2: Agile Patterns for Scaling",
      "topics": [
        "Understanding Patterns and Anti-Patterns",
        "Frameworks and Their Relationship to Patterns",
        "Selecting Appropriate Scaling Patterns",
        "Logistical and Organizational Challenges"
      ]
    },
    {
      "title": "Part 3: Sustainable Scaling",
      "topics": [
        "Prioritizing Scaling Challenges",
        "Using Scaffolding for Safer Transformation",
        "Organizational Change Management (OCM)",
        "Agile Scaling Model Comparisons"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Define Agile Scaling",
      "description": "Understand how Agile principles apply to large, complex organizational environments."
    },
    {
      "title": "Recognize Patterns and Anti-Patterns",
      "description": "Identify successful scaling strategies and common pitfalls."
    },
    {
      "title": "Apply Scaling Frameworks Strategically",
      "description": "Evaluate frameworks such as SAFe and LeSS based on context."
    },
    {
      "title": "Manage Organizational Change",
      "description": "Lead change initiatives to support Agile transformation."
    },
    {
      "title": "Implement Sustainable Scaling Practices",
      "description": "Apply practical strategies for long-term enterprise agility."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "CASP 1 FAQs",
      "items": [
        {
          "question": "What is CASP 1 certification?",
          "answer": "CASP 1 is a Scrum Alliance certification focused on scaling Agile practices effectively within complex organizations."
        },
        {
          "question": "Are there prerequisites?",
          "answer": "No mandatory prerequisites. Basic Agile knowledge is recommended."
        },
        {
          "question": "Is there an exam?",
          "answer": "No formal examination is required for CASP 1 certification."
        },
        {
          "question": "How long is the training?",
          "answer": "The training is 16 hours conducted over two days."
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
      "description": "Recognized by Scrum Alliance and respected worldwide."
    },
    {
      "title": "Expert Trainers",
      "description": "Delivered by certified and experienced Agile practitioners."
    },
    {
      "title": "Flexible Learning Options",
      "description": "Live online and corporate training formats available."
    },
    {
      "title": "Lifetime Learning Value",
      "description": "Access to updated resources and industry best practices."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by enterprises across industries."
    },
    {
      "title": "End-to-End Support",
      "description": "Guidance before, during, and after training."
    },
    {
      "title": "Interactive Workshops",
      "description": "Engaging real-world scenarios and group discussions."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Pathways to advanced Agile and leadership certifications."
    }
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
    "courseName": "Certified Agile Scaling Practitioner 1 (CASP 1) Certification Training",
    "breadcrumbName": "Certified Agile Scaling Practitioner 1 (CASP 1) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Develop a pattern-based approach to scaling Agile across complex enterprise environments.",
    "benefits": [
      "16-Hour Live Instructor-Led Training",
      "Delivered by Experienced Agile Scaling Experts",
      "Two-Year Scrum Alliance Membership",
      "Pattern-Based Scaling Approach",
      "Comprehensive Post-Training Support"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Certified Agile Scaling Practitioner 1 (CASP 1) Overview",
    "description": [
      "The Certified Agile Scaling Practitioner 1 (CASP 1) course is designed to help professionals understand and implement Agile scaling in complex organizational environments.",
      "This program moves beyond prescriptive frameworks and focuses on identifying recurring patterns in scaling challenges. Participants learn how to select and apply the most suitable scaling approaches based on their organizational context.",
      "Delivered by experienced Agile practitioners, the course bridges theory with practical implementation strategies for sustainable enterprise agility."
    ],
    "whatIsTitle": "What is CASP 1 Certification?",
    "whatIsDescription": [
      "CASP 1 is a Scrum Alliance certification focused on scaling Agile effectively across teams and enterprise structures. It emphasizes pattern recognition, organizational adaptability, and sustainable Agile transformation."
    ],
    "whatsIncludedTitle": "What’s Included in CASP 1 Training?",
    "whatsIncludedDescription": [
      "16 Hours of Live Training",
      "Two-Year Scrum Alliance Membership",
      "Interactive Workshops and Case Studies",
      "Real-World Scaling Scenarios",
      "Guidance from Certified Agile Experts"
    ],
    "skillsTitle": "Skills Covered in CASP 1",
    "skills": [
      "Understanding Agile Scaling Principles",
      "Pattern Recognition in Scaling Challenges",
      "Organizational Change Management",
      "Scaling Framework Evaluation",
      "Enterprise Agile Strategy Alignment"
    ],
    "modesTitle": "Training Delivery Mode",
    "modesDescription": [
      "CASP 1 training is delivered through live virtual instructor-led sessions with interactive discussions, exercises, and collaborative workshops."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver customized enterprise Agile scaling programs aligned with business objectives. Our trainers bridge knowledge gaps and help organizations achieve sustainable transformation."
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

export default CertifiedAgileScalingPractitioner1Training;
