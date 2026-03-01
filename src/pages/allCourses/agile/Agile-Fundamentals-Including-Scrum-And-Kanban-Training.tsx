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
    BookOpen,
    Network,
    CreditCard,
    FileText,
    Briefcase,
    CheckCircle2,
    Star
} from "lucide-react";

const AgileFundamentalsIncludingScrumAndKanbanTraining = () => {
    const highlights = [
        { text: "The program is structured to address the evolving needs of modern organizations adopting Agile practices.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Training is delivered through instructor-led sessions available both in classroom environments and live online formats.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Interactive discussions include practical examples from real industry scenarios.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Participants are actively involved throughout the sessions to ensure an engaging and effective learning experience.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "The course provides both detailed and high-level perspectives of Agile concepts to build strong foundational knowledge.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Participants receive lifetime access to online resources including recorded videos, guides, and reference materials.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Dedicated mentoring and personalized support from experienced trainers during the learning journey.", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: "Core Principles",
            description: "Understand the core principles behind Agile frameworks such as Scrum and Kanban."
        },
        {
            title: "Effective Participation",
            description: "Build foundational knowledge required to participate effectively in Agile teams."
        },
        {
            title: "Dynamic Adaptability",
            description: "Improve adaptability and collaboration in dynamic project environments."
        },
        {
            title: "Transformation Confidence",
            description: "Gain confidence to contribute to Agile transformation initiatives."
        }
    ];

    const corporateBenefits = [
        {
            title: "Modern Workflows",
            description: "Helps organizations train employees on modern Agile workflows and practices."
        },
        {
            title: "Team Coordination",
            description: "Improves coordination and efficiency within cross-functional teams."
        },
        {
            title: "Faster Delivery",
            description: "Encourages faster delivery cycles through Agile methodologies."
        },
        {
            title: "Successful Transition",
            description: "Supports companies in successfully transitioning from traditional project management approaches to Agile frameworks."
        }
    ];

    const careerStats = {
        averageIncome: "$90,000 - $115,000 per year",
        incomeLabel: "Average annual salary",
        employmentGrowth: "Growing demand",
        growthLabel: "for Agile practitioners across industries",
    };

    const attendeeList = [
        "Software Developers",
        "Project Coordinators",
        "Business Analysts",
        "Product Managers",
        "Students entering Agile environments",
        "Professionals interested in learning Agile methodologies"
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
        { "name": "Infosys", "url": "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" }
    ];

    const outcomeList = [
        "Understand Agile principles and values",
        "Learn the differences between Scrum and Kanban",
        "Gain practical knowledge of Agile workflows",
        "Improve collaboration within Agile teams"
    ];

    const prerequisites = [
        "No previous Agile knowledge is required",
        "Interest in Agile project management and team collaboration",
        "Basic understanding of project environments is helpful but not mandatory"
    ];

    const certificationSteps = [
        {
            "title": "Registration",
            "description": "Register for the Agile Fundamentals including Scrum and Kanban workshop.",
            "color": "#3B82F6"
        },
        {
            "title": "Attendance",
            "description": "Attend all training sessions conducted by certified instructors.",
            "color": "#F59E0B"
        },
        {
            "title": "Participation",
            "description": "Participate in exercises and discussions throughout the program.",
            "color": "#10B981"
        },
        {
            "title": "Success",
            "description": "Complete the workshop successfully.",
            "color": "#8B5CF6"
        },
        {
            "title": "Certification",
            "description": "Receive the Agile Fundamentals certification from Simpliaxis.",
            "color": "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            "title": "Agile Fundamentals including Scrum and Kanban Training",
            "topics": [
                "Introduction to Agile philosophy and mindset",
                "Understanding Agile values and guiding principles",
                "Overview of Scrum framework and its roles",
                "Understanding Kanban workflow and visualization",
                "Comparing Scrum and Kanban approaches",
                "Agile team collaboration techniques",
                "Continuous improvement practices in Agile teams"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Core Principles",
            description: "Learn the core principles of Agile methodologies"
        },
        {
            title: "Framework Insight",
            description: "Understand how Scrum and Kanban frameworks operate"
        },
        {
            title: "Team Efficiency",
            description: "Develop the ability to work effectively within Agile teams"
        },
        {
            title: "Workflow Knowledge",
            description: "Gain practical insights into Agile project workflows"
        }
    ];

    const faqCategories = [
        {
            "id": "certification",
            "label": "Certification FAQs",
            "items": [
                {
                    "question": "1. Who is a certified Agile Fundamentals professional?",
                    "answer": "A certified Agile Fundamentals professional understands the basic concepts of Agile methodologies including Scrum and Kanban and can apply them effectively within Agile teams and projects."
                },
                {
                    "question": "2. Are there any prerequisites for this workshop?",
                    "answer": "No prior experience is required since this course is designed as an introductory program for beginners."
                },
                {
                    "question": "3. What are the advantages of learning Agile Fundamentals?",
                    "answer": "Learning Agile fundamentals helps professionals understand modern project delivery practices and prepares them for working in Agile-driven organizations."
                },
                {
                    "question": "4. Is there an exam after completing the training?",
                    "answer": "There is no formal examination. Certification is awarded after successful participation in the workshop."
                },
                {
                    "question": "5. How can I receive the certification?",
                    "answer": "Enroll in the training program, attend the sessions, and complete the workshop to receive the certification."
                },
                {
                    "question": "6. How long is the certification valid?",
                    "answer": "The certification remains valid for a lifetime."
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
            name: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        },
        {
            name: 'Amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
            name: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
        },
        {
            name: 'IBM',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Accenture',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        },
        {
            name: 'Infosys',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
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
        }
    ];

    const courseWhySimpliaxis = [
        {
            "title": "Industry Recognition",
            "description": "Our training programs are acknowledged by leading organizations worldwide and align with global industry standards."
        },
        {
            "title": "Experienced Trainers",
            "description": "Courses are delivered by certified instructors who bring extensive industry expertise and practical insights."
        },
        {
            "title": "Flexible Learning Options",
            "description": "Participants can choose from classroom sessions, virtual live training, or corporate training programs."
        },
        {
            "title": "Continuous Learning Access",
            "description": "Learners receive access to digital learning materials and resources to support ongoing knowledge development."
        },
        {
            "title": "Trusted Training Provider",
            "description": "Simpliaxis has helped thousands of professionals upgrade their skills and advance their careers."
        },
        {
            "title": "Complete Support System",
            "description": "Guidance is provided before, during, and after training to ensure participants achieve their learning goals."
        },
        {
            "title": "Interactive Learning Approach",
            "description": "Sessions incorporate discussions, activities, and real-world scenarios to improve understanding."
        },
        {
            "title": "Extensive Course Portfolio",
            "description": "Simpliaxis provides certifications in Agile, DevOps, Scrum, SAFe, Project Management, and several other in-demand technologies."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'AFSK',
            courseName: 'Agile Fundamentals including Scrum and Kanban Training',
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Expert Trainer',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 9,999',
            discountPercentage: '37',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for Lifetime',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        "courseName": "Agile Fundamentals including Scrum and Kanban Training",
        "breadcrumbName": "Master Agile Fundamentals with Scrum and Kanban Training Online",
        "rating": "5.0",
        "enrolledCount": "1800+ learners trained",
        "subtitle": "Build a strong foundation in Agile methodologies including Scrum and Kanban.",
        "benefits": [
            "Instructor-led expert sessions",
            "Hands-on Agile exercises",
            "Industry-recognized certification"
        ],
        "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Course Overview",
        "description": [
            "This Agile Fundamentals training introduces participants to the core principles of Agile methodologies along with practical insights into Scrum and Kanban frameworks.",
            "Through real-world examples and interactive exercises, participants learn how Agile practices improve collaboration, flexibility, and product delivery within modern organizations."
        ],
        "whatIsTitle": "What are Agile Fundamentals?",
        "whatIsDescription": [
            "Agile fundamentals refer to the core principles, values, and frameworks that guide teams in delivering products iteratively while continuously adapting to change."
        ],
        "whatsIncludedTitle": "What’s Included",
        "whatsIncludedDescription": [
            "Instructor-led training sessions",
            "Interactive case studies and discussions",
            "Hands-on Agile exercises",
            "Certification upon completion"
        ],
        "skillsTitle": "Skills You Will Gain",
        "skills": [
            "Agile mindset and principles",
            "Scrum workflow understanding",
            "Kanban board management",
            "Team collaboration techniques"
        ],
    };

    const corporateData = {
        "courseName": "Why Corporates Choose Us",
        "label": "Corporate Training",
        "buttonText": "Corporate Group Enquiry",
        "description": "Simpliaxis provides tailored corporate training programs designed to help organizations build Agile capabilities within their teams. Our expert trainers deliver customized learning modules that address real organizational challenges while equipping employees with the skills required to thrive in dynamic business environments."
    };

    const courseMetadata = {
        shortName: 'AFSK',
        shortNameAlt: 'Agile & Kanban',
        fullName: 'Agile Fundamentals including Scrum and Kanban',
        fullNameAlt: 'Agile Fundamentals Workshop',
        certificateName: 'Agile Fundamentals',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter:
                "After completing your Agile Fundamentals Training, a wide selection of career options will open up, enabling you to work effectively in Agile-driven organizations.",
        },
        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Agile Fundamentals Training?',
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
                'Has successfully fulfilled all requirements to be recognized as an expert in',
            signer1Role: 'Certified Trainer',
            signer2Role: 'Managing Director',
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

export default AgileFundamentalsIncludingScrumAndKanbanTraining;
