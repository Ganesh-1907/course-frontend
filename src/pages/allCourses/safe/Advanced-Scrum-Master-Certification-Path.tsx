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
  BookOpen,
  TrendingUp,
  FileText,
  Briefcase,
  Globe,
  Headset,
  Award,
  Network,
  CreditCard,
  UserCheck
} from "lucide-react";

const AdvancedScrumMasterCertificationPath = () => {
  const highlights = [
    { "text": "Modular and Blended Learning Approach", icon: <Monitor className="w-5 h-5" /> },
    { "text": "High Course Completion Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { "text": "Mentorship by Agile Industry Experts", icon: <Users className="w-5 h-5" /> },
    { "text": "Exam Fee Included in Course Fee", icon: <CreditCard className="w-5 h-5" /> },
    { "text": "Comprehensive Exam Support", icon: <FileText className="w-5 h-5" /> },
    { "text": "Approved Courseware & SAFe Studio Access", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "Training by Leading SPCs and SPCTs", icon: <Award className="w-5 h-5" /> },
    { "text": "Hands-On Training Experience", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Free Practice Tests with Unlimited Attempts", icon: <FileText className="w-5 h-5" /> },
    { "text": "Delivered by Simpliaxis – A Platinum SPCT Partner", icon: <Globe className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Advanced Coaching & Facilitation Skills",
      "description": "Develop expertise in guiding Agile teams, resolving challenges, and enabling effective decision-making."
    },
    {
      "title": "Conflict Resolution Mastery",
      "description": "Learn proven techniques to manage conflicts and strengthen team collaboration."
    },
    {
      "title": "Flow Optimization Expertise",
      "description": "Analyze and optimize ART and team flow using SAFe’s proven flow accelerators."
    },
    {
      "title": "Global Recognition & Career Growth",
      "description": "Earn a globally recognized credential that enhances professional authority and marketability."
    },
    {
      "title": "Real-World Agile Application",
      "description": "Apply Agile practices through case studies and hands-on learning experiences."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Improved Team Efficiency",
      "description": "Boost Agile team performance through enhanced collaboration and self-organization."
    },
    {
      "title": "Optimized ART Execution",
      "description": "Leverage SAFe’s Eight Flow Accelerators to improve speed and delivery outcomes."
    },
    {
      "title": "Stronger Agile Transformation Leadership",
      "description": "Empower leaders with advanced facilitation skills to guide enterprise Agile transformations."
    },
    {
      "title": "Enhanced Conflict Management",
      "description": "Enable Scrum Masters to resolve conflicts effectively and maintain team harmony."
    },
    {
      "title": "Culture of Continuous Improvement",
      "description": "Foster adaptability, innovation, and an Agile mindset across teams."
    }
  ];

  const careerStats = {
    averageIncome: "$130k - $170k",
    incomeLabel: "per annum",
    employmentGrowth: "24%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Experienced Scrum Masters",
        "SAFe Scrum Masters (SSM)",
        "CSM / PSM Certified Professionals",
        "Agile Coaches",
        "Release Train Engineers",
        "Agile Leaders driving SAFe transformation"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Develop advanced facilitation and coaching techniques.",
    "Implement SAFe Agile Release Train best practices.",
    "Optimize team performance through flow measurement.",
    "Foster high-performing Agile teams.",
    "Strengthen Agile leadership capabilities."
  ];

  const prerequisites = [
    "Prior experience as a Scrum Master.",
    "Hold foundational Scrum certification (SAFe SSM, CSM, or PSM).",
    "Basic understanding of Agile and SAFe methodologies."
  ];

  const certificationSteps = [
    {
      "title": "Meet Prerequisites",
      "description": "Ensure foundational Scrum certification before beginning the Advanced path."
    },
    {
      "title": "Complete Learning Modules",
      "description": "Finish self-paced modules and blended Advanced Facilitator training."
    },
    {
      "title": "Participate in Learning Lab",
      "description": "Engage in peer-learning sessions to apply advanced Scrum Master techniques."
    },
    {
      "title": "Earn Advanced Certification",
      "description": "Receive SAFe® Advanced Scrum Master certification upon successful completion."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Advanced Facilitation & Coaching",
      "topics": [
        "Role of an Advanced Scrum Master",
        "Expert facilitation skills",
        "Conflict coaching techniques",
        "Collaborative decision-making"
      ]
    },
    {
      "title": "Module 2: SAFe’s Eight Flow Accelerators",
      "topics": [
        "Measuring and accelerating flow",
        "Optimizing ART performance",
        "Identifying execution blockers",
        "Continuous improvement practices"
      ]
    },
    {
      "title": "Module 3: Building High-Performing Teams",
      "topics": [
        "Encouraging team ownership",
        "Leadership practices for Agile success",
        "Improving collaboration",
        "Creating self-organized teams"
      ]
    },
    {
      "title": "Module 4: Real-World Agile Applications",
      "topics": [
        "Case-study-based exercises",
        "Hands-on Agile scenarios",
        "ART-level problem-solving",
        "Exam preparation strategies"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Advanced Facilitation & Coaching",
      "description": "Resolve conflicts, improve collaboration, and enhance Agile decision-making."
    },
    {
      "title": "Mastering Flow Accelerators",
      "description": "Measure and accelerate ART and team performance."
    },
    {
      "title": "Building High-Performing Teams",
      "description": "Enable self-organization and innovation in Agile environments."
    },
    {
      "title": "Real-World Agile Application",
      "description": "Apply advanced Scrum Master practices through practical scenarios."
    },
    {
      "title": "Driving Continuous Improvement",
      "description": "Scale Agile effectively across enterprise environments."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "ASM Program FAQs",
      "items": [
        {
          "question": "1. What is the Advanced Scrum Master Certification Path?",
          "answer": "A modular and blended learning program designed to enhance facilitation, coaching, and Agile transformation capabilities."
        },
        {
          "question": "2. How long does it take to complete?",
          "answer": "Approximately 13–15 hours including self-paced modules, workshops, and peer-learning labs."
        },
        {
          "question": "3. What credentials will I receive?",
          "answer": "SAFe® Advanced Scrum Master Certification, micro-credential, and SAFe skills certificates."
        },
        {
          "question": "4. How will this benefit my career?",
          "answer": "It validates advanced Scrum Master expertise in enterprise SAFe environments."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "ASM Exam FAQs",
      "items": [
        {
          "question": "1. What is the exam pattern?",
          "answer": "20 multiple-choice questions to be completed in 60 minutes."
        },
        {
          "question": "2. Is the first attempt included?",
          "answer": "Yes, the first attempt is included if taken within 30 days of course completion."
        },
        {
          "question": "3. What is the retake policy?",
          "answer": "Immediate first retake, 10-day wait for second, 30-day wait for subsequent attempts."
        },
        {
          "question": "4. What is the retake cost?",
          "answer": "$50 per additional attempt beyond the first included attempt."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Is refund available?",
          "answer": "Refunds are not available, but rescheduling is permitted."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "General Training FAQs",
      "items": [
        {
          "question": "1. Is online training available?",
          "answer": "Yes, live instructor-led online sessions are available."
        },
        {
          "question": "2. Do I receive certification after completion?",
          "answer": "Yes, certification is awarded after completing modules and passing the exam."
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
    { "title": "Global Recognition", "description": "Globally recognized SAFe® certification program." },
    { "title": "Expert Trainers", "description": "Delivered by certified SPCs and SPCTs." },
    { "title": "Flexible Learning", "description": "Blended model with self-paced and instructor-led modules." },
    { "title": "Lifetime Learning Access", "description": "Access to SAFe Studio and course materials." },
    { "title": "Proven Track Record", "description": "Trusted by global enterprises." },
    { "title": "End-to-End Assistance", "description": "Complete exam and certification guidance." },
    { "title": "Interactive Training", "description": "Hands-on exercises and real-world simulations." },
    { "title": "Comprehensive Agile Portfolio", "description": "Access multiple SAFe and Agile certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'ASM',
      courseName: 'Advanced Scrum Master Certification Path',
      dateRange: 'May 10 - May 11, 2026',
      timeRange: '09:00 AM - 05:00 PM EST',
      trainerName: 'Expert SPC/SPCT',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 50,000',
      discountedPrice: 'INR 42,500',
      discountPercentage: '15',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Advanced Scrum Master Certification Path",
    "breadcrumbName": "Advanced Scrum Master Certification Path | ASM Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Advance Your Scrum Master Career with SAFe® Expertise.",
    "benefits": [
      "Blended Modular Learning",
      "Exam Fee Included",
      "Free Practice Tests",
      "SAFe® Studio Access"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Advanced Scrum Master Certification Path Overview",
    "description": [
      "This program enhances advanced Scrum Master facilitation and leadership capabilities.",
      "Focused on SAFe frameworks and ART performance optimization.",
      "Combines expert-led training with hands-on practical application."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "",
    "whatsIncludedDescription": [],
    "skillsTitle": "",
    "skills": [],
    "modesTitle": "",
    "modesDescription": []
  };

  const corporateData = {
    "courseName": "Why Simpliaxis Is the First Choice for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Enterprise-focused SAFe training delivered by Platinum SPCT Partner to drive Lean-Agile transformation."
  };

  const courseMetadata = {
    shortName: 'ASM',
    shortNameAlt: 'Advanced Scrum Master',
    fullName: 'Advanced Scrum Master Certification Path',
    fullNameAlt: 'Advanced Scrum Master Training',
    certificateName: 'SAFe® Advanced Scrum Master',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Advanced Scrum Master certification path, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Advanced Scrum Master Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'SAFe® Advanced Scrum Master',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "Experienced Scrum Masters",
    "SAFe Scrum Masters (SSM)",
    "CSM / PSM Certified Professionals",
    "Agile Coaches",
    "Release Train Engineers",
    "Agile Leaders driving SAFe transformation"
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
      ltpLabel: 'Platinum SPCT Partner',
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

              {overviewContent.whatIsTitle && (
                <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                  {overviewContent.whatIsTitle}
                </h3>
              )}
              {overviewContent.whatIsDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              {overviewContent.whatsIncludedTitle && (
                <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                  {overviewContent.whatsIncludedTitle}
                </h3>
              )}
              {overviewContent.whatsIncludedDescription.length > 0 && (
                <ul className="list-disc pl-5 space-y-2">
                  {overviewContent.whatsIncludedDescription.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {overviewContent.skillsTitle && (
                <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                  {overviewContent.skillsTitle}
                </h3>
              )}
              {overviewContent.skills.length > 0 && (
                <ul className="list-disc pl-5 space-y-2">
                  {overviewContent.skills.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {overviewContent.modesTitle && (
                <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                  {overviewContent.modesTitle}
                </h3>
              )}
              {overviewContent.modesDescription.length > 0 && (
                <ul className="list-disc pl-5 space-y-2">
                  {overviewContent.modesDescription.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
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

export default AdvancedScrumMasterCertificationPath;
