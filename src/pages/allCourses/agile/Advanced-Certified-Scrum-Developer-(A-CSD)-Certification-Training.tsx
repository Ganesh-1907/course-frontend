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

const AdvancedCertifiedScrumDeveloperCertificationTraining = () => {
  const highlights = [
    { text: "16 Hours Live Online Training Session" },
    { text: "Earn 16 SEUs & 16 PDUs" },
    { text: "Interactive Hands-on Learning Experience" },
    { text: "Globally Recognized Scrum Alliance Certification" },
    { text: "Scrum Simulation-Based Learning" },
    { text: "Dedicated 24/7 Customer Support" }
  ];

  const individualBenefits = [
    {
      title: "Advanced Technical Expertise",
      description: "Master advanced Agile engineering practices including TDD, CI, refactoring, and continuous delivery."
    },
    {
      title: "Career Advancement",
      description: "Enhance your resume with a prestigious Scrum Alliance credential and unlock senior Agile developer opportunities."
    },
    {
      title: "Stronger Problem-Solving Skills",
      description: "Apply advanced refactoring and test-driven techniques to solve complex development challenges."
    },
    {
      title: "Enhanced Team Collaboration",
      description: "Improve communication, collaboration, and team dynamics within Agile environments."
    },
    {
      title: "Continuous Improvement Mindset",
      description: "Adopt Lean and Agile principles to stay competitive in evolving software ecosystems."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Productivity",
      description: "Developers deliver high-quality software efficiently using advanced Agile engineering practices."
    },
    {
      title: "Higher Product Quality",
      description: "Better refactoring and testing practices lead to reliable, maintainable codebases."
    },
    {
      title: "Stronger Team Dynamics",
      description: "Enhanced collaboration improves cross-functional performance and project outcomes."
    },
    {
      title: "Scalability & Innovation",
      description: "Agile architecture and design practices support scalable, innovative solutions."
    },
    {
      title: "Faster Time-to-Market",
      description: "Continuous integration and delivery pipelines accelerate release cycles."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "Certified Scrum Developers (CSD)",
        "Agile Developers",
        "Technical Leads",
        "Software Engineers",
        "Agile Team Members"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Implement advanced Continuous Integration & Continuous Delivery pipelines.",
    "Apply Test-Driven Development (TDD) and refactoring techniques.",
    "Improve Agile architecture and design practices.",
    "Strengthen collaboration and communication in Scrum teams.",
    "Adopt Lean engineering and quality-focused development."
  ];

  const prerequisites = [
    "Hold a Certified Scrum Developer (CSD) certification (active or expired).",
    "Complete an approved A-CSD course.",
    "Validate at least 12 months of Scrum team experience within the last five years.",
    "Successfully complete all required coursework and assignments."
  ];

  const certificationSteps = [
    {
      title: "Complete Training",
      description: "Attend the 16-hour live online A-CSD training program."
    },
    {
      title: "Participate Actively",
      description: "Engage in simulations, exercises, and collaborative workshops."
    },
    {
      title: "Complete Assignments",
      description: "Submit required coursework as guided by certified trainers."
    },
    {
      title: "Earn Certification",
      description: "Receive the Advanced Certified Scrum Developer® credential upon successful completion."
    }
  ];

  const curriculumModules = [
    {
      title: "Continuous Delivery",
      topics: [
        "Continuous Delivery Concepts",
        "Deployment Strategies",
        "Delivery Feedback Loops",
        "Hands-on Implementation"
      ]
    },
    {
      title: "Continuous Integration",
      topics: [
        "Automated Builds",
        "Self-Testing Pipelines",
        "CI Team Practices"
      ]
    },
    {
      title: "Test Driven Development",
      topics: [
        "TDD as Design Practice",
        "Unit Testing Strategies",
        "Improving Test Quality",
        "Stakeholder Feedback Loops"
      ]
    },
    {
      title: "Refactoring & Technical Debt",
      topics: [
        "Code Smells",
        "Technical Debt Management",
        "Refactoring Techniques"
      ]
    },
    {
      title: "Architecture & Agile Design",
      topics: [
        "Emergent vs Upfront Architecture",
        "System Constraints",
        "Quality Metrics"
      ]
    },
    {
      title: "Team Collaboration & Dynamics",
      topics: [
        "Effective Communication",
        "Backlog Sizing Techniques",
        "Collaborative Engineering"
      ]
    },
    {
      title: "Lean, Agile & Scrum Practices",
      topics: [
        "Workflow Visualization",
        "Waste Reduction",
        "Definition of Done Evolution",
        "Multi-Team Collaboration"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Lean & Agile Mastery",
      description: "Deepen understanding of Lean, Agile, and Scrum in complex development environments."
    },
    {
      title: "Advanced Collaboration",
      description: "Enhance teamwork and conflict resolution skills."
    },
    {
      title: "Architectural Excellence",
      description: "Apply advanced architecture and system design principles."
    },
    {
      title: "Advanced Refactoring",
      description: "Improve maintainability and code quality using modern techniques."
    },
    {
      title: "Continuous Integration",
      description: "Implement automated CI pipelines to streamline delivery."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "A-CSD Certification FAQs",
      items: [
        {
          question: "1. What is A-CSD Certification?",
          answer: "A-CSD is an advanced Scrum Alliance certification that builds on CSD and focuses on advanced Agile engineering practices."
        },
        {
          question: "2. Is there an exam?",
          answer: "No written exam is required. Certification is granted after successful completion of training and assignments."
        },
        {
          question: "3. Is renewal required?",
          answer: "Yes, the certification must be renewed every two years with required SEUs."
        },
        {
          question: "4. What is the duration of the course?",
          answer: "The training typically runs for 2–3 days (16 hours live session)."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        {
          question: "1. Are installment payments available?",
          answer: "Yes, flexible payment options are available."
        },
        {
          question: "2. Is the course refundable?",
          answer: "Refunds are not available, but rescheduling options are provided."
        }
      ]
    },
    {
      id: "category_3",
      label: "General Training FAQs",
      items: [
        {
          question: "1. Do I receive Scrum Alliance membership?",
          answer: "Yes, certification includes Scrum Alliance membership benefits."
        },
        {
          question: "2. Is this training available online?",
          answer: "Yes, the course is delivered via live online instructor-led sessions."
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
    { "title": "Global Recognition", "description": "Recognized worldwide by Scrum Alliance." },
    { "title": "Expert Trainers", "description": "Learn from experienced certified Scrum trainers." },
    { "title": "Flexible Learning", "description": "Live virtual and corporate training options available." },
    { "title": "Lifetime Learning Support", "description": "Access resources and guidance post-training." },
    { "title": "Proven Track Record", "description": "Trusted by enterprises globally." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification renewal." },
    { "title": "Interactive Sessions", "description": "Hands-on workshops and Scrum simulations." },
    { "title": "Wide Course Portfolio", "description": "Comprehensive Agile and Scrum training programs." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'CSD',
      courseName: 'Advanced Certified Scrum Developer (A-CSD®) Training',
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
    courseName: "Advanced Certified Scrum Developer® (A-CSD®) Certification Training",
    breadcrumbName: "Advanced Certified Scrum Developer Course | A-CSD Training",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Master Advanced Agile Engineering & Scrum Development Practices.",
    benefits: [
      "16 Hours Live Training",
      "Earn 16 SEUs & PDUs",
      "Hands-on Simulation-Based Learning",
      "Globally Recognized Scrum Alliance Credential"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Advanced Certified Scrum Developer (A-CSD) Overview",
    description: [
      "The A-CSD certification builds on foundational Scrum Developer knowledge and focuses on advanced Agile engineering techniques.",
      "Participants learn continuous integration, test-driven development, refactoring, architecture practices, and collaborative team dynamics."
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
    courseName: "Why Corporates Opt Us",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "We provide enterprise-focused Agile engineering training to enhance development excellence and accelerate product delivery."
  };

  const courseMetadata = {
    shortName: 'A-CSD',
    shortNameAlt: 'A-CSD',
    fullName: 'Advanced Certified Scrum Developer® (A-CSD®)',
    fullNameAlt: 'Advanced Certified Scrum Developer (A-CSD)',
    certificateName: 'Advanced Scrum Developer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Advanced Certified Scrum Developer® Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Advanced Scrum Developer Training?',
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
    "Certified Scrum Developers (CSD)",
    "Agile Developers",
    "Technical Leads",
    "Software Engineers",
    "Agile Team Members"
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
          categoryName="agile"
          categoryLink="/category/agile"
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
                <CourseSidePanel schedules={sidePanelSchedules} courseName={heroData.courseName} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdvancedCertifiedScrumDeveloperCertificationTraining;
