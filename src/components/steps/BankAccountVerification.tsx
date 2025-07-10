
import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidePanel } from "../SidePanel";

interface BankAccountVerificationProps {
  onNext: () => void;
  onPrev: () => void;
}

export const BankAccountVerification = ({ onNext }: BankAccountVerificationProps) => {
  const [iban, setIban] = useState("54697070101");
  const [accountHolder, setAccountHolder] = useState("Ideal Brothers L.L.C");
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    setIsVerified(true);
    // Simulate verification delay
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Bank Account Verification</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">
              Enter the bank account details where you prefer to receive the loan amount
            </h3>
            
            <div className="space-y-6 max-w-md">
              <div>
                <label className="block text-sm font-medium mb-2">
                  IBAN <span className="text-red-500">*</span>
                </label>
                <Select value={iban} onValueChange={setIban}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="54697070101">54697070101</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Name of the account holder <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    value={accountHolder}
                    onChange={(e) => setAccountHolder(e.target.value)}
                  />
                  {isVerified && (
                    <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                </div>
              </div>

              <Button 
                onClick={handleVerify}
                disabled={!iban || !accountHolder || isVerified}
                className={`${isVerified ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isVerified ? 'Verified' : 'Verify'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
