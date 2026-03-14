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
 * AI for Scrum Masters Micro-credential Course
 * Data source: course_data3.json
 */
const AIForScrumMastersMicroCredentialCourse = () => {
    const courseName = "AI for Scrum Masters Micro-credential Course";

    const highlights = [
        { text: "4 hours of Interactive Live Training with Certified Scrum Trainers" },
        { text: "2 Years Scrum Alliance Membership" },
        { text: "Flexible On-Demand Learning Format" },
        { text: "Earn an Industry-Recognized Microcredential" },
        { text: "Expert-Guided Modules for Real-World Application" },
        { text: "Access to Scrum Global Community" },
        { text: "24/7 Customer Support and Learning Assistance" }
    ];

    const individualBenefits = [
        { title: "Individuals Benefits", description: "Build worthwhile technical AI skills for career development." },
        { title: "Individuals Benefits", description: "Position yourself as distinct and competent as an AI in Scrum." },
        { title: "Individuals Benefits", description: "Gaining confidence in the use of AI-based tools." },
        { title: "Individuals Benefits", description: "AI acts as an effective problem-solving aid for strengthening personal decision-making." },
        { title: "Individuals Benefits", description: "Automate tasks and save some time and effort." },
        { title: "Individuals Benefits", description: "Strengthen your ability to guide and manage an agile team." },
        { title: "Individuals Benefits", description: "Apply the latest AI techniques to boost your productivity." },
        { title: "Individuals Benefits", description: "Future-proofing yourself in a fast-changing job market." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Maximize team productivity through AI-enabled applications." },
        { title: "Corporate Benefits", description: "Save more time on the automatic processing of repetitive processes." },
        { title: "Corporate Benefits", description: "Make better decisions using AI-driven analytics for analysis." },
        { title: "Corporate Benefits", description: "Improved collaboration and communication within teams." },
        { title: "Corporate Benefits", description: "Improving productivity through agile workflow enhancement." },
        { title: "Corporate Benefits", description: "Using AI leveraged insights for strategic planning success." },
        { title: "Corporate Benefits", description: "Maintain a competitive edge by strategically highlighting the latest AI solutions." },
        { title: "Corporate Benefits", description: "Obtain better project outcomes using AI for forecasting." }
    ];

    const careerStats = {
        averageIncome: "$115k - $160k",
        incomeLabel: "Salary Range",
        employmentGrowth: "85%",
        growthLabel: "AI Integration in Scrum Roles",
    };

    const attendees = [
        {
            group: [
                "Scrum Masters",
                "Team Leaders",
                "Agile Professionals",
                "Project Managers",
                "Product Managers",
                "Agile Coaches"
            ]
        }
    ];

    const companies = [
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const outcomes = [
        "Learn Everyday AI Tools for Scrum Masters.",
        "Learn Prompt Engineering for Effective AI Use.",
        "Customize AI Applications to Suit Organization Team's Needs.",
        "Apply AI in Scrum Activities such as Tactical Planning and Decision-Making.",
        "Improve Team Communication and Collaboration with AI.",
        "Manage Teams More Efficiently Using AI Data Insights.",
        "Learn About Ethical AI Use Within the Scrum Framework.",
        "Engage in Practical Activities on Prompt Engineering."
    ];

    const prerequisites = [
        "No prior experience needed; basic Scrum knowledge is helpful.",
        "Open to Scrum Masters, team leaders, and Agile professionals."
    ];

    const certificationSteps = [
        {
            title: "Check Qualification",
            description: "Check your eligibility for the AI for Scrum Masters course."
        },
        {
            title: "Enrollment",
            description: "Register for AI for Scrum Masters training with Viovn."
        },
        {
            title: "Attend Training",
            description: "Complete the training led by professional experts."
        },
        {
            title: "Recognition",
            description: "Receive your AI for Scrum Masters certificate and badge."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Everyday AI Tools for Scrum Masters",
            topics: [
                "Learn the basics of AI in Scrum.",
                "Use AI to improve Scrum events.",
                "Facilitate meetings with AI tools."
            ]
        },
        {
            title: "Module 2: Prompt Engineering: The Key to Effective Interactions",
            topics: [
                "Master prompt engineering for AI.",
                "Use AI for brainstorming ideas."
            ]
        },
        {
            title: "Module 3: Customizing AI for Your Team",
            topics: [
                "Use AI tools for your team.",
                "Improve team dynamics with AI."
            ]
        },
        {
            title: "Module 4: AI-Powered Strategic Planning",
            topics: [
                "Apply AI for better decision-making.",
                "Forecast project outcomes with AI."
            ]
        },
        {
            title: "Module 5: AI-Powered Communication and Collaboration",
            topics: [
                "Improve team communication with AI.",
                "Streamline retrospectives with AI."
            ]
        },
        {
            title: "Module 6: Data-Driven Team Management",
            topics: [
                "Analyze team performance with AI.",
                "Identify bottlenecks using AI."
            ]
        },
        {
            title: "Module 7: Ethical AI in Scrum Practice",
            topics: ["Ethical considerations in AI", "Transparency and integrity"]
        },
        {
            title: "Module 8: Learning Lab: Prompt Engineering for Scrum Masters",
            topics: ["Hands-on prompt crafting", "Reviewing AI outputs"]
        }
    ];

    const learningObjectives = [
        {
            title: "AI tools for Scrum Masters",
            description: "Find essential AI tools for enhancing Scrum methods, increasing productivity and facilitating the cooperation of the team in daily tasks."
        },
        {
            title: "Effective Prompt Engineering",
            description: "Access how to formulate Artificial Intelligence prompts that help a team communicate and reach decisions more effectively."
        },
        {
            title: "Customizing AI for Teams",
            description: "Adjust AI services to fit your team, providing effective solutions that improve workflows and boost team output."
        },
        {
            title: "AI in Strategic Planning",
            description: "Use AI to study data and make predictions to strengthen the process of strategic planning by making it more informed and adapting Scrum management."
        },
        {
            title: "AI for Communication & Collaboration",
            description: "Innovate team communication with AI that improves feedback, collaboration and performance improvement of Scrum traditions such as retrospectives."
        },
        {
            title: "Data-Driven Team Management",
            description: "Apply AI in scrutinizing team performance, spotting patterns, and making iterations that improve processes and relationships within the team."
        },
        {
            title: "Ethical AI in Scrum",
            description: "Comprehend the ethics of AI within Scrum, ensuring fairness in AI managed processes."
        },
        {
            title: "Prompt Engineering Lab",
            description: "Participate in the creation of effective AI Scrum prompts and testing new approaches to enhance Scrum and team performance."
        }
    ];

    const faqCategories = [
        {
            id: "category_1",
            label: "General FAQ",
            items: [
                {
                    question: "1. Do I have to be a scrum master to take this AI for Scrum Masters course?",
                    answer: "You do not have to work as a scrum master to join this course. This course is designed for scrum masters, anyone interested in using AI to boost team effectiveness will find it helpful. It is best suited for anyone responsible for or participating in the activities of high-performance teams, including agile teams."
                },
                {
                    question: "2. What are the topics covered in this course?",
                    answer: "After the completion of the course, you will have the capabilities and skills for: Utilizing AI tools to automate repetitive tasks, optimizing AI interactions through iterative prompt engineering, experimenting with custom data training, planning strategic sessions using AI-powered tools, improving collaboration and communication, interpreting AI-generated team reports, and establishing ethical guidelines."
                },
                {
                    question: "3. Which AI tools will be covered in this AI for Scrum Masters course?",
                    answer: "AI Platforms such as Otter.ai, Gemini, ChatGPT, and built-in tools such as Asana, Jira that are covered in this class. In addition to these tools, principles such as prompt engineering and tailoring AI to work for specific team needs are taught as well."
                },
                {
                    question: "4. Can I take this course even if I don’t have a qualified scrum master certification?",
                    answer: "Yes you can! It doesn't matter if you are certified or not, everyone is welcome to take this class. This course aims to broaden the students’ skills with AI so it is suitable for anyone, even those who have no prior scrum skills."
                },
                {
                    question: "5. Will AI replace Scrum Masters?",
                    answer: "No, AI will more likely change the role of Scrum Masters rather than completely replace them. Routine tasks will be automated and new techniques to improve team dynamics will be discovered. In AI for Scrum Masters, you help your team use AI tools that will free you to focus on the higher value tasks."
                }
            ]
        },
        {
            id: "category_2",
            label: "Payment & Enrollment",
            items: [
                {
                    question: "1. What happens to my token or partial payment if I don’t enroll immediately?",
                    answer: "Token or partial payments will become non-refundable after 15 days from the date of payment. Any token or partial amount paid can be applied towards enrollment for any available sessions on our website within 6 months."
                },
                {
                    question: "2. Is there a preferred currency for payment?",
                    answer: "While we accept payments in various currencies, we recommend using the currency from where you want to attend the course."
                },
                {
                    question: "3. Can payments be made online?",
                    answer: "Payments can be made conveniently through our secure online payment portal on our website. We do not require visiting a physical location."
                }
            ]
        },
        {
            id: "category_3",
            label: "Training & Support",
            items: [
                {
                    question: "1. What if I miss a class?",
                    answer: "No, you won't get your money back. But, as per your convenience, we can reschedule your training without any extra charges."
                },
                {
                    question: "2. If I want to know more about Training, whom should I connect with?",
                    answer: "If you want to know more about the course you can connect us in mail hello@viovn.com or you can call us."
                }
            ]
        }
    ];

    const whySections = [
        {
            title: "Global Recognition",
            description: "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries."
        },
        {
            title: "Expert Trainer",
            description: "Gain knowledge from trained and experienced trainers who impart real-world business insights as well as practical experience to the classes."
        },
        {
            title: "Flexible Learning",
            description: "Provides a variety of methods of learning, such as classes, online, and corporate Training, that meet the needs of different individuals and their schedules."
        },
        {
            title: "Lifetime Access",
            description: "Enjoy all-year access to the recordings of sessions, course materials, and study tools."
        },
        {
            title: "Proven Track Record",
            description: "A reputable training provider with impressive experience in helping professional and business organizations improve their abilities and meet their career ambitions."
        },
        {
            title: "End-to-End Assistance",
            description: "Viovn Offers ongoing assistance prior to, during, and after Training and includes study material exams, guidance for participants on certification, and career choices."
        },
        {
            title: "Interactive and engaging Training",
            description: "Our Training sessions are designed to be extremely interactive, featuring real-world scenarios with group participation, questions & answers to aid in understanding."
        },
        {
            title: "A wide range of courses",
            description: "Viovn offers various internationally acknowledged certification courses in Agile, Scrum, SAFe, DevOps, Project Management, and more."
        }
    ];

    const courseFeatures = [
        { icon: Users, title: '4 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Digital Badge', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "AI for Scrum Masters Micro-credential Course",
        breadcrumbName: "AI for Scrum Masters Micro-credential (AISM) Certification Course",
        rating: "5.0",
        enrolledCount: "600+ trained",
        subtitle: "Harness the power of Artificial Intelligence to elevate your Scrum Master skills.",
        benefits: [
            "Participate in Interactive 4 Hours Live Training with Expert Trainers.",
            "Learn to Use AI for a More Effective Daily Scrum Management.",
            "Earn SEUs and a 2-Year Scrum Alliance Membership!",
            "Validate Your Skills in AI and Scrum with this Microcredential.",
            "Improve Your Career Opportunities with this Popular Certification."
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "AI for Scrum Masters Course Overview",
        description: [
            "AI for Scrum Masters is an ideal course for Scrum Masters, project managers, product managers, or anybody on an Agile team who want to learn to use AI in their daily work. You will see how AI can help to save time and automate activities.",
            "Identify AI tools for Scrum Masters that support team collaboration, decision making, productivity, and learn how an AI-enabled agile co-pilot being utilized to assist smarter work processes and increasing team productivity. Earn your microcredential in the process of working with AI.",
            "Get hands-on experience in prompt engineering, AI-powered data analysis, and forecasting with the help of AI. Learn how to utilize AI to positively influence Scrum meetings, improve communication within the team, and advance on to other frameworks such as Kanban, Lean, and XP. Begin now and let us get you started with AI powered Scrum skills at Viovn!"
        ],
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
                    <CourseHighlights highlights={highlights} courseName={heroData.courseName} />
                    <CourseCareerUpliftment stats={careerStats} attendees={attendees} companies={companies} outcomes={outcomes} courseName={heroData.courseName} />
                </div>
            )
        },
        {
            id: 'benefits',
            label: 'Benefits',
            content: (
                <div className="space-y-6">
                    <CourseBenefits individualBenefits={individualBenefits} corporateBenefits={corporateBenefits} courseName={heroData.courseName} />
                    <CourseCommonAttendees attendees={attendees[0].group} courseName={heroData.courseName} />
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
                            <CourseCorporateOptUs courseName="Why SimpliAxis Is The First Choice For Corporates?" description="Viovn delivers customized AI for Scrum Masters training tailored to organizational needs." label="" buttonText="Corporate Group enquiry" />
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

export default AIForScrumMastersMicroCredentialCourse;
