
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download } from "lucide-react";

interface SigningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export const SigningModal = ({ isOpen, onClose, onApply }: SigningModalProps) => {
  const handleDownload = (type: string) => {
    // Simulate download functionality
    console.log(`Downloading ${type}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">Sign the agreement</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="border rounded-lg p-6 bg-gray-50 mb-6">
            <div className="text-center mb-4">
              <h3 className="font-semibold text-lg">NOTICE OF ASSIGNMENT</h3>
              <p className="text-sm text-gray-600">(On the letterhead of Assignor) [Transactional]</p>
            </div>
            
            <div className="space-y-4 text-sm">
              <p>
                This letter serves as Notification of Assignment of payments under the 
                Underlying Obligation to Ideal Bank ("Assignee")
              </p>
              
              <div>
                <p><strong>Assigned Receivables:</strong> All the payment obligations of the Debtor 
                towards the Assignor under the Contract detailed in the Annexure 
                hereto.</p>
                <p>Assigned Collateral: Any collateral / security offered in terms of the 
                Contract and the security documents.</p>
              </div>
              
              <div>
                <p><strong>Payment Remittance Information:</strong> Debtor is requested to make all 
                payments in respect of Assigned Receivables in favor of:</p>
              </div>
              
              <p><strong>"IDEAL A/c No. 61527378191"</strong> at the following address:</p>
              
              <div>
                <p><strong>"Underlying Obligation/Contract"</strong> means an obligation of the Debtor 
                towards the Assignor arising out of any contract, invoice or any other 
                instrument or dealing which gives rise to payment obligation of the 
                Debtor towards the Assignor more particularly detailed in the Annexure 
                hereto.</p>
              </div>
              
              <p><strong>Debtor Confirms and Consents that:</strong></p>
            </div>
          </div>
          
          <div className="flex gap-4 mb-6">
            <Button 
              variant="outline" 
              onClick={() => handleDownload('Business Loan Agreement')}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Business Loan Agreement
            </Button>
            <Button 
              variant="outline" 
              onClick={() => handleDownload('Sanction Letter')}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Sanction Letter
            </Button>
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onApply} className="bg-blue-600 hover:bg-blue-700">
              Apply
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
