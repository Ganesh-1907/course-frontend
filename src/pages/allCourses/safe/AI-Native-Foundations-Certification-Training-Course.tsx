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

const AiNativeFoundationsCertificationTrainingCourse = () => {
  const highlights = [
    { "text": "Instructor-led live sessions by certified AI experts", icon: <Monitor className="w-5 h-5" /> },
    { "text": "Curriculum aligned with global AI literacy standards", icon: <Award className="w-5 h-5" /> },
    { "text": "Real-world case studies and business applications", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Focus on responsible and ethical AI practices", icon: <UserCheck className="w-5 h-5" /> },
    { "text": "Interactive and collaborative learning environment", icon: <Users className="w-5 h-5" /> },
    { "text": "Lifetime access to course materials", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "Guidance to build an actionable AI adoption roadmap", icon: <TrendingUp className="w-5 h-5" /> },
    { "text": "Assessment-based industry-recognized certification", icon: <FileText className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Improved AI Literacy",
      "description": "Gain a deep understanding of AI concepts, terminology, and how to communicate them effectively with stakeholders."
    },
    {
      "title": "Career Growth & Recognition",
      "description": "Earn a globally recognized certification validating your ability to apply AI strategically."
    },
    {
      "title": "Enhanced Decision-Making",
      "description": "Leverage AI-driven insights and data analysis for faster and smarter business decisions."
    },
    {
      "title": "Hands-On AI Tool Experience",
      "description": "Develop practical knowledge of AI tools and workflows to improve productivity."
    },
    {
      "title": "Competitive Market Advantage",
      "description": "Position yourself as an AI-ready professional in a rapidly evolving digital landscape."
    }
  ];

  const corporateBenefits = [
    {
      "title": "AI-Driven Workforce Transformation",
      "description": "Empower teams with AI skills to drive innovation and digital transformation."
    },
    {
      "title": "Responsible & Compliant AI Adoption",
      "description": "Ensure ethical, compliant, and transparent AI implementation across departments."
    },
    {
      "title": "Operational Efficiency & Cost Optimization",
      "description": "Automate processes and enhance productivity using AI-powered workflows."
    },
    {
      "title": "Strategic Data Advantage",
      "description": "Leverage AI insights for forecasting, engagement, and performance improvement."
    },
    {
      "title": "Culture of Continuous Innovation",
      "description": "Build an AI-first mindset that encourages experimentation and sustainable growth."
    }
  ];

  const careerStats = {
    averageIncome: "$130k - $170k",
    incomeLabel: "per annum",
    employmentGrowth: "24%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "Business Leaders",
        "Project Managers",
        "Consultants",
        "HR Professionals",
        "Operations Managers",
        "Technology & Digital Transformation Teams"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Communicate AI concepts confidently across teams.",
    "Identify high-impact AI opportunities across departments.",
    "Redesign workflows using AI tools.",
    "Apply responsible and ethical AI guardrails.",
    "Strategically evaluate AI investments.",
    "Develop and execute a practical AI-Native action plan."
  ];

  const prerequisites = [
    "No coding or technical AI background required.",
    "Basic familiarity with business processes is helpful.",
    "Willingness to experiment with AI tools."
  ];

  const certificationSteps = [
    {
      "title": "Register for Training",
      "description": "Enroll in the AI-Native Foundations program."
    },
    {
      "title": "Attend Live Sessions",
      "description": "Participate in workshops and interactive learning modules."
    },
    {
      "title": "Complete the Exam",
      "description": "Pass the certification assessment successfully."
    },
    {
      "title": "Receive Certification",
      "description": "Earn your AI-Native Foundations certificate and digital badge."
    }
  ];

  const curriculumModules = [
    {
      "title": "EDGE™ Imperative",
      "topics": [
        "Exponential and disruptive forces",
        "Generative and emergent technologies",
        "Impact on industries"
      ]
    },
    {
      "title": "AI & Related Technologies",
      "topics": [
        "AI, ML, GenAI, LLMs, RAG explained",
        "Effective AI prompting techniques",
        "Real-world AI applications"
      ]
    },
    {
      "title": "AI-Native Success Factors",
      "topics": [
        "7 AI-Native Success Factors",
        "Case-based business applications"
      ]
    },
    {
      "title": "Workflow Transformation",
      "topics": [
        "Redesign workflows with AI",
        "High-impact opportunity mapping"
      ]
    },
    {
      "title": "AI-Native Roadmap",
      "topics": [
        "Strategic AI adoption plan",
        "Implementation frameworks"
      ]
    },
    {
      "title": "AI-Native Pitch",
      "topics": [
        "30-60-90 day AI action plan",
        "Pitching AI use cases effectively"
      ]
    }
  ];

  const learningObjectives = [
    {
      "title": "Understand Core AI Concepts",
      "description": "Learn AI fundamentals including ML and generative AI."
    },
    {
      "title": "Strategic AI in Business",
      "description": "Understand how AI drives innovation and competitiveness."
    },
    {
      "title": "Responsible AI Practices",
      "description": "Learn ethical AI implementation and governance frameworks."
    },
    {
      "title": "AI Opportunity Identification",
      "description": "Spot areas where AI improves productivity and outcomes."
    },
    {
      "title": "AI Governance & Risk",
      "description": "Implement safe and compliant AI adoption structures."
    },
    {
      "title": "Foundation for Advanced AI Learning",
      "description": "Prepare for deeper AI strategy and transformation roles."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AI-Native Foundations Course FAQs",
      "items": [
        {
          "question": "1. What is the AI-Native Foundations Certification Course?",
          "answer": "A structured program designed to build AI literacy and strategic AI application skills for professionals."
        },
        {
          "question": "2. How long is the course?",
          "answer": "The course spans 2 days (16–20 hours)."
        },
        {
          "question": "3. Is technical experience required?",
          "answer": "No coding background is required."
        },
        {
          "question": "4. Who should attend?",
          "answer": "Business leaders, managers, HR professionals, consultants, and digital transformation teams."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam & Certification FAQs",
      "items": [
        {
          "question": "1. What is the exam format?",
          "answer": "Online multiple-choice exam covering AI literacy and business integration."
        },
        {
          "question": "2. How do I prepare?",
          "answer": "Practice tests and official course materials are provided."
        },
        {
          "question": "3. When will I receive certification?",
          "answer": "Within a few business days after passing the exam."
        },
        {
          "question": "4. Is the certification globally recognized?",
          "answer": "Yes, it aligns with international AI literacy standards."
        }
      ]
    },
    {
      "id": "category_3",
      "label": "Payment FAQs",
      "items": [
        {
          "question": "1. Are installment options available?",
          "answer": "Yes, flexible payment plans are available."
        },
        {
          "question": "2. Is refund available?",
          "answer": "Refunds are not available; rescheduling is permitted."
        },
        {
          "question": "3. What payment methods are accepted?",
          "answer": "Credit cards, debit cards, net banking, PayPal, Stripe, and wire transfers."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "General Training FAQs",
      "items": [
        {
          "question": "1. Is this training available online?",
          "answer": "This course is currently offered in-person."
        },
        {
          "question": "2. Do I get lifetime access to materials?",
          "answer": "Yes, lifetime access to learning resources is provided."
        },
        {
          "question": "3. Who are the instructors?",
          "answer": "Certified AI and enterprise transformation experts."
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
    { "title": "Expert-Led Training", "description": "Delivered by certified AI specialists with enterprise experience." },
    { "title": "Globally Aligned Curriculum", "description": "Aligned with global AI competency frameworks." },
    { "title": "Hands-On Learning", "description": "Interactive labs and real-world case discussions." },
    { "title": "Comprehensive Resources", "description": "Study guides, toolkits, and post-training support." },
    { "title": "Career-Focused Credential", "description": "Industry-recognized AI certification." },
    { "title": "Global Credibility", "description": "Trusted training provider across 30+ countries." },
    { "title": "Exam Guidance", "description": "Structured preparation and practice tests." },
    { "title": "Post-Training Support", "description": "Mentoring and peer-learning network access." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AI-FND',
      courseName: 'AI-Native Foundations Certification Training Course',
      dateRange: 'Jul 10 - Jul 11, 2026',
      timeRange: '09:00 AM - 05:00 PM',
      trainerName: 'Expert AI Facilitator',
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
    'Validity for 1 Year with SEUs/PDUs',
    'Lifetime Access to Course Materials',
  ];

  const heroData = {
    "courseName": "AI-Native Foundations Certification Training Course",
    "breadcrumbName": "AI-Native Foundations Certification Training | Viovn",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Build AI Literacy and Drive Responsible AI Adoption in Business.",
    "benefits": [
      "Strategic AI Application",
      "Responsible AI Practices",
      "Industry-Recognized Certification",
      "Hands-On Case Studies"
    ],
    "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AI-Native Foundations Training Overview",
    "description": [
      "This two-day program builds AI literacy and practical AI adoption capabilities.",
      "Designed for business and technical professionals to apply AI strategically.",
      "Participants learn frameworks, tools, governance, and transformation planning."
    ],
    "whatIsTitle": "What is the AI-Native Foundations Course?",
    "whatIsDescription": [
      "A comprehensive certification validating the ability to apply AI thinking and tools in real-world business settings."
    ],
    "whatsIncludedTitle": "What's Included?",
    "whatsIncludedDescription": [
      "AI fundamentals sessions",
      "Hands-on workshops",
      "Prompt engineering exercises",
      "Strategic AI roadmap planning",
      "Official materials and exam support"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "AI & GenAI fundamentals",
      "Prompt engineering",
      "Workflow redesign using AI",
      "AI governance frameworks",
      "Strategic AI adoption planning"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Currently offered in-person classroom format."
    ]
  };

  const corporateData = {
    "courseName": "Why Viovn for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Enterprise-focused AI transformation training designed for scalable and responsible adoption."
  };

  const courseMetadata = {
    shortName: 'AI Foundations',
    shortNameAlt: 'AI-Native Foundations',
    fullName: 'AI-Native Foundations Certification Training Course',
    fullNameAlt: 'AI-Native Foundations Certification Training | Viovn',
    certificateName: 'AI-Native Foundations',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your AI-Native Foundations certification training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AI-Native Foundations Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Viovn',
      certificateType: 'AI-Native Foundations Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified AI Facilitator',
      signer2Role: 'Chief Strategy Officer',
    },
  };

  const commonAttendeesList = [
    "Business Leaders",
    "Project Managers",
    "Consultants",
    "HR Professionals",
    "Operations Managers",
    "Technology & Digital Transformation Teams"
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
      ltpLabel: 'Strategic AI Partner',
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

export default AiNativeFoundationsCertificationTrainingCourse;
