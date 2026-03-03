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
    ShieldAlert
} from "lucide-react";

/**
 * Change Management: Overcoming Resistance for Agile Transformation Course
 * Data source: course_data3.json
 */
const ChangeManagementMicrocredentialCourse = () => {
    const courseName = "Change Management: Overcoming Resistance for Agile Transformation Course";

    const highlights = [
        { text: "4 hours of focused training on managing resistance during Agile transformation." },
        { text: "Learn proven change management frameworks for Agile environments." },
        { text: "Understand the psychological and cultural drivers of resistance." },
        { text: "Apply practical strategies to increase stakeholder buy-in." },
        { text: "Real-world case studies on overcoming Agile transformation challenges." },
        { text: "Develop leadership influence to support sustainable change." },
        { text: "Earn a recognized Change Management Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Build strong change management capabilities to support Agile transformation initiatives." },
        { title: "Individual Benefits", description: "Enhance leadership and communication skills during organizational change." },
        { title: "Individual Benefits", description: "Gain confidence in identifying and managing resistance effectively." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile coaching, leadership, and transformation roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Increase the success rate of Agile transformation initiatives." },
        { title: "Corporate Benefits", description: "Reduce resistance and improve employee engagement during change." },
        { title: "Corporate Benefits", description: "Strengthen leadership capability to drive cultural and behavioral shifts." },
        { title: "Corporate Benefits", description: "Ensure sustainable adoption of Agile practices across the organization." }
    ];

    const careerStats = {
        averageIncome: "$110k - $170k",
        incomeLabel: "Salary Range",
        employmentGrowth: "92%",
        growthLabel: "Change Advisor Demand",
    };

    const attendeesData = [
        {
            group: [
                "Agile Coaches and Scrum Masters.",
                "Leaders managing Agile transformation initiatives.",
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
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Deloitte.svg" }
    ];

    const outcomes = [
        "Understand the root causes of resistance during Agile transformation.",
        "Apply structured change management frameworks.",
        "Develop strategies to improve stakeholder engagement.",
        "Strengthen leadership communication during change initiatives.",
        "Sustain long-term Agile adoption and performance improvements."
    ];

    const prerequisites = [
        "Basic understanding of Agile principles and frameworks.",
        "Experience working in team-based or leadership roles is beneficial.",
        "Interest in leading or supporting organizational transformation."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Change Management Microcredential training program."
        },
        {
            title: "Attend Interactive Sessions",
            description: "Participate in instructor-led sessions and complete scenario-based exercises."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through case studies and transformation scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Change Management",
            topics: [
                "Understanding organizational change dynamics.",
                "Common causes of resistance.",
                "Impact of culture on Agile transformation."
            ]
        },
        {
            title: "Module 2: Identifying and Addressing Resistance",
            topics: [
                "Types of resistance in Agile environments.",
                "Psychological and behavioral drivers.",
                "Strategies to reduce resistance."
            ]
        },
        {
            title: "Module 3: Leadership and Stakeholder Engagement",
            topics: [
                "Building leadership alignment.",
                "Communication techniques during change.",
                "Encouraging ownership and participation."
            ]
        },
        {
            title: "Module 4: Sustaining Agile Transformation",
            topics: [
                "Embedding continuous improvement practices.",
                "Measuring transformation success.",
                "Maintaining long-term cultural change."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Resistance Drivers", description: "Identify the psychological, cultural, and structural factors that create resistance to change." },
        { title: "Apply Change Management Frameworks", description: "Use structured approaches to guide Agile transformation initiatives successfully." },
        { title: "Enhance Stakeholder Engagement", description: "Develop strategies to increase buy-in and reduce opposition." },
        { title: "Strengthen Leadership Influence", description: "Build communication and influence skills necessary for effective transformation." },
        { title: "Sustain Agile Adoption", description: "Embed long-term Agile practices and continuous improvement habits." }
    ];

    const whySections = [
        { title: "Resistance-Focused Curriculum", description: "Designed specifically to address resistance challenges during Agile transformation." },
        { title: "Practical Change Frameworks", description: "Includes actionable tools and real-world case studies." },
        { title: "Expert-Led Training", description: "Delivered by experienced Agile transformation practitioners." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand change leadership skills." }
    ];

    const courseFeatures = [
        { icon: ShieldAlert, title: 'Manage', subtitle: 'Resistance', color: 'bg-rose-50 text-rose-600' },
        { icon: Settings, title: 'Frameworks', subtitle: 'Change Ready', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Users, title: 'Engagement', subtitle: 'Leadership', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Change Management: Overcoming Resistance for Agile Transformation Course",
        breadcrumbName: "Change Management",
        rating: "5.0",
        enrolledCount: "1250+ professionals",
        subtitle: "Master Change Management to Drive Successful Agile Transformation",
        benefits: [
            "4 hours of focused training on overcoming resistance.",
            "Practical change management frameworks.",
            "Real-world Agile transformation case studies.",
            "Earn a recognized Change Management Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-CH-MGT-ADV',
            courseName: heroData.courseName,
            dateRange: 'Always Available',
            timeRange: 'On-Demand',
            trainerName: 'SimpliAxis Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 8,999',
            discountedPrice: 'INR 4,499',
            discountPercentage: '50',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Change Management for Agile Transformation Overview",
        description: [
            "The Change Management: Overcoming Resistance for Agile Transformation Microcredential course provides a structured approach to managing resistance during Agile initiatives.",
            "This program focuses on understanding behavioral, cultural, and organizational barriers that hinder transformation.",
            "Participants will gain practical tools to engage stakeholders, strengthen leadership alignment, and sustain long-term Agile success."
        ],
        whatIsTitle: "What Is Change Management in Agile Transformation?",
        whatIsDescription: [
            "Change management in Agile transformation focuses on guiding individuals and teams through behavioral and cultural shifts.",
            "It emphasizes reducing resistance, improving communication, and increasing engagement.",
            "The course equips professionals with strategies to ensure successful and sustainable Agile adoption."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led interactive training sessions.",
            "Real-world case studies on Agile resistance challenges.",
            "Hands-on exercises and practical tools.",
            "Microcredential certification upon completion.",
            "Access to supporting learning resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Change management strategies",
            "Managing resistance in Agile environments",
            "Stakeholder engagement techniques",
            "Leadership communication during transformation",
            "Sustaining Agile cultural change"
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
                { question: "2. Is prior change management experience required?", answer: "No prior change management certification is required, but familiarity with Agile concepts is recommended." },
                { question: "3. How long is the training?", answer: "The training typically lasts 4 hours and includes interactive exercises." },
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
                                courseName="Why Viovn for Corporate Change Management Training?"
                                description="Viovn delivers customized corporate training programs designed to strengthen change management capability and ensure successful Agile transformation. Our expert-led sessions empower organizations to reduce resistance, improve engagement, and achieve sustainable transformation outcomes."
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

export default ChangeManagementMicrocredentialCourse;
