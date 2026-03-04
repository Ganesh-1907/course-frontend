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

const PRINCE2PractitionerCertificationTraining = () => {
    const highlights = [
        { "text": "16 Hours Of Live, Instructor-Led Sessions By Authorized Trainers" },
        { "text": "Course-Based On The Latest PRINCE2 7Th Edition" },
        { "text": "Earn 16 Professional Development Units (PDUs)" },
        { "text": "Peoplecert Official Ebook And Training Material" },
        { "text": "Exam Fee included with Course Cost For PRINCE2 Practitioner Certification" },
        { "text": "Doubt Clearing Sessions" },
        { "text": "24/7 Support And Learning Assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Manage Complicated Project: Planning, auditing, executing, and managing complex projects is introduced in the PRINCE2 Practitioner certification."
        },
        {
            "title": "Individual Benefits",
            "description": "Learn Fundamentals: With the PRINCE2 Practitioner certification, you will know the basics of project management and be able to take charge of any project on your own."
        },
        {
            "title": "Individual Benefits",
            "description": "Career Opportunities: This PRINCE2 Practitioner certification can help you find great job opportunities worldwide."
        },
        {
            "title": "Individual Benefits",
            "description": "Competitive Advantage: Holding the PRINCE2 practitioner certification can enhance your hiring prospects. The person can work on projects with more adaptability and flexibility."
        },
        {
            "title": "Individual Benefits",
            "description": "Recognize Project Needs: Understanding the need to reshape projects as per the organization’s requirements."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Efficient Project Delivery: Professionals who have been trained in PRINCE2 practitioner certification follow a proven method, which makes projects run more smoothly and increases the likelihood of meeting goals."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve Skills: With the organized method of PRINCE2 practitioner training, organizations can plan for better results."
        },
        {
            "title": "Corporate Benefits",
            "description": "Better Project Results: The company will be able to meet its goal of producing high-quality results with the help of PRINCE2 practitioner training."
        },
        {
            "title": "Corporate Benefits",
            "description": "Provide Flexibility: The PRINCE2 practitioner certification is designed to be flexible and can be tailored to meet the organization's specific needs."
        },
        {
            "title": "Corporate Benefits",
            "description": "Risk Identification and Mitigation: Identifying and mitigating risks in an organized manner reduces the likelihood of a project failing or experiencing a costly setback."
        }
    ];

    const careerStats = {
        averageIncome: "$95,000 - $155,000",
        incomeLabel: "per annum",
        employmentGrowth: "25%",
        growthLabel: "Senior Roles",
        globalDemand: "High demand for practitioners",
    };

    const attendees = [
        {
            "group": [
                "Project Managers looking to certify their practitioner skills.",
                "Team Leads responsible for project delivery using PRINCE2.",
                "Project Coordinators working on complex projects.",
                "Business Analysts and Consultants.",
                "Anyone aiming for senior project management positions."
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
        "Tailoring PRINCE2: Adapt the methodology to fit unique project environments and goals.",
        "Managing Project Risks: Identify, assess, and control project risks using PRINCE2 strategies.",
        "Quality Management: Ensure project deliverables meet defined quality criteria and expectations.",
        "Project Controls: Implement effective monitoring and reporting mechanisms for project progress.",
        "Change Management: Manage project changes efficiently while minimizing disruptions."
    ];

    const prerequisites = [
        "PRINCE2® Foundation Certification",
        "Project Management Professional (PMP®) Certification",
        "Certified Associate in Project Management (CAPM)® Certification",
        "IPMA Level A, B, C, or D (Certified Project Manager/Director/Associate)"
    ];

    const certificationSteps = [
        {
            "title": "Check Eligibility",
            "description": "Ensure you have passed the PRINCE2 Foundation exam or hold an equivalent certification like PMP or CAPM."
        },
        {
            "title": "Attend Training",
            "description": "Enroll in an accredited PRINCE2 Practitioner training course from an ATO of PeopleCert, like Viovn."
        },
        {
            "title": "Study and Prepare",
            "description": "Review the PRINCE2 manual with expert guidance and practice with sample questions and scenario-based exercises."
        },
        {
            "title": "Get Certified",
            "description": "Pass the 70-question objective test exam within 150 minutes to earn your PRINCE2 Practitioner certification."
        }
    ];

    const curriculumModules = [
        {
            "title": "PRINCE2 Principles",
            "topics": [
                "Review of core principles",
                "Applying principles to real-world scenarios"
            ]
        },
        {
            "title": "Apply and tailor relevant aspects of PRINCE2 themes",
            "topics": [
                "Business case theme",
                "Organization theme",
                "Quality theme",
                "Plans theme",
                "Risk theme",
                "Change theme",
                "Controlling progress"
            ]
        },
        {
            "title": "Apply (and tailor) relevant aspects of PRINCE2 processes",
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
            "title": "Reduce Risk",
            "description": "Getting the PRINCE2 Practitioner certification can help any project stay under control and lower its risks."
        },
        {
            "title": "Develop Basic Foundation",
            "description": "Our training for the PRINCE2 Practitioner certification helps to understand the principles behind PRINCE2 and apply them to any project."
        },
        {
            "title": "Leadership Skills",
            "description": "People who go through PRINCE2 Practitioner training can lead a project from beginning to end without any problems."
        },
        {
            "title": "On Time Delivery",
            "description": "The Viovn PRINCE2 Practitioner certification enables individuals to deliver products more effectively."
        },
        {
            "title": "Tailoring PRINCE2",
            "description": "Learning how to change the PRINCE2 method to fit the needs and limitations of different projects and groups."
        },
        {
            "title": "Develop Business Case",
            "description": "Learn how to make a strong business case that explains why the project is important and lists benefits, costs, and risks."
        },
        {
            "title": "Quality Management",
            "description": "Implementation of the PRINCE2 method to ensure that project outputs meet quality standards."
        },
        {
            "title": "Change Control",
            "description": "Understand how to handle and manage changes to the project's scope, timeline, or budget."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is PRINCE2 Practitioner Certification?",
                    "answer": "PRINCE2 is a structured project management system. The Practitioner course enables learners to tailor PRINCE2 procedures to diverse project settings."
                },
                {
                    "question": "How long does the PRINCE2 Practitioner certification last?",
                    "answer": "The PRINCE2 Practitioner certification must be renewed every three years."
                },
                {
                    "question": "What is the question pattern for the exam?",
                    "answer": "The exam is an objective test with 70 questions, lasting 150 minutes. Passing score is 60% (42/70)."
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
            role: 'Authorized Practitioner Trainer',
            rating: '4.9',
            experience: '18+ Years',
            description:
                'Ram specializes in the practical application of PRINCE2 in large-scale enterprise project environments.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Project Consultant',
            rating: '4.8',
            experience: '22+ Years',
            description:
                'Axel is a veteran consultant who has implemented PRINCE2 frameworks for Fortune 500 companies.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Get Global Recognition",
            "description": "The most reputable groups worldwide recognize our PRINCE2 Practitioner certification course, ensuring validity in all fields."
        },
        {
            "title": "Professionals Guidance",
            "description": "Learn from teachers who teach real-world business skills and give people hands-on experience through our Practitioner training."
        },
        {
            "title": "Flexible Learning",
            "description": "Our training includes a variety of ways to learn, such as classes, online training, and workplace training."
        },
        {
            "title": "Lifetime Access",
            "description": "You can watch session videos, read course materials, and use study tools for a whole year after you finish."
        },
        {
            "title": "End-to-End Assistance",
            "description": "Viovn offers ongoing support, including study materials, exam preparation, and certification guidance."
        },
        {
            "title": "Engaging Training",
            "description": "Our sessions are designed to be highly interactive, incorporating real-life examples and group participation."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'P2PR',
            courseName: 'PRINCE2 Practitioner',
            dateRange: 'Apr 20 - Apr 21, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 55,000',
            discountedPrice: 'INR 45,000',
            discountPercentage: '18',
        },
    ];

    const certificateBenefits = [
        'Practitioner Level Digital Badge',
        'Official PeopleCert Certificate',
        'Validity for 3 Years',
        'Senior Project Management Resume Value',
    ];

    const heroData = {
        "courseName": "PRINCE2® Practitioner Certification Training Course",
        "breadcrumbName": "PRINCE2 Practitioner",
        "rating": "5.0",
        "enrolledCount": "6,500+",
        "subtitle": "Advance your project management career by mastering the application and tailoring of the PRINCE2 methodology.",
        "benefits": [
            "16-hour live PRINCE2 Practitioner certification course!",
            "Earn 16 PDUs after completion of the training!",
            "Peoplecert official ebook and training material included!",
            "PRINCE2 Practitioner exam voucher included!",
            "Develop skills to ensure complex project success!"
        ],
        "mainImage": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "badgeImage": "/scrum-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "PRINCE2® Practitioner Certification",
        "description": [
            "The PRINCE2 Practitioner certification training is a specialized project management course designed for individuals seeking to demonstrate their proficiency in applying the PRINCE2 method to manage and resolve project issues.",
            "To obtain the PRINCE2 Practitioner certification, individuals must demonstrate their ability to apply the PRINCE2 method correctly in real-world scenarios. This course takes you beyond the basics and focuses on implementation.",
            "Alignment with the 7th Edition ensure you are up-to-date with current industry standards and project complexity management."
        ],
        "whatIsTitle": "Why Pursue Practitioner Level?",
        "whatIsDescription": [
            "PRINCE2 Practitioner demonstrates that you can apply PRINCE2 to manage projects and tailor them to specific needs. It is the gold standard for project management professionals worldwide."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "Live instructor-led sessions, Official PeopleCert eBook, 16 PDUs, and Exam Voucher."
        ],
        "skillsTitle": "Advanced Skills Covered",
        "skills": [
            "Business Justification",
            "Problem-solving Skills",
            "Quality Planning & Control",
            "Advanced Risk Management",
            "Project Initiation & Closing",
            "Controlling Project Stages",
            "Managing Product Delivery",
            "Methodology Tailoring"
        ],
        "modesTitle": "Training Formats",
        "modesDescription": [
            "Available as Live Virtual Training and Corporate Onboarding."
        ]
    };

    const corporateData = {
        "courseName": "Corporate Practitioner Training",
        "label": "Teams & Enterprises",
        "buttonText": "Corporate Enquiry",
        "description": "Equip your senior project managers with consistent, high-level skills. We provide globally tailored corporate training to build the knowledge gap required for high-stakes projects."
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
                        outcomesTitle={`Practitioner Learning Outcomes`}
                        outcomesFooter="Become a certified Practitioner and lead projects with confidence globally."
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
                            'Project Board Members',
                            'Quality Assurance Professionals',
                            'Operational Line Managers',
                            'Project Support Teams',
                            'Team Managers'
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
                        courseName="PRINCE2 Practitioner"
                        prerequisites={prerequisites}
                        subtitle="Eligibility Requirements"
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName="PRINCE2 Practitioner"
                        certificateBenefits={certificateBenefits}
                        mockupName="ROBERT WILLIAMS"
                        label="Official PeopleCert"
                        titlePrefix="Earn Your"
                        titleHighlight="Practitioner"
                        titleSuffix="Professional Certification"
                        issuerName="PeopleCert / AXELOS"
                        certificateType="PRINCE2® Practitioner Certificate"
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
                    courseName="PRINCE2 Practitioner"
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
                    moneyBackText="100% Satisfaction Guarantee"
                    ltpLabel="Trusted Partner"
                    downloadBtnText="Practitioner Brochure"
                    viewSchedulesBtnText="View Batches"
                    freeAssessmentBtnText="Self-Audit"
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

export default PRINCE2PractitionerCertificationTraining;
