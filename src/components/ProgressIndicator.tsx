
import { Check } from "lucide-react";

interface Step {
  id: number;
  name: string;
  description: string;
  completed?: boolean;
  active?: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

export const ProgressIndicator = ({ steps }: ProgressIndicatorProps) => {
  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${step.completed 
                ? 'bg-green-500 text-white' 
                : step.active 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }
            `}>
              {step.completed ? <Check className="w-4 h-4" /> : step.id}
            </div>
            <div className="mt-2 text-center">
              <div className={`text-sm font-medium ${step.active ? 'text-blue-600' : 'text-gray-900'}`}>
                {step.name}
              </div>
              <div className="text-xs text-gray-500 max-w-24">
                {step.description}
              </div>
            </div>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-px bg-gray-300 mx-4 mt-[-40px]" />
          )}
        </div>
      ))}
    </div>
  );
};
