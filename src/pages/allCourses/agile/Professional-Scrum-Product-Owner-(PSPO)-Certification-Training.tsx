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

const ProfessionalScrumProductOwnerCertificationTraining = () => {
  const highlights = [
    { "text": "16 Hours / 2 Days of Live Instructor-Led Training" },
    { "text": "Earn 14 PMI PDUs on Course Completion" },
    { "text": "PSPO-Advanced Certification with Lifetime Validity" },
    { "text": "Activity-Based Workshops with Real-World Simulations" },
    { "text": "Comprehensive Exam Preparation Support" },
    { "text": "Coaching by Professional Scrum Trainers (PSTs)" }
  ];

  const individualBenefits = [
    {
      "title": "Understand Customer Needs",
      "description": "Identify and address customer pain points to improve product outcomes."
    },
    {
      "title": "Manage Risks Effectively",
      "description": "Anticipate and mitigate risks to ensure smooth and predictable product delivery."
    },
    {
      "title": "Value & Pricing Models",
      "description": "Apply competitive pricing strategies based on product value and market trends."
    },
    {
      "title": "Prioritize High-Impact Features",
      "description": "Focus on features that maximize customer satisfaction and business value."
    },
    {
      "title": "Communicate Product Vision",
      "description": "Clearly articulate product goals and strategy to align stakeholders and teams."
    },
    {
      "title": "Align with Business Goals",
      "description": "Ensure product development directly supports company objectives."
    },
    {
      "title": "Prepare for Leadership Roles",
      "description": "Develop skills to transition into senior product leadership positions."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Increase Product Value",
      "description": "Advanced backlog management and prioritization techniques ensure alignment with business strategy."
    },
    {
      "title": "Promote Agile Culture",
      "description": "Encourages strong Agile mindset and collaboration across teams."
    },
    {
      "title": "Leadership Development",
      "description": "Builds influential leadership capabilities in Product Owners."
    },
    {
      "title": "Scaling Scrum",
      "description": "Adapt Scrum practices to large-scale and complex organizational environments."
    },
    {
      "title": "Efficient Release Cycles",
      "description": "Improve forecasting and backlog refinement for predictable releases."
    }
  ];


  const careerStats = {
    averageIncome: '$110k-130k',
    incomeLabel: 'per annum',
    employmentGrowth: '67%',
    growthLabel: '(2022-2025)',
  };

  const attendees = [
    {
      group: [
        "Experienced Product Owners",
        "Product Managers",
        "Business Analysts",
        "Scrum Masters",
        "Agile Coaches",
        "Leaders involved in Product Strategy"
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
    "Explore advanced Product Owner stances.",
    "Master Agile Product Management principles.",
    "Improve stakeholder collaboration.",
    "Develop value-driven product strategies.",
    "Enhance forecasting and release planning skills.",
    "Strengthen leadership and influence capabilities."
  ];

  const prerequisites = [
    "At least one year of experience as a Product Owner or several years as a Product Manager.",
    "Professional Scrum Product Owner I certification is recommended but not mandatory."
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete the 2-day PSPO-Advanced instructor-led course."
    },
    {
      "title": "Receive Assessment Key",
      "description": "Get the PSPO II assessment password from Scrum.org."
    },
    {
      "title": "Take the Exam",
      "description": "Attempt the 40-question assessment within 60 minutes."
    },
    {
      "title": "Get Certified",
      "description": "Score at least 85% to earn your PSPO II certification with lifetime validity."
    }
  ];

  const curriculumModules = [
    {
      "title": "The Decision Maker",
      "topics": [
        "Making better strategic decisions",
        "Handling conflicting customer feedback"
      ]
    },
    {
      "title": "The Collaborator",
      "topics": [
        "Stakeholder engagement strategies",
        "Working beyond the Scrum Team (contracts, finance, governance)"
      ]
    },
    {
      "title": "The Influencer",
      "topics": [
        "Leading stakeholders and teams",
        "Creating effective stakeholder management strategies"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Scaling",
      "description": "Deliver products across multiple teams efficiently in complex environments."
    },
    {
      "title": "Leadership Styles",
      "description": "Adopt leadership approaches suited for influencing teams and stakeholders."
    },
    {
      "title": "Forecasting & Release Planning",
      "description": "Apply Agile forecasting techniques to optimize delivery timelines."
    },
    {
      "title": "Product Vision & Value",
      "description": "Define and communicate a compelling product vision aligned with business goals."
    },
    {
      "title": "Advanced Backlog Management",
      "description": "Prioritize and optimize backlog items for maximum value delivery."
    },
    {
      "title": "Business Strategy Alignment",
      "description": "Align product decisions with sustainable growth and market success."
    },
    {
      "title": "Stakeholder Engagement",
      "description": "Effectively collaborate with stakeholders to deliver valuable solutions."
    },
    {
      "title": "Organizational Design Awareness",
      "description": "Understand how organizational structures impact agility."
    },
    {
      "title": "Portfolio Planning",
      "description": "Align initiatives with strategic business objectives."
    },
    {
      "title": "Evidence-Based Management",
      "description": "Use KPIs and data-driven insights for continuous product improvement."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "Certification FAQs",
      "items": []
    },
    {
      "id": "category_2",
      "label": "Exam FAQs",
      "items": []
    },
    {
      "id": "category_3",
      "label": "Payment FAQs",
      "items": []
    },
    {
      "id": "category_4",
      "label": "General FAQs",
      "items": []
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
      "description": "PSPO-Advanced certification is globally recognized by Scrum.org."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from certified Professional Scrum Trainers with real-world experience."
    },
    {
      "title": "Flexible Learning",
      "description": "Available in live online and corporate formats."
    },
    {
      "title": "Lifetime Certification",
      "description": "No renewal fee required after certification."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted training provider with strong enterprise experience."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Support provided before, during, and after the training."
    },
    {
      "title": "Interactive Workshops",
      "description": "Hands-on exercises and real-world case simulations."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Access to multiple Scrum and Agile certifications."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'PSPO-A',
      courseName: 'Professional Scrum Product Owner™ - Advanced (PSPO-A) Training',
      dateRange: 'Mar 15 - Mar 16, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Expert PST',
      trainerImage:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 45,000',
      discountedPrice: 'INR 38,000',
      discountPercentage: '15',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "PSPO Advanced Certification Training",
    "breadcrumbName": "PSPO Advanced Certification Training | Advanced Product Owner Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Advance your Product Ownership skills with strategic, value-driven Agile practices.",
    "benefits": [
      "16 Hours Live Instructor-Led Training",
      "14 PMI PDUs Earned",
      "Free PSPO II Exam Attempt",
      "Lifetime Valid Certification",
      "Expert Coaching by PSTs"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Professional Scrum Product Owner™ - Advanced (PSPO-A)",
    "description": [
      "The PSPO-Advanced course is designed for experienced Product Owners seeking to deepen their product management capabilities.",
      "Participants learn advanced techniques in stakeholder management, forecasting, value optimization, and strategic product alignment.",
      "Through hands-on workshops and real-world case studies, learners strengthen their ability to maximize product value and business impact."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in This Course?",
    "whatsIncludedDescription": [
      "2-Day Immersive Online Training",
      "Official Scrum.org PSPO-Advanced Courseware",
      "Free PSPO II Assessment Attempt",
      "Global Professional Scrum Certification",
      "Lifetime Validity - No Renewal Fees"
    ],
    "skillsTitle": "Skills Covered in PSPO-Advanced Training",
    "skills": [
      "Agile Product Management",
      "Stakeholder Collaboration",
      "Value Optimization",
      "Release Planning & Forecasting",
      "Product Strategy Alignment",
      "Advanced Product Backlog Management"
    ],
    "modesTitle": "Training Delivery Modes",
    "modesDescription": [
      "Live Online Instructor-Led Training",
      "Corporate/Onsite Customized Training",
      "Interactive Virtual Workshop Format"
    ]
  };

  const corporateData = {
    "courseName": "Why Simpliaxis Is the First Choice for Corporates",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide enterprise-focused Agile and Scrum training tailored to organizational needs, ensuring measurable improvements in product strategy, leadership, and value delivery."
  };

  const courseMetadata = {
    shortName: 'PSPO II',
    shortNameAlt: 'PSPO-A',
    fullName: 'Professional Scrum Product Owner™ - Advanced (PSPO-A)',
    fullNameAlt: 'PSPO Advanced Certification',
    certificateName: 'Professional Scrum Product Owner - Advanced',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After earning your PSPO-Advanced certification, you will be prepared to lead product-focused organizations, influence stakeholders effectively, and maximize the value delivered by Scrum teams.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for PSPO Advanced Certification Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Scrum.org',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified Professional Scrum Trainer',
      signer2Role: 'CEO, Scrum.org',
    },
  };

  const commonAttendeesList = [
    'Scrum Masters',
    'Team Leads',
    'Development Managers',
    'Delivery Managers',
    'Product Owners',
    'Agile Coaches',
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
      ltpLabel: 'Global Provider of Scrum.org',
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

export default ProfessionalScrumProductOwnerCertificationTraining;
