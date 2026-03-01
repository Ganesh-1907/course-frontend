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

const ApplyingProfessionalScrumCertificationTraining = () => {
    const highlights = [
        { text: "Get the opportunity to learn from Scrum.org certified PSTs", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Get equipped with the practices of Scrum to handle everyday tasks and projects", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 16 SEUS and 16 PDUs", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Free first attempt to take the assessment from Scrum.org", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "The opportunity to interact with the Scrum community", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Opens the way to take the course for Professional Scrum Master for career progression", icon: <CheckCircle2 className="w-5 h-5" /> },
    ];

    const individualBenefits = [
        {
            title: "Professional Credibility",
            description: "Earn a globally recognized certification from Scrum.org, demonstrating your expertise in applying Scrum."
        },
        {
            title: "Hands-on Experience",
            description: "Apply Scrum principles in a simulated repository to learn how to deliver value in complex environments."
        }
    ];

    const corporateBenefits = [
        {
            title: "Team-Level Consistency",
            description: "Establish a common understanding of Scrum within teams to improve collaboration and predictability."
        },
        {
            title: "Improved Delivery Quality",
            description: "Focus on delivering 'Done' Increments at the end of every Sprint, reducing project risk."
        }
    ];

    const careerStats = {
        averageIncome: "$105,000 - $135,000",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Stable growth",
        growthLabel: "for Scrum practitioners",
    };

    const attendeeList = [
        "Software Developers",
        "QA Engineers",
        "Team Leads",
        "Business Analysts",
        "Product Designers",
        "Scrum Masters"
    ];

    const attendees = [
        { group: attendeeList }
    ];

    const companies = [
        { name: "Scrum.org", url: "https://www.scrum.org/themes/custom/scrumorg/logo.png" },
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" }
    ];

    const outcomes = [
        "Applying the Scrum framework to solve complex problems",
        "Experiencing the power of self-organizing teams",
        "Understanding 'Done' and why it's critical to Scrum",
        "Leveraging Scrum to manage risk and predictability"
    ];

    const prerequisites = [
        "Recommended: Read the Scrum Guide",
        "Basic understanding of software development life cycles",
        "Willingness to participate in a high-energy team environment"
    ];

    const certificationSteps = [
        {
            title: "Introduction",
            description: "Enroll in the Applying Professional Scrum (APS) course.",
            color: "#3B82F6"
        },
        {
            title: "The Workshop",
            description: "Attend the 2-day hands-on interactive training.",
            color: "#F59E0B"
        },
        {
            title: "Assessment",
            description: "Receive your assessment password for the PSM I exam.",
            color: "#10B981"
        },
        {
            title: "Certification",
            description: "Pass the online exam to become certified.",
            color: "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            title: "Agility as a new way of working",
            topics: ["Traditional vs Agile", "The benefits of Agility", "Agile Mindset"],
        },
        {
            title: "Exploring the Scrum Framework",
            topics: ["Scrum Roles", "Scrum Events", "Scrum Artifacts", "Rules of Scrum"],
        },
        {
            title: "Planning and forecasting with Scrum",
            topics: ["Product Backlog", "Sprint Backlog", "Estimation and Velocity"],
        },
        {
            title: "Getting started with Scrum",
            topics: ["Sprint Planning", "Execution of Sprints", "Daily Scrum"],
        },
        {
            title: "Mastering Scrum",
            topics: ["Sprint Review", "Sprint Retrospective", "Continuous Improvement"],
        },
    ];

    const learningObjectives = [
        {
            title: "Operational Scrum",
            description: "Learn how to practically apply Scrum in a team setting."
        },
        {
            title: "Values and Principles",
            description: "Internalize the values and principles that make Scrum effective."
        },
        {
            title: "Problem Solving",
            description: "Use Scrum to solve common complex project challenges."
        }
    ];

    const faqCategories = [
        {
            id: "category_1",
            label: "Scrum.org Certification FAQs",
            items: [
                {
                    question: "1. What is the APS course?",
                    answer: "Applying Professional Scrum (APS) is a hands-on, 2-day course that teaches the fundamentals of Scrum and why it works."
                },
                {
                    question: "2. Is the exam included?",
                    answer: "Yes, once you complete the course, you receive a password for the PSM I assessment."
                },
                {
                    question: "3. How is APS different from PSM?",
                    answer: "APS is more hands-on and activity-based, focusing on the team's application of Scrum, whereas PSM focuses more deeply on the Scrum Master role."
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
        { name: 'Capgemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg' }
    ];

    const courseTrainers = [
        {
            name: 'Scrum.org PST',
            role: 'Professional Scrum Trainer',
            rating: '4.9',
            experience: '12+ Years',
            description: 'A certified Professional Scrum Trainer with deep pedagogical expertise and real-world experience.',
            image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhySimpliaxis = [
        { title: "Authorized Provider", description: "Accredited partner with global certification bodies." },
        { title: "PST Trainers", description: "Learn only from certified Professional Scrum Trainers." },
        { title: "Post-Training Support", description: "Continuous guidance until you pass your assessment." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'APS',
            courseName: 'Applying Professional Scrum Training',
            dateRange: 'Weekly Batches',
            timeRange: '9 AM - 5 PM',
            trainerName: 'PST expert',
            trainerImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100',
            originalPrice: '$899',
            discountedPrice: '$699',
            discountPercentage: '22',
        },
    ];

    const certificateBenefits = [
        'Globally Recognized PSM I access',
        'Scrum.org Verified Profile',
        'Official Scrum.org Courseware',
        'Lifetime PSM I Credential'
    ];

    const heroData = {
        courseName: "Applying Professional Scrum (APS) Training",
        breadcrumbName: "Applying Professional Scrum Certification",
        rating: "5.0",
        enrolledCount: "8,500+",
        subtitle: "The definitive hands-on Scrum training that bridges the gap between theory and practice.",
        benefits: [
            "Includes access to PSM I assessment",
            "Learn from Scrum.org certified PSTs",
            "Practical toolkit for immediate application"
        ],
        mainImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
        badgeImage: "/csm-badge.png"
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Applying Professional Scrum Training Overview",
        description: [
            "APS is specialized training for teams and individuals who want to learn how to use Scrum to deliver the highest value products.",
            "Through immersive exercises, participants act as a Scrum Team to plan and develop a product, learning how to handle real-world challenges."
        ],
        whatIsTitle: "What is APS Training?",
        whatIsDescription: [
            "APS (Applying Professional Scrum) is the foundational Scrum course from Scrum.org tailored for anyone involved in delivering products."
        ],
        whatsIncludedTitle: "What's Included",
        whatsIncludedDescription: [
            "Official Scrum.org course handouts",
            "Attempts for PSM I assessment",
            "Collaboration with other industry professionals",
            "Practical Scrum toolkit"
        ],
        skillsTitle: "Skills You Will Gain",
        skills: [
            "Self-Organization",
            "Empirical Process Control",
            "Effective Sprints",
            "Done Increment delivery",
            "Collaborative Planning"
        ],
    };

    const corporateData = {
        courseName: "APS for Your Enterprise Team",
        label: "Team Training",
        buttonText: "Request Group Training",
        description: "Transform your team's performance by training them together in the APS workshop, tailored for your specific organizational context."
    };

    const courseMetadata = {
        shortName: 'APS',
        shortNameAlt: 'APS-Training',
        fullName: 'Applying Professional Scrum Certification Training',
        fullNameAlt: 'APS Training',
        certificateName: 'Professional Scrum Master I (Access)',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "Completing APS opens doors to advanced roles like Senior Scrum Master or Agile Program Manager within industry-leading tech firms.",
        },
        prerequisites: {
            subtitle: 'Recommended Prerequisites for APS Certification Training',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Global Credential',
            titlePrefix: 'Earn Your',
            titleHighlight: 'PSM I',
            titleSuffix: 'Access',
            issuerName: 'Scrum.org',
            certificateType: 'Official Course Completion',
            certifyText: 'This confirms that',
            requirementText: 'has participated in the Professional Scrum development workshop.',
            signer1Role: 'PST Trainer',
            signer2Role: 'Certification Officer',
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
            enrolledSuffix: 'Participants',
            moneyBackText: 'Quality Guaranteed',
            ltpLabel: 'Official Scrum.org Training Partner',
            downloadBtnText: 'Download Brochure',
            viewSchedulesBtnText: 'Check Dates',
            freeAssessmentBtnText: 'Prepare for PSM',
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

export default ApplyingProfessionalScrumCertificationTraining;
