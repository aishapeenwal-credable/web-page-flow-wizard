
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, User } from "lucide-react";

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("john.doe@idealbrothers.ae");
  const [password, setPassword] = useState("********");
  const [securityCode, setSecurityCode] = useState("etsans");
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  const handleLogin = () => {
    navigate("/signup");
  };

  const handleSignUp = () => {
    navigate("/signup");
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

          <h1 className="text-2xl font-semibold mb-6">Sign in</h1>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-4">Login with SSO</p>
              <Button variant="outline" className="w-full mb-4">
                <User className="w-4 h-4 mr-2" />
                Login with UAE PASS
              </Button>
            </div>

            <div className="text-center">
              <span className="text-gray-500">OR</span>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="email">E-mail Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 text-sm"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <a href="#" className="text-blue-600 text-sm hover:underline">Forgot Password?</a>
              </div>

              <div>
                <Label htmlFor="security">Enter Security Code</Label>
                <div className="flex space-x-2">
                  <Input
                    id="security"
                    value={securityCode}
                    onChange={(e) => setSecurityCode(e.target.value)}
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
                  id="marketing"
                  checked={agreeMarketing}
                  onChange={(e) => setAgreeMarketing(e.target.checked)}
                />
                <Label htmlFor="marketing" className="text-sm">
                  I agree to be contacted for marketing purposes via SMS, email or WhatsApp.
                </Label>
              </div>

              <Button onClick={handleLogin} className="w-full bg-blue-600 hover:bg-blue-700">
                Login
              </Button>

              <p className="text-sm text-center">
                If you don't have an account,{" "}
                <button onClick={handleSignUp} className="text-blue-600 hover:underline">
                  Sign Up
                </button>{" "}
                here
              </p>
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
  );
};
