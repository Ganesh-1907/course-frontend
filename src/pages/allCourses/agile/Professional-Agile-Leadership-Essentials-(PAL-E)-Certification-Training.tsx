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

const ProfessionalAgileLeadershipEssentialsCertificationTraining = () => {
  const highlights = [
    { "text": "Highly Qualified, Certified & Accredited Scrum.org Trainers" },
    { "text": "Interactive Instructor-Led Professional Agile Leadership Training" },
    { "text": "Industry-Driven Case Studies & Experience-Based Scenarios" },
    { "text": "Industry-Recognized PAL I Certification with Official Logo" },
    { "text": "Earn 14 PDUs and 14 SEUs After 2-Day Training" },
    { "text": "Your Name Listed on Scrum.org Upon Certification" },
    { "text": "24/7 Support and Assistance" }
  ];

  const individualBenefits = [
    {
      "title": "Leadership Agility",
      "description": "Develop the mindset and capabilities required to lead Agile organizations effectively."
    },
    {
      "title": "Value-Driven Decision Making",
      "description": "Understand how leadership impacts value delivery and organizational outcomes."
    },
    {
      "title": "Improved Organizational Culture",
      "description": "Learn how to create environments that foster high-performing Agile teams."
    },
    {
      "title": "Global Recognition",
      "description": "Earn a respected Scrum.org PAL I certification."
    },
    {
      "title": "Career Advancement",
      "description": "Enhance opportunities in Agile leadership and enterprise transformation roles."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Stronger Agile Leadership",
      "description": "Equip leaders with skills to support Agile transformation successfully."
    },
    {
      "title": "Improved Value Delivery",
      "description": "Align leadership strategies with product and business value."
    },
    {
      "title": "Enhanced Team Performance",
      "description": "Create empowered, motivated, and high-performing teams."
    },
    {
      "title": "Organizational Agility",
      "description": "Support enterprise-wide agility and cultural evolution."
    },
    {
      "title": "Sustainable Transformation",
      "description": "Drive long-term Agile adoption through leadership alignment."
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
      "group": [
        "Senior Leaders",
        "Executives and Directors",
        "Managers Leading Agile Teams",
        "Transformation Leaders",
        "Agile Coaches",
        "Organizational Decision Makers"
      ]
    }
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
    "Understand the role of leadership in Agile transformation.",
    "Improve value delivery across the organization.",
    "Foster a culture of professionalism and accountability.",
    "Align leadership practices with Agile principles.",
    "Support scaling initiatives effectively."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Basic understanding of Agile and Scrum is recommended.",
    "Experience in leadership or management roles is beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Attend Training",
      "description": "Complete the 2-day Professional Agile Leadership (PAL I) training."
    },
    {
      "title": "Receive Assessment Password",
      "description": "Get access to the PAL I assessment from Scrum.org."
    },
    {
      "title": "Take the Exam",
      "description": "Attempt the 36-question assessment within 60 minutes."
    },
    {
      "title": "Get Certified",
      "description": "Score at least 85% to earn your PAL I certification with lifetime validity."
    }
  ];

  const curriculumModules = [
    {
      "title": "Professional Agile Leadership (PAL I) Certification Training",
      "topics": [
        "Agile Theory and Principles",
        "Improving Value Delivery",
        "Value – The \"What\"",
        "Culture – The \"Who\"",
        "Professionalism – The \"How\"",
        "Scaling Agile Leadership"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Leadership & Agility",
      "description": "Understand how leadership behaviors influence organizational agility."
    },
    {
      "title": "Value Optimization",
      "description": "Learn to measure and improve value delivery."
    },
    {
      "title": "Cultural Transformation",
      "description": "Create and sustain an Agile-friendly organizational culture."
    },
    {
      "title": "Professional Accountability",
      "description": "Promote professionalism within Scrum Teams and leadership."
    },
    {
      "title": "Scaling Leadership Impact",
      "description": "Support scaling initiatives through leadership alignment."
    }
  ];

  const faqCategories = [
  {
    "id": "category_1",
    "label": "Certification FAQs",
    "items": [
      {
        "question": "What is the Professional Agile Leadership (PAL I) certification?",
        "answer": "Professional Agile Leadership (PAL I) is a globally recognized certification from Scrum.org designed for leaders and managers who want to maximize the benefits of Agile within their organizations. It focuses on leadership accountability, value delivery, culture, and professionalism."
      },
      {
        "question": "Are there any prerequisites for PAL I training?",
        "answer": "There are no mandatory prerequisites. However, a basic understanding of Agile and Scrum concepts and leadership experience is recommended."
      },
      {
        "question": "What is the format of the PAL I certification exam?",
        "answer": "The PAL I assessment consists of 36 multiple-choice, multiple-answer, and true/false questions. The duration is 60 minutes and it is a closed-book exam."
      },
      {
        "question": "What is the passing score for the PAL I exam?",
        "answer": "You must score at least 85% to pass the PAL I assessment and earn the certification."
      },
      {
        "question": "How much does the PAL I assessment cost?",
        "answer": "The PAL I assessment costs $200 USD per attempt."
      },
      {
        "question": "How long is the PAL I certification valid?",
        "answer": "The PAL I certification is valid for a lifetime and does not require renewal."
      },
      {
        "question": "Is training mandatory to take the PAL I exam?",
        "answer": "Training is not mandatory but is highly recommended to improve your understanding and increase your chances of passing the assessment."
      },
      {
        "question": "Will my name be listed publicly after certification?",
        "answer": "Yes, upon passing the exam, your name will be listed on Scrum.org as a certified Professional Agile Leader."
      },
      {
        "question": "How many PDUs and SEUs can I earn?",
        "answer": "You can earn up to 14 PDUs and 14 SEUs after attending the 2-day PAL I training program."
      }
    ]
  },
  {
    "id": "category_2",
    "label": "Payment FAQs",
    "items": [
      {
        "question": "Can I pay in installments?",
        "answer": "Yes, installment options may be available. Please contact our support team for detailed payment plans."
      },
      {
        "question": "Do you offer corporate discounts?",
        "answer": "Yes, we provide special pricing and customized packages for corporate group enrollments."
      },
      {
        "question": "Is there any transaction fee?",
        "answer": "No, there are no additional transaction or processing fees."
      },
      {
        "question": "What payment methods are accepted?",
        "answer": "We accept credit cards, debit cards, net banking, wire transfers, PayPal, Stripe, and other secure payment options."
      },
      {
        "question": "Will I receive a payment receipt?",
        "answer": "Yes, you will receive an invoice and confirmation email immediately after successful payment."
      },
      {
        "question": "What is your refund policy?",
        "answer": "Refunds are not available. However, you may reschedule your training as per policy terms."
      }
    ]
  },
  {
    "id": "category_3",
    "label": "General FAQs",
    "items": [
      {
        "question": "Who should attend PAL I training?",
        "answer": "This course is ideal for senior leaders, executives, managers, Agile coaches, and transformation leaders responsible for driving organizational agility."
      },
      {
        "question": "Is the training available online?",
        "answer": "Yes, PAL I training is available in live online instructor-led format as well as corporate group training."
      },
      {
        "question": "What happens if I miss a session?",
        "answer": "You can reschedule your training to a future batch without additional charges, subject to terms and conditions."
      },
      {
        "question": "Do I receive a certificate after training?",
        "answer": "Yes, you will receive a course completion certificate. Upon passing the Scrum.org assessment, you will receive the official PAL I certification."
      },
      {
        "question": "How do I enroll in the PAL I course?",
        "answer": "Select your preferred schedule from the website, complete registration, make the payment, and you will receive a confirmation email with further instructions."
      },
      {
        "question": "Do you provide corporate training?",
        "answer": "Yes, we offer customized corporate training programs tailored to organizational leadership needs."
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
      "description": "PAL I certification is globally recognized and respected."
    },
    {
      "title": "Expert Trainers",
      "description": "Learn from experienced Scrum.org-certified professionals."
    },
    {
      "title": "Flexible Learning",
      "description": "Live online and corporate training options available."
    },
    {
      "title": "Lifetime Certification",
      "description": "No renewal fee required after certification."
    },
    {
      "title": "Proven Track Record",
      "description": "Trusted training provider with enterprise experience."
    },
    {
      "title": "End-to-End Assistance",
      "description": "Support before, during, and after training."
    },
    {
      "title": "Interactive Sessions",
      "description": "Real-world case studies and group discussions."
    },
    {
      "title": "Wide Course Portfolio",
      "description": "Access to multiple Agile and Scrum certifications."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'PAL-E',
      courseName: 'Professional Agile Leadership - Essentials (PAL-E) Training',
      dateRange: 'Apr 05 - Apr 06, 2026',
      timeRange: '09:00 AM - 05:00 PM IST',
      trainerName: 'Expert PST-L',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 35,000',
      discountedPrice: 'INR 29,750',
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
    "courseName": "Professional Agile Leadership - Essentials (PAL-E) Certification Training",
    "breadcrumbName": "PAL-E Certification | Professional Agile Leadership Essentials Training",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Develop leadership capabilities to drive successful Agile transformations.",
    "benefits": [
      "2-Day Live Instructor-Led Training",
      "36-Question Scrum.org Assessment",
      "85% Passing Score",
      "Lifetime Valid Certification",
      "14 PDUs & 14 SEUs Earned"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "Professional Agile Leadership – Essentials (PAL I)",
    "description": [
      "The Professional Agile Leadership (PAL I) course is designed for leaders who want to maximize the benefits of Agile within their organizations.",
      "Participants learn how leadership behaviors impact value delivery, team performance, and organizational agility.",
      "This interactive 2-day training provides practical insights into creating high-performing Agile cultures and improving enterprise agility."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in This Course?",
    "whatsIncludedDescription": [
      "2-Day Course with Certified Scrum.org Trainers",
      "PAL I Assessment Password (1 Attempt)",
      "Official Scrum.org PAL-E Course Materials",
      "14 PDU / 14 SEU Credits",
      "Global Professional Agile Leadership Certification"
    ],
    "skillsTitle": "Skills Covered in PAL-E Training",
    "skills": [
      "Agile Leadership Mindset",
      "Value Measurement & Optimization",
      "Cultural Transformation Strategies",
      "Scrum Framework for Leaders",
      "Scaling Agile Leadership Impact",
      "High-Performance Team Coaching"
    ],
    "modesTitle": "Training Delivery Modes",
    "modesDescription": [
      "Live Online Instructor-Led Classroom",
      "Corporate Group Training Workshops",
      "Interactive Case-Study Based Format"
    ]
  };

  const corporateData = {
    "courseName": "Why Simpliaxis for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We deliver enterprise-focused PAL I training tailored to leadership teams, enabling strategic alignment, cultural agility, and sustainable Agile transformation across organizations."
  };

  const courseMetadata = {
    shortName: 'PAL-E',
    shortNameAlt: 'PAL I',
    fullName: 'Professional Agile Leadership - Essentials (PAL-E)',
    fullNameAlt: 'Professional Agile Leadership Certification',
    certificateName: 'Professional Agile Leadership',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your PAL I certification demonstrates your capability to lead organizational agility and culture shifts, opening doors to high-level strategic and transformation leadership roles.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for PAL-E Certification Training?',
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
    "Senior Leaders",
    "Executives and Directors",
    "Managers Leading Agile Teams",
    "Transformation Leaders",
    "Agile Coaches",
    "Organizational Decision Makers"
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

export default ProfessionalAgileLeadershipEssentialsCertificationTraining;
