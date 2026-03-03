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
    CheckCircle2,
    Star
} from "lucide-react";

const BusinessCaseWritingTraining = () => {
    const highlights = [
        { text: "8 Hours of Instructor-based Live Training Sessions", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Achieve 8 PDUs and 8 CDUs", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Industry-Recognized Curriculum", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Interactive Education through Activities", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Access the Online Learning Resource Library", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Practice Writing Business Cases", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Enhanced Communication Skills",
            "description": "Develop the ability to clearly and persuasively present business cases to stakeholders."
        },
        {
            "title": "Improved Decision-Making",
            "description": "Gain skills to analyze problems and explore multiple solutions, leading to better-informed decisions."
        },
        {
            "title": "Risk Management",
            "description": "Learn techniques to identify, assess, and mitigate risks effectively."
        },
        {
            "title": "Career Advancement",
            "description": "Enhance your professional profile, making you more competitive in the job market."
        },
        {
            "title": "Project Management Proficiency",
            "description": "Acquire tools to structure and document the entire project lifecycle, from design to execution."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Better Project Outcomes",
            "description": "Well-structured business cases lead to successful project execution and completion."
        },
        {
            "title": "Informed Investments",
            "description": "Organizations can make data-driven decisions on project investments, ensuring resources are used efficiently."
        },
        {
            "title": "Risk Reduction",
            "description": "Systematic risk assessment and mitigation techniques minimize potential project failures."
        },
        {
            "title": "Stakeholder Confidence",
            "description": "Clear and compelling business cases help secure stakeholder buy-in and support."
        },
        {
            "title": "Increased Profitability",
            "description": "Effective business case writing can attract investments and funding, driving organizational growth and profitability."
        }
    ];

    const careerStats = {
        averageIncome: "$80,000 - $120,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Stable demand",
        growthLabel: "for skilled business practitioners",
    };

    const attendeeList = [
        "Project Managers",
        "Business Analysts",
        "Financial Planners",
        "Professionals involved in project planning",
        "Executives seeking to enhance decision-making",
        "Team Leaders"
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
        "Master the art of outlining and communicating a business case clearly",
        "Learn techniques to identify, analyze, and mitigate risks",
        "Gain ability to explore and evaluate all possible solutions to a problem",
        "Understand how to structure the entire project life cycle",
        "Develop skills to gather information and secure financial approvals",
        "Create compelling business reports and presentations"
    ];

    const prerequisites = [
        "No strict prerequisites are required to attend this course",
        "Basic knowledge of management is preferred",
        "Interest in improving business communication and decision-making skills"
    ];

    const certificationSteps = [
        {
            "title": "Registration",
            "description": "Register for the Business Case Writing training course training.",
            "color": "#3B82F6"
        },
        {
            "title": "Training",
            "description": "Attend 8 hours of live instructor-led training.",
            "color": "#F59E0B"
        },
        {
            "title": "Evaluation",
            "description": "Complete performance-based evaluation during the workshop.",
            "color": "#10B981"
        },
        {
            "title": "Certification",
            "description": "Obtain your official Business Case Writer certificate.",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "Module 1: Crafting Effective Business Cases",
            "topics": [
                "Introduction to Business Cases",
                "Writing Business Cases - fits into business models",
                "Business Case Principles",
                "Planning your Business Case - a summary",
                "Identifying stakeholders' needs",
                "Aligning business case with strategic requirements",
                "Strategies for developing a successful business case",
                "Identifying market potential and market ratings",
                "Gathering inputs including business capabilities and risks"
            ]
        },
        {
            "title": "Module 2: Mastering Business Case Development",
            "topics": [
                "Making up a persuasive argument for the business case",
                "Building a compelling case supported by data",
                "Writing Business Case Studies - Tips for effective presentation",
                "Using appropriate language - Consistency and credibility",
                "Typical Business Case Templates",
                "Business Case Checklists",
                "Why Business Cases fail - How to give just enough detail",
                "Business Case Writing session & creative discussion"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Effective Communication:",
            "description": "Master the art of outlining and communicating a business case clearly and persuasively to stakeholders."
        },
        {
            "title": "Risk Assessment:",
            "description": "Learn techniques to identify, analyze, and mitigate risks associated with projects, ensuring informed decision-making."
        },
        {
            "title": "Solution Exploration:",
            "description": "Gain the ability to explore and evaluate all possible solutions to a problem, enabling comprehensive and effective business strategies."
        },
        {
            "title": "Project Structuring:",
            "description": "Understand how to structure the entire project life cycle, including design, risk management, and documentation, for successful project execution."
        },
        {
            "title": "Financial Analysis:",
            "description": "Develop skills to gather information, secure financial approvals, and manage expenditures efficiently, contributing to better project planning and execution."
        },
        {
            "title": "Stakeholder Engagement:",
            "description": "Learn to create compelling business reports and presentations that can attract and convince stakeholders to invest in projects, driving organizational profitability."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "Program FAQs",
            "items": [
                {
                    "question": "1. What is the Business Case Writing certification?",
                    "answer": "This Business Case Writing certification course teaches you the essentials of writing a convincing Business Case. It is of utmost importance to anybody involved in the business sphere. The course not only enables you to write a great Business Case but also implicitly teaches you how to recognize a good case. It is of help for parties of both sides of the case. The course is properly structured for maximal learning and the online platform ensures that you can take up the course at your own pace."
                },
                {
                    "question": "2. What are the prerequisites to attend the Business Case Writing course?",
                    "answer": "There are no prerequisites to attend the Business Case Writing course however basic knowledge of management is preferred."
                },
                {
                    "question": "3. What are the benefits of the Business Case Writing certification?",
                    "answer": "The Business Case Writing certification has many individual as well as organizational benefits such as: The course helps in acquiring the knowledge of Business Case Writing principles.Recognition in the business management industry and great potential as a Business Case practitionerIt helps in enhancing the skills, continuous improvement, and power of decision making.It demonstrates your business management skills and efficient Business Case practices in front of the stakeholders that can generate profit for the organizationIt provides reliable and qualitative results.It brings out the productivity of staff with the formulation of a structured approach through Business Cases."
                },
                {
                    "question": "4. After the Business Case Writing training within how many days, do I need to take the exam?",
                    "answer": "There is no separate exam for the assessment of Business Case Writing. However, participants are evaluated based on their performance during the training and certain learning objectives."
                },
                {
                    "question": "5. What is the format of the Business Case Writing certification exam?",
                    "answer": "There is no set format of the Business Case Writing exam as participants are evaluated based on the learning objectives during the training."
                },
                {
                    "question": "6. How do I obtain a Business Case Writing certification?",
                    "answer": "To obtain the Business Case Writing exam, you must get enrolled with any recognized training provider and complete the online classes/workshop. After completion of the training, the trainer will evaluate your performance based on the learning objectives during the training and will grant you the certificate with a credential of professional Business Case Writer."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "General FAQs",
            "items": [
                {
                    "question": "1. Who should attend this course?",
                    "answer": "This course is ideal for project managers, business analysts, financial planners, and anyone involved in project planning and execution. It is also beneficial for professionals seeking to enhance their decision-making and risk-management skills."
                },
                {
                    "question": "2. Is the certificate valid for a lifetime?",
                    "answer": "Yes, the Business Case Writing certificate is valid for a lifetime and does not require renewal."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: '8 Hours',
            subtitle: 'Live Training',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            icon: BookOpen,
            title: '8 PDUs & 8 CDUs',
            subtitle: 'Earn Credits',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Interactive',
            subtitle: 'Activities',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: 'Practice',
            subtitle: 'Case Studies',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Industry',
            subtitle: 'Curriculum',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Online',
            subtitle: 'Library Access',
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
            role: 'Senior Business Consultant',
            rating: '4.9',
            experience: '15+ Years',
            description: 'Our trainers are industry experts with extensive experience in business case development and strategic project management.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhySimpliaxis = [
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
            "description": "Simpliaxis Offers ongoing assistance prior to, during, and after Training and includes study material exams, guidance for participants on certification, and career choices."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'BCW',
            courseName: 'Business Case Writing Training',
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Expert Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 9,999',
            discountPercentage: '37',
        },
    ];

    const certificateBenefits = [
        'Officially recognized Business Case Writer credential',
        'Valid for lifetime',
        'Digital copy of the certificate',
        'Demonstrated skills in business management practices'
    ];

    const heroData = {
        "courseName": "Business Case Writing Training",
        "breadcrumbName": "Business Case Writing (BCW) Course Training Online",
        "rating": "5.0",
        "enrolledCount": "1200+ learners trained",
        "subtitle": "Master the art of writing convincing and professional business cases to drive organizational growth.",
        "benefits": [
            "8 Hours Instructor-led training",
            "Gain 8 PDUs and 8 CDUs",
            "Official certificate of achievement"
        ],
        "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Business Case Writing Course Overview",
        "description": [
            "The Business Case Writing course by Simpliaxis is a highly valued professional training that equips participants with the skills to analyze, outline, write, and communicate a business case effectively. It focuses on risk assessment techniques to eliminate potential problems and helps participants explore all possible solutions to a problem for informed decision-making.",
            "This training is particularly beneficial for project managers, as it aids in structuring the entire project life cycle, including design, risk elimination, and project documentation."
        ],
        "whatIsTitle": "What is Business Case Writing?",
        "whatIsDescription": [
            "Business Case Writing is the process of documenting the justification for a project or task. It includes a description of the problem, the proposed solution, and a cost-benefit analysis to convince stakeholders of the project's value."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "8 Hours of live instructor-led training",
            "Comprehensive course material",
            "8 PDUs and 8 CDUs for career credits",
            "Post-training assistance and career guidance"
        ],
        "skillsTitle": "Skills You Will Gain",
        "skills": [
            "Business justification writing",
            "Risk assessment and mitigation",
            "Financial decision making",
            "Stakeholder communication",
            "Project life cycle structuring"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Us",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "Simpliaxis offers customized corporate training programs designed for enterprise teams. Led by our skilled and certified trainers, these programs improve employee retention and work satisfaction while empowering teams to meet industry benchmarks through effective business case practices."
    };

    const courseMetadata = {
        shortName: 'BCW',
        shortNameAlt: 'BCW',
        fullName: 'Business Case Writing Training',
        fullNameAlt: 'Business Case Writing Training',
        certificateName: 'Business Case Writer',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your Business Case Writing Training, you will be proficient in creating compelling business reports that attract stakeholders and drive organizational profitability.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for Business Case Writing Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Business Case',
            titleSuffix: 'Recognition',
            issuerName: 'Simpliaxis',
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
            ltpLabel: 'Simpliaxis Leading Training Provider',
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
                            <CourseWhySimpliaxis features={courseWhySimpliaxis} />
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

export default BusinessCaseWritingTraining;
