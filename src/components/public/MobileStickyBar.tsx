"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, Package, MessageCircle } from "lucide-react";
import { createWhatsAppLink, getGeneralEnquiryMessage } from "@/lib/whatsapp";

interface MobileStickyBarProps {
  whatsappNumber: string;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ whatsappNumber }) => {
  const pathname = usePathname();
  const whatsappUrl = createWhatsAppLink(whatsappNumber, getGeneralEnquiryMessage());

  // Hide on admin routes
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-4 items-center text-center">
        
        {/* Home */}
        <Link 
          href="/" 
          className={`flex flex-col items-center py-1 transition-colors ${
            pathname === "/" ? "text-forest-700 font-semibold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Home</span>
        </Link>

        {/* Destinations */}
        <Link 
          href="/destinations" 
          className={`flex flex-col items-center py-1 transition-colors ${
            pathname.startsWith("/destinations") ? "text-forest-700 font-semibold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Destinations</span>
        </Link>

        {/* Packages */}
        <Link 
          href="/tour-packages" 
          className={`flex flex-col items-center py-1 transition-colors ${
            pathname.startsWith("/tour-packages") ? "text-forest-700 font-semibold" : "text-slate-500 hover:text-slate-800"
          }`}
        >
          <Package className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">Packages</span>
        </Link>

        {/* WhatsApp Quick CTA */}
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center py-1 text-emerald-600 font-bold"
        >
          <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>
          <span className="text-[10px] mt-0.5">WhatsApp</span>
        </a>

      </div>
    </div>
  );
};
