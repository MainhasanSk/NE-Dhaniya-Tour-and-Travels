"use client";

import React, { useState } from "react";
import { 
  X, 
  Building2, 
  Users, 
  Bed, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { createWhatsAppLink, getHotelEnquiryMessage } from "@/lib/whatsapp";
import { submitEnquiry } from "@/lib/firebase/dataBridge";

interface HotelBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  defaultDestination?: string;
  defaultCategory?: string;
}

const popularHotelDestinations = [
  "Shillong & Umiam Lake (Meghalaya)",
  "Cherrapunji / Sohra (Meghalaya)",
  "Dawki & Shnongpdeng River Camps (Meghalaya)",
  "Guwahati (Assam)",
  "Kaziranga National Park (Assam)",
  "Majuli Island (Assam)",
  "Tawang (Arunachal Pradesh)",
  "Dirang & Bomdila (Arunachal Pradesh)",
  "Gangtok (Sikkim)",
  "Pelling & West Sikkim",
  "Lachung & Lachen (North Sikkim)",
  "Kohima (Nagaland)",
  "Aizawl (Mizoram)",
  "Agartala (Tripura)",
  "Thimphu & Paro (Bhutan)"
];

export const HotelBookingModal: React.FC<HotelBookingModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber,
  defaultDestination = "Shillong & Umiam Lake (Meghalaya)",
  defaultCategory = "Any Verified Clean Stay"
}) => {
  const [destination, setDestination] = useState(defaultDestination);
  const [persons, setPersons] = useState("2 Persons");
  const [rooms, setRooms] = useState("1 Room");
  const [date, setDate] = useState("");
  const [nights, setNights] = useState("1-2 Nights");
  const [stayType, setStayType] = useState(defaultCategory);
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!destination) {
      alert("Please select or enter your destination.");
      return;
    }

    if (!date) {
      alert("Please select your travel / check-in date.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Save enquiry to Firebase / local storage
      if (guestName.trim() || guestPhone.trim()) {
        await submitEnquiry({
          name: guestName || "Guest",
          phone: guestPhone || "Via WhatsApp",
          destination,
          travelDate: date,
          travellers: parseInt(persons) || 2,
          travelType: "personal",
          message: `Hotel Booking Request: ${rooms}, ${persons}, ${nights}, Type: ${stayType}`,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "/hotel-booking"
        });
      }

      // Generate WhatsApp message with all 4 required details
      const waMessage = getHotelEnquiryMessage({
        destination,
        persons,
        rooms,
        checkInDate: `${date} (${nights})`,
        hotelType: stayType,
        name: guestName.trim() || undefined,
        phone: guestPhone.trim() || undefined
      });

      const waUrl = createWhatsAppLink(whatsappNumber, waMessage);
      window.open(waUrl, "_blank");
      onClose();
    } catch (err) {
      console.error("Failed to submit hotel enquiry", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden text-slate-800 my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-forest-900 to-forest-800 text-white p-6 sm:p-7 shrink-0">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Verified Stays & Homestays</span>
          </span>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-2 font-heading">
            Book Hotel & Stays Assistance
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            Fill in your trip details below. We verify clean rooms, mountain views & share best rates on WhatsApp.
          </p>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 overflow-y-auto flex-1">
          
          {/* 1. Destination */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Destination / City <span className="text-red-500">*</span></span>
            </label>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
            >
              {popularHotelDestinations.map((dest) => (
                <option key={dest} value={dest}>{dest}</option>
              ))}
            </select>
          </div>

          {/* 2. Number of Persons & Number of Rooms */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Number of Person */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>Number of Person <span className="text-red-500">*</span></span>
              </label>
              <select
                value={persons}
                onChange={(e) => setPersons(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
              >
                <option value="1 Person (Solo)">1 Person (Solo)</option>
                <option value="2 Persons (Couple / Friends)">2 Persons (Couple / Friends)</option>
                <option value="3 Persons">3 Persons</option>
                <option value="4 Persons (Family)">4 Persons (Family)</option>
                <option value="5-7 Persons (Small Group)">5-7 Persons (Small Group)</option>
                <option value="8-12+ Persons (Large Group)">8-12+ Persons (Large Group)</option>
              </select>
            </div>

            {/* Number of Room Required */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-emerald-600" />
                <span>Rooms Required <span className="text-red-500">*</span></span>
              </label>
              <select
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
              >
                <option value="1 Room">1 Room</option>
                <option value="2 Rooms">2 Rooms</option>
                <option value="3 Rooms">3 Rooms</option>
                <option value="4 Rooms">4 Rooms</option>
                <option value="5+ Rooms (Group / Corporate)">5+ Rooms (Group / Corporate)</option>
              </select>
            </div>

          </div>

          {/* 3. Travel Date & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Date */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Check-in Date <span className="text-red-500">*</span></span>
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
              />
            </div>

            {/* Stay Duration */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Stay Duration</span>
              </label>
              <select
                value={nights}
                onChange={(e) => setNights(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
              >
                <option value="1 Night">1 Night</option>
                <option value="2 Nights">2 Nights</option>
                <option value="3 Nights">3 Nights</option>
                <option value="4-5 Nights">4-5 Nights</option>
                <option value="1 Week+">1 Week+</option>
              </select>
            </div>

          </div>

          {/* Stay Type Preference */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Accommodation Style</span>
            </label>
            <select
              value={stayType}
              onChange={(e) => setStayType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
            >
              <option value="Any Verified Clean Stay">Any Verified Clean Stay (Best Value)</option>
              <option value="Luxury Mountain Resort">Luxury Mountain Resort</option>
              <option value="Authentic Local Homestay">Authentic Local Homestay</option>
              <option value="Riverside Camp / Eco Tents">Riverside Camp / Eco Tents (Dawki)</option>
              <option value="Comfortable Family Hotel">Comfortable Family Hotel</option>
              <option value="Boutique Honeymoon Cottage">Boutique Honeymoon Cottage</option>
              <option value="Budget / Sharing Room">Budget / Sharing Room</option>
            </select>
          </div>

          {/* Guest Name & Phone (Optional) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Your Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all hover:scale-[1.01] active:scale-98 disabled:opacity-50"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current text-white" />
              <span>Check Available Hotels on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-2 flex items-center justify-center gap-4 text-[11px] text-slate-500">
            <span className="flex items-center gap-1 text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified Clean Bathrooms
            </span>
            <span className="flex items-center gap-1 text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5" /> Zero Hidden Charges
            </span>
          </div>

        </form>
      </div>
    </div>
  );
};
