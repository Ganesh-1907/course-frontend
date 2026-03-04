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

const PRINCE2FoundationAndPractitionerCertificationTraining = () => {
    const highlights = [
        { "text": "4 days of live instructor-led training sessions by authorized trainers" },
        { "text": "Course aligned with the latest PRINCE2 7th Edition framework" },
        { "text": "Earn 32 Professional Development Units (PDUs)" },
        { "text": "Official PeopleCert eBook and training materials included" },
        { "text": "Course fee includes the exam voucher for PRINCE2 Foundation and Practitioner certification" },
        { "text": "Dedicated doubt-clearing sessions with trainers" },
        { "text": "24/7 learning support and assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Gain globally recognized project management skills using the PRINCE2 methodology."
        },
        {
            "title": "Individual Benefits",
            "description": "Manage Complex Projects: PRINCE2 Foundation and Practitioner certification equips professionals with the ability to plan, execute, audit, and manage complex projects effectively."
        },
        {
            "title": "Individual Benefits",
            "description": "Enhance your professional credibility and improve your career prospects in project management."
        },
        {
            "title": "Individual Benefits",
            "description": "Develop Fundamental Skills: Learn the essential knowledge and practical skills required to manage projects independently."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve decision-making capabilities through structured project management frameworks."
        },
        {
            "title": "Individual Benefits",
            "description": "Understand Project Methodologies: Gain knowledge of PRINCE2 processes, principles, and themes used in modern project management."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve communication and stakeholder management throughout the project lifecycle."
        },
        {
            "title": "Individual Benefits",
            "description": "Provide Flexibility: Learn how to tailor PRINCE2 processes to meet changing organizational requirements."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Implement standardized project management practices across teams and departments."
        },
        {
            "title": "Corporate Benefits",
            "description": "Streamline Projects: PRINCE2 training enables organizations to streamline project workflows, ensuring alignment with business objectives."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve transparency and accountability across project teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Track Project Progress: PRINCE2 provides a structured approach that allows organizations to monitor projects from initiation to completion."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhance collaboration between stakeholders and project teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve Communication: PRINCE2 training improves communication between teams, ensuring clarity in roles and responsibilities."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve risk identification and mitigation across projects."
        },
        {
            "title": "Corporate Benefits",
            "description": "Increase Project Success: Clear governance structures and defined responsibilities help organizations achieve better project outcomes."
        }
    ];

    const careerStats = {
        averageIncome: "$85,000 - $145,000",
        incomeLabel: "per annum",
        employmentGrowth: "22%",
        growthLabel: "Career Acceleration",
        globalDemand: "High demand worldwide",
    };

    const attendees = [
        {
            "group": [
                "Project managers and aspiring project managers",
                "Team leaders and project coordinators",
                "Business analysts and consultants",
                "Professionals involved in project planning and delivery",
                "Individuals looking to build a career in project management"
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
        "Gain a structured framework to manage projects of any scale or complexity.",
        "Understand the core principles and processes of PRINCE2 methodology.",
        "Learn how to tailor PRINCE2 practices to suit specific project environments.",
        "Improve communication and stakeholder management throughout the project lifecycle.",
        "Enhance career prospects with globally recognized PRINCE2 certification."
    ];

    const prerequisites = [
        "There are no prerequisites to take the PRINCE2 Foundation certification exam.",
        "To take the Practitioner exam, you must first pass the PRINCE2 Foundation certification."
    ];

    const certificationSteps = [
        {
            "title": "Meet the Eligibility",
            "description": "Ensure you understand the basic concepts of project management before starting the PRINCE2 training."
        },
        {
            "title": "Attend Accredited Training",
            "description": "Enroll in accredited PRINCE2 Foundation and Practitioner training from a PeopleCert Authorized Training Organization such as Viovn."
        },
        {
            "title": "Prepare for the Exams",
            "description": "Study the official PRINCE2 manual, practice mock exams, and review scenario-based case studies."
        },
        {
            "title": "Get Certified",
            "description": "Pass the PRINCE2 Foundation exam and Practitioner exam to earn the globally recognized certification."
        }
    ];

    const curriculumModules = [
        {
            "title": "Introduction",
            "topics": [
                "Overview of PRINCE2 methodology",
                "Understanding projects and project environments",
                "The PRINCE2 integrated framework"
            ]
        },
        {
            "title": "PRINCE2 Principles",
            "topics": [
                "Continued business justification",
                "Learn from experience",
                "Defined roles and responsibilities",
                "Manage by stages",
                "Manage by exception",
                "Focus on products",
                "Tailor to suit the project environment"
            ]
        },
        {
            "title": "PRINCE2 Themes",
            "topics": [
                "Business case",
                "Organization",
                "Quality",
                "Plans",
                "Risk",
                "Change",
                "Progress"
            ]
        },
        {
            "title": "PRINCE2 Processes",
            "topics": [
                "Starting up a project",
                "Directing a project",
                "Initiating a project",
                "Controlling a stage",
                "Managing product delivery",
                "Managing a stage boundary",
                "Closing a project"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Understanding PRINCE2 Methodology",
            "description": "Gain a comprehensive understanding of PRINCE2 principles, processes, and themes used throughout the project lifecycle."
        },
        {
            "title": "Effective Team Management",
            "description": "Learn how to manage teams effectively and deliver successful projects using structured project governance."
        },
        {
            "title": "Selecting the Right Team Members",
            "description": "Identify individuals with the appropriate skills and knowledge to contribute effectively to project teams."
        },
        {
            "title": "Foundational Project Concepts",
            "description": "Develop a solid understanding of project management fundamentals using the PRINCE2 framework."
        },
        {
            "title": "Risk Management Skills",
            "description": "Learn how to identify, evaluate, and mitigate risks effectively using PRINCE2 risk management techniques."
        },
        {
            "title": "Tailoring PRINCE2",
            "description": "Understand how to adapt PRINCE2 principles and processes to different project environments."
        },
        {
            "title": "Stakeholder Engagement",
            "description": "Develop effective strategies for engaging stakeholders and maintaining strong project relationships."
        },
        {
            "title": "Quality Management",
            "description": "Ensure project deliverables meet defined quality standards and stakeholder expectations."
        },
        {
            "title": "Change Control",
            "description": "Learn how to manage project changes in a controlled and structured manner."
        },
        {
            "title": "Project Governance",
            "description": "Understand governance structures that ensure accountability, transparency, and project success."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is PRINCE2 certification?",
                    "answer": "PRINCE2 (Projects IN Controlled Environments) is a structured project management method and practitioner program which emphasizes dividing projects into manageable and controllable stages."
                },
                {
                    "question": "What is the difference between PRINCE2 Foundation and Practitioner?",
                    "answer": "Foundation is the introductory level that confirms you understand the PRINCE2 method, while Practitioner confirms you can apply the method to a real project scenario."
                },
                {
                    "question": "Is the exam fee included in the course?",
                    "answer": "Yes, our PRINCE2 Foundation and Practitioner course fee includes the official exam vouchers for both levels."
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
            role: 'PRINCE2 Authorized Trainer',
            rating: '4.9',
            experience: '18+ Years',
            description:
                'Ram is a highly experienced project management consultant and authorized PRINCE2 trainer with extensive experience in global project delivery.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Project Consultant',
            rating: '4.8',
            experience: '22+ Years',
            description:
                'Axel is a veteran in the project management space, specializing in the implementation of PRINCE2 and Agile frameworks in enterprise environments.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Authorized Training Partner",
            "description": "Viovn is an authorized training organization, ensuring you receive the most up-to-date and official PRINCE2 curriculum."
        },
        {
            "title": "High Pass Rate",
            "description": "Our students consistently achieve high pass rates in both Foundation and Practitioner exams due to our intensive training approach."
        },
        {
            "title": "Comprehensive Materials",
            "description": "Get access to official PeopleCert eBooks, mock exams, and proprietary study guides designed by industry experts."
        },
        {
            "title": "Post-Training Support",
            "description": "We offer continued support after the training to ensure you are fully prepared for your certification exams."
        },
        {
            "title": "Industry Experts",
            "description": "Learn from trainers who don't just teach theory but bring decades of real-world project management experience."
        },
        {
            "title": "Flexible Learning Options",
            "description": "Choose from live virtual classrooms, in-person training, or customized corporate programs tailored to your needs."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'P2FP',
            courseName: 'PRINCE2 Foundation & Practitioner',
            dateRange: 'Apr 05 - Apr 08, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 65,000',
            discountedPrice: 'INR 55,000',
            discountPercentage: '15',
        },
    ];

    const certificateBenefits = [
        'Globally Recognized Digital Badge',
        'Official PeopleCert Certificate',
        'Validity for 3 Years (Practitioner)',
        'Enhanced Resume Value Worldwide',
    ];

    const heroData = {
        "courseName": "PRINCE2® Foundation and Practitioner Certification Training",
        "breadcrumbName": "PRINCE2 Foundation & Practitioner",
        "rating": "4.9",
        "enrolledCount": "12,000+",
        "subtitle": "Master the world's most widely used project management methodology with our comprehensive 4-day combined training program.",
        "benefits": [
            "4 days of intensive live online training!",
            "Foundation and Practitioner Exam Vouchers included!",
            "Official PeopleCert eBook and core materials!",
            "Earn 32 PDUs for your continuing education!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PRINCE2® Foundation & Practitioner Combined Course",
        "description": [
            "PRINCE2® (Projects IN Controlled Environments) is the global standard for project management, providing a structured framework that can be applied to any project regardless of size or industry. This combined training program covers both the Foundation and Practitioner levels, taking you from core concepts to expert application in just four days.",
            "The Foundation level introduces you to the PRINCE2 principles, themes, and processes, while the Practitioner level focuses on applying and tailoring the methodology to specific project scenarios. This course is fully aligned with the latest PRINCE2 7th Edition.",
            "By earning your PRINCE2 certification with Viovn, you join an elite group of professionals recognized worldwide for their ability to deliver projects on time, within budget, and to the required quality standards."
        ],
        "whatIsTitle": "Why Choose PRINCE2 Combined Training?",
        "whatIsDescription": [
            "The combined program is the most efficient way to achieve full certification. It provides a continuous learning path from theory to practice, ensuring a deep understanding of how to manage projects effectively using a controlled and organized approach."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "Official Exam Vouchers (F&P), PeopleCert Authorized eBook, Practice Mock Exams, and 32 PDUs."
        ],
        "skillsTitle": "Core Skills Covered",
        "skills": [
            "Structured Project Governance",
            "Risk & Quality Management",
            "Business Case Development",
            "Product-Based Planning",
            "Project Lifecycle Management",
            "Stakeholder Communication",
            "Change Control Procedures",
            "Methodology Tailoring"
        ],
        "modesTitle": "Learning Formats",
        "modesDescription": [
            "Live Virtual Classroom and Corporate Group Training."
        ]
    };

    const corporateData = {
        "courseName": "PRINCE2 Corporate Training Solutions",
        "label": "Enterprise Training",
        "buttonText": "Inquire for Your Team",
        "description": "Standardize project management across your entire organization with our tailored PRINCE2 corporate training programs. We help teams implement the methodology consistently to drive better business outcomes and project success rates."
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
                        outcomesTitle={`What will you achieve with this course?`}
                        outcomesFooter="Become a certified project management expert recognized globally."
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
                            'Aspiring Project Managers',
                            'Project Coordinators',
                            'Team Leaders',
                            'Business Analysts',
                            'Operations Managers'
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
                        courseName="PRINCE2"
                        prerequisites={prerequisites}
                        subtitle="Prerequisites for the Exam"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="PRINCE2 Foundation & Practitioner"
                        certificateBenefits={certificateBenefits}
                        mockupName="NICHOLAS CHASE"
                        label="Official PeopleCert"
                        titlePrefix="Earn Your"
                        titleHighlight="Combined"
                        titleSuffix="Professional Certification"
                        issuerName="PeopleCert / AXELOS"
                        certificateType="PRINCE2® Practitioner Certificate"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed the examination for"
                        signer1Role="CEO, PeopleCert"
                        signer2Role="PRINCE2 Product Manager"
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
                        courseName="PRINCE2 Framework"
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
                    courseName="PRINCE2"
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
                    enrolledSuffix="Certified"
                    moneyBackText="100% Satisfaction Guarantee"
                    ltpLabel="Authorized Training Provider"
                    downloadBtnText="Download PRINCE2 Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="Self-Assessment"
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

export default PRINCE2FoundationAndPractitionerCertificationTraining;
