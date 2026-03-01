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
import CourseWhySimpliaxis from "@/components/courses/CourseWhySimpliaxis";

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

const ScrumAtScaleCertificationTraining = () => {
  const highlights = [
    { text: 'Training, Coaching & Consulting by Globally Acclaimed Trainers' },
    { text: '2-Day Comprehensive Interactive Training' },
    { text: 'Monthly Webinars & E-Books for Continuous Learning' },
    { text: 'Access to Tutorials and Sample Papers by Industry Experts' },
    { text: 'Join a Global Community of Scrum Professionals' },
    { text: 'Learn from Experts Implementing Scrum@Scale in Real Projects' },
    { text: 'Hands-On Activities and Real-Time Simulations' },
  ];

  const individualBenefits = [
    {
      title: 'Enterprise-Level Scaling Knowledge',
      description: 'Learn how to scale Scrum effectively across multiple teams in large organizations.',
    },
    {
      title: 'Improved Cross-Team Collaboration',
      description: 'Develop skills to coordinate work across multiple Scrum Teams efficiently.',
    },
    {
      title: 'Leadership Development',
      description: 'Strengthen your ability to lead at scale using Scrum@Scale principles.',
    },
    {
      title: 'Global Recognition',
      description: 'Earn a widely respected Scrum@Scale certification.',
    },
    {
      title: 'Career Advancement',
      description: 'Expand opportunities in enterprise Agile coaching and transformation roles.',
    },
  ];

  const corporateBenefits = [
    {
      title: 'Improved Organizational Agility',
      description: 'Enable enterprise-wide agility with a structured scaling framework.',
    },
    {
      title: 'Better Strategic Alignment',
      description: 'Align product vision and execution across departments.',
    },
    {
      title: 'Higher Productivity',
      description: 'Improve efficiency and reduce bottlenecks in large-scale development.',
    },
    {
      title: 'Enhanced Transparency',
      description: 'Improve visibility across teams with structured scaling events.',
    },
    {
      title: 'Sustainable Growth',
      description: 'Build an Agile operating system that supports long-term business growth.',
    },
  ];

  const careerStats = {
    averageIncome: '$120k-150k',
    incomeLabel: 'per annum',
    employmentGrowth: '58%',
    growthLabel: '(Projected)',
  };

  const attendees = [
    {
      group: [
        'Scrum Masters',
        'Product Owners',
        'Agile Coaches',
        'Enterprise Leaders',
        'Transformation Leaders',
        'Scrum Practitioners'
      ],
    },
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
    'Understand the Scrum@Scale framework structure.',
    'Learn how to scale Scrum across multiple teams.',
    'Improve cross-team collaboration.',
    'Implement scaled Scrum events and roles.',
    'Align enterprise strategy with Agile execution.',
  ];

  const prerequisites = [
    'No mandatory prerequisites.',
    'Basic understanding of Scrum is recommended.',
    'CSM/CSPO certification or prior Scrum experience is beneficial.',
  ];

  const certificationSteps = [
    {
      title: 'Attend Training',
      description: 'Complete the 2-day Scrum@Scale training from an authorized training provider.',
    },
    {
      title: 'Receive Exam Link',
      description: 'Get access to the certification assessment after course completion.',
    },
    {
      title: 'Take the Assessment',
      description: 'Complete the open-book exam and score at least 75%.',
    },
    {
      title: 'Get Certified',
      description: 'Earn your Scrum@Scale certification, valid for 2 years.',
    },
  ];

  const curriculumModules = [
    {
      title: "Preface to the Scrum@Scale Guide",
      topics: []
    },
    {
      title: "Purpose of the Scrum@Scale Guide",
      topics: []
    },
    {
      title: "The Components of Scrum@Scale",
      topics: [
        "Values-Driven Culture",
        "Installing an Agile Operating System",
        "Scaling the Teams",
        "The Team Process",
        "Scrum of Scrums (SoS)",
        "Scaling in Large Organizations",
        "Scaled Events and Roles",
        "Scaled Daily Scrum (SDS)",
        "Scaled Retrospective"
      ]
    },
    {
      title: "The Scrum Master Cycle – Coordinating the 'How'",
      topics: [
        "Scrum of Scrums Master (SoSM)",
        "Executive Action Team (EAT)",
        "EAT Backlog & Responsibilities",
        "Continuous Improvement",
        "Cross-Team Coordination",
        "Delivery"
      ]
    },
    {
      title: "The Product Owner Cycle – Coordinating the 'What'",
      topics: [
        "Chief Product Owner (CPO)",
        "Scaling the Product Owner Team",
        "Executive MetaScrum (EMS)",
        "Strategic Vision",
        "Backlog Prioritization",
        "Backlog Refinement",
        "Release Planning"
      ]
    },
    {
      title: "Connecting PO and SM Cycles",
      topics: [
        "Product & Release Feedback",
        "Metrics & Transparency",
        "Organizational Design Considerations"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Enterprise Scrum Implementation",
      description: "Learn how to implement Scrum@Scale across multiple teams."
    },
    {
      title: "Scaled Events & Roles",
      description: "Understand the scaled roles and ceremonies in Scrum@Scale."
    },
    {
      title: "Strategic Alignment",
      description: "Align product vision with enterprise-level execution."
    },
    {
      title: "Impediment Removal",
      description: "Use EAT to remove systemic organizational impediments."
    },
    {
      title: "Transparency & Metrics",
      description: "Measure performance and improve transparency across teams."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "Certification FAQs",
      items: []
    },
    {
      id: "category_2",
      label: "Payment FAQs",
      items: []
    },
    {
      id: "category_3",
      label: "General FAQs",
      items: []
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

  const courseWhySimpliaxis = [
    {
      "title": "Global Recognition",
      "description": "Scrum@Scale certification is globally recognized across industries."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from experienced professionals implementing Scrum@Scale in real environments."
    },
    {
      "title": "Flexible Learning",
      "description": "Available in live virtual and corporate formats."
    },
    {
      "title": "Lifetime Learning Support",
      "description": "Access to webinars, materials, and community support."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted training provider with enterprise Agile expertise."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Support provided before, during, and after training."
    },
    {
      "title": "Interactive Sessions",
      "description": "Hands-on simulations and real-world case discussions."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Access to multiple Agile, Scrum, and enterprise scaling certifications."
    }
  ] ;
  const sidePanelSchedules = [
    {
      courseCode: 'S@S',
      courseName: 'Scrum@Scale™ Certification Training',
      dateRange: 'Mar 15 - Mar 16, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Expert Scaled Consultant',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 55,000',
      discountedPrice: 'INR 45,833',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Scrum@Scale™ Certification Training",
    "breadcrumbName": "Scrum@Scale Certification | Certified Scrum@Scale Practitioner Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Scale Scrum effectively across the enterprise with the Scrum@Scale framework.",
    "benefits": [
      "2-Day Live Instructor-Led Training",
      "Enterprise Scaling Expertise",
      "Open-Book Certification Exam",
      "75% Passing Score",
      "Valid for 2 Years"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Scrum@Scale™ Certification Overview",
    "description": [
      "Scrum@Scale is a framework that enables organizations to scale Scrum across multiple teams working toward a shared product vision.",
      "This 2-day interactive training provides practical insights into implementing an Agile operating system at enterprise scale.",
      "Participants learn to coordinate Scrum Master and Product Owner cycles for improved strategic alignment and delivery."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in This Course?",
    "whatsIncludedDescription": [
      "Scrum@Scale™ Practitioner Courseware",
      "Access to the Scrum@Scale Practitioners Community",
      "Certification Assessment Retake",
      "Official Scrum@Scale Practitioner Certificate"
    ],
    "skillsTitle": "Skills Covered in S@S Training",
    "skills": [
      "Strategic Alignment",
      "Organizational Design",
      "Cross-Team Coordination",
      "Scaling Backlog Management",
      "Executive Leadership Liaison"
    ],
    "modesTitle": "Training Delivery Modes",
    "modesDescription": [
      "Live Online Training",
      "Onsite/In-Person Training",
      "Corporate Personalized Coaching"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporate Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver enterprise-focused Scrum@Scale training tailored to organizational needs, enabling strategic alignment, improved agility, and sustainable scaling of Agile practices."
  };

  const courseMetadata = {
    shortName: 'S@S',
    shortNameAlt: 'S@S',
    fullName: 'Scrum@Scale™ Practitioner (S@SP)',
    fullNameAlt: 'Scrum@Scale Certification',
    certificateName: 'Scrum@Scale Practitioner',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Scrum@Scale™ Practitioner certification, a wide selection of career options will open up, enabling you to lead large-scale transformations and high-performing networks of teams.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for Scrum@Scale Certification Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scrum Inc.',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    'Scrum Masters',
    'Product Owners',
    'Agile Coaches',
    'Managers & Executives',
    'Project/Program Managers',
    'Team Leads',
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
      ltpLabel: 'Global LTP of Scrum Inc.',
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
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {overviewContent.whatsIncludedDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.skillsTitle}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {overviewContent.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-blue-500">✔</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.modesTitle}
              </h3>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                {overviewContent.modesDescription.map((mode, i) => (
                  <li key={i}>{mode}</li>
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
              <CourseWhySimpliaxis features={courseWhySimpliaxis} />
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

export default ScrumAtScaleCertificationTraining;
