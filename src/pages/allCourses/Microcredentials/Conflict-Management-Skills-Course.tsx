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
 * Conflict Management Skills Training
 * Data source: course_data3.json
 */
const ConflictManagementSkillsCourse = () => {
    const courseName = "Conflict Management Skills Training";

    const highlights = [
        { text: "8 hours of intensive, skill-focused training." },
        { text: "Live and interactive sessions led by experienced Agile trainers." },
        { text: "Earn a digital badge to validate your conflict management expertise." },
        { text: "24/7 dedicated customer support." },
        { text: "Networking opportunities with industry professionals and global experts." },
        { text: "Hands-on learning through real-world and story-based exercises." }
    ];

    const individualBenefits = [
        { title: "Individual Benefits", description: "Develop effective communication skills to resolve team conflicts efficiently." },
        { title: "Individual Benefits", description: "Build practical conflict resolution skills with confidence and professionalism." },
        { title: "Individual Benefits", description: "Understand psychological safety and leadership strategies to guide teams successfully." },
        { title: "Individual Benefits", description: "Strengthen collaboration and manage team dynamics with clarity and confidence." },
        { title: "Individual Benefits", description: "Enhance your resume, master facilitation skills, and increase your employability." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefits", description: "Build stronger teams by fostering harmony, trust, and mutual respect." },
        { title: "Corporate Benefits", description: "Ensure smoother workflows through structured conflict management techniques." },
        { title: "Corporate Benefits", description: "Improve overall organizational productivity by equipping teams to handle challenges effectively." },
        { title: "Corporate Benefits", description: "Strengthen cross-functional collaboration and encourage innovative problem-solving." }
    ];

    const careerStats = {
        averageIncome: "$100k - $150k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "85%",
        growthLabel: "Soft-skills emphasis in leadership",
    };

    const attendeesData = [
        {
            group: [
                "Team leaders and managers seeking better conflict resolution strategies.",
                "Scrum Masters and Agile professionals managing team dynamics.",
                "HR professionals handling workplace disputes.",
                "Project managers aiming to improve collaboration.",
                "Professionals aspiring to develop leadership and facilitation skills."
            ]
        }
    ];

    const companies = [
        { name: "Accenture", url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg" },
        { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg" },
        { name: "Infosys", url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
        { name: "Capgemini", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg" },
        { name: "IBM", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
        { name: "TCS", url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" }
    ];

    const outcomes = [
        "Identify and address conflicts before they escalate.",
        "Apply de-escalation and communication strategies effectively.",
        "Foster psychological safety within teams.",
        "Transform workplace conflicts into growth opportunities.",
        "Strengthen collaboration and trust among team members."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "Basic understanding of team dynamics or workplace communication is beneficial."
    ];

    const certificationSteps = [
        {
            title: "Attend the Course",
            description: "Participate in the 8-hour Conflict Management Skills training led by expert Agile trainers."
        },
        {
            title: "Master the Concepts",
            description: "Gain a strong understanding of conflict resolution frameworks and communication strategies."
        },
        {
            title: "Apply Practical Skills",
            description: "Engage in case studies, real-world scenarios, and interactive discussions to practice problem-solving."
        },
        {
            title: "Earn Your Credential",
            description: "Receive your Conflict Management Skills microcredential upon successful completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Learn Conflict Handling",
            topics: [
                "Identify potential conflicts early.",
                "Address issues before they escalate.",
                "Handle complex conversations with confidence and positivity."
            ]
        },
        {
            title: "Module 2: Hone De-escalation Techniques",
            topics: [
                "Nonviolent communication principles.",
                "Active listening techniques.",
                "Clear verbal and non-verbal communication.",
                "Maintaining composure in high-pressure situations."
            ]
        },
        {
            title: "Module 3: Understand Conflicts In-depth",
            topics: [
                "Identify root causes of team disputes.",
                "Recognize miscommunication and personality clashes.",
                "Understand the psychological impact of conflicts on teams."
            ]
        },
        {
            title: "Module 4: Importance of Psychological Safety",
            topics: [
                "Build a culture of trust and openness.",
                "Encourage safe idea-sharing within teams.",
                "Promote collaboration without fear of judgment."
            ]
        },
        {
            title: "Module 5: De-escalation of Team Tensions",
            topics: [
                "Apply strategies to diffuse tension.",
                "Restore collaboration and team harmony.",
                "Use empathetic communication to manage difficult conversations."
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Conflict Resolution Strategies",
            description: "Develop structured strategies to manage disputes and promote harmonious teamwork."
        },
        {
            title: "Create a Safe Work Environment",
            description: "Build transparent and bias-free communication channels that promote trust."
        },
        {
            title: "Understand Conflict Triggers",
            description: "Identify behavioral and emotional triggers that cause workplace conflicts."
        },
        {
            title: "Resolve Issues Effectively",
            description: "Transform conflicts into opportunities for growth through practical resolution techniques."
        },
        {
            title: "Strengthen Team Collaboration",
            description: "Encourage teamwork, solve interpersonal issues, and align teams toward shared goals."
        }
    ];

    const whySections = [
        { title: "Global Recognition", description: "Our courses are recognized by reputable certification bodies, ensuring industry-wide credibility." },
        { title: "Expert Trainers", description: "Learn from certified professionals with extensive real-world experience." },
        { title: "Flexible Learning", description: "Choose from live online, corporate, or customized training formats." },
        { title: "Lifetime Access", description: "Access learning materials and resources anytime for continued development." },
        { title: "Proven Track Record", description: "Trusted by professionals and organizations worldwide for impactful training programs." },
        { title: "End-to-End Assistance", description: "Receive guidance before, during, and after training, including certification support." },
        { title: "Interactive and Engaging Training", description: "Participate in practical simulations, discussions, and real-world exercises." },
        { title: "Wide Range of Courses", description: "Explore globally recognized certifications in Agile, Scrum, Project Management, DevOps, and more." }
    ];

    const courseFeatures = [
        { icon: Users, title: '8 Hours', subtitle: 'Live Training', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Digital Badge', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "Conflict Management Skills Training",
        breadcrumbName: "Conflict Management Skills Microcredential Course",
        rating: "5.0",
        enrolledCount: "400+ leaders certified",
        subtitle: "Master Conflict Resolution and Build High-Performing Teams",
        benefits: [
            "8 hours of immersive live training",
            "Practical, story-based learning exercises",
            "Lifetime-valid microcredential",
            "Earn SEUs upon completion"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    const sidePanelSchedules = [
        {
            courseCode: 'CON-MGT-SK',
            courseName: heroData.courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Senior Leadership Coach',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 12,500',
            discountedPrice: 'INR 8,499',
            discountPercentage: '32',
        },
    ];

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Conflict Management Skills Course Overview",
        description: [
            "The Conflict Management Skills course equips you with essential tools to manage team disputes, foster psychological safety, and build trust within organizations.",
            "Through immersive story-based exercises and real-life scenarios, you will gain practical experience in identifying and resolving workplace conflicts effectively.",
            "This training enables you to transform conflicts into opportunities for collaboration, growth, and continuous improvement.",
            "Upon completion, you will confidently address interpersonal challenges and promote a healthy, high-performing work environment."
        ],
        whatIsTitle: "What is Conflict Management Skills Training?",
        whatIsDescription: [
            "This microcredential program focuses on developing structured conflict resolution and facilitation skills.",
            "It combines communication frameworks, psychological safety principles, and practical simulations to build leadership capability."
        ],
        whatsIncludedTitle: "What’s Included?",
        whatsIncludedDescription: [
            "8 hours of live interactive training",
            "Real-world case studies and simulations",
            "Digital microcredential badge",
            "24/7 learner support"
        ],
        skillsTitle: "Skills Covered",
        skills: [
            "Conflict Resolution Techniques",
            "Active Listening and Empathy",
            "Psychological Safety Leadership",
            "De-escalation Strategies",
            "Team Facilitation Skills"
        ],
        modesTitle: "Training Modes",
        modesDescription: [
            "Corporate Group Training",
            "Customized Enterprise Training Solutions"
        ]
    };

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQ",
            items: [
                { question: "1. Is this only for Scrum Masters?", answer: "No, anyone who works in a team can benefit from these skills." },
                { question: "2. Is there homework?", answer: "No, all learning and participation happen during the live session." },
                { question: "3. When will I get my badge?", answer: "Typically within 24-48 hours after your training attendance is verified." }
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
                                courseName="Corporate Conflict Management Training"
                                description="SimpliAxis delivers tailored corporate training programs designed to address specific organizational challenges."
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

export default ConflictManagementSkillsCourse;
