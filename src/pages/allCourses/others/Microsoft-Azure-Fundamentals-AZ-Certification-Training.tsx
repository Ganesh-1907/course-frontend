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

const MicrosoftAzureFundamentalsAZCertificationTraining = () => {
  const highlights = [
    { "text": "8 Hours Live Instructor-Led Online Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Beginner-Friendly Cloud Computing Course", icon: <Laptop className="w-5 h-5" /> },
    { "text": "Learn Core Azure Services and Solutions", icon: <Globe className="w-5 h-5" /> },
    { "text": "Understand Pricing, Cost, and Governance in Azure", icon: <Settings className="w-5 h-5" /> },
    { "text": "Hands-On Practice with Azure Portal and Tools", icon: <FileText className="w-5 h-5" /> },
    { "text": "Flexible Schedules for Working Professionals", icon: <Settings className="w-5 h-5" /> },
    { "text": "Step-by-Step AZ-900 Exam Preparation Support", icon: <Award className="w-5 h-5" /> },
    { "text": "Post-Class 1-on-1 Doubt Clearing Sessions", icon: <Users className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Recognized Certification",
      "description": "Earn a globally recognized Microsoft Azure Fundamentals credential."
    },
    {
      "title": "Stronger Cloud Foundation",
      "description": "Strengthen your cloud computing knowledge and technical skills."
    },
    {
      "title": "Career Growth",
      "description": "Improve job opportunities with Azure expertise."
    },
    {
      "title": "Pathway to Advanced Certifications",
      "description": "Build a solid base for associate and expert-level Azure certifications."
    },
    {
      "title": "Professional Confidence",
      "description": "Confidently participate in cloud solution discussions."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Faster Cloud Adoption",
      "description": "Accelerate digital transformation with Azure-trained teams."
    },
    {
      "title": "Improved Project Efficiency",
      "description": "Leverage Azure services effectively in business projects."
    },
    {
      "title": "Stronger Governance & Security",
      "description": "Apply Azure governance best practices for secure environments."
    },
    {
      "title": "Cost Optimization",
      "description": "Utilize Azure cost management tools to control spending."
    },
    {
      "title": "Enhanced Business Agility",
      "description": "Scale operations efficiently using Azure cloud services."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      "group": [
        "Students and Fresh Graduates",
        "IT Support Professionals",
        "Business Decision Makers",
        "Non-Technical Professionals exploring cloud",
        "Anyone starting a cloud computing career"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand core cloud computing concepts.",
    "Explain Azure architecture and infrastructure.",
    "Describe Azure security, governance, and compliance.",
    "Manage Azure pricing and cost optimization.",
    "Prepare confidently for the AZ-900 certification exam."
  ];

  const prerequisites = [
    "Basic IT awareness is helpful but not mandatory.",
    "No prior coding knowledge required.",
    "Suitable for both technical and non-technical professionals."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Join the Azure Fundamentals AZ-900 certification training program.",
      "color": "bg-primary"
    },
    {
      "title": "Complete Learning Modules",
      "description": "Learn cloud concepts, Azure services, governance, and pricing.",
      "color": "bg-indigo-500"
    },
    {
      "title": "Practice & Prepare",
      "description": "Take mock exams and complete hands-on practice sessions.",
      "color": "bg-purple-500"
    },
    {
      "title": "Schedule & Pass Exam",
      "description": "Register for AZ-900, score 700+/1000, and earn certification.",
      "color": "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Cloud Concepts",
      "topics": [
        "Cloud computing fundamentals",
        "Shared responsibility model",
        "Cloud models (Public, Private, Hybrid)",
        "Consumption-based pricing"
      ]
    },
    {
      "title": "Core Azure Services",
      "topics": [
        "Azure Compute",
        "Azure Networking",
        "Azure Storage",
        "Azure Databases"
      ]
    },
    {
      "title": "Security & Identity",
      "topics": [
        "Microsoft Entra ID",
        "RBAC",
        "Zero Trust model",
        "Microsoft Defender for Cloud"
      ]
    },
    {
      "title": "Cost Management",
      "topics": [
        "Pricing calculator",
        "TCO calculator",
        "Cost management tools",
        "Resource tagging"
      ]
    },
    {
      "title": "Governance & Compliance",
      "topics": [
        "Azure Policy",
        "Resource locks",
        "Service Trust portal",
        "SLAs"
      ]
    },
    {
      "title": "Monitoring & Management",
      "topics": [
        "Azure Monitor",
        "Azure Advisor",
        "Azure Service Health"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Cloud Basics",
      "description": "Learn IaaS, PaaS, SaaS, and cloud deployment models."
    },
    {
      "title": "Explore Azure Architecture",
      "description": "Understand Azure regions, datacenters, and availability zones."
    },
    {
      "title": "Manage Security & Governance",
      "description": "Apply Azure identity, security, and compliance tools."
    },
    {
      "title": "Optimize Costs",
      "description": "Use pricing calculators and cost optimization techniques."
    },
    {
      "title": "Exam Readiness",
      "description": "Build confidence to pass the AZ-900 certification exam."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AZ-900 Certification FAQs",
      "items": [
        { "question": "1. Is coding required?", "answer": "No, coding is not required." },
        { "question": "2. Job opportunities?", "answer": "Cloud Support Associate, Junior Azure Consultant, IT Administrator." },
        { "question": "3. Preparation method?", "answer": "Live classes, labs, mock tests, and Microsoft Learn review." },
        { "question": "4. Delivery mode?", "answer": "Live instructor-led online sessions." },
        { "question": "5. Topics covered?", "answer": "Cloud concepts, Azure services, pricing, governance, security." },
        { "question": "6. Exam weightage?", "answer": "Cloud Concepts 15–20%, Core Services 30–35%, Security 25–30%, Pricing 25–30%." },
        { "question": "7. Course duration?", "answer": "8 hours live training." },
        { "question": "8. Certification validity?", "answer": "Lifetime validity." },
        { "question": "9. Renewal required?", "answer": "No renewal required." },
        { "question": "10. Retake policy?", "answer": "Retake allowed after 24 hours; 14 days for further attempts." },
        { "question": "11. Who should take it?", "answer": "Beginners, students, non-technical professionals." },
        { "question": "12. Career growth?", "answer": "Provides foundation for advanced Azure certifications." },
        { "question": "13. Salary range?", "answer": "India ₹4–15 LPA; US $50K–$90K depending on role." },
        { "question": "14. Difficulty level?", "answer": "Beginner-friendly and easy to pass with preparation." },
        { "question": "15. Exam cost?", "answer": "Approximately $99 USD." }
      ]
    },

    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; adjustable within 6 months." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payment?", "answer": "Secure portal available." },
        { "question": "4. Discounts?", "answer": "Promotional discounts available." },
        { "question": "5. Installments?", "answer": "Flexible payment options available." },
        { "question": "6. Refund policy?", "answer": "No refunds; rescheduling allowed." },
        { "question": "7. Payment receipt?", "answer": "Invoice sent via email." },
        { "question": "8. Processing fee?", "answer": "No processing fee." },
        { "question": "9. Accepted cards?", "answer": "VISA, MasterCard, Maestro, AMEX, Discover." },
        { "question": "10. Payment methods?", "answer": "Cards, Net Banking, Wire Transfer, PayPal." }
      ]
    },

    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        { "question": "1. Missed class?", "answer": "Rescheduling available." },
        { "question": "2. Contact support?", "answer": "Email or phone support available." },
        { "question": "3. Language options?", "answer": "English preferred; custom options available." },
        { "question": "4. Personalized training?", "answer": "Flexible schedules available." },
        { "question": "5. Upcoming schedules?", "answer": "Check website schedule page." },
        { "question": "6. Change date?", "answer": "Inform 3–4 days prior." },
        { "question": "7. Certificate provided?", "answer": "Yes." },
        { "question": "8. Enrollment process?", "answer": "Register and complete payment online." },
        { "question": "9. Training modes?", "answer": "Online, Live Virtual, Corporate." },
        { "question": "10. Corporate training?", "answer": "Customized programs available." },
        { "question": "11. Instructor expertise?", "answer": "Certified Azure professionals." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Competitively priced courses." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers with global recognition." },
        { "question": "15. Lifetime access?", "answer": "Yes, access to materials." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand in cloud computing." },
        { "question": "18. Course objective?", "answer": "Build strong Azure fundamentals." },
        { "question": "19. Discount amount?", "answer": "Depends on current offers." }
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
    { "title": "Global Recognition", "description": "Trusted certification provider worldwide." },
    { "title": "Expert Trainer", "description": "Learn from certified Azure professionals." },
    { "title": "Flexible Learning", "description": "Weekend & weekday batches available." },
    { "title": "Lifetime Access", "description": "Access materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals globally." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on practical learning sessions." },
    { "title": "Wide Range of Courses", "description": "Access multiple Microsoft certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AZ-900',
      courseName: 'Microsoft Azure Fundamentals Certification Training',
      dateRange: 'May 05 - May 06, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Azure Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 15,000',
      discountedPrice: 'INR 10,000',
      discountPercentage: '33',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Validity for AZ-900 Credential',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Microsoft Azure Fundamentals AZ-900 Certification Training",
    "breadcrumbName": "Microsoft Azure Fundamentals AZ-900 Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Azure Cloud Fundamentals",
    "benefits": [
      "8-Hour Live Training",
      "Hands-On Azure Practice",
      "Beginner-Friendly",
      "Microsoft Certification Preparation"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AZ-900 Certification Overview",
    "description": [
      "This course prepares you for the Microsoft Azure Fundamentals AZ-900 exam.",
      "Learn cloud basics, Azure services, governance, pricing, and security.",
      "Designed for beginners entering the cloud computing field."
    ],
    "whatIsTitle": "What is AZ-900 Certification?",
    "whatIsDescription": [
      "AZ-900 validates your understanding of Azure cloud fundamentals and services."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Live interactive sessions",
      "Hands-on labs",
      "Practice tests",
      "Exam guidance"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Azure Compute",
      "Networking",
      "Storage",
      "Identity & Security",
      "Governance & Pricing"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Live online instructor-led training suitable for working professionals."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized corporate Azure training programs designed to accelerate cloud adoption and improve organizational efficiency."
  };

  const courseMetadata = {
    shortName: 'AZ-900',
    shortNameAlt: 'Azure Fundamentals',
    fullName: 'Microsoft Azure Fundamentals AZ-900 Certification Training',
    fullNameAlt: 'Microsoft Azure Fundamentals Training',
    certificateName: 'Azure Fundamentals',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your PCI DSS Certification and Training, a wide selection of career options will open up, particularly in the cybersecurity and compliance domains.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Microsoft Azure Fundamentals Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Microsoft Aligned',
      certificateType: 'Certificate of Cloud Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Azure Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Students and Fresh Graduates",
    "IT Support Professionals",
    "Business Decision Makers",
    "Non-Technical Professionals exploring cloud",
    "Anyone starting a cloud computing career"
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
          categoryName="others"
          categoryLink="/category/others"
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


export default MicrosoftAzureFundamentalsAZCertificationTraining;
