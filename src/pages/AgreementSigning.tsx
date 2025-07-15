import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { PageFooter } from "@/components/PageFooter";
import { AgreementSigning as AgreementSigningStep } from "@/components/steps/AgreementSigning";

export const AgreementSigning = () => {
  const navigate = useNavigate();

  const extendedSteps = [
    { id: 1, name: "Authorised Signatory", description: "Board resolution and key persons", completed: true },
    { id: 2, name: "Video Verification", description: "Verify signatories via CKYC/VKYC", completed: true },
    { id: 3, name: "Bank Account", description: "Add bank account for disbursement", completed: true },
    { id: 4, name: "UAEFTS", description: "Mandate for recurring payments", completed: true },
    { id: 5, name: "Agreement Signing", description: "Digital signing of agreement", active: true }
  ];

  const handleNext = () => {
    navigate("/loan-application/thank-you");
  };

  const handlePrev = () => {
    navigate("/loan-application/uae-fts");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        <ProgressIndicator steps={extendedSteps} currentStep={5} />
        <div className="mt-8">
          <AgreementSigningStep onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      <PageFooter />
    </div>
  );
};