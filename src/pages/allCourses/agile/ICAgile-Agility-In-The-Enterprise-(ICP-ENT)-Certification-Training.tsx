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

const ICAgileAgilityInTheEnterpriseICPentCertificationTraining = () => {
    const highlights = [
        { text: "14 hours of training that imparts the skills of agility in an enterprise", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Interactive sessions conducted by ICAgile Certified Professionals", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Experienced trainers who are professional Agile coaches working in organizations", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Hard copy of the courseware accredited by ICAgile", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Gain the ICP-ENT credential with lifetime validity", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Post-training guidance and assistance", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        {
            title: "Advanced Enterprise Agile Coaching Skills",
            description: "Individuals develop the ability to train team members at scale in organizations using enterprise Agile coaching practices aligned with the ICAgile framework."
        },
        {
            title: "Career Growth into Strategic Agile Roles",
            description: "Certified professionals get the best way to position themselves for senior roles, such as Enterprise Agile Coach or Transformation Lead, within large organizations."
        },
        {
            title: "Stronger Leadership and Influence Capability",
            description: "ICP-ENT-certified individuals build the skills needed to work with executives and leadership teams to drive Agile adoption."
        },
        {
            title: "Expertise in Organizational Change Management",
            description: "Professionals, after completing the ICP-ENT course, gain practical knowledge to guide cultural, structural, and behavioral change in complex enterprises."
        },
        {
            title: "Improved Systems Thinking and Diagnosis",
            description: "Individuals learn how to identify organizational constraints and design effective Agile interventions."
        },
        {
            title: "Globally Recognized ICAgile Credential",
            description: "Professionals earn a respected ICAgile ICP-ENT certification valued by enterprises adopting business agility."
        }
    ];

    const corporateBenefits = [
        {
            title: "Accelerated Enterprise Agile Transformation",
            description: "Organizations benefit from trained coaches who can guide Agile adoption across portfolios and value streams."
        },
        {
            title: "Improved Alignment Between Strategy and Execution",
            description: "Enterprise Agile coaching helps align leadership goals with delivery teams."
        },
        {
            title: "Sustainable Agile Culture Development",
            description: "ICP-ENT certification encourages long-term Agile maturity beyond short-term process implementation."
        },
        {
            title: "Stronger Leadership Engagement in Agile Practices",
            description: "Leaders receive effective coaching through the ICP-ENT course that supports informed decision-making and Agile governance."
        },
        {
            title: "Improved Value Flow and Delivery Predictability",
            description: "Organizations experience smoother delivery by addressing systemic bottlenecks and dependencies."
        },
        {
            title: "Reduced Reliance on External Agile Consultants",
            description: "Internal enterprise Agile coaches with ICP-ENT certification minimize long-term transformation costs and improve continuity."
        }
    ];

    const careerStats = {
        averageIncome: "$120k-160k",
        incomeLabel: "per annum",
        employmentGrowth: "72%",
        growthLabel: "(2023-2026)",
    };

    const attendees = [
        {
            group: [
                "Agile Coaches",
                "Scrum Masters",
                "Product Owners",
                "Transformation Leads",
                "Program Managers",
                "Departmental Heads",
                "HR Professionals",
                "Change Agents"
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
        "Gain the ability to coach leaders and teams across enterprise-level Agile systems.",
        "Understand how to apply systems thinking to diagnose organizational challenges.",
        "Develop skills to guide cultural and behavioral change in Agile transformations.",
        "Strengthen capability to align strategy, execution, and value delivery.",
        "Learn to improve flow and reduce constraints across portfolios and value streams.",
        "Build confidence in coaching executives and senior stakeholders.",
        "Apply enterprise Agile coaching practices to sustain long-term organizational agility."
    ];

    const prerequisites = [
        "Prior completion of ICAgile certifications such as ICP-ACC or ICP-ATF is recommended",
        "Hands-on experience working in Agile or Lean environments",
        "Exposure to coaching, facilitation, or organizational change initiatives",
        "Experience supporting multiple teams, programs, or portfolios",
        "Ability to engage with leaders and stakeholders at different levels"
    ];

    const certificationSteps = [
        {
            title: "Enroll for the Course",
            description: "Register for the ICP-ENT course through an authorized provider, such as Simpliaxis, to receive ICAgile-accredited instruction and materials.",
            color: "#3B82F6"
        },
        {
            title: "Attend the Training",
            description: "Participate fully in instructor-led sessions that focus on enterprise coaching patterns, organizational change, and large-scale Agile adoption.",
            color: "#F59E0B"
        },
        {
            title: "Complete Learning Activities and Assessments",
            description: "Engage in workshops, discussions, and practical exercises that demonstrate your understanding of enterprise-level Agile coaching concepts.",
            color: "#10B981"
        },
        {
            title: "Receive ICP-ENT Certification",
            description: "Upon successful completion of the course requirements, ICAgile awards the ICP-ENT credential, recognizing your capability to coach Agile transformation at the enterprise level.",
            color: "#EF4444"
        }
    ];

    const curriculumModules = [
        {
            title: "Enterprise and Business Agility",
            topics: [
                "Business Agility Concepts",
                "Systems and Complexity Theory",
                "Enterprise Agile Coaching Skills",
                "Ethical Considerations"
            ]
        },
        {
            title: "Understanding the Organization",
            topics: [
                "Organization Systems Entry",
                "Scaling Agile Frameworks",
                "Organizational Structure and Design",
                "Business Processes Improvements",
                "Performance Measurements"
            ]
        },
        {
            title: "Coaching Across the Organization",
            topics: [
                "Systems Coaching",
                "Consulting vs Professional Coaching",
                "Boundary-Spanning Facilitation",
                "Facilitation Techniques"
            ]
        }
    ];

    const learningObjectives = [
        {
            title: "Understand Enterprise Agile Systems",
            description: "Learn how Agile operates across portfolios, programs, and value streams within complex enterprise environments."
        },
        {
            title: "Develop Organizational Coaching Skills",
            description: "Build the ability to coach leaders, managers, and teams to support lasting Agile transformation."
        },
        {
            title: "Enable Business Agility at Scale",
            description: "Understand how to align strategy, execution, and governance to improve enterprise agility."
        },
        {
            title: "Guide Cultural and Behavioral Change",
            description: "Learn coaching approaches that influence mindset shifts and support organizational change."
        },
        {
            title: "Support Leadership and Executive Alignment",
            description: "Develop skills to work with senior leadership to foster Agile ways of working across the enterprise."
        },
        {
            title: "Improve Flow and Value Delivery",
            description: "Understand techniques to identify constraints and improve value flow across multiple teams."
        }
    ];

    const faqCategories = [
        {
            id: 'general',
            label: 'FAQ Courses',
            items: [
                {
                    question: "What is the Enterprise Agile Coaching (ICP-ENT) Certification course?",
                    answer: "The ICAgile ICP-ENT Course is an intermediate level ICAgile program designed for experienced Agile practitioners. It helps participants learn the ways to train leaders, influence organizational culture, and support enterprise-wide Agile transformation."
                },
                {
                    question: "Who should attend ICP-ENT training?",
                    answer: "The ICP-ENT Course is ideal for Agile coaches, enterprise coaches, transformation leads, and senior agile professionals who work across teams and leadership levels."
                },
                {
                    question: "Is there an exam for ICAgile Enterprise Agile Coaching (ICP-ENT) Certification?",
                    answer: "There is no formal exam for the ICP-ENT certification. You get the credential upon successful completion of the course and active participation."
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
    ];

    const courseWhySimpliaxis = [
        {
            title: "ICAgile-Authorized Training Provider",
            description: "Simpliaxis delivers the ICP-ENT certification through officially accredited ICAgile programs."
        },
        {
            title: "Expert-Led Enterprise Coaching",
            description: "Our ICP-ENT training is delivered by experienced Agile coaches who have led large-scale transformations."
        },
        {
            title: "Practical, Real-World Scenarios",
            description: "Participants work through enterprise case studies that reflect real organizational challenges and change dynamics."
        },
        {
            title: "Systems Thinking Focus",
            description: "Simpliaxis integrates systems thinking to help learners diagnose organizational constraints."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: "ICP-ENT",
            courseName: "ICAgile Agility in the Enterprise (ICP-ENT) Certification Training",
            dateRange: "Apr 05 - Apr 07, 2026",
            timeRange: "09:00 AM - 05:00 PM IST",
            trainerName: "Ram Srinivasan",
            trainerImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100",
            originalPrice: "INR 65,000",
            discountedPrice: "INR 48,500",
            discountPercentage: "25",
        },
    ];

    const certificateBenefits = [
        "Globally recognized ICAgile (ICP-ENT) Credential",
        "Lifetime Validity (No Renewal Fee)",
        "Downloadable Digital Badge for LinkedIn",
        "Expert Mentorship and Career Guidance"
    ];

    const heroData = {
        courseName: "ICAgile Enterprise Agile Coaching (ICP-ENT) Certification Training",
        breadcrumbName: "Agility in the Enterprise ICAgile (ICP-ENT) Certification Course",
        rating: "5.0",
        enrolledCount: "8k+",
        subtitle: "Master the Art of Enterprise-Level Agile Coaching and Transformation",
        benefits: [
            "Join 14 Hours of Live Immersive ICP-ENT Training with Experts",
            "Earn 14 PDUs and SEUs | Learn Enterprise Systems Thinking",
            "Access ICAgile Approved Learning Materials",
            "In-depth ICP-ENT Training with Real-world Simulations",
            "Get ICAgile ICP-ENT Certification for Lifetime Validation"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png",
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "ICAgile Enterprise Agile Coaching (ICP-ENT) Training Overview",
        description: [
            "The Enterprise Agile Coaching (ICP-ENT) course offered by Simpliaxis is tailored for experienced Agile practitioners who train teams, regardless of function, and influence organizational change.",
            "This 14-hour training program helps participants develop the mindset, skills, and approaches needed to train executives, leaders, and business units in complex environments.",
            "The training is highly interactive, featuring real-world scenarios and practical exercises to help you apply enterprise Agile thinking immediately."
        ],
        whatIsTitle: "What is the Enterprise Agile Coaching (ICP-ENT) Course?",
        whatIsDescription: [
            "The ICAgile ICP-ENT Course is an intermediate level Agile training program tailored for experienced professionals who guide large-scale organizations through Agile transformation.",
            "It focuses on leadership alignment, organizational culture, governance, and value delivery across multiple teams and portfolios."
        ],
        whatsIncludedTitle: "What’s Included in Our Training Program?",
        whatsIncludedDescription: [
            "14 Hours of Live Instructor-Led Training",
            "ICAgile Enterprise Agile Coaching (ICP-ENT) Certificate",
            "14 PDUs and SEUs",
            "Lifetime Access to Course Materials",
            "Practical Assessments and Case Studies"
        ],
        skillsTitle: "Skills Covered in the Program",
        skills: [
            "Systems Thinking",
            "Organizational Awareness",
            "Executive Coaching",
            "Adaptive Planning",
            "Business Agility at Scale",
            "Change Management Strategies"
        ],
        modesTitle: "Training Modes",
        modesDescription: [
            "Simpliaxis offers flexible delivery modes including instructor-led online training for live, interactive sessions with accredited trainers. We also provide customized corporate training programs."
        ],
    };

    const corporateData = {
        courseName: "Corporate Enterprise Agile Coaching Solutions",
        label: "Enterprise Solutions",
        buttonText: "Corporate Enquiry",
        description: "Scale business agility across your organization. We offer tailored enterprise coaching programs designed to align leadership and execution."
    };

    const courseMetadata = {
        shortName: "ICP-ENT",
        shortNameAlt: "ICP-ENT",
        fullName: "ICAgile Certified Professional in Enterprise Agile Coaching (ICP-ENT)",
        fullNameAlt: "Enterprise Agile Coaching (ICP-ENT)",
        certificateName: "ICAgile Enterprise Agile Coaching",
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle: `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter: "After completing your ICAgile ICP-ENT Certification, you will be equipped to lead organizational transformations and coach executives effectively.",
        },
        prerequisites: {
            subtitle: "What are the Requirements for ICP-ENT Training?",
        },
        certificate: {
            mockupName: "ALEX BRYANT",
            label: "Global Credential",
            titlePrefix: "Get Your",
            titleHighlight: "ICAgile",
            titleSuffix: "Certification",
            issuerName: "ICAgile",
            certificateType: "Enterprise Agile Coach",
            certifyText: "This is to certify that",
            requirementText: "Has successfully fulfilled all learning outcomes to be recognized as an",
            signer1Role: "Authorized Instructor",
            signer2Role: "Director of Education",
        },
    };

    const commonAttendeesList = [
        "Agile Coaches",
        "Transformation Leads",
        "Scrum Masters",
        "Program Managers",
        "Change Agents",
        "Department Heads"
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

export default ICAgileAgilityInTheEnterpriseICPentCertificationTraining;
