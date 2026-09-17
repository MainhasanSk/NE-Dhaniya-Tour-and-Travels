"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { createWhatsAppLink, getGeneralEnquiryMessage } from "@/lib/whatsapp";

interface FloatingWhatsAppProps {
  whatsappNumber: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ whatsappNumber }) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const whatsappUrl = createWhatsAppLink(whatsappNumber, getGeneralEnquiryMessage());

  return (
    <div className="fixed bottom-20 sm:bottom-8 right-4 sm:right-8 z-40 flex flex-col items-end">
      {/* Pop-up Badge */}
      {!tooltipDismissed && (
        <div className="mb-2 bg-white text-slate-800 text-xs font-medium py-2 px-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2 max-w-[220px] animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <span>Need help planning your Northeast trip? Chat with us!</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setTooltipDismissed(true);
            }} 
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with NE Dhaniya Tours on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 whatsapp-pulse group"
      >
        <WhatsAppIcon className="w-8 h-8 fill-current group-hover:rotate-12 transition-transform duration-300" />
      </a>
    </div>
  );
};
