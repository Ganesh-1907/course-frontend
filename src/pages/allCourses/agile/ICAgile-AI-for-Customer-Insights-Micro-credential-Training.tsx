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
    CheckCircle,
    BookOpen,
    Network,
    CreditCard,
    FileText,
    Briefcase,
    Star
} from "lucide-react";

const ICAgileAIforCustomerInsightsMicroCredentialTraining = () => {
    const highlights = [
        { text: "3-hours ICAgile authorized AI for Customer Insights micro-credential training", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Earn 3 PDUs upon completion of the course", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Instructor-led sessions delivered by experienced AI and Agile practitioners", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Practical focus on applying AI to real customer insight use cases", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Hands-on exercises using customer data, patterns, and behavior analysis", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Coverage of AI concepts relevant to marketing, CX, and product teams", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Emphasis on ethical and responsible use of AI in customer analytics", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Interactive learning with discussions, activities, and group collaboration", icon: <CheckCircle className="w-5 h-5" /> },
        { text: "Globally recognized ICAgile AI for Customer Insights micro-credential", icon: <CheckCircle className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: "Stronger Data-Driven Decision Skills",
            description: "AI for Customer Insights training helps professionals interpret customer data accurately, enabling smarter decisions backed by predictive and behavioral insights rather than assumptions."
        },
        {
            title: "Career Relevance in AI-Enabled Roles",
            description: "Earning the AI for Customer Insights Micro credential improves employability for roles in product, marketing, CX, and analytics, where AI adoption is growing rapidly."
        },
        {
            title: "Improved Customer Understanding",
            description: "Participants learn how AI uncovers patterns in customer behavior, sentiment, and preferences, supporting better personalization and engagement strategies."
        },
        {
            title: "Practical Application of AI Concepts",
            description: "The training focuses on real-world use cases, allowing individuals to apply AI for customer insights without requiring advanced coding or data science expertise."
        },
        {
            title: "Enhanced Cross-Functional Collaboration",
            description: "Professionals gain the ability to communicate AI-driven insights clearly, improving collaboration with data teams, product owners, and business stakeholders."
        },
        {
            title: "Globally Recognized ICAgile Credential",
            description: "The ICAgile AI for Customer Insights Micro-credential validates practical AI knowledge and demonstrates commitment to continuous learning in a competitive job market."
        }
    ];

    const corporateBenefits = [
        {
            title: "Better Customer-Centric Strategies",
            description: "Organizations benefit from teams trained to use AI for customer insights, enabling informed decisions that improve customer experience and retention."
        },
        {
            title: "Faster and Smarter Business Decisions",
            description: "AI-enabled insights reduce reliance on manual analysis, helping leadership respond quickly to market shifts and customer needs."
        },
        {
            title: "Improved ROI on Data Investments",
            description: "The training ensures teams can effectively use existing customer data platforms and AI tools, maximizing the value of data infrastructure."
        },
        {
            title: "Consistent Use of AI Across Teams",
            description: "ICAgile AI for Customer Insights training builds a shared understanding of AI concepts, promoting alignment across marketing, product, and CX functions."
        },
        {
            title: "Reduced Risk in AI Adoption",
            description: "Employees learn ethical, responsible, and transparent use of AI, helping organizations avoid misuse, bias, and compliance issues."
        },
        {
            title: "Stronger Competitive Advantage",
            description: "Businesses with AI-skilled teams gain deeper customer insights, enabling personalization, innovation, and differentiation in crowded markets."
        }
    ];

    const careerStats = {
        averageIncome: "$100k-145k",
        incomeLabel: "per annum",
        employmentGrowth: "48%",
        growthLabel: "(AI & Data Insight Roles)",
    };

    const attendees = [
        {
            group: [
                "Data Analysts",
                "Marketing Professionals",
                "Product Managers",
                "Customer Experience Specialists",
            ],
        },
        { group: ["Business Leaders", "Strategic Planners"] },
    ];

    const companies = [
        {
            name: 'Amazon',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
            name: 'Cognizant',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
        },
        {
            name: 'IBM',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Accenture',
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        },
        {
            name: 'Wipro',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg',
        },
        {
            name: 'Eurofins',
            url: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg',
        },
        {
            name: 'JPMorgan',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg',
        },
    ];

    const outcomes = [
        "Understand the ways AI supports customer insight generation",
        "Identify opportunities to apply AI to customer data",
        "Interpret AI-driven insights for business and product decisions",
        "Collaborate effectively with data and technical teams",
        "Apply ethical considerations when using AI in customer contexts",
        "Improve customer-centric strategies using AI-informed insights"
    ];

    const prerequisites = [
        "A fundamental understanding of data concepts such as customer analytics.",
        "Familiarity with AI fundamentals, including machine learning concepts.",
        "Willingness to learn tools used for data visualization and pattern recognition."
    ];

    const certificationSteps = [
        {
            title: "Join the Course",
            description: "Enroll in an ICAgile-authorized AI for Customer Insights micro-credential training program offered by Simpliaxis.",
            color: "#3B82F6"
        },
        {
            title: "Develop Skills",
            description: "Acquire practical skills to apply AI techniques for analyzing customer data and behavior.",
            color: "#F59E0B"
        },
        {
            title: "Complete Training",
            description: "Participate in learning activities and complete required assessments to demonstrate understanding.",
            color: "#10B981"
        },
        {
            title: "Receive the Certification",
            description: "Earn the ICAgile AI for Customer Insights micro-credential upon successful course completion.",
            color: "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            title: "Introduction: Why AI for Customer Insights",
            topics: [
                "The Role of AI in Modern Customer Understanding",
                "Opportunities and Challenges in AI-assisted Insight Generation"
            ]
        },
        {
            title: "Customer Profiling: Opportunities and Risks",
            topics: [
                "Techniques for Building AI-generated Profiles",
                "Bias, Privacy, and Ethical Considerations in Profiling"
            ]
        },
        {
            title: "Uncovering Behaviours with AI Techniques",
            topics: [
                "Identifying Patterns and Behavioural Signals",
                "Validating Relevance and Segmenting Audiences"
            ]
        },
        {
            title: "Designing and Simulating Feedback Collection",
            topics: [
                "Using AI to Model Customer Responses",
                "Creating Feedback Loops and Testing Assumptions"
            ]
        },
        {
            title: "Applying Insights to Strategy and Customer Experience",
            topics: [
                "Translating Insights into Product and Service Improvements",
                "Aligning Findings with Business Goals and Customer Needs"
            ]
        },
        {
            title: "Ethics and Responsible AI Use",
            topics: [
                "Transparency, Fairness, and Human Oversight",
                "Case Studies on Ethical AI in Customer Contexts"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Understand Core AI Concepts for Customer Insights",
            description: "Develop a clear understanding of how artificial intelligence supports customer insight generation, including key concepts such as machine learning and pattern recognition."
        },
        {
            title: "Apply AI to Customer Data Interpretation",
            description: "Learn the ways to use AI for analyzing customer data sources such as behavior, feedback, and engagement metrics to uncover meaningful trends."
        },
        {
            title: "Explore AI-Driven Customer Segmentation",
            description: "Understand how AI allows advanced segmentation based on behavior, intent, and preferences rather than traditional demographic grouping."
        },
        {
            title: "Evaluate AI Use Cases",
            description: "Identify where AI adds value across acquisition, retention, personalization, and customer experience improvement."
        },
        {
            title: "Practice Ethical and Responsible Use of AI",
            description: "Understand ethical considerations, data privacy principles, and bias mitigation when applying AI for customer insights."
        },
        {
            title: "Translate AI Insights into Business Decisions",
            description: "Turn AI-generated insights into practical recommendations that support product, marketing, and customer experience strategies."
        }
    ];

    const faqCategories = [
        {
            id: 'general',
            label: 'General Course Info',
            items: [
                {
                    question: "What is an AI for Customer Insights Micro-credential?",
                    answer: "An AI for Customer Insights Micro-credential validates your ability to use artificial intelligence tools and techniques to gather, analyze, and interpret customer data."
                },
                {
                    question: "Who should pursue this Micro-credential?",
                    answer: "This Micro-credential suits data analysts, marketing professionals, product managers, customer experience specialists, and business leaders."
                },
                {
                    question: "What skills are covered?",
                    answer: "The Micro-credential covers AI techniques such as machine learning, natural language processing, data visualization, customer segmentation, and sentiment analysis."
                },
                {
                    question: "Is it globally recognized?",
                    answer: "Yes, the AI for Customer Insights Micro-credential is recognized globally and valued by employers looking to strengthen data-driven decision-making."
                }
            ]
        },
        {
            id: 'certification',
            label: 'Certification Details',
            items: [
                {
                    question: "Are there prerequisites?",
                    answer: "Most recommend basic knowledge of data analytics, statistics, and familiarity with customer research principles."
                },
                {
                    question: "Is there an exam?",
                    answer: "No, there is no formal exam. The certification is awarded based on participation and completion of assessments during the training."
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

    const courseTrainers = [
        {
            name: "Expert AI Coach",
            role: "ICAgile Certified Instructor",
            rating: "4.9",
            experience: "12+ Years",
            description: "Specialized in AI-driven behavioral insights and customer experience transformation.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        },
    ];

    const courseClients = [
        { name: 'Wells Fargo', url: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
        { name: 'Infosys', url: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'Bosch', url: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' },
        { name: 'Capgemini', url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg' },
        { name: 'KPMG', url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg' },
    ];

    const courseWhySimpliaxis = [
        {
            title: "Authorized ICAgile Training Partner",
            description: "Simpliaxis is an ICAgile-authorized provider and ensures the AI for Customer Insights course follows official learning outcomes."
        },
        {
            title: "Industry-Relevant Curriculum",
            description: "The program focuses on practical AI applications for customer behavior analysis and insight generation aligned with real business scenarios."
        },
        {
            title: "Experienced Accredited Instructors",
            description: "Training is delivered by certified practitioners with hands-on experience in AI, analytics, and customer experience transformation."
        },
        {
            title: "Globally Recognized Credential",
            description: "Participants earn the ICAgile AI for Customer Insights Micro Credential, recognized globally as proof of applied AI knowledge."
        },
        {
            title: "Hands-On Real Use Cases",
            description: "The course emphasizes experiential learning through case studies that demonstrate how AI improves customer insight and decision-making."
        },
        {
            title: "Designed for Business Professionals",
            description: "Structured for marketing, product, and CX professionals without requiring programming or data science backgrounds."
        },
        {
            title: "Collaborative Learning Options",
            description: "Simpliaxis offers live virtual and enterprise training formats, allowing teams to upskill effectively."
        },
        {
            title: "Focus on Ethical AI",
            description: "Learn how to apply AI for customer insights responsibly, addressing data privacy, bias, and transparency."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: "AI-CI",
            courseName: "ICAgile AI for Customer Insights",
            dateRange: "June 20 - June 20, 2026",
            timeRange: "05:00 PM - 08:00 PM IST",
            trainerName: "ICAgile Expert",
            trainerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
            originalPrice: "INR 28,000",
            discountedPrice: "INR 19,500",
            discountPercentage: "30",
        },
    ];

    const certificateBenefits = [
        "Globally recognized ICAgile Micro-credential",
        "Lifetime validity with no renewal fees",
        "Earn 3 PDUs for your certification renewals",
        "Expert mentorship and practical skill-building"
    ];

    const heroData = {
        courseName: "ICAgile AI for Customer Insights Micro Credential Training",
        breadcrumbName: "AI for Customer Insights Certification Training",
        rating: "5.0",
        enrolledCount: "1.2k+",
        subtitle: "Master AI-Driven Behavioral Analysis, Sentiment Tracking, and Data-Backed Decision Making",
        benefits: [
            "3-Hour Expert-Led Live Training Session",
            "Learn practical AI for behavioral signals",
            "Master AI-assisted profiling and segmentation",
            "Implement ethical AI in customer analytics",
            "Earn a Globally Recognized ICAgile Micro Credential"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png",
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "ICAgile AI for Customer Insights Course Overview",
        description: [
            "The ICAgile AI for Customer Insights Micro-credential course helps professionals apply artificial intelligence techniques to understand customer behavior and generate meaningful insights.",
            "Participants learn how to analyze customer data, identify patterns, and translate insights into better business decisions using AI-driven approaches."
        ],
        whatIsTitle: "What is AI for Customer Insights?",
        whatIsDescription: [
            "AI for Customer Insights refers to the use of artificial intelligence technologies to analyze customer data and generate actionable insights that improve marketing, product, and CX strategies."
        ],
        whatsIncludedTitle: "What’s Included in This Training?",
        whatsIncludedDescription: [
            "3 Hours of Live Instructor-Led Training",
            "ICAgile-authorized Course Materials",
            "Hands-on Exercises and Case Studies",
            "Interactive Collaborative Activities",
            "Official ICAgile Micro-credential Certification"
        ],
        skillsTitle: "Core Skills You'll Learn",
        skills: [
            "AI-Driven Behavioral Analysis",
            "Intelligent Customer Profiling",
            "Automated Feedback Interpretation",
            "Ethical AI Implementation",
            "Data-Driven Strategic Alignment"
        ],
        modesTitle: "Flexible Learning Options",
        modesDescription: [
            "Simpliaxis provides interactive live virtual training sessions conducted by certified experts, suitable for individuals and corporate teams."
        ],
    };

    const corporateData = {
        courseName: "Corporate AI Empowerment Solutions",
        label: "For Organizations",
        buttonText: "Inquire Now",
        description: "Transform your organization by equipping your teams with AI-driven customer insight skills. We offer tailored modules for enterprise-level transformations."
    };

    const courseMetadata = {
        shortName: "AI-CI",
        shortNameAlt: "AI-CI",
        fullName: "ICAgile AI for Customer Insights",
        fullNameAlt: "AI for Customer Insights",
        certificateName: "AI for Customer Insights Micro-credential",
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the AI Customer Insights Course?`,
            outcomesFooter: "Become a data-driven leader by mastering AI-augmented customer insight strategies.",
        },
        prerequisites: {
            subtitle: "Training Requirements",
        },
        certificate: {
            mockupName: "ALEX BRYANT",
            label: "Global Credential",
            titlePrefix: "Get Your",
            titleHighlight: "ICAgile",
            titleSuffix: "Certification",
            issuerName: "ICAgile",
            certificateType: "AI for Customer Insights",
            certifyText: "This is to certify that",
            requirementText: "Has successfully demonstrated the integration of AI in customer analytics.",
            signer1Role: "Authorized Facilitator",
            signer2Role: "Head of Education",
        },
    };

    const commonAttendeesList = [
        "Data Analysts",
        "Marketing Professionals",
        "Product Managers",
        "CX Specialists",
        "Business Leaders",
        "Strategic Planners"
    ];

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
            moneyBackText: '100% Value',
            ltpLabel: 'LTP of ICAgile',
            downloadBtnText: 'Download Brochure',
            viewSchedulesBtnText: 'View Schedules',
            freeAssessmentBtnText: 'Skill Assessment',
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
                            <ul className="list-disc pl-5 space-y-2">
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
                        attendees={attendees}
                        companies={companies}
                        outcomes={outcomes}
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
                        attendees={commonAttendeesList}
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
            <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600" />
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

export default ICAgileAIforCustomerInsightsMicroCredentialTraining;
