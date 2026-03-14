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
    heroImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    stats: [
      { label: "Students Trained", value: "50K+" },
      { label: "Rating", value: "4.9/5" },
      { label: "Global Partners", value: "400+" }
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
        question: "What are the prerequisites for CSM?",
        answer: "There are no formal prerequisites for the CSM course, but reading the Scrum Guide is highly recommended."
      },
      {
        question: "Is the exam fee included?",
        answer: "Yes, the CSM examination fee is included in the course price."
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
      { label: "PMP Certified", value: "30K+" },
      { label: "Average Hike", value: "25%" },
      { label: "Exam Pass Rate", value: "99.1%" }
    ],
    courses: buildCourses("Project Management", projectCourseTitles),
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
      { label: "ITIL Experts", value: "15K+" },
      { label: "Corporate Batches", value: "200+" },
      { label: "Customer Rating", value: "4.8/5" }
    ],
    courses: buildCourses("IT Service Management", serviceCourseTitles),
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
      { label: "Efficiency Gained", value: "40%" },
      { label: "Certified Belts", value: "12K+" },
      { label: "Projects Completed", value: "500+" }
    ],
    courses: buildCourses("Quality & Process", qualityCourseTitles),
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
      { label: "Skills Covered", value: "100+" },
      { label: "Corporate Trainers", value: "80+" },
      { label: "Career Pivoters", value: "2K+" }
    ],
    courses: buildCourses("Business Skills", businessCourseTitles),
    details: [],
    faqs: [
      {
        question: "Why should I learn Business Analysis?",
        answer: "Business analysis helps organizations identify their needs and determine solutions to business problems."
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
      { label: "Latest Tech", value: "2025 Ready" },
      { label: "Hands-on Labs", value: "100+" },
      { label: "Tech Mentors", value: "40+" }
    ],
    courses: buildCourses("AI & Technology", technologyCourseTitles),
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
