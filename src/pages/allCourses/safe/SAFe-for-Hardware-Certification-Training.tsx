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

const SAFeForHardwareCourse = () => {
  const highlights = [
    { "text": "16 Hours Online Instructor-Led Training Session", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Earn 16 PDUs & 16 SEUs", icon: <Award className="w-5 h-5" /> },
    { "text": "Comprehensive Exam Support", icon: <FileText className="w-5 h-5" /> },
    { "text": "Access to Official Courseware & SAFe Studio", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "High Success Rate", icon: <TrendingUp className="w-5 h-5" /> },
    { "text": "Training by Platinum SPCT Partner of Scaled Agile", icon: <Globe className="w-5 h-5" /> },
    { "text": "Access to SAFe Community Portal", icon: <Users className="w-5 h-5" /> },
    { "text": "Unlimited Practice Test Access", icon: <FileText className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Early Risk Mitigation",
      "description": "Effectively manage risks through continuous feedback and early discovery in hardware development cycles."
    },
    {
      "title": "Enhanced Leadership Skills",
      "description": "Develop the ability to lead and facilitate Agile transformations within hardware-focused teams."
    },
    {
      "title": "Advanced Problem-Solving",
      "description": "Strengthen critical thinking skills to resolve complex hardware development challenges using Lean-Agile practices."
    },
    {
      "title": "Hands-On Practical Learning",
      "description": "Gain deep conceptual knowledge and apply it practically through real-world case studies and simulations."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Accelerated Time-to-Market",
      "description": "Speed up hardware product development cycles to deliver value and innovation faster."
    },
    {
      "title": "Enhanced Organizational Flexibility",
      "description": "Build adaptive systems capable of responding to evolving market and business demands."
    },
    {
      "title": "Improved Cross-Team Collaboration",
      "description": "Strengthen communication between teams and suppliers for improved execution and alignment."
    },
    {
      "title": "Optimized SAFe for Hardware Implementation",
      "description": "Enhance established SAFe processes with hardware-specific knowledge and compliance integration."
    }
  ];

  const careerStats = {
    averageIncome: "$135k - $175k",
    incomeLabel: "per annum",
    employmentGrowth: "20%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Hardware Engineers",
        "System Engineers",
        "Product Managers",
        "Release Train Engineers",
        "Agile Coaches",
        "Leaders involved in hardware product development"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand SAFe® Framework for Hardware.",
    "Implement Lean-Agile practices in hardware development.",
    "Adapt SAFe® in large-scale hardware projects.",
    "Establish faster feedback loops.",
    "Improve product quality and reduce time-to-market.",
    "Drive cross-functional collaboration and planning."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic knowledge of Agile methodologies is recommended.",
    "Experience in hardware development is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete 16 hours of SAFe® for Hardware live instructor-led training."
    },
    {
      "title": "Build Practical Knowledge",
      "description": "Engage in interactive sessions and hands-on exercises."
    },
    {
      "title": "Pass the Exam",
      "description": "Complete the 45-minute web-based assessment successfully."
    },
    {
      "title": "Earn Certification",
      "description": "Receive SAFe® 6 for Hardware (HW) Certification and digital badge."
    }
  ];

  const curriculumModules = [
    {
      "title": "Integrating Lean-Agile into Hardware",
      "topics": [
        "Applying Lean-Agile principles in hardware environments",
        "Managing hardware value streams",
        "Building Agile Release Trains for hardware"
      ]
    },
    {
      "title": "Developing for Constant Change",
      "topics": [
        "Designing for adaptability",
        "Implementing fast feedback cycles",
        "Managing evolving technical requirements"
      ]
    },
    {
      "title": "Improving Compliance & Risk Management",
      "topics": [
        "Proactive risk identification",
        "Compliance integration into development",
        "Quality and safety alignment"
      ]
    },
    {
      "title": "Enhancing Value Stream Collaboration",
      "topics": [
        "Supplier integration into Agile workflows",
        "Cross-functional collaboration",
        "Forecasting and delivery alignment"
      ]
    },
    {
      "title": "Building Sustainable Hardware Solutions",
      "topics": [
        "Long-term product sustainability",
        "Continuous improvement practices",
        "Scaling hardware innovation"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Design for Change",
      "description": "Learn how to design adaptable hardware systems and build rapid feedback loops."
    },
    {
      "title": "Small Batch Thinking",
      "description": "Implement incremental development and iterative improvement approaches."
    },
    {
      "title": "Faster Feedback Cycles",
      "description": "Improve collaboration and integration across engineering and stakeholder teams."
    },
    {
      "title": "Proactive Risk & Compliance Management",
      "description": "Identify safety risks early and integrate compliance without slowing development."
    },
    {
      "title": "Supplier Integration",
      "description": "Align suppliers with Agile workflows to enhance coordination and value delivery."
    },
    {
      "title": "Cross-Functional Excellence",
      "description": "Improve planning, forecasting, measurement, and delivery across hardware teams."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "SAFe® for Hardware Certification FAQs",
      "items": [
        {
          "question": "1. What is SAFe® for Hardware certification?",
          "answer": "It applies SAFe® principles to hardware engineering to improve efficiency, collaboration, and value flow across hardware development lifecycles."
        },
        {
          "question": "2. What is the training duration?",
          "answer": "The training is conducted over 2 days (approximately 16 hours)."
        },
        {
          "question": "3. What is the exam format?",
          "answer": "Web-based exam with 20 multiple-choice questions to be completed in 45 minutes."
        },
        {
          "question": "4. What is the passing score?",
          "answer": "A minimum of 90% is required to pass the assessment."
        },
        {
          "question": "5. Is the certification renewable?",
          "answer": "Yes, certification must be renewed annually as per Scaled Agile guidelines."
        },
        {
          "question": "6. How many PDUs and SEUs will I receive?",
          "answer": "You will earn 16 PDUs and 16 SEUs upon course completion."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Payment & Enrollment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment options are available."
        },
        {
          "question": "2. Is refund available?",
          "answer": "Refunds are not available; however, rescheduling is permitted."
        },
        {
          "question": "3. What payment methods are accepted?",
          "answer": "Credit cards, debit cards, net banking, wire transfers, PayPal, Stripe, and other online options."
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
          "answer": "Yes, upon passing the exam, you receive the SAFe® HW certification and digital badge."
        },
        {
          "question": "3. Who are the instructors?",
          "answer": "Training is delivered by certified SAFe Practice Consultants (SPCs) and SPCTs."
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
    { "title": "Global Recognition", "description": "Globally recognized SAFe® certification aligned with industry standards." },
    { "title": "Expert Trainers", "description": "Delivered by certified SPCs and SPCTs." },
    { "title": "Flexible Learning", "description": "Instructor-led virtual training with interactive exercises." },
    { "title": "Lifetime Learning Resources", "description": "Access to SAFe Studio and official courseware." },
    { "title": "Proven Track Record", "description": "Trusted by global enterprises for Agile transformation." },
    { "title": "End-to-End Assistance", "description": "Complete guidance for exam and certification process." },
    { "title": "Interactive Training Experience", "description": "Real-world simulations and practical exercises." },
    { "title": "Comprehensive Agile Portfolio", "description": "Access to multiple SAFe and Agile certification pathways." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'SAFe-HW',
      courseName: 'SAFe® for Hardware (HW) Certification Training',
      dateRange: 'Jun 15 - Jun 16, 2026',
      timeRange: '09:00 AM - 05:00 PM EST',
      trainerName: 'Expert SAFe Facilitator',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 38,250',
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
    "courseName": "SAFe® for Hardware (HW) Certification Training",
    "breadcrumbName": "SAFe® for Hardware Certification Training | SAFe HW Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Apply Lean-Agile Principles to Hardware Development at Scale.",
    "benefits": [
      "16 Hours Live Training",
      "16 PDUs & 16 SEUs",
      "Official SAFe Studio Access",
      "Comprehensive Exam Support"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "SAFe® for Hardware Certification Course Overview",
    "description": [
      "This two-day SAFe® for Hardware course provides a comprehensive understanding of applying Lean-Agile principles to hardware development environments.",
      "Participants explore Agile Release Trains, supplier alignment, compliance integration, and continuous improvement techniques tailored for hardware teams.",
      "Upon completion and passing the exam, participants earn the SAFe® 6 for Hardware (HW) certification and digital badge."
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
    "courseName": "Why Corporates Choose Simpliaxis",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Enterprise-focused SAFe training delivered by a Platinum SPCT Partner to accelerate Lean-Agile hardware transformations."
  };

  const courseMetadata = {
    shortName: 'SAFe HW',
    shortNameAlt: 'SAFe for Hardware',
    fullName: 'SAFe® for Hardware (HW) Certification Training',
    fullNameAlt: 'SAFe® for Hardware Certification Training | SAFe HW Course',
    certificateName: 'SAFe® 6 for Hardware (HW)',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your SAFe for Hardware (HW) certification training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for SAFe® for Hardware Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scaled Agile, Inc.',
      certificateType: 'SAFe® 6 for Hardware (HW)',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategist',
    },
  };

  const commonAttendeesList = [
    "Hardware Engineers",
    "System Engineers",
    "Product Managers",
    "Release Train Engineers",
    "Agile Coaches",
    "Leaders involved in hardware product development"
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

export default SAFeForHardwareCourse;
