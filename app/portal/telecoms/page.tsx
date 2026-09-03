"use client";

import { useState } from "react";
import { PhoneCall, Plus, CheckCircle, ShieldCheck, ArrowRight, Voicemail } from "lucide-react";
import { toast } from "sonner";

export default function PortalTelecomsPage() {
  const [activeNumber] = useState("+44 20 7946 0992");

  return (
    <div className="w-full space-y-6">
      {/* Top Banner */}
      <div className="w-full bg-[#1145AC] text-white py-3 px-6 rounded-[2px] shadow-xs text-center">
        <button
          type="button"
          onClick={() => toast.info("Opening business telephone options...")}
          className="inline-flex items-center gap-2 font-semibold text-base sm:text-lg hover:underline cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add A Virtual Telephone Number</span>
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-10 shadow-xs max-w-3xl">
        <h1 className="text-xl sm:text-2xl font-bold text-[#142d45] text-center mb-6">
          Telecoms & Virtual Numbers
        </h1>

        <div className="border border-[#e2e8f0] rounded p-5 bg-[#f8fafc] mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-bold text-base text-[#15324d]">
                <PhoneCall className="w-5 h-5 text-[#1145AC]" />
                <span>London 020 Dedicated Business Landline</span>
              </div>
              <div className="text-xs text-slate-500 mt-1 font-mono">
                {activeNumber}
              </div>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Active Routing</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 pt-4 border-t border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 font-semibold block text-[11px] uppercase">Routing Destination</span>
              <span className="font-bold text-slate-800">Mobile (+92 310 0004256)</span>
            </div>
            <div>
              <span className="text-slate-400 font-semibold block text-[11px] uppercase">Voicemail to Email</span>
              <span className="font-bold text-slate-800">Enabled (salar889966@gmail.com)</span>
            </div>
          </div>
        </div>

        <div className="text-xs text-slate-600 leading-relaxed space-y-3 mb-6">
          <p>
            Your virtual telephone number forwards all customer calls directly to your chosen destination number or voicemail without disclosing your personal details.
          </p>
          <p>
            International call forwarding rates apply outside the UK. You can adjust your routing rules or order additional 0800 toll-free or US VoIP numbers at any time.
          </p>
        </div>

        <button
          type="button"
          onClick={() => toast.success("Routing preferences saved!")}
          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1145AC] hover:bg-[#0e3b96] text-white font-bold text-xs sm:text-sm rounded transition-colors shadow-xs cursor-pointer"
        >
          <span>Configure Call Forwarding</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
