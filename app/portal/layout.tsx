"use client";

import { useState } from "react";
import { PortalBreadcrumb } from "@/components/portal/PortalBreadcrumb";
import { PortalSidebar } from "@/components/portal/PortalSidebar";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-[calc(100vh-140px)] bg-[#f8fafc] text-[#13283d] flex flex-col">
      {/* Portal Top Breadcrumb Bar */}
      <PortalBreadcrumb onToggleMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Portal Main Body Layout (Sidebar + Active View) */}
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-10 flex-1">
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
          {/* Portal Left Sidebar Navigation */}
          <PortalSidebar
            mobileOpen={mobileMenuOpen}
            onCloseMobile={() => setMobileMenuOpen(false)}
          />

          {/* Active View / Main Content Body */}
          <main className="flex-1 w-full min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
