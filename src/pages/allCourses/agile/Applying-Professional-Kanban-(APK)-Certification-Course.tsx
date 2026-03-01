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

const ApplyingProfessionalKanbanCertificationCourse = () => {
  const highlights = [
    { "text": "2 days of interactive live training with PKTs" },
    { "text": "Real-world scenario-based learning" },
    { "text": "Industry-recognized Professional Kanban certification" },
    { "text": "Hands-on Kanban system exercises" },
    { "text": "Earn PDUs and SEUs for professional development" },
    { "text": "Learn workflow visualization and management" },
    { "text": "Master Kanban operation and value delivery" },
    { "text": "24/7 learning support and assistance" }
  ];

  const individualBenefits = [
    {
      "title": "Individual Benefits",
      "description": "Learn to apply Kanban practices across multiple industries and work environments."
    },
    {
      "title": "Individual Benefits",
      "description": "Build a strong foundation in Kanban principles and workflow thinking."
    },
    {
      "title": "Individual Benefits",
      "description": "Gain hands-on experience operating Kanban systems effectively."
    },
    {
      "title": "Individual Benefits",
      "description": "Understand step-by-step Kanban implementation in organizations."
    },
    {
      "title": "Individual Benefits",
      "description": "Enhance career opportunities with practical Kanban skills and certification."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve workflow transparency through visualization."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce costs by minimizing waste and optimizing resource utilization."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase flexibility and adaptability across workflows."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve team satisfaction and reduce overload risks."
    },
    {
      "title": "Corporate Benefits",
      "description": "Deliver higher quality products through better collaboration and flow management."
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
        "Understand the basic principles of Kanban flow",
        "Recognize the value of WIP limits",
        "Create visual boards to manage workflow",
        "Interpret flow metrics to identify improvement areas",
        "Focus on value delivery through flow optimization",
        "Design and continuously improve Kanban systems"
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
    "Understand Kanban flow principles and workflow management",
    "Apply WIP limits to reduce bottlenecks",
    "Create and manage visual workflow boards",
    "Use flow metrics to drive improvement",
    "Align workflow with value delivery goals",
    "Operate and improve Kanban systems continuously"
  ];

  const prerequisites = [
    "No mandatory prerequisites are required.",
    "Completion of APK training is required before attempting the PK I certification exam."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Register for the APK training program."
    },
    {
      "title": "Learn from PKTs",
      "description": "Participate in instructor-led sessions and practical exercises."
    },
    {
      "title": "Take the Certification Exam",
      "description": "Complete training and appear for the Professional Kanban I (PK I) exam."
    },
    {
      "title": "Become Certified",
      "description": "Pass the exam to earn the Professional Kanban I certification."
    }
  ];

  const curriculumModules = [
    {
      "title": "Kanban Curriculum",
      "topics": [
        "Kanban in the workplace",
        "Kanban myths and misconceptions",
        "Kanban simulations and exercises",
        "Visualization techniques",
        "Workflow elements",
        "Core flow metrics",
        "Cycle time and service level expectations",
        "Managing and improving flow",
        "Designing Kanban boards",
        "Operating Kanban systems",
        "Applying Professional Kanban principles"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Kanban Workflow",
      "description": "Learn the core concepts and principles of Kanban and their role in Agile environments."
    },
    {
      "title": "Work-in-Progress Limits",
      "description": "Understand how WIP limits reduce bottlenecks and improve flow efficiency."
    },
    {
      "title": "Visual Workflow Management",
      "description": "Design and use visual boards to improve team collaboration and transparency."
    },
    {
      "title": "Focus on Value Delivery",
      "description": "Align workflow practices with customer value and continuous improvement."
    },
    {
      "title": "Use Kanban Tools Effectively",
      "description": "Explore tools and technologies that support Kanban implementation."
    },
    {
      "title": "Analyze Flow Metrics",
      "description": "Use workflow metrics to detect issues and improve delivery performance."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is the APK Course?",
          "answer": "APK training helps professionals understand and apply Kanban principles, manage workflow effectively, and prepare for Professional Kanban I certification."
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
      "title": "Globally Acknowledged Certification",
      "description": "Our programs are certified by the world's most distinguished organizations, guaranteeing professional credibility and widespread industry approval."
    },
    {
      "title": "Expert-Led Instruction",
      "description": "Learn from veteran educators who bring a wealth of practical business wisdom and hands-on experience to every session."
    },
    {
      "title": "Versatile Learning Options",
      "description": "We offer a range of instructional methods—including virtual classrooms and corporate workshops—tailored to fit diverse schedules and requirements."
    },
    {
      "title": "Continuous Resource Access",
      "description": "Benefit from round-the-clock access to recorded lectures, comprehensive study materials, and essential learning tools whenever you need them."
    },
    {
      "title": "Demonstrated Success",
      "description": "As a premier education provider, we have a long history of empowering individuals and enterprises to achieve their professional goals and expand their capabilities."
    },
    {
      "title": "Comprehensive Student Support",
      "description": "Viovn provides dedicated guidance at every stage, offering exam preparation, career advice, and ongoing assistance even after your course is complete."
    },
    {
      "title": "Dynamic and Participatory Sessions",
      "description": "Our classes are designed to be highly engaging, utilizing real-world simulations and collaborative discussions to deepen your understanding."
    },
    {
      "title": "Diverse Course Catalog",
      "description": "Viovn delivers a broad spectrum of world-class certifications across Agile, Scrum, SAFe, DevOps, and Project Management disciplines."
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
    "courseName": "Applying Professional Kanban (APK) Certification Course",
    "breadcrumbName": "Applying Professional Kanban (APK) Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Professional Kanban training focused on workflow visualization, flow metrics, and value delivery.",
    "benefits": [
      "2-day interactive instructor-led Professional Kanban training",
      "Learn Kanban flow principles from certified Professional Kanban Trainers (PKTs)",
      "Prepare for the Professional Kanban I (PK I) certification exam",
      "Earn the Professional Kanban I (PK I) certification and digital badge",
      "Receive a globally recognized certification with lifelong validity"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Applying Professional Kanban (APK) Course Overview",
    "description": [
      "Kanban has become a popular approach for managing product delivery and improving customer value. The Applying Professional Kanban (APK) course helps professionals understand how to improve workflow visibility, increase efficiency, and align work with value delivery.",
      "This two-day training provides practical knowledge of Kanban flow principles, visual workflow management, and continuous improvement practices. Participants learn how to design and operate Kanban systems effectively while preparing for the Professional Kanban I (PK I) certification exam."
    ],
    "whatIsTitle": "What Is the APK Course?",
    "whatIsDescription": [
      "Applying Professional Kanban (APK) is a professional-level training that teaches Kanban principles, flow metrics, and visualization techniques. The course focuses on practical application to improve productivity, optimize workflow, and deliver customer value."
    ],
    "whatsIncludedTitle": "What’s Included in APK Training",
    "whatsIncludedDescription": [
      "Instructor-led live training by Professional Kanban Trainers",
      "Hands-on Kanban simulations and practical exercises",
      "Workflow visualization and metrics practice",
      "Exam preparation guidance for PK I certification",
      "Real-world scenario-based learning",
      "Certification support and post-training assistance"
    ],
    "skillsTitle": "Skills Covered in APK Training",
    "skills": [
      "Kanban flow fundamentals",
      "Work-in-progress (WIP) limits",
      "Workflow visualization techniques",
      "Flow metrics and analytics",
      "Value-driven delivery mindset",
      "Designing and operating Kanban systems",
      "Continuous improvement using flow principles"
    ],
    "modesTitle": "Training Modes Available",
    "modesDescription": [
      "APK training is delivered through live instructor-led sessions with practical exercises and collaborative learning activities."
    ]
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn offers tailored corporate Kanban training programs to improve workflow visibility, efficiency, and value delivery across teams and organizations."
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

export default ApplyingProfessionalKanbanCertificationCourse;
