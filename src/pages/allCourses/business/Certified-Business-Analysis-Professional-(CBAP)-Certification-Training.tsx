import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import CourseHero from '../../../components/courses/CourseHero';
import CourseFeatures from '../../../components/courses/CourseFeatures';
import CourseTabs from '../../../components/courses/CourseTabs';
import CourseHighlights from '../../../components/courses/overview/CourseHighlights';
import CourseCareerUpliftment from '../../../components/courses/overview/CourseCareerUpliftment';
import CourseLearningObjectives from '../../../components/courses/curriculum/CourseLearningObjectives';
import CourseBenefits from '../../../components/courses/benefits/CourseBenefits';
import CourseCommonAttendees from '../../../components/courses/benefits/CourseCommonAttendees';
import CoursePrerequisites from '../../../components/courses/prerequisites/CoursePrerequisites';
import CourseCurriculum from '../../../components/courses/curriculum/CourseCurriculum';
import CourseFAQs from '../../../components/courses/faqs/CourseFAQs';
import CourseCorporateOptUs from '../../../components/courses/CourseCorporateOptUs';
import CourseClients from '../../../components/courses/CourseClients';
import CourseTrainers from '../../../components/courses/CourseTrainers';
import CourseWhyViovn from '../../../components/courses/CourseWhyViovn';
import CourseSidePanel from '../../../components/courses/CourseSidePanel';
import CourseStepByStepProcess from '../../../components/courses/prerequisites/CourseStepByStepProcess';
import CourseCertificate from '../../../components/courses/prerequisites/CourseCertificate';
import {
    CheckCircle2,
    Users,
    Award,
    Network,
    Globe,
    FileText,
    Headset,
    Star
} from 'lucide-react';

const CertifiedBusinessAnalysisProfessionalCBAPCertificationTraining = () => {
    const highlights = [
        { text: "35 hours of comprehensive CBAP® training sessions.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 35 PDUs, 35 CDUs, and 35 IIBA PD Hours.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Training content fully aligned with the BABOK® Guide v3.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Master core business analysis concepts and frameworks.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Live, interactive CBAP classes led by certified experts.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Complete assistance with CBAP certification exam application.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Professional Expertise",
            "description": "Demonstrates your knowledge, competencies, and extensive experience as a business analysis professional."
        },
        {
            "title": "Enhanced Credibility",
            "description": "Gain enhanced credibility among employers and global organizations by validated skills."
        },
        {
            "title": "Higher Earning Potential",
            "description": "CBAP-certified professionals earn up to 13% more compared to non-certified peers."
        },
        {
            "title": "Global Recognition",
            "description": "CBAP is recognized worldwide as a benchmark of excellence in business analysis."
        },
        {
            "title": "Career Advancement",
            "description": "Opens doors to senior-level roles and strategic business transformation initiatives."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Operational Performance",
            "description": "Improved organizational performance through structured business analysis practices."
        },
        {
            "title": "Project Efficiency",
            "description": "Enhanced project efficiency and solution quality with reduced project risks and delayed timelines."
        },
        {
            "title": "Standardized Frameworks",
            "description": "Consistent application of standardized business analysis frameworks across the organization."
        },
        {
            "title": "Competitive Advantage",
            "description": "Gain competitive advantage through globally certified professionals and better alignment of business needs."
        },
        {
            "title": "Strategic Collaboration",
            "description": "Stronger stakeholder collaboration and strategic decision-making through globally aligned frameworks."
        }
    ];

    const careerStats = {
        averageIncome: "$90,000 - $120,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "13% higher pay",
        growthLabel: "for CBAP certified professionals",
    };

    const attendeeList = [
        "Experienced Business Analysts",
        "Project Managers and Business Architects",
        "Systems and Enterprise Analysts",
        "Process Analysts and Product Managers",
        "Requirements Engineers",
        "Strategy Consultants"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const companyList = [
        { "name": "Google", "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { "name": "Amazon", "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { "name": "Microsoft", "url": "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { "name": "IBM", "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "Accenture", "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "Deloitte", "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" }
    ];

    const outcomeList = [
        "Analyze complex business challenges and recommend strategic solutions",
        "Apply BABOK® techniques for requirements elicitation and validation",
        "Prioritize and manage requirements lifecycle effectively",
        "Make data-driven business decisions using advanced frameworks",
        "Lead digital transformation and innovation initiatives with confidence",
        "Bridge the gap between business objectives and technical implementation"
    ];

    const prerequisites = [
        "Minimum 7,500 hours of business analysis experience within the last 10 years",
        "At least 3,600 hours across 4 of the 6 BABOK® Guide Knowledge Areas",
        "35 hours of professional development in BA within the last 4 years",
        "Two professional references and agreement to IIBA’s Code of Conduct"
    ];

    const certificationSteps = [
        {
            "title": "Meet Eligibility",
            "description": "Ensure you meet the required 7,500 hours of experience and BABOK knowledge area criteria.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Complete Training",
            "description": "Attend Viovn’ 35-hour CBAP training aligned with BABOK® Guide v3.",
            "color": "#F59E0B"
        },
        {
            "title": "Apply for Exam",
            "description": "Submit your CBAP application with references and required documentation to IIBA.",
            "color": "#10B981"
        },
        {
            "title": "Pass the Exam",
            "description": "Successfully complete the 120-question CBAP exam within 3.5 hours to earn certification.",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "BA Planning and Monitoring",
            "topics": [
                "Plan and define the business analysis approach",
                "Identify and analyze stakeholders",
                "Define governance and decision-making processes",
                "Manage information and requirements lifecycle"
            ]
        },
        {
            "title": "Requirements Life Cycle Management",
            "topics": [
                "Manage requirements traceability and accuracy",
                "Maintain requirements reusability",
                "Prioritize and approve requirements",
                "Manage requirement changes effectively"
            ]
        },
        {
            "title": "Strategy Analysis",
            "topics": [
                "Analyze business needs and opportunities",
                "Assess capability gaps between current and future states",
                "Evaluate risks associated with solutions",
                "Define strategic change initiatives"
            ]
        },
        {
            "title": "Analysis and Design Definition",
            "topics": [
                "Model and document requirements",
                "Verify and validate requirements",
                "Define solution options and architecture",
                "Recommend optimal solutions"
            ]
        },
        {
            "title": "Solution Evaluation",
            "topics": [
                "Measure solution performance",
                "Assess enterprise limitations",
                "Recommend actions to enhance solution value",
                "Continual value delivery assessment"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "BA Planning & Monitoring",
            "description": "Understand how to plan, monitor, and manage business analysis activities across the project lifecycle."
        },
        {
            "title": "Requirements Elicitation",
            "description": "Master advanced techniques for gathering, documenting, and validating stakeholder requirements."
        },
        {
            "title": "Strategic Analysis",
            "description": "Analyze business objectives and align solutions with organizational strategy and state caps."
        },
        {
            "title": "Solution Design",
            "description": "Develop structured solution designs using modeling and analytical techniques like solution evaluation."
        },
        {
            "title": "Core Competencies",
            "description": "Enhance critical thinking, communication, leadership, and stakeholder management skills."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "CBAP FAQs",
            "items": [
                {
                    "question": "1. What is the CBAP® certification?",
                    "answer": "The CBAP® certification, offered by the International Institute of Business Analysis (IIBA), is a globally recognized credential for senior business analysts. It validates expertise in requirements management, strategic analysis, and stakeholder engagement."
                },
                {
                    "question": "2. What are the prerequisites for CBAP training?",
                    "answer": "Prerequisites include at least 7,500 hours of BA work experience in the last 10 years, 35 hours of professional development, and alignment with BABOK Knowledge Areas."
                },
                {
                    "question": "3. How long is the CBAP training?",
                    "answer": "The CBAP training program consists of 35 hours of instructor-led sessions aligned with BABOK Guide v3."
                },
                {
                    "question": "4. Does the course include exam preparation?",
                    "answer": "Yes, our program includes full exam preparation with mock tests, practice questions, and application support."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "General Professional FAQs",
            "items": [
                {
                    "question": "1. Why choose Viovn for CBAP training?",
                    "answer": "Viovn is a top-rated training provider offering expert-led sessions, comprehensive study materials, and 24/7 support to ensure you pass your CBAP exam on the first attempt."
                },
                {
                    "question": "2. Is the CBAP certification recognized globally?",
                    "answer": "Yes, CBAP is recognized worldwide as the benchmark of excellence in the business analysis profession."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: '35 Hours',
            subtitle: 'Live Training',
            color: 'bg-accent text-primary',
        },
        {
            icon: Award,
            title: '35 PDUs/CDUs',
            subtitle: 'Credit Hours',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'IIBA Aligned',
            subtitle: 'BABOK® v3',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: Globe,
            title: 'Global',
            subtitle: 'Recognition',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Full Support',
            subtitle: 'Exam Assistance',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Headset,
            title: '24/7',
            subtitle: 'Learner Support',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        { "name": "Wells Fargo", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg" },
        { "name": "Infosys", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "Bosch", "logo": "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
        { "name": "Capgemini", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "KPMG", "logo": "https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg" },
        { "name": "Accenture", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" }
    ];

    const courseTrainers = [
        {
            name: 'Senior CBAP Trainer',
            role: 'Lead Business Architect',
            rating: '5.0',
            experience: '20+ Years',
            description: 'Our trainers are industry leaders with decades of experience in business analysis and strategic transformation.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "IIBA Aligned Content",
            "description": "Every module is mapped to the BABOK® Guide v3 ensuring you get the most relevant training for the CBAP exam."
        },
        {
            "title": "Expert Practitioners",
            "description": "Gain knowledge from certified professionals who impart real-world insights and practical experience."
        },
        {
            "title": "Application Support",
            "description": "We provide end-to-end assistance with your IIBA certification application, including audit support."
        },
        {
            "title": "Flexible Learning",
            "description": "Choose from live online, classroom, or self-paced modes designed to fit your professional schedule."
        },
        {
            "title": "Lifetime Access",
            "description": "Enjoy lifetime access to the recording of your sessions and core course materials."
        },
        {
            "title": "Proven Exam Success",
            "description": "Our training methodology is designed to help you pass the CBAP exam on your very first attempt with confidence."
        }
    ];

    

    const certificateBenefits = [
        'Globally benchmarked CBAP credential from IIBA',
        'Demonstrated expertise in Requirements Management',
        'Earn 35 PDUs/CDUs and professional recognition',
        'Vastly improved career opportunities in senior BA roles'
    ];

    const heroData = {
        "courseName": "Certified Business Analysis Professional (CBAP®) Training",
        "breadcrumbName": "CBAP Certification Course Training | IIBA Business Analyst Program",
        "rating": "5.0",
        "enrolledCount": "2500+ professionals trained",
        "subtitle": "Advance Your Career with Globally Recognized CBAP Certification aligned with BABOK® Guide v3.",
        "benefits": [
            "35-hour intensive live training sessions",
            "Earn 35 PDUs | 35 CDUs | 35 IIBA PD Hours",
            "Full exam preparation with mock tests",
            "Application and exam support assistance"
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Overview of the CBAP Certification Training Course",
        "description": [
            "The CBAP certification program by Viovn is designed for experienced business analysts seeking advanced-level expertise. This comprehensive training aligns with the BABOK® Guide v3 and prepares professionals to manage complex requirements, strategic initiatives, and enterprise-level solutions.",
            "Participants gain practical insights through real-world case studies, structured frameworks, and exam-focused preparation techniques. The program equips you to confidently pass the CBAP exam and advance into senior leadership roles within business analysis."
        ],
        "whatIsTitle": "What is Certified Business Analysis Professional (CBAP®)?",
        "whatIsDescription": [
            "The CBAP® certification, offered by the IIBA, is the most recognized credential for senior business analysis professionals worldwide.",
            "It validates your ability to lead complex business transformations and ensures alignment with global industry standards."
        ],
        "whatsIncludedTitle": "What’s Included in the CBAP Training?",
        "whatsIncludedDescription": [
            "35 hours of live instructor-led training",
            "BABOK® Guide v3 study materials and prep resources",
            "Full exam simulate questions and mock tests",
            "Application assistance and professional reference guidance"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Viovn for CBAP?",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "Viovn delivers customized CBAP corporate training programs tailored to enterprise requirements. Our expert-led sessions help organizations standardize business analysis practices, reduce project risks, and enhance stakeholder collaboration."
    };

    const courseMetadata = {
        shortName: 'CBAP',
        shortNameAlt: 'CBAP',
        fullName: 'Certified Business Analysis Professional (CBAP®) Training',
        fullNameAlt: 'Certified Business Analysis Professional (CBAP®) Training',
        certificateName: 'CBAP Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your CBAP Training, you will be proficient in strategic analysis and requirements lifecycle management at an enterprise level.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for CBAP Certification Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'CBAP Professional',
            titleSuffix: 'Badge',
            issuerName: 'IIBA® (Viovn Partners)',
            certificateType: 'Certificate of Achievement',
            certifyText: 'This is to certify that',
            requirementText: 'Has successfully fulfilled all requirements to be recognized as a specialist in',
            signer1Role: 'Certified BA Trainer',
            signer2Role: 'Executive Director',
        },
    };

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
            ltpLabel: 'Viovn Leading Training Provider',
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
                            {overviewContent.description.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                                {overviewContent.whatIsTitle}
                            </h3>
                            {overviewContent.whatIsDescription.map((p: string, i: number) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                                {overviewContent.whatsIncludedTitle}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-slate-700 font-medium leading-[1.7] text-[15px]">
                                {overviewContent.whatsIncludedDescription.map((item: string, i: number) => (
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
                        attendees={attendeeGroups}
                        companies={companyList}
                        outcomes={outcomeList}
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
                    categoryName="business"
                    categoryLink="/category/business"
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
                                <CourseSidePanel  courseName={heroData.courseName} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CertifiedBusinessAnalysisProfessionalCBAPCertificationTraining;
