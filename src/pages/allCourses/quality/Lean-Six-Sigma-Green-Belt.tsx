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
    TrendingUp,
    Star
} from "lucide-react";

const LeanSixSigmaGreenBeltCertification = () => {
    const highlights = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            text: 'Comprehensive Lean & Six Sigma Green Belt Curriculum',
        },
        {
            icon: <Settings className="w-6 h-6" />,
            text: 'Advanced DMAIC & Statistical Analysis Techniques',
        },
        {
            icon: <Users className="w-6 h-6" />,
            text: 'Instructor-Led Live Interactive Sessions',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            text: 'Lead Process Improvement Projects Confidently',
        },
        {
            icon: <Monitor className="w-6 h-6" />,
            text: 'Real-Time Case Studies & Practical Simulations',
        },
        {
            icon: <Award className="w-6 h-6" />,
            text: 'Globally Recognized Green Belt Certification',
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            text: 'Project-Based Assessments & Evaluations',
        },
        {
            icon: <Map className="w-6 h-6" />,
            text: 'Strong Pathway to Black Belt Certification',
        },
    ];

    const individualBenefits = [
        {
            title: 'Project Leadership Skills',
            description:
                'Develop the ability to lead improvement initiatives within your team or department.',
        },
        {
            title: 'High Industry Demand',
            description:
                'Green Belt professionals are highly valued across manufacturing, IT, healthcare, and service industries.',
        },
        {
            title: 'Increased Earning Potential',
            description:
                'Certification enhances credibility and salary growth opportunities.',
        },
        {
            title: 'Global Recognition',
            description:
                'Lean Six Sigma is recognized and respected worldwide.',
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
        averageIncome: '$95k-130k',
        incomeLabel: 'average annual salary',
        employmentGrowth: 'Very High Demand',
        growthLabel: 'Across Manufacturing, IT, BFSI & Healthcare',
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
        'Lead Lean Six Sigma Green Belt projects independently.',
        'Apply DMAIC methodology to real-world improvement initiatives.',
        'Use statistical tools to analyze and validate process improvements.',
        'Drive measurable operational excellence within organizations.',
    ];

    const prerequisites = [
        'Basic understanding of business processes',
        'Interest in quality management and analytics',
        'Yellow Belt knowledge is helpful but not mandatory',
    ];

    const certificationSteps = [
        {
            title: 'Enroll in Training',
            description:
                'Register for the Lean Six Sigma Green Belt program and receive access to learning materials.',
        },
        {
            title: 'Attend Live Sessions',
            description:
                'Participate in interactive online or classroom training sessions.',
        },
        {
            title: 'Complete Project & Assessment',
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
            title: 'Lean Fundamentals',
            topics: [
                'Lean Principles & Philosophy',
                '8 Types of Waste (DOWNTIME)',
                'Value Stream Mapping',
                '5S & Kaizen Concepts',
            ],
        },
        {
            title: 'Six Sigma Foundations',
            topics: [
                'Six Sigma Concepts & Metrics',
                'Roles & Responsibilities',
                'Process Capability',
                'Voice of Customer (VOC)',
            ],
        },
        {
            title: 'DMAIC Methodology',
            topics: [
                'Define Phase Tools',
                'Measure Phase & Data Collection',
                'Analyze Phase (Root Cause Analysis)',
                'Improve Phase Solutions',
                'Control Phase & Monitoring',
            ],
        },
        {
            title: 'Statistical & Analytical Tools',
            topics: [
                'Hypothesis Testing',
                'Regression Analysis',
                'Control Charts',
                'Pareto Analysis',
                'Fishbone Diagram',
            ],
        },
    ];

    const learningObjectives = [
        {
            title: 'Lead Process Improvement Projects',
            description:
                'Gain confidence in managing DMAIC-driven improvement initiatives.',
        },
        {
            title: 'Apply Lean Waste Reduction Techniques',
            description:
                'Identify and eliminate non-value-added activities effectively.',
        },
        {
            title: 'Use Statistical Tools for Decision Making',
            description:
                'Analyze data accurately to validate process improvements.',
        },
        {
            title: 'Improve Business Performance',
            description:
                'Deliver measurable cost savings and operational improvements.',
        },
    ];


    const faqCategories = [
        {
            id: 'general',
            label: 'General FAQs',
            items: [
                {
                    question: 'How long is the Lean Six Sigma Green Belt certification valid?',
                    answer:
                        'The certification does not expire and remains valid for a lifetime.',
                },
                {
                    question: 'What is the duration of the training?',
                    answer:
                        'The training typically spans 4 to 5 days, depending on delivery mode.',
                },
                {
                    question: 'Is project submission required?',
                    answer:
                        'Yes, participants are encouraged to complete a real-world project to reinforce practical application.',
                },
                {
                    question: 'Are there prerequisites?',
                    answer:
                        'Basic knowledge of business processes is helpful but not mandatory.',
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
            courseCode: 'LSSGB',
            courseName: 'Lean Six Sigma Green Belt Certification Training',
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
        'Industry-Recognized Lean Six Sigma Green Belt Certificate',
        'Digital Certificate (PDF) for Professional Use',
        'Validation of Process Improvement & DMAIC Knowledge',
        'Strong Foundation for Green Belt & Black Belt Certifications',
    ];


    const heroData = {
        courseName: 'Lean Six Sigma Green Belt Certification Training Program',
        breadcrumbName: 'Lean Six Sigma Green Belt Training',
        rating: '4.9',
        enrolledCount: '60k+',

        subtitle:
            'Master Lean & Six Sigma Tools to Lead Process Improvement Projects',

        benefits: [
            'Comprehensive Lean Six Sigma Green Belt Program',
            'Master DMAIC & Lean Waste Reduction Techniques',
            'Hands-On Project-Based Learning',
            'Real-World Case Studies & Practical Applications',
            'Globally Recognized Green Belt Certification',
        ],

        mainImage:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
        badgeImage: '/csm-badge.png',
    };

    const overviewContent = {
        title: 'Course Overview',
        subtitle: 'Lean Six Sigma Green Belt Certification Overview',
        description: [
            'Lean Six Sigma Green Belt training equips professionals with the knowledge and practical tools required to lead process improvement initiatives within their organizations.',
            'This program combines Lean principles focused on waste elimination with Six Sigma’s data-driven methodology to reduce process variation and improve quality.',
            'Participants gain hands-on experience in applying DMAIC (Define, Measure, Analyze, Improve, Control) to real-world business problems.',
            'Green Belt professionals play a critical role in bridging strategy and execution by managing improvement projects and driving measurable operational excellence.',
        ],

        whatIsTitle: 'What is Lean Six Sigma Green Belt?',
        whatIsDescription: [
            'Lean Six Sigma Green Belt is a professional certification that validates expertise in process improvement methodologies.',
            'It enables professionals to lead small to medium-scale improvement projects using structured statistical tools.',
            'Green Belts collaborate with Black Belts and senior leaders to drive sustainable performance improvements.',
        ],

        whatsIncludedTitle:
            'What’s Included in Our Lean Six Sigma Green Belt Training?',
        whatsIncludedDescription: [
            'Live Instructor-Led Training Sessions',
            'Comprehensive Study Material & Templates',
            'Practical Case Studies & Project Simulations',
            'Access to Statistical Tools & Frameworks',
            'Mock Exams & Practice Assessments',
            'Certification Exam Support',
            'Post-Training Mentorship & Guidance',
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
        shortName: 'LSSGB',
        shortNameAlt: 'Lean Six Sigma Green Belt',
        fullName: 'Lean Six Sigma Green Belt Certification Training',
        fullNameAlt: 'Lean Six Sigma Green Belt Program',
        certificateName: 'Lean Six Sigma Green Belt Certificate',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName}?`,
            outcomesFooter:
                "After completing the Lean Six Sigma Green Belt certification, participants gain a strong foundation in process improvement methodologies, enabling them to contribute effectively to quality enhancement initiatives and operational excellence within their organizations.",
        },

        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Lean Six Sigma Green Belt?',
        },

        certificate: {
            mockupName: 'JOHN DOE',
            label: 'Course Completion Certificate',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Lean Six Sigma Green Belt',
            titleSuffix: 'Certification',
            issuerName: 'Viovn Technologies',
            certificateType: 'Certificate of Completion',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully completed the Lean Six Sigma Green Belt training program and demonstrated foundational knowledge in process improvement methodologies.',
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
            ltpLabel: 'Global LTP of  Lean Six Sigma Certifications',
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
          categoryName="quality"
          categoryLink="/category/quality"
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

export default LeanSixSigmaGreenBeltCertification;