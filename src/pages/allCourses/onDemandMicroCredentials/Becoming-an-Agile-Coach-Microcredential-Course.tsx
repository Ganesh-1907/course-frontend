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
    Compass
} from "lucide-react";

/**
 * Becoming an Agile Coach Microcredential Course
 * Data source: course_data3.json
 */
const BecomingAnAgileCoachMicrocredentialCourse = () => {
    const courseName = "Becoming an Agile Coach Microcredential Course";

    const highlights = [
        { text: "4 hours of focused training on building foundational Agile coaching skills." },
        { text: "Learn the core competencies required to become an effective Agile Coach." },
        { text: "Understand coaching stances, mentoring, facilitation, and leadership techniques." },
        { text: "Apply practical tools to support Agile teams and organizations." },
        { text: "Real-world scenarios to strengthen coaching confidence." },
        { text: "Develop leadership presence and influence in Agile environments." },
        { text: "Earn a recognized Becoming an Agile Coach Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Build a strong foundation in Agile coaching principles and practices." },
        { title: "Individual Benefits", description: "Enhance facilitation, mentoring, and leadership skills." },
        { title: "Individual Benefits", description: "Gain confidence in guiding teams through Agile adoption." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile coaching and transformation roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Develop internal Agile coaching capability within the organization." },
        { title: "Corporate Benefits", description: "Improve team collaboration and Agile maturity." },
        { title: "Corporate Benefits", description: "Strengthen leadership alignment with Agile values and principles." },
        { title: "Corporate Benefits", description: "Support sustainable Agile transformation initiatives." }
    ];

    const careerStats = {
        averageIncome: "$125k - $175k",
        incomeLabel: "Salary Range",
        employmentGrowth: "95%",
        growthLabel: "Agile Coach Demand",
    };

    const attendeesData = [
        {
            group: [
                "Scrum Masters and Agile practitioners.",
                "Aspiring Agile Coaches.",
                "Team leads and managers.",
                "Project and Product Managers.",
                "Professionals supporting Agile transformation."
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
        "Understand the role and responsibilities of an Agile Coach.",
        "Apply coaching stances including mentoring, facilitation, and advising.",
        "Develop strategies to support Agile teams effectively.",
        "Enhance leadership communication in Agile environments.",
        "Build a pathway toward professional Agile coaching practice."
    ];

    const prerequisites = [
        "Basic understanding of Agile frameworks such as Scrum or Kanban.",
        "Experience working in Agile teams is beneficial.",
        "Interest in developing coaching and leadership skills."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Becoming an Agile Coach Microcredential training program."
        },
        {
            title: "Participate in Interactive Training",
            description: "Attend instructor-led sessions and engage in coaching exercises."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through real-world coaching scenarios."
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
                "Role and mindset of an Agile Coach.",
                "Agile values and principles.",
                "Core coaching competencies."
            ]
        },
        {
            title: "Module 2: Coaching Stances and Techniques",
            topics: [
                "Mentoring and teaching approaches.",
                "Facilitation techniques for Agile teams.",
                "Advising and leadership influence."
            ]
        },
        {
            title: "Module 3: Supporting Teams and Organizations",
            topics: [
                "Building high-performing teams.",
                "Managing conflict and collaboration.",
                "Encouraging continuous improvement."
            ]
        },
        {
            title: "Module 4: Developing Your Agile Coaching Path",
            topics: [
                "Creating a personal development plan.",
                "Ethical considerations in coaching.",
                "Preparing for advanced Agile coaching roles."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Agile Coaching Fundamentals", description: "Gain clarity on the responsibilities and mindset of an Agile Coach." },
        { title: "Develop Coaching Techniques", description: "Apply mentoring, facilitation, and advising skills effectively." },
        { title: "Strengthen Team Support Skills", description: "Guide Agile teams toward improved collaboration and performance." },
        { title: "Enhance Leadership Influence", description: "Build confidence in leading Agile transformation initiatives." },
        { title: "Prepare for Advanced Coaching Roles", description: "Create a pathway for continuous professional development as an Agile Coach." }
    ];

    const whySections = [
        { title: "Comprehensive Coaching Curriculum", description: "Designed to build foundational and practical Agile coaching skills." },
        { title: "Real-World Practical Focus", description: "Includes scenario-based learning and hands-on exercises." },
        { title: "Expert-Led Training", description: "Delivered by experienced Agile practitioners and transformation leaders." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Growth Support", description: "Equips professionals with in-demand Agile coaching competencies." }
    ];

    const courseFeatures = [
        { icon: Compass, title: 'Career Path', subtitle: 'Agile Coaching', color: 'bg-indigo-50 text-indigo-600' },
        { icon: Users, title: 'Leadership', subtitle: 'Influence', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: TrendingUp, title: 'Strategic', subtitle: 'Career Growth', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Becoming an Agile Coach Microcredential Course",
        breadcrumbName: "Becoming an Agile Coach",
        rating: "5.0",
        enrolledCount: "1250+ professionals",
        subtitle: "Build the Skills to Lead Agile Teams with Confidence",
        benefits: [
            "4 hours of focused Agile coaching training.",
            "Practical mentoring and facilitation techniques.",
            "Real-world coaching scenarios.",
            "Earn a recognized Agile Coaching Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-BAC-COACH',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 11,999',
            discountedPrice: 'INR 5,999',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Becoming an Agile Coach Microcredential Overview",
        description: [
            "The Becoming an Agile Coach Microcredential course provides a structured introduction to Agile coaching principles and practices.",
            "This program focuses on developing the core competencies required to guide Agile teams and support organizational transformation.",
            "Participants will gain practical tools, leadership skills, and a clear pathway toward becoming a successful Agile Coach."
        ],
        whatIsTitle: "What Is Agile Coaching?",
        whatIsDescription: [
            "Agile coaching involves guiding teams and organizations in adopting and improving Agile practices.",
            "It combines mentoring, facilitation, leadership, and advisory skills.",
            "The course equips professionals with foundational knowledge to begin their Agile coaching journey."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Practical coaching exercises and real-world case studies.",
            "Microcredential certification upon completion.",
            "Access to supporting learning resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Agile coaching fundamentals",
            "Facilitation and mentoring techniques",
            "Leadership communication skills",
            "Team collaboration improvement",
            "Continuous improvement facilitation"
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
                { question: "3. How long is the training?", answer: "The Becoming an Agile Coach Microcredential training typically lasts 4 hours." },
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
                                courseName="Why Viovn for Agile Coaching Training?"
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

export default BecomingAnAgileCoachMicrocredentialCourse;
