
import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PromotionalSection } from "../PromotionalSection";
import { SigningModal } from "../SigningModal";

interface AgreementSigningProps {
  onNext: () => void;
  onPrev: () => void;
}

export const AgreementSigning = ({ onNext, onPrev }: AgreementSigningProps) => {
  const [showModal, setShowModal] = useState(false);
  const [signedAgreements, setSignedAgreements] = useState<Set<string>>(new Set());

  const signatories = [
    {
      name: "Jane Cooper",
      agreements: [
        { type: "Facility agreement", id: "jane-facility" },
        { type: "Personal guarantee", id: "jane-guarantee" }
      ]
    },
    {
      name: "Esther Howard", 
      agreements: [
        { type: "Facility agreement", id: "esther-facility" },
        { type: "Personal guarantee", id: "esther-guarantee" }
      ]
    }
  ];

  const handleContinue = () => {
    setShowModal(true);
  };

  const handleApply = () => {
    // Mark all agreements as signed
    const allAgreementIds = signatories.flatMap(signatory => 
      signatory.agreements.map(agreement => agreement.id)
    );
    setSignedAgreements(new Set(allAgreementIds));
    setShowModal(false);
    // Scroll to top when navigating to next step
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    onNext();
  };

  const isAgreementSigned = (agreementId: string) => {
    return signedAgreements.has(agreementId);
  };

  return (
    <div className="flex gap-8">
      <PromotionalSection />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">

          <h2 className="text-xl font-semibold mb-8">Agreement Signing</h2>
          
          <div className="space-y-8">
            {signatories.map((signatory, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium mb-4">{signatory.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {signatory.agreements.map((agreement, agreementIndex) => (
                    <div key={agreementIndex} className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        </div>
                        <span className="font-medium">{agreement.type}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        isAgreementSigned(agreement.id) 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                      }`}>
                        <Check className={`w-4 h-4 ${
                          isAgreementSigned(agreement.id) 
                            ? 'text-white' 
                            : 'text-gray-500'
                        }`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
              Continue
            </Button>
          </div>
        </div>
      </div>

      <SigningModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onApply={handleApply}
      />
    </div>
  );
};
