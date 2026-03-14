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

const AgileHRexplorerCourse = () => {
  const highlights = [
    { "text": "1-Day Instructor-Led Live Online Training Session", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Earn 8 PDUs & 8 SHRM Credits through Just Leading Solutions (JLS)", icon: <Award className="w-5 h-5" /> },
    { "text": "1-Year Membership with Just Leading Solutions (JLS)", icon: <Users className="w-5 h-5" /> },
    { "text": "Training by Globally Renowned, Experienced Experts", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Access to Agile & Scrum Community", icon: <Globe className="w-5 h-5" /> },
    { "text": "Hands-On Interactive Sessions with Real-World Case Studies", icon: <BookOpen className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Enhanced Career Opportunities",
      "description": "Strengthen your resume with Agile HR expertise and stand out for high-demand HR transformation roles."
    },
    {
      "title": "Agile HR Expertise",
      "description": "Gain practical skills to effectively apply Agile values and principles within HR teams."
    },
    {
      "title": "Employee-Centric HR Design",
      "description": "Develop strategies that prioritize employee well-being, engagement, and performance."
    },
    {
      "title": "Global Agile Community Access",
      "description": "Join an international network of Agile professionals and learn from industry leaders."
    },
    {
      "title": "Validated Certification",
      "description": "Earn recognition as a certified Agile HR professional, enhancing credibility and market value."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Improved HR Practices",
      "description": "Streamline HR processes to align with modern Agile organizational needs."
    },
    {
      "title": "Agile Integration in HR",
      "description": "Apply Agile methodologies to HR functions to foster adaptability and innovation."
    },
    {
      "title": "Improved Change Responsiveness",
      "description": "Enable HR teams to respond quickly and effectively to market and organizational changes."
    },
    {
      "title": "Enhanced Employee Retention",
      "description": "Create a supportive and engaging workplace culture to increase long-term retention."
    },
    {
      "title": "Optimized Talent Management",
      "description": "Improve recruitment, onboarding, and workforce planning efficiency."
    }
  ];

  const careerStats = {
    averageIncome: "$110k - $150k",
    incomeLabel: "per annum",
    employmentGrowth: "15%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "HR Managers",
        "HR Professionals",
        "Talent Acquisition Leaders",
        "People Operations Teams",
        "Agile Coaches supporting HR",
        "Business Leaders involved in transformation"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand Agile and Scrum foundations within HR.",
    "Align HR practices with Lean-Agile principles.",
    "Support Agile talent acquisition and retention strategies.",
    "Apply continuous feedback and Agile performance models.",
    "Drive cultural transformation using Agile mindset in HR."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic understanding of HR functions is recommended.",
    "Interest in Agile methodologies is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Enroll in Training",
      "description": "Register for the Agile HR Explorer (AHRE) certification training."
    },
    {
      "title": "Attend 1-Day Session",
      "description": "Complete the instructor-led interactive training session."
    },
    {
      "title": "Appear for Examination",
      "description": "Access the exam link via the Just Leading Solutions Learning Plan."
    },
    {
      "title": "Receive Certification",
      "description": "Earn your Agile HR Explorer digital badge and certification from JLS."
    }
  ];

  const curriculumModules = [
    {
      "title": "Modern Workplace & Agile Context",
      "topics": [
        "Workplace transformation challenges",
        "Agile adaptability and engagement"
      ]
    },
    {
      "title": "Agile Foundations",
      "topics": [
        "Agile history and principles",
        "Overview of Scrum and Kanban"
      ]
    },
    {
      "title": "Introduction to Agile HR",
      "topics": [
        "Agile4HR vs HR4Agile",
        "Applying Agile in HR environments"
      ]
    },
    {
      "title": "Mini Case Studies",
      "topics": [
        "Real-world Agile HR examples",
        "Practical HR transformation insights"
      ]
    },
    {
      "title": "Agile HR Themes & Practices",
      "topics": [
        "Employee-centric Agile HR practices",
        "Using Kanban boards and sprints in HR"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Adapting to HR Changes",
      "description": "Understand evolving workplace dynamics and HR’s response strategies."
    },
    {
      "title": "Embedding Agile in HR",
      "description": "Implement Agile values and principles within HR functions."
    },
    {
      "title": "Agile HR Perspectives",
      "description": "Differentiate between Agile4HR and HR4Agile models."
    },
    {
      "title": "Driving Organizational Impact",
      "description": "Leverage Agile themes to enhance HR effectiveness."
    },
    {
      "title": "Case Study Application",
      "description": "Analyze real-world HR transformation scenarios through an Agile lens."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Agile HR Explorer FAQs",
      "items": [
        {
          "question": "1. What is the Agile HR Explorer course?",
          "answer": "A 1-day introductory certification designed to equip HR professionals with Agile principles and transformation strategies."
        },
        {
          "question": "2. Who should attend this training?",
          "answer": "HR managers, HR teams, Agile coaches, and business leaders supporting Agile transformation."
        },
        {
          "question": "3. Is there an exam?",
          "answer": "Yes, participants must pass an examination to receive certification."
        },
        {
          "question": "4. Will I receive a digital badge?",
          "answer": "Yes, a digital badge is awarded upon successful completion."
        },
        {
          "question": "5. Is the certification globally recognized?",
          "answer": "Yes, it is developed and accredited by Just Leading Solutions (JLS)."
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
          "answer": "Yes, certification is awarded after successfully passing the exam."
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
    { "title": "Global Recognition", "description": "Recognized internationally by Just Leading Solutions (JLS)." },
    { "title": "Expert Trainers", "description": "Delivered by certified SPCs and experienced Agile HR practitioners." },
    { "title": "Flexible Learning", "description": "Live online and corporate delivery options available." },
    { "title": "Lifetime Learning Support", "description": "Access to community resources and Agile networks." },
    { "title": "Proven Track Record", "description": "Trusted by organizations undergoing Agile transformation." },
    { "title": "End-to-End Assistance", "description": "Support before, during, and after certification." },
    { "title": "Interactive Training", "description": "Real-world simulations and collaborative exercises." },
    { "title": "Comprehensive Agile Portfolio", "description": "Access to globally recognized Agile and SAFe certifications." }
  ];

  

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 1 Year with SEUs/PDUs/SHRM Credits',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "Agile HR Explorer (AHRE) Training and Certification",
    "breadcrumbName": "Agile HR Explorer Certification Training | AHRE Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Transform HR with Agile Principles and Modern Practices.",
    "benefits": [
      "1-Day Live Instructor-Led Training",
      "Earn 8 PDUs & 8 SHRM Credits",
      "Exam Assistance Included",
      "Certification from Just Leading Solutions (JLS)"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Agile HR Explorer Course Overview",
    "description": [
      "The Agile HR Explorer course introduces HR professionals to Agile principles and their impact on modern workplaces.",
      "Participants learn Agile4HR and HR4Agile concepts, enabling HR transformation strategies.",
      "Through case studies and simulations, professionals gain actionable insights to implement Agile HR practices effectively."
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
    "description": "We provide tailored enterprise Agile HR training solutions that align HR functions with Lean-Agile transformation goals and modern organizational strategies."
  };

  const courseMetadata = {
    shortName: 'Agile HR',
    shortNameAlt: 'Agile HR Explorer',
    fullName: 'Agile HR Explorer (AHRE) Training and Certification',
    fullNameAlt: 'Agile HR Explorer Certification Training',
    certificateName: 'Agile HR Explorer',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your Agile HR Explorer (AHRE) certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for Agile HR Explorer (AHRE) Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Just Leading Solutions (JLS)',
      certificateType: 'Agile HR Explorer (AHRE)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "HR Managers",
    "HR Professionals",
    "Talent Acquisition Leaders",
    "People Operations Teams",
    "Agile Coaches supporting HR",
    "Business Leaders involved in transformation"
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
      ltpLabel: 'JLS Accredited Partner',
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

export default AgileHRexplorerCourse;
