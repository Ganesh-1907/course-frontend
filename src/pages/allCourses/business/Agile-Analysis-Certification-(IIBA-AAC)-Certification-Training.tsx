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

const AgileAnalysisCertification = () => {
    const highlights = [
        { text: "Learn agile analysis, documentation techniques, and modeling practices.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Understand how to analyze and decompose business goals effectively.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Assess and select the most suitable agile approach for different scenarios.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Apply user story techniques to successfully execute iterations.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Develop strong agile business analysis skills aligned with industry best practices."
        },
        {
            "title": "Individual Benefits",
            "description": "Improve collaboration with cross-functional agile teams."
        },
        {
            "title": "Individual Benefits",
            "description": "Enhance your ability to deliver continuous value in agile environments."
        },
        {
            "title": "Individual Benefits",
            "description": "Gain professional recognition with the globally respected IIBA®-AAC certification."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Improve agile delivery outcomes through structured business analysis practices."
        },
        {
            "title": "Corporate Benefits",
            "description": "Enhance strategic alignment between business goals and product development."
        },
        {
            "title": "Corporate Benefits",
            "description": "Increase team collaboration and stakeholder engagement in agile projects."
        },
        {
            "title": "Corporate Benefits",
            "description": "Ensure continuous value delivery through effective backlog and release planning."
        }
    ];

    const careerStats = {
        averageIncome: "$95,000 - $135,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Rising demand",
        growthLabel: "for agile analysis experts",
    };

    const attendeeList = [
        "Business Analysts working in Agile environments",
        "Agile Practitioners",
        "Product Owners",
        "Scrum Masters",
        "Project Managers",
        "Professionals involved in Agile transformation initiatives"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const companyList = [
        { "name": "Accenture", "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "Capgemini", "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "Deloitte", "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "IBM", "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "TCS", "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const outcomeList = [
        "Apply agile analysis principles in real-world scenarios.",
        "Break down business goals into actionable deliverables.",
        "Create and manage product backlogs effectively.",
        "Deliver incremental value through agile frameworks.",
        "Evaluate and optimize agile solution outcomes."
    ];

    const prerequisites = [
        "Experience working in an Agile environment is recommended.",
        "Basic understanding of business analysis concepts.",
        "Familiarity with Agile methodologies such as Scrum or Kanban is beneficial."
    ];

    const certificationSteps = [
        {
            "title": "Attend Training",
            "description": "Complete structured IIBA®-AAC training with expert-led sessions.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Study Agile Analysis Domains",
            "description": "Review Agile Mindset, Strategy Horizon, Initiative Horizon, and Delivery Horizon concepts.",
            "color": "#F59E0B"
        },
        {
            "title": "Schedule the Exam",
            "description": "Register and schedule your IIBA®-AAC exam through the official IIBA portal.",
            "color": "#10B981"
        },
        {
            "title": "Pass the Exam",
            "description": "Successfully clear the exam to earn your Agile Analysis Certification (IIBA®-AAC).",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "Domain 1: An Agile Mindset",
            "topics": [
                "Agile Analysis Principles",
                "Introduction to Horizons"
            ]
        },
        {
            "title": "Domain 2: Strategy Horizon",
            "topics": [
                "Define Required Business Capabilities",
                "Develop Initial Product Backlog",
                "Release Planning",
                "Identify Capabilities and Scenarios",
                "Scope MVP/MMF",
                "Ongoing Strategy Alignment",
                "Maintain and Review Product Backlog"
            ]
        },
        {
            "title": "Domain 3: Initiative Horizon",
            "topics": [
                "Develop Initial Release Log",
                "Identify Solution Options",
                "Feature Identification and Elaboration",
                "Scope MVP/MMF and Product Increments",
                "Estimate and Prioritize Features",
                "Review Delivered Outcomes",
                "Plan Subsequent Releases"
            ]
        },
        {
            "title": "Domain 4: Delivery Horizon",
            "topics": [
                "Manage MVP Backlog",
                "Develop and Prioritize Features",
                "Release Planning and Execution",
                "Review and Update Solution Components",
                "Continuous Value Delivery Assessment"
            ]
        },
        {
            "title": "BABOK® Agile Business Analysis Techniques",
            "topics": [
                "Backlog Refinement",
                "Impact Mapping",
                "Behavior-Driven Development (BDD)",
                "Job Stories",
                "Minimum Viable Product (MVP)",
                "Kano Analysis",
                "Personas",
                "Portfolio Kanban",
                "Planning Workshops",
                "Product Roadmap",
                "Relative Estimation",
                "Reviews and Retrospectives",
                "Spikes",
                "Story Decomposition",
                "Story Mapping",
                "Value Modeling",
                "Visioning",
                "Value Stream Mapping"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Agile Mindset Mastery:",
            "description": "Develop a strong understanding of agile values, principles, and adaptive thinking."
        },
        {
            "title": "Strategic Analysis in Agile:",
            "description": "Align business goals with agile initiatives to ensure measurable value delivery."
        },
        {
            "title": "Backlog and Release Management:",
            "description": "Effectively manage product backlogs and plan releases using agile best practices."
        },
        {
            "title": "Value-Driven Delivery:",
            "description": "Ensure continuous value delivery through iteration planning and outcome evaluation."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "IIBA®-AAC FAQs",
            "items": [
                {
                    "question": "1. What is the AAC exam?",
                    "answer": "The Agile Analysis Certification (IIBA®-AAC) exam assesses your ability to apply agile business analysis principles in real-world scenarios."
                },
                {
                    "question": "2. Do I need prerequisite knowledge to participate in the exam?",
                    "answer": "Experience in agile environments is recommended, as the exam is competency-based and designed for professionals with practical agile experience."
                },
                {
                    "question": "3. What are the topics of the exam?",
                    "answer": "The exam covers Agile Mindset, Strategy Horizon, Initiative Horizon, and Delivery Horizon domains."
                },
                {
                    "question": "4. What is the duration of the exam?",
                    "answer": "The exam duration is 2 hours."
                },
                {
                    "question": "5. How do I schedule the exam?",
                    "answer": "After registration, you can schedule the exam through the official IIBA portal."
                },
                {
                    "question": "6. What is the question distribution?",
                    "answer": "Approximately 30% Agile Mindset, 10% Strategy Horizon, 25% Initiative Horizon, and 35% Delivery Horizon."
                },
                {
                    "question": "7. When will I receive my result?",
                    "answer": "You will receive your result immediately after completing the exam, followed by an official confirmation email from IIBA."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: 'Expert',
            subtitle: 'Instruction',
            color: 'bg-accent text-primary',
        },
        {
            icon: BookOpen,
            title: 'Domain',
            subtitle: 'Coverage',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Interactive',
            subtitle: 'Workshops',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: 'Exam',
            subtitle: 'Prep Support',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Case',
            subtitle: 'Studies',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Global',
            subtitle: 'Recognition',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        { "name": "Accenture", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "Capgemini", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "Deloitte", "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "IBM", "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "TCS", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const courseTrainers = [
        {
            name: 'Senior Agile Consultant',
            role: 'Lead Project Strategist',
            rating: '4.9',
            experience: '16+ Years',
            description: 'Our trainers are certified agile analysis experts with deep experience in driving digital transformation across global enterprises.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Global Recognition",
            "description": "Aligned with globally recognized agile and business analysis standards."
        },
        {
            "title": "Expert Trainers",
            "description": "Learn from certified agile practitioners with real-world experience."
        },
        {
            "title": "Flexible Learning",
            "description": "Choose from live online and corporate training formats."
        },
        {
            "title": "Lifetime Access",
            "description": "Access session materials and recordings for ongoing reference."
        },
        {
            "title": "Proven Track Record",
            "description": "Trusted by professionals and enterprises worldwide."
        },
        {
            "title": "End-to-End Assistance",
            "description": "Receive guidance before, during, and after certification."
        },
        {
            "title": "Interactive Training",
            "description": "Hands-on learning through real-world case discussions and agile exercises."
        },
        {
            "title": "Wide Range of Courses",
            "description": "Access multiple globally recognized certifications in Agile, Scrum, DevOps, and Business Analysis."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'IIBA-AAC',
            courseName: 'IIBA®-AAC Certification Training',
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Expert Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 28,999',
            discountedPrice: 'INR 22,999',
            discountPercentage: '21',
        },
    ];

    const certificateBenefits = [
        'Globally recognized IIBA®-AAC credential',
        'Demonstrated expertise in agile analysis',
        'Verification of professional competencies',
        'Pathway to advanced business analysis roles'
    ];

    const heroData = {
        "courseName": "Agile Analysis Certification (IIBA®-AAC) Certification Training",
        "breadcrumbName": "Agile Analysis Certification | IIBA-AAC Training",
        "rating": "5.0",
        "enrolledCount": "900+ professionals certified",
        "subtitle": "Master Agile Business Analysis and Deliver Continuous Value",
        "benefits": [
            "Comprehensive coverage of all four AAC domains.",
            "Real-world agile case studies and techniques.",
            "Structured exam preparation guidance.",
            "Expert-led interactive sessions."
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "IIBA®-AAC Certification Training Overview",
        "description": [
            "The Agile Analysis Certification (IIBA®-AAC) validates your ability to apply agile business analysis principles in dynamic environments.",
            "This training focuses on agile mindset, strategic alignment, initiative planning, and delivery optimization.",
            "Through structured learning and real-world techniques, participants gain practical expertise in delivering continuous value in agile teams."
        ],
        "whatIsTitle": "What is IIBA®-AAC?",
        "whatIsDescription": [
            "IIBA®-AAC is a globally recognized certification designed for professionals working in agile environments.",
            "It validates expertise in agile business analysis principles and techniques."
        ],
        "whatsIncludedTitle": "What’s Included?",
        "whatsIncludedDescription": [
            "Comprehensive domain coverage",
            "Agile technique workshops",
            "Real-world case studies",
            "Exam preparation support"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Viovn",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "Viovn provides customized agile analysis training programs tailored to organizational needs. Our expert-led sessions help enterprises strengthen agile business analysis capabilities, improve strategic alignment, and deliver measurable business value."
    };

    const courseMetadata = {
        shortName: 'IIBA-AAC',
        shortNameAlt: 'AAC',
        fullName: 'Agile Analysis Certification Training',
        fullNameAlt: 'IIBA® Agile Analysis Certification',
        certificateName: 'Agile Analysis Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the IIBA®-AAC Course?`,
            outcomesFooter: "After completing your IIBA®-AAC Training, you will be proficient in delivering continuous value in agile environments and driving strategic alignment.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for IIBA®-AAC Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Agile Analysis',
            titleSuffix: 'Certification',
            issuerName: 'IIBA',
            certificateType: 'Agile Analysis Certification',
            certifyText: 'This is to certify that',
            requirementText: 'Has successfully fulfilled all requirements to be recognized as a professional in',
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
                    categoryName="business"
                    categoryLink="/category/business"
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

export default AgileAnalysisCertification;
