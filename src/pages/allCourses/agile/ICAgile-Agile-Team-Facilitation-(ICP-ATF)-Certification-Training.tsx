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

const ICAgileAgileTeamFacilitationCertificationTraining = () => {
  const highlights = [
    { "text": "14 hours of structured Agile facilitation training" },
    { "text": "Earn 14 PDUs" },
    { "text": "Instructor-led interactive learning sessions" },
    { "text": "ICAgile-accredited courseware and materials" },
    { "text": "Hands-on facilitation practice and simulations" },
    { "text": "Lifetime certification validity" },
    { "text": "Post-training guidance and support" }
  ];

  const individualBenefits = [
    {
      "title": "Individuals Benefits",
      "description": "Develop strong facilitation skills to plan and guide Agile meetings effectively."
    },
    {
      "title": "Individuals Benefits",
      "description": "Strengthen Agile leadership by enabling collaboration without authority."
    },
    {
      "title": "Individuals Benefits",
      "description": "Gain confidence handling team dynamics, resistance, and conflict."
    },
    {
      "title": "Individuals Benefits",
      "description": "Improve professional credibility with the globally recognized ICP-ATF certification."
    },
    {
      "title": "Individuals Benefits",
      "description": "Expand career opportunities in Scrum Master, Agile Coach, and facilitation roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve meeting effectiveness through structured facilitation practices."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase team engagement and collaboration across Agile teams."
    },
    {
      "title": "Corporate Benefits",
      "description": "Enable better and faster team decision-making."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce conflict and miscommunication within teams."
    },
    {
      "title": "Corporate Benefits",
      "description": "Build stronger self-organizing and autonomous Agile teams."
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
        "Facilitate Agile meetings with clear objectives and balanced participation",
        "Design collaborative workshops that produce actionable outcomes",
        "Apply facilitation tools to improve engagement and ownership",
        "Manage group dynamics while maintaining psychological safety",
        "Support self-organization without imposing solutions",
        "Promote continuous improvement through structured reflection and feedback"
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
    "Facilitate Agile team meetings with clarity and structure",
    "Design effective collaborative workshops aligned with Agile objectives",
    "Improve engagement using proven facilitation techniques",
    "Manage group dynamics and conflict constructively",
    "Support team self-organization and alignment",
    "Drive continuous improvement through reflective practices"
  ];
  const prerequisites = [
    'No mandatory prerequisites are required.',
    'Basic understanding of Scrum principles is recommended.',
    'Completion of formal training by a Scrum Alliance-approved CSD trainer is required.',
  ];

  const certificationSteps = [
    {
      "title": "Join the Training",
      "description": "Enroll in an ICAgile-authorized ICP-ATF training program."
    },
    {
      "title": "Practice Facilitation Skills",
      "description": "Participate in guided exercises, simulations, and collaborative activities."
    },
    {
      "title": "Complete Assessments",
      "description": "Actively participate in ongoing assessments and practical evaluations."
    },
    {
      "title": "Earn Certification",
      "description": "Receive the ICAgile Certified Professional – Agile Team Facilitation (ICP-ATF) credential upon completion."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Agile Team Facilitation Foundations",
      "topics": [
        "Facilitation fundamentals and Agile facilitation mindset",
        "Facilitator development path",
        "Assessing facilitator effectiveness",
        "Serving Agile teams effectively"
      ]
    },
    {
      "title": "Module 2: Designing and Conducting Facilitated Sessions",
      "topics": [
        "Encouraging full team participation",
        "Facilitating collaborative conversations",
        "Creating collaborative environments",
        "Meeting organization tools and facilitator guides"
      ]
    },
    {
      "title": "Module 3: Facilitating Agile Framework Meetings",
      "topics": [
        "Facilitation plans for Scrum events",
        "Facilitating retrospectives",
        "Adapting facilitation based on team maturity",
        "Scrum values and principles"
      ]
    },
    {
      "title": "Module 4: Facilitation of Key Agile Meetings",
      "topics": [
        "Facilitation planning for Sprint Planning and Review",
        "Backlog refinement facilitation",
        "Adjusting facilitation based on context",
        "Applying facilitation in real team scenarios"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand the Role of an Agile Team Facilitator",
      "description": "Develop clarity on the facilitator role and how it differs from traditional leadership approaches."
    },
    {
      "title": "Learn Core Facilitation Mindsets",
      "description": "Build strong facilitation principles such as neutrality, transparency, and shared ownership."
    },
    {
      "title": "Explore Agile Facilitation Techniques",
      "description": "Practice methods used in Agile ceremonies, workshops, and collaborative sessions."
    },
    {
      "title": "Design Effective Team Sessions",
      "description": "Structure meetings and workshops with clear objectives, flow, and expected outcomes."
    },
    {
      "title": "Understand Group Dynamics",
      "description": "Recognize how team behaviors and interactions impact collaboration."
    },
    {
      "title": "Create Inclusive Environments",
      "description": "Promote participation, psychological safety, and balanced contribution."
    },
    {
      "title": "Develop Observation and Adaptation Skills",
      "description": "Adapt facilitation style in real time to improve team outcomes."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is ICAgile ICP-ATF Certification?",
          "answer": "ICP-ATF is an ICAgile certification focused on Agile team facilitation, collaboration, and group dynamics to help teams work more effectively."
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
      "description": "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries."
    },
    {
      "title": "Expert Trainer",
      "description": "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes."
    },
    {
      "title": "Flexible Learning",
      "description": "Provides a variety of methods of learning, such as classes, online, and corporate Training, that meet the needs of different individuals and their schedules."
    },
    {
      "title": "Lifetime Access",
      "description": "Enjoy all-year access to the recordings of sessions, course materials, and study tools."
    },
    {
      "title": "Proven Track Record",
      "description": "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities and meet their career ambitions."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Simpliaxis Offers ongoing assistance prior to, during, and after Training and includes study material exams, guidance for participants on certification, and career choices."
    },
    {
      "title": "Interactive and engaging Training",
      "description": "Our Training sessions are designed to be extremely interactive, featuring real-world scenarios with group participation, questions & answers to aid in understanding."
    },
    {
      "title": "A wide range of courses",
      "description": "Simpliaxis offers various internationally acknowledged certification courses in Agile, Scrum, SAFe, DevOps, Project Management, and more."
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
    "courseName": "ICAgile Agile Team Facilitation (ICP-ATF) Certification Training",
    "breadcrumbName": "ICAgile Agile Team Facilitation (ICP-ATF) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Intermediate Agile coaching program focused on facilitation mindset, collaboration, and team dynamics.",
    "benefits": [
      "14 hours of live instructor-led Agile team facilitation training",
      "Earn 14 PDUs while developing practical facilitation skills",
      "Learn through ICAgile-authorized, outcome-based learning materials",
      "Hands-on experiential activities and collaborative team exercises",
      "Earn the ICAgile Certified Professional – Agile Team Facilitation (ICP-ATF) credential"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "ICAgile Agile Team Facilitation (ICP-ATF) Course Overview",
    "description": [
      "The ICAgile Agile Team Facilitation (ICP-ATF) course is designed to help professionals develop practical facilitation skills required to support Agile teams. This 14-hour program focuses on facilitation as a core Agile competency, enabling participants to design and lead effective meetings, workshops, and collaborative sessions that improve team performance and outcomes."
    ],
    "whatIsTitle": "What Is ICAgile Agile Team Facilitation (ICP-ATF)?",
    "whatIsDescription": [
      "ICP-ATF is an intermediate-level certification within the ICAgile Agile Coaching track. It helps professionals strengthen facilitation mindset, collaboration techniques, and group interaction skills to support self-organizing Agile teams and foster continuous improvement."
    ],
    "whatsIncludedTitle": "What’s Included in ICP-ATF Training",
    "whatsIncludedDescription": [
      "ICAgile-authorized learning content",
      "Instructor-led facilitation practice sessions",
      "Hands-on team activities and simulations",
      "Practical facilitation frameworks and tools",
      "Collaborative learning environment with peer interaction",
      "Globally recognized ICAgile ICP-ATF credential"
    ],
    "skillsTitle": "Skills Covered in ICP-ATF Training",
    "skills": [
      "Agile facilitation mindset and principles",
      "Designing and facilitating Agile workshops",
      "Communication and collaboration techniques",
      "Managing group dynamics and conflict",
      "Supporting team decision-making",
      "Facilitating continuous improvement",
      "Adapting facilitation style to team maturity"
    ],
    "modesTitle": "Training Modes Available",
    "modesDescription": [
      "Training is delivered through instructor-led virtual sessions with interactive collaboration. Customized corporate training is also available for organizations looking to strengthen internal Agile facilitation capabilities."
    ]
  };

  const corporateData = {
    "courseName": "Why Simpliaxis for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Simpliaxis provides tailored corporate training programs designed to improve facilitation, collaboration, and Agile maturity within organizations. Programs are customized to meet team-specific challenges and business goals."
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

export default ICAgileAgileTeamFacilitationCertificationTraining;
