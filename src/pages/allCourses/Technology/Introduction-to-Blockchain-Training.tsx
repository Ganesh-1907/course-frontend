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

const IntroductionToBlockchainTraining = () => {
  const highlights = [
    { text: "Interactive training sessions conducted by expert Blockchain trainers.", icon: <Users className="w-5 h-5" /> },
    { text: "Comprehensive understanding of cryptocurrency and Bitcoin.", icon: <Monitor className="w-5 h-5" /> },
    { text: "Gain skills to develop Blockchain-based solutions.", icon: <Settings className="w-5 h-5" /> },
    { text: "Access detailed course content covering core Blockchain concepts.", icon: <FileText className="w-5 h-5" /> },
    { text: "Hands-on industry project experience.", icon: <Briefcase className="w-5 h-5" /> },
    { text: "24/7 support for all your queries.", icon: <Headset className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong Blockchain Foundation",
      "description": "Understand Blockchain architecture, protocols, and consensus mechanisms."
    },
    {
      "title": "Cryptocurrency Expertise",
      "description": "Gain knowledge of Bitcoin, Ethereum, and digital asset ecosystems."
    },
    {
      "title": "High Career Growth Potential",
      "description": "Blockchain professionals are in high demand across fintech and enterprise sectors."
    },
    {
      "title": "Hands-on Project Experience",
      "description": "Work on real-world Blockchain use cases and practical implementations."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Enterprise Blockchain Adoption",
      "description": "Enable organizations to design and implement Blockchain-based business solutions."
    },
    {
      "title": "Improved Data Security",
      "description": "Leverage decentralized systems to enhance transparency and data integrity."
    },
    {
      "title": "Operational Efficiency",
      "description": "Use smart contracts and automation to streamline business processes."
    },
    {
      "title": "Innovation Leadership",
      "description": "Empower teams to innovate using emerging decentralized technologies."
    }
  ];

  const careerStats = {
    averageIncome: "$110,000 - $160,000",
    incomeLabel: "Blockchain Developer Salary",
    employmentGrowth: "35%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      "group": [
        "Software Developers",
        "IT Professionals",
        "Fintech Professionals",
        "Entrepreneurs",
        "Students & Fresh Graduates",
        "Business Analysts"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Blockchain architecture and consensus mechanisms.",
    "Work with Bitcoin and Ethereum protocols.",
    "Identify Blockchain use cases across industries.",
    "Understand cryptoeconomics and token systems.",
    "Design enterprise Blockchain solutions."
  ];

  const prerequisites = [
    "Basic understanding of computer networks.",
    "Basic knowledge of databases.",
    "Interest in cryptocurrencies and decentralized systems."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Blockchain Training",
      "description": "Register for the Introduction to Blockchain certification program.",
      "color": "hsl(var(--primary))"
    },
    {
      "title": "Attend Instructor-Led Sessions",
      "description": "Complete structured modules covering Blockchain fundamentals.",
      "color": "#F59E0B"
    },
    {
      "title": "Complete Learning Objectives",
      "description": "Participate in exercises and practical sessions.",
      "color": "#10B981"
    },
    {
      "title": "Receive Certification",
      "description": "Earn your lifetime-valid Blockchain certification upon completion.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    { "title": "Introduction to Blockchain", "topics": ["History of Blockchain", "Distributed Ledger Technology"] },
    { "title": "Blockchain Technology & Design", "topics": ["Architecture", "Decentralization Principles"] },
    { "title": "Bitcoin, Ethereum & Protocols", "topics": ["Bitcoin Basics", "Ethereum Smart Contracts"] },
    { "title": "Cryptoeconomics", "topics": ["Tokens", "Incentive Models"] },
    { "title": "Consensus Algorithms", "topics": ["Proof of Work", "Proof of Stake"] },
    { "title": "Legal Frameworks & Regulations", "topics": ["Compliance", "Global Regulations"] },
    { "title": "Types of Blockchains", "topics": ["Public vs Private", "Permissioned vs Permissionless"] },
    { "title": "Blockchain Use Cases", "topics": ["Finance", "Supply Chain", "Healthcare"] }
  ];

  const learningObjectives = [
    {
      "title": "Understand Blockchain Architecture",
      "description": "Learn how decentralized networks operate and maintain security."
    },
    {
      "title": "Work with Cryptocurrencies",
      "description": "Understand Bitcoin, Ethereum, and token ecosystems."
    },
    {
      "title": "Implement Consensus Mechanisms",
      "description": "Explore Proof of Work and Proof of Stake models."
    },
    {
      "title": "Identify Real-World Applications",
      "description": "Apply Blockchain technology in enterprise scenarios."
    },
    {
      "title": "Design Blockchain Solutions",
      "description": "Create scalable and secure Blockchain-based systems."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Blockchain FAQs",
      "items": [
        {
          "question": "1. What is Introduction to Blockchain certification?",
          "answer": "This certification equips professionals with foundational Blockchain knowledge and cryptocurrency concepts."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "Basic knowledge of databases and networking is recommended but not mandatory."
        },
        {
          "question": "3. What are the benefits?",
          "answer": "High career demand, enterprise adoption opportunities, and strong salary potential."
        },
        {
          "question": "4. When am I eligible for certification?",
          "answer": "Immediately after completing the training."
        },
        {
          "question": "5. Is there an exam?",
          "answer": "No formal exam; evaluation is based on learning objectives."
        },
        {
          "question": "6. How do I obtain certification?",
          "answer": "Complete training and learning objectives."
        },
        {
          "question": "7. Certification validity?",
          "answer": "Lifetime validity."
        },
        {
          "question": "8. Renewal required?",
          "answer": "No renewal required."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; adjustable within 6 months." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payments?", "answer": "Secure online portal available." },
        { "question": "4. Discounts?", "answer": "Promotional offers available." },
        { "question": "5. Installments?", "answer": "Flexible payment options available." },
        { "question": "6. Refund policy?", "answer": "No refunds; rescheduling allowed." },
        { "question": "7. Payment receipt?", "answer": "Invoice sent via email." },
        { "question": "8. Processing fee?", "answer": "No processing fee." },
        { "question": "9. Accepted cards?", "answer": "VISA, MasterCard, Maestro, AMEX, Discover." },
        { "question": "10. Other payment methods?", "answer": "Credit/Debit Cards, Net Banking, Wire Transfer, Stripe, PayPal." }
      ]
    },
    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
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
        { "question": "11. Instructor expertise?", "answer": "Certified Blockchain professionals." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Yes, competitively priced." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers and global recognition." },
        { "question": "15. Lifetime access?", "answer": "Yes." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand in fintech and enterprise sectors." },
        { "question": "18. Course objective?", "answer": "Understand and implement Blockchain solutions." },
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
    { "title": "Expert Trainer", "description": "Learn from experienced Blockchain professionals.", icon: <UserCheck className="w-5 h-5" /> },
    { "title": "Flexible Learning", "description": "Multiple learning formats available.", icon: <Monitor className="w-5 h-5" /> },
    { "title": "Lifetime Access", "description": "Access course materials anytime.", icon: <Star className="w-5 h-5" /> },
    { "title": "Proven Track Record", "description": "Trusted by global professionals.", icon: <TrendingUp className="w-5 h-5" /> },
    { "title": "End-to-End Assistance", "description": "Complete support throughout training.", icon: <Headset className="w-5 h-5" /> },
    { "title": "Interactive Training", "description": "Hands-on real-world Blockchain sessions.", icon: <BookOpen className="w-5 h-5" /> },
    { "title": "Wide Range of Courses", "description": "Access multiple globally recognized certifications.", icon: <Globe className="w-5 h-5" /> }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Introduction To Blockchain Certification Training",
    "breadcrumbName": "Blockchain Certification | Blockchain Training Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Blockchain Fundamentals & Cryptocurrency Concepts",
    "benefits": [
      "Hands-on industry projects",
      "Bitcoin & Ethereum understanding",
      "Consensus mechanisms mastery",
      "Lifetime certification validity"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Blockchain Course Overview",
    "description": [
      "This Introduction to Blockchain course provides a strong foundation in decentralized technologies.",
      "Learn about Bitcoin, Ethereum, consensus algorithms, and real-world Blockchain use cases.",
      "Gain practical insights into enterprise Blockchain adoption and implementation."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Blockchain Architecture",
      "Cryptocurrency Fundamentals",
      "Consensus Algorithms",
      "Smart Contract Basics",
      "Enterprise Blockchain Use Cases"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Blockchain corporate training programs designed to enable enterprise adoption of decentralized technologies and improve digital innovation capabilities."
  };

  const courseMetadata = {
    shortName: 'Blockchain',
    shortNameAlt: 'Blockchain',
    fullName: 'Introduction to Blockchain Training',
    fullNameAlt: 'Blockchain Certification Training Course',
    certificateName: 'Blockchain Certified Professional',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Introduction to Blockchain Training, you can explore high-demand roles such as Blockchain Developer, Smart Contract Engineer, and Blockchain Consultant across fintech and global sectors.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Introduction to Blockchain Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis',
      certificateType: 'Course Completion Certificate',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Lead Instructor',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Software Developers",
    "IT Professionals",
    "Fintech Professionals",
    "Entrepreneurs",
    "Students & Fresh Graduates",
    "Business Analysts"
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
                {overviewContent.skillsTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium">
                {overviewContent.skills.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
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
          categoryName="technology"
          categoryLink="/category/technology"
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

export default IntroductionToBlockchainTraining;
