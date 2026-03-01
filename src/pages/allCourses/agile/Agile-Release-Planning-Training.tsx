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

const AgileReleasePlanningTraining = () => {
    const highlights = [
        { text: "Interactive sessions conducted by expert trainers", icon: <Star className="w-5 h-5" /> },
        { text: "State-of-the-art methods and practices for Agile Release Planning", icon: <Star className="w-5 h-5" /> },
        { text: "The real-world practices to support both single and multi-team projects.", icon: <Star className="w-5 h-5" /> },
        { text: "Effective learning with the help of study material and hands-on guide about Agile Release Planning", icon: <Star className="w-5 h-5" /> },
        { text: "Post-training support to clear the concepts and resolve the doubts", icon: <Star className="w-5 h-5" /> },
        { text: "Experiential learning from top-rated professional trainers", icon: <Star className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: 'Clear Understanding',
            description: 'Develop a clear understanding of Agile Release Planning concepts.',
        },
        {
            title: 'Effective Planning',
            description: 'Learn to plan product releases effectively in Agile environments.',
        },
        {
            title: 'Collaboration',
            description: 'Improve collaboration between development teams and stakeholders.',
        },
        {
            title: 'Career Prospects',
            description: 'Enhance your career prospects in Agile and project management roles.',
        },
    ];

    const corporateBenefits = [
        {
            title: 'Multi-Team Coordination',
            description: 'Improve coordination across multiple Agile teams.',
        },
        {
            title: 'Efficient Delivery',
            description: 'Deliver product releases more efficiently and predictably.',
        },
        {
            title: 'Risk Reduction',
            description: 'Reduce project risks through better planning and collaboration.',
        },
        {
            title: 'Agile Adoption',
            description: 'Strengthen Agile adoption within teams and organizations.',
        },
    ];

    const careerStats = {
        averageIncome: '$90k - $130k',
        incomeLabel: 'per annum',
        employmentGrowth: '25%',
        growthLabel: '(Average Salary Growth)',
    };

    const attendees = [
        {
            group: [
                'Scrum Masters',
                'Agile Coaches',
                'Product Owners',
            ],
        },
        {
            group: [
                'Project Managers',
                'Business Analysts',
                'Team Members'
            ]
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
        "Understand how to create effective Agile release plans.",
        "Learn to manage product backlogs and prioritize business value.",
        "Improve coordination across cross-functional teams.",
        "Deliver high-quality software releases using Agile practices."
    ];

    const prerequisites = [
        "Basic understanding of Agile and Scrum principles is recommended.",
        "Experience working in software development or project management is beneficial.",
        "Interest in Agile frameworks and team collaboration."
    ];

    const certificationSteps = [
        {
            title: 'Enroll',
            description: 'Enroll in the Agile Release Planning Certification Training.',
            color: '#3B82F6'
        },
        {
            title: 'Attend',
            description: 'Attend all instructor-led sessions and practical exercises.',
            color: '#F59E0B'
        },
        {
            title: 'Learn',
            description: 'Complete the course learning modules successfully.',
            color: '#10B981'
        },
        {
            title: 'Certify',
            description: 'Receive your Agile Release Planning certification after completion.',
            color: '#8B5CF6'
        },
    ];

    const curriculumModules = [
        {
            "title": "Agile Release Planning Certification Training",
            "topics": [
                "Overview of Agile Release Planning",
                "Discussion of Release Plan Refactoring",
                "Why ARP as a team is better",
                "Doing Agile Release Planning",
                "Product Vision",
                "Product Backlog",
                "Business Value",
                "Risks, Dependencies, Learning, MMFS, other",
                "Drawing the line (scope and date)",
                "Team Velocity",
                "Budget (briefly)",
                "Communications \"plan\"",
                "Rolling into the first Sprint"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: 'Fundamentals',
            description: 'Understand the fundamentals of Agile Release Planning.',
        },
        {
            title: 'Priority Management',
            description: 'Learn how to prioritize product backlogs effectively.',
        },
        {
            title: 'Release Alignment',
            description: 'Plan product releases while balancing scope, schedule, and budget.',
        },
        {
            title: 'Risk Management',
            description: 'Identify and manage risks and dependencies across teams.',
        },
        {
            title: 'Collaboration',
            description: 'Improve collaboration between product owners, teams, and stakeholders.',
        },
    ];

    const faqCategories = [
        {
            id: 'category_1',
            label: 'General FAQ',
            items: [
                {
                    question: "What is Agile Release Planning?",
                    answer: "Agile Release Planning is a product management approach that considers the intangible and flexible nature of software development. In this approach, teams plan iteration Sprints across incremental releases. Agile Release Planning must set up an equilibrium between the customer expectations and overall quality taking into account the constraints of scope, schedule, and budget."
                },
                {
                    question: "What are the prerequisites to attend the Agile Release Planning training?",
                    answer: "There are no prerequisites to attend the Agile Release Planning training however it is recommended to have a basic knowledge of Agile and Scrum."
                },
                {
                    question: "What are the benefits of Agile Release Planning certification training?",
                    answer: "Benefits include setting up clear goals that guide the release, getting expertise to track progress towards a minimum viable product, and being able to anticipate and plan for technical and cross-team dependencies."
                }
            ]
        },
        {
            id: 'payment',
            label: 'FAQ Payment',
            items: [
                {
                    question: 'What payment methods are available?',
                    answer: 'All types of payment methods are available. You can pay Online through Credit Cards, Debit Cards and Net Banking, Direct Bank Transfer/Wire Transfer/Wallet to our account and many more.',
                }
            ],
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
            role: 'Certified Scrum Trainer (CST)',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Agile Coach',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel Wilhelm Berle has been an international IT consultant and software developer in a wide range of industries, helping teams achieve peak performance.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Raquel Silva',
            role: 'Agile Coach & Mentor',
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
        },
        {
            "title": "Interactive and engaging Training",
            "description": "Our Training sessions are designed to be extremely interactive, featuring real-world scenarios with group participation, questions & answers to aid in understanding."
        },
        {
            "title": "A wide range of courses",
            "description": "Simpliaxis offers various internationally acknowledged certification courses in Agile, Scrum, SAFe, DevOps, Project Management, and more."
        }
    ];
    const sidePanelSchedules = [
        {
            courseCode: 'ARP',
            courseName: 'Agile Release Planning Training',
            dateRange: 'Apr 20 - Apr 21, 2026',
            timeRange: '08:30 AM - 04:30 PM IST',
            trainerName: 'Axel Wilhelm Berle',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 42,000',
            discountedPrice: 'INR 32,000',
            discountPercentage: '24',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for 2 Years with SEUs/PDUs',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        courseName: "Agile Release Planning Certification Training",
        breadcrumbName: "Agile Release Planning Course Training",
        rating: "5.0",
        enrolledCount: "1800+",
        subtitle: "Master Agile Release Planning and deliver successful product releases.",
        benefits: [
            "Hands-on training sessions",
            "Industry-recognized certification",
            "Real-world Agile case studies"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Learn Agile Release Planning from Industry Experts",
        description: [
            "The Agile Release Planning Certification Training provides a comprehensive understanding of how Agile teams plan and deliver product releases efficiently.",
            "Participants will learn how to balance scope, time, and budget while aligning product goals with business objectives."
        ],
        whatIsTitle: "What is Agile Release Planning?",
        whatIsDescription: [
            "Agile Release Planning is a strategic approach that helps Agile teams organize and schedule product releases in a structured yet flexible manner.",
            "It enables teams to prioritize work, manage dependencies, and ensure the timely delivery of high-quality products."
        ],
        whatsIncludedTitle: "What’s Included in the Course",
        whatsIncludedDescription: [
            "Hands-on practical exercises",
            "Real-world Agile planning scenarios",
            "Certification upon successful completion"
        ],
        skillsTitle: "Skills You Will Gain",
        skills: [
            "Agile Release Planning",
            "Backlog Management",
            "Risk and Dependency Management",
            "Agile Product Strategy",
            "Team Collaboration"
        ],
        modesTitle: "Training Modes",
        modesDescription: [
            "Live Virtual Instructor-Led Training",
            "Corporate Team Training",
            "Self-Paced E-Learning"
        ]
    };

    const corporateData = {
        courseName: "Why Corporates Choose Us",
        label: "",
        buttonText: "Corporate Group enquiry",
        description: "Simpliaxis offers customized corporate training programs designed to address the specific needs of organizations. Our expert trainers help teams strengthen Agile capabilities, close skill gaps, and improve productivity through industry-relevant knowledge and practical learning approaches."
    };

    const courseMetadata = {
        shortName: 'ARP',
        shortNameAlt: 'ARP',
        fullName: 'Agile Release Planning',
        fullNameAlt: 'Agile Release Planning',
        certificateName: 'Agile Release Planning',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter:
                "After completing your Agile Release Planning training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
        },
        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Agile Release Planning Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Global',
            titleSuffix: 'Recognition',
            issuerName: 'Simpliaxis',
            certificateType: 'Certificate of Completion',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully fulfilled all requirements to be recognized as a',
            signer1Role: 'Certified Trainer',
            signer2Role: 'Executive Director',
        },
    };

    const commonAttendeesList = [
        "Scrum Masters",
        "Agile Coaches",
        "Product Owners",
        "Project Managers",
        "Business Analysts",
        "Team Members"
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
            ltpLabel: 'Global Learning Training Provider',
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

export default AgileReleasePlanningTraining;
