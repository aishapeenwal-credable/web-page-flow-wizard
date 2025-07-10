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

export const AuthorizedSignatory = ({ onNext, onPrev }: AuthorizedSignatoryProps) => {
  const [incorporationDoc, setIncorporationDoc] = useState({
    name: "Business name-partnership agreement.pdf",
    size: "765 KB",
    status: "100% uploaded"
  });

  const [signatory1] = useState({
    name: "Jane Cooper",
    completed: true
  });

  const [signatory2, setSignatory2] = useState({
    name: "",
    designation: "",
    email: "",
    mobile: ""
  });

  const [guarantor1, setGuarantor1] = useState({
    name: "Jane Cooper",
    email: "jane.cooper@idealbrothers.ae",
    mobile: "773 947 253"
  });

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
            <button className="text-blue-600 hover:text-blue-700 font-medium">Click to upload</button>
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
              <Button variant="ghost" size="sm">
                <Trash2 className="w-4 h-4 text-red-500" />
              </Button>
            </div>
          )}

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Authorised Signatory</h3>
            
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

            <div className="mb-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <span className="font-medium">Authorised Signatory 2</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="p-4 border-l border-r border-b border-gray-200 rounded-b-lg space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Authorised Signatory Name</label>
                    <Input
                      value={signatory2.name}
                      onChange={(e) => setSignatory2({...signatory2, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Designation</label>
                    <Input
                      value={signatory2.designation}
                      onChange={(e) => setSignatory2({...signatory2, designation: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email ID</label>
                    <Input
                      type="email"
                      value={signatory2.email}
                      onChange={(e) => setSignatory2({...signatory2, email: e.target.value})}
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
                        </SelectContent>
                      </Select>
                      <Input
                        className="flex-1 ml-2"
                        value={signatory2.mobile}
                        onChange={(e) => setSignatory2({...signatory2, mobile: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
              <Plus className="w-4 h-4" />
              <span>Add Another Authorised Signatory</span>
            </button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Personal Guarantor</h3>
            
            <div className="mb-4">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                <span className="font-medium">Personal Guarantor 1</span>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="p-4 border-l border-r border-b border-green-200 rounded-b-lg space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Personal Guarantor Name</label>
                  <Input
                    value={guarantor1.name}
                    onChange={(e) => setGuarantor1({...guarantor1, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email ID</label>
                    <Input
                      type="email"
                      value={guarantor1.email}
                      onChange={(e) => setGuarantor1({...guarantor1, email: e.target.value})}
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
                        </SelectContent>
                      </Select>
                      <Input
                        className="flex-1 ml-2"
                        value={guarantor1.mobile}
                        onChange={(e) => setGuarantor1({...guarantor1, mobile: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium mb-8">
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
