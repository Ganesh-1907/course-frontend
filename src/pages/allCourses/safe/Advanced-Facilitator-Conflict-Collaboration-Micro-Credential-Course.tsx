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

const AdvancedFacilitatorConflictCollaborationMicroCredentialCourse = () => {
  const highlights = [
    { "text": "4 Hours of Simulated Learning", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Training from Leading SPCs and SPCTs", icon: <Users className="w-5 h-5" /> },
    { "text": "Real-World Practical Knowledge", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "High Course Completion Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { "text": "Official Courseware and SAFe® Studio Access", icon: <FileText className="w-5 h-5" /> },
    { "text": "Hands-On Practical Experience", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Wide Networking Opportunities", icon: <Globe className="w-5 h-5" /> },
    { "text": "Pre & Post Course Support", icon: <Headset className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Advanced Conflict Resolution Skills",
      "description": "Master structured conflict resolution techniques to improve Agile team collaboration and delivery outcomes."
    },
    {
      "title": "Stakeholder Mediation Expertise",
      "description": "Develop the ability to balance conflicting stakeholder priorities with clarity and confidence."
    },
    {
      "title": "Improved Team Dynamics",
      "description": "Strengthen your understanding of group dynamics to enhance collaboration and innovation."
    },
    {
      "title": "Faster Time-to-Market",
      "description": "Reduce project delays through effective facilitation and conflict management practices."
    },
    {
      "title": "Stronger Facilitation Capabilities",
      "description": "Engage stakeholders constructively and align teams toward shared objectives."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Stronger Facilitation Workforce",
      "description": "Equip employees with certified conflict management skills for Agile environments."
    },
    {
      "title": "Improved Cross-Functional Collaboration",
      "description": "Enhance teamwork across departments by resolving conflicts efficiently."
    },
    {
      "title": "Higher Organizational Efficiency",
      "description": "Minimize disruptions caused by unmanaged conflicts."
    },
    {
      "title": "Enhanced Internal Leadership",
      "description": "Build internal capability in managing high-stakes discussions and alignment."
    },
    {
      "title": "Global Recognition & Credibility",
      "description": "Demonstrate internationally recognized SAFe® micro-credential expertise."
    }
  ];

  const careerStats = {
    averageIncome: "$115k - $155k",
    incomeLabel: "per annum",
    employmentGrowth: "18%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Scrum Masters",
        "Agile Coaches",
        "Release Train Engineers",
        "Team Leaders",
        "Project Managers",
        "Anyone working in collaborative Agile environments"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Analyze root causes of conflicts within Agile teams.",
    "Apply structured conflict resolution frameworks.",
    "Facilitate consensus-driven decision-making.",
    "Improve stakeholder engagement strategies.",
    "Strengthen team collaboration and productivity."
  ];

  const prerequisites = [
    "Open to all participants regardless of prior experience.",
    "Basic understanding of Agile principles is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Course",
      "description": "Register for the 4-hour Conflict & Collaboration Micro-Credential program."
    },
    {
      "title": "Complete Training",
      "description": "Attend interactive sessions and practical discussions."
    },
    {
      "title": "Submit Assessment",
      "description": "Complete required course assessments during the session."
    },
    {
      "title": "Earn Micro-Credential",
      "description": "Receive your official SAFe® Conflict & Collaboration digital credential."
    }
  ];

  const curriculumModules = [
    {
      "title": "Introduction to Conflict & Collaboration in Agile",
      "topics": [
        "Conflict causes in Agile teams",
        "Collaboration in SAFe®",
        "Role of facilitation"
      ]
    },
    {
      "title": "Conflict Analysis Framework",
      "topics": [
        "Root cause identification",
        "Conflict mapping strategies",
        "Resolution planning"
      ]
    },
    {
      "title": "Agile-Specific Resolution Skills",
      "topics": [
        "Facilitating difficult conversations",
        "Building trust",
        "Managing stakeholder tensions"
      ]
    },
    {
      "title": "Collaborative Decision-Making",
      "topics": [
        "Consensus techniques",
        "Alignment strategies",
        "Decision facilitation tools"
      ]
    },
    {
      "title": "Practical Case Studies",
      "topics": [
        "Real-world SAFe® scenarios",
        "Role-play exercises",
        "Applied conflict strategies"
      ]
    },
    {
      "title": "Conclusion & Application",
      "topics": [
        "Key takeaways",
        "Applying skills in workplace",
        "Certification guidance"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Advanced Conflict Resolution",
      "description": "Resolve complex Agile team conflicts effectively."
    },
    {
      "title": "Cross-Team Collaboration",
      "description": "Facilitate alignment between multiple Agile teams."
    },
    {
      "title": "Improved Decision-Making",
      "description": "Guide teams toward faster and smarter consensus."
    },
    {
      "title": "Stakeholder Engagement",
      "description": "Engage stakeholders constructively in high-pressure scenarios."
    },
    {
      "title": "Managing High-Stakes Situations",
      "description": "Maintain team morale during critical discussions."
    },
    {
      "title": "Understanding Team Dynamics",
      "description": "Leverage team behaviors to enhance productivity."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Micro-Credential Course FAQs",
      "items": [
        {
          "question": "1. What is a SAFe® Micro-Credential course?",
          "answer": "It is a focused short-term training program designed to build specialized SAFe® skills and award a digital credential."
        },
        {
          "question": "2. Is there an exam?",
          "answer": "No formal exam. Completion is based on assessments and participation."
        },
        {
          "question": "3. What skills will I gain?",
          "answer": "Conflict resolution, facilitation, stakeholder engagement, and collaboration techniques."
        },
        {
          "question": "4. Will I receive SAFe® membership?",
          "answer": "Membership duration depends on prior SAFe® course history as per Scaled Agile guidelines."
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
          "question": "2. Do I receive certification after completion?",
          "answer": "Yes, you receive a digital SAFe® micro-credential upon successful completion."
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
      "description": "Recognized globally within the SAFe® ecosystem."
    },
    {
      "title": "Expert Trainers",
      "description": "Delivered by experienced SPCs and SPCTs."
    },
    {
      "title": "Flexible Learning",
      "description": "Online and corporate learning options available."
    },
    {
      "title": "Practical Case-Based Learning",
      "description": "Real-world conflict scenarios and exercises."
    },
    {
      "title": "End-to-End Support",
      "description": "Guidance before, during, and after training."
    },
    {
      "title": "Interactive Sessions",
      "description": "Highly engaging and discussion-based sessions."
    },
    {
      "title": "Professional Growth",
      "description": "Enhance leadership and facilitation credibility."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Access multiple globally recognized Agile certifications."
    }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'Conflict-Collab',
      courseName: 'Advanced Facilitator: Conflict & Collaboration Micro-Credential Course',
      dateRange: 'Apr 05 - Apr 05, 2026',
      timeRange: '10:00 AM - 02:00 PM EST',
      trainerName: 'Expert SAFe Facilitator',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 18,000',
      discountedPrice: 'INR 15,300',
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
    "courseName": "Advanced Facilitator: Conflict & Collaboration Micro-Credential Course",
    "breadcrumbName": "SAFe® Conflict & Collaboration Micro-Credential",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Master Conflict Resolution and Collaboration in Agile Environments.",
    "benefits": [
      "4-Hour Interactive Training",
      "Expert SPC & SPCT Instructors",
      "Hands-On Case Studies",
      "Official SAFe® Digital Micro-Credential"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Conflict & Collaboration Micro-Credential Overview",
    "description": [
      "This course equips professionals with practical conflict management and collaboration techniques within SAFe® environments.",
      "Learn structured frameworks to analyze, resolve, and transform conflicts into opportunities for growth.",
      "Designed for leaders and facilitators seeking advanced Agile facilitation capabilities."
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
    "description": "Tailored enterprise facilitation training designed to strengthen collaboration, alignment, and leadership effectiveness."
  };

  const courseMetadata = {
    shortName: 'SAFe Conflict',
    shortNameAlt: 'Conflict & Collaboration',
    fullName: 'Advanced Facilitator: Conflict & Collaboration Micro-Credential Course',
    fullNameAlt: 'SAFe® Conflict & Collaboration Micro-Credential',
    certificateName: 'SAFe® Conflict & Collaboration',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe® Conflict & Collaboration Micro-Credential, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® Conflict & Collaboration Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'SAFe® Conflict & Collaboration Micro-Credential',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "Scrum Masters",
    "Agile Coaches",
    "Release Train Engineers",
    "Team Leaders",
    "Project Managers",
    "Anyone working in collaborative Agile environments"
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

export default AdvancedFacilitatorConflictCollaborationMicroCredentialCourse;
