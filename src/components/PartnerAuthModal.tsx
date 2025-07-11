
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
    fullName: "Esther Howard",
    emiratesId: "784-1980-94xxxxx-8",
    dateOfBirth: "1986-03-12",
    gender: "female",
    email: "esther.howard@idealbrothers.ae",
    mobileNumber: "77394 72531",
    countryCode: "+971",
    addressLine1: "Deira Riggat Al Buteen",
    street: "Deira Riggat Al Buteen",
    poBox: "93903",
    area: "Dubai",
    town: "sharjah",
    consent: false
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
            <h3 className="text-lg font-medium mb-4">Personal details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name*</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Esther Howard"
                />
              </div>
              <div>
                <Label htmlFor="emiratesId">Emirates ID*</Label>
                <Input
                  id="emiratesId"
                  value={formData.emiratesId}
                  onChange={(e) => handleInputChange('emiratesId', e.target.value)}
                  placeholder="784-1980-94xxxxx-8"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date of Birth*</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="gender">Gender*</Label>
                <Select value={formData.gender} onValueChange={(value) => handleInputChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="email">Personal Email ID*</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="esther.howard@idealbrothers.ae"
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number*</Label>
                <div className="flex gap-2">
                  <Select value={formData.countryCode} onValueChange={(value) => handleInputChange('countryCode', value)}>
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                    placeholder="77394 72531"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="addressLine1">Address line 1</Label>
                <Input
                  id="addressLine1"
                  value={formData.addressLine1}
                  onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                  placeholder="Deira Riggat Al Buteen"
                />
              </div>
              <div>
                <Label htmlFor="street">Street</Label>
                <Input
                  id="street"
                  value={formData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                  placeholder="Deira Riggat Al Buteen"
                />
              </div>
              <div>
                <Label htmlFor="poBox">PO box</Label>
                <Input
                  id="poBox"
                  value={formData.poBox}
                  onChange={(e) => handleInputChange('poBox', e.target.value)}
                  placeholder="93903"
                />
              </div>
              <div>
                <Label htmlFor="area">Area</Label>
                <Input
                  id="area"
                  value={formData.area}
                  onChange={(e) => handleInputChange('area', e.target.value)}
                  placeholder="Dubai"
                />
              </div>
              <div className="col-span-2">
                <Label htmlFor="town">Town</Label>
                <Select value={formData.town} onValueChange={(value) => handleInputChange('town', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select town" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sharjah">Sharjah</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                    <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
                    <SelectItem value="ajman">Ajman</SelectItem>
                    <SelectItem value="fujairah">Fujairah</SelectItem>
                    <SelectItem value="rak">Ras Al Khaimah</SelectItem>
                    <SelectItem value="uaq">Umm Al Quwain</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <p>I, Esther Howard, hereby consent to obtain and review my credit report from Etihad Credit Bureau for the purpose of loan application.</p>
            <p>I acknowledge that this consent is voluntary. This authorization is valid until revoked in writing by us.</p>
            <p>I declare that the information provided in this authorization is accurate to the best of my knowledge.</p>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
            />
            <Label htmlFor="consent" className="text-sm">
              I am authorising Ideal Bank for fetching my AECB Score
            </Label>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={handleSubmit}
              disabled={!formData.consent}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Send OTP
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
