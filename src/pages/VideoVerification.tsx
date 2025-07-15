import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProgressIndicator } from "@/components/ProgressIndicator";
import { PageFooter } from "@/components/PageFooter";
import { KYCVerification } from "@/components/steps/KYCVerification";

export const VideoVerification = () => {
  const navigate = useNavigate();

  const extendedSteps = [
    { id: 1, name: "Authorised Signatory", description: "Board resolution and key persons", completed: true },
    { id: 2, name: "Video Verification", description: "Verify signatories via CKYC/VKYC", active: true },
    { id: 3, name: "Bank Account", description: "Add bank account for disbursement", active: false },
    { id: 4, name: "UAEFTS", description: "Mandate for recurring payments", active: false },
    { id: 5, name: "Agreement Signing", description: "Digital signing of agreement", active: false }
  ];

  const handleNext = () => {
    navigate("/loan-application/bank-account");
  };

  const handlePrev = () => {
    navigate("/loan-application/authorized-signatory");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        <ProgressIndicator steps={extendedSteps} currentStep={2} />
        <div className="mt-8">
          <KYCVerification onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      <PageFooter />
    </div>
  );
};