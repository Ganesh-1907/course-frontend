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

const AgileCoachingSkillsCertifiedFacilitatorTraining = () => {
  const highlights = [
    { "text": "2-Day Live Online Training Session" },
    { "text": "Certified Scrum Alliance Trainers" },
    { "text": "Scrum Alliance Membership Included" },
    { "text": "Interactive Doubt-Clearing Sessions" },
    { "text": "24/7 Learning Assistance" }
  ];
  const individualBenefits = [
    {
      "title": "Global Agile Network Access",
      "description": "Gain membership in a global network of Agile professionals through Scrum Alliance."
    },
    {
      "title": "Facilitation Mindset Development",
      "description": "Develop the mindset of a neutral facilitator to guide discussions and decision-making effectively."
    },
    {
      "title": "Conflict Management Expertise",
      "description": "Learn techniques to manage disagreements and resistance constructively."
    },
    {
      "title": "Advanced Facilitation Skills",
      "description": "Master techniques to conduct productive workshops and Agile ceremonies."
    },
    {
      "title": "Career Advancement Path",
      "description": "Build a strong foundation for advanced certifications such as Certified Agile Coach (CEC) or Certified Team Coach (CTC)."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Smooth Agile Adoption",
      "description": "Enable seamless Agile transitions across teams and departments."
    },
    {
      "title": "Improved Team Collaboration",
      "description": "Promote trust, communication, and team cohesion."
    },
    {
      "title": "Faster Conflict Resolution",
      "description": "Address team challenges quickly and effectively."
    },
    {
      "title": "Enhanced Productivity",
      "description": "Improve workflow efficiency and accelerate delivery timelines."
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
    "Understand the role and responsibilities of an Agile Facilitator.",
    "Cultivate a neutral and inclusive facilitation mindset.",
    "Guide teams through conflicts constructively.",
    "Tailor facilitation approaches to diverse team dynamics.",
    "Apply facilitation techniques during and after Agile events."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic experience in leading meetings or Agile ceremonies is beneficial.",
    "Interest in Agile coaching and facilitation is recommended."
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete the 2-day live CAF training session."
    },
    {
      "title": "Participate Actively",
      "description": "Engage in workshops and practical facilitation exercises."
    },
    {
      "title": "Complete Course Requirements",
      "description": "Fulfill participation and learning objectives."
    },
    {
      "title": "Earn Certification",
      "description": "Receive your Certified Agile Facilitator (CAF) certification."
    }
  ];

  const curriculumModules = [
    {
      "title": "Part 1: Defining Facilitation",
      "topics": [
        "Purpose of Facilitation",
        "Facilitator Mindset and Core Competencies"
      ]
    },
    {
      "title": "Part 2: Understanding Group Context",
      "topics": [
        "Facilitation Process Overview",
        "Creating Psychological Safety"
      ]
    },
    {
      "title": "Part 3: Agile Values and Principles",
      "topics": [
        "Facilitating Scrum Events",
        "Driving Effective Outcomes"
      ]
    },
    {
      "title": "Part 4: Facilitator Orientation – From the Front",
      "topics": [
        "Divergent and Convergent Thinking Techniques",
        "Visual Thinking and Storytelling"
      ]
    },
    {
      "title": "Part 5: Facilitator Orientation – From the Back",
      "topics": [
        "Active Listening",
        "Constructive Feedback Techniques"
      ]
    },
    {
      "title": "Part 6: Facilitator Orientation – From the Inside",
      "topics": [
        "Emotional Intelligence",
        "Influencing Group Dynamics"
      ]
    },
    {
      "title": "Part 7: Co-Facilitation",
      "topics": [
        "Benefits of Co-Facilitation",
        "Collaborative Facilitation Approaches"
      ]
    },
    {
      "title": "Part 8: Conflict Facilitation",
      "topics": [
        "Managing Group Conflict",
        "Constructive Resolution Strategies"
      ]
    },
    {
      "title": "Part 9: Driving Action Forward",
      "topics": [
        "Implementing Outcomes",
        "Measuring Facilitation Success"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Agile Framework Understanding",
      "description": "Understand Agile principles and apply them effectively in facilitation contexts."
    },
    {
      "title": "Coaching Techniques",
      "description": "Develop active listening, questioning, and feedback skills."
    },
    {
      "title": "Facilitation Mastery",
      "description": "Guide Agile events and workshops productively."
    },
    {
      "title": "Team Collaboration",
      "description": "Build trust and improve team communication."
    },
    {
      "title": "Psychological Safety",
      "description": "Create inclusive environments for open participation."
    },
    {
      "title": "Servant Leadership",
      "description": "Empower teams through supportive leadership."
    },
    {
      "title": "Agile Tools & Metrics",
      "description": "Understand Agile tools and performance measurement techniques."
    },
    {
      "title": "Continuous Improvement",
      "description": "Promote ongoing learning through retrospectives and experimentation."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "CAF FAQs",
      "items": [
        {
          "question": "What is CAF certification?",
          "answer": "CAF is a Scrum Alliance certification focused on developing advanced Agile facilitation skills."
        },
        {
          "question": "Are there prerequisites?",
          "answer": "No mandatory prerequisites. Basic Agile knowledge is helpful."
        },
        {
          "question": "Is there an exam?",
          "answer": "No formal exam is required for CAF certification."
        },
        {
          "question": "How long is the training?",
          "answer": "The training spans 16 hours across two days."
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
      "description": "Recognized by leading Agile certification bodies worldwide."
    },
    {
      "title": "Expert Trainers",
      "description": "Delivered by experienced Scrum Alliance-approved instructors."
    },
    {
      "title": "Flexible Learning",
      "description": "Live online and corporate training formats available."
    },
    {
      "title": "Lifetime Learning Value",
      "description": "Access to updated learning materials and resources."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by organizations across industries."
    },
    {
      "title": "End-to-End Support",
      "description": "Guidance before, during, and after training."
    },
    {
      "title": "Interactive Training",
      "description": "Real-world facilitation scenarios and group participation."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Pathways to advanced Agile and coaching certifications."
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
    "courseName": "Certified Agile Facilitator (CAF) Certification Training",
    "breadcrumbName": "Certified Agile Facilitator (CAF) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master professional facilitation skills to lead Agile teams with confidence and impact.",
    "benefits": [
      "2-Day Live Online Instructor-Led Training",
      "Delivered by Scrum Alliance Approved Trainers",
      "Scrum Alliance Membership Included",
      "Interactive Facilitation Workshops",
      "24/7 Learning Support"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Certified Agile Facilitator (CAF) Certification Overview",
    "description": [
      "The Certified Agile Facilitator (CAF) course equips professionals with advanced facilitation skills required to support Agile teams and organizations.",
      "This program focuses on facilitation mindset, conflict resolution, team collaboration, and psychological safety. Participants learn how to guide discussions, workshops, and Agile events effectively.",
      "Delivered by Scrum Alliance-approved instructors, this immersive training combines theory with practical exercises to build real-world facilitation expertise."
    ],
    "whatIsTitle": "What is CAF Certification?",
    "whatIsDescription": [
      "CAF is a Scrum Alliance certification designed for professionals who want to strengthen their facilitation capabilities within Agile environments. It emphasizes neutral leadership, group dynamics, and structured facilitation techniques."
    ],
    "whatsIncludedTitle": "What’s Included in CAF Training?",
    "whatsIncludedDescription": [
      "2 Days Live Online Training",
      "Scrum Alliance Membership",
      "Hands-on Facilitation Exercises",
      "Conflict Management Techniques",
      "Post-Training Support"
    ],
    "skillsTitle": "Skills Covered in CAF",
    "skills": [
      "Agile Facilitation Techniques",
      "Conflict Resolution Strategies",
      "Psychological Safety Creation",
      "Active Listening and Powerful Questioning",
      "Team Collaboration Enhancement"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "CAF training is delivered through live virtual instructor-led sessions featuring interactive workshops, group discussions, and real-world facilitation simulations."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver customized Agile facilitation programs that enhance collaboration, improve team performance, and support enterprise Agile transformation."
  }

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

export default AgileCoachingSkillsCertifiedFacilitatorTraining;
