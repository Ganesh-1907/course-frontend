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

const CloudComputingWithAWSTraining = () => {
  const highlights = [
    { text: "36 Hours of Live Instructor-Led AWS Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Hands-On Labs with EC2, S3, and VPC", icon: <Laptop className="w-5 h-5" /> },
    { text: "Comprehensive Cloud Computing Curriculum", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Training Aligned with AWS Certification Objectives", icon: <Award className="w-5 h-5" /> },
    { text: "Real-World Scenarios and Practical Exercises", icon: <Briefcase className="w-5 h-5" /> },
    { text: "Focused Coaching by AWS Industry Experts", icon: <UserCheck className="w-5 h-5" /> },
    { text: "24/7 Customer Support and Learning Assistance", icon: <Headset className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Career Advancement",
      description: "AWS skills help you secure promotions and better job opportunities."
    },
    {
      title: "Certification Success",
      description: "Structured training improves your chances of passing the AWS Solutions Architect – Associate exam on the first attempt."
    },
    {
      title: "Higher Salary",
      description: "AWS-certified professionals typically earn 25–30% more than non-certified cloud specialists."
    },
    {
      title: "Increased Employability",
      description: "AWS skills are in high demand across industries."
    },
    {
      title: "Improved Problem-Solving",
      description: "Learn to deploy, manage, and secure cloud infrastructure effectively."
    },
    {
      title: "Global Networking",
      description: "Connect with AWS professionals worldwide to grow your career network."
    }
  ];

  const corporateBenefits = [
    {
      title: "Cost Efficiency",
      description: "Optimize computing, storage, and database costs using AWS best practices."
    },
    {
      title: "Scalability",
      description: "Scale infrastructure on demand to meet growing business needs."
    },
    {
      title: "Enhanced Security",
      description: "Leverage AWS compliance and security frameworks to protect business data."
    },
    {
      title: "Disaster Recovery",
      description: "Implement robust backup and recovery strategies for business continuity."
    },
    {
      title: "Operational Flexibility",
      description: "Improve workflow efficiency with flexible AWS cloud solutions."
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
        "Aspiring Cloud Architects",
        "Developers transitioning to Cloud",
        "System Administrators",
        "IT Professionals",
        "Cloud Enthusiasts"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design scalable and secure AWS cloud architectures.",
    "Implement IAM policies and access controls.",
    "Deploy and manage EC2, S3, VPC, and databases.",
    "Build highly available and fault-tolerant systems.",
    "Apply AWS Well-Architected Framework principles."
  ];

  const prerequisites = [
    "No strict prerequisites.",
    "Basic knowledge of networking and computing is helpful.",
    "Understanding of programming fundamentals is advantageous."
  ];

  const certificationSteps = [
    {
      title: "Complete Training",
      description: "Attend 36 hours of live AWS instructor-led sessions.",
      color: "bg-primary"
    },
    {
      title: "Practice with Labs",
      description: "Work on hands-on exercises covering core AWS services.",
      color: "bg-indigo-500"
    },
    {
      title: "Take Mock Tests",
      description: "Assess readiness with structured practice exams.",
      color: "bg-purple-500"
    },
    {
      title: "Pass Certification Exam",
      description: "Clear the AWS Certified Solutions Architect – Associate exam.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    { "title": "Architecting Fundamentals", "topics": ["Core AWS architecture principles"] },
    { "title": "Compute Services", "topics": ["Amazon EC2 and related services"] },
    { "title": "Networking I", "topics": ["VPC and networking basics"] },
    { "title": "Automation", "topics": ["CloudFormation and automation tools"] },
    { "title": "Storage Services", "topics": ["S3, EFS, storage solutions"] },
    { "title": "Account Security", "topics": ["IAM and security best practices"] },
    { "title": "Networking II", "topics": ["Advanced networking concepts"] },
    { "title": "Database Services", "topics": ["RDS and DynamoDB"] },
    { "title": "Monitoring & Scaling", "topics": ["CloudWatch and Auto Scaling"] },
    { "title": "Containers", "topics": ["Docker and Kubernetes basics"] },
    { "title": "Serverless Architecture", "topics": ["AWS Lambda"] },
    { "title": "Edge Services", "topics": ["CloudFront and Route 53"] },
    { "title": "Backup & Recovery", "topics": ["Disaster recovery strategies"] }
  ];

  const learningObjectives = [
    {
      title: "Architecting Fundamentals",
      description: "Design scalable, secure, and cost-effective AWS solutions."
    },
    {
      title: "Compute Services",
      description: "Launch and manage EC2 instances efficiently."
    },
    {
      title: "Networking Basics",
      description: "Build secure networks using VPC and subnets."
    },
    {
      title: "Automation Tools",
      description: "Use CloudFormation to automate infrastructure deployment."
    },
    {
      title: "Storage Solutions",
      description: "Manage scalable and secure data storage using S3 and EFS."
    },
    {
      title: "Database Management",
      description: "Deploy and manage RDS and DynamoDB."
    },
    {
      title: "Monitoring & Scaling",
      description: "Monitor applications and scale automatically using CloudWatch."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Cloud & Certification FAQs",
      items: [
        { "question": "1. What is cloud computing?", "answer": "A technology that allows storing and processing data on remote servers instead of local systems." },
        { "question": "2. What is AWS?", "answer": "Amazon Web Services is a leading cloud platform offering 200+ services." },
        { "question": "3. What does this course cover?", "answer": "Architecture, EC2, S3, VPC, automation, security, databases, and monitoring." },
        { "question": "4. Does this prepare for SAA?", "answer": "Yes, aligned with AWS Solutions Architect – Associate objectives." },
        { "question": "5. Who should enroll?", "answer": "Developers, IT professionals, and cloud enthusiasts." },
        { "question": "6. Are there prerequisites?", "answer": "No strict prerequisites." },
        { "question": "7. Exam format?", "answer": "65 questions, 130 minutes." },
        { "question": "8. Exam cost?", "answer": "150 USD." },
        { "question": "9. Certification validity?", "answer": "Valid for 3 years." },
        { "question": "10. Renewal process?", "answer": "Retake latest exam or earn professional-level certification." },
        { "question": "11. Salary expectations?", "answer": "Certified professionals earn competitive global salaries." }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; valid for 6 months adjustment." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payments?", "answer": "Secure online payment portal available." },
        { "question": "4. Discounts?", "answer": "Promotional offers available periodically." },
        { "question": "5. Installments?", "answer": "Flexible payment options available." },
        { "question": "6. Refund policy?", "answer": "No refunds; rescheduling allowed." },
        { "question": "7. Payment receipt?", "answer": "Invoice emailed after payment." },
        { "question": "8. Processing fee?", "answer": "No transaction fees." },
        { "question": "9. Accepted cards?", "answer": "VISA, MasterCard, Maestro, AMEX, Discover." },
        { "question": "10. Other methods?", "answer": "Credit/Debit Cards, Net Banking, PayPal, Stripe, etc." }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        { "question": "1. Missed class?", "answer": "Rescheduling available without extra charges." },
        { "question": "2. Contact support?", "answer": "Reach via email or phone." },
        { "question": "3. Language options?", "answer": "English preferred; custom options available." },
        { "question": "4. Personalized training?", "answer": "Multiple schedules and e-learning available." },
        { "question": "5. Training modes?", "answer": "Online, live virtual, corporate, and e-learning." },
        { "question": "6. Certificate provided?", "answer": "Yes, after completion." },
        { "question": "7. Corporate training?", "answer": "Customized enterprise training available." },
        { "question": "8. Discounts?", "answer": "Available periodically." },
        { "question": "9. Why Simpliaxis?", "answer": "Experienced trainers and globally recognized programs." },
        { "question": "10. Course affordability?", "answer": "Affordable pricing with offers available." }
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
      courseCode: 'AWS-CC',
      courseName: 'AWS Cloud Computing Certification Training',
      dateRange: 'Apr 05 - Apr 15, 2026',
      timeRange: '07:00 PM - 10:00 PM IST',
      trainerName: 'AWS Certified Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 55,000',
      discountedPrice: 'INR 48,000',
      discountPercentage: '12',
    },
  ];

  const certificateBenefits = [
    'Official AWS Certified Solutions Architect Badge',
    'Voucher for SAA-C03 Certification Exam',
    'Advanced Architectural Portfolio',
    'Lifelong Membership to Viovn Alumni Network',
  ];

  const heroData = {
    "courseName": "AWS Cloud Computing Certification Training",
    "breadcrumbName": "AWS Cloud Computing Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master AWS & Become a Certified Cloud Architect",
    "benefits": [
      "36 Hours Live AWS Training",
      "Hands-On Labs",
      "Exam-Focused Preparation",
      "Career-Oriented Cloud Skills"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AWS Cloud Computing Training Overview",
    "description": [
      "This AWS Cloud Computing course prepares learners for the Solutions Architect – Associate certification.",
      "Gain hands-on experience with core AWS services and architecture design principles.",
      "Learn to build secure, scalable, and cost-effective cloud infrastructure."
    ],
    "whatIsTitle": "What is Cloud Computing with AWS?",
    "whatIsDescription": [
      "Cloud computing with AWS involves using Amazon's global infrastructure to deploy, manage, and scale applications without the need for physical hardware."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "36 hours of live training",
      "Hands-on lab exercises",
      "Exam preparation guides",
      "24/7 learning assistance"
    ],
    "skillsTitle": "Skills You Will Gain",
    "skills": [
      "Cloud architecture design",
      "IAM and security management",
      "VPC and networking",
      "Automation and serverless"
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
    "description": "We provide customized AWS cloud training to help organizations improve scalability, security, and operational efficiency."
  };

  const courseMetadata = {
    shortName: 'AWS-CC',
    shortNameAlt: 'Cloud Computing with AWS',
    fullName: 'Cloud Computing with AWS Training',
    fullNameAlt: 'AWS Cloud Computing Certification Training',
    certificateName: 'Cloud Computing with AWS',
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
    "Aspiring Cloud Architects",
    "Developers transitioning to Cloud",
    "System Administrators",
    "IT Professionals",
    "Cloud Enthusiasts"
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

export default CloudComputingWithAWSTraining;
