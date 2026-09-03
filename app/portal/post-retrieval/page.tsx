"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail, FileText, Download, Eye, Send } from "lucide-react";
import { toast } from "sonner";

interface PostItem {
  id: string;
  dateReceived: string;
  sender: string;
  type: string;
  scanned: boolean;
  pages: number;
}

const mockPostItems: PostItem[] = [
  {
    id: "post-1",
    dateReceived: "02 Sep 2026",
    sender: "HM Revenue & Customs (HMRC)",
    type: "Tax Notice / Statutory Mail",
    scanned: true,
    pages: 2,
  },
  {
    id: "post-2",
    dateReceived: "28 Aug 2026",
    sender: "Companies House",
    type: "Authentication Code Confirmation",
    scanned: true,
    pages: 1,
  },
  {
    id: "post-3",
    dateReceived: "24 Aug 2026",
    sender: "Barclays Business Banking",
    type: "Business Debit Card PIN Notification",
    scanned: true,
    pages: 1,
  },
];

export default function PortalPostRetrievalPage() {
  const [items] = useState<PostItem[]>(mockPostItems);

  const handleAction = (type: string, id: string) => {
    if (type === "download") {
      toast.success(`Downloading PDF scan for item ${id}...`);
    } else if (type === "forward") {
      toast.info(`Physical mail forwarding requested for item ${id}. Our team will dispatch via Royal Mail.`);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Card (Exact Blueprint frame_410.00s.jpg) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-10 shadow-xs">
        {/* Notice Headings */}
        <div className="space-y-1 mb-6">
          <h1 className="text-lg sm:text-xl font-extrabold text-[#15324d] leading-snug">
            You will be notified via email everytime that you receive post.
          </h1>
          <h2 className="text-lg sm:text-xl font-extrabold text-[#15324d] leading-snug">
            Details will appear below. All post items can be held for a maximum of 14 days from the date that they are received.
          </h2>
        </div>

        {/* Separator */}
        <div className="border-t border-[#8c959a] my-6" />

        {/* Scroll helper */}
        <p className="text-xs text-[#243b4b] font-medium mb-4">
          Tap and scroll right on the below table for full view
        </p>

        {/* Post Items Table */}
        <div className="overflow-x-auto border border-[#e2e8f0] rounded mb-8">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[#1c3853] font-bold">
                <th className="p-3.5 whitespace-nowrap">Date Received</th>
                <th className="p-3.5 whitespace-nowrap">Sender</th>
                <th className="p-3.5 whitespace-nowrap">Document Type</th>
                <th className="p-3.5 whitespace-nowrap">Digital Scan</th>
                <th className="p-3.5 whitespace-nowrap text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf2f7]">
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50/40 transition-colors">
                  <td className="p-3.5 text-slate-600 whitespace-nowrap font-medium">
                    {item.dateReceived}
                  </td>
                  <td className="p-3.5 text-[#15324d] font-bold whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#1145AC]" />
                      <span>{item.sender}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-slate-600 whitespace-nowrap">
                    {item.type}
                  </td>
                  <td className="p-3.5 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <FileText className="w-3 h-3" />
                      <span>Scanned ({item.pages} {item.pages > 1 ? "pages" : "page"})</span>
                    </span>
                  </td>
                  <td className="p-3.5 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleAction("download", item.id)}
                        className="p-1.5 text-[#1145AC] hover:bg-blue-50 rounded transition-colors"
                        title="View / Download Scan"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleAction("forward", item.id)}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-[#0e3b96] hover:bg-[#1145AC] text-white text-[11px] font-bold rounded transition-colors"
                      >
                        <Send className="w-3 h-3" />
                        <span>Forward</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Back Button (Exact Blueprint match) */}
        <div>
          <Link
            href="/portal"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1145AC] hover:bg-[#0e3b96] text-white font-bold text-sm rounded shadow-xs transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
