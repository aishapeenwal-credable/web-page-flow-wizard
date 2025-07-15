import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { PageFooter } from "@/components/PageFooter";
import { ProcessingStep as ProcessingStepComponent } from "@/components/steps/ProcessingStep";

export const ProcessingStep = () => {
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: true },
    { id: 2, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: true },
    { id: 3, name: "AECB Score", description: "Add partners and check AECB scores.", completed: true },
    { id: 4, name: "VAT Returns", description: "Check VAT returns easily.", completed: true },
    { id: 5, name: "Loan Offer", description: "View and accept loan offers.", active: true }
  ];

  const handleNext = () => {
    navigate("/loan-application/loan-offer");
  };

  const handlePrev = () => {
    navigate("/loan-application/vat-returns");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        <ProgressIndicator steps={steps} currentStep={5} />
        <div className="mt-8">
          <ProcessingStepComponent onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      <PageFooter />
    </div>
  );
};