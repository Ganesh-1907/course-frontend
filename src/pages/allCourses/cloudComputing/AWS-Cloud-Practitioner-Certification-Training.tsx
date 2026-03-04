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

const AWSCloudPractitionerCertificationTraining = () => {
  const highlights = [
    { text: "8 Hours of Instructor-Led Live Training", icon: <Monitor className="w-5 h-5" /> },
    { text: "Hands-On & Real-World Case Study Experience", icon: <Laptop className="w-5 h-5" /> },
    { text: "Comprehensive and Industry-Aligned Curriculum", icon: <BookOpen className="w-5 h-5" /> },
    { text: "Monthly Webinars & E-Books for Industry Updates", icon: <Globe className="w-5 h-5" /> },
    { text: "Mock Tests to Evaluate Knowledge", icon: <FileText className="w-5 h-5" /> },
    { text: "Guidance by AWS Experienced Professional Trainer", icon: <UserCheck className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      title: "Strong Cloud Foundation",
      description: "Gain solid foundational knowledge of cloud computing and AWS core services."
    },
    {
      title: "Career Advancement",
      description: "Enhances career opportunities in cloud computing and IT domains."
    },
    {
      title: "Improved Communication Skills",
      description: "Build confidence in discussing cloud concepts and AWS services."
    },
    {
      title: "Pathway to Advanced Certifications",
      description: "Acts as a milestone to pursue associate and professional AWS certifications."
    }
  ];

  const corporateBenefits = [
    {
      title: "Improved Brand Reputation",
      description: "Having AWS-certified professionals enhances organizational credibility."
    },
    {
      title: "Streamlined Cloud Adoption",
      description: "Certified professionals improve cloud adoption efficiency."
    },
    {
      title: "Enhanced Security & Compliance",
      description: "Better understanding of AWS security best practices and governance."
    },
    {
      title: "Skilled Cloud Teams",
      description: "Teams gain the capability to design, deploy, and manage AWS solutions effectively."
    }
  ];

  const careerStats = {
    averageIncome: "$90,000",
    incomeLabel: "Average Annual Salary",
    employmentGrowth: "18%",
    growthLabel: "Projected Growth"
  };

  const attendees = [
    {
      group: [
        "Beginners in Cloud Computing",
        "Business Professionals working with AWS",
        "Sales & Marketing Professionals in Cloud Domain",
        "IT Professionals seeking foundational AWS knowledge",
        "Students aspiring to build cloud careers"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Understand core AWS cloud concepts and terminology.",
    "Identify key AWS services across compute, storage, networking, and security.",
    "Understand AWS pricing models and billing mechanisms.",
    "Apply cloud best practices including security and cost optimization."
  ];

  const prerequisites = [
    "Basic understanding of AWS services.",
    "Basic IT or cloud knowledge recommended.",
    "Familiarity with programming languages like Java, C++, or PHP is helpful but not mandatory."
  ];

  const certificationSteps = [
    {
      title: "Attend Training",
      description: "Complete 8 hours of instructor-led AWS Cloud Practitioner training.",
      color: "bg-primary"
    },
    {
      title: "Practice with Mock Tests",
      description: "Evaluate your readiness using structured practice exams.",
      color: "bg-indigo-500"
    },
    {
      title: "Schedule Exam",
      description: "Book the AWS Certified Cloud Practitioner (CLF-C01) exam.",
      color: "bg-purple-500"
    },
    {
      title: "Pass the Exam",
      description: "Score 700 out of 1000 to earn certification.",
      color: "bg-green-500"
    }
  ];

  const curriculumModules = [
    {
      title: "Cloud Concepts",
      topics: [
        "Benefits of AWS Cloud",
        "AWS Cloud Design Principles",
        "Cloud Economics"
      ]
    },
    {
      title: "Security & Compliance",
      topics: [
        "AWS Shared Responsibility Model",
        "Governance & Compliance",
        "Identity & Access Management",
        "Security Components"
      ]
    },
    {
      title: "Cloud Technology & Services",
      topics: [
        "AWS Global Infrastructure",
        "Compute, Storage & Networking Services",
        "AI/ML & Analytics Services",
        "Deployment Methods"
      ]
    },
    {
      title: "Billing, Pricing & Support",
      topics: [
        "AWS Pricing Models",
        "Cost Management & Budgeting",
        "AWS Support Plans"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Foundational Cloud Knowledge",
      description: "Understand elasticity, scalability, and on-demand cloud services."
    },
    {
      title: "AWS Services Understanding",
      description: "Learn how to deploy and manage AWS compute, storage, and networking services."
    },
    {
      title: "Cloud Security Concepts",
      description: "Understand AWS security responsibilities and IAM best practices."
    },
    {
      title: "Cost Optimization Strategies",
      description: "Learn AWS pricing models and cost-control techniques."
    },
    {
      title: "Practical Cloud Implementation",
      description: "Apply AWS best practices to real-world cloud projects."
    },
    {
      title: "AWS Well-Architected Framework",
      description: "Understand security, reliability, performance efficiency, and cost optimization pillars."
    }
  ];

  const faqCategories = [
    {
      id: "category_1",
      label: "AWS Cloud Practitioner FAQs",
      items: [
        {
          question: "1. What is AWS Cloud Practitioner Certification?",
          answer: "It is an entry-level AWS certification validating foundational cloud knowledge."
        },
        {
          question: "2. What are the benefits?",
          answer: "Builds foundational AWS knowledge and improves career prospects."
        },
        {
          question: "3. Who should attend?",
          answer: "Digital transformation experts, developers, managers, analysts, and beginners."
        },
        {
          question: "4. What is the future scope?",
          answer: "Opens entry-level cloud roles and pathways to advanced AWS certifications."
        },
        {
          question: "5. What is the certification validity?",
          answer: "Valid for 3 years."
        },
        {
          question: "6. What is the salary range?",
          answer: "Ranges between $60,000 and $90,000 globally."
        },
        {
          question: "7. Is it valuable?",
          answer: "Yes, it builds strong foundational AWS knowledge."
        }
      ]
    },
    {
      id: "category_2",
      label: "Exam FAQs",
      items: [
        {
          question: "1. How many questions are in the exam?",
          answer: "65 multiple-choice and multiple-response questions."
        },
        {
          question: "2. How many attempts are allowed?",
          answer: "Unlimited attempts with a 14-day waiting period."
        },
        {
          question: "3. Is the exam multiple choice?",
          answer: "Yes, includes multiple-choice and multiple-response questions."
        },
        {
          question: "4. What is the passing score?",
          answer: "700 out of 1000."
        }
      ]
    },
    {
      id: "category_3",
      label: "Payment FAQs",
      items: [
        {
          question: "1. What happens to token payments?",
          answer: "Non-refundable after 15 days but adjustable within 6 months."
        },
        {
          question: "2. Are installment options available?",
          answer: "Yes, flexible payment options are available."
        }
      ]
    },
    {
      id: "category_4",
      label: "General FAQs",
      items: [
        {
          question: "1. Do you offer online training?",
          answer: "Yes, instructor-led virtual training is available."
        },
        {
          question: "2. Do you offer corporate training?",
          answer: "Yes, customized corporate training programs are available."
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
    { "title": "Global Recognition", "description": "Globally recognized AWS certification training." },
    { "title": "Certified Trainers", "description": "Learn from AWS-authorized certified professionals." },
    { "title": "Flexible Learning", "description": "Weekend and weekday online training options." },
    { "title": "Lifetime Access", "description": "Access recordings and materials anytime." },
    { "title": "Proven Track Record", "description": "Trusted by professionals worldwide." },
    { "title": "End-to-End Assistance", "description": "Full support before, during, and after training." },
    { "title": "Interactive Training", "description": "Hands-on labs and real-world assignments." },
    { "title": "Wide Course Portfolio", "description": "Access additional AWS and DevOps certifications." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'CLF-C01',
      courseName: 'AWS Certified Cloud Practitioner Training',
      dateRange: 'Mar 15 - Mar 16, 2026',
      timeRange: '10:00 AM - 02:00 PM IST',
      trainerName: 'AWS Expert',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 15,000',
      discountedPrice: 'INR 12,000',
      discountPercentage: '20',
    },
  ];

  const certificateBenefits = [
    'Official AWS Certified Cloud Practitioner Badge',
    'Voucher for CLF-C01 Certification Exam',
    'Foundational Cloud Knowledge for Careers',
    'Lifelong Membership to Viovn Alumni Network',
  ];

  const heroData = {
    "courseName": "AWS Certified Cloud Practitioner Training",
    "breadcrumbName": "AWS Cloud Practitioner (CLF-C01) Certification Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Build Your Foundation in AWS Cloud Computing",
    "benefits": [
      "8 Hours Live Training",
      "Mock Test Preparation",
      "Foundational AWS Knowledge",
      "Pathway to Advanced AWS Certifications"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AWS Cloud Practitioner Certification Overview",
    "description": [
      "The AWS Cloud Practitioner course provides foundational knowledge of AWS cloud services and infrastructure.",
      "Learn security, pricing models, architectural principles, and cloud best practices.",
      "Gain the skills required to pass the AWS Certified Cloud Practitioner (CLF-C01) exam."
    ],
    "whatIsTitle": "What is AWS Cloud Practitioner?",
    "whatIsDescription": [
      "The AWS Certified Cloud Practitioner validates your overall understanding of the AWS Cloud platform, covering basic cloud concepts and security."
    ],
    "whatsIncludedTitle": "What’s Included in the Training?",
    "whatsIncludedDescription": [
      "Official course curriculum",
      "Mock exams and quizzes",
      "CLF-C01 exam guide",
      "24/7 learner support"
    ],
    "skillsTitle": "Skills You Will Gain",
    "skills": [
      "Cloud concepts and economics",
      "Security and shared responsibility",
      "Core AWS services",
      "Billing and pricing models"
    ],
    "modesTitle": "Flexible Training Options",
    "modesDescription": [
      "Live virtual classroom sessions",
      "Corporate group training",
      "Self-paced learning materials"
    ]
  };

  const corporateData = {
    "courseName": "Why Corporates Choose Simpliaxis",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide tailored AWS corporate training programs to enhance cloud adoption, security, and operational excellence across organizations."
  };

  const courseMetadata = {
    shortName: 'CLF-C01',
    shortNameAlt: 'AWS Cloud Practitioner',
    fullName: 'AWS Certified Cloud Practitioner Training',
    fullNameAlt: 'AWS Cloud Foundations Training',
    certificateName: 'AWS Cloud Practitioner',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your AWS Cloud Practitioner certification is the first step towards a successful career in cloud computing, validating your foundational expertise in the AWS platform.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AWS Cloud Practitioner Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official AWS Badge',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Amazon Web Services',
      certificateType: 'Certified Cloud Practitioner',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'Certified AWS Trainer',
      signer2Role: 'Viovn Program Director',
    },
  };

  const commonAttendeesList = [
    "Beginners in Cloud Computing",
    "Business Professionals working with AWS",
    "Sales & Marketing Professionals",
    "IT Professionals",
    "Students"
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
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                {overviewContent.whatsIncludedDescription.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              {overviewContent.skillsTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.skillsTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {overviewContent.skills.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
              )}

              {overviewContent.modesTitle && (
                <>
                  <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                    {overviewContent.modesTitle}
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    {overviewContent.modesDescription.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </>
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
          categoryName="cloud computing"
          categoryLink="/category/cloud-computing"
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

export default AWSCloudPractitionerCertificationTraining;
