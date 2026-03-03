import React from "react";
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
    CheckCircle2,
    Star
} from "lucide-react";

const EntryCertificateInBusinessAnalysisECBACertificationTraining = () => {
    const highlights = [
        { text: "21 Hours of Live Interactive Online Training.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 21 CDUs and 21 PDUs with 21 PD Hours", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "24/7 Support and Learning Assistance", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Unlimited practice tests.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Get trained from industry experts.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Gain essential skills based on real-world case studies.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Individuals Benefits",
            "description": "Gain a strong foundation in business analysis, making them more competitive in the job market."
        },
        {
            "title": "Individuals Benefits",
            "description": "Develop critical thinking, problem-solving, and stakeholder communication skills, essential for effective business analysis."
        },
        {
            "title": "Individuals Benefits",
            "description": "Gain recognition for understanding of industry standards and best practices, which can improve career prospects and open doors to new job opportunities."
        },
        {
            "title": "Individuals Benefits",
            "description": "Boosts confidence by validating one's knowledge and expertise in business analysis, making individuals more competitive in the job market."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Enhances consistency in business analysis practices, leading to higher project success rates and better alignment with organizational goals."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve productivity, reduce risks, and enhance overall performance."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhances communication and collaboration across teams, resulting in more streamlined processes and effectivestakeholder management."
        },
        {
            "title": "Corporate Benefits",
            "description": "Attract top business analysis talent and boost employee morale by investing in their professional development through ECBA training."
        }
    ];

    const careerStats = {
        averageIncome: "$60,000 - $75,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Strong demand",
        growthLabel: "for entry-level BAs",
    };

    const attendeeList = [
        "Aspiring Business Analysts",
        "Entry-Level Business Analysts",
        "Junior Analysts",
        "Project Managers",
        "IT Transitioners",
        "Team Leads",
        "Business Analysis Knowledge Validators"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const companyList = [
        { "name": "Google", "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { "name": "Amazon", "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { "name": "Microsoft", "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { "name": "IBM", "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "Accenture", "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "Deloitte", "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" }
    ];

    const outcomeList = [
        "Master business analysis fundamentals by studying the BABOK® Guide.",
        "Learn stakeholder requirement gathering techniques like interviews, workshops, and surveys.",
        "Master the requirements life cycle, including elicitation, documentation, and prioritization.",
        "Conduct strategic analysis to assess business needs and create solutions.",
        "Gain expertise in evaluating solutions to deliver measurable value."
    ];

    const prerequisites = [
        "Basic business knowledge: Knowing how businesses work will help you understand the training.",
        "Analytical skills: Thinking clearly and solving problems are essential.",
        "Problem-solving: Enjoy finding solutions? You will do well in this field!"
    ];

    const certificationSteps = [
        {
            "title": "Attend training",
            "description": "Enroll with 21 Hours of interactive online training offered by Viovn.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Gain Essential Skills",
            "description": "By attending the live interactive training session gain essential knowledge and skills.",
            "color": "#F59E0B"
        },
        {
            "title": "Prepare and take the exam",
            "description": "Study the BABOK® Guide and review sample questions with expert guidance, and attempt the ECBA exam.",
            "color": "#10B981"
        },
        {
            "title": "Get Certified",
            "description": "By passing the exam, you will be certified as a ECBA Certified professional.",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "Business Analysis Knowledge",
            "topics": [
                "Business Analysis & the BA professional",
                "Techniques",
                "Underlying Competencies",
                "Business Analysis Key Concepts"
            ]
        },
        {
            "title": "Business Analysis Planning and Monitoring",
            "topics": [
                "How to plan business analysis approach",
                "How to plan business analysis governance",
                "How to plan engagement of stakeholders",
                "How to plan business analysis performance improvement",
                "How to plan business analysis information management"
            ]
        },
        {
            "title": "Elicitation and Collaboration",
            "topics": [
                "How to prepare for Elicitation",
                "How to communicate business analysis information",
                "How to conduct Elicitation",
                "How to manage stakeholder collaboration",
                "How to confirm Elicitation results"
            ]
        },
        {
            "title": "Requirements Life Cycle Management",
            "topics": [
                "How to trace requirements",
                "How to prioritize requirements",
                "How to maintain requirements",
                "How to approve requirements",
                "How to assess requirements changes"
            ]
        },
        {
            "title": "Requirements Analysis and Design Definition",
            "topics": [
                "How to specify and model requirements",
                "How to verify requirements",
                "How to define requirements architecture",
                "How to define design options",
                "How to analyze possible value and recommend a solution"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Foundational Business Analysis Knowledge",
            "description": "Understand the core concepts from the Business Analysis Body of Knowledge (BABOK Guide) which is essential for real-world applications."
        },
        {
            "title": "Practical Business Analysis Techniques",
            "description": "Develop requirement elicitation and documentation skills and become expertise in process modeling, data flow analysis, and decision analysis."
        },
        {
            "title": "Agile & Adaptive Business Analysis Skills",
            "description": "Understand how business analysis applies to Agile environments and also learn how to work in Scrum, SAFe, and Lean frameworks."
        },
        {
            "title": "Enhanced Communication & Documentation Skills",
            "description": "Learn to communicate effectively with stakeholders, developers, and testers and Improve documentation skills with use cases, user stories, and wireframes."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "ECBA Program FAQs",
            "items": [
                {
                    "question": "1. What is ECBA Certification?",
                    "answer": "The Entry Certificate in Business Analysis (ECBA) is an entry-level certification offered by the IIBA. It focuses on the basic knowledge in business analysis, including important concepts, methods, and skills."
                },
                {
                    "question": "2. What are the common benefits of ECBA Certification?",
                    "answer": "Boosts career opportunities, improves stakeholder communication, enhances credibility for aspiring analysts, and demonstrates commitment to the field."
                },
                {
                    "question": "3. What is the annual salary of ECBA certified professionals?",
                    "answer": "In the United States, it typically ranges from $60,000 to $70,000, while in India, it's approximately ₹600,000 - ₹750,000."
                },
                {
                    "question": "4. Is the ECBA Exam fee included in the ECBA Training fee?",
                    "answer": "The ECBA Exam Fee is not included in the training fee. You need to pay an exam fee to IIBA to get Certified."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "General FAQs",
            "items": [
                {
                    "question": "1. Is ECBA Certification globally recognized?",
                    "answer": "Yes, ECBA Certification is a globally recognized certification as it is offered by IIBA."
                },
                {
                    "question": "2. Is the ECBA Exam proctored?",
                    "answer": "Yes, the ECBA Certification Exam is an online proctored exam."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: '21 Hours',
            subtitle: 'Live Training',
            color: 'bg-accent text-primary',
        },
        {
            icon: BookOpen,
            title: '21 PDUs/CDUs',
            subtitle: 'Earn Credits',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Interactive',
            subtitle: 'Online Training',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: 'Practice',
            subtitle: 'Unlimited Tests',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Expert',
            subtitle: 'Trainers',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Lifetime',
            subtitle: 'Validity',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        { "name": "Wells Fargo", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg" },
        { "name": "Infosys", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "Bosch", "logo": "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
        { "name": "Capgemini", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "KPMG", "logo": "https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg" },
        { "name": "Accenture", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" }
    ];

    const courseTrainers = [
        {
            name: 'Expert Trainer',
            role: 'Lead Business Analyst',
            rating: '4.9',
            experience: '15+ Years',
            description: 'Our trainers are industry experts with extensive experience in business analysis and IIBA curriculum standards.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
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
            "description": "Viovn Offers ongoing assistance prior to, during, and after Training and includes study material exams, guidance for participants on certification, and career choices."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'ECBA',
            courseName: 'ECBA™ Certification Training',
            dateRange: 'Coming Soon',
            timeRange: '21 Hours Live',
            trainerName: 'Expert Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 18,999',
            discountedPrice: 'INR 12,999',
            discountPercentage: '32',
        },
    ];

    const certificateBenefits = [
        'Officially recognized ECBA micro-credential',
        'Valid for lifetime',
        'Earn PDUs and CDUs upon completion',
        'Demonstrated skills in business analysis fundamentals'
    ];

    const heroData = {
        "courseName": "Entry Certificate in Business Analysis (ECBA) Certification Training",
        "breadcrumbName": "Entry Certificate in Business Analysis (ECBA) Training",
        "rating": "5.0",
        "enrolledCount": "1800+ professionals trained",
        "subtitle": "Start your business analysis career with fundamental knowledge of BA principles and professional practices.",
        "benefits": [
            "Attend a 21-hour live session with BABOK® Guide v3-aligned learning.",
            "Earn a globally recognised certificate that includes 21 CDUs & 21 PDUs",
            "Master business analysis & stakeholder collaboration"
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "ECBA™ Training Course Overview",
        "description": [
            "The Entry Certificate in Business Analysis (ECBA®) offered by IIBA® (International Institute of Business Analysis) is for professionals wanting to enter the BA field. Our comprehensive ECBA course is suitable for entry-level business analysis careers that require fundamental knowledge of BA principles and professional practices.",
            "Understanding of the BABOK® Guide through ECBA certification demonstrates your proficiency in business analysis planning & monitoring as well as elicitation & collaboration and requirements life cycle management and other essential areas."
        ],
        "whatIsTitle": "What is ECBA?",
        "whatIsDescription": [
            "The Entry Certificate in Business Analysis (ECBA) is the first level of certification from the IIBA. It is designed for those who are new to the field of business analysis and those who want to enter it."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "21 Hours of live instructor-led training",
            "Comprehensive course material aligned with BABOK Guide",
            "21 PDUs and 21 CDUs",
            "Unlimited practice tests"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Opt Us",
        "label": "",
        "buttonText": "Corporate Group enquiry",
        "description": "Viovn delivers customized corporate training programs tailored to organizational objectives. Our ECBA training helps enterprises improve business analysis consistency and project success rates."
    };

    const courseMetadata = {
        shortName: 'ECBA',
        shortNameAlt: 'ECBA',
        fullName: 'Entry Certificate in Business Analysis Training',
        fullNameAlt: 'ECBA Certification Training',
        certificateName: 'ECBA Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your ECBA Training, you will be proficient in foundational business analysis practices and ready to start your career as a professional BA.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for ECBA Certification Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'ECBA',
            titleSuffix: 'Recognition',
            issuerName: 'Viovn',
            certificateType: 'Certificate of Achievement',
            certifyText: 'This is to certify that',
            requirementText: 'Has successfully fulfilled all requirements to be recognized as a professional',
            signer1Role: 'Certified Trainer',
            signer2Role: 'Executive Director',
        },
    };

    const pageCaptions = {
        tabs: {
            overview: 'Course overview',
            benefits: 'Benefits',
            prerequisites: 'Prerequisites',
            curriculum: 'Curriculum',
            faqs: 'FAQs',
        },
        hero: {
            referEarnText: 'Refer & Earn',
            enrolledSuffix: 'Enrolled',
            moneyBackText: '100% Money Back Guarantee',
            ltpLabel: 'Viovn Leading Training Provider',
            downloadBtnText: 'Download Brochure',
            viewSchedulesBtnText: 'View Schedules',
            freeAssessmentBtnText: 'Free Assessment',
        },
    };

    const tabs = [
        {
            id: 'overview',
            label: pageCaptions.tabs.overview,
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

                            <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                                {overviewContent.whatsIncludedTitle}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium leading-[1.7] text-[15px]">
                                {overviewContent.whatsIncludedDescription.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <CourseHighlights
                        courseName={heroData.courseName}
                        highlights={highlights}
                    />
                    <CourseCareerUpliftment
                        courseName={heroData.courseName}
                        stats={careerStats}
                        attendees={attendeeGroups}
                        companies={companyList}
                        outcomes={outcomeList}
                        outcomesTitle={sectionsLabels.careerUpliftment.outcomesTitle}
                        outcomesFooter={sectionsLabels.careerUpliftment.outcomesFooter}
                    />
                </div>
            ),
        },
        {
            id: 'benefits',
            label: pageCaptions.tabs.benefits,
            content: (
                <div className="space-y-6">
                    <CourseBenefits
                        courseName={heroData.courseName}
                        individualBenefits={individualBenefits}
                        corporateBenefits={corporateBenefits}
                    />
                    <CourseCommonAttendees
                        courseName={heroData.courseName}
                        attendees={attendeeList}
                    />
                </div>
            ),
        },
        {
            id: 'prerequisites',
            label: pageCaptions.tabs.prerequisites,
            content: (
                <div className="space-y-6">
                    <CoursePrerequisites
                        courseName={courseMetadata.shortNameAlt}
                        prerequisites={prerequisites}
                        subtitle={sectionsLabels.prerequisites.subtitle}
                        title={heroData.courseName}

                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName={courseMetadata.certificateName}
                        certificateBenefits={certificateBenefits}
                        mockupName={sectionsLabels.certificate.mockupName}
                        label={sectionsLabels.certificate.label}
                        titlePrefix={sectionsLabels.certificate.titlePrefix}
                        titleHighlight={sectionsLabels.certificate.titleHighlight}
                        titleSuffix={sectionsLabels.certificate.titleSuffix}
                        issuerName={sectionsLabels.certificate.issuerName}
                        certificateType={sectionsLabels.certificate.certificateType}
                        certifyText={sectionsLabels.certificate.certifyText}
                        requirementText={sectionsLabels.certificate.requirementText}
                        signer1Role={sectionsLabels.certificate.signer1Role}
                        signer2Role={sectionsLabels.certificate.signer2Role}
                    />
                </div>
            ),
        },
        {
            id: 'curriculum',
            label: pageCaptions.tabs.curriculum,
            content: (
                <div className="space-y-6">
                    <CourseCurriculum
                        courseName={courseMetadata.shortNameAlt}
                        modules={curriculumModules}
                    />
                </div>
            ),
        },
        {
            id: 'faqs',
            label: pageCaptions.tabs.faqs,
            content: (
                <CourseFAQs
                    courseName={courseMetadata.shortNameAlt}
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
                    referEarnText={pageCaptions.hero.referEarnText}
                    enrolledSuffix={pageCaptions.hero.enrolledSuffix}
                    moneyBackText={pageCaptions.hero.moneyBackText}
                    ltpLabel={pageCaptions.hero.ltpLabel}
                    downloadBtnText={pageCaptions.hero.downloadBtnText}
                    viewSchedulesBtnText={pageCaptions.hero.viewSchedulesBtnText}
                    freeAssessmentBtnText={pageCaptions.hero.freeAssessmentBtnText}
                />

                <CourseFeatures features={courseFeatures} />

                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
                        {/* Left Main Content */}
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

                        {/* Right Side Panel */}
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

export default EntryCertificateInBusinessAnalysisECBACertificationTraining;
