
import { useState } from "react";
import { Upload, Plus, FileText, Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidePanel } from "../SidePanel";

interface VATReturnsProps {
  onNext: () => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  status: string;
}

export const VATReturns = ({ onNext }: VATReturnsProps) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [passwords, setPasswords] = useState<{ [key: string]: string }>({});

  const handleFileUpload = () => {
    const newFile: UploadedFile = {
      id: Date.now().toString(),
      name: `Sample returns ${uploadedFiles.length + 1}.pdf`,
      size: "789 KB",
      status: "100% uploaded"
    };
    setUploadedFiles([...uploadedFiles, newFile]);
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

  return (
    <div className="flex gap-8">
      <SidePanel />
      <div className="flex-1">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">VAT Returns</h2>
          
          <h3 className="text-lg font-medium mb-2">Upload returns</h3>
          <p className="text-gray-600 mb-6">You can upload VAT returns one by one or all at once.</p>

          <div className="mb-6">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <button 
                onClick={handleFileUpload}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
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

          <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
            <Plus className="w-4 h-4" />
            <span>Add more VAT returns</span>
          </button>

          <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">
            Save and Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};
