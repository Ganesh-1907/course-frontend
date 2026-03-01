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

const ICAgilePeopleDevelopmentCertificationTraining = () => {
  const highlights = [
    { "text": "14-hour highly interactive training program" },
    { "text": "Earn 14 PDUs after course completion" },
    { "text": "Focus on four core people development competencies" },
    { "text": "Experiential and practical learning approach" },
    { "text": "Access to digital learning resources" },
    { "text": "Lifetime certification validity with no renewal" },
    { "text": "Globally recognized ICP-PDV credential" },
    { "text": "Framework-neutral learning model" },
    { "text": "Flexible remote learning options" }
  ];

  const individualBenefits = [
    {
      "title": "Individuals Benefits",
      "description": "Gain professional recognition through a globally respected Agile people development credential."
    },
    {
      "title": "Individuals Benefits",
      "description": "Develop structured coaching, mentoring, facilitation, and teaching skills."
    },
    {
      "title": "Individuals Benefits",
      "description": "Improve effectiveness in developing individuals and teams."
    },
    {
      "title": "Individuals Benefits",
      "description": "Advance toward senior coaching and leadership roles."
    },
    {
      "title": "Individuals Benefits",
      "description": "Access a continuous learning pathway toward advanced ICAgile certifications."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Accelerate Agile adoption through skilled internal people developers."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve team productivity, collaboration, and innovation."
    },
    {
      "title": "Corporate Benefits",
      "description": "Support cultural transformation through Agile mindset development."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce dependency on external Agile consultants."
    },
    {
      "title": "Corporate Benefits",
      "description": "Strengthen organizational change management capabilities."
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
        "Apply coaching, mentoring, facilitation, and teaching approaches to develop Agile capabilities",
        "Assess individual and team development needs effectively",
        "Create psychologically safe learning environments",
        "Design learning experiences using adult learning principles",
        "Support individuals through behavioral change",
        "Build sustainable Agile mindsets beyond practices and processes"
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
    "Use coaching, mentoring, facilitation, and teaching techniques to build Agile capability",
    "Identify development needs and select suitable interventions",
    "Create safe environments that encourage learning and growth",
    "Design effective learning experiences aligned with adult learning principles",
    "Support behavioral change through structured development",
    "Promote sustainable Agile mindsets across teams"
  ];

  const prerequisites = [
    'No mandatory prerequisites are required to attend the CSPO training.',
    'Basic understanding of Scrum or Agile methodologies is beneficial but not compulsory.',
    'The course is suitable for professionals involved in product management or Agile teams.',
    'Attending training delivered by a Certified Scrum Trainer ensures proper certification eligibility.',
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Enroll in an ICAgile-authorized ICP-PDV course delivered by an accredited training provider."
    },
    {
      "title": "Gain Knowledge",
      "description": "Participate actively in sessions covering coaching, mentoring, facilitation, teaching, and people development concepts."
    },
    {
      "title": "Complete Activities",
      "description": "Finish all required exercises and assignments successfully."
    },
    {
      "title": "Receive Certification",
      "description": "Upon successful completion, your certification details are submitted to ICAgile and a digital badge is issued."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: From People Management to People Development",
      "topics": [
        "People Development as a Foundation for Business Agility",
        "Cultivating a Learning Culture",
        "Leading by Example",
        "Developing Self-Awareness",
        "Enabling Outcomes Instead of Assigning Tasks"
      ]
    },
    {
      "title": "Module 2: Developing Individuals",
      "topics": [
        "Individual Development Foundations",
        "Personal Motivation and Growth",
        "Co-creating Development Plans",
        "Leadership Development",
        "Providing Feedback and Handling Difficult Conversations"
      ]
    },
    {
      "title": "Module 3: Developing Teams",
      "topics": [
        "Team Development Factors",
        "Self-Organization and Team Growth",
        "Collective Ownership and Accountability",
        "Creating Safety and Trust",
        "Using Conflict for Innovation"
      ]
    }
  ];
  const learningObjectives = [
    {
      "title": "Understand the Four Development Stances",
      "description": "Differentiate between coaching, mentoring, facilitation, and teaching, and apply each appropriately."
    },
    {
      "title": "Mentor Effectively",
      "description": "Share knowledge while enabling individuals to grow independently."
    },
    {
      "title": "Facilitate Collaboration",
      "description": "Design and run engaging workshops, retrospectives, and planning sessions."
    },
    {
      "title": "Design Learning Experiences",
      "description": "Create training sessions that support diverse learning styles and sustainable change."
    },
    {
      "title": "Assess Development Needs",
      "description": "Identify capability gaps and choose effective development strategies."
    },
    {
      "title": "Build Psychological Safety",
      "description": "Create environments where experimentation, learning, and growth are encouraged."
    }
  ];
  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "What is the ICAgile People Development (ICP-PDV) Certification?",
          "answer": "ICP-PDV is an ICAgile credential focused on coaching, mentoring, facilitation, and teaching practices used to develop Agile capabilities within teams and organizations."
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
      "title": "ICAgile-Accredited Training Partner",
      "description": "Viovn is an officially recognized ICAgile training partner, ensuring premium educational quality and immediate eligibility for certification."
    },
    {
      "title": "Expert Trainers with Real-World Experience",
      "description": "Our training is led by seasoned Agile coaches and people development professionals who have guided many organizations through complex transformation processes."
    },
    {
      "title": "Proven Track Record",
      "description": "Over the years, thousands of professionals have successfully achieved their ICAgile credentials with Viovn, advancing their careers and driving business excellence."
    },
    {
      "title": "Experiential Learning Focus",
      "description": "We emphasize practical application and self-reflection over mere theory, helping you build genuine expertise in the field of people development."
    },
    {
      "title": "Flexible Training Options",
      "description": "Select from various delivery formats, including live online classes (weekends or weekdays) and customized corporate programs tailored to your needs."
    },
    {
      "title": "Comprehensive Learning Resources",
      "description": "Benefit from a wealth of course-specific materials, templates, frameworks, and guides specifically designed to assist your continuous learning and daily practice."
    },
    {
      "title": "Global Presence, Local Expertise",
      "description": "With a global reach spanning multiple time zones, we blend international standards with a deep understanding of local business environments."
    },
    {
      "title": "Post-Training Support",
      "description": "Enjoy ongoing assistance through our alumni community and a suite of additional resources that continue to support you long after your training is complete."
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
    "courseName": "ICAgile People Development (ICP-PDV) Certification Training",
    "breadcrumbName": "ICAgile People Development (ICP-PDV) Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Advanced Agile people development program focused on coaching, mentoring, facilitation, and teaching capabilities.",
    "benefits": [
      "14-hour immersive learning experience covering four core competencies",
      "Develop team capabilities through expert-led people development training",
      "Practice real-world coaching, mentoring, and facilitation techniques",
      "Create lasting organizational impact using ICP-PDV frameworks",
      "Strengthen your Agile coaching career with a globally recognized credential"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of ICAgile People Development (ICP-PDV) Certification Training",
    "description": [
      "The ICAgile People Development (ICP-PDV) Certification Training is designed for professionals who want to build strong people development skills within Agile environments. The course helps learners develop capabilities in coaching, mentoring, facilitation, and teaching while promoting Agile mindsets and sustainable behavioral change across teams and organizations."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in the ICP-PDV Training",
    "whatsIncludedDescription": [
      "Real-world scenarios based on cross-industry coaching practices",
      "Hands-on exercises supported by peer feedback",
      "Official ICAgile certification upon completion",
      "Training delivered by experienced Agile coaches",
      "Access to a global Agile professional community",
      "Practical frameworks and facilitation tools",
      "ICAgile-authorized official learning content",
      "Post-training learning support"
    ],
    "skillsTitle": "Skills Covered in ICP-PDV Training",
    "skills": [
      "Professional Coaching Techniques",
      "Effective Mentoring Practices",
      "Group Facilitation and Collaboration",
      "Adult Learning Principles",
      "Psychological Safety Creation",
      "Active Listening and Powerful Questioning",
      "Assessment of Development Needs",
      "Building Agile Mindsets",
      "Systems Thinking for People Development",
      "Managing Resistance and Change",
      "Designing Learning Experiences",
      "Ethical Coaching Practices"
    ],
    "modesTitle": "Training Modes Available",
    "modesDescription": [
      "Training is offered through live instructor-led online classes and customized corporate programs. These flexible formats allow professionals and enterprise teams to learn through interactive sessions while applying practical people development techniques."
    ]
  };

  const corporateData = {
    "courseName": "Why SimpliAxis Is Preferred by Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "SimpliAxis provides customized corporate training solutions designed to close skill gaps, enhance workforce capabilities, and support enterprise-wide Agile transformation through expert-led learning programs."
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

export default ICAgilePeopleDevelopmentCertificationTraining;
