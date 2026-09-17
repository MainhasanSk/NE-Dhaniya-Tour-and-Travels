"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { submitEnquiry } from "@/lib/firebase/dataBridge";
import { createWhatsAppLink, getTripSearchMessage } from "@/lib/whatsapp";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  defaultDestination?: string;
  defaultPackageName?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  whatsappNumber,
  defaultDestination = "Meghalaya",
  defaultPackageName = "",
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState(defaultDestination);
  const [travelDate, setTravelDate] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [travelType, setTravelType] = useState<"personal" | "sharing" | "not-sure">("personal");
  const [vehiclePreference, setVehiclePreference] = useState("Innova Crysta");
  const [message, setMessage] = useState(defaultPackageName ? `Interested in ${defaultPackageName}` : "");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone / WhatsApp number.");
      return;
    }

    setSubmitting(true);

    try {
      // 1. Submit to Firestore/data layer
      await submitEnquiry({
        name,
        phone,
        destination,
        travelDate: travelDate || "Flexible",
        travellers,
        travelType,
        vehiclePreference,
        message,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/",
      });

      setSuccess(true);

      // 2. Format WhatsApp deep link
      const waMsg = [
        `Hello NE Dhaniya Tours & Travels, I have submitted an enquiry:`,
        `👤 Name: ${name}`,
        `📱 Contact: ${phone}`,
        `📍 Destination: ${destination}`,
        `🚗 Travel Mode: ${travelType === "personal" ? "Personal (Private Vehicle)" : travelType === "sharing" ? "Sharing Tour" : "Not Sure"}`,
        `👥 Travellers: ${travellers}`,
        travelDate ? `📅 Date: ${travelDate}` : null,
        vehiclePreference ? `🚙 Vehicle Preference: ${vehiclePreference}` : null,
        message ? `💬 Note: ${message}` : null,
      ].filter(Boolean).join("\n");

      const waUrl = createWhatsAppLink(whatsappNumber, waMsg);

      // 3. Open WhatsApp after short delay
      setTimeout(() => {
        window.open(waUrl, "_blank");
        onClose();
      }, 1200);

    } catch (error) {
      console.error("Enquiry submission failed", error);
      alert("Something went wrong. Please chat with us directly on WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-pulse">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Enquiry Received!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Connecting you with our Northeast travel specialist on WhatsApp right now...
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                Quick Trip Consultation
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Get Your Customized Travel Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us your travel ideas and get an authentic, transparent itinerary directly on WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">WhatsApp / Phone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Destination & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Destination</label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Assam">Assam</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Multi-State Northeast">Multi-State Northeast</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Travel Date (Tentative)</label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Travel Type: Personal vs Sharing */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Travel Mode</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setTravelType("personal")}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                      travelType === "personal"
                        ? "bg-forest-800 text-white border-forest-800 shadow"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    🚗 Personal
                  </button>
                  <button
                    type="button"
                    onClick={() => setTravelType("sharing")}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                      travelType === "sharing"
                        ? "bg-forest-800 text-white border-forest-800 shadow"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    👥 Sharing
                  </button>
                  <button
                    type="button"
                    onClick={() => setTravelType("not-sure")}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border transition-all ${
                      travelType === "not-sure"
                        ? "bg-forest-800 text-white border-forest-800 shadow"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    ❓ Need Advice
                  </button>
                </div>
              </div>

              {/* Travellers & Vehicle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Number of Travellers</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={travellers}
                    onChange={(e) => setTravellers(parseInt(e.target.value) || 1)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Vehicle Preference</label>
                  <select
                    value={vehiclePreference}
                    onChange={(e) => setVehiclePreference(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="Innova Crysta">Innova Crysta (6-7 Seater)</option>
                    <option value="Sedan">Sedan (Dzire / Etios - 4 Seater)</option>
                    <option value="Force Urbania">Force Urbania (Luxury 10-17)</option>
                    <option value="Tempo Traveler 13/17">Tempo Traveler (13/17 Seater)</option>
                    <option value="Mini Bus 24 Seater">Mini Bus (24 Seater)</option>
                    <option value="Not Sure">Open to Recommendation</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Specific Requirements or Places</label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. traveling with kids, interested in trekking or safari..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-forest-700 hover:bg-forest-800 text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all disabled:opacity-50"
              >
                <WhatsAppIcon className="w-5 h-5 fill-current text-white" />
                <span>{submitting ? "Processing..." : "Get My Free Quote on WhatsApp"}</span>
              </button>

              <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Your information is 100% confidential. No spam calls.</span>
              </p>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
