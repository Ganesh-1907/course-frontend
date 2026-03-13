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
 * AI for Product Owners Micro-credential Training
 * Data source: course_data3.json
 */
const AIForProductOwnersMicroCredentialTraining = () => {
    const courseName = "AI for Product Owners Micro-credential Course";

    const highlights = [
        { text: "4 hours of interactive live training with Certified Scrum Trainers (CSTs)." },
        { text: "On-demand content for flexible, self-paced learning." },
        { text: "Earn a digital badge to showcase your AI expertise." },
        { text: "Non-members receive a 2-year Scrum Alliance membership." },
        { text: "Earn SEUs to support your professional development." },
        { text: "Gain an industry-recognized AI micro-credential." },
        { text: "Expert-guided modules designed for real-world application." },
        { text: "24/7 customer support and learning assistance." }
    ];

    const individualBenefits = [
        { title: "Individual Benefit", description: "Increase efficiency by automating backlog management and prioritization using AI tools." },
        { title: "Individual Benefit", description: "Improve decision-making through AI-driven analysis of customer and end-user data." },
        { title: "Individual Benefit", description: "Strengthen product strategy by leveraging AI to build roadmaps and define goals." },
        { title: "Individual Benefit", description: "Enhance stakeholder communication with AI-powered insights and feedback analysis." },
        { title: "Individual Benefit", description: "Accelerate product delivery with AI-assisted feature development and testing." }
    ];

    const corporateBenefits = [
        { title: "Corporate Benefit", description: "Improve product development processes through AI-driven optimization." },
        { title: "Corporate Benefit", description: "Reduce operational costs through intelligent automation." },
        { title: "Corporate Benefit", description: "Leverage AI insights to better understand user needs and product direction." },
        { title: "Corporate Benefit", description: "Drive innovation by using AI to generate new product ideas and enhancements." },
        { title: "Corporate Benefit", description: "Gain a competitive advantage through data-driven strategic decisions." }
    ];

    const careerStats = {
        averageIncome: "$120k - $170k",
        incomeLabel: "Salary Potential",
        employmentGrowth: "95%",
        growthLabel: "AI adoption in Product Management",
    };

    const attendeesData = [
        {
            group: [
                "Product Owners",
                "Product Managers",
                "Business Analysts",
                "Project Managers",
                "Team Leaders",
                "Agile Coaches",
                "Strategic Decision Makers"
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
        "Confidently integrate AI tools into product ownership activities.",
        "Develop advanced prompt engineering skills.",
        "Improve backlog refinement and roadmap planning with AI.",
        "Apply AI-driven insights for better strategic decisions.",
        "Enhance collaboration and productivity within Agile teams."
    ];

    const prerequisites = [
        "There are no mandatory prerequisites for this course.",
        "Basic knowledge of Product Ownership or Agile practices is beneficial."
    ];

    const certificationSteps = [
        {
            title: "Register for the Course",
            description: "Enroll in the AI for Product Owners Micro-credential training with Viovn."
        },
        {
            title: "Attend the Training",
            description: "Complete the 4-hour live session led by Certified Scrum Trainers."
        },
        {
            title: "Complete Learning Activities",
            description: "Participate in practical exercises and hands-on AI labs."
        },
        {
            title: "Receive Your Credential",
            description: "Earn your AI for Product Owners micro-credential and digital badge upon completion."
        }
    ];

    const curriculumModules = [
        {
            title: "Module 1: Responsible Human and AI Collaboration",
            topics: [
                "Understanding the role of AI in product management",
                "AI vs. human decision-making",
                "Product Owner AI support lab",
                "Defining the core responsibilities of a Product Owner",
                "Summary and next steps"
            ]
        },
        {
            title: "Module 2: Everyday AI Tools for Product Owners",
            topics: [
                "Using AI to simplify tasks and support teams",
                "Integrating AI into daily workflows",
                "Ensuring responsible human oversight of AI outputs"
            ]
        },
        {
            title: "Module 3: AI for Product Requirements and User Stories",
            topics: [
                "Using AI to draft product requirements",
                "Creating valuable user personas with AI insights",
                "Transforming feedback into impactful user stories",
                "Refining AI-generated user stories for clarity and value",
                "Prioritizing user stories using AI assistance"
            ]
        },
        {
            title: "Module 4: AI for Agile Teams and Processes",
            topics: [
                "AI-powered backlog refinement",
                "AI-assisted estimation techniques",
                "Integrating AI into product roadmaps",
                "Enhancing meetings and collaboration with AI tools"
            ]
        },
        {
            title: "Module 5: Prompt Engineering Learning Lab",
            topics: [
                "Designing effective AI prompts",
                "Customizing prompts for product scenarios",
                "Improving output accuracy through refinement"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "AI for Strategic Planning",
            description: "Leverage AI tools to align product strategy with market trends and business goals."
        },
        {
            title: "AI for Decision-Making",
            description: "Use AI insights to make faster, data-driven product decisions."
        },
        {
            title: "Refining User Stories with AI",
            description: "Enhance clarity and value of user stories using AI assistance."
        },
        {
            title: "AI in Lifecycle Management",
            description: "Automate repetitive product lifecycle tasks while maintaining governance."
        },
        {
            title: "AI for Audience Insights",
            description: "Analyze customer behavior and preferences using AI-driven tools."
        },
        {
            title: "Workflow Automation Tools",
            description: "Integrate AI tools like Jira automation, Zapier, and ChatGPT for efficiency."
        }
    ];

    const faqCategories = [
        {
            id: "category_1",
            label: "Program FAQ",
            items: [
                { question: "1. What is the AI for Product Owners Micro-credential Course?", answer: "This course equips Product Owners with practical skills to integrate AI tools into product planning, backlog management, and strategic decision-making." },
                { question: "2. Do I need CSPO certification to attend?", answer: "No, there are no mandatory prerequisites. However, familiarity with Scrum or Agile concepts is helpful." },
                { question: "3. Is this course limited to software teams?", answer: "No, the course is relevant to Product Owners across industries including manufacturing, retail, and healthcare." },
                { question: "4. Does the micro-credential expire?", answer: "No, the AI for Product Owners micro-credential and badge are valid for life." },
                { question: "5. Will AI replace Product Owners?", answer: "AI enhances productivity and supports decision-making but cannot replace the strategic leadership of Product Owners." }
            ]
        }
    ];

    const whySections = [
        {
            title: "Global Recognition",
            description: "Recognized by leading certification bodies and trusted worldwide."
        },
        {
            title: "Expert Trainer",
            description: "Learn from Certified Scrum Trainers with real-world experience."
        },
        {
            title: "Flexible Learning",
            description: "Choose live sessions or on-demand content to suit your schedule."
        },
        {
            title: "Lifetime Access",
            description: "Access learning materials anytime for continuous development."
        },
        {
            title: "Proven Track Record",
            description: "Trusted by professionals and enterprises globally."
        },
        {
            title: "End-to-End Assistance",
            description: "Receive guidance and support before, during, and after training."
        },
        {
            title: "Interactive and Engaging Training",
            description: "Participate in hands-on labs and real-world AI exercises."
        },
        {
            title: "Wide Range of Courses",
            description: "Explore globally recognized certifications across Agile, Scrum, DevOps, and AI."
        }
    ];

    const courseFeatures = [
        { icon: Users, title: '4 Hours', subtitle: 'Live Training', color: 'bg-accent text-primary' },
        { icon: BookOpen, title: 'Expert-Led', subtitle: 'Workshops', color: 'bg-orange-50 text-orange-600' },
        { icon: Award, title: 'Digital Badge', subtitle: 'Included', color: 'bg-purple-50 text-purple-600' },
        { icon: Briefcase, title: 'Case Studies', subtitle: 'Practice', color: 'bg-cyan-50 text-cyan-600' },
    ];

    const heroData = {
        courseName: "AI for Product Owners Micro-credential Course",
        breadcrumbName: "AI for Product Owners Micro-credential Course",
        rating: "5.0",
        enrolledCount: "800+ trained",
        subtitle: "Integrate AI into Product Ownership for Smarter, Faster Decisions",
        benefits: [
            "4 hours of live expert-led training",
            "Earn SEUs and a Scrum Alliance digital badge",
            "Hands-on AI labs and prompt engineering practice",
            "Lifetime credential validity"
        ],
        mainImage: "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png"
    };

    

    const overviewContent = {
        title: "Course Overview",
        subtitle: "AI for Product Owners Course Overview",
        description: [
            "The AI for Product Owners course teaches you how to integrate AI tools into planning, backlog management, and user story refinement.",
            "You will learn how to use AI-generated insights for lifecycle management, audience analysis, and faster decision-making.",
            "This course empowers Product Owners to leverage AI as a strategic co-creator, improving collaboration, innovation, and overall product success."
        ],
        whatIsTitle: "What is AI for Product Owners?",
        whatIsDescription: [
            "It is a specialized micro-credential designed to help Product Owners use AI effectively within Agile frameworks.",
            "The course focuses on practical AI integration for strategy, backlog management, and stakeholder collaboration."
        ],
        whatsIncludedTitle: "What’s Included?",
        whatsIncludedDescription: [
            "4-hour live training with CSTs",
            "On-demand learning materials",
            "Scrum Alliance digital badge",
            "SEUs and 2-year membership (for non-members)"
        ],
        skillsTitle: "Skills Covered",
        skills: [
            "AI Prompt Engineering",
            "AI-Driven Backlog Refinement",
            "Strategic Product Planning with AI",
            "AI-Enhanced Stakeholder Communication"
        ],
        modesTitle: "Training Modes",
        modesDescription: [
            "Live Instructor-Led Online Training",
            "On-Demand Learning Modules"
        ]
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
                            <CourseCorporateOptUs courseName="Why SimpliAxis Is the First Choice for Corporates" description="Viovn provides tailored AI and Agile training programs designed to enhance enterprise product management capabilities." label="" buttonText="Corporate Group Enquiry" />
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

export default AIForProductOwnersMicroCredentialTraining;
