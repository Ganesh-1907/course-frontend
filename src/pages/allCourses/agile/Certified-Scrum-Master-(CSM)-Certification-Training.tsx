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
  Award
} from "lucide-react";

const CertifiedScrumMasterCertificationTraining = () => {
  // --- Page Content Constants ---
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

  const careerUpliftmentData = {
    courseName: "CSM",
    stats: {
      averageIncome: "$110k-130k",
      incomeLabel: "per annum",
      employmentGrowth: "67%",
      growthLabel: "(2022-2025)"
    },
    attendees: [
      { group: ["Scrum Masters", "Delivery Managers", "Product Owners", "Agile Coaches"] },
      { group: ["Team Leads", "Development Managers"] }
    ],
    companies: [
      { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "Cognizant", url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
      { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
      { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
      { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
      { name: "Eurofins", url: "https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg" },
      { name: "JPMorgan", url: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg" }
    ],
    outcomes: [
      "CSM certification will help improve communication between the Scrum Team members, customers, stakeholders, executives, and Product Owners.",
      "Learn to boost your risk capabilities when encountering challenges.",
      "Increase engagement with people from different backgrounds and expand your network.",
      "Upscale your efficiency to individuals or as a team member."
    ],
    outcomesTitle: "What are the Learning Outcomes of the CSM Certification Course?",
    outcomesFooter: "After completing your Certified Scrum Master® Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization."
  };

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

  const attendeesList = [
    "Scrum Masters",
    "Team Leads",
    "Development Managers",
    "Delivery Managers",
    "Product Owners",
    "Agile Coaches"
  ];

  const prerequisitesData = {
    courseName: "A-CSM",
    items: [
      "One must be a Certified ScrumMaster (CSM) certification with the Scrum Alliance.",
      "Must have at least 12 months of prior experience specific to Scrum Master(within the past five years)."
    ],
    subtitle: "What are the Prerequisites Required for Advanced Scrum Master Training?"
  };

  const certificationSteps = [
    {
      title: "Attend the Training",
      description: "Enroll in Simpliaxis's A-CSM training, which is accredited by Scrum Alliance. Attend the 16 hours training program.",
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
      title: "Advanced knowledge on Scrum",
      description: "The Advanced Certified ScrumMaster (A-CSM) course enhances your Scrum knowledge. You can delve deeper into the Scrum methodologies and terminology, as well as their applications."
    },
    {
      title: "Encourage Teamwork",
      description: "Scrum encourages team engagement with work commitment and accountability. The Advanced Certified ScrumMaster (A-CSM) certification empowers professionals to be effective team players and collaborate effectively with their teams."
    },
    {
      title: "Boost Confidence",
      description: "Our Advanced Certified ScrumMaster (A-CSM) course will help you understand how to respond confidently to any uncertain changes in the project and tackle the uncertainty to overcome low motivation."
    },
    {
      title: "Increase Risk-Taking Ability",
      description: "The course will enable professionals to learn how to identify potential risks, plan effective mitigation strategies, and deliver projects successfully. A ScrumMaster with A-CSM certification signifies an advanced level of expertise in Scrum team management."
    },
    {
      title: "Open Communication",
      description: "Scrum consistently promotes effective communication among all organizational members, including the Product Owner, Scrum Team members, customers, and stakeholders. Advanced Certified ScrumMaster (A-CSM) training ensures that a ScrumMaster possesses extraordinary communication skills."
    },
    {
      title: "Continuous Learning",
      description: "A-CSM certification indicates the individual's dedication and commitment to learning and development. In addition, it signifies individual expertise, knowledge, and skills in Scrum and Agile team management."
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

  const corporateOptUsData = {
    courseName: "A-CSM",
    description: "With learning targeted to your unique team environment, we at Simpliaxis helps to resolve your specific issues and meet your specific needs with tailored training methods. We offer corporate training globally to keep Organizations up to date by building the knowledge gap required and make them strive in the competitive world with the right skills according to the industry needs. Preferred by many MNC's, Startups, and Organizations among all sectors. Trusted by X clients and meet their training needs. Skilled training experts and professionals around the world with good command of the subjects. Delivering tailoring modules for your enterprises by highly qualified experts."
  };

  const overviewText = {
    title: "Overview of CSM Certification Course",
    sections: [
      {
        text: "Simpliaxis Certified ScrumMaster (CSM) certification training helps an individual master the Scrum values and practices. Our CSM course enhances your acquired Scrum knowledge and skills to the next level. You can learn how to motivate the team and improve productivity. Our trained professionals help you know how to deal with difficult situations and tactfully handle challenges."
      },
      {
        text: "Learn to incorporate Scrum principles to facilitate better communication among team members and stakeholders through our CSM certification training. This will also help Scrum teams be more productive and deliver desired results."
      }
    ],
    q1: {
      title: "What is CSM Training?",
      content: [
        "ScrumMaster certification can range from basic to advanced. CSM is the basic level of ScrumMaster certification. The certification demonstrates your level of Scrum skills in facilitating team collaboration and coordination.",
        "This CSM course enhances the capabilities of Scrum Masters, enabling them to deliver projects on time and expand their Scrum skills, which can lead to better opportunities in Agile projects."
      ]
    },
    q2: {
      title: "What's Included in Our CSM Training?",
      content: [
        "Simpliaxis offers structured CSM training to enhance proficiency in Scrum and managing Scrum teams, ensuring project success. Our CSM training provides opportunities to scale up your Scrum insights and master the process. The main highlights of our CSM certification training include:"
      ]
    }
  };

  // --- Tab Contents ---
  const overviewTab = (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
        <h4 className="text-[14px] text-slate-500 font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
          Course Overview
        </h4>
        <h2 className="text-2xl md:text-3xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
          {overviewText.title} <span className="text-blue-400">✦</span>
        </h2>
        <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
          {overviewText.sections.map((section, idx) => (
            <p key={idx}>{section.text}</p>
          ))}
          
          <h3 className="text-2xl font-black text-[#001c3d] pt-4">{overviewText.q1.title}</h3>
          {overviewText.q1.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          <h3 className="text-2xl font-black text-[#001c3d] pt-4">{overviewText.q2.title}</h3>
          {overviewText.q2.content.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>

      <CourseHighlights 
        courseName="CSM" 
        highlights={highlights} 
      />
      <CourseCareerUpliftment 
        courseName={careerUpliftmentData.courseName}
        stats={careerUpliftmentData.stats}
        attendees={careerUpliftmentData.attendees}
        companies={careerUpliftmentData.companies}
        outcomes={careerUpliftmentData.outcomes}
        outcomesTitle={careerUpliftmentData.outcomesTitle}
        outcomesFooter={careerUpliftmentData.outcomesFooter}
      />
    </div>
  );

  const benefitsTab = (
    <div className="space-y-6">
      <CourseBenefits 
        courseName="CSM"
        individualBenefits={individualBenefits}
        corporateBenefits={corporateBenefits}
      />
      <CourseCommonAttendees 
        courseName="CSM"
        attendees={attendeesList}
      />
    </div>
  );

  const prerequisitesTab = (
    <div className="space-y-6">
      <CoursePrerequisites 
        courseName={prerequisitesData.courseName}
        prerequisites={prerequisitesData.items}
        subtitle={prerequisitesData.subtitle}
      />
      <CourseStepByStepProcess 
        courseName="Advance Certified Scrum Master (A-CSM)"
        steps={certificationSteps}
      />
      <CourseCertificate 
        courseName="Advanced Scrum Master" 
      />
    </div>
  );

  const tabs = [
    { id: "overview", label: "Course overview", content: overviewTab },
    { id: "benefits", label: "Benefits", content: benefitsTab },
    { id: "prerequisites", label: "Prerequisites", content: prerequisitesTab },
    { 
      id: "curriculum", 
      label: "Curriculum", 
      content: <CourseCurriculum courseName="A-CSM" modules={curriculumModules} /> 
    },
    { 
      id: "faqs", 
      label: "FAQs", 
      content: <CourseFAQs courseName="A-CSM" categories={faqCategories} /> 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
      <Header />

      <main className="pt-16">
        <CourseHero {...heroData} />
        
        <CourseFeatures />

        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
            {/* Left Main Content */}
            <div>
              <CourseTabs tabs={tabs} />
              
              <CourseLearningObjectives 
                courseName="A-CSM"
                objectives={learningObjectives}
              />

              <CourseCorporateOptUs {...corporateOptUsData} />

              <CourseClients />
              <CourseTrainers />
              <CourseWhySimpliaxis />
            </div>

            {/* Right Side Panel */}
            <div className="relative w-full lg:w-[340px] xl:w-[360px] lg:justify-self-end">
              <div className="sticky top-24">
                <CourseSidePanel />
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
