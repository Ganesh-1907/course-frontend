import React from 'react';
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

const ChangeManagementTraining = () => {
    const highlights = [
        { text: "8 hours of live instructor-led training sessions.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Hands-on practical learning experiences.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Course completion certification.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Comprehensive and detailed courseware.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Pre- and post-training support.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Real-world case studies and examples.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "24/7 customer support and assistance.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Structured Understanding",
            "description": "Develop a structured understanding of change management principles and frameworks."
        },
        {
            "title": "Career Advancement",
            "description": "Demonstrate your ability to lead and manage change initiatives, making you more valuable to employers across industries."
        },
        {
            "title": "Leadership Skills",
            "description": "Stronger leadership and team management capabilities. Gain the skills required to guide teams through change and effectively handle resistance."
        },
        {
            "title": "Strategic Impact",
            "description": "Increase your strategic impact within the organization. Apply change management principles to improve productivity and long-term business outcomes."
        },
        {
            "title": "Professional Recognition",
            "description": "Broadened Knowledge Base: Learn practical models, tools, and strategies. Earning a certification strengthens your professional image."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Reduced Resistance",
            "description": "Reduced resistance to organizational change through structured methodologies and smoother transition processes."
        },
        {
            "title": "Effective Communication",
            "description": "Enable leaders to clearly communicate the purpose, benefits, and impact of change initiatives."
        },
        {
            "title": "Strategic Alignment",
            "description": "Ensure change initiatives are aligned with long-term business objectives and improve project success rates."
        },
        {
            "title": "Cost Optimization",
            "description": "Minimize delays, disruptions, and failures through well-planned change implementation and higher ROI on initiatives."
        },
        {
            "title": "Organizational Resilience",
            "description": "Improved project success rates, organizational resilience, and enhanced stakeholder collaboration."
        }
    ];

    const careerStats = {
        averageIncome: "Highly Valued across Industries",
        incomeLabel: "Professional Mobility",
        employmentGrowth: "Increasing Demand",
        growthLabel: "for certified change leaders",
    };

    const attendeeList = [
        "Project Managers",
        "HR Professionals",
        "Team Leaders and Supervisors",
        "Business Managers",
        "Transformation and Change Leaders",
        "Professionals involved in organizational development"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const companyList = [
        { "name": "Accenture", "url": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "IBM", "url": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "Deloitte", "url": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "Capgemini", "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "TCS", "url": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const outcomeList = [
        "Understand core change management principles and models.",
        "Assess organizational readiness for change.",
        "Develop strategies to manage resistance effectively.",
        "Communicate change initiatives clearly across teams.",
        "Implement structured change plans with measurable outcomes."
    ];

    const prerequisites = [
        "No formal prerequisites are required.",
        "Basic knowledge of management principles is beneficial."
    ];

    const certificationSteps = [
        {
            "title": "Complete Training",
            "description": "Attend the 1-day Change Management training session conducted by Viovn.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Gain Knowledge",
            "description": "Participate in hands-on exercises, case studies, and real-world discussions.",
            "color": "#F59E0B"
        },
        {
            "title": "Get Certified",
            "description": "Obtain your Change Management course completion certificate from Viovn.",
            "color": "#10B981"
        }
    ];

    const curriculumModules = [
        {
            "title": "Learning Objectives",
            "topics": [
                "Understand the importance of organizational adaptability in a dynamic environment.",
                "Identify reform strategies to support change initiatives.",
                "Apply systematic approaches to achieve successful change outcomes."
            ]
        },
        {
            "title": "High-Level Agenda",
            "topics": [
                "The importance and necessity of change.",
                "Common challenges in driving change.",
                "Key elements of change management.",
                "Structured approaches to facilitate change processes.",
                "Leadership skills required for successful change implementation."
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Change Management Principles",
            "description": "Develop a strong understanding of change management fundamentals and their importance in modern organizations."
        },
        {
            "title": "ADKAR and Kotter Models",
            "description": "Learn how to apply widely recognized models such as ADKAR and Kotter’s 8-Step Process in real-world scenarios."
        },
        {
            "title": "Roles and Responsibilities",
            "description": "Understand key responsibilities and essential leadership skills required for effective change management."
        },
        {
            "title": "Developing Change Plans",
            "description": "Create structured change management plans, define objectives, and manage stakeholder expectations."
        },
        {
            "title": "Managing Resistance",
            "description": "Apply techniques to address resistance, measure success, and sustain long-term organizational transformation."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "Change Management FAQs",
            "items": [
                {
                    "question": "1. What is the importance of Change Management?",
                    "answer": "Change management is essential for minimizing resistance, maximizing engagement, and ensuring sustainable organizational transformation."
                },
                {
                    "question": "2. Who should attend this course?",
                    "answer": "Project managers, HR professionals, team leaders, and anyone involved in leading organizational transformation."
                },
                {
                    "question": "3. Is there an exam for this certification?",
                    "answer": "Assessments are typically based on participation and completion of workshop exercises."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "General FAQs",
            "items": [
                {
                    "question": "1. Why choose Viovn for this training?",
                    "answer": "Viovn provides expert-led sessions with practical methodologies and global best practices to ensure successful transformation."
                },
                {
                    "question": "2. Is the course completion certificate recognized?",
                    "answer": "Yes, Viovn certificates are recognized across industries for professional development."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: '8 Hours',
            subtitle: 'Live Training',
            color: 'bg-accent text-primary',
        },
        {
            icon: Award,
            title: 'Completion',
            subtitle: 'Certification',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Practical',
            subtitle: 'Exercises',
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
            title: 'Case Studies',
            subtitle: 'Real-world',
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
        { "name": "Accenture", "logo": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { "name": "IBM", "logo": "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { "name": "Deloitte", "logo": "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { "name": "Infosys", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { "name": "Capgemini", "logo": "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { "name": "TCS", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const courseTrainers = [
        {
            name: 'Senior Change Consultant',
            role: 'Transformation Architect',
            rating: '4.9',
            experience: '18+ Years',
            description: 'Expert in organizational development and change management with extensive experience in leading global transformation projects.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        {
            "title": "Expert-Led Sessions",
            "description": "Gain knowledge from certified professionals who impart real-world insights and practical experience."
        },
        {
            "title": "Practical Methodologies",
            "description": "We use hands-on exercises and real-world case studies to help you apply change management principles immediately."
        },
        {
            "title": "Strategic Impact",
            "description": "Our training helps you reduce resistance, align initiatives with strategic objectives, and improve productivity."
        },
        {
            "title": "Flexible Learning",
            "description": "Choose from live online or corporate group training designed to fit your professional schedule."
        },
        {
            "title": "Proven Success",
            "description": "Viovn is a top-rated training provider known for helping organizations successfully implement transformation."
        },
        {
            "title": "Comprehensive Support",
            "description": "We offer ongoing assistance prior to, during, and after training with high-quality study materials."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'CMT',
            courseName: 'Change Management Training',
            dateRange: 'Coming Soon',
            timeRange: '8 Hours Live',
            trainerName: 'Expert Consultant',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 9,999',
            discountPercentage: '38',
        },
    ];

    const certificateBenefits = [
        'Recognized Certificate of Completion from Viovn',
        'Valid for lifetime',
        'Demonstrates expertise in leading organizational change',
        'Improved career mobility into transformation roles'
    ];

    const heroData = {
        "courseName": "Change Management Training",
        "breadcrumbName": "Change Management Training | Course & Certification",
        "rating": "5.0",
        "enrolledCount": "2000+ professionals trained",
        "subtitle": "Lead Organizational Change with Confidence and Strategic Impact",
        "benefits": [
            "8-hour live instructor-led training",
            "Hands-on practical exercises",
            "Real-world case studies",
            "Course completion certification"
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Change Management Course Overview",
        "description": [
            "Change is essential for improving organizational effectiveness; however, implementing change successfully can be challenging. This course is designed to equip professionals with the knowledge, tools, and strategies required to manage and lead change effectively.",
            "The training covers proven methodologies, practical frameworks, and industry best practices to help participants manage resistance, align stakeholders, and ensure smooth transitions."
        ],
        "whatIsTitle": "What is Change Management?",
        "whatIsDescription": [
            "Change management is a structured approach to transitioning individuals, teams, and organizations from a current state to a desired future state.",
            "It focuses on minimizing resistance, maximizing engagement, and ensuring sustainable organizational transformation."
        ],
        "whatsIncludedTitle": "What’s Included in This Course?",
        "whatsIncludedDescription": [
            "8 hours of live instructor-led training",
            "Practical exercises and case studies",
            "Comprehensive courseware",
            "Course completion certificate"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Viovn",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "Viovn provides tailored corporate training programs designed to address specific organizational challenges. Our expert-led change management training helps enterprises reduce resistance, align initiatives with strategic objectives, and improve overall productivity."
    };

    const courseMetadata = {
        shortName: 'CMT',
        shortNameAlt: 'Change Management',
        fullName: 'Change Management Training',
        fullNameAlt: 'Change Management Training',
        certificateName: 'Change Management Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your Change Management Training, you will be proficient in planning and evaluating change initiatives for positive outcomes.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for Change Management Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Change Management',
            titleSuffix: 'Certification',
            issuerName: 'Viovn',
            certificateType: 'Certificate of Achievement',
            certifyText: 'This is to certify that',
            requirementText: 'Has successfully fulfilled all requirements to be recognized as a leader in',
            signer1Role: 'Lead Consultant',
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

export default ChangeManagementTraining;
