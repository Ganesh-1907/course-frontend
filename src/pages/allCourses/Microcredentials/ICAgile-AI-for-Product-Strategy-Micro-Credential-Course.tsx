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
    Star,
    CheckCircle2
} from "lucide-react";

/**
 * ICAgile AI for Product Strategy Micro-Credential Course
 * Data source: course_data3.json
 */
const ICAgileAIForProductStrategyMicroCredentialCourse = () => {
    const courseName = "ICAgile AI for Product Strategy Micro-Credential Course";

    const highlights = [
        { text: "3 hours of live, instructor-led online training | Earn 3 PDUs." },
        { text: "Earn a globally recognized ICAgile AI for Product Strategy Micro-Credential." },
        { text: "Hands-on learning through real-world AI strategy scenarios." },
        { text: "Official ICAgile-authorized courseware included." },
        { text: "Mentorship from experienced AI product strategy practitioners." },
        { text: "Tool-agnostic strategic frameworks designed for long-term relevance." },
        { text: "Strong focus on ethical AI and responsible implementation." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Differentiate your career with specialized AI-driven product strategy expertise in competitive job markets." },
        { title: "Individual Benefits", description: "Enhance earning potential by developing in-demand AI product strategy capabilities." },
        { title: "Individual Benefits", description: "Build future-ready skills that remain relevant as AI continues to transform product management." },
        { title: "Individual Benefits", description: "Strengthen strategic credibility with a globally recognized ICAgile micro-credential." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Accelerate innovation cycles through AI-powered insights and faster validation processes." },
        { title: "Corporate Benefits", description: "Gain competitive advantage by identifying and capitalizing on AI opportunities ahead of competitors." },
        { title: "Corporate Benefits", description: "Improve product decision quality using data-driven, AI-augmented strategy frameworks." },
        { title: "Corporate Benefits", description: "Develop internal AI product strategy capabilities and reduce dependency on external consultants." }
    ];

    const careerStats = {
        averageIncome: "$120k - $175k",
        incomeLabel: "Salary for AI Strategic Product Roles",
        employmentGrowth: "92%",
        growthLabel: "Demand for AI product strategy expertise",
    };

    const attendeesData = [
        { group: ["Identify and evaluate AI opportunities aligned with product vision and business objectives."] },
        { group: ["Use AI tools for comprehensive market research and competitive landscape analysis."] },
        { group: ["Integrate AI-generated insights into evidence-based product decision-making processes."] },
        { group: ["Recognize and mitigate AI bias, fairness risks, and ethical concerns within product contexts."] }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/0/07/Adobe_Systems_logo_and_wordmark.svg" },
        { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" }
    ];

    const outcomes = [
        "Evaluate AI-driven product opportunities aligned with strategic goals.",
        "Apply AI tools to enhance market research and competitive intelligence.",
        "Integrate AI insights into data-driven product roadmaps and decisions.",
        "Implement ethical and responsible AI practices in product strategy."
    ];

    const prerequisites = [
        "No mandatory prerequisites are required.",
        "Basic experience in product management or strategy is recommended but not compulsory."
    ];

    const certificationSteps = [
        {
            title: "Complete the Training",
            description: "Enroll in and attend the ICAgile-authorized AI for Product Strategy Micro-Credential training."
        },
        {
            title: "Actively Participate",
            description: "Engage in exercises, discussions, and AI strategy simulations throughout the program."
        },
        {
            title: "Demonstrate Learning",
            description: "Successfully complete all course activities and practical applications."
        },
        {
            title: "Receive Your Credential",
            description: "Earn the globally recognized ICAgile AI for Product Strategy Micro-Credential issued directly by ICAgile."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Building Your Strategic Edge with AI",
            topics: [
                "AI fundamentals for product strategy.",
                "Interpreting AI-generated insights to inform product direction.",
                "Identifying market opportunities through AI analytics.",
                "Using AI for competitive intelligence and trend forecasting.",
                "Hands-on exercises with AI market research tools."
            ]
        },
        {
            title: "Module 2: Shaping Strategy with AI",
            topics: [
                "AI-enhanced SWOT and gap analysis.",
                "Competitive positioning using AI intelligence.",
                "Risk assessment and mitigation through AI insights.",
                "Developing AI-informed product roadmaps.",
                "Aligning AI product strategies with business objectives."
            ]
        },
        {
            title: "Module 3: Prioritizing with Confidence",
            topics: [
                "Balancing quantitative AI data with qualitative insights.",
                "Evidence-based prioritization frameworks.",
                "Using AI for scoring and ranking product initiatives.",
                "Ethical AI governance, bias mitigation, and transparency.",
                "Adaptive prioritization using real-time AI insights."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand AI Fundamentals for Product Strategy", description: "Gain clarity on AI, machine learning, and generative AI concepts relevant to product strategy." },
        { title: "Strategically Integrate AI", description: "Identify areas where AI creates measurable competitive advantage in product contexts." },
        { title: "Leverage AI for Market Intelligence", description: "Apply AI tools for research, competitive analysis, and trend forecasting." },
        { title: "Build Data-Driven Product Roadmaps", description: "Integrate AI insights into structured, evidence-based roadmapping processes." },
        { title: "Enhance Customer Intelligence", description: "Use AI for segmentation, personalization, and predictive customer insights." },
        { title: "Lead with Ethical AI Practices", description: "Implement responsible AI strategies addressing bias, fairness, transparency, and governance." }
    ];

    const whySections = [
        { title: "ICAgile-Authorized Training Partner", description: "Viovn delivers fully accredited training aligned with ICAgile’s global standards and learning outcomes." },
        { title: "Industry-Relevant Case Studies", description: "Learn through real-world AI product strategy scenarios and practical business applications." },
        { title: "Globally Recognized Certification", description: "Earn an ICAgile micro-credential respected worldwide across industries." },
        { title: "Experienced AI Product Practitioners", description: "Learn from trainers with hands-on AI product strategy experience across diverse sectors." },
        { title: "Practice-Focused Learning", description: "Apply AI concepts immediately through exercises, simulations, and real strategic challenges." },
        { title: "Interactive Instructor-Led Sessions", description: "Collaborative discussions and AI tool demonstrations enhance engagement and retention." },
        { title: "Flexible Delivery Options", description: "Available in live virtual, weekday, weekend, and corporate formats." },
        { title: "Post-Training Support", description: "Receive continued guidance and access to learning resources after course completion." }
    ];

    const courseFeatures = [
        { icon: Users, title: '3 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Micro-Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "ICAgile AI for Product Strategy Micro-Credential Course",
        breadcrumbName: "AI for Product Strategy",
        rating: "5.0",
        enrolledCount: "430+ professionals",
        subtitle: "Build Competitive Advantage with AI-Driven Product Strategy",
        benefits: [
            "3-hour immersive ICAgile instructor-led training",
            "Hands-on AI strategy frameworks and practical exercises",
            "AI-enhanced market intelligence and decision-making",
            "Ethical AI implementation for product leaders",
            "Earn a globally recognized ICAgile micro-credential"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Overview of ICAgile AI for Product Strategy Micro-Credential Course",
        description: [
            "The ICAgile AI for Product Strategy Micro-Credential is designed for product professionals seeking to leverage artificial intelligence for strategic advantage.",
            "This course focuses on integrating AI into product strategy, decision-making, market intelligence, and roadmap development.",
            "Participants learn how to transition from intuition-based planning to data-driven, AI-augmented product leadership while maintaining ethical responsibility."
        ],
        whatIsTitle: "What is AI for Product Strategy?",
        whatIsDescription: [
            "AI for Product Strategy involves applying artificial intelligence tools and insights to guide product vision, competitive positioning, and roadmap decisions.",
            "It enables product leaders to analyze market signals, forecast trends, validate opportunities, and make strategic decisions supported by data.",
            "AI serves as a strategic decision-support layer, enhancing — not replacing — human leadership and creativity."
        ],
        whatsIncludedTitle: "What’s Included in Our ICAgile AI for Product Strategy Training?",
        whatsIncludedDescription: [
            "Official ICAgile-authorized course materials.",
            "Hands-on AI strategy exercises and simulations.",
            "Interactive instructor-led sessions.",
            "Real-world case studies and applications.",
            "Globally recognized ICAgile micro-credential.",
            "Post-training guidance and resources."
        ],
        skillsTitle: "Skills Covered in ICAgile AI for Product Strategy Certification",
        skills: [
            "AI fundamentals for product professionals",
            "AI-driven market and competitive analysis",
            "Data-driven product roadmapping",
            "Customer intelligence and personalization",
            "Strategic opportunity evaluation",
            "Ethical and responsible AI governance"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live instructor-led virtual training.",
            "Corporate group training customized to organizational needs."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQs",
            items: [
                { question: "1. Who should take this course?", answer: "Product Managers, Product Leaders, and Business Strategists looking to use AI." },
                { question: "2. Is previous AI knowledge required?", answer: "No, we cover the fundamentals relevant to strategy during the 3-hour session." },
                { question: "3. How long is the credential valid?", answer: "The ICAgile micro-credential has lifetime validity with no renewal needed." }
            ]
        }
    ];

    const tabs = [
        {
            id: 'overview',
            label: 'Course Overview',
            content: (
                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
                        <h4 className="text-[14px] text-primary font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
                            {overviewContent.title}
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
                            {overviewContent.subtitle} <span className="text-primary">✦</span>
                        </h2>
                        <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
                            {overviewContent.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                    {overviewContent.whatIsTitle && (
                        <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
                            <h3 className="text-2xl font-black text-[#001c3d] mb-4">{overviewContent.whatIsTitle}</h3>
                            <div className="space-y-4 text-slate-700 font-medium leading-[1.7] text-[15px]">
                                {overviewContent.whatIsDescription.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    <CourseHighlights highlights={highlights} courseName={heroData.courseName} />
                    <CourseCareerUpliftment stats={careerStats} attendees={attendeesData} companies={companies} outcomes={outcomes} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'benefits',
            label: 'Benefits',
            content: (
                <div className="space-y-6">
                    <CourseBenefits individualBenefits={individualBenefits} corporateBenefits={corporateBenefits} courseName={heroData.courseName} />
                    <CourseCommonAttendees attendees={attendeesData[0].group} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'prerequisites',
            label: 'Prerequisites',
            content: (
                <div className="space-y-6">
                    <CoursePrerequisites prerequisites={prerequisites} courseName={heroData.courseName} />
                    <CourseStepByStepProcess steps={certificationSteps} courseName={heroData.courseName} />
                    <CourseCertificate courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'curriculum',
            label: 'Curriculum',
            content: (
                <div className="space-y-6">
                    <CourseCurriculum modules={curriculumModules} courseName={heroData.courseName} />
                    <CourseLearningObjectives objectives={learningObjectives} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'faqs',
            label: 'FAQs',
            content: <CourseFAQs categories={faqCategories} courseName={heroData.courseName} />
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[#001c3d]">
            <Header />
            <main className="pt-16">
                <CourseHero
                    categoryName="microcredentials"
                    categoryLink="/category/microcredentials"
                    {...heroData}
                    referEarnText="Refer & Earn"
                    enrolledSuffix="Enrolled"
                    moneyBackText="100% Money Back Guarantee"
                    ltpLabel="Viovn Training"
                    downloadBtnText="Download Brochure"
                    viewSchedulesBtnText="View Schedules"
                    freeAssessmentBtnText="Free Assessment"
                />
                <CourseFeatures features={courseFeatures} />
                <div className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                        <div className="space-y-12">
                            <CourseTabs tabs={tabs} />
                            <CourseCorporateOptUs
                                courseName="Why Viovn for Corporate AI Product Strategy Training?"
                                description="Viovn provides tailored corporate training programs that help organizations integrate AI into product strategy responsibly and effectively."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel  courseName={heroData.courseName} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ICAgileAIForProductStrategyMicroCredentialCourse;
