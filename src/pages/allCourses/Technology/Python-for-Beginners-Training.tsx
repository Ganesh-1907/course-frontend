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

const PythonforBeginnersTraining = () => {
  const highlights = [
    { "text": "Improve coding skills and develop the habit of writing clean and effective code.", icon: <Settings className="w-5 h-5" /> },
    { "text": "Learn to use popular frameworks such as Django and NumPy.", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Access project work and practical exercises.", icon: <FileText className="w-5 h-5" /> },
    { "text": "Gain insights from expert-led case studies.", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "Develop real-world applications using Python.", icon: <Laptop className="w-5 h-5" /> },
    { "text": "24/7 support for all your queries.", icon: <Headset className="w-5 h-5" /> },
    { "text": "8 hours of beginner-friendly training designed specifically for new learners.", icon: <Star className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong Programming Foundation",
      "description": "Build a solid understanding of Python fundamentals, syntax, and logic building."
    },
    {
      "title": "Hands-on Practical Learning",
      "description": "Work on exercises, mini-projects, and real-world case studies."
    },
    {
      "title": "Career Opportunities",
      "description": "Python is widely used in web development, data science, AI, and automation."
    },
    {
      "title": "Framework Exposure",
      "description": "Get introduced to popular Python libraries and frameworks like Django and NumPy."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Skilled Development Teams",
      "description": "Train teams in Python fundamentals for automation and application development."
    },
    {
      "title": "Improved Productivity",
      "description": "Use Python’s simplicity to develop efficient and maintainable solutions."
    },
    {
      "title": "Versatile Application Development",
      "description": "Enable teams to work across domains such as web, data, and scripting."
    },
    {
      "title": "Cost-Effective Solutions",
      "description": "Leverage open-source Python tools to reduce software development costs."
    }
  ];

  const careerStats = {
    averageIncome: "$85,000 - $120,000",
    incomeLabel: "Junior Python Developer Salary",
    employmentGrowth: "22%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      "group": [
        "Beginners in Programming",
        "Students & Fresh Graduates",
        "Software Developers",
        "Automation Engineers",
        "Data Enthusiasts",
        "Career Switchers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Python fundamentals and syntax.",
    "Apply object-oriented programming concepts.",
    "Develop small real-world applications.",
    "Work with data structures and loops.",
    "Build logic for solving programming problems."
  ];

  const prerequisites = [
    "No prior programming experience required.",
    "Basic computer knowledge is helpful."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Python Training",
      "description": "Register for the Python for Beginners certification course.",
      "color": "hsl(var(--primary))"
    },
    {
      "title": "Attend Instructor-Led Sessions",
      "description": "Complete 8 hours of structured beginner training.",
      "color": "#F59E0B"
    },
    {
      "title": "Complete Exercises & Case Studies",
      "description": "Participate in practical sessions and assignments.",
      "color": "#10B981"
    },
    {
      "title": "Receive Certification",
      "description": "Earn your lifetime-valid Python certification upon completion.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    {
      "title": "Python for Beginners Training Curriculum",
      "topics": [
        "Introduction to Python",
        "History of Python",
        "Installation and Setup",
        "Data Structures and Control Loops",
        "Object-Oriented Programming",
        "Variables and Data Types",
        "Functions and Classes",
        "Logic Building",
        "Case Studies"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Python Basics",
      "description": "Learn syntax, variables, data types, and operators."
    },
    {
      "title": "Apply OOP Concepts",
      "description": "Understand classes, objects, and modular programming."
    },
    {
      "title": "Work with Data Structures",
      "description": "Use lists, dictionaries, tuples, and sets effectively."
    },
    {
      "title": "Build Logical Thinking",
      "description": "Develop problem-solving skills using loops and conditions."
    },
    {
      "title": "Develop Real Applications",
      "description": "Create beginner-level real-world Python programs."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Python FAQs",
      "items": [
        {
          "question": "1. Who is a Python certified professional?",
          "answer": "A Python certified professional is an individual with strong knowledge and practical skills in Python programming."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "No specific prerequisites; basic programming knowledge helps but is not mandatory."
        },
        {
          "question": "3. What is the duration of the course?",
          "answer": "The Python training course is 8 hours designed for beginners."
        },
        {
          "question": "4. What are the benefits of Python certification?",
          "answer": "Python certification improves career prospects, offers practical experience, and provides knowledge in libraries such as Machine Learning, Hadoop, and more."
        },
        {
          "question": "5. How do I obtain certification?",
          "answer": "Attend the training and complete course requirements."
        },
        {
          "question": "6. Certification validity?",
          "answer": "Lifetime validity."
        },
        {
          "question": "7. Renewal required?",
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
        { "question": "11. Instructor expertise?", "answer": "Certified Python professionals." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Yes, competitively priced." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers and global recognition." },
        { "question": "15. Lifetime access?", "answer": "Yes." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand across industries." },
        { "question": "18. Course objective?", "answer": "Build a strong Python programming foundation." },
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
    { "title": "Expert Trainer", "description": "Learn from experienced Python professionals." },
    { "title": "Flexible Learning", "description": "Multiple learning formats available." },
    { "title": "Lifetime Access", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by global professionals." },
    { "title": "End-to-End Assistance", "description": "Complete support throughout training." },
    { "title": "Interactive Training", "description": "Hands-on real-world coding sessions." },
    { "title": "Wide Range of Courses", "description": "Access multiple globally recognized certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'PBT',
      courseName: 'Python For Beginners Training',
      dateRange: 'Apr 10 - Apr 12, 2026',
      timeRange: '08:00 PM - 11:00 PM IST',
      trainerName: 'Python Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 25,000',
      discountedPrice: 'INR 20,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Python For Beginners Training",
    "breadcrumbName": "Python for Beginners Training & Certification Course | Simpliaxis",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Start Your Programming Journey with Python",
    "benefits": [
      "8 Hours Beginner-Friendly Training",
      "Hands-on Exercises & Case Studies",
      "Framework Introduction (Django, NumPy)",
      "Lifetime Certification Validity"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Python Course Overview",
    "description": [
      "Python is one of the most popular and beginner-friendly programming languages.",
      "This course covers Python fundamentals, data structures, OOP concepts, and practical case studies.",
      "Build a strong foundation for careers in web development, data science, and automation."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Python Syntax",
      "OOP Concepts",
      "Data Structures",
      "Control Flow",
      "Logic Building"
    ],
  };

  const corporateData = {
    "courseName": "Python For Beginners Training",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized Python corporate training programs designed to build strong programming foundations and improve enterprise development capabilities."
  };

  const courseMetadata = {
    shortName: 'Python',
    shortNameAlt: 'Python',
    fullName: 'Python For Beginners Training',
    fullNameAlt: 'Python for Beginners Training & Certification Course',
    certificateName: 'Python Professional',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Python For Beginners Training, you can explore high-demand roles such as Junior Software Developer, Automation Tester, and Data Analyst across various industries.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Python For Beginners Training?',
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
    "Beginners in Programming",
    "Students & Fresh Graduates",
    "Software Developers",
    "Automation Engineers",
    "Data Enthusiasts",
    "Career Switchers"
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

export default PythonforBeginnersTraining;
