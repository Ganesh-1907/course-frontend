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

const CertifiedAgileLeaderCertificationTraining = () => {
  const highlights = [
    { text: "2 Days Instructor-Led Live Online Training" },
    { text: "Earn 16 PDUs & 16 SEUs" },
    { text: "Real-World Case Studies & Hands-on Activities" },
    { text: "Lifetime Access to Course Materials" },
    { text: "Access to Scrum Global Community" },
    { text: "2-Year Scrum Alliance Membership" },
    { text: "24/7 Customer Support" }
  ];

  const individualBenefits = [
    {
      title: "Leadership Skill Development",
      description: "Enhance communication, coaching, mentoring, and collaboration skills to lead Agile teams effectively."
    },
    {
      title: "Career Advancement",
      description: "Strengthen your professional profile with a globally recognized Scrum Alliance credential."
    },
    {
      title: "Positive Work Culture Creation",
      description: "Build trust-based, autonomous, and accountable team environments."
    },
    {
      title: "Growth Mindset Adoption",
      description: "Embrace continuous learning and improvement for personal and professional growth."
    },
    {
      title: "Effective Change Leadership",
      description: "Lead organizational transformations and drive meaningful Agile change initiatives."
    }
  ];

  const corporateBenefits = [
    {
      title: "Successful Agile Transformation",
      description: "Equip leaders with skills to drive enterprise-wide Agile adoption."
    },
    {
      title: "Improved Collaboration",
      description: "Enhance cross-functional alignment and teamwork across departments."
    },
    {
      title: "Higher Employee Engagement",
      description: "Foster inclusive cultures that increase motivation and productivity."
    },
    {
      title: "Faster Value Delivery",
      description: "Accelerate product cycles through iterative and incremental value delivery."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Enable leaders to use feedback loops and empirical evidence for strategic decisions."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "Executives & Senior Leaders",
        "Organizational Managers",
        "Agile Coaches",
        "Team Leaders",
        "Transformation Leaders"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Agile leadership principles and servant leadership.",
    "Drive organizational culture change aligned with Agile values.",
    "Support enterprise Agile transformations.",
    "Build high-performing, empowered teams.",
    "Lead sustainable continuous improvement initiatives."
  ];

  const prerequisites = [
    "Basic familiarity with Agile methodologies such as Scrum, Kanban, or Lean is recommended."
  ];

  const certificationSteps = [
    {
      title: "Register for Training",
      description: "Enroll in the CAL-1 training program through Simpliaxis."
    },
    {
      title: "Attend 2-Day Live Session",
      description: "Participate in the instructor-led live interactive training."
    },
    {
      title: "Accept Scrum Alliance License",
      description: "Accept the certification license sent via email from Scrum Alliance."
    },
    {
      title: "Download Certification",
      description: "Access and download your CAL-1 certificate from your Scrum Alliance dashboard."
    }
  ];

  const curriculumModules = [
    {
      title: "The Context for Agile",
      topics: [
        "Rise of Agile Approaches",
        "Management Trends",
        "Employee Engagement",
        "Benefits of Agile Leadership"
      ]
    },
    {
      title: "Agile Overview",
      topics: [
        "Agile Manifesto Values & Principles",
        "High-Performing Teams",
        "Benefits of Agile Frameworks"
      ]
    },
    {
      title: "Leadership in an Agile Context",
      topics: [
        "Leadership Development Framework",
        "Coaching Approach"
      ]
    },
    {
      title: "The Agile Organization",
      topics: [
        "Organizational Culture",
        "Governance Policies",
        "Structural Alignment",
        "Case Studies"
      ]
    },
    {
      title: "Agile Approaches to Change",
      topics: [
        "Change Management",
        "Removing Bottlenecks",
        "Agile Transformation Case Studies"
      ]
    },
    {
      title: "Organizational Design",
      topics: [
        "Value Flow Optimization",
        "Governance & Metrics",
        "Culture & Organizational Design"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Agile Principles Mastery",
      description: "Understand Agile values and principles deeply."
    },
    {
      title: "Agile Leadership Mindset",
      description: "Adopt servant leadership and systems thinking."
    },
    {
      title: "Organizational Culture Building",
      description: "Foster transparency, trust, and collaboration."
    },
    {
      title: "Change Management Skills",
      description: "Lead Agile transformation and overcome resistance."
    },
    {
      title: "Team Empowerment",
      description: "Build self-organizing and value-driven teams."
    },
    {
      title: "Effective Communication",
      description: "Facilitate workshops and strategic decision-making."
    },
    {
      title: "Continuous Improvement",
      description: "Drive sustainable innovation and growth."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "CAL-1 Certification FAQs",
      items: [
        {
          question: "1. What is CAL-1 Certification?",
          answer: "CAL-1 is a Scrum Alliance certification that equips leaders with Agile mindset, leadership skills, and organizational change capabilities."
        },
        {
          question: "2. How many PDUs & SEUs will I earn?",
          answer: "You will earn 16 PDUs and 16 SEUs upon completion."
        },
        {
          question: "3. Is renewal required?",
          answer: "Yes, renewal is required every two years with 10 SEUs and a $50 renewal fee."
        },
        {
          question: "4. Who should attend CAL-1?",
          answer: "Executives, managers, team leaders, and professionals leading Agile initiatives."
        },
        {
          question: "5. Does CAL-1 renew other certifications?",
          answer: "Yes, completing CAL-1 helps renew other active Scrum Alliance certifications."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. Are installment options available?",
          answer: "Yes, flexible payment options are available."
        },
        {
          question: "2. Is the course refundable?",
          answer: "Refunds are not available, but rescheduling is permitted."
        }
      ]
    },
    {
      id: "category_3",
      label: "General Training FAQs",
      items: [
        {
          question: "1. Is online training available?",
          answer: "Yes, the course is delivered via live virtual sessions."
        },
        {
          question: "2. Do I receive Scrum Alliance membership?",
          answer: "Yes, a 2-year Scrum Alliance membership is included."
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
    { "title": "Global Recognition", "description": "Recognized worldwide by Scrum Alliance." },
    { "title": "Expert Trainers", "description": "Delivered by experienced Certified Scrum Trainers (CSTs)." },
    { "title": "Flexible Learning", "description": "Live virtual and corporate training formats available." },
    { "title": "Lifetime Learning Support", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by enterprises globally." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification renewal." },
    { "title": "Interactive Sessions", "description": "Hands-on activities and real-world case studies." },
    { "title": "Wide Course Portfolio", "description": "Comprehensive Agile, Scrum, and SAFe programs." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'CAL-1',
      courseName: 'Certified Agile Leader® (CAL-1™) Training',
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
    courseName: "Certified Agile Leader® (CAL-1™) Training",
    breadcrumbName: "Certified Agile Leadership (CAL-1) Certification",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Lead Agile Transformation with Confidence.",
    benefits: [
      "2-Day Live Interactive Training",
      "Earn 16 PDUs & SEUs",
      "2-Year Scrum Alliance Membership",
      "Hands-on Case Studies"
    ],
    mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "CAL-1 Certification Overview",
    description: [
      "The Certified Agile Leader® (CAL-1™) course builds leadership capability for Agile environments.",
      "Learn Agile mindset, servant leadership, organizational agility, and sustainable transformation practices."
    ],
    whatIsTitle: "",
    whatIsDescription: [],
    whatsIncludedTitle: "",
    whatsIncludedDescription: [],
    skillsTitle: "",
    skills: [],
    modesTitle: "",
    modesDescription: []
  };

  const corporateData = {
    courseName: "Why Corporate Opt Us",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "We provide enterprise-focused Agile leadership training tailored to your organizational needs to drive sustainable transformation."
  };

  const courseMetadata = {
    shortName: 'CAL-1',
    shortNameAlt: 'CAL-1',
    fullName: 'Certified Agile Leader® (CAL-1™)',
    fullNameAlt: 'Certified Agile Leader (CAL-1)',
    certificateName: 'Certified Agile Leader',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Certified Agile Leader® (CAL-1™) Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Certified Agile Leader Training?',
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
    "Executives & Senior Leaders",
    "Organizational Managers",
    "Agile Coaches",
    "Team Leaders",
    "Transformation Leaders"
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

export default CertifiedAgileLeaderCertificationTraining;
