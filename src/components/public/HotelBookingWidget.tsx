"use client";

import React, { useState } from "react";
import { 
  MapPin, 
  Users, 
  Bed, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  Sparkles
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { createWhatsAppLink, getHotelEnquiryMessage } from "@/lib/whatsapp";
import { submitEnquiry } from "@/lib/firebase/dataBridge";

interface HotelBookingWidgetProps {
  whatsappNumber: string;
}

const destinations = [
  "Shillong & Umiam Lake (Meghalaya)",
  "Cherrapunji / Sohra (Meghalaya)",
  "Dawki & Shnongpdeng (Meghalaya)",
  "Guwahati (Assam)",
  "Kaziranga National Park (Assam)",
  "Majuli River Island (Assam)",
  "Tawang (Arunachal Pradesh)",
  "Dirang & Bomdila (Arunachal Pradesh)",
  "Gangtok & MG Marg (Sikkim)",
  "North Sikkim (Lachen & Lachung)",
  "Pelling (West Sikkim)",
  "Kohima & Dzukou (Nagaland)",
  "Aizawl (Mizoram)",
  "Agartala (Tripura)",
  "Thimphu & Paro (Bhutan)"
];

export const HotelBookingWidget: React.FC<HotelBookingWidgetProps> = ({ whatsappNumber }) => {
  const [destination, setDestination] = useState("Shillong & Umiam Lake (Meghalaya)");
  const [persons, setPersons] = useState("2 Persons");
  const [rooms, setRooms] = useState("1 Room");
  const [date, setDate] = useState("");
  const [nights, setNights] = useState("1-2 Nights");

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date) {
      alert("Please select your tentative check-in date.");
      return;
    }

    try {
      // Log enquiry
      await submitEnquiry({
        name: "Hotel Guest",
        phone: "Via WhatsApp",
        destination,
        travelDate: date,
        travellers: parseInt(persons) || 2,
        travelType: "personal",
        message: `Hotel Request: ${rooms}, ${persons}, ${nights}`,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/hotel-booking"
      });
    } catch (e) {
      console.error(e);
    }

    const message = getHotelEnquiryMessage({
      destination,
      persons,
      rooms,
      checkInDate: `${date} (${nights})`
    });

    const url = createWhatsAppLink(whatsappNumber, message);
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/60 text-slate-800">
      
      {/* Widget Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80">
            Instant Hotel Availability Check
          </span>
          <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 mt-2 font-heading">
            Book Hotels, Resorts & Local Homestays
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Verified clean rooms, verified geysers/heaters & scenic mountain view accommodations.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> 100% Verified
          </span>
          <span className="flex items-center gap-1 text-emerald-700 font-semibold">
            <CheckCircle2 className="w-4 h-4" /> Best Price Promise
          </span>
        </div>
      </div>

      {/* Form Fields: All 4 Mandatory Details */}
      <form onSubmit={handleBookingSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* 1. Destination */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Destination</span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
            >
              {destinations.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* 2. Number of Person */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-emerald-600" />
              <span>Number of Person</span>
            </label>
            <select
              value={persons}
              onChange={(e) => setPersons(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
            >
              <option value="1 Person (Solo)">1 Person (Solo)</option>
              <option value="2 Persons (Couple / Duo)">2 Persons (Couple / Duo)</option>
              <option value="3 Persons">3 Persons</option>
              <option value="4 Persons (Family)">4 Persons (Family)</option>
              <option value="5-7 Persons (Small Group)">5-7 Persons (Small Group)</option>
              <option value="8-12+ Persons (Large Group)">8-12+ Persons (Large Group)</option>
            </select>
          </div>

          {/* 3. Number of Room Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-emerald-600" />
              <span>Rooms Required</span>
            </label>
            <select
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
            >
              <option value="1 Room">1 Room</option>
              <option value="2 Rooms">2 Rooms</option>
              <option value="3 Rooms">3 Rooms</option>
              <option value="4 Rooms">4 Rooms</option>
              <option value="5+ Rooms (Group Tour)">5+ Rooms (Group Tour)</option>
            </select>
          </div>

          {/* 4. Travel Date */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-600" />
              <span>Check-in Date</span>
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
            />
          </div>

        </div>

        {/* Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">Stay Duration:</span>
            <div className="inline-flex gap-1.5">
              {["1 Night", "2 Nights", "3 Nights", "4+ Nights"].map((dur) => (
                <button
                  key={dur}
                  type="button"
                  onClick={() => setNights(dur)}
                  className={`px-2.5 py-1 rounded-lg text-xs transition-colors ${
                    nights === dur
                      ? "bg-forest-800 text-white font-semibold"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {dur}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
            <span>Check Hotel Rates on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </form>

    </div>
  );
};
