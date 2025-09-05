export const PromotionalSection = () => {
  return (
    <div className="w-80 h-full min-h-96 rounded-lg overflow-hidden flex-shrink-0 relative">
      <img 
        alt="Commercial Vehicle Financing" 
        src="/lovable-uploads/cd41f64b-cb1e-447b-abfb-cddb4c21482e.png" 
        className="w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6">
        <div className="text-white">
          <h2 className="text-xl font-bold mb-3 leading-tight">
            ASSET AND EQUIPMENT FINANCING
          </h2>
          <p className="text-lg font-semibold mb-4">
            Funding available across wide array of brands and vehicles
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <span className="font-medium">1)</span>
              <span className="ml-2">Funding available across wide array of brands and vehicles</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium">2)</span>
              <span className="ml-2">Refinance option available for existing assets</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium">3)</span>
              <span className="ml-2">Shari'ah compliant products available</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};