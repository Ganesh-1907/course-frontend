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

const CertificationOfCapabilityInBusinessAnalysisTraining = () => {
    const highlights = [
        { text: "24 Hours of Online training", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 24 PDUs and 24 CDUs from IIBA on Certification", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Learn from IIBA® Approved Courseware", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Comprehensive support to clear CCBA exam", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Focuses on real-world business analysis practices and frameworks.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Access to a professional network.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Career Advancement",
            "description": "It is a globally recognized credential which opens doors to new roles, promotions, and leadership opportunities."
        },
        {
            "title": "Increased Earning Potential",
            "description": "Certified professionals earn higher salaries compared to non-certified professionals (USD 70,000 - $90,000 range)."
        },
        {
            "title": "Improved Skills",
            "description": "Expands your knowledge in business analysis concepts, tools, and techniques, making you more effective in your role."
        },
        {
            "title": "Professional Recognition",
            "description": "CCBA is a globally recognized credential that enhances your professional growth in the industry."
        },
        {
            "title": "Networking Opportunities",
            "description": "Access to network with other certified professionals, conferences, webinars, and IIBA events."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Improved Competency",
            "description": "Ensures high level of business analysis expertise, contributing to project success through better requirements management."
        },
        {
            "title": "Better Project Outcomes",
            "description": "Higher chance of delivering successful projects by applying industry methodologies and best practices."
        },
        {
            "title": "Process Efficiency",
            "description": "Streamline workflows, improve processes, and identify opportunities for operational improvements and cost savings."
        },
        {
            "title": "Higher ROI",
            "description": "Projects are more likely to meet deadlines, stay within budget, and fulfill organizational objectives."
        }
    ];

    const careerStats = {
        averageIncome: "$70,000 - $90,000",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Stable demand",
        growthLabel: "for certified BAs",
    };

    const attendeeList = [
        "Business Analysts",
        "Systems Analysts",
        "Product Owners",
        "Project Managers",
        "Consultants",
        "Process Improvement Specialists",
        "Functional Analysts",
        "Requirements Analysts",
        "Business Architects",
        "IT Managers"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const companyList = [
        { "name": "Accenture", "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "IBM", "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "Capgemini", "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "Deloitte", "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "TCS", "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const outcomeList = [
        "Learn core concepts of business analysis including BABOK Guide knowledge areas",
        "Understand project life cycle and business analysis integration",
        "Create visual representations of business processes and data flows",
        "Communicate effectively with stakeholders at all levels",
        "Build a strong foundation for CBAP® certification",
        "Develop a structured approach to gathering and managing requirements"
    ];

    const prerequisites = [
        "A minimum of 3,750 hours of business analysis work experience within the last 7 years",
        "Minimum of 900 hours in two of the six knowledge areas or 500 hours in four areas",
        "Agree to IIBA Code of Conduct",
        "Pass the CCBA exam"
    ];

    const certificationSteps = [
        {
            "title": "Training",
            "description": "Enroll in CCBA online training to gain the knowledge and skills of business analysis.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Application",
            "description": "Fill out the application form on IIBA Website including experience and professional development.",
            "color": "#F59E0B"
        },
        {
            "title": "Schedule",
            "description": "Once your application gets approved, schedule your CCBA exam.",
            "color": "#10B981"
        },
        {
            "title": "Certification",
            "description": "Achieve the passing score and earn the CCBA Certificate.",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "Module 1: Planning and Monitoring",
            "topics": [
                "Plan Business Analysis Approach",
                "Plan Stakeholder Engagement",
                "Plan Business Analysis Governance",
                "Plan Information Management",
                "Identify Performance Improvements"
            ]
        },
        {
            "title": "Module 2: Elicitation and Collaboration",
            "topics": [
                "Prepare for Elicitation",
                "Conduct Elicitation",
                "Confirm Elicitation Results",
                "Communicate BA Information",
                "Manage Stakeholder Collaboration"
            ]
        },
        {
            "title": "Module 3: Requirements Life Cycle",
            "topics": [
                "Trace and Maintain Requirements",
                "Prioritize Requirements",
                "Assess Requirements Changes",
                "Approve Requirements"
            ]
        },
        {
            "title": "Module 4: Strategy Analysis",
            "topics": [
                "Analyze Current State",
                "Define Future State",
                "Assess Risks",
                "Define Change Strategy"
            ]
        },
        {
            "title": "Module 5: Analysis and Design",
            "topics": [
                "Specify and Model Requirements",
                "Verify and Validate Requirements",
                "Define Requirements Architecture",
                "Define Design Options",
                "Analyze Potential Value"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Key Concepts",
            "description": "Understand fundamentals of business analysis concepts, principles, and best practices aligned with BABOK Guide."
        },
        {
            "title": "Planning & Monitoring",
            "description": "Learn how to plan and monitor BA activities, stakeholder engagement, and requirement management."
        },
        {
            "title": "Elicitation",
            "description": "Improve communication and collaboration for successful requirement confirmation and validation."
        },
        {
            "title": "Lifecycle Management",
            "description": "Handle and track requirements, prioritizing and evaluating changes to match business needs."
        },
        {
            "title": "Strategy Analysis",
            "description": "Identify business needs, suggest solutions, evaluate risks and value propositions."
        },
        {
            "title": "Solution Evaluation",
            "description": "Elevate effectiveness of solutions, spotting weaknesses and quantifying benefits."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "CCBA FAQs",
            "items": [
                {
                    "question": "1. What is CCBA Certification?",
                    "answer": "The CCBA® (Certification of Capability in Business Analysis) is a professional certification from the IIBA designed for business analysis practitioners to validate their capabilities."
                },
                {
                    "question": "2. What are the benefits?",
                    "answer": "Enhances credibility, opens new career opportunities, potential for higher salaries, and connects you with a global BA community."
                },
                {
                    "question": "3. Who should attend?",
                    "answer": "Business Analysts, Systems Analysts, Product Owners, Project Managers, and IT Managers with mid-level experience."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "Exam & Fee",
            "items": [
                {
                    "question": "1. What is the exam format?",
                    "answer": "180 minutes, 130 multiple-choice questions. Computer-based test taken online or at PSI test centers."
                },
                {
                    "question": "2. What is the cost?",
                    "answer": "Application fee is $145. Exam fee for members is $250, and $405 for non-members."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: '24 Hours',
            subtitle: 'Live Training',
            color: 'bg-accent text-primary',
        },
        {
            icon: BookOpen,
            title: '24 PDUs/CDUs',
            subtitle: 'Earn Credits',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'IIBA®',
            subtitle: 'Approved Content',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: 'Exam',
            subtitle: 'Support',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'BABOK®',
            subtitle: 'Aligned',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Lifetime',
            subtitle: 'Access',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        { "name": "Accenture", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "IBM", "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "Capgemini", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "Deloitte", "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "TCS", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const courseTrainers = [
        {
            name: 'Senior CCBA Trainer',
            role: 'Principal Business Analyst',
            rating: '4.9',
            experience: '18+ Years',
            description: 'CBAP and CCBA certified expert with vast experience in mentoring BAs for global certifications.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Global Recognition",
            "description": "CCBA® is globally recognized and valued across industries for validating BA expertise."
        },
        {
            "title": "Expert Trainer",
            "description": "Learn from certified instructors with extensive real-world business analysis experience."
        },
        {
            "title": "Proven Track Record",
            "description": "Trusted training provider with high success rates in IIBA certification preparation."
        },
        {
            "title": "End-to-End Support",
            "description": "Receive guidance on exam preparation and the IIBA application process."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'CCBA',
            courseName: 'CCBA® Certification Training',
            dateRange: 'Coming Soon',
            timeRange: '24 Hours Live',
            trainerName: 'Expert Consultant',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 25,999',
            discountedPrice: 'INR 19,999',
            discountPercentage: '23',
        },
    ];

    const certificateBenefits = [
        'Globally mapping to IIBA CCBA standard',
        'Valid for 3 years',
        'Demonstrates capability in BA knowledge areas',
        'Direct pathway to CBAP qualification'
    ];

    const heroData = {
        "courseName": "Certification of Capability in Business Analysis™ (CCBA®) Certification Training",
        "breadcrumbName": "CCBA® Certification Training | IIBA Business Analysis Course",
        "rating": "5.0",
        "enrolledCount": "1500+ professionals certified",
        "subtitle": "Advance Your Business Analysis Career with Globally Recognized CCBA® Certification",
        "benefits": [
            "24-hour live professional CCBA® training",
            "BABOK® Guide v3 aligned courseware",
            "Earn 24 PDUs and 24 CDUs",
            "Full exam prep support"
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "CCBA® Certification Course Overview",
        "description": [
            "The CCBA® certification is a professional credential from IIBA designed for experienced business analysts. It validates your expertise in identifying business needs, managing requirements, and delivering value-driven solutions.",
            "Aligned with BABOK® Guide v3, this course covers planning, elicitation, strategy analysis, and solution evaluation, providing participants with the confidence to pass the CCBA® exam."
        ],
        "whatIsTitle": "What is CCBA®?",
        "whatIsDescription": [
            "Certification of Capability in Business Analysis (CCBA) is for BA practitioners who want to be recognized for their skills in the foundational knowledge and application of business analysis."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "24 hours of training",
            "IIBA approved study materials",
            "Mock questions and exam strategy",
            "Professional network access"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Us",
        "label": "",
        "buttonText": "Corporate Enquiry",
        "description": "Viovn deliver customized corporate training programs tailored to organizational goals. Our CCBA training helps enterprises strengthen business analysis capabilities and improve project success rates."
    };

    const courseMetadata = {
        shortName: 'CCBA',
        shortNameAlt: 'CCBA',
        fullName: 'Certification of Capability in Business Analysis Training',
        fullNameAlt: 'CCBA Training',
        certificateName: 'CCBA Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of CCBA®?`,
            outcomesFooter: "After completing your CCBA Training, you will have a solid foundation for your BA career and be ready for the CBAP level.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for CCBA® Certification?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'CCBA®',
            titleSuffix: 'Certification',
            issuerName: 'IIBA',
            certificateType: 'Certificate of Capability',
            certifyText: 'This is to certify that',
            requirementText: 'Has fulfilled all requirements to be recognized as a',
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

export default CertificationOfCapabilityInBusinessAnalysisTraining;
