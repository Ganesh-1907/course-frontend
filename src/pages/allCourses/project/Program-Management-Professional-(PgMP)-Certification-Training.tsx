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
    BookOpen,
    Network,
    CreditCard,
    FileText,
    Briefcase,
    Monitor,
    Settings,
    UserCheck,
    Map,
    Award,
    Globe,
    User,
    Laptop,
    Headset,
    TrendingUp,
    Star
} from "lucide-react";

const ProgramManagementProfessionalPgMPCertificationTraining = () => {
    const highlights = [
        { "text": "24 Hours of Live Instructor-Led PgMP Training" },
        { "text": "Earn 24 PDUs" },
        { "text": "PMI's Best Authorized Training Partner" },
        { "text": "Lifetime Access to Course Materials" },
        { "text": "Hands-On, Activity-Based Learning Approach" },
        { "text": "Guidance for PgMP Exam Preparation" },
        { "text": "Access High-Quality PMI® Digital Resources" },
        { "text": "Practical Case Studies for Application" },
        { "text": "Doubt Clearing Session Follows Workshop" },
        { "text": "24/7 Learning Support and Assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Global Recognition as a Program Leader: Getting a PgMP certification demonstrates your expertise in program management and positions you among an elite group of globally recognized professionals."
        },
        {
            "title": "Individual Benefits",
            "description": "Enhanced Career Growth: The PgMP certification opens doors to advanced roles, such as program manager, portfolio manager, or director of programs, and helps you advance in your career path."
        },
        {
            "title": "Individual Benefits",
            "description": "Higher Earning Potential: PgMP-certified professionals often receive rewards in the form of higher salaries that reflect their ability to manage complex and multi-project programs."
        },
        {
            "title": "Individual Benefits",
            "description": "Stronger Strategic Skills: Participants learn advanced skills in aligning programs with organizational strategy, making them a valuable asset for businesses worldwide."
        },
        {
            "title": "Individual Benefits",
            "description": "Improved Credibility and Confidence: The PgMP credential validates the ability of participants to manage large-scale programs and boost professional credibility and self-confidence."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Improved Program Governance: Organizations benefit from certified program managers who establish governance structures to ensure accountability and transparency."
        },
        {
            "title": "Corporate Benefits",
            "description": "Better Alignment with Business Goals: PgMP-certified leaders help businesses in aligning programs directly with organizational strategy and ensure investments provide tangible value."
        },
        {
            "title": "Corporate Benefits",
            "description": "Optimized Resource Utilization: Certified program managers utilize proven skills to balance and allocate resources efficiently across multiple projects, maximizing ROI."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhanced Risk Management: Businesses minimize disruptions with the help of PgMP-certified professionals who identify, assess, and mitigate risks across programs."
        },
        {
            "title": "Corporate Benefits",
            "description": "Competitive Advantage in the Market: Companies with PgMP-certified talent demonstrate strong leadership and delivery capabilities, which enhance their reputation and customer trust."
        }
    ];

    const careerStats = {
        averageIncome: "$110,000 - $175,000",
        incomeLabel: "per annum",
        employmentGrowth: "33%",
        growthLabel: "Program Leadership",
        globalDemand: "High demand across industries",
    };

    const attendees = [
        {
            "group": [
                "Confidently lead and coordinate multiple interdependent projects within a program.",
                "Transform business objectives into actionable program-level initiatives.",
                "Nurture effective collaboration across diverse stakeholder groups and business units.",
                "Apply governance and compliance practices to maintain program integrity.",
                "Drive efficient resource utilization across projects to optimize performance.",
                "Monitor program progress using advanced metrics and reporting tools.",
                "Deliver measurable business benefits and sustain them over time.",
                "Showcase readiness for the PgMP certification exam by applying knowledge to real-world cases."
            ]
        }
    ];

    const companies = [
        { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
        { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'TCS', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' }
    ];

    const outcomes = [
        "Confidently lead and coordinate multiple interdependent projects within a program.",
        "Transform business objectives into actionable program-level initiatives.",
        "Nurture effective collaboration across diverse stakeholder groups and business units.",
        "Apply governance and compliance practices to maintain program integrity.",
        "Drive efficient resource utilization across projects to optimize performance.",
        "Monitor program progress using advanced metrics and reporting tools.",
        "Deliver measurable business benefits and sustain them over time.",
        "Showcase readiness for the PgMP certification exam by applying knowledge to real-world cases."
    ];

    const prerequisites = [
        "Secondary degree (high school diploma, associate's degree or global equivalent) with 7,500 hours of program management experience",
        "OR 4-year degree (bachelor's degree or global equivalent) with 6,000 hours of program management experience",
        "Plus 35 hours of project management education/training"
    ];

    const certificationSteps = [
        {
            "title": "Verify Eligibility",
            "description": "Verify the PgMP prerequisites, including required educational qualifications and project management experience as outlined by PMI."
        },
        {
            "title": "Enroll in Training",
            "description": "Join a PgMP certification course offered by a PMI-authorized provider like Viovn to learn structured guidance and exam-focused preparation."
        },
        {
            "title": "Prepare for the Exam",
            "description": "Focus on program management, stakeholder engagement, risk management, and governance, and practice scenario-based questions."
        },
        {
            "title": "Achieve Certification",
            "description": "Successfully pass the PgMP exam to receive your Program Management Professional credential from PMI."
        }
    ];

    const curriculumModules = [
        {
            "title": "Module 1: Fundamentals of PgMP",
            "topics": [
                "Introduction to Program Management",
                "Role and responsibility of Program Manager",
                "Program Manager Skills and knowledge required",
                "Introduction to Portfolio, Governance Board and Office",
                "Program Management vs Project Management"
            ]
        },
        {
            "title": "Module 2: Program Management Performance Domain",
            "topics": [
                "Program Management Performance Domain introduction",
                "Program Life-cycle Phases and Activities"
            ]
        },
        {
            "title": "Module 3: Program Strategic Alignment",
            "topics": [
                "Organizational Program Strategy and Program Alignment",
                "Program Framework and Business Case",
                "Program Plan & Program Forecast"
            ]
        },
        {
            "title": "Module 4: Program Life-cycle Management",
            "topics": [
                "Introduction to Program Lifecycle",
                "Program Definition phase, sub-phases, and activities",
                "Delivery of Program Benefits and Activities",
                "Program Closure Phase, sub-phases, and activities"
            ]
        },
        {
            "title": "Module 5: Program Benefits Management",
            "topics": [
                "Benefit Dependency Map (BDM) creation",
                "Scoring Benefits, Finalizing Benefits Path, and Preparing Benefit Register",
                "Benefits Realization Plan (BRP) and Benefits Trajectory",
                "Benefits Transition / Sustainment Process"
            ]
        },
        {
            "title": "Module 6: Program Governance",
            "topics": [
                "Introduction to Program Governance domain",
                "Prioritized governance goals",
                "Issue Escalation, Audit, and Quality Management",
                "Governance Structure and Composition"
            ]
        },
        {
            "title": "Module 7: Program Stakeholder Management",
            "topics": [
                "Program Stakeholder analysis",
                "Stakeholder Engagement Planning",
                "Communication management linkage",
                "Stakeholder Engagement"
            ]
        },
        {
            "title": "Module 8: Exam Preparation",
            "topics": [
                "Case Study Discussion",
                "PgMP Certification exam Application process",
                "Exam Question Patterns, techniques, and Strategy"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Understand Program Management Principles",
            "description": "Gain a clear understanding of PMI's standard framework for program management, including roles, responsibilities, and practices that distinguish programs from projects."
        },
        {
            "title": "Develop Strategic Alignment Skills",
            "description": "Learn how to embed program objectives within business strategy to ensure that programs deliver long-term value."
        },
        {
            "title": "Enhance Stakeholder Engagement",
            "description": "Understand methods to identify, analyze, and manage different stakeholder groups to secure commitment and support."
        },
        {
            "title": "Improve Risk and Issue Management",
            "description": "Develop skills to proactively identify, assess, and mitigate risks and issues across different projects within a program."
        },
        {
            "title": "Strengthen Resource Optimization",
            "description": "Understand proven techniques to allocate and balance resources efficiently across projects for maximum impact."
        },
        {
            "title": "Cultivate Leadership and Communication Skills",
            "description": "Build leadership capabilities to guide program teams, foster collaboration, and communicate effectively with executives and stakeholders."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "Who can go for PgMP® Certification Training?",
                    "answer": "PgMP Certification Training is designed for experienced professionals such as Associate Managers, Project Managers, Team Leaders, Project Management Executives, and Software Developers."
                },
                {
                    "question": "Do I need a PMP to get a PgMP?",
                    "answer": "Holding a PMP certification is an additional advantage for obtaining PgMP certification, but it is not mandatory for those who already have 4+ years of project management experience."
                },
                {
                    "question": "How many questions are on the PgMP Certification Exam?",
                    "answer": "The PgMP certification exam consists of 170 multiple-choice questions. Candidates have four hours to complete the exam, which covers various program management domains."
                },
                {
                    "question": "Is the PgMP exam harder than the PMP?",
                    "answer": "Yes, the PgMP exam is generally considered more challenging than the PMP exam. It requires a deeper understanding of program management principles, stakeholder management, and strategic alignment."
                },
                {
                    "question": "How long is the PgMP certificate valid?",
                    "answer": "The PgMP certification is valid for three years. You need to earn 60 PDUs within these three years to maintain the PgMP credential."
                },
                {
                    "question": "What is the passing rate for the PgMP Certification Exam?",
                    "answer": "Unofficial reports suggest a pass rate of 30-40%, which is lower than the PMP pass rate, making preparation critical."
                }
            ]
        }
    ];

    const courseFeatures = [
        { icon: Users, title: 'Guaranteed to', subtitle: 'Run Workshops', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led Study', subtitle: 'Sessions', color: 'bg-orange-50 text-orange-600' },
        { icon: Network, title: 'Networking', subtitle: 'Opportunities', color: 'bg-green-50 text-green-600' },
        { icon: CreditCard, title: 'Flexible Monthly', subtitle: 'Payment Plans', color: 'bg-purple-50 text-purple-600' },
        { icon: FileText, title: 'Real-World Case', subtitle: 'Studies', color: 'bg-red-50 text-red-600' },
        { icon: Briefcase, title: 'Hands-On Project', subtitle: 'Experience', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const courseClients = [
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Accenture', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' },
        { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' }
    ];

    const courseTrainers = [
        {
            name: 'Rajiv Menon',
            role: 'PMI Authorized PgMP Trainer',
            rating: '4.9',
            experience: '20+ Years',
            description: 'Rajiv is a senior program management consultant and PMI-certified trainer with experience managing enterprise-level programs across multiple industries.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Program Management Consultant',
            rating: '4.8',
            experience: '22+ Years',
            description: 'Axel brings decades of experience leading multi-project programs for Fortune 500 companies, specializing in strategic alignment and benefits realization.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        { "title": "Globally Recognized Training Provider", "description": "Viovn is a trusted PMI Authorized Training Partner adhering to all global PgMP training standards and best practices." },
        { "title": "Expert Instructors", "description": "We offer courses delivered by certified PgMP professionals with extensive real-world experience in program management across various industries." },
        { "title": "Comprehensive Curriculum", "description": "Our training covers all PgMP domains: program strategy alignment, governance, lifecycle, benefits management, and stakeholder engagement." },
        { "title": "Scenario-Based Learning", "description": "We integrate real-world case studies and scenarios to help participants apply concepts to practical program management challenges." },
        { "title": "Exam-Focused Preparation", "description": "Viovn provides practice questions, exam simulations, and tailored tips to help candidates pass the PgMP exam on their first attempt." },
        { "title": "Flexible Learning Options", "description": "We offer online, classroom, and corporate training formats to suit diverse professional schedules and commitments." },
        { "title": "Interactive Learning Experience", "description": "Our engaging workshops, discussions, and group activities ensure active participation and in-depth understanding of PgMP concepts." },
        { "title": "Post-Training Support", "description": "Viovn provides uninterrupted support including study resources, revision sessions, and updated learning materials after the PgMP course." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'PGMP',
            courseName: 'PgMP Certification',
            dateRange: 'May 08 - May 10, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Rajiv Menon',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 72,000',
            discountedPrice: 'INR 60,000',
            discountPercentage: '16',
        },
    ];

    const certificateBenefits = [
        'PMI Official PgMP Digital Badge',
        'Globally Recognized PMI Certificate',
        'Valid for 3 Years (60 PDUs renewal)',
        'Top-tier Program Leadership Credential',
    ];

    const heroData = {
        "courseName": "PgMP® Certification Training Course",
        "breadcrumbName": "PgMP Certification Training",
        "rating": "5.0",
        "enrolledCount": "4,000+",
        "subtitle": "Master program management with PMI's elite credential and lead complex, strategic programs with confidence.",
        "benefits": [
            "Participate in 24 hours of expert-led online PgMP® training!",
            "Understand program lifecycle, tools, and proven techniques!",
            "Learn the best ways to lead large-scale programs aligned with business objectives!",
            "Explore real-world case studies and practical examples!",
            "Learn the skills to pass the PgMP exam on your first attempt!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Overview of the PgMP® Certification Course",
        "description": [
            "The PgMP® certification training program by Viovn is tailored for senior professionals who manage multiple related projects and want a transition into strategic leadership roles. This course highlights the importance of aligning programs with organizational objectives, driving efficiency, and ensuring measurable benefits.",
            "Our PgMP training is globally recognized and validates your understanding of program management, strengthening career opportunities for managing complex, high-impact initiatives across industries.",
            "Led by PMI-authorized trainers with real-world experience, the program delivers an immersive learning experience that prepares you for both the exam and practical application."
        ],
        "whatIsTitle": "What is PgMP Certification Training?",
        "whatIsDescription": [
            "PgMP training is a structured program that provides a platform for acquiring knowledge and understanding the tools and techniques required to pass the PMI PgMP exam. The training covers governance frameworks, benefits realization, stakeholder management, and inter-project coordination, while giving you the confidence to manage program complexities effectively."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "24 hours of live PMI-authorized training, practice exams, digital resources, and 24 PDUs."
        ],
        "skillsTitle": "Core Skills Covered",
        "skills": [
            "Program Lifecycle Management",
            "Benefits Realization Planning",
            "Strategic Program Alignment",
            "Stakeholder Management",
            "Program Governance",
            "Risk & Issue Management",
            "Resource Optimization",
            "Leadership & Communication"
        ],
        "modesTitle": "Modes of Training",
        "modesDescription": [
            "Live online instructor-led classes, traditional classroom (on demand), and corporate batches tailored for business teams."
        ]
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Viovn for PgMP Training",
        "label": "Enterprise Training",
        "buttonText": "Corporate Group Enquiry",
        "description": "With learning targeted to your unique team environment, Viovn helps resolve specific organizational issues with tailored training methods. We offer corporate training globally to keep organizations up to date, building the knowledge gap required to thrive in the competitive world. Trusted by MNCs, Startups, and Organizations of all sectors worldwide."
    };

    const tabs = [
        {
            id: 'overview',
            label: 'Overview',
            content: (
                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
                        <h4 className="text-[14px] text-primary font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
                            {overviewContent.title}
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
                            {overviewContent.subtitle}{' '}
                            <span className="text-primary">✦</span>
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
                    <CourseHighlights courseName={heroData.courseName} highlights={highlights} />
                    <CourseCareerUpliftment
                        courseName={heroData.courseName}
                        stats={careerStats}
                        attendees={attendees}
                        companies={companies}
                        outcomes={outcomes}
                        outcomesTitle="PgMP Learning Outcomes"
                        outcomesFooter="Lead programs with confidence and strategic clarity worldwide."
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
                            'Program Managers',
                            'Senior Project Managers',
                            'Portfolio Managers',
                            'PMO Leads',
                            'Directors of Programs',
                            'Strategic Business Leaders'
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
                        courseName="PgMP"
                        prerequisites={prerequisites}
                        subtitle="PMI Eligibility Requirements"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess courseName={heroData.courseName} steps={certificationSteps} />
                    <CourseCertificate
                        courseName="PgMP"
                        certificateBenefits={certificateBenefits}
                        mockupName="JAMES HARRISON"
                        label="Official PMI"
                        titlePrefix="Earn Your"
                        titleHighlight="PgMP®"
                        titleSuffix="Professional Certification"
                        issuerName="Project Management Institute (PMI)"
                        certificateType="Program Management Professional (PgMP®)"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed the examination for"
                        signer1Role="CEO, PMI"
                        signer2Role="Authorized Trainer"
                    />
                </div>
            ),
        },
        {
            id: 'curriculum',
            label: 'Curriculum',
            content: (
                <div className="space-y-6">
                    <CourseCurriculum courseName="PgMP" modules={curriculumModules} />
                </div>
            ),
        },
        {
            id: 'faqs',
            label: 'FAQs',
            content: (
                <CourseFAQs
                    courseName="PgMP"
                    categories={[
                        {
                            id: "gen",
                            label: "General Questions",
                            items: faqCategories[0].items
                        }
                    ]}
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
                    enrolledSuffix="Certified"
                    moneyBackText="100% Satisfaction Guarantee"
                    ltpLabel="PMI Authorized Partner"
                    downloadBtnText="PgMP Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="Readiness Check"
                />

                <CourseFeatures features={courseFeatures} />

                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
                        <div>
                            <CourseTabs tabs={tabs} />
                            <CourseLearningObjectives courseName={heroData.courseName} objectives={learningObjectives} />
                            <CourseCorporateOptUs
                                courseName={corporateData.courseName}
                                description={corporateData.description}
                                label={corporateData.label}
                                buttonText={corporateData.buttonText}
                            />
                            <CourseClients clients={courseClients} />
                            <CourseTrainers trainers={courseTrainers} />
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

export default ProgramManagementProfessionalPgMPCertificationTraining;
