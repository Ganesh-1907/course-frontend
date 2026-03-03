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

const PRINCE2AgilePractitionerCertificationTraining = () => {
    const highlights = [
        { "text": "16 hours of live instructor-led sessions by authorized trainers" },
        { "text": "Course based on the latest PRINCE2 7th Edition framework" },
        { "text": "Earn 16 Professional Development Units (PDUs)" },
        { "text": "Official PeopleCert eBook and training materials included" },
        { "text": "Exam fee included in the course cost for PRINCE2 Practitioner certification" },
        { "text": "Dedicated doubt-clearing sessions" },
        { "text": "24/7 learning support and assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Gain advanced project management knowledge through the globally recognized PRINCE2 Practitioner certification."
        },
        {
            "title": "Individual Benefits",
            "description": "Manage Complex Projects: The PRINCE2 Practitioner certification enables professionals to plan, audit, execute, and manage complex projects effectively."
        },
        {
            "title": "Individual Benefits",
            "description": "Strengthen leadership and decision-making skills required for successful project management."
        },
        {
            "title": "Individual Benefits",
            "description": "Learn Fundamentals: The PRINCE2 Practitioner certification strengthens your understanding of project management principles and prepares you to manage projects independently."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve your ability to tailor project management frameworks according to organizational requirements."
        },
        {
            "title": "Individual Benefits",
            "description": "Career Opportunities: PRINCE2 Practitioner certification enhances your chances of securing global project management roles."
        },
        {
            "title": "Individual Benefits",
            "description": "Build strong project planning, monitoring, and execution skills."
        },
        {
            "title": "Individual Benefits",
            "description": "Competitive Advantage: Holding a PRINCE2 Practitioner certification improves employability and allows professionals to work with greater flexibility in projects."
        },
        {
            "title": "Individual Benefits",
            "description": "Recognize Project Needs: Learn how to tailor projects according to organizational objectives and requirements."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Establish standardized project management practices across the organization."
        },
        {
            "title": "Corporate Benefits",
            "description": "Efficient Project Delivery: PRINCE2 Practitioner-trained professionals follow a proven project management approach, improving project efficiency and goal achievement."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve collaboration and transparency within project teams."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve Skills: Organizations can plan and execute projects more effectively using the structured PRINCE2 methodology."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhance productivity and ensure projects meet business objectives."
        },
        {
            "title": "Corporate Benefits",
            "description": "Better Project Results: PRINCE2 Practitioner training helps organizations deliver high-quality project outcomes consistently."
        },
        {
            "title": "Corporate Benefits",
            "description": "Increase adaptability to changing business requirements."
        },
        {
            "title": "Corporate Benefits",
            "description": "Provide Flexibility: The PRINCE2 methodology can be tailored to suit different industries and organizational needs."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve project governance and monitoring mechanisms."
        },
        {
            "title": "Corporate Benefits",
            "description": "Risk Identification and Mitigation: A structured risk management approach helps reduce project failures and unexpected setbacks."
        }
    ];

    const careerStats = {
        averageIncome: "$95,000 - $160,000",
        incomeLabel: "per annum",
        employmentGrowth: "23%",
        growthLabel: "Senior Practitioner roles",
        globalDemand: "High demand worldwide",
    };

    const attendees = [
        {
            "group": [
                "Tailor PRINCE2 to fit different project environments and organizational goals.",
                "Identify, assess, and manage project risks using PRINCE2 risk management strategies.",
                "Ensure project deliverables meet defined quality standards and stakeholder expectations.",
                "Implement effective monitoring and reporting mechanisms to track project progress.",
                "Manage project changes effectively while minimizing disruptions to project outcomes."
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
        "Learn how to tailor PRINCE2 to suit different project environments and objectives.",
        "Develop the ability to identify, assess, and manage project risks effectively.",
        "Ensure project deliverables meet defined quality standards.",
        "Implement effective monitoring and reporting mechanisms for project progress.",
        "Manage project changes efficiently while minimizing disruptions."
    ];

    const prerequisites = [
        "PRINCE2 Foundation Certification",
        "Project Management Fundamentals Training",
        "Project Management Professional (PMP®) Certification",
        "Certified Associate in Project Management (CAPM®) Certification",
        "IPMA Level A, B, C, or D (Certified Project Manager/Associate)"
    ];

    const certificationSteps = [
        {
            "title": "Check Eligibility",
            "description": "Ensure that you have passed the PRINCE2 Foundation exam or hold an equivalent certification."
        },
        {
            "title": "Attend Training",
            "description": "Enroll in an accredited PRINCE2 Practitioner training course from a PeopleCert Authorized Training Organization such as Simpliaxis."
        },
        {
            "title": "Study and Prepare",
            "description": "Review the PRINCE2 manual thoroughly and practice with scenario-based exercises and sample questions."
        },
        {
            "title": "Get Certified",
            "description": "Pass the PRINCE2 Practitioner exam consisting of objective testing questions within 150 minutes."
        }
    ];

    const curriculumModules = [
        {
            "title": "PRINCE2 Principles Application",
            "topics": [
                "Applying principles in context",
                "Tailoring projects for environment compliance"
            ]
        },
        {
            "title": "Themes Customization",
            "topics": [
                "Business Case & Organization",
                "Quality, Plans, and Risks",
                "Change and Progress controls"
            ]
        },
        {
            "title": "Process Implementation",
            "topics": [
                "Managing Stage Boundaries",
                "Controlling a Stage",
                "Managing Product Delivery",
                "Closing a Project"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Methodology Tailoring",
            "description": "Learn how to adapt the PRINCE2 framework to suit any project size and complexity."
        },
        {
            "title": "Risk Management",
            "description": "Master advanced risk identification and mitigation strategies."
        },
        {
            "title": "Decision Support",
            "description": "Enhance your ability to make data-driven decisions that align with business objectives."
        },
        {
            "title": "Stakeholder Trust",
            "description": "Build confidence among stakeholders through transparent and effective reporting."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is PRINCE2 Agile Practitioner?",
                    "answer": "PRINCE2 Agile Practitioner blends the flexibility of agile with the clearly defined framework of PRINCE2. It is designed for those who already hold a PRINCE2 or PRINCE2 Agile Foundation certification."
                },
                {
                    "question": "How long is the certification valid?",
                    "answer": "The PRINCE2 Practitioner certification remains valid for three years, after which it must be renewed."
                },
                {
                    "question": "Does the course fee include the exam?",
                    "answer": "Yes, our course fee includes the official PeopleCert exam voucher."
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
                'Ram specializes in advanced Agile techniques and the integration of PRINCE2 for large enterprise transformations.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Project Consultant',
            rating: '4.8',
            experience: '22+ Years',
            description:
                'Axel is a global project consultant with expertise in tailoring project management methodologies for diverse industries.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhySimpliaxis = [
        {
            "title": "Authorized Training Partner",
            "description": "Simpliaxis is an authorized training organization, ensuring you receive the most official and updated curriculum."
        },
        {
            "title": "High Success Rate",
            "description": "Our intensive 2-day practitioner bootcamp is designed to maximize your chances of passing the exam on your first attempt."
        },
        {
            "title": "Real-World Experience",
            "description": "We use scenario-based learning techniques that go beyond theory to prepare you for real-world project challenges."
        },
        {
            "title": "Continuous Support",
            "description": "Get access to exclusive study groups and trainer support until you achieve your certification."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'P2A-PR',
            courseName: 'PRINCE2 Agile Practitioner',
            dateRange: 'Jun 10 - Jun 11, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 55,000',
            discountedPrice: 'INR 48,000',
            discountPercentage: '12',
        },
    ];

    const certificateBenefits = [
        'Practitioner Level Digital Badge',
        'Official PeopleCert Certificate',
        'Validity for 3 Years',
        'Agile Leadership Credentials',
    ];

    const heroData = {
        "courseName": "PRINCE2 Agile® Practitioner Certification Training",
        "breadcrumbName": "PRINCE2 Agile Practitioner",
        "rating": "4.9",
        "enrolledCount": "5,800+",
        "subtitle": "Advance your career by mastering the application of Agile concepts within the trusted PRINCE2 methodology.",
        "benefits": [
            "16 hours of intensive live online training!",
            "Official PeopleCert Agile Practitioner voucher included!",
            "Case studies and scenario-based exam prep!",
            "Earn 16 PDUs for your certification maintenance!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PRINCE2 Agile® Practitioner Certification",
        "description": [
            "PRINCE2 Agile® Practitioner is the perfect solution for those who want to combine the governance of PRINCE2 with the flexibility and responsiveness of agile. This course focuses on the practical application and tailoring of the methodology to specific project scenarios.",
            "The training is designed for professionals who already have a basic understanding of PRINCE2 and want to prove they can implement agile concepts successfully in a structured environment.",
            "Join Simpliaxis for an intensive 2-day session led by industry experts who bring real-world experience to help you bridge the gap between theory and practice."
        ],
        "whatIsTitle": "Why Agile Practitioner?",
        "whatIsDescription": [
            "In today's fast-paced business environment, organizations need leaders who can maintain control while delivering value quickly. This certification validates your ability to do exactly that."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "Live Sessions, Practitioner Exam Voucher, Digital Courseware, and 16 PDUs."
        ],
        "skillsTitle": "Core Skills Covered",
        "skills": [
            "Agile Governance & Control",
            "Flexible Project Delivery",
            "Requirement Prioritization",
            "Rich Communication & Feedback",
            "Scrum & Kanban Integration",
            "Methodology Tailoring",
            "Leadership in Agile",
            "Change Management"
        ],
        "modesTitle": "Learning Formats",
        "modesDescription": [
            "Live Virtual Training and Corporate Solutions."
        ]
    };

    const corporateData = {
        "courseName": "PRINCE2 Agile Enterprise Training",
        "label": "Corporate Success",
        "buttonText": "Check Custom Pricing",
        "description": "Empower your senior project teams with standardized Agile delivery. We offer customized curriculum and schedules to meet your organization's specific goals."
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
                        outcomesTitle={`Practitioner Achievements`}
                        outcomesFooter="Become a high-demand practitioner in the global agile landscape."
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
                            'Senior Project Managers',
                            'Program Managers',
                            'Scrum Masters',
                            'Operation Leads',
                            'Team Leads',
                            'Agile Consultants'
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
                        courseName="PRINCE2 Agile Practitioner"
                        prerequisites={prerequisites}
                        subtitle="Eligibility Paths"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="PRINCE2 Agile Practitioner"
                        certificateBenefits={certificateBenefits}
                        mockupName="ALEXANDER FORREST"
                        label="Official PeopleCert"
                        titlePrefix="Earn Your"
                        titleHighlight="Practitioner"
                        titleSuffix="Agile Professional Certification"
                        issuerName="PeopleCert / AXELOS"
                        certificateType="PRINCE2 Agile® Practitioner Certificate"
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
                        courseName="Practitioner"
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
                    enrolledSuffix="Practitioners"
                    moneyBackText="100% Satisfaction Guarantee"
                    ltpLabel="Authorized Partner"
                    downloadBtnText="Agile Brochure"
                    viewSchedulesBtnText="Check Dates"
                    freeAssessmentBtnText="Agile Readiness"
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

export default PRINCE2AgilePractitionerCertificationTraining;
