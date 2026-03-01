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

const AgileForManagersTraining = () => {
    const highlights = [
        { text: "An interactive workshop where participants are encouraged to share their thoughts and ideas, challenges, and apprehensions.", icon: <Star className="w-5 h-5" /> },
        { text: "Theoretical lectures accompanied by group exercises and case studies.", icon: <Star className="w-5 h-5" /> },
        { text: "The courseware is at par with international industry standards.", icon: <Star className="w-5 h-5" /> },
    ];

    const individualBenefits = [
        { title: "Strategic Agility", description: "Gain a strong understanding of Agile principles and management practices." },
        { title: "Effective Leadership", description: "Develop the ability to lead Agile teams effectively." },
        { title: "Operational Excellence", description: "Learn how to implement Agile frameworks within organizational workflows." },
        { title: "Informed Decision-making", description: "Improve decision-making and leadership skills in Agile environments." }
    ];

    const corporateBenefits = [
        { title: "Transformation Readiness", description: "Enable organizations to adopt Agile transformation successfully." },
        { title: "Stakeholder Alignment", description: "Improve collaboration between teams and leadership." },
        { title: "Delivery Efficiency", description: "Increase productivity through efficient Agile workflows." },
        { title: "High-Performing Teams", description: "Support managers in building high-performing Agile teams." }
    ];

    const careerStats = {
        averageSalary: "$95,000 - $125,000 per year",
        jobGrowth: "Increasing global demand for Agile management roles",
        topRoles: [
            "Agile Manager",
            "Agile Coach",
            "Project Manager",
            "Scrum Master",
            "Transformation Lead"
        ]
    };

    const attendeeList = [
        "Project Managers",
        "Team Leaders",
        "Senior Developers",
        "Product Owners",
        "Executives",
        "Anyone interested in Agile leadership"
    ];

    const attendeeGroups = [
        { group: attendeeList }
    ];

    const outcomeList = [
        "Understand Agile principles and leadership strategies",
        "Apply Agile frameworks like Scrum and Kanban effectively",
        "Manage Agile teams and remove organizational bottlenecks",
        "Drive Agile transformation within organizations"
    ];

    const prerequisites = [
        "No prior Agile certification is required",
        "Basic understanding of project management is helpful",
        "Interest in Agile methodologies and leadership"
    ];

    const certificationSteps = [
        { title: "Registration", description: "Enroll in the Agile for Managers workshop with Simpliaxis.", color: "#3B82F6" },
        { title: "Engagement", description: "Attend the instructor-led training sessions on both days.", color: "#F59E0B" },
        { title: "Collaboration", description: "Participate in discussions, exercises, and case studies.", color: "#10B981" },
        { title: "Completion", description: "Complete the workshop successfully to fulfill requirements.", color: "#8B5CF6" },
        { title: "Certification", description: "Receive the Agile for Managers certificate from Simpliaxis.", color: "#EF4444" }
    ];

    const curriculumModules = [
        {
            title: "Agile for Manager Workshop",
            topics: [
                "Agile What it is, Why and How It Evolved",
                "Agile Manifesto: 4 Values and 12 Principles",
                "Agile as a Mindset",
                "Key Benefits of using Agile",
                "Challenges of Agile",
                "ROI of Agile",
                "Agile Success Factors",
                "Team Fundamentals",
                "Agile Processes and Workflow: Scrum, Kanban, XP, SAFe",
                "Team Rituals",
                "Agile Implications for Individuals, Managers, Executives, and Organizations",
                "Creating your own agile adoption backlog to prioritize the next steps"
            ]
        }
    ];

    const faqCategories = [
        {
            id: "category_1",
            label: "Certification FAQs",
            items: [
                {
                    question: "1. Who is a certified Agile Manager?",
                    answer: "A certified Agile Manager understands Agile practices from a business perspective and leads Agile transformations by removing obstacles, motivating teams, and fostering a collaborative Agile culture."
                },
                {
                    question: "2. What are the prerequisites for attending the Agile for Managers workshop?",
                    answer: "There are no mandatory prerequisites for attending this workshop."
                },
                {
                    question: "3. What are the benefits of this course?",
                    answer: "This course helps managers understand Agile practices and equips them with the skills needed to lead Agile initiatives successfully."
                },
                {
                    question: "4. How can I obtain the Agile for Managers certification?",
                    answer: "Enroll in the workshop, attend the training sessions, and complete the course successfully to receive the certification."
                },
                {
                    question: "5. How long is the certification valid?",
                    answer: "The Agile for Managers certificate is valid for a lifetime."
                }
            ]
        },
        {
            id: "category_2",
            label: "Payment FAQs",
            items: [
                {
                    question: "1. What happens to my token or partial payment if I don’t enroll immediately?",
                    answer: "Token or partial payments will become non-refundable after 15 days from the date of payment. Any token or partial amount paid can be applied towards enrollment for any available sessions on our website within 6 months of the payment date.",
                },
                {
                    question: "2. Is there a preferred currency for payment, especially for international students?",
                    answer: "While we accept payments in various currencies, we recommend using the currency from where you want to attend the course.",
                },
                {
                    question: "3. Can payments be made online through your website, or do I need to visit a physical location?",
                    answer: "Payments can be made conveniently through our secure online payment portal on our website. We do not require visiting a physical location for payment.",
                },
                {
                    question: "4. Do you offer any discounts or promotions for early payment?",
                    answer: "Yes, we offer discounts and promotions for early payments or certain corporate Training. Keep an eye on our website or contact us to get exciting offers.",
                },
                {
                    question: "5. Can I pay for the course in installments, or is full payment required upfront?",
                    answer: "You have the flexibility to pay for the course either in full upfront or in installments, depending on your preference. To know more details about it contact us.",
                },
                {
                    question: "6. Will I get a refund if I cancel my enrollment?",
                    answer: "No, refund is not possible. You can reschedule your course. To know more about refunds, visit our Refund Policy.",
                },
                {
                    question: "7. Where will I get my payment receipt?",
                    answer: "Upon successful completion of payment, you will receive a confirmation email of your payment along with payment invoices.",
                },
                {
                    question: "8. Is there any transaction or processing fee?",
                    answer: "No, there is no transaction processing fee.",
                },
                {
                    question: "9. What cards do you accept?",
                    answer: "We accept payments from VISA, Master, Maestro, AMEX, and Discover.",
                },
                {
                    question: "10. What payment options are available?",
                    answer: "All types of payment methods are available. You can pay Online through Credit Cards, Debit Cards and Net Banking, Direct Bank Transfer/Wire Transfer/Wallet to our account and many more. Other payment options available are stripe, Splitit, PayPal for US & CA regions.",
                },
            ],
        },
        {
            id: "category_3",
            label: "General FAQs",
            items: [
                {
                    question: "1. What if I miss a class? Are there any money back options?",
                    answer: "No, you won't get your money back. But, as per your convenience, we can reschedule your training without any extra charges.",
                },
                {
                    question: "2. If I want to know more about Training, whom should I connect with?",
                    answer: "If you want to know more about the course you can connect us in mail hello@simpliaxis.com or you can call us.",
                },
                {
                    question: "3. Is there any option to complete the Training in the native language if a participant chooses to?",
                    answer: "English is the preferred language for training delivery. For corporate Training, any language other than English will have to be requested as a custom service. However, this will be subject to additional costs and the availability of a native language trainer. Please note that only official languages will be considered for this request.",
                },
                {
                    question: "4. Can I receive personalized Training at my convenience?",
                    answer: "Yes, we’ll be posting multiple schedules every week for all the courses. Based on your convenience, you can select the training schedule. Also, we’ve E-Learning programs for popular courses, you can enroll and watch the training modules whenever you want.",
                },
                {
                    question: "5. Where do I find the upcoming schedules of my course?",
                    answer: "Select the course of your interest from the website and view all the upcoming workshop schedules. You can select your course from the website https://www.simpliaxis.com/",
                },
                {
                    question: "6. After enrollment, can I change the date of my training class?",
                    answer: "Yes, you can change the date, but you have to inform it 3-4 days before the Scheduled date.",
                },
                {
                    question: "7. Do I get any certificate upon completion of the course?",
                    answer: "Yes, you will receive a certificate after successful completion of the training course.",
                },
                {
                    question: "8. How do I enroll in the training course?",
                    answer: "Choose the course of your interest, schedule it at your convenience from our upcoming schedule list, and register for the training by submitting your details. Proceed to make a payment and you will receive a confirmation email of your course enrolment. Or you can connect our career advisors to consult & choose your course.",
                },
                {
                    question: "9. What are the different courses offered by Simpliaxis?",
                    answer: "At Simpliaxis we provide training for courses of all the in-demand technologies. One can choose a course from Project Management, Agile, IT, DevOps, Business, IT Service Management, Quality Management, etc based on their choice of interest. To know more, please visit https://www.simpliaxis.com/",
                },
                {
                    question: "10. What are the different modes of Training available for Simpliaxis courses?",
                    answer: "We provide different modes of Training: virtual Online Training, Live Virtual Training, Corporate Training & also E-learning.",
                },
                {
                    question: "11. Do you offer online Training?",
                    answer: "Yes, For every course, online Training is available.",
                },
                {
                    question: "12. Do you offer corporate Training?",
                    answer: "Yes, we do provide corporate Training. We customize Training based on our clients' needs.",
                },
                {
                    question: "13. Who are the instructors of my course?",
                    answer: "All our trainers are highly qualified and certified, having numerous years of experience in the training industry. You can choose your instructors for your course.",
                },
                {
                    question: "14. Is there any discount available for the Simpliaxis courses?",
                    answer: "Yes, we do provide discounts on multiple courses. Please visit the schedules page to view the available discounts.",
                },
                {
                    question: "15. Whom do I contact if I have more queries regarding my course?",
                    answer: "You can reach out to our experienced career counselor or email us on support@simpliaxis.com or contact any of our phone numbers or you can chat with us anytime or visit our contact us page https://www.simpliaxis.com/contact-us",
                },
                {
                    question: "16. Are your courses affordable?",
                    answer: "Yes, course fees for all technologies are affordable. Along with that, we do provide discounts on various courses.",
                },
                {
                    question: "17. Why should I choose Simpliaxis?",
                    answer: "Simpliaxis offers personalized corporate training programs designed for enterprise teams seeking to refine their employees' skills in various job processes or roles, whether through in-person sessions or live virtual instruction. Led by our skilled and certified trainers, these certification programs not only elevate learning curves but also empower teams to effectively apply their newfound skills to meet industry benchmarks. With over 40 certification programs available, the impact is profound, evident in a remarkable 45% improvement in employee retention rates. On average, there's been a notable 30% enhancement in both work satisfaction and capabilities, showcasing the tangible benefits of our training initiatives.",
                },
                {
                    question: "18. What is the object of Simpliaxis?",
                    answer: "To provide high-quality training and help our professional participants & clients to build a high-performing workforce.",
                },
                {
                    question: "19. How much discount will I get if I enroll for the Training?",
                    answer: "It totally depends upon the course. Please check our website regularly for new offers and discounts throughout the year. You can also chat with one of our career consultants to see if any discounts are available.",
                },
            ],
        },
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
            name: 'Ram Srinivasan',
            role: 'Certified Scrum Trainer (CST)',
            rating: '4.8',
            experience: '15+ Years',
            description:
                'Ram Srinivasan has a unique distinction of being the first and only person in North America to lead workshops that bridge the gap between business and technology.',
            image:
                'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Axel Wilhelm Berle',
            role: 'Senior Agile Coach',
            rating: '4.9',
            experience: '20+ Years',
            description:
                'Axel Wilhelm Berle has been an international IT consultant and software developer in a wide range of industries, helping teams achieve peak performance.',
            image:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
        },
        {
            name: 'Raquel Silva',
            role: 'Agile Coach & Mentor',
            rating: '4.8',
            experience: '10+ Years',
            description:
                'Raquel Silva is an Agile Coach who cares passionately about helping deliver value to clients through sustainable and effective Scrum practices.',
            image:
                'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
        },
    ];

    const courseWhySimpliaxis = [
        {
            title: "Global Recognition",
            description: "Every Course is recognized by the most reputable certification organizations globally that ensure credibility and acceptance in all industries."
        },
        {
            title: "Expert Trainers",
            description: "Learn from experienced professionals who bring real-world knowledge and practical insights."
        },
        {
            title: "Flexible Learning",
            description: "Choose from classroom sessions, live virtual training, or corporate programs that suit your schedule."
        },
        {
            title: "Lifetime Access",
            description: "Get continuous access to course materials, recordings, and learning resources."
        },
        {
            title: "Proven Track Record",
            description: "A trusted training provider helping professionals and organizations achieve career and business growth."
        },
        {
            title: "End-to-End Support",
            description: "Receive guidance before, during, and after training, including certification and career assistance."
        },
        {
            title: "Interactive Training Experience",
            description: "Engage in real-world scenarios, group discussions, and hands-on activities."
        },
        {
            title: "Wide Range of Courses",
            description: "Simpliaxis offers various internationally acknowledged certification courses in Agile, Scrum, SAFe, DevOps, Project Management, and more."
        }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'AMW',
            courseName: 'Agile for Managers Training',
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Expert Trainer',
            trainerImage:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 24,999',
            discountedPrice: 'INR 14,999',
            discountPercentage: '40',
        },
    ];

    const certificateBenefits = [
        'Digital Badge for LinkedIn & PDF Copy',
        'Access to Premium Alumni Network',
        'Validity for Lifetime',
        'Lifetime Access to Course Materials',
    ];

    const heroData = {
        courseName: "Agile for Managers Training",
        breadcrumbName: "Agile for Managers Training Course | Agile for Managers Certification",
        rating: "5.0",
        enrolledCount: "1800+ professionals trained",
        subtitle: "Learn how to lead Agile teams and drive successful Agile transformation.",
        benefits: [
            "Instructor-led interactive workshop",
            "Practical Agile leadership techniques",
            "Industry-recognized certification"
        ],
        mainImage: "https://www.simpliaxis.com/../frontend_assets/image/ring_loader.gif",
        badgeImage: "/csm-badge.png",
    };

    const overviewContent = {
        title: "Course Overview",
        subtitle: "Course Overview",
        description: [
            "The Agile for Managers workshop helps managers understand Agile principles and how they influence leadership, team collaboration, and organizational transformation.",
            "Participants learn how to apply Agile practices, remove obstacles for teams, and guide organizations toward successful Agile adoption."
        ],
        whatIsTitle: "What is Agile Management?",
        whatIsDescription: [
            "Agile management focuses on leading teams using Agile values and principles to improve collaboration, productivity, and adaptability in modern organizations."
        ],
        whatsIncludedTitle: "What's Included",
        whatsIncludedDescription: [
            "Case studies and real-world examples",
            "Group discussions and exercises",
            "Certification upon completion"
        ],
        skillsTitle: "Skills You Will Gain",
        skills: [
            "Agile leadership",
            "Team collaboration",
            "Agile transformation strategies",
            "Agile project management",
            "Decision-making in Agile environments"
        ],
    };

    const corporateData = {
        courseName: "Why Corporate Opt Us",
        label: "",
        buttonText: "Corporate Group Enquiry",
        description: "Simpliaxis delivers customized corporate training programs designed to help organizations enhance workforce capabilities and stay competitive. Our expert trainers provide tailored modules that help enterprises adopt Agile practices, improve leadership effectiveness, and build high-performing teams.",
    };

    const courseMetadata = {
        shortName: 'AMW',
        shortNameAlt: 'AMW',
        fullName: 'Agile for Managers Training',
        fullNameAlt: 'Agile for Managers Training',
        certificateName: 'Agile for Managers',
    };

    const sectionsLabels = {
        careerUpliftment: {
            outcomesTitle:
                `What are the Learning Outcomes of the ${heroData.courseName} Course?`,
            outcomesFooter:
                "After completing your Agile for Managers Training, a wide selection of career options will open up, and one can explore enhancements in one's career path. One can lead to higher positions in the job profile and the organization.",
        },
        prerequisites: {
            subtitle:
                'What are the Prerequisites Required for Agile for Managers Training?',
        },
        certificate: {
            mockupName: 'ALEX BRYANT',
            label: 'Official Accreditation',
            titlePrefix: 'Earn Your',
            titleHighlight: 'Agile',
            titleSuffix: 'Recognition',
            issuerName: 'Simpliaxis',
            certificateType: 'Certificate of Achievement',
            certifyText: 'This is to certify that',
            requirementText:
                'Has successfully fulfilled all requirements to be recognized as an',
            signer1Role: 'Certified Trainer',
            signer2Role: 'Executive Director',
        },
    };

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
            ltpLabel: 'Simpliaxis Leading Training Provider',
            downloadBtnText: 'Download Brochure',
            viewSchedulesBtnText: 'View Schedules',
            freeAssessmentBtnText: 'Free Assessment',
        },
    };

    const companyList = [
        { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
        { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
        { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
        { name: 'IBM', url: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
        { name: 'Accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
        { name: 'Deloitte', url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg' }
    ];

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
                        stats={{
                            averageIncome: careerStats.averageSalary,
                            incomeLabel: 'Average annual salary',
                            employmentGrowth: careerStats.jobGrowth,
                            growthLabel: 'Job growth projection',
                        }}
                        attendees={attendeeGroups}
                        companies={companyList}
                        outcomes={outcomeList}
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
                        attendees={attendeeList}
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
                                objectives={[]}
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

export default AgileForManagersTraining;
