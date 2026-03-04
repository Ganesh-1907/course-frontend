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
    Target
} from "lucide-react";

/**
 * Agile for Marketing On-Demand Microcredentials Course
 * Data source: course_data3.json
 */
const AgileForMarketingMicrocredentialCourse = () => {
    const courseName = "Agile for Marketing On-Demand Microcredentials Course";

    const highlights = [
        { text: "On-demand training designed to apply Agile principles in marketing environments." },
        { text: "Learn how to manage marketing campaigns using Agile frameworks." },
        { text: "Improve collaboration between marketing and cross-functional teams." },
        { text: "Increase campaign adaptability through iterative planning." },
        { text: "Apply real-world Agile marketing case studies." },
        { text: "Enhance customer-centric marketing strategies using Agile practices." },
        { text: "Earn a recognized Agile for Marketing Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop the ability to implement Agile methodologies in marketing projects." },
        { title: "Individual Benefits", description: "Improve responsiveness to changing customer needs and market trends." },
        { title: "Individual Benefits", description: "Enhance collaboration and communication within marketing teams." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile marketing and digital transformation roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Increase marketing efficiency through iterative planning and execution." },
        { title: "Corporate Benefits", description: "Improve alignment between marketing strategy and business objectives." },
        { title: "Corporate Benefits", description: "Reduce campaign risks with continuous feedback and adaptation." },
        { title: "Corporate Benefits", description: "Strengthen cross-functional collaboration and faster go-to-market delivery." }
    ];

    const careerStats = {
        averageIncome: "$110k - $160k",
        incomeLabel: "Salary Range",
        employmentGrowth: "92%",
        growthLabel: "Agile Marketing Demand",
    };

    const attendeesData = [
        {
            group: [
                "Marketing Managers and Executives.",
                "Digital Marketing Professionals.",
                "Brand Managers and Campaign Leads.",
                "Product Marketing Specialists.",
                "Professionals transitioning to Agile marketing roles."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "HubSpot", url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
        { name: "Adobe", url: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Adobe_Inc._logo.svg" },
        { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" }
    ];

    const outcomes = [
        "Understand Agile principles applied to marketing.",
        "Implement iterative campaign planning and execution.",
        "Improve collaboration within marketing and cross-functional teams.",
        "Adapt quickly to changing customer feedback and market conditions.",
        "Deliver measurable marketing outcomes using Agile practices."
    ];

    const prerequisites = [
        "Basic understanding of marketing concepts and campaign management.",
        "Familiarity with Agile principles is beneficial but not mandatory.",
        "Interest in improving marketing efficiency and adaptability."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Agile for Marketing On-Demand Microcredential program."
        },
        {
            title: "Complete On-Demand Modules",
            description: "Progress through self-paced training materials and case studies."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through marketing scenario-based exercises."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Agile Marketing",
            topics: [
                "Introduction to Agile principles in marketing.",
                "Differences between traditional and Agile marketing.",
                "Benefits of Agile campaign execution."
            ]
        },
        {
            title: "Module 2: Agile Frameworks for Marketing Teams",
            topics: [
                "Applying Scrum and Kanban in marketing.",
                "Sprint planning and backlog management.",
                "Tracking marketing performance metrics."
            ]
        },
        {
            title: "Module 3: Iterative Campaign Execution",
            topics: [
                "Designing iterative campaigns.",
                "Continuous feedback and adaptation.",
                "Customer-centric content optimization."
            ]
        },
        {
            title: "Module 4: Scaling Agile in Marketing Organizations",
            topics: [
                "Aligning marketing with business strategy.",
                "Building cross-functional collaboration.",
                "Sustaining Agile marketing practices."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Agile Marketing Fundamentals", description: "Gain clarity on applying Agile frameworks within marketing teams." },
        { title: "Implement Iterative Campaign Strategies", description: "Apply sprint-based and continuous feedback methods to marketing initiatives." },
        { title: "Improve Team Collaboration", description: "Enhance communication between marketing and other business functions." },
        { title: "Adapt to Market Changes", description: "Develop agility in responding to customer insights and competitive shifts." },
        { title: "Deliver Measurable Results", description: "Use Agile metrics to track and improve marketing performance." }
    ];

    const whySections = [
        { title: "Marketing-Focused Agile Curriculum", description: "Specifically designed to address the needs of modern marketing teams." },
        { title: "Practical and Real-World Learning", description: "Includes actionable marketing case studies and exercises." },
        { title: "On-Demand Flexibility", description: "Allows professionals to learn at their own pace without disrupting work schedules." },
        { title: "Expert-Designed Content", description: "Created by experienced Agile and marketing practitioners." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand Agile marketing skills." }
    ];

    const courseFeatures = [
        { icon: Target, title: 'Agile Marketing', subtitle: 'Adaptive Planning', color: 'bg-pink-50 text-pink-600' },
        { icon: Settings, title: 'Frameworks', subtitle: 'Iterative Model', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Micro-badge', color: 'bg-purple-50 text-purple-600' },
        { icon: TrendingUp, title: 'Performance', subtitle: 'Data-Driven', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Agile for Marketing On-Demand Microcredentials Course",
        breadcrumbName: "Agile for Marketing",
        rating: "5.0",
        enrolledCount: "1350+ professionals",
        subtitle: "Transform Marketing Performance with Agile Practices",
        benefits: [
            "Flexible on-demand learning format.",
            "Practical Agile marketing frameworks.",
            "Real-world campaign case studies.",
            "Earn a recognized Agile Marketing Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AG-MKT-PRO',
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
        subtitle: "Agile for Marketing On-Demand Microcredential Overview",
        description: [
            "The Agile for Marketing On-Demand Microcredentials course provides a structured approach to applying Agile principles in marketing environments.",
            "This program focuses on iterative planning, collaboration, and continuous feedback to improve marketing effectiveness.",
            "Participants will gain practical tools to increase adaptability, enhance campaign performance, and align marketing efforts with business objectives."
        ],
        whatIsTitle: "What Is Agile for Marketing?",
        whatIsDescription: [
            "Agile for Marketing applies Agile methodologies such as Scrum and Kanban to marketing initiatives.",
            "It emphasizes flexibility, rapid experimentation, and data-driven decision-making.",
            "The course equips marketing professionals with tools to adapt quickly to changing market demands."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "On-demand video modules and learning materials.",
            "Marketing-focused case studies and exercises.",
            "Microcredential certification upon completion.",
            "Access to supporting resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Agile campaign planning",
            "Sprint-based marketing execution",
            "Performance measurement and feedback",
            "Cross-functional collaboration",
            "Customer-centric marketing strategies"
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
                { question: "1. Who should take this course?", answer: "This course is ideal for marketing professionals, digital marketers, and managers interested in applying Agile methodologies to marketing campaigns." },
                { question: "2. Is prior Agile knowledge required?", answer: "No prior Agile certification is required, though familiarity with basic Agile principles is helpful." },
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
                    viewSchedulesBtnText="Start Learning"
                    freeAssessmentBtnText="Free Assessment"
                />
                <CourseFeatures features={courseFeatures} />
                <div className="container mx-auto py-12 px-4">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                        <div className="space-y-12">
                            <CourseTabs tabs={tabs} />
                            <CourseCorporateOptUs
                                courseName="Why Viovn for Agile Marketing Training?"
                                description="Viovn delivers customized Agile marketing training programs designed to enhance marketing efficiency, improve collaboration, and accelerate campaign delivery. Our expert-designed on-demand content empowers organizations to adopt Agile practices that drive measurable marketing outcomes."
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

export default AgileForMarketingMicrocredentialCourse;
