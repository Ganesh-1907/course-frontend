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
    Star
} from "lucide-react";

const ProjectManagementProfessionalCertificationTraining = () => {
    const highlights = [
        { "text": "35 hours of PMI-authorized PMP certification training" },
        { "text": "2000+ practice questions and mock exams for exam readiness" },
        { "text": "Learn from PMI Authorized Training Partner instructors" },
        { "text": "Hands-on learning with real-world case studies" },
        { "text": "End-to-end PMP exam application assistance" }
    ];

    const individualBenefits = [
        {
            "title": "Individual Benefits",
            "description": "Strengthen your professional credibility with globally recognized project management certification."
        },
        {
            "title": "Individual Benefits",
            "description": "Improved Project Management Skills: Gain advanced skills for effective project planning, execution, and monitoring."
        },
        {
            "title": "Individual Benefits",
            "description": "Enhanced Leadership Abilities: Learn how to lead teams effectively and manage stakeholders successfully."
        },
        {
            "title": "Individual Benefits",
            "description": "Increased Earning Potential: PMP-certified professionals can earn up to 20% more than their non-certified peers."
        },
        {
            "title": "Individual Benefits",
            "description": "Professional Recognition: Demonstrate your expertise and commitment to the project management profession."
        },
        {
            "title": "Individual Benefits",
            "description": "Career Advancement Opportunities: Certification opens doors to higher-level project management roles."
        }
    ];

    const corporateBenefits = [
        {
            "title": "Corporate Benefits",
            "description": "Enhanced Project Governance: Implement globally recognized project management standards."
        },
        {
            "title": "Corporate Benefits",
            "description": "Consistent Project Outcomes: Standardized project management practices deliver predictable results."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improved Team Collaboration: Certified project managers help teams work more efficiently."
        },
        {
            "title": "Corporate Benefits",
            "description": "Increased Efficiency: PMP-trained teams can complete projects up to 40% faster with fewer errors."
        },
        {
            "title": "Corporate Benefits",
            "description": "Improved Strategic Alignment: Projects are aligned more closely with organizational goals."
        }
    ];

    const careerStats = {
        averageIncome: '$90,000 - $150,000',
        incomeLabel: 'per annum',
        employmentGrowth: '20%',
        growthLabel: 'Salary Increase',
    };

    const attendees = [
        {
            "group": [
                "Master essential project management skills required for professional success.",
                "Develop analytical and problem-solving skills necessary for effective project management.",
                "Connect with a global network of project management professionals.",
                "Learn from international experts through discussions, case studies, and practical exercises.",
                "Prepare thoroughly for the PMP certification exam and advance your career."
            ]
        }
    ];

    const companies = [
        {
            name: 'Amazon',
            url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
            name: 'Microsoft',
            url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        },
        {
            name: 'Google',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        },
        {
            name: 'IBM',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Deloitte',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
        {
            name: 'Siemens',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
        }
    ];

    const outcomes = [
        "Master essential project management skills and knowledge for career growth.",
        "Develop strong analytical and problem-solving skills for project success.",
        "Build a professional network within the global project management community.",
        "Gain practical experience through real-world project case studies.",
        "Prepare confidently for the PMP certification exam."
    ];

    const prerequisites = [
        "Basic understanding of project management concepts.",
        "A secondary degree with 5 years of project management experience, or",
        "A four-year degree with 3 years of project management experience.",
        "Completion of 35 hours of formal project management education."
    ];

    const certificationSteps = [
        {
            "title": "Eligibility Check",
            "description": "Verify that your academic qualifications and professional project management experience meet PMI’s PMP certification eligibility requirements."
        },
        {
            "title": "Application Submission",
            "description": "Complete and submit your PMP application through the official PMI website with accurate project and educational details."
        },
        {
            "title": "Exam Preparation",
            "description": "Attend Simpliaxis’ PMI-authorized PMP training to learn core concepts, practice with mock tests, and strengthen exam readiness."
        },
        {
            "title": "Certification Exam",
            "description": "Schedule and take the PMP exam through Pearson VUE. Upon passing, earn the globally recognized PMP credential."
        }
    ];

    const curriculumModules = [
        { "title": "Module 1: Introduction to Project Management", "topics": [] },
        { "title": "Module 2: Project Integration Management", "topics": [] },
        { "title": "Module 3: Project Scope Management", "topics": [] },
        { "title": "Module 4: Project Schedule Management", "topics": [] },
        { "title": "Module 5: Project Cost Management", "topics": [] },
        { "title": "Module 6: Project Quality Management", "topics": [] },
        { "title": "Module 7: Project Resource Management", "topics": [] },
        { "title": "Module 8: Project Communication Management", "topics": [] },
        { "title": "Module 9: Project Risk Management", "topics": [] },
        { "title": "Module 10: Project Procurement Management", "topics": [] },
        { "title": "Module 11: Project Stakeholder Management", "topics": [] }
    ];
    const learningObjectives = [
        {
            "title": "Understand Project Management Framework",
            "description": "Grasp the core principles and processes defined in the PMBOK Guide."
        },
        {
            "title": "Master Integration Management",
            "description": "Learn to coordinate all aspects of a project for successful delivery."
        },
        {
            "title": "Scope, Schedule, and Cost",
            "description": "Develop skills to manage project constraints effectively."
        },
        {
            "title": "Quality and Resource Management",
            "description": "Ensure project deliverables meet standards and resources are optimized."
        },
        {
            "title": "Risk and Stakeholder Management",
            "description": "Identify risks and engage stakeholders to ensure project support."
        }
    ];
    const faqCategories = [
        {
            "id": "category_1",
            "label": "General Questions",
            "items": [
                {
                    "question": "What is the PMP Certification?",
                    "answer": "The Project Management Professional (PMP) is a globally recognized professional designation offered by the Project Management Institute (PMI)."
                },
                {
                    "question": "What are the requirements for PMP?",
                    "answer": "Requirements include a secondary degree with 5 years of experience or a four-year degree with 3 years of experience, plus 35 hours of project management education."
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
            name: 'Amazon',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
        },
        {
            name: 'Microsoft',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
        },
        {
            name: 'Google',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
        },
        {
            name: 'IBM',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
        },
        {
            name: 'Deloitte',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg',
        },
        {
            name: 'Siemens',
            logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Siemens-logo.svg',
        }
    ];

    const courseTrainers = [
        {
            name: 'Ram Srinivasan',
            role: 'PMP® Certified Trainer',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram Srinivasan is a highly experienced project management professional with over 15 years of experience in delivering PMP training and leading complex projects.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Project Management Consultant',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel has a proven track record of helping organizations implement effective project management strategies and achieve their strategic goals.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Raquel Silva',
            role: 'PMP® Mentor & Coach',
            rating: '4.8',
            experience: '10+ Years',
            description:
                'Raquel is passionate about helping project managers develop their skills and achieve their career goals through structured PMP mentorship.',
            image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
    ];

    const courseWhySimpliaxis = [
        {
            "title": "PMI Authorized Training Partner",
            "description": "Viovn is an officially recognized PMI Authorized Training Partner (ATP), ensuring you receive the highest quality of PMP exam preparation and official PMI content."
        },
        {
            "title": "Expert Trainers with Real-World Experience",
            "description": "Our training is led by seasoned PMP-certified professionals who have managed large-scale projects and bring practical insights into the classroom."
        },
        {
            "title": "Proven Track Record",
            "description": "Thousands of professionals have successfully achieved their PMP certification with our guidance, advancing their careers significantly."
        },
        {
            "title": "Comprehensive Exam Readiness",
            "description": "We focus on the three PMP domains—People, Process, and Business Environment—ensuring you are fully prepared to pass the exam on your first attempt."
        },
        {
            "title": "Flexible Training Options",
            "description": "Select from various delivery formats, including live online classes and customized corporate programs tailored to your organizational needs."
        },
        {
            "title": "PMP Exam Application Support",
            "description": "Our experts provide end-to-end assistance for your PMP application process, ensuring your project experience is documented correctly according to PMI standards."
        }
    ]

    const sidePanelSchedules = [
        {
            courseCode: 'PMP',
            courseName: 'Project Management Professional (PMP)® Certification Training',
            dateRange: 'Feb 28 - Mar 01, 2026',
            timeRange: '08:30 AM - 04:30 PM IST',
            trainerName: 'Naveen Nanjundappa',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 49,080',
            discountedPrice: 'INR 34,356',
            discountPercentage: '30',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for 2 Years with SEUs/PDUs',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        "courseName": "Project Management Professional (PMP)® Certification Training",
        "breadcrumbName": "PMP Certification Training",
        "rating": "5.0",
        "enrolledCount": "1.5 Million+",
        "subtitle": "Master the skills and knowledge required to lead projects successfully with the world's leading project management certification.",
        "benefits": [
            "35 hours of PMI-authorized PMP certification training",
            "2000+ practice questions and mock exams",
            "Learn from PMI Authorized Training Partner instructors",
            "Hands-on learning with real-world case studies",
            "End-to-end PMP exam application assistance"
        ],
        "mainImage": "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/pmp-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": "Overview of PMP® Certification Training",
        "description": [
            "The Project Management Professional (PMP) certification is the world's leading project management certification. Now including predictive, agile and hybrid approaches, the PMP® proves project leadership experience and expertise in any way of working. It supercharges careers for project leaders across industries and helps organizations find the people they need to work smarter and perform better."
        ],
        "whatIsTitle": "What is PMP® Certification?",
        "whatIsDescription": [
            "The PMP certification validates that you have the project leadership skills employers seek. The new PMP includes three domains: People, Process, and Business Environment. By earning the PMP, you prove you have the skills to lead projects with any methodology."
        ],
        "whatsIncludedTitle": "What’s Included in the PMP® Training",
        "whatsIncludedDescription": [
            "35 contact hours of formal project management education, PMI-authorized course materials, practice exams, and application support."
        ],
        "skillsTitle": "Skills Covered in PMP® Training",
        "skills": [
            "Project Integration Management",
            "Scope Management",
            "Schedule Management",
            "Cost Management",
            "Quality Management",
            "Resource Management",
            "Communications Management",
            "Risk Management",
            "Procurement Management",
            "Stakeholder Management"
        ],
        "modesTitle": "Training Modes Available",
        "modesDescription": [
            "We offer live instructor-led online training and corporate group training sessions to suit your schedule and organizational needs."
        ]
    };

    const corporateData = {
        "courseName": "Why SimpliAxis Is Preferred by Corporates",
        "label": "",
        "buttonText": "Corporate Group Enquiry",
        "description": "SimpliAxis provides customized corporate training solutions designed to close skill gaps, enhance workforce capabilities, and support enterprise-wide Agile transformation through expert-led learning programs."
    };

    const courseMetadata = {
        shortName: 'PMP',
        shortNameAlt: 'PMP',
        fullName: 'Project Management Professional (PMP)®',
        fullNameAlt: 'Project Management Professional (PMP)',
        certificateName: 'Project Management Professional',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter:
                "After completing your Certified Scrum Master® Certification, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
        },
        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for PMP® Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Global',
            titleSuffix: 'Recognition',
            issuerName: 'Scrum Alliance',
            certificateType: 'Certificate of Mastery',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully fulfilled all requirements to be recognized as an',
            signer1Role: 'Certified Trainer',
            signer2Role: 'Executive Director',
        },
    };

    const commonAttendeesList = [
        'Project Managers',
        'Associate/Assistant Project Managers',
        'Team Leads',
        'Project Executives',
        'Software Developers',
        'Any professional aspiring to be a Project Manager',
    ];

    const pageCaptions = {
        tabs: {
            overview: 'Course overview',
            benefits: 'Benefits',
            prerequisites: 'Prerequisites',
            curriculum: 'Curriculum',
            faqs: 'FAQs',
        },
        hero: {
            referEarnText: 'Refer & Earn',
            enrolledSuffix: 'Enrolled',
            moneyBackText: '100% Money Back Guarantee',
            ltpLabel: 'Authorized Training Partner of PMI',
            downloadBtnText: 'Download Brochure',
            viewSchedulesBtnText: 'View Schedules',
            freeAssessmentBtnText: 'Free Assesment',
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
                            {overviewContent.subtitle}{' '}
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
                            <p>{overviewContent.whatsIncludedDescription}</p>
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

export default ProjectManagementProfessionalCertificationTraining;
