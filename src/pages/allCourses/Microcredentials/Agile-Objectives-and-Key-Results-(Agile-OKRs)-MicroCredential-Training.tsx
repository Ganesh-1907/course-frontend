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
    Target,
    Zap,
    Search,
    RefreshCw
} from "lucide-react";

/**
 * Agile Objectives and Key Results (Agile OKRs) MicroCredential Training
 * Data source: course_data3.json
 */
const AgileOKRsMicroCredentialTraining = () => {
    const highlights = [
        { text: "4+ hours of live instructor-led online training." },
        { text: "Learn from an experienced Agile trainer." },
        { text: "Real-world case studies and hands-on practice." },
        { text: "Lifetime access to course materials." },
        { text: "Access to the global Scrum community." },
        { text: "Two-year Scrum Alliance membership included." },
        { text: "24/7 customer support and learning assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Gain specialized knowledge in Agile OKRs and goal-setting frameworks." },
        { title: "Individual Benefits", description: "Learn flexibly through live instructor-led sessions." },
        { title: "Individual Benefits", description: "Benefit from a cost-effective alternative to long certification programs." },
        { title: "Individual Benefits", description: "Stay updated with current industry trends and emerging practices." },
        { title: "Individual Benefits", description: "Earn a recognized credential in just a few hours." },
        { title: "Individual Benefits", description: "Receive a credential validated by Scrum Alliance." },
        { title: "Individual Benefits", description: "Apply practical OKR skills immediately in your workplace." },
        { title: "Individual Benefits", description: "Stack micro-credentials to build a comprehensive Agile learning journey." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Align daily operations with top strategic priorities." },
        { title: "Corporate Benefits", description: "Equip teams with OKRs for effective execution." },
        { title: "Corporate Benefits", description: "Focus efforts on initiatives that support strategic goals." },
        { title: "Corporate Benefits", description: "Track progress using measurable and data-driven results." },
        { title: "Corporate Benefits", description: "Enable informed decision-making based on outcomes." },
        { title: "Corporate Benefits", description: "Enhance organizational agility to stay competitive." },
        { title: "Corporate Benefits", description: "Promote accountability and transparency across teams." },
        { title: "Corporate Benefits", description: "Improve communication and collaboration within Agile teams." }
    ];

    const careerStats = {
        averageIncome: "$95,000 - $145,000",
        incomeLabel: "Salary for skilled professionals",
        employmentGrowth: "Growing alignment",
        growthLabel: "between strategy and execution",
    };

    const attendees = [
        {
            group: [
                "Project Managers",
                "Product Owners",
                "Team Leaders",
                "Executives",
                "Agile Practitioners",
                "Scrum Masters",
                "Delivery Managers"
            ]
        }
    ];

    const companies = [
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const outcomes = [
        "Understand the fundamentals of Objectives and Key Results (OKRs).",
        "Apply OKRs within Agile and Scrum environments.",
        "Align team-level goals with enterprise strategy.",
        "Track and measure performance using OKR metrics.",
        "Identify and avoid common OKR implementation anti-patterns.",
        "Drive continuous improvement using iterative OKR cycles."
    ];

    const prerequisites = [
        "No mandatory prerequisites as per Scrum Alliance.",
        "Basic familiarity with Agile methodologies such as Scrum is recommended."
    ];

    const certificationSteps = [
        {
            title: "Enroll in Training",
            description: "Register for the 4+ hour live instructor-led Agile OKRs session."
        },
        {
            title: "Attend Live Session",
            description: "Participate in interactive discussions, case studies, and practical exercises."
        },
        {
            title: "Complete Course Requirements",
            description: "Successfully complete the training to qualify for the micro-credential."
        },
        {
            title: "Receive Digital Badge",
            description: "Earn your Scrum Alliance digital badge upon course completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Lesson 1: Goal-Setting Fundamentals",
            topics: [
                "Analyze the strengths and weaknesses of SMART goals compared to non-SMART goals."
            ]
        },
        {
            title: "Lesson 2: Strategic Planning and Alignment",
            topics: [
                "Identify key elements of strategic planning.",
                "Align cascading goals with departmental strategies."
            ]
        },
        {
            title: "Lesson 3: Objectives and Key Results (OKRs)",
            topics: [
                "Create OKR sets based on strategic scenarios.",
                "Compare OKRs for team and enterprise alignment.",
                "Apply alignment mechanisms to strengthen OKR effectiveness."
            ]
        },
        {
            title: "Lesson 4: OKRs in Agile (Scrum) and Anti-Patterns",
            topics: [
                "Evaluate the strengths and weaknesses of using OKRs in Scrum.",
                "Identify and avoid common OKR anti-patterns."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Goal Setting in Agile:", description: "Set SMART goals aligned with organizational vision and mission." },
        { title: "Strategic Planning with OKRs:", description: "Use OKRs as a framework for strategic execution." },
        { title: "Cascading Goals in Agile:", description: "Break enterprise goals into actionable team-level objectives." },
        { title: "OKRs in Practice:", description: "Set, track, and measure OKRs effectively in Agile teams." },
        { title: "Strategic Reflection:", description: "Continuously review and adapt goals for alignment and improvement." },
        { title: "Organizational Alignment:", description: "Foster collaboration and transparency using OKRs." },
        { title: "OKR Lifecycle Management:", description: "Understand the continuous cycle of setting, reviewing, and refining OKRs." },
        { title: "Avoiding OKR Anti-Patterns:", description: "Recognize and prevent common mistakes in OKR implementation." }
    ];

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQs",
            items: [
                { question: "1. What are OKRs in Agile?", answer: "Objectives and Key Results (OKRs) are a goal-setting framework that helps Agile teams define and track measurable outcomes." },
                { question: "2. What is OKR in the Scrum framework?", answer: "While not part of Scrum by default, OKRs can complement Scrum by aligning sprint goals with strategic objectives." },
                { question: "3. How do I enroll in the Agile OKRs course?", answer: "Visit the Simpliaxis website, select your schedule, complete registration, and make the payment to receive confirmation." },
                { question: "4. How long is the course?", answer: "The course is a 4+ hour live instructor-led session." },
                { question: "5. Who should attend this training?", answer: "Project managers, product owners, team leaders, executives, and Agile practitioners." },
                { question: "6. How do I earn the certification?", answer: "Complete the live training session to receive your Scrum Alliance digital badge." },
                { question: "7. What are the benefits of using OKRs?", answer: "OKRs provide clarity, focus, transparency, adaptability, and measurable progress." },
                { question: "8. Do OKRs expire?", answer: "No, the Agile OKRs micro-credential does not expire." }
            ]
        }
    ];

    const courseFeatures = [
        { icon: Users, title: '4+ Hours', subtitle: 'Live Training', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Network, title: 'Global', subtitle: 'Scrum Community', color: 'bg-green-50 text-green-600' },
        { icon: Award, title: 'Digital Badge', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: FileText, title: 'Case Studies', subtitle: 'Practice', color: 'bg-red-50 text-red-600' },
        { icon: Briefcase, title: 'Hands-On', subtitle: 'Experience', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const courseClients = [
        { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' },
        { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg' },
        { name: 'KPMG', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg' },
    ];

    const courseTrainers = [
        {
            name: 'Expert Agile Trainer',
            role: 'CST / Path to CSP Educator',
            rating: '5.0',
            experience: '15+ Years',
            description: 'Learn from certified Agile experts with real-world experience in OKR implementation and strategic alignment.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const whySections = [
        { title: "Global Recognition", description: "Recognized by reputable certification bodies worldwide." },
        { title: "Expert Trainer", description: "Learn from certified Agile experts with real-world experience." },
        { title: "Flexible Learning", description: "Choose live online or corporate training formats." },
        { title: "Lifetime Access", description: "Access course materials and recordings anytime." },
        { title: "Proven Track Record", description: "Trusted by professionals and enterprises globally." },
        { title: "End-to-End Assistance", description: "Receive support before, during, and after training." },
        { title: "Interactive and Engaging Training", description: "Participate in practical discussions and real-world exercises." },
        { title: "Wide Range of Courses", description: "Explore globally recognized certifications in Agile, Scrum, DevOps, and Project Management." }
    ];

    const heroData = {
        courseName: "Agile Objectives and Key Results (Agile OKRs) MicroCredential Training",
        breadcrumbName: "Agile OKRs Course | OKR in Agile MicroCredential Training",
        rating: "5.0",
        enrolledCount: "1200+ trained",
        subtitle: "Master OKRs to Drive Strategic Alignment and Agile Excellence",
        benefits: [
            "4+ hours of expert-led live training.",
            "Scrum Alliance digital badge.",
            "Hands-on OKR implementation guidance.",
            "Lifetime learning access."
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Agile OKRs MicroCredential Course Overview",
        description: [
            "The Agile Objectives and Key Results (OKRs) MicroCredential course helps organizations build a results-driven Agile culture.",
            "This training teaches how to set ambitious objectives, define measurable key results, and align team goals with enterprise strategy.",
            "Delivered by accredited trainers, the course combines theory with practical insights for real-world application.",
            "Upon completion, participants receive a Scrum Alliance digital badge that never expires."
        ],
        whatIsTitle: "What is Agile OKRs?",
        whatIsDescription: [
            "Agile OKRs is a structured goal-setting framework used to align strategy and execution.",
            "It enables teams to focus on measurable outcomes while remaining adaptable in dynamic environments."
        ],
        whatsIncludedTitle: "What’s Included?",
        whatsIncludedDescription: [
            "Live instructor-led training",
            "Real-world case studies",
            "Scrum Alliance digital badge",
            "Lifetime course material access"
        ],
        skillsTitle: "Skills Covered",
        skills: [
            "OKR Design and Implementation",
            "Strategic Goal Alignment",
            "Agile Performance Tracking",
            "Team Collaboration and Transparency"
        ],
        modesTitle: "Training Modes",
        modesDescription: [
            "Live Online Instructor-Led Training",
            "Corporate Agile OKR Workshops"
        ]
    };

    const corporateData = {
        courseName: "Why Corporates Opt for Us",
        description: "Simpliaxis delivers customized Agile OKR training tailored to organizational needs. Our expert-led programs help enterprises close skill gaps, strengthen strategic execution, and build high-performing Agile teams.",
        label: "",
        buttonText: "Corporate Group Enquiry"
    };

    const tabs = [
        {
            id: 'overview',
            label: 'Course Overview',
            content: (
                <div className="space-y-8">
                    {/* Main Overview Section */}
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
                        </div>
                    </div>

                    {/* Detailed Sections Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* What is Agile OKRs */}
                        <div className="bg-slate-50 p-8 border border-slate-200">
                            <h3 className="text-xl font-black text-[#001c3d] mb-4 flex items-center gap-2">
                                <Target className="w-5 h-5 text-blue-600" /> {overviewContent.whatIsTitle}
                            </h3>
                            <div className="space-y-3 text-slate-700 font-medium text-[15px]">
                                {overviewContent.whatIsDescription.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* What's Included */}
                        <div className="bg-blue-50 p-8 border border-blue-100">
                            <h3 className="text-xl font-black text-[#001c3d] mb-4 flex items-center gap-2">
                                <Award className="w-5 h-5 text-blue-600" /> {overviewContent.whatsIncludedTitle}
                            </h3>
                            <ul className="space-y-2">
                                {overviewContent.whatsIncludedDescription.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 font-medium text-[15px]">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills Covered */}
                        <div className="bg-orange-50 p-8 border border-orange-100">
                            <h3 className="text-xl font-black text-[#001c3d] mb-4 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-orange-600" /> {overviewContent.skillsTitle}
                            </h3>
                            <ul className="space-y-2">
                                {overviewContent.skills.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 font-medium text-[15px]">
                                        <Search className="w-4 h-4 text-orange-500 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Training Modes */}
                        <div className="bg-green-50 p-8 border border-green-100">
                            <h3 className="text-xl font-black text-[#001c3d] mb-4 flex items-center gap-2">
                                <RefreshCw className="w-5 h-5 text-green-600" /> {overviewContent.modesTitle}
                            </h3>
                            <ul className="space-y-2">
                                {overviewContent.modesDescription.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 font-medium text-[15px]">
                                        <Monitor className="w-4 h-4 text-green-500 flex-shrink-0" /> {item}
                                    </li>
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
                        companies={companies}
                        outcomes={outcomes}
                        outcomesTitle={`Learning Outcomes of ${heroData.courseName}`}
                        outcomesFooter="After completing your Agile OKRs Training, you will be proficient in creating focused Objectives and Key Results that drive measurable business results."
                    />
                </div>
            ),
        },
        {
            id: 'benefits',
            label: 'Benefits',
            content: (
                <div className="space-y-6">
                    <CourseBenefits
                        individualBenefits={individualBenefits}
                        corporateBenefits={corporateBenefits}
                        courseName={heroData.courseName}
                    />
                    <CourseCommonAttendees attendees={attendees[0].group} courseName={heroData.courseName} />
                </div>
            ),
        },
        {
            id: 'prerequisites',
            label: 'Prerequisites',
            content: (
                <div className="space-y-6">
                    <CoursePrerequisites
                        prerequisites={prerequisites}
                        courseName={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        steps={certificationSteps}
                        courseName={heroData.courseName}
                    />
                    <CourseCertificate
                        courseName={heroData.courseName}
                        certificateUrl="/certification-placeholder.png"
                    />
                </div>
            ),
        },
        {
            id: 'curriculum',
            label: 'Curriculum',
            content: (
                <div className="space-y-6">
                    <CourseCurriculum
                        modules={curriculumModules}
                        courseName={heroData.courseName}
                    />
                    <CourseLearningObjectives
                        objectives={learningObjectives}
                        courseName={heroData.courseName}
                    />
                </div>
            ),
        },
        {
            id: 'faqs',
            label: 'FAQs',
            content: (
                <CourseFAQs
                    categories={faqCategories}
                    courseName={heroData.courseName}
                />
            ),
        },
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'AG-OKR',
            courseName: heroData.courseName,
            dateRange: 'Starting Soon',
            timeRange: 'Flexible',
            trainerName: 'Lead Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 11,999',
            discountPercentage: '25',
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
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
                    referEarnText="Refer & Earn"
                    enrolledSuffix="Enrolled"
                    moneyBackText="100% Money Back Guarantee"
                    ltpLabel="Simpliaxis Leading Training Provider"
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
                                courseName={corporateData.courseName}
                                description={corporateData.description}
                                label={corporateData.label}
                                buttonText={corporateData.buttonText}
                            />

                            <CourseClients clients={courseClients} />
                            <CourseTrainers trainers={courseTrainers} />
                            <CourseWhySimpliaxis features={whySections} />
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

export default AgileOKRsMicroCredentialTraining;
