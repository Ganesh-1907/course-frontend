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

const PRINCE2FoundationCertificationTraining = () => {
    const highlights = [
        { "text": "16 hours of live instructor-led sessions by authorized trainers" },
        { "text": "Course aligned with the latest PRINCE2 7th Edition framework" },
        { "text": "Earn 16 Professional Development Units (PDUs)" },
        { "text": "Official PeopleCert eBook and training materials included" },
        { "text": "Course fee includes the exam voucher for PRINCE2® Foundation certification" },
        { "text": "Dedicated doubt-clearing sessions" },
        { "text": "24/7 learning support and assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Gain globally recognized project management knowledge through PRINCE2 methodology."
        },
        {
            "title": "Individual Benefits",
            "description": "Global Certification: The PRINCE2 Foundation certification is recognized worldwide and opens up numerous job opportunities."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve your understanding of structured project management methodologies."
        },
        {
            "title": "Individual Benefits",
            "description": "Career Opportunity: PRINCE2 Foundation certification improves your chances of getting selected for project management roles and career advancement opportunities."
        },
        {
            "title": "Individual Benefits",
            "description": "Build confidence in handling projects independently or within a team environment."
        },
        {
            "title": "Individual Benefits",
            "description": "Assist Teamwork: PRINCE2 training helps individuals collaborate effectively with project teams and stakeholders."
        },
        {
            "title": "Individual Benefits",
            "description": "Strengthen project planning, monitoring, and risk management capabilities."
        },
        {
            "title": "Individual Benefits",
            "description": "Increase Earning Potential: Certified PRINCE2 professionals often earn higher salaries than non-certified professionals."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve Skills: This course enhances your ability to manage and deliver successful projects."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Improve organizational project management capabilities with standardized processes."
        },
        {
            "title": "Corporate Benefits",
            "description": "Positive Project Outcomes: PRINCE2-certified professionals focus on clear deliverables and consistent methods to ensure successful project delivery."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhance collaboration and transparency among project teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Provide Flexibility: The PRINCE2 framework can be adapted to organizations of any size or industry."
        },
        {
            "title": "Corporate Benefits",
            "description": "Establish structured communication within project teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Clear Communication: PRINCE2 introduces standardized terminology that reduces misunderstandings and improves project coordination."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve decision-making through clear project governance."
        },
        {
            "title": "Corporate Benefits",
            "description": "Maximizing Benefits: Employees trained in PRINCE2 can effectively apply the framework to generate maximum value for the organization."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhance Capabilities: Structured training improves the overall project management maturity of the organization."
        }
    ];

    const careerStats = {
        averageIncome: "$75,000 - $120,000",
        incomeLabel: "per annum",
        employmentGrowth: "18%",
        growthLabel: "Career Advancement",
        globalDemand: "High demand globally",
    };

    const attendees = [
        {
            "group": [
                "Project professionals looking to understand the PRINCE2 methodology.",
                "Team members working in a PRINCE2 project environment.",
                "Aspiring project managers aiming for a foundational certification.",
                "Project coordinators and administrators seeking structured methods.",
                "Career changers entering the project management field."
            ]
        }
    ];

    const companies = [
        {
            name: 'IBM',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Accenture',
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
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
        },
        {
            name: 'Deloitte',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        }
    ];

    const outcomes = [
        "Understand the seven PRINCE2 principles used for successful project management.",
        "Gain knowledge of the project lifecycle from initiation to closure.",
        "Apply PRINCE2 themes such as risk, quality, business case, and change management.",
        "Learn structured PRINCE2 processes for managing project stages effectively.",
        "Prepare for advanced certifications such as PRINCE2 Practitioner and PRINCE2 Agile."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for attending the PRINCE2 Foundation training or taking the certification exam."
    ];

    const certificationSteps = [
        {
            "title": "Check Eligibility",
            "description": "Ensure you have a basic understanding of project management concepts before starting the training."
        },
        {
            "title": "Attend Training",
            "description": "Enroll in accredited PRINCE2 Foundation training from a PeopleCert Authorized Training Organization such as Viovn."
        },
        {
            "title": "Study and Prepare",
            "description": "Review the PRINCE2 manual, practice exam questions, and revise key principles and processes."
        },
        {
            "title": "Get Certified",
            "description": "Pass the PRINCE2 Foundation exam consisting of 60 multiple-choice questions within 60 minutes."
        }
    ];

    const curriculumModules = [
        {
            "title": "Course Overview",
            "topics": [
                "Overview of project management concepts",
                "Understanding PRINCE2 certification",
                "Benefits of PRINCE2 training"
            ]
        },
        {
            "title": "Introduction to PRINCE2",
            "topics": [
                "Overview of PRINCE2 methodology",
                "Project variables under PRINCE2",
                "Advantages of PRINCE2 structure",
                "PRINCE2 framework concepts and procedures"
            ]
        },
        {
            "title": "PRINCE2 Principles",
            "topics": [
                "Overview of PRINCE2 principles",
                "Continued business justification",
                "Learn from experience",
                "Defined roles and responsibilities",
                "Manage by exception",
                "Focus on products",
                "Tailor to the project environment"
            ]
        },
        {
            "title": "Tailoring PRINCE2",
            "topics": [
                "Adapting PRINCE2 to different project environments",
                "Customizing PRINCE2 for specific project requirements"
            ]
        },
        {
            "title": "PRINCE2 Themes",
            "topics": [
                "Organization and roles",
                "Quality management concepts",
                "Planning themes",
                "Risk management procedures",
                "Change management concepts"
            ]
        },
        {
            "title": "PRINCE2 Processes",
            "topics": [
                "Starting a project",
                "Directing a project",
                "Initiating a project",
                "Controlling a stage",
                "Managing product delivery",
                "Managing a stage boundary",
                "Closing a project"
            ]
        },
        {
            "title": "Exam Preparation",
            "topics": [
                "Practice exams",
                "Revision sessions",
                "Exam strategies and tips"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Understand PRINCE2 Methodology",
            "description": "Gain a strong understanding of the PRINCE2 framework used to manage successful projects."
        },
        {
            "title": "Learn PRINCE2 Principles",
            "description": "Understand the seven PRINCE2 principles and how they guide project management."
        },
        {
            "title": "Tailoring PRINCE2",
            "description": "Learn how to adapt PRINCE2 processes to suit different project environments and organizational needs."
        },
        {
            "title": "PRINCE2 Themes",
            "description": "Manage project aspects such as risk, quality, change, and progress throughout the project lifecycle."
        },
        {
            "title": "PRINCE2 Processes",
            "description": "Understand the seven processes used for initiating, planning, controlling, and closing projects."
        },
        {
            "title": "Product Delivery",
            "description": "Learn how to manage product delivery and the roles involved in the delivery process."
        },
        {
            "title": "Risk Management",
            "description": "Identify, evaluate, and mitigate project risks using PRINCE2 structured techniques."
        },
        {
            "title": "Change Management",
            "description": "Handle project changes effectively while maintaining control over scope and objectives."
        },
        {
            "title": "Conflict Management",
            "description": "Develop the ability to manage conflicts among stakeholders and project teams."
        },
        {
            "title": "Stage Management",
            "description": "Understand how to manage and monitor project stages effectively."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is PRINCE2 Foundation certification?",
                    "answer": "The PRINCE2 Foundation level is the introductory level of the PRINCE2 project management methodology. It provides you with the basic principles, themes, and processes of PRINCE2."
                },
                {
                    "question": "Are there any prerequisites for the PRINCE2 Foundation exam?",
                    "answer": "No, there are no mandatory prerequisites for taking the PRINCE2 Foundation exam. It is open to anyone interested in project management."
                },
                {
                    "question": "How long is the PRINCE2 Foundation certificate valid?",
                    "answer": "The PRINCE2 Foundation certificate does not expire. It is a lifetime certification."
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
            name: 'IBM',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Accenture',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        },
        {
            name: 'Capgemini',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg',
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
            name: 'Deloitte',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        }
    ];

    const courseTrainers = [
        {
            name: 'Ram Srinivasan',
            role: 'Authorized PRINCE2 Trainer',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram is a certified PRINCE2 trainer with extensive experience in delivering high-quality project management training globally.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Project Management Specialist',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel is an expert in PRINCE2 methodology and has helped thousands of professionals achieve their certification goals.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Authorized Training Partner",
            "description": "Viovn is an authorized training organization, ensuring you receive official and up-to-date PRINCE2 curriculum."
        },
        {
            "title": "High Success Rate",
            "description": "Our students enjoy a very high pass rate for the PRINCE2 Foundation exam thanks to our comprehensive training."
        },
        {
            "title": "Expert Instructors",
            "description": "Learn from certified trainers who bring years of real-world project management experience into the classroom."
        },
        {
            "title": "Exam Prep Included",
            "description": "Our course includes intensive exam preparation, mock tests, and revision sessions to ensure you pass on your first attempt."
        },
        {
            "title": "Flexible Learning",
            "description": "We offer live virtual training, in-person classes, and corporate programs to fit your schedule and learning style."
        },
        {
            "title": "Lifetime Support",
            "description": "Get continued support and guidance even after you complete your training from our dedicated team."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'P2FD',
            courseName: 'PRINCE2 Foundation',
            dateRange: 'Apr 12 - Apr 13, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 45,000',
            discountedPrice: 'INR 35,000',
            discountPercentage: '22',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn',
        'Official PeopleCert Certificate',
        'Life-time Validity',
        'Global Professionals Network Access',
    ];

    const heroData = {
        "courseName": "PRINCE2® Foundation Certification Training",
        "breadcrumbName": "PRINCE2 Foundation",
        "rating": "4.8",
        "enrolledCount": "8,000+",
        "subtitle": "Get certified in the world's most widely recognized project management methodology with our 2-day Foundation training.",
        "benefits": [
            "2 days of live online instructor-led training!",
            "PRINCE2® Foundation Exam Voucher included!",
            "Aligned with the latest PRINCE2 7th Edition!",
            "Earn 16 Professional Development Units (PDUs)!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PRINCE2® Foundation Certification Course",
        "description": [
            "PRINCE2® Foundation is the gateway to the professional world of project management. This training provides you with a comprehensive understanding of the PRINCE2 methodology, which is used by governments and private sector organizations worldwide.",
            "The course covers the core principles, themes, and processes that guide successful projects. It is designed to ensure you understand how PRINCE2 projects are structured and managed effectively.",
            "Alignment with the 7th Edition of PRINCE2 ensures you are learning the most modern and applicable version of the framework, preparing you for immediate application in your workplace."
        ],
        "whatIsTitle": "Who Should Attend?",
        "whatIsDescription": [
            "This course is ideal for aspiring project managers, team members, project coordinators, and anyone involved in project delivery who needs a solid foundation in the PRINCE2 method."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "16 hours of live instruction, official PeopleCert eBook, mock exams, and exam voucher."
        ],
        "skillsTitle": "Skills Covered",
        "skills": [
            "Project Lifecycle Management",
            "Business Case Understanding",
            "Risk & Quality Control",
            "Structured Project Planning",
            "Role & Responsibility Definition",
            "Methodology Tailoring",
            "Progress Monitoring",
            "Change Control"
        ],
        "modesTitle": "Training Modes",
        "modesDescription": [
            "Available as Live Virtual Training and Corporate Group Training."
        ]
    };

    const corporateData = {
        "courseName": "Corporate PRINCE2 Training",
        "label": "Small & Large Teams",
        "buttonText": "Get a Quote",
        "description": "Empower your team with a standardized project management language. Our corporate PRINCE2 training is customizable to your industry and organizational needs, ensuring immediate ROI through improved project consistency."
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
                        outcomesTitle={`Learning Outcomes`}
                        outcomesFooter="After this course, you will be prepared for the PRINCE2 Foundation exam and ready to apply the framework to your projects."
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
                            'Team Members',
                            'Project Coordinators',
                            'Product Managers',
                            'Business Analysts',
                            'Consultants'
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
                        courseName="PRINCE2 Foundation"
                        certificateBenefits={certificateBenefits}
                        mockupName="KEVIN ANDERSON"
                        label="Official PeopleCert"
                        titlePrefix="Earn Your"
                        titleHighlight="Foundation"
                        titleSuffix="Professional Certificate"
                        issuerName="PeopleCert / AXELOS"
                        certificateType="PRINCE2® Foundation Certificate"
                        certifyText="This is to certify that"
                        requirementText="Has successfully completed the examination for"
                        signer1Role="CEO, PeopleCert"
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
                        courseName="Foundation"
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
                    ltpLabel="Trusted Academy"
                    downloadBtnText="Brochure PDF"
                    viewSchedulesBtnText="Check Dates"
                    freeAssessmentBtnText="Practice Quiz"
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

export default PRINCE2FoundationCertificationTraining;
