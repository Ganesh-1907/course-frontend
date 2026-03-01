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

const ICAgileSystemsCoachingCertificationTraining = () => {
  const highlights = [
    { "text": "14-hour intensive live training" },
    { "text": "Earn 14 PDUs upon completion" },
    { "text": "Focus on organizational-level coaching" },
    { "text": "Deep systems thinking development" },
    { "text": "Advanced ICAgile coaching pathway" },
    { "text": "Digital learning resources included" },
    { "text": "Lifetime certification validity" },
    { "text": "Globally recognized credential" },
    { "text": "Framework-agnostic coaching approach" }
  ];

  const individualBenefits = [
    {
      "title": "Individuals Benefits",
      "description": "Strengthen professional credibility with advanced systems coaching expertise."
    },
    {
      "title": "Individuals Benefits",
      "description": "Develop strategic coaching capabilities for complex organizations."
    },
    {
      "title": "Individuals Benefits",
      "description": "Improve career opportunities with higher compensation potential."
    },
    {
      "title": "Individuals Benefits",
      "description": "Gain access to executive-level coaching opportunities."
    },
    {
      "title": "Individuals Benefits",
      "description": "Expand into consulting, leadership, and transformation roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Build internal coaching capabilities for large-scale transformation."
    },
    {
      "title": "Corporate Benefits",
      "description": "Create sustainable organizational agility through systems thinking."
    },
    {
      "title": "Corporate Benefits",
      "description": "Accelerate leadership development in complex environments."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase ROI from transformation initiatives."
    },
    {
      "title": "Corporate Benefits",
      "description": "Drive long-term cultural evolution across teams."
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
        "Apply systems thinking to identify patterns, feedback loops, and leverage points",
        "Coach across teams, management, and executive leadership",
        "Support cultural transformation through targeted interventions",
        "Handle organizational politics while maintaining coaching integrity",
        "Measure and communicate transformation outcomes effectively"
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
    "Use systems thinking frameworks to identify organizational patterns and opportunities",
    "Work across multiple organizational levels as a coach",
    "Enable cultural change through effective facilitation and coaching",
    "Navigate power dynamics professionally while maintaining ethical standards",
    "Demonstrate business impact using measurable transformation indicators"
  ];

  const prerequisites = [
    'Active Certified ScrumMaster (CSM) certification',
    'Minimum 12 months of Scrum Master experience within the last five years',
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Join an ICAgile-authorized ICP-SYS course delivered by an accredited provider."
    },
    {
      "title": "Participate Actively",
      "description": "Engage in learning sessions and coaching practices throughout the program."
    },
    {
      "title": "Complete Activities",
      "description": "Finish all exercises, simulations, and assignments successfully."
    },
    {
      "title": "Earn Certification",
      "description": "Receive your ICP-SYS certification and digital badge upon completion."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Systems Coaching Foundations",
      "topics": [
        "Systems Fundamentals",
        "Systems Thinking",
        "Complex Adaptive Systems",
        "Introduction to Systems Coaching",
        "System as a Client"
      ]
    },
    {
      "title": "Module 2: Coaching the System",
      "topics": [
        "Systems Coaching Conversations",
        "Creating Awareness and Alignment",
        "Facilitation Skills",
        "Professional Coaching Practices"
      ]
    },
    {
      "title": "Module 3: The Coach’s Growth",
      "topics": [
        "Ethical Coaching Considerations",
        "Managing Bias",
        "Developing Coaching Range",
        "Co-coaching Approaches"
      ]
    }
  ]

  const learningObjectives = [
    {
      "title": "Build Multi-Level Coaching Skills",
      "description": "Develop the ability to coach teams, managers, and executives within complex environments."
    },
    {
      "title": "Enable Cultural Transformation",
      "description": "Learn practical strategies for shaping agile organizational culture."
    },
    {
      "title": "Navigate Organizational Politics",
      "description": "Understand power structures and work effectively within enterprise environments."
    },
    {
      "title": "Design Systemic Interventions",
      "description": "Create holistic coaching solutions that drive sustainable change."
    },
    {
      "title": "Coach Senior Leadership",
      "description": "Gain skills for executive-level coaching and transformation guidance."
    },
    {
      "title": "Create Conditions for Emergence",
      "description": "Design environments where innovation and adaptability naturally evolve."
    }
  ]

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is ICP-SYS certification?",
          "answer": "ICP-SYS is an ICAgile credential focused on systems coaching, organizational transformation, and enterprise-level agility."
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
      "title": "ICAgile Authorized Training",
      "description": "As an accredited ICAgile partner, Viovn provides genuine systems training that adheres strictly to global industry standards."
    },
    {
      "title": "Transformation-Proven Instructors",
      "description": "Benefit from the expertise of systems coaches who have spent over 15 years leading Fortune 500 transformations across various sectors."
    },
    {
      "title": "Experiential Learning Methodology",
      "description": "Develop practical competencies through a curriculum centered on immersive exercises, organizational simulations, and hands-on coaching."
    },
    {
      "title": "Real-World Transformation Focus",
      "description": "Examine genuine corporate coaching hurdles and transformation success stories drawn directly from our instructors' professional consulting backgrounds."
    },
    {
      "title": "Intimate Learning Cohorts",
      "description": "Our small-group format ensures personal attention, intensive practice sessions, and the chance to build strong connections with fellow learners."
    },
    {
      "title": "Comprehensive Resource Ecosystem",
      "description": "Gain access to a wealth of regularly updated frameworks, templates, and diagnostic tools to support your long-term coaching journey."
    },
    {
      "title": "Flexible Professional Formats",
      "description": "We offer various delivery methods and schedules tailored for busy coaches and corporate groups, maintaining high-quality experiential learning throughout."
    },
    {
      "title": "Ongoing Community Support",
      "description": "Connect with a global network of alumni for peer collaboration, expert consultation, and continuous growth in the field of systems coaching."
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
    "courseName": "ICAgile Systems Coaching (ICP-SYS) Certification Training",
    "breadcrumbName": "ICAgile Systems Coaching (ICP-SYS) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Advanced certification program focused on enterprise-level systems coaching and organizational transformation.",
    "benefits": [
      "14 hours of live, instructor-led ICAgile ICP-SYS training",
      "Develop strong systems thinking and transformation leadership skills",
      "Participate in practical, real-world coaching activities",
      "Learn multi-level coaching for teams, leaders, and organizations",
      "Enable sustainable enterprise agility with confidence"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of ICAgile Systems Coaching (ICP-SYS) Certification Training",
    "description": [
      "The ICP-SYS certification program is designed for experienced Agile professionals aiming to expand their coaching impact at the organizational level. The course introduces systems thinking, enterprise coaching practices, and transformation strategies that help professionals drive large-scale cultural and structural change."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in the ICP-SYS Certification Training",
    "whatsIncludedDescription": [
      "14 hours of interactive and practical learning sessions",
      "Globally recognized ICAgile ICP-SYS credential",
      "Guidance from experienced transformation coaches",
      "Career growth opportunities in enterprise coaching",
      "Official ICAgile-approved learning material",
      "Hands-on practice with real transformation scenarios"
    ],
    "skillsTitle": "Skills Covered in ICP-SYS Systems Coaching Training",
    "skills": [
      "Systems Thinking",
      "Defining and Understanding Systems",
      "Systems-Level Coaching",
      "System as a Client",
      "Creating Coaching Containers",
      "Building Awareness and Alignment",
      "Driving Action and Outcomes",
      "Co-coaching Practices",
      "Facilitation Techniques",
      "Professional Coaching Skills",
      "Ethical Coaching Practices",
      "Managing Personal Bias",
      "Expanding Coaching Range",
      "Working with Complex Adaptive Systems"
    ],
    "modesTitle": "Training Modes Available",
    "modesDescription": [
      "Training is delivered through live virtual instructor-led sessions and customized corporate programs. Learners engage in interactive coaching practice, breakout collaboration, and real-time discussions designed for working professionals and enterprise teams."
    ]
  };

  const corporateData = {
    "courseName": "Why SimpliAxis Is a Preferred Choice for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "SimpliAxis delivers customized corporate training solutions designed to bridge skill gaps, strengthen organizational performance, and support enterprise transformation through expert-led programs."
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

export default ICAgileSystemsCoachingCertificationTraining;
