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

const SafeForTeamsCertificationTraining = () => {
  const highlights = [
    { text: "Complete 16 Hours Live Online Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Earn 16 PDUs & 16 SEUs", icon: <Award className="w-5 h-5" /> },
    { text: "Comprehensive Exam Support", icon: <FileText className="w-5 h-5" /> },
    { text: "Access to Official Courseware & SAFe® Studio", icon: <BookOpen className="w-5 h-5" /> },
    { text: "High First-Attempt Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { text: "Training by Platinum SPCT Partner of Scaled Agile", icon: <UserCheck className="w-5 h-5" /> },
    { text: "Access to SAFe® Community Portal", icon: <Globe className="w-5 h-5" /> },
    { text: "Unlimited Practice Test Access", icon: <Laptop className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Deep SAFe Knowledge",
      description: "Understand Lean-Agile principles and how SAFe operates at enterprise scale."
    },
    {
      title: "Strong PI Planning Skills",
      description: "Gain hands-on experience in iteration planning and Program Increment execution."
    },
    {
      title: "Improved Team Collaboration",
      description: "Work effectively within Agile Release Trains (ARTs)."
    },
    {
      title: "Career Growth",
      description: "Enhance your professional credibility with globally recognized SAFe certification."
    }
  ];

  const corporateBenefits = [
    {
      title: "Enterprise Agility",
      description: "Enable teams to align with organizational strategy and value streams."
    },
    {
      title: "Improved Delivery Predictability",
      description: "Implement structured PI planning and incremental delivery."
    },
    {
      title: "Cross-Team Alignment",
      description: "Strengthen collaboration across Agile Release Trains."
    },
    {
      title: "Quality & Built-In Excellence",
      description: "Adopt Lean-Agile engineering practices for continuous improvement."
    }
  ];

  const careerStats = {
    averageIncome: "$105k - $140k",
    incomeLabel: "per annum",
    employmentGrowth: "28%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      group: [
        "Developers",
        "Testers",
        "Business Analysts",
        "Scrum Masters",
        "Agile Team Members",
        "Product Owners"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand SAFe principles and Lean-Agile mindset.",
    "Participate effectively in PI Planning.",
    "Execute iterations with built-in quality.",
    "Collaborate within Agile Release Trains.",
    "Deliver incremental business value."
  ];

  const prerequisites = [
    "Basic knowledge of Agile principles.",
    "Familiarity with Scrum, XP, or Kanban is recommended."
  ];

  const certificationSteps = [
    {
      title: "Register for Training",
      description: "Enroll in an accredited SAFe® for Teams training program."
    },
    {
      title: "Attend 2-Day Live Training",
      description: "Participate in interactive sessions and practical exercises."
    },
    {
      title: "Attempt the Exam",
      description: "Take the 90-minute SAFe® for Teams certification exam."
    },
    {
      title: "Earn Certification",
      description: "Achieve 80% or above to receive SAFe® Practitioner (SP) certification."
    }
  ];

  const curriculumModules = [
    {
      title: "SAFe® Framework Fundamentals",
      topics: [
        "Introduction to SAFe®",
        "Lean-Agile Mindset",
        "Building an Agile Team"
      ]
    },
    {
      title: "Iteration & PI Execution",
      topics: [
        "Planning the Iteration",
        "Executing the Iteration",
        "Executing the Program Increment",
        "Practicing SAFe"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Understand SAFe Principles",
      description: "Learn Lean-Agile mindset and SAFe core competencies."
    },
    {
      title: "Participate in PI Planning",
      description: "Develop confidence in Program Increment planning events."
    },
    {
      title: "Deliver Value Iteratively",
      description: "Apply Agile engineering and built-in quality practices."
    },
    {
      title: "Collaborate Across ARTs",
      description: "Improve communication and alignment across enterprise teams."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "SAFe for Teams FAQs",
      "items": [
        {
          "question": "1. Who is a Certified SAFe® 6.0 Practitioner?",
          "answer": "A SAFe® Practitioner works in Agile Release Trains using Scrum, XP, and Kanban to deliver incremental value."
        },
        {
          "question": "2. What is the exam format?",
          "answer": "The exam consists of 45 multiple-choice questions to be completed in 90 minutes with a passing score of 80%."
        },
        {
          "question": "3. How long is certification valid?",
          "answer": "Certification is valid for one year and requires annual renewal."
        },
        {
          "question": "4. How many PDUs & SEUs can I earn?",
          "answer": "You can earn up to 16 PDUs and 16 SEUs."
        },
        {
          "question": "5. Is SAFe® for Teams worth it?",
          "answer": "Yes, it enhances Agile proficiency and enterprise-level collaboration skills."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Is the course refundable?",
          "answer": "Refunds are not available, but rescheduling is permitted."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "General Training FAQs",
      "items": [
        {
          "question": "1. Is online training available?",
          "answer": "Yes, this course is delivered via live virtual sessions."
        },
        {
          "question": "2. Do I receive SAFe® community membership?",
          "answer": "Yes, participants receive SAFe® community platform access."
        }
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
    { "title": "Global Recognition", "description": "Recognized worldwide by Scaled Agile Inc." },
    { "title": "Expert Trainers", "description": "Delivered by certified SAFe® instructors." },
    { "title": "Flexible Learning", "description": "Live virtual and corporate formats available." },
    { "title": "Lifetime Learning Support", "description": "Access study materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by enterprises globally." },
    { "title": "End-to-End Assistance", "description": "Support from enrollment to certification renewal." },
    { "title": "Interactive Sessions", "description": "Hands-on workshops and case studies." },
    { "title": "Wide Course Portfolio", "description": "Comprehensive SAFe®, Agile, and Scrum programs." }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'SP',
      courseName: 'SAFe® for Teams 6.0 (SP) Certification Training',
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
    "courseName": "SAFe® for Teams 6.0 (SP) Certification Training",
    "breadcrumbName": "SAFe 6 for Teams Certification | SAFe Practitioner (SP)",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Become a Certified SAFe® Practitioner and Drive Enterprise Agility.",
    "benefits": [
      "16 Hours Live Interactive Training",
      "Exam Fee Included",
      "Earn 16 PDUs & SEUs",
      "Access to SAFe® Studio"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "SAFe® for Teams (SP) Certification Overview",
    "description": [
      "This 2-day SAFe® for Teams course enables participants to work effectively within Agile Release Trains.",
      "Learn Lean-Agile principles, iteration execution, PI planning, and incremental value delivery."
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
    "courseName": "Why Corporate Opt Us",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide enterprise-focused SAFe training tailored to align teams with strategic objectives and deliver measurable business value."
  };

  const courseMetadata = {
    shortName: 'SAFe SP',
    shortNameAlt: 'SP',
    fullName: 'SAFe® for Teams 6.0 (SP) Certification Training',
    fullNameAlt: 'SAFe® 6.0 Practitioner (SP) Certification',
    certificateName: 'SAFe® Practitioner',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® Practitioner Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® for Teams Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'SAFe® 6 Practitioner (SP)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Trainer',
      signer2Role: 'Executive Director',
    },
  };

  const commonAttendeesList = [
    "Developers",
    "Testers",
    "Business Analysts",
    "Scrum Masters",
    "Agile Team Members",
    "Product Owners"
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
      ltpLabel: 'Scaled Agile Global Partner',
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
          categoryName="safe"
          categoryLink="/category/safe"
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

export default SafeForTeamsCertificationTraining;
