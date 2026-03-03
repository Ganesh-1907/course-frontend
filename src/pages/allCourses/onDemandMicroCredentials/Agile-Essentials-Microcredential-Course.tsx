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
 * Agile Essentials Microcredential Course
 * Data source: course_data3.json
 */
const AgileEssentialsMicrocredentialCourse = () => {
    const courseName = "Agile Essentials Microcredential Course";

    const highlights = [
        { text: "4 hours of interactive, instructor-led Agile Essentials training." },
        { text: "Comprehensive introduction to Agile principles and frameworks." },
        { text: "Practical exercises covering Scrum, Kanban, and Agile mindset." },
        { text: "Real-world case studies to strengthen Agile understanding." },
        { text: "Earn a recognized Agile Essentials Microcredential." },
        { text: "Enhance collaboration and adaptability in modern work environments." },
        { text: "24/7 learner support and post-training assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop a strong foundation in Agile principles and values." },
        { title: "Individual Benefits", description: "Improve adaptability and responsiveness in dynamic work environments." },
        { title: "Individual Benefits", description: "Enhance collaboration, communication, and teamwork skills." },
        { title: "Individual Benefits", description: "Strengthen career opportunities with a recognized Agile microcredential." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Build a shared understanding of Agile principles across teams." },
        { title: "Corporate Benefits", description: "Improve team productivity and project transparency." },
        { title: "Corporate Benefits", description: "Accelerate Agile adoption and transformation initiatives." },
        { title: "Corporate Benefits", description: "Enhance collaboration between cross-functional departments." }
    ];

    const careerStats = {
        averageIncome: "$90k - $140k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "85%",
        growthLabel: "Demand for Agile Professionals",
    };

    const attendeesData = [
        {
            group: [
                "Professionals new to Agile methodologies.",
                "Team members working in Agile or hybrid environments.",
                "Project managers and business analysts.",
                "Product team members and stakeholders.",
                "Anyone seeking foundational Agile knowledge."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Capgemini_2017_logo.svg" }
    ];

    const outcomes = [
        "Understand Agile values, principles, and mindset.",
        "Differentiate between Scrum, Kanban, and other Agile frameworks.",
        "Apply Agile concepts to real-world projects.",
        "Enhance collaboration within cross-functional teams.",
        "Support Agile transformation initiatives within organizations."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "An interest in Agile methodologies and teamwork is recommended."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Agile Essentials Microcredential training program."
        },
        {
            title: "Attend Training Sessions",
            description: "Participate in interactive instructor-led sessions and practical exercises."
        },
        {
            title: "Demonstrate Understanding",
            description: "Complete learning activities and apply Agile concepts in scenario-based exercises."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive the Agile Essentials Microcredential upon successful completion of the training."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Introduction to Agile",
            topics: [
                "Agile values and principles.",
                "The Agile mindset and its importance.",
                "Overview of Agile frameworks."
            ]
        },
        {
            title: "Module 2: Scrum Framework Basics",
            topics: [
                "Scrum roles and responsibilities.",
                "Scrum events and artifacts.",
                "Understanding iterative development."
            ]
        },
        {
            title: "Module 3: Kanban and Flow Management",
            topics: [
                "Principles of Kanban.",
                "Managing workflow and limiting work in progress.",
                "Improving process efficiency."
            ]
        },
        {
            title: "Module 4: Agile in Practice",
            topics: [
                "Applying Agile in real-world scenarios.",
                "Collaboration and communication in Agile teams.",
                "Continuous improvement and feedback loops."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Agile Foundations", description: "Gain a clear understanding of Agile values, principles, and frameworks." },
        { title: "Apply Agile Frameworks", description: "Learn how Scrum and Kanban operate in practical work environments." },
        { title: "Improve Team Collaboration", description: "Enhance communication and cooperation within Agile teams." },
        { title: "Support Continuous Improvement", description: "Adopt iterative learning and feedback-driven development practices." },
        { title: "Build Agile Mindset", description: "Develop adaptability and customer-focused thinking." }
    ];

    const whySections = [
        { title: "Industry-Relevant Curriculum", description: "Designed to provide practical and foundational Agile knowledge applicable across industries." },
        { title: "Expert Trainers", description: "Delivered by experienced Agile practitioners with real-world expertise." },
        { title: "Interactive Learning", description: "Engaging sessions with case studies and collaborative exercises." },
        { title: "Flexible Training Options", description: "Available in live virtual and customized corporate formats." },
        { title: "Comprehensive Support", description: "Access learning resources and guidance throughout and after the course." }
    ];

    const courseFeatures = [
        { icon: CheckCircle2, title: '4 Hours', subtitle: 'Live Training', color: 'bg-green-50 text-green-600' },
        { icon: BookOpen, title: 'Foundational', subtitle: 'Workshops', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Practical', subtitle: 'Application', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Agile Essentials Microcredential Training Course",
        breadcrumbName: "Agile Essentials",
        rating: "5.0",
        enrolledCount: "2500+ professionals",
        subtitle: "Build a Strong Foundation in Agile Principles and Practices",
        benefits: [
            "4 hours of interactive instructor-led training.",
            "Comprehensive introduction to Agile frameworks.",
            "Practical exercises and real-world case studies.",
            "Earn a recognized Agile Essentials Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AG-ES',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 4,999',
            discountedPrice: 'INR 2,499',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Agile Essentials Microcredential Overview",
        description: [
            "The Agile Essentials Microcredential course provides a comprehensive introduction to Agile principles, values, and frameworks.",
            "This program is designed to help professionals understand the Agile mindset and apply Agile concepts in practical work environments.",
            "Participants will gain foundational knowledge of Scrum, Kanban, and continuous improvement practices to enhance collaboration and project success."
        ],
        whatIsTitle: "What Is Agile Essentials?",
        whatIsDescription: [
            "Agile Essentials focuses on the core principles and mindset of Agile methodologies.",
            "It introduces key frameworks such as Scrum and Kanban while emphasizing adaptability, collaboration, and customer-centric thinking.",
            "The course equips professionals with the knowledge required to contribute effectively in Agile environments."
        ],
        whatsIncludedTitle: "What’s Included in the Agile Essentials Course?",
        whatsIncludedDescription: [
            "Instructor-led interactive sessions.",
            "Practical exercises and case studies.",
            "Foundational coverage of Scrum and Kanban.",
            "Microcredential certification upon completion.",
            "Access to post-training resources."
        ],
        skillsTitle: "Skills Covered in Agile Essentials",
        skills: [
            "Understanding Agile values and principles",
            "Scrum framework fundamentals",
            "Kanban workflow management",
            "Team collaboration techniques",
            "Continuous improvement practices"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live virtual instructor-led training.",
            "Customized corporate training programs."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should attend the Agile Essentials course?", answer: "This course is ideal for beginners, team members, and professionals seeking foundational knowledge of Agile methodologies." },
                { question: "2. Is prior Agile experience required?", answer: "No prior experience is required. The course is designed for individuals new to Agile." },
                { question: "3. How long is the training?", answer: "The Agile Essentials Microcredential training typically lasts 4 hours." },
                { question: "4. Is the certification valid for life?", answer: "Yes, the Agile Essentials Microcredential is valid for life and does not require renewal." }
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
                                courseName="Why Viovn for Corporate Agile Training?"
                                description="Viovn provides tailored corporate Agile training programs designed to align teams with industry best practices. Our expert trainers deliver practical, results-driven learning experiences that help organizations build Agile capability, improve collaboration, and achieve sustainable performance improvements."
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

export default AgileEssentialsMicrocredentialCourse;
