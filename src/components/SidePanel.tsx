
import { Check } from "lucide-react";

export const SidePanel = () => {
  return (
    <div className="w-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg relative overflow-hidden">
      <img 
        src="/lovable-uploads/c1dc414f-1d31-4eb0-83cf-c75066ea23c9.png" 
        alt="Woman working on laptop" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 p-6 text-white">
        <div className="mb-4">
          <p className="text-sm uppercase tracking-wide opacity-90">EMPOWERING YOUR FINANCIAL JOURNEY</p>
          <h2 className="text-xl font-bold mt-2">Loans crafted for all your aspirations</h2>
        </div>
        
        <div className="space-y-3">
          {["Collateral free financing", "Instant eligibility confirmation", "Credit limit as per requirement", "Hassle-free disbursal in account"].map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
