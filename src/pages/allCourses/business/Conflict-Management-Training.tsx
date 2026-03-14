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
    CheckCircle2,
    Star
} from "lucide-react";

const ConflictManagementTraining = () => {
    const highlights = [
        { text: "8 hours of intensive training", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Live & interactive sessions led by experienced agile trainers", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "A digital badge to validate your conflict management skills", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "24/7 Customer Support", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Networking opportunities with global experts", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Practical expertise through real-world exercises & story-based exercises", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            "title": "Effective Communication",
            "description": "Learn how to communicate effectively with teams - this helps to resolve conflicts effectively."
        },
        {
            "title": "Practical Resolution Skills",
            "description": "Develop practical skills required to resolve conflicts with confidence and poise."
        },
        {
            "title": "Psychological Safety",
            "description": "Understand psychological safety and strategies required to lead teams."
        },
        {
            "title": "Team Dynamics",
            "description": "Learn how to drive collaboration and manage team dynamics with confidence."
        },
        {
            "title": "Career Advancement",
            "description": "Boost your resume, master facilitation skills, and improve your chances of getting hired."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Professional Growth",
            "description": "Boost your resume, master facilitation skills, and improve your chances of getting hired."
        },
        {
            "title": "Harmony and Trust",
            "description": "Foster a sense of harmony and trust among team members."
        },
        {
            "title": "Smoother Workflows",
            "description": "Ensure smoother workflows with the help of top-notch conflict management techniques."
        },
        {
            "title": "Organizational Productivity",
            "description": "Improve overall organisational productivity - help team members handle severe challenges."
        },
        {
            "title": "Strategic Collaboration",
            "description": "Work in direct collaboration with cross-functional teams & brainstorm ideas for improving organisational efficiency."
        }
    ];

    const careerStats = {
        averageIncome: "$85,000 - $130,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Growing demand",
        growthLabel: "for certified conflict managers",
    };

    const attendeeList = [
        "Project Managers and Agile Practitioners",
        "Team Leaders and Scrum Masters",
        "HR Professionals and People Managers",
        "Business Analysts and Facilitators",
        "Anyone responsible for managing team dynamics",
        "Executives and Senior Leaders"
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
        "Resolve workplace conflicts with structured strategies",
        "Apply de-escalation and emotional intelligence techniques",
        "Build psychologically safe team environments",
        "Strengthen collaboration and productivity across teams",
        "Transform conflicts into growth opportunities",
        "Master de-escalation of team tensions effectively"
    ];

    const prerequisites = [
        "No formal prerequisites required",
        "Basic understanding of team dynamics or project environments is beneficial",
        "Openness to learning and participating in group exercises"
    ];

    const certificationSteps = [
        {
            "title": "Attend the Course",
            "description": "Attend the 8 hours conflict management skills course provided by expert Agile trainers.",
            "color": "hsl(var(--primary))"
        },
        {
            "title": "Master the Concepts",
            "description": "Understand conflict management with the help of a comprehensive curriculum curated by experts.",
            "color": "#F59E0B"
        },
        {
            "title": "Practical Skills",
            "description": "Participate in practical exercises, real-world case studies, and interactive discussions to learn problem-solving.",
            "color": "#10B981"
        },
        {
            "title": "Get Certified",
            "description": "Obtain the micro-credential for the conflict management skills course.",
            "color": "#8B5CF6"
        }
    ];

    const curriculumModules = [
        {
            "title": "Module 1: Learn Conflict Handling",
            "topics": [
                "Identify conflicts beforehand",
                "Address them before they get worse",
                "Handle complex conversations with confidence and a positive attitude"
            ]
        },
        {
            "title": "Module 2: Hone De-escalation Techniques",
            "topics": [
                "Nonviolent communication",
                "Active listening",
                "Clear communication",
                "Remain poised amidst chaotic situations"
            ]
        },
        {
            "title": "Module 3: Understand Conflicts In-depth",
            "topics": [
                "Find the root causes of team disputes",
                "Understand the reasons behind miscommunication and personality clashes",
                "Learn the impact of conflict psychology on team dynamics"
            ]
        },
        {
            "title": "Module 4: Importance of Psychological Safety",
            "topics": [
                "Understand how to use psychological safety",
                "Foster a culture of collaboration and trust among team members",
                "Encourage team members to express their ideas and concerns without fear"
            ]
        },
        {
            "title": "Module 5: De-escalation of Team Tensions",
            "topics": [
                "Learn strategies to defuse accumulated tensions",
                "Learn how to restore peace",
                "Use empathetic communication and active listening skills"
            ]
        }
    ];

    const learningObjectives = [
        {
            "title": "Conflict Resolution Strategies",
            "description": "Learn how to develop strategies required to calm aggressive situations, solve conflicts, and encourage team members to work harmoniously."
        },
        {
            "title": "Create a Safe Work Environment",
            "description": "Learn how to create a safe work environment where people can convey their ideas freely and chain of communication is transparent."
        },
        {
            "title": "Understand Conflicts",
            "description": "Understand what triggers conflicts and why they occur. Communicate with team members to understand behavioral and emotional impacts."
        },
        {
            "title": "Resolve Issues",
            "description": "Learn how to solve conflicts through real-life examples. Transform conflicts into opportunities for growth and continuous learning."
        },
        {
            "title": "Develop Teams",
            "description": "Encourage team members to work together, solve interpersonal problems, and stay focused on common goals."
        }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "Program FAQs",
            "items": [
                {
                    "question": "1. What is the objective of mastering conflict management skills?",
                    "answer": "Resolving conflicts among team members in real time helps to foster mutual respect, trust, and stronger communication. This helps to build high-performing teams. Obtaining this credential will help you stand out from other candidates as you’ll be able to maintain team cohesion, deliver high-quality results, and lead team members with empathy."
                },
                {
                    "question": "2. What are the skills covered in the conflict management skills course?",
                    "answer": "De-escalation strategies, Emotional intelligence & communication, Empathy Building & Active Listening, Clear non-verbal and verbal communication, Conflict prevention strategies, and Handling conflicts that arise between clients & stakeholders."
                },
                {
                    "question": "3. Is there any exam for the conflict management skills course?",
                    "answer": "No, there’s no exam for the course. Assessment is performance-based during the workshop."
                },
                {
                    "question": "4. What is the validity of this microcredential?",
                    "answer": "This Conflict Management Skills microcredential comes with lifetime validity."
                },
                {
                    "question": "5. Why is conflict management essential?",
                    "answer": "Unresolved conflicts can hinder a team’s focus and creativity. These conflicts tend to lower the overall morale and productivity of an organization. It has adverse impacts on collaboration, transparency, and trust among team members."
                }
            ]
        },
        {
            "id": "category_2",
            "label": "General FAQs",
            "items": [
                {
                    "question": "1. Why should you pursue this course?",
                    "answer": "The course’s module goes beyond theoretical lectures. It allows you to take part in interactive discussions and practical exercises to strengthen your knowledge. You’ll also get an opportunity to engage and interact with fellow students, which in turn will help you clear doubts in real time."
                },
                {
                    "question": "2. What are the downsides of unresolved conflicts?",
                    "answer": "Unresolved conflicts can decline a team’s productivity as they can lower the morale of employees, hinder focus and productivity, give rise to miscommunication, and erode trust."
                },
                {
                    "question": "3. What is the duration of the training?",
                    "answer": "The training is conducted for 8 hours of live instructor-led sessions."
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
            title: 'Digital Badge',
            subtitle: 'Skill Validation',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Interactive',
            subtitle: 'Group Activities',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: Star,
            title: 'Lifetime',
            subtitle: 'Validity',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Real-world',
            subtitle: 'Case Studies',
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
            name: 'Expert Agile Trainer',
            role: 'Senior Team Mediator',
            rating: '4.9',
            experience: '15+ Years',
            description: 'Our trainers are highly qualified and certified, having numerous years of experience in facilitating team dynamics and conflict resolution.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
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
            "description": "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities."
        },
        {
            "title": "End-to-End Assistance",
            "description": "Viovn Offers ongoing assistance prior to, during, and after Training and includes study material, guidance for participants on certification, and career choices."
        }
    ];

    

    const certificateBenefits = [
        'Officially recognized Conflict Management micro-credential',
        'Valid for lifetime',
        'Earn SEUs upon completion',
        'Demonstrated skills in team coordination and mediation'
    ];

    const heroData = {
        "courseName": "Conflict Management Skills Training",
        "breadcrumbName": "Conflict Management Skills Microcredential Course",
        "rating": "5.0",
        "enrolledCount": "1500+ professionals trained",
        "subtitle": "Master the multi-faceted dynamics of conflict resolution, team cohesion, and psychological safety.",
        "benefits": [
            "Immersive training sessions of up to 8 hours",
            "Master conflict handling through story-based exercises",
            "Earn a microcredential with lifetime validity",
            "Gain SEUs upon completion of the training"
        ],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Conflict Management Skills Course Overview",
        "description": [
            "The Conflict Management Skills course helps you understand the multi-faceted dynamics of conflict resolution, team cohesion, and psychological safety. You’ll be able to master in-demand skills necessary for managing and addressing conflicts, building trust, improving communication, and encouraging high-performing teams.",
            "Throughout this intensive training, you’ll get an opportunity to participate in story-based exercises and real-life scenarios. This will help you build the practical skills required to identify potential workplace challenges and transform them into opportunities for continuous growth and collaboration.",
            "Upon completion of this training, you’ll be able to identify personal conflicts and successfully resolve disputes that arise among team members."
        ],
        "whatIsTitle": "",
        "whatIsDescription": [],
        "whatsIncludedTitle": "",
        "whatsIncludedDescription": [],
    };

    const corporateData = {
        "courseName": "Why SimpliAxis Is The First Choice For Corporates?",
        "label": "",
        "buttonText": "Corporate Group enquiry",
        "description": "With learning targeted to your unique team environment, we at SimpliAxis help to resolve your specific issues and meet your specific needs with tailored training methods. We offer corporate training globally to keep Organizations up to date by building the knowledge gap required and make them strive in the competitive world with the right skills according to the industry needs."
    };

    const courseMetadata = {
        shortName: 'CMS',
        shortNameAlt: 'CMS',
        fullName: 'Conflict Management Skills Training',
        fullNameAlt: 'Conflict Management Skills Training',
        certificateName: 'Conflict Management Specialist',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your Conflict Management Skills Training, you will be proficient in transforming workplace challenges into opportunities for growth and high team performance.",
        },
        prerequisites: {
            subtitle: 'What are the Prerequisites for Conflict Management Skills Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Conflict Management',
            titleSuffix: 'Badge',
            issuerName: 'Viovn',
            certificateType: 'Micro-credential of Achievement',
            certifyText: 'This is to certify that',
            requirementText: 'Has successfully fulfilled all requirements to be recognized as a specialist in',
            signer1Role: 'Certified Agile Trainer',
            signer2Role: 'Program Director',
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

export default ConflictManagementTraining;
