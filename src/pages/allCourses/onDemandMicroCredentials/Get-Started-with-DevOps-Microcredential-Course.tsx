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
    CheckCircle2,
    Infinity
} from "lucide-react";

/**
 * Get Started with DevOps Microcredentials Course
 * Data source: course_data3.json
 */
const GetStartedWithDevOpsMicrocredentialCourse = () => {
    const courseName = "Get Started with DevOps Microcredentials Course";

    const highlights = [
        { text: "4 hours of foundational DevOps training designed for beginners." },
        { text: "Understand DevOps principles, culture, and practices." },
        { text: "Learn the fundamentals of CI/CD and automation." },
        { text: "Explore collaboration between development and operations teams." },
        { text: "Practical examples of DevOps workflows and pipelines." },
        { text: "Improve software delivery speed and reliability." },
        { text: "Earn a recognized DevOps Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Gain a strong foundation in DevOps concepts and culture." },
        { title: "Individual Benefits", description: "Understand how to improve collaboration between development and operations teams." },
        { title: "Individual Benefits", description: "Enhance career opportunities in DevOps and cloud-related roles." },
        { title: "Individual Benefits", description: "Build practical knowledge of automation and continuous integration practices." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve software delivery speed and operational efficiency." },
        { title: "Corporate Benefits", description: "Strengthen collaboration between development and operations teams." },
        { title: "Corporate Benefits", description: "Reduce deployment risks through DevOps best practices." },
        { title: "Corporate Benefits", description: "Support digital transformation initiatives with DevOps adoption." }
    ];

    const careerStats = {
        averageIncome: "$105k - $160k",
        incomeLabel: "Salary Range",
        employmentGrowth: "94%",
        growthLabel: "Global DevOps Adoption",
    };

    const attendeesData = [
        {
            group: [
                "Software developers interested in DevOps practices.",
                "IT operations professionals transitioning to DevOps roles.",
                "System administrators and cloud engineers.",
                "Project managers working in technology environments.",
                "Beginners seeking foundational DevOps knowledge."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Netflix", url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Oracle", url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
    ];

    const outcomes = [
        "Understand DevOps culture and principles.",
        "Explain the benefits of CI/CD pipelines.",
        "Identify key DevOps tools and automation practices.",
        "Improve collaboration between development and operations teams.",
        "Support efficient and reliable software delivery."
    ];

    const prerequisites = [
        "Basic understanding of software development or IT operations.",
        "Familiarity with Agile practices is helpful but not mandatory.",
        "Interest in learning automation and continuous delivery concepts."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Get Started with DevOps Microcredentials training program."
        },
        {
            title: "Attend Training Sessions",
            description: "Participate in instructor-led or on-demand learning modules."
        },
        {
            title: "Complete Practical Exercises",
            description: "Apply DevOps concepts through real-world workflow examples."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your DevOps Microcredential upon successful completion of the training."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Introduction to DevOps",
            topics: [
                "Understanding DevOps culture and mindset.",
                "Benefits of DevOps in modern organizations.",
                "DevOps lifecycle overview."
            ]
        },
        {
            title: "Module 2: Continuous Integration and Continuous Delivery",
            topics: [
                "CI/CD fundamentals.",
                "Automation in software development.",
                "Pipeline concepts and workflows."
            ]
        },
        {
            title: "Module 3: DevOps Tools and Practices",
            topics: [
                "Version control systems.",
                "Build and deployment tools.",
                "Monitoring and feedback mechanisms."
            ]
        },
        {
            title: "Module 4: Collaboration and Culture",
            topics: [
                "Breaking down silos between teams.",
                "Improving communication and transparency.",
                "Continuous improvement practices."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand DevOps Fundamentals", description: "Gain clarity on DevOps culture, principles, and lifecycle." },
        { title: "Learn CI/CD Concepts", description: "Understand how continuous integration and delivery improve software development." },
        { title: "Explore DevOps Tools", description: "Identify key tools used for automation, deployment, and monitoring." },
        { title: "Improve Team Collaboration", description: "Strengthen communication and alignment between development and operations." },
        { title: "Support Continuous Improvement", description: "Adopt feedback-driven practices to enhance delivery efficiency." }
    ];

    const whySections = [
        { title: "Foundational DevOps Curriculum", description: "Designed to provide beginners with a structured introduction to DevOps practices." },
        { title: "Practical and Real-World Learning", description: "Includes real-world workflows and DevOps pipeline examples." },
        { title: "Expert-Led Training", description: "Delivered by experienced DevOps practitioners and industry professionals." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career-Oriented Development", description: "Equips professionals with in-demand DevOps skills for modern technology roles." }
    ];

    const courseFeatures = [
        { icon: Infinity, title: 'Foundational', subtitle: 'DevOps Core', color: 'bg-indigo-50 text-indigo-600' },
        { icon: Settings, title: 'CI/CD', subtitle: 'Automation', color: 'bg-blue-50 text-blue-600' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Career Prep', subtitle: 'Best Practices', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Get Started with DevOps Microcredentials Course",
        breadcrumbName: "Get Started with DevOps",
        rating: "5.0",
        enrolledCount: "1500+ professionals",
        subtitle: "Build a Strong Foundation in DevOps Culture and Practices",
        benefits: [
            "4 hours of foundational DevOps training.",
            "Introduction to CI/CD and automation.",
            "Real-world DevOps workflow examples.",
            "Earn a recognized DevOps Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-DEVOPS-INTRO',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 7,999',
            discountedPrice: 'INR 3,999',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Get Started with DevOps Microcredentials Overview",
        description: [
            "The Get Started with DevOps Microcredentials course provides a structured introduction to DevOps culture, practices, and tools.",
            "This program is designed to help professionals understand how collaboration, automation, and continuous delivery improve software development processes.",
            "Participants will gain foundational knowledge required to support DevOps initiatives and enhance operational efficiency."
        ],
        whatIsTitle: "What Is DevOps?",
        whatIsDescription: [
            "DevOps is a cultural and technical approach that integrates development and operations teams.",
            "It focuses on automation, collaboration, and continuous delivery to accelerate software release cycles.",
            "DevOps practices help organizations deliver reliable, high-quality software efficiently."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led or on-demand interactive training sessions.",
            "Practical DevOps workflow examples.",
            "Introduction to CI/CD pipelines and automation tools.",
            "Microcredential certification upon completion.",
            "Access to learning resources and support."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "DevOps fundamentals",
            "CI/CD pipeline concepts",
            "Automation practices",
            "Collaboration between development and operations",
            "Continuous improvement techniques"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live virtual instructor-led training.",
            "On-demand self-paced learning.",
            "Customized corporate training programs."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take this course?", answer: "This course is ideal for developers, IT professionals, system administrators, and anyone interested in starting a career in DevOps." },
                { question: "2. Is prior DevOps experience required?", answer: "No prior DevOps experience is required. Basic knowledge of software development or IT operations is sufficient." },
                { question: "3. How long is the training?", answer: "The Get Started with DevOps Microcredentials course typically lasts 4 hours." },
                { question: "4. Is the certification valid for life?", answer: "Yes, the DevOps Microcredential is valid for life and does not require renewal." }
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
                                courseName="Why Viovn for Corporate DevOps Training?"
                                description="Viovn delivers tailored corporate DevOps training programs designed to enhance collaboration, automation, and delivery efficiency. Our expert-led sessions help organizations adopt DevOps best practices, accelerate digital transformation, and improve software reliability across teams."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
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

export default GetStartedWithDevOpsMicrocredentialCourse;
