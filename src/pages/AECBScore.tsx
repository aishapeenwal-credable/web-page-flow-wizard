
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


  const handleContinue = () => {
    navigate("/aecb-consent");
  };

  const handleAuthorize = (partner: Partner) => {
    setSelectedPartner(partner);
    setShowPartnerModal(true);
  };

  const handleAddPartner = () => {
    setSelectedPartner(null);
    setShowPartnerModal(true);
  };

  const handlePartnerSubmit = (data: any) => {
    if (selectedPartner) {
      // Editing existing partner
      setPartners(partners.map(p => 
        p.id === selectedPartner.id ? { ...p, status: 'authorized' } : p
      ));
    } else {
      // Adding new partner
      const newPartner: Partner = {
        id: Date.now().toString(),
        name: data.partnerName,
        status: 'authorized'
      };
      setPartners([...partners, newPartner]);
    }
    setShowPartnerModal(false);
    setSelectedPartner(null);
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

  // Check if all partners are authorized - now always true since we removed status
  const allPartnersAuthorized = true;

  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: true },
    { id: 2, name: "Partner Details", description: "Add Partner Details", completed: false, active: true },
    { id: 3, name: "AECB Consent", description: "Download and upload AECB consent forms.", completed: false },
    { id: 4, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: false },
    { id: 5, name: "VAT Returns", description: "Check VAT returns easily.", completed: false },
    { id: 6, name: "Loan Offer", description: "View and accept loan offers.", completed: false }
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
                     ? 'bg-adcb-success text-white' 
                     : step.active 
                       ? 'bg-primary text-primary-foreground' 
                       : 'bg-gray-200 text-gray-600'
                   }
                 `}>
                  {step.completed ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${step.active ? 'text-primary' : 'text-gray-900'}`}>
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
              <h2 className="text-xl font-semibold mb-6">Partner Details</h2>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6 flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded"></div>
                </div>
                <p className="text-sm text-foreground">
                  Verification code will be sent to partners' mobile number. Please keep all your partner's mobile nearby for verification.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Limited Liability Company (LLC)</h3>
                
                <div className="space-y-3">
                  {partners.map((partner) => (
                    <div key={partner.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <span className="font-medium">{partner.name}</span>
                      <Button
                        onClick={() => handleAuthorize(partner)}
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Edit
                      </Button>
                    </div>
                  ))}
                 </div>
                 
                 <Button
                   onClick={handleAddPartner}
                   variant="outline"
                   className="w-full border-dashed border-2 border-muted text-muted-foreground hover:border-primary hover:text-primary"
                 >
                   + Add More Partners
                 </Button>
               </div>

               <Button 
                 onClick={handleContinue} 
                 className={`${
                   allPartnersAuthorized 
                     ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                     : 'bg-muted hover:bg-muted/80 text-muted-foreground'
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
