export interface Course {
  id: number;
  title: string;
  category: string;
  rating: number;
  enrolled: string;
  duration: string;
  format: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  badge?: string;
  nextDate?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CategoryData {
  id: string;
  name: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  heroImage: string;
  stats: { label: string; value: string }[];
  courses: Course[];
  details: {
    title: string;
    content: string;
  }[];
  faqs: FAQItem[];
  enrolledCount?: string;
  breadcrumbName?: string;
}

export const categoryData: Record<string, CategoryData> = {
  "agile-scrum": {
    id: "agile-scrum",
    name: "Agile & Scrum",
    breadcrumbName: "Agile",
    title: "Top Agile Certification Courses & Training",
    subtitle: "Gain essential Agile skills with our Top Agile certifications courses.",
    description: "Gain essential Agile skills with our Top Agile certifications courses.",
    enrolledCount: "144,000+",
    highlights: [
      "Earn Globally Recognized Certifications from Top Agile Accreditation Bodies.",
      "Trained by Experienced Industry Experts with Over 15+ Years of Experience.",
      "Gain Hands-on Practical Experience with Our Top Agile Certifications & Training."
    ],
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    stats: [
      { label: "Students Trained", value: "50K+" },
      { label: "Rating", value: "4.9/5" },
      { label: "Global Partners", value: "400+" }
    ],
    courses: [
      {
        id: 1,
        title: "Certified ScrumMaster (CSM®) Certification",
        category: "Agile & Scrum",
        rating: 5.0,
        enrolled: "73k+",
        duration: "2 Days",
        format: "Live Classroom",
        price: 349,
        originalPrice: 499,
        discount: 30,
        badge: "Popular",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
        nextDate: "Feb 22, 2026",
      },
      {
        id: 2,
        title: "Certified Scrum Product Owner (CSPO®)",
        category: "Agile & Scrum",
        rating: 4.9,
        enrolled: "45k+",
        duration: "2 Days",
        format: "Live Classroom",
        price: 399,
        originalPrice: 599,
        discount: 33,
        badge: "Trending",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
        nextDate: "Feb 24, 2026",
      }
    ],
    details: [
      {
        title: "Why Agile Management?",
        content: "Agile management is a set of values and principles intended to help teams and organizations provide value to their customers while working in a flexible, interactive way. In today's fast-paced business environment, the ability to adapt to change is crucial for survival and growth."
      }
    ],
    faqs: [
      {
        question: "What are the prerequisites for CSM?",
        answer: "There are no formal prerequisites for the CSM course, but reading the Scrum Guide is highly recommended."
      },
      {
        question: "Is the exam fee included?",
        answer: "Yes, the CSM examination fee is included in the course price."
      }
    ]
  },
  "project-management": {
    id: "project-management",
    name: "Project Management",
    title: "PROJECT MANAGEMENT PROFESSIONAL TRAINING",
    description: "Accelerate your career with globally recognized Project Management certifications. Learn to lead complex projects with confidence and precision.",
    highlights: [
      "Authorized Training Partner of PMI",
      "Practice with 1000+ PMP Exam Simulator Questions",
      "Earn 35 Contact Hours (PDU) for Exam Eligibility",
      "Led by PMP Certified Expert Practitioners"
    ],
    heroImage: "https://images.unsplash.com/photo-1522071823991-b9671f30c46f?w=800&q=80",
    stats: [
      { label: "PMP Certified", value: "30K+" },
      { label: "Average Hike", value: "25%" },
      { label: "Exam Pass Rate", value: "99.1%" }
    ],
    courses: [
      {
        id: 3,
        title: "PMP® Certification Training",
        category: "Project Management",
        rating: 5.0,
        enrolled: "100k+",
        duration: "4 Days",
        format: "Live Virtual",
        price: 495,
        originalPrice: 990,
        discount: 50,
        badge: "Most Popular",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop"
      }
    ],
    details: [],
    faqs: [
      {
        question: "What is PMP certification?",
        answer: "The Project Management Professional (PMP) is a world-renowned certification for project managers."
      },
      {
        question: "How long does it take to get PMP certified?",
        answer: "Most students spend 2-3 months preparing for the exam after completing their 35 contact hours."
      },
      {
        question: "Is PMP worth it in 2026?",
        answer: "Yes, PMP remains the gold standard in project management with a significant impact on salary and job opportunities."
      }
    ]
  },
  "it-service-management": {
    id: "it-service-management",
    name: "IT Service Management",
    title: "IT SERVICE MANAGEMENT (ITSM) CERTIFICATION",
    description: "Align your IT services with business goals. Master ITIL 4 and other leading frameworks to drive efficiency and value in technology operations.",
    highlights: [
      "Official ITIL 4 Foundation Training",
      "Includes Official Axelos Exam Voucher",
      "Comprehensive Digital Course Materials",
      "Interactive Case Studies & Real-world Labs"
    ],
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    stats: [
      { label: "ITIL Experts", value: "15K+" },
      { label: "Corporate Batches", value: "200+" },
      { label: "Customer Rating", value: "4.8/5" }
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "What is ITIL 4?",
        answer: "ITIL 4 is the latest version of the IT Infrastructure Library, focusing on value co-creation and service management."
      },
      {
        question: "Are there any prerequisites for ITIL Foundation?",
        answer: "No, there are no formal prerequisites for the Foundation level certification."
      }
    ]
  },
  "quality-process": {
    id: "quality-process",
    name: "Quality & Process",
    title: "QUALITY & PROCESS IMPROVEMENT TRAINING",
    description: "Master Lean Six Sigma and other quality management methodologies. Drive operational excellence and reduce waste in your organization.",
    highlights: [
      "IASSC Accredited Training Provider",
      "Focus on Practical Lean Six Sigma Projects",
      "Green & Black Belt Certification Tracks",
      "Statistical Analysis Tool Training (Minitab)"
    ],
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    stats: [
      { label: "Efficiency Gained", value: "40%" },
      { label: "Certified Belts", value: "12K+" },
      { label: "Projects Completed", value: "500+" }
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "What is Lean Six Sigma?",
        answer: "Lean Six Sigma is a method that relies on a collaborative team effort to improve performance by systematically removing waste."
      },
      {
        question: "What is the difference between Green and Black belt?",
        answer: "Green belts lead smaller projects, while Black belts tackle complex, large-scale organizational improvements."
      }
    ]
  },
  "leadership-coaching": {
    id: "leadership-coaching",
    name: "Leadership & Coaching",
    title: "LEADERSHIP & EXECUTIVE COACHING PROGRAMS",
    description: "Develop the mindset and skills required to lead in the digital age. From agile coaching to transformational leadership.",
    highlights: [
      "ICF Accredited Coaching Programs",
      "Emotional Intelligence (EQ) Workshops",
      "Agile Leader Certification (CAL)",
      "One-on-One Executive Mentoring"
    ],
    heroImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    stats: [
      { label: "Leaders Coached", value: "5K+" },
      { label: "Fortune 500 Clients", value: "150+" },
      { label: "Net Promoter Score", value: "85" }
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "How can leadership training help my career?",
        answer: "It develops your ability to inspire teams, make strategic decisions, and navigate complex organizational changes."
      }
    ]
  },
  "business-skills": {
    id: "business-skills",
    name: "Business Skills",
    title: "ESSENTIAL BUSINESS SKILLS FOR CAREER GROWTH",
    description: "Master the soft and hard skills critical for modern business. From business analysis to effective communication.",
    highlights: [
      "Business Analysis Professional (CBAP) Training",
      "Strategic Thinking & Problem Solving",
      "Data-Driven Decision Making Workshops",
      "Personal Branding & Leadership Soft Skills"
    ],
    heroImage: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
    stats: [
      { label: "Skills Covered", value: "100+" },
      { label: "Corporate Trainers", value: "80+" },
      { label: "Career Pivoters", value: "2K+" }
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "Why should I learn Business Analysis?",
        answer: "Business analysis helps organizations identify their needs and determine solutions to business problems."
      }
    ]
  },
  "ai-technology": {
    id: "ai-technology",
    name: "AI & Technology",
    title: "ARTIFICIAL INTELLIGENCE & EMERGING TECH",
    description: "Future-proof your career with cutting-edge technology training. From Generative AI to Cloud Architecture.",
    highlights: [
      "Hands-on Generative AI for Business",
      "AWS & Azure Cloud Certification Tracks",
      "Ethical AI & Governance Frameworks",
      "Practical Machine Learning Implementations"
    ],
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    stats: [
      { label: "Latest Tech", value: "2025 Ready" },
      { label: "Hands-on Labs", value: "100+" },
      { label: "Tech Mentors", value: "40+" }
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "Is AI replacing developers?",
        answer: "No, AI is augmenting developers' capabilities, allowing them to focus on higher-level architectural and problem-solving tasks."
      },
      {
        question: "Which AI certification is best for beginners?",
        answer: "Our Generative AI for Business is an excellent starting point for non-technical professionals."
      }
    ]
  },
  "cyber-security": {
    id: "cyber-security",
    name: "Cyber Security",
    title: "CYBER SECURITY CERTIFICATION COURSES",
    description: "Defend your digital assets. Master ethical hacking, network security, and risk management with our professional cyber security programs.",
    highlights: [
      "Ethical Hacking (CEH) Certified Training",
      "Network Security Masterclass",
      "CompTIA Security+ Exam Prep",
      "24/7 Access to Virtual Security Labs"
    ],
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    stats: [
      { label: "Bugs Found", value: "10K+" },
      { label: "Security Experts", value: "8K+" },
      { label: "Hackathons", value: "50+" }
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "What is cyber security?",
        answer: "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks."
      },
      {
        question: "Is cybersecurity a good career in 2026?",
        answer: "Yes, the demand for cybersecurity professionals is growing at an unprecedented rate worldwide."
      },
      {
        question: "What are the benefits of cyber security?",
        answer: "Protects personal and corporate data, ensures business continuity, and builds trust with customers."
      },
      {
        question: "What is the work of a cybersecurity professional?",
        answer: "Their work involves monitoring networks, identifying vulnerabilities, and responding to security breaches."
      },
      {
        question: "Do I need coding for cyber security?",
        answer: "While not always mandatory for entry-level roles, basic coding knowledge is essential for advanced threat analysis."
      }
    ]
  }
};
