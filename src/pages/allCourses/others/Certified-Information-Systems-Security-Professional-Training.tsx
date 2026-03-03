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
  Star,
  Clock,
  Shield
} from "lucide-react";

const CertifiedInformationSystemsSecurityProfessionalTraining = () => {
  const highlights = [
    { "text": "Instructor-led CISSP Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "40 Hours of In-Depth Learning Sessions", icon: <Clock className="w-5 h-5" /> },
    { "text": "Hands-on Practical Experience", icon: <Laptop className="w-5 h-5" /> },
    { "text": "Official (ISC)²-Aligned Curriculum", icon: <FileText className="w-5 h-5" /> },
    { "text": "Demos and Real-World Projects", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Scenario-Based Learning Simulations", icon: <Settings className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Global Recognition",
      "description": "CISSP is one of the most respected cybersecurity certifications worldwide."
    },
    {
      "title": "Senior-Level Career Opportunities",
      "description": "Qualify for roles such as Security Manager, IT Security Architect, and CISO."
    },
    {
      "title": "Higher Salary Potential",
      "description": "CISSP-certified professionals are among the highest-paid in cybersecurity."
    },
    {
      "title": "Validated Expertise",
      "description": "Demonstrates advanced capability in designing and managing secure IT systems."
    },
    {
      "title": "Global Professional Network",
      "description": "Join a worldwide community of cybersecurity experts through (ISC)²."
    },
    {
      "title": "Stay Industry Current",
      "description": "Remain updated with the latest security threats, technologies, and compliance standards."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enhanced Data Protection",
      "description": "Certified professionals safeguard organizational assets effectively."
    },
    {
      "title": "Regulatory Compliance",
      "description": "Support compliance with global security standards and regulations."
    },
    {
      "title": "Risk Mitigation",
      "description": "Identify and mitigate cybersecurity risks proactively."
    },
    {
      "title": "Reduced Security Incidents",
      "description": "Minimize breach risks and financial losses."
    },
    {
      "title": "Improved Organizational Reputation",
      "description": "Demonstrates commitment to high-level security standards."
    },
    {
      "title": "Efficient Incident Recovery",
      "description": "Enhances capability to manage and recover from security incidents."
    }
  ];

  const careerStats = {
    averageIncome: '$135,000',
    incomeLabel: 'Average annual salary',
    employmentGrowth: '32%',
    growthLabel: 'Demand for CISSP professionals',
  };

  const attendees = [
    {
      "group": [
        "Security Consultants",
        "Security Managers",
        "IT Directors",
        "Security Analysts",
        "Chief Information Security Officers (CISOs)"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Master risk management and incident response strategies.",
    "Design and manage secure enterprise architectures.",
    "Implement cryptographic techniques for data protection.",
    "Conduct penetration testing and security audits.",
    "Manage identity and access control systems effectively."
  ];

  const prerequisites = [
    "Minimum five years of paid work experience in two or more CISSP domains.",
    "A four-year degree or approved credential can substitute one year of experience.",
    "Candidates without required experience can become Associate of (ISC)² after passing the exam."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in CISSP Training",
      "description": "Join expert-led sessions aligned with (ISC)² CBK domains.",
      "color": "bg-primary"
    },
    {
      "title": "Complete Domain Preparation",
      "description": "Cover all eight CISSP domains with practical case studies.",
      "color": "bg-indigo-500"
    },
    {
      "title": "Schedule CISSP Exam",
      "description": "Register via Pearson VUE testing centers.",
      "color": "bg-purple-500"
    },
    {
      "title": "Earn CISSP Credential",
      "description": "Pass the exam and complete endorsement to become CISSP certified.",
      "color": "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Security and Risk Management",
      "topics": [
        "Security governance principles",
        "Risk management frameworks",
        "Compliance requirements",
        "Business continuity planning",
        "Security awareness programs"
      ]
    },
    {
      "title": "Asset Security",
      "topics": [
        "Data classification",
        "Data lifecycle management",
        "Asset handling requirements",
        "Data protection controls"
      ]
    },
    {
      "title": "Security Architecture and Engineering",
      "topics": [
        "Secure design principles",
        "Cryptographic solutions",
        "Threat modeling",
        "Cloud and IoT security"
      ]
    },
    {
      "title": "Communication and Network Security",
      "topics": [
        "Secure network architecture",
        "Secure communication protocols",
        "Wireless and cellular security"
      ]
    },
    {
      "title": "Identity and Access Management (IAM)",
      "topics": [
        "Authentication mechanisms",
        "Authorization models",
        "Access provisioning lifecycle"
      ]
    },
    {
      "title": "Security Assessment and Testing",
      "topics": [
        "Vulnerability assessments",
        "Penetration testing",
        "Security audits"
      ]
    },
    {
      "title": "Security Operations",
      "topics": [
        "Incident response",
        "Logging and monitoring",
        "Disaster recovery strategies"
      ]
    },
    {
      "title": "Software Development Security",
      "topics": [
        "Secure SDLC integration",
        "Application security testing",
        "Secure coding practices"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Risk Management Expertise",
      "description": "Develop strategies to identify and mitigate organizational risks."
    },
    {
      "title": "Security Architecture Design",
      "description": "Design robust enterprise-level security architectures."
    },
    {
      "title": "Advanced Cryptography",
      "description": "Apply encryption, PKI, and key management techniques."
    },
    {
      "title": "Incident Response Management",
      "description": "Respond effectively to cyber incidents and breaches."
    },
    {
      "title": "Secure Development Practices",
      "description": "Integrate security within software development lifecycle."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "CISSP Certification FAQs",
      "items": [
        {
          "question": "1. What is CISSP?",
          "answer": "CISSP is a globally recognized cybersecurity certification offered by (ISC)²."
        },
        {
          "question": "2. What are the eight CISSP domains?",
          "answer": "Security and Risk Management, Asset Security, Security Architecture, Communication and Network Security, IAM, Security Assessment, Security Operations, Software Development Security."
        },
        {
          "question": "3. What is the validity period?",
          "answer": "CISSP certification is valid for three years with required CPE credits."
        },
        {
          "question": "4. Is CISSP for beginners?",
          "answer": "No, it is designed for experienced cybersecurity professionals."
        },
        {
          "question": "5. How many attempts per year?",
          "answer": "Maximum three attempts per year with waiting periods."
        },
        {
          "question": "6. What job roles can I pursue?",
          "answer": "Security Manager, Security Architect, CISO, Security Consultant, Risk Manager."
        }
      ]
    },

    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Token refund policy?",
          "answer": "Non-refundable after 15 days but adjustable within 6 months."
        },
        {
          "question": "2. Installments available?",
          "answer": "Yes, flexible payment options available."
        },
        {
          "question": "3. Refund policy?",
          "answer": "Refund not available; rescheduling allowed."
        },
        {
          "question": "4. Accepted payment methods?",
          "answer": "Credit/Debit Cards, Net Banking, Wire Transfer, PayPal."
        },
        {
          "question": "5. Will I receive invoice?",
          "answer": "Yes, payment invoice sent via email."
        }
      ]
    },

    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        {
          "question": "1. Will I receive certificate?",
          "answer": "Yes, a completion certificate is provided after training."
        },
        {
          "question": "2. Do you offer corporate training?",
          "answer": "Yes, customized corporate CISSP training available."
        },
        {
          "question": "3. Are instructors certified?",
          "answer": "Yes, trainers are certified cybersecurity experts."
        },
        {
          "question": "4. Is online training available?",
          "answer": "Yes, live instructor-led online sessions available."
        },
        {
          "question": "5. Do you provide career support?",
          "answer": "Yes, resume guidance and interview preparation support provided."
        }
      ]
    }
  ];

  const courseFeatures = [
    {
      icon: Users,
      title: 'Guaranteed to',
      subtitle: 'Run Workshops',
      color: 'bg-accent text-primary',
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
    { "title": "Global Recognition", "description": "Globally respected cybersecurity certification." },
    { "title": "Expert Trainers", "description": "Learn from experienced CISSP-certified professionals." },
    { "title": "Flexible Learning", "description": "Interactive online sessions for working professionals." },
    { "title": "Lifetime Access", "description": "Access materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted training provider globally." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world simulations." },
    { "title": "Wide Course Portfolio", "description": "Access multiple cybersecurity certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'CISSP',
      courseName: 'Certified Information Systems Security Professional (CISSP) Training',
      dateRange: 'Aug 20 - Aug 24, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'CISSP Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 38,000',
      discountPercentage: '15',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validated CISSP Expertise',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Certified Information Systems Security Professional (CISSP) Training",
    "breadcrumbName": "CISSP Certification Training Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Cybersecurity and Earn CISSP Certification",
    "benefits": [
      "40 Hours Live Training",
      "Covers All 8 CISSP Domains",
      "Exam Preparation Guidance",
      "Global Recognition"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "CISSP Certification Course Overview",
    "description": [
      "CISSP is one of the most prestigious cybersecurity certifications globally.",
      "It validates expertise in designing, implementing, and managing enterprise security programs.",
      "This training prepares professionals to pass the CISSP exam and excel in leadership roles."
    ],
    "whatIsTitle": "What is CISSP Certification?",
    "whatIsDescription": [
      "CISSP validates advanced knowledge across eight cybersecurity domains defined by (ISC)²."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Live instructor-led sessions",
      "Practice exams",
      "Real-world case studies",
      "Exam preparation support"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Risk Management",
      "Security Architecture",
      "IAM",
      "Incident Response",
      "Secure Development"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Live instructor-led online training with interactive sessions."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized CISSP training solutions to strengthen enterprise cybersecurity posture."
  };

  const courseMetadata = {
    shortName: 'CISSP',
    shortNameAlt: 'CISSP',
    fullName: 'Certified Information Systems Security Professional (CISSP) Training',
    fullNameAlt: 'CISSP Certification Training',
    certificateName: 'CISSP Certification',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Certified Information Systems Security Professional (CISSP) Training, a wide selection of career options will open up, particularly in the cybersecurity leadership and architecture domains.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for CISSP Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: '(ISC)² Aligned',
      certificateType: 'Certificate of Security Leadership',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Security Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Security Consultants",
    "Security Managers",
    "IT Directors",
    "Security Analysts",
    "Chief Information Security Officers (CISOs)"
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
      ltpLabel: 'Global Training Provider',
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
            <h4 className="text-[14px] text-primary font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
              {overviewContent.title}
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
              {overviewContent.subtitle}{' '}
              <span className="text-primary">✦</span>
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


export default CertifiedInformationSystemsSecurityProfessionalTraining;
