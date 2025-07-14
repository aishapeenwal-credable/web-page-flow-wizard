import { Shield } from "lucide-react";

export const AuthFooter = () => {
  return (
    <footer className="bg-white border-t py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
        <div className="flex flex-col">
          <span className="text-gray-600">Need Help?</span>
          <a 
            href="mailto:support@idealbank.ae" 
            className="text-blue-600 hover:underline"
          >
            support@idealbank.ae
          </a>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-500">
          <span>Powered by</span>
          <div className="flex items-center space-x-1">
            <span className="font-semibold text-gray-700">CRED</span>
            <span className="text-orange-500 font-bold">A</span>
            <span className="font-semibold text-gray-700">BLE</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-green-600" />
          <div className="flex flex-col">
            <span className="text-green-600 font-medium">Safe & Secure</span>
            <span className="text-gray-500 text-xs">
              We use best industry practice and security protocols.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};