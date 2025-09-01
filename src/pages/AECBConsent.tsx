import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { PromotionalSection } from "@/components/PromotionalSection";
import { PageFooter } from "@/components/PageFooter";
import { Check, Download, Upload, X } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
}

export const AECBConsent = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleContinue = () => {
    navigate("/bank-statements");
  };

  const handleDownloadFormat = () => {
    // In a real application, this would download the actual format file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual file URL
    link.download = 'AECB_Consent_Format.pdf';
    link.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles: UploadedFile[] = Array.from(files).map(file => ({
        id: Date.now().toString() + Math.random().toString(),
        name: file.name,
        size: file.size
      }));
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const handleRemoveFile = (fileId: string) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: true },
    { id: 2, name: "Partner Details", description: "Add Partner Details", completed: true },
    { id: 3, name: "AECB Consent", description: "Download and upload AECB consent forms.", completed: false, active: true },
    { id: 4, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: false },
    { id: 5, name: "VAT Returns", description: "Check VAT returns easily.", completed: false },
    { id: 6, name: "Loan Offer", description: "View and accept loan offers.", completed: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8">Your loan application</h1>
        
        {/* Progress Indicator */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${step.completed 
                    ? 'bg-adcb-success text-white' 
                    : step.active 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step.completed ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${step.active ? 'text-primary' : 'text-gray-900'}`}>
                    {step.name}
                  </div>
                  <div className="text-xs text-gray-500 max-w-24">
                    {step.description}
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-16 h-px bg-gray-300 mx-4 mt-[-40px]" />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-8">
          <PromotionalSection />

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">AECB Consent Forms</h2>

              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-6 flex items-start gap-3">
                <div className="w-6 h-6 bg-accent/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-accent rounded"></div>
                </div>
                <p className="text-sm text-foreground">
                  Download the AECB consent form, fill it offline with required signatures, and upload the completed documents.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Download Consent Format</h3>
                <Button
                  onClick={handleDownloadFormat}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download AECB Consent Format
                </Button>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Upload Completed Consent Forms</h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-4">
                    Upload your completed AECB consent forms (PDF, JPG, PNG)
                  </p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload">
                    <Button variant="outline" className="cursor-pointer">
                      Select Files
                    </Button>
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Uploaded Files:</h4>
                    {uploadedFiles.map((file) => (
                      <div key={file.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveFile(file.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button 
                onClick={handleContinue} 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={uploadedFiles.length === 0}
              >
                Save and Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};