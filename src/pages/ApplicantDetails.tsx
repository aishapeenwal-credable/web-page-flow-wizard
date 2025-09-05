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
    // Company Details
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
    tradeZone: "Freezone",
    tradeLicense: "",
    tlIssuingAuthority: "",
    tlIssueDate: "",
    tlExpiryDate: "",
    commercialMembership: "",
    dateOfIncorporation: "",
    countryOfIncorporation: "",
    entityType: "",
    legalConstitution: "",
    freezoneLocation: "",
    emirate: "",
    natureOfBusiness: "",
    businessTurnover: "",
    yearsInBusiness: "",
    businessNatureChanged: "",
    oldNatureOfBusiness: "",
    businessActivityChanged: "",
    businessActivityPeriod: "",
    // Correspondence Address
    corrCountry: "",
    corrEmirate: "",
    corrAddressLine1: "",
    corrAddressLine2: "",
    corrOfficeNumber: "",
    corrPoBox: "",
    // Physical Address
    sameAsCorrespondence: false,
    physCountry: "",
    physEmirate: "",
    physAddressLine1: "",
    physAddressLine2: "",
    physOfficeNumber: "",
    physPoBox: ""
  });
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
  const steps = [{
    id: 1,
    name: "Applicant Detail",
    description: "Just a few Personal details.",
    completed: false,
    active: true
  }, {
    id: 2,
    name: "Bank Statements",
    description: "Upload your bank statements, safely.",
    completed: false
  }, {
    id: 3,
    name: "AECB Score",
    description: "Add partners and check AECB scores.",
    completed: false
  }, {
    id: 4,
    name: "VAT Returns",
    description: "Check VAT returns easily.",
    completed: false
  }, {
    id: 5,
    name: "Loan Offer",
    description: "View and accept loan offers.",
    completed: false
  }];
  return <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Back button - fixed at top left */}
      <div className="fixed top-4 left-4 z-50">
        <Button variant="ghost" onClick={handleBack} className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Button>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step.completed ? 'bg-green-500 text-white' : step.active ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}
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
              {index < steps.length - 1 && <div className="w-16 h-px bg-gray-300 mx-4 mt-[-40px]" />}
            </div>)}
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
                <h3 className="text-lg font-medium mb-6">Company Details</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="companyName">Company Name*</Label>
                    <Input id="companyName" value={formData.companyName} onChange={e => handleInputChange('companyName', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Registered Mobile Number*</Label>
                    <Input id="mobile" value={formData.mobile} onChange={e => handleInputChange('mobile', e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="email">Email Address*</Label>
                    <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="tradeLicense">Trade License Number*</Label>
                    <Input id="tradeLicense" value={formData.tradeLicense || ''} onChange={e => handleInputChange('tradeLicense', e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="tlIssuingAuthority">TL Issuing Authority*</Label>
                    <select 
                      id="tlIssuingAuthority" 
                      value={formData.tlIssuingAuthority || ''} 
                      onChange={e => handleInputChange('tlIssuingAuthority', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Authority</option>
                      <option value="DED">Department of Economic Development (DED)</option>
                      <option value="ADCCI">Abu Dhabi Chamber of Commerce</option>
                      <option value="SCCI">Sharjah Chamber of Commerce</option>
                      <option value="RAKCCI">Ras Al Khaimah Chamber of Commerce</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="tlIssueDate">TL Issue Date*</Label>
                    <Input id="tlIssueDate" type="date" value={formData.tlIssueDate || ''} onChange={e => handleInputChange('tlIssueDate', e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="tlExpiryDate">TL Expiry Date*</Label>
                    <Input id="tlExpiryDate" type="date" value={formData.tlExpiryDate || ''} onChange={e => handleInputChange('tlExpiryDate', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="commercialMembership">Commercial Membership No</Label>
                    <Input id="commercialMembership" value={formData.commercialMembership || ''} onChange={e => handleInputChange('commercialMembership', e.target.value)} />
                  </div>
                </div>

                {/* Show DLA upload if TL is expired */}
                {formData.tlExpiryDate && new Date(formData.tlExpiryDate) < new Date() && (
                  <div className="mb-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <Label htmlFor="dlaApproval" className="text-destructive">Trade License has expired. Please upload DLA Approval*</Label>
                    <Input id="dlaApproval" type="file" accept=".pdf,.jpg,.jpeg,.png" className="mt-2" />
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="dateOfIncorporation">Date of Incorporation*</Label>
                    <Input id="dateOfIncorporation" type="date" value={formData.dateOfIncorporation || ''} onChange={e => handleInputChange('dateOfIncorporation', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="countryOfIncorporation">Country of Incorporation*</Label>
                    <select 
                      id="countryOfIncorporation" 
                      value={formData.countryOfIncorporation || ''} 
                      onChange={e => handleInputChange('countryOfIncorporation', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Country</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="KW">Kuwait</option>
                      <option value="QA">Qatar</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="entityType">Entity Type*</Label>
                    <select 
                      id="entityType" 
                      value={formData.entityType || ''} 
                      onChange={e => handleInputChange('entityType', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Entity Type</option>
                      <option value="LLC">Limited Liability Company (LLC)</option>
                      <option value="JSC">Joint Stock Company (JSC)</option>
                      <option value="Partnership">Partnership</option>
                      <option value="SoleProprietorship">Sole Proprietorship</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="legalConstitution">Legal Constitution*</Label>
                    <select 
                      id="legalConstitution" 
                      value={formData.legalConstitution || ''} 
                      onChange={e => handleInputChange('legalConstitution', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Constitution</option>
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
                      <option value="Government">Government</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="freezoneLocation">Freezone Location</Label>
                    <select 
                      id="freezoneLocation" 
                      value={formData.freezoneLocation || ''} 
                      onChange={e => handleInputChange('freezoneLocation', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Freezone</option>
                      <option value="DIFC">Dubai International Financial Centre</option>
                      <option value="JAFZA">Jebel Ali Free Zone</option>
                      <option value="ADGM">Abu Dhabi Global Market</option>
                      <option value="RAKEZ">Ras Al Khaimah Economic Zone</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="emirate">Emirate*</Label>
                    <select 
                      id="emirate" 
                      value={formData.emirate || ''} 
                      onChange={e => handleInputChange('emirate', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Emirate</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="natureOfBusiness">Nature of Business*</Label>
                    <select 
                      id="natureOfBusiness" 
                      value={formData.natureOfBusiness || ''} 
                      onChange={e => handleInputChange('natureOfBusiness', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Business Nature</option>
                      <option value="Trading">Trading</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Services">Services</option>
                      <option value="Construction">Construction</option>
                      <option value="Technology">Technology</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="businessTurnover">Business Turnover*</Label>
                    <select 
                      id="businessTurnover" 
                      value={formData.businessTurnover || ''} 
                      onChange={e => handleInputChange('businessTurnover', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Turnover Range</option>
                      <option value="Below 1M">Below AED 1 Million</option>
                      <option value="1M-5M">AED 1-5 Million</option>
                      <option value="5M-10M">AED 5-10 Million</option>
                      <option value="10M-50M">AED 10-50 Million</option>
                      <option value="Above 50M">Above AED 50 Million</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="yearsInBusiness">No. of Years in Business*</Label>
                    <Input id="yearsInBusiness" type="number" min="0" value={formData.yearsInBusiness || ''} onChange={e => handleInputChange('yearsInBusiness', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="businessNatureChanged">Nature of Business Changed After Incorporation?*</Label>
                    <select 
                      id="businessNatureChanged" 
                      value={formData.businessNatureChanged || ''} 
                      onChange={e => handleInputChange('businessNatureChanged', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>

                {formData.businessNatureChanged === 'Yes' && (
                  <>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="oldNatureOfBusiness">Old Nature of Business*</Label>
                        <select 
                          id="oldNatureOfBusiness" 
                          value={formData.oldNatureOfBusiness || ''} 
                          onChange={e => handleInputChange('oldNatureOfBusiness', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select Old Business Nature</option>
                          <option value="Trading">Trading</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Services">Services</option>
                          <option value="Construction">Construction</option>
                          <option value="Technology">Technology</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="businessActivityChanged">When was the Business Activity/Nature Changed?*</Label>
                        <Input id="businessActivityChanged" type="date" value={formData.businessActivityChanged || ''} onChange={e => handleInputChange('businessActivityChanged', e.target.value)} />
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-6">
                  <Label htmlFor="businessActivityPeriod">Business Activity Period*</Label>
                  <Input id="businessActivityPeriod" type="date" value={formData.businessActivityPeriod || ''} onChange={e => handleInputChange('businessActivityPeriod', e.target.value)} />
                </div>

                <h3 className="text-lg font-medium mb-6 mt-8">Correspondence Address</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="corrCountry">Country*</Label>
                    <select 
                      id="corrCountry" 
                      value={formData.corrCountry || ''} 
                      onChange={e => handleInputChange('corrCountry', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Country</option>
                      <option value="UAE">United Arab Emirates</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="KW">Kuwait</option>
                      <option value="QA">Qatar</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="corrEmirate">Emirate/State*</Label>
                    <select 
                      id="corrEmirate" 
                      value={formData.corrEmirate || ''} 
                      onChange={e => handleInputChange('corrEmirate', e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Select Emirate</option>
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="corrAddressLine1">Office Unit No/Address Line 1*</Label>
                    <Input id="corrAddressLine1" value={formData.corrAddressLine1 || ''} onChange={e => handleInputChange('corrAddressLine1', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="corrAddressLine2">Building Name/Address Line 2</Label>
                    <Input id="corrAddressLine2" value={formData.corrAddressLine2 || ''} onChange={e => handleInputChange('corrAddressLine2', e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <Label htmlFor="corrOfficeNumber">Office Number</Label>
                    <Input id="corrOfficeNumber" type="number" value={formData.corrOfficeNumber || ''} onChange={e => handleInputChange('corrOfficeNumber', e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="corrPoBox">PO Box/Zip Code*</Label>
                    <Input id="corrPoBox" value={formData.corrPoBox || ''} onChange={e => handleInputChange('corrPoBox', e.target.value)} />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="sameAsCorrespondence" 
                      checked={formData.sameAsCorrespondence || false}
                      onChange={e => handleInputChange('sameAsCorrespondence', e.target.checked)}
                      className="w-4 h-4 text-primary bg-background border-input rounded focus:ring-ring"
                    />
                    <Label htmlFor="sameAsCorrespondence">Physical Address same as Correspondence Address?</Label>
                  </div>
                </div>

                {!formData.sameAsCorrespondence && (
                  <>
                    <h3 className="text-lg font-medium mb-6 mt-8">Physical Address</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="physCountry">Country*</Label>
                        <select 
                          id="physCountry" 
                          value={formData.physCountry || ''} 
                          onChange={e => handleInputChange('physCountry', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select Country</option>
                          <option value="UAE">United Arab Emirates</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="KW">Kuwait</option>
                          <option value="QA">Qatar</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="physEmirate">Emirate/State*</Label>
                        <select 
                          id="physEmirate" 
                          value={formData.physEmirate || ''} 
                          onChange={e => handleInputChange('physEmirate', e.target.value)}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select Emirate</option>
                          <option value="Dubai">Dubai</option>
                          <option value="Abu Dhabi">Abu Dhabi</option>
                          <option value="Sharjah">Sharjah</option>
                          <option value="Ajman">Ajman</option>
                          <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                          <option value="Fujairah">Fujairah</option>
                          <option value="Umm Al Quwain">Umm Al Quwain</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Label htmlFor="physAddressLine1">Office Unit No/Address Line 1*</Label>
                        <Input id="physAddressLine1" value={formData.physAddressLine1 || ''} onChange={e => handleInputChange('physAddressLine1', e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="physAddressLine2">Building Name/Address Line 2</Label>
                        <Input id="physAddressLine2" value={formData.physAddressLine2 || ''} onChange={e => handleInputChange('physAddressLine2', e.target.value)} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="physOfficeNumber">Office Number</Label>
                        <Input id="physOfficeNumber" type="number" value={formData.physOfficeNumber || ''} onChange={e => handleInputChange('physOfficeNumber', e.target.value)} />
                      </div>
                      <div>
                        <Label htmlFor="physPoBox">PO Box/Zip Code*</Label>
                        <Input id="physPoBox" value={formData.physPoBox || ''} onChange={e => handleInputChange('physPoBox', e.target.value)} />
                      </div>
                    </div>
                  </>
                )}

                <Button onClick={handleContinue} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>;
};