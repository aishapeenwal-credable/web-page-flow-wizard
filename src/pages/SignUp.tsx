import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, ArrowLeft } from "lucide-react";
import { AuthFooter } from "@/components/AuthFooter";
export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "john.doe@idealbrothers.ae",
    mobile: "123 456 7890",
    firstName: "John",
    lastName: "Doe",
    password: "********",
    confirmPassword: "********",
    securityCode: "etsans"
  });
  const [agreeTerms, setAgreeTerms] = useState(true);
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSignUp = () => {
    navigate("/applicant-details");
  };
  return <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        <div className="flex-1 relative overflow-hidden">
          <img src="/lovable-uploads/aea4b6ec-9975-45c6-acaf-d3be7aed186c.png" alt="Digital financing illustration" className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex flex-col space-y-2">
                  
                  <img src="/lovable-uploads/83e2b8f5-c059-4834-a41d-540e2cd6fe2e.png" alt="Ideal Bank" className="h-8" />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <select className="text-sm text-blue-600">
                  <option>English</option>
                  <option>العربية</option>
                </select>
                <User className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <h1 className="text-2xl font-semibold mb-6">Sign up</h1>

            <div className="space-y-6">
              <Button variant="outline" className="w-full mb-4">
                <User className="w-4 h-4 mr-2" />
                Sign up with UAE PASS
              </Button>

              <div className="text-center">
                <span className="text-gray-500">OR</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">E-mail Address</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <div className="flex">
                    <select className="px-3 py-2 border border-r-0 rounded-l-md bg-gray-50">
                      <option>+971</option>
                    </select>
                    <Input id="mobile" value={formData.mobile} onChange={e => handleInputChange('mobile', e.target.value)} className="rounded-l-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name in English</Label>
                  <Input id="firstName" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name in English</Label>
                  <Input id="lastName" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" value={formData.password} onChange={e => handleInputChange('password', e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={e => handleInputChange('confirmPassword', e.target.value)} />
                </div>
              </div>

              <div>
                <Label htmlFor="security">Enter Security Code</Label>
                <div className="flex space-x-2">
                  <Input id="security" value={formData.securityCode} onChange={e => handleInputChange('securityCode', e.target.value)} className="flex-1" />
                  <div className="w-20 h-10 bg-green-100 rounded flex items-center justify-center">
                    <span className="text-green-600 font-mono text-sm">captcha</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
                <Label htmlFor="terms" className="text-sm">
                  By clicking Continue, I agree to{" "}
                  <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> of Ideal Bank
                </Label>
              </div>

              <Button onClick={handleSignUp} className="w-full bg-blue-600 hover:bg-blue-700" disabled={!agreeTerms}>
                Sign Up!
              </Button>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <button onClick={() => navigate("/login")} className="text-blue-600 hover:underline">
                    Login
                  </button>
                </span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">Safe & Secure</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                We use best industry practice and security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AuthFooter />
    </div>;
};