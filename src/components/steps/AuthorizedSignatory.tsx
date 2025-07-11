import { useState } from "react";
import { Upload, FileText, Eye, Trash2, Plus, ChevronDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SidePanel } from "../SidePanel";

interface AuthorizedSignatoryProps {
  onNext: () => void;
  onPrev: () => void;
}

interface UploadedFile {
  name: string;
  size: string;
  status: string;
}

interface SignatoryData {
  name: string;
  designation: string;
  email: string;
  mobile: string;
}

interface GuarantorData {
  name: string;
  email: string;
  mobile: string;
}

export const AuthorizedSignatory = ({ onNext, onPrev }: AuthorizedSignatoryProps) => {
  const [incorporationDoc, setIncorporationDoc] = useState<UploadedFile | null>({
    name: "Business name-partnership agreement.pdf",
    size: "765 KB",
    status: "100% uploaded"
  });

  const [signatory1] = useState({
    name: "Jane Cooper",
    completed: true
  });

  const [signatories, setSignatories] = useState<SignatoryData[]>([
    {
      name: "",
      designation: "",
      email: "",
      mobile: ""
    }
  ]);

  const [guarantors, setGuarantors] = useState<GuarantorData[]>([
    {
      name: "Jane Cooper",
      email: "jane.cooper@idealbrothers.ae",
      mobile: "773 947 253"
    }
  ]);

  // Helper function to check if signatory is complete
  const isSignatoryComplete = (signatory: SignatoryData): boolean => {
    return signatory.name.trim() !== '' && 
           signatory.designation.trim() !== '' && 
           signatory.email.trim() !== '' && 
           signatory.mobile.trim() !== '';
  };

  // Helper function to check if guarantor is complete
  const isGuarantorComplete = (guarantor: GuarantorData): boolean => {
    return guarantor.name.trim() !== '' && 
           guarantor.email.trim() !== '' && 
           guarantor.mobile.trim() !== '';
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const newFile: UploadedFile = {
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        status: "100% uploaded"
      };
      setIncorporationDoc(newFile);
    }
  };

  const handleRemoveFile = () => {
    setIncorporationDoc(null);
  };

  const addSignatory = () => {
    setSignatories([...signatories, {
      name: "",
      designation: "",
      email: "",
      mobile: ""
    }]);
  };

  const updateSignatory = (index: number, field: keyof SignatoryData, value: string) => {
    const updated = [...signatories];
    updated[index][field] = value;
    setSignatories(updated);
  };

  const addGuarantor = () => {
    setGuarantors([...guarantors, {
      name: "",
      email: "",
      mobile: ""
    }]);
  };

  const updateGuarantor = (index: number, field: keyof GuarantorData, value: string) => {
    const updated = [...guarantors];
    updated[index][field] = value;
    setGuarantors(updated);
  };

  // Get completed signatories names
  const getCompletedSignatoriesNames = (): string[] => {
    const completed = [signatory1.name]; // Always include the first completed signatory
    const additionalCompleted = signatories
      .filter(isSignatoryComplete)
      .map(s => s.name);
    return [...completed, ...additionalCompleted];
  };

  // Get completed guarantors names
  const getCompletedGuarantorsNames = (): string[] => {
    return guarantors
      .filter(isGuarantorComplete)
      .map(g => g.name);
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

          <div className="bg-blue-50 p-4 rounded-lg mb-6 flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-blue-600 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
            <span className="text-sm text-blue-800">Agreement will be sent to below mentioned email IDs for signing.</span>
          </div>

          <h3 className="text-lg font-medium mb-4">Please upload your Business Incorporation Documents</h3>

          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-6">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <input
              type="file"
              id="incorporation-upload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            <label htmlFor="incorporation-upload" className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer">
              Click to upload
            </label>
            <span className="text-gray-600"> or drag and drop</span>
            <p className="text-sm text-gray-500 mt-1">PDF (max. 1 MB)</p>
          </div>

          {incorporationDoc && (
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              <div className="flex-1">
                <div className="font-medium">{incorporationDoc.name}</div>
                <div className="text-sm text-gray-500">{incorporationDoc.size} | {incorporationDoc.status}</div>
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

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Authorised Signatory</h3>
              {getCompletedSignatoriesNames().length > 0 && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Completed:</span>
                  <span className="font-medium text-green-600">
                    {getCompletedSignatoriesNames().join(', ')}
                  </span>
                </div>
              )}
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <div>
                  <span className="text-sm text-gray-600">Authorised Signatory 1</span>
                  <div className="font-medium">{signatory1.name}</div>
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {signatories.map((signatory, index) => {
              const isComplete = isSignatoryComplete(signatory);
              return (
              <div key={index} className="mb-4">
                <div className={`flex items-center justify-between p-4 rounded-lg border ${isComplete ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
                  <span className="font-medium">Authorised Signatory {index + 2}</span>
                  <div className="flex items-center gap-2">
                    {isComplete && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
                <div className={`p-4 border-l border-r border-b rounded-b-lg space-y-4 ${isComplete ? 'border-green-200' : 'border-gray-200'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Authorised Signatory Name</label>
                      <Input
                        value={signatory.name}
                        onChange={(e) => updateSignatory(index, 'name', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Designation</label>
                      <Input
                        value={signatory.designation}
                        onChange={(e) => updateSignatory(index, 'designation', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email ID</label>
                      <Input
                        type="email"
                        value={signatory.email}
                        onChange={(e) => updateSignatory(index, 'email', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Mobile Number</label>
                      <div className="flex">
                        <Select defaultValue="+971">
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+971">+971</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+33">+33</SelectItem>
                            <SelectItem value="+49">+49</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          className="flex-1 ml-2"
                          value={signatory.mobile}
                          onChange={(e) => updateSignatory(index, 'mobile', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

            <button 
              onClick={addSignatory}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
            >
              <Plus className="w-4 h-4" />
              <span>Add Another Authorised Signatory</span>
            </button>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Personal Guarantor</h3>
              {getCompletedGuarantorsNames().length > 0 && (
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Completed:</span>
                  <span className="font-medium text-green-600">
                    {getCompletedGuarantorsNames().join(', ')}
                  </span>
                </div>
              )}
            </div>
            
            {guarantors.map((guarantor, index) => {
              const isComplete = isGuarantorComplete(guarantor);
              const isFirstGuarantor = index === 0;
              
              return (
              <div key={index} className="mb-4">
                <div className={`flex items-center justify-between p-4 rounded-lg border ${(isComplete || isFirstGuarantor) ? 'bg-green-50 border-green-200' : 'border-gray-200'}`}>
                  <span className="font-medium">Personal Guarantor {index + 1}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${(isComplete || isFirstGuarantor) ? 'bg-green-500' : 'bg-gray-300'}`}>
                    <div className={`w-2 h-2 rounded-full ${(isComplete || isFirstGuarantor) ? 'bg-white' : 'bg-gray-600'}`}></div>
                  </div>
                </div>
                <div className={`p-4 border-l border-r border-b rounded-b-lg space-y-4 ${(isComplete || isFirstGuarantor) ? 'border-green-200' : 'border-gray-200'}`}>
                  <div>
                    <label className="block text-sm font-medium mb-1">Personal Guarantor Name</label>
                    <Input
                      value={guarantor.name}
                      onChange={(e) => updateGuarantor(index, 'name', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email ID</label>
                      <Input
                        type="email"
                        value={guarantor.email}
                        onChange={(e) => updateGuarantor(index, 'email', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Mobile Number</label>
                      <div className="flex">
                        <Select defaultValue="+971">
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+971">+971</SelectItem>
                            <SelectItem value="+1">+1</SelectItem>
                            <SelectItem value="+44">+44</SelectItem>
                            <SelectItem value="+91">+91</SelectItem>
                            <SelectItem value="+33">+33</SelectItem>
                            <SelectItem value="+49">+49</SelectItem>
                          </SelectContent>
                        </Select>
                        <Input
                          className="flex-1 ml-2"
                          value={guarantor.mobile}
                          onChange={(e) => updateGuarantor(index, 'mobile', e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}

            <button 
              onClick={addGuarantor}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8"
            >
              <Plus className="w-4 h-4" />
              <span>Add Another Personal Guarantor</span>
            </button>
          </div>

          <Button onClick={onNext} className="bg-blue-600 hover:bg-blue-700">
            Save and Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};
