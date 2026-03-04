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

const IntroductionToArtificialIntelligenceMachineLearning = () => {
  const highlights = [
    { text: "Learn the fundamentals of AI and ML and apply them to business optimization", icon: <Globe className="w-5 h-5" /> },
    { text: "Earn a career-valuable certification from a leading training institute", icon: <Award className="w-5 h-5" /> },
    { text: "Hands-on lab sessions and practical project work included", icon: <Laptop className="w-5 h-5" /> },
    { text: "Industry-expert designed curriculum aligned with global standards", icon: <FileText className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong AI Foundation",
      "description": "Build a clear understanding of Artificial Intelligence and Machine Learning concepts."
    },
    {
      "title": "Career Clarity",
      "description": "Explore AI career paths and identify specialization opportunities."
    },
    {
      "title": "Practical Exposure",
      "description": "Apply AI techniques through case studies and real-world scenarios."
    },
    {
      "title": "Industry Recognition",
      "description": "Earn a certification to validate your AI and ML knowledge."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Business Optimization",
      "description": "Leverage AI to enhance operational efficiency and data-driven decisions."
    },
    {
      "title": "Innovation Enablement",
      "description": "Empower teams to implement AI use cases across departments."
    },
    {
      "title": "Competitive Advantage",
      "description": "Adopt AI-driven strategies to stay ahead in the market."
    },
    {
      "title": "Upskilled Workforce",
      "description": "Train employees in AI fundamentals to reduce external dependency."
    }
  ];

  const careerStats = {
    averageIncome: "$95,000 - $140,000",
    incomeLabel: "AI Specialist Salary",
    employmentGrowth: "40%",
    growthLabel: "AI & ML Job Growth"
  };

  const attendees = [
    {
      "group": [
        "Beginners interested in AI",
        "Students exploring AI careers",
        "IT professionals",
        "Business analysts",
        "Technology enthusiasts"
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
    "Understand core AI and ML concepts.",
    "Identify real-world AI use cases.",
    "Analyze industry applications of AI.",
    "Gain awareness of AI growth trends.",
    "Apply foundational AI techniques in projects."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic understanding of technology concepts is helpful.",
    "Open to beginners and professionals."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Course",
      "description": "Register and join the AI & ML foundation program.",
      "color": "hsl(var(--primary))"
    },
    {
      "title": "Attend Sessions",
      "description": "Complete the required training hours.",
      "color": "#F59E0B"
    },
    {
      "title": "Participate in Labs",
      "description": "Engage in practical and case-study based learning.",
      "color": "#10B981"
    },
    {
      "title": "Receive Certification",
      "description": "Earn a lifetime-valid AI & ML certification.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      "title": "Introduction to Artificial Intelligence",
      "topics": ["Definition of AI", "History of AI", "AI vs ML"]
    },
    {
      "title": "Applications of Artificial Intelligence",
      "topics": ["AI in Healthcare", "AI in Finance", "AI in Retail"]
    },
    {
      "title": "Industries Using AI and Its Growth",
      "topics": ["Market trends", "AI adoption statistics"]
    },
    {
      "title": "Case Studies of AI",
      "topics": ["Real-world AI implementations"]
    },
    {
      "title": "AI Use Cases",
      "topics": ["Predictive analytics", "Automation", "Recommendation systems"]
    },
    {
      "title": "AI Techniques and Methods",
      "topics": ["Supervised learning", "Unsupervised learning", "Neural networks basics"]
    },
    {
      "title": "Future of AI",
      "topics": ["AI advancements", "Ethics in AI", "Emerging technologies"]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand AI Basics",
      "description": "Learn key definitions and principles of Artificial Intelligence."
    },
    {
      "title": "Explore Machine Learning",
      "description": "Understand supervised and unsupervised learning fundamentals."
    },
    {
      "title": "Industry Applications",
      "description": "Identify how AI is applied across various industries."
    },
    {
      "title": "AI Case Studies",
      "description": "Analyze real-world AI implementations."
    },
    {
      "title": "Future Trends",
      "description": "Explore the evolving landscape of AI technologies."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AI & ML FAQs",
      "items": [
        {
          "question": "1. Who is a certified AI and ML professional?",
          "answer": "A professional who understands AI and ML fundamentals and applies them in real-world scenarios."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "There are no strict prerequisites; this is a beginner-friendly course."
        },
        {
          "question": "3. What are the benefits of this course?",
          "answer": "It builds foundational AI knowledge and supports career growth."
        },
        {
          "question": "4. How do I attain certification?",
          "answer": "Enroll, attend required hours, and complete the course successfully."
        },
        {
          "question": "5. How long is the certificate valid?",
          "answer": "The certificate is valid for a lifetime."
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
        { "question": "17. Can beginners join?", "answer": "Yes, beginner-friendly course." },
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
    { "title": "Expert Trainers", "description": "Learn from certified AI professionals." },
    { "title": "Flexible Learning", "description": "Multiple training modes available." },
    { "title": "Lifetime Access", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals worldwide." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world discussions." },
    { "title": "Wide Course Portfolio", "description": "Access multiple globally recognized certifications." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'AIML',
      courseName: 'Introduction to AI and ML Certification Training',
      dateRange: 'Apr 15 - Apr 18, 2026',
      timeRange: '08:00 PM - 10:00 PM IST',
      trainerName: 'AI Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 15,000',
      discountedPrice: 'INR 12,000',
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
    "courseName": "Introduction to AI and ML Certification Training",
    "breadcrumbName": "Introduction to AI and ML Course | AI & ML Training for Beginners",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Build Your Foundation in Artificial Intelligence and Machine Learning",
    "benefits": [
      "Industry-aligned curriculum",
      "Hands-on case studies",
      "Lifetime-valid certification",
      "Beginner-friendly course"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AI & ML Foundation Course Overview",
    "description": [
      "This beginner-friendly AI and ML course introduces you to core concepts and real-world applications.",
      "Explore how Artificial Intelligence is transforming industries and driving innovation.",
      "Build a strong foundation to pursue advanced AI and ML specializations."
    ],
    "whatIsTitle": "What is AI & ML?",
    "whatIsDescription": [
      "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. Machine Learning (ML) is a subset of AI that provides systems the ability to automatically learn and improve from experience without being explicitly programmed."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Interactive live sessions",
      "Practical case studies",
      "Industry-aligned study material",
      "24/7 learning support"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "AI fundamentals",
      "Machine Learning basics",
      "AI use cases",
      "Industry applications",
      "Emerging AI trends"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "AI in Business Training",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized AI training programs tailored to enterprise innovation and transformation needs."
  };

  const courseMetadata = {
    shortName: 'AI & ML',
    shortNameAlt: 'AI and ML Foundation',
    fullName: 'Introduction to AI and ML Certification Training',
    fullNameAlt: 'Introduction to Artificial Intelligence and Machine Learning (AI and ML)',
    certificateName: 'AI Professional',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your AI & ML certification provides a solid foundation for advanced specializations and opens doors to roles like AI Analyst, Business Intelligence Consultant, and Tech Innovation Specialist.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AI and ML Foundation training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis',
      certificateType: 'Certificate of Achievement',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Beginners interested in AI",
    "Students exploring AI careers",
    "IT professionals",
    "Business analysts",
    "Technology enthusiasts"
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

export default IntroductionToArtificialIntelligenceMachineLearning;
