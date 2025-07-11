
import { useState } from "react";
import { Upload, FileText, Eye, Trash2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidePanel } from "../SidePanel";

interface KYCVerificationProps {
  onNext: () => void;
  onPrev: () => void;
}

interface UploadedFile {
  name: string;
  size: string;
  status: string;
}

export const KYCVerification = ({ onNext, onPrev }: KYCVerificationProps) => {
  const [kycStatus] = useState([
    { name: "Jane Cooper", role: "Authorised Signatory", status: "completed", statusText: "C-KYC completed successfully!" },
    { name: "Esther Howard", role: "Authorised Signatory, Personal Guarantor", status: "completed", statusText: "C-KYC completed successfully!" }
  ]);

  const [indemnityEmail, setIndemnityEmail] = useState("legal@idealbrothers.ae");
  const [incorporationCert, setIncorporationCert] = useState<UploadedFile | null>({
    name: "Incorporation_certificate.pdf",
    size: "789 KB",
    status: "100% uploaded"
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFile: UploadedFile = {
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        status: "100% uploaded"
      };
      setIncorporationCert(newFile);
    }
  };

  const handleRemoveFile = () => {
    setIncorporationCert(null);
  };

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <Button 
            variant="ghost" 
            onClick={onPrev} 
            className="mb-4 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>

          <h2 className="text-xl font-semibold mb-6">KYC</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">KYC Status</h3>
            
            <div className="space-y-4">
              {kycStatus.map((person, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-lg">{person.name}</h4>
                      <div className="flex space-x-2 mt-1">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                          Authorised Signatory
                        </span>
                        {person.role.includes("Personal Guarantor") && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                            Personal Guarantor
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 text-green-600 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">{person.statusText}</span>
                      </div>
                      {index === 0 && (
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Resend Link
                        </button>
                      )}
                      {index === 1 && (
                        <button className="text-blue-600 hover:text-blue-700 text-sm">
                          Copy Link
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Additional details</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Indemnity email ID <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                value={indemnityEmail}
                onChange={(e) => setIndemnityEmail(e.target.value)}
                className="max-w-md"
              />
              <p className="text-sm text-gray-600 mt-1">
                Provide official email for business and legal communications
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Incorporation certificate (optional)</h3>
            
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <input
                type="file"
                id="incorporation-cert-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileUpload}
              />
              <label htmlFor="incorporation-cert-upload" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
                Click to upload
              </label>
              <span className="text-gray-600"> or drag and drop</span>
              <p className="text-sm text-gray-500 mt-1">PDF (max. 1 MB)</p>
            </div>

            {incorporationCert && (
              <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <FileText className="w-8 h-8 text-blue-600" />
                <div className="flex-1">
                  <div className="font-medium">{incorporationCert.name}</div>
                  <div className="text-sm text-gray-500">{incorporationCert.size} | {incorporationCert.status}</div>
                </div>
                <Input
                  type="password"
                  placeholder="PDF password (if applicable)"
                  className="w-64"
                />
                <Button variant="ghost" size="sm">
                  <Eye className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" onClick={handleRemoveFile}>
                  <Trash2 className="w-4 h-4 text-red-500" />
                </Button>
              </div>
            )}
          </div>

          <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">
            Save and Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};
