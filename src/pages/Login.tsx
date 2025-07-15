
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, ArrowLeft } from "lucide-react";
import { AuthFooter } from "@/components/AuthFooter";

export const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "john.doe@idealbrothers.ae",
    password: "********"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    navigate("/applicant-details");
  };


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        <div className="flex-1 relative overflow-hidden">
          <img 
            src="/lovable-uploads/aea4b6ec-9975-45c6-acaf-d3be7aed186c.png" 
            alt="Digital financing illustration" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/83e2b8f5-c059-4834-a41d-540e2cd6fe2e.png" 
                  alt="Ideal Bank" 
                  className="h-8"
                />
              </div>
              <div className="flex items-center space-x-4">
                <select className="text-sm text-blue-600">
                  <option>English</option>
                  <option>العربية</option>
                </select>
                <User className="w-5 h-5 text-gray-400" />
              </div>
            </div>

            <h1 className="text-2xl font-semibold mb-6">Login</h1>

            <div className="space-y-6">
              <Button variant="outline" className="w-full mb-4">
                <User className="w-4 h-4 mr-2" />
                Login with UAE PASS
              </Button>

              <div className="text-center">
                <span className="text-gray-500">OR</span>
              </div>

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
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" />
                  <Label htmlFor="remember" className="text-sm">Remember me</Label>
                </div>
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
              </div>

              <Button 
                onClick={handleLogin} 
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                Login
              </Button>

              <div className="text-center">
                <span className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <button 
                    onClick={() => navigate("/signup")}
                    className="text-blue-600 hover:underline"
                  >
                    Sign up
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
    </div>
  );
};
