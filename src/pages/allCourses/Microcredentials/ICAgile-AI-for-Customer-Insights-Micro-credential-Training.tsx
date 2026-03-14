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
 * ICAgile AI for Customer Insights Micro-credential Training
 * Data source: course_data3.json
 */
const ICAgileAIForCustomerInsightsMicroCredentialTraining = () => {
    const courseName = "ICAgile AI for Customer Insights Micro-credential Training";

    const highlights = [
        { text: "3-hour ICAgile-authorized AI for Customer Insights micro-credential training." },
        { text: "Earn 3 PDUs upon successful course completion." },
        { text: "Instructor-led sessions delivered by experienced AI and Agile practitioners." },
        { text: "Practical focus on applying AI to real-world customer insight use cases." },
        { text: "Hands-on exercises using customer data, behavioral patterns, and analytics techniques." },
        { text: "Coverage of AI concepts relevant to marketing, CX, and product teams." },
        { text: "Strong emphasis on ethical and responsible use of AI in customer analytics." },
        { text: "Interactive learning through discussions, activities, and collaborative exercises." },
        { text: "Earn a globally recognized ICAgile AI for Customer Insights micro-credential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop strong data-driven decision-making skills by interpreting customer data using predictive and behavioral AI insights rather than assumptions." },
        { title: "Individual Benefits", description: "Enhance career relevance in AI-enabled roles across product, marketing, CX, and analytics functions." },
        { title: "Individual Benefits", description: "Gain deeper customer understanding by identifying patterns in behavior, sentiment, and preferences to support personalization strategies." },
        { title: "Individual Benefits", description: "Apply AI concepts practically through real-world use cases without requiring advanced coding or data science expertise." },
        { title: "Individual Benefits", description: "Strengthen cross-functional collaboration by clearly communicating AI-driven insights to business and technical stakeholders." },
        { title: "Individual Benefits", description: "Earn a globally recognized ICAgile micro-credential that validates practical AI knowledge and commitment to continuous professional growth." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Build stronger customer-centric strategies by enabling teams to leverage AI-driven insights for improved customer experience and retention." },
        { title: "Corporate Benefits", description: "Accelerate decision-making through AI-enabled analysis that reduces reliance on manual processes." },
        { title: "Corporate Benefits", description: "Maximize return on data investments by empowering teams to effectively utilize existing analytics and AI platforms." },
        { title: "Corporate Benefits", description: "Establish consistent AI knowledge across marketing, product, and CX teams to improve organizational alignment." },
        { title: "Corporate Benefits", description: "Reduce risks in AI adoption by promoting ethical, transparent, and responsible AI practices." },
        { title: "Corporate Benefits", description: "Gain competitive advantage through deeper customer insights that enable innovation and personalization." }
    ];

    const careerStats = {
        averageIncome: "$110k - $160k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "88%",
        growthLabel: "Demand for AI-powered customer analytics",
    };

    const attendeesData = [
        {
            group: [
                "Understand how AI supports customer insight generation.",
                "Identify opportunities to apply AI to customer data.",
                "Interpret AI-driven insights for product and business decisions.",
                "Collaborate effectively with analytics and technical teams.",
                "Apply ethical considerations in AI-driven customer analysis.",
                "Strengthen customer-centric strategies using AI-informed insights."
            ]
        }
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
        "Understand how AI enhances customer insight generation.",
        "Apply AI techniques to analyze customer data effectively.",
        "Translate AI-driven insights into business and product strategies.",
        "Collaborate across teams to implement AI-supported decisions.",
        "Apply ethical AI principles in customer analytics.",
        "Improve customer experience using data-backed insights."
    ];

    const prerequisites = [
        "Basic understanding of customer analytics, segmentation, or data interpretation concepts.",
        "Familiarity with fundamental AI concepts such as machine learning and data analysis terminology.",
        "Willingness to work with analytical tools used for visualization and pattern recognition."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the ICAgile-authorized AI for Customer Insights micro-credential training offered by Viovn."
        },
        {
            title: "Develop Practical Skills",
            description: "Learn and apply AI techniques for analyzing customer data and behavioral patterns."
        },
        {
            title: "Complete the Training",
            description: "Participate actively in learning activities and complete all required coursework."
        },
        {
            title: "Earn Your Credential",
            description: "Receive the ICAgile AI for Customer Insights micro-credential upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Introduction: Why AI for Customer Insights",
            topics: [
                "The role of AI in modern customer understanding.",
                "Opportunities and challenges in AI-assisted insight generation."
            ]
        },
        {
            title: "Customer Profiling: Opportunities and Risks",
            topics: [
                "Techniques for building AI-generated customer profiles.",
                "Bias, privacy, and ethical considerations in profiling."
            ]
        },
        {
            title: "Uncovering Behaviors with AI Techniques",
            topics: [
                "Identifying behavioral patterns and signals.",
                "Validating relevance and segmenting audiences."
            ]
        },
        {
            title: "Designing and Simulating Feedback Collection",
            topics: [
                "Using AI to model customer responses.",
                "Creating feedback loops and testing assumptions."
            ]
        },
        {
            title: "Applying Insights to Strategy and Customer Experience",
            topics: [
                "Translating insights into product and service improvements.",
                "Aligning findings with business objectives and customer needs."
            ]
        },
        {
            title: "Ethics and Responsible AI Use",
            topics: [
                "Ensuring transparency, fairness, and human oversight.",
                "Case studies on ethical AI use in customer contexts."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Core AI Concepts for Customer Insights", description: "Develop clarity on how AI, machine learning, and pattern recognition support customer insight generation." },
        { title: "Apply AI to Customer Data Interpretation", description: "Analyze behavioral data, feedback, and engagement metrics to uncover actionable trends." },
        { title: "Explore AI-Driven Customer Segmentation", description: "Use AI techniques to segment customers based on behavior, intent, and preferences." },
        { title: "Evaluate AI Use Cases Across the Customer Lifecycle", description: "Identify where AI creates value across acquisition, retention, personalization, and CX improvement." },
        { title: "Practice Ethical and Responsible AI Usage", description: "Apply principles of privacy, transparency, and bias mitigation in AI-driven analytics." },
        { title: "Translate Insights into Business Decisions", description: "Convert AI-generated insights into practical recommendations for product, marketing, and CX strategies." },
        { title: "Strengthen Collaboration Between Business and Data Teams", description: "Communicate AI-driven customer insights effectively to support cross-functional alignment." }
    ];

    const whySections = [
        { title: "Authorized ICAgile Training Partner", description: "Viovn delivers ICAgile-authorized training aligned with official learning outcomes and global standards." },
        { title: "Industry-Relevant Curriculum", description: "Practical AI applications focused on customer behavior analysis, segmentation, and insight generation." },
        { title: "Experienced ICAgile-Accredited Instructors", description: "Training delivered by certified practitioners with real-world AI and analytics expertise." },
        { title: "Globally Recognized Micro-Credential", description: "Earn a respected ICAgile certification valued by employers worldwide." },
        { title: "Hands-On Learning Approach", description: "Experiential learning through case studies, simulations, and applied exercises." },
        { title: "Designed for Non-Technical Professionals", description: "Structured for business, marketing, product, and CX professionals without coding requirements." },
        { title: "Flexible Training Delivery", description: "Available in live virtual and customized enterprise training formats." },
        { title: "Commitment to Ethical AI", description: "Strong focus on responsible AI use, including data privacy, fairness, and transparency." }
    ];

    const courseFeatures = [
        { icon: Users, title: '3 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Micro-Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "ICAgile AI for Customer Insights Micro-credential",
        breadcrumbName: "AI for Customer Insights",
        rating: "5.0",
        enrolledCount: "450+ professionals",
        subtitle: "Leverage AI to Generate Meaningful Customer Insights and Drive Smarter Decisions",
        benefits: [
            "Live, instructor-led ICAgile AI for Customer Insights training.",
            "Practical AI techniques for customer behavior analysis.",
            "Official ICAgile-authorized course materials.",
            "Ethical AI application for customer analytics.",
            "Globally recognized ICAgile micro-credential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Overview of ICAgile AI for Customer Insights Micro-credential Training",
        description: [
            "The ICAgile AI for Customer Insights Micro-credential offered by Viovn is designed to help professionals effectively apply artificial intelligence to generate meaningful customer insights.",
            "This program focuses on practical AI techniques for analyzing customer data, identifying patterns, and supporting informed business decisions.",
            "The course connects Agile principles, data literacy, and AI-driven insight generation within customer-focused environments."
        ],
        whatIsTitle: "What is AI for Customer Insights?",
        whatIsDescription: [
            "AI for Customer Insights involves applying artificial intelligence techniques to analyze customer data and uncover patterns, trends, and behavioral signals.",
            "It supports smarter personalization, segmentation, and decision-making by transforming raw data into actionable business intelligence.",
            "AI enhances — rather than replaces — human judgment in understanding customer needs and improving experiences."
        ],
        whatsIncludedTitle: "What’s Included in Our AI for Customer Insights Micro-credential Training?",
        whatsIncludedDescription: [
            "Official ICAgile-authorized course materials.",
            "Interactive instructor-led sessions.",
            "Hands-on AI exercises using customer data scenarios.",
            "Real-world case studies and collaborative activities.",
            "Globally recognized ICAgile micro-credential."
        ],
        skillsTitle: "Skills Covered in the AI for Customer Insights Micro-Credential Course",
        skills: [
            "AI fundamentals for customer analytics",
            "Behavioral pattern identification",
            "AI-driven customer segmentation",
            "Translating data into actionable insights",
            "Ethical AI application in customer contexts",
            "Cross-functional collaboration using AI insights"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live instructor-led virtual training sessions.",
            "Customized corporate training aligned with organizational customer insight objectives."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQs",
            items: [
                { question: "1. Who can take this course?", answer: "Marketing, product, and CX professionals looking to use AI for customer data." },
                { question: "2. Is there a technical prerequisite?", answer: "No coding is required. Basic analytical mindset is helpful." },
                { question: "3. How long is the session?", answer: "It is a 3-hour live instructor-led session." }
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
                                courseName="Why Viovn for Corporate Training?"
                                description="Viovn provides tailored corporate AI training programs designed to strengthen customer insight capabilities across teams. Our expert instructors deliver practical, industry-aligned learning experiences that improve decision-making, enhance customer-centric strategies, and support responsible AI adoption within organizations."
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

export default ICAgileAIForCustomerInsightsMicroCredentialTraining;
