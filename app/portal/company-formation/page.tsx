"use client";

import Link from "next/link";
import { Plus, ArrowRight, Building2 } from "lucide-react";

export default function PortalCompanyFormationPage() {
  return (
    <div className="w-full space-y-6">
      {/* Top Banner (Exact match to frame_370.00s.jpg) */}
      <div className="w-full bg-[#1145AC] text-white py-3 px-6 rounded-[2px] shadow-xs text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-semibold text-base sm:text-lg hover:underline cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Purchase Additional Company Formation</span>
        </Link>
      </div>

      {/* Main Card (Exact match to frame_370.00s.jpg) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-8 sm:p-12 shadow-xs text-center">
        <div className="max-w-md mx-auto flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-blue-50 text-[#1145AC] flex items-center justify-center mb-4">
            <Building2 className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#142d45] mb-4">
            Company Formation
          </h2>

          <p className="text-sm font-medium text-[#1c3853] mb-6">
            No Record Found
          </p>

          <p className="text-xs text-slate-500 mb-8 max-w-sm">
            Once you initiate a company formation with Elite Filing, your incorporation filings, certificate of incorporation, and Companies House records will be tracked here in real time.
          </p>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0e3b96] hover:bg-[#1145AC] text-white font-bold text-sm rounded shadow-sm transition-all transform hover:scale-[1.02] cursor-pointer"
          >
            <span>Start a Formation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
