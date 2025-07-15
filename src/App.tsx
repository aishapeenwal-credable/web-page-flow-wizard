
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
import { VATReturns } from "./pages/VATReturns";
import { ProcessingStep } from "./pages/ProcessingStep";
import { LoanOffer } from "./pages/LoanOffer";
import { AuthorizedSignatory } from "./pages/AuthorizedSignatory";
import { VideoVerification } from "./pages/VideoVerification";
import { BankAccountVerification } from "./pages/BankAccountVerification";
import { UAEFTSStep } from "./pages/UAEFTSStep";
import { AgreementSigning } from "./pages/AgreementSigning";
import { ThankYou } from "./pages/ThankYou";
import { LoanApplication } from "./components/LoanApplication";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top with both methods for maximum compatibility
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
          <Route path="/loan-application/vat-returns" element={<VATReturns />} />
          <Route path="/loan-application/processing" element={<ProcessingStep />} />
          <Route path="/loan-application/loan-offer" element={<LoanOffer />} />
          <Route path="/loan-application/authorized-signatory" element={<AuthorizedSignatory />} />
          <Route path="/loan-application/video-verification" element={<VideoVerification />} />
          <Route path="/loan-application/bank-account" element={<BankAccountVerification />} />
          <Route path="/loan-application/uae-fts" element={<UAEFTSStep />} />
          <Route path="/loan-application/agreement-signing" element={<AgreementSigning />} />
          <Route path="/loan-application/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
