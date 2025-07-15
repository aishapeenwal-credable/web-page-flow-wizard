
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { PromotionalSection } from "@/components/PromotionalSection";
import { PageFooter } from "@/components/PageFooter";
import { ArrowLeft, Check } from "lucide-react";
import { OTPModal } from "@/components/OTPModal";
import { PartnerAuthModal } from "@/components/PartnerAuthModal";

interface Partner {
  id: string;
  name: string;
  status: 'pending' | 'authorized';
}

export const AECBScore = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: '1',
      name: 'Jane Cooper',
      status: 'authorized'
    },
    {
      id: '2', 
      name: 'Esther Howard',
      status: 'pending'
    }
  ]);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const handleBack = () => {
    navigate("/bank-statements");
  };

  const handleContinue = () => {
    navigate("/loan-application");
  };

  const handleAuthorize = (partner: Partner) => {
    setSelectedPartner(partner);
    setShowPartnerModal(true);
  };

  const handlePartnerSubmit = (data: any) => {
    setShowPartnerModal(false);
    setShowOTPModal(true);
  };

  const handleOTPVerify = (otp: string) => {
    if (selectedPartner) {
      setPartners(partners.map(p => 
        p.id === selectedPartner.id ? { ...p, status: 'authorized' } : p
      ));
    }
    setShowOTPModal(false);
    setSelectedPartner(null);
  };

  // Check if all partners are authorized
  const allPartnersAuthorized = partners.every(partner => partner.status === 'authorized');

  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: true },
    { id: 2, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: true },
    { id: 3, name: "AECB Score", description: "Add partners and check AECB scores.", completed: false, active: true },
    { id: 4, name: "VAT Returns", description: "Check VAT returns easily.", completed: false },
    { id: 5, name: "Loan Offer", description: "View and accept loan offers.", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Back button - fixed at top left */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="ghost" 
          onClick={handleBack} 
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step.completed 
                    ? 'bg-green-500 text-white' 
                    : step.active 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step.completed ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${step.active ? 'text-blue-600' : 'text-gray-900'}`}>
                    {step.name}
                  </div>
                  <div className="text-xs text-gray-500 max-w-24">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-16 h-px bg-gray-300 mx-4 mt-[-40px]" />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-8">
          <PromotionalSection />

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Credit Report</h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded"></div>
                </div>
                <p className="text-sm text-gray-700">
                  Verification code will be sent to partners' mobile number. Please keep all your partner's mobile nearby for verification.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Limited Liability Company (LLC)</h3>
                
                <div className="space-y-3">
                  {partners.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="font-medium">{partner.name}</span>
                      {partner.status === 'authorized' ? (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Authorized
                        </span>
                      ) : (
                        <Button
                          onClick={() => handleAuthorize(partner)}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                          Authorize →
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleContinue} 
                className={`${
                  allPartnersAuthorized 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-300 hover:bg-gray-400 text-gray-600'
                }`}
                disabled={!allPartnersAuthorized}
              >
                Save and Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />

      <OTPModal
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onVerify={handleOTPVerify}
        mobileNumber="+971 77394 72531"
      />

      <PartnerAuthModal
        isOpen={showPartnerModal}
        onClose={() => setShowPartnerModal(false)}
        onSubmit={handlePartnerSubmit}
      />
    </div>
  );
};
