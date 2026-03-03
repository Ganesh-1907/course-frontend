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
    TrendingUp,
    Star,
    CheckCircle2,
    Smile
} from "lucide-react";

/**
 * Agile for HR On-Demand Microcredentials Course
 * Data source: course_data3.json
 */
const AgileForHRMicrocredentialCourse = () => {
    const courseName = "Agile for HR On-Demand Microcredentials Course";

    const highlights = [
        { text: "On-demand training designed to apply Agile principles within HR functions." },
        { text: "Learn how to implement Agile frameworks in talent management and HR operations." },
        { text: "Improve collaboration between HR and cross-functional teams." },
        { text: "Enhance employee engagement through iterative and adaptive HR practices." },
        { text: "Apply real-world case studies of Agile HR transformation." },
        { text: "Increase responsiveness to workforce and organizational needs." },
        { text: "Earn a recognized Agile for HR Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop the ability to integrate Agile methodologies into HR processes." },
        { title: "Individual Benefits", description: "Enhance adaptability in managing talent acquisition, performance, and engagement." },
        { title: "Individual Benefits", description: "Strengthen collaboration with business leaders and Agile teams." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile HR and organizational development roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Increase HR efficiency through iterative planning and continuous improvement." },
        { title: "Corporate Benefits", description: "Align HR strategies with Agile business transformation goals." },
        { title: "Corporate Benefits", description: "Enhance employee satisfaction and engagement through adaptive practices." },
        { title: "Corporate Benefits", description: "Improve responsiveness to organizational and workforce changes." }
    ];

    const careerStats = {
        averageIncome: "$105k - $155k",
        incomeLabel: "Salary Range",
        employmentGrowth: "88%",
        growthLabel: "Agile HR Demand",
    };

    const attendeesData = [
        {
            group: [
                "HR Managers and Executives.",
                "Talent Acquisition and Recruitment Specialists.",
                "Learning and Development Professionals.",
                "Organizational Development Practitioners.",
                "HR professionals transitioning to Agile HR roles."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" }
    ];

    const outcomes = [
        "Understand Agile principles applied to HR functions.",
        "Implement iterative HR planning and execution strategies.",
        "Improve collaboration between HR and business teams.",
        "Adapt HR processes based on continuous employee feedback.",
        "Deliver measurable HR outcomes aligned with business goals."
    ];

    const prerequisites = [
        "Basic understanding of HR processes and practices.",
        "Familiarity with Agile principles is beneficial but not mandatory.",
        "Interest in improving HR effectiveness and adaptability."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Agile for HR On-Demand Microcredential program."
        },
        {
            title: "Complete On-Demand Modules",
            description: "Progress through self-paced learning materials and case studies."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through HR scenario-based exercises."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Agile HR",
            topics: [
                "Introduction to Agile principles in HR.",
                "Differences between traditional and Agile HR approaches.",
                "Benefits of Agile HR transformation."
            ]
        },
        {
            title: "Module 2: Agile Frameworks in HR Operations",
            topics: [
                "Applying Scrum and Kanban in HR projects.",
                "Sprint planning for recruitment and talent management.",
                "Tracking HR performance metrics."
            ]
        },
        {
            title: "Module 3: Employee Engagement and Feedback",
            topics: [
                "Designing iterative employee engagement strategies.",
                "Continuous feedback loops.",
                "Enhancing performance management using Agile practices."
            ]
        },
        {
            title: "Module 4: Scaling Agile HR Across the Organization",
            topics: [
                "Aligning HR with Agile business strategies.",
                "Building cross-functional collaboration.",
                "Sustaining Agile HR practices."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Agile HR Fundamentals", description: "Gain clarity on applying Agile methodologies within HR functions." },
        { title: "Implement Iterative HR Strategies", description: "Apply sprint-based and continuous improvement practices to HR initiatives." },
        { title: "Improve Collaboration", description: "Enhance communication between HR and other business units." },
        { title: "Adapt to Workforce Changes", description: "Develop agility in responding to employee needs and organizational shifts." },
        { title: "Deliver Measurable HR Outcomes", description: "Use Agile metrics to track and improve HR performance." }
    ];

    const whySections = [
        { title: "HR-Focused Agile Curriculum", description: "Specifically designed to address the needs of modern HR teams." },
        { title: "Practical and Real-World Learning", description: "Includes actionable HR case studies and exercises." },
        { title: "On-Demand Flexibility", description: "Allows professionals to learn at their own pace without disrupting work schedules." },
        { title: "Expert-Designed Content", description: "Created by experienced Agile and HR transformation practitioners." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand Agile HR competencies." }
    ];

    const courseFeatures = [
        { icon: Smile, title: 'Engagement', subtitle: 'Employee Focus', color: 'bg-green-50 text-green-600' },
        { icon: Settings, title: 'Operations', subtitle: 'Agile Model', color: 'bg-blue-50 text-blue-600' },
        { icon: Award, title: 'Badge', subtitle: 'Agile HR', color: 'bg-purple-50 text-purple-600' },
        { icon: TrendingUp, title: 'Transformation', subtitle: 'Digital Readiness', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Agile for HR On-Demand Microcredentials Course",
        breadcrumbName: "Agile for HR",
        rating: "5.0",
        enrolledCount: "1250+ professionals",
        subtitle: "Transform HR Practices with Agile Methodologies",
        benefits: [
            "Flexible on-demand learning format.",
            "Practical Agile HR frameworks.",
            "Real-world HR transformation case studies.",
            "Earn a recognized Agile HR Microcredential."
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AG-HR-PRO',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 10,999',
            discountedPrice: 'INR 5,499',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Agile for HR On-Demand Microcredential Overview",
        description: [
            "The Agile for HR On-Demand Microcredentials course provides a structured approach to applying Agile principles within human resources functions.",
            "This program focuses on iterative planning, collaboration, and continuous feedback to enhance HR effectiveness.",
            "Participants will gain practical tools to improve employee engagement, align HR with business strategy, and respond quickly to organizational changes."
        ],
        whatIsTitle: "What Is Agile for HR?",
        whatIsDescription: [
            "Agile for HR applies Agile methodologies such as Scrum and Kanban to HR initiatives and processes.",
            "It emphasizes flexibility, transparency, and data-driven decision-making.",
            "The course equips HR professionals with tools to create adaptive and responsive HR systems."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "On-demand video modules and learning materials.",
            "HR-focused case studies and exercises.",
            "Microcredential certification upon completion.",
            "Access to supporting resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Agile HR planning and execution",
            "Sprint-based talent management",
            "Employee engagement strategies",
            "Continuous feedback implementation",
            "HR performance measurement"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "On-demand self-paced learning.",
            "Customized corporate training options available upon request."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take this course?", answer: "This course is ideal for HR professionals, talent managers, and organizational development practitioners interested in Agile HR practices." },
                { question: "2. Is prior Agile knowledge required?", answer: "No prior Agile certification is required, although familiarity with Agile concepts is helpful." },
                { question: "3. Is this course self-paced?", answer: "Yes, this is an on-demand course that allows participants to learn at their own pace." },
                { question: "4. Is the microcredential valid for life?", answer: "Yes, the microcredential is valid for life and does not require renewal." }
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
                        <h4 className="text-[14px] text-slate-500 font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
                            {overviewContent.title}
                        </h4>
                        <h2 className="text-2xl md:text-3xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
                            {overviewContent.subtitle} <span className="text-blue-400">✦</span>
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
                    {...heroData}
                    referEarnText="Refer & Earn"
                    enrolledSuffix="Enrolled"
                    moneyBackText="100% Money Back Guarantee"
                    ltpLabel="Simpliaxis Training"
                    downloadBtnText="Download Brochure"
                    viewSchedulesBtnText="Start Learning"
                    freeAssessmentBtnText="Free Assessment"
                />
                <CourseFeatures features={courseFeatures} />
                <div className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                        <div className="space-y-12">
                            <CourseTabs tabs={tabs} />
                            <CourseCorporateOptUs
                                courseName="Why Simpliaxis for Agile HR Training?"
                                description="Simpliaxis delivers customized Agile HR training programs designed to enhance HR efficiency, improve collaboration, and align people strategies with business transformation goals. Our expert-designed on-demand content empowers organizations to adopt Agile HR practices that drive measurable workforce outcomes."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhySimpliaxis features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel schedules={sidePanelSchedules} isOnDemand={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AgileForHRMicrocredentialCourse;
