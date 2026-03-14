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

const AchievingResponsibleAICourse = () => {
  const highlights = [
    { "text": "4 Hours Instructor-Led Live Training Session", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Training Delivered by Top SPC & SPCTs", icon: <Users className="w-5 h-5" /> },
    { "text": "High Course Completion Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { "text": "Hands-On Practical Experience", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Wide Networking Opportunity", icon: <Globe className="w-5 h-5" /> },
    { "text": "Real-World Practical Knowledge", icon: <BookOpen className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Specialized Responsible AI Expertise",
      "description": "Stand out in the job market with specialized knowledge in Responsible AI implementation within SAFe environments."
    },
    {
      "title": "Improved Career Opportunities",
      "description": "Increase your chances of landing leadership roles by demonstrating your ability to implement AI responsibly."
    },
    {
      "title": "Ethical AI Integration Skills",
      "description": "Gain deep knowledge to integrate AI into Agile practices while ensuring ethical standards."
    },
    {
      "title": "Risk Mitigation Capability",
      "description": "Learn how to identify and mitigate AI-related risks while ensuring regulatory compliance."
    },
    {
      "title": "Global Credential Recognition",
      "description": "Earn a globally acknowledged SAFe® Micro-Credential that enhances professional credibility."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Responsible AI Implementation",
      "description": "Minimize legal, ethical, and operational risks by adopting structured Responsible AI practices."
    },
    {
      "title": "Alignment with Organizational Values",
      "description": "Ensure AI initiatives align with enterprise governance and compliance standards."
    },
    {
      "title": "Sustainable Innovation",
      "description": "Balance AI innovation with ethical responsibility to enable sustainable growth."
    },
    {
      "title": "Unified AI Adoption Strategy",
      "description": "Establish a consistent and coordinated AI adoption framework across departments."
    },
    {
      "title": "Enhanced Market Reputation",
      "description": "Strengthen organizational trust and brand reputation through responsible AI leadership."
    }
  ];

  const careerStats = {
    averageIncome: "$120k - $160k",
    incomeLabel: "per annum",
    employmentGrowth: "22%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Agile Coaches",
        "SAFe Practice Consultants",
        "Release Train Engineers",
        "Portfolio Managers",
        "Business Leaders",
        "AI & Technology Leaders"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand core Responsible AI principles.",
    "Align Responsible AI with SAFe Core Values.",
    "Integrate AI governance into Lean Portfolio Management.",
    "Evaluate AI risks and compliance requirements.",
    "Develop a Responsible AI action roadmap."
  ];

  const prerequisites = [
    "No formal prerequisites required.",
    "Familiarity with Agile practices is recommended.",
    "Understanding of SAFe principles is beneficial.",
    "Basic knowledge of AI concepts is advised."
  ];

  const certificationSteps = [
    {
      "title": "Enroll",
      "description": "Register for the Achieving Responsible AI with SAFe Micro-Credential course."
    },
    {
      "title": "Attend Training",
      "description": "Participate in the 4-hour instructor-led interactive session."
    },
    {
      "title": "Complete Assessment",
      "description": "Submit assigned assessments demonstrating understanding of Responsible AI principles."
    },
    {
      "title": "Earn Micro-Credential",
      "description": "Receive the official SAFe® Responsible AI Micro-Credential."
    }
  ];

  const curriculumModules = [
    {
      "title": "Identifying Stakeholders",
      "topics": [
        "Map key stakeholders",
        "Define AI governance roles",
        "Address stakeholder concerns"
      ]
    },
    {
      "title": "Evaluating Responsible AI Policies",
      "topics": [
        "Assess AI governance frameworks",
        "Identify policy improvements",
        "Ensure enterprise alignment"
      ]
    },
    {
      "title": "Communicating the Need for Responsible AI",
      "topics": [
        "Craft a Responsible AI value pitch",
        "Align AI initiatives with business strategy",
        "Drive stakeholder buy-in"
      ]
    },
    {
      "title": "Writing a Responsible AI Epic Hypothesis",
      "topics": [
        "Define Responsible AI initiatives",
        "Draft SAFe Epic hypotheses",
        "Scope cross-value stream efforts"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Responsible AI",
      "description": "Learn foundational Responsible AI principles and enterprise importance."
    },
    {
      "title": "Connect SAFe Core Values with Responsible AI",
      "description": "Align Responsible AI initiatives with SAFe principles and governance."
    },
    {
      "title": "Portfolio-Level Integration",
      "description": "Incorporate Responsible AI into Lean Portfolio Management strategy."
    },
    {
      "title": "ART & Team Impact Analysis",
      "description": "Assess Responsible AI implications on Agile Release Trains and teams."
    },
    {
      "title": "Risk Minimization",
      "description": "Develop structured approaches to mitigate AI risks."
    },
    {
      "title": "Responsible AI Action Planning",
      "description": "Create a roadmap for implementing Responsible AI within your organization."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Responsible AI Course FAQs",
      "items": [
        {
          "question": "1. What is Achieving Responsible AI with SAFe?",
          "answer": "It is a focused SAFe® Micro-Credential course designed to integrate Responsible AI practices into Agile and enterprise environments."
        },
        {
          "question": "2. What are key Responsible AI considerations?",
          "answer": "Transparency, fairness, accountability, data privacy, governance, and bias mitigation."
        },
        {
          "question": "3. Is there an exam?",
          "answer": "No formal exam is required. Completion is based on participation and assessment submission."
        },
        {
          "question": "4. Will I receive SAFe® community membership?",
          "answer": "Membership duration follows Scaled Agile guidelines depending on previous SAFe course history."
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
          "question": "2. Is refund available?",
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
          "question": "2. Do I receive certification after completion?",
          "answer": "Yes, you receive an official SAFe® Responsible AI Micro-Credential."
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
    {
      "title": "Global Recognition",
      "description": "Recognized within the global SAFe® ecosystem."
    },
    {
      "title": "Expert Trainers",
      "description": "Delivered by experienced SPCs and SPCTs."
    },
    {
      "title": "Flexible Learning",
      "description": "Live online and corporate training options available."
    },
    {
      "title": "Lifetime Learning Resources",
      "description": "Access recordings and supporting materials."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted by enterprises worldwide."
    },
    {
      "title": "End-to-End Support",
      "description": "Guidance before, during, and after training."
    },
    {
      "title": "Interactive Sessions",
      "description": "Hands-on discussions and real-world case studies."
    },
    {
      "title": "Comprehensive Course Portfolio",
      "description": "Access multiple globally recognized Agile certifications."
    }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Achieving Responsible AI with SAFe Micro-Credential Course",
    "breadcrumbName": "Responsible AI with SAFe® Micro-Credential",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Implement Responsible AI within SAFe® and Agile Enterprises.",
    "benefits": [
      "4-Hour Instructor-Led Training",
      "Hands-On Responsible AI Exercises",
      "Enterprise-Level Governance Frameworks",
      "Official SAFe® Micro-Credential"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Achieving Responsible AI with SAFe Overview",
    "description": [
      "This 4-hour interactive training introduces Responsible AI principles aligned with SAFe® practices.",
      "Participants explore governance, accountability, transparency, and AI risk management.",
      "Gain hands-on experience designing Responsible AI initiatives within Agile enterprises."
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
    "description": "We provide tailored enterprise training solutions designed to integrate Responsible AI into Agile organizations with governance, compliance, and sustainable innovation."
  };

  const courseMetadata = {
    shortName: 'Responsible AI',
    shortNameAlt: 'Responsible AI with SAFe',
    fullName: 'Achieving Responsible AI with SAFe Micro-Credential Course',
    fullNameAlt: 'Responsible AI with SAFe® Micro-Credential',
    certificateName: 'SAFe® Responsible AI',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Achieving Responsible AI with SAFe Micro-Credential, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Achieving Responsible AI with SAFe Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'Achieving Responsible AI with SAFe Micro-Credential',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "Agile Coaches",
    "SAFe Practice Consultants",
    "Release Train Engineers",
    "Portfolio Managers",
    "Business Leaders",
    "AI & Technology Leaders"
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

export default AchievingResponsibleAICourse;
