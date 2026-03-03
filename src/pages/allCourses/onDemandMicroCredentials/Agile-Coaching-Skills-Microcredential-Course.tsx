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
    MessageSquare
} from "lucide-react";

/**
 * Agile Coaching Skills Microcredential Training Course
 * Data source: course_data3.json
 */
const AgileCoachingSkillsMicrocredentialCourse = () => {
    const courseName = "Agile Coaching Skills Microcredential Training Course";

    const highlights = [
        { text: "4 hours of focused training to develop essential Agile coaching competencies." },
        { text: "Learn facilitation, mentoring, advising, and leadership techniques." },
        { text: "Strengthen your ability to guide teams through Agile transformation." },
        { text: "Apply real-world coaching scenarios and practical frameworks." },
        { text: "Enhance communication and conflict resolution skills." },
        { text: "Develop leadership presence and influence in Agile environments." },
        { text: "Earn a recognized Agile Coaching Skills Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop practical Agile coaching skills to support teams and organizations." },
        { title: "Individual Benefits", description: "Enhance leadership, facilitation, and mentoring capabilities." },
        { title: "Individual Benefits", description: "Improve decision-making and problem-solving in Agile settings." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile coaching and leadership roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Build internal Agile coaching capability to support transformation initiatives." },
        { title: "Corporate Benefits", description: "Improve team collaboration and Agile maturity across departments." },
        { title: "Corporate Benefits", description: "Strengthen leadership alignment with Agile principles." },
        { title: "Corporate Benefits", description: "Drive sustainable Agile adoption and continuous improvement." }
    ];

    const careerStats = {
        averageIncome: "$135k - $190k",
        incomeLabel: "Salary Range",
        employmentGrowth: "95%",
        growthLabel: "Global Coaching Demand",
    };

    const attendeesData = [
        {
            group: [
                "Scrum Masters and Agile practitioners.",
                "Aspiring Agile Coaches.",
                "Team Leads and Managers.",
                "Project and Product Managers.",
                "Professionals involved in Agile transformation initiatives."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_2017_logo.svg" }
    ];

    const outcomes = [
        "Understand core Agile coaching competencies.",
        "Apply facilitation, mentoring, and advising techniques effectively.",
        "Improve team performance through structured coaching approaches.",
        "Manage conflict and foster collaboration within Agile teams.",
        "Support long-term Agile transformation initiatives."
    ];

    const prerequisites = [
        "Basic understanding of Agile principles and frameworks.",
        "Experience working in Agile teams is beneficial.",
        "Interest in developing coaching and leadership skills."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Agile Coaching Skills Microcredential training program."
        },
        {
            title: "Participate in Interactive Training",
            description: "Attend instructor-led sessions and complete practical coaching exercises."
        },
        {
            title: "Demonstrate Learning",
            description: "Apply coaching techniques through real-world scenarios and case studies."
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
                "Understanding the role of an Agile Coach.",
                "Agile values, principles, and mindset.",
                "Core coaching competencies."
            ]
        },
        {
            title: "Module 2: Facilitation and Mentoring Skills",
            topics: [
                "Facilitating Agile ceremonies effectively.",
                "Mentoring individuals and teams.",
                "Encouraging accountability and ownership."
            ]
        },
        {
            title: "Module 3: Advising and Leadership Skills",
            topics: [
                "Providing strategic guidance to leadership.",
                "Aligning Agile initiatives with business goals.",
                "Influencing stakeholders effectively."
            ]
        },
        {
            title: "Module 4: Coaching for Continuous Improvement",
            topics: [
                "Managing team dynamics and conflicts.",
                "Encouraging experimentation and feedback.",
                "Sustaining Agile practices long-term."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Agile Coaching Fundamentals", description: "Gain clarity on the responsibilities and mindset of an Agile Coach." },
        { title: "Develop Facilitation and Mentoring Skills", description: "Apply structured coaching techniques to guide Agile teams effectively." },
        { title: "Enhance Leadership Influence", description: "Strengthen communication and stakeholder engagement skills." },
        { title: "Improve Team Collaboration", description: "Foster high-performing teams through collaboration and trust-building." },
        { title: "Support Sustainable Agile Transformation", description: "Embed continuous improvement and Agile maturity practices." }
    ];

    const whySections = [
        { title: "Comprehensive Coaching Curriculum", description: "Designed to build essential Agile coaching competencies through practical learning." },
        { title: "Real-World Application", description: "Includes scenario-based exercises and practical coaching tools." },
        { title: "Expert-Led Training", description: "Delivered by experienced Agile practitioners and transformation leaders." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand Agile coaching skills." }
    ];

    const courseFeatures = [
        { icon: MessageSquare, title: 'Facilitation', subtitle: 'Mentoring Skills', color: 'bg-indigo-50 text-indigo-600' },
        { icon: Users, title: 'Leadership', subtitle: 'Influence', color: 'bg-blue-50 text-blue-600' },
        { icon: Award, title: 'Credential', subtitle: 'Global Recognition', color: 'bg-purple-50 text-purple-600' },
        { icon: TrendingUp, title: 'Maturity', subtitle: 'Continuous', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Agile Coaching Skills Microcredential Training Course",
        breadcrumbName: "Agile Coaching Skills Microcredential Course | Viovn",
        rating: "5.0",
        enrolledCount: "1350+ professionals",
        subtitle: "Strengthen Your Agile Coaching and Leadership Capabilities",
        benefits: [
            "4 hours of focused Agile coaching training.",
            "Practical facilitation and mentoring techniques.",
            "Real-world coaching case studies.",
            "Earn a recognized Agile Coaching Skills Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AG-COACH-SK',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,999',
            discountedPrice: 'INR 7,999',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Agile Coaching Skills Microcredential Overview",
        description: [
            "The Agile Coaching Skills Microcredential Training Course provides a structured approach to developing essential coaching competencies for Agile environments.",
            "This program focuses on facilitation, mentoring, advising, and leadership techniques that help teams achieve higher performance.",
            "Participants will gain practical tools and frameworks to guide Agile teams and support sustainable transformation initiatives."
        ],
        whatIsTitle: "What Is Agile Coaching?",
        whatIsDescription: [
            "Agile coaching involves guiding teams and organizations in adopting and improving Agile practices.",
            "It combines mentoring, facilitation, advising, and leadership skills.",
            "The course equips professionals with practical knowledge to strengthen their coaching capabilities."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led interactive training sessions.",
            "Real-world coaching exercises and case studies.",
            "Microcredential certification upon completion.",
            "Access to supporting learning resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Agile coaching fundamentals",
            "Facilitation and mentoring techniques",
            "Leadership communication skills",
            "Conflict resolution and collaboration",
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
                { question: "1. Who should take this course?", answer: "This course is ideal for Scrum Masters, Agile practitioners, and professionals aspiring to become Agile Coaches." },
                { question: "2. Is prior coaching experience required?", answer: "No prior coaching certification is required, but familiarity with Agile frameworks is recommended." },
                { question: "3. How long is the training?", answer: "The Agile Coaching Skills Microcredential training typically lasts 4 hours." },
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
                    ltpLabel="Viovn Training"
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
                                courseName="Why Viovn for Agile Coaching Skills Training?"
                                description="Viovn delivers customized Agile coaching training programs designed to strengthen leadership capability and improve team performance. Our expert-led sessions help organizations build internal coaching expertise and achieve sustainable Agile transformation outcomes."
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

export default AgileCoachingSkillsMicrocredentialCourse;
