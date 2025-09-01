
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";

interface PartnerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PartnerData) => void;
}

interface PartnerData {
  partnerName: string;
  prefix: string;
  mobile: string;
  customerType: string;
  existingCID: string;
  birthDate: string;
  nationality: string;
  passportNumber: string;
  visaNumber: string;
  visaExpiryDate: string;
  countryOfCorrespondence: string;
  passportIssueDate: string;
  passportExpiryDate: string;
  countryOfResidence: string;
  eidExpiryDate: string;
  eidNumber: string;
  emailId: string;
  isSignatoryResidentOfUAE: string;
}

const countryCodes = [
  { code: "+971", country: "UAE" },
  { code: "+1", country: "USA" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+965", country: "Kuwait" },
  { code: "+974", country: "Qatar" },
  { code: "+973", country: "Bahrain" },
  { code: "+968", country: "Oman" },
  { code: "+60", country: "Malaysia" },
  { code: "+65", country: "Singapore" },
  { code: "+86", country: "China" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
];

export const PartnerAuthModal = ({ isOpen, onClose, onSubmit }: PartnerAuthModalProps) => {
  const [formData, setFormData] = useState<PartnerData>({
    partnerName: "Esther Howard",
    prefix: "Ms.",
    mobile: "77394 72531",
    customerType: "Individual",
    existingCID: "",
    birthDate: "1986-03-12",
    nationality: "UAE",
    passportNumber: "",
    visaNumber: "",
    visaExpiryDate: "",
    countryOfCorrespondence: "UAE",
    passportIssueDate: "",
    passportExpiryDate: "",
    countryOfResidence: "UAE",
    eidExpiryDate: "",
    eidNumber: "784-1980-94xxxxx-8",
    emailId: "esther.howard@idealbrothers.ae",
    isSignatoryResidentOfUAE: "Yes"
  });

  const handleInputChange = (field: keyof PartnerData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Authorize partner
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Partner Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="partnerName">Partner Name*</Label>
                <Input
                  id="partnerName"
                  value={formData.partnerName}
                  onChange={(e) => handleInputChange('partnerName', e.target.value)}
                  placeholder="Esther Howard"
                />
              </div>
              <div>
                <Label htmlFor="prefix">Prefix*</Label>
                <Select value={formData.prefix} onValueChange={(value) => handleInputChange('prefix', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select prefix" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mr.">Mr.</SelectItem>
                    <SelectItem value="Ms.">Ms.</SelectItem>
                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                    <SelectItem value="Dr.">Dr.</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="mobile">Mobile*</Label>
                <Input
                  id="mobile"
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                  placeholder="77394 72531"
                />
              </div>
              <div>
                <Label htmlFor="customerType">Customer Type*</Label>
                <Select value={formData.customerType} onValueChange={(value) => handleInputChange('customerType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select customer type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Individual">Individual</SelectItem>
                    <SelectItem value="Corporate">Corporate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="existingCID">Existing CID</Label>
                <Input
                  id="existingCID"
                  value={formData.existingCID}
                  onChange={(e) => handleInputChange('existingCID', e.target.value)}
                  placeholder="Enter existing CID"
                />
              </div>
              <div>
                <Label htmlFor="birthDate">Birth Date*</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="nationality">Nationality*</Label>
                <Select value={formData.nationality} onValueChange={(value) => handleInputChange('nationality', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select nationality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UAE">UAE</SelectItem>
                    <SelectItem value="Indian">Indian</SelectItem>
                    <SelectItem value="Pakistani">Pakistani</SelectItem>
                    <SelectItem value="Filipino">Filipino</SelectItem>
                    <SelectItem value="British">British</SelectItem>
                    <SelectItem value="American">American</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="passportNumber">Passport Number</Label>
                <Input
                  id="passportNumber"
                  value={formData.passportNumber}
                  onChange={(e) => handleInputChange('passportNumber', e.target.value)}
                  placeholder="Enter passport number"
                />
              </div>
              <div>
                <Label htmlFor="visaNumber">Visa Number</Label>
                <Input
                  id="visaNumber"
                  value={formData.visaNumber}
                  onChange={(e) => handleInputChange('visaNumber', e.target.value)}
                  placeholder="Enter visa number"
                />
              </div>
              <div>
                <Label htmlFor="visaExpiryDate">Visa Expiry Date</Label>
                <Input
                  id="visaExpiryDate"
                  type="date"
                  value={formData.visaExpiryDate}
                  onChange={(e) => handleInputChange('visaExpiryDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="countryOfCorrespondence">Country Of Correspondence*</Label>
                <Select value={formData.countryOfCorrespondence} onValueChange={(value) => handleInputChange('countryOfCorrespondence', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UAE">UAE</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="Philippines">Philippines</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="passportIssueDate">Passport Issue Date</Label>
                <Input
                  id="passportIssueDate"
                  type="date"
                  value={formData.passportIssueDate}
                  onChange={(e) => handleInputChange('passportIssueDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="passportExpiryDate">Passport Expiry Date</Label>
                <Input
                  id="passportExpiryDate"
                  type="date"
                  value={formData.passportExpiryDate}
                  onChange={(e) => handleInputChange('passportExpiryDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="countryOfResidence">Country of Residence*</Label>
                <Select value={formData.countryOfResidence} onValueChange={(value) => handleInputChange('countryOfResidence', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UAE">UAE</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Pakistan">Pakistan</SelectItem>
                    <SelectItem value="Philippines">Philippines</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="eidExpiryDate">EID Expiry Date</Label>
                <Input
                  id="eidExpiryDate"
                  type="date"
                  value={formData.eidExpiryDate}
                  onChange={(e) => handleInputChange('eidExpiryDate', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="eidNumber">EID Number*</Label>
                <Input
                  id="eidNumber"
                  value={formData.eidNumber}
                  onChange={(e) => handleInputChange('eidNumber', e.target.value)}
                  placeholder="784-1980-94xxxxx-8"
                />
              </div>
              <div>
                <Label htmlFor="emailId">Email Id*</Label>
                <Input
                  id="emailId"
                  type="email"
                  value={formData.emailId}
                  onChange={(e) => handleInputChange('emailId', e.target.value)}
                  placeholder="esther.howard@idealbrothers.ae"
                />
              </div>
              <div>
                <Label htmlFor="isSignatoryResidentOfUAE">Is Signatory resident of UAE?*</Label>
                <Select value={formData.isSignatoryResidentOfUAE} onValueChange={(value) => handleInputChange('isSignatoryResidentOfUAE', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
