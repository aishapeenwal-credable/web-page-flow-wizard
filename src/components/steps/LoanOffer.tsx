
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidePanel } from "../SidePanel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronUp, ChevronDown, Phone } from "lucide-react";

interface LoanOfferProps {
  onNext: () => void;
  onPrev: () => void;
}

export const LoanOffer = ({ onNext }: LoanOfferProps) => {
  const [loanAmount, setLoanAmount] = useState(30000);
  const [repaymentPeriod, setRepaymentPeriod] = useState(6);
  const [affordabilityOpen, setAffordabilityOpen] = useState(true);
  const [repaymentOpen, setRepaymentOpen] = useState(true);

  const maxLoanAmount = 50000;
  const maxRepaymentPeriod = 12;

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2">Congratulations John! Your credit limit has been sanctioned.</h2>
            <p className="text-sm text-gray-600">Please note that approved credit limit is provisional and subject to verification of facts provided.</p>
          </div>

          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <p className="text-green-800 font-medium">Congratulations! You have a pre-approved loan of AED 50,000</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                I want the amount <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="20000"
                  max={maxLoanAmount}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>20,000 AED</span>
                  <span>50,000 AED</span>
                </div>
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                I want to repay in(in Months) <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min="1"
                  max={maxRepaymentPeriod}
                  value={repaymentPeriod}
                  onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>1</span>
                  <span>12</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    value={repaymentPeriod}
                    onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm text-gray-600">Month(s)</span>
                </div>
              </div>
            </div>
          </div>

          <Collapsible open={affordabilityOpen} onOpenChange={setAffordabilityOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg mb-4">
              <span className="font-medium">Affordability Assessment</span>
              {affordabilityOpen ? <ChevronUp /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">SR. NO.</th>
                      <th className="text-left p-2">YOUR MONTHLY STATICS</th>
                      <th className="text-right p-2">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">1.</td>
                      <td className="p-2">Your Monthly Income</td>
                      <td className="p-2 text-right text-green-600">+ 45,000 AED</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">2.</td>
                      <td className="p-2">Your monthly EMI</td>
                      <td className="p-2 text-right text-red-600">- 10,112 AED</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">3.</td>
                      <td className="p-2">Other base charges</td>
                      <td className="p-2 text-right text-red-600">- 13,740 AED</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">4.</td>
                      <td className="p-2">Processing fees (in AED)</td>
                      <td className="p-2 text-right">300 AED</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                If you feel the amount left for your monthly expenditures does not meet your current lifestyle, please reduce the selected loan amount.
              </p>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible open={repaymentOpen} onOpenChange={setRepaymentOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg mb-4">
              <span className="font-medium">Repayment Schedule</span>
              {repaymentOpen ? <ChevronUp /> : <ChevronDown />}
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Select Drawdown Amount*</label>
                  <Input value="30000 AED" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Disbursement Date*</label>
                  <Input value="29/03/2025" readOnly />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-gray-50">
                      <th className="text-left p-2">REPAYMENT SCHEDULE</th>
                      <th className="text-left p-2">DATE</th>
                      <th className="text-right p-2">AMOUNT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6].map((installment) => (
                      <tr key={installment} className="border-b">
                        <td className="p-2">Installment {installment}</td>
                        <td className="p-2">0{installment}/05/2025</td>
                        <td className="p-2 text-right">5125 AED</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div className="flex items-center space-x-2 mb-6 p-4 bg-blue-50 rounded-lg">
            <Phone className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600">Want to discuss your loan offers? </span>
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm underline">
              Request call back
            </button>
          </div>

          <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">
            Accept Offer
          </Button>
        </div>
      </div>
    </div>
  );
};
