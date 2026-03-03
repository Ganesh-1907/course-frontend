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

const DesignThinkingTraining = () => {
    const highlights = [
        { text: "21 hours of live interactive online training.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 21 CDUs, 21 PDUs, and 21 Professional Development (PD) Hours.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "24/7 support and continuous learning assistance.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Unlimited practice tests for exam preparation.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Training delivered by experienced industry experts.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Develop essential skills through real-world case studies.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Build a strong foundation in business analysis, making you more competitive in the job market."
        },
        {
            "title": "Individual Benefits",
            "description": "Develop critical thinking, problem-solving, and stakeholder communication skills essential for effective business analysis."
        },
        {
            "title": "Individual Benefits",
            "description": "Gain industry-recognized knowledge of standards and best practices to enhance career opportunities."
        },
        {
            "title": "Individual Benefits",
            "description": "Increase professional confidence by validating your knowledge and expertise in business analysis."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Ensure consistency in business analysis practices, leading to improved project success rates and alignment with organizational goals."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improve productivity, reduce project risks, and enhance overall organizational performance."
        },
        {
            "title": "Corporate Benefits",
            "description": "Strengthen communication and collaboration across teams, enabling effective stakeholder management."
        },
        {
            "title": "Corporate Benefits",
            "description": "Attract and retain top business analysis talent by investing in ECBA professional development."
        }
    ];

    const careerStats = {
        averageIncome: "$60,000 - $75,000",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Strong demand",
        growthLabel: "for certified professionals",
    };

    const attendeeList = [
        "Aspiring Business Analysts",
        "Entry-Level Business Analysts",
        "Recent Graduates",
        "Career Switchers into Business Analysis",
        "Project Coordinators",
        "IT Professionals transitioning to BA roles"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const companyList = [
        { "name": "Accenture", "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "Capgemini", "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "Deloitte", "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "TCS", "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
        { "name": "IBM", "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
    ];

    const outcomeList = [
        "Understand business analysis fundamentals aligned with the BABOK® Guide.",
        "Apply stakeholder requirement gathering techniques such as interviews, workshops, and surveys.",
        "Manage the requirements lifecycle including elicitation, documentation, prioritization, and approval.",
        "Conduct strategic analysis aligned with organizational objectives.",
        "Evaluate solutions to ensure measurable business value and stakeholder satisfaction."
    ];

    const prerequisites = [
        "No mandatory prerequisites.",
        "Basic understanding of business concepts is beneficial.",
        "Strong analytical thinking and problem-solving mindset will help learners succeed."
    ];

    const certificationSteps = [
        {
            "title": "Attend Training",
            "description": "Enroll in the 21-hour live interactive training program offered by Viovn.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Develop Core Skills",
            "description": "Gain essential knowledge through structured learning and practical exercises.",
            "color": "#F59E0B"
        },
        {
            "title": "Prepare and Take the Exam",
            "description": "Study the official guide, review practice questions, and schedule the exam.",
            "color": "#10B981"
        },
        {
            "title": "Get Certified",
            "description": "Pass the exam to earn your globally recognized certification.",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "Business Analysis Foundations",
            "topics": [
                "Role of the Business Analyst",
                "Business Analysis Techniques",
                "Underlying Competencies",
                "Business Analysis Key Concepts"
            ]
        },
        {
            "title": "Business Analysis Planning and Monitoring",
            "topics": [
                "Planning the Business Analysis Approach",
                "Planning Business Analysis Governance",
                "Stakeholder Engagement Planning",
                "Performance Improvement Planning",
                "Information Management Planning"
            ]
        },
        {
            "title": "Elicitation and Collaboration",
            "topics": [
                "Preparing for Elicitation",
                "Conducting Elicitation",
                "Confirming Elicitation Results",
                "Communicating Business Analysis Information",
                "Managing Stakeholder Collaboration"
            ]
        },
        {
            "title": "Requirements Life Cycle Management",
            "topics": [
                "Tracing Requirements",
                "Prioritizing Requirements",
                "Maintaining Requirements",
                "Approving Requirements",
                "Assessing Requirement Changes"
            ]
        },
        {
            "title": "Requirements Analysis and Design Definition",
            "topics": [
                "Specifying and Modeling Requirements",
                "Verifying Requirements",
                "Defining Requirements Architecture",
                "Defining Design Options",
                "Analyzing Value and Recommending Solutions"
            ]
        },
        {
            "title": "Industry Knowledge Areas Overview",
            "topics": [
                "Business Analysis Planning and Monitoring",
                "Elicitation and Collaboration",
                "Requirements Life Cycle Management",
                "Requirements Analysis and Design Definition"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Foundational Knowledge:",
            "description": "Understand the core concepts of the industry standards and apply them in real-world scenarios."
        },
        {
            "title": "Practical Techniques:",
            "description": "Develop requirement elicitation, documentation, modeling, and decision analysis skills."
        },
        {
            "title": "Agile and Adaptive Skills:",
            "description": "Understand how business analysis functions within Agile, Scrum, SAFe®, and Lean environments."
        },
        {
            "title": "Enhanced Communication:",
            "description": "Improve stakeholder communication and develop professional documentation such as use cases and user stories."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General FAQs",
            "items": [
                {
                    "question": "What is this certification training?",
                    "answer": "This training is designed for individuals beginning their careers in business analysis. It validates foundational knowledge of business analysis principles and practices."
                },
                {
                    "question": "Who should attend this training?",
                    "answer": "Recent graduates, career switchers, or aspiring business analysts who want to build a strong foundation in the field."
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
            title: '24/7',
            subtitle: 'Support',
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
            name: 'Industry Expert',
            role: 'Lead Project Consultant',
            rating: '4.9',
            experience: '15+ Years',
            description: 'Our trainers are certified professionals with extensive real-world experience in their respective domains.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Global Recognition",
            "description": "Our courses align with internationally recognized certification standards accepted across industries."
        },
        {
            "title": "Expert Trainers",
            "description": "Learn from certified professionals with extensive real-world experience in their fields."
        },
        {
            "title": "Flexible Learning",
            "description": "Choose from live online and corporate training options tailored to your schedule."
        },
        {
            "title": "Lifetime Access",
            "description": "Access session recordings and study materials for continued reference."
        },
        {
            "title": "Proven Track Record",
            "description": "Trusted by professionals and organizations worldwide for delivering measurable results."
        },
        {
            "title": "End-to-End Assistance",
            "description": "Receive support before, during, and after training, including exam guidance."
        },
        {
            "title": "Interactive Training",
            "description": "Participate in hands-on exercises, real-world case studies, and collaborative discussions."
        },
        {
            "title": "Wide Range of Courses",
            "description": "Explore globally recognized certifications across business and technology domains."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'DT',
            courseName: 'Design Thinking Training',
            dateRange: 'Coming Soon',
            timeRange: '21 Hours Live',
            trainerName: 'Expert Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 10,999',
            discountPercentage: '31',
        },
    ];

    const certificateBenefits = [
        'Globally recognized achievement certificate',
        'Valid for lifetime',
        'Demonstrates proficiency in core principles',
        'Builds credibility with employers'
    ];

    const heroData = {
        "courseName": "Design Thinking Training",
        "breadcrumbName": "Design Thinking Training",
        "rating": "5.0",
        "enrolledCount": "1200+ professionals trained",
        "subtitle": "Master the principles of Design Thinking to drive innovation and solve complex business problems effectively.",
        "benefits": [
            "21-hour live instructor-led training session.",
            "Earn 21 CDUs and 21 PDUs upon completion.",
            "Comprehensive exam and practical project support.",
            "Hands-on real-world case studies and workshops.",
            "Expert guidance from industry-leading practitioners."
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Design Thinking Training Overview",
        "description": [
            "Design Thinking is a powerful methodology for innovation and problem-solving that focuses on understanding user needs and creating human-centric solutions.",
            "This training program provides a deep dive into the phases of Design Thinking, including empathy, definition, ideation, prototyping, and testing.",
            "Viovn delivers structured, hands-on training with expert instructors and real-world case studies to ensure you can apply Design Thinking principles immediately in your work.",
            "Whether you are a designer, product manager, or business leader, this course provides the tools needed to foster innovation and drive business success."
        ],
        "whatIsTitle": "What is Design Thinking?",
        "whatIsDescription": [
            "Design Thinking is a non-linear, iterative process that teams use to understand users, challenge assumptions, redefine problems and create innovative solutions to prototype and test.",
            "It is highly effective in tackling ill-defined or unknown problems by re-framing the problem in human-centric ways."
        ],
        "whatsIncludedTitle": "What’s Included in This Course?",
        "whatsIncludedDescription": [
            "21 hours of live instructor-led training",
            "Hands-on workshops and exercises",
            "Real-world case studies",
            "Expert guidance and 24/7 support",
            "Course completion certificate"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Viovn",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "Viovn delivers customized corporate training solutions aligned with organizational goals. Our Design Thinking training enhances innovation capabilities, improves team productivity, and ensures human-centric problem solving. With experienced trainers and practical methodologies, we help organizations build skilled professionals ready to drive measurable results."
    };

    const courseMetadata = {
        shortName: 'DT',
        shortNameAlt: 'Design Thinking',
        fullName: 'Design Thinking Training',
        fullNameAlt: 'Design Thinking Certification Training',
        certificateName: 'Design Thinking Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of this Course?`,
            outcomesFooter: "After completing your Design Thinking Training, you will be equipped to lead innovation initiatives and solve complex problems with a user-focused approach.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for Design Thinking Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Achievement',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Design Thinking',
            titleSuffix: 'Recognition',
            issuerName: 'Viovn',
            certificateType: 'Certificate of Achievement',
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

export default DesignThinkingTraining;
