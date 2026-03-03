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
    Compass
} from "lucide-react";

/**
 * Introduction to Agile Coaching Microcredential Course
 * Data source: course_data3.json
 */
const IntroductionToAgileCoachingMicrocredentialCourse = () => {
    const courseName = "Introduction to Agile Coaching Microcredential Course";

    const highlights = [
        { text: "4 hours of interactive training introducing core Agile coaching concepts." },
        { text: "Understand the role and responsibilities of an Agile Coach." },
        { text: "Learn foundational coaching stances, techniques, and mindset." },
        { text: "Practical exercises focused on real-world coaching scenarios." },
        { text: "Explore facilitation, mentoring, and leadership fundamentals." },
        { text: "Improve team collaboration and Agile adoption practices." },
        { text: "Earn a recognized Introduction to Agile Coaching Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Build a strong foundation in Agile coaching principles and mindset." },
        { title: "Individual Benefits", description: "Develop facilitation and mentoring skills to guide Agile teams effectively." },
        { title: "Individual Benefits", description: "Enhance leadership capabilities to support organizational change." },
        { title: "Individual Benefits", description: "Increase career opportunities in Agile coaching and leadership roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Strengthen Agile adoption through structured coaching practices." },
        { title: "Corporate Benefits", description: "Improve team performance and collaboration across departments." },
        { title: "Corporate Benefits", description: "Support cultural transformation toward continuous improvement." },
        { title: "Corporate Benefits", description: "Enable leaders to manage change effectively using coaching techniques." }
    ];

    const careerStats = {
        averageIncome: "$115k - $175k",
        incomeLabel: "Salary Range",
        employmentGrowth: "92%",
        growthLabel: "Demand for Agile Coaches",
    };

    const attendeesData = [
        {
            group: [
                "Scrum Masters seeking foundational coaching skills.",
                "Agile team members interested in coaching practices.",
                "Project Managers transitioning to Agile environments.",
                "Leaders supporting Agile transformation initiatives.",
                "Professionals aspiring to become Agile Coaches."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" }
    ];

    const outcomes = [
        "Understand the role and stance of an Agile Coach.",
        "Apply fundamental coaching and facilitation techniques.",
        "Support Agile teams in improving collaboration and performance.",
        "Encouraging continuous improvement within organizations.",
        "Assist leadership in navigating Agile transformation."
    ];

    const prerequisites = [
        "Basic understanding of Agile principles and frameworks.",
        "Experience working in an Agile team is recommended but not mandatory.",
        "Interest in developing coaching and leadership skills."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Introduction to Agile Coaching Microcredential training program."
        },
        {
            title: "Attend Interactive Sessions",
            description: "Participate in instructor-led sessions and practical coaching exercises."
        },
        {
            title: "Demonstrate Learning",
            description: "Complete scenario-based activities to apply coaching concepts."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Agile Coaching",
            topics: [
                "Understanding the Agile Coach role.",
                "Coaching mindset and core competencies.",
                "Difference between mentoring, teaching, and coaching."
            ]
        },
        {
            title: "Module 2: Coaching Stances and Techniques",
            topics: [
                "Active listening and powerful questioning.",
                "Providing constructive feedback.",
                "Building trust within Agile teams."
            ]
        },
        {
            title: "Module 3: Facilitation and Team Development",
            topics: [
                "Facilitating Agile ceremonies effectively.",
                "Encouraging collaboration and engagement.",
                "Managing team conflicts constructively."
            ]
        },
        {
            title: "Module 4: Supporting Organizational Change",
            topics: [
                "Driving continuous improvement.",
                "Coaching leadership in Agile transformation.",
                "Promoting an Agile mindset across the organization."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand the Agile Coach Role", description: "Gain clarity on the responsibilities, mindset, and impact of an Agile Coach." },
        { title: "Develop Coaching Skills", description: "Learn foundational coaching techniques including active listening and effective questioning." },
        { title: "Improve Team Facilitation", description: "Enhance facilitation skills to support productive Agile ceremonies and collaboration." },
        { title: "Support Agile Transformation", description: "Assist organizations in adopting Agile principles and continuous improvement practices." },
        { title: "Strengthen Leadership Influence", description: "Build the confidence and skills required to guide teams and leaders effectively." }
    ];

    const whySections = [
        { title: "Foundational Coaching Curriculum", description: "Designed to introduce essential Agile coaching concepts and techniques." },
        { title: "Practical and Scenario-Based Learning", description: "Includes hands-on exercises and real-world Agile coaching examples." },
        { title: "Expert-Led Training", description: "Delivered by experienced Agile practitioners and coaches." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career-Focused Development", description: "Equips professionals with skills required to advance into Agile coaching roles." }
    ];

    const courseFeatures = [
        { icon: Compass, title: 'Foundational', subtitle: 'Coaching Skills', color: 'bg-indigo-50 text-indigo-600' },
        { icon: Users, title: 'Interactive', subtitle: 'Live Sessions', color: 'bg-blue-50 text-blue-600' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Real-world', subtitle: 'Scenarios', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Introduction to Agile Coaching Microcredential Course",
        breadcrumbName: "Introduction to Agile Coaching",
        rating: "5.0",
        enrolledCount: "1200+ professionals",
        subtitle: "Build Foundational Skills to Guide Agile Teams and Organizations",
        benefits: [
            "4 hours of interactive coaching-focused training.",
            "Practical exercises and real-world Agile scenarios.",
            "Foundational coaching and facilitation techniques.",
            "Earn a recognized Agile Coaching Microcredential."
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AC-INTRO',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 6,999',
            discountedPrice: 'INR 3,499',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Introduction to Agile Coaching Microcredential Overview",
        description: [
            "The Introduction to Agile Coaching Microcredential course provides a structured foundation in Agile coaching principles and practices.",
            "This program is designed to help professionals understand the coaching mindset, facilitation techniques, and leadership responsibilities required to guide Agile teams.",
            "Participants will learn how to support continuous improvement, enhance collaboration, and contribute effectively to Agile transformation initiatives."
        ],
        whatIsTitle: "What Is Introduction to Agile Coaching?",
        whatIsDescription: [
            "Introduction to Agile Coaching focuses on the foundational concepts and skills required to support Agile teams and organizations.",
            "It explores coaching stances, facilitation techniques, and leadership influence in Agile environments.",
            "The course prepares professionals to guide teams through collaboration, improvement, and change."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led interactive training sessions.",
            "Real-world Agile coaching scenarios.",
            "Hands-on facilitation and mentoring exercises.",
            "Microcredential certification upon completion.",
            "Access to learning resources and guidance."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Agile coaching fundamentals",
            "Facilitation techniques",
            "Active listening and questioning",
            "Conflict management in Agile teams",
            "Supporting organizational Agile transformation"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Customized corporate training programs."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take this course?", answer: "This course is ideal for Scrum Masters, Agile practitioners, project managers, and professionals aspiring to become Agile Coaches." },
                { question: "2. Do I need prior coaching experience?", answer: "No prior coaching experience is required. A basic understanding of Agile principles is recommended." },
                { question: "3. How long is the training?", answer: "The Introduction to Agile Coaching Microcredential training typically lasts 4 hours." },
                { question: "4. Is the certification valid for life?", answer: "Yes, the microcredential is valid for life and does not require renewal." }
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
                    viewSchedulesBtnText="View Schedules"
                    freeAssessmentBtnText="Free Assessment"
                />
                <CourseFeatures features={courseFeatures} />
                <div className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                        <div className="space-y-12">
                            <CourseTabs tabs={tabs} />
                            <CourseCorporateOptUs
                                courseName="Why Simpliaxis for Corporate Agile Coaching Training?"
                                description="Simpliaxis provides tailored corporate Agile coaching training programs designed to strengthen team collaboration and organizational agility. Our expert-led sessions help enterprises build coaching capabilities, drive Agile adoption, and achieve sustainable performance improvements across teams."
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

export default IntroductionToAgileCoachingMicrocredentialCourse;
