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

const ICAgileEnterpriseAgileCoachingCertificationTraining = () => {
  const highlights = [
    { "text": "16 Hours of Live Instructor-Led Online Training" },
    { "text": "Earn 16 SEUs and 16 PDUs Upon Completion" },
    { "text": "Globally Recognized ICAgile-Accredited ICP-CAT Certification" },
    { "text": "Hands-On Learning with Real-World Simulations" },
    { "text": "Official ICAgile-Authorized Courseware Included" },
    { "text": "Mentorship by Experienced Enterprise Agile Coaches" }
  ];

  const individualBenefits = [
    {
      "title": "Advanced Enterprise Coaching Skills",
      "description": "Build strong capabilities to coach large-scale Agile transformations."
    },
    {
      "title": "Professional Credibility",
      "description": "Enhance your reputation as a trusted enterprise Agile transformation coach."
    },
    {
      "title": "Leadership Coaching Expertise",
      "description": "Develop skills to coach senior leaders and executive stakeholders."
    },
    {
      "title": "Career Growth Opportunities",
      "description": "Unlock senior roles such as Enterprise Agile Coach and Transformation Consultant."
    },
    {
      "title": "Globally Recognized Credential",
      "description": "Earn the respected ICAgile ICP-CAT certification issued directly by ICAgile."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Sustainable Agile Transformation",
      "description": "Enable long-term, effective Agile change initiatives across the enterprise."
    },
    {
      "title": "Leadership Alignment",
      "description": "Strengthen collaboration and strategic alignment among leadership teams."
    },
    {
      "title": "Reduced Change Resistance",
      "description": "Support smoother adoption through structured coaching-led change."
    },
    {
      "title": "Internal Coaching Capability",
      "description": "Build strong in-house Agile transformation expertise."
    },
    {
      "title": "Agile Culture Development",
      "description": "Encourage mindset shifts and sustainable cultural change toward agility."
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
        "Enterprise Agile Coaches",
        "Agile Coaches",
        "Scrum Masters with Coaching Experience",
        "Transformation Leads",
        "Organizational Change Consultants",
        "Leaders Driving Agile Adoption"
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
    "Coach enterprise-level Agile transformations.",
    "Apply systems thinking to complex organizational change.",
    "Engage effectively with leadership and senior stakeholders.",
    "Enable sustainable Agile culture shifts.",
    "Design and guide long-term transformation strategies."
  ];

  const prerequisites = [
    "No mandatory prerequisites.",
    "Prior Agile coaching or transformation experience is strongly recommended.",
    "Foundational ICAgile certifications such as ICP-ENT are beneficial."
  ];

  const certificationSteps = [
    {
      "title": "Attend the Training",
      "description": "Complete the 16-hour ICAgile-authorized ICP-CAT training."
    },
    {
      "title": "Participate Actively",
      "description": "Engage in experiential learning, discussions, and transformation simulations."
    },
    {
      "title": "Complete Required Assignment",
      "description": "Submit coursework demonstrating your understanding of transformation coaching."
    },
    {
      "title": "Receive Certification",
      "description": "Earn the ICP-CAT credential issued directly by ICAgile."
    }
  ];

  const curriculumModules = [
    {
      "title": "Module 1: Exploring Leadership and Culture",
      "topics": [
        "Leadership Styles and Organizational Culture",
        "Enterprise Agile Coaching Skills",
        "Organizational Culture Models",
        "Culture Assessment Approaches"
      ]
    },
    {
      "title": "Module 2: Change Processes and Strategies",
      "topics": [
        "Human and Organizational Change Processes",
        "Business Case for Change",
        "Agile Transformation Strategies",
        "Organizational Assessments",
        "Communicating Change at Enterprise Level"
      ]
    },
    {
      "title": "Module 3: Coaching Through Change",
      "topics": [
        "Coaching and Advising Leaders",
        "Professional Coaching Practices",
        "Trusted Advisor Stance",
        "Self-Mastery and Professional Ethics",
        "Enterprise Coaching Contracts"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Enterprise Transformation Coaching",
      "description": "Guide organizations through large-scale Agile transformation journeys."
    },
    {
      "title": "Leadership & Culture Alignment",
      "description": "Support leadership teams in building agile, adaptive cultures."
    },
    {
      "title": "Systems Thinking Application",
      "description": "Apply systems thinking to navigate complex enterprise challenges."
    },
    {
      "title": "Strategic Business Alignment",
      "description": "Align transformation initiatives with measurable business outcomes."
    },
    {
      "title": "Ethical & Responsible Change",
      "description": "Coach transformation initiatives with strong ethical awareness."
    },
    {
      "title": "Cross-Functional Collaboration",
      "description": "Enable enterprise-wide collaboration across departments and functions."
    }
  ];

  const faqCategories = [
  {
    "id": "category_1",
    "label": "Certification FAQs",
    "items": [
      {
        "question": "What is ICAgile ICP-CAT Certification?",
        "answer": "ICAgile ICP-CAT (Coaching Agile Transformations) is an advanced-level certification focused on developing enterprise Agile transformation coaching capabilities. It prepares professionals to guide leaders and organizations through complex Agile change initiatives."
      },
      {
        "question": "Is there an exam for ICP-CAT certification?",
        "answer": "No, there is no formal exam for ICP-CAT certification. The credential is awarded based on successful course participation and completion of required assignments."
      },
      {
        "question": "Who should attend the ICP-CAT course?",
        "answer": "The course is ideal for Enterprise Agile Coaches, Agile Coaches, Scrum Masters with coaching experience, Transformation Leads, Organizational Change Consultants, and leaders driving Agile transformation."
      },
      {
        "question": "Are there any prerequisites for ICP-CAT training?",
        "answer": "There are no mandatory prerequisites. However, prior Agile coaching experience and foundational ICAgile certifications (such as ICP-ENT) are strongly recommended."
      },
      {
        "question": "How do I get certified in ICP-CAT?",
        "answer": "You must complete the ICAgile-authorized training, actively participate in course activities, and successfully complete the required assignments. The certification is then issued directly by ICAgile."
      },
      {
        "question": "How long is the ICP-CAT certification valid?",
        "answer": "ICP-CAT certification is valid for a lifetime. There is no renewal or annual maintenance fee."
      },
      {
        "question": "Will I receive a digital badge?",
        "answer": "Yes, upon certification, you will receive a digital ICAgile credential that can be shared on LinkedIn and other professional platforms."
      },
      {
        "question": "Is ICP-CAT globally recognized?",
        "answer": "Yes, ICAgile certifications are globally recognized and respected across industries for advanced Agile coaching expertise."
      },
      {
        "question": "How many PDUs and SEUs can I earn?",
        "answer": "Participants can earn up to 16 PDUs and 16 SEUs upon successful completion of the 16-hour training."
      }
    ]
  },
  {
    "id": "category_2",
    "label": "Training & Course FAQs",
    "items": [
      {
        "question": "What is the duration of the ICP-CAT training?",
        "answer": "The ICP-CAT course typically consists of 16 hours of live instructor-led training delivered over two days or multiple interactive sessions."
      },
      {
        "question": "What topics are covered in ICP-CAT training?",
        "answer": "The course covers enterprise Agile coaching, organizational change processes, leadership coaching, systems thinking, cultural transformation, and sustainable Agile adoption strategies."
      },
      {
        "question": "Is the training theoretical or practical?",
        "answer": "ICP-CAT training is highly experiential and practice-focused. It includes case studies, simulations, leadership coaching exercises, and real-world transformation scenarios."
      },
      {
        "question": "What delivery modes are available?",
        "answer": "The course is offered through live online instructor-led sessions and corporate group training programs."
      },
      {
        "question": "Do I receive course materials?",
        "answer": "Yes, participants receive official ICAgile-authorized courseware and supporting learning materials."
      },
      {
        "question": "What career opportunities are available after ICP-CAT certification?",
        "answer": "ICP-CAT certification supports career growth into roles such as Enterprise Agile Coach, Transformation Consultant, Organizational Change Coach, Agile Practice Lead, and senior coaching positions."
      }
    ]
  },
  {
    "id": "category_3",
    "label": "Payment & Enrollment FAQs",
    "items": [
      {
        "question": "Can I pay in installments?",
        "answer": "Yes, installment options may be available. Please contact our support team for detailed payment plans."
      },
      {
        "question": "Do you offer corporate discounts?",
        "answer": "Yes, we offer special pricing and customized packages for corporate group enrollments."
      },
      {
        "question": "Is there any transaction or processing fee?",
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
        "question": "What is the refund policy?",
        "answer": "Refunds are not available. However, you may reschedule your training as per policy terms."
      },
      {
        "question": "How do I enroll in the ICP-CAT course?",
        "answer": "Select your preferred training schedule, complete registration, make the payment, and you will receive confirmation with further instructions."
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
      "title": "ICAgile-Authorized Training Partner",
      "description": "Programs fully aligned with ICAgile learning objectives and standards."
    },
    {
      "title": "Experienced Transformation Coaches",
      "description": "Learn from professionals who have led enterprise Agile transformations."
    },
    {
      "title": "Practice-Focused Learning",
      "description": "Experiential learning with real-world organizational case studies."
    },
    {
      "title": "Interactive & Engaging Sessions",
      "description": "Highly interactive coaching labs, reflections, and exercises."
    },
    {
      "title": "Industry-Relevant Case Studies",
      "description": "Exposure to real transformation challenges across industries."
    },
    {
      "title": "Globally Recognized Credential",
      "description": "ICP-CAT certification respected worldwide."
    },
    {
      "title": "Flexible Delivery Options",
      "description": "Available in live online and corporate formats."
    },
    {
      "title": "Post-Training Support",
      "description": "Ongoing guidance and learning resources beyond course completion."
    }
  ];
  const sidePanelSchedules = [
    {
      courseCode: 'ICP-CAT',
      courseName: 'ICAgile Coaching Agile Transformations (ICP-CAT) Training',
      dateRange: 'Mar 25 - Mar 26, 2026',
      timeRange: '10:00 AM - 06:00 PM IST',
      trainerName: 'Expert Enterprise Coach',
      trainerImage:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 65,000',
      discountedPrice: 'INR 58,500',
      discountPercentage: '10',
    },
  ];

  const certificateBenefits = [
    'Digital Badge for LinkedIn & PDF Copy',
    'Access to Premium Alumni Network',
    'Validity for 2 Years with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "ICAgile Coaching Agile Transformations (ICP-CAT) Certification Training",
    "breadcrumbName": "ICP-CAT Certification | Coaching Agile Transformations Course",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Develop advanced enterprise coaching capabilities to lead Agile transformations.",
    "benefits": [
      "16 Hours Live Instructor-Led Training",
      "Enterprise Transformation Coaching Skills",
      "No Exam – Assignment-Based Certification",
      "Globally Recognized ICAgile Credential",
      "Lifetime Valid Certification"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "ICAgile Coaching Agile Transformations (ICP-CAT)",
    "description": [
      "ICP-CAT is an advanced-level ICAgile-accredited program focused on enterprise Agile transformation coaching.",
      "The course equips professionals with systems thinking, leadership coaching, and organizational change strategies.",
      "Participants gain practical experience to support sustainable Agile adoption at scale."
    ],
    "whatIsTitle": "",
    "whatIsDescription": [],
    "whatsIncludedTitle": "What’s Included in This Course?",
    "whatsIncludedDescription": [
      "Official ICAgile-Authorized Curriculum",
      "Transformation-Focused Case Studies",
      "Interactive Coaching Labs",
      "Assignment-Based Certification Process",
      "Access to Global Agile Community"
    ],
    "skillsTitle": "Skills Covered in ICP-CAT Training",
    "skills": [
      "Enterprise Agile Coaching",
      "Organizational Change Strategy",
      "Leadership Coaching",
      "Systems Thinking",
      "Cultural Transformation",
      "Transformation Roadmapping",
      "Stakeholder Engagement",
      "Ethical Coaching Practices"
    ],
    "modesTitle": "Training Delivery Modes",
    "modesDescription": [
      "Live Online Instructor-Led Training",
      "Corporate Group Training (Onsite or Virtual)",
      "Interactive and Experiential Learning Format"
    ]
  };

  const corporateData = {
    "courseName": "Why Simpliaxis for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "We provide enterprise-focused ICAgile ICP-CAT training tailored to organizational transformation needs, enabling sustainable Agile adoption, leadership alignment, and measurable business outcomes."
  };

  const courseMetadata = {
    shortName: 'ICP-CAT',
    shortNameAlt: 'ICP-CAT',
    fullName: 'ICAgile Coaching Agile Transformations (ICP-CAT)',
    fullNameAlt: 'ICAgile Enterprise Agile Coaching',
    certificateName: 'Coaching Agile Transformations',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "Earning your ICP-CAT certification establishes you as a high-level enterprise coach, capable of leading complex organizational transformations and influencing cultural shifts toward sustainable agility.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites for ICAgile ICP-CAT Certification Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'ICAgile',
      certificateType: 'Certificate of Mastery',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized as an',
      signer1Role: 'ICAgile Authorized Instructor',
      signer2Role: 'Executive Director, ICAgile',
    },
  };

  const commonAttendeesList = [
    "Enterprise Agile Coaches",
    "Agile Coaches",
    "Scrum Masters with Coaching Experience",
    "Transformation Leads",
    "Organizational Change Consultants",
    "Leaders Driving Agile Adoption"
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
      ltpLabel: 'Official ICAgile Member Organization',
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

export default ICAgileEnterpriseAgileCoachingCertificationTraining;
