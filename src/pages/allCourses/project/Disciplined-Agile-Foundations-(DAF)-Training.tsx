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
    Star
} from "lucide-react";

const DisciplinedAgileFoundationsDAFTraining = () => {
    const highlights = [
        { "text": "Disciplined Agile Foundation training by PMI-Authorized Training Partner (ATP)" },
        { "text": "8 PDUs under PMI’s “Ways of Working” category" },
        { "text": "8 Hours of Engaging Live Training session" },
        { "text": "Curriculum Designed by Disciplined Agile and Lean Experts" },
        { "text": "Hands-on Learning with DA Team Canvas and Real-World Scenarios" },
        { "text": "DA Browser Access Included for Context-Sensitive Guidance" },
        { "text": "3-Step Value Acceleration Process with Guided Practice" },
        { "text": "Immediate Application Skills to Improve Team Workflows" },
        { "text": "Complete Learning Support with Expert Q&A and Assistance" },
        { "text": "Doubt Clearing Session Follows Workshop" }
    ];

    const individualBenefits = [
        {
            "title": "Individuals Benefits",
            "description": "Gain a globally recognized credential through the DAF course, designed to support your Agile career path."
        },
        {
            "title": "Individuals Benefits",
            "description": "Develop leadership skills in Agile project management using Disciplined Agile principles."
        },
        {
            "title": "Individuals Benefits",
            "description": "Build a strong understanding of the DA foundations, enabling informed and context-sensitive decisions."
        },
        {
            "title": "Individuals Benefits",
            "description": "Enhance your versatility beyond frameworks like Scrum by applying guidance from the Disciplined Agile toolkit."
        },
        {
            "title": "Individuals Benefits",
            "description": "Strengthen your Agile mindset with a structured, decision-based approach to improve team effectiveness."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Tailor Agile practices across diverse domains using the flexibility of the Disciplined Agile framework."
        },
        {
            "title": "Corporate Benefits",
            "description": "Foster innovation through team-level experimentation guided by the DA toolkit."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve project delivery, adaptability, and time-to-value through structured use of DA foundations."
        },
        {
            "title": "Corporate Benefits",
            "description": "Standardize process decisions organization-wide with context-aware practices taught in the DAF course."
        }
    ];

    const careerStats = {
        averageIncome: "$80,000 - $120,000",
        incomeLabel: "Average Salary Range",
        employmentGrowth: "High",
        growthLabel: "Demand for DA Professionals",
    };

    const attendees = [
        {
            "group": [
                "Understand how DA combines Agile, Scrum, Lean, and Kanban into a flexible hybrid framework.",
                "Use the DA Decision Tree to assess options and make informed workflow choices.",
                "Explore techniques for optimizing value streams and enhancing delivery flow.",
                "Apply tools like the DA Team Canvas to identify and act on areas of improvement of your team.",
                "Discover the ways to transform your team’s WoW using DA’s structured guidance."
            ]
        }
    ];

    const companies = [
        { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
        { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' }
    ];

    const outcomes = [
        "Understand how DA combines Agile, Scrum, Lean, and Kanban into a flexible hybrid framework.",
        "Use the DA Decision Tree to assess options and make informed workflow choices.",
        "Explore techniques for optimizing value streams and enhancing delivery flow.",
        "Apply tools like the DA Team Canvas to identify and act on areas of improvement of your team.",
        "Discover the ways to transform your team’s WoW using DA’s structured guidance."
    ];

    const prerequisites = [
        "No formal prerequisites for the DAF course",
        "Understanding of basic Agile concepts is recommended",
        "Ideal for software developers, project managers, and team leads"
    ];

    const certificationSteps = [
        {
            "title": "Register",
            "description": "Enroll in a Disciplined Agile Foundations course by a PMI-approved training partner like Viovn."
        },
        {
            "title": "Learn",
            "description": "Attend and complete the full 8-hour DAF training."
        },
        {
            "title": "Gain Skills",
            "description": "Gain necessary skills in agile foundation and DA knowledge base."
        },
        {
            "title": "Certificate",
            "description": "Receive certificate of completion for Disciplined Agile Foundations."
        }
    ];

    const curriculumModules = [
        {
            "title": "Introduction to Disciplined Agile",
            "topics": [
                "How DA differs from Scrum/SAFe",
                "Three core DA principles",
                "Benefits of tailoring WoW",
                "Integrating Lean and Agile into DA",
                "Continuous improvement focus"
            ]
        },
        {
            "title": "Covering the DA Knowledge Base",
            "topics": [
                "Navigating DA Browser for practice options",
                "Types of guidance for different contexts",
                "Using goal diagrams for decisions",
                "Informed decision-making through DA practices",
                "Scenario-based improvements via microsite"
            ]
        },
        {
            "title": "Identifying and Addressing Team Challenges",
            "topics": [
                "Key evaluation areas via DA Team Canvas",
                "Identifying bottlenecks and root causes",
                "Aligning team goals with DA strategy",
                "Context-driven resolution approaches",
                "Building an improvement backlog"
            ]
        },
        {
            "title": "Accelerating Value Delivery",
            "topics": [
                "Three steps of Value Acceleration",
                "Benefits of Quick Starts",
                "Strategies for high-impact backlogs",
                "Role of feedback loops in deliver",
                "Applying value stream thinking"
            ]
        },
        {
            "title": "Practical Scenario: Enhancement Team",
            "topics": [
                "Diagnosing context with DA tools",
                "Selecting delivery options via DA Browser",
                "Throughput improvement strategies",
                "Value Acceleration in action",
                "Comparing WoW variations"
            ]
        },
        {
            "title": "Practical Scenario: Maintenance Team",
            "topics": [
                "DA practices for maintenance teams",
                "Comparing lifecycles using DA Browser",
                "Tailoring WoW for stability and responsiveness",
                "Managing ongoing support effectively",
                "Improving uptime and resolution with DA"
            ]
        },
        {
            "title": "Applying DA in Complex and Cross-Functional Environments",
            "topics": [
                "Scaling DA for enterprise use",
                "Challenges in complex/non-IT teams",
                "Building cross-departmental improvement plans",
                "Supporting enterprise agility",
                "Sustaining continuous improvement"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Disciplined Agile Overview",
            "description": "Understand DA’s lean-agile foundation and how its decision-making framework supports flexible, context-driven Ways of Working (WoW)."
        },
        {
            "title": "DA Knowledge Base Navigation",
            "description": "Learn to use the DA Browser and microsite to access goal diagrams, practices, and decision trees that guide effective process choices."
        },
        {
            "title": "Team Challenge Diagnosis",
            "description": "Use tools like the DA Team Canvas to identify workflow issues and develop targeted improvement strategies for Agile teams."
        },
        {
            "title": "Value Acceleration Process",
            "description": "Apply DA’s 3-step Value Acceleration Process to plan, prioritize, and execute team improvements using Quick Starts."
        },
        {
            "title": "Enhancement Team Scenario",
            "description": "Explore how DA principles are applied in a feature-focused team to design a fit-for-purpose Way of Working."
        },
        {
            "title": "Maintenance Team Scenario",
            "description": "Understand how to tailor DA guidance for operational and support teams by balancing agility with system stability."
        },
        {
            "title": "DA Beyond IT",
            "description": "Learn how to scale DA practices across non-IT functions and complex, cross-functional teams for broader organizational agility."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "DA Foundations FAQs",
            "items": [
                {
                    "question": "Is the Disciplined Agile Foundation course instructor-led or self-paced?",
                    "answer": "At Viovn, we provide instructor-led online training for the Disciplined Agile Foundations (DAF) course to encourage participants to learn with interactive sessions."
                },
                {
                    "question": "What is the duration of the course?",
                    "answer": "The course typically takes 8 hours to complete, delivered either in a single day or categorized into smaller sessions across multiple days."
                },
                {
                    "question": "Is this course suitable for beginners in Agile?",
                    "answer": "Yes. This course is suitable for both professionals who are new to Agile and for those looking to understand scalable, hybrid Agile frameworks using a guided approach."
                },
                {
                    "question": "Do I get any certificate after completing the course?",
                    "answer": "Yes. Participants receive a certificate of completion from Viovn, PMI Authorized Training Partner (ATP)."
                },
                {
                    "question": "Will I get access to course materials after the training?",
                    "answer": "Yes. All participants receive access to learning materials, reference guides, and tools like the DA Browser."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "Payment & Enrollment",
            "items": [
                {
                    "question": "What happens to my token or partial payment if I don’t enroll immediately?",
                    "answer": "Token or partial payments will become non-refundable after 15 days from the date of payment. Any token or partial amount paid can be applied towards enrollment for any available sessions on our website within 6 months of the payment date."
                },
                {
                    "question": "Is there a preferred currency for payment?",
                    "answer": "While we accept payments in various currencies, we recommend using the currency from where you want to attend the course."
                }
            ]
        }
    ];

    const courseFeatures = [
        { icon: Users, title: 'Guaranteed to', subtitle: 'Run Workshops', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led Study', subtitle: 'Sessions', color: 'bg-orange-50 text-orange-600' },
        { icon: Network, title: 'Networking', subtitle: 'Opportunities', color: 'bg-green-50 text-green-600' },
        { icon: CreditCard, title: 'Flexible Monthly', subtitle: 'Payment Plans', color: 'bg-purple-50 text-purple-600' },
        { icon: FileText, title: 'Real-World Case', subtitle: 'Studies', color: 'bg-red-50 text-red-600' },
        { icon: Briefcase, title: 'Hands-On Project', subtitle: 'Experience', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const courseClients = [
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' }
    ];

    const courseWhyViovn = [
        { "title": "Global Recognition", "description": "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries." },
        { "title": "Expert Trainer", "description": "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes." },
        { "title": "Flexible Learning", "description": "Provides a variety of methods of learning, such as classes, online, and corporate Training, that meet the needs of different individuals and their schedules." },
        { "title": "Lifetime Access", "description": "Enjoy all-year access to the recordings of sessions, course materials, and study tools." },
        { "title": "Proven Track Record", "description": "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities and meet their career ambitions." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'DAF',
            courseName: 'DA Foundations Training',
            dateRange: 'Jul 05 - Jul 05, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Expert DA Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 25,000',
            discountedPrice: 'INR 20,000',
            discountPercentage: '20',
        },
    ];

    const certificateBenefits = [
        'PMI Authorized DAF Certificate',
        'Recognition of DA Toolkit Expertise',
        '8 PDUs for Certification Maintenance',
        'Verified Agile Professional Status',
    ];

    const heroData = {
        "courseName": "Disciplined Agile® Foundations Training",
        "breadcrumbName": "Disciplined Agile® Foundations",
        "rating": "5.0",
        "enrolledCount": "4,200+",
        "subtitle": "Master the Disciplined Agile toolkit and learn to tailor your team's unique Way of Working (WoW).",
        "benefits": [
            "Get Trained by PMI-Authorized Instructors with 15+ Years of Agile Experience",
            "Achieve PMI-Recognized Certification in Agile Mindset & Practices",
            "Lifetime Access to Course Material and DA Practice Resources",
            "Complimentary Practice Tests, Case Studies, and Career Guidance Kit"
        ],
        "mainImage": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
        "badgeImage": "/pmp-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Disciplined Agile® Foundations Course Overview",
        "description": [
            "The Disciplined Agile® Foundation Course by Viovn is an entry-level, PMI-authorized training designed to build a strong understanding of the Disciplined Agile mindset and toolkit. Whether you’re working in Agile, Lean, hybrid, or traditional environments, this course enables you to customize your team’s Way of Working (WoW) with guidance tailored to your team and business context.",
            "Unlike prescriptive Agile methods like Scrum or SAFe, Disciplined Agile Training promotes context-sensitive decision-making, helping you apply Lean, Agile, and traditional approaches based on real-world needs.",
            "Through a structured curriculum, practical examples, and expert-led sessions, participants will learn how to navigate team challenges and optimize value streams effectively.",
            "This online PMI Disciplined Agile course is ideal for professionals seeking to master agile project management beyond conventional frameworks."
        ],
        "whatIsTitle": "Why Begin With Disciplined Agile?",
        "whatIsDescription": [
            "Disciplined Agile is not just another framework; it's a decision-making engine. It provides the freedom to choose the right way to work for your specific project, team size, and organizational culture, ensuring that agility translates into real business value."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "8 hours of live training, certificate of completion, 8 PDUs, and access to the DA Browser tool."
        ],
        "skillsTitle": "Skills Covered Through Disciplined Agile Foundations Course",
        "skills": [
            "Disciplined Agile Toolkit & mindset for decision-based agility",
            "Tailoring the right Way of Working (WoW)",
            "Using the DA Knowledge Base & Browser effectively",
            "Workflow optimization using Value Stream Thinking",
            "Context-aware Agile methods for software and support teams",
            "Applying Agile and Lean principles in real-world settings",
            "Agile framework alternatives beyond Scrum"
        ],
        "modesTitle": "Training Formats",
        "modesDescription": [
            "Live Virtual Training and Customized Corporate Group Workshops."
        ]
    };

    const corporateData = {
        "courseName": "Enterprise Disciplined Agile",
        "label": "Corporate Solutions",
        "buttonText": "Customize for Your Team",
        "description": "Transform your entire organization's agility by adopting context-sensitive practices. We offer tailored DA training to help your teams collaborate better and deliver value faster."
    };

    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <div className="space-y-6">
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

                            <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                                {overviewContent.whatIsTitle}
                            </h3>
                            {overviewContent.whatIsDescription.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
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
                        outcomesTitle={`DA Foundations Learning Journey`}
                        outcomesFooter="Start your path towards becoming a Disciplined Agile practitioner."
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
                        courseName={heroData.courseName}
                        individualBenefits={individualBenefits}
                        corporateBenefits={corporateBenefits}
                    />
                    <CourseCommonAttendees
                        courseName={heroData.courseName}
                        attendees={[
                            'Aspiring Agile Professionals',
                            'Scrum Masters and Team Leads',
                            'Project Managers and Coordinators',
                            'Business Analysts',
                            'Software Engineering Managers'
                        ]}
                    />
                </div>
            ),
        },
        {
            id: 'prerequisites',
            label: 'Prerequisites',
            content: (
                <div className="space-y-6">
                    <CoursePrerequisites
                        courseName="DA Foundations"
                        prerequisites={prerequisites}
                        subtitle="How to Get Started"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="Disciplined Agile® Foundations"
                        certificateBenefits={certificateBenefits}
                        mockupName="SAMANTHA REED"
                        label="Authorized Viovn"
                        titlePrefix="Earn Your"
                        titleHighlight="PMI"
                        titleSuffix="Authorized Foundation Badge"
                        issuerName="Viovn (PMI ATP)"
                        certificateType="Disciplined Agile® Foundations Completion Certificate"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed the 8-hour DAF training for"
                        signer1Role="Founder, Viovn"
                        signer2Role="Authorized DA Trainer"
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
                        courseName="DA Foundations"
                        modules={curriculumModules}
                    />
                </div>
            ),
        },
        {
            id: 'faqs',
            label: 'FAQs',
            content: (
                <CourseFAQs
                    courseName="DA Foundations"
                    categories={faqCategories}
                />
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
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
                    enrolledSuffix="Trained"
                    moneyBackText="100% Satisfaction Guarantee"
                    ltpLabel="PMI Authorized Training Partner"
                    downloadBtnText="DA Foundations Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="WoW Assessment"
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
                            <CourseWhyViovn features={courseWhyViovn} />
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

export default DisciplinedAgileFoundationsDAFTraining;
