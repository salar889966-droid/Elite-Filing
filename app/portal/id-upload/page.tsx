"use client";

import { useState } from "react";
import { Check, UploadCloud, ShieldCheck, FileCheck2 } from "lucide-react";
import { toast } from "sonner";

interface Handler {
  id: string;
  name: string;
  role: string;
  status: "complete" | "pending" | "action_required";
  documents: string[];
}

export default function PortalIdUploadPage() {
  const [handlers] = useState<Handler[]>([
    {
      id: "handler-1",
      name: "",
      role: "Authorised Account Handler",
      status: "complete",
      documents: ["Passport (Verified)", "Proof of Residential Address (Verified)"],
    },
  ]);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [docType, setDocType] = useState("passport");

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploadModalOpen(false);
    toast.success("Document uploaded successfully! Our compliance team is reviewing it.");
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Card (Exact match to blueprint frame_465.00s.jpg & frame_510.00s.jpg) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-10 shadow-xs max-w-3xl">
        {/* Notice Heading */}
        <h1 className="text-lg sm:text-xl font-extrabold text-[#15324d] text-center mb-6">
          Below is a list of people for whom ID documents are needed
        </h1>

        {/* Separator line */}
        <div className="border-t border-[#8c959a] my-6" />

        {/* Section Subtitle */}
        <h2 className="text-lg font-bold text-[#197fbb] text-center mb-5">
          Authorised Account Handler
        </h2>

        {/* Handler Row (Exact Blueprint) */}
        <div className="space-y-3">
          {handlers.map((h) => (
            <div
              key={h.id}
              className="w-full bg-[#eaf2f6] border border-[#d6e1e7] rounded-[2px] p-3.5 sm:p-4 flex items-center justify-between text-left"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1145AC] shrink-0" />
                <span className="font-bold text-[#1c354a] text-sm sm:text-base">
                  {h.name}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2a8b37]">
                <Check className="w-4 h-4" />
                <span>ID Complete</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified details note */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FileCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Anti-Money Laundering (AML) & KYC identity check status: Verified with UK Companies House.</span>
          </div>

          <button
            type="button"
            onClick={() => setUploadModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1145AC] hover:bg-[#0e3b96] text-white text-xs font-bold rounded transition-colors whitespace-nowrap shadow-xs cursor-pointer"
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Upload Additional ID</span>
          </button>
        </div>
      </div>

      {/* Upload Additional Modal */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 border border-slate-200">
            <div className="flex items-center gap-2 text-[#1145AC] font-bold text-lg mb-4">
              <UploadCloud className="w-5 h-5" />
              <span>Submit Verification Document</span>
            </div>

            <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Document Category</label>
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  className="w-full border border-slate-300 rounded p-2 text-xs focus:ring-2 focus:ring-[#1145AC] outline-hidden bg-white"
                >
                  <option value="passport">International Passport</option>
                  <option value="national_id">National Identity Card (Both Sides)</option>
                  <option value="drivers_license">Driving License</option>
                  <option value="proof_of_address">Proof of Address (Utility Bill / Bank Statement)</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">File Attachment (PDF, JPG, PNG)</label>
                <div className="border-2 border-dashed border-slate-300 rounded p-6 text-center hover:bg-slate-50 cursor-pointer">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                  <span className="block text-xs font-semibold text-slate-700">Click to browse or drag file here</span>
                  <span className="block text-[10px] text-slate-400 mt-1">High resolution, clear edges, max 10MB</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setUploadModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#1145AC] hover:bg-[#0e3b96] rounded shadow-xs"
                >
                  Upload & Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
