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
// Instead of 5 separate import lines, we import all at once from the index.ts
import {
  CertifiedScrumMasterCertificationTraining,
  CertifiedScrumProductOwnerCertificationTraining,
  AdvancedCertifiedScrumMasterCertificationTraining,
  AdvancedCertifiedScrumProductOwnerCertificationTraining,
  CertifiedScrumDeveloperCertificationTraining,
  AgileAndScrumTraining,
  PMIAgileCertifiedPractitionerPMIACP,
  ProfessionalScrumMasterCertificationTraining,
  CertifiedAgileScalingPractitioner1Training,
  AgileCoachingSkillsCertifiedFacilitatorTraining,
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
  ICAgileAIforCustomerInsightsMicroCredentialTraining
} from './pages/allCourses/agile';

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

          {/* ✨ AGILE COURSES - Using Barrel Export Pattern */}
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


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
