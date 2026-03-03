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
 * ICAgile AI for Product Discovery Micro-credential Course Training
 * Data source: course_data3.json
 */
const ICAgileAIForProductDiscoveryMicroCredentialCourseTraining = () => {
    const courseName = "ICAgile AI for Product Discovery Micro Credential Course Training";

    const highlights = [
        { text: "3 hours of live, instructor-led training." },
        { text: "Delivered by experienced ICAgile-authorized practitioners." },
        { text: "Earn 3 PDUs upon successful course completion." },
        { text: "ICAgile-approved curriculum aligned with modern product management and AI trends." },
        { text: "Interactive learning through discussions, peer collaboration, and guided activities." },
        { text: "Hands-on exercises based on real-world product discovery scenarios." },
        { text: "Earn an ICAgile-accredited AI for Product Discovery micro-credential with lifetime validity." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop stronger AI-powered product discovery skills by applying artificial intelligence to customer research, insight synthesis, and opportunity identification." },
        { title: "Individual Benefits", description: "Improve evidence-based decision-making by balancing AI-generated insights with human judgment during early product discovery stages." },
        { title: "Individual Benefits", description: "Accelerate learning and validation cycles by using AI to analyze data, test assumptions, and validate ideas efficiently." },
        { title: "Individual Benefits", description: "Enhance research and analytical capabilities by leveraging AI to uncover patterns in qualitative and quantitative data." },
        { title: "Individual Benefits", description: "Differentiate your career in product roles by earning an ICAgile-recognized micro-credential valued in innovation and discovery positions." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Reduce product discovery risk by validating ideas early using AI-supported insights." },
        { title: "Corporate Benefits", description: "Accelerate time-to-insight by enabling teams to analyze research data faster and move from questions to actionable findings efficiently." },
        { title: "Corporate Benefits", description: "Strengthen customer-centric innovation by deeply understanding user needs through AI-assisted discovery techniques." },
        { title: "Corporate Benefits", description: "Improve cross-functional collaboration by aligning product, design, engineering, and business teams around AI-driven insights." },
        { title: "Corporate Benefits", description: "Establish consistent and scalable discovery practices that responsibly integrate AI across multiple product teams." }
    ];

    const careerStats = {
        averageIncome: "$115k - $165k",
        incomeLabel: "Salary for AI-enabled Product Roles",
        employmentGrowth: "89%",
        growthLabel: "Demand for AI-driven discovery expertise",
    };

    const attendeesData = [
        {
            group: [
                "Apply AI tools to accelerate customer research, insight generation, and opportunity assessment.",
                "Analyze qualitative and quantitative product data using AI-supported techniques to uncover patterns and reduce discovery risk.",
                "Integrate AI into discovery workflows while balancing automation with ethical and human-centered decision-making.",
                "Improve collaboration across product, design, engineering, and business teams using AI-driven insights.",
                "Design and refine hypotheses and experiments using AI to validate ideas faster throughout the product lifecycle."
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
        "Leverage AI tools to accelerate product discovery activities.",
        "Use AI-supported analysis to reduce risk in early-stage product decisions.",
        "Balance AI insights with human judgment and ethical considerations.",
        "Enhance collaboration through shared, data-driven discovery practices.",
        "Design experiments and validate hypotheses efficiently using AI."
    ];

    const prerequisites = [
        "No formal prerequisites are required.",
        "Basic familiarity with product management, discovery practices, or Agile workflows is beneficial but not mandatory."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Training",
            description: "Register for the ICAgile AI for Product Discovery Micro-Credential course offered by Viovn."
        },
        {
            title: "Attend the Live Training",
            description: "Participate in interactive instructor-led sessions covering AI applications in product discovery and ethical considerations."
        },
        {
            title: "Engage in Practical Exercises",
            description: "Actively participate in hands-on exercises and collaborative discussions to demonstrate understanding."
        },
        {
            title: "Receive Your Micro-Credential",
            description: "Successfully complete the course to earn the ICAgile-recognized AI for Product Discovery Micro-Credential with lifetime validity."
        }
    ];

    const curriculumModules = [
        {
            title: "Introduction: AI’s Role in Product Discovery",
            topics: [
                "Understanding how AI supports faster and deeper exploration.",
                "Balancing automation with human creativity and judgment."
            ]
        },
        {
            title: "Research with AI: Markets, Customers, and Trends",
            topics: [
                "Using AI to identify needs, gaps, and opportunities.",
                "Applying AI techniques for trend analysis and customer insights."
            ]
        },
        {
            title: "AI-Assisted Ideation and Refinement",
            topics: [
                "Generating structured ideas using AI prompts and models.",
                "Filtering and refining concepts using AI support."
            ]
        },
        {
            title: "Opportunity Assessment and Prioritization",
            topics: [
                "Evaluating feasibility, desirability, and viability.",
                "Prioritizing ideas based on data and strategic alignment."
            ]
        },
        {
            title: "Ethics, Risks, and Responsible AI Use",
            topics: [
                "Recognizing bias and limitations in AI-generated outputs.",
                "Maintaining human-centered product decision-making.",
                "Case studies on responsible AI application in product discovery."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Apply AI to Strengthen Product Discovery", description: "Learn how AI supports early-stage research, opportunity identification, and idea validation." },
        { title: "Balance AI Insights with Human Judgment", description: "Integrate AI-generated insights responsibly with critical thinking and ethical considerations." },
        { title: "Accelerate Hypothesis Testing", description: "Design and validate assumptions faster using AI-enabled experimentation techniques." },
        { title: "Drive Customer-Centric Decisions", description: "Use AI insights to uncover genuine user needs and deliver meaningful value." },
        { title: "Adopt Responsible AI Practices", description: "Apply ethical AI principles to ensure sustainable and transparent innovation." }
    ];

    const whySections = [
        { title: "ICAgile-Accredited Training Partner", description: "Viovn is an ICAgile-accredited provider ensuring global quality standards and recognized learning outcomes." },
        { title: "Experienced ICAgile-Authorized Instructors", description: "Learn from practitioners with real-world expertise in product discovery, AI adoption, and agile product development." },
        { title: "Industry-Aligned Curriculum", description: "Course content reflects current AI applications and evolving product discovery practices." },
        { title: "Practical, Real-World Learning", description: "Hands-on exercises and real scenarios prepare participants for immediate workplace application." },
        { title: "Interactive Instructor-Led Sessions", description: "Collaborative discussions and live activities ensure deeper understanding and engagement." },
        { title: "Flexible Learning Options", description: "Available in live virtual and corporate formats for working professionals across regions." },
        { title: "Comprehensive Learner Support", description: "Participants receive access to ICAgile-approved materials and instructor guidance throughout the program." },
        { title: "Globally Recognized Micro-Credential", description: "Earn an ICAgile-recognized micro-credential with lifetime validity that enhances professional credibility." }
    ];

    const courseFeatures = [
        { icon: Users, title: '3 Hours', subtitle: 'Live Training', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Micro-Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "ICAgile AI for Product Discovery Micro Credential Course Training",
        breadcrumbName: "AI for Product Discovery",
        rating: "5.0",
        enrolledCount: "410+ professionals",
        subtitle: "Accelerate Customer Insights and Validate Ideas Using AI",
        benefits: [
            "3-hour live instructor-led ICAgile training",
            "Hands-on AI applications for research and ideation",
            "Real-world product discovery scenarios",
            "Ethical AI practices for responsible innovation",
            "Earn a globally recognized ICAgile micro-credential"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'ICA-AI-PD',
            courseName: heroData.courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Senior Product Discovery Coach',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 11,499',
            discountPercentage: '28',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "ICAgile AI for Product Discovery Micro-Credential Course Overview",
        description: [
            "The ICAgile AI for Product Discovery Certification Training helps professionals apply artificial intelligence to strengthen early-stage product development.",
            "Participants learn how AI accelerates customer research, analyzes qualitative and quantitative data, and reveals patterns that support better decision-making.",
            "The course focuses on AI-enabled insight synthesis, opportunity discovery, and idea validation while emphasizing ethical considerations.",
            "Upon completion, participants earn an ICAgile-recognized micro-credential with lifetime validity."
        ],
        whatIsTitle: "What is AI for Product Discovery?",
        whatIsDescription: [
            "AI for Product Discovery involves using artificial intelligence to enhance research, evaluate assumptions, and validate opportunities before building solutions.",
            "It helps process large volumes of customer feedback and behavioral data to surface actionable insights efficiently.",
            "AI acts as a decision-support tool that complements human creativity, empathy, and strategic thinking."
        ],
        whatsIncludedTitle: "What’s Included in Our AI for Product Discovery Training Program?",
        whatsIncludedDescription: [
            "3 hours of live instructor-led training",
            "Interactive discussions and peer collaboration",
            "Hands-on AI exercises and real-world scenarios",
            "ICAgile-approved learning materials",
            "Post-training guidance and certification support"
        ],
        skillsTitle: "Skills Covered in the AI for Product Discovery Course",
        skills: [
            "AI-powered customer research and data analysis",
            "Opportunity identification using AI insights",
            "Idea generation and refinement techniques",
            "Hypothesis validation and experimentation",
            "Ethical AI integration in product workflows"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live Instructor-Led Virtual Training with interactive sessions.",
            "Corporate Training customized for organizational product teams."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQs",
            items: [
                { question: "1. What is the format of the course?", answer: "The course is a 3-hour live, instructor-led virtual session." },
                { question: "2. Is this course for technical people only?", answer: "No, it is designed for product managers, designers, and business leaders who want to use AI in discovery." },
                { question: "3. Will I receive a certificate?", answer: "Yes, you will earn the globally recognized ICAgile AI for Product Discovery Micro-Credential." }
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
                                courseName="Why SimpliAxis Is the First Choice for Corporates?"
                                description="SimpliAxis delivers tailored corporate training programs designed to help organizations integrate AI into product discovery responsibly and effectively."
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

export default ICAgileAIForProductDiscoveryMicroCredentialCourseTraining;
