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
 * ICAgile AI for Product Metrics Micro-credential Course Training
 * Data source: course_data3.json
 */
const ICAgileAIForProductMetricsMicroCredentialCourseTraining = () => {
    const courseName = "ICAgile AI for Product Metrics Micro Credential Certification Training";

    const highlights = [
        { text: "3 hours of interactive, instructor-led online training." },
        { text: "Earn 3 PDUs upon successful course completion." },
        { text: "Learn from ICAgile-accredited trainers with real-world expertise." },
        { text: "ICAgile-approved learning content designed to deliver measurable outcomes." },
        { text: "Hands-on AI practice to measure, analyze, and interpret product metrics effectively." },
        { text: "Ongoing assessment to validate knowledge and practical application." },
        { text: "Earn a globally recognized ICAgile Product Metrics Micro-Credential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Strengthen product measurement skills by applying AI to analyze metrics, identify meaningful signals, and move beyond surface-level reporting." },
        { title: "Individual Benefits", description: "Improve data-informed decision-making by combining AI-driven insights with sound human judgment." },
        { title: "Individual Benefits", description: "Gain a deeper understanding of product performance through AI-supported analysis of customer, business, and delivery metrics." },
        { title: "Individual Benefits", description: "Generate insights faster using AI techniques to uncover patterns and trends in large datasets." },
        { title: "Individual Benefits", description: "Enhance career growth and professional credibility with an ICAgile-recognized micro-credential in AI-enabled product metrics." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve the reliability and relevance of product metrics through AI-supported analysis." },
        { title: "Corporate Benefits", description: "Enable stronger strategic decisions by connecting product performance data to business outcomes." },
        { title: "Corporate Benefits", description: "Identify risks and opportunities early using AI to detect performance signals and emerging trends." },
        { title: "Corporate Benefits", description: "Promote a culture of continuous learning through AI-informed experimentation and metric-driven improvements." },
        { title: "Corporate Benefits", description: "Build competitive advantage by increasing organizational data maturity and AI-enabled measurement capabilities." }
    ];

    const careerStats = {
        averageIncome: "$130k - $185k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "92%",
        growthLabel: "Demand for AI-enabled analytics",
    };

    const attendeesData = [
        {
            group: [
                "Apply artificial intelligence to product metrics to uncover patterns, trends, and signals within complex datasets.",
                "Strengthen measurement practices by integrating AI-driven insights with human judgment.",
                "Improve visibility into product performance across customer, business, and delivery metrics.",
                "Make informed product decisions by interpreting AI-supported insights aligned with customer value and business outcomes.",
                "Support continuous learning within product teams through AI-guided experimentation and iteration."
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
        "Apply AI techniques to analyze and interpret complex product metrics.",
        "Design meaningful, outcome-driven product measurement frameworks.",
        "Translate AI-generated insights into strategic product actions.",
        "Improve dashboard visualization and storytelling with AI-supported metrics.",
        "Apply responsible and ethical AI practices in product measurement."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "Basic familiarity with product metrics, Agile practices, or data analytics is recommended."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Training",
            description: "Register by selecting your preferred schedule and completing the enrollment process through the official portal."
        },
        {
            title: "Attend the Course",
            description: "Participate in 3 hours of live instructor-led sessions covering AI-enhanced product metrics and ethical applications."
        },
        {
            title: "Apply Your Learning",
            description: "Engage in practical exercises, case studies, and discussions to reinforce AI-driven product analytics concepts."
        },
        {
            title: "Earn Your Micro-Credential",
            description: "Receive the ICAgile AI for Product Metrics Micro-Credential upon successful participation and competency demonstration."
        }
    ];

    const curriculumModules = [
        {
            title: "Evaluating Product Metrics with AI",
            topics: [
                "Use AI to analyze and critique existing metrics.",
                "Uncover hidden patterns and validate assumptions through AI-supported analysis."
            ]
        },
        {
            title: "Designing AI-Supported Metrics",
            topics: [
                "Generate innovative product metrics using AI techniques.",
                "Embed human judgment into AI-supported measurement frameworks."
            ]
        },
        {
            title: "Making Product Decisions with AI-Backed Metrics",
            topics: [
                "Integrate AI insights into product decision-making frameworks.",
                "Understand the 'Metrics → Insights → Action' loop in AI-enabled strategy."
            ]
        },
        {
            title: "Visualizing and Critiquing AI-Generated Metrics",
            topics: [
                "Create clear, actionable dashboards using AI-supported data.",
                "Critically evaluate AI recommendations using human oversight."
            ]
        },
        {
            title: "Metric Iteration and Evolution",
            topics: [
                "Use AI to adapt metrics as products mature and markets evolve.",
                "Establish automated AI-assisted feedback loops for continuous improvement."
            ]
        },
        {
            title: "Ethical Risks and Guardrails in Product Measurement",
            topics: [
                "Analyze ethical risks in AI-powered measurement systems.",
                "Define responsible boundaries for AI use in product analytics."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand AI’s Role in Product Measurement", description: "Learn how AI identifies patterns, trends, and signals across complex product datasets." },
        { title: "Apply AI to Meaningful Product Metrics", description: "Focus on outcome-driven metrics that reflect customer value and business impact." },
        { title: "Strengthen Data-Informed Decisions", description: "Interpret AI-generated insights with sound human judgment to make confident decisions." },
        { title: "Improve Product Performance Visibility", description: "Use AI to enhance transparency across customer, business, and delivery metrics." },
        { title: "Enable Continuous Learning", description: "Leverage AI-powered metrics to guide experimentation and product improvement cycles." }
    ];

    const whySections = [
        { title: "ICAgile-Accredited Training Partner", description: "Viovn is an ICAgile-accredited provider ensuring the course meets global quality standards." },
        { title: "Proven Expertise in Agile and Product Training", description: "We deliver high-impact ICAgile certification programs with consistently strong learner outcomes." },
        { title: "Experienced ICAgile-Authorized Instructors", description: "Training is delivered by ICAgile-accredited practitioners with real-world product analytics experience." },
        { title: "Industry-Aligned Curriculum", description: "Course content reflects current AI applications and evolving product measurement practices." },
        { title: "Practical, Metrics-Focused Learning", description: "Hands-on exercises help participants translate AI insights into actionable product strategies." },
        { title: "Responsible AI Focus", description: "The program emphasizes ethical, transparent, and responsible AI use in product analytics." },
        { title: "Comprehensive Learner Support", description: "Participants receive continuous instructor guidance and ICAgile-approved materials." },
        { title: "Globally Recognized Micro-Credential", description: "Earn a lifetime-valid ICAgile-recognized credential that enhances professional credibility." }
    ];

    const courseFeatures = [
        { icon: Users, title: '3 Hours', subtitle: 'Live Training', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Micro-Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "ICAgile AI for Product Metrics Micro Credential Certification Training",
        breadcrumbName: "AI for Product Metrics",
        rating: "5.0",
        enrolledCount: "350+ certified",
        subtitle: "Master AI-Enabled Product Measurement and Strategic Decision-Making",
        benefits: [
            "3 hours of live, instructor-led ICAgile training",
            "Hands-on AI applications in product metrics",
            "Outcome-driven, ICAgile-authorized curriculum",
            "Earn 3 PDUs upon completion",
            "Receive a globally recognized ICAgile micro-credential"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'ICA-AI-PM',
            courseName: heroData.courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Senior Data Architect',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 18,999',
            discountedPrice: 'INR 13,499',
            discountPercentage: '29',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "AI for Product Metrics Micro Credential Course Overview",
        description: [
            "The ICAgile AI for Product Metrics Micro-Credential certification training helps product professionals apply artificial intelligence to measure, interpret, and improve product performance.",
            "Participants learn how AI uncovers patterns and trends within complex datasets while understanding the importance of human judgment in decision-making.",
            "This program combines conceptual foundations with practical exercises, enabling learners to translate AI-driven insights into meaningful product strategies."
        ],
        whatIsTitle: "What is AI for Product Metrics?",
        whatIsDescription: [
            "AI for Product Metrics involves applying artificial intelligence to enhance how product performance is measured and interpreted.",
            "It enables teams to detect trends, forecast outcomes, refine measurement frameworks, and align metrics with real customer and business value."
        ],
        whatsIncludedTitle: "What’s Included in This Program?",
        whatsIncludedDescription: [
            "3 hours of live, instructor-led online training",
            "ICAgile-approved course materials",
            "Hands-on exercises and real-world product scenarios",
            "Ongoing knowledge assessment",
            "ICAgile Product Metrics Micro-Credential"
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Outcome-driven product measurement",
            "AI-powered data analysis techniques",
            "Pattern and trend identification",
            "Predictive analytics fundamentals",
            "Responsible AI application in product metrics"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live instructor-led online training",
            "Corporate group training",
            "Customized enterprise training solutions"
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQ",
            items: [
                { question: "1. Is this for data scientists?", answer: "No, this is about strategic application for Product Professionals." },
                { question: "2. What tools will be covered?", answer: "A mix of standard product analytics tools with AI capabilities." },
                { question: "3. When will I receive my badge?", answer: "Usually within a few days once participation is verified by ICAgile." }
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
                                description="SimpliAxis delivers tailored corporate training solutions designed to address specific organizational challenges."
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

export default ICAgileAIForProductMetricsMicroCredentialCourseTraining;
