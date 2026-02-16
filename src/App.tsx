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
  AgileCourse1, 
  AgileCourse2, 
  AgileCourse3, 
  AgileCourse4, 
  AgileCourse5 
} from "./pages/allCourses/agile";

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
          <Route path="/category/project-management" element={<ProjectManagement />} />
          <Route path="/category/it-service-management" element={<ITServiceManagement />} />
          <Route path="/category/quality-process" element={<QualityProcess />} />
          <Route path="/category/leadership-coaching" element={<LeadershipCoaching />} />
          <Route path="/category/business-skills" element={<BusinessSkills />} />
          <Route path="/category/ai-technology" element={<AiTechnology />} />
          <Route path="/category/cyber-security" element={<CyberSecurity />} /> 
          <Route path="/sub-category" element={<SubCategoryPage />} />
          <Route path="/demo-one" element={<DemoOne />} />
          
          {/* ✨ AGILE COURSES - Using Barrel Export Pattern */}
          <Route path="/course/agile-course-1" element={<AgileCourse1 />} />
          <Route path="/course/agile-course-2" element={<AgileCourse2 />} />
          <Route path="/course/agile-course-3" element={<AgileCourse3 />} />
          <Route path="/course/agile-course-4" element={<AgileCourse4 />} />
          <Route path="/course/agile-course-5" element={<AgileCourse5 />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
