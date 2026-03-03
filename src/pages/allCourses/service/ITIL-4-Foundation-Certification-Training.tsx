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
import CourseWhyViovn from "@/components/courses/CourseWhyViovn";

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

const ITILFoundationCertification = () => {
  const highlights = [
    { text: "16 Hours of Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Earn 16 CPDs Upon Course Completion", icon: <Award className="w-5 h-5" /> },
    { text: "Online Subscription to Official ITIL Publications", icon: <Globe className="w-5 h-5" /> },
    { text: "Exam Fee Included in Training Cost", icon: <CreditCard className="w-5 h-5" /> },
    { text: "Official eBook & PeopleCert Study Material Included", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Mock Tests and Practice Assessments", icon: <FileText className="w-5 h-5" /> },
    { text: "24/7 Simpliaxis Support and Assistance", icon: <Headset className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Strong IT Service Management Foundation",
      description: "Gain a comprehensive understanding of ITIL 4 principles, service value systems, and key ITSM practices."
    },
    {
      title: "Improved Career Opportunities",
      description: "Enhance employability across IT service management and digital transformation roles."
    },
    {
      title: "Alignment with Modern IT Practices",
      description: "Integrate Agile, DevOps, and Lean concepts into structured IT service management."
    },
    {
      title: "Increased Professional Credibility",
      description: "Demonstrate commitment to globally recognized IT service management standards."
    },
    {
      title: "Pathway to Advanced Certifications",
      description: "Use ITIL 4 Foundation as the entry point to Managing Professional and Strategic Leader tracks."
    }
  ];

  const corporateBenefits = [
    {
      title: "Standardized ITSM Practices",
      description: "Ensure consistent service management processes across departments."
    },
    {
      title: "Improved Service Quality",
      description: "Reduce service disruptions and improve customer satisfaction."
    },
    {
      title: "Better Risk & Change Management",
      description: "Strengthen governance and minimize service failures."
    },
    {
      title: "Enhanced Operational Efficiency",
      description: "Identify inefficiencies and optimize resource utilization."
    },
    {
      title: "Stronger Business Alignment",
      description: "Align IT services with business goals and measurable outcomes."
    },
    {
      title: "Support for Continuous Improvement",
      description: "Adopt structured performance measurement and service optimization practices."
    }
  ];

  const careerStats = {
    averageIncome: "$85,000",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "12%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "IT professionals new to service management",
        "Service desk and IT support teams",
        "Project managers and business managers",
        "Professionals interacting with IT services",
        "Students and career changers entering IT"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand the ITIL 4 Service Value System and guiding principles.",
    "Explain value creation and stakeholder relationships.",
    "Identify key ITIL practices such as incident and change management.",
    "Apply continual improvement concepts in real business contexts."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic familiarity with IT services is helpful but not required."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete the instructor-led ITIL 4 Foundation course aligned with PeopleCert standards.",
      color: "bg-blue-500"
    },
    {
      title: "Prepare for the Exam",
      description: "Review official materials, practice mock exams, and clarify concepts.",
      color: "bg-indigo-500"
    },
    {
      title: "Take the Certification Exam",
      description: "Attempt the 40-question multiple-choice exam within 60 minutes.",
      color: "bg-purple-500"
    },
    {
      title: "Get Certified",
      description: "Score at least 65% (26 correct answers) to earn your ITIL 4 Foundation certificate.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      title: "Overview of ITIL 4",
      topics: ["ITIL Framework Structure", "Components of ITIL 4", "Benefits of ITIL"]
    },
    {
      title: "ITIL Foundational Concepts",
      topics: [
        "Service & Service Management",
        "Stakeholders & Value Creation",
        "Service Offerings",
        "Service Relationships"
      ]
    },
    {
      title: "ITIL Guiding Principles",
      topics: [
        "Focus on Value",
        "Start Where You Are",
        "Progress Iteratively with Feedback",
        "Collaborate and Promote Visibility",
        "Think Holistically",
        "Keep it Simple",
        "Optimize and Automate"
      ]
    },
    {
      title: "Four Dimensions of Service Management",
      topics: [
        "Organizations & People",
        "Information & Technology",
        "Partners & Suppliers",
        "Value Streams & Processes"
      ]
    },
    {
      title: "Service Value System & Value Chain",
      topics: [
        "Service Value System Components",
        "Service Value Chain Activities",
        "Governance & Continual Improvement"
      ]
    },
    {
      title: "Key ITIL Practices",
      topics: [
        "Incident Management",
        "Change Enablement",
        "Problem Management",
        "Service Request Management",
        "Service Desk",
        "Continual Improvement"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand ITIL 4 Framework",
      description: "Gain structured knowledge of modern IT service management principles."
    },
    {
      title: "Master Service Value System",
      description: "Learn how governance, practices, and continual improvement create value."
    },
    {
      title: "Apply Guiding Principles",
      description: "Use ITIL principles for effective decision-making and transformation."
    },
    {
      title: "Recognize Key ITSM Practices",
      description: "Understand incident, problem, and change management workflows."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "ITIL 4 Foundation – Training FAQs",
      items: [
        {
          question: "1. What is ITIL® 4 Foundation training?",
          answer: "ITIL 4 Foundation training introduces modern IT service management concepts including the service value system and key ITIL practices."
        },
        {
          question: "2. Who should attend this training?",
          answer: "IT professionals, service desk teams, managers, and beginners seeking ITSM certification."
        },
        {
          question: "3. Is ITIL certification globally recognized?",
          answer: "Yes, ITIL 4 Foundation certification is globally recognized across industries."
        },
        {
          question: "4. Is prior experience required?",
          answer: "No prior ITIL experience is required; it is an entry-level certification."
        }
      ]
    },
    {
      id: "category_2",
      label: "ITIL 4 Foundation – Exam FAQs",
      items: [
        {
          question: "1. What is the exam format?",
          answer: "40 multiple-choice questions, 60 minutes duration."
        },
        {
          question: "2. What is the passing score?",
          answer: "65% (26 correct answers out of 40)."
        },
        {
          question: "3. Can I take the exam online?",
          answer: "Yes, the exam is available through remote proctoring."
        }
      ]
    },
    {
      id: "category_3",
      label: "Payment & Enrollment FAQs",
      items: [
        {
          question: "1. Are installment options available?",
          answer: "Yes, flexible payment options are available."
        },
        {
          question: "2. Is refund possible?",
          answer: "Refunds are not available, but rescheduling is allowed."
        }
      ]
    },
    {
      id: "category_4",
      label: "General FAQs",
      items: [
        {
          question: "1. Is the training online?",
          answer: "Yes, instructor-led online and classroom modes are available."
        },
        {
          question: "2. Do you offer corporate training?",
          answer: "Yes, customized corporate ITIL training programs are available."
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

  const courseWhyViovn = [
    { "title": "Accredited ITIL Training", "description": "Aligned with PeopleCert and official ITIL syllabus standards." },
    { "title": "Certified Trainers", "description": "Learn from experienced ITSM professionals." },
    { "title": "Comprehensive Exam Preparation", "description": "Structured mock tests and practice assessments included." },
    { "title": "Updated Study Materials", "description": "Latest ITIL framework-aligned resources provided." },
    { "title": "Flexible Learning Options", "description": "Weekend and weekday online sessions available." },
    { "title": "Practical ITSM Application", "description": "Real-world service management case discussions." },
    { "title": "Interactive Learning Environment", "description": "Engaging instructor-led sessions and discussions." },
    { "title": "Post-Training Support", "description": "Continued guidance until certification completion." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'ITIL4',
      courseName: 'ITIL® 4 Foundation Certification Training',
      dateRange: 'Mar 14 - Mar 15, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Expert Trainer',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 35,000',
      discountedPrice: 'INR 28,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Official ITIL® 4 Foundation Digital Certificate',
    'Digital Badge for LinkedIn & Professional Profiles',
    'Online Subscription to Official ITIL Publications',
    '24/7 Support and Access to Learning Resources',
  ];

  const heroData = {
    "courseName": "ITIL® 4 Foundation Certification Training",
    "breadcrumbName": "ITIL® 4 Foundation Training | ITIL Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Modern IT Service Management with ITIL 4",
    "benefits": [
      "16 Hours Live Instructor-Led Training",
      "Exam Fee Included",
      "Official Study Materials",
      "16 CPDs Awarded"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Overview of ITIL® 4 Foundation Certification Course",
    "description": [
      "The ITIL 4 Foundation course provides foundational knowledge of modern IT service management based on global ITIL standards.",
      "Participants learn the service value system, guiding principles, governance models, and key practices required for digital service optimization."
    ],
    "whatIsTitle": "What is ITIL® 4 Foundation?",
    "whatIsDescription": [
      "ITIL 4 Foundation is a globally recognized entry-level IT service management certification introducing structured ITSM concepts and frameworks."
    ],
    "whatsIncludedTitle": "What’s Included in the Course?",
    "whatsIncludedDescription": [
      "Official exam voucher",
      "Accredited instructor-led training",
      "eBook and PeopleCert materials",
      "Mock exams and practice tests"
    ],
    "skillsTitle": "Skills You Will Gain",
    "skills": [
      "Understanding of ITIL terminology and concepts",
      "Knowledge of Service Value System",
      "Incident and change management workflows",
      "Continual improvement practices"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Instructor-led virtual training",
      "Classroom sessions",
      "Corporate group training"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Simpliaxis",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Simpliaxis provides tailored ITIL training solutions globally, helping enterprises strengthen service management, governance, and digital transformation initiatives."
  };

  const courseMetadata = {
    shortName: 'ITIL-4',
    shortNameAlt: 'ITIL 4 Foundation',
    fullName: 'ITIL® 4 Foundation Certification Training',
    fullNameAlt: 'ITIL 4 Foundation Training',
    certificateName: 'ITIL 4 Foundation',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your ITIL 4 Foundation Certification, a wide selection of career options will open up in IT service management and digital transformation roles.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for ITIL 4 Foundation Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'PeopleCert',
      certificateType: 'Certificate of ITIL 4 Foundation',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "IT professionals new to service management",
    "Service desk and IT support teams",
    "Project managers and business managers",
    "Professionals interacting with IT services",
    "Students and career changers entering IT"
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
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {overviewContent.whatsIncludedDescription.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {overviewContent.skillsTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.skillsTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {overviewContent.skills.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {overviewContent.modesTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.modesTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {overviewContent.modesDescription.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}
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
              <CourseWhyViovn features={courseWhyViovn} />
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

export default ITILFoundationCertification;
