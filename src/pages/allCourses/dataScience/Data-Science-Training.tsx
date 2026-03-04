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

const DataScienceTraining = () => {
  const highlights = [
    { text: "42 Hours of Instructor-Led Live Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Introduction to Advanced Modeling Techniques", icon: <FileText className="w-5 h-5" /> },
    { text: "Master Supervised and Unsupervised Machine Learning Algorithms", icon: <Laptop className="w-5 h-5" /> },
    { text: "56 Hours of Project Work and Practical Exercises", icon: <Briefcase className="w-5 h-5" /> },
    { text: "28 Hours of Self-Paced Learning Videos", icon: <Monitor className="w-5 h-5" /> },
    { text: "24/7 Support with Lifetime Course Access", icon: <Headset className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Comprehensive Skill Development",
      "description": "Gain expertise in data exploration, statistical analysis, and machine learning techniques."
    },
    {
      "title": "Hands-on Experience",
      "description": "Work on real-time projects and practical exercises to build industry-ready skills."
    },
    {
      "title": "High Career Demand",
      "description": "Unlock opportunities in one of the most in-demand and high-paying career domains globally."
    },
    {
      "title": "Globally Recognized Certification",
      "description": "Earn a lifetime-valid Data Science certification to validate your expertise."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Data-Driven Decision Making",
      "description": "Empower teams to analyze business data and derive meaningful insights."
    },
    {
      "title": "Predictive Analytics Implementation",
      "description": "Leverage advanced modeling techniques for forecasting and optimization."
    },
    {
      "title": "Improved Business Performance",
      "description": "Utilize machine learning to improve efficiency and productivity."
    },
    {
      "title": "Upskilled Workforce",
      "description": "Train employees in advanced data science techniques and reduce reliance on external consultants."
    }
  ];

  const careerStats = {
    averageIncome: "$110,000",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "36%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      "group": [
        "Aspiring Data Scientists",
        "Business Analysts",
        "Software Developers",
        "IT Professionals",
        "Fresh Graduates",
        "Working Professionals seeking career transition"
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
    "Understand core Data Science principles and workflows.",
    "Apply probability and statistical concepts effectively.",
    "Implement supervised and unsupervised machine learning algorithms.",
    "Perform predictive modeling and time series forecasting.",
    "Develop data-driven solutions using advanced techniques."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic understanding of mathematics and statistics is helpful.",
    "Familiarity with programming concepts is an added advantage.",
    "Open to beginners and professionals."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in the Program",
      "description": "Register and begin your Data Science training journey.",
      "color": "hsl(var(--primary))"
    },
    {
      "title": "Attend Instructor-Led Sessions",
      "description": "Complete the required 42 hours of live training.",
      "color": "#F59E0B"
    },
    {
      "title": "Complete Projects & Exercises",
      "description": "Finish practical assignments and project work.",
      "color": "#10B981"
    },
    {
      "title": "Pass Course Assessments",
      "description": "Successfully clear course evaluations to earn certification.",
      "color": "#6366F1"
    },
    {
      "title": "Receive Certification",
      "description": "Obtain your lifetime-valid Data Science Certification.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      "title": "Data Science Certification Training",
      "topics": [
        "Introduction to Data Science",
        "Data Exploration, Manipulation and Visualization",
        "Probability & Statistics",
        "Introduction to Machine Learning",
        "Logistic Regression",
        "Advanced Statistics & Predictive Modeling",
        "Time Series Forecasting",
        "Supervised and Unsupervised Learning Techniques",
        "Decision Trees and Random Forest"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Data Science Foundations",
      "description": "Learn the complete Data Science lifecycle from data collection to model deployment."
    },
    {
      "title": "Apply Statistical Concepts",
      "description": "Master probability, statistics, and predictive modeling techniques."
    },
    {
      "title": "Machine Learning Expertise",
      "description": "Implement supervised and unsupervised learning algorithms effectively."
    },
    {
      "title": "Advanced Modeling Techniques",
      "description": "Build forecasting and predictive analytics models."
    },
    {
      "title": "Practical Implementation",
      "description": "Gain real-world project experience for industry readiness."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "FAQ Category 1",
      "items": [
        {
          "question": "1. Who is a Certified Data Scientist?",
          "answer": "A certified Data Scientist is one who possesses Data Science skills and certification from a well-known institute. The Data Scientists have a detailed knowledge of programming languages like Python and R, Machine Learning, the basics of Data Science, Artificial Intelligence, and more."
        },
        {
          "question": "2. What are the prerequisites to take a Data Science course?",
          "answer": "There are no specific prerequisites to take a Data Science course. The individual who is new to this field even without any computer knowledge can take up this course without any hesitation. It would be a plus point if you hold a bachelor’s degree like B.Sc Mathematics, B.Sc Statistics, BCA, B.Sc IT, B.Sc Computer Science, BTech, or any equivalent degree."
        },
        {
          "question": "3. What are the benefits of the Data Science certification?",
          "answer": "On pursuing a Data Science certification, you can be in huge demand as there are a lot of vacant positions available across the world. Moreover, you can find it as a highly-paying career. This certification can change your life completely as a professional Data Scientist of a reputed company."
        },
        {
          "question": "4. How do I obtain the Data Science course certification?",
          "answer": "For attaining the Data Science course certification, you just need to pass the exams that come under the course with an average score. After successful completion, Simpliaxis issues the course completion certificate."
        },
        {
          "question": "5. How long does the Data Science certification be valid?",
          "answer": "The Data Science certification is valid for an entire lifetime."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "FAQ Category 2",
      "items": [
        {
          "question": "1. What happens to my token or partial payment if I don’t enroll immediately?",
          "answer": "Token or partial payments will become non-refundable after 15 days from the date of payment. Any token or partial amount paid can be applied towards enrollment for any available sessions on our website within 6 months of the payment date."
        },
        {
          "question": "2. Is there a preferred currency for payment, especially for international students?",
          "answer": "While we accept payments in various currencies, we recommend using the currency from where you want to attend the course."
        },
        {
          "question": "3. Can payments be made online through your website?",
          "answer": "Payments can be made conveniently through our secure online payment portal on our website."
        },
        {
          "question": "4. Do you offer discounts?",
          "answer": "Yes, we offer discounts and promotions for early payments or certain corporate training."
        },
        {
          "question": "5. Can I pay in installments?",
          "answer": "You have the flexibility to pay either in full or in installments."
        },
        {
          "question": "6. Refund policy?",
          "answer": "Refund is not possible. You can reschedule your course."
        },
        {
          "question": "7. Payment receipt?",
          "answer": "You will receive a confirmation email and invoice after payment."
        },
        { "question": "8. Processing fee?", "answer": "No transaction processing fee." },
        { "question": "9. Accepted cards?", "answer": "VISA, Master, Maestro, AMEX, Discover." },
        { "question": "10. Other payment options?", "answer": "Credit Cards, Debit Cards, Net Banking, Wire Transfer, Stripe, Splitit, PayPal." }
      ]
    },
    {
      "id": "category_3",
      "label": "FAQ Category 3",
      "items": [
        { "question": "1. What if I miss a class?", "answer": "You can reschedule your training without extra charges." },
        { "question": "2. How can I contact support?", "answer": "You can connect via email or phone." },
        { "question": "3. Native language option?", "answer": "English is preferred; other languages may be requested for corporate training." },
        { "question": "4. Personalized training?", "answer": "Multiple schedules are available; choose based on convenience." },
        { "question": "5. Upcoming schedules?", "answer": "Visit the website and select your course." },
        { "question": "6. Change training date?", "answer": "Yes, inform 3-4 days before scheduled date." },
        { "question": "7. Certificate provided?", "answer": "Yes, after successful completion." },
        { "question": "8. Enrollment process?", "answer": "Register online and complete payment." },
        { "question": "9. Modes of training?", "answer": "Online, Live Virtual, Corporate, and E-learning." },
        { "question": "10. Corporate training?", "answer": "Yes, customized corporate training available." },
        { "question": "11. Instructor expertise?", "answer": "Certified trainers with industry experience." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable courses?", "answer": "Yes, competitively priced." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Experienced trainers and global certification portfolio." },
        { "question": "15. Lifetime access?", "answer": "Yes, lifetime access to course materials." },
        { "question": "16. Support availability?", "answer": "24/7 support available." },
        { "question": "17. Career growth?", "answer": "High demand globally for certified data scientists." },
        { "question": "18. Course objective?", "answer": "Build high-performing data professionals." },
        { "question": "19. Discount amount?", "answer": "Depends on ongoing promotions." }
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
    { "title": "Global Recognition", "description": "Globally recognized certification programs." },
    { "title": "Expert Trainer", "description": "Learn from experienced industry professionals." },
    { "title": "Flexible Learning", "description": "Multiple training modes available." },
    { "title": "Lifetime Access", "description": "Access course recordings anytime." },
    { "title": "Proven Track Record", "description": "Trusted by global professionals." },
    { "title": "End-to-End Assistance", "description": "Complete support throughout training." },
    { "title": "Interactive Training", "description": "Engaging and practical sessions." },
    { "title": "Wide Range of Courses", "description": "Multiple globally recognized certifications." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'DSCT',
      courseName: 'Data Science Certification Training',
      dateRange: 'May 10 - May 15, 2026',
      timeRange: '08:00 PM - 11:00 PM IST',
      trainerName: 'Data Science Guru',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 48,000',
      discountedPrice: 'INR 38,400',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with Renewal Options',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Data Science Certification Training",
    "breadcrumbName": "Data Science Training | Data Science Online Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Data Science, Machine Learning & Predictive Modeling",
    "benefits": [
      "Instructor-led live training",
      "Extensive project work",
      "Advanced modeling techniques",
      "Lifetime certification validity"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Data Science Certification Course Overview",
    "description": [
      "This comprehensive Data Science Certification Training equips you with advanced modeling techniques and machine learning expertise.",
      "Gain hands-on experience with real-world projects, predictive analytics, and time series forecasting.",
      "Become industry-ready with supervised and unsupervised learning mastery."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Data Exploration & Visualization",
      "Probability & Statistics",
      "Supervised Learning",
      "Unsupervised Learning",
      "Predictive Modeling",
      "Time Series Forecasting",
      "Decision Trees & Random Forest"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporate Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized corporate training programs designed to empower enterprises with advanced Data Science capabilities and data-driven transformation."
  };

  const courseMetadata = {
    shortName: 'DS',
    shortNameAlt: 'Data Science',
    fullName: 'Data Science Certification Training',
    fullNameAlt: 'Data Science Certification Course',
    certificateName: 'Data Scientist',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your Data Science certification opens doors to roles like Data Scientist, Business Analyst, Data Architect, and Insight Analyst across diverse industries.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Data Science Certification Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis',
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
    "Business Analysts",
    "Software Developers",
    "IT Professionals",
    "Fresh Graduates",
    "Working Professionals seeking career transition"
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

export default DataScienceTraining;
