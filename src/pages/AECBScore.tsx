
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { ArrowLeft, Plus, Trash2, Check, User } from "lucide-react";
import { OTPModal } from "@/components/OTPModal";
import { PartnerAuthModal } from "@/components/PartnerAuthModal";

interface Partner {
  id: string;
  name: string;
  mobile: string;
  email: string;
  sharePercentage: string;
  aecbScore?: string;
  status: 'pending' | 'completed' | 'failed';
}

export const AECBScore = () => {
  const navigate = useNavigate();
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: '1',
      name: 'John Doe',
      mobile: '+971 123 456 7890',
      email: 'john.doe@example.com',
      sharePercentage: '60',
      aecbScore: '720',
      status: 'completed'
    }
  ]);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);

  const handleBack = () => {
    navigate("/bank-statements");
  };

  const handleContinue = () => {
    navigate("/analysis-loading");
  };

  const handleAddPartner = () => {
    const newPartner: Partner = {
      id: Date.now().toString(),
      name: '',
      mobile: '',
      email: '',
      sharePercentage: '',
      status: 'pending'
    };
    setPartners([...partners, newPartner]);
  };

  const handleRemovePartner = (id: string) => {
    setPartners(partners.filter(p => p.id !== id));
  };

  const handlePartnerChange = (id: string, field: keyof Partner, value: string) => {
    setPartners(partners.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const handleCheckAECB = (partner: Partner) => {
    setSelectedPartner(partner);
    setShowPartnerModal(true);
  };

  const handlePartnerSubmit = (data: any) => {
    setShowPartnerModal(false);
    setShowOTPModal(true);
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
          <div className="w-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg relative overflow-hidden">
            <img 
              src="/lovable-uploads/c1dc414f-1d31-4eb0-83cf-c75066ea23c9.png" 
              alt="Woman working on laptop" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 p-6 text-white">
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

              <h2 className="text-xl font-semibold mb-2">AECB Score</h2>
              <h3 className="text-lg font-medium mb-2">Add partners</h3>
              <p className="text-gray-600 mb-6">Add all partners and shareholders to check their AECB credit scores.</p>

              <div className="space-y-6 mb-6">
                {partners.map((partner, index) => (
                  <div key={partner.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                        <h4 className="font-medium">Partner {index + 1}</h4>
                      </div>
                      {partners.length > 1 && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemovePartner(partner.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name*</label>
                        <Input
                          value={partner.name}
                          onChange={(e) => handlePartnerChange(partner.id, 'name', e.target.value)}
                          placeholder="Enter full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Mobile Number*</label>
                        <Input
                          value={partner.mobile}
                          onChange={(e) => handlePartnerChange(partner.id, 'mobile', e.target.value)}
                          placeholder="+971 xxx xxx xxxx"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email ID*</label>
                        <Input
                          type="email"
                          value={partner.email}
                          onChange={(e) => handlePartnerChange(partner.id, 'email', e.target.value)}
                          placeholder="Enter email address"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Share Percentage*</label>
                        <Input
                          value={partner.sharePercentage}
                          onChange={(e) => handlePartnerChange(partner.id, 'sharePercentage', e.target.value)}
                          placeholder="Enter percentage"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {partner.status === 'completed' && partner.aecbScore && (
                          <div className="text-green-600 font-medium">
                            AECB Score: {partner.aecbScore}
                          </div>
                        )}
                        {partner.status === 'pending' && (
                          <div className="text-gray-500">
                            AECB Score: Not checked
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => handleCheckAECB(partner)}
                        disabled={!partner.name || !partner.mobile || !partner.email}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Check AECB Score
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={handleAddPartner}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
              >
                <Plus className="w-4 h-4" />
                <span>Add more partners</span>
              </button>

              <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
                Save and Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={showOTPModal}
        onClose={() => setShowOTPModal(false)}
        onVerify={() => {
          setShowOTPModal(false);
          // Handle OTP verification logic
        }}
        mobileNumber={selectedPartner?.mobile || ''}
      />

      <PartnerAuthModal
        isOpen={showPartnerModal}
        onClose={() => setShowPartnerModal(false)}
        onSubmit={handlePartnerSubmit}
      />
    </div>
  );
};
