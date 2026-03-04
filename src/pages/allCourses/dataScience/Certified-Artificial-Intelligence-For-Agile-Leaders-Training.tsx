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

const CertifiedArtificialIntelligenceForAgileLeadersTraining = () => {
  const highlights = [
    { text: "Trained by acclaimed industry professionals in live sessions.", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Comprehensive curriculum covering core and advanced AI concepts.", icon: <FileText className="w-5 h-5" /> },
    { text: "Hands-on training with real-world AI applications.", icon: <Laptop className="w-5 h-5" /> },
    { text: "Interactive classroom and simulated lab environment.", icon: <Monitor className="w-5 h-5" /> },
    { text: "Practical insights from real case studies and mentor experiences.", icon: <Briefcase className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Advanced AI Expertise",
      "description": "Develop strong knowledge in AI, Machine Learning, Deep Learning, and advanced algorithms."
    },
    {
      "title": "Career Advancement",
      "description": "Unlock high-demand job roles in Artificial Intelligence and data-driven domains."
    },
    {
      "title": "Hands-on Implementation",
      "description": "Work on real-world AI use cases and industry-based projects."
    },
    {
      "title": "Industry Recognition",
      "description": "Earn a globally recognized AI certification to validate your expertise."
    }
  ];

  const corporateBenefits = [
    {
      "title": "AI-Driven Transformation",
      "description": "Implement AI strategies to optimize operations and business performance."
    },
    {
      "title": "Improved Decision-Making",
      "description": "Leverage predictive analytics and machine learning for smarter business decisions."
    },
    {
      "title": "Innovation Enablement",
      "description": "Encourage innovation by adopting cutting-edge AI technologies."
    },
    {
      "title": "Upskilled Workforce",
      "description": "Train teams to handle AI solutions internally and reduce external dependency."
    }
  ];

  const careerStats = {
    averageIncome: "$115,000 - $160,000",
    incomeLabel: "AI Engineer Salary",
    employmentGrowth: "38%",
    growthLabel: "AI Job Demand Growth"
  };

  const attendees = [
    {
      "group": [
        "Software Developers",
        "Data Analysts",
        "Machine Learning Engineers",
        "AI Enthusiasts",
        "IT Professionals",
        "Technology Architects"
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
    "Master AI foundations and core machine learning concepts.",
    "Implement supervised and unsupervised learning algorithms.",
    "Understand deep learning and neural network architectures.",
    "Apply AI in Natural Language Processing and Computer Vision.",
    "Develop intelligent systems and AI-powered applications."
  ];

  const prerequisites = [
    "Strong knowledge of programming languages (Python preferred).",
    "Understanding of algorithms and data structures.",
    "Basic knowledge of statistics and probability.",
    "Analytical and problem-solving skills."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in the Program",
      "description": "Register and begin your AI certification journey.",
      "color": "hsl(var(--primary))"
    },
    {
      "title": "Attend Training",
      "description": "Complete the required training hours and sessions.",
      "color": "#F59E0B"
    },
    {
      "title": "Complete Projects",
      "description": "Demonstrate practical skills through real-world AI projects.",
      "color": "#10B981"
    },
    {
      "title": "Receive Certification",
      "description": "Earn your Artificial Intelligence Certification.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      "title": "AI Foundations",
      "topics": ["History of AI", "AI vs ML", "Search Algorithms", "Knowledge Representation"]
    },
    {
      "title": "Machine Learning: Supervised Learning",
      "topics": ["Linear Regression", "Logistic Regression", "Decision Trees", "Support Vector Machines"]
    },
    {
      "title": "Machine Learning: Unsupervised Learning",
      "topics": ["Clustering", "K-Means", "Hierarchical Clustering", "Dimensionality Reduction"]
    },
    {
      "title": "Machine Learning: Ensemble Techniques",
      "topics": ["Random Forest", "Gradient Boosting", "Bagging", "Boosting"]
    },
    {
      "title": "Machine Learning: Reinforcement Learning",
      "topics": ["Markov Decision Processes", "Q-Learning", "Policy Gradients"]
    },
    {
      "title": "Deep Learning",
      "topics": ["Neural Networks", "CNN", "RNN", "Backpropagation"]
    },
    {
      "title": "Natural Language Processing",
      "topics": ["Text Preprocessing", "Sentiment Analysis", "Transformers", "Language Models"]
    },
    {
      "title": "Computer Vision",
      "topics": ["Image Processing", "Object Detection", "Image Classification"]
    },
    {
      "title": "Intelligent Agents",
      "topics": ["Autonomous Systems", "AI Agents Architecture", "Multi-Agent Systems"]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand AI Architecture",
      "description": "Learn the building blocks of Artificial Intelligence systems."
    },
    {
      "title": "Master Machine Learning",
      "description": "Implement supervised, unsupervised, and ensemble learning models."
    },
    {
      "title": "Deep Learning Applications",
      "description": "Develop neural network-based solutions."
    },
    {
      "title": "NLP & Computer Vision",
      "description": "Build AI solutions for text and image processing."
    },
    {
      "title": "Build Intelligent Systems",
      "description": "Design AI-powered intelligent agents and automation systems."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AI Certification FAQs",
      "items": [
        {
          "question": "1. Who is a certified Artificial Intelligence professional?",
          "answer": "A certified AI professional is trained in automation, machine learning, deep learning, robotics, reinforcement learning, predictive analytics, and advanced AI tools."
        },
        {
          "question": "2. What are the prerequisites to take the Artificial Intelligence course?",
          "answer": "Strong programming knowledge, understanding of algorithms, and knowledge of statistics and probability are recommended."
        },
        {
          "question": "3. What are the benefits of AI Certification?",
          "answer": "AI certification enhances career prospects and validates expertise in a high-demand domain."
        },
        {
          "question": "4. Do I need to take an exam?",
          "answer": "No formal examination is required for certification."
        },
        {
          "question": "5. How do I attain certification?",
          "answer": "Complete the required training hours and successfully finish project work."
        }
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
      "id": "category_3",
      "label": "General FAQs",
      "items": [
        { "question": "1. Missed class?", "answer": "Rescheduling available." },
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
        { "question": "12. Course material access?", "answer": "Lifetime access provided." },
        { "question": "13. Technical support?", "answer": "24x7 support available." },
        { "question": "14. Project-based learning?", "answer": "Yes, practical case studies included." },
        { "question": "15. Career guidance?", "answer": "Available during and after training." },
        { "question": "16. Industry demand?", "answer": "AI professionals are in high demand globally." },
        { "question": "17. Suitable for experienced professionals?", "answer": "Yes, especially those with programming background." },
        { "question": "18. Corporate batches?", "answer": "Yes, available upon request." },
        { "question": "19. Discount availability?", "answer": "Depends on ongoing promotions." }
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
  const sidePanelSchedules = [
    {
      courseCode: 'AICT',
      courseName: 'Artificial Intelligence Certification Training',
      dateRange: 'Apr 20 - Apr 25, 2026',
      timeRange: '07:30 PM - 10:30 PM IST',
      trainerName: 'AI Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 36,000',
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
    "courseName": "Artificial Intelligence Certification Training",
    "breadcrumbName": "Artificial Intelligence Course | AI Certification Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Artificial Intelligence and Build Intelligent Systems",
    "benefits": [
      "Comprehensive AI curriculum",
      "Real-world project experience",
      "Industry expert trainers",
      "Globally recognized certification"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Artificial Intelligence Course Overview",
    "description": [
      "This Artificial Intelligence Certification Training equips you with in-depth knowledge of AI foundations, machine learning, deep learning, and intelligent systems.",
      "Gain hands-on experience with real-world applications across industries such as healthcare, finance, and technology.",
      "Build expertise in NLP, Computer Vision, and Reinforcement Learning to develop next-generation AI solutions."
    ],
    "whatIsTitle": "What is Artificial Intelligence?",
    "whatIsDescription": [
      "Artificial Intelligence (AI) is the branch of computer science that deals with building smart machines capable of performing tasks that typically require human intelligence. From voice assistants to autonomous vehicles, AI is transforming how we live and work."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Live instructor-led sessions",
      "Step-by-step lab exercises",
      "Advanced AI project mentorship",
      "Comprehensive study repositories"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Machine Learning Algorithms",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Reinforcement Learning",
      "Ensemble Techniques",
      "AI System Design"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "Enterprise AI Solutions",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized AI training programs designed to help enterprises adopt Artificial Intelligence technologies and drive innovation at scale."
  };

  const courseMetadata = {
    shortName: 'AI',
    shortNameAlt: 'Artificial Intelligence',
    fullName: 'Artificial Intelligence Certification Training',
    fullNameAlt: 'Artificial Intelligence Certification Course',
    certificateName: 'AI Engineer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your Artificial Intelligence certification opens doors to roles like AI Engineer, Machine Learning Specialist, Data Scientist, and Solution Architect across diverse high-tech industries.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Artificial Intelligence Certification Training?',
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
    "Software Developers",
    "Data Analysts",
    "Machine Learning Engineers",
    "AI Enthusiasts",
    "IT Professionals",
    "Technology Architects"
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

export default CertifiedArtificialIntelligenceForAgileLeadersTraining;
