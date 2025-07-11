
import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidePanel } from "../SidePanel";
import { SigningModal } from "../SigningModal";

interface AgreementSigningProps {
  onNext: () => void;
  onPrev: () => void;
}

export const AgreementSigning = ({ onNext, onPrev }: AgreementSigningProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const signatories = [
    {
      name: "Jane Cooper",
      agreements: [
        { type: "Facility agreement", status: "completed" },
        { type: "Personal guarantee", status: "completed" }
      ]
    },
    {
      name: "Esther Howard", 
      agreements: [
        { type: "Facility agreement", status: "completed" },
        { type: "Personal guarantee", status: "completed" }
      ]
    }
  ];

  const handleAgreementClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleApply = () => {
    setIsModalOpen(false);
    onNext();
  };

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Button 
            variant="ghost" 
            onClick={onPrev} 
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <h2 className="text-xl font-semibold mb-8">Agreement Signing</h2>
          
          <div className="space-y-8">
            {signatories.map((signatory, index) => (
              <div key={index}>
                <h3 className="text-lg font-medium mb-4">{signatory.name}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {signatory.agreements.map((agreement, agreementIndex) => (
                    <div 
                      key={agreementIndex} 
                      className="border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50"
                      onClick={handleAgreementClick}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                        </div>
                        <span className="font-medium">{agreement.type}</span>
                      </div>
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">
              Continue
            </Button>
          </div>
        </div>
      </div>

      <SigningModal 
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onApply={handleApply}
      />
    </div>
  );
};
