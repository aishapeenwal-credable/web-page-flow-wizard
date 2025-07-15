
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ApplicantDetails } from "./pages/ApplicantDetails";
import { BankStatements } from "./pages/BankStatements";
import { AECBScore } from "./pages/AECBScore";
import { AnalysisLoading } from "./pages/AnalysisLoading";
import { LoanApplication } from "./components/LoanApplication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/applicant-details" element={<ApplicantDetails />} />
          <Route path="/bank-statements" element={<BankStatements />} />
          <Route path="/aecb-score" element={<AECBScore />} />
          <Route path="/analysis-loading" element={<AnalysisLoading />} />
          <Route path="/loan-application" element={<LoanApplication />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
