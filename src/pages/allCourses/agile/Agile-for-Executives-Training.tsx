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
    CheckCircle2,
    Star
} from "lucide-react";

const AgileForExecutivesTraining = () => {
    const highlights = [
        { text: "Interactive instructor-led sessions delivered by experienced and certified trainers.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Learn Agile principles and leadership practices directly from industry experts.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Gain practical experience in applying Agile methodologies to drive organizational transformation.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Receive continuous guidance through monthly webinars, expert sessions, and learning resources.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Comprehensive course material that provides a detailed understanding of Agile practices for executives.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Modern Leadership",
            "description": "Understand Agile frameworks and leadership strategies used by modern organizations."
        },
        {
            "title": "Transformation Mastery",
            "description": "Develop the ability to guide Agile transformation initiatives within teams."
        },
        {
            "title": "Strategic Decision-making",
            "description": "Improve decision-making and leadership skills in Agile environments."
        },
        {
            "title": "Operational Insights",
            "description": "Gain insights into managing Agile teams and maximizing productivity."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Operational Efficiency",
            "description": "Enable organizations to adopt Agile strategies for improved operational efficiency."
        },
        {
            "title": "Leadership Alignment",
            "description": "Improve communication and transparency across leadership and development teams."
        },
        {
            "title": "Accelerated Delivery",
            "description": "Enhance project delivery speed through Agile management practices."
        },
        {
            "title": "Enterprise Transformation",
            "description": "Empower executives to lead Agile transformation across the organization."
        }
    ];

    const careerStats = {
        averageIncome: "$100,000 - $140,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "High demand",
        growthLabel: "for Agile leadership roles",
    };

    const attendeeList = [
        "Executives",
        "Senior Managers",
        "Program Managers",
        "Agile Coaches",
        "Transformation Leaders",
        "Business Leaders interested in Agile adoption"
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
        "Understand Agile principles from a leadership perspective",
        "Implement Agile strategies within organizations",
        "Drive Agile transformation initiatives",
        "Improve collaboration between leadership and development teams"
    ];

    const prerequisites = [
        "No mandatory prerequisites are required",
        "Basic knowledge of Agile concepts is beneficial",
        "Experience in management or leadership roles is helpful"
    ];

    const certificationSteps = [
        {
            "title": "Enrolment",
            "description": "Enroll in the Agile for Executives training program.",
            "color": "#3B82F6"
        },
        {
            "title": "Training",
            "description": "Attend the instructor-led training sessions.",
            "color": "#F59E0B"
        },
        {
            "title": "Engagement",
            "description": "Participate in discussions, exercises, and case studies.",
            "color": "#10B981"
        },
        {
            "title": "Completion",
            "description": "Complete the workshop successfully.",
            "color": "#8B5CF6"
        },
        {
            "title": "Certification",
            "description": "Receive the Agile for Executives certification.",
            "color": "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            "title": "Agile for Executives Certification Training",
            "topics": [
                "Introduction to Agile",
                "The Agile Manifesto",
                "Strategic Agile planning",
                "Tactical Agile planning",
                "Modern management theories",
                "Agile Software Development Life Cycle (SDLC)",
                "Agile leadership principles",
                "Monitoring and reporting in Agile environments",
                "Agile governance models",
                "Return on Investment (ROI) in Agile adoption",
                "Common Agile failure modes and how to avoid them",
                "Practical Agile development exercise"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Agile Leadership",
            description: "Understand Agile principles and leadership practices from a strategic perspective."
        },
        {
            title: "Transformation Strategy",
            description: "Learn how executives can drive and support Agile transformation across an organization."
        },
        {
            title: "Strategic Decision-making",
            description: "Improve strategic decision-making by using Agile frameworks and modern management theories."
        },
        {
            title: "Organizational Productivity",
            description: "Enhance organizational productivity through effective Agile management and governance."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "Certification FAQs",
            "items": [
                {
                    "question": "1. What is Agile for Executives certification?",
                    "answer": "This certification provides executives, managers, and leaders with practical knowledge of Agile principles, tools, and techniques. It helps them improve decision-making, productivity, and leadership effectiveness while driving Agile transformation within organizations."
                },
                {
                    "question": "2. What are the prerequisites to attend the Agile for Executives course?",
                    "answer": "There are no mandatory prerequisites for attending this course, though professionals with a basic understanding of Agile concepts will benefit the most."
                },
                {
                    "question": "3. What are the benefits of Agile for Executives certification?",
                    "answer": "The certification helps executives understand Agile benefits, build trust between teams and management, improve transparency in communication, and transition from traditional command-and-control management styles to collaborative leadership."
                },
                {
                    "question": "4. How can I obtain the Agile for Executives certification?",
                    "answer": "Enroll with a recognized training provider, complete the workshop, participate in training activities, and receive the certificate upon successful completion of the program."
                },
                {
                    "question": "5. How long is the certification valid?",
                    "answer": "The Agile for Executives certification is valid for a lifetime."
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
            "description": "All courses are recognized by leading certification organizations worldwide, ensuring credibility and industry acceptance."
        },
        {
            "title": "Expert Trainers",
            "description": "Learn from experienced professionals who bring real-world knowledge and leadership insights to the training sessions."
        },
        {
            "title": "Flexible Learning",
            "description": "Choose from classroom sessions, live virtual training, or customized corporate programs."
        },
        {
            "title": "Lifetime Access",
            "description": "Get continuous access to course materials, recordings, and learning resources."
        },
        {
            "title": "Proven Track Record",
            "description": "A trusted training provider helping professionals and organizations achieve measurable business results."
        },
        {
            "title": "End-to-End Support",
            "description": "Receive guidance before, during, and after training, including certification assistance and career support."
        },
        {
            "title": "Interactive Training Experience",
            "description": "Training sessions include real-world examples, group discussions, and interactive activities."
        },
        {
            "title": "Wide Range of Courses",
            "description": "Simpliaxis offers globally recognized certifications in Agile, Scrum, SAFe, DevOps, Project Management, and many other technologies."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'AEW',
            courseName: 'Agile for Executives Training',
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Expert Trainer',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 29,999',
            discountedPrice: 'INR 19,999',
            discountPercentage: '33',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for Lifetime',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        "courseName": "Agile for Executives Training",
        "breadcrumbName": "Agile for Executives Certification Training | Agile for Executives Course",
        "rating": "5.0",
        "enrolledCount": "1500+ executives trained",
        "subtitle": "Learn how to lead Agile transformation and drive organizational success.",
        "benefits": [
            "Instructor-led expert training",
            "Real-world Agile leadership strategies",
            "Globally recognized certification"
        ],
        "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Course Overview",
        "description": [
            "The Agile for Executives training program helps business leaders understand Agile principles and how they impact leadership, decision-making, and organizational strategy.",
            "Participants will learn how to lead Agile transformation initiatives, foster collaboration, and drive continuous improvement within their organizations."
        ],
        "whatIsTitle": "What is Agile Leadership?",
        "whatIsDescription": [
            "Agile leadership focuses on empowering teams, promoting collaboration, and encouraging continuous improvement to deliver business value faster."
        ],
        "whatsIncludedTitle": "What's Included",
        "whatsIncludedDescription": [
            "Instructor-led training sessions",
            "Case studies and practical exercises",
            "Industry-relevant learning resources",
            "Certification upon completion"
        ],
        "skillsTitle": "Skills You Will Gain",
        "skills": [
            "Agile leadership",
            "Strategic Agile planning",
            "Organizational transformation",
            "Team collaboration",
            "Decision-making in Agile environments"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Us",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "Simpliaxis provides customized corporate training programs tailored to the unique needs of organizations. Our expert trainers help enterprises bridge skill gaps, adopt Agile practices, and build high-performing teams capable of driving innovation and achieving business success."
    };

    const courseMetadata = {
        shortName: 'AEW',
        shortNameAlt: 'AEW',
        fullName: 'Agile for Executives Training',
        fullNameAlt: 'Agile for Executives Training',
        certificateName: 'Agile for Executives',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter:
                "After completing your Agile for Executives Training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
        },
        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Agile for Executives Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Agile',
            titleSuffix: 'Recognition',
            issuerName: 'Simpliaxis',
            certificateType: 'Certificate of Achievement',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully fulfilled all requirements to be recognized as an',
            signer1Role: 'Certified Trainer',
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
            ltpLabel: 'Simpliaxis Leading Training Provider',
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

export default AgileForExecutivesTraining;
