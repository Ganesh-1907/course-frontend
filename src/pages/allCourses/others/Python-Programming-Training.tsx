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

const PythonProgrammingTraining = () => {
  const highlights = [
    { "text": "Gain knowledge of Python coding best practices.", icon: <Star className="w-5 h-5" /> },
    { "text": "In-depth hands-on training for Python programming.", icon: <Laptop className="w-5 h-5" /> },
    { "text": "Practice modules covering core Python concepts such as operators, control flow, syntax, functions, and indentation.", icon: <FileText className="w-5 h-5" /> },
    { "text": "Achieve an industry-recognized certificate upon course completion.", icon: <Award className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Strong Coding Foundation",
      "description": "Master Python fundamentals including syntax, operators, and control structures."
    },
    {
      "title": "Practical Exposure",
      "description": "Work on real-world use cases such as web scraping and data processing."
    },
    {
      "title": "Career Growth",
      "description": "Python skills open opportunities in web development, data science, automation, and AI."
    },
    {
      "title": "Industry Recognition",
      "description": "Earn a certification that validates your programming expertise."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Skilled Workforce",
      "description": "Build capable Python developers within your organization."
    },
    {
      "title": "Automation & Efficiency",
      "description": "Leverage Python for automation and data-driven solutions."
    },
    {
      "title": "Scalable Development",
      "description": "Develop scalable applications using modern Python frameworks."
    },
    {
      "title": "Customized Corporate Training",
      "description": "Tailored training programs to meet enterprise requirements."
    }
  ];

  const careerStats = {};

  const attendees = [
    {
      "group": [
        "Beginner Programmers",
        "Software Developers",
        "Automation Engineers",
        "Data Analysts",
        "IT Professionals",
        "Students & Graduates"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand core Python programming concepts.",
    "Apply Python in real-world application development.",
    "Use libraries like NumPy and Django.",
    "Write clean, structured, and efficient code.",
    "Build logical problem-solving skills."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic programming knowledge is helpful but not required."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Register for the Python Programming Certification Training.",
      "color": "bg-primary"
    },
    {
      "title": "Attend Instructor Sessions",
      "description": "Complete structured training sessions with expert trainers.",
      "color": "bg-orange-500"
    },
    {
      "title": "Complete Practice Modules",
      "description": "Work on exercises and real-world scenarios.",
      "color": "bg-green-500"
    },
    {
      "title": "Receive Certification",
      "description": "Earn your industry-recognized certification upon completion.",
      "color": "bg-purple-500"
    }
  ];

  const curriculumModules = [
    {
      "title": "Python Programming Curriculum",
      "topics": [
        "Python Syntax & Indentation",
        "Operators & Expressions",
        "Control Flow Statements",
        "Functions & Modules",
        "Object-Oriented Programming",
        "Working with Libraries",
        "Web Scraping Basics",
        "Data Processing with NumPy",
        "Introduction to Django"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Python Fundamentals",
      "description": "Learn syntax, operators, and program structure."
    },
    {
      "title": "Develop Logical Thinking",
      "description": "Strengthen problem-solving using loops and conditions."
    },
    {
      "title": "Work with Frameworks",
      "description": "Get exposure to Django and data-related libraries."
    },
    {
      "title": "Build Real Applications",
      "description": "Create simple web and automation projects."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Python Certification FAQs",
      "items": [
        {
          "question": "1. What is a Python certification?",
          "answer": "Python certification validates your ability to implement Python for tasks such as web scraping using Django, data mining using NumPy, and building real-world applications."
        },
        {
          "question": "2. What are the prerequisites to attend Python training?",
          "answer": "There are no mandatory prerequisites, though basic programming knowledge is helpful."
        },
        {
          "question": "3. What are the benefits of Python certification?",
          "answer": "Python certification enhances job opportunities, validates coding skills, and increases salary potential. Python is widely used by companies like Google, Amazon, and Netflix."
        },
        {
          "question": "4. What will I gain from Python training?",
          "answer": "You gain practical coding skills, real-world project exposure, and career opportunities across web development, data science, automation, finance, security testing, and more."
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
        { "question": "18. Course objective?", "answer": "Build strong Python programming expertise." },
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

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Validity of Certification',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Python Programming Certification Training",
    "breadcrumbName": "Python Programming Certification | Python Programming Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Python and Build Real-World Applications",
    "benefits": [
      "Hands-on Practical Learning",
      "Industry-Recognized Certification",
      "Framework Exposure",
      "Career-Focused Training"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Python Programming Course Overview",
    "description": [
      "This Python Programming Certification Training provides in-depth knowledge of Python core concepts and real-world applications.",
      "Learn syntax, operators, functions, object-oriented programming, and work with frameworks like Django and NumPy.",
      "The course is designed to help professionals and beginners build strong coding foundations."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Python Syntax",
      "Control Flow",
      "Functions & Modules",
      "Object-Oriented Programming",
      "Web Scraping",
      "Data Processing"
    ],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We offer customized corporate Python training programs to build skilled development teams and improve organizational efficiency."
  };

  const courseMetadata = {
    shortName: 'Python',
    shortNameAlt: 'Python Programming',
    fullName: 'Python Programming Certification Training',
    fullNameAlt: 'Python Programming Training',
    certificateName: 'Python Developer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your Python Programming certification opens doors to various career paths, from web development to data science, and ensures you are industry-ready with a solid coding foundation.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Python Programming Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis Aligned',
      certificateType: 'Certificate of Programming Excellence',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Python Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Beginner Programmers",
    "Software Developers",
    "Automation Engineers",
    "Data Analysts",
    "IT Professionals",
    "Students & Graduates"
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
      ltpLabel: 'Global LTP of Scrum Alliance',
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
          categoryName="others"
          categoryLink="/category/others"
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

export default PythonProgrammingTraining;
