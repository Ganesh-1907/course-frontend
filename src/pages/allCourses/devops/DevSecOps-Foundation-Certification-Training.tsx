

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
  BookOpen,
  Network,
  CreditCard,
  FileText,
  Briefcase,
} from "lucide-react";

const DevSecOpsFoundationCertificationTraining = () => {
  const highlights = [
    { text: "2 Days of Live Online Interactive Sessions" },
    { text: "Earn 16 PDUs and 16 SEUs" },
    { text: "Learn DevOps Fundamentals from Industry Experts" },
    { text: "Globally Recognized Certification" },
    { text: "Curriculum Aligned with Industry Standards" },
    { text: "Exam Fee Included in Training Cost" },
    { text: "24/7 Learning and Support Assistance" },
    { text: "Dedicated Doubt-Clearing Sessions" }
  ];

  const individualBenefits = [
    {
      title: "Increased Professional Value",
      description: "Enhance your credibility and value within your organization with DevOps certification."
    },
    {
      title: "Expanded Career Opportunities",
      description: "Boost your job prospects in the rapidly growing DevOps domain."
    },
    {
      title: "Strong Conceptual Foundation",
      description: "Gain a clear understanding of DevOps concepts, principles, and terminology."
    },
    {
      title: "Career Growth Acceleration",
      description: "Strengthen your profile with industry-recognized DevOps certification."
    },
    {
      title: "Hands-On Practical Knowledge",
      description: "Acquire real-world DevOps practices to stay competitive in the job market."
    },
    {
      title: "Long-Term Career Advancement",
      description: "Develop skills necessary to excel in modern IT and digital transformation environments."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Operational Efficiency",
      description: "Streamline production processes and reduce delays with DevOps practices."
    },
    {
      title: "Enhanced Collaboration",
      description: "Encourage seamless communication between development and operations teams."
    },
    {
      title: "Higher Quality Output",
      description: "Implement DevOps practices that improve performance and product quality."
    },
    {
      title: "Adaptable Processes",
      description: "Adopt flexible DevOps approaches tailored to organizational needs."
    },
    {
      title: "Continuous Improvement Culture",
      description: "Drive productivity through efficient workflows and ongoing optimization."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "IT professionals and developers",
        "Project managers and team leaders",
        "Business analysts",
        "Operations professionals",
        "Anyone interested in DevOps fundamentals"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand DevOps principles and practices.",
    "Learn DevOps terminology and frameworks.",
    "Implement DevOps culture and collaboration models.",
    "Apply CI/CD, automation, and monitoring techniques.",
    "Prepare confidently for the DevOps Foundation certification exam."
  ];

  const prerequisites = [
    "Basic understanding of IT and networking concepts.",
    "Familiarity with software development lifecycle.",
    "Basic knowledge of Linux or scripting is helpful but not mandatory."
  ];

  const certificationSteps = [
    {
      title: "Step 1: Meet Eligibility",
      description: "Have a basic understanding of DevOps concepts."
    },
    {
      title: "Step 2: Attend Training",
      description: "Complete DevOps Foundation training with an accredited provider."
    },
    {
      title: "Step 3: Understand Exam Format",
      description: "Prepare for the 40 multiple-choice questions exam (60 minutes, closed book)."
    },
    {
      title: "Step 4: Get Certified",
      description: "Pass the exam with the required score to earn certification."
    }
  ];

  const curriculumModules = [
    {
      title: "Exploring DevOps",
      topics: [
        "Defining DevOps",
        "Importance of DevOps"
      ]
    },
    {
      title: "Core DevOps Principles",
      topics: [
        "The Three Ways",
        "Theory of Constraints",
        "Chaos Engineering",
        "Learning Organizations"
      ]
    },
    {
      title: "Key DevOps Practices",
      topics: [
        "Continuous Delivery",
        "DevSecOps",
        "Site Reliability Engineering",
        "ChatOps",
        "Kanban"
      ]
    },
    {
      title: "Business & Technology Frameworks",
      topics: [
        "Agile",
        "Lean",
        "ITSM",
        "Safety Culture",
        "Continuous Funding"
      ]
    },
    {
      title: "Culture & Operating Models",
      topics: [
        "Organizational Culture",
        "Behavioral Models",
        "Maturity Models",
        "Target Operating Models"
      ]
    },
    {
      title: "Automation & DevOps Toolchains",
      topics: [
        "CI/CD",
        "Cloud",
        "Containers",
        "Kubernetes",
        "Toolchain Architecture"
      ]
    },
    {
      title: "Metrics & Reporting",
      topics: [
        "Technical Metrics",
        "Business Metrics",
        "Performance Reporting"
      ]
    },
    {
      title: "Leadership & Evolution",
      topics: [
        "DevOps Leadership",
        "Collaborative Platforms",
        "Change Evolution"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand DevOps Principles",
      description: "Learn core principles driving DevOps adoption."
    },
    {
      title: "Align Business & Technology",
      description: "Understand DevOps impact on organizational success."
    },
    {
      title: "Master DevOps Terminology",
      description: "Communicate effectively within DevOps environments."
    },
    {
      title: "Implement DevOps Practices",
      description: "Apply CI/CD, automation, and performance metrics."
    },
    {
      title: "Build DevOps Culture",
      description: "Promote collaboration and continuous improvement."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "DevOps Certification FAQs",
      items: [
        {
          question: "1. What is DevOps Foundation Certification?",
          answer: "An entry-level certification validating understanding of DevOps principles, practices, and terminology."
        },
        {
          question: "2. Are there prerequisites?",
          answer: "No strict prerequisites, but basic IT knowledge is helpful."
        },
        {
          question: "3. What is the exam format?",
          answer: "40 multiple-choice questions, 60 minutes, closed book."
        },
        {
          question: "4. What is the passing score?",
          answer: "65% (26 correct answers out of 40)."
        },
        {
          question: "5. Is the exam fee included?",
          answer: "Yes, the exam fee is included in the training cost."
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
          question: "2. Is refund possible?",
          answer: "Refunds are not available, but rescheduling is allowed."
        }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        {
          question: "1. Is the training online?",
          answer: "Yes, live instructor-led online sessions are available."
        },
        {
          question: "2. Do you offer corporate training?",
          answer: "Yes, customized corporate training programs are available."
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
      role: 'Certified DevOps Trainer',
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
        'Raquel Silva is an Agile coach who helps teams deliver value through collaborative and practical DevOps adoption.',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    },
  ];

  const courseWhyViovn = [
    { title: "Global Recognition", description: "Recognized by reputed certification bodies worldwide." },
    { title: "Expert Trainers", description: "Learn from experienced and certified professionals." },
    { title: "Flexible Learning", description: "Weekday and weekend online batches available." },
    { title: "Lifetime Access", description: "Access study materials and recordings anytime." },
    { title: "Proven Track Record", description: "Trusted by professionals and enterprises globally." },
    { title: "End-to-End Assistance", description: "Full support before, during, and after training." },
    { title: "Interactive Training", description: "Engaging sessions with real-world case studies." },
    { title: "Wide Course Portfolio", description: "Access Agile, Scrum, SAFe, DevOps, and IT certifications." }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Globally recognized DevOps Foundation credential',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "DevOps Foundation Certification Training",
    breadcrumbName: "DevOps Foundation Certification Training Course",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Master DevOps Principles and Become Certified",
    benefits: [
      "2 Days Instructor-Led Training",
      "Exam Fee Included",
      "Globally Recognized Certification",
      "16 PDUs & 16 SEUs"
    ],
    mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "DevOps Foundation Certification Overview",
    description: [
      "This course provides foundational knowledge of DevOps concepts, terminology, and benefits.",
      "Understand DevOps culture focusing on collaboration, integration, automation, and workflow optimization.",
      "Learn how DevOps aligns with Agile, Lean, and ITSM frameworks to drive digital transformation.",
      "Prepare confidently for the DevOps Foundation certification exam."
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
    courseName: "Why Corporates Choose Viovn",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Viovn delivers tailored DevOps training programs globally to help organizations bridge skill gaps, improve collaboration, and enhance operational efficiency through industry-aligned methodologies."
  };

  const courseMetadata = {
    shortName: 'DevOps Foundation',
    shortNameAlt: 'DevOps Foundation',
    fullName: 'DevOps Foundation Certification Training',
    fullNameAlt: 'DevOps Foundation Certification Training',
    certificateName: 'DevOps Foundation',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing this DevOps Foundation certification training, you can pursue stronger roles in DevOps, cloud operations, automation, and platform engineering.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for DevOps Foundation Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'DevOps Certification Body',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "IT professionals and developers",
    "Project managers and team leaders",
    "Business analysts",
    "Operations professionals",
    "Anyone interested in DevOps fundamentals"
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
      ltpLabel: 'Global Learning Partner',
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
          categoryName="devops"
          categoryLink="/category/devops"
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
                <CourseSidePanel  courseName={heroData.courseName} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DevSecOpsFoundationCertificationTraining;
