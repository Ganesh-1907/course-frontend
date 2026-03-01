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

const ProfessionalScrumMasterAdvancedCertificationTraining = () => {
  const highlights = [
    { "text": "16 Hours Live Interactive Online Training" },
    { "text": "Earn 16 SEUs and 16 PDUs" },
    { "text": "Real-World Case Studies" },
    { "text": "Comprehensive Study Material" },
    { "text": "Learn Scrum Principles & Applications" },
    { "text": "24/7 Client Assistance" }
  ];

  const individualBenefits = [
    {
      "title": "Skill Development",
      "description": "PSM I certification validates your understanding of Scrum principles and equips you with the skills to lead and facilitate Scrum teams effectively."
    },
    {
      "title": "Career Advancement",
      "description": "Enhances professional credibility and increases career opportunities in Agile and Scrum roles."
    },
    {
      "title": "Expanded Job Opportunities",
      "description": "Demonstrates your commitment to continuous learning and industry best practices."
    },
    {
      "title": "Improved Collaboration",
      "description": "Helps foster transparency, communication, and teamwork within Agile environments."
    },
    {
      "title": "Agile Transformation Capability",
      "description": "Prepares you to support Agile adoption and scaling within organizations."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enhanced Productivity",
      "description": "PSM-certified professionals improve product quality and team efficiency."
    },
    {
      "title": "Faster Time-to-Market",
      "description": "Scrum practices enable quicker delivery of products and features."
    },
    {
      "title": "Higher Employee Engagement",
      "description": "Encourages a collaborative and continuously improving work culture."
    },
    {
      "title": "Better Risk Management",
      "description": "Iterative development helps identify and mitigate risks early."
    },
    {
      "title": "Organizational Agility",
      "description": "Enables organizations to adapt quickly to changing market demands."
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
        "Aspiring Scrum Masters",
        "Project Managers transitioning to Agile",
        "Developers and Product Owners",
        "Agile team members",
        "Professionals interested in Scrum practices"
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
    "Understand the Scrum framework and its components.",
    "Master timeboxing and Scrum events.",
    "Apply Scrum principles to real-world projects.",
    "Enhance team collaboration and productivity.",
    "Develop a continuous improvement mindset."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic understanding of Agile concepts is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete the 16-hour live instructor-led PSM I training."
    },
    {
      "title": "Receive Exam Access",
      "description": "Get the official exam access code from Scrum.org."
    },
    {
      "title": "Clear the Exam",
      "description": "Pass the PSM I assessment with a minimum score of 85%."
    },
    {
      "title": "Get Certified",
      "description": "Download your globally recognized PSM I certificate."
    }
  ];


  const curriculumModules = [
    {
      "title": "Scrum Introduction",
      "topics": [
        "Scrum values and empirical process control",
        "Scrum theory and principles",
        "Why Scrum is effective for product development"
      ]
    },
    {
      "title": "Scrum Framework",
      "topics": [
        "Scrum roles and responsibilities",
        "Time-boxed events",
        "Scrum artifacts and transparency"
      ]
    },
    {
      "title": "Scrum Roles",
      "topics": [
        "Product Owner responsibilities",
        "Scrum Master accountability",
        "Development Team collaboration"
      ]
    },
    {
      "title": "Definition of Done & Acceptance Criteria",
      "topics": [
        "Quality standards in Scrum",
        "Ensuring product increment readiness"
      ]
    },
    {
      "title": "Product Delivery",
      "topics": [
        "Backlog management",
        "Sprint execution",
        "Delivering incremental value"
      ]
    },
    {
      "title": "Working with Teams",
      "topics": ["Organizational challenges", "Agile mindset and culture"]
    },
    {
      "title": "Agile Workstyle",
      "topics": ["Continuous improvement", "Adaptive planning"]
    },
    {
      "title": "Scrum Tools",
      "topics": ["Backlog tracking tools", "Collaboration techniques"]
    }
  ];

  const learningObjectives = [
    {
      "title": "Lead Scrum Teams",
      "description": "Understand Scrum principles and guide teams effectively."
    },
    {
      "title": "Master Scrum Fundamentals",
      "description": "Gain in-depth knowledge of Scrum framework and practices."
    },
    {
      "title": "Develop Servant Leadership",
      "description": "Adopt leadership qualities that empower Agile teams."
    },
    {
      "title": "Resolve Conflicts",
      "description": "Handle team conflicts constructively."
    },
    {
      "title": "Ensure Project Success",
      "description": "Apply Scrum effectively to deliver successful outcomes."
    },
    {
      "title": "Improve Team Dynamics",
      "description": "Strengthen collaboration and behavioral alignment within teams."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Certification FAQs",
      "items": [
        {
          "question": "How long is the PSM I certification valid?",
          "answer": "The certification is valid for a lifetime."
        },
        {
          "question": "What is the passing score?",
          "answer": "The minimum passing score is 85%."
        },
        {
          "question": "Is there an exam retake policy?",
          "answer": "Retakes are available with an additional fee if required."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Training FAQs",
      "items": [
        {
          "question": "How long is the training?",
          "answer": "The training is conducted over 16 hours."
        },
        {
          "question": "Is the exam open book?",
          "answer": "Yes, the PSM I exam is open book."
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
      "description": "PSM I is certified by Scrum.org and recognized worldwide."
    },
    {
      "title": "Expert Trainers",
      "description": "Delivered by experienced Professional Scrum Trainers (PSTs)."
    },
    {
      "title": "Flexible Learning",
      "description": "Live online and corporate training formats available."
    },
    {
      "title": "Lifetime Validity",
      "description": "Certification remains valid for life."
    },
    {
      "title": "Reputed Training Provider",
      "description": "Trusted by professionals and enterprises globally."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Support before, during, and after training."
    },
    {
      "title": "Interactive Sessions",
      "description": "Real-world case studies and scenario-based learning."
    },
    {
      "title": "Future Upgradation",
      "description": "Pathway to advanced certifications like PSM II."
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
    "courseName": "PSM Certification Training Course",
    "breadcrumbName": "Professional Scrum Master I (PSM I) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Scrum principles and become a globally recognized Professional Scrum Master.",
    "benefits": [
      "16 Hours Live Interactive Training",
      "Earn 16 SEUs and PDUs",
      "Certified Professional Scrum Trainers (PSTs)",
      "Globally Recognized Certification",
      "Lifetime Validity"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Professional Scrum Master I (PSM I) Certification Overview",
    "description": [
      "The PSM I certification training provides hands-on knowledge of Scrum principles and practices.",
      "Delivered by certified Professional Scrum Trainers, the course prepares participants to successfully clear the PSM I assessment and apply Scrum effectively in real-world environments."
    ],
    "whatIsTitle": "What is PSM I Certification?",
    "whatIsDescription": [
      "PSM I is a globally recognized certification from Scrum.org that validates your expertise as a Scrum Master."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Live Interactive Sessions",
      "Exam Preparation Support",
      "Real-World Case Studies",
      "Study Materials"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Scrum Theory and Empiricism",
      "Scrum Roles and Events",
      "Backlog Management",
      "Team Facilitation",
      "Agile Mindset"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": ["Live Online Instructor-Led Training"]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide tailored Scrum training programs that enhance team productivity, improve Agile adoption, and drive enterprise-level transformation."
  };

  const courseMetadata = {
    "shortName": "CSM",
    "shortNameAlt": "A-CSM",
    "fullName": "Advanced Certified Scrum Master (A-CSM®)",
    "fullNameAlt": "Advance Certified Scrum Master (A-CSM)",
    "certificateName": "Advanced Scrum Master"
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

export default ProfessionalScrumMasterAdvancedCertificationTraining;
