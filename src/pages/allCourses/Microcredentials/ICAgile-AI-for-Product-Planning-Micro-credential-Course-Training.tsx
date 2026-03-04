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
 * ICAgile AI for Product Planning Micro-credential Course Training
 * Data source: course_data3.json
 */
const ICAgileAIForProductPlanningMicroCredentialCourseTraining = () => {
    const courseName = "ICAgile AI for Product Planning Micro Credential Course Training";

    const highlights = [
        { text: "3 hours of live, instructor-led online training." },
        { text: "Earn 3 PDUs upon successful course completion." },
        { text: "Globally recognized ICAgile AI for Product Planning Micro-Credential." },
        { text: "Strong focus on responsible and ethical AI implementation." },
        { text: "Hands-on experience with real-world AI-driven planning scenarios." },
        { text: "Access to ICAgile-authorized courseware and learning materials." },
        { text: "Mentorship from experienced AI Product Planning trainers." },
        { text: "Tool-agnostic, practical learning approach applicable across platforms." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Master AI-driven planning techniques by building practical, tool-agnostic skills in AI-powered roadmapping, backlog prioritization, and predictive forecasting." },
        { title: "Individual Benefits", description: "Accelerate planning efficiency by leveraging AI insights to reduce planning cycle time and make faster, data-informed trade-off decisions." },
        { title: "Individual Benefits", description: "Future-proof your career with a lifetime, globally recognized ICAgile credential that requires no renewal." },
        { title: "Individual Benefits", description: "Expand career opportunities by demonstrating validated expertise in AI-driven product planning." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Develop AI-enhanced roadmaps aligned with business objectives and adaptable to changing market conditions." },
        { title: "Corporate Benefits", description: "Optimize backlog prioritization using AI-supported frameworks such as RICE, MoSCoW, and WSJF combined with human judgment." },
        { title: "Corporate Benefits", description: "Improve delivery predictability through AI forecasting for release planning and capacity management." },
        { title: "Corporate Benefits", description: "Establish ethical AI planning practices with transparency, accountability, and responsible decision-making." }
    ];

    const careerStats = {
        averageIncome: "$115k - $160k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "88%",
        growthLabel: "Industry growth in AI planning demand",
    };

    const attendeesData = [
        {
            group: [
                "Create AI-enhanced product roadmaps aligned with organizational goals and customer needs."
            ]
        },
        {
            group: [
                "Apply AI tools to evaluate and prioritize features using structured frameworks.",
                "Use AI forecasting to improve release predictability and timeline accuracy.",
                "Implement responsible AI practices with transparency and oversight."
            ]
        }
    ];

    const companies = [
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" }
    ];

    const outcomes = [
        "Design AI-enhanced product roadmaps aligned with business and customer value.",
        "Apply AI-driven prioritization frameworks to optimize backlogs.",
        "Improve release planning accuracy using AI-based forecasting.",
        "Integrate responsible AI principles into product planning decisions."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "Basic familiarity with Agile practices or product planning is recommended."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the ICAgile AI for Product Planning course through an authorized provider such as Viovn."
        },
        {
            title: "Attend the Live Training",
            description: "Participate in 3 hours of instructor-led sessions focused on AI-enabled product planning techniques."
        },
        {
            title: "Complete Practical Learning Activities",
            description: "Engage in exercises, discussions, and scenario-based activities to demonstrate understanding."
        },
        {
            title: "Earn Your Micro-Credential",
            description: "Receive the ICAgile AI for Product Planning Micro-Credential upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Foundations of AI-Driven Product Planning",
            topics: [
                "Understanding AI’s role in modern product planning.",
                "Identifying where AI adds value across roadmaps and backlogs.",
                "Balancing human judgment with AI-assisted intelligence.",
                "Defining responsible AI guardrails in planning."
            ]
        },
        {
            title: "Identifying and Evaluating Product Opportunities with AI",
            topics: [
                "Analyzing customer data and market trends using AI.",
                "Translating AI insights into product hypotheses.",
                "Validating roadmap and backlog opportunities."
            ]
        },
        {
            title: "AI-Enabled Roadmapping and Scenario Simulation",
            topics: [
                "Building adaptive roadmaps with AI support.",
                "Simulating alternative planning scenarios.",
                "Evaluating trade-offs across value, risk, and capacity."
            ]
        },
        {
            title: "AI-Supported Feature Prioritization",
            topics: [
                "Applying AI-assisted prioritization techniques.",
                "Integrating AI with established frameworks.",
                "Avoiding over-automation in decision-making."
            ]
        },
        {
            title: "Designing AI-Assisted Release Plans",
            topics: [
                "Structuring multi-iteration release strategies.",
                "Forecasting risks and dependencies using AI.",
                "Balancing feasibility and time-to-market."
            ]
        },
        {
            title: "Ethics, Bias, and Reliability in AI-Driven Planning",
            topics: [
                "Recognizing AI bias and data limitations.",
                "Evaluating reliability of AI outputs.",
                "Implementing human oversight mechanisms."
            ]
        },
        {
            title: "Integrated Practical Application",
            topics: [
                "End-to-end AI-driven product planning scenario.",
                "Opportunity identification to release planning.",
                "Comparing AI recommendations with human judgment.",
                "Applying learning in real-world environments."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Create Data-Driven Product Roadmaps with AI", description: "Leverage AI tools to design strategic product roadmaps aligned with customer and business goals." },
        { title: "Confident Backlog Prioritization", description: "Combine AI-supported frameworks with human expertise to optimize backlog decisions." },
        { title: "Outcome-Focused Release Planning", description: "Design AI-assisted release strategies balancing value, feasibility, and delivery speed." },
        { title: "Scenario Simulation for Better Decisions", description: "Model alternative planning scenarios using AI to assess trade-offs." },
        { title: "AI-Enhanced Opportunity Evaluation", description: "Use AI insights to identify and validate emerging product opportunities." },
        { title: "Responsible AI Implementation", description: "Apply ethical principles and governance when using AI in product planning." }
    ];

    const whySections = [
        { title: "ICAgile-Accredited Training Provider", description: "Viovn is an authorized ICAgile partner ensuring global standards and quality delivery." },
        { title: "Experienced AI and Agile Coaches", description: "Training is delivered by ICAgile-certified instructors with enterprise-level experience." },
        { title: "Practical, Planning-Focused Learning", description: "The course emphasizes real-world planning challenges and hands-on AI applications." },
        { title: "Industry-Relevant Case Studies", description: "Engage with realistic scenarios from diverse product environments." },
        { title: "Interactive and Collaborative Sessions", description: "Participate in live discussions, peer collaboration, and guided exercises." },
        { title: "ICAgile-Approved Course Materials", description: "Access high-quality, outcome-aligned learning resources." },
        { title: "PDUs Included", description: "Earn 3 PDUs to support PMI and other professional certification renewals." },
        { title: "Globally Recognized Credential", description: "Receive a lifetime-valid ICAgile micro-credential recognized worldwide." }
    ];

    const courseFeatures = [
        { icon: Users, title: '3 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Micro-Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "ICAgile AI for Product Planning Micro Credential Course Training",
        breadcrumbName: "AI for Product Planning",
        rating: "5.0",
        enrolledCount: "420+ professionals",
        subtitle: "Master AI-Enabled Product Planning and Strategic Roadmapping",
        benefits: [
            "3-hour live, instructor-led ICAgile training",
            "AI-powered backlog and roadmap optimization",
            "Predictive release planning techniques",
            "Responsible AI implementation framework",
            "Globally recognized ICAgile micro-credential"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'ICA-AI-APP',
            courseName: heroData.courseName,
            dateRange: 'Starting Soon',
            timeRange: 'Flexible',
            trainerName: 'Consultant Agile Strategist',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 17,999',
            discountedPrice: 'INR 12,999',
            discountPercentage: '28',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Overview of ICAgile AI for Product Planning Micro-Credential Course",
        description: [
            "The ICAgile AI for Product Planning Micro-Credential course equips professionals with practical skills to apply AI in modern product planning.",
            "Participants learn to enhance backlog refinement, prioritize features intelligently, simulate planning scenarios, and forecast releases using AI-driven insights.",
            "This training strengthens decision-making confidence and enables value-focused product delivery in dynamic environments."
        ],
        whatIsTitle: "What is AI for Product Planning?",
        whatIsDescription: [
            "AI for Product Planning involves applying artificial intelligence to improve roadmap creation, prioritization, and release planning decisions.",
            "It enables teams to analyze trends, simulate outcomes, and align product strategy with measurable business value."
        ],
        whatsIncludedTitle: "What’s Included in Our ICAgile AI for Product Planning Training?",
        whatsIncludedDescription: [
            "3 hours of live, instructor-led online training",
            "Hands-on AI-driven planning exercises",
            "ICAgile AI for Product Planning micro-credential certificate",
            "Interactive discussions and scenario simulations",
            "Post-training mentorship support"
        ],
        skillsTitle: "Skills Covered in ICAgile AI for Product Planning Training",
        skills: [
            "AI-powered roadmap development",
            "Intelligent backlog prioritization",
            "Predictive release forecasting",
            "Strategic resource allocation",
            "Responsible AI governance"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live instructor-led online training",
            "Corporate group training",
            "Customized enterprise learning solutions"
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQs",
            items: [
                { question: "1. What is AI for Product Planning?", answer: "A focus on using AI to build and maintain high-quality product roadmaps." },
                { question: "2. Is this for engineers?", answer: "No, this is specifically for Product and Project Leaders." },
                { question: "3. How is ICAgile involved?", answer: "They define the curriculum standards for this micro-credential." }
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
                                courseName="Why SimpliAxis Is the First Choice for Corporates?"
                                description="SimpliAxis delivers customized corporate training solutions designed to strengthen AI-enabled product planning capabilities."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
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

export default ICAgileAIForProductPlanningMicroCredentialCourseTraining;
