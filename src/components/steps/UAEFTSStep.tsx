
import { useState } from "react";
import { ArrowLeft, Info, CreditCard, MousePointer, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PromotionalSection } from "../PromotionalSection";
import { OTPModal } from "../OTPModal";

interface UAEFTSStepProps {
  onNext: () => void;
  onPrev: () => void;
}

export const UAEFTSStep = ({ onNext, onPrev }: UAEFTSStepProps) => {
  const [currentState, setCurrentState] = useState<'initial' | 'loading' | 'completed'>('initial');
  const [showOTPModal, setShowOTPModal] = useState(false);

  const handleInitiateFTS = () => {
    setShowOTPModal(true);
  };

  const handleOTPVerify = (otp: string) => {
    console.log('OTP verified:', otp);
    setShowOTPModal(false);
    setCurrentState('loading');
    // Simulate loading time
    setTimeout(() => {
      setCurrentState('completed');
      // Auto-proceed after showing completion for 2 seconds
      setTimeout(() => {
        // Scroll to top when navigating to next step
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        onNext();
      }, 2000);
    }, 3000);
  };

  const handleCloseOTP = () => {
    setShowOTPModal(false);
  };

  const renderContent = () => {
    switch (currentState) {
      case 'initial':
        return (
          <>
            <h2 className="text-2xl font-semibold mb-8">Set up e-NACH</h2>
            
            <div className="flex gap-8 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Please keep your</p>
                  <p className="font-medium">Company details and account details handy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Please <span className="font-medium">authorise the UAE FTS Mandate</span> using <span className="font-medium">OTP/ Biometric authentication</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Click on <span className="font-medium">Initiate FTS</span> to proceed.</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={handleInitiateFTS}
              className="bg-blue-600 hover:bg-blue-700 px-8"
            >
              Initiate FTS
            </Button>
          </>
        );

      case 'loading':
        return (
          <>
            <h2 className="text-2xl font-semibold mb-8">Set up UAE FTS Mandate</h2>
            
            <div className="flex gap-8 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Please keep your</p>
                  <p className="font-medium">Company details and account details handy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Please <span className="font-medium">authorise the UAE FTS Mandate</span> using <span className="font-medium">OTP/ Biometric authentication</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Click on <span className="font-medium">Initiate FTS</span> to proceed.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-blue-900 mb-2">UAE FTS setup in progress</h3>
                  <p className="text-blue-700">Your UAE FTS setup is currently underway and may take a few minutes to complete. Please wait while we finalize the process. Thank you for your patience.</p>
                </div>
              </div>
            </div>
          </>
        );

      case 'completed':
        return (
          <>
            <h2 className="text-2xl font-semibold mb-8">Set up e-NACH</h2>
            
            <div className="flex gap-8 mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Please keep your</p>
                  <p className="font-medium">Company details and account details handy</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Please <span className="font-medium">authorise the UAE FTS Mandate</span> using <span className="font-medium">OTP/ Biometric authentication</span></p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MousePointer className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-700">Click on <span className="font-medium">Initiate FTS</span> to proceed.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <h3 className="font-medium text-green-900 mb-2">UAE FTS setup in completed</h3>
                  <p className="text-green-700">Great news! Your UAE FTS setup is completed.</p>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex gap-8">
      <PromotionalSection />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">

          {renderContent()}
        </div>
      </div>

      <OTPModal
        isOpen={showOTPModal}
        onClose={handleCloseOTP}
        onVerify={handleOTPVerify}
        mobileNumber="+91 6038299494"
      />
    </div>
  );
};
