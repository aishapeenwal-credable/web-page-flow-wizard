
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidePanel } from "../SidePanel";

interface ProcessingStepProps {
  onNext: () => void;
  onPrev?: () => void;
}

export const ProcessingStep = ({ onNext, onPrev }: ProcessingStepProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onNext();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          {onPrev && (
            <Button 
              variant="ghost" 
              onClick={onPrev} 
              className="absolute top-6 left-6 flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          )}
          
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            We are currently analysing your application.
          </h2>
          <p className="text-gray-600">
            This process may require a bit more time, and we appreciate your patience.
          </p>
        </div>
      </div>
    </div>
  );
};
