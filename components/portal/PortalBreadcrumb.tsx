"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

interface RouteInfo {
  title: string;
}

const routeMap: Record<string, RouteInfo> = {
  "/portal": { title: "Dashboard" },
  "/portal/subscriptions": { title: "Subscriptions" },
  "/portal/company-formation": { title: "Company Formation" },
  "/portal/post-retrieval": { title: "Post Portal" },
  "/portal/print-and-post": { title: "Print & Post Service" },
  "/portal/telecoms": { title: "Telecoms Portal" },
  "/portal/id-upload": { title: "Id Upload" },
  "/portal/profile": { title: "Customer Profile" },
};

export function PortalBreadcrumb({ onToggleMobileMenu }: { onToggleMobileMenu?: () => void }) {
  const pathname = usePathname();
  const currentRoute = routeMap[pathname] || { title: "Portal" };

  const handleLogout = () => {
    toast.success("You have been signed out successfully");
  };

  return (
    <div className="w-full bg-white border-b border-[#e7edf1] shadow-xs">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-12 flex items-center justify-between gap-4">
        {/* Breadcrumb Left */}
        <div className="flex items-center gap-2 text-[13px] sm:text-[14px]">
          {onToggleMobileMenu && (
            <button
              onClick={onToggleMobileMenu}
              type="button"
              className="lg:hidden mr-1 p-1.5 rounded-md text-[#15324d] hover:bg-[#eef4f8] transition-colors"
              aria-label="Toggle portal menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          <Link
            href="/"
            className="font-medium text-[#1145AC] hover:text-[#0e3b96] transition-colors"
          >
            Home
          </Link>
          <span className="text-[#8e9da9] font-bold text-xs tracking-wider select-none">&gt;&gt;</span>
          <span className="font-semibold text-[#1a2d3e]">
            {currentRoute.title}
          </span>
        </div>

        {/* Right side: Security indicator & Logout */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-medium">Secure Portal Session</span>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-[13px] sm:text-[14px] font-medium text-[#1145AC] hover:text-[#F07228] transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
