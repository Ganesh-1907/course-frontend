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

const CertifiedScrumMasterCertificationTraining = () => {
  const highlights = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Up to 16 hours Online Live Training session"
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Gain 16 PDUs and SEUs"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      text: "Get Free E-learning Access to study material"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      text: "Two-year membership with Scrum Alliance"
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      text: "Training by recognised Certified Scrum Trainers (CSTs)"
    },
    {
      icon: <Map className="w-6 h-6" />,
      text: "Complete guidance in the certification journey"
    }
  ];

  const individualBenefits = [
    {
      title: "Improve Leadership Quality",
      description: "The Certified ScrumMaster (CSM) certification will help strengthen leadership qualities, which will be beneficial when leading a team."
    },
    {
      title: "Provide Professional Advantages",
      description: "CSM certification training will increase your value as an employee in an organization, which will be an advantage for your career."
    },
    {
      title: "Earn Global Recognition",
      description: "The Certified ScrumMaster (CSM) certification is a globally recognized credential that enables individuals to apply their skills effectively and excel in their career path."
    }
  ];

  const corporateBenefits = [
    {
      title: "Enhance Productivity",
      description: "CSM certification training will increase the organization's productivity by helping to identify potential risks and eliminate unnecessary barriers."
    },
    {
      title: "Improve Team Collaboration",
      description: "Scrum fosters a culture of partnership within the team, a vital element for any successful project."
    },
    {
      title: "Enrich Team Communication",
      description: "The certification will foster open communication, ensuring that there are no misunderstandings within the team."
    },
    {
      title: "High Performance Environment",
      description: "Organizations can create a high-performance environment by implementing Scrum practices effectively."
    }
  ];

  const careerStats = {
    averageIncome: "$110k-130k",
    incomeLabel: "per annum",
    employmentGrowth: "67%",
    growthLabel: "(2022-2025)"
  };

  const attendees = [
    { group: ["Scrum Masters", "Delivery Managers", "Product Owners", "Agile Coaches"] },
    { group: ["Team Leads", "Development Managers"] }
  ];

  const companies = [
    { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Cognizant", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
    { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
    { name: "Eurofins", url: "https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg" },
    { name: "JPMorgan", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg" }
  ];

  const outcomes = [
    "CSM certification will help improve communication between the Scrum Team members, customers, stakeholders, executives, and Product Owners.",
    "Learn to boost your risk capabilities when encountering challenges.",
    "Increase engagement with people from different backgrounds and expand your network.",
    "Upscale your efficiency to individuals or as a team member."
  ];

  const prerequisites = [
    "One must be a Certified ScrumMaster (CSM) certification with the Scrum Alliance.",
    "Must have at least 12 months of prior experience specific to Scrum Master(within the past five years)."
  ];

  const certificationSteps = [
    {
      title: "Attend the Training",
      description: "Enroll in Vivon's A-CSM training, which is accredited by Scrum Alliance. Attend the 16 hours training program.",
      color: "#ff843d"
    },
    {
      title: "Validate your Experience",
      description: "Authenticate your Scrum Master experience for at least 1 year or 12 months within the last five years.",
      color: "#2ecc71"
    },
    {
      title: "License Agreement",
      description: "Acknowledge the welcome email sent by Scrum Alliance. You'll have to enter your credentials and log in to your account on Scrum Alliance's official website. Acknowledge the license agreement.",
      color: "#3498db"
    },
    {
      title: "Certification",
      description: "Download the A-CSM certification instantly and get A-CSM certified.",
      color: "#e84393"
    }
  ];

  const curriculumModules = [
    {
      title: "Coaching Concepts",
      topics: [
        "Coaching Opportunities",
        "Key coaching techniques and how they are used at the individual and Scrum Team levels",
        "Agile mentoring"
      ]
    },
    {
      title: "Agile Facilitation",
      topics: [
        "Facilitating meetings effectively",
        "Techniques for group decision making",
        "Navigating conflict within the team"
      ]
    },
    {
      title: "Deeper Dive into Lean, Agile and Scrum",
      topics: [
        "Lean principles and their application",
        "Advanced Scrum mechanics",
        "Scaling Scrum fundamentals"
      ]
    },
    {
      title: "Services to Development Team",
      topics: [
        "Coaching the Development Team",
        "Fostering self-organization",
        "Improving team dynamics"
      ]
    },
    {
      title: "Services to Product Owner",
      topics: [
        "Helping the Product Owner with the Product Backlog",
        "Facilitating collaboration between the PO and the team",
        "Advancing product development agility"
      ]
    },
    {
      title: "Services to Organization",
      topics: [
        "Advising on Agile transitions",
        "Impacting organizational culture",
        "Removing organizational impediments"
      ]
    },
    {
      title: "Personal Development",
      topics: [
        "Scrum Master as a Leader",
        "Continuous learning and growth",
        "Building a personal roadmap"
      ]
    }
  ];

  const learningObjectives = [
    {
      title: "Product Owner Skills:",
      description: "CSPO certification training helps professionals learn the required skills required to excel the career as a Product Owner. The skills include backlog management, decision-making and prioritization that ensures products are compliant to customer’s requirements."
    },
    {
      title: "Lead Agile Teams:",
      description: "CSPOs will learn the ways of leading Agile teams by providing them with the clarity of setting goals, direction, fostering collaborative environments, and enabling teams to work seamlessly and deliver results."
    },
    {
      title: "Facilitate Communication:",
      description: "Honing communication and keep open minds to work together will help meet project goals, progress, and requirements to stakeholders and team members."
    },
    {
      title: "Implement Scrum Functionality:",
      description: "Gaining a profound understanding of Scrum principles and practices will help you establish Scrum functionality in the team and hence the organization."
    },
    {
      title: "Plan Better:",
      description: "Planning effectively can enhance sprint planning, creating product roadmaps, release planning, and enable CSPOs to compartmentalize and meet objectives."
    },
    {
      title: "Manage Risks:",
      description: "CSPO certification training online will help identify, manage and mitigate risks effectively."
    },
    {
      title: "Improve ROI:",
      description: "CSPOs are more than capable of improving the ROI of an organization when they’re training to prioritize features and at the same time deliver values to stakeholders."
    },
    {
      title: "Faster Delivery:",
      description: "CSPOs during their training and after, gain insights of Agile methodologies and promote product delivery faster. You will learn how to manage increments and continuously deliver invaluable features."
    },
    {
      title: "Scope of the Product Owner Role:",
      description: "During training, a future Product Owner will be clarified about the responsibilities and scope of the role. And as they gain experience after getting the certification, they become proficient in Agile project management."
    }
  ];

  const faqCategories = [
    {
      id: "courses",
      label: "FAQ Courses",
      items: [
        {
          question: "What is an Advanced Certified ScrumMaster (A-CSM) Certification?",
          answer: "The Advanced Certified ScrumMaster (A-CSM) certification is the advanced level of Scrum credentials. Based on Scrum Framework and Real-world practices, our A-CSM course covers advanced Scrum approaches, team facilitation and mentoring, and scaling Scrum across organizations."
        },
        {
          question: "What are the prerequisites to attend the Advanced Certified ScrumMaster (A-CSM) training?",
          answer: "To attend A-CSM training, you must hold a current Certified ScrumMaster (CSM) certification from Scrum Alliance and have at least 12 months of work experience specific to the role of Scrum Master within the past five years."
        },
        {
          question: "What are the benefits of Advanced Certified ScrumMaster (A-CSM) certification training?",
          answer: "Benefits include standing out in the global job market, increasing your value to your organization, demonstrating advanced knowledge of Scrum, and gaining access to a global community of Agile professionals."
        },
        {
          question: "Who can go for the Advanced Certified ScrumMaster (A-CSM) certification?",
          answer: "Existing Certified Scrum Masters who want to take their skills to the next level, Agile Coaches, and Team Leads who are already practicing Scrum and meet the prerequisites."
        }
      ]
    },
    {
      id: "payment",
      label: "FAQ Payment",
      items: [
        {
          question: "What are the payment options available?",
          answer: "We accept all major credit cards, debit cards, and net banking. You can also pay via PayPal or bank transfer for corporate bookings."
        }
      ]
    },
    {
      id: "generic",
      label: "FAQ Generic",
      items: [
        {
          question: "Will I get a certificate after the training?",
          answer: "Yes, upon successful completion of the training and meeting all Scrum Alliance requirements, you will receive your A-CSM certification."
        }
      ]
    }
  ];
  const courseFeatures = [
    {
      icon: Users,
      title: "Guaranteed to",
      subtitle: "Run Workshops",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Expert-Led Study",
      subtitle: "Sessions",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: Network,
      title: "Networking",
      subtitle: "Opportunities",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: CreditCard,
      title: "Flexible Monthly",
      subtitle: "Payment Plans",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: FileText,
      title: "Real-World Case",
      subtitle: "Studies",
      color: "bg-red-50 text-red-600"
    },
    {
      icon: Briefcase,
      title: "Hands-On Project",
      subtitle: "Experience",
      color: "bg-cyan-50 text-cyan-600"
    }
  ];

  const courseClients = [
    { name: "Wells Fargo", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg" },
    { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
    { name: "Bosch", logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
    { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
    { name: "KPMG", logo: "https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg" },
    { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
    { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
    { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
    { name: "Hexaware", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexaware_new_logo.svg" },
    { name: "Thomson Reuters", logo: "https://upload.wikimedia.org/wikipedia/en/b/b3/Thomson_Reuters_logo.svg" },
  ];

  const courseTrainers = [
    {
      name: "Ram Srinivasan",
      role: "Certified Scrum Trainer (CST)",
      rating: "4.8",
      experience: "15+ Years",
      description: "Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Axel Wilhelm Berle",
      role: "Senior Agile Coach",
      rating: "4.9",
      experience: "20+ Years",
      description: "Axel Wilhelm Berle has been an international IT consultant and software developer in a wide range of industries, helping teams achieve peak performance.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Raquel Silva",
      role: "Agile Coach & Mentor",
      rating: "4.8",
      experience: "10+ Years",
      description: "Raquel Silva is an Agile Coach who cares passionately about helping deliver value to clients through sustainable and effective Scrum practices.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const courseWhySimpliaxis = [
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Every Course is recognized by the most reputable certification organizations globally, ensuring credibility and acceptance across all industries. Our A-CSM certification, provided by the Scrum Alliance, offers global recognition in Scrum practices."
    },
    {
      icon: User,
      title: "Expert Trainers",
      description: "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes. Experienced CSTs deliver our Advanced Certified ScrumMaster (A-CSM) training, bringing over 15 years of experience."
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      description: "Our Advanced Certified ScrumMaster (A-CSM) certification training offers a variety of methods of learning, such as online, 1:1 doubt clearing, and corporate Training, that meet the needs of different individuals and their schedules."
    },
    {
      icon: Network,
      title: "Lifetime Access",
      description: "Enjoy all-year access to the recordings of A-CSM training sessions, course materials, and study tools."
    },
    {
      icon: Users,
      title: "Proven Track Record",
      description: "We are a reputable training provider with extensive experience in helping professional and business organizations enhance their capabilities and achieve their career objectives. You can trust us regarding your A-CSM training needs."
    },
    {
      icon: Laptop,
      title: "End-to-End Assistance",
      description: "Vivon provides ongoing support before, during, and after training, including study materials, guidance for participants on A-CSM certification, and assistance with career choices."
    },
    {
      icon: Headset,
      title: "Interactive and Engaging Training",
      description: "Our Advanced Certified ScrumMaster (A-CSM) training sessions are designed to be highly interactive, featuring real-world scenarios with group participation and Q&A sessions to facilitate a deeper understanding of the material."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "A-CSM certification is the new and additional certification introduced by Scrum Alliance. If you are working in a Scrum Master role, it can be a skill development process that helps in your career advancement and opens up multiple opportunities."
    }
  ];

  const sidePanelSchedules = [
    {
      courseCode: "SCM",
      courseName: "Advanced Certified Scrum Master (A-CSM®) Training",
      dateRange: "Feb 28 - Mar 01, 2026",
      timeRange: "08:30 AM - 04:30 PM IST",
      trainerName: "Naveen Nanjundappa",
      trainerImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
      originalPrice: "INR 49,080",
      discountedPrice: "INR 34,356",
      discountPercentage: "30"
    }
  ];

  const certificateBenefits = [
    "Digital Badge for LinkedIn & PDF Copy",
    "Access to Premium Alumni Network",
    "Validity for 2 Years with SEUs/PDUs",
    "Lifetime Access to Course Materials"
  ];

  const heroData = {
    courseName: "CSM Certification Training Course",
    breadcrumbName: "Certified Scrum Master (CSM®) Certification Training",
    rating: "5.0",
    enrolledCount: "73k+",
    subtitle: "Join our Certified Scrum Master training with real-time Scrum simulations!",
    benefits: [
      "30+ Guaranteed Live CSM Training Sessions Every Month!",
      "Get Trained by Certified Scrum Trainers with 15+ Years of Experience!",
      "Achieve Scrum Master Certification + 2-Year Scrum Alliance Membership!",
      "CSM Certification Exam Fee Included With Our CSM Training Cost!",
      "Practice Exams, Quizzes, Interview Toolkit Included in Our CSM Course!"
    ],
    mainImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070",
    badgeImage: "/csm-badge.png"
  };

  const overviewContent = {
    title: "Course Overview",
    subtitle: "Overview of CSPO Certification",
    description: [
      "Course Overview"
    ],
    whatIsTitle: "What is CSPO Certification Training?",
    whatIsDescription: [
      "CSPO certification equips professionals with rigorous Scrum Product Owner training. The course covers the duties, abilities, and tactics needed to succeed in the PO role. CSPO training enables professionals to effectively manage and prioritize the product backlog, thereby helping the development team grasp the product vision and objectives. Certified Scrum Product Owner certification training provided professionals with product development skills, significantly boosting their careers.",
      "Professionals learn product backlog management, stakeholder engagement, and prioritization in 2-days CSPO training with Vivon. Our certified Scrum Product Owner professionals can manage complex project roles and accomplish desired results. CSPO certification can boost employment chances, earnings, and industry reputation as a knowledgeable product owner."
    ],
    whatsIncludedTitle: "What’s Included in Our CSPO Training Course?",
    whatsIncludedDescription: "Our Certified Scrum Product Owner course familiarizes participants with product backlog prioritization, stakeholder management, and Sprint planning. You can learn the Agile product delivery system in our CSPO training. Vivon’s CSPO certification training course includes:"
  }

  const corporateData = {
    courseName: "A-CSM",
    label: "Corporate Solutions",
    buttonText: "Corporate Group Inquiry",
    description: "With learning targeted to your unique team environment, we at Viovn helps to resolve your specific issues and meet your specific needs with tailored training methods. We offer corporate training globally to keep Organizations up to date by building the knowledge gap required and make them strive in the competitive world with the right skills according to the industry needs. Preferred by many MNC's, Startups, and Organizations among all sectors. Trusted by X clients and meet their training needs. Skilled training experts and professionals around the world with good command of the subjects. Delivering tailoring modules for your enterprises by highly qualified experts."
  };

  const courseMetadata = {
    shortName: "CSM",
    shortNameAlt: "A-CSM",
    fullName: "Advanced Certified Scrum Master (A-CSM®)",
    fullNameAlt: "Advance Certified Scrum Master (A-CSM)",
    certificateName: "Advanced Scrum Master"
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle: "What are the Learning Outcomes of the CSM Certification Course?",
      outcomesFooter: "After completing your Certified Scrum Master® Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization."
    },
    prerequisites: {
      subtitle: "What are the Prerequisites Required for Advanced Scrum Master Training?"
    },
    certificate: {
      mockupName: "ALEX BRYANT",
      label: "Official Accreditation",
      titlePrefix: "Earn Your",
      titleHighlight: "Global",
      titleSuffix: "Recognition",
      issuerName: "Scrum Alliance",
      certificateType: "Certificate of Mastery",
      certifyText: "This is to certify that",
      requirementText: "Has successfully fulfilled all requirements to be recognized as an",
      signer1Role: "Certified Trainer",
      signer2Role: "Executive Director"
    }
  };

  const commonAttendeesList = [
    "Scrum Masters",
    "Team Leads",
    "Development Managers",
    "Delivery Managers",
    "Product Owners",
    "Agile Coaches"
  ];

  const pageCaptions = {
    tabs: {
      overview: "Course overview",
      benefits: "Benefits",
      prerequisites: "Prerequisites",
      curriculum: "Curriculum",
      faqs: "FAQs"
    },
    hero: {
      referEarnText: "Refer & Earn",
      enrolledSuffix: "Enrolled",
      moneyBackText: "100% Money Back Guarantee",
      ltpLabel: "Global LTP of Scrum Alliance",
      downloadBtnText: "Download Brochure",
      viewSchedulesBtnText: "View Schedules",
      freeAssessmentBtnText: "Free Assesment"
    }
  };

  const tabs = [
    {
      id: "overview",
      label: pageCaptions.tabs.overview,
      content: (
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
            <h4 className="text-[14px] text-slate-500 font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
              {overviewContent.title}
            </h4>
            <h2 className="text-2xl md:text-3xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
              {overviewContent.subtitle} <span className="text-blue-400">✦</span>
            </h2>
            <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
              {overviewContent.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              
              <h3 className="text-2xl font-black text-[#001c3d] pt-4">{overviewContent.whatIsTitle}</h3>
              {overviewContent.whatIsDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <h3 className="text-2xl font-black text-[#001c3d] pt-4">{overviewContent.whatsIncludedTitle}</h3>
              <p>{overviewContent.whatsIncludedDescription}</p>
            </div>
          </div>

          <CourseHighlights 
            courseName={courseMetadata.shortName} 
            highlights={highlights} 
          />
          <CourseCareerUpliftment 
            courseName={courseMetadata.shortName}
            stats={careerStats}
            attendees={attendees}
            companies={companies}
            outcomes={outcomes}
            outcomesTitle={sectionsLabels.careerUpliftment.outcomesTitle}
            outcomesFooter={sectionsLabels.careerUpliftment.outcomesFooter}
          />
        </div>
      )
    },
    { 
      id: "benefits", 
      label: pageCaptions.tabs.benefits, 
      content: (
        <div className="space-y-6">
          <CourseBenefits 
            courseName={courseMetadata.shortName}
            individualBenefits={individualBenefits}
            corporateBenefits={corporateBenefits}
          />
          <CourseCommonAttendees 
            courseName={courseMetadata.shortName}
            attendees={commonAttendeesList}
          />
        </div>
      )
    },
    { 
      id: "prerequisites", 
      label: pageCaptions.tabs.prerequisites, 
      content: (
        <div className="space-y-6">
          <CoursePrerequisites 
            courseName={courseMetadata.shortNameAlt}
            prerequisites={prerequisites}
            subtitle={sectionsLabels.prerequisites.subtitle}
          />
          <CourseStepByStepProcess 
            courseName={courseMetadata.fullNameAlt}
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
      )
    },
    { 
      id: "curriculum", 
      label: pageCaptions.tabs.curriculum, 
      content: (
        <div className="space-y-6">
          <CourseCurriculum 
            courseName={courseMetadata.shortNameAlt} 
            modules={curriculumModules} 
          />
        </div>
      )
    },
    { 
      id: "faqs", 
      label: pageCaptions.tabs.faqs, 
      content: (
        <CourseFAQs 
          courseName={courseMetadata.shortNameAlt}
          categories={faqCategories}
        />
      )
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
                courseName={courseMetadata.shortNameAlt}
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

export default CertifiedScrumMasterCertificationTraining;
