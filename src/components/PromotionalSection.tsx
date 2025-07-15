export const PromotionalSection = () => {
  return (
    <div className="w-80 h-full min-h-96 rounded-lg overflow-hidden flex-shrink-0 relative">
      <img 
        alt="Financial Journey" 
        src="/lovable-uploads/69489ac4-36cc-4b2a-8449-479c34ee30b3.png" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6">
        <div className="text-white">
          <h2 className="text-xl font-bold mb-3 leading-tight">
            Empowering your financial journey
          </h2>
          <p className="text-lg font-semibold mb-4">
            Loans crafted for all your aspirations
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="font-medium">1)</span>
              <span className="ml-2">Collateral free financing</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium">2)</span>
              <span className="ml-2">Instant eligibility confirmation</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium">3)</span>
              <span className="ml-2">Credit limit as per requirement</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium">4)</span>
              <span className="ml-2">Hassle-free disbursal in account</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};