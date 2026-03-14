import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { AuthModalProvider } from "@/context/AuthModalContext";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import DynamicCategoryPage from "./pages/categories/DynamicCategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import DemoOne from "./pages/DemoOne";
import NotFound from "./pages/NotFound";

// ✨ BARREL EXPORT IMPORT - Import all agile courses from one place!
import {
  CertifiedScrumMasterCertificationTraining,
  CertifiedScrumProductOwnerCertificationTraining,
  AdvancedCertifiedScrumMasterCertificationTraining,
  AdvancedCertifiedScrumProductOwnerCertificationTraining,
  CertifiedScrumDeveloperCertificationTraining,
  ICAgileSystemsCoachingCertificationTraining,
  ICAgilePeopleDevelopmentCertificationTraining,
  ICAgileLeanPortfolioManagementCertificationTraining,
  ICAgileFoundationsOfAICertificationTraining,
  ICAgileAgileTeamFacilitationCertificationTraining,
  ApplyingProfessionalKanbanCertificationCourse,
  ICAgileAgileProductOwnershipICPAPOCertificationTraining,
  PSPBMSkillsCertificationCourse,
  ICAgileAgileProjectDeliveryManagementICPAPMCertificationTraining,
  ICAgileProductManagementCertificationTraining,
  ICAgileCertifiedAgileLeadershipTraining,
  JiraSoftwareTrainingforAgileProjects,
  AgileProjectManagementCourse,
  CertifiedScrumProfessionalProductOwnerCertificationTraining,
  AgileAndScrumTraining,
  PMIAgileCertifiedPractitionerPMIACP,
  ProfessionalScrumMasterCertificationTraining,
  CertifiedAgileScalingPractitioner1Training,
  AgileCoachingSkillsCertifiedFacilitatorTraining,
  ProfessionalScrumMasterAdvancedCertificationTraining,
  ICAgileCertifiedProfessionalinAgileCoachingICPACCertificationTraining,
  ProfessionalScrumWithKanbanCertificationTraining,
  ProfessionalScrumProductOwnerCertificationTraining,
  ScrumAtScaleCertificationTraining,
  ICAgileEnterpriseAgileCoachingCertificationTraining,
  ProfessionalAgileLeadershipEssentialsCertificationTraining,
  BehaviourDrivenDevelopmentBDDTraining,
  ApplyingProfessionalScrumCertificationTraining,
  AgileProductOwnerTraining,
  AgileForManagersTraining,
  AgileForExecutivesTraining,
  ManageAgileProjectsUsingScrumTraining,
  AgileFundamentalsIncludingScrumAndKanbanTraining,
  ICAgileICPFundamentalCertificationTraining,
  ICAgileAgilityInTheEnterpriseICPentCertificationTraining,
  TestDrivenDevelopmentTDDTraining,
  AgileReleasePlanningTraining,
  ICAgileAIforProductStrategyMicroCredentialCourse,
  ICAgileAIforCustomerInsightsMicroCredentialTraining,
  AdvancedCertifiedScrumDeveloperCertificationTraining,
  CertifiedAgileLeaderCertificationTraining,

} from './pages/allCourses/agile';

import SchedulesPage from "./pages/SchedulesPage";

// ----------------------------- Safe Courses -----------------------------
import {
  LeadingSafeCertificationTraining,
  AiEmpoweredSafeScrumMasterSSMCertificationTraining,
  ProductManagerPOPMCertificationTraining,
  SafePracticeConsultantSPCCertificationTraining,
  SafeLeanPortfolioManagementCertificationTraining,
  SafeArchitectsCertificationTraining,
  SafeForTeamsCertificationTraining,
  AdvancedSAFePracticeConsultantASPCCertificationPath,
  AIEmpoweredSAFeReleaseTrainEngineerRTECertificationTraining,
  SAFEDevOpsCertificationTraining,
  AdvancedFacilitatorConflictCollaborationMicroCredentialCourse,
  AchievingResponsibleAICourse,
  AgileHRexplorerCourse,
  AdvancedScrumMasterCertificationPath,
  SAFeForHardwareCourse,
  AiNativeFoundationsCertificationTrainingCourse,
  AiNativeChangeAgentCertificationTrainingCourse,
} from './pages/allCourses/safe';

// ----------------------------- Project Courses -----------------------------
import {
  ProjectManagementProfessionalCertificationTraining,
  ProjectManagementTechniquesTraining,
  PRINCE2FoundationAndPractitionerCertificationTraining,
  PRINCE2FoundationCertificationTraining,
  PRINCE2PractitionerCertificationTraining,
  PRINCE2AgileFoundationAndPractitionerCertificationTraining,
  PRINCE2AgilePractitionerCertificationTraining,
  ProgramManagementProfessionalPgMPCertificationTraining,
  ProjectManagementFundamentalTraining,
  PortfolioManagementProfessionalPfMPCertificationTraining,
  DisciplinedAgileFoundationsDAFTraining,
  PMICPMAICertificationTraining
} from './pages/allCourses/project';

// ----------------------------- Generative AI Courses -----------------------------
import {
  GenerativeAIForBusinessITLeadersManagersTraining,
  GenerativeAIForBusinessAnalystsFunctionalITConsultantsTraining,
  CloudFundamentalsForBusinessManagersProductManagersTraining,
  GenerativeAIArchitectAdvancedProgramTraining,
  MultiCloudFinOpsAWsgcpAzureTraining,
  IntroductionToGenerativeAITraining,
  GenerativeAIforAgileLeadersTraining,
  GenerativeAIforScrumMastersTraining,
  GenerativeAIinHRCertificationCourse,
  GenerativeAIforSoftwareDevelopersTraining,
  GenerativeAIForProjectManagersTraining,
  PromptEngineeringCourse,
  GenerativeAIForProductOwnersProductManagersCertificationTraining,
  MasteringGenerativeAIToolsOnline
} from './pages/allCourses/generativeAi';

// ----------------------------- DevOps Courses -----------------------------

import {
  DevOpsFoundationCertificationTraining,
  DockerAndKubernetesTraining,
  DevSecOpsFoundationCertificationTraining
} from './pages/allCourses/devops';

// ----------------------------- Service Courses -----------------------------

import {
  ITILFoundationCertification
} from './pages/allCourses/service';

// ----------------------------- Cloud Courses -----------------------------

import {
  AWSSysOpsAdministratorCertificationTraining,
  AWSDevOpsEngineerCertificationTraining,
  AWSCloudPractitionerCertificationTraining,
  AWSSolutionsArchitectProfessionalCertificationTraining,
  CloudComputingWithAWSTraining
} from './pages/allCourses/cloudComputing';

// ----------------------------- Data Science Courses -----------------------------

import {
  DataScienceWithPythonTraining,
  PythonDjangoTraining,
  IntroductionToArtificialIntelligenceMachineLearning,
  ArtificialIntelligenceTraining,
  DataScienceTraining,
  CertifiedArtificialIntelligenceForAgileLeadersTraining
} from './pages/allCourses/dataScience';

// ----------------------------- Technology Courses -----------------------------

import {
  AngularJSTraining,
  ReactNativeTraining,
  ReactJSTraining,
  IntroductionToBlockchainTraining,
  PythonforBeginnersTraining
} from './pages/allCourses/Technology';

// ----------------------------- Others Courses -----------------------------

import {
  PythonProgrammingTraining,
  PCIDSSComplianceTraining,
  MicrosoftAZDesigningImplementingMicrosoftDevOpsSolution,
  MicrosoftPowerBITraining,
  MicrosoftAzureFundamentalsAZCertificationTraining,
  AZMicrosoftAzureAdministratorTraining,
  MicrosoftAzureDeveloperAssociateCertificationCourse,
  CertifiedInformationSystemsSecurityProfessionalTraining,
  MicrosoftCertifiedAzureSolutionsArchitectExpertCertification
} from './pages/allCourses/others';




// ----------------------------- Quality Courses -----------------------------
import {
  LeanSixSigmaBlackBelt,
  LeanSixSigmaGreenBelt,
  LeanSixSigmaYellowBelt,
  QualityRootCauseAnalysis,
  QualitySixSigmaFundamentals
} from "./pages/allCourses/quality";

// ----------------------------- Business Courses -----------------------------
import {
  BusinessCaseWritingTraining,
  ConflictManagementTraining,
  CertifiedBusinessAnalysisProfessionalCBAPCertificationTraining,
  ChangeManagementTraining,
  CertificationOfCapabilityInBusinessAnalysisTraining,
  EntryCertificateInBusinessAnalysisECBACertificationTraining,
  DesignThinkingTraining,
  AgileAnalysisCertification
} from "./pages/allCourses/business";

// ----------------------------- Microcredentials -----------------------------
import {
  AgileObjectivesAndKeyResultsAgileOKRsMicroCredentialTraining,
  AIForScrumMastersMicroCredentialCourse,
  AIForProductOwnersMicroCredentialTraining,
  ScrumEssentials,
  ConflictManagementSkillsCourse,
  ICAgileAIForProductMetricsMicroCredentialCourseTraining,
  ICAgileAIForProductPlanningMicroCredentialCourseTraining,
  ScrumBetterWithKanbanSBKMicroCredentialTraining,
  ICAgileAIForStakeholderManagementMicroCredentialCourse,
  ICAgileAIForProductDiscoveryMicroCredentialCourseTraining,
  ICAgileAIForProductStrategyMicroCredentialCourse as MicroStrategy,
  ICAgileAIForCustomerInsightsMicroCredentialTraining as MicroInsights,
  AgileCoachingSkillsMicroCredentialTraining
} from "./pages/allCourses/Microcredentials";

// ----------------------------- On Demand Microcredentials -----------------------------
import {
  AIForScrumMastersMicrocredentialCourse,
  AIForProductOwnersMicrocredentialCourse,
  AgileEssentialsMicrocredentialCourse,
  ScrumEssentialsMicrocredentialCourse,
  MetricsThatMatterImprovingProductOutcomesMicrocredentialCourse,
  IntroductionToAgileCoachingMicrocredentialCourse,
  GetStartedWithDevOpsMicrocredentialCourse,
  CoachingForTransformationSustainingChangeMicrocredentialCourse,
  CoachingForChangeMakingAgilityWorkMicrocredentialCourse,
  ChangeManagementMicrocredentialCourse,
  BecomingAnAgileCoachMicrocredentialCourse,
  AIForProductDiscoveryAndStrategyMicrocredentialsCourse,
  AgileStakeholderEngagementEffectiveCommunicationStrategiesMicrocredentialCourse,
  AgileForMarketingMicrocredentialsCourse,
  AgileForHRMicrocredentialsCourse,
  AgileCoachingSkillsMicrocredentialCourse
} from "./pages/allCourses/onDemandMicroCredentials";

// ----------------------------- E-learning Courses -----------------------------
import {
    CertifiedAssociateInProjectManagementOnlineCourse,
    ProjectManagementProfessionalPrepOnlineCourse,
    LeanSixSigmaGreenBeltBasicsOnlineCourse,
    LeanSixSigmaGreenBeltELearningCourse,
    AccreditedAgileScrumMasterOnlineCourse,
    AccreditedAgileRolesProductOwnerOnlineCourse,
    LeanSixSigmaYellowBeltELearningCourse,
    SimpliaxisPMPOrientationCourse,
    ScrumMasterCertifiedCourse,
    MicrosoftAzureFundamentalsCourse,
    ProjectManagementFundamentalsCourse,
    MicrosoftPowerBISkillsCourse,
    PMIOrganizationalChangeManagementCourse,
    AWSCertifiedCloudPractitionerCourse,
    MicrosoftAzureAdministratorCourse,
    ScrumProductOwnerTrainingCourse,
    CertifiedInformationSecurityManagerCourse,
    ScrumDeveloperTrainingCourse,
    MicrosoftProject2013BasicCourse,
    MicrosoftProject2013AdvancedCourse,
    MicrosoftAzureSecurityTechnologiesAZ500Course,
    AWSCertifiedDevOpsEngineerProfessionalCourse,
    AccreditedDevOpsFoundationCourse,
    CISSPTrainingCourse,
    CISATrainingCourse,
    MicrosoftAzureDeveloperAZ204Course,
    MicrosoftAzureSolutionsArchitectAZ305Course
} from "./pages/allCourses/eLearning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <AuthProvider>
        <AuthModalProvider>
          <CartProvider>
            <BrowserRouter>
              <ScrollToTop />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/course/:courseName/schedules" element={<SchedulesPage />} />

          {/* categories routes */}
          <Route path="/category/:categoryId" element={<DynamicCategoryPage />} />
          <Route path="/sub-category" element={<SubCategoryPage />} />
          <Route path="/demo-one" element={<DemoOne />} />

          {/* ✨ AGILE COURSES */}
          <Route
            path="/course/agile/csm-certificaton-training"
            element={<CertifiedScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/agile/cspo-certificaton-training"
            element={<CertifiedScrumProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/agile/a-csm-certificaton-training"
            element={<AdvancedCertifiedScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/agile/a-cspo-certificaton-training"
            element={
              <AdvancedCertifiedScrumProductOwnerCertificationTraining />
            }
          />
          <Route
            path="/course/agile/csd-certification-training"
            element={<CertifiedScrumDeveloperCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-systems-coaching-certification-training"
            element={<ICAgileSystemsCoachingCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-people-development-certification-training"
            element={<ICAgilePeopleDevelopmentCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-lean-portfolio-management-certification-training"
            element={<ICAgileLeanPortfolioManagementCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-foundations-of-ai-certification-training"
            element={<ICAgileFoundationsOfAICertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-agile-team-facilitation-certification-training"
            element={<ICAgileAgileTeamFacilitationCertificationTraining />}
          />
          <Route
            path="/course/agile/applying-professional-kanban-apk-certification-course"
            element={<ApplyingProfessionalKanbanCertificationCourse />}
          />
          <Route
            path="/course/agile/icagile-agile-product-ownership-icp-apo-certification-training"
            element={
              <ICAgileAgileProductOwnershipICPAPOCertificationTraining />
            }
          />
          <Route
            path="/course/agile/pspbm-skills-certification-course"
            element={<PSPBMSkillsCertificationCourse />}
          />
          <Route
            path="/course/agile/icagile-agile-project-delivery-management-icp-apm-certification-training"
            element={
              <ICAgileAgileProjectDeliveryManagementICPAPMCertificationTraining />
            }
          />
          <Route
            path="/course/agile/ICAgile-Product-Management-(ICP-PDM)-Certification-Training"
            element={<ICAgileProductManagementCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-certified-agile-leadership-icp-lea-training"
            element={<ICAgileCertifiedAgileLeadershipTraining />}
          />
          <Route
            path="/course/agile/jira-software-training-for-agile-projects"
            element={<JiraSoftwareTrainingforAgileProjects />}
          />
          <Route
            path="/course/agile/agile-project-management-course"
            element={<AgileProjectManagementCourse />}
          />
          <Route
            path="/course/agile/certified-scrum-professional-product-owner-csp-po-certification-training"
            element={
              <CertifiedScrumProfessionalProductOwnerCertificationTraining />
            }
          />
          <Route
            path="/course/agile/agile-and-scrum-training"
            element={<AgileAndScrumTraining />}
          />
          <Route
            path="/course/agile/pmi-agile-certified-practitioner-pmi-acp-certification-training"
            element={<PMIAgileCertifiedPractitionerPMIACP />}
          />
          <Route
            path="/course/agile/psm-i-certification-training"
            element={<ProfessionalScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/agile/casp-1-certification-training"
            element={<CertifiedAgileScalingPractitioner1Training />}
          />
          <Route
            path="/course/agile/agile-coaching-skills-certified-facilitator-caf-training"
            element={<AgileCoachingSkillsCertifiedFacilitatorTraining />}
          />
          <Route
            path="/course/agile/professional-scrum-master-advanced-psm-a-certification-training"
            element={<ProfessionalScrumMasterAdvancedCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-certified-professional-in-agile-coaching-icp-acc-certification-training"
            element={
              <ICAgileCertifiedProfessionalinAgileCoachingICPACCertificationTraining />
            }
          />
          <Route
            path="/course/agile/professional-scrum-with-kanban-psk-certification-training"
            element={<ProfessionalScrumWithKanbanCertificationTraining />}
          />
          <Route
            path="/course/agile/professional-scrum-product-owner-certification-training"
            element={<ProfessionalScrumProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/agile/scrum-at-scale-certification-training"
            element={<ScrumAtScaleCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-enterprise-agile-coaching-icp-cat-certification-training"
            element={<ICAgileEnterpriseAgileCoachingCertificationTraining />}
          />
          <Route
            path="/course/agile/professional-agile-leadership-essentials-pal-e-certification-training"
            element={
              <ProfessionalAgileLeadershipEssentialsCertificationTraining />
            }
          />
          <Route
            path="/course/agile/behaviour-driven-development-bdd-training"
            element={<BehaviourDrivenDevelopmentBDDTraining />}
          />

          <Route
            path="/course/agile/certified-agile-leader®-1-(cal 1™)-certification-training"
            element={<CertifiedAgileLeaderCertificationTraining />}
          />

          <Route
            path="/course/agile/applying-professional-scrum-certification-training"
            element={<ApplyingProfessionalScrumCertificationTraining />}
          />
          <Route
            path="/course/agile/agile-product-owner-training"
            element={<AgileProductOwnerTraining />}
          />
          <Route
            path="/course/agile/agile-for-managers-training"
            element={<AgileForManagersTraining />}
          />
          <Route
            path="/course/agile/agile-for-executives-training"
            element={<AgileForExecutivesTraining />}
          />
          <Route
            path="/course/agile/manage-agile-projects-using-scrum-training"
            element={<ManageAgileProjectsUsingScrumTraining />}
          />
          <Route
            path="/course/agile/agile-fundamentals-including-scrum-and-kanban-training"
            element={<AgileFundamentalsIncludingScrumAndKanbanTraining />}
          />
          <Route
            path="/course/agile/icagile-icp-fundamentals-certification-training"
            element={<ICAgileICPFundamentalCertificationTraining />}
          />
          <Route
            path="/course/agile/icagile-agility-in-the-enterprise-icp-ent-certification-training"
            element={
              <ICAgileAgilityInTheEnterpriseICPentCertificationTraining />
            }
          />
          <Route
            path="/course/agile/test-driven-development-tdd-training"
            element={<TestDrivenDevelopmentTDDTraining />}
          />
          <Route
            path="/course/agile/agile-release-planning-training"
            element={<AgileReleasePlanningTraining />}
          />
          <Route
            path="/course/agile/icagile-ai-for-product-strategy-micro-credential-course"
            element={<ICAgileAIforProductStrategyMicroCredentialCourse />}
          />
          <Route
            path="/course/agile/icagile-ai-for-customer-insights-micro-credential-training"
            element={<ICAgileAIforCustomerInsightsMicroCredentialTraining />}
          />
          <Route
            path="/course/agile/advanced-certified-scrum-developer-a-csd-certification-training"
            element={<AdvancedCertifiedScrumDeveloperCertificationTraining />}
          />

          {/* ✨ SAFE COURSES */}
          <Route
            path="/course/safe/leading-safe-certification-training"
            element={<LeadingSafeCertificationTraining />}
          />
          <Route
            path="/course/safe/ai-empowered-safe-scrum-master-ssm-certification-training"
            element={<AiEmpoweredSafeScrumMasterSSMCertificationTraining />}
          />
          <Route
            path="/course/safe/product-manager-popm-certification-training"
            element={<ProductManagerPOPMCertificationTraining />}
          />
          <Route
            path="/course/safe/safe-practice-consultant-spc-certification-training"
            element={<SafePracticeConsultantSPCCertificationTraining />}
          />
          <Route
            path="/course/safe/safe-lean-portfolio-management-certification-training"
            element={<SafeLeanPortfolioManagementCertificationTraining />}
          />
          <Route
            path="/course/safe/safe-architects-certification-training"
            element={<SafeArchitectsCertificationTraining />}
          />
          <Route
            path="/course/safe/safe-for-teams-certification-training"
            element={<SafeForTeamsCertificationTraining />}
          />

          <Route
            path="/course/safe/advanced-safe-practice-consultant-(aspc)-certification-path"
            element={<AdvancedSAFePracticeConsultantASPCCertificationPath />}
          />

          <Route
            path="/course/safe/ai-empowered-safe-release-train-engineer-(rte)-certification-training"
            element={
              <AIEmpoweredSAFeReleaseTrainEngineerRTECertificationTraining />
            }
          />

          <Route
            path="/course/safe/safe-devops-certification-training"
            element={<SAFEDevOpsCertificationTraining />}
          />

          <Route
            path="/course/safe/advanced-facilitator-conflict-collaboration-micro-credential-course"
            element={
              <AdvancedFacilitatorConflictCollaborationMicroCredentialCourse />
            }
          />

          <Route
            path="/course/safe/achieving-responsible-ai-with-safe-micro-credential-course"
            element={<AchievingResponsibleAICourse />}
          />

          <Route
            path="/course/safe/agile-hr-explorer-(ahre)-training-and-certification"
            element={<AgileHRexplorerCourse />}
          />

          <Route
            path="/course/safe/advanced-scrum-master-certification-path"
            element={<AdvancedScrumMasterCertificationPath />}
          />

          <Route
            path="/course/safe/safe-for-hardware-certification-training"
            element={<SAFeForHardwareCourse />}
          />

          <Route
            path="/course/safe/ai-native-foundations-certification-training-course"
            element={<AiNativeFoundationsCertificationTrainingCourse />}
          />

          <Route
            path="/course/safe/ai-native-change-agent-certification-training-course"
            element={<AiNativeChangeAgentCertificationTrainingCourse />}
          />

          {/* ✨ PROJECT COURSES */}
          <Route
            path="/course/project/project-management-professional-pmp-certification-training"
            element={<ProjectManagementProfessionalCertificationTraining />}
          />
          <Route
            path="/course/project/project-management-techniques-training"
            element={<ProjectManagementTechniquesTraining />}
          />
          <Route
            path="/course/project/prince2-foundation-and-practitioner-certification-training"
            element={<PRINCE2FoundationAndPractitionerCertificationTraining />}
          />
          <Route
            path="/course/project/prince2-foundation-certification-training"
            element={<PRINCE2FoundationCertificationTraining />}
          />
          <Route
            path="/course/project/prince2-practitioner-certification-training"
            element={<PRINCE2PractitionerCertificationTraining />}
          />
          <Route
            path="/course/project/prince2-agile-foundation-and-practitioner-certification-training"
            element={
              <PRINCE2AgileFoundationAndPractitionerCertificationTraining />
            }
          />
          <Route
            path="/course/project/prince2-agile-practitioner-certification-training"
            element={<PRINCE2AgilePractitionerCertificationTraining />}
          />
          <Route
            path="/course/project/program-management-professional-pgmp-certification-training"
            element={<ProgramManagementProfessionalPgMPCertificationTraining />}
          />
          <Route
            path="/course/project/project-management-fundamental-training"
            element={<ProjectManagementFundamentalTraining />}
          />
          <Route
            path="/course/project/portfolio-management-professional-pfmp-certification-training"
            element={
              <PortfolioManagementProfessionalPfMPCertificationTraining />
            }
          />
          <Route
            path="/course/project/disciplined-agile-foundations-daf-training"
            element={<DisciplinedAgileFoundationsDAFTraining />}
          />
          <Route
            path="/course/project/pmi-cpmai-certification-training"
            element={<PMICPMAICertificationTraining />}
          />
          <Route
            path="/course/project/pmi-cpm-certification-training"
            element={<PMICPMAICertificationTraining />}
          />

          {/* ✨ QUALITY COURSES */}
          <Route
            path="/course/quality/six-sigma-fundamentals-training"
            element={<QualitySixSigmaFundamentals />}
          />

          <Route
            path="/course/quality/root-cause-analysis-rca-training"
            element={<QualityRootCauseAnalysis />}
          />

          <Route
            path="/course/quality/lean-six-sigma-yellow-belt-training"
            element={<LeanSixSigmaYellowBelt />}
          />
          <Route
            path="/course/quality/lean-six-sigma-green-belt-training"
            element={<LeanSixSigmaGreenBelt />}
          />

          <Route
            path="/course/quality/lean-six-sigma-black-belt-training"
            element={<LeanSixSigmaBlackBelt />}
          />

          {/* ✨ GENERATIVE AI COURSES */}
          <Route
            path="/course/generative-ai/generative-ai-for-business-it-leaders-managers-training"
            element={<GenerativeAIForBusinessITLeadersManagersTraining />}
          />

          <Route
            path="/course/generative-ai/generative-ai-for-business-analysts-functional-it-consultants-training"
            element={
              <GenerativeAIForBusinessAnalystsFunctionalITConsultantsTraining />
            }
          />

          <Route
            path="/course/generative-ai/cloud-fundamentals-for-business-managers-product-managers-training"
            element={
              <CloudFundamentalsForBusinessManagersProductManagersTraining />
            }
          />

          <Route
            path="/course/generative-ai/generative-ai-architect-advanced-program-training"
            element={<GenerativeAIArchitectAdvancedProgramTraining />}
          />

          <Route
            path="/course/generative-ai/multi-cloud-finops-aws-gcp-azure-training"
            element={<MultiCloudFinOpsAWsgcpAzureTraining />}
          />

          <Route
            path="/course/generative-ai/introduction-to-generative-ai-training"
            element={<IntroductionToGenerativeAITraining />}
          />

          <Route
            path="/course/generative-ai/generative-ai-for-agile-leaders-training"
            element={<GenerativeAIforAgileLeadersTraining />}
          />

          <Route
            path="/course/generative-ai/generative-ai-for-scrum-masters-training"
            element={<GenerativeAIforScrumMastersTraining />}
          />

          <Route
            path="/course/generative-ai/generative-ai-in-hr-certification-course"
            element={<GenerativeAIinHRCertificationCourse />}
          />

          <Route
            path="/course/generative-ai/generative-ai-for-software-developers-training"
            element={<GenerativeAIforSoftwareDevelopersTraining />}
          />

          <Route
            path="/course/generative-ai/generative-ai-for-project-managers-training"
            element={<GenerativeAIForProjectManagersTraining />}
          />

          <Route
            path="/course/generative-ai/prompt-engineering-course"
            element={<PromptEngineeringCourse />}
          />

          <Route
            path="/course/generative-ai/generative-ai-for-product-owners-product-managers-certification-training"
            element={
              <GenerativeAIForProductOwnersProductManagersCertificationTraining />
            }
          />

          <Route
            path="/course/generative-ai/mastering-generative-ai-tools-online"
            element={<MasteringGenerativeAIToolsOnline />}
          />

          {/* ✨ E-LEARNING COURSES */}
          <Route
            path="/elearning/accredited-agile-scrum-master-online-course"
            element={<AccreditedAgileScrumMasterOnlineCourse />}
          />
          <Route
            path="/elearning/capm-online-course"
            element={<CertifiedAssociateInProjectManagementOnlineCourse />}
          />
          <Route
            path="/elearning/pmp-online-course"
            element={<ProjectManagementProfessionalPrepOnlineCourse />}
          />
          <Route
            path="/elearning/pmp-orientation"
            element={<SimpliaxisPMPOrientationCourse />}
          />
          <Route
            path="/elearning/lean-six-sigma-green-belt-basics"
            element={<LeanSixSigmaGreenBeltBasicsOnlineCourse />}
          />
          <Route
            path="/elearning/lean-six-sigma-green-belt"
            element={<LeanSixSigmaGreenBeltELearningCourse />}
          />
          <Route
            path="/elearning/product-owner-online-course"
            element={<AccreditedAgileRolesProductOwnerOnlineCourse />}
          />
          <Route
            path="/elearning/lean-six-sigma-yellow-belt"
            element={<LeanSixSigmaYellowBeltELearningCourse />}
          />
          <Route
            path="/elearning/scrum-master-certified"
            element={<ScrumMasterCertifiedCourse />}
          />
          <Route
            path="/elearning/az-900-course"
            element={<MicrosoftAzureFundamentalsCourse />}
          />
          <Route
            path="/elearning/project-management-fundamentals-course"
            element={<ProjectManagementFundamentalsCourse />}
          />
          <Route
            path="/elearning/microsoft-power-bi-skills-course"
            element={<MicrosoftPowerBISkillsCourse />}
          />
          <Route
            path="/elearning/pmi-organizational-change-management-course"
            element={<PMIOrganizationalChangeManagementCourse />}
          />
          <Route
            path="/elearning/aws-certified-cloud-practitioner-course"
            element={<AWSCertifiedCloudPractitionerCourse />}
          />
          <Route
            path="/elearning/microsoft-azure-administrator-az-104-course"
            element={<MicrosoftAzureAdministratorCourse />}
          />
          <Route
            path="/elearning/scrum-product-owner-training-course"
            element={<ScrumProductOwnerTrainingCourse />}
          />
          <Route
            path="/elearning/certified-information-security-manager-course"
            element={<CertifiedInformationSecurityManagerCourse />}
          />
          <Route
            path="/elearning/scrum-developer-training-course"
            element={<ScrumDeveloperTrainingCourse />}
          />
          <Route
            path="/elearning/microsoft-project-2013-basic-course"
            element={<MicrosoftProject2013BasicCourse />}
          />
          <Route
            path="/elearning/microsoft-project-2013-advanced-course"
            element={<MicrosoftProject2013AdvancedCourse />}
          />
          <Route
            path="/elearning/microsoft-azure-security-technologies-az-500-course"
            element={<MicrosoftAzureSecurityTechnologiesAZ500Course />}
          />
          <Route
            path="/elearning/aws-certified-devops-engineer-professional-course"
            element={<AWSCertifiedDevOpsEngineerProfessionalCourse />}
          />
          <Route
            path="/elearning/accredited-devops-foundation-course"
            element={<AccreditedDevOpsFoundationCourse />}
          />
          <Route
            path="/elearning/cissp-training-course"
            element={<CISSPTrainingCourse />}
          />
          <Route
            path="/elearning/cisa-training-course"
            element={<CISATrainingCourse />}
          />
          <Route
            path="/elearning/microsoft-azure-developer-az-204-course"
            element={<MicrosoftAzureDeveloperAZ204Course />}
          />
          <Route
            path="/elearning/microsoft-azure-solutions-architect-az-305-course"
            element={<MicrosoftAzureSolutionsArchitectAZ305Course />}
          />

          {/* ✨ DevOps  COURSES */}

          <Route
            path="/course/devOps/devops-foundation-certification"
            element={<DevOpsFoundationCertificationTraining />}
          />

          <Route
            path="/course/devOps/Docker-and-kubernetes"
            element={<DockerAndKubernetesTraining />}
          />

          <Route
            path="/course/devOps/devsecops-foundation-certification"
            element={<DevSecOpsFoundationCertificationTraining />}
          />

          {/* ✨ Service  COURSES */}

          <Route
            path="/course/service/itil-foundation-cerification"
            element={<ITILFoundationCertification />}
          />

          {/* ✨ Cloud Computing  COURSES */}

          <Route
            path="/course/cloud-computing/aws-sysops-administrator-certification"
            element={<AWSSysOpsAdministratorCertificationTraining />}
          />

          <Route
            path="/course/cloud-computing/aws-devops-engineer-certification"
            element={<AWSDevOpsEngineerCertificationTraining />}
          />

          <Route
            path="/course/cloud-computing/aws-cloud-practitioner-certification"
            element={<AWSCloudPractitionerCertificationTraining />}
          />

          <Route
            path="/course/cloud-computing/aws-solutions-architect-professional-certification"
            element={<AWSSolutionsArchitectProfessionalCertificationTraining />}
          />

          <Route
            path="/course/cloud-computing/cloud-computing-with-aws-training"
            element={<CloudComputingWithAWSTraining />}
          />


          {/* ✨ Data Science  COURSES */}

          <Route
            path="/course/data-science/data-science-with-python-training"
            element={<DataScienceWithPythonTraining />}
          />

          <Route
            path="/course/data-science/python-django-pd-training"
            element={<PythonDjangoTraining />}
          />

          <Route
            path="/course/data-science/introduction-to-artificial-intelligence-and-machine-learning-ai-and-ml"
            element={<IntroductionToArtificialIntelligenceMachineLearning />}
          />

          <Route
            path="/course/data-science/artificial-intelligence-training"
            element={<ArtificialIntelligenceTraining />}
          />

          <Route
            path="/course/data-science/data-science-training"
            element={<DataScienceTraining />}
          />

          <Route
            path="/course/data-science/certified-artificial-intelligence-for-agile-leaders-training"
            element={<CertifiedArtificialIntelligenceForAgileLeadersTraining />}
          />

          {/* ✨ Technology  COURSES */}

          <Route
            path="/course/technology/angular-js-training"
            element={<AngularJSTraining />}
          />

          <Route
            path="/course/technology/react-native-training"
            element={<ReactNativeTraining />}
          />


          <Route
            path="/course/technology/introduction-to-blockchain-training"
            element={<IntroductionToBlockchainTraining />}
          />

          <Route
            path="/course/technology/react-js-training"
            element={<ReactJSTraining />}
          />

          <Route
            path="/course/technology/python-for-beginners-training"
            element={<PythonforBeginnersTraining />}
          />

          {/* ✨ Others Courses */}

          <Route
            path="/course/others/python-programming-training"
            element={<PythonProgrammingTraining />}
          />

          <Route
            path="/course/others/pci-dss-compliance-training"
            element={<PCIDSSComplianceTraining />}
          />

          <Route
            path="/course/others/microsoft-az-designing-implementing-microsoft-devops-solution"
            element={<MicrosoftAZDesigningImplementingMicrosoftDevOpsSolution />}
          />

          <Route
            path="/course/others/microsoft-power-bi-training"
            element={<MicrosoftPowerBITraining />}
          />

          <Route
            path="/course/others/microsoft-azure-fundamentals-az-certification-training"
            element={<MicrosoftAzureFundamentalsAZCertificationTraining />}
          />

          <Route
            path="/course/others/az-microsoft-azure-administrator-training"
            element={<AZMicrosoftAzureAdministratorTraining />}
          />

          <Route
            path="/course/others/microsoft-azure-developer-associate-certification-course"
            element={<MicrosoftAzureDeveloperAssociateCertificationCourse />}
          />

          <Route
            path="/course/others/certified-information-systems-security-professional-training"
            element={<CertifiedInformationSystemsSecurityProfessionalTraining />}
          />

          <Route
            path="/course/others/microsoft-certified-azure-solutions-architect-expert-certification"
            element={<MicrosoftCertifiedAzureSolutionsArchitectExpertCertification />}
          />

          {/* ✨ BUSINESS COURSES */}
          <Route
            path="/course/business/business-case-writing-training"
            element={<BusinessCaseWritingTraining />}
          />
          <Route
            path="/course/business/conflict-management-training"
            element={<ConflictManagementTraining />}
          />
          <Route
            path="/course/business/certified-business-analysis-professional-cbap-certification-training"
            element={<CertifiedBusinessAnalysisProfessionalCBAPCertificationTraining />}
          />
          <Route
            path="/course/business/change-management-training"
            element={<ChangeManagementTraining />}
          />
          <Route
            path="/course/business/ccba-certification-training"
            element={<CertificationOfCapabilityInBusinessAnalysisTraining />}
          />
          <Route
            path="/course/business/ecba-certification-training"
            element={<EntryCertificateInBusinessAnalysisECBACertificationTraining />}
          />
          <Route
            path="/course/business/design-thinking-training"
            element={<DesignThinkingTraining />}
          />
          <Route
            path="/course/business/agile-analysis-certification-iiba-aac-certification-training"
            element={<AgileAnalysisCertification />}
          />

          {/* ✨ MICRO-CREDENTIALS */}
          <Route
            path="/course/micro-credentials/agile-objectives-and-key-results-agile-okrs-microcredential-training"
            element={<AgileObjectivesAndKeyResultsAgileOKRsMicroCredentialTraining />}
          />
          <Route
            path="/course/micro-credentials/ai-for-scrum-masters-micro-credential-course"
            element={<AIForScrumMastersMicroCredentialCourse />}
          />
          <Route
            path="/course/micro-credentials/ai-for-product-owners-micro-credential-training"
            element={<AIForProductOwnersMicroCredentialTraining />}
          />
          <Route
            path="/course/micro-credentials/scrum-essentials"
            element={<ScrumEssentials />}
          />
          <Route
            path="/course/micro-credentials/conflict-management-skills-course"
            element={<ConflictManagementSkillsCourse />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-product-metrics-micro-credential-course-training"
            element={<ICAgileAIForProductMetricsMicroCredentialCourseTraining />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-product-planning-micro-credential-course-training"
            element={<ICAgileAIForProductPlanningMicroCredentialCourseTraining />}
          />
          <Route
            path="/course/micro-credentials/scrum-better-with-kanban-sbk-micro-credential-training"
            element={<ScrumBetterWithKanbanSBKMicroCredentialTraining />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-stakeholder-management-micro-credential-course"
            element={<ICAgileAIForStakeholderManagementMicroCredentialCourse />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-product-discovery-micro-credential-course-training"
            element={<ICAgileAIForProductDiscoveryMicroCredentialCourseTraining />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-product-strategy-micro-credential-course"
            element={<MicroStrategy />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-customer-insights-micro-credential-training"
            element={<MicroInsights />}
          />
          <Route
            path="/course/micro-credentials/agile-coaching-skills-micro-credential-training"
            element={<AgileCoachingSkillsMicroCredentialTraining />}
          />

          {/* ✨ ON DEMAND MICRO-CREDENTIALS */}
          <Route
            path="/course/on-demand-microcredentials/ai-for-scrum-masters-microcredential-course"
            element={<AIForScrumMastersMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/ai-for-product-owners-microcredential-course"
            element={<AIForProductOwnersMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/agile-essentials-microcredential-course"
            element={<AgileEssentialsMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/scrum-essentials-microcredential-course"
            element={<ScrumEssentialsMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/metrics-that-matter-improving-product-outcomes-microcredential-course"
            element={<MetricsThatMatterImprovingProductOutcomesMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/introduction-to-agile-coaching-microcredential-course"
            element={<IntroductionToAgileCoachingMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/get-started-with-devops-microcredential-course"
            element={<GetStartedWithDevOpsMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/coaching-for-transformation-sustaining-change-microcredential-course"
            element={<CoachingForTransformationSustainingChangeMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/coaching-for-change-making-agility-work-microcredential-course"
            element={<CoachingForChangeMakingAgilityWorkMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/change-management-microcredential-course"
            element={<ChangeManagementMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/becoming-an-agile-coach-microcredential-course"
            element={<BecomingAnAgileCoachMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/ai-for-product-discovery-and-strategy-microcredentials-course"
            element={<AIForProductDiscoveryAndStrategyMicrocredentialsCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/agile-stakeholder-engagement-effective-communication-strategies-microcredential-course"
            element={<AgileStakeholderEngagementEffectiveCommunicationStrategiesMicrocredentialCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/agile-for-marketing-microcredentials-course"
            element={<AgileForMarketingMicrocredentialsCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/agile-for-hr-microcredentials-course"
            element={<AgileForHRMicrocredentialsCourse />}
          />
          <Route
            path="/course/on-demand-microcredentials/agile-coaching-skills-microcredential-course"
            element={<AgileCoachingSkillsMicrocredentialCourse />}
          />

          <Route path="*" element={<NotFound />} />
          </Routes>
          <CartDrawer />
          </BrowserRouter>
        </CartProvider>
        </AuthModalProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
