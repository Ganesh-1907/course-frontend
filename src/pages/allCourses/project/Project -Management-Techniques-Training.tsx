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

const ProjectManagementTechniquesTraining = () => {
    const highlights = [
        { "text": "8 hours of Live Instructor-Led Training Sessions" },
        { "text": "Hands-On Exercises and Real-World Scenarios" },
        { "text": "Gantt Charts Optimize Project Tasks" },
        { "text": "Course Completion Certificate by Viovn" },
        { "text": "24/7 Post-Class Support and Learning Assistance" },
        { "text": "Doubt Clearing Sessions" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Gain a structured approach to evaluating options, leading to confident project choices."
        },
        {
            "title": "Individual Benefits",
            "description": "Learn proven techniques to identify and address project roadblocks efficiently."
        },
        {
            "title": "Individual Benefits",
            "description": "Master time management and resource allocation, maximizing productivity."
        },
        {
            "title": "Individual Benefits",
            "description": "Develop skills to articulate project goals and updates, fostering collaboration."
        },
        {
            "title": "Individual Benefits",
            "description": "Demonstrate project management expertise, unlocking new career opportunities."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Ensure projects align with organizational goals, maximizing resource utilization."
        },
        {
            "title": "Corporate Benefits",
            "description": "Proactively identify and manage project risks, minimizing negative impacts."
        },
        {
            "title": "Corporate Benefits",
            "description": "Establish standardized project management practices, improving efficiency."
        },
        {
            "title": "Corporate Benefits",
            "description": "Meet expectations and encourage positive relationships throughout projects."
        },
        {
            "title": "Corporate Benefits",
            "description": "Track project performance metrics to inform future initiatives."
        }
    ];

    const careerStats = {
        averageIncome: "$60,000 - $110,000",
        incomeLabel: "per annum",
        employmentGrowth: "15%",
        growthLabel: "Salary Increase",
    };

    const attendees = [
        {
            "group": [
                "You can develop comprehensive project plans and schedules.",
                "Manage project scope, budget, and resource allocation.",
                "Assess and mitigate project risks effectively.",
                "Analyze and monitor portfolio components to identify issues and opportunities.",
                "Use Gantt charts and other tools to visualize and optimize tasks in a project."
            ]
        }
    ];

    const companies = [
        {
            name: 'Amazon',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
            name: 'Microsoft',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        },
        {
            name: 'Google',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        },
        {
            name: 'IBM',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Deloitte',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
        {
            name: 'Accenture',
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        }
    ];

    const outcomes = [
        "You can develop comprehensive project plans and schedules.",
        "Manage project scope, budget, and resource allocation.",
        "Assess and mitigate project risks effectively.",
        "Analyze and monitor portfolio components to identify issues and opportunities.",
        "Use Gantt charts and other tools to visualize and optimize tasks in a project."
    ];

    const prerequisites = [
        "There are no prerequisites to attend this training.",
        "Completing this foundational training paves the way to accreditation certifications such as, Project Management Professional (PMP) , Certified Associate in Project Management (CAPM) , PMI Agile Certified Practitioner (PMI-ACP) , PRINCE2 Foundation and Practitioner"
    ];

    const certificationSteps = [
        {
            "title": "Enroll in the Training",
            "description": "Register for the Project Management Techniques training through Viovn."
        },
        {
            "title": "Attend the Live Sessions",
            "description": "Participate in the live instructor-led training sessions and practical exercises."
        },
        {
            "title": "Complete the Training",
            "description": "Successfully complete all course modules and learning activities."
        },
        {
            "title": "Receive Certification",
            "description": "Receive the Viovn Project Management Techniques course completion certificate."
        }
    ];

    const curriculumModules = [
        {
            "title": "Project Management Techniques Part 1",
            "topics": [
                "Introduction and key concepts of project management",
                "Initiating the project and understanding its life cycle",
                "Components and techniques of project planning (including Gantt, Critical Path, and PERT)",
                "Work breakdown structure and Agile basics."
            ]
        },
        {
            "title": "Project Management Techniques Part 2",
            "topics": [
                "Understanding Scope, Time, and Cost Management",
                "Monitoring and controlling the project (Risk Management, Earned Value Management, and Quality Management)",
                "Integrated change control (including Lean, Kanban, and Scrum techniques)",
                "Project closeout and success evaluation."
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Project Planning",
            "description": "Define clear project goals, objectives, and requirements for successful project execution."
        },
        {
            "title": "Scope Management",
            "description": "Determine the boundaries of your project, identifying what is included and excluded."
        },
        {
            "title": "Network Diagrams",
            "description": "Create precedence network diagrams to visualize task dependencies and calculate project timelines."
        },
        {
            "title": "Critical Path Analysis",
            "description": "Identify the critical path, the longest sequence of tasks that determine project duration, and explore options for shortening it."
        },
        {
            "title": "Gantt Charts",
            "description": "Utilize Gantt charts and milestone charts to visually represent project tasks, timelines, and progress."
        },
        {
            "title": "Performance Measurement",
            "description": "Establish performance baselines to track project progress and identify areas for improvement."
        },
        {
            "title": "Resource Allocation",
            "description": "Learn techniques for effectively allocating resources, including personnel, equipment, and materials, to optimize project efficiency."
        },
        {
            "title": "Risk Management",
            "description": "Identify, assess, and mitigate potential project risks to ensure project success."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is Project Management Techniques certification?",
                    "answer": "This project management course teaches the basic knowledge of project management according to the recommended Project Management Standards of best practice and will provide the participants with useful project management skills and experience that can be applied in the workplace."
                },
                {
                    "question": "What are the prerequisites to attend the Project Management Techniques course?",
                    "answer": "There are no prerequisites to attend the Project Management Techniques course."
                },
                {
                    "question": "What are the benefits of the Project Management Techniques certification?",
                    "answer": "The certification helps turn ideas into reality, providing an in-depth understanding of project planning, budgeting, prioritizing, and execution."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: 'Guaranteed to',
            subtitle: 'Run Workshops',
            color: 'bg-accent text-primary',
        },
        {
            icon: BookOpen,
            title: 'Expert-Led Study',
            subtitle: 'Sessions',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Networking',
            subtitle: 'Opportunities',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: 'Flexible Monthly',
            subtitle: 'Payment Plans',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Real-World Case',
            subtitle: 'Studies',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Hands-On Project',
            subtitle: 'Experience',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        {
            name: 'Amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
            name: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        },
        {
            name: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        },
        {
            name: 'IBM',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Deloitte',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
        {
            name: 'Accenture',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        }
    ];

    const courseTrainers = [
        {
            name: 'Ram Srinivasan',
            role: 'Project Management Specialist',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram is an expert in project management methodologies with a focus on practical techniques for business growth.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Consultant',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel specializes in project lifecycle management and optimizing project performance for global enterprises.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Global Recognition",
            "description": "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries."
        },
        {
            "title": "Expert Trainer",
            "description": "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes."
        },
        {
            "title": "Flexible Learning",
            "description": "Provides a variety of methods of learning, such as classes, online, and corporate Training, that meet the needs of different individuals and their schedules."
        },
        {
            "title": "Lifetime Access",
            "description": "Enjoy all-year access to the recordings of sessions, course materials, and study tools."
        },
        {
            "title": "Proven Track Record",
            "description": "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities and meet their career ambitions."
        },
        {
            "title": "End-to-End Assistance",
            "description": "Viovn Offers ongoing assistance prior to, during, and after Training and includes study material exams and guidance for participants."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'PMT',
            courseName: 'Project Management Techniques Training',
            dateRange: 'Mar 15 - Mar 16, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 25,000',
            discountedPrice: 'INR 17,500',
            discountPercentage: '30',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for Lifetime',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        "courseName": "Project Management Techniques Training",
        "breadcrumbName": "Project Management Techniques Certification",
        "rating": "5.0",
        "enrolledCount": "5,000+",
        "subtitle": "Master the essential tools and methodologies for successful project planning, execution, and monitoring in just one day.",
        "benefits": [
            "Join our 1-day live online Project Management Techniques Training!",
            "Learn to analyze projects for issues and opportunities!",
            "Use Gantt charts to visualize and improve your projects!",
            "Get a certificate of completion from Viovn!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Project Management Techniques Course Overview",
        "description": [
            "Project Management Techniques Training provides a comprehensive understanding of essential tools and methodologies for successful project execution. This course is ideal for project managers, team leads, coordinators, and professionals aspiring to improve their project management skills.",
            "By mastering these techniques, you will gain the ability to effectively plan, execute, monitor, and control projects, ensuring on-time delivery and achieving organizational objectives.",
            "Viovn' Project Management Techniques Course is a stepping stone towards accredited project management certifications like PMP and PRINCE2. The skills and knowledge acquired during this training provide a solid foundation for pursuing these globally recognized credentials."
        ],
        "whatIsTitle": "Why Attend This Course?",
        "whatIsDescription": [
            "This course covers key concepts such as Gantt Charts, Kanban Boards, WBS, Project Network Diagrams, Risk Matrix, Timesheets, and more. It is designed to be highly interactive and practical."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "8 hours of live instruction, official course materials, hands-on exercises, and a course completion certificate."
        ],
        "skillsTitle": "Skills Covered",
        "skills": [
            "Project Planning",
            "Scope Management",
            "Network Diagrams",
            "Critical Path Analysis",
            "Gantt Charts",
            "Performance Measurement",
            "Resource Allocation",
            "Risk Management"
        ],
        "modesTitle": "Training Modes",
        "modesDescription": [
            "Available as Live Virtual Training and Corporate Onboarding programs."
        ]
    };

    const corporateData = {
        "courseName": "Why Corporate Opt Us",
        "label": "Corporate Training",
        "buttonText": "Corporate Group Enquiry",
        "description": "With learning targeted to your unique team environment, we at Viovn help to resolve your specific issues and meet your specific needs with tailored training methods. We offer corporate training globally to keep Organizations up to date by building the knowledge gap required."
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
                        outcomesTitle={`What are the Learning Outcomes of the ${heroData.courseName} Course?`}
                        outcomesFooter="After completing this training, you will be equipped with practical skills to manage projects efficiently and effectively."
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
                            'Project Managers',
                            'Team Leads',
                            'Project Coordinators',
                            'Operations Managers',
                            'Business Analysts',
                            'Aspiring Project Professionals'
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
                        courseName="Project Management"
                        prerequisites={prerequisites}
                        subtitle="What are the Prerequisites Required?"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="Project Management Techniques"
                        certificateBenefits={certificateBenefits}
                        mockupName="ALEX BRYANT"
                        label="Accreditation"
                        titlePrefix="Earn Your"
                        titleHighlight="Course"
                        titleSuffix="Completion Certificate"
                        issuerName="Viovn"
                        certificateType="Certificate of Completion"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed the training in"
                        signer1Role="Lead Trainer"
                        signer2Role="Director"
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
                        courseName="Techniques"
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
                    courseName="PM Techniques"
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
          categoryName="project"
          categoryLink="/category/project"
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
                    ltpLabel="Trusted Training Provider"
                    downloadBtnText="Download Brochure"
                    viewSchedulesBtnText="View Schedules"
                    freeAssessmentBtnText="Free Assessment"
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

export default ProjectManagementTechniquesTraining;
