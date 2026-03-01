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
  SafeArchitectsCertificationTraining 
} from './pages/allCourses/safe';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
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

          {/* Legacy Agile Routes */}
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

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
