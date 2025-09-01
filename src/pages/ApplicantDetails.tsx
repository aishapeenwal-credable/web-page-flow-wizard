
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
    emailAddress: "john.doe@idealbrothers.ae",
    mobileNumber: "+971 123 456 7890",
    companyName: "Ideal Brother (L.L.C)",
    countryOfIncorporation: "United Arab Emirates",
    dateOfIncorporation: "",
    tradeLicenseNumber: "208X20",
    tlIssuingAuthority: "Deira Riqqat Al Buteen",
    tradeLicenseIssueDate: "",
    tradeLicenseExpiryDate: "",
    establishDate: "",
    numberOfYearsInBusiness: "",
    businessTurnover: "",
    natureOfBusiness: "",
    entityType: "Limited Liability Company",
    legalConstitution: "Limited Liability Company",
    emirates: "Dubai",
    address: "Deira Riqqat Al Buteen",
    preferredRMName: ""
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
                <h2 className="text-xl font-semibold mb-2">Welcome to {isVerified ? 'Abu Dhabi Commercial Bank' : 'CredAble'} Loans!</h2>
                <p className="text-gray-600">
                  Please provide your personal details to continue with your loan request. 
                  Your information is secure with us and will be used solely for processing your loan application.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4">Please enter your details</h3>
                
                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="emailAddress">Email Address*</Label>
                    <Input
                      id="emailAddress"
                      type="email"
                      value={formData.emailAddress}
                      onChange={(e) => handleInputChange('emailAddress', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobileNumber">Mobile Number*</Label>
                    <Input
                      id="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="companyName">Company Name*</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="countryOfIncorporation">Country of Incorporation*</Label>
                    <Input
                      id="countryOfIncorporation"
                      value={formData.countryOfIncorporation}
                      onChange={(e) => handleInputChange('countryOfIncorporation', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="dateOfIncorporation">Date of Incorporation*</Label>
                    <Input
                      id="dateOfIncorporation"
                      type="date"
                      value={formData.dateOfIncorporation}
                      onChange={(e) => handleInputChange('dateOfIncorporation', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tradeLicenseNumber">Trade License Number*</Label>
                    <Input
                      id="tradeLicenseNumber"
                      value={formData.tradeLicenseNumber}
                      onChange={(e) => handleInputChange('tradeLicenseNumber', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="tlIssuingAuthority">TL Issuing Authority*</Label>
                    <Input
                      id="tlIssuingAuthority"
                      value={formData.tlIssuingAuthority}
                      onChange={(e) => handleInputChange('tlIssuingAuthority', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="tradeLicenseIssueDate">Trade License Issue Date*</Label>
                    <Input
                      id="tradeLicenseIssueDate"
                      type="date"
                      value={formData.tradeLicenseIssueDate}
                      onChange={(e) => handleInputChange('tradeLicenseIssueDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="tradeLicenseExpiryDate">Trade License Expiry Date*</Label>
                    <Input
                      id="tradeLicenseExpiryDate"
                      type="date"
                      value={formData.tradeLicenseExpiryDate}
                      onChange={(e) => handleInputChange('tradeLicenseExpiryDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="establishDate">Establish Date*</Label>
                    <Input
                      id="establishDate"
                      type="date"
                      value={formData.establishDate}
                      onChange={(e) => handleInputChange('establishDate', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="numberOfYearsInBusiness">Number of years in Business*</Label>
                    <Input
                      id="numberOfYearsInBusiness"
                      type="number"
                      value={formData.numberOfYearsInBusiness}
                      onChange={(e) => handleInputChange('numberOfYearsInBusiness', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessTurnover">Business Turnover (in AED Mio)*</Label>
                    <Input
                      id="businessTurnover"
                      type="number"
                      step="0.1"
                      value={formData.businessTurnover}
                      onChange={(e) => handleInputChange('businessTurnover', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="natureOfBusiness">Nature of Business*</Label>
                    <Input
                      id="natureOfBusiness"
                      value={formData.natureOfBusiness}
                      onChange={(e) => handleInputChange('natureOfBusiness', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="entityType">Entity Type*</Label>
                    <Input
                      id="entityType"
                      value={formData.entityType}
                      onChange={(e) => handleInputChange('entityType', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="legalConstitution">Legal Constitution*</Label>
                    <Input
                      id="legalConstitution"
                      value={formData.legalConstitution}
                      onChange={(e) => handleInputChange('legalConstitution', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="emirates">Emirates*</Label>
                    <select 
                      id="emirates"
                      value={formData.emirates}
                      onChange={(e) => handleInputChange('emirates', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Emirates</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="address">Address*</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredRMName">Preferred RM Name</Label>
                    <Input
                      id="preferredRMName"
                      value={formData.preferredRMName}
                      onChange={(e) => handleInputChange('preferredRMName', e.target.value)}
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

                {/* Continue button - always visible now */}
                <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};
