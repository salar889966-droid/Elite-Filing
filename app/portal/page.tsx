"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Users,
  ArrowRight,
  Package,
  Building2,
  ShieldCheck,
  Mail,
  Check,
  Copy,
  Clock,
  Sparkles,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function PortalDashboardPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyReferral = () => {
    navigator.clipboard.writeText("https://elite-filing.com/referral?ref=JORDAN-DAVIS-7492");
    setCopied(true);
    toast.success("Referral link copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* ── Main Hero Referral Banner (Exact match to blueprint) ── */}
      <div className="w-full rounded-md overflow-hidden shadow-sm bg-gradient-to-r from-[#0c3e74] via-[#1145AC] to-[#0e3b96] text-white p-8 sm:p-10 text-center relative">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
            Refer a friend and earn
          </h2>

          {/* Illustrated avatars circle cluster */}
          <div className="flex items-center justify-center -space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-200 text-blue-900 flex items-center justify-center font-bold text-sm shadow-md">
              JD
            </div>
            <div className="w-13 h-13 rounded-full border-2 border-white bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-base shadow-md z-10">
              <Users className="w-6 h-6 text-amber-800" />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-sm shadow-md">
              NU
            </div>
          </div>

          {/* Reward headline with bright golden emphasis */}
          <div className="text-xl sm:text-2xl font-semibold text-blue-50 mb-4">
            Up to <span className="text-[#ffd45e] font-extrabold text-3xl sm:text-4xl mx-1.5 drop-shadow-xs">£5.00</span> per referral
          </div>

          {/* Benefit capsule */}
          <div className="w-full max-w-lg bg-white/10 border border-white/20 rounded-md py-2.5 px-4 text-xs sm:text-sm text-blue-100 font-medium mb-6 backdrop-blur-xs">
            Plus your friends gets 10% off their first subscription payment to us.
          </div>

          {/* Get Started CTA button */}
          <button
            type="button"
            onClick={handleCopyReferral}
            className="inline-flex items-center gap-2 bg-[#ffd45e] hover:bg-[#ffe184] text-[#0e3b96] font-bold text-sm sm:text-base px-8 py-3 rounded-md transition-all transform hover:scale-[1.02] active:scale-[0.99] shadow-md cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-blue-200/80 mt-4">
            Terms & Conditions Apply. Click on &quot;Get Started&quot; for more information.
          </p>
        </div>
      </div>

      {/* ── Overview Statistics Cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/portal/subscriptions"
          className="bg-white border border-[#e5ebef] hover:border-[#1145AC] rounded-md p-5 transition-all hover:shadow-md group block"
        >
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Active Services</span>
            <div className="w-8 h-8 rounded-md bg-blue-50 text-[#1145AC] flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#18344c] group-hover:text-[#1145AC] transition-colors">
            3
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>1 renews soon (Virtual Office)</span>
          </div>
        </Link>

        <Link
          href="/portal/company-formation"
          className="bg-white border border-[#e5ebef] hover:border-[#1145AC] rounded-md p-5 transition-all hover:shadow-md group block"
        >
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">Company Progress</span>
            <div className="w-8 h-8 rounded-md bg-teal-50 text-teal-700 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-[#18344c] group-hover:text-[#1145AC] transition-colors">
            84%
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>Application submitted to Companies House</span>
          </div>
        </Link>

        <Link
          href="/portal/id-upload"
          className="bg-white border border-[#e5ebef] hover:border-[#1145AC] rounded-md p-5 transition-all hover:shadow-md group block"
        >
          <div className="flex items-center justify-between text-slate-500 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider">ID Verification</span>
            <div className="w-8 h-8 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-bold text-emerald-600">
            Complete
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Authorised Handler verified</span>
          </div>
        </Link>
      </div>

      {/* ── Lower 2-Column Grid (Shortcuts & Activity) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Shortcuts */}
        <div className="bg-white border border-[#e5ebef] rounded-md p-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">SHORTCUTS</span>
              <h3 className="text-base font-bold text-[#15324d]">What would you like to do?</h3>
            </div>
            <HelpCircle className="w-4 h-4 text-slate-400" />
          </div>

          <div className="space-y-2.5">
            <Link
              href="/services"
              className="flex items-center justify-between p-3 rounded-md bg-[#f8fafc] hover:bg-blue-50/60 border border-[#edf2f7] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-blue-100 text-[#1145AC] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#15324d] group-hover:text-[#1145AC]">Add a service</div>
                  <div className="text-[11px] text-slate-500">Explore business formations & filing</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1145AC] transition-colors" />
            </Link>

            <Link
              href="/portal/id-upload"
              className="flex items-center justify-between p-3 rounded-md bg-[#f8fafc] hover:bg-blue-50/60 border border-[#edf2f7] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-amber-100 text-[#F07228] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#15324d] group-hover:text-[#1145AC]">Upload ID</div>
                  <div className="text-[11px] text-slate-500">Manage identity documents</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1145AC] transition-colors" />
            </Link>

            <Link
              href="/portal/post-retrieval"
              className="flex items-center justify-between p-3 rounded-md bg-[#f8fafc] hover:bg-blue-50/60 border border-[#edf2f7] transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#15324d] group-hover:text-[#1145AC]">Check your post</div>
                  <div className="text-[11px] text-slate-500">View received mail and scans</div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#1145AC] transition-colors" />
            </Link>
          </div>
        </div>

        {/* Latest Updates */}
        <div className="bg-white border border-[#e5ebef] rounded-md p-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">LATEST UPDATES</span>
              <h3 className="text-base font-bold text-[#15324d]">Recent account activity</h3>
            </div>
            <Clock className="w-4 h-4 text-slate-400" />
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 text-xs pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#15324d]">Confirmation statement filed</div>
                <div className="text-slate-500 text-[11px]">Operant Labs International</div>
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">2 hrs ago</span>
            </div>

            <div className="flex items-start gap-3 text-xs pb-3 border-b border-slate-100">
              <div className="w-7 h-7 rounded-full bg-blue-100 text-[#1145AC] flex items-center justify-center shrink-0 mt-0.5">
                <Package className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#15324d]">Virtual Office renewed</div>
                <div className="text-slate-500 text-[11px]">Standard package · £38.87 / quarter</div>
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">Yesterday</span>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-[#15324d]">Identity document approved</div>
                <div className="text-slate-500 text-[11px]">Director verification complete</div>
              </div>
              <span className="text-[10px] text-slate-400 whitespace-nowrap">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
