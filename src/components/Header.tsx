
import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">i</span>
          </div>
          <span className="text-xl font-bold text-blue-600">Ideal Bank</span>
        </div>
        <div className="flex items-center space-x-4">
          <select className="text-sm text-blue-600 bg-transparent border-none">
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
