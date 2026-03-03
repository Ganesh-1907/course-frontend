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

const ProjectManagementFundamentalTraining = () => {
    const highlights = [
        { "text": "8 Hours Live Instructor-Led Training" },
        { "text": "Basics of Project Management Covered" },
        { "text": "Earn 8 PDUs Upon Completion" },
        { "text": "Coaching From Project Management Experts" },
        { "text": "Hands-On Learning With Group Exercises" },
        { "text": "Course Completion Certificate From Viovn" },
        { "text": "Lifetime Access to Materials" },
        { "text": "Accessible on Mobile and Laptop" },
        { "text": "Guide for CAPM, PMP Exam Outline" },
        { "text": "24/7 Support and Assistance" },
        { "text": "Dedicated Doubt-Clearing Sessions" }
    ];

    const individualBenefits = [
        {
            "title": "Technical skills",
            "description": "You can learn how to use the latest project management tools, and develop skills like leadership, communication, time management, and budget management."
        },
        {
            "title": "Personal growth",
            "description": "You can develop interpersonal skills, self-awareness, resilience, and effective decision-making. You can also learn to manage and resolve conflict, and understand and manage your own emotions."
        },
        {
            "title": "Competitive advantage",
            "description": "Advanced project management skills can give you an edge in the job market. Many project management certifications are globally recognized, which can open doors to international job opportunities."
        },
        {
            "title": "Better leader",
            "description": "You can learn how to prioritize work, develop execution strategies, and manage resources and stakeholders. This can benefit you and your colleagues."
        },
        {
            "title": "Improved project outcomes",
            "description": "You can learn how to develop and monitor key performance indicators (KPIs) and milestones to ensure projects are completed on time and to the desired quality. You can also learn how to anticipate and respond to issues."
        },
        {
            "title": "Efficiency",
            "description": "You can learn how to use the right methods and skills to execute projects efficiently."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Improved leadership",
            "description": "Project management training can help leaders become more organized, prioritize work, and develop better execution strategies."
        },
        {
            "title": "Better stakeholder management",
            "description": "Stakeholder mapping can help project managers understand their stakeholders and manage them effectively."
        },
        {
            "title": "Effective project planning",
            "description": "Project management training focuses on the processes and methodologies used to ensure effective project management."
        },
        {
            "title": "Budget and schedule management",
            "description": "Project managers are responsible for developing budgets, tracking costs, and identifying overruns."
        },
        {
            "title": "Improved communication",
            "description": "Learning to communicate expectations and use tact can improve relationships with teams and help lead projects effectively."
        },
        {
            "title": "Improved risk mitigation",
            "description": "Project management training can help identify, assess, and mitigate risks that could derail a project."
        },
        {
            "title": "Increased customer satisfaction",
            "description": "A project management team that keeps a project on task and develops a high-quality product or service can increase customer satisfaction."
        }
    ];

    const careerStats = {
        averageIncome: "$50,000 - $70,000",
        incomeLabel: "Starting salary per annum",
        employmentGrowth: "Growing Demand",
        growthLabel: "in Project Management roles",
    };

    const attendees = [
        {
            "group": [
                "Learn why core project management skills are important.",
                "Identify main project goals and assumptions to ensure value delivery.",
                "Recognize stakeholders and determine how to involve them in the project.",
                "Create a communication plan to meet stakeholders’ information needs.",
                "Define the product scope as part of the project charter.",
                "Learn how to gather and record project requirements.",
                "Build a Work Breakdown Structure (WBS) and dictionary for project scope.",
                "Conduct a thorough risk assessment for the project.",
                "Identify key quality characteristics for project success.",
                "Organize tasks, develop a schedule, and estimate project costs.",
                "Handle changes effectively during project execution.",
                "Monitor how well the project delivers value.",
                "Understand the basics of conducting a project retrospective."
            ]
        }
    ];

    const companies = [
        { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'Siemens', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' }
    ];

    const outcomes = [
        "Learn why core project management skills are important.",
        "Identify main project goals and assumptions to ensure value delivery.",
        "Recognize stakeholders and determine how to involve them in the project.",
        "Create a communication plan to meet stakeholders’ information needs.",
        "Define the product scope as part of the project charter.",
        "Learn how to gather and record project requirements.",
        "Build a Work Breakdown Structure (WBS) and dictionary for project scope.",
        "Conduct a thorough risk assessment for the project.",
        "Identify key quality characteristics for project success.",
        "Organize tasks, develop a schedule, and estimate project costs.",
        "Handle changes effectively during project execution.",
        "Monitor how well the project delivers value.",
        "Understand the basics of conducting a project retrospective."
    ];

    const prerequisites = [];

    const certificationSteps = [];

    const curriculumModules = [
        {
            "title": "Introduction:",
            "topics": [
                "Overview of project management",
                "Key concepts: What is a project?",
                "Roles and responsibilities of a project manager",
                "Importance of aligning competencies with project needs",
                "Understanding the business case for a project"
            ]
        },
        {
            "title": "Process Groups and Integration:",
            "topics": [
                "The five process groups: Initiating, Planning, Executing, Monitoring & Controlling, and Closing",
                "How integration connects project processes",
                "Developing the project charter and plan",
                "Managing changes effectively"
            ]
        },
        {
            "title": "Scope and Schedule:",
            "topics": [
                "Defining the project scope",
                "Creating a work breakdown structure (WBS)",
                "Building a project schedule",
                "Tools for tracking progress"
            ]
        },
        {
            "title": "Cost and Quality:",
            "topics": [
                "Basics of budgeting and cost estimation",
                "Monitoring and controlling costs",
                "Setting quality standards for projects",
                "Tools to ensure project quality"
            ]
        },
        {
            "title": "Resources and Communications:",
            "topics": [
                "Identifying and managing project resources",
                "Developing team effectiveness",
                "Planning effective project communication",
                "Tools for managing stakeholder expectations"
            ]
        },
        {
            "title": "Risk and Procurement:",
            "topics": [
                "Identifying and assessing risks",
                "Creating a risk management plan",
                "Basics of procurement in projects",
                "Managing contracts and vendor relationships"
            ]
        },
        {
            "title": "Execution, Change Management, and Project Closure",
            "topics": [
                "Executing actionable project strategies",
                "Handling and tracking change management processes",
                "Closing out a project successfully",
                "Reviewing lessons learned for continuous improvement"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Project Management Frameworks:",
            "description": "Learn about different project management structures, including process groups and governance frameworks, which are crucial for ensuring an efficient project's execution and alignment with the organization's goals."
        },
        {
            "title": "Project Roles:",
            "description": "Know the different roles and responsibilities of the team members, project managers, and other stakeholders, promoting effective collaboration and maintaining accountability throughout the lifecycle of the project."
        },
        {
            "title": "Project Planning:",
            "description": "Learn how to draft preliminary project schedules and budgets and identify potential risks. This will allow you to plan ahead and create a solid foundation for the project's success."
        },
        {
            "title": "Project Execution:",
            "description": "Learn how to create actionable strategies, altering them as needed according to the progress of your project. Ensure that objectives are met effectively and efficiently."
        },
        {
            "title": "Project Communication:",
            "description": "Learn to create effective communication plans, identify key stakeholders, assess their needs, and ensure information flows smoothly throughout the project for successful collaboration."
        },
        {
            "title": "Project Management Office (PMO):",
            "description": "Understand the value and benefits of a Project Management Office (PMO) in supporting project governance, providing resources, and enhancing overall project success across the organization."
        },
        {
            "title": "Project Management Terminology:",
            "description": "Familiarize yourself with essential project management terminology, ensuring clear communication among team members and stakeholders, which is vital for project understanding and collaboration."
        },
        {
            "title": "Interpersonal Interactions:",
            "description": "Learn about the important interpersonal interactions required for successful project execution, including building relationships, resolving conflicts, and encouraging teamwork among diverse project participants."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "Who Can Attend Project Management Fundamental Course?",
                    "answer": "Anyone in charge of a project, big or little, now or in the future. Individuals who perceive project management as unpleasant, or who believe their projects frequently run late or overbudget. Those who wish to manage projects flawlessly, effectively, and impressively - and advance their careers. A person interested in pursuing a career in project management."
                },
                {
                    "question": "What is the Project Management Fundamental Course?",
                    "answer": "You can study the principles and best practices of project management through real-world, hands-on tasks. You can make sure that you are providing business value by assessing the project's business case, identifying stakeholders and their connections to your project, capturing product requirements, and establishing quality metrics to guide the development of your product and reevaluate the business case. To give the team a clear understanding of the project's scope and to determine the product scope for project delivery, create a work breakdown structure."
                },
                {
                    "question": "Why should I choose Viovn for Project Management Fundamentals Training?",
                    "answer": "You should choose Viovn because they offer a complete 8-hour live course led by experienced instructors. You'll learn the basics of project management, participate in hands-on group activities, and earn 8 PDUs (Professional Development Units) when you finish. You’ll also get a certificate of completion, lifetime access to course materials, and support whenever needed—all accessible on your phone or computer."
                },
                {
                    "question": "What job opportunities will be available after I complete the Project Management Fundamentals Training?",
                    "answer": "Once you complete the training, you can apply for entry-level jobs such as Project Coordinator or Project Administrator. This training also prepares you for higher-level roles, like Project Manager or Program Manager, especially if you pursue additional certifications. It’s a great way to start or advance your career in project management."
                },
                {
                    "question": "Will I get a certificate after finishing the training?",
                    "answer": "Yes, after you complete the Project Management Fundamentals Training, you will receive a Course Completion Certificate, which can help you with job applications or when seeking further certifications."
                },
                {
                    "question": "What Are the 7 Project Management Fundamentals learned through this training?",
                    "answer": "You will learn these seven key principles of project management: Scope, Time, Cost, Quality, Resources, Risk, and Communication. These principles help to ensure that a project is on the right course and gets completed successfully."
                },
                {
                    "question": "What is a Project Manager?",
                    "answer": "The term \"project manager\" (PM) is a professional who organizes, plans and implements projects for a company. PMs are accountable for the day-to-day operation of a project from beginning to completion. They ensure that deadlines complete projects, remain within budget, and meet the highest quality standards. PMs can assist an organization in achieving its objectives and determining its direction. They can reduce expenses, increase efficiency, and boost revenues."
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
        { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
        { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' },
        { name: 'Siemens', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg' }
    ];

    const courseWhyViovn = [
        { "title": "Global Recognition", "description": "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries." },
        { "title": "Expert Trainer", "description": "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes." },
        { "title": "Flexible Learning", "description": "Provides a variety of methods of learning, such as classes, online, and corporate Training, that meet the needs of different individuals and their schedules." },
        { "title": "Lifetime Access", "description": "Enjoy all-year access to the recordings of sessions, course materials, and study tools." },
        { "title": "Proven Track Record", "description": "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities and meet their career ambitions." },
        { "title": "End-to-End Assistance", "description": "Viovn Offers ongoing assistance prior to, during, and after Training and includes study material exams, guidance for participants on certification, and career choices." },
        { "title": "Interactive and engaging Training", "description": "Our Training sessions are designed to be extremely interactive, featuring real-world scenarios with group participation, questions & answers to aid in understanding." },
        { "title": "A wide range of courses", "description": "Viovn offers various internationally acknowledged certification courses in Agile, Scrum, SAFe, DevOps, Project Management, and more." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'PM-FUND',
            courseName: 'Project Management Fundamentals',
            dateRange: 'Mar 15 - Mar 16, 2026',
            timeRange: '09:00 AM - 01:00 PM IST',
            trainerName: 'Expert Instructor',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,000',
            discountedPrice: 'INR 12,500',
            discountPercentage: '16',
        },
    ];

    const heroData = {
        "courseName": "Project Management Fundamentals Training",
        "breadcrumbName": "Project Management Fundamental Training",
        "rating": "5.0",
        "enrolledCount": "Thousands",
        "subtitle": "Build a strong foundation in project management to prepare for entry-level roles and successful project outcome delivery.",
        "benefits": [
            "8 Hours Live Instructor-Led Training",
            "Learn project planning, scheduling, and risk management techniques",
            "Understand the critical phases of project execution and control",
            "Entry ticket to begin your journey toward CAPM and PMP certifications"
        ],
        "mainImage": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
        "badgeImage": "/pmp-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Project Management Fundamentals Training Course Overview",
        "description": [
            "Project Management Fundamental Training provides participants with a solid foundation in essential project management skills. This course covers core concepts, from planning to execution, helping learners manage projects efficiently and meet business objectives.",
            "The Project Management Fundamental Course includes topics like stakeholder management, risk analysis, and project scope definition. Ideal for aspiring project managers, team leaders, and coordinators, it enhances your career prospects by providing practical skills that are in high demand.",
            "Viovn' Project Management Fundamental Course helps participants grasp key project management principles through interactive, real-world scenarios. With expert-led instruction, flexible learning options, and a focus on industry best practices, Viovn ensures learners are prepared to manage projects effectively and avoid common pitfalls."
        ],
        "whatIsTitle": "Why Begin With Fundamentals?",
        "whatIsDescription": [
            "Whether you are entirely new to project management or have some hands-on experience and want to formalize your skills, learning the fundamentals establishes the critical basics in process, scope, and communication. These skills are vital in almost every industry today and are the starting point for careers aligned with CAPM and PMP certification tracks."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "8 hours of live training, group exercises, course completion certificate, and 8 PDUs to advance your project management education."
        ],
        "skillsTitle": "Core Skills Covered",
        "skills": [
            "Project Planning",
            "Resource Management",
            "Risk Mitigation",
            "Budget and Schedule Tracking",
            "Stakeholder Communication"
        ],
        "modesTitle": "Modes of Training",
        "modesDescription": [
            "Live online instructor-led courses and dedicated corporate group training on demand."
        ]
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Viovn",
        "label": "Enterprise Training",
        "buttonText": "Corporate Group Enquiry",
        "description": "With learning targeted to your unique team environment, Viovn helps resolve specific organizational issues with tailored training methods. We offer corporate training globally to keep organizations up to date by building the knowledge gap required and make them strive in the competitive world with the right skills according to industry needs. Trusted by MNCs, Startups, and organizations."
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
                        outcomesTitle="Learning Outcomes of Fundamentals Training"
                        outcomesFooter="Gain the confidence to manage simple projects and prepare for advanced project management training."
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
                            'Aspiring Project Managers',
                            'Project Coordinators',
                            'Team Leads',
                            'Business Analysts',
                            'Software Developers',
                            'Anyone managing projects ad-hoc'
                        ]}
                    />
                </div>
            ),
        },
        {
            id: 'curriculum',
            label: 'Curriculum',
            content: (
                <div className="space-y-6">
                    <CourseCurriculum courseName="Project Management Fundamentals" modules={curriculumModules} />
                </div>
            ),
        },
        {
            id: 'faqs',
            label: 'FAQs',
            content: (
                <CourseFAQs
                    courseName="Project Management Fundamentals"
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
                    ltpLabel="Viovn Training"
                    downloadBtnText="Download Syllabus"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="Enroll Now"
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

export default ProjectManagementFundamentalTraining;
