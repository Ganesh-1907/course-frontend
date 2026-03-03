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
    Star
} from "lucide-react";

const QualitySixSigmaFundamentals = () => {
    const highlights = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            text: 'Comprehensive Introduction to Six Sigma Methodology',
        },
        {
            icon: <Settings className="w-6 h-6" />,
            text: 'Understand the DMAIC (Define, Measure, Analyze, Improve, Control) Framework',
        },
        {
            icon: <Users className="w-6 h-6" />,
            text: 'Interactive Instructor-Led Training Sessions',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            text: 'Improve Operational Efficiency and Reduce Defects',
        },
        {
            icon: <Monitor className="w-6 h-6" />,
            text: 'Real-World Case Studies and Practical Workshops',
        },
        {
            icon: <Award className="w-6 h-6" />,
            text: 'Industry-Designed Curriculum for Process Excellence',
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            text: 'Assignments and Trainer-Guided Assessments',
        },
        {
            icon: <Map className="w-6 h-6" />,
            text: 'Strong Foundation for Green & Black Belt Certifications',
        },
    ];

    const individualBenefits = [
        {
            title: 'Enhanced Problem-Solving Skills',
            description:
                'Develop structured analytical thinking to identify root causes and eliminate defects effectively.',
        },
        {
            title: 'Career Advancement',
            description:
                'Increase employability in quality management, operations, and process improvement roles.',
        },
        {
            title: 'Global Recognition',
            description:
                'Gain knowledge of globally recognized Six Sigma concepts valued across industries.',
        },
        {
            title: 'Practical Implementation',
            description:
                'Learn how to apply DMAIC methodology within your organization.',
        },
    ];

    const corporateBenefits = [
        {
            title: 'Improved Process Efficiency',
            description:
                'Streamline workflows and eliminate inefficiencies through structured improvement methods.',
        },
        {
            title: 'Reduced Operational Costs',
            description:
                'Minimize defects and waste to improve overall business performance.',
        },
        {
            title: 'Higher Customer Satisfaction',
            description:
                'Deliver consistent quality products and services to enhance customer trust.',
        },
        {
            title: 'Data-Driven Decision Making',
            description:
                'Enable teams to make informed decisions using measurable insights.',
        },
    ];


    const careerStats = {
        averageIncome: '$85k-115k',
        incomeLabel: 'average annual salary',
        employmentGrowth: 'High Demand',
        growthLabel: 'Across Manufacturing, IT & Service Industries',
    };

    const attendees = [
        {
            group: [
                'Quality Professionals',
                'Process Improvement Specialists',
                'Operations Managers',
            ],
        },
        { group: ['Business Analysts', 'Project Coordinators', 'Team Leaders'] },
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
        'Understand Six Sigma fundamentals and core principles.',
        'Apply DMAIC methodology to real business processes.',
        'Identify root causes of defects and process variations.',
        'Support continuous improvement initiatives within organizations.',
    ];

    const prerequisites = [
        'Basic understanding of business processes',
        'Interest in quality management and process improvement',
        'No prior Six Sigma certification required',
    ];

    const certificationSteps = [
        {
            title: 'Enroll in Training',
            description:
                'Register for the Six Sigma Fundamentals program and receive access to learning materials.',
        },
        {
            title: 'Attend Live Sessions',
            description:
                'Participate in interactive online or classroom training sessions.',
        },
        {
            title: 'Complete Assignments',
            description:
                'Submit practical exercises and weekend assignments for evaluation.',
        },
        {
            title: 'Assessment & Completion',
            description:
                'Complete trainer assessments and successfully finish the course.',
        },
    ];

    const curriculumModules = [
        {
            title: 'Introduction to Six Sigma',
            topics: [
                'Definition and Concept of Six Sigma',
                'History and Evolution',
                'Importance in Modern Organizations',
            ],
        },
        {
            title: 'DMAIC Framework Overview',
            topics: [
                'Define Phase',
                'Measure Phase',
                'Analyze Phase',
                'Improve Phase',
                'Control Phase',
            ],
        },
        {
            title: 'Continuous Improvement',
            topics: [
                'Process Variation',
                'Quality Improvement Concepts',
                'When to Use Six Sigma',
            ],
        },
        {
            title: 'Roles in Six Sigma',
            topics: [
                'Yellow Belt',
                'Green Belt',
                'Black Belt',
                'Project Teams & Stakeholders',
            ],
        },
    ];

    const learningObjectives = [
        {
            title: 'Understand Six Sigma Principles',
            description:
                'Gain foundational knowledge of Six Sigma philosophy and quality improvement practices.',
        },
        {
            title: 'Implement DMAIC',
            description:
                'Learn structured problem-solving through DMAIC methodology.',
        },
        {
            title: 'Reduce Process Variation',
            description:
                'Identify inefficiencies and eliminate defects systematically.',
        },
        {
            title: 'Drive Organizational Excellence',
            description:
                'Contribute effectively to operational improvement initiatives.',
        },
    ];


    const faqCategories = [
        {
            id: 'general',
            label: 'General FAQs',
            items: [
                {
                    question: 'What is the validity of the Six Sigma Fundamentals certification??',
                    answer:
                        'The certification is valid for a lifetime. No renewal is required.',
                },
                {
                    question: 'How can I get certified?',
                    answer:
                        'Register for the 1-day training, attend the session, and successfully clear the assessment. After completion, you will receive the certificate.',
                },
                {
                    question: 'What are the benefits of the training?',
                    answer:
                        'Understanding of Six Sigma concepts and DMAIC,Improved process and quality management skills,Ability to reduce waste and increase efficiency,Better career opportunities and professional recognition',
                },
                {
                    question: 'Are there any prerequisites?',
                    answer:
                        'No mandatory prerequisites. However, basic industry experience is helpful.',
                },
                {
                    question: 'What is Six Sigma Fundamentals?',
                    answer:
                        'It is a structured process improvement methodology using the DMAIC approach (Define, Measure, Analyze, Improve, Control) to enhance quality, reduce waste, and improve organizational performance.',
                },
            ],
        },
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
                'Raquel Silva is a Quality and Continuous Improvement Specialist with extensive experience in process optimization and operational excellence initiatives. She helps teams apply Six Sigma fundamentals, identify root causes, and implement sustainable improvements that enhance performance and customer satisfaction.',
            image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
    ];

    const courseWhySimpliaxis = [
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
            courseCode: 'SSF',
            courseName: 'Six Sigma Fundamentals Certification Training',
            dateRange: 'Feb 28 - Mar 01, 2026',
            timeRange: '08:30 AM - 04:30 PM IST',
            trainerName: 'Naveen Nanjundappa',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 49,080',
            discountedPrice: 'INR 34,356',
            discountPercentage: '30',
        },
    ];

    const certificateBenefits = [
        'Industry-Recognized Six Sigma Fundamentals Certificate',
        'Digital Certificate (PDF) for Professional Use',
        'Validation of Process Improvement & DMAIC Knowledge',
        'Strong Foundation for Green Belt & Black Belt Certifications',
    ];


    const heroData = {
        courseName: 'Six Sigma Fundamentals Certification Training',
        breadcrumbName: 'Six Sigma Fundamentals Training',
        rating: '5.0',
        enrolledCount: '45k+',

        subtitle:
            'Master the Core Principles of Six Sigma and Drive Process Excellence',
        benefits: [
            'One-Day Intensive Six Sigma Fundamentals Program',
            'Learn DMAIC Framework and Quality Management Concepts',
            'Live Interactive Sessions with Industry Experts',
            'Recorded Sessions & Practical Workshops Included',
            'Foundation for Green Belt & Black Belt Certifications',
        ],
        mainImage:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
        badgeImage: '/csm-badge.png',
    };

    const overviewContent = {
        title: 'Course Overview',
        subtitle: 'Six Sigma Fundamentals Course Overview',
        description: [
            'Six Sigma Fundamentals is an intensive one-day training program designed to introduce professionals to the core principles of Six Sigma and quality management methodologies. The course provides a structured understanding of process improvement techniques aimed at reducing defects and enhancing organizational performance.',
            'Participants gain foundational knowledge of the DMAIC (Define, Measure, Analyze, Improve, Control) framework and learn how to apply it effectively within real business environments to drive measurable success.',
            'As organizations increasingly focus on operational excellence and customer satisfaction, Six Sigma knowledge has become a valuable skill across industries. This course builds a strong base for individuals planning to advance toward Green Belt and Black Belt certifications.',
            'Through interactive sessions, practical workshops, and guided exercises, learners develop clarity on continuous improvement concepts and how Six Sigma can be implemented within their teams and organizations.',
        ],
        whatIsTitle: 'What is Six Sigma Fundamentals Training?',
        whatIsDescription: [
            'Six Sigma Fundamentals training introduces a data-driven approach to improving business processes by minimizing variation and eliminating defects.',
            'It provides an overview of quality improvement methodologies and explains when and how Six Sigma techniques should be applied within an organization.',
            'This foundational course prepares professionals to understand structured problem-solving using measurable metrics and performance indicators.',
        ],
        whatsIncludedTitle: 'What’s Included in Our Six Sigma Fundamentals Training?',
        whatsIncludedDescription: [
            'Live Instructor-Led Interactive Sessions',
            'One-Day Intensive Training Program (Online or Classroom)',
            'Practical Workshops and Real-World Case Discussions',
            'Recorded Sessions for Revision and Continuous Learning',
            'Assignments and Progress Assessments',
            'Comprehensive Study Materials',
            'Trainer Guidance and Doubt-Clearing Sessions',
            'Course Completion Certificate',
        ],
        skillsTitle: 'Key Skills You Will Gain from This Course:',
        skills: [
            'Understanding of Six Sigma Principles and Concepts',
            'Knowledge of DMAIC Framework',
            'Process Mapping and Improvement Techniques',
            'Identification of Process Variation and Root Causes',
            'Data-Driven Decision Making',
            'Continuous Improvement Mindset',
            'Quality Management Fundamentals',
            'Customer-Focused Process Optimization',
        ],
        modesTitle: 'Training Delivery Modes:',
        modesDescription: [
            'Instructor-Led Live Online Sessions',
            'Offline Classroom Training (Based on Availability)',
            'Interactive Workshops and Practical Exercises',
            'Access to Recorded Sessions for Flexible Learning',
        ],
    };

    const corporateData = {
        courseName: 'Why Viovn Technologies Is the Right Corporate Training Partner?',
        label: '',
        buttonText: 'Corporate Group Enquiry',
        description:
            'At Viovn Technologies, we design customized Six Sigma corporate training programs tailored to your organization’s unique processes, challenges, and strategic goals. Our structured learning approach helps enterprises strengthen quality standards, improve operational efficiency, and build a culture of continuous improvement. We deliver corporate training across industries through flexible formats including live virtual sessions and on-site workshops. Trusted by growing enterprises and established organizations alike, our expert trainers provide practical, industry-focused modules that empower teams to implement Six Sigma methodologies effectively and drive measurable business results.',
    };

    const courseMetadata = {
        shortName: 'SSF',
        shortNameAlt: 'Six Sigma Fundamentals',
        fullName: 'Six Sigma Fundamentals Certification Training',
        fullNameAlt: 'Six Sigma Fundamentals Program',
        certificateName: 'Six Sigma Fundamentals Certificate',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName}?`,
            outcomesFooter:
                "After completing the Six Sigma Fundamentals certification, participants gain a strong foundation in process improvement methodologies, enabling them to contribute effectively to quality enhancement initiatives and operational excellence within their organizations.",
        },

        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Six Sigma Fundamentals Training?',
        },

        certificate: {
            mockupName: 'JOHN DOE',
            label: 'Course Completion Certificate',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Six Sigma',
            titleSuffix: 'Certification',
            issuerName: 'Viovn Technologies',
            certificateType: 'Certificate of Completion',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully completed the Six Sigma Fundamentals training program and demonstrated foundational knowledge in process improvement methodologies.',
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
            ltpLabel: 'Global LTP of Six Sigma Certifications',
            downloadBtnText: 'Download Brochure',
            viewSchedulesBtnText: 'View Schedules',
            freeAssessmentBtnText: 'Free Assesment',
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

export default QualitySixSigmaFundamentals;