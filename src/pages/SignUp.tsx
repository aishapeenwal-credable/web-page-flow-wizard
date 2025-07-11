
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSignUp = () => {
    navigate("/applicant-details");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative w-96 h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 p-8 text-white h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-8">Improve your working capital with digital financing</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Collateral free financing</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Instant eligibility confirmation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Credit Limit as per requirement</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Hassle-free disbursal in account</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">i</span>
              </div>
              <span className="text-xl font-bold text-blue-600">Ideal Bank</span>
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
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="flex">
                  <select className="px-3 py-2 border border-r-0 rounded-l-md bg-gray-50">
                    <option>+971</option>
                  </select>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name in English</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name in English</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="security">Enter Security Code</Label>
              <div className="flex space-x-2">
                <Input
                  id="security"
                  value={formData.securityCode}
                  onChange={(e) => handleInputChange('securityCode', e.target.value)}
                  className="flex-1"
                />
                <div className="w-20 h-10 bg-green-100 rounded flex items-center justify-center">
                  <span className="text-green-600 font-mono text-sm">captcha</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <Label htmlFor="terms" className="text-sm">
                By clicking Continue, I agree to{" "}
                <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> of Ideal Bank
              </Label>
            </div>

            <Button 
              onClick={handleSignUp} 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={!agreeTerms}
            >
              Sign Up!
            </Button>
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
  );
};
