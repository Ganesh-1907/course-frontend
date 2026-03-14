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

const LeanSixSigmaBlackBeltCertification = () => {
    const highlights = [
        {
            icon: <TrendingUp className="w-6 h-6" />,
            text: 'Advanced Lean & Six Sigma Tools for Enterprise Transformation',
        },
        {
            icon: <Settings className="w-6 h-6" />,
            text: 'Deep Dive into DMAIC with Statistical Analysis',
        },
        {
            icon: <Users className="w-6 h-6" />,
            text: 'Lead Large-Scale Cross-Functional Projects',
        },
        {
            icon: <Monitor className="w-6 h-6" />,
            text: 'Hands-on Minitab & Data Interpretation Workshops',
        },
        {
            icon: <Award className="w-6 h-6" />,
            text: 'Globally Recognized Lean Six Sigma Black Belt Certificate',
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            text: 'Project Mentoring & Real-Time Case Discussions',
        },
    ];

    const individualBenefits = [
        {
            title: 'Enterprise-Level Leadership',
            description:
                'Lead complex cross-functional projects that drive strategic business transformation.',
        },
        {
            title: 'Advanced Statistical Mastery',
            description:
                'Develop deep expertise in hypothesis testing, regression, ANOVA, and Design of Experiments.',
        },
        {
            title: 'Executive-Level Career Growth',
            description:
                'Position yourself for senior roles in Quality, Operations, and Continuous Improvement.',
        },
        {
            title: 'Global Recognition & Credibility',
            description:
                'Earn a globally respected certification demonstrating advanced process excellence expertise.',
        },
    ];

    const corporateBenefits = [
        {
            title: 'Enterprise-Wide Transformation',
            description:
                'Drive large-scale operational transformation aligned with strategic business objectives.',
        },
        {
            title: 'Sustainable Cost Optimization',
            description:
                'Deliver measurable financial impact through structured waste elimination and defect reduction.',
        },
        {
            title: 'Leadership Capability Development',
            description:
                'Build internal Black Belt leaders capable of mentoring Green Belts and project teams.',
        },
        {
            title: 'Data-Backed Strategic Decisions',
            description:
                'Strengthen executive decision-making with advanced statistical validation.',
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
        'Lead large-scale Lean Six Sigma transformation initiatives.',
        'Apply advanced statistical tools to validate business improvements.',
        'Mentor and coach Green Belt professionals.',
        'Drive measurable cost savings and operational excellence.',
    ];

    const prerequisites = [
        'Lean Six Sigma Green Belt Certification (Recommended)',
        'Understanding of Basic Statistical Concepts',
        'Experience in Process Improvement Projects (Preferred)',
    ];

    const certificationSteps = [
        {
            title: 'Enroll in Black Belt Program',
            description:
                'Register and gain access to course materials and live sessions.',
        },
        {
            title: 'Attend Training Sessions',
            description:
                'Complete instructor-led sessions covering advanced tools and case studies.',
        },
        {
            title: 'Complete Capstone Project',
            description:
                'Submit a real-world improvement project for evaluation.',
        },
        {
            title: 'Pass Certification Assessment',
            description:
                'Successfully clear the examination to earn certification.',
        },
    ];

    const curriculumModules = [
        {
            title: 'Lean Principles & Advanced Six Sigma Concepts',
            topics: [
                'Lean Foundations & Waste Elimination',
                'Enterprise Value Stream Mapping',
                'Advanced DMAIC Structure',
            ],
        },
        {
            title: 'Define & Measure Phase (Advanced)',
            topics: [
                'Project Charter & Stakeholder Analysis',
                'Voice of Customer (VOC)',
                'Measurement System Analysis (MSA)',
            ],
        },
        {
            title: 'Analyze Phase',
            topics: [
                'Hypothesis Testing',
                'Regression Analysis',
                'ANOVA & Statistical Modeling',
            ],
        },
        {
            title: 'Improve & Control Phase',
            topics: [
                'Design of Experiments (DOE)',
                'Risk Mitigation Strategies',
                'Control Plans & Statistical Process Control',
            ],
        },
        {
            title: 'Leadership & Change Management',
            topics: [
                'Leading Cross-Functional Teams',
                'Mentoring Green Belts',
                'Driving Organizational Change',
            ],
        },
    ];

    const learningObjectives = [
        {
            title: 'Master Advanced Statistical Analysis',
            description:
                'Apply statistical tools to identify root causes and validate process improvements.',
        },
        {
            title: 'Lead High-Impact Projects',
            description:
                'Drive cross-functional initiatives that deliver measurable business outcomes.',
        },
        {
            title: 'Implement Lean Strategies',
            description:
                'Eliminate waste and optimize value streams across the organization.',
        },
        {
            title: 'Mentor & Guide Teams',
            description:
                'Support Green Belts and improvement teams through structured leadership.',
        },
    ];


    const faqCategories = [
        {
            id: 'general',
            label: 'General FAQs',
            items: [
                {
                    question: 'Who should pursue Lean Six Sigma Black Belt?',
                    answer:
                        'Professionals aiming to lead strategic improvement projects, quality managers, senior analysts, and operations leaders.',
                },
                {
                    question: 'Is Green Belt mandatory?',
                    answer:
                        'While not always mandatory, prior Green Belt knowledge is strongly recommended.',
                },
                {
                    question: 'What is the certification validity?',
                    answer:
                        'The certification is valid for a lifetime.',
                },
                {
                    question: 'Does this include practical project work?',
                    answer:
                        'Yes, participants complete real-world case studies and a capstone project.',
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
            courseCode: 'LSSBB',
            courseName: 'Lean Six Sigma Black Belt Certification',
            dateRange: 'Mar 15 - Mar 30, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Senior Master Black Belt',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 85,000',
            discountedPrice: 'INR 59,500',
            discountPercentage: '30',
        },
    ];

    const certificateBenefits = [
        'Industry-Recognized Lean Six Sigma Black Belt Certificate',
        'Digital Certificate (PDF) for Professional Use',
        'Validation of Process Improvement & DMAIC Knowledge',
        'Strong Foundation for Green Belt & Black Belt Certifications',
    ];


    const heroData = {
        courseName: 'Lean Six Sigma Black Belt Certification Training Program',
        breadcrumbName: 'Lean Six Sigma Black Belt Training',
        rating: '5.0',
        enrolledCount: '52k+',

        subtitle:
            'Master Advanced Process Excellence & Lead Enterprise-Level Transformation Projects',
        benefits: [
            'Advanced DMAIC & Lean Methodologies',
            'Hands-on Statistical Analysis & Minitab Exposure',
            'Lead Cross-Functional Improvement Projects',
            'Real-World Case Studies & Capstone Project',
            'Globally Recognized Black Belt Certification',
        ],
        topLabel: 'Top Rated Lean Six Sigma Black Belt Certification',
        mainImage:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070',
        badgeImage: '/csm-badge.png',
    };

    const overviewContent = {
        title: 'Course Overview',
        subtitle: 'Lean Six Sigma Black Belt Course Overview',
        description: [
            'Lean Six Sigma Black Belt Certification is an advanced-level program designed for professionals who aim to lead strategic improvement initiatives and drive measurable business impact.',
            'This course equips learners with deep expertise in DMAIC methodology, statistical tools, Lean principles, and leadership techniques required to manage enterprise-wide transformation projects.',
            'Participants develop the capability to analyze complex datasets, reduce process variation, eliminate waste, and optimize operational performance.',
            'Black Belt professionals play a critical role in mentoring Green Belts and supporting executive leadership in data-driven decision-making.',
        ],
        whatIsTitle: 'What is Lean Six Sigma Black Belt Certification?',
        whatIsDescription: [
            'Lean Six Sigma Black Belt is an advanced process improvement certification focusing on statistical analysis, structured problem-solving, and leadership in transformation initiatives.',
            'It enables professionals to manage high-impact projects, implement sustainable improvements, and align operational excellence with business strategy.',
        ],
        whatsIncludedTitle: 'What’s Included in This Training?',
        whatsIncludedDescription: [
            'Live Instructor-Led Sessions',
            'Advanced Statistical Tools & Techniques',
            'Real-World Project Case Studies',
            'Minitab Demonstrations',
            'Capstone Project & Assignments',
            'Comprehensive Study Materials',
            'Exam Preparation Support',
            'Globally Recognized Certification',
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
        shortName: 'LSSBB',
        shortNameAlt: 'Lean Six Sigma Black Belt',
        fullName: 'Lean Six Sigma Black Belt Certification Training',
        fullNameAlt: 'Lean Six Sigma Black Belt Program',
        certificateName: 'Lean Six Sigma Black Belt Certificate',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName}?`,
            outcomesFooter:
                "After completing the Lean Six Sigma Black Belt certification, professionals gain advanced expertise in statistical analysis, project leadership, and enterprise-level transformation initiatives, enabling them to drive measurable business impact across organizations.",
        },

        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Lean Six Sigma Black Belt?',
        },

        certificate: {
            mockupName: 'JOHN DOE',
            label: 'Course Completion Certificate',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Lean Six Sigma Black Belt',
            titleSuffix: 'Certification',
            issuerName: 'Viovn Technologies',
            certificateType: 'Certificate of Completion',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully completed the Lean Six Sigma Black Belt training program and demonstrated advanced knowledge in process excellence, statistical analysis, and leadership methodologies.',
            signer1Role: 'Master Black Belt Trainer',
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

export default LeanSixSigmaBlackBeltCertification;