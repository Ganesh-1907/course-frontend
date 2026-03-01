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

const TestDrivenDevelopmentTDDTraining = () => {
    const highlights = [
        { text: "Learn how to build high-quality and reliable software systems that meet defined testing specifications." },
        { text: "Develop cleaner and more maintainable code while continuously improving it through refactoring." },
        { text: "Understand scaling techniques used in complex real-world software architectures." },
        { text: "Join a training program that combines practical exercises, live demonstrations, and theoretical learning." },
        { text: "Earn up to 16 Professional Development Units (PDUs) and Scrum Educational Units (SEUs)." },
        { text: "Learn the process of a Test-Driven Development session including user story design, faster system development, and identifying poor code." },
        { text: "Practice micro-testing individual components and transform complex classes into well-structured and maintainable code." }
    ];

    const individualBenefits = [
        {
            title: 'Practical Experience',
            description: 'Gain hands-on experience in Test-Driven Development practices.',
        },
        {
            title: 'Code Quality',
            description: 'Improve code quality and maintainability using automated testing.',
        },
        {
            title: 'Debugging Skills',
            description: 'Develop strong debugging and problem-solving skills.',
        },
        {
            title: 'Career Opportunities',
            description: 'Enhance career opportunities in Agile and software development roles.',
        },
    ];

    const corporateBenefits = [
        {
            title: 'Quality Debt Reduction',
            description: 'Improve overall code quality and reduce technical debt.',
        },
        {
            title: 'Faster Delivery',
            description: 'Enable teams to deliver reliable software faster.',
        },
        {
            title: 'Better Collaboration',
            description: 'Encourage collaboration between developers, testers, and product owners.',
        },
        {
            title: 'Agile Best Practices',
            description: 'Adopt Agile testing and development best practices.',
        },
    ];

    const careerStats = {
        averageIncome: '$100k - $140k',
        incomeLabel: 'per annum',
        employmentGrowth: '25%',
        growthLabel: '(Average Salary Growth)',
    };

    const attendees = [
        {
            group: [
                "Software Developers",
                "Quality Assurance Engineers",
                "Test Automation Engineers",
            ],
        },
        {
            group: [
                "Agile Practitioners",
                "Technical Leads",
                "DevOps Engineers"
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
        "Ability to write automated tests before implementing code.",
        "Understanding of clean code practices and refactoring techniques.",
        "Improved collaboration between development and testing teams.",
        "Capability to build scalable and maintainable software systems."
    ];

    const prerequisites = [
        "Basic knowledge of programming concepts.",
        "Experience with any programming language such as Java, Python, or JavaScript.",
        "Understanding of software development lifecycle.",
        "Basic knowledge of testing concepts is recommended."
    ];

    const certificationSteps = [
        {
            title: 'Enroll',
            description: 'Enroll in the Test-Driven Development (TDD) training program.',
        },
        {
            title: 'Attend',
            description: 'Attend the complete training sessions and participate in practical exercises.',
        },
        {
            title: 'Complete',
            description: 'Complete the course requirements and assessments.',
        },
        {
            title: 'Receive',
            description: 'Receive your TDD training certification upon successful completion.',
        },
    ];

    const curriculumModules = [
        {
            title: 'Acceptance Test-Driven Development (ATDD) and BDD',
            topics: [
                'Challenges in collaboration between business and development teams',
                'Writing effective test case specifications',
                'Importance of examples in specifications',
                'Creating Gherkin scenarios for testing',
                'Principles of Acceptance Test-Driven Development',
                'Impact of ATDD on Sprint Planning and Sprint Review',
                'Core principles of Behavior-Driven Development',
                'Practicing BDD using tools like Cucumber and SpecFlow'
            ],
        },
        {
            title: 'Agile Requirements and Acceptance Test Driven Development',
            topics: [
                'Understanding unit testing and its importance',
                'Difference between integration testing and unit testing',
                'Roles of developers and testers in unit testing',
                'Benefits of Test-Driven Development',
                'Improving code design through testing',
                'Different testing types: unit, integration, and functional testing'
            ],
        },
        {
            title: 'Mocking, Continuous Integration, and Agile Testing',
            topics: [
                'Understanding technical debt and the risk of breaking code',
                'Refactoring: when, where, and how to apply it',
                'How TDD and ATDD support safe refactoring',
                'Best practices and limitations of refactoring',
                'Emergent design in Agile development',
                'Scalability principles and implementation'
            ],
        },
        {
            title: 'Test Double and Mocking',
            topics: [
                'Understanding Test Doubles and when to use them',
                'Introduction to mocking in unit testing',
                'Using mocking frameworks in practice',
                'Common refactoring patterns',
                'Working effectively with legacy code'
            ],
        }
    ];

    const learningObjectives = [
        {
            title: 'TDD Fundamentals',
            description: 'Understand the fundamentals of Test-Driven Development.',
        },
        {
            title: 'Automated Testing',
            description: 'Write automated unit tests before implementing application code.',
        },
        {
            title: 'Refactoring Skills',
            description: 'Apply refactoring techniques to maintain clean and efficient code.',
        },
        {
            title: 'Mocking & Test Doubles',
            description: 'Use mocking frameworks and test doubles effectively.',
        },
        {
            title: 'Scalable Architecture',
            description: 'Implement scalable and maintainable software architecture.',
        },
    ];

    const faqCategories = [
        {
            id: 'courses',
            label: 'FAQ Courses',
            items: [
                {
                    question: 'What is Test-Driven Development (TDD) training?',
                    answer: 'TDD training helps developers understand how to write automated tests before writing production code, focusing on code quality and scalability.',
                },
                {
                    question: 'Who should attend the TDD course?',
                    answer: 'Software developers, QA engineers, test automation engineers, and anyone involved in software development who wants to improve code quality.',
                },
                {
                    question: 'What are the benefits of TDD?',
                    answer: 'Benefits include reduced technical debt, faster delivery of reliable software, and better code maintainability.',
                }
            ],
        },
        {
            id: 'payment',
            label: 'FAQ Payment',
            items: [
                {
                    question: 'What payment options are available for TDD training?',
                    answer: 'We accept credit cards, debit cards, net banking, PayPal, and corporate bank transfers.',
                },
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
            title: "Global Recognition",
            description: "Our courses are recognized by globally respected certification bodies, ensuring credibility and acceptance across industries."
        },
        {
            title: "Expert Trainers",
            description: "Learn from experienced trainers who provide practical insights based on real-world industry experience."
        },
        {
            title: "Flexible Learning",
            description: "Choose from multiple learning formats including classroom, online, and corporate training programs."
        },
        {
            title: "Lifetime Access",
            description: "Access training recordings, course materials, and study resources anytime."
        },
        {
            title: "Proven Track Record",
            description: "A trusted training provider helping professionals and organizations improve their skills and career growth."
        },
        {
            title: "End-to-End Support",
            description: "Receive continuous guidance before, during, and after the training including certification support."
        },
        {
            title: "Interactive Training",
            description: "Engage in highly interactive sessions with real-world scenarios, discussions, and practical exercises."
        },
        {
            title: "Wide Range of Courses",
            description: "Choose from globally recognized certifications in Agile, Scrum, DevOps, Project Management, and more."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'TDD',
            courseName: 'Test-Driven Development (TDD) Training',
            dateRange: 'Mar 15 - Mar 16, 2026',
            timeRange: '08:30 AM - 04:30 PM IST',
            trainerName: 'Axel Wilhelm Berle',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 45,000',
            discountedPrice: 'INR 35,000',
            discountPercentage: '22',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for 2 Years with SEUs/PDUs',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        courseName: "Test Driven Development (TDD) Training",
        breadcrumbName: "Test-Driven Development (TDD) Course | TDD Training",
        rating: "5.0",
        enrolledCount: "2500+",
        subtitle: "Master modern software development with Test-Driven Development practices.",
        benefits: [
            "Hands-on coding sessions",
            "Real-world case studies",
            "Industry-recognized certification"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Learn Test-Driven Development from Industry Experts",
        description: [
            "This Test-Driven Development (TDD) training helps developers understand how to write automated tests before writing production code.",
            "The course focuses on improving code quality, reducing bugs, and building scalable applications using modern Agile practices."
        ],
        whatIsTitle: "What is Test-Driven Development?",
        whatIsDescription: [
            "Test-Driven Development is a software development methodology where developers write tests before implementing the actual functionality.",
            "It ensures high-quality code, better maintainability, and faster feedback during development."
        ],
        whatsIncludedTitle: "What’s Included in the Course",
        whatsIncludedDescription: [
            "Instructor-led training sessions",
            "Hands-on coding exercises",
            "Real-world development scenarios",
            "Certification upon completion"
        ],
        skillsTitle: "Skills You Will Gain",
        skills: [
            "Test-Driven Development",
            "Unit Testing",
            "Refactoring",
            "Clean Code Practices",
            "Agile Testing"
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
        buttonText: "Corporate Group Enquiry",
        description: "Simpliaxis provides customized corporate training programs tailored to the unique requirements of organizations. Our expert trainers deliver industry-relevant knowledge that helps teams improve productivity, close skill gaps, and stay competitive in a rapidly evolving technology landscape."
    };

    const courseMetadata = {
        shortName: 'TDD',
        shortNameAlt: 'TDD',
        fullName: 'Test-Driven Development (TDD)',
        fullNameAlt: 'Test-Driven Development (TDD)',
        certificateName: 'TDD Training',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter:
                "After completing your Test-Driven Development (TDD) Training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
        },
        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for TDD Training?',
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
        "Software Developers",
        "Quality Assurance Engineers",
        "Test Automation Engineers",
        "Agile Practitioners",
        "Technical Leads",
        "DevOps Engineers"
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

export default TestDrivenDevelopmentTDDTraining;
