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

const PCIDSSComplianceTraining = () => {
  const highlights = [
    { text: "The two-day training program offers a competitive edge over your peers.", icon: <Star className="w-5 h-5" /> },
    { text: "Course content designed by experienced industry professionals.", icon: <FileText className="w-5 h-5" /> },
    { text: "Comprehensive, industry-grade training recognized globally.", icon: <Globe className="w-5 h-5" /> },
    { text: "Learn from experts with extensive hands-on industry experience.", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Access online resources for self-paced, in-depth learning.", icon: <BookOpen className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Industry-Recognized Expertise",
      description: "Gain strong knowledge of PCI DSS standards and compliance practices."
    },
    {
      title: "Enhanced Career Opportunities",
      description: "Increase demand for your profile in cybersecurity and compliance roles."
    },
    {
      title: "Practical Compliance Knowledge",
      description: "Learn how to implement PCI DSS requirements effectively."
    },
    {
      title: "Risk Mitigation Skills",
      description: "Understand how to prevent data breaches and protect cardholder data."
    }
  ];

  const corporateBenefits = [
    {
      title: "Regulatory Compliance",
      description: "Ensure organizational alignment with PCI DSS standards."
    },
    {
      title: "Reduced Security Risks",
      description: "Minimize data breaches and financial penalties."
    },
    {
      title: "Improved Security Posture",
      description: "Strengthen enterprise-level payment security systems."
    },
    {
      title: "Trained Compliance Teams",
      description: "Develop internal expertise for audit readiness and compliance validation."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      group: [
        "Security Professionals",
        "Compliance Officers",
        "IT Managers",
        "Risk Analysts",
        "Network Engineers",
        "Cybersecurity Consultants"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand PCI DSS compliance requirements.",
    "Implement secure payment systems.",
    "Conduct PCI risk assessments.",
    "Apply encryption and tokenization techniques.",
    "Manage logging, monitoring, and SIEM practices."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic knowledge of IT security and networks is helpful."
  ];

  const certificationSteps = [
    {
      title: "Enroll in Training",
      description: "Register for the PCI DSS Certification and Training program.",
      color: "bg-primary"
    },
    {
      title: "Complete 2-Day Training",
      description: "Attend both Day 1 and Day 2 instructor-led sessions.",
      color: "bg-indigo-500"
    },
    {
      title: "Understand Compliance Requirements",
      description: "Learn PCI scoping, risk assessment, and security controls.",
      color: "bg-purple-500"
    },
    {
      title: "Receive Certification",
      description: "Obtain your PCI DSS certification after completing the course.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      title: "PCI DSS - Day 1",
      topics: [
        "Introduction to Payment Ecosystem",
        "Compliance Requirements and Validation Process",
        "PCI-DSS Process Scoping",
        "Techniques for Descoping",
        "PCI Risk Assessment",
        "Point-to-Point Encryption",
        "Tokenization",
        "Network Segmentation"
      ]
    },
    {
      title: "PCI DSS - Day 2",
      topics: [
        "Protect Cardholder Data",
        "Develop and Maintain Secure Systems",
        "Access Control Practices",
        "SIEM and Log Management",
        "Monitor and Test Systems",
        "Maintain Information Security Policy",
        "Relation of PCI & PA DSS",
        "Mobile Payment Security Challenges",
        "Impact of Virtualization and Cloud Security"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand PCI DSS Framework",
      description: "Gain complete understanding of compliance standards and validation."
    },
    {
      title: "Implement Security Controls",
      description: "Learn encryption, tokenization, and segmentation techniques."
    },
    {
      title: "Perform Risk Assessment",
      description: "Identify vulnerabilities and mitigate payment security risks."
    },
    {
      title: "Ensure Audit Readiness",
      description: "Prepare systems for compliance validation and audits."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "PCI DSS FAQs",
      items: [
        {
          question: "1. Who is a certified PCI DSS professional?",
          answer: "A certified PCI DSS professional is committed to data security and implements PCI compliance measures effectively."
        },
        {
          question: "2. What are the prerequisites for the PCI DSS course?",
          answer: "There are no mandatory prerequisites."
        },
        {
          question: "3. What are the benefits of PCI DSS certification?",
          answer: "It helps safeguard businesses from data breaches, ensures compliance, and enhances professional credibility."
        },
        {
          question: "4. Is there an exam after training?",
          answer: "There is no separate formal exam after completing the training."
        },
        {
          question: "5. How do I attain PCI DSS certification?",
          answer: "Enroll and complete the two-day PCI DSS training program."
        },
        {
          question: "6. How long is the certification valid?",
          answer: "The certificate is valid for one year and can be renewed through training."
        }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; adjustable within 6 months." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payment?", "answer": "Secure online payment portal available." },
        { "question": "4. Discounts?", "answer": "Promotional discounts available." },
        { "question": "5. Installments?", "answer": "Flexible payment options available." },
        { "question": "6. Refund policy?", "answer": "No refunds; rescheduling allowed." },
        { "question": "7. Payment receipt?", "answer": "Invoice sent via email." },
        { "question": "8. Processing fee?", "answer": "No processing fee." },
        { "question": "9. Accepted cards?", "answer": "VISA, MasterCard, Maestro, AMEX, Discover." },
        { "question": "10. Other payment methods?", "answer": "Credit/Debit Cards, Net Banking, Wire Transfer, Stripe, PayPal." }
      ]
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: [
        { "question": "1. Missed class?", "answer": "Rescheduling available." },
        { "question": "2. Contact support?", "answer": "Email or phone support available." },
        { "question": "3. Language options?", "answer": "English preferred; corporate custom options available." },
        { "question": "4. Personalized training?", "answer": "Flexible schedules available." },
        { "question": "5. Upcoming schedules?", "answer": "Check website schedule section." },
        { "question": "6. Change date?", "answer": "Inform 3-4 days prior." },
        { "question": "7. Certificate provided?", "answer": "Yes." },
        { "question": "8. Enrollment process?", "answer": "Register and complete payment online." },
        { "question": "9. Training modes?", "answer": "Online, Live Virtual, Corporate." },
        { "question": "10. Corporate training?", "answer": "Customized programs available." },
        { "question": "11. Instructor expertise?", "answer": "Certified PCI DSS professionals." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Yes, competitively priced." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers and global recognition." },
        { "question": "15. Lifetime access?", "answer": "Access to learning resources provided." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand in cybersecurity and compliance domains." },
        { "question": "18. Course objective?", "answer": "Build expertise in PCI DSS compliance implementation." },
        { "question": "19. Discount amount?", "answer": "Depends on current promotions." }
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
    { "title": "Global Recognition", "description": "Globally trusted certification provider." },
    { "title": "Expert Trainer", "description": "Learn from experienced cybersecurity professionals." },
    { "title": "Flexible Learning", "description": "Multiple learning formats available." },
    { "title": "Lifetime Access", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by global enterprises." },
    { "title": "End-to-End Assistance", "description": "Complete support throughout training." },
    { "title": "Interactive Training", "description": "Real-world compliance case studies and discussions." },
    { "title": "Wide Range of Courses", "description": "Access multiple globally recognized certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'PCI-DSS',
      courseName: 'PCI DSS Certification and Training',
      dateRange: 'Apr 12 - Apr 13, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'PCI Compliance Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 35,000',
      discountedPrice: 'INR 28,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year with Renewal Options',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "PCI DSS Certification and Training",
    "breadcrumbName": "PCI DSS Training | PCI Data Security Standards Certification",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master PCI Compliance and Payment Security Standards",
    "benefits": [
      "2-Day Intensive Training",
      "Industry-Recognized Certification",
      "Practical Risk Assessment Skills",
      "Compliance & Security Expertise"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "PCI DSS Training Overview",
    "description": [
      "This two-day PCI DSS Certification and Training program provides in-depth knowledge of payment security standards.",
      "Learn compliance requirements, encryption techniques, risk assessment, and secure system implementation.",
      "Designed for professionals responsible for protecting cardholder data and ensuring compliance."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "PCI Compliance",
      "Risk Assessment",
      "Encryption & Tokenization",
      "Security Monitoring",
      "Payment Security Management"
    ],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We offer customized corporate PCI DSS training programs to ensure enterprise-level compliance, risk reduction, and improved payment security frameworks."
  };

  const courseMetadata = {
    shortName: 'PCI-DSS',
    shortNameAlt: 'PCI DSS',
    fullName: 'PCI DSS Certification and Training',
    fullNameAlt: 'PCI Data Security Standards Training',
    certificateName: 'PCI DSS Compliance',
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
        'What are the Prerequisites Required for PCI DSS Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'PCI Security Standards Council Aligned',
      certificateType: 'Certificate of Compliance Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Security Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Security Professionals",
    "Compliance Officers",
    "IT Managers",
    "Risk Analysts",
    "Network Engineers",
    "Cybersecurity Consultants"
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


export default PCIDSSComplianceTraining;
