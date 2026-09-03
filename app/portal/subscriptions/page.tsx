"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  Plus,
  ArrowRight,
  ExternalLink,
  Calendar,
  ShieldAlert,
} from "lucide-react";
import { toast } from "sonner";

export default function PortalSubscriptionsPage() {
  const [officeAccordionOpen, setOfficeAccordionOpen] = useState(true);

  return (
    <div className="w-full space-y-6">
      {/* Top Banner (Exact Blueprint) */}
      <div className="w-full bg-[#1145AC] text-white py-3 px-6 rounded-[2px] shadow-xs text-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 font-semibold text-base sm:text-lg hover:underline cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add A New Subscription</span>
        </Link>
      </div>

      {/* Card 1: Virtual Offices (Exact Blueprint) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[#142d45] text-center mb-6">
          Virtual Offices
        </h2>

        {/* Collapsible Accordion Bar */}
        <div className="border border-[#d7e2e8] rounded-[2px] overflow-hidden">
          <button
            type="button"
            onClick={() => setOfficeAccordionOpen((prev) => !prev)}
            className="w-full bg-[#0e3b96] hover:bg-[#0b2d48] text-white px-5 py-3.5 flex items-center justify-between text-left font-bold text-sm sm:text-base transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Briefcase className="w-4 h-4 text-blue-200" />
              <span>Operant Labs International</span>
            </div>
            {officeAccordionOpen ? (
              <ChevronUp className="w-5 h-5 text-blue-200" />
            ) : (
              <ChevronDown className="w-5 h-5 text-blue-200" />
            )}
          </button>

          {officeAccordionOpen && (
            <div className="bg-[#f8fafc] border-t border-[#e2e8f0] p-5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="block text-slate-400 font-medium text-[11px] uppercase tracking-wider mb-1">
                    Service Plan
                  </span>
                  <span className="font-bold text-[#173b58]">Virtual Office Standard</span>
                </div>

                <div>
                  <span className="block text-slate-400 font-medium text-[11px] uppercase tracking-wider mb-1">
                    Renewal Date
                  </span>
                  <div className="flex items-center gap-1.5 font-bold text-[#173b58]">
                    <Calendar className="w-3.5 h-3.5 text-[#1145AC]" />
                    <span>24 September 2026</span>
                  </div>
                </div>

                <div className="flex items-center sm:justify-end gap-2 pt-2 sm:pt-0">
                  <button
                    type="button"
                    onClick={() => toast.info("Subscription management details opened")}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#1145AC] hover:text-white bg-blue-50 hover:bg-[#1145AC] border border-blue-200 rounded transition-colors"
                  >
                    <span>View Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Mail forwarding and registered address active for 71-75 Shelton Street, Covent Garden, London.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card 2: Shared Offices Booking (Exact Blueprint) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-8 shadow-xs">
        <h2 className="text-xl sm:text-2xl font-bold text-[#142d45] text-center mb-6">
          Shared Offices Booking
        </h2>

        <div className="text-left">
          <p className="text-sm font-medium text-[#1c3853] mb-5">
            No Record Found
          </p>

          <button
            type="button"
            onClick={() => toast.success("Opening booking calendar...")}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#e6f2f8] hover:bg-[#d8eaf4] text-[#1145AC] font-bold text-xs sm:text-sm rounded border border-[#cfe3ee] transition-colors cursor-pointer"
          >
            <span>Book a shared office</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
