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
 * AI for Product Owners Microcredential Course
 * Data source: course_data3.json
 */
const AIForProductOwnersMicrocredentialCourse = () => {
    const courseName = "AI for Product Owners Microcredential Course";

    const highlights = [
        { text: "4 hours of live, instructor-led AI training tailored for Product Owners." },
        { text: "Learn how to integrate AI into product vision, strategy, and backlog management." },
        { text: "Hands-on exercises using AI tools for prioritization and roadmap planning." },
        { text: "Practical case studies on AI-enabled product decision-making." },
        { text: "Focus on ethical and responsible AI implementation in product development." },
        { text: "Enhance stakeholder communication using AI-generated insights." },
        { text: "Earn a recognized AI for Product Owners Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Strengthen product vision and strategy using AI-driven market and customer insights." },
        { title: "Individual Benefits", description: "Improve backlog prioritization and roadmap planning with predictive analytics." },
        { title: "Individual Benefits", description: "Enhance decision-making through AI-supported customer behavior analysis." },
        { title: "Individual Benefits", description: "Increase career growth opportunities by building AI-enabled product leadership skills." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Accelerate product innovation by leveraging AI insights for strategic decisions." },
        { title: "Corporate Benefits", description: "Improve product-market fit through AI-powered customer data analysis." },
        { title: "Corporate Benefits", description: "Enhance transparency and alignment with AI-driven forecasting and reporting." },
        { title: "Corporate Benefits", description: "Support responsible AI adoption within product teams and Agile environments." }
    ];

    const careerStats = {
        averageIncome: "$115k - $160k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "92%",
        growthLabel: "Demand for AI-enabled Product Owners",
    };

    const attendeesData = [
        {
            group: [
                "Product Owners seeking to enhance strategic decision-making with AI.",
                "Product Managers exploring AI-driven product development.",
                "Agile professionals collaborating closely with product teams.",
                "Business analysts supporting product strategy.",
                "Leaders interested in AI-enabled product innovation."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
        { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
    ];

    const outcomes = [
        "Apply AI tools to strengthen product vision and strategic planning.",
        "Use AI analytics to prioritize backlog items effectively.",
        "Enhance customer understanding through AI-powered insights.",
        "Improve stakeholder communication using data-driven product reports.",
        "Implement ethical AI practices in product development."
    ];

    const prerequisites = [
        "Basic understanding of Agile and Scrum frameworks.",
        "Experience working as a Product Owner or within a product team is recommended.",
        "Interest in applying AI tools to product management processes."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the AI for Product Owners Microcredential training program."
        },
        {
            title: "Attend Interactive Training",
            description: "Participate in live sessions and practical AI exercises."
        },
        {
            title: "Apply Learning",
            description: "Complete hands-on activities using AI tools for product scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your AI for Product Owners Microcredential upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Introduction to AI in Product Management",
            topics: [
                "Understanding AI fundamentals for Product Owners.",
                "Opportunities and risks of AI in product development."
            ]
        },
        {
            title: "Module 2: AI for Product Vision and Strategy",
            topics: [
                "Using AI for market research and competitive analysis.",
                "Aligning AI insights with product vision."
            ]
        },
        {
            title: "Module 3: AI-Driven Backlog Prioritization",
            topics: [
                "Applying AI tools for backlog refinement.",
                "Forecasting impact and value using predictive analytics."
            ]
        },
        {
            title: "Module 4: Roadmap Planning with AI",
            topics: [
                "Data-driven roadmap creation.",
                "AI-supported stakeholder reporting."
            ]
        },
        {
            title: "Module 5: Ethical AI in Product Development",
            topics: [
                "Responsible AI implementation in product decisions.",
                "Transparency, fairness, and governance considerations."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand AI Fundamentals", description: "Gain foundational knowledge of AI concepts relevant to product management." },
        { title: "Enhance Product Strategy", description: "Use AI-generated insights to strengthen product vision and competitive positioning." },
        { title: "Optimize Backlog Management", description: "Apply AI techniques to prioritize features and manage product value effectively." },
        { title: "Improve Customer Insights", description: "Leverage AI tools to analyze customer behavior and market trends." },
        { title: "Implement Ethical AI Practices", description: "Ensure responsible and transparent use of AI in product decision-making." }
    ];

    const whySections = [
        { title: "Industry-Focused Curriculum", description: "Designed specifically for Product Owners to apply AI in real product scenarios." },
        { title: "Expert Instructors", description: "Delivered by experienced professionals in AI and product management." },
        { title: "Hands-On Learning", description: "Includes practical exercises and real-world case studies." },
        { title: "Flexible Training Options", description: "Available in live virtual and customized corporate formats." },
        { title: "Post-Training Support", description: "Access continued learning resources and expert assistance after course completion." }
    ];

    const courseFeatures = [
        { icon: Users, title: '4 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "AI for Product Owners Microcredential Course",
        breadcrumbName: "AI for Product Owners",
        rating: "5.0",
        enrolledCount: "1100+ professionals",
        subtitle: "Leverage AI to Strengthen Product Vision, Strategy, and Decision-Making",
        benefits: [
            "4 hours of live instructor-led AI training.",
            "Practical AI tools for product strategy and backlog management.",
            "Real-world case studies and hands-on exercises.",
            "Earn a recognized AI for Product Owners Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/cspo-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AI-PO',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 10,999',
            discountedPrice: 'INR 5,499',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "AI for Product Owners Microcredential Overview",
        description: [
            "The AI for Product Owners Microcredential course is designed to help product professionals integrate artificial intelligence into product strategy and decision-making.",
            "This program focuses on practical AI tools that enhance backlog prioritization, roadmap planning, and customer analysis.",
            "Participants will learn how to leverage AI insights to improve product-market fit, stakeholder communication, and overall product success."
        ],
        whatIsTitle: "What Is AI for Product Owners?",
        whatIsDescription: [
            "AI for Product Owners refers to the practical application of artificial intelligence tools within product management processes.",
            "It enables data-driven decision-making, improved customer insights, and enhanced strategic planning.",
            "AI supports Product Owners in maximizing product value while maintaining ethical and responsible usage."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Live instructor-led interactive training.",
            "Hands-on AI exercises for product scenarios.",
            "Real-world product case studies.",
            "Microcredential certification upon completion.",
            "Post-training learning resources and support."
        ],
        skillsTitle: "Skills Covered in the AI for Product Owners Course",
        skills: [
            "AI fundamentals for product management",
            "AI-driven market and customer analysis",
            "Backlog prioritization using predictive analytics",
            "Data-informed roadmap planning",
            "Stakeholder communication with AI insights",
            "Ethical AI implementation in product strategy"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live virtual instructor-led sessions.",
            "Customized corporate training programs tailored to enterprise product teams."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take the AI for Product Owners Microcredential course?", answer: "This course is ideal for Product Owners, Product Managers, and Agile professionals who want to integrate AI into product strategy and delivery." },
                { question: "2. Is technical AI knowledge required?", answer: "No programming or data science expertise is required. The course focuses on practical AI applications for product professionals." },
                { question: "3. How long is the training?", answer: "The training typically consists of 4 hours of live, instructor-led sessions." },
                { question: "4. Is the certification valid for life?", answer: "Yes, the AI for Product Owners Microcredential is valid for life and does not require renewal." }
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
                                courseName="Why Viovn for Corporate AI Training?"
                                description="Viovn provides customized corporate AI training programs tailored for product teams and organizations. Our expert trainers deliver practical, industry-aligned learning experiences that empower teams to integrate AI responsibly, enhance product strategy, and achieve measurable business outcomes."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel schedules={sidePanelSchedules} isOnDemand={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AIForProductOwnersMicrocredentialCourse;
