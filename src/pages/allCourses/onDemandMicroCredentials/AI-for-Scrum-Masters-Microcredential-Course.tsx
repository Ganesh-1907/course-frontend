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
 * AI for Scrum Masters Microcredential Course
 * Data source: course_data3.json
 */
const AIForScrumMastersMicrocredentialCourse = () => {
    const courseName = "AI for Scrum Masters Microcredential Course";

    const highlights = [
        { text: "4 hours of live, instructor-led AI training tailored for Scrum Masters." },
        { text: "Learn practical AI applications to enhance Scrum events and team performance." },
        { text: "Hands-on exercises using AI tools for sprint planning, retrospectives, and backlog refinement." },
        { text: "Earn a recognized AI for Scrum Masters Microcredential." },
        { text: "Focus on ethical and responsible AI usage within Agile teams." },
        { text: "Real-world case studies on AI-enabled Agile transformation." },
        { text: "24/7 learner support and post-training assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Enhance Scrum facilitation skills by integrating AI tools into daily Agile practices." },
        { title: "Individual Benefits", description: "Improve sprint planning, backlog refinement, and retrospective effectiveness using AI insights." },
        { title: "Individual Benefits", description: "Strengthen decision-making through AI-driven team performance analytics." },
        { title: "Individual Benefits", description: "Increase career opportunities by building AI-enabled Agile leadership skills." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve team productivity by leveraging AI-driven workflow optimization." },
        { title: "Corporate Benefits", description: "Enhance transparency and predictability through AI-powered performance insights." },
        { title: "Corporate Benefits", description: "Support Agile transformation initiatives with AI-enabled coaching techniques." },
        { title: "Corporate Benefits", description: "Promote responsible AI adoption within Agile environments." }
    ];

    const careerStats = {
        averageIncome: "$110k - $160k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "88%",
        growthLabel: "Demand for AI-enabled Scrum Masters",
    };

    const attendeesData = [
        {
            group: [
                "Scrum Masters seeking to enhance their facilitation skills with AI.",
                "Agile Coaches exploring AI-driven performance insights.",
                "Product Owners collaborating closely with Scrum teams.",
                "Team Leads managing Agile delivery environments.",
                "Professionals interested in AI-supported Agile transformation."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/3/3d/TATA_Consultancy_Services_Logo_%28202x%29.svg" }
    ];

    const outcomes = [
        "Apply AI tools to improve Scrum ceremonies and team collaboration.",
        "Use AI analytics to identify bottlenecks and optimize workflows.",
        "Enhance sprint predictability using data-driven insights.",
        "Facilitate more impactful retrospectives with AI-generated feedback.",
        "Implement ethical AI practices within Agile teams."
    ];

    const prerequisites = [
        "Basic understanding of Scrum framework and Agile principles.",
        "Experience working as a Scrum Master or within a Scrum team is recommended.",
        "Interest in learning practical AI applications in Agile contexts."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the AI for Scrum Masters Microcredential training program."
        },
        {
            title: "Attend Interactive Sessions",
            description: "Participate in live instructor-led sessions and hands-on exercises."
        },
        {
            title: "Demonstrate Learning",
            description: "Complete practical activities applying AI tools to Scrum scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your AI for Scrum Masters Microcredential upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Introduction to AI in Agile",
            topics: [
                "Understanding AI fundamentals for Scrum Masters.",
                "Opportunities and limitations of AI in Agile environments."
            ]
        },
        {
            title: "Module 2: AI for Sprint Planning and Backlog Management",
            topics: [
                "Using AI to prioritize backlog items.",
                "Forecasting sprint capacity and risks."
            ]
        },
        {
            title: "Module 3: AI-Enhanced Scrum Events",
            topics: [
                "Improving daily stand-ups with AI insights.",
                "AI-supported retrospective facilitation techniques."
            ]
        },
        {
            title: "Module 4: Performance Analytics and Continuous Improvement",
            topics: [
                "Analyzing team metrics using AI tools.",
                "Identifying bottlenecks and optimizing workflows."
            ]
        },
        {
            title: "Module 5: Ethical AI in Scrum Teams",
            topics: [
                "Responsible AI usage in team analytics.",
                "Maintaining transparency and fairness in AI-driven decisions."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand AI Fundamentals", description: "Gain foundational knowledge of AI concepts relevant to Agile and Scrum practices." },
        { title: "Integrate AI into Scrum Events", description: "Apply AI tools to enhance sprint planning, daily stand-ups, and retrospectives." },
        { title: "Leverage Data-Driven Insights", description: "Use AI-generated analytics to improve team performance and predictability." },
        { title: "Promote Continuous Improvement", description: "Identify workflow inefficiencies and implement AI-supported optimizations." },
        { title: "Apply Ethical AI Practices", description: "Ensure transparency, fairness, and responsible use of AI within Scrum teams." }
    ];

    const whySections = [
        { title: "Industry-Relevant Curriculum", description: "Focused on practical AI applications specifically for Scrum Masters." },
        { title: "Expert Trainers", description: "Delivered by experienced Agile and AI practitioners." },
        { title: "Hands-On Learning", description: "Includes real-world exercises and scenario-based training." },
        { title: "Flexible Learning Options", description: "Available in live virtual and corporate training formats." },
        { title: "Post-Training Support", description: "Ongoing assistance and resources after course completion." }
    ];

    const courseFeatures = [
        { icon: Users, title: '4 Hours', subtitle: 'Live Training', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "AI for Scrum Masters Microcredential Course",
        breadcrumbName: "AI for Scrum Masters",
        rating: "5.0",
        enrolledCount: "1250+ professionals",
        subtitle: "Enhance Your Scrum Leadership with Practical AI Applications",
        benefits: [
            "4 hours of live instructor-led AI training.",
            "Hands-on AI tools for Scrum events and team optimization.",
            "Real-world case studies and practical exercises.",
            "Earn a recognized AI for Scrum Masters Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AI-SM',
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
        subtitle: "AI for Scrum Masters Microcredential Overview",
        description: [
            "The AI for Scrum Masters Microcredential course is designed to help Scrum Masters integrate artificial intelligence into Agile practices.",
            "This program focuses on practical AI tools that enhance Scrum ceremonies, improve team collaboration, and support data-driven decision-making.",
            "Participants will learn how AI can optimize workflows, increase sprint predictability, and strengthen continuous improvement initiatives."
        ],
        whatIsTitle: "What Is AI for Scrum Masters?",
        whatIsDescription: [
            "AI for Scrum Masters refers to the application of artificial intelligence tools and techniques within Scrum frameworks.",
            "It enables data-driven facilitation, predictive insights, and workflow optimization.",
            "AI enhances the effectiveness of Scrum Masters by supporting smarter decisions and improved team performance."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Live instructor-led training sessions.",
            "Practical AI exercises for Scrum events.",
            "Real-world Agile case studies.",
            "Microcredential certification upon completion.",
            "Post-training support resources."
        ],
        skillsTitle: "Skills Covered in the AI for Scrum Masters Course",
        skills: [
            "AI fundamentals for Agile professionals",
            "AI-supported sprint planning",
            "Backlog prioritization using AI insights",
            "Team performance analytics",
            "Ethical AI implementation in Scrum",
            "Continuous improvement using AI tools"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live virtual instructor-led sessions.",
            "Corporate training customized for enterprise teams."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQs",
            items: [
                { question: "1. Who should take the AI for Scrum Masters Microcredential course?", answer: "This course is ideal for Scrum Masters, Agile Coaches, Team Leads, and professionals involved in Agile delivery who want to integrate AI into their workflows." },
                { question: "2. Is prior AI knowledge required?", answer: "No prior technical AI expertise is required. The course focuses on practical AI applications for Scrum environments." },
                { question: "3. How long is the training?", answer: "The training is typically conducted over 4 hours of live, interactive sessions." },
                { question: "4. Is the certification valid for life?", answer: "Yes, the AI for Scrum Masters Microcredential is valid for life and does not require renewal." }
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
                                courseName="Why Viovn for Corporate AI Training?"
                                description="Viovn delivers customized corporate AI training programs designed to enhance Agile team performance. Our expert trainers provide practical, industry-aligned learning experiences that empower organizations to adopt AI responsibly and drive measurable improvements in productivity and delivery."
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

export default AIForScrumMastersMicrocredentialCourse;
