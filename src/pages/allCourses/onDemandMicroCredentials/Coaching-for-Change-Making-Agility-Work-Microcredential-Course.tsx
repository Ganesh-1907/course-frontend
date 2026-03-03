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
    Zap
} from "lucide-react";

/**
 * Coaching for Change: Making Agility Work Microcredential Course
 * Data source: course_data3.json
 */
const CoachingForChangeMicrocredentialCourse = () => {
    const courseName = "Coaching for Change: Making Agility Work Microcredential Course";

    const highlights = [
        { text: "4 hours of focused training on coaching strategies that enable successful Agile change." },
        { text: "Learn how to translate Agile principles into practical organizational outcomes." },
        { text: "Understand the human side of change and how to build engagement." },
        { text: "Apply coaching techniques to make agility sustainable and measurable." },
        { text: "Real-world case studies on Agile adoption challenges." },
        { text: "Develop leadership influence to support change initiatives." },
        { text: "Earn a recognized Coaching for Change Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Strengthen your ability to coach teams through Agile change initiatives." },
        { title: "Individual Benefits", description: "Develop practical skills to make Agile practices effective in real environments." },
        { title: "Individual Benefits", description: "Enhance leadership presence and communication during transformation." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile coaching and organizational change roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve the effectiveness of Agile adoption across teams." },
        { title: "Corporate Benefits", description: "Increase employee engagement during change initiatives." },
        { title: "Corporate Benefits", description: "Strengthen leadership capability to drive measurable Agile outcomes." },
        { title: "Corporate Benefits", description: "Ensure long-term sustainability of Agile transformation efforts." }
    ];

    const careerStats = {
        averageIncome: "$115k - $165k",
        incomeLabel: "Salary Range",
        employmentGrowth: "88%",
        growthLabel: "Agile Coaching Demand",
    };

    const attendeesData = [
        {
            group: [
                "Agile Coaches and Scrum Masters.",
                "Leaders responsible for Agile transformation.",
                "Project and Product Managers.",
                "Change management professionals.",
                "HR and organizational development specialists."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" }
    ];

    const outcomes = [
        "Understand the principles of coaching for Agile change.",
        "Apply practical techniques to make agility work within teams.",
        "Identify and manage resistance to change effectively.",
        "Strengthen leadership alignment during transformation.",
        "Sustain measurable Agile improvements over time."
    ];

    const prerequisites = [
        "Basic understanding of Agile frameworks and principles.",
        "Experience working in team-based environments is beneficial.",
        "Interest in leading or supporting Agile change initiatives."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Coaching for Change Microcredential training program."
        },
        {
            title: "Participate in Interactive Sessions",
            description: "Attend instructor-led training and complete scenario-based exercises."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through real-world Agile coaching scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Agile Change",
            topics: [
                "Understanding Agile transformation challenges.",
                "Difference between implementing Agile and making agility work.",
                "Change dynamics in organizations."
            ]
        },
        {
            title: "Module 2: Coaching Techniques for Agile Success",
            topics: [
                "Coaching mindset and leadership stance.",
                "Facilitating Agile mindset shifts.",
                "Building accountability and ownership."
            ]
        },
        {
            title: "Module 3: Managing Resistance and Engagement",
            topics: [
                "Identifying common sources of resistance.",
                "Encouraging participation and buy-in.",
                "Strengthening communication during change."
            ]
        },
        {
            title: "Module 4: Sustaining Agile Practices",
            topics: [
                "Embedding continuous improvement habits.",
                "Measuring Agile effectiveness.",
                "Maintaining momentum in long-term initiatives."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Agile Change Principles", description: "Gain clarity on how coaching supports successful Agile adoption." },
        { title: "Apply Practical Coaching Tools", description: "Use structured techniques to make agility effective in real environments." },
        { title: "Manage Change Resistance", description: "Develop strategies to address and reduce resistance to Agile initiatives." },
        { title: "Strengthen Leadership Influence", description: "Build the ability to guide leaders and teams through transformation." },
        { title: "Sustain Long-Term Agility", description: "Embed habits and practices that maintain Agile performance improvements." }
    ];

    const whySections = [
        { title: "Agility-Focused Curriculum", description: "Designed to help professionals make Agile practices effective and sustainable." },
        { title: "Practical Coaching Frameworks", description: "Includes actionable tools and real-world case studies." },
        { title: "Expert-Led Training", description: "Delivered by experienced Agile and transformation practitioners." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand Agile change leadership skills." }
    ];

    const courseFeatures = [
        { icon: Zap, title: 'Practical', subtitle: 'Agility Work', color: 'bg-amber-50 text-amber-600' },
        { icon: Users, title: 'Leadership', subtitle: 'Influence', color: 'bg-indigo-50 text-indigo-600' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: TrendingUp, title: 'Sustainable', subtitle: 'Change', color: 'bg-emerald-50 text-emerald-600' },
    ];

    const heroData = {
        courseName: "Coaching for Change: Making Agility Work Microcredential Course",
        breadcrumbName: "Coaching for Change",
        rating: "5.0",
        enrolledCount: "850+ professionals",
        subtitle: "Turn Agile Principles into Sustainable Organizational Success",
        benefits: [
            "4 hours of focused Agile change coaching training.",
            "Practical frameworks for making agility effective.",
            "Real-world transformation case studies.",
            "Earn a recognized Agile Change Microcredential."
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-CFC-AGILITY',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 9,999',
            discountedPrice: 'INR 4,999',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Coaching for Change Microcredential Overview",
        description: [
            "The Coaching for Change: Making Agility Work Microcredential course provides a structured approach to implementing and sustaining Agile practices effectively.",
            "This program focuses on practical coaching techniques, leadership alignment, and measurable outcomes that ensure Agile initiatives deliver real value.",
            "Participants will learn how to guide teams through change, overcome resistance, and embed long-term Agile habits."
        ],
        whatIsTitle: "What Is Coaching for Change?",
        whatIsDescription: [
            "Coaching for Change focuses on enabling successful Agile adoption through structured coaching practices.",
            "It emphasizes practical application, leadership engagement, and sustainable improvement.",
            "The course equips professionals to make agility work effectively within their organizations."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led interactive training sessions.",
            "Real-world Agile transformation case studies.",
            "Hands-on coaching exercises.",
            "Microcredential certification upon completion.",
            "Access to supporting learning resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Agile transformation coaching",
            "Managing change resistance",
            "Leadership alignment strategies",
            "Sustaining Agile practices",
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
                { question: "1. Who should take this course?", answer: "This course is ideal for Agile Coaches, Scrum Masters, leaders, and professionals responsible for driving Agile transformation." },
                { question: "2. Is prior coaching experience required?", answer: "Prior coaching experience is helpful but not mandatory. A basic understanding of Agile principles is recommended." },
                { question: "3. How long is the training?", answer: "The Coaching for Change Microcredential training typically lasts 4 hours." },
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
                                courseName="Why Simpliaxis for Corporate Agile Change Training?"
                                description="Simpliaxis delivers customized corporate Agile change training programs designed to strengthen leadership capability and ensure sustainable transformation outcomes. Our expert-led sessions help organizations embed Agile practices effectively, improve collaboration, and achieve measurable performance improvements."
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

export default CoachingForChangeMicrocredentialCourse;
