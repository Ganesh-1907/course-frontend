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
    TrendingUp,
} from "lucide-react";

const QualityRootCauseAnalysis = () => {
    const highlights = [
        { icon: <BookOpen className="w-6 h-6" />, text: "Deep Dive into Root Cause Analysis Methodologies" },
        { icon: <Settings className="w-6 h-6" />, text: "Learn 5 Whys, Fishbone Diagram & Pareto Analysis" },
        { icon: <Users className="w-6 h-6" />, text: "Interactive Instructor-Led Workshops" },
        { icon: <TrendingUp className="w-6 h-6" />, text: "Reduce Recurring Problems and Operational Failures" },
        { icon: <Monitor className="w-6 h-6" />, text: "Real Business Case Studies & Practical Exercises" },
        { icon: <Award className="w-6 h-6" />, text: "Industry-Aligned Curriculum" },
        { icon: <UserCheck className="w-6 h-6" />, text: "Assessment & Trainer Feedback" },
        { icon: <Map className="w-6 h-6" />, text: "Applicable Across IT, Manufacturing & Services" },
    ];

    const individualBenefits = [
        {
            title: "Stronger Analytical Thinking",
            description:
                "Develop the ability to uncover hidden causes behind operational challenges.",
        },
        {
            title: "Better Decision Making",
            description:
                "Use structured techniques to implement long-term corrective solutions.",
        },
        {
            title: "Career Growth",
            description:
                "Enhance your profile in quality, operations, and risk management roles.",
        },
        {
            title: "Practical Application",
            description:
                "Apply RCA tools immediately within your organization.",
        },
    ];

    const corporateBenefits = [
        {
            title: "Reduced Operational Failures",
            description:
                "Identify and eliminate recurring issues across processes.",
        },
        {
            title: "Improved Productivity",
            description:
                "Prevent downtime and inefficiencies through proactive analysis.",
        },
        {
            title: "Enhanced Compliance",
            description:
                "Strengthen quality management and audit readiness.",
        },
        {
            title: "Cost Reduction",
            description:
                "Minimize rework, defects, and operational losses.",
        },
    ];


    const careerStats = {
        averageIncome: '$110k - $150k',
        incomeLabel: 'average annual salary',
        employmentGrowth: 'Very High Demand',
        growthLabel: 'Across Manufacturing, IT, Healthcare & BFSI',
    };

    const attendees = [
        {
            group: [
                'Senior Quality Managers',
                'Operational Excellence Leaders',
                'Continuous Improvement Heads',
            ],
        },
        {
            group: [
                'Process Transformation Consultants',
                'Plant Managers',
                'Senior Business Analysts',
            ],
        },
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
        'Identify true root causes behind recurring problems.',
        'Apply 5 Whys, Fishbone, and Pareto techniques effectively.',
        'Design corrective and preventive action plans.',
        'Reduce operational failures and process inefficiencies.',
    ];

    const prerequisites = [
        "Basic understanding of business or operational processes",
        "Interest in quality management or process improvement",
        "No prior certification required",
    ];

    const certificationSteps = [
        {
            title: 'Enroll in RCA Training',
            description:
                'Register and receive access to learning materials and session details.',
        },
        {
            title: 'Attend Live Session',
            description:
                'Participate in instructor-led training covering RCA tools and case studies.',
        },
        {
            title: 'Complete Exercises',
            description:
                'Work through practical scenarios and structured analysis activities.',
        },
        {
            title: 'Assessment & Certification',
            description:
                'Successfully complete the evaluation to earn your RCA certificate.',
        },
    ];

    const curriculumModules = [
        {
            title: "Introduction to Root Cause Analysis",
            topics: [
                "What is Root Cause Analysis?",
                "Importance of RCA in Organizations",
                "Common Problem-Solving Mistakes",
            ],
        },
        {
            title: "RCA Tools & Techniques",
            topics: [
                "5 Whys Technique",
                "Fishbone (Ishikawa) Diagram",
                "Pareto Analysis",
                "Fault Tree Analysis",
            ],
        },
        {
            title: "Investigation & Data Collection",
            topics: [
                "Incident Documentation",
                "Fact-Based Investigation",
                "Identifying Contributing Factors",
            ],
        },
        {
            title: "Corrective & Preventive Actions",
            topics: [
                "Developing Action Plans",
                "Monitoring Effectiveness",
                "Preventing Recurrence",
            ],
        },
    ];

    const learningObjectives = [
        {
            title: 'Understand Root Cause Analysis Frameworks',
            description:
                'Learn structured methods for identifying underlying causes of problems.',
        },
        {
            title: 'Apply RCA Tools Effectively',
            description:
                'Use 5 Whys, Fishbone, and Pareto Analysis to investigate issues.',
        },
        {
            title: 'Design Corrective Actions',
            description:
                'Develop sustainable solutions that prevent recurrence.',
        },
        {
            title: 'Improve Process Stability',
            description:
                'Enhance operational reliability through systematic analysis.',
        },
    ];


    const faqCategories = [
        {
            id: "general",
            label: "General FAQs",
            items: [
                {
                    question: "Is the Root Cause Analysis certificate valid for lifetime?",
                    answer:
                        "Yes, the certificate does not require renewal and remains valid for lifetime.",
                },
                {
                    question: "How do I obtain certification?",
                    answer:
                        "Attend the training session, complete exercises, and pass the final assessment to receive the certificate.",
                },
                {
                    question: "Who should attend this training?",
                    answer:
                        "Quality professionals, operations managers, IT teams, manufacturing supervisors, and project leaders.",
                },
                {
                    question: "Are there any prerequisites?",
                    answer:
                        "There are no mandatory prerequisites. However, prior exposure to business processes is beneficial.",
                },
            ],
        },
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
            name: 'Wells Fargo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg',
        },
        {
            name: 'Infosys',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
        },
        {
            name: 'Bosch',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
        },
        {
            name: 'Capgemini',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg',
        },
        {
            name: 'KPMG',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg',
        },
        {
            name: 'Accenture',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        },
        {
            name: 'Cognizant',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
        },
        {
            name: 'Deloitte',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
        {
            name: 'Hexaware',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexaware_new_logo.svg',
        },
        {
            name: 'Thomson Reuters',
            logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Thomson_Reuters_logo.svg',
        },
    ];

    const courseTrainers = [
        {
            name: 'Ram Srinivasan',
            role: 'Six Sigma Master Black Belt Trainer',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram Srinivasan is a certified Six Sigma Master Black Belt with over 15 years of experience leading enterprise-level process improvement and quality transformation initiatives. He has successfully delivered multiple DMAIC-driven projects across manufacturing and service industries, helping organizations reduce defects and optimize operational efficiency.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Process Excellence Consultant',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel Wilhelm Berle is an experienced Process Excellence Consultant specializing in Six Sigma methodologies and continuous improvement strategies. With over 20 years of global consulting experience, he supports organizations in applying data-driven problem-solving techniques and improving process performance using structured quality frameworks.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Raquel Silva',
            role: 'Quality & Continuous Improvement Specialist',
            rating: '4.8',
            experience: '10+ Years',
            description:
                'Raquel Silva is a Quality and Continuous Improvement Specialist with extensive experience in process optimization and operational excellence initiatives. She helps teams apply Lean Six Sigma methodologies, identify root causes, and implement sustainable improvements that enhance performance and customer satisfaction.',
            image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
    ];

    const courseWhyViovn = [
        {
            title: "Global Industry Recognition",
            description:
                "Viovn Technologies delivers industry-relevant training programs designed to meet global standards, ensuring strong credibility and professional acceptance across sectors.",
        },
        {
            title: "Experienced Industry Experts",
            description:
                "Learn from certified trainers and industry professionals who bring real-world insights, hands-on experience, and practical knowledge into every session.",
        },
        {
            title: "Flexible Learning Options",
            description:
                "Viovn Technologies offers flexible learning formats including live virtual sessions, classroom training, and customized corporate programs to suit diverse schedules.",
        },
        {
            title: "Lifetime Learning Support",
            description:
                "Gain extended access to course materials, recorded sessions, and learning resources to support continuous skill development beyond the classroom.",
        },
        {
            title: "Proven Excellence",
            description:
                "With a strong commitment to quality education, Viovn Technologies empowers professionals and organizations to enhance performance and achieve measurable success.",
        },
        {
            title: "End-to-End Guidance",
            description:
                "From enrollment to certification and career advancement, we provide continuous support, study guidance, and mentoring throughout your learning journey.",
        },
        {
            title: "Interactive & Practical Training",
            description:
                "Our sessions are highly engaging and scenario-driven, incorporating case studies, group discussions, and real-time problem-solving activities.",
        },
        {
            title: "Comprehensive Course Portfolio",
            description:
                "Viovn Technologies offers a wide range of certification programs across Quality Management, Agile, Project Management, IT, and emerging technologies.",
        },
    ];

    const sidePanelSchedules = [
        {
            courseCode: "RCA",
            courseName: "Root Cause Analysis Certification Training",
            dateRange: "Mar 10 - Mar 10, 2026",
            timeRange: "09:00 AM - 05:00 PM IST",
            trainerName: "Suresh Kumar",
            trainerImage:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
            originalPrice: "INR 32,000",
            discountedPrice: "INR 22,400",
            discountPercentage: "30",
        },
    ];

    const certificateBenefits = [
        'Industry-Recognized Root Cause Analysis Certificate',
        'Digital Certificate (PDF) for Professional Use',
        'Validation of Root Cause Investigation Skills',
        'Demonstrates Structured Problem-Solving Expertise',
    ];


    const heroData = {
        courseName: "Root Cause Analysis Certification Training",
        breadcrumbName: "Root Cause Analysis Training",
        rating: "4.9",
        enrolledCount: "38k+",
        subtitle:
            "Identify Problems at the Source and Implement Permanent Solutions",
        benefits: [
            "One-Day Intensive Root Cause Analysis Program",
            "Master 5 Whys, Fishbone & Fault Tree Analysis",
            "Live Instructor-Led Sessions",
            "Hands-On Case Studies & Exercises",
            "Certificate of Completion Included",
        ],
        mainImage:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
        badgeImage: "/csm-badge.png",
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Root Cause Analysis Certification Course Overview",
        description: [
            "Root Cause Analysis (RCA) is a structured problem-solving approach used to identify the underlying reasons behind recurring issues and failures.",
            "This training provides professionals with systematic tools to analyze incidents, minimize risk, and prevent future defects.",
            "Participants will learn how to distinguish symptoms from true causes and implement corrective actions that deliver long-term results.",
            "The program is suitable for professionals seeking to strengthen operational efficiency and quality standards across industries.",
        ],

        whatIsTitle: "What is Root Cause Analysis Training?",
        whatIsDescription: [
            "Root Cause Analysis training equips professionals with practical tools to identify the fundamental source of problems.",
            "It focuses on structured investigation techniques rather than temporary fixes.",
            "The course ensures participants can analyze data, identify patterns, and recommend sustainable solutions.",
        ],

        whatsIncludedTitle: "What’s Included in Our Root Cause Analysis Training?",
        whatsIncludedDescription: [
            "Live Instructor-Led Training Session",
            "Hands-On Practical Case Studies",
            "Interactive Problem-Solving Workshops",
            "Downloadable Study Materials",
            "Real-World RCA Templates",
            "Assessment & Evaluation",
            "Course Completion Certificate",
        ],
    };

    const corporateData = {
        courseName: 'Why Viovn Technologies Is the Right Corporate Training Partner?',
        label: '',
        buttonText: 'Corporate Group Enquiry',
        description:
            'At Viovn Technologies, we deliver customized Root Cause Analysis corporate training programs designed to help organizations eliminate recurring operational failures. Our structured approach equips teams with practical tools to investigate incidents, identify systemic weaknesses, and implement long-term corrective strategies.',
    };

    const courseMetadata = {
        shortName: 'RCA',
        shortNameAlt: 'Root Cause Analysis',
        fullName: 'Root Cause Analysis Certification Training',
        fullNameAlt: 'Root Cause Analysis Program',
        certificateName: 'Root Cause Analysis Certificate',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName}?`,
            outcomesFooter:
                "After completing the Root Cause Analysis certification, professionals gain structured problem-solving capabilities that help eliminate recurring issues and improve operational stability.",
        },

        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Root Cause Analysis Training?',
        },

        certificate: {
            mockupName: 'JOHN DOE',
            label: 'Course Completion Certificate',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Root Cause Analysis',
            titleSuffix: 'Certification',
            issuerName: 'Viovn Technologies',
            certificateType: 'Certificate of Completion',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully completed the Root Cause Analysis training program and demonstrated practical knowledge in structured problem-solving methodologies.',
            signer1Role: 'Lead Trainer',
            signer2Role: 'Training Director',
        },
    };

    const commonAttendeesList = [
        'Quality Professionals',
        'Process Improvement Analysts',
        'Operations Managers',
        'Business Analysts',
        'Manufacturing Engineers',
        'Project Coordinators',
        'Team Leaders',
        'Production Supervisors',
        'Service Industry Professionals',
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
            moneyBackText: '100% Money Back Guarantee',
            ltpLabel: 'Global LTP of Root Cause Analysis Programs',
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
                            <p>{overviewContent.whatsIncludedDescription}</p>
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

export default QualityRootCauseAnalysis;