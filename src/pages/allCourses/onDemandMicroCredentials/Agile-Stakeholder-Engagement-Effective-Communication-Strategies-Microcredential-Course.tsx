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
 * Agile Stakeholder Engagement: Effective Communication Strategies Microcredential Course
 * Data source: course_data3.json
 */
const AgileStakeholderEngagementMicrocredentialCourse = () => {
    const courseName = "Agile Stakeholder Engagement: Effective Communication Strategies Microcredential Course";

    const highlights = [
        { text: "4 hours of focused training on Agile stakeholder engagement and communication strategies." },
        { text: "Learn practical techniques to build trust and alignment with stakeholders." },
        { text: "Develop effective communication frameworks for Agile environments." },
        { text: "Understand how to manage stakeholder expectations and conflicts." },
        { text: "Apply real-world case studies to improve engagement outcomes." },
        { text: "Strengthen influence and collaboration across cross-functional teams." },
        { text: "Earn a recognized Agile Stakeholder Engagement Microcredential." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Enhance communication skills to engage stakeholders effectively in Agile settings." },
        { title: "Individual Benefits", description: "Develop strategies to manage expectations and reduce conflicts." },
        { title: "Individual Benefits", description: "Build confidence in influencing decision-making processes." },
        { title: "Individual Benefits", description: "Advance career opportunities in Agile leadership and stakeholder management roles." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Improve alignment between business stakeholders and Agile teams." },
        { title: "Corporate Benefits", description: "Reduce communication gaps and misunderstandings during project execution." },
        { title: "Corporate Benefits", description: "Increase stakeholder satisfaction and trust in Agile initiatives." },
        { title: "Corporate Benefits", description: "Strengthen collaboration and faster decision-making across departments." }
    ];

    const careerStats = {
        averageIncome: "$115k - $165k",
        incomeLabel: "Salary Range",
        employmentGrowth: "88%",
        growthLabel: "Communication Role Demand",
    };

    const attendeesData = [
        {
            group: [
                "Scrum Masters and Agile Coaches.",
                "Product Owners and Product Managers.",
                "Project Managers and Team Leads.",
                "Business Analysts and Consultants.",
                "Professionals involved in stakeholder management."
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
        "Understand stakeholder dynamics in Agile environments.",
        "Apply structured communication frameworks effectively.",
        "Manage stakeholder expectations and resolve conflicts.",
        "Strengthen collaboration between business and delivery teams.",
        "Drive improved engagement and alignment in Agile projects."
    ];

    const prerequisites = [
        "Basic understanding of Agile principles and frameworks.",
        "Experience working with cross-functional teams is beneficial.",
        "Interest in improving stakeholder communication and collaboration."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Course",
            description: "Register for the Agile Stakeholder Engagement Microcredential training program."
        },
        {
            title: "Participate in Interactive Sessions",
            description: "Attend instructor-led sessions and engage in communication exercises."
        },
        {
            title: "Apply Practical Learning",
            description: "Demonstrate understanding through stakeholder engagement scenarios."
        },
        {
            title: "Earn the Microcredential",
            description: "Receive your certification upon successful completion of the course."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Foundations of Stakeholder Engagement",
            topics: [
                "Understanding stakeholder roles and expectations.",
                "Identifying key influencers and decision-makers.",
                "Mapping stakeholder interests and impact."
            ]
        },
        {
            title: "Module 2: Communication Strategies in Agile",
            topics: [
                "Transparent communication practices.",
                "Facilitating effective stakeholder meetings.",
                "Managing feedback and expectations."
            ]
        },
        {
            title: "Module 3: Managing Conflicts and Resistance",
            topics: [
                "Identifying sources of conflict.",
                "Negotiation and resolution techniques.",
                "Building trust and long-term relationships."
            ]
        },
        {
            title: "Module 4: Sustaining Engagement",
            topics: [
                "Continuous feedback mechanisms.",
                "Measuring stakeholder satisfaction.",
                "Aligning communication with business objectives."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Understand Stakeholder Dynamics", description: "Gain clarity on stakeholder influence and engagement in Agile environments." },
        { title: "Develop Communication Frameworks", description: "Apply structured strategies to improve stakeholder communication." },
        { title: "Manage Expectations Effectively", description: "Reduce conflicts and align stakeholder goals with Agile delivery." },
        { title: "Strengthen Influence and Collaboration", description: "Enhance leadership presence in stakeholder interactions." },
        { title: "Sustain Engagement", description: "Embed communication practices that support long-term Agile success." }
    ];

    const whySections = [
        { title: "Communication-Focused Curriculum", description: "Designed to strengthen stakeholder engagement in Agile environments." },
        { title: "Practical Frameworks", description: "Includes actionable communication tools and real-world case studies." },
        { title: "Expert-Led Training", description: "Delivered by experienced Agile practitioners and communication experts." },
        { title: "Flexible Learning Options", description: "Available in live virtual and customized corporate training formats." },
        { title: "Career Advancement Support", description: "Equips professionals with in-demand stakeholder management skills." }
    ];

    const courseFeatures = [
        { icon: MessageSquare, title: 'Communication', subtitle: 'Strategies', color: 'bg-amber-50 text-amber-600' },
        { icon: Settings, title: 'Frameworks', subtitle: 'Agile Ready', color: 'bg-blue-50 text-blue-600' },
        { icon: Award, title: 'Credential', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Users, title: 'Engagement', subtitle: 'Stakeholder', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Agile Stakeholder Engagement: Effective Communication Strategies Microcredential Course",
        breadcrumbName: "Agile Stakeholder Engagement Microcredential Course",
        rating: "5.0",
        enrolledCount: "1450+ professionals",
        subtitle: "Master Stakeholder Communication in Agile Environments",
        benefits: [
            "4 hours of focused stakeholder engagement training.",
            "Practical Agile communication frameworks.",
            "Real-world stakeholder case studies.",
            "Earn a recognized Agile Stakeholder Engagement Microcredential."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'OD-AG-STK-ENG',
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
        subtitle: "Agile Stakeholder Engagement Microcredential Overview",
        description: [
            "The Agile Stakeholder Engagement: Effective Communication Strategies Microcredential course provides a structured approach to managing stakeholder relationships in Agile environments.",
            "This program focuses on building trust, improving communication, and aligning expectations between Agile teams and business stakeholders.",
            "Participants will gain practical tools to enhance collaboration, resolve conflicts, and drive successful Agile outcomes."
        ],
        whatIsTitle: "What Is Agile Stakeholder Engagement?",
        whatIsDescription: [
            "Agile stakeholder engagement focuses on maintaining transparent, collaborative, and effective communication with stakeholders.",
            "It ensures alignment between business goals and Agile delivery teams.",
            "The course equips professionals with frameworks to improve communication and long-term engagement."
        ],
        whatsIncludedTitle: "What’s Included in This Course?",
        whatsIncludedDescription: [
            "Stakeholder communication exercises and case studies.",
            "Microcredential certification upon completion.",
            "Access to supporting learning resources."
        ],
        skillsTitle: "Skills Covered in This Course",
        skills: [
            "Stakeholder communication strategies",
            "Conflict resolution techniques",
            "Expectation management",
            "Facilitation and influence skills",
            "Collaborative Agile communication"
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
                { question: "1. Who should take this course?", answer: "This course is ideal for Scrum Masters, Product Owners, Project Managers, and professionals involved in stakeholder communication." },
                { question: "2. Is prior Agile experience required?", answer: "A basic understanding of Agile frameworks is recommended but not mandatory." },
                { question: "3. How long is the training?", answer: "The Agile Stakeholder Engagement Microcredential training typically lasts 4 hours." },
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
                                courseName="Why Viovn for Agile Stakeholder Engagement Training?"
                                description="Viovn delivers customized Agile stakeholder engagement training programs designed to strengthen communication, improve collaboration, and align business objectives with Agile delivery. Our expert-led sessions empower organizations to enhance stakeholder satisfaction and achieve sustainable Agile success."
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

export default AgileStakeholderEngagementMicrocredentialCourse;
