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

const AngularJSTraining = () => {
  const highlights = [
    { text: "Structured and easy-to-follow framework for mastering AngularJS", icon: <Monitor className="w-5 h-5" /> },
    { text: "Organized and scalable interface development approach", icon: <FileText className="w-5 h-5" /> },
    { text: "Learn to build dynamic single-page applications (SPAs)", icon: <Laptop className="w-5 h-5" /> },
    { text: "Hands-on experience with data binding and component architecture", icon: <Briefcase className="w-5 h-5" /> },
    { text: "Develop large-scale enterprise-level applications efficiently", icon: <Globe className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong Frontend Foundation",
      "description": "Gain in-depth knowledge of AngularJS architecture, components, modules, and MVC structure."
    },
    {
      "title": "Single Page Application Development",
      "description": "Learn to design and develop dynamic SPAs using routing, observables, and services."
    },
    {
      "title": "Practical Coding Skills",
      "description": "Work on real-time examples covering data binding, TypeScript, HTTP integration, and debugging."
    },
    {
      "title": "Career Advancement",
      "description": "Boost your employability with AngularJS certification recognized in the IT industry."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Scalable Application Development",
      "description": "Enable teams to build structured, maintainable, and scalable web applications."
    },
    {
      "title": "Improved Development Efficiency",
      "description": "Reduce development time with AngularJS’s modular and reusable component architecture."
    },
    {
      "title": "Enhanced UI/UX Delivery",
      "description": "Deliver interactive and responsive user interfaces using AngularJS best practices."
    },
    {
      "title": "Skilled Development Teams",
      "description": "Upskill employees with modern frontend technologies for enterprise-level solutions."
    }
  ];

  const careerStats = {
    averageIncome: "$95,000 - $130,000",
    incomeLabel: "Angular Developer Salary",
    employmentGrowth: "25%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      "group": [
        "Frontend Developers",
        "Full Stack Developers",
        "Web Developers",
        "Software Engineers",
        "UI/UX Developers",
        "Students & Fresh Graduates"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand AngularJS architecture and MVC pattern.",
    "Develop dynamic single-page applications.",
    "Implement routing, observables, and services.",
    "Perform debugging and unit testing.",
    "Deploy secure and high-performance Angular applications."
  ];

  const prerequisites = [
    "Basic knowledge of programming concepts.",
    "Familiarity with HTML, CSS, and JavaScript is recommended.",
    "No mandatory prerequisites for beginners."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Angular JS Training",
      "description": "Register for the Angular JS certification program.",
      "color": "#3B82F6"
    },
    {
      "title": "Attend Training Sessions",
      "description": "Complete instructor-led sessions covering core and advanced topics.",
      "color": "#F59E0B"
    },
    {
      "title": "Complete Assignments & Projects",
      "description": "Work on practical coding exercises and real-world applications.",
      "color": "#10B981"
    },
    {
      "title": "Pass Certification Exam",
      "description": "Clear the assessment to earn your Angular JS certification.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      "title": "Angular JS Training",
      "topics": [
        "Introduction to AngularJS",
        "Basics of JavaScript",
        "Data Types and Functions",
        "Control Structures and Loops",
        "User-Defined Functions",
        "Designing Single Page Applications",
        "Angular Architecture Overview",
        "Fundamentals of TypeScript",
        "HTTP, Routing, Observables, and Pipes",
        "Model-View-Controller (MVC)",
        "Unit Testing",
        "Debugging Techniques",
        "Performance & Deployment",
        "Security & Internationalization",
        "HTML and Angular Compilation"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Master Angular Architecture",
      "description": "Understand modules, components, services, and dependency injection."
    },
    {
      "title": "Develop SPAs",
      "description": "Create single-page applications with routing and state management."
    },
    {
      "title": "Implement Data Binding",
      "description": "Apply two-way data binding and component interaction."
    },
    {
      "title": "Testing & Debugging",
      "description": "Perform unit testing and debugging for robust applications."
    },
    {
      "title": "Deployment & Optimization",
      "description": "Deploy secure, optimized, and scalable Angular applications."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Angular JS FAQs",
      "items": [
        {
          "question": "1. Who is an Angular JS certified professional?",
          "answer": "An AngularJS certified professional has strong knowledge of Angular fundamentals such as two-way binding, components, modules, and enterprise-level web development."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "No strict prerequisites, but basic programming knowledge helps."
        },
        {
          "question": "3. What are the benefits of AngularJS certification?",
          "answer": "High industry demand, strong career growth, practical development skills, and competitive salary opportunities."
        },
        {
          "question": "4. When should I take the exam?",
          "answer": "After completing the training program as per your schedule."
        },
        {
          "question": "5. What is the exam format?",
          "answer": "Multiple-choice questions and practical coding assessments."
        },
        {
          "question": "6. How do I obtain certification?",
          "answer": "Complete training and pass the certification assessment."
        },
        {
          "question": "7. How do I renew certification?",
          "answer": "Certification does not expire but continuous skill updates are recommended."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; adjustable within 6 months." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payment?", "answer": "Secure online portal available." },
        { "question": "4. Discounts?", "answer": "Promotions available." },
        { "question": "5. Installments?", "answer": "Flexible payment options available." },
        { "question": "6. Refund policy?", "answer": "No refund; rescheduling allowed." },
        { "question": "7. Receipt?", "answer": "Invoice sent via email." },
        { "question": "8. Processing fee?", "answer": "No processing fee." },
        { "question": "9. Accepted cards?", "answer": "VISA, MasterCard, Maestro, AMEX, Discover." },
        { "question": "10. Other payment methods?", "answer": "Credit/Debit Cards, Net Banking, Wire Transfer, PayPal, Stripe." }
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
        { "question": "10. Corporate training?", "answer": "Yes, customized programs available." },
        { "question": "11. Instructor expertise?", "answer": "Certified professionals with industry experience." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Yes, competitively priced." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers and global recognition." },
        { "question": "15. Lifetime access?", "answer": "Yes." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand in frontend development roles." },
        { "question": "18. Course objective?", "answer": "Build scalable Angular applications." },
        { "question": "19. Discount amount?", "answer": "Depends on current promotions." }
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
    { "title": "Global Recognition", "description": "Globally trusted certification provider." },
    { "title": "Expert Trainer", "description": "Learn from experienced Angular professionals." },
    { "title": "Flexible Learning", "description": "Multiple learning formats available." },
    { "title": "Lifetime Access", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by global professionals." },
    { "title": "End-to-End Assistance", "description": "Complete support throughout training." },
    { "title": "Interactive Training", "description": "Hands-on practical sessions." },
    { "title": "Wide Range of Courses", "description": "Access multiple globally recognized certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AJST',
      courseName: 'Angular JS Training',
      dateRange: 'Mar 15 - Mar 17, 2026',
      timeRange: '07:30 PM - 10:30 PM IST',
      trainerName: 'Frontend Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 35,000',
      discountedPrice: 'INR 28,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Angular JS Training",
    "breadcrumbName": "Angular JS Training | Angular JS Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master AngularJS and Build Scalable Web Applications",
    "benefits": [
      "Structured AngularJS learning",
      "Hands-on project experience",
      "Certification upon completion",
      "Industry-recognized training"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Angular JS Course Overview",
    "description": [
      "This Angular JS Training program provides comprehensive knowledge of Angular architecture, components, modules, and MVC structure.",
      "Learn to develop dynamic single-page applications using routing, observables, and HTTP services.",
      "Gain hands-on experience in debugging, testing, performance optimization, and secure deployment."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Angular Architecture",
      "TypeScript Fundamentals",
      "Single Page Application Development",
      "Data Binding",
      "Routing & HTTP Services",
      "Unit Testing & Debugging",
      "Performance Optimization"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporate Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Angular training programs designed to enhance enterprise frontend development capabilities and build scalable web solutions."
  };

  const courseMetadata = {
    shortName: 'Angular',
    shortNameAlt: 'Angular JS',
    fullName: 'Angular JS Training',
    fullNameAlt: 'Angular JS Certification Course',
    certificateName: 'Angular Developer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Angular JS Training, you can explore high-demand roles such as Frontend Developer, Full Stack Developer, and UI Engineer across global technology sectors.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Angular JS Training?',
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
    "Frontend Developers",
    "Full Stack Developers",
    "Web Developers",
    "Software Engineers",
    "UI/UX Developers",
    "Students & Fresh Graduates"
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

export default AngularJSTraining;
