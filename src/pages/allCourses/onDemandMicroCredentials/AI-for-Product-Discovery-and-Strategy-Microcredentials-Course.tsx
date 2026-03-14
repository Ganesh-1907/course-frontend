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
    CheckCircle2,
    SearchCode
} from "lucide-react";

/**
 * AI for Product Discovery and Strategy Microcredentials Course
 * Data source: course_data3.json
 */
const AIForProductDiscoveryAndStrategyMicrocredentialCourse = () => {
    const courseName = "AI for Product Discovery and Strategy Microcredentials Course";

    const highlights = [
        { text: "4 hours of focused training on applying AI in product discovery and strategic decision-making." },
        { text: "Learn how AI enhances customer research, validation, and opportunity identification." },
        { text: "Apply AI tools to improve product discovery and roadmap strategy." },
        { text: "Understand data-driven experimentation and hypothesis testing using AI." },
        { text: "Explore real-world AI use cases in product innovation." },
        { text: "Develop AI-informed strategic thinking for competitive advantage." },
        { text: "Earn a recognized AI for Product Discovery and Strategy Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop the ability to integrate AI into product discovery processes." },
        { title: "Individual Benefits", description: "Enhance strategic decision-making using AI-driven insights." },
        { title: "Individual Benefits", description: "Strengthen skills in customer validation and experimentation." },
        { title: "Individual Benefits", description: "Advance career opportunities in product management and AI-enabled strategy roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve product discovery accuracy through AI-driven customer insights." },
        { title: "Corporate Benefits", description: "Accelerate innovation cycles with data-informed experimentation." },
        { title: "Corporate Benefits", description: "Enhance strategic alignment between product and business goals." },
        { title: "Corporate Benefits", description: "Increase competitive advantage through AI-enabled product strategy." }
    ];

    const careerStats = {
        averageIncome: "$130k - $190k",
        incomeLabel: "Salary Range",
        employmentGrowth: "95%",
        growthLabel: "AI Product Role Growth",
    };

    const attendeesData = [
        {
            group: [
                "Product Managers and Product Owners.",
                "Product Strategists and Innovation Leaders.",
                "Business Analysts and UX Researchers.",
                "Startup founders and entrepreneurs.",
                "Professionals involved in AI-enabled product initiatives."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/en/0/04/Meta_Platforms_inc_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" }
    ];

    const outcomes = [
        "Understand how AI enhances product discovery and validation.",
        "Apply AI tools for customer research and market analysis.",
        "Integrate AI insights into product roadmaps and strategy.",
        "Conduct AI-driven experiments and hypothesis testing.",
        "Develop competitive product strategies using AI intelligence."
    ];

    const prerequisites = [
        "Basic understanding of product management principles.",
        "Familiarity with Agile or Lean product development is beneficial.",
        "Interest in applying AI to product strategy and innovation."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the AI for Product Discovery and Strategy Microcredential training program."
        },
        {
            title: "Participate in Interactive Training",
            description: "Attend instructor-led sessions and complete hands-on AI exercises."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through AI-based product discovery scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: AI Fundamentals for Product Discovery",
            topics: [
                "Introduction to AI concepts relevant to product teams.",
                "AI tools for customer research and insight generation.",
                "Identifying AI opportunities in product discovery."
            ]
        },
        {
            title: "Module 2: AI-Driven Customer Validation",
            topics: [
                "Analyzing customer behavior with AI.",
                "Sentiment analysis and feedback modeling.",
                "Validating product hypotheses using AI insights."
            ]
        },
        {
            title: "Module 3: Strategy Development with AI",
            topics: [
                "AI-enhanced competitive analysis.",
                "Data-driven roadmap planning.",
                "Aligning AI insights with business objectives."
            ]
        },
        {
            title: "Module 4: Experimentation and Continuous Learning",
            topics: [
                "Designing AI-supported experiments.",
                "Measuring product success using predictive analytics.",
                "Embedding AI into continuous product improvement."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand AI in Product Context", description: "Gain clarity on how AI supports product discovery and strategic planning." },
        { title: "Apply AI Tools Effectively", description: "Use AI platforms to generate meaningful customer and market insights." },
        { title: "Enhance Strategic Thinking", description: "Integrate AI intelligence into product roadmaps and innovation strategies." },
        { title: "Drive Data-Driven Decisions", description: "Leverage AI-driven experimentation to validate product opportunities." },
        { title: "Strengthen Competitive Advantage", description: "Develop AI-informed product strategies that differentiate in the market." }
    ];

    const whySections = [
        { title: "AI-Focused Product Curriculum", description: "Designed to integrate AI directly into product discovery and strategic planning." },
        { title: "Practical and Hands-On Learning", description: "Includes real-world case studies and AI tool demonstrations." },
        { title: "Expert-Led Training", description: "Delivered by experienced product and AI practitioners." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand AI-enabled product strategy skills." }
    ];

    const courseFeatures = [
        { icon: SearchCode, title: 'Discovery', subtitle: 'AI Research', color: 'bg-emerald-50 text-emerald-600' },
        { icon: Settings, title: 'Strategy', subtitle: 'AI Roadmap', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: TrendingUp, title: 'Innovation', subtitle: 'Competitive', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "AI for Product Discovery and Strategy Microcredentials Course",
        breadcrumbName: "AI Product Discovery & Strategy",
        rating: "5.0",
        enrolledCount: "1350+ professionals",
        subtitle: "Leverage AI to Transform Product Discovery and Strategic Decision-Making",
        benefits: [
            "4 hours of focused AI-driven product training.",
            "Hands-on AI tools for customer validation and strategy.",
            "Real-world product innovation case studies.",
            "Earn a recognized AI Product Strategy Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "AI for Product Discovery and Strategy Microcredential Overview",
        description: [
            "The AI for Product Discovery and Strategy Microcredentials course provides a structured approach to integrating artificial intelligence into product discovery and strategic planning.",
            "This program focuses on leveraging AI tools to generate customer insights, validate opportunities, and develop data-driven product strategies.",
            "Participants will gain practical knowledge to enhance innovation, reduce uncertainty, and create competitive product advantages."
        ],
        whatIsTitle: "What Is AI for Product Discovery and Strategy?",
        whatIsDescription: [
            "AI for Product Discovery and Strategy focuses on applying artificial intelligence to improve customer research, validation, and strategic decision-making.",
            "It combines product management principles with AI-driven analytics and experimentation.",
            "The course equips professionals with practical tools to integrate AI into product innovation workflows."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Hands-on AI product discovery exercises.",
            "Real-world case studies and strategic frameworks.",
            "Microcredential certification upon completion.",
            "Access to supporting learning resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "AI-powered customer research",
            "Data-driven product validation",
            "Strategic roadmap development",
            "AI-based experimentation techniques",
            "Competitive product strategy analysis"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live virtual instructor-led training.",
            "Customized corporate training programs."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take this course?", answer: "This course is ideal for Product Managers, Product Owners, strategists, and professionals interested in applying AI to product discovery and strategy." },
                { question: "2. Is technical AI knowledge required?", answer: "No advanced technical knowledge is required. The course focuses on practical AI applications for product professionals." },
                { question: "3. How long is the training?", answer: "The AI for Product Discovery and Strategy Microcredential training typically lasts 4 hours." },
                { question: "4. Is the microcredential valid for life?", answer: "Yes, the microcredential is valid for life and does not require renewal." }
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
          categoryName="on-demand microcredentials"
          categoryLink="/category/on-demand-microcredentials"
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
                                courseName="Why Viovn for AI Product Strategy Training?"
                                description="Viovn delivers customized AI product strategy training programs designed to strengthen innovation capability and improve strategic decision-making. Our expert-led sessions empower organizations to integrate AI into product discovery processes and achieve measurable competitive advantages."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel courseName={heroData.courseName}  isOnDemand={true}  />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AIForProductDiscoveryAndStrategyMicrocredentialCourse;
