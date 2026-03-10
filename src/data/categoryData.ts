import { Award, BookOpen, Building2, CheckCircle, Globe, GraduationCap, IconNode, Monitor, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";

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
  navigate?: string;
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
  stats: { icon: IconNode, label: string; value: string }[];
  courses: Course[];
  details: {
    title: string;
    content: string;
  }[];
  faqs: FAQItem[];
  enrolledCount?: string;
  breadcrumbName?: string;
}

const DEFAULT_COURSE_IMAGE = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop";
let generatedCourseId = 10000;

const buildCourses = (category: string, titles: string[]): Course[] =>
  titles.map((title) => {
    let navigate = `/course/${category.toLowerCase().replace(/\s+/g, '-')}/${title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')}`;

    // Manual overrides with more robust checking
    const processedTitle = title.trim();


    // ---------------------------------- Agile -------------------------------------------
    if (
      processedTitle.includes(
        'Certified Scrum Master (CSM) Certification Training'
      )
    ) {
      navigate = '/course/csm-certificaton-training';
    } else if (
      processedTitle.includes(
        'Certified Scrum Product Owner (CSPO) Certification Training'
      )
    ) {
      navigate = '/course/cspo-certificaton-training';
    } else if (
      processedTitle.includes(
        'Advanced Certified Scrum Master (A-CSM) Certification Training'
      )
    ) {
      navigate = '/course/a-csm-certificaton-training';
    } else if (
      processedTitle.includes(
        'Advanced Certified Scrum Product Owner (A-CSPO) Certification Training'
      )
    ) {
      navigate = '/course/a-cspo-certificaton-training';
    } else if (
      processedTitle.includes(
        'Certified Scrum Developer (CSD) Certification Training'
      )
    ) {
      navigate = '/course/csd-certification-training';
    } else if (processedTitle.includes('Agile and Scrum Training')) {
      navigate = '/course/agile-and-scrum-training';
    } else if (
      processedTitle.includes(
        'ICAgile Systems Coaching (ICP-SYS) Certification Training'
      )
    ) {
      navigate = '/course/icagile-systems-coaching-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile People Development (ICP-PDV) Certification Training'
      )
    ) {
      navigate = '/course/icagile-people-development-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Lean Portfolio Management (ICP-LPM) Certification Training'
      )
    ) {
      navigate =
        '/course/icagile-lean-portfolio-management-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Foundations of AI for FAI Certification Training'
      )
    ) {
      navigate = '/course/icagile-foundations-of-ai-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Agile Team Facilitation Certification (ICP-ATF) Training'
      )
    ) {
      navigate =
        '/course/icagile-agile-team-facilitation-certification-training';
    } else if (
      processedTitle.includes('Applying Professional Kanban (APK) Course')
    ) {
      navigate =
        '/course/applying-professional-kanban-apk-certification-course';
    } else if (
      processedTitle.includes(
        'ICAgile Agile Product Ownership (ICP-APO) Certification Training'
      )
    ) {
      navigate =
        '/course/icagile-agile-product-ownership-icp-apo-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Agile Project and Delivery Management (ICP-APM) Training'
      )
    ) {
      navigate =
        '/course/icagile-agile-project-delivery-management-icp-apm-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Product Management (ICP-PDM) Certification Training'
      )
    ) {
      navigate =
        '/course/ICAgile-Product-Management-(ICP-PDM)-Certification-Training';
    } else if (
      processedTitle.includes(
        'ICAgile Agile Leadership (ICP-LEA) Certification Course Training'
      )
    ) {
      navigate = '/course/icagile-certified-agile-leadership-icp-lea-training';
    } else if (
      processedTitle.includes('Jira Software Training for Agile Projects')
    ) {
      navigate = '/course/jira-software-training-for-agile-projects';
    } else if (processedTitle.includes('Agile Project Management Training')) {
      navigate = '/course/agile-project-management-course';
    } else if (
      processedTitle.includes(
        'Certified Scrum Professional - Product Owner (CSP-PO) Certification Training'
      )
    ) {
      navigate =
        '/course/certified-scrum-professional-product-owner-csp-po-certification-training';
    } else if (
      processedTitle.includes(
        'Professional Scrum Product Backlog Management (PSBM) Skills Certification'
      )
    ) {
      navigate = '/course/pspbm-skills-certification-course';
    } else if (
      processedTitle.includes(
        'PMI-Agile Certified Practitioner (PMI-ACP) Certification Training'
      )
    ) {
      navigate =
        '/course/pmi-agile-certified-practitioner-pmi-acp-certification-training';
    } else if (
      processedTitle.includes(
        'Professional Scrum Master (PSM I) Certification Training'
      )
    ) {
      navigate = '/course/psm-i-certification-training';
    } else if (
      processedTitle.includes(
        'Certified Agile Scaling Practitioner (CASP) Training'
      )
    ) {
      navigate = '/course/casp-1-certification-training';
    } else if (
      processedTitle.includes(
        'Agile Coaching Skills - Certified Facilitator (CAF) Training'
      )
    ) {
      navigate =
        '/course/agile-coaching-skills-certified-facilitator-caf-training';
    } else if (
      processedTitle.includes(
        'Professional Scrum Master - Advanced (PSM II) Certification Training'
      )
    ) {
      navigate =
        '/course/professional-scrum-master-advanced-psm-a-certification-training';
    } else if (
      processedTitle.includes(
        'Certified Agile Leader - 1 (CAL-1) Certification Training'
      )
    ) {
      navigate =
        '/course/certified-agile-leader®-1-(cal 1™)-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Certified Professional in Agile Coaching (ICP-ACC) Certification Training'
      )
    ) {
      navigate =
        '/course/icagile-certified-professional-in-agile-coaching-icp-acc-certification-training';
    } else if (
      processedTitle.includes(
        'Advanced Certified Scrum Developer (A-CSD) Certification Training'
      )
    ) {
      navigate =
        '/course/agile/advanced-certified-scrum-developer-a-csd-certification-training';
    } else if (
      processedTitle.includes(
        'Professional Scrum with Kanban (PSK) Certification Training'
      )
    ) {
      navigate =
        '/course/professional-scrum-with-kanban-psk-certification-training';
    } else if (
      processedTitle.includes(
        'Professional Scrum Product Owner (PSPO) Certification Training'
      )
    ) {
      navigate =
        '/course/professional-scrum-product-owner-certification-training';
    } else if (processedTitle.includes('Scrum@Scale Certification Training')) {
      navigate = '/course/scrum-at-scale-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile Enterprise Agile Coaching (ICP-ENT) Certification Training'
      )
    ) {
      navigate =
        '/course/icagile-enterprise-agile-coaching-icp-cat-certification-training';
    } else if (
      processedTitle.includes(
        'Professional Agile Leadership Essentials (PAL-E) Certification Training'
      )
    ) {
      navigate =
        '/course/professional-agile-leadership-essentials-pal-e-certification-training';
    } else if (
      processedTitle.includes('Behaviour Driven Development (BDD) Training')
    ) {
      navigate = '/course/behaviour-driven-development-bdd-training';
    } else if (
      processedTitle.includes(
        'Applying Professional Scrum (APS) Certification Training'
      )
    ) {
      navigate =
        '/course/agile/applying-professional-scrum-certification-training';
    } else if (processedTitle.includes('Agile Product Owner Training')) {
      navigate = '/course/agile/agile-product-owner-training';
    } else if (processedTitle.includes('Agile for Managers Training')) {
      navigate = '/course/agile/agile-for-managers-training';
    } else if (processedTitle.includes('Agile for Executives Training')) {
      navigate = '/course/agile/agile-for-executives-training';
    } else if (
      processedTitle.includes('Manage Agile Projects Using Scrum Training')
    ) {
      navigate = '/course/agile/manage-agile-projects-using-scrum-training';
    } else if (
      processedTitle.includes(
        'Agile Fundamentals: Including Scrum and Kanban Training'
      )
    ) {
      navigate =
        '/course/agile/agile-fundamentals-including-scrum-and-kanban-training';
    } else if (
      processedTitle.includes(
        'ICAgile (ICP) Fundamentals Certification Training'
      )
    ) {
      navigate =
        '/course/agile/icagile-icp-fundamentals-certification-training';
    } else if (
      processedTitle.includes(
        'ICAgile-Agility-In-The-Enterprise-(ICP-ENT)-Certification-Training'
      )
    ) {
      navigate =
        '/course/agile/icagile-agility-in-the-enterprise-icp-ent-certification-training';
    } else if (
      processedTitle.includes('Test Driven Development (TDD) Training')
    ) {
      navigate = '/course/agile/test-driven-development-tdd-training';
    } else if (processedTitle.includes('Agile Release Planning Training')) {
      navigate = '/course/agile/agile-release-planning-training';
    } else if (
      processedTitle.includes(
        'ICAgile AI for Product Strategy Micro-credential Course'
      )
    ) {
      navigate =
        '/course/agile/icagile-ai-for-product-strategy-micro-credential-course';
    } else if (
      processedTitle.includes(
        'ICAgile AI for Customer Insights Micro-credential Training'
      )
    ) {
      navigate =
        '/course/agile/icagile-ai-for-customer-insights-micro-credential-training';
    }

    // ---------------------------------- Safe -------------------------------------------
    if (processedTitle.includes('Leading SAFe 6.0 Certification Training')) {
      navigate = '/course/leading-safe-certification-training';
    } else if (
      processedTitle.includes(
        'AI-Improved SAFe 6.0 Scrum Master (SSM) Certification Training'
      )
    ) {
      navigate =
        '/course/ai-empowered-safe-scrum-master-ssm-certification-training';
    } else if (
      processedTitle.includes('Product Manager (POPM) Certification Training')
    ) {
      navigate = '/course/product-manager-popm-certification-training';
    } else if (
      processedTitle.includes(
        'SAFe 6.0 Practice Consultant (SPC) Certification Training'
      )
    ) {
      navigate = '/course/safe-practice-consultant-spc-certification-training';
    } else if (
      processedTitle.includes(
        'SAFe 6.0 Lean Portfolio Management (LPM) Certification Training'
      )
    ) {
      navigate =
        '/course/safe-lean-portfolio-management-certification-training';
    } else if (
      processedTitle.includes('SAFe 6.0 Architect Certification Training')
    ) {
      navigate = '/course/safe-architects-certification-training';
    } else if (
      processedTitle.includes('SAFe 6.0 for Teams Certification Training')
    ) {
      navigate = '/course/safe-for-teams-certification-training';
    } else if (
      processedTitle.includes(
        'Advanced SAFe Practice Consultant (ASPC) Certification Path'
      )
    ) {
      navigate =
        '/course/advanced-safe-practice-consultant-(aspc)-certification-path';
    } else if (
      processedTitle.includes(
        'AI-Improved SAFe 6.0 Release Train Engineer (RTE) Certification Training'
      )
    ) {
      navigate =
        '/course/ai-empowered-safe-release-train-engineer-(rte)-certification-training';
    } else if (
      processedTitle.includes('SAFe 6.0 DevOps Certification Training')
    ) {
      navigate = '/course/safe-devops-certification-training';
    } else if (
      processedTitle.includes(
        'Advanced Facilitator: Conflict & Collaboration Micro-Credential Course'
      )
    ) {
      navigate =
        '/course/advanced-facilitator-conflict-collaboration-micro-credential-course';
    } else if (
      processedTitle.includes(
        'Achieving Responsible AI with SAFe Micro-credential Course'
      )
    ) {
      navigate =
        '/course/achieving-responsible-ai-with-safe-micro-credential-course';
    } else if (
      processedTitle.includes(
        'Agile HR Explorer (AHRE) Training and Certification'
      )
    ) {
      navigate = '/course/agile-hr-explorer-(ahre)-training-and-certification';
    } else if (
      processedTitle.includes('Advanced Scrum Master Certification Path')
    ) {
      navigate = '/course/advanced-scrum-master-certification-path';
    } else if (
      processedTitle.includes('SAFe for Hardware Certification Training')
    ) {
      navigate = '/course/safe-for-hardware-certification-training';
    } else if (
      processedTitle.includes(
        'AI-Native Foundations Certification Training Course'
      )
    ) {
      navigate = '/course/ai-native-foundations-certification-training-course';
    } else if (
      processedTitle.includes(
        'AI-Native Change Agent Certification Training Course'
      )
    ) {
      navigate = '/course/ai-native-change-agent-certification-training-course';
    }

    // ---------------------------------- Project -------------------------------------------
    if (
      processedTitle.includes(
        'Project Management Professional (PMP) Certification Training'
      )
    ) {
      navigate =
        '/course/project/project-management-professional-pmp-certification-training';
    } else if (
      processedTitle.includes('Project Management Techniques Training')
    ) {
      navigate = '/course/project/project-management-techniques-training';
    } else if (
      processedTitle.includes(
        'PRINCE2 Foundation and Practitioner Certification Training'
      )
    ) {
      navigate =
        '/course/project/prince2-foundation-and-practitioner-certification-training';
    } else if (
      processedTitle.includes('PRINCE2 Foundation Certification Training')
    ) {
      navigate = '/course/project/prince2-foundation-certification-training';
    } else if (
      processedTitle.includes('PRINCE2 Practitioner Certification Training')
    ) {
      navigate = '/course/project/prince2-practitioner-certification-training';
    } else if (
      processedTitle.includes(
        'PRINCE2 Agile Foundation and Practitioner Certification Training'
      )
    ) {
      navigate =
        '/course/project/prince2-agile-foundation-and-practitioner-certification-training';
    } else if (processedTitle.includes('PgMP')) {
      navigate =
        '/course/project/program-management-professional-pgmp-certification-training';
    } else if (
      processedTitle.includes('Project Management Fundamental') ||
      processedTitle.includes('Project Management Fundamentals')
    ) {
      navigate = '/course/project/project-management-fundamental-training';
    } else if (processedTitle.includes('PfMP')) {
      navigate =
        '/course/project/portfolio-management-professional-pfmp-certification-training';
    } else if (processedTitle.includes('Disciplined Agile Foundations')) {
      navigate = '/course/project/disciplined-agile-foundations-daf-training';
    } else if (processedTitle.includes('PMI-CPMAI')) {
      navigate = '/course/project/pmi-cpmai-certification-training';
    } else if (processedTitle.includes('PMI-CPM')) {
      navigate = '/course/project/pmi-cpmai-certification-training';
    }

    // ---------------------------------- Quality -------------------------------------------
    if (processedTitle.includes('Six Sigma Fundamentals Training')) {
      navigate = '/course/quality/six-sigma-fundamentals-training';
    } else if (processedTitle.includes('Root Cause Analysis (RCA) Training')) {
      navigate = '/course/quality/root-cause-analysis-rca-training';
    } else if (processedTitle.includes('Lean Six Sigma Yellow Belt Training')) {
      navigate = '/course/quality/lean-six-sigma-yellow-belt-training';
    } else if (processedTitle.includes('Lean Six Sigma Green Belt Training')) {
      navigate = '/course/quality/lean-six-sigma-green-belt-training';
    } else if (processedTitle.includes('Lean Six Sigma Black Belt Training')) {
      navigate = '/course/quality/lean-six-sigma-black-belt-training';
    }

    // ---------------------------------- Generative AI -------------------------------------------
    if (
      processedTitle.includes(
        'Generative AI for Business and IT Leaders & Managers Training'
      )
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-business-it-leaders-managers-training';
    } else if (
      processedTitle.includes(
        'Generative AI for Business Analysis & Functional IT Consultants Training'
      )
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-business-analysts-functional-it-consultants-training';
    } else if (
      processedTitle.includes(
        'Cloud Fundamentals for Business Managers & Product Managers Training'
      )
    ) {
      navigate =
        '/course/generative-ai/cloud-fundamentals-for-business-managers-product-managers-training';
    } else if (processedTitle.includes('Multi-cloud FinOps: AWS, GCP, Azure')) {
      navigate =
        '/course/generative-ai/multi-cloud-finops-aws-gcp-azure-training';
    } else if (
      processedTitle.includes('Introduction to Generative AI Training')
    ) {
      navigate = '/course/generative-ai/introduction-to-generative-ai-training';
    } else if (
      processedTitle.includes('Generative AI for Agile Leaders Training')
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-agile-leaders-training';
    } else if (
      processedTitle.includes('Generative AI for Scrum Masters Training')
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-scrum-masters-training';
    } else if (
      processedTitle.includes('Generative AI in HR Certification Course')
    ) {
      navigate =
        '/course/generative-ai/generative-ai-in-hr-certification-course';
    } else if (
      processedTitle.includes('Generative AI for Software Developers Training')
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-software-developers-training';
    } else if (
      processedTitle.includes('Generative AI for Project Managers Training')
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-project-managers-training';
    } else if (processedTitle.includes('Prompt Engineering Course')) {
      navigate = '/course/generative-ai/prompt-engineering-course';
    } else if (
      processedTitle.includes('Mastering Generative AI Tools Online')
    ) {
      navigate = '/course/generative-ai/mastering-generative-ai-tools-online';
    } else if (
      processedTitle.includes(
        'Generative AI Architect - Advanced Program Training'
      )
    ) {
      navigate =
        '/course/generative-ai/generative-ai-architect-advanced-program-training';
    } else if (
      processedTitle.includes(
        'Generative AI for Product Owners/Product Managers Certification Training'
      )
    ) {
      navigate =
        '/course/generative-ai/generative-ai-for-product-owners-product-managers-certification-training';
    }

    // ---------------------------------- Devops  -------------------------------------------

    if (processedTitle.includes('DevOps Foundation Certification Training')) {
      navigate = '/course/devOps/devops-foundation-certification';
    } else if (processedTitle.includes('Docker and Kubernetes Training')) {
      navigate = '/course/devOps/Docker-and-kubernetes';
    } else if (
      processedTitle.includes('DevSecOps Foundation Certification Training')
    ) {
      navigate = '/course/devOps/devsecops-foundation-certification';
    }

    // ---------------------------------- Service  -------------------------------------------
    if (processedTitle.includes('ITIL 4 Foundation Certification Training')) {
      navigate = '/course/service/itil-foundation-cerification';
    }



    // ---------------------------------- Cloud Computing  -------------------------------------------
    if (processedTitle.includes('AWS SysOps Administrator Certification Training')) {
      navigate = '/course/cloud-computing/aws-sysops-administrator-certification';
    } else if (processedTitle.includes('AWS DevOps Engineer Certification Training')) {
      navigate = '/course/cloud-computing/aws-devops-engineer-certification';
    } else if (processedTitle.includes('AWS Cloud Practitioner Certification Training')) {
      navigate = '/course/cloud-computing/aws-cloud-practitioner-certification';
    } else if (processedTitle.includes('AWS Certified Solutions Architect Professional Certification Training')) {
      navigate = '/course/cloud-computing/aws-solutions-architect-professional-certification';
    } else if (processedTitle.includes('Cloud Computing with AWS Training')) {
      navigate = '/course/cloud-computing/cloud-computing-with-aws-training';
    }


    // ---------------------------------- Data Science  -------------------------------------------
    if (processedTitle.includes('Data Science with Python Training')) {
      navigate = '/course/data-science/data-science-with-python-training';
    } else if (processedTitle.includes('Python Django (PD) Training')) {
      navigate = '/course/data-science/python-django-pd-training';
    } else if (processedTitle.includes('Introduction to Artificial Intelligence and Machine Learning (AI and ML)')) {
      navigate = '/course/data-science/introduction-to-artificial-intelligence-and-machine-learning-ai-and-ml';
    } else if (processedTitle.includes('Artificial Intelligence (AI) Training')) {
      navigate = '/course/data-science/artificial-intelligence-training';
    } else if (processedTitle.includes('Data Science Training')) {
      navigate = '/course/data-science/data-science-training';
    } else if (processedTitle.includes('Certified Artificial Intelligence For Agile Leaders Training')) {
      navigate = '/course/data-science/certified-artificial-intelligence-for-agile-leaders-training';
    }

    // ---------------------------------- Technology  -------------------------------------------
    if (processedTitle.includes('Angular JS Training')) {
      navigate = '/course/technology/angular-js-training';
    } else if (processedTitle.includes('React Native Training')) {
      navigate = '/course/technology/react-native-training';
    } else if (processedTitle.includes('React JS Training')) {
      navigate = '/course/technology/react-js-training';
    } else if (processedTitle.includes('Introduction to Blockchain Training')) {
      navigate = '/course/technology/introduction-to-blockchain-training';
    } else if (processedTitle.includes('Python for Beginners Training')) {
      navigate = '/course/technology/python-for-beginners-training';
    }


    // ---------------------------------- Others  -------------------------------------------
    if (processedTitle.includes('Python Programming Training')) {
      navigate = '/course/others/python-programming-training';
    } else if (processedTitle.includes('PCI DSS Training')) {
      navigate = '/course/others/pci-dss-compliance-training';
    } else if (processedTitle.includes('Microsoft AZ-400: Designing and Implementing Microsoft DevOps Solution')) {
      navigate = '/course/others/microsoft-az-designing-implementing-microsoft-devops-solution';
    } else if (processedTitle.includes('Microsoft Power BI Training')) {
      navigate = '/course/others/microsoft-power-bi-training';
    } else if (processedTitle.includes('Microsoft Azure Fundamentals AZ-900 Certification Training')) {
      navigate = '/course/others/microsoft-azure-fundamentals-az-certification-training';
    } else if (processedTitle.includes('AZ-104 Microsoft Azure Administrator Training')) {
      navigate = '/course/others/az-microsoft-azure-administrator-training';
    } else if (processedTitle.includes('Microsoft Azure Developer Associate (AZ-204) Certification Course')) {
      navigate = '/course/others/microsoft-azure-developer-associate-certification-course';
    } else if (processedTitle.includes('Certified Information Systems Security Professional (CISSP) Training')) {
      navigate = '/course/others/certified-information-systems-security-professional-training';
    } else if (processedTitle.includes('Microsoft Certified Azure Solutions Architect Expert (AZ-305) Certification Training')) {
      navigate = '/course/others/microsoft-certified-azure-solutions-architect-expert-certification';
    }
    //--------------------------- Micro-credentials

    if (processedTitle.includes("Agile Objectives and Key Results")) {
      navigate = "/course/micro-credentials/agile-objectives-and-key-results-agile-okrs-microcredential-training";
    } else if (processedTitle.includes("AI for Scrum Masters Micro credential Course")) {
      navigate = "/course/micro-credentials/ai-for-scrum-masters-micro-credential-course";
    } else if (processedTitle.includes("AI for Product Owners Microcredential Training")) {
      navigate = "/course/micro-credentials/ai-for-product-owners-micro-credential-training";
    } else if (processedTitle.includes("Scrum Essentials")) {
      navigate = "/course/micro-credentials/scrum-essentials";
    } else if (processedTitle.includes("Conflict Management Skills Course")) {
      navigate = "/course/micro-credentials/conflict-management-skills-course";
    } else if (processedTitle.includes("ICAgile AI for Product Metrics")) {
      navigate = "/course/micro-credentials/icagile-ai-for-product-metrics-micro-credential-course-training";
    } else if (processedTitle.includes("ICAgile AI for Product Planning")) {
      navigate = "/course/micro-credentials/icagile-ai-for-product-planning-micro-credential-course-training";
    } else if (processedTitle.includes("Scrum Better with Kanban")) {
      navigate = "/course/micro-credentials/scrum-better-with-kanban-sbk-micro-credential-training";
    } else if (processedTitle.includes("ICAgile AI for Stakeholder Management")) {
      navigate = "/course/micro-credentials/icagile-ai-for-stakeholder-management-micro-credential-course";
    } else if (processedTitle.includes("ICAgile AI for Product Discovery")) {
      navigate = "/course/micro-credentials/icagile-ai-for-product-discovery-micro-credential-course-training";
    } else if (processedTitle.includes("ICAgile AI for Product Strategy")) {
      navigate = "/course/micro-credentials/icagile-ai-for-product-strategy-micro-credential-course";
    } else if (processedTitle.includes("ICAgile AI for Customer Insights")) {
      navigate = "/course/micro-credentials/icagile-ai-for-customer-insights-micro-credential-training";
    } else if (processedTitle.includes("Agile Coaching Skills Micro-credential Training")) {
      navigate = "/course/micro-credentials/agile-coaching-skills-micro-credential-training";
    }



    return {
      id: generatedCourseId++,
      title,
      category,
      rating: 4.8,
      enrolled: '1k+',
      duration: 'Self-paced',
      format: 'Live Virtual',
      skills: "AI Strategy Development,Generative AI Application",
      price: 299,
      originalPrice: 499,
      discount: 40,
      image: DEFAULT_COURSE_IMAGE,
      navigate,
    };
  });

const buildCategory = (id: string, name: string, courseTitles: string[]): CategoryData => ({
  id,
  name,
  title: `${name} CERTIFICATION COURSES`,
  description: `${name} training and certification programs.`,
  highlights: [],
  heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  stats: [
    { label: "Courses", value: String(courseTitles.length) },
    { label: "Format", value: "Live + Self-paced" },
    { label: "Level", value: "All Levels" },
  ],
  courses: buildCourses(name, courseTitles),
  details: [],
  faqs: [],
});

const agileCourseTitles = [
  "Certified Scrum Master (CSM) Certification Training",
  "Certified Scrum Product Owner (CSPO) Certification Training",
  "Advanced Certified Scrum Master (A-CSM) Certification Training",
  "Advanced Certified Scrum Product Owner (A-CSPO) Certification Training",
  "Certified Scrum Developer (CSD) Certification Training",
  "Agile and Scrum Training",
  "PMI-Agile Certified Practitioner (PMI-ACP) Certification Training",
  "Professional Scrum Master (PSM I) Certification Training",
  "Certified Agile Scaling Practitioner (CASP) Training",
  "Agile Coaching Skills - Certified Facilitator (CAF) Training",
  "Professional Scrum Master - Advanced (PSM II) Certification Training",
  "Certified Agile Leader - 1 (CAL-1) Certification Training",
  "Advanced Certified Scrum Developer (A-CSD) Certification Training",
  "ICAgile Certified Professional in Agile Coaching (ICP-ACC) Certification Training",
  "Professional Scrum with Kanban (PSK) Certification Training",
  "Professional Scrum Product Owner (PSPO) Certification Training",
  "Scrum@Scale Certification Training",
  "ICAgile Enterprise Agile Coaching (ICP-ENT) Certification Training",
  "Professional Agile Leadership Essentials (PAL-E) Certification Training",
  "Behaviour Driven Development (BDD) Training",
  "Test Driven Development (TDD) Training",
  "ICAgile Agility in the Enterprise (ICP-ENT) Certification Training",
  "ICAgile (ICP) Fundamentals Certification Training",
  "Agile Fundamentals: Including Scrum and Kanban Training",
  "Manage Agile Projects Using Scrum Training",
  "Agile for Executives Training",
  "Agile for Managers Training",
  "Agile Product Owner Training",
  "Applying Professional Scrum (APS) Certification Training",
  "Agile Release Planning Training",
  "Certified Scrum Professional - Product Owner (CSP-PO) Certification Training",
  "Agile Project Management Training",
  "Jira Software Training for Agile Projects",
  "ICAgile Agile Leadership (ICP-LEA) Certification Course Training",
  "ICAgile Product Management (ICP-PDM) Certification Training",
  "ICAgile Agile Project and Delivery Management (ICP-APM) Training",
  "Professional Scrum Product Backlog Management (PSBM) Skills Certification",
  "ICAgile Agile Product Ownership (ICP-APO) Certification Training",
  "Applying Professional Kanban (APK) Course",
  "ICAgile Agile Team Facilitation Certification (ICP-ATF) Training",
  "ICAgile Foundations of AI for FAI Certification Training",
  "ICAgile Lean Portfolio Management (ICP-LPM) Certification Training",
  "ICAgile AI for Customer Insights Micro-credential Training",
  "ICAgile AI for Product Strategy Micro-credential Course",
  "ICAgile People Development (ICP-PDV) Certification Training",
  "ICAgile Systems Coaching (ICP-SYS) Certification Training",
  "Leading SAFe 6.0 Certification Training",
];

const safeCourseTitles = [
  "Leading SAFe 6.0 Certification Training",
  "AI-Improved SAFe 6.0 Scrum Master (SSM) Certification Training",
  "AI-Improved SAFe 6.0 Product Owner/Product Manager (POPM) Certification Training",
  "SAFe 6.0 Practice Consultant (SPC) Certification Training",
  "SAFe 6.0 Lean Portfolio Management (LPM) Certification Training",
  "SAFe 6.0 Architect Certification Training",
  "SAFe 6.0 for Teams Certification Training",
  "Advanced SAFe Practice Consultant (ASPC) Certification Path",
  "AI-Improved SAFe 6.0 Release Train Engineer (RTE) Certification Training",
  "SAFe 6.0 DevOps Certification Training",
  "Advanced Facilitator: Conflict & Collaboration Micro-Credential Course",
  "Achieving Responsible AI with SAFe Micro-credential Course",
  "Agile HR Explorer (AHRE) Training and Certification",
  "Advanced Scrum Master Certification Path",
  "SAFe for Hardware Certification Training",
  "AI-Native Foundations Certification Training Course",
  "AI-Native Change Agent Certification Training Course",
];

const projectCourseTitles = [
  "Project Management Professional (PMP) Certification Training",
  "Project Management Techniques Training",
  "PRINCE2 Foundation and Practitioner Certification Training",
  "PRINCE2 Foundation Certification Training",
  "PRINCE2 Practitioner Certification Training",
  "Certified Associate in Project Management (CAPM) Certification Training",
  "PRINCE2 Agile Foundation Certification Training",
  "Primavera P6 v20.12 Certification Training",
  "PRINCE2 Agile Practitioner Certification Training",
  "PRINCE2 Agile Foundation and Practitioner Certification Training",
  "Program Management Professional (PgMP) Certification Training",
  "Project Management Fundamentals Training",
  "Portfolio Management Professional (PfMP) Certification Training",
  "Disciplined Agile Foundations (DAF) Training",
  "PMI-CPM Certification Training",
];

const businessCourseTitles = [
  "Business Case Writing Training",
  "Conflict Management Training",
  "Certified Business Analysis Professional (CBAP) Certification Training",
  "Change Management Training",
  "Certification of Capability in Business Analysis (CCBA) Training",
  "Entry Certificate in Business Analysis (ECBA) Certification Training",
  "Design Thinking Training",
  "Agile Analysis Certification (IIBA-AAC) Certification Training",
];

const generativeAiCourseTitles = [
  "Generative AI for Business and IT Leaders & Managers Training",
  "Generative AI for Business Analysis & Functional IT Consultants Training",
  "Cloud Fundamentals for Business Managers & Product Managers Training",
  "Generative AI Architect - Advanced Program Training",
  "Multi-cloud FinOps: AWS, GCP, Azure",
  "Introduction to Generative AI Training",
  "Generative AI for Agile Leaders Training",
  "Generative AI for Scrum Masters Training",
  "Generative AI in HR Certification Course",
  "Generative AI for Software Developers Training",
  "Generative AI for Project Managers Training",
  "Prompt Engineering Course",
  "Generative AI for Product Owners/Product Managers Certification Training",
  "Mastering Generative AI Tools Online",
];

const microcredentialsCourseTitles = [
  "Agile Objectives and Key Results (OKRs) Microcredential Training",
  "AI for Scrum Masters Micro credential Course",
  "AI for Product Owners Microcredential Training",
  "Scrum Essentials",
  "Conflict Management Skills Course",
  "ICAgile AI for Product Lifecycle Micro-credential Course Training",
  "ICAgile AI for Product Planning Micro-credential Course Training",
  "Scrum Better with Kanban (SBK) Micro-credential Training",
  "ICAgile AI for Stakeholder Management Micro-credential Course",
  "ICAgile AI for Product Discovery Micro-credential Course Training",
  "ICAgile AI for Product Strategy Micro-credential Course",
  "ICAgile AI for Customer Insights Micro-credential Training",
  "Agile Coaching Skills Micro-credential Training",
];

const devopsCourseTitles = [
  "DevOps Foundation Certification Training",
  "Docker and Kubernetes Training",
  "DevSecOps Foundation Certification Training",
];

const onDemandMicrocredentialsCourseTitles = [
  "AI for Scrum Masters Microcredential Course",
  "AI for Product Owners Microcredential Course",
  "Agile Essentials Microcredential Course",
  "Scrum Essentials Microcredential Course",
  "Metrics that Matter: Improving Product Outcomes Microcredential Course",
  "Introduction to Agile Coaching Microcredential Course",
  "Get Started with DevOps Microcredential Course",
  "Coaching for Transformation: Sustaining Change Microcredential Course",
  "Coaching for Change: Making Agility Work Microcredential Course",
  "Change Management Microcredential Course",
  "Becoming an Agile Coach Microcredential Course",
  "AI for Product Discovery and Strategy Microcredentials Course",
  "Agile Stakeholder Engagement: Effective Communication Strategies Microcredential Course",
  "Agile for Marketing Microcredentials Course",
  "Agile for HR Microcredentials Course",
  "Agile Coaching Skills Microcredential Course",
];

const serviceCourseTitles = [
  "ITIL 4 Foundation Certification Training",
];

const qualityCourseTitles = [
  "Six Sigma Fundamentals Training",
  "Lean Six Sigma Yellow Belt Training",
  "Lean Six Sigma Green Belt Training",
  "Lean Six Sigma Black Belt Training",
  "Root Cause Analysis (RCA) Training",
];

const cloudComputingCourseTitles = [
  "AWS SysOps Administrator Certification Training",
  "AWS DevOps Engineer Certification Training",
  "AWS Cloud Practitioner Certification Training",
  "AWS Certified Solutions Architect Professional Certification Training",
  "Cloud Computing with AWS Training",
];

const dataScienceCourseTitles = [
  "Data Science with Python Training",
  "Python Django (PD) Training",
  "Introduction to Artificial Intelligence and Machine Learning (AI and ML)",
  "Artificial Intelligence (AI) Training",
  "Data Science Training",
  "Certified Artificial Intelligence for Agile Leaders Training",
];

const technologyCourseTitles = [
  "Angular JS Training",
  "React Native Training",
  "React JS Training",
  "Introduction to Blockchain Training",
  "Python for Beginners Training",
];

const othersCourseTitles = [
  "Python Programming Training",
  "PCI DSS Training",
  "Microsoft AZ-400: Designing and Implementing Microsoft DevOps Solutions",
  "Microsoft Power BI Training",
  "Microsoft Azure Fundamentals AZ-900 Certification Training",
  "AZ-104 Microsoft Azure Administrator Training",
  "Microsoft Azure Developer Associate (AZ-204) Certification Course",
  "Certified Information Systems Security Professional (CISSP) Training",
  "Microsoft Certified Azure Solutions Architect Expert (AZ-305) Certification Training",
];
export const categoryData: Record<string, CategoryData> = {
  agile: {
    id: "agile",
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
    heroImage: "https://www.simpliaxis.com/frontend_assets/image/category_banner_f.webp",
    stats: [
      {
        icon: Users,
        value: "500,000+",
        label: "Professional Enrolled",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
      {
        icon: GraduationCap,
        value: "150+",
        label: "Global Trainers",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: Building2,
        value: "300+",
        label: "Workshops Every Month",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
      },
      {
        icon: Globe,
        value: "130+",
        label: "Countries",
        color: "text-blue-500",
        bgColor: "bg-blue-50",
      },
    ],
    courses: buildCourses("Agile & Scrum", agileCourseTitles),
    details: [
      {
        title: "Why Agile Management?",
        content: "Agile management is a set of values and principles intended to help teams and organizations provide value to their customers while working in a flexible, interactive way. In today's fast-paced business environment, the ability to adapt to change is crucial for survival and growth."
      }
    ],
    faqs: [
      {
        question: "What is Agile methodology and why is it important?",
        answer: "Agile is an iterative project management approach that emphasizes flexibility, collaboration, and customer feedback. It enables teams to deliver value faster, adapt to changing requirements, and continuously improve processes — making it essential in today's fast-paced business environment."
      },
      {
        question: "What Agile & Scrum certifications does Simpliaxis offer?",
        answer: "Simpliaxis offers globally recognized certifications including Certified ScrumMaster (CSM®), Certified Scrum Product Owner (CSPO®), SAFe Agilist, and more — all delivered by experienced Agile practitioners with 15+ years of industry experience."
      },
      {
        question: "Who should enroll in Agile & Scrum certification courses?",
        answer: "These courses are ideal for project managers, software developers, business analysts, team leads, and anyone looking to adopt Agile practices to improve team productivity and project delivery."
      },
      {
        question: "What is the difference between Agile and Scrum?",
        answer: "Agile is a broad philosophy and set of principles for iterative development, while Scrum is a specific framework within Agile that defines roles (Scrum Master, Product Owner, Team), ceremonies (sprints, standups), and artifacts (backlog, burndown chart) to implement Agile in practice."
      },
      {
        question: "How long does it take to complete a Scrum certification?",
        answer: "Most Scrum certification courses like CSM® and CSPO® are 2-day intensive programs. After completing the training, you must pass the certification exam administered by the Scrum Alliance to earn your credential."
      },
      {
        question: "Are Simpliaxis Agile certifications recognized globally?",
        answer: "Yes. Simpliaxis is accredited by top Agile bodies including the Scrum Alliance and SAFe. Our certifications are recognized by employers worldwide across industries such as IT, finance, healthcare, and manufacturing."
      },
      {
        question: "What is the format of Agile & Scrum training at Simpliaxis?",
        answer: "Simpliaxis offers live classroom and live virtual training formats, with experienced trainers leading interactive sessions that include real-world simulations, group activities, and hands-on exercises."
      },
      {
        question: "What is the salary potential after an Agile or Scrum certification?",
        answer: "Certified ScrumMasters earn an average salary of $110,000–$140,000 per year in the US. Agile certifications consistently rank among the highest-paying professional credentials globally, with significant salary hikes after certification."
      },
      {
        question: "Can I attend Agile training online?",
        answer: "Yes. Simpliaxis offers live virtual instructor-led training sessions that replicate the classroom experience online, complete with group discussions, breakout sessions, and real-time doubt resolution."
      },
      {
        question: "What support does Simpliaxis provide after completing the Agile course?",
        answer: "Participants receive post-training access to course materials, exam preparation guides, practice tests, and access to a community of Agile professionals. Simpliaxis also provides exam guidance and ongoing mentorship support."
      }
    ]
  },
  project: {
    id: "project",
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
      {
        icon: Users,
        value: "30K+",
        label: "PMP Certified",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: TrendingUp,
        value: "25%",
        label: "Average Salary Hike",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
      {
        icon: Award,
        value: "99.1%",
        label: "Exam Pass Rate",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: Globe,
        value: "100+",
        label: "Countries Covered",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
      },
    ],
    courses: buildCourses("Project Management", projectCourseTitles),
    details: [],
    faqs: [
      {
        question: "What is the PMP® certification and why is it valuable?",
        answer: "The Project Management Professional (PMP®) certification, issued by PMI, is the world's most recognized project management credential. It validates your ability to lead projects across industries and consistently results in higher salaries and greater career opportunities globally."
      },
      {
        question: "What are the eligibility requirements for PMP® certification?",
        answer: "To qualify, you need either a 4-year degree with 36 months of project management experience and 35 hours of PM education, or a high school diploma with 60 months of experience and 35 hours of PM education. Simpliaxis training covers the required 35 contact hours."
      },
      {
        question: "What certifications does Simpliaxis offer in Project Management?",
        answer: "Simpliaxis offers PMP® Certification Training, CAPM®, Prince2, and other PMI-aligned programs — all delivered by PMI-certified practitioners and designed to ensure exam success and real-world application."
      },
      {
        question: "How does Simpliaxis help with PMP® exam preparation?",
        answer: "Simpliaxis provides 1000+ PMP exam simulator questions, mock exams, study guides, and expert-led doubt-clearing sessions. Our structured curriculum is aligned with the latest PMI Exam Content Outline (ECO) to maximize pass rates."
      },
      {
        question: "What is the PMP® exam format?",
        answer: "The PMP® exam consists of 180 questions (multiple choice, matching, hotspot, and drag-and-drop formats) to be completed in 230 minutes. It covers predictive, agile, and hybrid project management approaches."
      },
      {
        question: "How much can I earn after getting PMP® certified?",
        answer: "According to PMI's Earning Power Survey, PMP-certified professionals earn 25% more than their non-certified peers. In the US, PMP holders earn an average salary of $120,000–$150,000 per year."
      },
      {
        question: "Is the PMP® certification recognized globally?",
        answer: "Yes. The PMP® is recognized in over 200 countries and is highly valued across industries including IT, construction, healthcare, finance, and manufacturing. Simpliaxis is an authorized PMI training partner."
      },
      {
        question: "What training formats are available for Project Management courses?",
        answer: "Simpliaxis offers live classroom training, live virtual instructor-led sessions, and corporate batch training. All formats include access to course materials, recorded sessions, and post-training support."
      },
      {
        question: "How long does PMP® training take at Simpliaxis?",
        answer: "The PMP® certification training is a 4-day intensive program that covers all domains of the PMBOK® Guide, agile methodologies, and includes the 35 contact hours required for exam eligibility."
      },
      {
        question: "Can I cancel my enrollment and get a refund?",
        answer: "Yes. Simpliaxis has a transparent refund policy. Cancellations made within the specified period are eligible for a full or partial refund depending on the timing. Please refer to the Simpliaxis refund policy page for complete details."
      }
    ]
  },
  service: {
    id: "service",
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
      {
        icon: Users,
        value: "15K+",
        label: "ITIL Experts Trained",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
      },
      {
        icon: Building2,
        value: "200+",
        label: "Corporate Batches",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: Star,
        value: "4.8/5",
        label: "Customer Rating",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: Globe,
        value: "80+",
        label: "Countries Served",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
    ],
    courses: buildCourses("IT Service Management", serviceCourseTitles),
    details: [],
    faqs: [
      {
        question: "What is IT Service Management (ITSM)?",
        answer: "ITSM refers to the policies, processes, and procedures organizations use to design, deliver, manage, and improve IT services. It ensures IT services are aligned with business needs and delivered efficiently, reducing downtime and increasing customer satisfaction."
      },
      {
        question: "What is ITIL 4 and why should I get certified?",
        answer: "ITIL 4 is the latest version of the globally recognized IT Infrastructure Library framework. Certification demonstrates your ability to manage modern IT services using best practices, making you highly valuable to employers in IT operations, support, and service delivery roles."
      },
      {
        question: "What ITSM certifications does Simpliaxis offer?",
        answer: "Simpliaxis offers ITIL 4 Foundation, ITIL Managing Professional, ITIL Strategic Leader, and other ITSM-related certifications — all with official Axelos exam vouchers included and delivered by certified ITIL practitioners."
      },
      {
        question: "Who should pursue ITSM certifications?",
        answer: "ITSM certifications are ideal for IT managers, service desk professionals, IT support staff, operations managers, and anyone involved in planning, delivering, or improving IT services within an organization."
      },
      {
        question: "What is included in the ITIL 4 Foundation training?",
        answer: "The training covers key ITIL 4 concepts including the Service Value System (SVS), four dimensions of service management, guiding principles, governance, and continual improvement — all with real-world case studies and an official exam voucher."
      },
      {
        question: "How long does the ITIL 4 Foundation training take?",
        answer: "The ITIL 4 Foundation course is typically a 2–3 day intensive program. Simpliaxis also offers flexible online self-paced options for professionals who need to fit training around their work schedules."
      },
      {
        question: "What is the format of the ITIL 4 Foundation exam?",
        answer: "The exam consists of 40 multiple-choice questions to be completed in 60 minutes. A passing score of 65% (26 out of 40) is required. Simpliaxis training includes mock exams and exam tips to ensure you are well-prepared."
      },
      {
        question: "How much can I earn with an ITSM or ITIL certification?",
        answer: "ITIL-certified professionals typically earn between $80,000 and $120,000 annually depending on their role and experience. Senior ITSM managers and ITIL Managing Professional holders often command significantly higher compensation."
      },
      {
        question: "Does Simpliaxis provide post-training support for ITSM courses?",
        answer: "Yes. After training, participants receive access to digital course materials, practice exams, exam vouchers, and mentorship sessions. Simpliaxis also provides guidance for those pursuing higher ITIL certification levels."
      },
      {
        question: "Is ITIL certification valid internationally?",
        answer: "Absolutely. ITIL is recognized in over 150 countries and is used by organizations including IBM, HP, Microsoft, and government agencies worldwide. It is one of the most sought-after credentials in the IT industry globally."
      }
    ]
  },
  quality: {
    id: "quality",
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
      {
        icon: TrendingUp,
        value: "40%",
        label: "Efficiency Gained",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
      {
        icon: Award,
        value: "12K+",
        label: "Certified Belts",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: CheckCircle,
        value: "500+",
        label: "Projects Completed",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: Globe,
        value: "60+",
        label: "Countries Served",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
      },
    ],
    courses: buildCourses("Quality & Process", qualityCourseTitles),
    details: [],
    faqs: [
      {
        question: "What is Lean Six Sigma and who should pursue it?",
        answer: "Lean Six Sigma combines Lean manufacturing principles (eliminating waste) with Six Sigma methodology (reducing defects and variation). It is ideal for quality managers, process engineers, operations professionals, and anyone focused on continuous improvement across industries."
      },
      {
        question: "What Quality & Process certifications does Simpliaxis offer?",
        answer: "Simpliaxis offers Lean Six Sigma White Belt, Yellow Belt, Green Belt, and Black Belt certifications — all IASSC accredited. We also offer training in ISO standards, Total Quality Management (TQM), and other quality frameworks."
      },
      {
        question: "What is the difference between Green Belt and Black Belt?",
        answer: "A Green Belt leads smaller improvement projects as part of their regular job, while a Black Belt dedicates their full time to leading large-scale Six Sigma projects and mentoring Green Belts. Black Belts require deeper statistical knowledge and more project experience."
      },
      {
        question: "What tools are covered in the Lean Six Sigma training?",
        answer: "Training covers DMAIC methodology, statistical process control, root cause analysis, value stream mapping, control charts, process capability, hypothesis testing, and hands-on use of Minitab for statistical analysis."
      },
      {
        question: "Is there a prerequisite for Lean Six Sigma certification?",
        answer: "There are no prerequisites for White Belt and Yellow Belt. Green Belt requires basic process knowledge, while Black Belt typically requires prior Green Belt certification and project experience. Simpliaxis provides guidance to choose the right level."
      },
      {
        question: "How long does Lean Six Sigma training take?",
        answer: "White/Yellow Belt training takes 1–2 days. Green Belt is a 5–8 day program, and Black Belt training spans several weeks with structured modules and real-world project work. Simpliaxis offers flexible scheduling to suit working professionals."
      },
      {
        question: "What industries benefit from Lean Six Sigma?",
        answer: "Lean Six Sigma is applied across manufacturing, healthcare, banking, IT, logistics, retail, and government sectors. Any industry focused on reducing waste, improving quality, and increasing operational efficiency can benefit significantly."
      },
      {
        question: "How much can I earn with a Lean Six Sigma certification?",
        answer: "Lean Six Sigma Black Belts earn an average of $100,000–$130,000 annually in the US. Green Belt certified professionals see salary increases of 20–30% on average. The certification is widely associated with leadership roles and process excellence positions."
      },
      {
        question: "Does Simpliaxis include real-world projects in quality training?",
        answer: "Yes. Simpliaxis training includes hands-on projects, real case studies from industries like manufacturing and healthcare, and Minitab practice sessions. Participants complete project work as part of the Green and Black Belt certification process."
      },
      {
        question: "Are Simpliaxis quality certifications recognized by employers?",
        answer: "Yes. Simpliaxis is an IASSC-accredited training provider, and our certifications are recognized globally. Employers across industries regard IASSC-certified professionals as credible process improvement experts."
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
      {
        icon: Users,
        value: "5K+",
        label: "Leaders Coached",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
      },
      {
        icon: Building2,
        value: "150+",
        label: "Fortune 500 Clients",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: Star,
        value: "85",
        label: "Net Promoter Score",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: Globe,
        value: "50+",
        label: "Countries Reached",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "What leadership programs does Simpliaxis offer?",
        answer: "Simpliaxis offers ICF-accredited coaching programs, Certified Agile Leadership (CAL), Emotional Intelligence (EQ) workshops, executive mentoring programs, and transformational leadership training designed for mid to senior-level professionals."
      },
      {
        question: "Who should attend Simpliaxis leadership and coaching programs?",
        answer: "These programs are designed for team leads, managers, Scrum Masters, Agile coaches, executives, and HR professionals who want to develop their leadership presence, coaching skills, and ability to inspire high-performing teams."
      },
      {
        question: "What is the Certified Agile Leadership (CAL) program?",
        answer: "CAL is a Scrum Alliance-certified program that equips leaders with the mindset and skills to build and support agile teams. It covers organizational agility, personal leadership development, and how to cultivate an environment of continuous improvement."
      },
      {
        question: "What is ICF accreditation and why does it matter?",
        answer: "The International Coaching Federation (ICF) is the globally recognized body for professional coaching standards. ICF-accredited programs ensure coaching training meets the highest global benchmarks, making your coaching credentials credible to employers and clients worldwide."
      },
      {
        question: "What is Emotional Intelligence (EQ) and why is it important for leaders?",
        answer: "Emotional Intelligence refers to the ability to recognize, understand, and manage your own emotions and those of others. Leaders with high EQ build stronger teams, handle conflict better, and drive greater organizational performance — making it one of the most sought-after leadership skills."
      },
      {
        question: "What is the format of leadership training at Simpliaxis?",
        answer: "Simpliaxis offers live virtual sessions, in-person workshops, and one-on-one executive coaching engagements. Programs combine theory, practical exercises, role-play scenarios, and real-world case studies for immersive learning experiences."
      },
      {
        question: "How do leadership certifications impact career growth?",
        answer: "Leadership certifications signal to organizations that you have the skills to drive change and lead teams effectively. Certified leaders often advance faster, take on higher-responsibility roles, and command 20–40% higher compensation compared to non-certified peers."
      },
      {
        question: "Does Simpliaxis offer corporate leadership training for organizations?",
        answer: "Yes. Simpliaxis provides customized corporate leadership development programs for Fortune 500 companies and growing organizations. Programs can be tailored to your organization's specific leadership challenges, culture, and strategic goals."
      },
      {
        question: "What is the difference between coaching and mentoring?",
        answer: "Coaching is a structured, goal-oriented process where a coach helps individuals unlock their own potential through questioning and reflection. Mentoring involves an experienced professional sharing knowledge and advice based on their own career journey. Simpliaxis programs incorporate both approaches."
      },
      {
        question: "Can Simpliaxis leadership programs be attended online?",
        answer: "Yes. Most Simpliaxis leadership and coaching programs are available in live online formats with interactive virtual workshops, breakout sessions, and one-on-one coaching calls — making them accessible to professionals worldwide."
      }
    ]
  },
  business: {
    id: "business",
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
      {
        icon: BookOpen,
        value: "100+",
        label: "Skills Covered",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: Users,
        value: "80+",
        label: "Corporate Trainers",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
      {
        icon: TrendingUp,
        value: "2K+",
        label: "Career Pivoters",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: Globe,
        value: "40+",
        label: "Countries Reached",
        color: "text-rose-500",
        bgColor: "bg-rose-50",
      },
    ],
    courses: buildCourses("Business Skills", businessCourseTitles),
    details: [],
    faqs: [
      {
        question: "What business skills courses does Simpliaxis offer?",
        answer: "Simpliaxis offers training in Business Analysis (CBAP/CCBA), strategic thinking, data-driven decision making, effective communication, stakeholder management, and personal branding — covering both hard and soft skills critical for modern business professionals."
      },
      {
        question: "Who should enroll in business skills training?",
        answer: "Business skills programs are ideal for business analysts, project managers, aspiring leaders, entrepreneurs, and professionals seeking to enhance their strategic, analytical, and interpersonal capabilities to accelerate career growth."
      },
      {
        question: "What is CBAP® certification and is it worth it?",
        answer: "The Certified Business Analysis Professional (CBAP®) is IIBA's highest-level certification for business analysts. It validates expertise in requirements analysis, stakeholder engagement, and solution delivery — and is highly valued by employers globally, often resulting in significant salary increases."
      },
      {
        question: "What are the prerequisites for CBAP® certification?",
        answer: "CBAP® requires 7,500 hours of BA work experience in the last 10 years, 900 hours in at least 4 of the 6 BABOK® knowledge areas, 35 hours of professional development, and two references from career managers or CBAP® recipients."
      },
      {
        question: "Why are business skills important alongside technical skills?",
        answer: "Technical skills get you the job, but business skills help you excel and advance. Communication, strategic thinking, stakeholder management, and data literacy enable professionals to drive better outcomes, build relationships, and take on leadership roles effectively."
      },
      {
        question: "What is business analysis and why is it in demand?",
        answer: "Business analysis involves identifying business needs and determining solutions to business problems, often bridging the gap between IT and business stakeholders. With digital transformation accelerating, skilled business analysts are among the most in-demand professionals across every industry."
      },
      {
        question: "Does Simpliaxis offer soft skills training for corporate teams?",
        answer: "Yes. Simpliaxis offers customized corporate soft skills training covering communication, conflict resolution, emotional intelligence, time management, and leadership presence — tailored to your organization's specific needs and culture."
      },
      {
        question: "How is data-driven decision making taught in Simpliaxis programs?",
        answer: "Participants learn to gather, analyze, and interpret business data using tools and frameworks to make evidence-based decisions. Training includes case studies, hands-on workshops, and real business scenarios to build practical decision-making skills."
      },
      {
        question: "Can business skills training be done online?",
        answer: "Yes. All Simpliaxis business skills programs are available in live virtual formats with interactive sessions, group exercises, and expert Q&A — allowing working professionals to upskill without disrupting their schedules."
      },
      {
        question: "What career opportunities open up after business skills training?",
        answer: "Professionals who complete business skills training pursue roles such as Business Analyst, Product Manager, Strategy Consultant, Operations Lead, and Senior Project Manager — all of which command strong salaries and offer significant growth trajectories."
      }
    ]
  },
  technology: {
    id: "technology",
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
      {
        icon: Zap,
        value: "2026 Ready",
        label: "Latest Tech Curriculum",
        color: "text-purple-600",
        bgColor: "bg-purple-50",
      },
      {
        icon: Monitor,
        value: "100+",
        label: "Hands-on Labs",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: Users,
        value: "40+",
        label: "Tech Mentors",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
      {
        icon: Globe,
        value: "90+",
        label: "Countries Served",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
    ],
    courses: buildCourses("AI & Technology", technologyCourseTitles),
    details: [],
    faqs: [
      {
        question: "What AI and technology courses does Simpliaxis offer?",
        answer: "Simpliaxis offers training in Generative AI, Machine Learning, AWS and Azure Cloud certification, ethical AI governance, prompt engineering, and emerging technology programs designed to help professionals stay ahead in the rapidly evolving tech landscape."
      },
      {
        question: "Who should take AI & Technology courses at Simpliaxis?",
        answer: "These courses are suited for IT professionals, software developers, data scientists, project managers, and business leaders who want to understand and apply AI tools, cloud platforms, and emerging technologies in their roles and organizations."
      },
      {
        question: "What is covered in Generative AI training?",
        answer: "Generative AI training covers large language models (LLMs), prompt engineering, AI model fine-tuning, ChatGPT and similar tools, AI in business applications, ethical AI usage, and real-world implementation scenarios across industries including healthcare, finance, and marketing."
      },
      {
        question: "Do I need a technical background to take AI courses at Simpliaxis?",
        answer: "Not always. Simpliaxis offers both beginner-friendly AI for business courses (no coding required) and advanced technical AI/ML programs for developers. Course prerequisites are clearly specified so you can choose the right level."
      },
      {
        question: "What cloud certifications does Simpliaxis offer?",
        answer: "Simpliaxis offers training for AWS Certified Solutions Architect, AWS Cloud Practitioner, Microsoft Azure Fundamentals (AZ-900), Azure Administrator (AZ-104), and other leading cloud certifications aligned with industry-standard exam objectives."
      },
      {
        question: "What is prompt engineering and why is it important?",
        answer: "Prompt engineering is the skill of crafting effective inputs to AI language models to generate accurate, useful outputs. As AI tools become central to business workflows, prompt engineers are among the most in-demand new tech roles, with strong salary prospects."
      },
      {
        question: "Does Simpliaxis provide hands-on lab experience for tech courses?",
        answer: "Yes. Simpliaxis includes 100+ hands-on labs across AI, cloud, and DevOps programs. Participants work in real environments, building practical experience with actual tools and platforms used in the industry."
      },
      {
        question: "What is Ethical AI and why does it matter?",
        answer: "Ethical AI involves designing and deploying AI systems responsibly — addressing bias, privacy, transparency, and accountability. As AI regulation increases globally, professionals with ethical AI governance knowledge are increasingly essential for organizations implementing AI at scale."
      },
      {
        question: "How much can I earn with an AI or Cloud certification?",
        answer: "AI and Cloud roles are among the highest-paying in tech. AWS Solution Architects earn $130,000–$180,000 annually on average in the US. AI Engineers and ML Specialists command $140,000+ depending on experience and specialization."
      },
      {
        question: "Are AI & Technology courses at Simpliaxis available online?",
        answer: "Yes. All AI and technology programs are available as live instructor-led virtual courses with hands-on labs, real-time Q&A, and mentorship support — accessible to professionals worldwide regardless of location."
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
      {
        icon: Shield,
        value: "10K+",
        label: "Vulnerabilities Found",
        color: "text-rose-600",
        bgColor: "bg-rose-50",
      },
      {
        icon: Users,
        value: "8K+",
        label: "Security Experts Trained",
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: Zap,
        value: "50+",
        label: "Hackathons Hosted",
        color: "text-amber-500",
        bgColor: "bg-amber-50",
      },
      {
        icon: Globe,
        value: "70+",
        label: "Countries Served",
        color: "text-emerald-600",
        bgColor: "bg-emerald-50",
      },
    ],
    courses: [],
    details: [],
    faqs: [
      {
        question: "What cyber security certifications does Simpliaxis offer?",
        answer: "Simpliaxis offers Certified Ethical Hacker (CEH), CompTIA Security+, Certified Information Systems Security Professional (CISSP), CISM, and network security courses — all led by certified security practitioners with 24/7 access to virtual security labs."
      },
      {
        question: "Is cyber security a good career choice in 2026?",
        answer: "Absolutely. Cybersecurity is one of the fastest-growing fields globally, with millions of unfilled roles worldwide. The demand for skilled security professionals continues to surge as cyber threats become more sophisticated, making it an excellent long-term career choice."
      },
      {
        question: "What is ethical hacking and who should learn it?",
        answer: "Ethical hacking (penetration testing) involves legally breaking into systems to identify vulnerabilities before malicious hackers can exploit them. It is ideal for IT professionals, network admins, and security analysts who want to advance into offensive security roles."
      },
      {
        question: "What are the prerequisites for cyber security courses?",
        answer: "Entry-level courses like CompTIA Security+ require basic IT knowledge. Advanced programs like CEH or CISSP require networking fundamentals and prior IT experience. Simpliaxis advisors help you select the right course for your background."
      },
      {
        question: "What is the CEH certification and how does it benefit my career?",
        answer: "The Certified Ethical Hacker (CEH) by EC-Council is a globally recognized credential that validates your ability to think and act like a hacker to better protect organizations. CEH-certified professionals are in high demand in financial services, government, and technology sectors."
      },
      {
        question: "Do I need to know coding for cyber security?",
        answer: "Basic coding knowledge is helpful but not mandatory for entry-level roles. Understanding scripting languages like Python or Bash becomes important for advanced penetration testing and automation. Simpliaxis courses include foundational scripting as needed."
      },
      {
        question: "Does Simpliaxis provide real lab environments for cyber security training?",
        answer: "Yes. Simpliaxis provides 24/7 access to virtual security labs where participants practice ethical hacking, network attacks, vulnerability assessments, and defense techniques in safe, isolated environments that simulate real-world scenarios."
      },
      {
        question: "How much can I earn as a cyber security professional?",
        answer: "Cybersecurity salaries are among the highest in tech. Entry-level analysts earn $70,000–$90,000, while CEH-certified penetration testers and CISSP-certified professionals earn $110,000–$160,000+ annually in the US, with significant global demand driving compensation upward."
      },
      {
        question: "What industries hire cyber security professionals?",
        answer: "Every industry requires cyber security expertise — banking, healthcare, government, defense, retail, and technology are among the largest employers. Virtually every organization that handles digital data needs professionals to protect it from breaches and attacks."
      },
      {
        question: "Are Simpliaxis cyber security certifications globally recognized?",
        answer: "Yes. Certifications like CEH (EC-Council), CompTIA Security+, and CISSP are recognized worldwide and are often required by government agencies and top corporations. Simpliaxis training ensures full exam readiness for these globally respected credentials."
      }
    ]
  },
  safe: {
    id: "safe",
    name: "SAFe Certification",
    breadcrumbName: "SAFe",
    title: "Scaled Agile Framework (SAFe) Certification Training",
    subtitle: "Master Scaled Agile with our comprehensive SAFe certification programs.",
    description: "Empower your organization with Scaled Agile Framework (SAFe) expertise. From Leading SAFe to SAFe Practice Consultant.",
    enrolledCount: "95,000+",
    highlights: [
      "Official SAFe Training from Bronze Partner.",
      "Get Trained by Certified SAFe Practice Consultants (SPCs).",
      "Gain Practical Insights into Implementing SAFe at Scale."
    ],
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    stats: [
      { label: "SAFe Professionals", value: "25K+" },
      { label: "Partner Rating", value: "5.0/5" },
      { label: "Global Presence", value: "30+ Countries" }
    ],
    courses: buildCourses("SAFE", safeCourseTitles),
    details: [
      {
        title: "Why SAFe?",
        content: "The Scaled Agile Framework (SAFe) is the world's leading framework for scaling Agile across the enterprise. It provides a proven system for aligning multiple teams and coordinating large-scale solution development."
      }
    ],
    faqs: [
      {
        question: "What is the latest version of SAFe?",
        answer: "The latest version is SAFe 6.0, which focuses on business agility and digital transformation."
      }
    ]
  },
  "generative-ai": buildCategory("generative-ai", "Generative AI", generativeAiCourseTitles),
  microcredentials: buildCategory("microcredentials", "Microcredentials", microcredentialsCourseTitles),
  devops: buildCategory("devops", "DEVOPS", devopsCourseTitles),
  "on-demand-microcredentials": buildCategory(
    "on-demand-microcredentials",
    "ON DEMAND MICROCREDENTIALS",
    onDemandMicrocredentialsCourseTitles
  ),
  "cloud-computing": buildCategory("cloud-computing", "CLOUD COMPUTING", cloudComputingCourseTitles),
  "data-science": buildCategory("data-science", "DATA SCIENCE", dataScienceCourseTitles),
  others: buildCategory("others", "OTHERS", othersCourseTitles),
};