
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/Header";
import { ArrowLeft, Upload, Plus, FileText, Eye, Trash2, Check } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  status: string;
  file: File;
}

export const BankStatements = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [passwords, setPasswords] = useState<{ [key: string]: string }>({});
  const [selectedBank, setSelectedBank] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBack = () => {
    navigate("/applicant-details");
  };

  const handleContinue = () => {
    navigate("/aecb-score");
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;

    const newFiles: UploadedFile[] = Array.from(files).map(file => ({
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: `${Math.round(file.size / 1024)} KB`,
      status: "100% uploaded",
      file: file
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
  };

  const handleClickUpload = () => {
    fileInputRef.current?.click();
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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
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
      {/* Back button - fixed at top left */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="ghost" 
          onClick={handleBack} 
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </div>
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
          <div className="w-80 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg relative overflow-hidden">
            <img 
              src="/lovable-uploads/c1dc414f-1d31-4eb0-83cf-c75066ea23c9.png" 
              alt="Woman working on laptop" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 p-6 text-white">
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
              <h2 className="text-xl font-semibold mb-2">Bank Statements</h2>
              
              <h3 className="text-lg font-medium mb-2">Upload bank statements</h3>
              <p className="text-gray-600 mb-6">Upload your bank statements for the last 6 months to help us assess your loan eligibility.</p>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Select your bank*</label>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose your bank" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adcb">Abu Dhabi Commercial Bank</SelectItem>
                    <SelectItem value="fab">First Abu Dhabi Bank</SelectItem>
                    <SelectItem value="emirates">Emirates NBD</SelectItem>
                    <SelectItem value="mashreq">Mashreq Bank</SelectItem>
                    <SelectItem value="rakbank">RAKBANK</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />

              <div className="mb-6">
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gray-400 transition-colors"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={handleClickUpload}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Click to upload
                  </button>
                  <span className="text-gray-600"> or drag and drop</span>
                  <p className="text-sm text-gray-500 mt-2">Supported format: PDF (max. 1 MB)</p>
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

              <button 
                onClick={handleClickUpload}
                className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
              >
                <Plus className="w-4 h-4" />
                <span>Add more bank statements</span>
              </button>

              <Button onClick={handleContinue} className="bg-blue-600 hover:bg-blue-700">
                Save and Proceed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
