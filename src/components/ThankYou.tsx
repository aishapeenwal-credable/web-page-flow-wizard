
import { Check, CreditCard, User } from "lucide-react";
import { Header } from "./Header";

export const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="bg-white rounded-lg shadow-sm p-12 max-w-2xl w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-3xl font-semibold mb-4">Thank you for applying!</h1>
          <p className="text-gray-600 mb-8 text-lg">
            We have received your loan application. It is currently under process, and we will let you know 
            once the loan account is setup.
          </p>
          
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-3 bg-blue-50 rounded-lg p-4">
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">AED 30,000</p>
                <p className="text-sm text-gray-600">Loan amount</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-lg">Ideal Brothers L.L.C.</p>
                <p className="text-sm text-gray-600">Account Number | xxxx2341</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
