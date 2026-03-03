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

const PortfolioManagementProfessionalPfMPCertificationTraining = () => {
    const highlights = [
        { "text": "24 hours of live, instructor-led PfMP training." },
        { "text": "Earn 24 Professional Development Units (PDUs)." },
        { "text": "Comprehensive PfMP exam preparation included." },
        { "text": "Training delivered by a PMI Authorized Trainer." },
        { "text": "Access to the PMI Digital Library anytime." },
        { "text": "Learn proven techniques to answer exam questions quickly and accurately." },
        { "text": "PfMP Handbook and PMBOK® Guide included." },
        { "text": "Aligned with the latest PfMP Exam Content Outline." },
        { "text": "Complete assistance with the PfMP application process." },
        { "text": "Real-time learning through engaging case studies." },
        { "text": "Dedicated doubt-clearing sessions." },
        { "text": "24/7 learning support and assistance provided." }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Gain advanced portfolio management expertise aligned with global PMI standards."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve Decision-Making Skills: Learn advanced portfolio prioritization techniques to allocate resources effectively and maximize ROI."
        },
        {
            "title": "Individual Benefits",
            "description": "Strengthen strategic leadership capabilities across enterprise-level initiatives."
        },
        {
            "title": "Individual Benefits",
            "description": "Career Advancement Opportunities: Enhance your credentials for senior leadership roles in portfolio management, a rapidly growing field."
        },
        {
            "title": "Individual Benefits",
            "description": "Develop the ability to balance competing programs and optimize investments."
        },
        {
            "title": "Individual Benefits",
            "description": "Strategic Alignment Expertise: Learn how to align projects and programs with organizational objectives for improved strategic execution."
        },
        {
            "title": "Individual Benefits",
            "description": "Increase Earning Potential: PfMP® certified professionals can earn up to 25% more than non-certified peers."
        },
        {
            "title": "Individual Benefits",
            "description": "Enhance your credibility in multinational and enterprise environments."
        },
        {
            "title": "Individual Benefits",
            "description": "Global Recognition: Earn a globally recognized certification that enhances career mobility and professional credibility."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Establish structured portfolio governance aligned with strategic objectives."
        },
        {
            "title": "Corporate Benefits",
            "description": "Optimized Resource Utilization: Allocate resources to the most profitable and strategically aligned initiatives."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve enterprise-wide investment decision-making."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improved Project Success Rates: Organizations experience significantly higher success rates when portfolios are managed by PfMP® professionals."
        },
        {
            "title": "Corporate Benefits",
            "description": "Strengthen risk balancing across multiple programs and projects."
        },
        {
            "title": "Corporate Benefits",
            "description": "Risk Mitigation: Reduce portfolio-level risks by aligning investments with long-term strategic goals."
        },
        {
            "title": "Corporate Benefits",
            "description": "Accelerate strategic execution across business units."
        },
        {
            "title": "Corporate Benefits",
            "description": "Faster Strategic Implementation: Improve execution speed and achieve quicker alignment with organizational goals."
        },
        {
            "title": "Corporate Benefits",
            "description": "Increase portfolio transparency and executive reporting effectiveness."
        },
        {
            "title": "Corporate Benefits",
            "description": "Increased ROI on Portfolios: Drive higher returns by managing diverse investments with optimized oversight."
        }
    ];

    const careerStats = {
        averageIncome: "$90,000 - $150,000",
        incomeLabel: "per annum",
        employmentGrowth: "25%",
        growthLabel: "Earning Potential",
        globalDemand: "Elite Portfolio Leadership",
    };

    const attendees = [
        {
            "group": [
                "Align multiple projects with business strategy to ensure each initiative contributes to organizational goals.",
                "Master advanced resource allocation techniques across programs and portfolios.",
                "Identify, assess, and mitigate portfolio-level risks effectively.",
                "Manage budgets at the portfolio level to maintain financial control.",
                "Communicate effectively with executives and key stakeholders.",
                "Establish governance frameworks ensuring oversight and accountability.",
                "Track KPIs and analyze performance using data-driven insights.",
                "Prepare confidently for the PfMP exam using structured study strategies."
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
        "Align portfolios with enterprise strategic objectives.",
        "Optimize resource distribution across multiple programs.",
        "Implement structured portfolio governance frameworks.",
        "Mitigate portfolio-level risks proactively.",
        "Enhance executive communication and reporting.",
        "Measure and improve portfolio performance using KPIs.",
        "Increase return on portfolio investments.",
        "Pass the PfMP certification exam confidently."
    ];

    const prerequisites = [
        "Secondary diploma with 8 years of professional business experience and 7 years of portfolio management experience, OR",
        "Bachelor’s degree with 8 years of professional business experience and 4 years of portfolio management experience, OR",
        "Bachelor’s degree from a GAC accredited program with 8 years of professional experience and 3 years of portfolio management experience."
    ];

    const certificationSteps = [
        {
            "title": "Check Eligibility",
            "description": "Verify that you meet PMI’s PfMP eligibility requirements based on education and portfolio management experience."
        },
        {
            "title": "Attend Training",
            "description": "Complete the 24-hour live instructor-led PfMP training program."
        },
        {
            "title": "Prepare for the Exam",
            "description": "Study recommended materials, practice mock exams, and review portfolio management standards."
        },
        {
            "title": "Submit Application & Take Exam",
            "description": "Submit your PMI application, complete the panel review, and pass the 170-question exam within 240 minutes."
        }
    ];

    const curriculumModules = [
        {
            "title": "Domain 1: Strategic Alignment",
            "topics": [
                "Understand strategic goals",
                "Define prioritization criteria",
                "Rank portfolio components",
                "Develop portfolio scenarios",
                "Create a portfolio roadmap"
            ]
        },
        {
            "title": "Domain 2: Governance",
            "topics": [
                "Define governance structures",
                "Establish portfolio management standards",
                "Develop portfolio processes",
                "Create portfolio management plans",
                "Approve strategic portfolio decisions"
            ]
        },
        {
            "title": "Domain 3: Portfolio Risk Management",
            "topics": [
                "Define acceptable risk levels",
                "Develop a portfolio risk management plan",
                "Perform dependency analysis",
                "Manage portfolio risk registers",
                "Recommend management reserves"
            ]
        },
        {
            "title": "Domain 4: Portfolio Performance & Communications",
            "topics": [
                "Analyze stakeholders",
                "Develop communication strategies",
                "Monitor portfolio performance",
                "Track KPIs and metrics",
                "Maintain executive reporting accuracy"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Portfolio Management Strategies",
            "description": "Apply advanced strategies to manage and optimize enterprise portfolios."
        },
        {
            "title": "Portfolio Risk Management",
            "description": "Identify, evaluate, and manage risks across multiple programs and investments."
        },
        {
            "title": "Governance Frameworks",
            "description": "Design governance structures to ensure strategic oversight and accountability."
        },
        {
            "title": "Portfolio Performance Optimization",
            "description": "Measure, analyze, and enhance portfolio performance using KPIs."
        },
        {
            "title": "Executive Communication",
            "description": "Communicate portfolio status and performance effectively to stakeholders."
        },
        {
            "title": "Policy Development",
            "description": "Develop and implement portfolio management policies and best practices."
        },
        {
            "title": "Strategic Impact",
            "description": "Understand how portfolio decisions influence enterprise success."
        },
        {
            "title": "Decision-Making Excellence",
            "description": "Apply structured decision-making models in portfolio selection and prioritization."
        },
        {
            "title": "Cost-Benefit Optimization",
            "description": "Balance costs and benefits to maximize portfolio returns."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is the PfMP Certification?",
                    "answer": "The Portfolio Management Professional (PfMP) is a globally recognized professional designation offered by PMI for senior executives and portfolio managers."
                },
                {
                    "question": "Are exams included?",
                    "answer": "Standard training packages usually exclude PMI exam fees, but include comprehensive preparation and application support."
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
        { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg' },
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg' }
    ];

    const courseWhyViovn = [
        { "title": "PMI Authorized Training Partner", "description": "Viovn is an officially recognized PMI ATP, ensuring you receive the highest quality PfMP preparation." },
        { "title": "Expert PfMP Trainers", "description": "Learn from portfolio managers who have successfully implemented enterprise-level governance for Fortune 500 companies." },
        { "title": "Portfolio Roadmap Tools", "description": "Gain hands-on experience with tools and templates used to create portfolio scenarios and roadmaps." },
        { "title": "Application Assistance", "description": "The PfMP application process is rigorous; we provide end-to-end guidance for both your application and the panel review." },
        { "title": "Comprehensive PFMP Mock Exams", "description": "Practice with 170-question mock exams designed to simulate the real PMI PfMP environment." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'PFMP',
            courseName: 'PfMP Certification Training',
            dateRange: 'Jun 20 - Jun 23, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Expert PfMP Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 95,000',
            discountedPrice: 'INR 85,000',
            discountPercentage: '10',
        },
    ];

    const certificateBenefits = [
        'Elite PMI PfMP Digital Badge',
        'Globally Recognized Portfolio Credential',
        'Executive Level Professional Recognition',
        'Valid for 3 Years (PDU renewal required)',
    ];

    const heroData = {
        "courseName": "Portfolio Management Professional (PfMP)® Certification Training",
        "breadcrumbName": "PfMP Certification Training",
        "rating": "5.0",
        "enrolledCount": "3,500+",
        "subtitle": "Join the elite group of portfolio managers globally and master the art of strategic alignment and governance.",
        "benefits": [
            "24 hours of live intensive PfMP training!",
            "Earn 24 PDUs for certification renewal!",
            "Comprehensive PfMP exam preparation materials!",
            "Full support for PMI PfMP application & panel review!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PfMP® Certification Training Powered by PMI",
        "description": [
            "The Portfolio Management Professional (PfMP)® certification is the most elite credential for professionals who manage a group of programs and projects to achieve strategic business objectives.",
            "Our 24-hour training program focuses on the five domains defined by PMI: Strategic Alignment, Governance, Portfolio Performance, Portfolio Risk Management, and Communications Management.",
            "Viovn provides a structured roadmap to help you navigate the panel review and pass the PfMP exam on your first attempt, positioning you as a strategic leader in your organization."
        ],
        "whatIsTitle": "Why Pursue PfMP?",
        "whatIsDescription": [
            "In an era where strategic alignment is critical, PfMP proves your ability to balance investments with organizational goals. It is designed for senior executives and portfolio managers who want to validate their expertise in high-level decision making."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "PfMP Handbook, 24 hours of training, post-training support, and application guidance."
        ],
        "skillsTitle": "Skills Covered",
        "skills": [
            "Strategic Portfolio Alignment",
            "Enterprise Governance Frameworks",
            "Advanced Portfolio Risk Analysis",
            "Executive Performance Reporting",
            "Capital Allocation & ROI Management"
        ],
        "modesTitle": "Training Modes",
        "modesDescription": [
            "Live Virtual Classrooms, Classroom (on-demand), and Dedicated Corporate Batches."
        ]
    };

    const corporateData = {
        "courseName": "Enterprise Portfolio Management",
        "label": "Corporate Elite",
        "buttonText": "Inquire for Executives",
        "description": "Empower your senior leadership with the tools to align every dollar of investment with strategic outcomes. We offer tailored PfMP training for executive teams."
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
                        outcomesTitle={`PfMP Career Transformation`}
                        outcomesFooter="Transition from management to strategic leadership with PfMP."
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
                            'Senior Portfolio Managers',
                            'Executive Directors',
                            'PMO Directors',
                            'Senior Program Managers',
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
                        courseName="PfMP"
                        prerequisites={prerequisites}
                        subtitle="Eligibility Requirements"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="Portfolio Management Professional (PfMP)®"
                        certificateBenefits={certificateBenefits}
                        mockupName="WILLIAM DAVIS"
                        label="Official PMI"
                        titlePrefix="Earn Your"
                        titleHighlight="Elite"
                        titleSuffix="Portfolio Certification"
                        issuerName="Project Management Institute (PMI)"
                        certificateType="Portfolio Management Professional (PfMP)®"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed all requirements for"
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
                    <CourseCurriculum
                        courseName="PfMP"
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
                    courseName="PfMP"
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
                    downloadBtnText="PfMP Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="Eligibility Check"
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

export default PortfolioManagementProfessionalPfMPCertificationTraining;
