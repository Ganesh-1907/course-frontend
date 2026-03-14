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
 * Agile Coaching Skills Micro-credential Course
 * Data source: course_data3.json
 */
const AgileCoachingSkillsMicroCredentialTraining = () => {
    const courseName = "Agile Coaching Skills Micro-credential Course";

    const highlights = [
        { text: "4 hours of interactive live training delivered by Certified Scrum Trainers (CSTs)." },
        { text: "Flexible learning options: On-demand or live instructor-led sessions." },
        { text: "Earn a digital badge to showcase your Agile coaching expertise." },
        { text: "Receive a 2-year Scrum Alliance membership upon completion." },
        { text: "Expert guidance with practical, real-world application of coaching skills." },
        { text: "Enhance your Agile coaching and mentorship capabilities through this micro-credential." },
        { text: "24/7 customer support and continuous learning assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop the skills required to effectively lead teams and guide organizations toward successful Agile adoption." },
        { title: "Individual Benefits", description: "Improve decision-making capabilities and create sustainable roadmaps that support long-term agility." },
        { title: "Individual Benefits", description: "Strengthen leadership qualities to motivate team members and improve overall Agile maturity." },
        { title: "Individual Benefits", description: "Enhance communication and collaboration skills to foster high-performing and self-organizing teams." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Support organizational change initiatives by embedding Agile coaching practices across teams." },
        { title: "Corporate Benefits", description: "Foster a culture of continuous learning, adaptability, and improvement." },
        { title: "Corporate Benefits", description: "Accelerate Agile transformation by applying effective coaching tools and techniques." },
        { title: "Corporate Benefits", description: "Improve employee satisfaction and engagement through structured mentorship and leadership development." }
    ];

    const careerStats = {
        averageIncome: "$125k - $180k",
        incomeLabel: "Salary for Agile Coaches",
        employmentGrowth: "94%",
        growthLabel: "Demand for Agile Coaching Expertise",
    };

    const attendeesData = [
        {
            group: [
                "Learn how to guide organizations in adopting Agile practices.",
                "Understand techniques that improve team management and performance.",
                "Encourage collaboration and implement iterative change effectively.",
                "Break down organizational silos to achieve shared goals.",
                "Manage organizational change with confidence and clarity.",
                "Develop Agile leadership qualities to inspire and motivate teams.",
                "Gain practical experience to strengthen coaching and mentorship skills.",
                "Enhance product delivery and service outcomes through Agile expertise."
            ]
        }
    ];

    const companies = [
        { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" },
        { name: "Microsoft", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
        { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" }
    ];

    const outcomes = [
        "Guide organizations effectively in Agile adoption.",
        "Apply Agile practices to improve team performance.",
        "Promote collaboration and iterative change.",
        "Break down silos and align teams toward shared objectives.",
        "Develop strong Agile leadership and coaching capabilities.",
        "Enhance organizational adaptability and product delivery."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "Basic familiarity with Agile principles and frameworks is recommended."
    ];

    const certificationSteps = [
        {
            title: "Enroll in the Training",
            description: "Register for the Agile Coaching Skills Micro-credential training."
        },
        {
            title: "Attend Training",
            description: "Participate in interactive sessions and complete learning activities."
        },
        {
            title: "Demonstrate Learning",
            description: "Apply coaching techniques through scenario-based exercises."
        },
        {
            title: "Earn the Credential",
            description: "Receive your Agile Coaching Skills Micro-credential and digital badge upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Facilitation Skills",
            topics: [
                "Facilitating Agile events and workshops.",
                "Creating safe environments for collaboration.",
                "Managing conflict and encouraging participation."
            ]
        },
        {
            title: "Module 2: Teaching Skills",
            topics: [
                "Teaching Agile principles and frameworks.",
                "Designing engaging learning experiences.",
                "Adapting teaching styles to different audiences."
            ]
        },
        {
            title: "Module 3: Mentoring Skills",
            topics: [
                "Providing constructive feedback.",
                "Supporting individual and team growth.",
                "Building trust-based mentoring relationships."
            ]
        },
        {
            title: "Module 4: Advising Skills",
            topics: [
                "Offering strategic Agile guidance.",
                "Assessing organizational maturity.",
                "Recommending appropriate Agile practices."
            ]
        },
        {
            title: "Module 5: Leading Skills",
            topics: [
                "Servant leadership in Agile environments.",
                "Driving cultural transformation.",
                "Aligning teams with organizational goals."
            ]
        },
        {
            title: "Module 6: Coaching Skills",
            topics: [
                "Active listening and powerful questioning.",
                "Enabling self-organization.",
                "Supporting sustainable behavioral change."
            ]
        },
        {
            title: "Module 7: Agile Coaching Skills Scenario",
            topics: [
                "Real-world coaching simulations.",
                "Applying techniques to practical challenges.",
                "Reflection and improvement planning."
            ]
        }
    ];

    const learningObjectives = [
        { title: "Enhance Mentorship Quality", description: "Develop comprehensive mentorship capabilities to support professional growth and team development." },
        { title: "Strengthen Leadership Skills", description: "Build leadership competencies that inspire teams and drive organizational change." },
        { title: "Improve Coaching Effectiveness", description: "Enhance listening, observation, and facilitation skills to unlock team potential." },
        { title: "Develop Strategic Advising Skills", description: "Provide informed recommendations that support Agile maturity and organizational success." },
        { title: "Enhance Team Dynamics", description: "Promote collaboration, alignment, and shared accountability within teams." },
        { title: "Strengthen Problem-Solving Capabilities", description: "Apply coaching techniques to identify challenges and implement sustainable improvements." }
    ];

    const whySections = [
        { title: "Global Recognition", description: "Courses are recognized by reputable certification bodies, ensuring credibility and global acceptance." },
        { title: "Expert Trainers", description: "Learn from experienced and certified trainers with real-world Agile expertise." },
        { title: "Flexible Learning Options", description: "Choose from live virtual, on-demand, and corporate training formats to suit your schedule." },
        { title: "Lifetime Access", description: "Access course materials and session recordings for continuous learning." },
        { title: "Proven Track Record", description: "Trusted training provider with extensive experience in professional development." },
        { title: "End-to-End Support", description: "Receive comprehensive assistance before, during, and after training." },
        { title: "Interactive and Engaging Training", description: "Participate in practical exercises, discussions, and real-world scenarios." },
        { title: "Wide Range of Courses", description: "Access internationally recognized certifications in Agile, Scrum, SAFe, DevOps, and more." }
    ];

    const courseFeatures = [
        { icon: Users, title: '4 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'CST Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Membership', subtitle: 'Scrum Alliance', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Agile Coaching Skills Micro-credential Course",
        breadcrumbName: "Agile Coaching Skills",
        rating: "5.0",
        enrolledCount: "680+ professionals",
        subtitle: "Build Advanced Coaching, Mentorship, and Leadership Skills in Agile Environments",
        benefits: [
            "4 hours of interactive live training with Certified Scrum Trainers.",
            "Earn 4 SEUs to support your professional development.",
            "Receive a 2-year Scrum Alliance membership.",
            "Obtain a digital badge to validate your Agile coaching expertise."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Agile Coaching Skills Micro-credential Overview",
        description: [
            "The Agile Coaching Skills Micro-credential course equips professionals with advanced coaching and mentorship techniques required to lead high-performing Agile teams.",
            "This interactive training enhances your understanding of facilitation, mentoring, advising, teaching, and leadership within Agile environments.",
            "Agile coaching enables organizations to adopt sustainable practices, improve adaptability, and deliver higher-value products and services."
        ],
        whatIsTitle: "What Is Agile Coaching?",
        whatIsDescription: [
            "Agile coaching involves guiding teams and organizations in effectively adopting and improving Agile practices.",
            "It combines facilitation, mentoring, teaching, advising, and leadership skills to drive continuous improvement and cultural transformation.",
            "Agile coaches support teams in becoming self-organizing, collaborative, and outcome-focused."
        ],
        whatsIncludedTitle: "What’s Included in the Agile Coaching Skills Course?",
        whatsIncludedDescription: [
            "Live interactive training sessions.",
            "Scenario-based practical exercises.",
            "Digital badge upon completion.",
            "Scrum Alliance membership benefits.",
            "Post-training support and resources."
        ],
        skillsTitle: "Skills Covered in Agile Coaching Skills Micro-credential",
        skills: [
            "Facilitation and workshop management",
            "Teaching and mentoring techniques",
            "Advisory and strategic guidance",
            "Leadership and servant leadership practices",
            "Conflict resolution and collaboration enhancement",
            "Agile transformation support"
        ],
        modesTitle: "Training Modes Available",
        modesDescription: [
            "Live virtual instructor-led training.",
            "On-demand learning format.",
            "Customized corporate training programs."
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQs",
            items: [
                { question: "1. Who is this micro-credential for?", answer: "Scrum Masters, Agile Coaches, and Team Leads looking to sharpen their coaching skills." },
                { question: "2. Do I get Scrum Alliance credit?", answer: "Yes, you earn 4 SEUs and a 2-year membership." },
                { question: "3. Is there an exam?", answer: "There is no exam; the credential is earned through active participation and scenario-based exercises." }
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
                                courseName="Why Viovn Is the First Choice for Corporates?"
                                description="Viovn delivers customized corporate training programs designed to meet enterprise needs. Our expert trainers provide instructor-led sessions tailored to specific job roles and organizational objectives. With flexible delivery formats and industry-aligned content, we empower teams to meet evolving market demands and achieve measurable performance improvements."
                                label=""
                                buttonText="Corporate Group Enquiry"
                            />
                            <CourseClients clients={companies} />
                            <CourseTrainers trainers={[]} />
                            <CourseWhyViovn features={whySections} />
                        </div>
                        <div className="relative">
                            <div className="sticky top-24">
                                <CourseSidePanel  courseName={heroData.courseName} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default AgileCoachingSkillsMicroCredentialTraining;
