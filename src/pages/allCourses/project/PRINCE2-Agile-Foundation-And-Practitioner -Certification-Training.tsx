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
    Star
} from "lucide-react";

const PRINCE2AgileFoundationAndPractitionerCertificationTraining = () => {
    const highlights = [
        { "text": "32 hours of live instructor-led training" },
        { "text": "Accredited by PeopleCert as an Authorized Training Organization (ATO)" },
        { "text": "Hands-on learning through real-world project scenarios" },
        { "text": "Exam voucher included in the course fee" },
        { "text": "Access to official PeopleCert eBook and study materials" },
        { "text": "24/7 learning support and assistance" },
        { "text": "Dedicated doubt-clearing sessions" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Gain practical knowledge of both PRINCE2 and Agile methodologies to manage modern projects efficiently."
        },
        {
            "title": "Individual Benefits",
            "description": "Career Growth: This certification opens doors to better job opportunities, promotions, and leadership roles."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve your understanding of modern project management frameworks and agile practices."
        },
        {
            "title": "Individual Benefits",
            "description": "Skill Building: Learn essential Agile and PRINCE2 skills required to manage projects effectively."
        },
        {
            "title": "Individual Benefits",
            "description": "Strengthen your ability to manage complex projects with structured governance and agile flexibility."
        },
        {
            "title": "Individual Benefits",
            "description": "Job Opportunities: Increase your chances of getting hired and improve your earning potential."
        },
        {
            "title": "Individual Benefits",
            "description": "Build confidence in managing project teams, stakeholders, and deliverables."
        },
        {
            "title": "Individual Benefits",
            "description": "Boost Your Confidence: Gain the knowledge needed to handle real-world projects successfully."
        },
        {
            "title": "Individual Benefits",
            "description": "Worldwide Recognition: Earn a globally recognized certification that enhances your professional credibility."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Establish a structured yet flexible project management framework within the organization."
        },
        {
            "title": "Corporate Benefits",
            "description": "Higher Project Success: Improve the chances of successful project delivery by combining governance with agile adaptability."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve project transparency and accountability across teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Better Resource Use: Optimize resource allocation and ensure efficient utilization of team capabilities."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhance productivity through structured project planning and execution."
        },
        {
            "title": "Corporate Benefits",
            "description": "Faster Project Delivery: Streamline project processes to deliver outcomes more quickly."
        },
        {
            "title": "Corporate Benefits",
            "description": "Promote collaboration and effective communication among teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improved Teamwork: Encourage strong collaboration and communication between project stakeholders."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve organizational adaptability in dynamic project environments."
        },
        {
            "title": "Corporate Benefits",
            "description": "Flexibility to Change: Enable organizations to adapt quickly to evolving business requirements."
        },
        {
            "title": "Corporate Benefits",
            "description": "Standardize project management practices across departments."
        },
        {
            "title": "Corporate Benefits",
            "description": "Consistent Practices: Create standardized project management approaches for better quality and reliability."
        },
        {
            "title": "Corporate Benefits",
            "description": "Develop a highly capable project management workforce."
        },
        {
            "title": "Corporate Benefits",
            "description": "Skilled Workforce: Build a team proficient in Agile methods and PRINCE2 governance for improved organizational performance."
        }
    ];

    const careerStats = {
        averageIncome: "$90,000 - $150,000",
        incomeLabel: "per annum",
        employmentGrowth: "24%",
        growthLabel: "Agile Leadership",
        globalDemand: "High demand worldwide",
    };

    const attendees = [
        {
            "group": [
                "Project Managers and aspiring project managers",
                "Scrum Masters and Agile Coaches",
                "Team Leaders and Project Coordinators",
                "Business Analysts and Consultants",
                "Individuals looking to combine governance with Agile"
            ]
        }
    ];

    const companies = [
        {
            name: 'Accenture',
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
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
            name: 'Capgemini',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg',
        },
        {
            name: 'Infosys',
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
        },
        {
            name: 'TCS',
            url: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg',
        }
    ];

    const outcomes = [
        "Understand Agile working practices including frameworks, methodologies, and techniques.",
        "Learn how PRINCE2 and Agile can be integrated for modern project management.",
        "Apply Agile practices within the PRINCE2 governance framework.",
        "Tailor PRINCE2 processes and management products for Agile environments.",
        "Develop strong collaboration and communication practices.",
        "Manage risks, issues, and changes effectively in Agile projects."
    ];

    const prerequisites = [
        "PRINCE2 Agile Foundation",
        "Certified Associate in Project Management (CAPM)",
        "Project Management Professional (PMP)",
        "PRINCE2 Foundation (5th or 6th editions)",
        "IPMA Level A, B, C, or D (Certified Project Manager/Associate)",
        "Project Management Qualification (PMQ)"
    ];

    const certificationSteps = [
        {
            "title": "Check Eligibility",
            "description": "Ensure that you hold the required prerequisite certification such as PRINCE2 Foundation or an equivalent qualification."
        },
        {
            "title": "Attend the Training",
            "description": "Enroll with an accredited training provider like Simpliaxis to learn PRINCE2 Agile concepts and practices."
        },
        {
            "title": "Prepare for the Exam",
            "description": "Use official study materials, practice tests, and revision sessions to prepare thoroughly for the exam."
        },
        {
            "title": "Take the Exam",
            "description": "Pass the Foundation and Practitioner exams to achieve PRINCE2 Agile certification."
        }
    ];

    const curriculumModules = [
        {
            "title": "Introduction to PRINCE2 Agile",
            "topics": [
                "What is PRINCE2 Agile?",
                "Hexagon: the fix vs flex model",
                "The 5 targets of PRINCE2 Agile"
            ]
        },
        {
            "title": "Agile Frameworks and PRINCE2",
            "topics": [
                "Integrating Scrum and Kanban",
                "The PRINCE2 principles in an Agile context",
                "Themes and Processes tailoring"
            ]
        },
        {
            "title": "Area of Focus",
            "topics": [
                "Agilometer",
                "Requirements: user stories and backlogs",
                "Rich communication and frequent feedback",
                "Workshop management"
            ]
        },
        {
            "title": "Practitioner Application",
            "topics": [
                "Scenario-based tailoring",
                "Managing product delivery in Agile",
                "Closing a project with Agile reflections"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Agile Fundamentals",
            "description": "Learn the fundamentals of Agile working practices, including frameworks, methodologies, and techniques."
        },
        {
            "title": "Purpose of Integration",
            "description": "Understand the purpose and benefits of combining PRINCE2 with Agile methodologies."
        },
        {
            "title": "Governance Framework",
            "description": "Apply Agile practices and techniques within the PRINCE2 governance framework."
        },
        {
            "title": "Tailoring Principles",
            "description": "Tailor PRINCE2 principles, themes, and processes to suit Agile project environments."
        },
        {
            "title": "Roles & Responsibilities",
            "description": "Understand the roles and responsibilities within an Agile project team."
        },
        {
            "title": "Collaboration & Feedback",
            "description": "Recognize the importance of collaboration, communication, and continuous feedback."
        },
        {
            "title": "Risk & Change",
            "description": "Learn how to manage risks, issues, and changes in Agile projects."
        },
        {
            "title": "Environment Adaptation",
            "description": "Adapt project management approaches based on project requirements and environments."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is PRINCE2 Agile?",
                    "answer": "PRINCE2 Agile is the world's most complete project management solution, combining the flexibility and responsiveness of agile with the clearly defined framework of PRINCE2."
                },
                {
                    "question": "Is the combined course suitable for beginners?",
                    "answer": "Yes, our combined Foundation and Practitioner course is designed to take you from a basic understanding to practitioner level competency."
                },
                {
                    "question": "Does the course fee include exams?",
                    "answer": "Yes, our PRINCE2 Agile training fee includes the vouchers for both Foundation and Practitioner exams."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: 'Guaranteed to',
            subtitle: 'Run Workshops',
            color: 'bg-blue-50 text-blue-600',
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
            name: 'Accenture',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
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
            name: 'Infosys',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
        },
        {
            name: 'TCS',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg',
        },
        {
            name: 'Capgemini',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg',
        }
    ];

    const courseTrainers = [
        {
            name: 'Ram Srinivasan',
            role: 'PRINCE2 Agile Authorized Trainer',
            rating: '4.9',
            experience: '18+ Years',
            description:
                'Ram is an expert in combining structured governance with Agile delivery, helping teams transition to modern project management.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Agile Consultant',
            rating: '4.8',
            experience: '22+ Years',
            description:
                'Axel has decades of experience implementing Agile at scale within large corporate environments worldwide.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhySimpliaxis = [
        {
            "title": "Authorized Training Provider",
            "description": "Simpliaxis is an authorized training organization by PeopleCert, ensuring official and up-to-date curriculum."
        },
        {
            "title": "Hands-on Methodology",
            "description": "Our training goes beyond theory, using real-world scenarios to teach integration of Agile and PRINCE2."
        },
        {
            "title": "High Pass Rates",
            "description": "We take pride in our learners' success, providing comprehensive materials and mock exams to ensure readiness."
        },
        {
            "title": "Lifetime Support",
            "description": "Gain access to a community of professionals and continuous learning opportunities post-certification."
        },
        {
            "title": "Flexible Learning",
            "description": "Live virtual classrooms, on-site corporate training, and interactive digital resources tailored to you."
        },
        {
            "title": "Industry Experts",
            "description": "Learn from practitioners who bring years of real-world consulting experience into the classroom."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'P2A-FP',
            courseName: 'PRINCE2 Agile F&P',
            dateRange: 'May 12 - May 15, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 75,000',
            discountedPrice: 'INR 65,000',
            discountPercentage: '13',
        },
    ];

    const certificateBenefits = [
        'Dual Certification Badge (F&P)',
        'Official PeopleCert Certificate',
        'Validity for 3 Years (Practitioner)',
        'Agile Leadership Recognized Worldwide',
    ];

    const heroData = {
        "courseName": "PRINCE2 Agile® Foundation and Practitioner Certification Training",
        "breadcrumbName": "PRINCE2 Agile Foundation & Practitioner",
        "rating": "4.9",
        "enrolledCount": "9,200+",
        "subtitle": "Master the world's most complete project management solution by combining the flexibility of Agile with the stability of PRINCE2.",
        "benefits": [
            "32 hours of live intensive online training!",
            "PeopleCert Foundation & Practitioner vouchers included!",
            "Official eBook and authorized training materials!",
            "Earn 32 PDUs for career advancement!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PRINCE2 Agile® Foundation & Practitioner Combined",
        "description": [
            "PRINCE2 Agile® is the world's most complete project management solution, combining the flexibility and responsiveness of agile with the clearly defined framework of PRINCE2®. This combined training program is designed to take professionals from the fundamental concepts to practitioner-level application.",
            "The Foundation level focuses on understanding agile working practices and the PRINCE2 governance framework, while the Practitioner level teaches how to blend these two worlds effectively to manage complex projects with speed and reliability.",
            "Simpliaxis provides an immersive learning experience led by authorized trainers, ensuring you are fully prepared to pass both certification exams and implement these practices in your organization."
        ],
        "whatIsTitle": "Why Choose PRINCE2 Agile?",
        "whatIsDescription": [
            "It offers the best of both worlds: the structure needed for corporate governance and the agility required to deliver value faster in a rapidly changing environment. This certification is highly sought after by organizations looking to standardize their agile practices."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "Official Exam Vouchers, PeopleCert eBook, 32 hours of training, and 32 PDUs."
        ],
        "skillsTitle": "Core Skills Covered",
        "skills": [
            "Agile Framework Integration (Scrum/Kanban)",
            "PRINCE2 Governance Tailoring",
            "Fix vs Flex (Hexagon) Modeling",
            "Rich Communication & Feedback Loops",
            "Product Delivery in Agile",
            "Risk & Change Management",
            "Stakeholder Collaboration",
            "Benefit Realization"
        ],
        "modesTitle": "Learning Formats",
        "modesDescription": [
            "Live Virtual Classrooms and Customized Corporate Training."
        ]
    };

    const corporateData = {
        "courseName": "Enterprise PRINCE2 Agile Training",
        "label": "Corporate Solutions",
        "buttonText": "Consult for Your Team",
        "description": "Standardize your organization's project delivery with a unified approach. We help large teams adopt PRINCE2 Agile to improve collaboration and project success rates."
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
                        outcomesTitle={`What will you achieve?`}
                        outcomesFooter="Become an Agile project leader with globally recognized credentials."
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
                            'Scrum Masters',
                            'Agile Team Leads',
                            'Product Owners',
                            'Business Analysts',
                            'PMO Leads'
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
                        courseName="PRINCE2 Agile"
                        prerequisites={prerequisites}
                        subtitle="Eligibility Criteria"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="PRINCE2 Agile Foundation & Practitioner"
                        certificateBenefits={certificateBenefits}
                        mockupName="NICHOLAS CHASE"
                        label="Official PeopleCert"
                        titlePrefix="Earn Your"
                        titleHighlight="Combined"
                        titleSuffix="Agile Professional Certification"
                        issuerName="PeopleCert / AXELOS"
                        certificateType="PRINCE2 Agile® Practitioner Certificate"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed the examination for"
                        signer1Role="CEO, PeopleCert"
                        signer2Role="PRINCE2 Agile Product Manager"
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
                        courseName="PRINCE2 Agile"
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
                    courseName="PRINCE2 Agile"
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
                    ltpLabel="Authorized Training Provider"
                    downloadBtnText="Agile Combined Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="Agilometer Test"
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
                            <CourseWhySimpliaxis features={courseWhySimpliaxis} />
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

export default PRINCE2AgileFoundationAndPractitionerCertificationTraining;
