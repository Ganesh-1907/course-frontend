

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

const DockerAndKubernetesTraining = () => {
  const highlights = [
    { text: "30 Hours of Live Online Training" },
    { text: "Training by Experienced Industry Experts" },
    { text: "Access Materials on LMS Anytime, Anywhere" },
    { text: "Best Price with High-Quality Deliverables" },
    { text: "24/7 Technical and Query Support" },
    { text: "Flexible Online Learning Schedule" },
    { text: "Course Completion Certificate" }
  ];

  const individualBenefits = [
    {
      title: "Better Job Opportunities",
      description: "Enhance your career prospects with in-demand Docker and Kubernetes skills."
    },
    {
      title: "Expert Industry Guidance",
      description: "Learn directly from experienced professionals in containerization and DevOps."
    },
    {
      title: "Improved Deployment Efficiency",
      description: "Deploy and scale containerized applications efficiently."
    },
    {
      title: "Faster Software Delivery",
      description: "Deliver reliable software releases with streamlined container workflows."
    },
    {
      title: "Improved Scalability",
      description: "Build highly scalable applications using Kubernetes orchestration."
    },
    {
      title: "Increased Application Flexibility",
      description: "Ensure portability across environments with containerization."
    },
    {
      title: "Optimized Infrastructure Usage",
      description: "Automate container environments to reduce infrastructure costs."
    },
    {
      title: "Consistency & Standardization",
      description: "Maintain consistent environments using Docker containers."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Application Performance",
      description: "Docker containers package code and dependencies for optimized performance."
    },
    {
      title: "Faster Deployment Cycles",
      description: "Deploy applications quickly and reliably using Docker and Kubernetes."
    },
    {
      title: "Application Portability",
      description: "Run applications consistently across multiple environments."
    },
    {
      title: "Efficient Application Management",
      description: "Manage and scale applications effectively with Kubernetes orchestration."
    },
    {
      title: "Workforce Skill Enhancement",
      description: "Develop internal expertise in containerization technologies."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "Developers and software engineers",
        "System administrators",
        "DevOps professionals",
        "Cloud engineers",
        "IT professionals interested in containerization"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Docker fundamentals and containerization.",
    "Create and manage Docker images and containers.",
    "Work with Docker Compose and Swarm.",
    "Understand Kubernetes architecture and components.",
    "Deploy, manage, and scale applications using Kubernetes."
  ];

  const prerequisites = [
    "Basic knowledge of Linux commands.",
    "Basic understanding of DevOps concepts.",
    "Basic familiarity with YAML (helpful but not mandatory)."
  ];

  const certificationSteps = [];

  const curriculumModules = [
    {
      title: "Docker Fundamentals",
      topics: [
        "Docker Architecture",
        "Containers vs Virtual Machines",
        "Docker Installation",
        "Images and Containers",
        "Dockerfile and Custom Images",
        "Docker Networking and Storage"
      ]
    },
    {
      title: "Advanced Docker Concepts",
      topics: [
        "Docker Compose",
        "Docker Swarm",
        "Docker Registry",
        "Backup and Restore"
      ]
    },
    {
      title: "Kubernetes Fundamentals",
      topics: [
        "Kubernetes Architecture",
        "Pods and Lifecycle",
        "ReplicaSets and Deployments",
        "Services and Networking",
        "Namespaces"
      ]
    },
    {
      title: "Kubernetes Advanced Concepts",
      topics: [
        "ConfigMaps and Secrets",
        "DaemonSets and Jobs",
        "StatefulSets",
        "Helm Charts",
        "Horizontal Pod Autoscaling",
        "Monitoring and Logging with Prometheus & Grafana"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand Containerization",
      description: "Learn Docker concepts and how containers simplify application deployment."
    },
    {
      title: "Master Orchestration",
      description: "Use Kubernetes to manage and scale containerized applications."
    },
    {
      title: "Deploy Applications Efficiently",
      description: "Build, ship, and deploy applications across multiple environments."
    },
    {
      title: "Ensure Security & Stability",
      description: "Implement best practices for container security and monitoring."
    },
    {
      title: "Optimize Resource Usage",
      description: "Efficiently allocate and manage system resources."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Docker & Kubernetes FAQs",
      items: [
        {
          question: "1. What is Docker?",
          answer: "Docker is an open-source platform that enables developers to package applications into containers for consistent deployment."
        },
        {
          question: "2. What is Kubernetes?",
          answer: "Kubernetes is an open-source container orchestration platform for automating deployment, scaling, and management of applications."
        },
        {
          question: "3. Are there prerequisites?",
          answer: "No strict prerequisites, but Linux and DevOps basics are helpful."
        },
        {
          question: "4. Will I receive a certificate?",
          answer: "Yes, you will receive a course completion certificate."
        },
        {
          question: "5. Is there demand for Docker and Kubernetes?",
          answer: "Yes, containerization and orchestration skills are highly in demand globally."
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
    { title: "Global Recognition", description: "Recognized certifications aligned with industry standards." },
    { title: "Expert Trainers", description: "Learn from certified professionals with real-world experience." },
    { title: "Flexible Learning", description: "Online sessions with flexible schedules." },
    { title: "Lifetime Access", description: "Access course materials anytime." },
    { title: "Proven Track Record", description: "Trusted by professionals and enterprises worldwide." },
    { title: "End-to-End Assistance", description: "Full support before, during, and after training." },
    { title: "Interactive Training", description: "Hands-on labs and real-world case studies." },
    { title: "Wide Course Portfolio", description: "Access additional DevOps and Cloud certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'DKT',
      courseName: 'Docker and Kubernetes Training',
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
    'Industry-recognized course completion certificate',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Docker and Kubernetes Training",
    breadcrumbName: "Docker and Kubernetes Certification Training Course",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Master Containerization and Orchestration Technologies",
    benefits: [
      "30 Hours Live Training",
      "Hands-On Labs and Projects",
      "Learn Docker & Kubernetes from Experts",
      "Industry-Recognized Certificate"
    ],
    mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Docker and Kubernetes Course Overview",
    description: [
      "Docker and Kubernetes training helps automate deployment and management of containerized applications.",
      "Learn how Kubernetes organizes and scales containers while Docker packages applications into portable units.",
      "Gain hands-on experience with industry-relevant best practices and real-world use cases.",
      "Prepare yourself for advanced DevOps and cloud-native roles."
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
    courseName: "Why Corporates Choose Simpliaxis",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "Simpliaxis delivers tailored Docker and Kubernetes training programs globally, helping organizations adopt containerization and orchestration efficiently while bridging skill gaps."
  };

  const courseMetadata = {
    shortName: 'Docker and Kubernetes',
    shortNameAlt: 'Docker and Kubernetes',
    fullName: 'Docker and Kubernetes Training',
    fullNameAlt: 'Docker and Kubernetes Training',
    certificateName: 'Docker and Kubernetes',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing this Docker and Kubernetes training, you can pursue stronger roles in DevOps, cloud engineering, platform operations, and container orchestration.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Docker and Kubernetes Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Developers and software engineers",
    "System administrators",
    "DevOps professionals",
    "Cloud engineers",
    "IT professionals interested in containerization"
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

export default DockerAndKubernetesTraining;
