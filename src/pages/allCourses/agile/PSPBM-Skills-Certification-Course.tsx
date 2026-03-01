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

const PSPBMSkillsCertificationCourse = () => {
  const highlights = [
    { "text": "1-day interactive live training by Professional Scrum Trainers (PSTs)" },
    { "text": "Earn 7 PDUs and SEUs for professional development" },
    { "text": "Free pass code for PSPBM Skills certification assessment" },
    { "text": "Industry-recognized certification focused on Product Backlog Management" },
    { "text": "Learn AI tools to simplify backlog refinement and prioritization" },
    { "text": "Free second exam attempt within 14 days of training" },
    { "text": "Resume building and exam preparation assistance" },
    { "text": "24/7 customer support and learning assistance" }
  ];

  const individualBenefits = [
    {
      "title": "Individual Benefits",
      "description": "Enhance Product Backlog management and prioritization skills."
    },
    {
      "title": "Individual Benefits",
      "description": "Improve backlog transparency and clarity."
    },
    {
      "title": "Individual Benefits",
      "description": "Strengthen collaboration with Scrum teams, stakeholders, and customers."
    },
    {
      "title": "Individual Benefits",
      "description": "Learn how technology supports effective Product Backlog creation."
    },
    {
      "title": "Individual Benefits",
      "description": "Boost career growth with a recognized Scrum certification."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve product quality through organized and transparent Product Backlogs."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce waste and align work with customer needs."
    },
    {
      "title": "Corporate Benefits",
      "description": "Encourage innovation using tools and technologies for backlog refinement."
    },
    {
      "title": "Corporate Benefits",
      "description": "Gain competitive advantage through value-focused Product Backlog management."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve customer satisfaction through better product alignment."
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
        "Learn techniques to create and refine Product Backlogs",
        "Develop effective collaboration with stakeholders",
        "Recognize and interpret customer requirements",
        "Create effective Product Backlog items aligned with customer needs",
        "Improve transparency within the Product Backlog",
        "Understand empiricism as a competitive advantage",
        "Use AI tools to improve backlog management"
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
    "Create and refine Product Backlogs effectively",
    "Improve stakeholder collaboration and communication",
    "Translate customer needs into backlog items",
    "Increase Product Backlog transparency",
    "Apply empiricism and AI tools in backlog management"
  ];

  const prerequisites = [
    "No mandatory prerequisites are required.",
    "Basic understanding of Scrum, Agile, and Product Backlogs is recommended."
  ];

  const certificationSteps = [
    {
      "title": "Step 1: Register",
      "description": "Enroll in the PSPBM Skills Certification Training with Viovn."
    },
    {
      "title": "Step 2: Gain Knowledge",
      "description": "Complete training sessions delivered by Professional Scrum Trainers (PSTs)."
    },
    {
      "title": "Step 3: Receive Assessment Access",
      "description": "After training completion, receive access credentials for the PSPBM Skills assessment."
    },
    {
      "title": "Step 4: Get Certified",
      "description": "Pass the PSPBM Skills assessment and receive a lifelong certification."
    }
  ];

  const curriculumModules = [
    {
      "title": "Curriculum",
      "topics": [
        "Product Backlog Management",
        "Aligning Product Backlog with Product Goals",
        "Stakeholder collaboration techniques",
        "Backlog refinement and decomposition",
        "Use of AI tools in Product Backlog management",
        "Transparency and empiricism in Scrum"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Create Effective Product Backlogs",
      "description": "Develop skills to build clear, structured Product Backlogs that support sprint goals and improve product quality."
    },
    {
      "title": "Align Backlog with Business Goals",
      "description": "Learn how Product Owners align backlog priorities with business outcomes and customer expectations."
    },
    {
      "title": "Apply Real-World Practices",
      "description": "Use real-world case studies and practical scenarios to manage complex Product Backlogs effectively."
    },
    {
      "title": "Improve Sprint Planning",
      "description": "Understand how a well-defined Product Backlog enables efficient sprint planning and successful outcomes."
    },
    {
      "title": "Strategic Backlog Implementation",
      "description": "Plan and structure backlog items strategically to communicate priorities clearly with developers."
    },
    {
      "title": "Use AI in Product Backlog Management",
      "description": "Learn how AI tools help simplify backlog refinement and improve transparency and decision-making."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is PSPBM Skills Certification?",
          "answer": "PSPBM Skills Certification focuses on Product Backlog Management, stakeholder collaboration, and customer-value alignment within Scrum."
        },
        {
          "question": "Are prerequisites required?",
          "answer": "No mandatory prerequisites are required, but Scrum and Agile knowledge is helpful."
        },
        {
          "question": "How long is the certification valid?",
          "answer": "The certification is valid for life with no renewal required."
        },
        {
          "question": "What is the exam format?",
          "answer": "The assessment consists of 20 multiple-choice questions to be completed in 30 minutes with an 85% passing score."
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
      "title": "Internationally Recognized Credentials",
      "description": "Our training programs are endorsed by the world's most prestigious certification bodies, ensuring your professional expertise is respected and valued across all industries."
    },
    {
      "title": "Industry-Leading Expert Instructors",
      "description": "Gain specialized knowledge from seasoned project management veterans who share profound real-world insights and actionable business experience in every session."
    },
    {
      "title": "Versatile Learning Modalities",
      "description": "Viovn offers a range of educational formats—from interactive virtual classrooms to specialized corporate sessions—tailored to your unique schedule and learning requirements."
    },
    {
      "title": "Persistent Access to Learning Assets",
      "description": "Enjoy continuous, long-term access to all recorded sessions, masterclass materials, and advanced study tools to support your ongoing professional development."
    },
    {
      "title": "Demonstrated Excellence",
      "description": "As a distinguished global training provider, we have an extensive history of empowering both individual professionals and major enterprises to achieve superior performance."
    },
    {
      "title": "Holistic Career Guidance",
      "description": "Viovn provides comprehensive support throughout your journey, including dedicated exam preparation, certification roadmaps, and strategic career counseling beyond the classroom."
    },
    {
      "title": "Dynamic and Immersive Workshops",
      "description": "Our training sessions are highly interactive, utilizing authentic industry simulations and collaborative activities to ensure practical mastery of complex project scenarios."
    },
    {
      "title": "Comprehensive Certification Portfolio",
      "description": "Viovn delivers an expansive suite of globally acknowledged certifications in Agile, Scrum, SAFe, DevOps, and diverse Project Management methodologies."
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
    "courseName": "PSPBM Skills Certification Course",
    "breadcrumbName": "PSPBM Skills Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Professional Scrum Product Backlog Management training focused on transparency, collaboration, and backlog refinement skills.",
    "benefits": [
      "1-day interactive live sessions delivered by Professional Scrum Trainers (PSTs)",
      "Earn 7 PDUs and SEUs with PSPBM Skills training",
      "Learn techniques to maintain transparency in the Product Backlog",
      "Improve collaboration with Scrum teams and stakeholders",
      "Globally recognized certification with lifetime validity"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "PSPBM Skills Certification Course Overview",
    "description": [
      "The PSPBM Skills Certification Course is designed to help professionals develop practical techniques for managing and refining Product Backlogs effectively. A well-structured Product Backlog provides clarity, transparency, and alignment with product goals while enabling teams to deliver customer value.",
      "This training includes hands-on experience with backlog refinement techniques such as slicing, decomposition, and prioritization of Product Backlog items. Participants also learn how simplicity and transparency improve overall backlog quality.",
      "PSPBM Skills Certification helps Scrum Masters and Product Owners align backlog items with product goals, improve stakeholder collaboration, and support smooth Scrum execution throughout the product lifecycle."
    ],
    "whatIsTitle": "What Is PSPBM Skills Certification?",
    "whatIsDescription": [
      "PSPBM Skills Certification focuses on developing Product Backlog Management skills within Scrum. It helps professionals improve backlog clarity, stakeholder collaboration, and value-driven delivery."
    ],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "",
    "skills": [],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn delivers specialized enterprise programs designed to accelerate project delivery, foster Agile cultural transformation, and enhance global workforce agility through bespoke training."
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

export default PSPBMSkillsCertificationCourse;
