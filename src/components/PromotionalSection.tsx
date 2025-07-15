import { Check } from "lucide-react";

export const PromotionalSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-lg overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/lovable-uploads/c50b8569-efff-42aa-b2a6-f59c1bb49e3c.png')",
        }}
      />
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-2">EMPOWERING YOUR FINANCIAL JOURNEY</h2>
        <h3 className="text-xl mb-6">Loans crafted for all your aspirations</h3>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
            <span>Collateral free financing</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
            <span>Instant eligibility confirmation</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
            <span>Credit limit as per requirement</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
            <span>Hassle-free disbursal in account</span>
          </div>
        </div>
      </div>
    </div>
  );
};