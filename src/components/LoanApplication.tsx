import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Header } from "./Header";
import { ProgressIndicator } from "./ProgressIndicator";
import { VATReturns } from "./steps/VATReturns";
import { ProcessingStep } from "./steps/ProcessingStep";
import { LoanOffer } from "./steps/LoanOffer";
import { AuthorizedSignatory } from "./steps/AuthorizedSignatory";
import { KYCVerification } from "./steps/KYCVerification";
import { BankAccountVerification } from "./steps/BankAccountVerification";
import { AgreementSigning } from "./steps/AgreementSigning";
import { UAEFTSStep } from "./steps/UAEFTSStep";

export const LoanApplication = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: true },
    { id: 2, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: true },
    { id: 3, name: "AECB Score", description: "Add partners and check AECB scores.", completed: true },
    { id: 4, name: "VAT Returns", description: "Check VAT returns easily.", active: currentStep === 1 },
    { id: 5, name: "Loan Offer", description: "View and accept loan offers.", active: currentStep >= 3 }
  ];

  const extendedSteps = [
    { id: 1, name: "Authorised Signatory", description: "Board resolution and key persons", active: currentStep === 4 },
    { id: 2, name: "Video Verification", description: "Verify signatories via CKYC/VKYC", active: currentStep === 5 },
    { id: 3, name: "Bank Account", description: "Add bank account for disbursement", active: currentStep === 6 },
    { id: 4, name: "UAEFTS", description: "Mandate for recurring payments", active: currentStep === 7 },
    { id: 5, name: "Agreement Signing", description: "Digital signing of agreement", active: currentStep === 8 }
  ];

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 8));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleBack = () => {
    navigate("/analysis-loading");
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <VATReturns onNext={handleNextStep} />;
      case 2:
        return <ProcessingStep onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 3:
        return <LoanOffer onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 4:
        return <AuthorizedSignatory onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 5:
        return <KYCVerification onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 6:
        return <BankAccountVerification onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 7:
        return <UAEFTSStep onNext={handleNextStep} onPrev={handlePrevStep} />;
      case 8:
        return <AgreementSigning onNext={handleNextStep} onPrev={handlePrevStep} />;
      default:
        return <VATReturns onNext={handleNextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={handleBack} 
          className="mb-4 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        <ProgressIndicator 
          steps={currentStep <= 3 ? steps : extendedSteps} 
          currentStep={currentStep <= 3 ? currentStep : currentStep - 3}
        />
        <div className="mt-8">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
};
