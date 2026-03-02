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

const LeanSixSigmaYellowBeltCertification = () => {
    const highlights = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            text: '16 hours of live, instructor-led training',
        },
        {
            icon: <Settings className="w-6 h-6" />,
            text: 'Earn 16 Professional Development Units (PDUs)',
        },
        {
            icon: <Users className="w-6 h-6" />,
            text: 'Interactive sessions with certified industry experts',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            text: 'Real-world examples and applied case studies',
        },
        {
            icon: <Monitor className="w-6 h-6" />,
            text: 'Comprehensive learning resources and reference materials',
        },
        {
            icon: <Award className="w-6 h-6" />,
            text: 'Experienced trainers with strong industry background',
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            text: 'Post-training guidance and learner support',
        },
        {
            icon: <Map className="w-6 h-6" />,
            text: 'Structured doubt-clearing and Q&A discussions',
        },
    ];

    const individualBenefits = [
        {
            title: 'Structured Problem-Solving Skills',
            description:
                'Develop analytical thinking and systematic approaches to solving process-related issues.',
        },
        {
            title: 'Professional Growth Opportunities',
            description:
                'Strengthen your profile for roles in quality management and operations improvement.',
        },
        {
            title: 'Industry-Relevant Knowledge',
            description:
                'Gain understanding of globally adopted Lean Six Sigma practices.',
        },
        {
            title: 'Practical Application Capability',
            description:
                'Apply foundational tools to support real-time process improvement initiatives.',
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
        'Understand Lean Six Sigma fundamentals and core principles.',
        'Apply DMAIC methodology to real business processes.',
        'Identify root causes of defects and process variations.',
        'Support continuous improvement initiatives within organizations.',
    ];

    const prerequisites = [
        'Basic understanding of organizational processes',
        'Interest in quality and operational excellence',
        'No prior Six Sigma certification required',
    ];

    const certificationSteps = [
        {
            title: 'Enroll in Training',
            description:
                ' Register for the Lean Six Sigma Yellow Belt program',
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
            title: 'Introduction to Lean Six Sigma',
            topics: [
                'Overview of Lean and Six Sigma Concepts',
                'Evolution and Significance',
                'Key Terminologies and Principles',
            ],
        },
        {
            title: 'DMAIC Framework',
            topics: [
                'Define: Project Identification and Scope',
                'Measure: Data Collection Basics',
                'Analyze: Root Cause Identification',
                'Improve: Solution Development',
                'Control: Sustaining Improvements',
            ],
        },
        {
            title: 'Core Quality Tools',
            topics: [
                'SIPOC Diagram',
                'Process Mapping',
                'Pareto Analysis',
                'Fishbone Diagram',
                '5 Whys Technique',
            ],
        },
        {
            title: 'Roles in Lean Six Sigma',
            topics: [
                'Yellow Belt Responsibilities',
                'Green Belt Overview',
                'Black Belt Overview',
                'Team Collaboration in Projects',
            ],
        },
    ];

    const learningObjectives = [
        {
            title: 'Understand Lean Six Sigma Fundamentals',
            description:
                'Build a strong foundation in Lean principles and Six Sigma methodology.',
        },
        {
            title: 'Apply DMAIC Methodology',
            description:
                'Understand how to support structured improvement projects using DMAIC phases.',
        },
        {
            title: 'Identify Process Inefficiencies',
            description:
                'Recognize process variations and contribute to defect reduction initiatives.',
        },
        {
            title: 'Support Continuous Improvement',
            description:
                'Assist teams in driving operational excellence and quality enhancement efforts.',
        },
    ];


    const faqCategories = [
        {
            id: 'general',
            label: 'General FAQs',
            items: [
                {
                    question: 'What is Lean Six Sigma Yellow Belt training?',
                    answer:
                        'Lean Six Sigma Yellow Belt training is a certification program that provides an introduction to the core principles of Lean and Six Sigma methodologies. It emphasizes process improvement fundamentals, waste elimination, and the application of basic problem-solving tools.',
                },
                {
                    question: 'Who should enroll in Lean Six Sigma Yellow Belt training?',
                    answer:
                        'The Lean Six Sigma Yellow Belt course is designed for entry-level professionals, team members, quality associates, and individuals who are new to process improvement. It is also well-suited for anyone seeking foundational knowledge of Lean Six Sigma principles without prior experience in quality management or operations.',
                },
                {
                    question: 'How long is the Lean Six Sigma Yellow Belt course?',
                    answer:
                        'The Lean Six Sigma Yellow Belt training typically spans 16 hours and may be delivered over two days or through structured live virtual sessions, depending on the training format.',
                },
                {
                    question: 'Are there any prerequisites?',
                    answer:
                        'No mandatory prerequisites. However, basic industry experience is helpful.',
                },
                {
                    question: 'What is Lean Six Sigma Yellow Belt certification?',
                    answer: 'It is a structured process improvement methodology using the DMAIC approach (Define, Measure, Analyze, Improve, Control) to enhance quality, reduce waste, and improve organizational performance.',
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
            role: 'Lean Six Sigma Master Black Belt',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Lean Six Sigma Black Belt',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel Wilhelm Berle has been an international IT consultant and software developer in a wide range of industries, helping teams achieve peak performance.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Raquel Silva',
            role: 'Process Excellence Consultant',
            rating: '4.8',
            experience: '10+ Years',
            description:
                'Raquel Silva is an Agile Coach who cares passionately about helping deliver value to clients through sustainable and effective Scrum practices.',
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
            courseCode: 'LSSYB',
            courseName: 'Lean Six Sigma Yellow Belt Certification Course',
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
        'Industry-Recognized Lean Six Sigma Yellow Belt Certificate',
        'Digital Certificate (PDF) for Professional Use',
        'Validation of Process Improvement & DMAIC Knowledge',
        'Strong Foundation for Green Belt & Black Belt Certifications',
    ];


    const heroData = {
        courseName: 'Lean Six Sigma Yellow Belt Certification Course',
        breadcrumbName: 'Lean Six Sigma Yellow Belt Training',
        rating: '5.0',
        enrolledCount: '45k+',

        subtitle:
            'Develop foundational expertise in Lean Six Sigma methodologies and contribute effectively to process improvement initiatives within your organization.',
        benefits: [
            'Master essential Lean Six Sigma concepts and structured problem-solving techniques',
            'Complete 16 hours of instructor-led training and earn 16 PDUs',
            'Understand the DMAIC framework and fundamental quality management tools',
            'Access comprehensive practice questions and exam-focused preparation material',
            'Earn a globally valued Lean Six Sigma Yellow Belt credential',
        ],
        mainImage:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
        badgeImage: '/csm-badge.png',
    };

    const overviewContent = {
        title: 'Course Overview',
        subtitle: 'Lean Six Sigma Yellow Belt (LSSYB) Course Overview',
        description: [
            'The Lean Six Sigma Yellow Belt training program provides a comprehensive introduction to Lean and Six Sigma principles, focusing on process improvement fundamentals and quality enhancement strategies. This course equips participants with practical knowledge to support improvement projects within their organizations.',
            'Learners gain exposure to structured methodologies such as DMAIC, along with essential tools including SIPOC diagrams, Voice of the Customer (VOC), process mapping, Pareto analysis, Fishbone diagrams, and the 5 Whys technique.',
            'The program emphasizes conceptual clarity and practical application rather than advanced statistical techniques, enabling participants to contribute effectively to quality initiatives.',
        ],
        whatIsTitle: 'What is Lean Six Sigma Yellow Belt?',
        whatIsDescription: [
            'Lean Six Sigma Yellow Belt certification serves as an entry-level credential designed for professionals seeking to understand the fundamentals of process improvement and quality management.',
            'A certified Yellow Belt professional supports project teams by identifying inefficiencies, collecting relevant data, and applying basic problem-solving tools within the DMAIC framework.',
        ],
        whatsIncludedTitle:
            'What’s Included in Our Lean Six Sigma Yellow Belt Certification Course?',
        whatsIncludedDescription: [
            'Participants receive access to structured learning materials, instructor-led sessions, practical exercises, real-world case discussions, and assessment support. The program includes downloadable resources, practice tests, and dedicated guidance from experienced trainers to ensure thorough preparation.',
        ],
    };
    const corporateData = {
        courseName: 'Why Viovn Technologies Is the Right Corporate Training Partner?',
        label: '',
        buttonText: 'Corporate Group Enquiry',
        description:
            'At Viovn Technologies, we design customized Lean Six Sigma Yellow Belt corporate training programs tailored to your organization’s process improvement goals. Our structured learning approach helps enterprises strengthen quality standards, improve operational efficiency, and build a culture of continuous improvement. We deliver corporate training across industries through flexible formats including live virtual sessions and on-site workshops. Trusted by growing enterprises and established organizations alike, our expert trainers provide practical, industry-focused modules that empower teams to implement Six Sigma methodologies effectively and drive measurable business results.',
    };

    const courseMetadata = {
        shortName: 'LSSYB',
        shortNameAlt: 'Lean Six Sigma Yellow Belt',
        fullName: 'Lean Six Sigma Yellow Belt Certification Training',
        fullNameAlt: 'Lean Six Sigma Yellow Belt Program',
        certificateName: 'Lean Six Sigma Yellow Belt Certificate',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName}?`,
            outcomesFooter:
                "After completing the Lean Six Sigma Yellow Belt certification, participants gain a strong foundation in process improvement methodologies, enabling them to contribute effectively to quality enhancement initiatives and operational excellence within their organizations.",
        },

        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Lean Six Sigma Yellow Belt Training?',
        },

        certificate: {
            mockupName: 'JOHN DOE',
            label: 'Course Completion Certificate',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Lean Six Sigma',
            titleSuffix: 'Certification',
            issuerName: 'Viovn Technologies',
            certificateType: 'Certificate of Completion',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully completed the Lean Six Sigma Yellow Belt training program and demonstrated foundational knowledge in Lean principles and the DMAIC methodology.', signer1Role: 'Lead Trainer',
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

export default LeanSixSigmaYellowBeltCertification;