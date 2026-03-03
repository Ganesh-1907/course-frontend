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
  Clock,
  Shield,
  Activity,
  Database,
  Cloud,
  Layout
} from "lucide-react";

const MicrosoftCertifiedAzureSolutionsArchitectExpertCertification = () => {
  const highlights = [
    { "text": "16 Hours Live Instructor-Led Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Hands-on Azure Lab Access", icon: <Laptop className="w-5 h-5" /> },
    { "text": "Real-World Scenario-Based Exercises", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Official Microsoft-Aligned Content", icon: <FileText className="w-5 h-5" /> },
    { "text": "Flexible Learning Schedules", icon: <Clock className="w-5 h-5" /> },
    { "text": "AZ-305 Exam Preparation Guidance", icon: <Award className="w-5 h-5" /> },
    { "text": "Personalized Doubt-Clearing Sessions", icon: <Headset className="w-5 h-5" /> },
    { "text": "Coverage of Four Key Exam Domains", icon: <Settings className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Career Advancement",
      "description": "Qualify for senior-level Azure Solutions Architect roles."
    },
    {
      "title": "Microsoft Credential",
      "description": "Earn a globally recognized Microsoft Azure Architect certification."
    },
    {
      "title": "Professional Credibility",
      "description": "Build trust with employers, clients, and industry peers."
    },
    {
      "title": "Higher Salary Potential",
      "description": "Increase earning potential with advanced Azure architecture skills."
    },
    {
      "title": "Hands-On Experience",
      "description": "Practice real-world Azure design scenarios through guided labs."
    },
    {
      "title": "Expanded Career Scope",
      "description": "Work across industries requiring cloud architecture expertise."
    },
    {
      "title": "Comprehensive Architecture Knowledge",
      "description": "Gain expertise in networking, storage, governance, and business continuity."
    },
    {
      "title": "Community Access",
      "description": "Connect with Microsoft-certified professionals and architect communities."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Business Alignment",
      "description": "Align business strategies with Azure cloud architecture solutions."
    },
    {
      "title": "Stronger Security & Governance",
      "description": "Enhance compliance, governance, and security posture."
    },
    {
      "title": "Cost Optimization",
      "description": "Reduce costs through efficient Azure resource planning."
    },
    {
      "title": "High Availability Solutions",
      "description": "Implement resilient and disaster recovery-ready architectures."
    },
    {
      "title": "Accelerated Digital Transformation",
      "description": "Speed up cloud adoption and migration initiatives."
    },
    {
      "title": "Certified Expertise",
      "description": "Improve solution delivery with certified Azure architects."
    },
    {
      "title": "Scalable Infrastructure",
      "description": "Build secure and scalable cloud infrastructure for business growth."
    },
    {
      "title": "Risk Reduction",
      "description": "Minimize architectural risks with expert Azure solution designs."
    }
  ];

  const careerStats = {
    averageIncome: '$150,000',
    incomeLabel: 'Average annual salary',
    employmentGrowth: '28%',
    growthLabel: 'Demand for Azure Architects',
  };

  const attendees = [
    {
      "group": [
        "Azure Administrators",
        "Cloud Engineers",
        "Solution Architects",
        "DevOps Engineers",
        "IT Professionals with Azure Experience"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Design secure and scalable Azure architectures.",
    "Build cloud-native solutions using Azure services.",
    "Apply governance, identity, and compliance best practices.",
    "Implement high availability and disaster recovery solutions.",
    "Prepare effectively for the AZ-305 certification exam."
  ];

  const prerequisites = [
    "Advanced knowledge of IT operations including networking, virtualization, identity, governance, and security.",
    "Hands-on experience in Azure administration, development, or DevOps.",
    "Understanding of cloud governance and disaster recovery.",
    "Azure Administrator Associate certification is recommended before attempting AZ-305."
  ];

  const certificationSteps = [
    {
      "title": "Check Eligibility",
      "description": "Ensure you meet Azure experience and certification prerequisites.",
      "color": "bg-primary"
    },
    {
      "title": "Enroll in Training",
      "description": "Join Simpliaxis AZ-305 instructor-led training sessions.",
      "color": "bg-indigo-500"
    },
    {
      "title": "Practice Hands-On",
      "description": "Complete labs and real Azure architecture scenarios.",
      "color": "bg-purple-500"
    },
    {
      "title": "Schedule and Pass Exam",
      "description": "Take the AZ-305 exam and earn Azure Solutions Architect Expert certification.",
      "color": "bg-green-500"
    }
  ];

  const curriculumModules = [
    { "title": "Module 1: Course Introduction", "topics": ["Course Overview", "Exam Objectives"] },
    { "title": "Module 2: Governance Design", "topics": ["Azure Governance", "Azure Policy", "Azure Blueprints"] },
    { "title": "Module 3: Authentication Solutions", "topics": ["Azure AD", "Conditional Access", "Managed Identity", "Key Vault"] },
    { "title": "Module 4: Authorization", "topics": ["RBAC", "Privileged Identity Management"] },
    { "title": "Module 5: Logging and Monitoring", "topics": ["Azure Monitor", "Alerts", "Log Analytics"] },
    { "title": "Module 6: High Availability", "topics": ["Backup Strategies", "Regional Recovery", "Archiving"] },
    { "title": "Module 7: Backup and Recovery", "topics": ["Azure Site Recovery", "Snapshots"] },
    { "title": "Module 8: Non-Relational Data", "topics": ["Azure Storage", "Encryption"] },
    { "title": "Module 9: Relational Data", "topics": ["Azure SQL", "Cosmos DB"] },
    { "title": "Module 10: Data Integration", "topics": ["Azure Synapse", "Stream Analytics"] },
    { "title": "Module 11: Compute Solutions", "topics": ["App Service", "Containers", "Automation"] },
    { "title": "Module 12: Application Architecture", "topics": ["Event-Driven Solutions", "AKS", "Messaging"] },
    { "title": "Module 13: Network Solutions", "topics": ["VNETs", "Load Balancing", "Hybrid Connectivity"] },
    { "title": "Module 14: Migrations", "topics": ["Azure Migration Tools", "Database Migration"] },
    { "title": "Module 15: Cost Optimization", "topics": ["Cost Management", "Optimization Strategies"] }
  ];

  const learningObjectives = [
    { "title": "Design Identity Solutions", "description": "Plan secure identity, governance, and RBAC in Azure." },
    { "title": "Architect Infrastructure", "description": "Design compute, networking, and virtualization architectures." },
    { "title": "Implement Monitoring", "description": "Use Azure Monitor and Log Analytics effectively." },
    { "title": "Design Networking", "description": "Create scalable and secure network architectures." },
    { "title": "Plan Migrations", "description": "Design workload migration strategies to Azure." },
    { "title": "Apply High Availability", "description": "Implement resilient and disaster recovery architectures." },
    { "title": "Optimize Costs", "description": "Design cost-effective Azure architectures." },
    { "title": "Prepare for AZ-305 Exam", "description": "Gain confidence through labs and exam-style practice." }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AZ-305 Certification FAQs",
      "items": [
        { "question": "1. What is AZ-305 certification?", "answer": "AZ-305 validates your ability to design Azure cloud and hybrid solutions." },
        { "question": "2. Who should take AZ-305?", "answer": "Solution architects and IT professionals with Azure experience." },
        { "question": "3. What is the exam cost?", "answer": "Approximately $165 USD (varies by country)." },
        { "question": "4. What is the pass mark?", "answer": "700 out of 1000." },
        { "question": "5. Is AZ-305 difficult?", "answer": "It is scenario-based and requires hands-on Azure experience." },
        { "question": "6. How long is the exam?", "answer": "Around 120 minutes." },
        { "question": "7. Is the exam proctored?", "answer": "Yes, online or at authorized centers." },
        { "question": "8. How long is certification valid?", "answer": "Valid for one year with renewal assessment." }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Are payments refundable?", "answer": "No refunds, but rescheduling is allowed." },
        { "question": "2. Are installment options available?", "answer": "Yes, flexible payment options available." },
        { "question": "3. Accepted payment methods?", "answer": "Cards, Net Banking, Wire Transfer, PayPal." },
        { "question": "4. Will I receive an invoice?", "answer": "Yes, via email confirmation." }
      ]
    },
    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        { "question": "1. Do I receive a certificate?", "answer": "Yes, after successful training completion." },
        { "question": "2. Is online training available?", "answer": "Yes, live instructor-led online sessions." },
        { "question": "3. Do you offer corporate training?", "answer": "Yes, customized corporate solutions available." },
        { "question": "4. Do you provide career support?", "answer": "Yes, resume and interview guidance provided." }
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
    { "title": "Global Recognition", "description": "Microsoft-certified training aligned with industry standards." },
    { "title": "Expert Trainers", "description": "Learn from certified Azure architects." },
    { "title": "Flexible Learning", "description": "Weekday and weekend batches available." },
    { "title": "Lifetime Access", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted training provider globally." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world case studies." },
    { "title": "Wide Course Portfolio", "description": "Access multiple Microsoft certification programs." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AZ-305',
      courseName: 'Microsoft Certified Azure Solutions Architect Expert Training',
      dateRange: 'Oct 12 - Oct 16, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Azure Architect Guru',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 42,000',
      discountedPrice: 'INR 35,000',
      discountPercentage: '16',
    },
  ];

  const certificateBenefits = [
    'Microsoft Certified Badge',
    'Industry Recognition',
    'Senior Architecture Roles',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Microsoft Certified Azure Solutions Architect Expert (AZ-305) Certification Training",
    "breadcrumbName": "Azure Solution Architect (AZ-305) Certification Training Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Design Secure, Scalable, and Reliable Azure Solutions",
    "benefits": [
      "16 Hours Live Training",
      "Real Azure Labs",
      "Expert-Led Sessions",
      "Exam Preparation Support"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AZ-305 Certification Course Overview",
    "description": [
      "This course prepares professionals to design secure and scalable Azure solutions.",
      "Learn governance, networking, identity, storage, migration, and cost optimization strategies.",
      "Gain practical experience to confidently pass the AZ-305 exam."
    ],
    "whatIsTitle": "What is Azure Solutions Architect Certification?",
    "whatIsDescription": [
      "AZ-305 validates expertise in designing Microsoft Azure cloud architectures."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "Live sessions",
      "Hands-on labs",
      "Exam guidance",
      "Practice tests"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Azure Governance",
      "Identity & Security",
      "Networking",
      "Migration",
      "Cost Optimization"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Live instructor-led online training for working professionals."
    ]
  };

  const corporateData = {
    "courseName": "Why SimpliAxis Is the First Choice for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Azure architecture training programs designed to strengthen enterprise cloud strategies."
  };

  const courseMetadata = {
    shortName: 'AZ-305',
    shortNameAlt: 'Azure Architect',
    fullName: 'Microsoft Certified Azure Solutions Architect Expert Certification',
    fullNameAlt: 'Microsoft Azure Solutions Architect Training',
    certificateName: 'Azure Solutions Architect Expert',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Microsoft Certified Azure Solutions Architect Expert Certification, a wide selection of career options will open up, particularly in the cloud architecture and enterprise solution domains.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Microsoft Certified Azure Solutions Architect Expert Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Microsoft Aligned',
      certificateType: 'Certificate of Architecture Excellence',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Solutions Architect',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Azure Administrators",
    "Cloud Engineers",
    "Solution Architects",
    "DevOps Engineers",
    "IT Professionals with Azure Experience"
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


export default MicrosoftCertifiedAzureSolutionsArchitectExpertCertification;
