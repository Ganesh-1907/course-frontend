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
    Settings,
    UserCheck,
    Award,
    BookOpen,
    Network,
    CreditCard,
    FileText,
    Briefcase,
    TrendingUp,
    Star,
    CheckCircle2
} from "lucide-react";

const ManageAgileProjectsUsingScrumTraining = () => {
    const highlights = [
        { text: "Opportunity to learn the Scrum Framework and Agile methodologies from experienced trainers.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Earn 8 Professional Development Units (PDUs) and 8 Scrum Education Units (SEUs).", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Training delivered by experienced and certified Agile coaches.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Instructor-led sessions featuring real-world case studies and practical applications.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Receive a recognized certification in Managing Agile Projects Using Scrum from a trusted industry training provider.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Build a strong foundation to pursue advanced Scrum and Agile certifications.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: 'Foundational Knowledge',
            description: 'Gain a solid understanding of Agile principles and Scrum practices.'
        },
        {
            title: 'Efficient Management',
            description: 'Learn how to manage Agile projects efficiently using the Scrum framework.'
        },
        {
            title: 'Improved Productivity',
            description: 'Improve collaboration and productivity in Agile teams.'
        },
        {
            title: 'Career Advancement',
            description: 'Enhance career opportunities in Agile project management roles.'
        }
    ];

    const corporateBenefits = [
        {
            title: 'Faster Delivery',
            description: 'Enable teams to deliver projects faster using Agile methodologies.'
        },
        {
            title: 'Seamless Collaboration',
            description: 'Improve communication and collaboration between cross-functional teams.'
        },
        {
            title: 'Project Transparency',
            description: 'Enhance project transparency and stakeholder engagement.'
        },
        {
            title: 'Effective Adoption',
            description: 'Support organizations in adopting Agile and Scrum practices effectively.'
        }
    ];

    const careerStats = {
        averageIncome: "$95,000 - $120,000",
        incomeLabel: "per annum",
        employmentGrowth: 'Strong demand',
        growthLabel: '(Global)',
    };

    const attendees = [
        {
            group: [
                'Project Managers',
                'Team Leaders',
                'Software Developers',
                'Product Owners',
                'Business Analysts',
            ],
        }
    ];

    const companies = [
        {
            name: 'Google',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        },
        {
            name: 'Microsoft',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        },
        {
            name: 'Amazon',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
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
            name: 'Deloitte',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
    ];

    const outcomes = [
        "Understand Agile principles and Scrum fundamentals",
        "Apply Scrum practices to manage Agile projects",
        "Improve team collaboration using Scrum events and artifacts",
        "Deliver value-driven products using iterative development"
    ];

    const prerequisites = [
        "No prior Scrum experience is required",
        "Basic knowledge of project management is beneficial",
        "Interest in Agile methodologies and team collaboration"
    ];

    const certificationSteps = [
        {
            title: 'Enrollment',
            description: 'Enroll in the Manage Agile Projects Using Scrum training program.',
            color: '#3B82F6'
        },
        {
            title: 'Attend Training',
            description: 'Attend the instructor-led training session.',
            color: '#F59E0B'
        },
        {
            title: 'Practical Exercises',
            description: 'Participate in case studies and practical exercises.',
            color: '#10B981'
        },
        {
            title: 'Completion',
            description: 'Complete the training successfully.',
            color: '#6366F1'
        },
        {
            title: 'Get Certified',
            description: 'Receive the certification from Simpliaxis.',
            color: '#8B5CF6'
        }
    ];

    const curriculumModules = [
        {
            "title": "Manage Agile Projects Using Scrum Certification Training",
            "topics": [
                "History and evolution of Agile methodologies",
                "Introduction to Scrum: origin, definition, and overview",
                "Agile Manifesto: Four values and twelve principles",
                "Scrum framework and workflow",
                "Scrum roles and responsibilities",
                "Scrum artifacts and their significance",
                "Scrum events and ceremonies",
                "Real-world Scrum case studies",
                "Applying Scrum in non-software projects"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Agile Principles",
            description: "Understand Agile principles and Scrum framework"
        },
        {
            title: "Implementation",
            description: "Learn how to implement Scrum in Agile projects"
        },
        {
            title: "Management Skills",
            description: "Develop skills for managing Scrum teams and workflows"
        },
        {
            title: "Collaboration",
            description: "Improve collaboration and project delivery using Agile methods"
        }
    ];

    const faqCategories = [
        {
            "id": "certification",
            "label": "Certification FAQs",
            "items": [
                {
                    "question": "1. Who is a certified Manage Agile Projects Using Scrum professional?",
                    "answer": "A certified professional in Managing Agile Projects Using Scrum understands Agile principles and Scrum practices and can effectively apply them to manage Agile projects in real-world environments."
                },
                {
                    "question": "2. What are the prerequisites for this course?",
                    "answer": "There are no mandatory prerequisites. Anyone interested in Agile project management or transitioning from traditional project management to Agile can enroll."
                },
                {
                    "question": "3. What are the benefits of this course?",
                    "answer": "This course provides a strong foundation in Agile and Scrum practices, enabling professionals to manage Agile projects effectively and pursue advanced Scrum certifications."
                },
                {
                    "question": "4. How can I obtain the certification?",
                    "answer": "Enroll in the training program, attend the sessions, and successfully complete the course to receive the certification."
                },
                {
                    "question": "5. How long is the certification valid?",
                    "answer": "The certification is valid for a lifetime."
                }
            ]
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
    ];

    const courseTrainers = [
        {
            name: 'Ram Srinivasan',
            role: 'Certified Scrum Trainer (CST)',
            rating: '4.8',
            experience: '15+ Years',
            description: 'Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhySimpliaxis = [
        {
            "title": "Global Recognition",
            "description": "Our courses are recognized by leading certification bodies worldwide, ensuring credibility and acceptance across industries."
        },
        {
            "title": "Expert Trainers",
            "description": "Learn from certified professionals with extensive industry experience and practical knowledge."
        },
        {
            "title": "Flexible Learning",
            "description": "Choose from classroom sessions, live virtual training, or corporate programs tailored to your schedule."
        },
        {
            "title": "Lifetime Access",
            "description": "Access course materials, session recordings, and study resources throughout the year."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'APM',
            courseName: 'Agile Project Management with Scrum Training',
            dateRange: 'Mar 15 - Mar 16, 2026',
            timeRange: '09:00 AM - 05:00 PM IST',
            trainerName: 'Ram Srinivasan',
            trainerImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,000',
            discountedPrice: 'INR 9,999',
            discountPercentage: '33',
        },
    ];

    const certificateBenefits = [
        "Digital Badge for LinkedIn & PDF Copy",
        "Access to Premium Alumni Network",
        "Lifetime Access to Course Materials",
    ];

    const heroData = {
        courseName: 'Manage Agile Projects Using Scrum  Training',
        breadcrumbName: 'Agile Project Management with Scrum Certification Training',
        rating: '5.0',
        enrolledCount: '2000+ professionals trained',
        subtitle: 'Learn how to manage Agile projects effectively using the Scrum framework.',
        benefits: [
            "Instructor-led expert training",
            "Real-world Scrum case studies",
            "Industry-recognized certification"
        ],
        mainImage: 'https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif',
        badgeImage: '/csm-badge.png',
    };

    const overviewContent = {
        title: 'Course Overview',
        subtitle: 'Course Overview',
        description: [
            "Scrum is one of the most widely used Agile frameworks that helps teams deliver value-driven products through iterative and incremental development. This course introduces participants to the core concepts of Scrum and Agile project management.",
            "Through instructor-led sessions and practical examples, participants will learn how to collaborate effectively, manage product development cycles, and deliver high-quality products aligned with customer needs."
        ],
        whatIsTitle: 'What is Scrum in Agile Project Management?',
        whatIsDescription: [
            "Scrum is an Agile framework used to manage complex projects through iterative development, collaboration, and continuous improvement."
        ],
        whatsIncludedTitle: "What's Included",
        whatsIncludedDescription: [
            "Instructor-led training sessions",
            "Real-world case studies",
            "Hands-on Scrum exercises",
            "Certification upon successful completion"
        ],
        skillsTitle: 'Skills You Will Gain',
        skills: [
            "Scrum framework implementation",
            "Agile project management",
            "Sprint planning and backlog management",
            "Team collaboration and communication"
        ],
    };

    const corporateData = {
        courseName: 'Why Corporates Choose Us',
        label: 'Corporate Training',
        buttonText: 'Corporate Group Enquiry',
        description: "Simpliaxis delivers customized corporate training programs designed to help organizations adopt Agile practices and improve workforce capabilities. Our expert trainers provide tailored learning modules that help enterprises bridge skill gaps, enhance productivity, and build high-performing Agile teams.",
    };

    const courseMetadata = {
        shortName: 'Scrum',
        shortNameAlt: 'Agile Project Management',
        fullName: 'Manage Agile Projects Using Scrum',
        fullNameAlt: 'Managing Agile Projects with Scrum',
        certificateName: 'Agile Project Management using Scrum',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your certification, you will be equipped to handle Agile projects and move towards advanced Scrum certifications.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for Managing Agile Projects with Scrum?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Global',
            titleSuffix: 'Recognition',
            issuerName: 'Simpliaxis',
            certificateType: 'Certificate of Achievement',
            certifyText: 'This is to certify that',
            requirementText: 'Has successfully fulfilled all requirements to be recognized as an expert in',
            signer1Role: 'Certified Coach',
            signer2Role: 'Managing Director',
        },
    };

    const commonAttendeesList = [
        'Project Managers',
        'Team Leaders',
        'Software Developers',
        'Product Owners',
        'Business Analysts',
        'Scrum Enthusiasts'
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
            ltpLabel: 'Global Training Provider',
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

export default ManageAgileProjectsUsingScrumTraining;
