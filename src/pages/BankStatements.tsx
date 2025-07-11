
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Check, Upload, FileText, Eye, Trash2, Plus, ArrowLeft } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  status: string;
  file: File;
}

export const BankStatements = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: "1",
      name: "Sample bank 1.pdf",
      size: "789 KB",
      status: "100% uploAEDd",
      file: new File([], "sample1.pdf")
    },
    {
      id: "2", 
      name: "Sample bank 2.pdf",
      size: "789 KB",
      status: "100% uploAEDd",
      file: new File([], "sample2.pdf")
    }
  ]);
  const [passwords, setPasswords] = useState<{ [key: string]: string }>({});

  const handleContinue = () => {
    navigate("/aecb-score");
  };

  const handleBack = () => {
    navigate("/applicant-details");
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      status: "100% uploAEDd",
      file: file
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (id: string) => {
    setUploadedFiles(uploadedFiles.filter(file => file.id !== id));
    const newPasswords = { ...passwords };
    delete newPasswords[id];
    setPasswords(newPasswords);
  };

  const handlePasswordChange = (fileId: string, password: string) => {
    setPasswords({ ...passwords, [fileId]: password });
  };

  const steps = [
    { id: 1, name: "Applicant Detail", description: "Just a few Personal details.", completed: true },
    { id: 2, name: "Bank Statements", description: "Upload your bank statements, safely.", completed: false, active: true },
    { id: 3, name: "AECB Score", description: "Add partners and check AECB scores.", completed: false },
    { id: 4, name: "VAT Returns", description: "Check VAT returns easily.", completed: false },
    { id: 5, name: "Loan Offer", description: "View and accept loan offers.", completed: false }
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
                    ? 'bg-green-500 text-white' 
                    : step.active 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }
                `}>
                  {step.completed ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <div className="mt-2 text-center">
                  <div className={`text-sm font-medium ${step.active ? 'text-blue-600' : 'text-gray-900'}`}>
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
          <div className="w-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <p className="text-sm uppercase tracking-wide opacity-90">EMPOWERING YOUR FINANCIAL JOURNEY</p>
                <h2 className="text-xl font-bold mt-2">Loans crafted for all your aspirations</h2>
              </div>
              
              <div className="space-y-3">
                {["Collateral free financing", "Instant eligibility confirmation", "Credit limit as per requirement", "Hassle-free disbursal in account"].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Button 
                variant="ghost" 
                onClick={handleBack} 
                className="mb-4 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">Hello John</h2>
                <p className="text-gray-600">
                  Kindly upload the recent 12 months' account statements.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <Upload className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium">Upload statements</p>
                    <p className="text-sm text-gray-600">from Feb 23 to Jan 24 of all bank accounts.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                    <span>🔒</span>
                  </div>
                  <div>
                    <p className="font-medium">Add file password wherever necessary.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs">
                    <span>📄</span>
                  </div>
                  <div>
                    <p className="font-medium">Upload e-statements.</p>
                    <p className="text-sm text-gray-600">Scanned copies are not accepted.</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">Upload statements</h3>
                <p className="text-gray-600 mb-4">You can upload bank statements one by one or all at once.</p>

                <div className="border border-gray-300 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Bank 1</span>
                    <div className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <button className="text-gray-400">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <button className="text-blue-600 hover:text-blue-700 font-medium">
                      Click to upload
                    </button>
                    <span className="text-gray-600"> or drag and drop</span>
                    <p className="text-sm text-gray-500 mt-1">Supported format: PDF (max. 1 MB)</p>
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="space-y-4 mb-6">
                    {uploadedFiles.map((file) => (
                      <div key={file.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div className="flex-1">
                          <div className="font-medium">{file.name}</div>
                          <div className="text-sm text-gray-500">{file.size} | {file.status}</div>
                        </div>
                        <Input
                          type="password"
                          placeholder="PDF password (if applicable)"
                          className="w-64"
                          value={passwords[file.id] || ''}
                          onChange={(e) => handlePasswordChange(file.id, e.target.value)}
                        />
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleRemoveFile(file.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}

                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8 p-4 border-2 border-dashed border-blue-200 rounded-lg w-full justify-center">
                  <Plus className="w-4 h-4" />
                  <span>Add Statements for Another Bank</span>
                </button>

                <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
                  Save and Proceed
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
