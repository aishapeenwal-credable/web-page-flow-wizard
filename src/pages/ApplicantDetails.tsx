
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/Header";
import { PromotionalSection } from "@/components/PromotionalSection";
import { PageFooter } from "@/components/PageFooter";
import { Check, ArrowLeft } from "lucide-react";

export const ApplicantDetails = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [formData, setFormData] = useState({
    mobile: "+971 123 456 7890",
    email: "john.doe@idealbrothers.ae",
    companyNumber: "208X20",
    taxRegistration: "100289959700XXXX",
    registeredName: "Ideal Brother (L.L.C)",
    licensingAuthority: "Deira Riqqat Al Buteen",
    companyName: "Ideal Brother (L.L.C)",
    legalForm: "Limited Liability Company",
    addressLine1: "Deira Riqqat Al Buteen",
    street: "Deira Riqqat Al Buteen",
    poBox: "93903",
    area: "Dubai",
    town: "Sharjah",
    tradeZone: "Freezone"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleVerify = () => {
    // Simulate verification process
    setIsVerified(true);
    // In a real app, you would make an API call here to verify and fetch the remaining details
  };

  const handleContinue = () => {
    navigate("/bank-statements");
  };

  const handleBack = () => {
    navigate("/login");
  };


  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: false, active: true },
    { id: 2, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: false },
    { id: 3, name: "AECB Score", description: "Add partners and check AECB scores.", completed: false },
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
          Back to Login
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
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Welcome to {isVerified ? 'Ideal Bank' : 'CredAble'} Loans!</h2>
                <p className="text-gray-600">
                  Please provide your personal details to continue with your loan request. 
                  Your information is secure with us and will be used solely for processing your loan application.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Please enter your details</h3>
                
                {/* Initial 4 fields that are always visible */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="mobile">Mobile Number*</Label>
                    <Input
                      id="mobile"
                      value={formData.mobile}
                      onChange={(e) => handleInputChange('mobile', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email ID*</Label>
                    <Input
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="companyNumber">Company Number*</Label>
                    <Input
                      id="companyNumber"
                      value={formData.companyNumber}
                      onChange={(e) => handleInputChange('companyNumber', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="taxRegistration">Tax Registration Number*</Label>
                    <Input
                      id="taxRegistration"
                      value={formData.taxRegistration}
                      onChange={(e) => handleInputChange('taxRegistration', e.target.value)}
                    />
                  </div>
                </div>

                {/* Verify button - only show if not verified */}
                {!isVerified && (
                  <div className="mb-6">
                    <Button onClick={handleVerify} className="bg-blue-600 hover:bg-blue-700">
                      Verify
                    </Button>
                  </div>
                )}

                {/* Additional fields that appear after verification */}
                {isVerified && (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="registeredName">Registered Name*</Label>
                        <Input
                          id="registeredName"
                          value={formData.registeredName}
                          onChange={(e) => handleInputChange('registeredName', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="licensingAuthority">Licensing Authority*</Label>
                        <Input
                          id="licensingAuthority"
                          value={formData.licensingAuthority}
                          onChange={(e) => handleInputChange('licensingAuthority', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="companyName">Company Name*</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange('companyName', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="legalForm">Legal Form*</Label>
                        <Input
                          id="legalForm"
                          value={formData.legalForm}
                          onChange={(e) => handleInputChange('legalForm', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>

                    <h4 className="text-md font-medium mb-4">Address Details</h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="addressLine1">Address line 1*</Label>
                        <Input
                          id="addressLine1"
                          value={formData.addressLine1}
                          onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="street">Street*</Label>
                        <Input
                          id="street"
                          value={formData.street}
                          onChange={(e) => handleInputChange('street', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="poBox">PO box*</Label>
                        <Input
                          id="poBox"
                          value={formData.poBox}
                          onChange={(e) => handleInputChange('poBox', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="area">Area*</Label>
                        <Input
                          id="area"
                          value={formData.area}
                          onChange={(e) => handleInputChange('area', e.target.value)}
                          className="bg-green-50 border-green-200"
                          readOnly
                        />
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="town">Town*</Label>
                        <select 
                          id="town"
                          value={formData.town}
                          onChange={(e) => handleInputChange('town', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          disabled
                        >
                          <option value="Sharjah">Sharjah</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                        </select>
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="tradeZone">Trade Zone*</Label>
                        <select 
                          id="tradeZone"
                          value={formData.tradeZone}
                          onChange={(e) => handleInputChange('tradeZone', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          disabled
                        >
                          <option value="Freezone">Freezone</option>
                          <option value="Mainland">Mainland</option>
                        </select>
                        <div className="flex items-center mt-1">
                          <Check className="w-4 h-4 text-green-600 mr-1" />
                          <span className="text-xs text-green-600">Verified</span>
                        </div>
                      </div>
                    </div>

                    <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
                      Continue
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};
