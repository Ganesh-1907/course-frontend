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

const SafePracticeConsultantSPCCertificationTraining = () => {
  const highlights = [
    { text: "32 Hours Live Instructor-Led Training" },
    { text: "Earn 32 PDUs & 32 SEUs" },
    { text: "Training Delivered by Certified SPCTs" },
    { text: "Exam Fee Included in Training Cost" },
    { text: "Mentorship from Agile Industry Experts" },
    { text: "One-Year SAFe® Community Membership" },
    { text: "High First-Attempt Pass Rate" },
    { text: "Access to Practice Tests" },
    { text: "Official Courseware & SAFe® Studio Access" },
    { text: "Extensive Exam Preparation Assistance" }
  ];

  const individualBenefits = [
    {
      title: "Authorized SAFe® Trainer Status",
      description: "Gain eligibility to teach SAFe® courses and certify professionals after earning SPC certification."
    },
    {
      title: "Enterprise Transformation Leadership",
      description: "Lead large-scale Agile transformations including Value Stream Mapping, ART launch, and PI planning."
    },
    {
      title: "Global Recognition & Credibility",
      description: "Earn a prestigious SPC certification badge recognized worldwide."
    },
    {
      title: "Exclusive SPC Toolkits & Resources",
      description: "Access SAFe® CoPilot tools, SPC community resources, and official implementation toolkits."
    },
    {
      title: "Expanded Professional Network",
      description: "Join the global SAFe® community and collaborate with enterprise Agile leaders."
    }
  ];

  const corporateBenefits = [
    {
      title: "Build Internal Transformation Capability",
      description: "Develop in-house SPC expertise to reduce reliance on external consultants."
    },
    {
      title: "Standardized SAFe Implementation",
      description: "Ensure consistent SAFe terminology and practices across the organization."
    },
    {
      title: "Improved Agile Delivery",
      description: "Enhance program execution through expert-led value-stream mapping and PI planning."
    },
    {
      title: "Sustained Enterprise Agility",
      description: "Embed Lean-Agile practices supported by ongoing SPC coaching."
    },
    {
      title: "Stronger Change Leadership",
      description: "Empower leaders to drive continuous improvement and long-term agility."
    }
  ];

  const careerStats = {
    averageIncome: "$120k - $180k",
    incomeLabel: "per annum",
    employmentGrowth: "25%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      group: [
        "Agile Coaches",
        "Transformation Leaders",
        "Project & Program Managers",
        "Consultants implementing SAFe®",
        "Enterprise Change Agents"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Implement SAFe® at enterprise scale.",
    "Launch and coach Agile Release Trains (ARTs).",
    "Lead Lean Portfolio Management initiatives.",
    "Train and certify SAFe® professionals.",
    "Drive business agility through structured transformation."
  ];

  const prerequisites = [
    "Minimum 5 years of professional experience in relevant domains.",
    "At least 3 years of Agile experience.",
    "Prior SAFe® certification (e.g., Leading SAFe®) recommended."
  ];

  const certificationSteps = [
    {
      title: "Attend the 4-Day Training",
      description: "Complete the 32-hour SPC training delivered by certified SPCT instructors."
    },
    {
      title: "Attempt the Certification Exam",
      description: "Take the 120-minute online exam consisting of 60 multiple-choice questions."
    },
    {
      title: "Pass the Exam",
      description: "Score 80% or higher to earn the SPC credential."
    },
    {
      title: "Receive Certification & Digital Badge",
      description: "Get your official SPC certificate and digital badge from Scaled Agile."
    }
  ];

  const curriculumModules = [
    { "title": "Thriving in the Digital Age", "topics": ["Business Agility", "SAFe® Core Competencies"] },
    { "title": "Lean-Agile Leadership", "topics": ["SAFe® Core Values", "Lean-Agile Mindset"] },
    { "title": "Team & Technical Agility", "topics": ["Cross-Functional Teams", "Built-In Quality"] },
    { "title": "Agile Product Delivery", "topics": ["Customer-Centricity", "PI Planning", "DevOps"] },
    { "title": "Lean Portfolio Management", "topics": ["Portfolio Strategy", "Lean Budgets"] },
    { "title": "Leading Change", "topics": ["Implementation Roadmap", "Change Leadership"] },
    { "title": "Launching ARTs", "topics": ["Value Streams", "ART Launch"] },
    { "title": "Coaching ART Execution", "topics": ["Inspect & Adapt", "Performance Improvement"] },
    { "title": "Accelerating Business Agility", "topics": ["Continuous Learning Culture", "Organizational Agility"] }
  ];

  const learningObjectives = [
    {
      "title": "Apply SAFe® Principles",
      "description": "Implement Lean-Agile, DevOps, and scaling practices across enterprises."
    },
    {
      "title": "Lead Transformations",
      "description": "Coach organizations through structured SAFe® adoption."
    },
    {
      "title": "Launch Agile Release Trains",
      "description": "Plan, execute, and sustain ARTs effectively."
    },
    {
      "title": "Optimize Value Streams",
      "description": "Align strategy with execution for maximum business value."
    },
    {
      "title": "Drive Continuous Improvement",
      "description": "Establish sustainable Lean-Agile cultures."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "General SPC FAQs",
      "items": [
        {
          "question": "1. What is SAFe® SPC Certification?",
          "answer": "SPC certification designates you as a SAFe Practice Consultant authorized to implement SAFe and train others."
        },
        {
          "question": "2. What is the duration of SPC training?",
          "answer": "The SPC training spans 4 days (32 hours) of live instructor-led sessions."
        },
        {
          "question": "3. Who should attend SPC training?",
          "answer": "Agile coaches, consultants, leaders, and professionals leading enterprise Agile transformations."
        },
        {
          "question": "4. Is community access included?",
          "answer": "Yes, SPC certification includes one-year SAFe® Community membership."
        },
        {
          "question": "5. How long is SPC certification valid?",
          "answer": "The SPC certification is valid for one year and requires annual renewal."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam FAQs",
      "items": [
        {
          "question": "1. What is the exam format?",
          "answer": "The exam consists of 60 multiple-choice questions to be completed within 120 minutes."
        },
        {
          "question": "2. What is the passing score?",
          "answer": "Candidates must score 80% or higher to pass the SPC certification exam."
        },
        {
          "question": "3. Are retakes allowed?",
          "answer": "Yes, retakes are allowed after waiting periods and payment of additional fees."
        },
        {
          "question": "4. Is the exam online?",
          "answer": "Yes, the SPC exam is conducted online via the official SAFe® platform."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Enrollment FAQs",
      "items": [
        {
          "question": "1. Is the exam fee included?",
          "answer": "Yes, the first exam attempt is included in the training fee."
        },
        {
          "question": "2. Can I attend the training online?",
          "answer": "Yes, live virtual training is available globally."
        },
        {
          "question": "3. Are installment payments available?",
          "answer": "Flexible payment options are available upon request."
        }
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

  const courseWhySimpliaxis = [
    { "title": "Authorized Scaled Agile Partner", "description": "Trusted Platinum SPCT Partner delivering official SPC training." },
    { "title": "Expert SPCT Trainers", "description": "Learn from globally recognized transformation leaders." },
    { "title": "Interactive Learning Model", "description": "Engage in real-world case studies and simulations." },
    { "title": "Comprehensive Exam Support", "description": "Mock tests, revision guidance, and mentorship provided." },
    { "title": "Flexible Learning Options", "description": "Choose online or corporate group formats." },
    { "title": "Hands-On Transformation Experience", "description": "Practice real enterprise implementation scenarios." },
    { "title": "Globally Recognized Credential", "description": "Earn one of the most prestigious SAFe® certifications." },
    { "title": "Career Acceleration", "description": "Unlock enterprise Agile leadership roles worldwide." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'SPC',
      courseName: 'SAFe® 6.0 Practice Consultant (SPC) Certification Training',
      dateRange: 'Feb 28 - Mar 03, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert SPCT',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 1,20,000',
      discountedPrice: 'INR 95,000',
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
    "courseName": "SAFe® 6.0 Practice Consultant (SPC) Certification Training",
    "breadcrumbName": "Implementing SAFe® with SPC Certification",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Lead Enterprise Agile Transformations with SPC Certification.",
    "benefits": [
      "32 Hours Live Training",
      "Exam Fee Included",
      "Earn 32 PDUs & SEUs",
      "Official SAFe® Courseware",
      "One-Year SAFe® Community Membership"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Implementing SAFe® Practice Consultant Certification Overview",
    "description": [
      "This SPC certification equips professionals to lead large-scale Agile transformations using the SAFe® framework.",
      "Gain expertise in coaching, training, and implementing SAFe® at enterprise scale."
    ],
    "whatIsTitle": "What is SPC Certification?",
    "whatIsDescription": [
      "SPC certification qualifies professionals to implement SAFe®, coach enterprises, and deliver official SAFe® training."
    ],
    "whatsIncludedTitle": "What’s Included?",
    "whatsIncludedDescription": [
      "4 Days Live Training",
      "Official Courseware",
      "Practice Exams",
      "SAFe® Studio Access",
      "Community Membership"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Enterprise Agile Coaching",
      "ART Launch & Facilitation",
      "Lean Portfolio Management",
      "Change Leadership",
      "Business Agility Implementation"
    ],
    "modesTitle": "Training Modes",
    "modesDescription": [
      "Live Virtual Training",
      "Corporate Group Training"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide customized SPC training programs that enable enterprises to build internal Agile transformation capability and scale SAFe® effectively."
  };

  const courseMetadata = {
    shortName: 'SAFe SPC',
    shortNameAlt: 'SPC',
    fullName: 'SAFe® 6.0 Practice Consultant (SPC) Certification Training',
    fullNameAlt: 'Implementing SAFe® with SPC Certification',
    certificateName: 'SAFe® 6.0 Practice Consultant',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® Practice Consultant Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® Practice Consultant Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile',
      certificateType: 'SAFe® Practice Consultant (SPC)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as a',
      signer1Role: 'SAFe Founder',
      signer2Role: 'Chief Methodologist',
    },
  };

  const commonAttendeesList = [
    "Agile Coaches",
    "Transformation Leaders",
    "Project & Program Managers",
    "Consultants implementing SAFe®",
    "Enterprise Change Agents"
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
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.whatsIncludedDescription.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.skillsTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.skills.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                {overviewContent.modesTitle}
              </h3>
              <ul className="list-disc pl-5 space-y-2">
                {overviewContent.modesDescription.map((item, i) => (
                  <li key={i}>{item}</li>
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

export default SafePracticeConsultantSPCCertificationTraining;
