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

const AWSSolutionsArchitectProfessionalCertificationTraining = () => {
  const highlights = [
    { text: "16 Hours of Instructor-Led Live Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "AWS Demo Services for Practical Learning", icon: <Laptop className="w-5 h-5" /> },
    { text: "Complete Guidance for AWS SAA-C03 Exam", icon: <Award className="w-5 h-5" /> },
    { text: "Lifetime Access to Course Materials", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Live Industry-Oriented Projects", icon: <Briefcase className="w-5 h-5" /> },
    { text: "Flexible Training Schedules", icon: <Globe className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Career Advancement",
      description: "AWS Solutions Architect certification enhances career opportunities and promotions."
    },
    {
      title: "Higher Salary Potential",
      description: "Certified professionals often command higher salaries due to specialized cloud expertise."
    },
    {
      title: "Deep Architectural Knowledge",
      description: "Develop strong expertise in AWS services and architecture best practices."
    },
    {
      title: "Professional Community Access",
      description: "Join a network of certified professionals for collaboration and knowledge sharing."
    }
  ];

  const corporateBenefits = [
    {
      title: "Strong Technical Leadership",
      description: "Certified architects can lead teams with advanced cloud competency."
    },
    {
      title: "Successful Project Delivery",
      description: "Improves on-time and within-budget project execution."
    },
    {
      title: "Reduced Operational Costs",
      description: "Optimized cloud architectures lower infrastructure and operational expenses."
    },
    {
      title: "Competitive Advantage",
      description: "Enhanced innovation through deep understanding of AWS services."
    }
  ];

  const careerStats = {
    averageIncome: "$119,000",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "22%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "Cloud Engineers",
        "Solutions Architects",
        "DevOps Engineers",
        "System Administrators",
        "IT Professionals transitioning to Cloud"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design scalable and fault-tolerant AWS architectures.",
    "Apply AWS Well-Architected Framework principles.",
    "Implement cost-optimized and secure cloud solutions.",
    "Deploy high-availability and disaster recovery architectures.",
    "Pass the AWS Certified Solutions Architect – Associate (SAA-C03) exam."
  ];

  const prerequisites = [
    "Basic understanding of cloud computing concepts.",
    "Knowledge of AWS services and practical usage.",
    "Hands-on experience with AWS workloads is beneficial."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete 16 hours of instructor-led AWS Solutions Architect training.",
      color: "bg-primary"
    },
    {
      title: "Hands-On Practice",
      description: "Work on real-world architecture and deployment scenarios.",
      color: "bg-indigo-500"
    },
    {
      title: "Mock Exams & Review",
      description: "Prepare with practice tests aligned to SAA-C03 exam objectives.",
      color: "bg-purple-500"
    },
    {
      title: "Pass the Exam",
      description: "Score 720 out of 1000 to earn AWS Solutions Architect certification.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      title: "Architecting on AWS",
      topics: [
        "Building Systems on AWS",
        "AWS Well-Architected Framework"
      ]
    },
    {
      title: "AWS Account Management",
      topics: [
        "Multi-Account Strategies",
        "Security Management",
        "Cost Management",
        "Directory Services"
      ]
    },
    {
      title: "Advanced Network Architectures",
      topics: [
        "VPC Design Patterns",
        "AWS Direct Connect",
        "Transit Gateway",
        "Route 53 Resolver"
      ]
    },
    {
      title: "Deployment Management",
      topics: [
        "Application Lifecycle Management",
        "Elastic Beanstalk",
        "Container Deployments"
      ]
    },
    {
      title: "Data & Storage Solutions",
      topics: [
        "Amazon S3 Optimization",
        "ElastiCache",
        "Snowball & DataSync",
        "Database Migration"
      ]
    },
    {
      title: "Large-Scale Application Design",
      topics: [
        "Auto Scaling",
        "Blue-Green Deployments"
      ]
    },
    {
      title: "Resilient Architectures",
      topics: [
        "High Availability",
        "Scaling Constraints",
        "Global Accelerator"
      ]
    },
    {
      title: "Encryption & Security",
      topics: [
        "Data at Rest Protection",
        "Data in Transit Protection"
      ]
    }
  ];

  const learningObjectives = [
    { title: "Architecture Principles", description: "Master AWS design principles and architectural best practices." },
    { title: "Core AWS Services", description: "Gain in-depth knowledge of EC2, S3, RDS, Lambda, and VPC." },
    { title: "High Availability", description: "Design reliable and fault-tolerant systems." },
    { title: "Cost Optimization", description: "Build efficient and cost-effective cloud solutions." },
    { title: "Security Best Practices", description: "Implement secure architectures using AWS security tools." },
    { title: "Scalability & Elasticity", description: "Build systems that scale automatically based on demand." },
    { title: "Monitoring & Logging", description: "Use AWS monitoring tools to manage performance and logs." },
    { title: "Networking Concepts", description: "Understand VPC, subnets, and content delivery services." },
    { title: "Database Design", description: "Design scalable database solutions using AWS services." },
    { title: "Deployment Strategies", description: "Implement CI/CD pipelines and deployment automation." }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Certification FAQs",
      items: [
        { question: "1. What does an AWS Solutions Architect do?", answer: "Designs and implements scalable, reliable, and cost-effective AWS solutions." },
        { question: "2. What are the benefits of certification?", answer: "Improves cloud architecture skills and increases earning potential." },
        { question: "3. Difference between Cloud Practitioner & Solutions Architect?", answer: "Cloud Practitioner is foundational; Solutions Architect focuses on technical design and implementation." },
        { question: "4. How many questions are in the exam?", answer: "65 questions in multiple-choice and multiple-response format." },
        { question: "5. What is the passing score?", answer: "720 out of 1000." },
        { question: "6. Is the exam multiple-choice?", answer: "Yes, includes both multiple-choice and multiple-response questions." },
        { question: "7. How long is the certification valid?", answer: "Valid for 3 years." },
        { question: "8. Job opportunities?", answer: "Cloud Architect, DevOps Engineer, Systems Administrator, IT Consultant." },
        { question: "9. Average salary?", answer: "Approximately $119,000 annually, depending on region and experience." },
        { question: "10. Can I take it without Cloud Practitioner?", answer: "Yes, but foundational cloud knowledge is recommended." }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        { question: "1. Token payment policy?", answer: "Non-refundable after 15 days; valid for 6 months adjustment." },
        { question: "2. Preferred currency?", answer: "Use your local or course-location currency." },
        { question: "3. Online payments?", answer: "Yes, secure online payment portal available." },
        { question: "4. Early discounts?", answer: "Yes, promotional offers are available." },
        { question: "5. Installment options?", answer: "Flexible payment options available." },
        { question: "6. Refund policy?", answer: "No refunds; rescheduling allowed." },
        { question: "7. Payment receipt?", answer: "Invoice sent via email after payment." },
        { question: "8. Processing fee?", answer: "No transaction processing fee." },
        { question: "9. Accepted cards?", answer: "VISA, MasterCard, Maestro, AMEX, Discover." },
        { question: "10. Other payment methods?", answer: "Credit/Debit Cards, Net Banking, PayPal, Stripe, etc." }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        { question: "1. What if I miss a class?", answer: "You can reschedule without extra charges." },
        { question: "2. How to contact support?", answer: "Contact via email or phone support." },
        { question: "3. Language options?", answer: "English preferred; custom language training on request." },
        { question: "4. Personalized training?", answer: "Multiple schedules and e-learning options available." },
        { question: "5. Where to find schedules?", answer: "Visit the official website schedule page." },
        { question: "6. Change training date?", answer: "Yes, with prior notice." },
        { question: "7. Certificate after completion?", answer: "Yes, provided after successful training completion." },
        { question: "8. Enrollment process?", answer: "Register online and complete payment." },
        { question: "9. Modes of training?", answer: "Online, live virtual, corporate, and e-learning." },
        { question: "10. Why choose Simpliaxis?", answer: "Trusted provider with experienced trainers and global recognition." }
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
    { "title": "Global Recognition", "description": "Globally recognized AWS certification training." },
    { "title": "Certified Trainers", "description": "Learn from AWS-authorized certified professionals." },
    { "title": "Flexible Learning", "description": "Weekend and weekday online training options." },
    { "title": "Lifetime Access", "description": "Access recordings and materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals worldwide." },
    { "title": "End-to-End Assistance", "description": "Full support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world assignments." },
    { "title": "Wide Course Portfolio", "description": "Access additional AWS and DevOps certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'SAA-C03',
      courseName: 'AWS Certified Solutions Architect – Associate Training',
      dateRange: 'Mar 28 - Mar 30, 2026',
      timeRange: '09:30 AM - 05:30 PM IST',
      trainerName: 'AWS Architect',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 38,000',
      discountPercentage: '15',
    },
  ];

  const certificateBenefits = [
    'Official AWS Certified Solutions Architect Badge',
    'Voucher for SAA-C03 Certification Exam',
    'Advanced Architectural Portfolio',
    'Lifelong Membership to Viovn Alumni Network',
  ];

  const heroData = {
    "courseName": "AWS Solutions Architect – Associate (SAA-C03) Certification Training",
    "breadcrumbName": "AWS Solutions Architect Associate Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Cloud Architecture & Pass SAA-C03",
    "benefits": [
      "16 Hours Live Training",
      "Real-World Architecture Projects",
      "Exam-Focused Preparation",
      "Lifetime Learning Access"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AWS Solutions Architect Associate Overview",
    "description": [
      "This course prepares professionals to design scalable, secure, and cost-optimized AWS architectures.",
      "Learn AWS Well-Architected Framework and real-world deployment strategies.",
      "Gain the expertise required to clear the SAA-C03 certification exam."
    ],
    "whatIsTitle": "What is AWS Solutions Architect?",
    "whatIsDescription": [
      "An AWS Solutions Architect is responsible for designing and implementing scalable, reliable, and cost-effective cloud solutions on the AWS platform."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Comprehensive training curriculum",
      "Real-world architecture projects",
      "Mock exams and review sessions",
      "Lifetime access to materials"
    ],
    "skillsTitle": "Skills You Will Gain",
    "skills": [
      "Cloud architecture design",
      "Cost optimization strategies",
      "High availability and disaster recovery",
      "Security best practices"
    ],
    "modesTitle": "Flexible Training Options",
    "modesDescription": [
      "Live virtual classroom sessions",
      "Corporate group training",
      "Self-paced learning materials"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Simpliaxis",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver customized AWS Solutions Architect corporate training programs to enhance cloud strategy, governance, and architecture excellence."
  };

  const courseMetadata = {
    shortName: 'SAA-C03',
    shortNameAlt: 'AWS Solutions Architect',
    fullName: 'AWS Certified Solutions Architect – Associate Certification Training',
    fullNameAlt: 'AWS Solutions Architect Associate Training',
    certificateName: 'AWS Solutions Architect Associate',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your AWS Solutions Architect Associate certification significantly enhances your professional profile, opening up opportunities in cloud architecture, technical consulting, and leadership roles.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AWS Solutions Architect Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official AWS Badge',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Amazon Web Services',
      certificateType: 'Certified Solutions Architect',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified AWS Trainer',
      signer2Role: 'Viovn Program Director',
    },
  };

  const commonAttendeesList = [
    "Cloud Engineers",
    "Solutions Architects",
    "DevOps Engineers",
    "System Administrators",
    "IT Professionals"
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
          categoryName="cloud computing"
          categoryLink="/category/cloud-computing"
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

export default AWSSolutionsArchitectProfessionalCertificationTraining;
