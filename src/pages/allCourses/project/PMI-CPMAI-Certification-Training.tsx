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

const PMI_CPMAI_Certification_Training = () => {
    const highlights = [
        { "text": "30-Hour Live Online Training Sessions" },
        { "text": "Earn 30 PDUs toward PMP®, PMI-ACP®, or PgMP® recertification" },
        { "text": "Structured PMI-CPMAI curriculum that meets CRISP-DM, Agile, and PMI standards & PMI-CPMAI exam guidelines" },
        { "text": "Globally recognized PMI-CPMAI certification for AI project leadership" },
        { "text": "Guidance from PMI-Authorized Instructors" },
        { "text": "24/7 Learning Support and Assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individuals Benefits",
            "description": "Earn a PMI-CPMAI certification that validates your AI project management proficiency."
        },
        {
            "title": "Individuals Benefits",
            "description": "Improve leadership and technical skills blending traditional PM and AI methodologies."
        },
        {
            "title": "Individuals Benefits",
            "description": "Build trusted AI competence, such as ethics, transparency, and governance."
        },
        {
            "title": "Individuals Benefits",
            "description": "Implement CRISP-DM and structured frameworks confidently."
        },
        {
            "title": "Individuals Benefits",
            "description": "Earn 30 PDUs toward PMP®, PMI-ACP®, or PgMP® recertification."
        },
        {
            "title": "Individuals Benefits",
            "description": "Gain hands-on mastery of AI project management challenges and tools."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Improve AI project success rates and reduce time-to-market."
        },
        {
            "title": "Corporate Benefits",
            "description": "Instill ethical governance and AI transparency throughout delivery cycles."
        },
        {
            "title": "Corporate Benefits",
            "description": "Bridge business, data science, and IT teams with repeatable frameworks."
        },
        {
            "title": "Corporate Benefits",
            "description": "Strengthen organizational agility and AI adoption."
        },
        {
            "title": "Corporate Benefits",
            "description": "Foster innovation with structured feedback loops and value acceleration."
        },
        {
            "title": "Corporate Benefits",
            "description": "Standardize AI workflows with reusable templates and best practices."
        }
    ];

    const careerStats = {
        averageIncome: "$110,000 - $160,000",
        incomeLabel: "Average Salary Range",
        employmentGrowth: "Very High",
        growthLabel: "AI Project Leadership Demand",
    };

    const attendees = [
        {
            "group": [
                "Develop a strong understanding of PMI’s six-phase CPMAI framework, such as business understanding, data understanding, data preparation, model development, model evaluation, and model operationalization.",
                "Gain practical experience in RPA, data science workflows, and ML deployment through scenario-driven PMI-CPMAI online courses.",
                "Build expertise in AI concepts from supervised to unsupervised learning and Generative AI.",
                "Integrate ethics, fairness, transparency, and compliance into every AI project."
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
        "Develop a strong understanding of PMI’s six-phase CPMAI framework, such as business understanding, data understanding, data preparation, model development, model evaluation, and model operationalization.",
        "Gain practical experience in RPA, data science workflows, and ML deployment through scenario-driven PMI-CPMAI online courses.",
        "Build expertise in AI concepts from supervised to unsupervised learning and Generative AI.",
        "Integrate ethics, fairness, transparency, and compliance into every AI project."
    ];

    const prerequisites = [
        "No formal prerequisites",
        "Designed for professionals with or without AI/ML background",
        "Project management experience is beneficial but not mandatory"
    ];

    const certificationSteps = [
        {
            "title": "Register",
            "description": "Enroll in the PMI Certified Professional in Managing AI (PMI-CPMAI)™ training offered by Viovn."
        },
        {
            "title": "Attend Training",
            "description": "Complete the full 30-hour online training designed to help you with the latest AI project management methodologies."
        },
        {
            "title": "Pass Certification Exam",
            "description": "Successfully complete the PMI-CPMAI certification assessment to demonstrate your expertise in PMI Certified Professional in Managing AI (PMI-CPMAI)™."
        },
        {
            "title": "Receive Certification",
            "description": "Obtain your official PMI-CPMAI credential, recognized globally for AI project management proficiency."
        }
    ];

    const curriculumModules = [
        {
            "title": "Module 1: Introduction to PMI Certified Professional in Managing AI (PMI-CPMAI)™",
            "topics": [
                "Understanding AI and machine learning project characteristics",
                "Importance of structured methodologies in AI project delivery",
                "Challenges unique to AI projects and how PMI-CPMAI addresses them",
                "Overview of the PMI-CPMAI framework components"
            ]
        },
        {
            "title": "Module 2: AI Project Life Cycle and Cognitive Processes",
            "topics": [
                "AI project initiation, planning, execution, monitoring, and closure",
                "Applying cognitive strategies to manage uncertainty and complexity",
                "Integration of AI ethics, data governance, and compliance in project management",
                "Tools and techniques for AI project risk and quality management"
            ]
        },
        {
            "title": "Module 3: AI Delivery Models and Value Realization",
            "topics": [
                "Cognitive delivery models for AI and machine learning projects",
                "Value-driven delivery and managing stakeholder expectations",
                "Iterative experimentation and feedback loops in AI development",
                "Metrics and KPIs for AI project success measurement"
            ]
        },
        {
            "title": "Module 4: Practical Scenario: AI Use Case Implementation",
            "topics": [
                "Contextual analysis and tailoring of PMI-CPMAI practices",
                "Managing project scope and delivery in AI use case",
                "Addressing AI model development lifecycle challenges",
                "Leveraging cognitive project management to enhance project outcomes"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "PMI Certified Professional in Managing AI Overview",
            "description": "Understand the unique challenges and approaches required to successfully manage AI and machine learning projects using the PMI-CPMAI framework."
        },
        {
            "title": "AI Project Life Cycle & Cognitive Approach",
            "description": "Learn the phases of AI projects and how techniques can manage complexity, uncertainty, and ethics."
        },
        {
            "title": "Team Roles & Collaboration in AI Projects",
            "description": "Explore the roles and collaboration practices critical to AI project success."
        },
        {
            "title": "Value-Driven AI Delivery",
            "description": "Apply delivery models and feedback mechanisms to maximize value realization from AI initiatives."
        },
        {
            "title": "AI Risk & Ethics Management",
            "description": "Understand how to identify and mitigate risks, incorporating ethics and compliance into AI project management."
        },
        {
            "title": "Practical Application",
            "description": "Experience applying PMI-CPMAI principles in real AI project scenarios to develop hands-on skills."
        },
        {
            "title": "Scaling AI Project Management",
            "description": "Discover strategies to scale and embed certified project management across broader organizational AI initiatives."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "PMI-CPMAI Training FAQs",
            "items": [
                {
                    "question": "Is the PMI-CPMAI training self-paced or instructor-led?",
                    "answer": "At Viovn, the PMI-CPMAI certification training is live online instructor-led sessions. These interactive online sessions help participants learn the concepts easily."
                },
                {
                    "question": "How long does the training take to complete?",
                    "answer": "The course includes approximately 30 hours of learning, covering modules, scenario-based exercises, and downloadable resources."
                },
                {
                    "question": "Are there any prerequisites for enrollment?",
                    "answer": "There are no formal prerequisites. The course is designed for professionals with or without AI/ML or project management backgrounds."
                },
                {
                    "question": "What resources are provided with the course?",
                    "answer": "You’ll receive lifetime access to all modules, templates, tools, case studies, and workbooks available on PMI’s platform."
                },
                {
                    "question": "How many PDUs do I earn with PMI-CPMAI certification training?",
                    "answer": "You earn 30 PDUs upon completing the PMI Certified Professional in Managing AI (PMI-CPMAI)™ certification training."
                },
                {
                    "question": "Will I receive any certification for PMI-CPMAI?",
                    "answer": "Yes. Upon successful completion and passing the exam, you will get PMI Certified Professional in Managing AI (PMI-CPMAI)™ certification from PMI."
                },
                {
                    "question": "Does the certification expire?",
                    "answer": "No. The PMI-CPMAI certification is a one-time credential that does not expire."
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
        { "title": "PMI Authorized Training Partner", "description": "Guaranteed quality and alignment with the latest PMI standards and certification guidelines." },
        { "title": "AI Project Experts", "description": "Learn from instructors who bridge the gap between traditional project management and data science." },
        { "title": "Scenario-Based Learning", "description": "Engage with real-world AI use cases and CRISP-DM labs for practical mastery." },
        { "title": "Comprehensive Support", "description": "24/7 assistance from enrollment to successful certification achievement." },
        { "title": "Career Acceleration", "description": "Position yourself at the forefront of the AI revolution with a globally recognized credential." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'PMI-CPMAI',
            courseName: 'PMI-CPMAI Training',
            dateRange: 'Aug 12 - Aug 16, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'AI PM Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 45,000',
            discountedPrice: 'INR 38,000',
            discountPercentage: '15',
        },
    ];

    const certificateBenefits = [
        'Globally Recognized AI Project Credential',
        'Official PMI-CPMAI Digital Badge',
        'Demonstrated Expertise in AI Lifecycle',
        '30 PDUs for Certification Maintenance',
    ];

    const heroData = {
        "courseName": "PMI Certified Professional in Managing AI (PMI-CPMAI)™ Certification Training",
        "breadcrumbName": "PMI-CPMAI Certification",
        "rating": "5.0",
        "enrolledCount": "2,800+",
        "subtitle": "Lead AI projects with confidence by mastering the unique lifecycle, ethics, and value-driven delivery model of machine learning initiatives.",
        "benefits": [
            "Join 30-hours Live online PMI-CPMAI training session",
            "Earn 30 PDUs aligned with the PMI Talent Triangle™",
            "Attain the PMI-recognized PMI-CPMAI certification credential",
            "Lifetime access to course materials, templates & case studies",
            "Scenario-based learning, CRISP-DM labs & downloadable resources"
        ],
        "mainImage": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
        "badgeImage": "/pmp-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PMI-CPMAI Certification Course Overview",
        "description": [
            "The PMI Certified Professional in Managing AI (PMI-CPMAI)™ course is a PMI-aligned, industry-recognized training designed to help project managers, AI analysts, and tech leaders deliver AI and machine learning initiatives successfully.",
            "PMI-CPMAI integrates CRISP-DM, Agile principles, and PMI best practices. This helps professionals to use the latest tools and structured processes to manage data-centric projects from ideation to deployment.",
            "This training emphasizes real-world use cases, governance, data strategy, risk, and ethics to ensure projects are both technically sound and business-aligned. During training sessions, participants will master all necessary concepts to clear the exam.",
            "Note: The Cognitive Project Management in AI (CPMAI) certification has recently been named as a PMI Certified Professional in Managing AI (PMI-CPMAI)."
        ],
        "whatIsTitle": "Why Pursue AI Project Management Certification?",
        "whatIsDescription": [
            "As organizations increasingly adopt AI, the demand for leaders who can navigate the specific challenges of data quality, model drift, and ethical transparency is skyrocketing. PMI-CPMAI provides you with the framework to bridge the gap between business goals and technical execution."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "30 hours of training, exam preparation, lifetime access to templates, and application assistance."
        ],
        "skillsTitle": "Skills Covered",
        "skills": [
            "AI Framework Implementation (CRISP-DM)",
            "Data Strategy & Governance",
            "Ethical AI Frameworks",
            "Cognitive Project Management",
            "Machine Learning Deployment Lifecycle"
        ],
        "modesTitle": "Training Formats",
        "modesDescription": [
            "Live Virtual Instructor-Led Training and Corporate Training batches."
        ]
    };

    const corporateData = {
        "courseName": "Corporate AI Leadership",
        "label": "Enterprise AI",
        "buttonText": "Inquire for Teams",
        "description": "Equip your project management office with the specialized skills needed to oversee complex AI transformations. We offer customized curricula for organizational AI adoption."
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
                        outcomesTitle={`PMI-CPMAI Learning Outcomes`}
                        outcomesFooter="Become a certified leader in the age of Artificial Intelligence."
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
                            'Project and Program Managers',
                            'AI and Data Science Professionals',
                            'IT and Tech Leaders',
                            'PMO Directors',
                            'Digital Transformation Executives'
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
                        courseName="PMI-CPMAI"
                        prerequisites={prerequisites}
                        subtitle="Eligibility for Training"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="PMI Certified Professional in Managing AI (PMI-CPMAI)™"
                        certificateBenefits={certificateBenefits}
                        mockupName="ALEX JOHNSON"
                        label="Official PMI"
                        titlePrefix="Earn Your"
                        titleHighlight="Leader"
                        titleSuffix="AI Certification"
                        issuerName="Project Management Institute (PMI)"
                        certificateType="PMI-CPMAI Certification"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed all requirements for"
                        signer1Role="President & CEO, PMI"
                        signer2Role="Chair, Board of Directors"
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
                        courseName="PMI-CPMAI"
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
                    courseName="PMI-CPMAI"
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
                    enrolledSuffix="Certified"
                    moneyBackText="100% Satisfaction Guarantee"
                    ltpLabel="PMI Authorized Training Partner"
                    downloadBtnText="PMI-CPMAI Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="AI Readiness Check"
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
                                courseName={heroData.courseName}
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

export default PMI_CPMAI_Certification_Training;
