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
    TrendingUp,
    Star,
    CheckCircle2
} from "lucide-react";

/**
 * Scrum Essentials Microcredential Course
 * Data source: course_data3.json
 */
const ScrumEssentialsMicrocredentialCourse = () => {
    const courseName = "Scrum Essentials Microcredential Course";

    const highlights = [
        { text: "Comprehensive introduction to Scrum principles and framework." },
        { text: "Flexible on-demand learning format for busy professionals." },
        { text: "Practical examples covering Scrum roles, events, and artifacts." },
        { text: "Real-world case studies to strengthen Scrum understanding." },
        { text: "Earn a recognized Scrum Essentials Microcredential." },
        { text: "Improve collaboration and transparency within Scrum teams." },
        { text: "Access learning support and resources throughout the course." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Build a strong foundation in Scrum principles, roles, and practices." },
        { title: "Individual Benefits", description: "Improve team collaboration and communication skills." },
        { title: "Individual Benefits", description: "Enhance career opportunities with a recognized Scrum microcredential." },
        { title: "Individual Benefits", description: "Gain confidence in participating effectively within Scrum teams." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Develop a shared understanding of Scrum practices across teams." },
        { title: "Corporate Benefits", description: "Improve project transparency and accountability." },
        { title: "Corporate Benefits", description: "Strengthen team productivity through structured Scrum processes." },
        { title: "Corporate Benefits", description: "Support Agile transformation initiatives with foundational Scrum knowledge." }
    ];

    const careerStats = {
        averageIncome: "$95k - $145k",
        incomeLabel: "Salary Range",
        employmentGrowth: "88%",
        growthLabel: "Global Scrum Adoption Rate",
    };

    const attendeesData = [
        {
            group: [
                "Professionals new to Scrum and Agile frameworks.",
                "Team members working in Scrum environments.",
                "Project managers and business analysts.",
                "Developers and product team members.",
                "Anyone seeking foundational knowledge of Scrum."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Deloitte.svg" }
    ];

    const outcomes = [
        "Understand Scrum values, roles, and responsibilities.",
        "Differentiate Scrum from other Agile methodologies.",
        "Apply Scrum concepts to real-world team scenarios.",
        "Improve team collaboration and communication.",
        "Support Agile adoption within organizations."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "Basic familiarity with Agile concepts may be helpful but is not required."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Scrum Essentials Microcredential training program."
        },
        {
            title: "Complete On-Demand Modules",
            description: "Study the course content and complete interactive learning activities."
        },
        {
            title: "Demonstrate Understanding",
            description: "Apply Scrum concepts through scenario-based exercises."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive the Scrum Essentials Microcredential upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Introduction to Scrum",
            topics: [
                "Scrum values and principles.",
                "The Agile mindset in Scrum.",
                "Overview of the framework."
            ]
        },
        {
            title: "Module 2: Scrum Roles",
            topics: [
                "Responsibilities of the Scrum Master.",
                "Role of the Product Owner.",
                "Development Team dynamics."
            ]
        },
        {
            title: "Module 3: Scrum Events",
            topics: [
                "Sprint planning and goal setting.",
                "Daily Scrum and team synchronization.",
                "Sprint review and retrospective."
            ]
        },
        {
            title: "Module 4: Scrum Artifacts",
            topics: [
                "Product backlog and refinement.",
                "Sprint backlog management.",
                "Increment and Definition of Done."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Scrum Foundations", description: "Gain a clear understanding of Scrum values, roles, events, and artifacts." },
        { title: "Apply Scrum Practices", description: "Learn how to implement Scrum concepts effectively within a team." },
        { title: "Enhance Team Collaboration", description: "Improve communication and coordination in Scrum teams." },
        { title: "Support Continuous Improvement", description: "Adopt feedback-driven processes through Scrum events." },
        { title: "Build Agile Mindset", description: "Develop adaptability and customer-focused thinking in projects." }
    ];

    const whySections = [
        { title: "Industry-Relevant Curriculum", description: "Designed to provide practical and foundational Scrum knowledge applicable across industries." },
        { title: "Flexible On-Demand Learning", description: "Learn at your own pace with access to comprehensive course materials." },
        { title: "Expert-Designed Content", description: "Created by experienced Agile and Scrum practitioners." },
        { title: "Interactive Learning Experience", description: "Includes case studies and practical examples for better understanding." },
        { title: "Comprehensive Support", description: "Access learning resources and guidance throughout your training journey." }
    ];

    const courseFeatures = [
        { icon: Settings, title: 'Foundational', subtitle: 'Scrum Core', color: 'bg-indigo-50 text-indigo-600' },
        { icon: Monitor, title: 'Self-Paced', subtitle: 'On-Demand', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Value Driven', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Scrum Essentials Microcredential Course",
        breadcrumbName: "Scrum Essentials",
        rating: "5.0",
        enrolledCount: "1800+ professionals",
        subtitle: "Build a Strong Foundation in Scrum Principles and Practices",
        benefits: [
            "Comprehensive introduction to Scrum fundamentals.",
            "Flexible on-demand learning format.",
            "Practical real-world examples and case studies.",
            "Earn a recognized Scrum Essentials Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Scrum Essentials Microcredential Overview",
        description: [
            "The Scrum Essentials Microcredential course provides a comprehensive introduction to the Scrum framework and Agile mindset.",
            "This program is designed to help professionals understand Scrum roles, events, and artifacts while building effective team collaboration skills.",
            "Participants will gain foundational knowledge required to contribute successfully within Scrum teams and support Agile initiatives."
        ],
        whatIsTitle: "What Is Scrum Essentials?",
        whatIsDescription: [
            "Scrum Essentials focuses on the fundamental concepts of the Scrum framework.",
            "It introduces key roles, events, and artifacts that enable iterative development and continuous improvement.",
            "The course equips professionals with the knowledge needed to participate effectively in Scrum-based environments."
        ],
        whatsIncludedTitle: "What’s Included in the Scrum Essentials Course?",
        whatsIncludedDescription: [
            "On-demand video modules.",
            "Practical examples and case studies.",
            "Foundational coverage of Scrum framework.",
            "Microcredential certification upon completion.",
            "Access to learning support resources."
        ],
        skillsTitle: "Skills Covered in Scrum Essentials",
        skills: [
            "Understanding Scrum values and principles",
            "Scrum roles and responsibilities",
            "Managing Scrum events effectively",
            "Backlog management fundamentals",
            "Team collaboration techniques"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "On-demand self-paced learning.",
            "Customized corporate training programs available upon request."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take the Scrum Essentials Microcredential course?", answer: "This course is ideal for beginners and professionals who want to understand the fundamentals of Scrum and Agile practices." },
                { question: "2. Is prior Scrum experience required?", answer: "No prior experience is required. The course is designed for individuals new to Scrum." },
                { question: "3. Is this course self-paced?", answer: "Yes, this is an on-demand microcredential course that allows flexible learning." },
                { question: "4. Is the Scrum Essentials Microcredential valid for life?", answer: "Yes, the Scrum Essentials Microcredential is valid for life and does not require renewal." }
            ]
        }
    ];

    const tabs = [
        {
            id: 'overview',
            label: 'Course Overview',
            content: (
                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
                        <h4 className="text-[14px] text-primary font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
                            {overviewContent.title}
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
                            {overviewContent.subtitle} <span className="text-primary">✦</span>
                        </h2>
                        <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
                            {overviewContent.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>
                    </div>
                    {overviewContent.whatIsTitle && (
                        <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
                            <h3 className="text-2xl font-black text-[#001c3d] mb-4">{overviewContent.whatIsTitle}</h3>
                            <div className="space-y-4 text-slate-700 font-medium leading-[1.7] text-[15px]">
                                {overviewContent.whatIsDescription.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    )}
                    <CourseHighlights highlights={highlights} courseName={heroData.courseName} />
                    <CourseCareerUpliftment stats={careerStats} attendees={attendeesData} companies={companies} outcomes={outcomes} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'benefits',
            label: 'Benefits',
            content: (
                <div className="space-y-6">
                    <CourseBenefits individualBenefits={individualBenefits} corporateBenefits={corporateBenefits} courseName={heroData.courseName} />
                    <CourseCommonAttendees attendees={attendeesData[0].group} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'prerequisites',
            label: 'Prerequisites',
            content: (
                <div className="space-y-6">
                    <CoursePrerequisites prerequisites={prerequisites} courseName={heroData.courseName} />
                    <CourseStepByStepProcess steps={certificationSteps} courseName={heroData.courseName} />
                    <CourseCertificate courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'curriculum',
            label: 'Curriculum',
            content: (
                <div className="space-y-6">
                    <CourseCurriculum modules={curriculumModules} courseName={heroData.courseName} />
                    <CourseLearningObjectives objectives={learningObjectives} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'faqs',
            label: 'FAQs',
            content: <CourseFAQs categories={faqCategories} courseName={heroData.courseName} />
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans text-[#001c3d]">
            <Header />
            <main className="pt-16">
                <CourseHero
          categoryName="on-demand microcredentials"
          categoryLink="/category/on-demand-microcredentials"
                    {...heroData}
                    referEarnText="Refer & Earn"
                    enrolledSuffix="Enrolled"
                    moneyBackText="100% Money Back Guarantee"
                    ltpLabel="Viovn Training"
                    downloadBtnText="Download Brochure"
                    viewSchedulesBtnText="View Schedules"
                    freeAssessmentBtnText="Free Assessment"
                />
                <CourseFeatures features={courseFeatures} />
                <div className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                        <div className="space-y-12">
                            <CourseTabs tabs={tabs} />
                            <CourseCorporateOptUs
                                courseName="Why Viovn for Corporate Scrum Training?"
                                description="Viovn provides tailored Scrum training programs designed to align teams with industry best practices. Our expert-designed learning experiences help organizations strengthen Agile capabilities, improve collaboration, and enhance project delivery performance across teams."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel courseName={heroData.courseName}  isOnDemand={true}  />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ScrumEssentialsMicrocredentialCourse;
