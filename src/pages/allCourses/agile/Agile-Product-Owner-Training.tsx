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
    TrendingUp,
    Star,
    CheckCircle2
} from "lucide-react";

const AgileProductOwnerTraining = () => {
    const highlights = [
        { text: "Instructor-led teaching in an interactive environment.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Trained by top industry experts.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Self-paced learning where each participant gets every opportunity to learn at their own pace.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "The training mixes well theoretical knowledge and discussions on case studies, hands-on experimentation, exercises, and group activities.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Par excellence content delivery with training on practical tools.", icon: <CheckCircle2 className="w-5 h-5" /> },
    ];

    const individualBenefits = [
        {
            title: "Value Maximization",
            description: "Learn how to maximize the value delivered by the development team through effective product ownership."
        },
        {
            title: "Stakeholder Alignment",
            description: "Gain skills to bridge the gap between business stakeholders and development teams."
        }
    ];

    const corporateBenefits = [
        {
            title: "ROI Focused Delivery",
            description: "Enable organizations to focus on the most valuable features, improving return on investment."
        },
        {
            title: "Market Responsiveness",
            description: "Improve the organization's ability to respond to market changes through Agile product management."
        }
    ];

    const careerStats = {
        averageIncome: "$110,000 - $150,000",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Growing demand",
        growthLabel: "for certified Product Owners",
    };

    const attendeeList = [
        "Product Managers",
        "Business Analysts",
        "Project Managers",
        "Stakeholders",
        "Team Leads"
    ];

    const attendees = [
        { group: attendeeList }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" }
    ];

    const outcomes = [
        "Defining a clear product vision and strategy",
        "Managing and prioritizing the product backlog",
        "Collaborating effectively with Scrum teams",
        "Techniques for stakeholder engagement and feedback"
    ];

    const prerequisites = [
        "Basic understanding of Agile principles",
        "Familiarity with the Scrum framework is recommended",
        "No technical background required"
    ];

    const certificationSteps = [
        {
            title: "Enrollment",
            description: "Sign up for the Agile Product Owner training course.",
            color: "#3B82F6"
        },
        {
            title: "Interactive Training",
            description: "Attend the expert-led workshops and sessions.",
            color: "#F59E0B"
        },
        {
            title: "Backlog Mastery",
            description: "Learn to manage and prioritize product backlogs effectively.",
            color: "#10B981"
        },
        {
            title: "Completion",
            description: "Successfully complete the training and receive your certification.",
            color: "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            title: "Agile for Product Owners Certification Training",
            topics: [
                "Agile: What it is and Why",
                "Overview of Agile Processes and Methodologies",
                "Agile Manifesto: 4 Values and 12 Principles",
                "Overview of Sprint",
                "Product Owner: Roles and responsibilities",
                "Characteristics needed for a great Product Owner",
                "Agile Team Accountabilities",
                "Characteristics of a Strong Agile Team",
                "What Product Owner needs to do to support Agile Team",
                "Implementation of Agile Practices such as Planning. Prioritizing, Mapping, and Developing",
                "Managing Product Backlogs",
                "Writing and Sizing User Stories, Epics",
                "Scrum Events: Sprint Planning, Sprint Review, Sprint Retrospective, Product Backlog Refinement",
                "What is Agile Leadership",
                "Servant Leadership",
                "Attributes of Agile Leaders"
            ],
        },
    ];

    const learningObjectives = [
        {
            title: "Role & Mindset",
            description: "Understand the mindset and responsibilities of an effective Product Owner."
        },
        {
            title: "Backlog Management",
            description: "Master techniques for backlog refinement and prioritization to deliver value."
        },
        {
            title: "Stakeholder Management",
            description: "Learn how to engage stakeholders and incorporate their feedback into the product."
        }
    ];

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                {
                    question: "1. What is Agile Product Owner training?",
                    answer: "It's a comprehensive training program designed to equip professionals with the skills needed to lead product development using Agile methodologies, specifically focusing on the Product Owner role."
                },
                {
                    question: "2. Is there an exam for this certification?",
                    answer: "Certification is typically awarded based on active participation and completion of the training workshop."
                }
            ]
        }
    ];

    const courseFeatures = [
        { icon: Users, title: 'Guaranteed to', subtitle: 'Run Workshops', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led Study', subtitle: 'Sessions', color: 'bg-orange-50 text-orange-600' },
        { icon: Network, title: 'Networking', subtitle: 'Opportunities', color: 'bg-green-50 text-green-600' },
        { icon: CreditCard, title: 'Flexible Monthly', subtitle: 'Payment Plans', color: 'bg-purple-50 text-purple-600' },
        { icon: FileText, title: 'Real-World Case', subtitle: 'Studies', color: 'bg-red-50 text-red-600' },
        { icon: Briefcase, title: 'Hands-On Project', subtitle: 'Experience', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const courseClients = [
        { name: 'Wells Fargo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg' },
        { name: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
        { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg' }
    ];

    const courseTrainers = [
        {
            name: 'Expert Agile Coach',
            role: 'Product Management Guru',
            rating: '4.9',
            experience: '15+ Years',
            description: 'A seasoned professional with extensive experience in Agile product management and team coaching.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhySimpliaxis = [
        { title: "Industry Experts", description: "Learn from trainers who have led Agile transformations in global organizations." },
        { title: "Practical Approach", description: "Our training focus on real-world applications and simulations." },
        { title: "Global Recognition", description: "Certifications are recognized by top industries worldwide." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'APO',
            courseName: 'Agile Product Owner Training',
            dateRange: 'Upcoming Sessions',
            timeRange: 'Flexible Time',
            trainerName: 'Expert Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: '$799',
            discountedPrice: '$599',
            discountPercentage: '25',
        },
    ];

    const certificateBenefits = [
        'Globally Recognized Certification',
        'Lifetime Availability of Digital Credentials',
        'Access to Alumni Network',
        'Expert Support Post-Training'
    ];

    const heroData = {
        courseName: "Agile Product Owner Training",
        breadcrumbName: "Agile Product Owner Course",
        rating: "4.9",
        enrolledCount: "12,000+",
        subtitle: "Master the art of maximizing product value through effective Agile ownership.",
        benefits: [
            "Instructor-led training by industry veterans",
            "Practical backlog management techniques",
            "Real-world simulations and case studies"
        ],
        mainImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
        badgeImage: "/csm-badge.png"
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Agile Product Owner Training Overview",
        description: [
            "This course provides a deep dive into the Product Owner role, focusing on value delivery, stakeholder management, and product strategy in an Agile context.",
            "Professionals will learn to create a compelling product vision and manage a healthy product backlog that drives team success."
        ],
        whatIsTitle: "What is Agile Product Ownership?",
        whatIsDescription: [
            "Agile product ownership is the practice of continuously making value-based decisions to ensure the team builds the right product for the customer."
        ],
        whatsIncludedTitle: "What's Included",
        whatsIncludedDescription: [
            "Comprehensive study materials",
            "Hands-on exercises and group activities",
            "Interactive Q&A sessions",
            "Course completion certificate"
        ],
        skillsTitle: "Skills You Will Gain",
        skills: [
            "Value Prioritization",
            "Release Planning",
            "Backlog Refinement",
            "User Story Mapping",
            "Stakeholder Engagement"
        ],
    };

    const corporateData = {
        courseName: "Customized Corporate Agile Training",
        label: "For Organizations",
        buttonText: "Request Group Quote",
        description: "We offer tailored Agile training programs for corporate teams to help align strategy with execution and improve product delivery speed."
    };

    const courseMetadata = {
        shortName: 'APOT',
        shortNameAlt: 'APO',
        fullName: 'Agile Product Owner Training',
        fullNameAlt: 'Agile Product Owner Certification',
        certificateName: 'Certified Agile Product Owner',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "Graduates of our Agile Product Owner program find themselves equipped to lead high-impact product initiatives in any Agile organization.",
        },
        prerequisites: {
            subtitle: 'Recommended Prerequisites for Agile Product Owner Training',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Agile PO',
            titleSuffix: 'Badge',
            issuerName: 'Simpliaxis',
            certificateType: 'Academic Certificate',
            certifyText: 'This certificate signifies that',
            requirementText: 'has mastered the skills of a Professional Agile Product Owner.',
            signer1Role: 'Lead Instructor',
            signer2Role: 'Operations Head',
        },
    };

    const pageCaptions = {
        tabs: {
            overview: 'Course Overview',
            benefits: 'Benefits',
            prerequisites: 'Prerequisites',
            curriculum: 'Curriculum',
            faqs: 'FAQs',
        },
        hero: {
            referEarnText: 'Refer & Earn',
            enrolledSuffix: 'Professionals Trained',
            moneyBackText: 'Money Back Guarantee',
            ltpLabel: 'Simpliaxis: Leading Training Provider',
            downloadBtnText: 'Download Syllabus',
            viewSchedulesBtnText: 'View Schedules',
            freeAssessmentBtnText: 'Free Mock Test',
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
                    <CourseHighlights courseName={heroData.courseName} highlights={highlights} />
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
                        subtitle="Impactful Certification Benefits"
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
                        courseName={courseMetadata.shortName}
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
                    courseName={courseMetadata.shortName}
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

export default AgileProductOwnerTraining;
