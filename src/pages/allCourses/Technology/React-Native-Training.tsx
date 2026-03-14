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

const ReactNativeTraining = () => {
  const highlights = [
    { text: "Master native mobile app development from fundamentals to advanced concepts.", icon: <Monitor className="w-5 h-5" /> },
    { text: "Learn from experienced and certified React Native trainers.", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Stay connected with mentors and a developer community.", icon: <Globe className="w-5 h-5" /> },
    { text: "Interactive knowledge-sharing sessions with real-time doubt resolution.", icon: <Users className="w-5 h-5" /> },
    { text: "Hands-on live projects and real-world case studies.", icon: <Briefcase className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Cross-Platform Development Expertise",
      "description": "Build high-performance mobile applications for both Android and iOS using a single codebase."
    },
    {
      "title": "Hands-on Practical Learning",
      "description": "Work on real-world mobile app projects covering authentication, navigation, and API integration."
    },
    {
      "title": "Career Advancement",
      "description": "Gain industry-recognized React Native certification to enhance job opportunities."
    },
    {
      "title": "Community & Mentor Support",
      "description": "Stay connected with trainers and developers for continuous learning."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Reduced Development Costs",
      "description": "Develop cross-platform applications using a shared codebase to minimize project costs."
    },
    {
      "title": "Faster App Deployment",
      "description": "Accelerate app release cycles using reusable components and efficient workflows."
    },
    {
      "title": "Skilled Development Teams",
      "description": "Upskill employees with modern mobile app development technologies."
    },
    {
      "title": "Scalable Mobile Solutions",
      "description": "Enable teams to build scalable, secure, and maintainable mobile applications."
    }
  ];

  const careerStats = {
    averageIncome: "$105,000 - $145,000",
    incomeLabel: "React Native Developer Salary",
    employmentGrowth: "28%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      "group": [
        "Mobile App Developers",
        "Frontend Developers",
        "Full Stack Developers",
        "Software Engineers",
        "Students & Fresh Graduates",
        "Entrepreneurs building mobile apps"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Develop cross-platform mobile applications using React Native.",
    "Implement authentication using Firebase.",
    "Integrate APIs and manage app navigation.",
    "Deploy applications to Google Play Store and Apple App Store.",
    "Build scalable and secure mobile solutions."
  ];

  const prerequisites = [
    "Basic knowledge of JavaScript.",
    "Understanding of React fundamentals is helpful.",
    "Basic mobile development knowledge is an advantage but not mandatory."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in React Native Training",
      "description": "Register for the React Native certification program.",
      "color": "hsl(var(--primary))"
    },
    {
      "title": "Attend Instructor-Led Sessions",
      "description": "Complete structured training covering core and advanced topics.",
      "color": "#F59E0B"
    },
    {
      "title": "Complete Projects & Assignments",
      "description": "Work on hands-on projects including authentication and deployment.",
      "color": "#10B981"
    },
    {
      "title": "Receive Certification",
      "description": "Earn your lifetime-valid React Native certification upon completion.",
      "color": "#8B5CF6"
    }
  ];

  const curriculumModules = [
    { "title": "Introduction to React Native", "topics": ["What is React Native?", "React vs React Native"] },
    { "title": "Overview of React Native", "topics": ["Architecture Overview", "Component-Based Development"] },
    { "title": "Getting Started & Installation Setup", "topics": ["Environment Setup", "Expo & CLI"] },
    { "title": "Core React Native Components", "topics": ["View, Text, Image", "State & Props"] },
    { "title": "Style Sheets & Layouts", "topics": ["Flexbox", "Responsive Design"] },
    { "title": "React Native APIs", "topics": ["AsyncStorage", "Networking APIs"] },
    { "title": "Deployment to App Stores", "topics": ["Android Deployment", "iOS Deployment"] },
    { "title": "Navigation in React Native", "topics": ["Stack Navigation", "Tab Navigation"] },
    { "title": "Firebase & Authentication", "topics": ["Firebase Setup", "User Authentication"] },
    { "title": "Authentication Processing", "topics": ["Login & Signup Flows", "Token Management"] },
    { "title": "Integration with Android & iOS", "topics": ["Native Modules", "Platform-Specific Code"] }
  ];

  const learningObjectives = [
    {
      "title": "Understand React Native Architecture",
      "description": "Learn core concepts, components, and lifecycle methods."
    },
    {
      "title": "Build Cross-Platform Apps",
      "description": "Develop mobile apps that run on Android and iOS using one codebase."
    },
    {
      "title": "Implement Authentication",
      "description": "Use Firebase for secure user authentication and database integration."
    },
    {
      "title": "API & Navigation Management",
      "description": "Handle API integration and navigation flows efficiently."
    },
    {
      "title": "Deploy Mobile Applications",
      "description": "Publish apps to Google Play Store and Apple App Store."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "React Native FAQs",
      "items": [
        {
          "question": "1. Who is a certified React Native professional?",
          "answer": "A certified React Native professional has the skills to design and develop innovative cross-platform mobile applications using the React Native framework."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "No mandatory prerequisites, but knowledge of JavaScript and basic mobile app development is helpful."
        },
        {
          "question": "3. What are the benefits of React Native certification?",
          "answer": "High demand in the job market, cross-platform development skills, and improved career opportunities."
        },
        {
          "question": "4. How do I attain certification?",
          "answer": "Attend formal training and complete required assessments to receive certification."
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
        { "question": "10. Corporate training?", "answer": "Yes, customized programs available." },
        { "question": "11. Instructor expertise?", "answer": "Certified professionals with industry experience." },
        { "question": "12. Discounts?", "answer": "Available periodically." },
        { "question": "13. Affordable?", "answer": "Yes, competitively priced." },
        { "question": "14. Why choose Simpliaxis?", "answer": "Expert trainers and global recognition." },
        { "question": "15. Lifetime access?", "answer": "Yes." },
        { "question": "16. Support?", "answer": "24/7 assistance available." },
        { "question": "17. Career growth?", "answer": "High demand for React Native developers." },
        { "question": "18. Course objective?", "answer": "Build scalable cross-platform mobile apps." },
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
    { "title": "Expert Trainer", "description": "Learn from experienced React Native professionals." },
    { "title": "Flexible Learning", "description": "Multiple learning formats available." },
    { "title": "Lifetime Access", "description": "Access course materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by global professionals." },
    { "title": "End-to-End Assistance", "description": "Complete support throughout training." },
    { "title": "Interactive Training", "description": "Hands-on live coding and real-world case studies." },
    { "title": "Wide Range of Courses", "description": "Access multiple globally recognized certifications." }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "React Native Certification Training",
    "breadcrumbName": "React Native Training | React Native Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Build Cross-Platform Mobile Apps with React Native",
    "benefits": [
      "Hands-on live projects",
      "Cross-platform development mastery",
      "Firebase authentication integration",
      "App Store & Play Store deployment guidance"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "React Native Course Overview",
    "description": [
      "This React Native Certification Training provides comprehensive knowledge of building cross-platform mobile applications using a single codebase.",
      "Learn to integrate APIs, implement authentication, and deploy apps to Android and iOS platforms.",
      "Gain practical experience through real-time projects and industry case studies."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "Skills Covered",
    "skills": [
      "React Native Architecture",
      "Cross-Platform App Development",
      "Firebase Authentication",
      "Navigation & Routing",
      "API Integration",
      "Mobile App Deployment"
    ],
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Customized React Native corporate training programs designed to build scalable mobile solutions and enhance enterprise app development capabilities."
  };

  const courseMetadata = {
    shortName: 'React Native',
    shortNameAlt: 'React Native',
    fullName: 'React Native Certification Training',
    fullNameAlt: 'React Native Certification Course',
    certificateName: 'React Native Developer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your React Native Training, you can explore high-demand roles such as Mobile App Developer, Frontend Developer, and Full Stack Developer across global technology sectors.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for React Native Training?',
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
    "Mobile App Developers",
    "Frontend Developers",
    "Full Stack Developers",
    "Software Engineers",
    "Students & Fresh Graduates",
    "Entrepreneurs building mobile apps"
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

export default ReactNativeTraining;
