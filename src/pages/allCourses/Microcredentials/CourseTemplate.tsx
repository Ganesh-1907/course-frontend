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
    CheckCircle2,
    Star
} from "lucide-react";

const PlaceholderCourse = ({ courseName }: { courseName: string }) => {
    const highlights = [
        { text: "Live Instructor-based Online Training", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Learn with an Experienced Trainer", icon: <CheckCircle2 className="w-5 h-5" /> },
        { text: "Real-World Case Studies & Hands-On Practices", icon: <CheckCircle2 className="w-5 h-5" /> }
    ];

    const individualBenefits = [
        { "title": "Individuals Benefits", "description": "Acquire specialised knowledge in a specific area" },
        { "title": "Individuals Benefits", "description": "Choose how you learn with live or on-demand options" }
    ];

    const corporateBenefits = [
        { "title": "Corporate Benefits", "description": "Improve the organisation's agility and skills." }
    ];

    const careerStats = {
        averageIncome: "$90,000 - $140,000 per year",
        incomeLabel: "Salary for skilled professionals",
        employmentGrowth: "Growing demand",
        growthLabel: "in industry",
    };

    const attendeeList = [
        "Project Managers",
        "Team Leads",
        "Executives",
        "Professionals"
    ];

    const attendeeGroups = [{ group: attendeeList }];

    const companyList = [
        { "name": "Google", "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { "name": "Amazon", "url": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }
    ];

    const outcomeList = [
        "Apply specialized principles in real-world scenarios.",
        "Master frameworks for improved performance.",
        "Drive alignment and focus through new skills."
    ];

    const prerequisites = [
        "Basic understanding of the core concepts is recommended.",
        "Familiarity with Agile methodologies is beneficial."
    ];

    const certificationSteps = [
        { "title": "Attend Training", "description": "Complete the live training sessions.", "color": "#3B82F6" },
        { "title": "Earn Badge", "description": "Receive your digital credential.", "color": "#10B981" }
    ];

    const curriculumModules = [
        { "title": "Module 1: Fundamentals", "topics": ["Introduction to core concepts", "Strengths and weaknesses"] }
    ];

    const learningObjectives = [
        { "title": "Core Mastery:", "description": "Develop a strong understanding of fundamental values and principles." }
    ];

    const faqCategories = [
        {
            "id": "category_1",
            "label": "General FAQs",
            "items": [
                { "question": "What is this course about?", "answer": "This course covers everything you need to know about the subject." }
            ]
        }
    ];

    const courseFeatures = [
        { icon: Users, title: 'Live', subtitle: 'Training', color: 'bg-blue-50 text-blue-600' },
        { icon: BookOpen, title: 'Expert', subtitle: 'Trainers', color: 'bg-orange-50 text-orange-600' }
    ];

    const courseClients = [
        { "name": "Wells Fargo", "logo": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg" }
    ];

    const courseTrainers = [
        {
            name: 'Senior Specialist',
            role: 'Lead Strategist',
            rating: '5.0',
            experience: '15+ Years',
            description: 'Our trainers are industry leaders with extensive experience.',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
        }
    ];

    const courseWhyViovn = [
        { "title": "Global Recognition", "description": "Every Course is recognized globally." }
    ];

    const sidePanelSchedules = [
        {
            courseCode: 'COURSE',
            courseName: courseName,
            dateRange: 'Coming Soon',
            timeRange: 'Flexible',
            trainerName: 'Expert Trainer',
            trainerImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
            originalPrice: 'INR 15,000',
            discountedPrice: 'INR 10,000',
            discountPercentage: '33',
        },
    ];

    const heroData = {
        "courseName": courseName,
        "breadcrumbName": courseName,
        "rating": "5.0",
        "enrolledCount": "500+ professionals",
        "subtitle": "Master the skills needed to succeed in today's competitive landscape.",
        "benefits": ["Expert-led sessions", "Hands-on projects", "Global recognition"],
        "mainImage": "https://www.viovn.com/../frontend_assets/image/ring_loader.gif",
        "badgeImage": "/csm-badge.png"
    };

    const overviewContent = {
        "title": "Course Overview",
        "subtitle": `${courseName} Overview`,
        "description": [`This course is designed to provide you with the essential skills and knowledge in ${courseName}.`]
    };

    const tabs = [
        {
            id: 'overview',
            label: 'Course overview',
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
                        </div>
                    </div>

                    <CourseHighlights
                        courseName={heroData.courseName}
                        highlights={highlights}
                    />
                    <CourseCareerUpliftment
                        courseName={heroData.courseName}
                        stats={careerStats}
                        attendees={attendeeGroups}
                        companies={companyList}
                        outcomes={outcomeList}
                        outcomesTitle={`Learning Outcomes of ${heroData.courseName}`}
                        outcomesFooter={`Achieve your goals with ${heroData.courseName}.`}
                    />
                </div>
            ),
        }
    ];

    return (
        <div className="min-h-screen bg-white">
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
                    referEarnText="Refer & Earn"
                    enrolledSuffix="Enrolled"
                    moneyBackText="100% Money Back Guarantee"
                    ltpLabel="Viovn Leading Training Provider"
                    downloadBtnText="Download Brochure"
                    viewSchedulesBtnText="View Schedules"
                    freeAssessmentBtnText="Free Assessment"
                />
                <CourseFeatures features={courseFeatures} />
                <div className="container mx-auto py-12">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
                        <div>
                            <CourseTabs tabs={tabs} />
                            <CourseLearningObjectives courseName={heroData.courseName} objectives={learningObjectives} />
                            <CourseCorporateOptUs courseName="Corporate Training" description="Customized training for teams." label="" buttonText="Enquire Now" />
                            <CourseClients clients={courseClients} />
                            <CourseTrainers trainers={courseTrainers} />
                            <CourseWhyViovn features={courseWhyViovn} />
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

export default PlaceholderCourse;
