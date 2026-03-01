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
import CourseWhySimpliaxis from "@/components/courses/CourseWhySimpliaxis";

import {
    Users,
    BookOpen,
    Network,
    CreditCard,
    FileText,
    Briefcase,
    CheckCircle2,
    Star
} from "lucide-react";

const ICAgileICPFundamentalCertificationTraining = () => {
    const highlights = [
        { text: "2 days of comprehensive training on 'being' Agile and 'doing' Agile", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Get 14 PDUs & SEUs", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Training conducted by an ICAgile Certified Professional", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Learn how to 'be Agile' and 'do Agile.'", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Experiential learning with practice sessions/hands-on learning", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Gain the Agile mindset and see success in all things done in an Agile manner.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Gain the ICAgile Agile Fundamentals credential.", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Post-training assistance in the form of meetups and doubt resolution sessions", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: "Strong Foundation",
            description: "ICAgile Fundamental-certified professionals gain a clear understanding of Agile values, principles, and mindsets that apply across roles and industries."
        },
        {
            title: "Improved Collaboration",
            description: "Professionals learn how to work more effectively in cross-functional teams through shared ownership, transparency, and open communication."
        },
        {
            title: "Career Readiness",
            description: "Certified professionals get in-depth, practical knowledge crucial for organizations adopting Agile, even for non-Agile-titled roles."
        },
        {
            title: "Adaptability to Change",
            description: "Individuals develop their ability to respond confidently to shifting priorities and changing business requirements."
        },
        {
            title: "Pathway to Advanced Skills",
            description: "ICAgile Fundamental certification ensures a strong base to progress into advanced ICAgile and Agile leadership certifications."
        }
    ];

    const corporateBenefits = [
        {
            title: "Consistent Agile Understanding",
            description: "Organizations create a shared Agile language and mindset within teams to improve alignment and collaboration."
        },
        {
            title: "Faster Adoption",
            description: "Professionals with ICP certification understand Agile values and collaboration models, which minimize the resistance to change."
        },
        {
            title: "Improved Team Engagement",
            description: "Organizations foster stronger accountability and proactive ownership as Agile-trained employees take responsibility for results."
        },
        {
            title: "Better Customer-Focused Delivery",
            description: "Enterprises align work with customer expectations and business priorities by applying value-driven decision-making."
        },
        {
            title: "Reduced Dependency",
            description: "Organizations move away from rigid processes and adopt flexible, learning-focused approaches that support faster delivery."
        },
        {
            title: "Scalable Agile Culture",
            description: "Enterprises support long-term Agile maturity by enabling consistent Agile practices across departments."
        }
    ];

    const careerStats = {
        averageIncome: "$95k-115k",
        incomeLabel: "per annum",
        employmentGrowth: "65%",
        growthLabel: "(2023-2026)",
    };

    const attendees = [
        {
            group: [
                "Software Developers",
                "Project Managers",
                "Team Leads",
                "Business Analysts",
                "Product Managers",
                "Agile Coaches",
                "Quality Assurance",
                "UI/UX Designers"
            ]
        }
    ];

    const companies = [
        {
            name: "Amazon",
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        },
        {
            name: "Cognizant",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
        },
        {
            name: "IBM",
            url: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        },
        {
            name: "Accenture",
            url: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg",
        },
        {
            name: "Wipro",
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg",
        },
        {
            name: "Eurofins",
            url: "https://upload.wikimedia.org/wikipedia/en/b/b3/Eurofins_Scientific_logo.svg",
        },
        {
            name: "JPMorgan",
            url: "https://upload.wikimedia.org/wikipedia/commons/a/af/J_P_Morgan_Chase_Logo_2008_1.svg",
        },
    ];

    const outcomes = [
        "Develop a strong understanding of Agile values and principles and know how they guide everyday work decisions.",
        "Apply Agile mindset concepts to improve collaboration, adaptability, and team interactions.",
        "Strengthen communication skills for working effectively in cross-functional Agile teams.",
        "Understand how customer-focused thinking drives value-based delivery and prioritization.",
        "Learn how to respond to change through adaptive planning and iterative work approaches."
    ];

    const prerequisites = [
        "No prior Agile or Scrum experience is required to enroll.",
        "No technical or programming knowledge is needed.",
        "No restriction for professionals from any industry or role"
    ];

    const certificationSteps = [
        {
            title: "Enroll for the Course",
            description: "Register for the ICP Fundamental course through an authorized provider such as Simpliaxis.",
            color: "#3B82F6"
        },
        {
            title: "Attend the Training",
            description: "Participate in all scheduled sessions and actively engage in discussions, activities, and practical exercises focused on Agile fundamentals.",
            color: "#F59E0B"
        },
        {
            title: "Complete Course Requirements",
            description: "Meet the participation and learning requirements set by the trainer, as ICAgile certifications are based on learning outcomes rather than exams.",
            color: "#10B981"
        },
        {
            title: "Receive Certification from ICAgile",
            description: "After successful course completion, get the ICAgile Fundamental (ICP) certificate from ICAgile.",
            color: "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            title: "History of the Agile movement",
            topics: [
                "Origins of Agile",
                "Agile Manifesto",
                "Agile Beyond Software Development",
                "Understanding the Agile Mindset",
                "Establishing the Agile Mindset",
                "Agile in Context (As a Journey)"
            ]
        },
        {
            title: "Individuals & Interactions",
            topics: [
                "Developing Soft Skills",
                "Understanding Communication Barriers",
                "Sharing Knowledge",
                "Physical Work Environments",
                "Collaboration Techniques",
                "Techniques for Shared Understanding",
                "Shifts in Roles"
            ]
        },
        {
            title: "Customer & User Development",
            topics: [
                "Defining the Customer",
                "User Involvement",
                "User Feedback"
            ]
        },
        {
            title: "Planning & Adapting",
            topics: [
                "Planning",
                "Estimation",
                "Status",
                "Process Adaptation",
                "Product Adaptation"
            ]
        },
        {
            title: "Value-driven development",
            topics: [
                "Incremental Development",
                "Value-Based Work",
                "Retaining Quality",
                "Work-in-Progress (WIP)",
                "Continuous Integration",
                "Cost & Benefit of Frequent Delivery"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Understanding Agile Values and Principles",
            description: "Learn the core Agile values and principles and how they guide everyday decisions, behaviors, and team interactions in Agile environments."
        },
        {
            title: "Developing an Agile Mindset",
            description: "Build the ability to think adaptively, embrace change, and focus on continuous learning rather than rigid processes."
        },
        {
            title: "Strengthening Team Collaboration",
            description: "Understand how effective communication, trust, and shared ownership enhance collaboration within cross-functional Agile teams."
        },
        {
            title: "Applying Customer-Focused Thinking",
            description: "Learn how customer involvement and value-driven prioritization shape meaningful and outcome-focused work."
        },
        {
            title: "Practicing Adaptive Planning and Delivery",
            description: "Get clarity on how iterative planning and incremental delivery support flexibility and responsiveness."
        },
        {
            title: "Supporting Continuous Improvement",
            description: "Learn techniques for reflection, feedback, and improvement that help teams evolve and perform better over time."
        }
    ];

    const faqCategories = [
        {
            id: 'general',
            label: 'FAQ Courses',
            items: [
                {
                    question: "What is the ICAgile ICP Fundamental certification training course?",
                    answer: "The ICAgile Fundamental course is a beginner-level course that introduces Agile values, principles, and mindset. It focuses on helping participants understand how Agile works across teams and organizations."
                },
                {
                    question: "Who should take the ICAgile ICP course?",
                    answer: "The ICP Fundamental training is ideal for beginners, professionals new to Agile, business stakeholders, managers, and team members who want a strong foundation in Agile thinking."
                },
                {
                    question: "What are the prerequisites for the ICAgile ICP-Agile Fundamentals training?",
                    answer: "There are no formal prerequisites for the ICAgile (ICP) fundamental certification course. It is tailored for beginners and professionals new to Agile."
                },
                {
                    question: "Is there an exam for the ICAgile ICP Fundamental certification?",
                    answer: "There is no official exam for the ICP fundamental certification. Participants earn this credential by attending ongoing assessments throughout the class."
                }
            ]
        },
        {
            id: 'payment',
            label: 'FAQ Payment',
            items: [
                {
                    question: "What payment options are available?",
                    answer: "We accept payments through Credit Cards, Debit Cards, Net Banking, and Bank Transfers. Other options like PayPal are also available."
                },
                {
                    question: "Is there any transaction or processing fee?",
                    answer: "No, there is no additional transaction processing fee when paying through our portal."
                }
            ]
        },
        {
            id: 'logistics',
            label: 'FAQ Logistics',
            items: [
                {
                    question: "What if I miss a class?",
                    answer: "If you miss a class, we can reschedule your training to a future date at no extra charge, based on convenience."
                },
                {
                    question: "Do I get any certificate upon completion of the course?",
                    answer: "Yes, you will receive an official ICAgile (ICP) certificate after successful completion of the training course."
                }
            ]
        }
    ];

    const courseFeatures = [
        {
            icon: Users,
            title: 'Guaranteed to',
            subtitle: 'Run Workshops',
            color: 'bg-blue-50 text-blue-600',
        },
        {
            icon: BookOpen,
            title: 'Expert-Led Study',
            subtitle: 'Sessions',
            color: 'bg-orange-50 text-orange-600',
        },
        {
            icon: Network,
            title: 'Networking',
            subtitle: 'Opportunities',
            color: 'bg-green-50 text-green-600',
        },
        {
            icon: CreditCard,
            title: 'Flexible Monthly',
            subtitle: 'Payment Plans',
            color: 'bg-purple-50 text-purple-600',
        },
        {
            icon: FileText,
            title: 'Real-World Case',
            subtitle: 'Studies',
            color: 'bg-red-50 text-red-600',
        },
        {
            icon: Briefcase,
            title: 'Hands-On Project',
            subtitle: 'Experience',
            color: 'bg-cyan-50 text-cyan-600',
        },
    ];

    const courseClients = [
        {
            name: 'Wells Fargo',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg',
        },
        {
            name: 'Infosys',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
        },
        {
            name: 'Bosch',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg',
        },
        {
            name: 'Capgemini',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Capgemini_logo.svg',
        },
        {
            name: 'KPMG',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/KPMG_logo.svg',
        },
        {
            name: 'Accenture',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
        },
        {
            name: 'Cognizant',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg',
        },
        {
            name: 'Deloitte',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
        {
            name: 'Hexaware',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Hexaware_new_logo.svg',
        },
        {
            name: 'Thomson Reuters',
            logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Thomson_Reuters_logo.svg',
        },
    ];

    const courseTrainers = [
        {
            name: "Ram Srinivasan",
            role: "Certified Scrum Trainer (CST)",
            rating: "4.8",
            experience: "15+ Years",
            description: "Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Axel Wilhelm Berle",
            role: "Senior Agile Coach",
            rating: "4.9",
            experience: "20+ Years",
            description: "Axel Wilhelm Berle has been an international IT consultant and software developer in a wide range of industries, helping teams achieve peak performance.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        },
        {
            name: "Raquel Silva",
            role: "Agile Coach & Mentor",
            rating: "4.8",
            experience: "10+ Years",
            description: "Raquel Silva is an Agile Coach who cares passionately about helping deliver value to clients through sustainable and effective Scrum practices.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        },
    ];

    const courseWhySimpliaxis = [
        {
            title: "Authorized Training Provider",
            description: "Simpliaxis delivers officially accredited ICAgile Fundamental training aligned with ICAgile standards."
        },
        {
            title: "Experienced Trainers",
            description: "Learn from expert trainers with real-world Agile training and years of experience in delivering high-quality coaching."
        },
        {
            title: "Flexible Training Options",
            description: "Our Agile Fundamental training is available through instructor-led online and corporate training formats."
        },
        {
            title: "Focus on Mindset",
            description: "The ICP Fundamental certification course focuses on in-depth thinking, behavior, and collaboration rather than tools alone."
        },
        {
            title: "Interactive Learning",
            description: "We include interactive discussions, real-time activities, and real workplace scenarios while delivering the course."
        },
        {
            title: "Suitable for All",
            description: "Our ICP Fundamental training is tailored for professionals from IT, business, operations, and management backgrounds."
        },
        {
            title: "Career Growth",
            description: "Simpliaxis supports long-term Agile career paths and leadership development for ICAgile-certified professionals."
        },
        {
            title: "Learning Support",
            description: "In addition to training, we also provide guidance and the resources learners need to apply Agile concepts effectively."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: "ICP",
            courseName: "ICAgile (ICP) Fundamentals Certification Training",
            dateRange: "Mar 15 - Mar 16, 2026",
            timeRange: "09:00 AM - 05:00 PM IST",
            trainerName: "Ram Srinivasan",
            trainerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
            originalPrice: "INR 25,000",
            discountedPrice: "INR 18,500",
            discountPercentage: "26",
        },
    ];

    const certificateBenefits = [
        "Globally recognized ICAgile (ICP) Credential",
        "Lifetime Validity (No Renewal Fee)",
        "Downloadable Digital Badge for LinkedIn",
        "Expert Mentorship and Career Guidance"
    ];

    const heroData = {
        courseName: "ICAgile Agile Fundamental (ICP) Certification Course Training",
        breadcrumbName: "Agile Fundamentals ICAgile (ICP) Certification Course",
        rating: "5.0",
        enrolledCount: "12k+",
        subtitle: "Master the Agile Mindset and Collaborative Frameworks with Global Recognition",
        benefits: [
            "Join 14 Hours of Live Immersive ICP Fundamental Training with Experts",
            "Earn 14 PDUs and SEUs | Learn 'being' Agile and 'doing' Agile",
            "Access ICAgile Approved Learning Materials",
            "In-depth ICP Fundamental Training with Real-world Simulations",
            "Get ICAgile Fundamental Certification for Lifetime Validation"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png",
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "ICAgile (ICP) Fundamental Training Course Overview",
        description: [
            "The ICAgile Fundamental course offered by Simpliaxis introduces the core Agile concepts, values, and principles necessary to build a solid foundation for Agile ways of working across teams and domains.",
            "Participants explore the history of Agile, the Agile mindset, value-driven development, customer involvement, adaptive planning, and continuous improvement, rather than emphasizing a single framework.",
            "The training is highly interactive, featuring real-world scenarios and practical exercises to help you apply Agile thinking immediately in your workplace."
        ],
        whatIsTitle: "What is the Agile Fundamentals ICP Course?",
        whatIsDescription: [
            "The Agile Fundamentals ICP course is a comprehensive training program that helps professionals understand how to apply Agile thinking in real-world business environments.",
            "The training emphasizes practical behaviors, collaboration patterns, and decision-making approaches that support Agile teams beyond theory."
        ],
        whatsIncludedTitle: "What’s Included in Our Training Program?",
        whatsIncludedDescription: [
            "14 Hours of Live Instructor-Led Training",
            "ICAgile (ICP) Fundamental Certification",
            "14 PDUs and SEUs",
            "Lifetime Access to Course Materials",
            "Practical Assessments and Case Studies"
        ],
        skillsTitle: "Skills Covered in the Program",
        skills: [
            "Strong Agile Mindset",
            "Team Collaboration & Communication",
            "Adaptive Planning and Response",
            "Customer-focused Value Delivery",
            "Continuous Process Improvement",
            "Global Agile Standards & Ethics"
        ],
        modesTitle: "Training Modes",
        modesDescription: [
            "Simpliaxis offers flexible delivery modes including instructor-led online training for live, interactive sessions with accredited trainers. We also provide customized corporate training programs tailored to organizational requirements."
        ],
    };

    const corporateData = {
        courseName: "Corporate ICAgile Training Solutions",
        label: "Team Training",
        buttonText: "Corporate Enquiry",
        description: "Empower your teams with the Agile mindset. We offer tailored ICAgile training solutions designed to streamline workflows and improve organizational agility."
    };

    const courseMetadata = {
        shortName: "ICP",
        shortNameAlt: "ICP",
        fullName: "ICAgile Certified Professional (ICP)",
        fullNameAlt: "Agile Fundamentals (ICP)",
        certificateName: "ICAgile Fundamental",
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your ICAgile Fundamental Certification, you will be equipped to lead and participate in Agile transformations, driving efficiency and innovation in your organization.",
        },
        prerequisites: {
            subtitle: "What are the Requirements for ICAgile Fundamental Training?",
        },
        certificate: {
            mockupName: "ALEX BRYANT",
            label: "Global Credential",
            titlePrefix: "Get Your",
            titleHighlight: "ICAgile",
            titleSuffix: "Certification",
            issuerName: "ICAgile",
            certificateType: "Certified Professional",
            certifyText: "This is to certify that",
            requirementText: "Has successfully fulfilled all learning outcomes to be recognized as an",
            signer1Role: "Authorized Instructor",
            signer2Role: "Director of Education",
        },
    };

    const commonAttendeesList = [
        "Software Developers",
        "Project Managers",
        "Team Leads",
        "Business Analysts",
        "Product Managers",
        "Agile Coaches",
        "Department Heads",
        "Change Agents"
    ];

    const pageCaptions = {
        tabs: {
            overview: "Course overview",
            benefits: "Benefits",
            prerequisites: "Prerequisites",
            curriculum: "Curriculum",
            faqs: "FAQs",
        },
        hero: {
            referEarnText: "Refer & Earn",
            enrolledSuffix: "Enrolled",
            moneyBackText: "100% Money Back",
            ltpLabel: "LTP of ICAgile",
            downloadBtnText: "Download Brochure",
            viewSchedulesBtnText: "View Schedules",
            freeAssessmentBtnText: "Free Assessment",
        },
    };

    const tabs = [
        {
            id: 'overview',
            label: pageCaptions.tabs.overview,
            content: (
                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-none p-8 shadow-sm">
                        <h4 className="text-[14px] text-slate-500 font-bold mb-2 uppercase tracking-tight flex items-center gap-2">
                            {overviewContent.title}
                        </h4>
                        <h2 className="text-2xl md:text-3xl font-black text-[#001c3d] mb-6 flex items-center gap-2">
                            {overviewContent.subtitle}{" "}
                            <span className="text-blue-400">✦</span>
                        </h2>
                        <div className="space-y-5 text-slate-700 font-medium leading-[1.7] text-[15px]">
                            {overviewContent.description.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                                {overviewContent.whatIsTitle}
                            </h3>
                            {overviewContent.whatIsDescription.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}

                            <h3 className="text-2xl font-black text-[#001c3d] pt-4">
                                {overviewContent.whatsIncludedTitle}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2">
                                {overviewContent.whatsIncludedDescription.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <CourseHighlights
                        courseName={heroData.courseName}
                        highlights={highlights}
                    />
                    <CourseCareerUpliftment
                        courseName={heroData.courseName}
                        stats={careerStats}
                        attendees={attendees}
                        companies={companies}
                        outcomes={outcomes}
                        outcomesTitle={sectionsLabels.careerUpliftment.outcomesTitle}
                        outcomesFooter={sectionsLabels.careerUpliftment.outcomesFooter}
                    />
                </div>
            ),
        },
        {
            id: 'benefits',
            label: pageCaptions.tabs.benefits,
            content: (
                <div className="space-y-6">
                    <CourseBenefits
                        courseName={heroData.courseName}
                        individualBenefits={individualBenefits}
                        corporateBenefits={corporateBenefits}
                    />
                    <CourseCommonAttendees
                        courseName={heroData.courseName}
                        attendees={commonAttendeesList}
                    />
                </div>
            ),
        },
        {
            id: 'prerequisites',
            label: pageCaptions.tabs.prerequisites,
            content: (
                <div className="space-y-6">
                    <CoursePrerequisites
                        courseName={courseMetadata.shortNameAlt}
                        prerequisites={prerequisites}
                        subtitle={sectionsLabels.prerequisites.subtitle}
                        title={heroData.courseName}
                    />
                    <CourseStepByStepProcess
                        courseName={heroData.courseName}
                        steps={certificationSteps}
                    />
                    <CourseCertificate
                        courseName={courseMetadata.certificateName}
                        certificateBenefits={certificateBenefits}
                        mockupName={sectionsLabels.certificate.mockupName}
                        label={sectionsLabels.certificate.label}
                        titlePrefix={sectionsLabels.certificate.titlePrefix}
                        titleHighlight={sectionsLabels.certificate.titleHighlight}
                        titleSuffix={sectionsLabels.certificate.titleSuffix}
                        issuerName={sectionsLabels.certificate.issuerName}
                        certificateType={sectionsLabels.certificate.certificateType}
                        certifyText={sectionsLabels.certificate.certifyText}
                        requirementText={sectionsLabels.certificate.requirementText}
                        signer1Role={sectionsLabels.certificate.signer1Role}
                        signer2Role={sectionsLabels.certificate.signer2Role}
                    />
                </div>
            ),
        },
        {
            id: 'curriculum',
            label: pageCaptions.tabs.curriculum,
            content: (
                <div className="space-y-6">
                    <CourseCurriculum
                        courseName={courseMetadata.shortNameAlt}
                        modules={curriculumModules}
                    />
                </div>
            ),
        },
        {
            id: 'faqs',
            label: pageCaptions.tabs.faqs,
            content: (
                <CourseFAQs
                    courseName={courseMetadata.shortNameAlt}
                    categories={faqCategories}
                />
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <div className="sticky top-0 z-[60] h-2 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-600" />
            <Header />

            <main className="pt-16">
                <CourseHero
                    courseName={heroData.courseName}
                    breadcrumbName={heroData.breadcrumbName}
                    rating={heroData.rating}
                    enrolledCount={heroData.enrolledCount}
                    subtitle={heroData.subtitle}
                    benefits={heroData.benefits}
                    mainImage={heroData.mainImage}
                    badgeImage={heroData.badgeImage}
                    referEarnText={pageCaptions.hero.referEarnText}
                    enrolledSuffix={pageCaptions.hero.enrolledSuffix}
                    moneyBackText={pageCaptions.hero.moneyBackText}
                    ltpLabel={pageCaptions.hero.ltpLabel}
                    downloadBtnText={pageCaptions.hero.downloadBtnText}
                    viewSchedulesBtnText={pageCaptions.hero.viewSchedulesBtnText}
                    freeAssessmentBtnText={pageCaptions.hero.freeAssessmentBtnText}
                />

                <CourseFeatures features={courseFeatures} />

                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px] xl:grid-cols-[minmax(0,1fr)_360px]">
                        {/* Left Main Content */}
                        <div>
                            <CourseTabs tabs={tabs} />

                            <CourseLearningObjectives
                                courseName={heroData.courseName}
                                objectives={learningObjectives}
                            />

                            <CourseCorporateOptUs
                                courseName={corporateData.courseName}
                                description={corporateData.description}
                                label={corporateData.label}
                                buttonText={corporateData.buttonText}
                            />

                            <CourseClients clients={courseClients} />
                            <CourseTrainers trainers={courseTrainers} />
                            <CourseWhySimpliaxis features={courseWhySimpliaxis} />
                        </div>

                        {/* Right Side Panel */}
                        <div className="relative w-full lg:w-[340px] xl:w-[360px] lg:justify-self-end">
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

export default ICAgileICPFundamentalCertificationTraining;
