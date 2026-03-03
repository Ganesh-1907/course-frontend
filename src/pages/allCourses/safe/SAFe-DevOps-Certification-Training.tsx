
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
  CreditCard,
  UserCheck,
  Globe,
  Laptop,
  Headset,
  TrendingUp,
  Award,
  Network,
  FileText,
  Briefcase
} from "lucide-react";

const SAFEDevOpsCertificationTraining = () => {
  const highlights = [
    { "text": "16 Hours of Live Interactive Online Training", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Earn 16 PDUs & 16 SEUs", icon: <Award className="w-5 h-5" /> },
    { "text": "Comprehensive Exam Support", icon: <Headset className="w-5 h-5" /> },
    { "text": "Mock Tests for Exam Preparation", icon: <Laptop className="w-5 h-5" /> },
    { "text": "SAFe® DevOps Exam Fee Included", icon: <CreditCard className="w-5 h-5" /> },
    { "text": "Access to SAFe® Community Portal", icon: <Globe className="w-5 h-5" /> },
    { "text": "Training by Experienced SAFe® Consultants", icon: <UserCheck className="w-5 h-5" /> },
    { "text": "Official Courseware & SAFe® Studio Access", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "Delivered by Platinum SPCT Partner of Scaled Agile", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Hands-On Practical Learning Experience", icon: <TrendingUp className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Enhanced DevOps Skillset",
      "description": "Build strong DevOps knowledge and become confident in managing development and operations workflows."
    },
    {
      "title": "Global Recognition",
      "description": "SAFe® DevOps certification is globally recognized, strengthening your professional profile."
    },
    {
      "title": "Higher Earning Potential",
      "description": "Increase your salary prospects and open doors to advanced DevOps roles."
    },
    {
      "title": "Career Differentiation",
      "description": "Stand out during interviews and enhance career opportunities in Agile enterprises."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Improved Product Quality",
      "description": "Integrate quality practices across the development lifecycle for successful product delivery."
    },
    {
      "title": "Increased Productivity",
      "description": "Eliminate unnecessary delays and optimize workflow efficiency."
    },
    {
      "title": "Stronger Team Collaboration",
      "description": "Encourage open communication and shared responsibility across teams."
    },
    {
      "title": "Business Growth Enablement",
      "description": "Improve overall business functionality and accelerate value delivery."
    }
  ];

  const careerStats = {
    averageIncome: "$110k - $160k",
    incomeLabel: "per annum",
    employmentGrowth: "21%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Developers",
        "IT Operations Professionals",
        "Release Engineers",
        "Scrum Masters",
        "Agile Coaches",
        "Anyone interested in DevOps practices within SAFe®"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand the SAFe® CALMR approach.",
    "Implement Continuous Delivery Pipeline.",
    "Improve cross-team collaboration.",
    "Enable Release on Demand.",
    "Strengthen DevOps culture and automation practices."
  ];

  const prerequisites = [
    "No mandatory prerequisites required.",
    "Prior development or IT background is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Register for Simpliaxis SAFe® DevOps training delivered by certified instructors."
    },
    {
      "title": "Gain Practical Knowledge",
      "description": "Participate in workshops and hands-on exercises."
    },
    {
      "title": "Take the Exam",
      "description": "Complete the 90-minute SAFe® DevOps Practitioner exam."
    },
    {
      "title": "Get Certified",
      "description": "Score 73% or above to earn the SAFe® DevOps Practitioner certification."
    }
  ];

  const curriculumModules = [
    {
      "title": "Lesson 1: Introducing DevOps",
      "topics": [
        "DevOps fundamentals",
        "Continuous security and testing",
        "SAFe® CALMR approach"
      ]
    },
    {
      "title": "Lesson 2: Value Stream Mapping",
      "topics": [
        "Mapping value streams",
        "Analyzing development flow"
      ]
    },
    {
      "title": "Lesson 3: Continuous Exploration",
      "topics": [
        "Customer collaboration",
        "Backlog prioritization using WSJF"
      ]
    },
    {
      "title": "Lesson 4: Continuous Integration",
      "topics": [
        "Build automation",
        "End-to-end testing"
      ]
    },
    {
      "title": "Lesson 5: Continuous Deployment",
      "topics": [
        "Deploying to production",
        "Monitoring and recovery"
      ]
    },
    {
      "title": "Lesson 6: Release on Demand",
      "topics": [
        "Delivering business value",
        "Feedback and relentless improvement"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Develop DevOps Mindset",
      "description": "Create a culture of shared responsibility across teams."
    },
    {
      "title": "Build Continuous Delivery Pipeline",
      "description": "Deliver solutions at the speed of business."
    },
    {
      "title": "Enable Agile Product Delivery",
      "description": "Align DevOps with Lean Enterprise principles."
    },
    {
      "title": "Strengthen ART Execution",
      "description": "Support Agile Release Trains with DevOps integration."
    },
    {
      "title": "Deliver Release on Demand",
      "description": "Provide business value aligned with customer needs."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "SAFe® DevOps Certification FAQs",
      "items": [
        {
          "question": "1. What is SAFe® DevOps?",
          "answer": "SAFe® DevOps is a set of practices within the Scaled Agile Framework that enables faster value delivery through automation, integration, and collaboration."
        },
        {
          "question": "2. What is the exam format?",
          "answer": "The exam consists of 45 multiple-choice questions with a duration of 90 minutes. Passing score is 73% (33 correct answers)."
        },
        {
          "question": "3. What is the retake policy?",
          "answer": "First retake immediately, second after 10 days, third after 30 days. Retake fee is $50."
        },
        {
          "question": "4. How long is certification valid?",
          "answer": "Certification is valid for one year."
        },
        {
          "question": "5. What is the renewal cost?",
          "answer": "Annual renewal fee is $195."
        },
        {
          "question": "6. Is SAFe® DevOps worth it?",
          "answer": "Yes, it enhances career growth, salary prospects, and DevOps expertise."
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
          "question": "2. Is refund possible?",
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
          "answer": "Yes, live instructor-led online sessions are available."
        },
        {
          "question": "2. Do I receive SAFe® membership?",
          "answer": "First-time SAFe participants receive one-year membership; others receive 60-day access."
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
      "title": "Global Recognition",
      "description": "Recognized by leading certification authorities worldwide."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from certified and experienced SAFe® professionals."
    },
    {
      "title": "Flexible Learning Modes",
      "description": "Choose from online, classroom, or corporate training."
    },
    {
      "title": "Lifetime Learning Access",
      "description": "Access recordings and materials post-training."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by professionals and enterprises globally."
    },
    {
      "title": "End-to-End Certification Support",
      "description": "Receive assistance before, during, and after certification."
    },
    {
      "title": "Interactive Sessions",
      "description": "Engage in practical exercises and real-world case discussions."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Access multiple globally recognized certification programs."
    }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'SDP',
      courseName: 'SAFe® 6.0 DevOps (SDP) Certification Training',
      dateRange: 'Mar 25 - Mar 26, 2026',
      timeRange: '09:00 AM - 05:00 PM EST',
      trainerName: 'Expert SAFe Consultant',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 39,500',
      discountPercentage: '12',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "SAFe® 6.0 DevOps (SDP) Certification Training",
    "breadcrumbName": "SAFe® 6.0 DevOps Certification",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Accelerate Value Delivery with SAFe® DevOps Practitioner Certification.",
    "benefits": [
      "16-Hour Live Training",
      "Exam Fee Included",
      "16 PDUs & SEUs",
      "Official SAFe® Courseware"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "SAFe® 6.0 DevOps Certification Overview",
    "description": [
      "This program equips professionals with DevOps practices aligned with SAFe® to streamline value delivery.",
      "Learn Continuous Exploration, Integration, Deployment, Testing, and Release on Demand.",
      "Understand the CALMR approach to foster shared responsibility and automation."
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
    "description": "Tailored enterprise DevOps training designed to align people, processes, and technology for accelerated business growth."
  };

  const courseMetadata = {
    shortName: 'SAFe DevOps',
    shortNameAlt: 'SDP',
    fullName: 'SAFe® 6.0 DevOps (SDP) Certification Training',
    fullNameAlt: 'SAFe® 6.0 DevOps Practitioner Certification',
    certificateName: 'SAFe® DevOps Practitioner',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® DevOps Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® DevOps Certification Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'SAFe® DevOps Practitioner (SDP)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as a',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "Developers",
    "IT Operations Professionals",
    "Release Engineers",
    "Scrum Masters",
    "Agile Coaches",
    "Anyone interested in DevOps practices within SAFe®"
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

export default SAFEDevOpsCertificationTraining;
