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

const LeadingSafeCertificationTraining = () => {
  const highlights = [
    { text: "16 Hours of Extensive Instructor-Led Training" },
    { text: "Earn 16 PDUs & 16 SEUs" },
    { text: "High First-Attempt Success Rate" },
    { text: "Access to SAFe® Community Platform" },
    { text: "Official SAFe® 6.0 Courseware & SAFe Studio Access" },
    { text: "Mentorship by Certified SAFe Practice Consultants (SPCs)" },
    { text: "Training from a Platinum SPCT Partner of Scaled Agile" },
    { text: "Exam Fee Included in Course Fee" },
    { text: "Free Practice Tests with Multiple Attempts" },
    { text: "Hands-On Case Studies & Real-World Scenarios" },
  ];

  const individualBenefits = [
    {
      title: "Deep Understanding of SAFe Framework",
      description: "Gain comprehensive knowledge of Lean-Agile principles and SAFe structure.",
    },
    {
      title: "Enterprise Agile Leadership Skills",
      description: "Develop leadership capabilities to drive large-scale Agile transformations.",
    },
    {
      title: "Global Career Opportunities",
      description: "Enhance career prospects with globally recognized SAFe Agilist certification.",
    },
    {
      title: "Master PI Planning & ART Execution",
      description: "Learn how to successfully lead Agile Release Trains and conduct PI Planning.",
    },
    {
      title: "Strategic Alignment Skills",
      description: "Build confidence in aligning business strategy with execution across teams.",
    },
  ];

  const corporateBenefits = [
    {
      title: "Enterprise-Wide Agility",
      description: "Enable continuous Lean-Agile processes across the organization.",
    },
    {
      title: "Improved Business & IT Alignment",
      description: "Enhance collaboration between business and technology teams.",
    },
    {
      title: "Optimized Value Streams",
      description: "Increase productivity and delivery speed by streamlining workflows.",
    },
    {
      title: "Higher Product Quality",
      description: "Deliver consistent value and improve customer satisfaction.",
    },
    {
      title: "Culture of Innovation",
      description: "Foster adaptability and innovation across the enterprise.",
    },
  ];

  const careerStats = {
    averageIncome: "$110k - $145k",
    incomeLabel: "per annum",
    employmentGrowth: "24%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      group: [
        "Executives and Senior Managers",
        "Project and Program Managers",
        "Scrum Masters and Agile Coaches",
        "Product Owners and Product Managers",
        "Change Agents and Transformation Leaders"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand SAFe® principles and Lean-Agile mindset.",
    "Apply Agile practices across teams, programs, and portfolios.",
    "Lead Program Increment (PI) Planning effectively.",
    "Manage Agile Release Trains (ARTs).",
    "Drive digital and enterprise Agile transformation."
  ];

  const prerequisites = [
    "5+ years of professional work experience is recommended.",
    "Experience in Agile, Scrum, software development, testing, or project management is beneficial."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete the 16-hour Leading SAFe® 6.0 training with certified SPC instructors."
    },
    {
      title: "Prepare for Exam",
      description: "Review course materials and take practice assessments."
    },
    {
      title: "Take SAFe Agilist Exam",
      description: "Complete the 90-minute online exam via the SAFe Community Platform."
    },
    {
      title: "Become SAFe® Agilist Certified",
      description: "Earn your SAFe Agilist (SA) credential upon passing the exam."
    }
  ];

  const curriculumModules = [
    {
      title: "Lesson 1: Digital Age & Business Agility",
      topics: [
        "Thriving in the Digital Age",
        "SAFe® as an Operating System",
        "Core Competencies of Business Agility"
      ]
    },
    {
      title: "Lesson 2: Lean-Agile Leadership",
      topics: [
        "Lean-Agile Mindset",
        "SAFe® Core Values",
        "SAFe® Lean-Agile Principles"
      ]
    },
    {
      title: "Lesson 3: Team & Technical Agility",
      topics: [
        "High-Performing Agile Teams",
        "Built-In Quality",
        "Technical Agility Practices"
      ]
    },
    {
      title: "Lesson 4: Agile Product Delivery",
      topics: [
        "Customer-Centric Culture",
        "Design Thinking",
        "PI Planning",
        "Continuous Delivery Pipeline",
        "DevOps Integration"
      ]
    },
    {
      title: "Lesson 5: Lean Portfolio Management",
      topics: [
        "Strategic Themes",
        "Portfolio Kanban",
        "Epic Hypothesis Statements",
        "Lean Budgeting"
      ]
    },
    {
      title: "Lesson 6: Leading the Change",
      topics: [
        "Leading by Example",
        "SAFe® Implementation Roadmap",
        "Driving Organizational Change"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand SAFe Principles",
      description: "Apply Lean-Agile mindset and SAFe core principles."
    },
    {
      title: "Lead Agile Transformation",
      description: "Drive Agile adoption across enterprise levels."
    },
    {
      title: "Master PI Planning",
      description: "Plan and execute Program Increments effectively."
    },
    {
      title: "Align Strategy & Execution",
      description: "Integrate business strategy with Agile execution."
    },
    {
      title: "Oversee Agile Release Trains",
      description: "Coordinate multiple teams toward shared goals."
    },
    {
      title: "Implement Lean Portfolio Management",
      description: "Prioritize initiatives and optimize investments."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "General Course FAQs",
      "items": [
        {
          "question": "1. What is Leading SAFe® 6.0 Certification?",
          "answer": "Leading SAFe® is a foundational course that teaches the principles and practices of the Scaled Agile Framework. It prepares leaders to drive enterprise-wide Agile transformations."
        },
        {
          "question": "2. Who should attend this course?",
          "answer": "Executives, managers, consultants, and anyone involved in leading a Lean-Agile transformation in a large enterprise."
        },
        {
          "question": "3. What is the SAFe® Agilist (SA) credential?",
          "answer": "The SA credential is awarded to professionals who pass the Leading SAFe® exam, validating their ability to lead in a SAFe® environment."
        },
        {
          "question": "4. How many PDUs and SEUs will I earn?",
          "answer": "Completion of this course earns you 16 PDUs and 16 SEUs."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam & Certification FAQs",
      "items": [
        {
          "question": "1. Is the exam fee included in the course fee?",
          "answer": "Yes, the first attempt of the exam is included if taken within 30 days of course completion."
        },
        {
          "question": "2. What is the exam format?",
          "answer": "The exam is a multiple-choice, web-based assessment with 45 questions to be completed in 90 minutes."
        },
        {
          "question": "3. What is the passing score?",
          "answer": "The passing score for the SAFe® 6.0 Agilist exam is 80% (36 out of 45)."
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
    {
      title: "Globally Recognized Certification",
      description: "Earn SAFe® Agilist certification valued by global enterprises."
    },
    {
      title: "Expert SPC Instructors",
      description: "Learn from certified SAFe Practice Consultants with real-world experience."
    },
    {
      title: "Comprehensive Curriculum",
      description: "Master SAFe® 6.0 concepts with structured, hands-on modules."
    },
    {
      title: "Flexible Learning Modes",
      description: "Choose live online or corporate training formats."
    },
    {
      title: "Access to Learning Resources",
      description: "Gain access to official study materials and practice exams."
    },
    {
      title: "High Pass Success Rate",
      description: "Benefit from proven exam preparation methodologies."
    },
    {
      title: "Interactive Case Studies",
      description: "Engage in enterprise-level transformation simulations."
    },
    {
      title: "Cost-Effective Corporate Offers",
      description: "Competitive pricing with special corporate discounts."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'SCM',
      courseName: 'Leading SAFe® 6.0 Training with SAFe Agilist Certification',
      dateRange: 'Feb 28 - Mar 01, 2026',
      timeRange: '08:30 AM - 04:30 PM IST',
      trainerName: 'Expert SPC',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 49,080',
      discountedPrice: 'INR 34,356',
      discountPercentage: '30',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    courseName: "Leading SAFe® 6.0 Training with SAFe Agilist Certification",
    breadcrumbName: "Leading SAFe® 6.0 Certification Course",
    rating: "5.0",
    enrolledCount: "",
    subtitle: "Lead Enterprise Agile Transformation with SAFe® 6.0 Agilist Certification.",
    benefits: [
      "16 Hours Live Instructor-Led Training",
      "Official SAFe® Study Materials Included",
      "Exam Fee Included",
      "Access to SAFe® Community Platform",
      "Earn 16 PDUs & SEUs"
    ],
    mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Leading SAFe® 6.0 Certification Training Overview",
    description: [
      "This Leading SAFe® 6.0 course equips professionals to lead enterprise-level Agile transformations using the Scaled Agile Framework.",
      "Participants gain knowledge in Lean-Agile leadership, PI Planning, Agile Release Trains, and portfolio alignment.",
      "The course prepares candidates for the globally recognized SAFe® Agilist certification exam."
    ],
    whatIsTitle: "What is Leading SAFe® Training?",
    whatIsDescription: [
      "Leading SAFe® training provides foundational knowledge of SAFe 6.0 and prepares leaders to implement Agile practices at scale across large enterprises."
    ],
    whatsIncludedTitle: "What’s Included in the Course?",
    whatsIncludedDescription: [
      "16 hours live training",
      "Official SAFe® courseware",
      "First exam attempt included",
      "Practice tests",
      "1-year SAFe Community membership"
    ],
    skillsTitle: "Skills Covered",
    skills: [
      "Lean-Agile Leadership",
      "PI Planning",
      "Agile Release Trains",
      "Lean Portfolio Management",
      "Continuous Delivery",
      "Business Agility"
    ],
    modesTitle: "Training Modes",
    modesDescription: [
      "Live Virtual Instructor-Led Training",
      "Corporate Group Training"
    ]
  };

  const corporateData = {
    courseName: "Why Simpliaxis for Corporate?",
    label: "",
    buttonText: "Corporate Group Enquiry",
    description: "We deliver customized enterprise SAFe training programs to help organizations scale Agile effectively, align strategy with execution, and accelerate value delivery."
  };

  const courseMetadata = {
    shortName: 'Leading SAFe',
    shortNameAlt: 'Leading SAFe® 6.0',
    fullName: 'Leading SAFe® 6.0 Training with SAFe Agilist Certification',
    fullNameAlt: 'Leading SAFe® 6.0 Certification',
    certificateName: 'Leading SAFe® 6.0',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Leading SAFe® 6.0 Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Leading SAFe® 6.0 Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scrum Alliance',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Executives and Senior Managers",
    "Project and Program Managers",
    "Scrum Masters and Agile Coaches",
    "Product Owners and Product Managers",
    "Change Agents and Transformation Leaders"
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

export default LeadingSafeCertificationTraining;
