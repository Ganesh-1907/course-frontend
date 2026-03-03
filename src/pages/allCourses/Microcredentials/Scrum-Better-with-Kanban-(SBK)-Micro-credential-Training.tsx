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
 * Scrum Better with Kanban (SBK) Micro-credential Training
 * Data source: course_data3.json
 */
const ScrumBetterWithKanbanSBKMicroCredentialTraining = () => {
    const courseName = "Scrum Better with Kanban (SBK) Micro-credential Training";

    const highlights = [
        { text: "8 hours of interactive live training delivered by Certified Scrum Trainers (CSTs)." },
        { text: "Earn 8 SEUs and PDUs to support your professional development." },
        { text: "Achieve certification to validate your Scrum and Kanban expertise." },
        { text: "Learn practical techniques with real-world applications." },
        { text: "Earn two globally recognized credentials from leading Agile organizations." },
        { text: "Master techniques to overcome common Scrum challenges." },
        { text: "24/7 customer support and continuous learning assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Strengthen your expertise in integrating Kanban practices within Scrum frameworks to improve workflow efficiency." },
        { title: "Individual Benefits", description: "Enhance decision-making by identifying process bottlenecks and applying Kanban techniques for continuous improvement." },
        { title: "Individual Benefits", description: "Develop stronger project strategies by combining Scrum structure with Kanban flow-based practices." },
        { title: "Individual Benefits", description: "Deliver measurable project outcomes by improving transparency, feedback loops, and process optimization." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Streamline product development processes by effectively integrating Scrum and Kanban practices." },
        { title: "Corporate Benefits", description: "Reduce operational costs by identifying bottlenecks and optimizing workflow efficiency." },
        { title: "Corporate Benefits", description: "Encourage innovation by resolving Scrum challenges using structured Kanban techniques." },
        { title: "Corporate Benefits", description: "Gain a competitive advantage by adopting a hybrid Agile framework that consistently improves delivery performance." }
    ];

    const careerStats = {
        averageIncome: "$110k - $165k",
        incomeLabel: "Salary for Flow-specialized Agilists",
        employmentGrowth: "85%",
        growthLabel: "Demand for multi-framework expertise",
    };

    const attendeesData = [
        {
            group: [
                "Learn to apply Kanban techniques within a Scrum framework.",
                "Integrate Scrum and Kanban for improved delivery outcomes.",
                "Strengthen career prospects in Agile and product leadership roles.",
                "Enhance workflow efficiency using Kanban principles.",
                "Develop strategies to overcome common Scrum challenges.",
                "Improve agility without disrupting existing processes.",
                "Identify and analyze challenges within Scrum teams.",
                "Apply Kanban practices to implement practical solutions."
            ]
        }
    ];

    const companies = [
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { name: "Wipro", url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" }
    ];

    const outcomes = [
        "Integrate Kanban techniques into Scrum environments effectively.",
        "Improve Agile workflow visibility and efficiency.",
        "Resolve common Scrum challenges using Kanban principles.",
        "Reduce bottlenecks and optimize Work in Progress (WIP).",
        "Enhance delivery predictability and team collaboration."
    ];

    const prerequisites = [
        "No prior knowledge of Kanban is required.",
        "Basic familiarity with Scrum is beneficial but not mandatory.",
        "Suitable for professionals at all experience levels."
    ];

    const certificationSteps = [
        {
            title: "Join Training",
            description: "Register for the Scrum Better with Kanban (SBK) Micro-credential training program."
        },
        {
            title: "Participate in Training",
            description: "Attend 8 hours of live instructor-led training covering practical Kanban applications within Scrum."
        },
        {
            title: "Complete Learning Activities",
            description: "Engage in interactive discussions, exercises, and real-world scenarios to demonstrate understanding."
        },
        {
            title: "Earn Dual Credentials",
            description: "Receive the Scrum Kanban Practitioner (SKP) credential from Kanban University and the Scrum Better with Kanban Micro-credential from Scrum Alliance."
        }
    ];

    const curriculumModules = [
        {
            title: "Foundations of Scrum and Kanban Integration",
            topics: [
                "Understanding the principles of Scrum and Kanban.",
                "Differences and complementarities between the two frameworks.",
                "Benefits of integrating Kanban into Scrum."
            ]
        },
        {
            title: "The Six General Practices of Kanban",
            topics: [
                "Visualizing workflow and managing flow.",
                "Limiting Work in Progress (WIP).",
                "Managing bottlenecks and improving flow efficiency.",
                "Establishing explicit process policies.",
                "Implementing feedback loops.",
                "Driving evolutionary and collaborative improvement."
            ]
        },
        {
            title: "Addressing Scrum Challenges with Kanban",
            topics: [
                "Identifying workflow inefficiencies in Scrum.",
                "Reducing variability and improving predictability.",
                "Enhancing transparency and stakeholder communication."
            ]
        },
        {
            title: "Practical Application and Case Studies",
            topics: [
                "Applying Kanban within Sprint workflows.",
                "Real-world Scrum-Kanban hybrid scenarios.",
                "Continuous improvement strategies."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Develop Kanban Expertise", description: "Gain in-depth knowledge of Kanban techniques and their application within Scrum environments." },
        { title: "Improve Agile Decision-Making", description: "Identify Scrum challenges and implement Kanban-based solutions effectively." },
        { title: "Strengthen Scrum Practices", description: "Enhance Scrum workflows by introducing proven Kanban principles and practices." },
        { title: "Optimize Cost and Efficiency", description: "Reduce bottlenecks and improve workflow predictability to optimize project outcomes." },
        { title: "Practical and Industry-Relevant Learning", description: "Apply real-world techniques aligned with emerging Agile trends and practices." },
        { title: "Achieve Global Recognition", description: "Earn globally recognized credentials from Scrum Alliance and Kanban University." },
        { title: "Reduce Workflow Bottlenecks", description: "Visualize work, manage WIP limits, and enhance overall process efficiency." }
    ];

    const whySections = [
        { title: "Global Recognition", description: "Our certifications are recognized by leading Agile accreditation bodies worldwide." },
        { title: "Expert Trainers", description: "Learn from certified trainers with extensive real-world Scrum and Kanban experience." },
        { title: "Flexible Learning Options", description: "Choose from live online, corporate, and customized learning formats." },
        { title: "Lifetime Credential Validity", description: "Earn certifications that remain valid for life without renewal requirements." },
        { title: "Proven Training Track Record", description: "Trusted by professionals and organizations globally for Agile excellence." },
        { title: "Comprehensive Support", description: "Receive continuous assistance before, during, and after the training." },
        { title: "Interactive Learning Experience", description: "Participate in highly engaging sessions featuring discussions and real-world scenarios." },
        { title: "Extensive Course Portfolio", description: "Access a wide range of internationally recognized certifications across Agile, Scrum, SAFe, DevOps, and Project Management." }
    ];

    const courseFeatures = [
        { icon: Users, title: '8 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Dual Badge', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Scrum Better with Kanban (SBK) Micro-credential Training",
        breadcrumbName: "Scrum Better with Kanban (SBK)",
        rating: "5.0",
        enrolledCount: "580+ professionals",
        subtitle: "Enhance Scrum Effectiveness with Proven Kanban Practices",
        benefits: [
            "8-hour live interactive training led by CSTs",
            "Earn Scrum Kanban Practitioner (SKP) credential",
            "Receive Scrum Better with Kanban Micro-credential",
            "Master the Six General Practices of Kanban",
            "Improve Scrum delivery using Kanban techniques"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'SBK-MC',
            courseName: heroData.courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Senior Agile Flow Expert',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 13,999',
            discountedPrice: 'INR 9,499',
            discountPercentage: '32',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Scrum Better with Kanban (SBK) Course Overview",
        description: [
            "The Scrum Better with Kanban (SBK) Micro-credential course helps organizations enhance existing Scrum practices by integrating Kanban techniques.",
            "This training focuses on improving workflow visibility, reducing variability, and managing bottlenecks with confidence.",
            "Participants gain practical tools to implement Kanban approaches within Scrum environments, increasing transparency, strengthening feedback loops, and minimizing risks.",
            "Upon completion, learners earn two globally recognized credentials that validate their ability to combine Scrum and Kanban effectively."
        ],
        whatIsTitle: "What is Scrum Better with Kanban?",
        whatIsDescription: [
            "Scrum Better with Kanban is a professional training program designed to integrate Kanban practices into Scrum frameworks.",
            "It enables teams to enhance workflow efficiency, manage Work in Progress (WIP), and continuously improve delivery performance without disrupting Scrum structure."
        ],
        whatsIncludedTitle: "What’s Included in the SBK Training?",
        whatsIncludedDescription: [
            "8 hours of live instructor-led training",
            "Practical exercises and real-world case studies",
            "Dual certification credentials",
            "Interactive discussions and Q&A sessions",
            "Continuous post-training support"
        ],
        skillsTitle: "Skills Covered in SBK Training",
        skills: [
            "Kanban flow management",
            "Work in Progress (WIP) optimization",
            "Scrum-Kanban integration techniques",
            "Bottleneck identification and resolution",
            "Continuous improvement strategies"
        ],
        modesTitle: "Available Training Modes",
        modesDescription: [
            "Live virtual instructor-led training",
            "Corporate group training",
            "Customized enterprise workshops"
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQ",
            items: [
                { question: "1. Does Kanban replace Scrum?", answer: "No, this course is about using Kanban to make your existing Scrum better." },
                { question: "2. Is there an exam?", answer: "Credential is earned through full participation in the live training." },
                { question: "3. Who certifies the badge?", answer: "The badge is issued by Scrum Alliance and Kanban University." }
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
                                courseName="Corporate Scrum-Kanban Training"
                                description="SimpliAxis provides customized corporate Agile training solutions designed to improve workflow efficiency and delivery performance."
                                label=""
                                buttonText="Corporate Group Enquiry"
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

export default ScrumBetterWithKanbanSBKMicroCredentialTraining;
