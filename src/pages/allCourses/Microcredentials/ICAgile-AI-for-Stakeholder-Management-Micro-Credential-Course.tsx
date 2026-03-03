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
 * ICAgile AI for Stakeholder Management Micro-credential Course
 * Data source: course_data3.json
 */
const ICAgileAIForStakeholderManagementMicroCredentialCourse = () => {
    const courseName = "ICAgile AI for Stakeholder Management Micro Credential Course Certification Training";

    const highlights = [
        { text: "3 hours of interactive, live instructor-led training with practical exercises." },
        { text: "Earn 3 PDUs upon successful course completion." },
        { text: "Use AI tools to analyze stakeholders, map influence, and uncover actionable insights." },
        { text: "Gain practical guidance on ethical AI use and responsible stakeholder engagement." },
        { text: "Earn a globally recognized ICAgile AI for Stakeholder Management micro-credential badge." },
        { text: "100% course completion success rate." },
        { text: "24/7 learner support and assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Enhance stakeholder analysis, engagement, and communication skills using AI-driven insights." },
        { title: "Individual Benefits", description: "Expand career opportunities with a globally recognized ICAgile credential valued in Agile coaching, product management, and transformation roles." },
        { title: "Individual Benefits", description: "Gain practical, non-technical exposure to AI tools that support informed stakeholder decision-making." },
        { title: "Individual Benefits", description: "Strengthen leadership, negotiation, and influence skills across diverse stakeholder groups." },
        { title: "Individual Benefits", description: "Improve strategic communication by tailoring messaging effectively for different stakeholder audiences." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve alignment among leadership, teams, and customers through AI-supported stakeholder insights." },
        { title: "Corporate Benefits", description: "Enable smoother change adoption by managing resistance and enhancing engagement strategies." },
        { title: "Corporate Benefits", description: "Establish scalable stakeholder management practices across Agile and enterprise initiatives." },
        { title: "Corporate Benefits", description: "Deliver higher business value by aligning outcomes with stakeholder expectations and strategic goals." },
        { title: "Corporate Benefits", description: "Reduce stakeholder conflict through proactive, AI-enabled communication and influence mapping." }
    ];

    const careerStats = {
        averageIncome: "$110k - $160k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "85%",
        growthLabel: "Demand for AI-enabled soft skills",
    };

    const attendeesData = [
        {
            group: [
                "Apply AI-powered techniques to analyze, prioritize, and manage stakeholders across Agile and enterprise environments.",
                "Enhance stakeholder communication using data-informed insights.",
                "Support strategic decision-making by embedding AI into stakeholder planning activities.",
                "Strengthen leadership, influence, and change management capabilities.",
                "Confidently manage complex stakeholder relationships using practical AI tools."
            ]
        }
    ];

    const companies = [
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" }
    ];

    const outcomes = [
        "Apply AI techniques for effective stakeholder analysis and prioritization.",
        "Improve engagement strategies through AI-informed communication planning.",
        "Support decision-making with data-backed stakeholder insights.",
        "Strengthen leadership influence in transformation initiatives.",
        "Reduce stakeholder risks and conflicts through proactive management."
    ];

    const prerequisites = [
        "No mandatory prerequisites are required.",
        "Basic familiarity with Agile or stakeholder management is beneficial but not necessary."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Training",
            description: "Register with an ICAgile-authorized provider to begin your certification journey."
        },
        {
            title: "Attend the Live Course",
            description: "Participate in 3 hours of instructor-led sessions covering AI-enabled stakeholder management concepts."
        },
        {
            title: "Complete Practical Exercises",
            description: "Engage in interactive discussions and real-world stakeholder scenarios to demonstrate learning."
        },
        {
            title: "Earn Your Micro-Credential",
            description: "Successfully complete the training to receive your globally recognized ICAgile AI for Stakeholder Management Micro-Credential."
        }
    ];

    const curriculumModules = [
        {
            title: "The Stakeholder Storm: Navigating Overload and Distraction",
            topics: [
                "Understanding the evolving stakeholder landscape.",
                "Identifying risks of misalignment and communication fatigue.",
                "Managing stakeholder triage and information overload."
            ]
        },
        {
            title: "From Noise to Clarity: AI-Based Segmentation and Clustering",
            topics: [
                "Using AI for stakeholder segmentation.",
                "Separating meaningful signals from noise with AI tools.",
                "Applying clustering techniques for clearer analysis."
            ]
        },
        {
            title: "Understanding Signals: Patterns and Sentiment Analysis",
            topics: [
                "Analyzing tone, intent, and sentiment.",
                "Detecting emerging issues and feedback loops.",
                "Managing conflicting stakeholder inputs."
            ]
        },
        {
            title: "From Insights to Influence: AI-Driven Communication Strategies",
            topics: [
                "Tailoring content for different audiences.",
                "Maintaining transparency and message integrity.",
                "Using dashboards and summaries for effective engagement."
            ]
        },
        {
            title: "Ethical Boundaries in AI-Driven Stakeholder Management",
            topics: [
                "Understanding limits of automation in human communication.",
                "Mitigating bias and maintaining trust.",
                "Establishing governance and oversight mechanisms.",
                "Case studies on responsible AI application."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand AI-Powered Stakeholder Analysis", description: "Use AI-driven insights to identify, analyze, and prioritize stakeholders effectively." },
        { title: "Improve Communication and Engagement", description: "Develop AI-supported communication strategies to manage expectations and strengthen relationships." },
        { title: "Support Strategic Decision-Making", description: "Utilize AI-backed data to balance stakeholder interests with business objectives." },
        { title: "Strengthen Leadership and Influence", description: "Build the skills required to drive alignment and manage change initiatives." },
        { title: "Embed Ethical AI Practices", description: "Apply responsible AI principles, ensuring transparency, trust, and fairness in stakeholder interactions." }
    ];

    const whySections = [
        { title: "ICAgile-Authorized Training Partner", description: "Viovn is an ICAgile-authorized provider ensuring global standards and quality learning delivery." },
        { title: "Expert ICAgile-Certified Instructors", description: "Learn from experienced practitioners with real-world expertise in Agile transformation and AI-enabled stakeholder management." },
        { title: "Comprehensive, Practical Curriculum", description: "Gain hands-on experience with AI-enabled stakeholder analysis and engagement techniques." },
        { title: "Interactive Learning Approach", description: "Participate in collaborative discussions and real-world exercises for practical skill development." },
        { title: "Globally Recognized Credential", description: "Earn a respected ICAgile micro-credential recognized worldwide." },
        { title: "Lifetime Certification Validity", description: "The ICAgile micro-credential remains valid for life without renewal requirements." },
        { title: "Strong Career Advancement", description: "Enhance professional credibility and prepare for leadership roles involving complex stakeholder ecosystems." },
        { title: "Dedicated Learner Support", description: "Receive comprehensive support before, during, and after training." }
    ];

    const courseFeatures = [
        { icon: Users, title: '3 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Micro-Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "ICAgile AI for Stakeholder Management Micro Credential",
        breadcrumbName: "AI for Stakeholder Management",
        rating: "5.0",
        enrolledCount: "350+ professionals",
        subtitle: "Master AI-Enabled Stakeholder Analysis and Strategic Engagement",
        benefits: [
            "3-hour live instructor-led training",
            "Hands-on AI-driven stakeholder analysis exercises",
            "Ethical AI practices for stakeholder engagement",
            "Improve alignment and collaboration across teams",
            "Earn a globally recognized ICAgile micro-credential"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'ICA-AI-SHM',
            courseName: heroData.courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Strategic Leadership Coach',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 14,999',
            discountedPrice: 'INR 9,999',
            discountPercentage: '33',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "AI for Stakeholder Management Micro Credential Course Overview",
        description: [
            "The ICAgile AI for Stakeholder Management course equips professionals with practical skills to apply artificial intelligence in strategic stakeholder engagement.",
            "Participants learn to use AI tools for stakeholder mapping, influence analysis, sentiment interpretation, and engagement prioritization.",
            "The course combines conceptual understanding with practical exercises, enabling professionals to improve collaboration, communication, and decision-making in Agile and enterprise environments.",
            "Upon completion, learners receive a globally recognized ICAgile AI for Stakeholder Management Micro-Credential."
        ],
        whatIsTitle: "What is AI for Stakeholder Management?",
        whatIsDescription: [
            "AI for Stakeholder Management involves leveraging artificial intelligence to analyze stakeholder data, identify patterns, and enhance engagement strategies.",
            "It supports informed decision-making, improved communication, and stronger stakeholder relationships in complex organizational settings."
        ],
        whatsIncludedTitle: "What’s Included in Our AI for Stakeholder Management Training?",
        whatsIncludedDescription: [
            "3 hours of live instructor-led training",
            "Hands-on AI stakeholder mapping exercises",
            "Practical real-world scenarios",
            "ICAgile micro-credential certification",
            "Post-training support and resources"
        ],
        skillsTitle: "Skills Covered in the AI for Stakeholder Management Course",
        skills: [
            "AI-driven stakeholder analysis and prioritization",
            "Stakeholder communication planning",
            "Influence and relationship management",
            "AI-supported decision-making",
            "Ethical AI governance in stakeholder engagement"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live instructor-led online training",
            "Corporate group training",
            "Customized enterprise programs"
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQ",
            items: [
                { question: "1. Is this only for technical professionals?", answer: "No, this is about strategic application for anyone involved in stakeholder engagement." },
                { question: "2. Do I need to know how to code?", answer: "Not at all. The course focuses on using AI tools effectively, not building them." },
                { question: "3. When will I get my badge?", answer: "Typically within a few business days after full participation is verified." }
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
                                courseName="Why SimpliAxis Is the First Choice for Corporates?"
                                description="SimpliAxis delivers customized corporate training solutions that strengthen stakeholder alignment and improve AI-enabled collaboration practices."
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

export default ICAgileAIForStakeholderManagementMicroCredentialCourse;
