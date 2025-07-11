
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { PartnerAuthModal } from "@/components/PartnerAuthModal";
import { OTPModal } from "@/components/OTPModal";
import { Check, ArrowLeft } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  status: "Authorized" | "Authorize";
  mobileNumber?: string;
}

interface PartnerData {
  fullName: string;
  emiratesId: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  mobileNumber: string;
  countryCode: string;
  addressLine1: string;
  street: string;
  poBox: string;
  area: string;
  town: string;
  consent: boolean;
}

export const AECBScore = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([
    { id: "1", name: "Jane Cooper", status: "Authorized" },
    { id: "2", name: "Esther Howard", status: "Authorize" }
  ]);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isOTPModalOpen, setIsOTPModalOpen] = useState(false);
  const [currentPartnerData, setCurrentPartnerData] = useState<PartnerData | null>(null);

  const handleContinue = () => {
    navigate("/analysis-loading");
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAuthorize = (id: string) => {
    const partner = partners.find(p => p.id === id);
    if (partner && partner.status === "Authorize") {
      setIsPartnerModalOpen(true);
    }
  };

  const addPartner = () => {
    setIsPartnerModalOpen(true);
  };

  const handlePartnerSubmit = (data: PartnerData) => {
    setCurrentPartnerData(data);
    setIsPartnerModalOpen(false);
    setIsOTPModalOpen(true);
  };

  const handleOTPVerify = (otp: string) => {
    if (currentPartnerData) {
      const newPartner: Partner = {
        id: Date.now().toString(),
        name: currentPartnerData.fullName,
        status: "Authorized",
        mobileNumber: `${currentPartnerData.countryCode}${currentPartnerData.mobileNumber}`
      };
      
      setPartners(prev => [...prev, newPartner]);
      setIsOTPModalOpen(false);
      setCurrentPartnerData(null);
    }
  };

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
          <div className="w-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-wide opacity-90">EMPOWERING YOUR FINANCIAL JOURNEY</p>
                <h2 className="text-xl font-bold mt-2">Loans crafted for all your aspirations</h2>
              </div>
              
              <div className="space-y-3">
                {["Collateral free financing", "Instant eligibility confirmation", "Credit limit as per requirement", "Hassle-free disbursal in account"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Button 
                variant="ghost" 
                onClick={handleBack} 
                className="mb-4 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Credit Report</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center space-x-2 text-blue-600">
                    <div className="w-4 h-4 bg-blue-600 rounded"></div>
                    <p className="text-sm">
                      Verification code will be sent to partners' mobile number. Please keep all your partner's mobile nearby for verification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-6">Private Limited (Pvt Ltd)</h3>
                
                <div className="space-y-4">
                  {partners.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="font-medium">{partner.name}</span>
                      {partner.status === "Authorized" ? (
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                          Authorized
                        </span>
                      ) : (
                        <Button 
                          onClick={() => handleAuthorize(partner.id)}
                          className="text-blue-600 hover:text-blue-700"
                          variant="ghost"
                        >
                          Authorize →
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <button 
                  onClick={addPartner}
                  className="text-blue-600 hover:text-blue-700 font-medium mt-4"
                >
                  + Add another partner
                </button>
              </div>

              <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
                Save and Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>

      <PartnerAuthModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
        onSubmit={handlePartnerSubmit}
      />

      <OTPModal
        isOpen={isOTPModalOpen}
        onClose={() => setIsOTPModalOpen(false)}
        onVerify={handleOTPVerify}
        mobileNumber={currentPartnerData ? `${currentPartnerData.countryCode}${currentPartnerData.mobileNumber}` : ""}
      />
    </div>
  );
};
