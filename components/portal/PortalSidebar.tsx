"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Building2,
  Mail,
  Printer,
  PhoneCall,
  ShieldCheck,
  User,
  X,
} from "lucide-react";

export interface PortalNavItem {
  label: string;
  href: string;
  icon: typeof LayoutDashboard;
  badge?: string;
  isSpecialHighlight?: boolean;
}

export const portalNavItems: PortalNavItem[] = [
  { label: "Dashboard", href: "/portal", icon: LayoutDashboard },
  { label: "Subscriptions", href: "/portal/subscriptions", icon: Package, isSpecialHighlight: true },
  { label: "Company Formation", href: "/portal/company-formation", icon: Building2 },
  { label: "Post Retrieval Portal", href: "/portal/post-retrieval", icon: Mail },
  { label: "Print & Post Service", href: "/portal/print-and-post", icon: Printer },
  { label: "Telecoms Portal", href: "/portal/telecoms", icon: PhoneCall },
  { label: "ID Upload", href: "/portal/id-upload", icon: ShieldCheck, badge: "1" },
  { label: "Profile", href: "/portal/profile", icon: User },
];

interface PortalSidebarProps {
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export function PortalSidebar({ mobileOpen = false, onCloseMobile }: PortalSidebarProps) {
  const pathname = usePathname();

  const isRouteActive = (href: string) => {
    if (href === "/portal") {
      return pathname === "/portal";
    }
    return pathname.startsWith(href);
  };

  const navContent = (
    <nav className="flex flex-col gap-2.5 w-full" aria-label="Portal Navigation">
      {portalNavItems.map((item) => {
        const active = isRouteActive(item.href);
        const Icon = item.icon;

        // Custom styling matching the exact reference UI:
        // Active: Solid Deep Navy (#0e3b96) with white text & subtle shadow
        // Subscriptions Inactive: Warm light cream/amber (#fff5cf / #fef3c7) with dark amber/navy text
        // Inactive: Light blue-gray (#e9f1f6) with slate-800 text
        let buttonClass = "";
        if (active) {
          buttonClass = "bg-[#0e3b96] text-white shadow-sm font-bold";
        } else if (item.isSpecialHighlight) {
          buttonClass = "bg-[#fff5cf] text-[#6c5812] hover:bg-[#ffedaa] font-semibold";
        } else {
          buttonClass = "bg-[#e9f1f6] text-[#1c3853] hover:bg-[#dde9f1] hover:text-[#0e3b96] font-semibold";
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onCloseMobile}
            className={`flex items-center justify-between px-4 py-3 rounded-[3px] text-[13.5px] transition-all duration-150 ${buttonClass}`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Icon className={`w-4 h-4 shrink-0 ${active ? "text-white" : "text-current opacity-80"}`} />
              <span className="truncate">{item.label}</span>
            </div>

            {item.badge && !active && (
              <span className="ml-2 px-1.5 py-0.5 text-[11px] font-bold rounded-full bg-[#F07228] text-white leading-none">
                {item.badge}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-[240px] shrink-0">
        <div className="sticky top-24 space-y-4">
          {navContent}
        </div>
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onCloseMobile}
        >
          <div
            className="fixed inset-y-0 left-0 w-72 max-w-[85vw] bg-white p-5 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
                <div className="font-bold text-base text-[#0e3b96]">Client Portal Menu</div>
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="p-1 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {navContent}
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-400">
              © {new Date().getFullYear()} Elite Filing Client Portal
            </div>
          </div>
        </div>
      )}
    </>
  );
}
