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

const PythonDjangoTraining = () => {
  const highlights = [
    { text: "Exhaustive course content prepared in collaboration with industry experts", icon: <FileText className="w-5 h-5" /> },
    { text: "20 hours of live online training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Hands-on training with real-world development projects", icon: <Laptop className="w-5 h-5" /> },
    { text: "Mentorship from experienced Django professionals", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Master advanced web application development technologies", icon: <Globe className="w-5 h-5" /> },
    { text: "Become a certified Python Django web developer", icon: <Award className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong Web Development Foundation",
      "description": "Gain deep knowledge of Python and Django for building scalable web applications."
    },
    {
      "title": "Hands-on Project Experience",
      "description": "Work on real-time projects including dynamic web applications and database-driven systems."
    },
    {
      "title": "Career Advancement",
      "description": "Enhance employability as a backend or full-stack developer."
    },
    {
      "title": "Industry Recognition",
      "description": "Earn certification to validate your Django expertise."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Skilled Development Teams",
      "description": "Equip teams with Django skills to build secure and scalable applications."
    },
    {
      "title": "Faster Development Cycles",
      "description": "Leverage Django’s rapid development framework to reduce time-to-market."
    },
    {
      "title": "Secure Applications",
      "description": "Implement built-in Django security features to protect applications."
    },
    {
      "title": "Cost Efficiency",
      "description": "Build maintainable and scalable applications with reduced operational costs."
    }
  ];

  const careerStats = {
    averageIncome: "$95,000 - $115,000",
    incomeLabel: "Backend Developer Salary",
    employmentGrowth: "25%",
    growthLabel: "Django Specialist Demand"
  };

  const attendees = [
    {
      group: [
        "Aspiring Python Developers",
        "Backend Developers",
        "Full Stack Developers",
        "Web Development Enthusiasts",
        "Software Engineers"
      ]
    }
  ];

  const companies = [
    {
      name: 'Amazon',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    },
    {
      name: 'Cognizant',
      url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
    },
    {
      name: 'IBM',
      url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    },
    {
      name: 'Accenture',
      url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    },
    {
      name: 'Wipro',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
    },
    {
      name: 'Eurofins',
      url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg',
    },
    {
      name: 'JPMorgan',
      url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg',
    },
  ];

  const outcomes = [
    "Build dynamic web applications using Django.",
    "Implement MVC architecture using Django models, views, and templates.",
    "Work with relational databases and SQL.",
    "Handle authentication, forms, and serialization.",
    "Deploy Django applications successfully."
  ];

  const prerequisites = [
    "Basic knowledge of Python programming.",
    "Understanding of HTML and web development basics.",
    "Working knowledge of SQL and relational databases is recommended."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete 20 hours of live online training.",
      color: "hsl(var(--primary))"
    },
    {
      title: "Complete Projects",
      description: "Work on real-time Django development projects.",
      color: "#F59E0B"
    },
    {
      title: "Course Completion",
      description: "Successfully complete assignments and practical exercises.",
      color: "#10B981"
    },
    {
      title: "Receive Certification",
      description: "Earn lifetime-valid Django certification.",
      color: "#8B5CF6"
    }
  ];

  const curriculumModules = [
    { "title": "Introduction to Python", "topics": ["Python basics", "Variables", "Data types"] },
    { "title": "Sequences and File Operations", "topics": ["Lists", "Tuples", "File handling"] },
    { "title": "Functions, Errors & Packages", "topics": ["Functions", "Exception handling", "Regular expressions", "Packages"] },
    { "title": "Object-Oriented Programming", "topics": ["Classes", "Objects", "Inheritance", "Polymorphism"] },
    { "title": "Debugging & Databases", "topics": ["Debugging techniques", "Database connectivity", "Project skeleton setup"] },
    { "title": "Introduction to Django", "topics": ["Django architecture", "Project setup", "App structure"] },
    { "title": "Templates and Forms", "topics": ["Django templates", "Forms handling", "Validation"] },
    { "title": "Models and Dynamic Pages", "topics": ["Models", "ORM", "Dynamic content rendering"] },
    { "title": "Serialization", "topics": ["Django REST basics", "Data serialization"] },
    { "title": "Parsing XML and JSON", "topics": ["JSON handling", "XML parsing"] }
  ];

  const learningObjectives = [
    {
      title: "Python Fundamentals",
      description: "Understand Python syntax, data structures, and object-oriented concepts."
    },
    {
      title: "Django Framework",
      description: "Develop secure and scalable web applications using Django."
    },
    {
      title: "Database Integration",
      description: "Work with relational databases and Django ORM."
    },
    {
      title: "Dynamic Web Development",
      description: "Build interactive web pages using templates and forms."
    },
    {
      title: "API Development",
      description: "Handle JSON, XML, and serialization for modern web applications."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Django FAQs",
      "items": [
        {
          "question": "1. Who is a certified Django professional?",
          "answer": "A certified Django professional develops real-time web applications using Django, including e-commerce platforms and interactive websites."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "Basic knowledge of Python, web development, and SQL is recommended."
        },
        {
          "question": "3. What are the benefits of certification?",
          "answer": "Certification validates Django skills and improves career prospects."
        },
        {
          "question": "4. Is there an exam?",
          "answer": "No separate exam is required; certification is awarded upon course completion."
        },
        {
          "question": "5. How do I attain certification?",
          "answer": "Register, complete training, and finish practical projects."
        },
        {
          "question": "6. How long is certification valid?",
          "answer": "Certification is valid for a lifetime."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        { "question": "1. Token payment policy?", "answer": "Non-refundable after 15 days; valid for 6 months adjustment." },
        { "question": "2. Preferred currency?", "answer": "Use your local currency." },
        { "question": "3. Online payments?", "answer": "Secure online payment portal available." },
        { "question": "4. Discounts?", "answer": "Promotional offers available." },
        { "question": "5. Installments?", "answer": "Flexible payment options available." },
        { "question": "6. Refund policy?", "answer": "No refunds; rescheduling allowed." },
        { "question": "7. Payment receipt?", "answer": "Invoice emailed after payment." },
        { "question": "8. Processing fee?", "answer": "No transaction fees." },
        { "question": "9. Accepted cards?", "answer": "VISA, MasterCard, Maestro, AMEX, Discover." },
        { "question": "10. Other payment methods?", "answer": "Credit/Debit Cards, Net Banking, PayPal, Stripe." }
      ]
    },
    {
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        { "question": "1. Missed class?", "answer": "Rescheduling available without extra charges." },
        { "question": "2. Contact support?", "answer": "Email or call support team." },
        { "question": "3. Training modes?", "answer": "Online, virtual, corporate, and e-learning." },
        { "question": "4. Corporate training?", "answer": "Customized enterprise training available." },
        { "question": "5. Certificate provided?", "answer": "Yes." },
        { "question": "6. Discounts?", "answer": "Available periodically." },
        { "question": "7. Why choose Simpliaxis?", "answer": "Experienced trainers and global recognition." },
        { "question": "8. Affordable courses?", "answer": "Yes, competitive pricing." },
        { "question": "9. Language options?", "answer": "English preferred; custom options available." },
        { "question": "10. Enrollment process?", "answer": "Register online and complete payment." },
        { "question": "11. Instructor expertise?", "answer": "Certified professionals with industry experience." },
        { "question": "12. Course material access?", "answer": "Lifetime access to study materials." },
        { "question": "13. Technical support?", "answer": "24x7 support available." },
        { "question": "14. Project-based learning?", "answer": "Yes, practical real-world projects included." },
        { "question": "15. Career guidance?", "answer": "Support available during and after training." },
        { "question": "16. Industry demand?", "answer": "Django developers are in high demand globally." },
        { "question": "17. Can beginners join?", "answer": "Yes, with basic Python knowledge." },
        { "question": "18. Do you provide corporate batches?", "answer": "Yes." },
        { "question": "19. Discount availability?", "answer": "Depends on course and ongoing promotions." }
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
    { "title": "Expert Trainers", "description": "Learn from certified Django professionals." },
    { "title": "Flexible Learning", "description": "Multiple training modes available." },
    { "title": "Lifetime Access", "description": "Access course recordings anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals worldwide." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world scenarios." },
    { "title": "Wide Course Portfolio", "description": "Access multiple certification tracks." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'PDC',
      courseName: 'Python Django Certification Training',
      dateRange: 'Apr 10 - Apr 15, 2026',
      timeRange: '07:30 PM - 10:30 PM IST',
      trainerName: 'Django Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 40,000',
      discountedPrice: 'INR 32,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Validity of Certification',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Python Django Certification Training",
    "breadcrumbName": "Python Django Certification Course | Python Django Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Django & Build Scalable Web Applications",
    "benefits": [
      "20 Hours Live Training",
      "Hands-On Projects",
      "Lifetime Certification",
      "Industry Expert Mentorship"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Python Django Training Overview",
    "description": [
      "Learn Python Django to build powerful, secure, and scalable web applications.",
      "Gain practical exposure to database integration, MVC architecture, and API handling.",
      "Work on real-world projects and accelerate your web development career."
    ],
    "whatIsTitle": "What is Python Django?",
    "whatIsDescription": [
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "20 hours of live training",
      "Hands-on development projects",
      "Mentorship and career support",
      "24/7 technical assistance"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Python Programming",
      "Django Framework",
      "Database Integration",
      "Web Application Development",
      "REST & Serialization"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "Enterprise Training",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Django training programs tailored to enterprise development needs."
  };

  const courseMetadata = {
    shortName: 'Django',
    shortNameAlt: 'Python Django',
    fullName: 'Python Django Certification Training',
    fullNameAlt: 'Python Django (PD) Training',
    certificateName: 'Django Developer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your Python Django certification opens doors to roles like Backend Developer, Full Stack Developer, and Web Architect across diverse industries.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Python Django Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis',
      certificateType: 'Certificate of Competency',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Aspiring Python Developers",
    "Backend Developers",
    "Full Stack Developers",
    "Web Development Enthusiasts",
    "Software Engineers"
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
          categoryName="data science"
          categoryLink="/category/data-science"
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

export default PythonDjangoTraining;
