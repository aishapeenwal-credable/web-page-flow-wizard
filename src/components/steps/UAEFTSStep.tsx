
import { useState } from "react";
import { ArrowLeft, Check, Info, Shield, MousePointer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidePanel } from "../SidePanel";

interface UAEFTSStepProps {
  onNext: () => void;
  onPrev: () => void;
}

export const UAEFTSStep = ({ onNext, onPrev }: UAEFTSStepProps) => {
  const [status, setStatus] = useState<'initial' | 'initiated' | 'progress' | 'completed'>('initial');

  const handleInitiateFTS = () => {
    setStatus('initiated');
    // Simulate FTS initiation
    setTimeout(() => {
      setStatus('progress');
      // Simulate FTS completion
      setTimeout(() => {
        setStatus('completed');
        // Auto-navigate after completion
        setTimeout(() => {
          onNext();
        }, 2000);
      }, 3000);
    }, 1000);
  };

  const renderContent = () => {
    switch (status) {
      case 'initial':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Set up e-NACH</h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Please keep your</p>
                  <p className="font-medium">Company details and account details handy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Please <span className="font-bold">authorise the UAE FTS Mandate</span> using <span className="font-bold">OTP/ Biometric authentication</span></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MousePointer className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Click on <span className="font-bold">Initiate FTS</span> to proceed.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">UAE FTS setup in completed</p>
                <p className="text-green-600">Great news! Your UAE FTS setup is completed.</p>
              </div>
            </div>

            <Button 
              onClick={handleInitiateFTS}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Initiate FTS
            </Button>
          </div>
        );

      case 'initiated':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Set up UAE FTS Mandate</h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Please keep your</p>
                  <p className="font-medium">Company details and account details handy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Please <span className="font-bold">authorise the UAE FTS Mandate</span> using <span className="font-bold">OTP/ Biometric authentication</span></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MousePointer className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Click on <span className="font-bold">Initiate FTS</span> to proceed.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center space-x-3">
              <Info className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium text-blue-800">UAE FTS setup in progress</p>
                <p className="text-blue-600">Your UAE FTS setup is currently underway and may take a few minutes to complete. Please wait while we finalize the process. Thank you for your patience.</p>
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6">Set up UAE FTS Mandate</h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Please keep your</p>
                  <p className="font-medium">Company details and account details handy</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Please <span className="font-bold">authorise the UAE FTS Mandate</span> using <span className="font-bold">OTP/ Biometric authentication</span></p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MousePointer className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-medium mb-2">Click on <span className="font-bold">Initiate FTS</span> to proceed.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center space-x-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
              <div>
                <p className="font-medium text-blue-800">UAE FTS setup in progress</p>
                <p className="text-blue-600">Your UAE FTS setup is currently underway and may take a few minutes to complete. Please wait while we finalize the process. Thank you for your patience.</p>
              </div>
            </div>
          </div>
        );

      case 'completed':
        return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6">
              <Check className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold mb-4">Thank you for applying!</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              We have received your loan application. It is currently under process, and we will let you know once the loan account is setup.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 font-bold">💰</div>
                </div>
                <div className="text-left">
                  <p className="font-bold">AED 30,000</p>
                  <p className="text-gray-600 text-sm">Loan amount</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <div className="text-blue-600 font-bold">👤</div>
                </div>
                <div className="text-left">
                  <p className="font-bold">Ideal Brothers L.L.C</p>
                  <p className="text-gray-600 text-sm">Account Number | xxxx2341</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {status !== 'completed' && (
            <Button 
              variant="ghost" 
              onClick={onPrev} 
              className="mb-4 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          )}

          {renderContent()}
        </div>
      </div>
    </div>
  );
};
