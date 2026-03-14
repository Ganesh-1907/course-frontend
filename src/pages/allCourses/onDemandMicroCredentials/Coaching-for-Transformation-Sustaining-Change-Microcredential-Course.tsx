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
    RefreshCw
} from "lucide-react";

/**
 * Coaching for Transformation: Sustaining Change Microcredential Course
 * Data source: course_data3.json
 */
const CoachingForTransformationSustainingChangeMicrocredentialCourse = () => {
    const courseName = "Coaching for Transformation: Sustaining Change Microcredential Course";

    const highlights = [
        { text: "4 hours of focused training on transformational coaching and change sustainability." },
        { text: "Learn practical techniques to support long-term organizational change." },
        { text: "Understand how to overcome resistance and build change resilience." },
        { text: "Apply coaching frameworks to drive sustainable transformation." },
        { text: "Real-world case studies on leading change initiatives." },
        { text: "Strengthen leadership influence during transformation journeys." },
        { text: "Earn a recognized Coaching for Transformation Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop advanced coaching skills to guide teams through transformational change." },
        { title: "Individual Benefits", description: "Enhance leadership presence and influence in dynamic environments." },
        { title: "Individual Benefits", description: "Build confidence in managing resistance and sustaining behavioral change." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile coaching, leadership, and transformation roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve the success rate of organizational transformation initiatives." },
        { title: "Corporate Benefits", description: "Strengthen leadership capability to manage cultural and structural change." },
        { title: "Corporate Benefits", description: "Increase employee engagement during transformation efforts." },
        { title: "Corporate Benefits", description: "Ensure long-term sustainability of change initiatives." }
    ];

    const careerStats = {
        averageIncome: "$120k - $185k",
        incomeLabel: "Salary Range",
        employmentGrowth: "90%",
        growthLabel: "Org Transformation Demand",
    };

    const attendeesData = [
        {
            group: [
                "Agile Coaches and Scrum Masters.",
                "Organizational change leaders.",
                "Transformation consultants.",
                "HR and leadership development professionals.",
                "Managers leading change initiatives."
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
        "Understand the principles of transformational coaching.",
        "Apply structured frameworks to sustain organizational change.",
        "Manage resistance and build change resilience.",
        "Strengthen leadership influence during transformation efforts.",
        "Support continuous improvement and long-term cultural shifts."
    ];

    const prerequisites = [
        "Basic understanding of Agile or organizational change principles.",
        "Experience working in leadership or coaching roles is beneficial.",
        "Interest in driving sustainable transformation within organizations."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Coaching for Transformation Microcredential training program."
        },
        {
            title: "Participate in Training",
            description: "Attend interactive sessions and complete practical coaching exercises."
        },
        {
            title: "Apply Learning",
            description: "Demonstrate understanding through transformation-focused case studies."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Transformation",
            topics: [
                "Understanding organizational change dynamics.",
                "Difference between change and transformation.",
                "Common challenges in sustaining change."
            ]
        },
        {
            title: "Module 2: Coaching for Sustainable Change",
            topics: [
                "Transformational coaching mindset.",
                "Coaching stances for long-term impact.",
                "Building psychological safety during change."
            ]
        },
        {
            title: "Module 3: Managing Resistance and Engagement",
            topics: [
                "Identifying sources of resistance.",
                "Strategies for overcoming barriers.",
                "Increasing team engagement and ownership."
            ]
        },
        {
            title: "Module 4: Embedding Continuous Improvement",
            topics: [
                "Reinforcing behavioral change.",
                "Measuring transformation outcomes.",
                "Sustaining momentum in long-term initiatives."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Transformation Principles", description: "Gain clarity on the dynamics and challenges of organizational transformation." },
        { title: "Develop Transformational Coaching Skills", description: "Apply coaching techniques that promote sustainable behavioral change." },
        { title: "Manage Change Resistance", description: "Identify and address resistance effectively to maintain transformation progress." },
        { title: "Strengthen Leadership Influence", description: "Build the skills needed to guide teams confidently through change." },
        { title: "Sustain Long-Term Improvement", description: "Embed continuous improvement practices within organizational culture." }
    ];

    const whySections = [
        { title: "Transformation-Focused Curriculum", description: "Designed specifically to help professionals sustain long-term organizational change." },
        { title: "Practical Coaching Frameworks", description: "Includes actionable tools and case studies for real-world transformation challenges." },
        { title: "Expert-Led Training", description: "Delivered by experienced transformation coaches and industry professionals." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand transformation and leadership skills." }
    ];

    const courseFeatures = [
        { icon: RefreshCw, title: '4 Hours', subtitle: 'Focused Training', color: 'bg-indigo-50 text-indigo-600' },
        { icon: TrendingUp, title: 'Sustainable', subtitle: 'Change Focus', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: UserCheck, title: 'Advanced', subtitle: 'Coaching', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Coaching for Transformation: Sustaining Change Microcredential Course",
        breadcrumbName: "Coaching for Transformation",
        rating: "5.0",
        enrolledCount: "850+ professionals",
        subtitle: "Lead and Sustain Meaningful Organizational Change",
        benefits: [
            "4 hours of focused transformation coaching training.",
            "Practical frameworks for sustaining long-term change.",
            "Real-world case studies and exercises.",
            "Earn a recognized Transformation Coaching Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Coaching for Transformation Microcredential Overview",
        description: [
            "The Coaching for Transformation: Sustaining Change Microcredential course provides a structured approach to leading and maintaining long-term organizational change.",
            "This program focuses on transformational coaching techniques, leadership influence, and sustainable improvement strategies.",
            "Participants will gain the skills required to guide teams through change, overcome resistance, and embed continuous improvement practices."
        ],
        whatIsTitle: "What Is Coaching for Transformation?",
        whatIsDescription: [
            "Coaching for Transformation focuses on enabling lasting organizational change through structured coaching practices.",
            "It emphasizes mindset shifts, leadership engagement, and sustainable behavioral change.",
            "The course equips professionals to drive transformation initiatives confidently and effectively."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led interactive training sessions.",
            "Real-world transformation case studies.",
            "Practical coaching and leadership exercises.",
            "Microcredential certification upon completion.",
            "Access to learning resources and guidance."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Transformational coaching techniques",
            "Change management fundamentals",
            "Managing resistance and engagement",
            "Leadership influence during change",
            "Sustaining continuous improvement"
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
                { question: "1. Who should take this course?", answer: "This course is ideal for Agile Coaches, change leaders, managers, and professionals responsible for driving transformation initiatives." },
                { question: "2. Is prior coaching experience required?", answer: "Prior coaching or leadership experience is beneficial but not mandatory." },
                { question: "3. How long is the training?", answer: "The Coaching for Transformation Microcredential training typically lasts 4 hours." },
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
                                courseName="Why Viovn for Corporate Transformation Coaching Training?"
                                description="Viovn provides tailored corporate transformation coaching programs designed to strengthen leadership capability and sustain long-term organizational change. Our expert-led training empowers enterprises to manage resistance effectively, embed continuous improvement, and achieve measurable transformation outcomes."
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

export default CoachingForTransformationSustainingChangeMicrocredentialCourse;
