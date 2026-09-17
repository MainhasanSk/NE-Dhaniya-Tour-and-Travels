import React from "react";
import { Compass, Users, Car, MapPin, CheckCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export const TrustSection: React.FC = () => {
  const cards = [
    {
      icon: <Compass className="w-6 h-6 text-emerald-600" />,
      title: "Local Northeast Expertise",
      description: "Authentic on-ground travel planning and local support by people who live and breathe Northeast India and Bhutan.",
    },
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Personal & Sharing Tours",
      description: "Choose customized private vehicle comfort for families & couples, or budget-friendly sharing tours for solo explorers.",
    },
    {
      icon: <Car className="w-6 h-6 text-emerald-600" />,
      title: "Complete Travel Solution",
      description: "All-in-one trip coordination: curated tour packages, well-maintained vehicles, verified hotel bookings & permit support.",
    },
    {
      icon: <WhatsAppIcon className="w-6 h-6 text-[#25D366] fill-current" />,
      title: "Easy WhatsApp Booking",
      description: "No complicated booking forms or waiting. Plan, customize, and finalize your complete Northeast tour directly on WhatsApp.",
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
