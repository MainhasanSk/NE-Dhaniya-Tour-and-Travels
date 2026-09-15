"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Users, 
  Calendar, 
  Car, 
  MessageCircle, 
  ArrowRight 
} from "lucide-react";
import { createWhatsAppLink, getTripSearchMessage } from "@/lib/whatsapp";

interface TripSearchWidgetProps {
  whatsappNumber: string;
}

export const TripSearchWidget: React.FC<TripSearchWidgetProps> = ({ whatsappNumber }) => {
  const [destination, setDestination] = useState("Meghalaya");
  const [travelType, setTravelType] = useState<"personal" | "sharing">("personal");
  const [travellers, setTravellers] = useState("2-4 Travellers");
  const [travelDate, setTravelDate] = useState("");

  const handleGetQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = getTripSearchMessage({
      destination,
      travelType,
      travellers,
      travelDate: travelDate || "Flexible dates / Coming soon",
    });

    const url = createWhatsAppLink(whatsappNumber, message);
    window.open(url, "_blank");
  };

  const destinationsList = [
    "Meghalaya (Shillong, Cherrapunji, Dawki)",
    "Assam (Kaziranga, Kamakhya, Majuli)",
    "Arunachal Pradesh (Tawang, Sela Pass, Ziro)",
    "Sikkim (Gangtok, North Sikkim, Yumthang)",
    "Nagaland (Dzukou Valley, Hornbill)",
    "Bhutan (Thimphu, Paro Tiger's Nest)",
    "Mizoram (Aizawl, Reiek Peak)",
    "Tripura (Unakoti, Neermahal Palace)",
    "Multi-State Northeast Tour"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 sm:p-6 border border-white/40 text-slate-800">
      
      {/* Travel Mode Toggle Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            Instant Trip Planner
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
            Where do you want to explore?
          </h3>
        </div>

        {/* Travel Mode Toggle */}
        <div className="inline-flex bg-slate-100 p-1 rounded-xl text-xs font-semibold">
          <button
            type="button"
            onClick={() => setTravelType("personal")}
            className={`px-4 py-1.5 rounded-lg transition-all ${
              travelType === "personal"
                ? "bg-forest-800 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            🚗 Personal / Private Tour
          </button>
          <button
            type="button"
            onClick={() => setTravelType("sharing")}
            className={`px-4 py-1.5 rounded-lg transition-all ${
              travelType === "sharing"
                ? "bg-forest-800 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            👥 Sharing Tour
          </button>
        </div>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleGetQuote} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        
        {/* Destination */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Destination</span>
          </label>
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {destinationsList.map((d, idx) => (
              <option key={idx} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Travellers */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Number of Travellers</span>
          </label>
          <select
            value={travellers}
            onChange={(e) => setTravellers(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="Solo Traveller (1 Person)">Solo Traveller (1 Person)</option>
            <option value="Couple / 2 Persons">Couple / 2 Persons</option>
            <option value="Small Family (3-4 Persons)">Small Family (3-4 Persons)</option>
            <option value="Medium Group (5-7 Persons)">Medium Group (5-7 Persons)</option>
            <option value="Large Group (8-15+ Persons)">Large Group (8-15+ Persons)</option>
          </select>
        </div>

        {/* Travel Date */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Tentative Date</span>
          </label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Get Quote on WhatsApp</span>
          </button>
        </div>

      </form>

      {/* Trust micro-text */}
      <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-700">
            ✓ Customized Itinerary
          </span>
          <span className="flex items-center gap-1 text-emerald-700">
            ✓ Clean Mountain Cabs
          </span>
          <span className="flex items-center gap-1 text-emerald-700">
            ✓ Zero Hidden Charges
          </span>
        </div>
        <span className="text-slate-400">
          Replies within 10-15 minutes on WhatsApp
        </span>
      </div>

    </div>
  );
};
