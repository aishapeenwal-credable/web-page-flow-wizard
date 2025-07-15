
import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/83e2b8f5-c059-4834-a41d-540e2cd6fe2e.png" 
            alt="Ideal Bank" 
            className="h-8"
          />
        </div>
        <div className="flex items-center space-x-4">
          <select className="border border-gray-300 rounded px-3 py-1 text-sm">
            <option>English</option>
            <option>العربية</option>
          </select>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
