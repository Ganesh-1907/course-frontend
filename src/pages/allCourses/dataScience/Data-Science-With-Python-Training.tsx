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

const DataScienceWithPythonTraining = () => {
  const highlights = [
    { text: "Attend 40 hours of virtual and live training", icon: <Monitor className="w-5 h-5" /> },
    { text: "24x7 query and technical support", icon: <Headset className="w-5 h-5" /> },
    { text: "Build a strong foundation in Data Science techniques", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Apply Data Science and Machine Learning in real-world scenarios", icon: <Briefcase className="w-5 h-5" /> },
    { text: "Interactive discussions with trainers and peers", icon: <Users className="w-5 h-5" /> },
    { text: "Learn directly from industry experts", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Simplify complex Python problems effectively", icon: <Laptop className="w-5 h-5" /> },
    { text: "Access to comprehensive e-learning resources", icon: <FileText className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Practical Data Science Skills",
      description: "Implement data visualization, statistical analysis, and machine learning in real-world scenarios."
    },
    {
      title: "Enhanced Analytical Thinking",
      description: "Develop strong analytical skills to identify patterns and make data-driven decisions."
    },
    {
      title: "Career Opportunities",
      description: "Unlock opportunities in finance, marketing, healthcare, IT, and more."
    },
    {
      title: "Master Python Libraries",
      description: "Work with NumPy, Pandas, Matplotlib, and Seaborn effectively."
    },
    {
      title: "Competitive Advantage",
      description: "Gain expertise in Python and Data Science to stand out in the job market."
    }
  ];

  const corporateBenefits = [
    {
      title: "Data-Driven Decision Making",
      description: "Enable teams to analyze large datasets and improve strategic decisions."
    },
    {
      title: "Operational Optimization",
      description: "Apply machine learning techniques to improve efficiency and productivity."
    },
    {
      title: "Market Trend Analysis",
      description: "Identify consumer patterns and evolving market trends."
    },
    {
      title: "Predictive Analytics",
      description: "Leverage predictive models to improve product and service delivery."
    },
    {
      title: "Upskilling Workforce",
      description: "Train in-house teams to reduce reliance on external consultants."
    }
  ];

  const careerStats = {
    averageIncome: "$101,743",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "36%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "Aspiring Data Scientists",
        "Developers and Programmers",
        "Business Analysts",
        "IT Professionals",
        "Analytics Enthusiasts"
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
    "Understand the Data Science project lifecycle.",
    "Apply statistical concepts including hypothesis testing.",
    "Use Python for data preprocessing and visualization.",
    "Build machine learning models for regression and classification.",
    "Implement clustering and recommendation systems."
  ];

  const prerequisites = [
    "Basic understanding of programming is recommended.",
    "Familiarity with statistical concepts is helpful but not mandatory.",
    "Willingness to learn Python for Data Science.",
    "Beginner-friendly course suitable for newcomers."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete 40 hours of live instructor-led sessions.",
      color: "hsl(var(--primary))"
    },
    {
      title: "Hands-On Labs",
      description: "Participate in practical labs and case studies.",
      color: "#F59E0B"
    },
    {
      title: "Course Assessment",
      description: "Complete assignments and evaluations.",
      color: "#10B981"
    },
    {
      title: "Earn Certification",
      description: "Receive certification upon successful completion.",
      color: "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      title: "Data Science Foundations",
      topics: [
        "Introduction to Data Science",
        "CRISP-DM Lifecycle",
        "Data Science Toolkit"
      ]
    },
    {
      title: "Python Programming",
      topics: [
        "Python basics",
        "Data structures",
        "Control structures",
        "Exception handling"
      ]
    },
    {
      title: "NumPy & Pandas",
      topics: [
        "Array operations",
        "DataFrames",
        "Data preprocessing"
      ]
    },
    {
      title: "Statistics & Probability",
      topics: [
        "Mean, Median, Mode",
        "Variance and Standard Deviation",
        "Probability distributions"
      ]
    },
    {
      title: "Data Visualization",
      topics: [
        "Matplotlib",
        "Seaborn",
        "Univariate & Bivariate analysis"
      ]
    },
    {
      title: "Machine Learning Basics",
      topics: [
        "Supervised & Unsupervised learning",
        "Regression",
        "Classification",
        "Clustering"
      ]
    },
    {
      title: "Advanced ML & Case Studies",
      topics: [
        "Logistic Regression",
        "Decision Trees",
        "Random Forest",
        "K-Means Clustering",
        "Recommendation Systems"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Statistics Fundamentals",
      description: "Understand central tendency, dispersion, and probability."
    },
    {
      title: "Python Programming",
      description: "Write Python programs for data handling and analysis."
    },
    {
      title: "Data Visualization",
      description: "Create impactful visualizations using Matplotlib and Seaborn."
    },
    {
      title: "Machine Learning",
      description: "Build regression, classification, and clustering models."
    },
    {
      title: "Data Handling",
      description: "Work with real-world datasets efficiently."
    },
    {
      title: "Advanced Statistical Techniques",
      description: "Apply hypothesis testing and inferential statistics."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Data Science FAQs",
      items: [
        { "question": "1. Who is a Data Scientist?", "answer": "A professional who analyzes and interprets complex data to generate insights." },
        { "question": "2. Are there prerequisites?", "answer": "No strict prerequisites; basic programming knowledge helps." },
        { "question": "3. Benefits of certification?", "answer": "Gain knowledge in ML, statistics, and Python applications." },
        { "question": "4. Course duration?", "answer": "40 hours of live training." },
        { "question": "5. Who should enroll?", "answer": "Developers, analysts, architects, and beginners." },
        { "question": "6. Average salary?", "answer": "Around $101,743 annually (varies by region)." },
        { "question": "7. Industries using Data Science?", "answer": "Healthcare, finance, retail, media, energy, and more." },
        { "question": "8. Key skills required?", "answer": "Python, data exploration, statistics, ML, visualization." },
        { "question": "9. Why learn Python for DS?", "answer": "Simple syntax, powerful libraries, strong community support." },
        { "question": "10. Certification process?", "answer": "Attend sessions and complete course requirements." },
        { "question": "11. What does the training cover?", "answer": "Statistics, ML, Python libraries, predictive modeling." },
        { "question": "12. Is it beginner-friendly?", "answer": "Yes, suitable for beginners." },
        { "question": "13. Do I get hands-on practice?", "answer": "Yes, practical labs and case studies included." },
        { "question": "14. Is ML included?", "answer": "Yes, supervised and unsupervised learning." },
        { "question": "15. Will I work on projects?", "answer": "Yes, real-world case studies included." },
        { "question": "16. Is certification provided?", "answer": "Yes, after course completion." }
      ]
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: [
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
      id: "category_3",
      label: "General FAQs",
      items: [
        { "question": "1. Missed class?", "answer": "Rescheduling available." },
        { "question": "2. Contact support?", "answer": "Email or call support team." },
        { "question": "3. Training modes?", "answer": "Online, virtual, corporate, e-learning." },
        { "question": "4. Corporate training?", "answer": "Customized enterprise training available." },
        { "question": "5. Certificate provided?", "answer": "Yes." },
        { "question": "6. Discounts?", "answer": "Available periodically." },
        { "question": "7. Why choose Viovn?", "answer": "Experienced trainers and global recognition." },
        { "question": "8. Affordable courses?", "answer": "Yes, competitive pricing." },
        { "question": "9. Language options?", "answer": "English preferred; custom options available." },
        { "question": "10. Enrollment process?", "answer": "Register online and complete payment." }
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
    { "title": "Expert Trainers", "description": "Learn from certified industry professionals." },
    { "title": "Flexible Learning", "description": "Multiple training modes available." },
    { "title": "Lifetime Access", "description": "Access learning materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals worldwide." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world scenarios." },
    { "title": "Wide Course Portfolio", "description": "Multiple globally recognized certifications." }
  ];
  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with Renewal Options',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Data Science with Python Training",
    "breadcrumbName": "Data Science with Python Certification | Data Science Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Data Science & Machine Learning with Python",
    "benefits": [
      "40 Hours Live Training",
      "Hands-On Labs & Case Studies",
      "Master Python for Data Science",
      "Machine Learning & Statistical Techniques"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Data Science with Python Course Overview",
    "description": [
      "Master Python for Machine Learning and Data Science through hands-on practice.",
      "Learn data analysis, visualization, statistics, and predictive modeling.",
      "Build real-world projects and accelerate your Data Science career."
    ],
    "whatIsTitle": "What is Data Science with Python?",
    "whatIsDescription": [
      "Data Science with Python involves using the Python programming language and its extensive ecosystem of libraries to extract insights from data, build predictive models, and automate analytical tasks."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "40 hours of live training",
      "Hands-on lab exercises",
      "Real-world case studies",
      "24/7 learning assistance"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Python Programming",
      "NumPy & Pandas",
      "Data Visualization",
      "Machine Learning",
      "Statistical Analysis",
      "Deep Learning Basics"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Viovn",
    "label": "Corporate Training",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Data Science training programs tailored to enterprise needs."
  };

  const courseMetadata = {
    shortName: 'Python',
    shortNameAlt: 'Data Science',
    fullName: 'Data Science with Python Training',
    fullNameAlt: 'Data Science with Python Certification Course',
    certificateName: 'Data Scientist',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your Data Science with Python certification opens doors to roles like Data Scientist, Data Analyst, Machine Learning Engineer, and more across diverse industries.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Data Science with Python Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Viovn',
      certificateType: 'Certificate of Excellence',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Aspiring Data Scientists",
    "Developers and Programmers",
    "Business Analysts",
    "IT Professionals",
    "Analytics Enthusiasts"
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

export default DataScienceWithPythonTraining;
