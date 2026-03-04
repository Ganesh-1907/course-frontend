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
    BarChart3
} from "lucide-react";

/**
 * Metrics that Matter: Improving Product Outcomes Microcredential Course
 * Data source: course_data3.json
 */
const MetricsThatMatterImprovingProductOutcomesMicrocredentialCourse = () => {
    const courseName = "Metrics that Matter: Improving Product Outcomes Microcredential Course";

    const highlights = [
        { text: "4 hours of interactive training focused on outcome-driven product metrics." },
        { text: "Learn how to define, measure, and improve product performance effectively." },
        { text: "Understand the difference between output metrics and outcome metrics." },
        { text: "Hands-on exercises using real-world product measurement scenarios." },
        { text: "Practical frameworks for aligning metrics with business strategy." },
        { text: "Improve stakeholder communication through data-driven insights." },
        { text: "Earn a recognized Microcredential in Product Metrics and Outcomes." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop the ability to define meaningful product success metrics aligned with business goals." },
        { title: "Individual Benefits", description: "Improve decision-making through data-driven product insights." },
        { title: "Individual Benefits", description: "Enhance career growth by mastering outcome-focused product measurement techniques." },
        { title: "Individual Benefits", description: "Strengthen stakeholder communication using measurable product results." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Align product initiatives with measurable business outcomes." },
        { title: "Corporate Benefits", description: "Improve product ROI by focusing on metrics that drive value." },
        { title: "Corporate Benefits", description: "Increase transparency and accountability through structured measurement frameworks." },
        { title: "Corporate Benefits", description: "Enable teams to make informed decisions using reliable performance indicators." }
    ];

    const careerStats = {
        averageIncome: "$110k - $165k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "89%",
        growthLabel: "Demand for Data-Driven Product Leaders",
    };

    const attendeesData = [
        {
            group: [
                "Product Managers and Product Owners.",
                "Business Analysts and Strategy Professionals.",
                "Agile Coaches and Scrum Masters.",
                "Data-driven decision-makers in product teams.",
                "Leaders responsible for product performance and growth."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
        { name: "Spotify", url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_with_text.svg" }
    ];

    const outcomes = [
        "Differentiate between output metrics and outcome metrics.",
        "Define product success using measurable performance indicators.",
        "Align product metrics with strategic business objectives.",
        "Use data insights to improve product outcomes.",
        "Communicate product performance effectively to stakeholders."
    ];

    const prerequisites = [
        "Basic understanding of product management concepts.",
        "Familiarity with Agile or Scrum frameworks is beneficial but not mandatory.",
        "Interest in improving product performance through measurable outcomes."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Metrics that Matter Microcredential training program."
        },
        {
            title: "Attend Interactive Training",
            description: "Participate in live or on-demand sessions and complete practical exercises."
        },
        {
            title: "Apply Learning",
            description: "Demonstrate understanding through real-world product measurement scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the training."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Understanding Product Metrics",
            topics: [
                "Difference between outputs and outcomes.",
                "Common product metrics and their limitations.",
                "Why measuring outcomes matters."
            ]
        },
        {
            title: "Module 2: Defining Meaningful Metrics",
            topics: [
                "Setting measurable product goals.",
                "Aligning metrics with business strategy.",
                "Leading and lagging indicators."
            ]
        },
        {
            title: "Module 3: Measuring and Analyzing Performance",
            topics: [
                "Data collection and analysis basics.",
                "Interpreting trends and patterns.",
                "Avoiding vanity metrics."
            ]
        },
        {
            title: "Module 4: Driving Product Improvements",
            topics: [
                "Using metrics to guide decision-making.",
                "Continuous improvement using feedback loops.",
                "Communicating performance insights effectively."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Outcome-Driven Metrics", description: "Learn how to focus on product outcomes instead of activity-based outputs." },
        { title: "Define Strategic KPIs", description: "Develop measurable key performance indicators aligned with business objectives." },
        { title: "Analyze Product Performance", description: "Interpret data insights to evaluate product success and improvement areas." },
        { title: "Improve Decision-Making", description: "Use structured measurement frameworks to support strategic decisions." },
        { title: "Communicate Value Effectively", description: "Present data-driven product insights clearly to stakeholders." }
    ];

    const whySections = [
        { title: "Outcome-Focused Curriculum", description: "Designed to help professionals measure what truly drives product success." },
        { title: "Practical Frameworks", description: "Includes real-world case studies and actionable metric models." },
        { title: "Expert-Led Training", description: "Delivered by experienced product professionals with industry expertise." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Long-Term Value", description: "Equips teams with sustainable measurement practices for continuous improvement." }
    ];

    const courseFeatures = [
        { icon: BarChart3, title: 'Outcome-Driven', subtitle: 'Metrics focus', color: 'bg-emerald-50 text-emerald-600' },
        { icon: BookOpen, title: '4 Hours', subtitle: 'Focused training', color: 'bg-accent text-primary' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Strategic', subtitle: 'Value focus', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Metrics that Matter: Improving Product Outcomes Microcredential Course",
        breadcrumbName: "Metrics that Matter",
        rating: "5.0",
        enrolledCount: "950+ professionals",
        subtitle: "Measure What Truly Drives Product Success",
        benefits: [
            "4 hours of focused training on outcome-driven product metrics.",
            "Practical frameworks for measuring product performance.",
            "Real-world case studies and exercises.",
            "Earn a recognized Microcredential in Product Metrics."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-MTM',
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
        subtitle: "Metrics that Matter Microcredential Overview",
        description: [
            "The Metrics that Matter: Improving Product Outcomes Microcredential course is designed to help product professionals focus on measurable outcomes rather than activity-based outputs.",
            "This course provides practical frameworks to define, track, and improve product performance using meaningful metrics aligned with business strategy.",
            "Participants will learn how to transform data into actionable insights that drive product success and sustainable growth."
        ],
        whatIsTitle: "What Is Metrics that Matter?",
        whatIsDescription: [
            "Metrics that Matter focuses on identifying and measuring indicators that reflect real product impact.",
            "It emphasizes aligning product efforts with strategic business objectives.",
            "The course equips professionals with tools to move beyond vanity metrics and concentrate on meaningful outcomes."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Instructor-led or on-demand interactive sessions.",
            "Real-world product case studies.",
            "Practical exercises on metric definition and analysis.",
            "Microcredential certification upon completion.",
            "Access to learning resources and support."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Outcome-based measurement techniques",
            "KPI and OKR alignment",
            "Product performance analysis",
            "Data-driven decision-making",
            "Stakeholder communication with metrics"
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
                { question: "1. Who should take this course?", answer: "This course is ideal for Product Managers, Product Owners, Agile professionals, and leaders responsible for product performance." },
                { question: "2. Do I need advanced analytics knowledge?", answer: "No. The course focuses on practical metric frameworks and does not require advanced statistical expertise." },
                { question: "3. How long is the training?", answer: "The training typically lasts 4 hours and may be delivered live or on-demand." },
                { question: "4. Is the microcredential valid for life?", answer: "Yes, the Metrics that Matter Microcredential is valid for life and does not require renewal." }
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
                                courseName="Why Viovn for Corporate Product Metrics Training?"
                                description="Viovn delivers customized corporate training programs that help organizations adopt outcome-driven product measurement practices. Our expert-led sessions enable teams to align strategy with measurable impact, improve ROI, and build sustainable product success frameworks."
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

export default MetricsThatMatterImprovingProductOutcomesMicrocredentialCourse;
