"use client";

import { useState } from "react";
import { Printer, UploadCloud } from "lucide-react";
import { toast } from "sonner";

export default function PortalPrintAndPostPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [deliveryType, setDeliveryType] = useState<"standard" | "signed">("standard");

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
    toast.success("Print and Post order submitted! Our team will process your dispatch.");
  };

  return (
    <div className="w-full space-y-6">
      {/* Main Card (Exact Blueprint frame_445.00s.jpg) */}
      <div className="bg-white border border-[#e5ebef] rounded-[3px] p-6 sm:p-10 shadow-xs max-w-3xl">
        <h1 className="text-xl sm:text-2xl font-bold text-[#142d45] text-center mb-6">
          Print and Post Service
        </h1>

        <div className="space-y-4 text-xs sm:text-sm text-[#1e3447] leading-relaxed">
          <p className="font-semibold text-slate-800">
            Do you have a document that needs to be posted to an address in the UK?
          </p>

          <p>
            If you live overseas and need a document delivered to an address in the UK quickly and easily, then this service is suitable for you as we can post your item for you on your behalf.
          </p>

          <p>
            In order to use this service you need to have a standard, advanced or premium package with us and the document must be in your possession as you will need to upload it to our portal so that we can print and post it on your behalf.
          </p>

          <div className="pt-2">
            <p className="font-bold text-[#142d45] mb-1.5">Our charges are as follows:</p>
            <ul className="list-none space-y-1 font-semibold text-[#1145AC]">
              <li>£3.99 - Standard Delivery</li>
              <li>£5.99 - Signed Delivery with Tracking.</li>
            </ul>
          </div>

          <p className="text-[12px] text-slate-600">
            The charges above apply to documents that weigh 100 grams or less after they have been printed and packaged. After we have printed and packaged your item, if your item weighs more than 100 grams additional fees may apply. To give you a rough idea, a document that is 8 x A4 pages in size usually weighs around 99 grams. If you would like your documents posted using a &quot;Do Not Bend&quot; envelope then additional fees will also apply.
          </p>
        </div>

        {/* Continue Button (Exact Blueprint) */}
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="w-full py-3 bg-[#1145AC] hover:bg-[#0e3b96] text-white font-bold text-sm sm:text-base rounded transition-colors shadow-xs cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Interactive Modal when clicking Continue */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 border border-slate-200">
            <div className="flex items-center gap-2 text-[#1145AC] font-bold text-lg mb-4">
              <Printer className="w-5 h-5" />
              <span>Create Print & Post Dispatch</span>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Upload PDF Document</label>
                <div className="border-2 border-dashed border-slate-300 rounded p-4 text-center hover:bg-slate-50 cursor-pointer">
                  <UploadCloud className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                  <span className="text-xs text-slate-600 font-medium">Click or drag file here (Max 100g / 8 pages)</span>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">UK Delivery Option</label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 p-2.5 rounded border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryType === "standard"}
                      onChange={() => setDeliveryType("standard")}
                    />
                    <div className="flex-1 text-xs">
                      <span className="font-bold">Standard UK Delivery</span> - £3.99
                    </div>
                  </label>

                  <label className="flex items-center gap-2 p-2.5 rounded border border-slate-200 cursor-pointer hover:bg-slate-50">
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryType === "signed"}
                      onChange={() => setDeliveryType("signed")}
                    />
                    <div className="flex-1 text-xs">
                      <span className="font-bold">Royal Mail Signed With Tracking</span> - £5.99
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">UK Recipient Address</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Recipient Name, Street, Town, Postcode"
                  className="w-full border border-slate-300 rounded p-2 text-xs focus:ring-2 focus:ring-[#1145AC] outline-hidden"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#1145AC] hover:bg-[#0e3b96] rounded shadow-xs"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
