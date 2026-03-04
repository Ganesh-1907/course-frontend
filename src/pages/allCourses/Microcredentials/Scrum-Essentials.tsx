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
 * Scrum Essentials (Populated with AI for Product Owners data as per user request)
 * Data source: course_data3.json
 */
const ScrumEssentials = () => {
    // Data from JSON
    const courseName = "Scrum Essentials Micro-credential Training";

    const highlights = [
        { text: "4 Hours Online Instructor-Led Training Session" },
        { text: "Learn from Certified Professional Scrum Trainers" },
        { text: "Lifetime Access to Course Materials" },
        { text: "Access to the Global Scrum Community" },
        { text: "Real-World Case Studies and Hands-On Practice" },
        { text: "2-Year Scrum Alliance Membership" },
        { text: "24/7 Customer Support and Learning Assistance" }
    ];

    const individualBenefits = [
        {
            title: "Improved Team Collaboration",
            description: "Enhance teamwork and communication with stakeholders and Scrum team members."
        },
        {
            title: "Continuous Improvement Mindset",
            description: "Identify and resolve issues quickly through iterative development and retrospectives."
        },
        {
            title: "Effective Time Management",
            description: "Learn prioritization and time-boxed sprint execution for better productivity."
        },
        {
            title: "Career Advancement",
            description: "Increase job opportunities with in-demand Agile and Scrum skills."
        },
        {
            title: "Efficient Workflow Management",
            description: "Maintain structured workflows for faster and more efficient project delivery."
        }
    ];

    const corporateBenefits = [
        {
            title: "Faster Delivery Cycles",
            description: "Enable quicker decision-making and accelerated product delivery."
        },
        {
            title: "Stronger Team Alignment",
            description: "Improve collaboration and transparency across departments."
        },
        {
            title: "Enhanced Quality Standards",
            description: "Continuous improvement practices reduce defects and improve quality."
        },
        {
            title: "Adaptability to Change",
            description: "Respond rapidly to market shifts and evolving customer requirements."
        },
        {
            title: "Customer-Centric Delivery",
            description: "Deliver products aligned with customer needs, increasing satisfaction."
        }
    ];

    const careerStats = {
        averageIncome: "",
        incomeLabel: "",
        employmentGrowth: "",
        growthLabel: "",
    };

    const attendeesData = [
        {
            group: [
                "Beginners exploring Agile and Scrum",
                "Project team members",
                "Business professionals",
                "Developers and QA professionals",
                "Anyone interested in Scrum fundamentals"
            ]
        }
    ];

    const companies = [];

    const outcomes = [
        "Understand Agile principles and the Scrum framework.",
        "Participate effectively in Scrum events.",
        "Contribute productively within a Scrum team.",
        "Apply Scrum practices to real-world projects.",
        "Identify and overcome common Agile challenges."
    ];

    const prerequisites = [
        "No prior Scrum knowledge required.",
        "Interest in Agile methodologies.",
        "Basic understanding of project management concepts is helpful but not mandatory."
    ];

    const certificationSteps = [
        {
            title: "Step 1: Choose Certification Path",
            description: "Select the Scrum Essentials microcredential aligned with your career goals."
        },
        {
            title: "Step 2: Register for Training",
            description: "Enroll with an authorized training provider like Viovn."
        },
        {
            title: "Step 3: Complete the Training",
            description: "Attend live sessions and complete course activities."
        },
        {
            title: "Step 4: Earn Microcredential Badge",
            description: "Receive your Scrum Essentials badge from Scrum Alliance."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Introduction to Agile and Scrum",
            topics: [
                "What is Scrum?",
                "Scrum Values",
                "Agile Manifesto",
                "Benefits and Challenges of Scrum"
            ]
        },
        {
            title: "Module 2: The Scrum Framework",
            topics: [
                "Scrum Events",
                "Scrum Artifacts",
                "Definition of Done",
                "Sprint Goal and Product Goal"
            ]
        },
        {
            title: "Module 3: The Scrum Team",
            topics: [
                "Scrum Roles and Responsibilities",
                "High-Performing Team Characteristics",
                "Scrum Accountabilities"
            ]
        },
        {
            title: "Module 4: Scrum Events in Practice",
            topics: [
                "Sprint Planning",
                "Daily Scrum",
                "Sprint Review",
                "Sprint Retrospective"
            ]
        },
        {
            title: "Module 5: Scrum for Product Development",
            topics: [
                "Managing Product Backlog",
                "Sprint Backlog Management",
                "Estimation Techniques"
            ]
        },
        {
            title: "Module 6: Scrum in Non-Scrum Environments",
            topics: [
                "Scrum vs Traditional Project Management",
                "Hybrid Implementation Approaches"
            ]
        },
        {
            title: "Module 7: Scenario-Based Simulation",
            topics: [
                "Applying Scrum in Real-World Scenarios",
                "Navigating Common Scrum Challenges"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Understand Agile and Scrum Principles",
            description: "Grasp core Agile values and Scrum fundamentals."
        },
        {
            title: "Learn the Scrum Framework",
            description: "Understand roles, events, artifacts, and commitments."
        },
        {
            title: "Build High-Performing Teams",
            description: "Foster collaboration and accountability in Scrum teams."
        },
        {
            title: "Execute Scrum Events Effectively",
            description: "Plan, execute, and review sprints successfully."
        },
        {
            title: "Apply Scrum in Product Development",
            description: "Manage backlogs and deliver incremental value."
        },
        {
            title: "Adapt Scrum in Hybrid Environments",
            description: "Implement Scrum practices in traditional or mixed environments."
        }
    ];

    const whySections = [
        {
            title: "Global Recognition",
            description: "Recognized by reputed certification bodies worldwide."
        },
        {
            title: "Expert Trainers",
            description: "Learn from certified professionals with industry experience."
        },
        {
            title: "Flexible Learning",
            description: "Live online training suitable for working professionals."
        },
        {
            title: "Lifetime Access",
            description: "Access course materials and resources anytime."
        },
        {
            title: "Proven Track Record",
            description: "Trusted by professionals and organizations globally."
        },
        {
            title: "End-to-End Assistance",
            description: "Complete support before, during, and after training."
        },
        {
            title: "Interactive Training",
            description: "Scenario-based learning and engaging discussions."
        },
        {
            title: "Wide Range of Courses",
            description: "Access additional Agile, Scrum, SAFe, and DevOps certifications."
        }
    ];

    const courseFeatures = [
        { icon: Users, title: '4 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Digital Badge', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Scrum Essentials Micro-credential Training",
        breadcrumbName: "Scrum Essentials | Master the Fundamentals of Scrum",
        rating: "5.0",
        enrolledCount: "",
        subtitle: "Build Strong Agile Foundations with Scrum Essentials",
        benefits: [
            "Deliver value frequently using Scrum",
            "Adapt quickly to changing requirements",
            "Earn Scrum Alliance Microcredential Badge",
            "Boost collaboration and productivity"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'SE-ES',
            courseName: heroData.courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Certified Scrum Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 16,999',
            discountedPrice: 'INR 12,499',
            discountPercentage: '26',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Scrum Essentials Microcredential Overview",
        description: [
            "This course introduces the core principles and practices of Scrum.",
            "Participants learn how to apply Scrum roles, events, and artifacts effectively in real-world projects.",
            "The program empowers individuals and teams to deliver value, adapt to change, and improve collaboration."
        ],
        whatIsTitle: "",
        whatIsDescription: [],
        whatsIncludedTitle: "",
        whatsIncludedDescription: [],
        skillsTitle: "",
        skills: [],
        modesTitle: "",
        modesDescription: []
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Course FAQs",
            items: [
                {
                    question: "1. What is Scrum Essentials Training?",
                    answer: "Scrum Essentials is an introductory microcredential course covering Scrum roles, events, and processes."
                },
                {
                    question: "2. Who is eligible?",
                    answer: "Anyone interested in learning Scrum fundamentals can enroll."
                },
                {
                    question: "3. What is the duration?",
                    answer: "The course is a 4–5 hour live microcredential training session."
                },
                {
                    question: "4. Is prior experience required?",
                    answer: "No, the course is beginner-friendly."
                },
                {
                    question: "5. What certification will I receive?",
                    answer: "You will receive the Scrum Essentials microcredential badge from Scrum Alliance."
                }
            ]
        },
        {
            id: "category_2",
            label: "Payment FAQs",
            items: [
                {
                    question: "1. Are installment options available?",
                    answer: "Yes, flexible payment options are available."
                },
                {
                    question: "2. Is refund available?",
                    answer: "Refunds are not available, but rescheduling options are provided."
                }
            ]
        },
        {
            id: "category_3",
            label: "General FAQs",
            items: [
                {
                    question: "1. Is the training online?",
                    answer: "Yes, it is delivered through live instructor-led virtual sessions."
                },
                {
                    question: "2. Do you offer corporate training?",
                    answer: "Yes, customized corporate training programs are available."
                }
            ]
        }
    ];

    const corporateData = {
        courseName: "Why Viovn Is the First Choice for Corporates",
        label: "",
        buttonText: "Corporate Group Enquiry",
        description: "Viovn delivers enterprise-focused Scrum training programs designed to improve agility, collaboration, and delivery performance across teams."
    };

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
                    <CourseCareerUpliftment
                        stats={careerStats}
                        attendees={attendeesData}
                        companies={companies}
                        outcomes={outcomes}
                        outcomesTitle="Learning Outcomes"
                        outcomesFooter="Become a Scrum Expert"
                        courseName={heroData.courseName}
                    />
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
                    categoryName="microcredentials"
                    categoryLink="/category/microcredentials"
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
                                courseName={corporateData.courseName}
                                description={corporateData.description}
                                label={corporateData.label}
                                buttonText={corporateData.buttonText}
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel schedules={sidePanelSchedules} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ScrumEssentials;
