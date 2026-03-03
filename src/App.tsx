<<<<<<< HEAD
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgileScrum from "./pages/categories/AgileScrum";
import ProjectManagement from "./pages/categories/ProjectManagement";
import ITServiceManagement from "./pages/categories/ITServiceManagement";
import QualityProcess from "./pages/categories/QualityProcess";
import LeadershipCoaching from "./pages/categories/LeadershipCoaching";
import BusinessSkills from "./pages/categories/BusinessSkills";
import AiTechnology from "./pages/categories/AiTechnology";
import CyberSecurity from "./pages/categories/CyberSecurity";
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
  ICAgileAIForProductStrategyMicroCredentialCourse,
  ICAgileAIForCustomerInsightsMicroCredentialTraining,
  AgileCoachingSkillsMicroCredentialTraining
} from "./pages/allCourses/Microcredentials";

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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
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

          <Route path="/" element={<Index />} />

          {/* categories routes */}
          <Route path="/category/agile-scrum" element={<AgileScrum />} />
          <Route path="/category/project-management" element={<ProjectManagement />} />
          <Route path="/category/it-service-management" element={<ITServiceManagement />} />
          <Route path="/category/quality-process" element={<QualityProcess />} />
          <Route path="/category/leadership-coaching" element={<LeadershipCoaching />} />
          <Route path="/category/business-skills" element={<BusinessSkills />} />
          <Route path="/category/ai-technology" element={<AiTechnology />} />
          <Route path="/category/cyber-security" element={<CyberSecurity />} />
          <Route path="/sub-category" element={<SubCategoryPage />} />
          <Route path="/demo-one" element={<DemoOne />} />


          {/* ✨ AGILE COURSES */}
          <Route
            path="/course/csm-certificaton-training"
            element={<CertifiedScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/cspo-certificaton-training"
            element={<CertifiedScrumProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/a-csm-certificaton-training"
            element={<AdvancedCertifiedScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/a-cspo-certificaton-training"
            element={
              <AdvancedCertifiedScrumProductOwnerCertificationTraining />
            }
          />
          <Route
            path="/course/csd-certification-training"
            element={<CertifiedScrumDeveloperCertificationTraining />}
          />
          <Route
            path="/course/icagile-systems-coaching-certification-training"
            element={<ICAgileSystemsCoachingCertificationTraining />}
          />
          <Route
            path="/course/icagile-people-development-certification-training"
            element={<ICAgilePeopleDevelopmentCertificationTraining />}
          />
          <Route
            path="/course/icagile-lean-portfolio-management-certification-training"
            element={<ICAgileLeanPortfolioManagementCertificationTraining />}
          />
          <Route
            path="/course/icagile-foundations-of-ai-certification-training"
            element={<ICAgileFoundationsOfAICertificationTraining />}
          />
          <Route
            path="/course/icagile-agile-team-facilitation-certification-training"
            element={<ICAgileAgileTeamFacilitationCertificationTraining />}
          />
          <Route
            path="/course/applying-professional-kanban-apk-certification-course"
            element={<ApplyingProfessionalKanbanCertificationCourse />}
          />
          <Route
            path="/course/icagile-agile-product-ownership-icp-apo-certification-training"
            element={<ICAgileAgileProductOwnershipICPAPOCertificationTraining />}
          />
          <Route
            path="/course/pspbm-skills-certification-course"
            element={<PSPBMSkillsCertificationCourse />}
          />
          <Route
            path="/course/icagile-agile-project-delivery-management-icp-apm-certification-training"
            element={<ICAgileAgileProjectDeliveryManagementICPAPMCertificationTraining />}
          />
          <Route
            path="/course/ICAgile-Product-Management-(ICP-PDM)-Certification-Training"
            element={<ICAgileProductManagementCertificationTraining />}
          />
          <Route
            path="/course/icagile-certified-agile-leadership-icp-lea-training"
            element={<ICAgileCertifiedAgileLeadershipTraining />}
          />
          <Route
            path="/course/jira-software-training-for-agile-projects"
            element={<JiraSoftwareTrainingforAgileProjects />}
          />
          <Route
            path="/course/agile-project-management-course"
            element={<AgileProjectManagementCourse />}
          />
          <Route
            path="/course/certified-scrum-professional-product-owner-csp-po-certification-training"
            element={<CertifiedScrumProfessionalProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/agile-and-scrum-training"
            element={<AgileAndScrumTraining />}
          />
          <Route
            path="/course/pmi-agile-certified-practitioner-pmi-acp-certification-training"
            element={<PMIAgileCertifiedPractitionerPMIACP />}
          />
          <Route
            path="/course/psm-i-certification-training"
            element={<ProfessionalScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/casp-1-certification-training"
            element={<CertifiedAgileScalingPractitioner1Training />}
          />
          <Route
            path="/course/agile-coaching-skills-certified-facilitator-caf-training"
            element={<AgileCoachingSkillsCertifiedFacilitatorTraining />}
          />
          <Route
            path="/course/professional-scrum-master-advanced-psm-a-certification-training"
            element={<ProfessionalScrumMasterAdvancedCertificationTraining />}
          />
          <Route
            path="/course/icagile-certified-professional-in-agile-coaching-icp-acc-certification-training"
            element={<ICAgileCertifiedProfessionalinAgileCoachingICPACCertificationTraining />}
          />
          <Route
            path="/course/professional-scrum-with-kanban-psk-certification-training"
            element={<ProfessionalScrumWithKanbanCertificationTraining />}
          />
          <Route
            path="/course/professional-scrum-product-owner-certification-training"
            element={<ProfessionalScrumProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/scrum-at-scale-certification-training"
            element={<ScrumAtScaleCertificationTraining />}
          />
          <Route
            path="/course/icagile-enterprise-agile-coaching-icp-cat-certification-training"
            element={<ICAgileEnterpriseAgileCoachingCertificationTraining />}
          />
          <Route
            path="/course/professional-agile-leadership-essentials-pal-e-certification-training"
            element={<ProfessionalAgileLeadershipEssentialsCertificationTraining />}
          />
          <Route
            path="/course/behaviour-driven-development-bdd-training"
            element={<BehaviourDrivenDevelopmentBDDTraining />}
          />

          <Route
            path="/course/certified-agile-leader®-1-(cal 1™)-certification-training"
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
            element={<ICAgileAgilityInTheEnterpriseICPentCertificationTraining />}
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
            path="/course/leading-safe-certification-training"
            element={<LeadingSafeCertificationTraining />}
          />
          <Route
            path="/course/ai-empowered-safe-scrum-master-ssm-certification-training"
            element={<AiEmpoweredSafeScrumMasterSSMCertificationTraining />}
          />
          <Route
            path="/course/product-manager-popm-certification-training"
            element={<ProductManagerPOPMCertificationTraining />}
          />
          <Route
            path="/course/safe-practice-consultant-spc-certification-training"
            element={<SafePracticeConsultantSPCCertificationTraining />}
          />
          <Route
            path="/course/safe-lean-portfolio-management-certification-training"
            element={<SafeLeanPortfolioManagementCertificationTraining />}
          />
          <Route
            path="/course/safe-architects-certification-training"
            element={<SafeArchitectsCertificationTraining />}
          />
          <Route
            path="/course/safe-for-teams-certification-training"
            element={<SafeForTeamsCertificationTraining />}
          />

          <Route
            path="/course/advanced-safe-practice-consultant-(aspc)-certification-path"
            element={<AdvancedSAFePracticeConsultantASPCCertificationPath />}
          />

          <Route
            path="/course/ai-empowered-safe-release-train-engineer-(rte)-certification-training"
            element={<AIEmpoweredSAFeReleaseTrainEngineerRTECertificationTraining />}
          />

          <Route
            path="/course/safe-devops-certification-training"
            element={<SAFEDevOpsCertificationTraining />}
          />

          <Route
            path="/course/advanced-facilitator-conflict-collaboration-micro-credential-course"
            element={<AdvancedFacilitatorConflictCollaborationMicroCredentialCourse />}
          />

          <Route
            path="/course/achieving-responsible-ai-with-safe-micro-credential-course"
            element={<AchievingResponsibleAICourse />}
          />

          <Route
            path="/course/agile-hr-explorer-(ahre)-training-and-certification"
            element={<AgileHRexplorerCourse />}
          />

          <Route
            path="/course/advanced-scrum-master-certification-path"
            element={<AdvancedScrumMasterCertificationPath />}
          />

          <Route
            path="/course/safe-for-hardware-certification-training"
            element={<SAFeForHardwareCourse />}
          />

          <Route
            path="/course/ai-native-foundations-certification-training-course"
            element={<AiNativeFoundationsCertificationTrainingCourse />}
          />

          <Route
            path="/course/ai-native-change-agent-certification-training-course"
            element={<AiNativeChangeAgentCertificationTrainingCourse />}
          />

          {/*Add more Quality routes here as needed */}

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
            element={<ICAgileAIForProductStrategyMicroCredentialCourse />}
          />
          <Route
            path="/course/micro-credentials/icagile-ai-for-customer-insights-micro-credential-training"
            element={<ICAgileAIForCustomerInsightsMicroCredentialTraining />}
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
=======
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AgileScrum from "./pages/categories/AgileScrum";
import ProjectManagement from "./pages/categories/ProjectManagement";
import ITServiceManagement from "./pages/categories/ITServiceManagement";
import QualityProcess from "./pages/categories/QualityProcess";
import LeadershipCoaching from "./pages/categories/LeadershipCoaching";
import BusinessSkills from "./pages/categories/BusinessSkills";
import AiTechnology from "./pages/categories/AiTechnology";
import CyberSecurity from "./pages/categories/CyberSecurity";
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




// ----------------------------- Quality Courses -----------------------------
import {
  LeanSixSigmaBlackBelt,
  LeanSixSigmaGreenBelt,
  LeanSixSigmaYellowBelt,
  QualityRootCauseAnalysis,
  QualitySixSigmaFundamentals
} from "./pages/allCourses/quality";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* categories routes */}
          <Route path="/category/agile-scrum" element={<AgileScrum />} />
          <Route
            path="/category/project-management"
            element={<ProjectManagement />}
          />
          <Route
            path="/category/it-service-management"
            element={<ITServiceManagement />}
          />
          <Route
            path="/category/quality-process"
            element={<QualityProcess />}
          />
          <Route
            path="/category/leadership-coaching"
            element={<LeadershipCoaching />}
          />
          <Route
            path="/category/business-skills"
            element={<BusinessSkills />}
          />
          <Route path="/category/ai-technology" element={<AiTechnology />} />
          <Route path="/category/cyber-security" element={<CyberSecurity />} />
          <Route path="/sub-category" element={<SubCategoryPage />} />
          <Route path="/demo-one" element={<DemoOne />} />

          {/* ✨ AGILE COURSES */}
          <Route
            path="/course/csm-certificaton-training"
            element={<CertifiedScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/cspo-certificaton-training"
            element={<CertifiedScrumProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/a-csm-certificaton-training"
            element={<AdvancedCertifiedScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/a-cspo-certificaton-training"
            element={
              <AdvancedCertifiedScrumProductOwnerCertificationTraining />
            }
          />
          <Route
            path="/course/csd-certification-training"
            element={<CertifiedScrumDeveloperCertificationTraining />}
          />
          <Route
            path="/course/icagile-systems-coaching-certification-training"
            element={<ICAgileSystemsCoachingCertificationTraining />}
          />
          <Route
            path="/course/icagile-people-development-certification-training"
            element={<ICAgilePeopleDevelopmentCertificationTraining />}
          />
          <Route
            path="/course/icagile-lean-portfolio-management-certification-training"
            element={<ICAgileLeanPortfolioManagementCertificationTraining />}
          />
          <Route
            path="/course/icagile-foundations-of-ai-certification-training"
            element={<ICAgileFoundationsOfAICertificationTraining />}
          />
          <Route
            path="/course/icagile-agile-team-facilitation-certification-training"
            element={<ICAgileAgileTeamFacilitationCertificationTraining />}
          />
          <Route
            path="/course/applying-professional-kanban-apk-certification-course"
            element={<ApplyingProfessionalKanbanCertificationCourse />}
          />
          <Route
            path="/course/icagile-agile-product-ownership-icp-apo-certification-training"
            element={<ICAgileAgileProductOwnershipICPAPOCertificationTraining />}
          />
          <Route
            path="/course/pspbm-skills-certification-course"
            element={<PSPBMSkillsCertificationCourse />}
          />
          <Route
            path="/course/icagile-agile-project-delivery-management-icp-apm-certification-training"
            element={<ICAgileAgileProjectDeliveryManagementICPAPMCertificationTraining />}
          />
          <Route
            path="/course/ICAgile-Product-Management-(ICP-PDM)-Certification-Training"
            element={<ICAgileProductManagementCertificationTraining />}
          />
          <Route
            path="/course/icagile-certified-agile-leadership-icp-lea-training"
            element={<ICAgileCertifiedAgileLeadershipTraining />}
          />
          <Route
            path="/course/jira-software-training-for-agile-projects"
            element={<JiraSoftwareTrainingforAgileProjects />}
          />
          <Route
            path="/course/agile-project-management-course"
            element={<AgileProjectManagementCourse />}
          />
          <Route
            path="/course/certified-scrum-professional-product-owner-csp-po-certification-training"
            element={<CertifiedScrumProfessionalProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/agile-and-scrum-training"
            element={<AgileAndScrumTraining />}
          />
          <Route
            path="/course/pmi-agile-certified-practitioner-pmi-acp-certification-training"
            element={<PMIAgileCertifiedPractitionerPMIACP />}
          />
          <Route
            path="/course/psm-i-certification-training"
            element={<ProfessionalScrumMasterCertificationTraining />}
          />
          <Route
            path="/course/casp-1-certification-training"
            element={<CertifiedAgileScalingPractitioner1Training />}
          />
          <Route
            path="/course/agile-coaching-skills-certified-facilitator-caf-training"
            element={<AgileCoachingSkillsCertifiedFacilitatorTraining />}
          />
          <Route
            path="/course/professional-scrum-master-advanced-psm-a-certification-training"
            element={<ProfessionalScrumMasterAdvancedCertificationTraining />}
          />
          <Route
            path="/course/icagile-certified-professional-in-agile-coaching-icp-acc-certification-training"
            element={<ICAgileCertifiedProfessionalinAgileCoachingICPACCertificationTraining />}
          />
          <Route
            path="/course/professional-scrum-with-kanban-psk-certification-training"
            element={<ProfessionalScrumWithKanbanCertificationTraining />}
          />
          <Route
            path="/course/professional-scrum-product-owner-certification-training"
            element={<ProfessionalScrumProductOwnerCertificationTraining />}
          />
          <Route
            path="/course/scrum-at-scale-certification-training"
            element={<ScrumAtScaleCertificationTraining />}
          />
          <Route
            path="/course/icagile-enterprise-agile-coaching-icp-cat-certification-training"
            element={<ICAgileEnterpriseAgileCoachingCertificationTraining />}
          />
          <Route
            path="/course/professional-agile-leadership-essentials-pal-e-certification-training"
            element={<ProfessionalAgileLeadershipEssentialsCertificationTraining />}
          />
          <Route
            path="/course/behaviour-driven-development-bdd-training"
            element={<BehaviourDrivenDevelopmentBDDTraining />}
          />

          <Route
            path="/course/certified-agile-leader®-1-(cal 1™)-certification-training"
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
            element={<ICAgileAgilityInTheEnterpriseICPentCertificationTraining />}
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
            path="/course/leading-safe-certification-training"
            element={<LeadingSafeCertificationTraining />}
          />
          <Route
            path="/course/ai-empowered-safe-scrum-master-ssm-certification-training"
            element={<AiEmpoweredSafeScrumMasterSSMCertificationTraining />}
          />
          <Route
            path="/course/product-manager-popm-certification-training"
            element={<ProductManagerPOPMCertificationTraining />}
          />
          <Route
            path="/course/safe-practice-consultant-spc-certification-training"
            element={<SafePracticeConsultantSPCCertificationTraining />}
          />
          <Route
            path="/course/safe-lean-portfolio-management-certification-training"
            element={<SafeLeanPortfolioManagementCertificationTraining />}
          />
          <Route
            path="/course/safe-architects-certification-training"
            element={<SafeArchitectsCertificationTraining />}
          />
          <Route
            path="/course/safe-for-teams-certification-training"
            element={<SafeForTeamsCertificationTraining />}
          />

          <Route
            path="/course/advanced-safe-practice-consultant-(aspc)-certification-path"
            element={<AdvancedSAFePracticeConsultantASPCCertificationPath />}
          />

          <Route
            path="/course/ai-empowered-safe-release-train-engineer-(rte)-certification-training"
            element={<AIEmpoweredSAFeReleaseTrainEngineerRTECertificationTraining />}
          />

          <Route
            path="/course/safe-devops-certification-training"
            element={<SAFEDevOpsCertificationTraining />}
          />

          <Route
            path="/course/advanced-facilitator-conflict-collaboration-micro-credential-course"
            element={<AdvancedFacilitatorConflictCollaborationMicroCredentialCourse />}
          />

          <Route
            path="/course/achieving-responsible-ai-with-safe-micro-credential-course"
            element={<AchievingResponsibleAICourse />}
          />

          <Route
            path="/course/agile-hr-explorer-(ahre)-training-and-certification"
            element={<AgileHRexplorerCourse />}
          />

          <Route
            path="/course/advanced-scrum-master-certification-path"
            element={<AdvancedScrumMasterCertificationPath />}
          />

          <Route
            path="/course/safe-for-hardware-certification-training"
            element={<SAFeForHardwareCourse />}
          />

          <Route
            path="/course/ai-native-foundations-certification-training-course"
            element={<AiNativeFoundationsCertificationTrainingCourse />}
          />

          <Route
            path="/course/ai-native-change-agent-certification-training-course"
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
            element={<PRINCE2AgileFoundationAndPractitionerCertificationTraining />}
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
            element={<PortfolioManagementProfessionalPfMPCertificationTraining />}
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
            element={<GenerativeAIForBusinessAnalystsFunctionalITConsultantsTraining />}
          />

          <Route
            path="/course/generative-ai/cloud-fundamentals-for-business-managers-product-managers-training"
            element={<CloudFundamentalsForBusinessManagersProductManagersTraining />}
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
            element={<GenerativeAIForProductOwnersProductManagersCertificationTraining />}
          />

          <Route
            path="/course/generative-ai/mastering-generative-ai-tools-online"
            element={<MasteringGenerativeAIToolsOnline />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
>>>>>>> origin/dev
