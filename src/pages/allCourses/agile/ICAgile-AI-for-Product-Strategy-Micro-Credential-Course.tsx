import React from "react";
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
    BookOpen,
    Network,
    CreditCard,
    FileText,
    Briefcase,
    CheckCircle2,
    Star
} from "lucide-react";

const ICAgileAIforProductStrategyMicroCredentialCourse = () => {
    const highlights = [
        { text: "3 hours of online, instructor-led live training", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 3 PDUs on completing the course", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Globally recognized ICAgile AI for Product Planning Certification", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Focus on proper AI and responsible implementation", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Practical experience with real-world AI strategy scenarios", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Access to authorized courseware", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Mentorship by experienced AI Product Planning trainers", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Tool-based learnings", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: "Master AI-Driven Planning Techniques",
            description: "Build practical, tool-agnostic skills in AI-powered roadmapping, backlog prioritization, and predictive forecasting that you can apply immediately."
        },
        {
            title: "Accelerate Planning Efficiency",
            description: "Leverage AI insights to cut planning cycle time, improve delivery predictability, and make confident, data-backed trade-off decisions faster."
        },
        {
            title: "Future-Proof Your Career",
            description: "Earn a lifetime, globally recognized ICAgile credential with no expiration or renewal fees—ensuring your expertise stays relevant as AI technology evolves."
        },
        {
            title: "Explore New Career Opportunities",
            description: "Stand out with an ICAgile-validated credential that demonstrates your expertise in AI-driven product planning, increasing your marketability and earning potential."
        }
    ];

    const corporateBenefits = [
        {
            title: "Master AI-Enhanced Roadmapping",
            description: "Learn to create strategic product roadmaps using AI tools that align with business objectives, balance vision with execution, and adapt quickly."
        },
        {
            title: "Optimize Prioritization with AI Insights",
            description: "Apply AI-supported frameworks like RICE, MoSCoW, and WSJF to make data-driven prioritization decisions, combining algorithms with human judgment."
        },
        {
            title: "Improve Delivery Predictability",
            description: "Leverage AI forecasting to enhance release planning accuracy, predict capacity constraints, and communicate realistic timelines with greater confidence."
        },
        {
            title: "Build Ethical AI Planning Practices",
            description: "Understand when to trust AI recommendations versus human expertise, implement responsible AI decision-making, and maintain transparency."
        }
    ];

    const careerStats = {
        averageIncome: "$110k-150k",
        incomeLabel: "per annum",
        employmentGrowth: "45%",
        growthLabel: "(AI Planning Roles)",
    };

    const attendees = [
        {
            group: [
                "Create AI-enhanced product roadmaps that align with organizational goals and customer needs"
            ]
        },
        {
            group: [
                "Apply AI tools to evaluate and prioritize features based on multiple criteria",
                "Use AI forecasting to improve delivery predictability and timeline accuracy",
                "Implement responsible AI practices that maintain transparency and accountability"
            ]
        }
    ];

    const outcomes = [
        "Create AI-enhanced product roadmaps that align with organizational goals and customer needs",
        "Apply AI tools to evaluate and prioritize features based on multiple criteria",
        "Use AI forecasting to improve delivery predictability and timeline accuracy",
        "Implement responsible AI practices that maintain transparency and accountability"
    ];

    const prerequisites = [
        "Basic understanding of Agile and Scrum principles is recommended.",
        "Experience in product management or delivery roles is beneficial.",
        "No prior AI or technical programming background required."
    ];

    const certificationSteps = [
        {
            title: "Enroll for the Course",
            description: "Register for the AI for Product Planning course through Simpliaxis.",
            color: "#3B82F6"
        },
        {
            title: "Attend the Training",
            description: "Participate in 3 hours of instructor-led live sessions focused on AI integration in product planning.",
            color: "#F59E0B"
        },
        {
            title: "Complete Learning Activities",
            description: "Engage in interactive exercises and simulations that demonstrate your understanding of AI-driven planning.",
            color: "#10B981"
        },
        {
            title: "Earn Certificate",
            description: "Upon completion, receive your official ICAgile AI for Product Planning Micro-credential.",
            color: "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            title: "Foundations of AI-Driven Product Planning",
            topics: [
                "Role of AI in modern product planning and decision-making",
                "Where AI adds value across roadmaps, backlogs, and release planning",
                "Understanding human judgment vs AI-assisted intelligence",
                "Defining guardrails for responsible AI use in planning"
            ]
        },
        {
            title: "Identifying & Evaluating Product Opportunities",
            topics: [
                "Using AI to analyze customer data, market signals, and trends",
                "Identifying opportunity spaces aligned with product strategy",
                "Translating AI insights into product hypotheses",
                "Validating opportunities for roadmaps, releases, and backlogs"
            ]
        },
        {
            title: "AI-Enabled Roadmapping & Scenario Simulation",
            topics: [
                "Building adaptive product roadmaps with AI assistance",
                "Simulating multiple roadmap scenarios using AI",
                "Comparing outcomes against strategic objectives",
                "Assessing trade-offs: value, risk, capacity, and timing"
            ]
        },
        {
            title: "AI-Supported Feature Prioritization",
            topics: [
                "Applying AI-assisted prioritization techniques",
                "Using AI with common prioritization frameworks (RICE, MoSCoW, WSJF)",
                "Aligning feature priorities to user needs and business outcomes",
                "Avoiding over-automation in prioritization decisions"
            ]
        },
        {
            title: "Designing AI-Assisted Release Plans",
            topics: [
                "Structuring multi-iteration release plans with AI",
                "Balancing customer impact, technical constraints, and time-to-market",
                "Using AI to forecast delivery risks and dependencies",
                "Adjusting release plans based on AI insights"
            ]
        },
        {
            title: "Ethics, Bias, and Reliability in AI-Driven Planning",
            topics: [
                "Understanding AI bias, data quality, and model limitations",
                "Identifying ethical risks in AI-assisted planning decisions",
                "Evaluating reliability and trustworthiness of AI outputs",
                "Defining mitigation strategies and human oversight mechanisms"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Create Data-Driven Product Roadmaps with AI",
            description: "Learn how to leverage AI-powered tools to build strategic product roadmaps that are aligned with market trends and business objectives."
        },
        {
            title: "Prioritize Your Backlog with Confidence",
            description: "Integrate AI-supported prioritization frameworks with human judgment to prioritize product backlog items effectively."
        },
        {
            title: "Design Outcome-Focused Release Plans",
            description: "Learn how to design effective release plans with AI insights that optimize value delivery while balancing constraints."
        },
        {
            title: "Simulate Alternative Scenarios",
            description: "Develop the ability to model different planning scenarios using AI allowing you to assess trade-offs and make data-informed decisions."
        }
    ];

    const faqCategories = [
        {
            id: 'general',
            label: 'Course Details',
            items: [
                {
                    question: "What is the ICAgile AI for Product Planning Certification?",
                    answer: "It is a micro-credential course that teaches professionals how to integrate AI and Agile methodologies in product planning, creating data-driven roadmaps and optimizing backlog prioritization."
                },
                {
                    question: "Who is eligible for this Micro-credential?",
                    answer: "Product Managers, Product Owners, Business Analysts, delivery leads, and professionals involved in product strategy."
                },
                {
                    question: "How long does the course take?",
                    answer: "The training typically takes 3 hours to complete in a live online instructor-led format."
                }
            ]
        },
        {
            id: 'certification',
            label: 'Certification',
            items: [
                {
                    question: "Will I receive a certificate?",
                    answer: "Yes, upon successful completion, you will receive an official ICAgile AI for Product Planning micro-credential certificate."
                },
                {
                    question: "Is there an exam?",
                    answer: "No, the certification is awarded based on active participation and completion of the course exercises."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: '3-Hour Expert',
            subtitle: 'Led Training',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            icon: BookOpen,
            title: 'ICAgile Expert',
            subtitle: 'Trainers',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Strategic AI',
            subtitle: 'Implementation',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: '3 PDUs for',
            subtitle: 'Professional Credits',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Tool-Based',
            subtitle: 'Learnings',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Case Study',
            subtitle: 'Analysis',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        { name: 'Wells Fargo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
        { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'Bosch', url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' },
        { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg' },
        { name: 'KPMG', url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg' },
    ];

    const courseTrainers = [
        {
            name: "Expert AI Coach",
            role: "ICAgile Certified Instructor",
            rating: "4.9",
            experience: "12+ Years",
            description: "Specialized in AI-driven transformation and outcome-focused product strategy.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        },
    ];

    const courseWhySimpliaxis = [
        {
            title: "ICAgile-Accredited Provider",
            description: "Simpliaxis ensures that the course follows the highest global standards for AI leadership excellence."
        },
        {
            title: "Real-World AI Scenarios",
            description: "Practical leadership-focused learning using industry-relevant case studies and simulations."
        },
        {
            title: "Interactive Live Training",
            description: "Collaborative sessions that encourage peer interaction and deep understanding of AI principles."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: "AI-PP",
            courseName: "ICAgile AI for Product Planning",
            dateRange: "May 15 - May 15, 2026",
            timeRange: "05:00 PM - 08:00 PM IST",
            trainerName: "ICAgile Expert",
            trainerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
            originalPrice: "INR 28,000",
            discountedPrice: "INR 19,500",
            discountPercentage: "30",
        },
    ];

    const certificateBenefits = [
        "Globally recognized ICAgile Micro-credential",
        "Lifetime validity with no renewal fees",
        "Earn 3 PDUs for your certification renewals",
        "Expert mentorship and practical skill-building"
    ];

    const heroData = {
        courseName: "ICAgile AI for Product Planning Micro Credential Course",
        breadcrumbName: "AI for Product Planning Certification Training",
        rating: "5.0",
        enrolledCount: "1.5k+",
        subtitle: "Master AI-Driven Backlog Refinement, Strategic Roadmapping, and Predictive Release Planning",
        benefits: [
            "3-Hour Expert-Led Live Training Session",
            "Learn AI-driven feature prioritization techniques",
            "Master AI-powered forecasting and release planning",
            "Implement ethical AI practices in product strategy",
            "Earn a Globally Recognized ICAgile Micro Credential"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png",
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "ICAgile AI for Product Planning Course Overview",
        description: [
            "The ICAgile AI for Product Planning Micro Credential Course helps professionals apply AI to modern product planning. Learn to enhance backlog refinement, prioritize features intelligently, forecast releases, and align resources effectively.",
            "This course builds practical AI-enabled planning skills to improve delivery confidence, decision-making, and value-driven product outcomes."
        ],
        whatIsTitle: "What is AI for Product Planning?",
        whatIsDescription: [
            "AI for Product Planning is the strategic application of artificial intelligence to optimize the Agile planning lifecycle. It empowers teams to use data-driven insights for roadmapping, capacity planning, and backlog management."
        ],
        whatsIncludedTitle: "What’s Included in the Program?",
        whatsIncludedDescription: [
            "3 Hours of Live Instructor-Led Training",
            "Hands-on AI Strategy Scenarios",
            "ICAgile AI for Product Planning Certificate",
            "Lifetime Access to Courseware",
            "Post-training Mentorship Support"
        ],
        skillsTitle: "Core Skills You'll Learn",
        skills: [
            "AI-Powered Roadmapping",
            "Intelligent Prioritization",
            "Predictive Forecasting",
            "Ethical AI Implementation",
            "Resource Optimization"
        ],
        modesTitle: "Flexible Learning Options",
        modesDescription: [
            "Simpliaxis provides interactive live virtual training sessions conducted by certified industry experts, suitable for individuals and corporate teams."
        ],
    };

    const corporateData = {
        courseName: "Corporate AI Empowerment Solutions",
        label: "For Organizations",
        buttonText: "Inquire Now",
        description: "Transform your organization by equipping your teams with AI-driven product management skills. We offer tailored modules for enterprise-level transformations."
    };

    const courseMetadata = {
        shortName: "AI-PP",
        shortNameAlt: "AI-PP",
        fullName: "ICAgile AI for Product Planning Micro-credential",
        fullNameAlt: "AI for Product Planning",
        certificateName: "AI for Product Planning Micro-credential",
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the AI Product Planning Course?`,
            outcomesFooter: "Become a data-driven product leader by mastering AI-augmented planning strategies.",
        },
        prerequisites: {
            subtitle: "Training Requirements",
        },
        certificate: {
            mockupName: "ALEX BRYANT",
            label: "Global Credential",
            titlePrefix: "Get Your",
            titleHighlight: "ICAgile",
            titleSuffix: "Certification",
            issuerName: "ICAgile",
            certificateType: "AI for Product Planning",
            certifyText: "This is to certify that",
            requirementText: "Has successfully demonstrated the integration of AI in Agile planning.",
            signer1Role: "Authorized Facilitator",
            signer2Role: "Head of Education",
        },
    };

    const commonAttendeesList = [
        "Product Managers",
        "Product Owners",
        "Strategic Planners",
        "Agile Coaches",
        "Scrum Masters",
        "Business Analysts"
    ];

    const pageCaptions = {
        tabs: {
            overview: "Course Overview",
            benefits: "Benefits",
            prerequisites: "Requirements",
            curriculum: "Curriculum",
            faqs: "FAQs",
        },
        hero: {
            referEarnText: "Refer & Earn",
            enrolledSuffix: "Enrolled",
            moneyBackText: "100% Value",
            ltpLabel: "LTP of ICAgile",
            downloadBtnText: "Download Brochure",
            viewSchedulesBtnText: "View Schedules",
            freeAssessmentBtnText: "Skill Assessment",
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
                            {overviewContent.subtitle}{" "}
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
                            <ul className="list-disc pl-5 space-y-2">
                                {overviewContent.whatsIncludedDescription.map((item, i) => (
                                    <li key={i}>{item}</li>
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
                        companies={courseClients}
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
            <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600" />
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

export default ICAgileAIforProductStrategyMicroCredentialCourse;
