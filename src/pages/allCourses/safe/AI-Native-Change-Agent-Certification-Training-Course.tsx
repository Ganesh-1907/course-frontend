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
  UserCheck,
  Target,
  ShieldCheck,
  Zap,
  Layout,
  MessageSquare
} from "lucide-react";

const AiNativeChangeAgentCertificationTrainingCourse = () => {
  const highlights = [
    { "text": "Classroom sessions led by certified AI transformation professionals", icon: <Users className="w-5 h-5" /> },
    { "text": "Curriculum aligned with international AI literacy benchmarks", icon: <Award className="w-5 h-5" /> },
    { "text": "Real-world enterprise AI case studies and applications", icon: <Briefcase className="w-5 h-5" /> },
    { "text": "Strong focus on ethical and responsible AI deployment", icon: <ShieldCheck className="w-5 h-5" /> },
    { "text": "Interactive, discussion-based collaborative sessions", icon: <MessageSquare className="w-5 h-5" /> },
    { "text": "Lifetime access to study materials and digital resources", icon: <BookOpen className="w-5 h-5" /> },
    { "text": "Expert guidance for building practical AI adoption roadmaps", icon: <TrendingUp className="w-5 h-5" /> },
    { "text": "Industry-recognized certification upon successful assessment", icon: <FileText className="w-5 h-5" /> }
  ];

  const individualBenefits = [
    {
      "title": "Improved AI Leadership Skills",
      "description": "Gain expertise to lead AI-driven initiatives, make strategic decisions, and bridge the gap between business and technical teams."
    },
    {
      "title": "Career Advancement Opportunities",
      "description": "Stand out as a certified AI change leader and unlock senior transformation and leadership roles."
    },
    {
      "title": "Practical AI Application Expertise",
      "description": "Learn to implement AI frameworks, evaluate trade-offs, and scale AI initiatives from proof-of-concept to production."
    },
    {
      "title": "Strategic Decision-Making Capability",
      "description": "Assess AI opportunities, measure business impact, and guide organizations toward high-value adoption."
    },
    {
      "title": "Global Recognition & Credibility",
      "description": "Earn a globally recognized credential aligned with Scaled Agile standards to enhance professional authority."
    }
  ];

  const corporateBenefits = [
    {
      "title": "Accelerated AI Adoption",
      "description": "Enable faster, structured AI implementation and reduce time-to-value for AI investments."
    },
    {
      "title": "Improved Cross-Functional Collaboration",
      "description": "Align business and technical teams for seamless AI strategy execution."
    },
    {
      "title": "Optimized AI Resource Utilization",
      "description": "Maximize ROI from existing AI tools and enterprise technology investments."
    },
    {
      "title": "Risk & Compliance Governance",
      "description": "Maintain regulatory, ethical, and data governance standards during AI scaling."
    },
    {
      "title": "Culture of Innovation & Agility",
      "description": "Build an AI-native mindset that supports continuous innovation and adaptability."
    }
  ];

  const careerStats = {
    averageIncome: "$145k - $195k",
    incomeLabel: "per annum",
    employmentGrowth: "28%",
    growthLabel: "Next 5 years",
  };

  const attendees = [
    {
      "group": [
        "AI Transformation Leaders",
        "Agile Coaches",
        "Project & Product Managers",
        "Enterprise Change Leaders",
        "Digital Strategy Consultants",
        "Innovation & Transformation Teams"
      ]
    }
  ];

  const companies = [];

  const outcomes = [
    "Assess AI trade-offs such as RAG vs fine-tuning.",
    "Lead AI initiatives across Sense, Discover, Design, and Deliver phases.",
    "Align stakeholders with AI charters and execution roadmaps.",
    "Translate technical metrics into executive-ready narratives.",
    "Apply governance, risk, and compliance frameworks in AI projects.",
    "Scale AI pilots into enterprise-level implementations."
  ];

  const prerequisites = [
    "Completion and certification of AI-Native Foundations course.",
    "Basic understanding of AI concepts and organizational change management."
  ];

  const certificationSteps = [
    {
      "title": "Register for Training",
      "description": "Enroll in the AI-Native Change Agent certification program."
    },
    {
      "title": "Attend Interactive Sessions",
      "description": "Participate in instructor-led workshops and applied exercises."
    },
    {
      "title": "Complete Certification Exam",
      "description": "Pass the official AI-Native Change Agent assessment."
    },
    {
      "title": "Earn Your Credential",
      "description": "Receive your AI-Native Change Agent certificate and digital badge."
    }
  ];

  const curriculumModules = [
    { "title": "Lesson 1: AI-Native Change Agent Foundations", "topics": ["Core responsibilities", "Companion tools", "AI leadership mindset"] },
    { "title": "Lesson 2: Advancing AI Fluency", "topics": ["Translate AI trade-offs", "Evaluate risk filters", "Identify solution patterns"] },
    { "title": "Lesson 3: Value Maximization", "topics": ["Audit existing AI tools", "Optimize ROI", "Centralize best practices"] },
    { "title": "Lesson 4: AI-Powered Facilitation", "topics": ["Stakeholder alignment", "Conflict management", "Psychological safety"] },
    { "title": "Lesson 5: Sense & Discover", "topics": ["Stakeholder mapping", "AI problem discovery", "Solution charter creation"] },
    { "title": "Lesson 6: Design the Solution", "topics": ["Value proposition", "Data strategy", "Governance & compliance"] },
    { "title": "Lesson 7: Deliver the Solution", "topics": ["AI roadmaps", "Agile learning cycles", "Deployment readiness"] },
    { "title": "Lesson 8: Tell the Story", "topics": ["AI storytelling", "Executive alignment", "Scaling narratives"] },
    { "title": "Lesson 9: Expanding Your Impact", "topics": ["Personal AI roadmap", "Enterprise transformation leadership"] }
  ];

  const learningObjectives = [
    {
      "title": "Develop Enterprise AI Fluency",
      "description": "Understand AI, ML, LLMs, and RAG to collaborate effectively across technical and business domains."
    },
    {
      "title": "Identify High-Impact AI Opportunities",
      "description": "Assess workflows and prioritize initiatives delivering measurable ROI."
    },
    {
      "title": "Design Strategic AI Use Cases",
      "description": "Create structured AI proposals with clear implementation roadmaps."
    },
    {
      "title": "Apply Responsible AI Governance",
      "description": "Implement compliance, risk, and ethical AI frameworks."
    },
    {
      "title": "Lead Cross-Functional AI Delivery",
      "description": "Guide teams through the complete AI lifecycle from discovery to scaling."
    },
    {
      "title": "Optimize AI-Driven Value",
      "description": "Audit and scale AI initiatives using structured enterprise frameworks."
    }
  ];

  const faqCategories = [
    {
      "id": "category_1",
      "label": "AI-Native Change Agent Course FAQs",
      "items": [
        {
          "question": "1. Who is an AI-Native Change Agent?",
          "answer": "An AI-Native Change Agent leads enterprise AI transformation by aligning business strategy, governance, and technology implementation."
        },
        {
          "question": "2. What are the prerequisites?",
          "answer": "Completion of AI-Native Foundations certification is mandatory."
        },
        {
          "question": "3. Who should attend?",
          "answer": "Transformation leaders, agile coaches, project managers, and digital strategy professionals."
        },
        {
          "question": "4. What is the duration?",
          "answer": "The training typically spans three days of in-person sessions."
        },
        {
          "question": "5. Is technical expertise required?",
          "answer": "No coding experience is required, but AI foundational knowledge is recommended."
        }
      ]
    },
    {
      "id": "category_2",
      "label": "Exam & Certification FAQs",
      "items": [
        {
          "question": "1. What is the exam format?",
          "answer": "Online closed-book multiple-choice exam with approximately 45 questions."
        },
        {
          "question": "2. What is the passing score?",
          "answer": "Minimum 80% required to pass."
        },
        {
          "question": "3. Is the exam fee included?",
          "answer": "Yes, the exam fee is included in the course registration."
        },
        {
          "question": "4. How long is certification valid?",
          "answer": "Certification remains valid for one year and requires renewal."
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
          "question": "2. Are refunds allowed?",
          "answer": "Refunds are not available; rescheduling is permitted."
        },
        {
          "question": "3. What payment methods are accepted?",
          "answer": "Credit card, debit card, net banking, PayPal, Stripe, and wire transfer."
        }
      ]
    },
    {
      "id": "category_4",
      "label": "General Training FAQs",
      "items": [
        {
          "question": "1. What happens if I miss a class?",
          "answer": "Rescheduling options are available without additional charges."
        },
        {
          "question": "2. Do I receive post-training support?",
          "answer": "Yes, participants receive continued access to templates and learning materials."
        },
        {
          "question": "3. Is the course available online?",
          "answer": "Currently offered in-person only."
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
    { "title": "Authorized Scaled Agile Partner", "description": "Official course content aligned with Scaled Agile standards." },
    { "title": "Expert Instructors", "description": "Led by experienced enterprise AI transformation leaders." },
    { "title": "Enterprise-Focused Curriculum", "description": "Covers governance, lifecycle, scaling, and cross-functional execution." },
    { "title": "Hands-On Workshops", "description": "Real-world AI case studies and practical implementation exercises." },
    { "title": "Global Certification Recognition", "description": "Enhance career credibility with internationally respected certification." },
    { "title": "Flexible Global Delivery", "description": "In-person sessions tailored for enterprise cohorts." },
    { "title": "Enterprise AI Strategy Focus", "description": "Bridges business and technical execution for scalable AI transformation." },
    { "title": "Ongoing Learning Support", "description": "Post-training resources and implementation templates provided." }
  ];

  const sidePanelSchedules = [
    {
      courseCode: 'AI-CHG',
      courseName: 'AI-Native Change Agent Certification Training Course',
      dateRange: 'Aug 15 - Aug 17, 2026',
      timeRange: '09:00 AM - 05:00 PM',
      trainerName: 'Senior AI Consultant',
      trainerImage:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      originalPrice: 'INR 55,000',
      discountedPrice: 'INR 46,750',
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
    "courseName": "AI-Native Change Agent Certification Training Course",
    "breadcrumbName": "AI-Native Change Agent Certification Training | Simpliaxis",
    "rating": "5.0",
    "enrolledCount": "",
    "subtitle": "Lead and Scale Enterprise AI Transformation with Confidence",
    "benefits": [
      "Master AI transformation frameworks",
      "Bridge business strategy and AI implementation",
      "Earn globally recognized certification",
      "Participate in expert-led enterprise case workshops"
    ],
    "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
    "badgeImage": "/csm-badge.png"
  };

  const overviewContent = {
    "title": "Course Overview",
    "subtitle": "AI-Native Change Agent Training Overview",
    "description": [
      "This advanced certification empowers professionals to lead enterprise AI transformation initiatives.",
      "Participants learn structured frameworks to align strategy, governance, stakeholders, and execution.",
      "The course emphasizes scalable AI lifecycle management and measurable business value."
    ],
    "whatIsTitle": "What is the AI-Native Change Agent Certification?",
    "whatIsDescription": [
      "A globally recognized credential validating the ability to lead AI-native enterprise transformation."
    ],
    "whatsIncludedTitle": "What's Included?",
    "whatsIncludedDescription": [
      "Instructor-led classroom sessions",
      "Official Scaled Agile-aligned materials",
      "Exam access",
      "Stakeholder and roadmap templates",
      "Enterprise AI case studies"
    ],
    "skillsTitle": "Skills Covered",
    "skills": [
      "Audit–Activate–Optimize–Centralize framework",
      "RAG vs Fine-Tuning trade-off evaluation",
      "Enterprise AI roadmap development",
      "AI storytelling and executive communication",
      "Governance & compliance alignment"
    ],
    "modesTitle": "Training Mode",
    "modesDescription": [
      "Offered exclusively in-person classroom format."
    ]
  };

  const corporateData = {
    "courseName": "Why Simpliaxis for Corporates?",
    "label": "",
    "buttonText": "Corporate Group Enquiry",
    "description": "Enterprise-grade AI transformation programs designed to scale responsibly and strategically."
  };

  const courseMetadata = {
    shortName: 'AI Change Agent',
    shortNameAlt: 'AI-Native Change Agent',
    fullName: 'AI-Native Change Agent Certification Training Course',
    fullNameAlt: 'AI-Native Change Agent Certification Training | Simpliaxis',
    certificateName: 'AI-Native Change Agent',
  };

  const sectionsLabels = {
    careerUpliftment: {
      outcomesTitle:
        `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
      outcomesFooter:
        "After completing your AI-Native Change Agent certification training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
    },
    prerequisites: {
      subtitle:
        'What are the Prerequisites Required for AI-Native Change Agent Training?',
    },
    certificate: {
      mockupName: 'ALEX BRYANT',
      label: 'Official Accreditation',
      titlePrefix: 'Earn Your',
      titleHighlight: 'Global',
      titleSuffix: 'Recognition',
      issuerName: 'Simpliaxis',
      certificateType: 'AI-Native Change Agent Certification',
      certifyText: 'This is to certify that',
      requirementText:
        'Has successfully fulfilled all requirements to be recognized with the',
      signer1Role: 'Certified Master Trainer',
      signer2Role: 'Chief Strategy Officer',
    },
  };

  const commonAttendeesList = [
    "AI Transformation Leaders",
    "Agile Coaches",
    "Project & Product Managers",
    "Enterprise Change Leaders",
    "Digital Strategy Consultants",
    "Innovation & Transformation Teams"
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

export default AiNativeChangeAgentCertificationTrainingCourse;
