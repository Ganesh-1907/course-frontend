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

const CertifiedScrumProfessionalProductOwnerCertificationTraining = () => {
  const highlights = [
    { "text": "Training delivered by Scrum Alliance Registered Education Ally (REA)" },
    { "text": "Access to premium digital learning resources" },
    { "text": "2-day live interactive training sessions" },
    { "text": "Certified and accredited trainers" },
    { "text": "Earn 16 PDUs and 16 SEUs" },
    { "text": "24/7 learning support" }
  ];

  const individualBenefits = [
    {
      "title": "Individual Benefits",
      "description": "Gain advanced Scrum Product Owner expertise for real-world implementation."
    },
    {
      "title": "Individual Benefits",
      "description": "Strengthen career growth with globally recognized CSP-PO certification."
    },
    {
      "title": "Individual Benefits",
      "description": "Improve collaboration, stakeholder engagement, and conflict resolution skills."
    },
    {
      "title": "Individual Benefits",
      "description": "Develop continuous improvement and Agile leadership capabilities."
    },
    {
      "title": "Individual Benefits",
      "description": "Expand career opportunities across IT and non-IT industries."
    }
  ];
  const corporateBenefits = [
    {
      "title": "Corporate Benefits",
      "description": "Improve delivery speed and product quality through Agile practices."
    },
    {
      "title": "Corporate Benefits",
      "description": "Enhance team morale and support self-organizing teams."
    },
    {
      "title": "Corporate Benefits",
      "description": "Increase transparency with Agile metrics and reporting."
    },
    {
      "title": "Corporate Benefits",
      "description": "Improve customer satisfaction through iterative delivery."
    },
    {
      "title": "Corporate Benefits",
      "description": "Reduce risk via early feedback and adaptive planning."
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
        "Improve stakeholder communication and conflict-resolution skills.",
        "Develop advanced product planning and forecasting capabilities.",
        "Integrate customer feedback into product development.",
        "Master advanced backlog management focused on outcomes.",
        "Validate product assumptions through experimentation and analysis.",
        "Understand product economics and investment decisions.",
        "Adopt continuous improvement and Agile release practices."
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
    "Communicate effectively with stakeholders and manage conflicts.",
    "Plan and forecast complex products strategically.",
    "Integrate customer development into product strategy.",
    "Manage product backlogs with outcome-focused thinking.",
    "Validate assumptions and measure product success.",
    "Evaluate product profitability and funding needs.",
    "Enable continuous improvement within Agile teams."
  ];

  const prerequisites = [
    "A-CSPO certification is required before attending CSP-PO training.",
    "Minimum 24 months of Product Owner experience within the last five years.",
    "16 hours of training from an authorized Scrum Alliance training partner."
  ];

  const certificationSteps = [
    {
      "title": "Register for Training",
      "description": "Attend CSP-PO training delivered by an accredited Scrum Alliance training partner."
    },
    {
      "title": "Accept Welcome Email",
      "description": "Accept Scrum Alliance license agreement through official email communication."
    },
    {
      "title": "Validate Experience",
      "description": "Confirm Product Owner experience (minimum 24 months within last five years)."
    },
    {
      "title": "Download Certificate",
      "description": "Access and download certification after completing validation requirements."
    }
  ];

  const curriculumModules = [
    {
      "title": "Product Owner Core Competencies",
      "topics": [
        "Product champion role",
        "Advanced stakeholder discussions",
        "Launching Scrum teams",
        "Working with multiple teams",
        "Product owner training practices"
      ]
    },
    {
      "title": "Purpose and Strategy Implementation",
      "topics": [
        "Market-driven product strategy",
        "Product planning and forecasting",
        "Product economics"
      ]
    },
    {
      "title": "Establishing Scrum Teams and Projects",
      "topics": [
        "Customer research and product discovery",
        "Integrating customer development with product development"
      ]
    },
    {
      "title": "Product Assumption Validation",
      "topics": [
        "Hypothesis testing",
        "Evaluating impact of results"
      ]
    },
    {
      "title": "Product Backlog Management",
      "topics": [
        "Outcome vs output",
        "Defining value",
        "Ordering backlog items",
        "Delivering customer value"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: 'Master Product Ownership:',
      description:
        'Build essential skills required to manage product backlogs, prioritize effectively, and deliver customer-centric solutions.',
    },
    {
      title: 'Lead Agile Teams:',
      description:
        'Gain confidence in guiding Agile teams by setting clear goals and fostering collaboration.',
    },
    {
      title: 'Enhance Communication:',
      description:
        'Improve stakeholder interaction and ensure transparency across development cycles.',
    },
    {
      title: 'Apply Scrum Practices:',
      description:
        'Understand and implement Scrum frameworks to maximize team performance.',
    },
    {
      title: 'Strategic Planning:',
      description:
        'Develop expertise in sprint planning, roadmap creation, and release forecasting.',
    },
    {
      title: 'Risk Management:',
      description:
        'Identify potential risks early and implement strategies to minimize project disruptions.',
    },
    {
      title: 'Drive ROI:',
      description:
        'Learn to prioritize features that maximize return on investment and business value.',
    },
    {
      title: 'Accelerate Delivery:',
      description:
        'Adopt Agile techniques that enable faster and consistent product delivery.',
    },
    {
      title: 'Clarify Role Scope:',
      description:
        'Understand the responsibilities and long-term career path of a Scrum Product Owner.',
    },
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "Is there an exam for CSP-PO certification?",
          "answer": "No, CSP-PO certification does not require an exam."
        },
        {
          "question": "What are the prerequisites for CSP-PO?",
          "answer": "A-CSPO certification and 24 months of Product Owner experience are required."
        },
        {
          "question": "Who should attend CSP-PO training?",
          "answer": "Product Owners, Product Managers, Program Managers, Team Leads, and decision-makers involved in Agile product delivery."
        },
        {
          "question": "What practical skills are gained?",
          "answer": "Advanced backlog management, stakeholder collaboration, product strategy, and product assumption validation."
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
      "title": "Hands-on Learning",
      "description": "CSP-PO training from Viovn features exclusive Scrum activities, team-based practical exercises, and case-study driven sessions, facilitating immersive learning and deep knowledge acquisition."
    },
    {
      "title": "Experienced Trainers",
      "description": "We partner with elite Scrum Alliance-certified instructors who possess extensive multi-industry experience, ensuring our CSP-PO training equips participants with advanced expertise and practical strategies."
    },
    {
      "title": "Expert Guidance",
      "description": "Acquire high-value insights, specialized techniques, and advanced tools directly from seasoned practitioners who are actively leading Agile transformations."
    },
    {
      "title": "Access to Scrum Network",
      "description": "Expand your professional reach by joining the world's most prominent Scrum and Agile communities through a two-year premium membership with the Scrum Alliance."
    },
    {
      "title": "Learning Support",
      "description": "We provide a rich library of educational resources, including webinars, specialized e-books, expert tutorials, and strategic interview preparation to ensure your professional journey is both seamless and impactful."
    },
    {
      "title": "Post Career Guidance",
      "description": "Benefit from continuous mentorship and professional guidance to help you navigate complex challenges and accelerate your growth within the Agile landscape."
    },
    {
      "title": "Interactive and engaging Training",
      "description": "Our training sessions are engineered for maximum engagement, utilizing authentic business simulations and collaborative Q&A to achieve profound conceptual understanding."
    },
    {
      "title": "A wide range of courses",
      "description": "Viovn delivers a wide spectrum of internationally recognized certifications across Agile, Scrum, SAFe, DevOps, and Project Management disciplines."
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
    "courseName": "Certified Scrum Professional® - Product Owner (CSP®-PO) Certification Training",
    "breadcrumbName": "CSP®-PO Certification Training Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Advanced Scrum Product Owner training focused on stakeholder collaboration, strategic product planning, and advanced backlog management.",
    "benefits": [
      "16 hours of live instructor-led training",
      "Earn 16 PDUs and 16 SEUs",
      "Real-world simulations and activities",
      "2-year Scrum Alliance membership",
      "Post-class career guidance and resume support",
      "Access to global Scrum community"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of CSP-PO Certification",
    "description": [
      "The CSP-PO certification is designed for experienced Product Owners who want to advance their Scrum and Agile expertise.",
      "Participants learn advanced stakeholder engagement, product backlog management, product strategy, and assumption validation techniques.",
      "The course strengthens product ownership capabilities for managing complex products across multiple teams."
    ],
    "whatIsTitle": "What is CSP-PO Training?",
    "whatIsDescription": [
      "CSP-PO training provides advanced knowledge and practical skills for experienced Product Owners.",
      "It focuses on strategic planning, stakeholder collaboration, team dynamics, and managing complex product ecosystems within Agile organizations."
    ],
    "whatsIncludedTitle": "What’s Included in Our CSP-PO Training?",
    "whatsIncludedDescription": [
      "16 hours of live instructor-led interactive sessions",
      "Earn 16 PDUs and 16 SEUs",
      "Hands-on simulations and group activities",
      "Post-training career guidance and resume updates",
      "2-year Scrum Alliance membership",
      "Access to global Scrum community resources"
    ],
    "skillsTitle": "Skills Covered in CSP-PO Training",
    "skills": [
      "Stakeholder collaboration and conflict resolution",
      "Advanced communication with internal and external stakeholders",
      "Supporting and guiding Scrum teams",
      "Managing and organizing backlogs across multiple teams",
      "Planning and forecasting complex products"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live instructor-led online training",
      "Interactive Q&A sessions",
      "Real-time collaborative learning environment"
    ]
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Viovn delivers specialized enterprise CSP-PO training designed to integrate advanced Agile product ownership with strategic business objectives, enhancing cross-functional delivery and overall organizational impact."
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

export default CertifiedScrumProfessionalProductOwnerCertificationTraining;
