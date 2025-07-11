
import { X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SigningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const SigningModal = ({ isOpen, onClose, onApply }: SigningModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Sign the agreement</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-center mb-4">
              <h3 className="font-bold text-lg">NOTICE OF ASSIGNMENT</h3>
              <p className="text-sm text-gray-600">(On the letterhead of Assignor) [Transactional]</p>
            </div>

            <div className="space-y-4 text-sm">
              <p>
                This letter serves as Notification of Assignment of payments under the 
                Underlying Obligation to Ideal Bank ("Assignee")
              </p>

              <div>
                <p className="font-semibold">Assigned Receivables:</p>
                <p>All the payment obligations of the Debtor towards the Assignor under the Contract detailed in the Annexure hereto.</p>
              </div>

              <div>
                <p className="font-semibold">Assigned Collateral:</p>
                <p>Any collateral / security offered in terms of the Contract and the security documents.</p>
              </div>

              <div>
                <p className="font-semibold">Payment Remittance Information:</p>
                <p>Debtor is requested to make all payments in respect of Assigned Receivables in favor of:</p>
              </div>

              <p className="font-mono text-xs bg-white p-2 rounded">
                "IDEAL A/c No. 61527378191 at the following address:"
              </p>

              <div>
                <p className="font-semibold">"Underlying Obligation/Contract"</p>
                <p>means an obligation of the Debtor towards the Assignor arising out of any contract, invoice or any other instrument or dealing which gives rise to payment obligation of the Debtor towards the Assignor more particularly detailed in the Annexure hereto.</p>
              </div>

              <p className="font-semibold">Debtor Confirms and Consents that:</p>
              <p>Assignee assumes no responsibility of the obligations of Assignor including but not...</p>
            </div>
          </div>

          <div className="flex space-x-4 mb-6">
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Business Loan Agreement</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download Sanction Letter</span>
            </Button>
          </div>

          <div className="flex space-x-4">
            <Button onClick={onApply} className="bg-blue-600 hover:bg-blue-700">
              Apply
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
