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

const MicrosoftPowerBITraining = () => {
  const highlights = [
    { "text": "Instructor-led training sessions", icon: <UserCheck className="w-5 h-5" /> },
    { "text": "24 Hours Live Online Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Access to LMS learning materials", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "Industry-recognized curriculum", icon: <Globe className="w-5 h-5" /> },
    { "text": "Comprehensive data management and analytics learning", icon: <FileText className="w-5 h-5" /> },
    { "text": "Exam preparation support", icon: <Award className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Career Advancement",
      "description": "Gain a competitive advantage for promotions and career growth."
    },
    {
      "title": "Higher Salary Potential",
      "description": "Certified professionals often earn more than non-certified peers."
    },
    {
      "title": "Skill Enhancement",
      "description": "Strengthen your Power BI data modeling, visualization, and analytics expertise."
    },
    {
      "title": "High Market Demand",
      "description": "Power BI professionals are highly sought after across industries."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Scalable Data Solutions",
      "description": "Power BI integrates easily with multiple enterprise data sources."
    },
    {
      "title": "AI-Driven Insights",
      "description": "Enable smarter decisions using built-in AI capabilities."
    },
    {
      "title": "Actionable Business Intelligence",
      "description": "Convert raw data into meaningful business insights."
    },
    {
      "title": "Improved Decision-Making",
      "description": "Empower teams with powerful dashboards and reports."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      "group": [
        "Data Analysts",
        "Business Intelligence Professionals",
        "Business Analysts",
        "IT Professionals",
        "Project Managers",
        "Anyone interested in data visualization"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Structure and prepare data for effective analysis.",
    "Create dashboards and interactive reports.",
    "Select appropriate visuals for business needs.",
    "Design compelling visual analytics solutions.",
    "Clean, transform, and load data from multiple sources."
  ];

  const prerequisites = [
    "Basic knowledge of Data Analytics",
    "Proficiency in Microsoft Excel",
    "Basic understanding of databases"
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Register for Microsoft Power BI certification training.",
      "color": "bg-blue-500"
    },
    {
      "title": "Complete Instructor Sessions",
      "description": "Attend 24-hour live training and complete LMS modules.",
      "color": "bg-indigo-500"
    },
    {
      "title": "Practice with Hands-on Labs",
      "description": "Work on real-time projects and case studies.",
      "color": "bg-purple-500"
    },
    {
      "title": "Take PL-300 Exam",
      "description": "Schedule and pass the Microsoft Power BI certification exam.",
      "color": "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Power BI Service",
      "topics": [
        "Power BI tools overview",
        "Dashboards & reports",
        "Data refresh",
        "Interacting with dashboards"
      ]
    },
    {
      "title": "Power BI Desktop - Data Transformation",
      "topics": [
        "Getting data",
        "Direct Query vs Import",
        "Data structure management"
      ]
    },
    {
      "title": "Modeling with Power BI",
      "topics": [
        "Relationships & cardinality",
        "Calculated columns",
        "Measures & DAX basics"
      ]
    },
    {
      "title": "Power BI Visualizations",
      "topics": [
        "Charts & maps",
        "Slicers & filters",
        "Drill-down reports",
        "KPIs & dashboards"
      ]
    },
    {
      "title": "Publishing & Sharing",
      "topics": [
        "Sharing dashboards",
        "Workspaces",
        "Row-Level Security",
        "Export options"
      ]
    },
    {
      "title": "Data Refresh & Integration",
      "topics": [
        "Gateways",
        "Dataset refresh",
        "Excel & Power BI integration"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Data Modeling",
      "description": "Build efficient data models using Power BI."
    },
    {
      "title": "Visualization Mastery",
      "description": "Design interactive dashboards and business reports."
    },
    {
      "title": "Data Transformation",
      "description": "Clean and prepare data using Power Query."
    },
    {
      "title": "Business Insights",
      "description": "Deliver actionable insights for strategic decisions."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Power BI Certification FAQs",
      "items": [
        { "question": "1. What is Power BI Certification?", "answer": "A globally recognized Microsoft certification validating Power BI data analysis skills." },
        { "question": "2. Who should attend?", "answer": "Data analysts, BI professionals, managers, IT professionals, and business analysts." },
        { "question": "3. Prerequisites?", "answer": "Basic understanding of Excel, analytics, and databases is helpful." },
        { "question": "4. Exam structure?", "answer": "PL-300 exam includes 40–60 questions, 120–140 minutes, passing score 700/1000." },
        { "question": "5. Attempt policy?", "answer": "5 attempts within 12 months with waiting periods." },
        { "question": "6. Validity?", "answer": "Valid for one year with renewal assessment." },
        { "question": "7. Job roles?", "answer": "Power BI Developer, Data Analyst, BI Analyst, Reporting Analyst." },
        { "question": "8. Hiring companies?", "answer": "Accenture, IBM, Concentrix, and other global firms." },
        { "question": "9. Job benefits?", "answer": "Higher salaries and better career growth." },
        { "question": "10. Does Simpliaxis offer training?", "answer": "Yes, with expert instructors and hands-on projects." }
      ]
    },

    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; adjustable within 6 months." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payment?", "answer": "Secure portal available." },
        { "question": "4. Discounts?", "answer": "Promotions available." },
        { "question": "5. Installments?", "answer": "Flexible options available." },
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
        { "question": "3. Language options?", "answer": "English preferred; custom options available for corporate." },
        { "question": "4. Personalized training?", "answer": "Flexible schedules available." },
        { "question": "5. Upcoming schedules?", "answer": "Check website schedule page." },
        { "question": "6. Change date?", "answer": "Inform 3–4 days prior." },
        { "question": "7. Certificate provided?", "answer": "Yes." },
        { "question": "8. Enrollment process?", "answer": "Register and complete payment online." },
        { "question": "9. Training modes?", "answer": "Online, Live Virtual, Corporate." },
        { "question": "10. Corporate training?", "answer": "Customized programs available." },
        { "question": "11. Instructor expertise?", "answer": "Certified Power BI experts." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Competitively priced courses." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers with global recognition." },
        { "question": "15. Lifetime access?", "answer": "Yes, access to LMS resources." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand in analytics and BI domains." },
        { "question": "18. Course objective?", "answer": "Develop strong data visualization expertise." },
        { "question": "19. Discount amount?", "answer": "Depends on current offers." }
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

  const courseWhyViovn = [
    { "title": "Global Recognition", "description": "Trusted certification provider worldwide." },
    { "title": "Expert Trainer", "description": "Learn from certified Power BI professionals." },
    { "title": "Flexible Learning", "description": "Weekend & weekday batches available." },
    { "title": "Lifetime Access", "description": "Access materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals globally." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on real-world exercises." },
    { "title": "Wide Range of Courses", "description": "Access multiple Microsoft certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'PL-300',
      courseName: 'Microsoft Power BI Certification Training',
      dateRange: 'Apr 25 - Apr 27, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Power BI Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 25,000',
      discountedPrice: 'INR 18,000',
      discountPercentage: '28',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year with Renewal Options',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Microsoft Power BI Certification Training",
    "breadcrumbName": "Microsoft Power BI Certification Training | PL-300 Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Data Visualization & Business Intelligence",
    "benefits": [
      "24-Hour Live Training",
      "Hands-On Projects",
      "PL-300 Exam Prep",
      "Industry-Recognized Certification"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Microsoft Power BI Certification Overview",
    "description": [
      "This Power BI certification course equips professionals with data modeling, visualization, and reporting skills.",
      "Learn to build dashboards, generate insights, and transform data effectively.",
      "Designed to prepare you for the PL-300 certification exam."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Data Modeling",
      "Power Query",
      "DAX Basics",
      "Dashboard Design",
      "Business Intelligence Reporting"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live instructor-led online sessions with flexible weekday and weekend batches."
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized corporate Power BI training programs designed to improve business intelligence, enhance reporting capabilities, and drive data-driven decisions."
  };

  const courseMetadata = {
    shortName: 'PL-300',
    shortNameAlt: 'Power BI',
    fullName: 'Microsoft Power BI Certification Training',
    fullNameAlt: 'Microsoft Power BI Training',
    certificateName: 'Power BI Data Analyst',
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
        'What are the Prerequisites Required for Microsoft Power BI Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Microsoft Aligned',
      certificateType: 'Certificate of Data Analytics Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Data Analyst',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Data Analysts",
    "Business Intelligence Professionals",
    "Business Analysts",
    "IT Professionals",
    "Project Managers",
    "Anyone interested in data visualization"
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


export default MicrosoftPowerBITraining;
