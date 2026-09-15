import React from "react";
import Link from "next/link";
import { 
  Car, 
  Users, 
  Check, 
  Heart, 
  Wallet, 
  Clock, 
  ShieldCheck, 
  MessageCircle 
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

interface PersonalVsSharingProps {
  whatsappNumber: string;
}

export const PersonalVsSharing: React.FC<PersonalVsSharingProps> = ({ whatsappNumber }) => {
  const personalWhatsAppUrl = createWhatsAppLink(
    whatsappNumber,
    "Hello NE Dhaniya Tours & Travels, I am interested in planning a Personal / Private Vehicle Tour. Please share options."
  );

  const sharingWhatsAppUrl = createWhatsAppLink(
    whatsappNumber,
    "Hello NE Dhaniya Tours & Travels, I am interested in joining a Budget Sharing Tour in Northeast India. Please share upcoming dates and seats."
  );

  return (
    <section className="py-20 bg-gradient-to-b from-forest-950 via-forest-900 to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Mountain Ambience Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
            Tailored To Your Travel Style
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
            Personal vs Sharing Travel
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Whether you prioritize complete privacy and a customized schedule or a cost-effective sharing experience to meet fellow travelers, NE Dhaniya Tours has the perfect option for you.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* PERSONAL TOUR CARD */}
          <div className="rounded-3xl bg-slate-900/90 border-2 border-emerald-500/40 p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative group hover:border-emerald-400 transition-all">
            <div className="absolute -top-3.5 left-8 bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Most Popular for Families & Couples
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Car className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Personal / Private Tour</h3>
                  <p className="text-xs sm:text-sm text-emerald-300 font-medium">
                    Your Journey. Your Vehicle. Your Freedom.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Travel exclusively in your private vehicle with complete autonomy over stops, photography timings, hotel choices, and departure schedules.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Private Vehicle:</strong> Exclusively for you and your family/group (Innova Crysta, Sedan, Urbania).</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Flexible Itinerary:</strong> Pause at scenic roadside waterfalls or local cafes whenever you wish.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Maximum Privacy & Comfort:</strong> Ideal for honeymoon couples, families with kids, and senior citizens.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Tailored Stays:</strong> Choose from handpicked luxury resorts, cozy mountain homestays, or heritage lodges.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Doorstep Pickup:</strong> Direct pickup and drop at Guwahati Airport or Railway Station.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={personalWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Plan Personal Trip</span>
              </a>
              <Link
                href="/tour-packages"
                className="w-full sm:w-auto text-center py-3 px-5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-medium transition-all"
              >
                View Packages
              </Link>
            </div>
          </div>

          {/* SHARING TOUR CARD */}
          <div className="rounded-3xl bg-slate-900/70 border border-slate-800 p-6 sm:p-10 flex flex-col justify-between shadow-2xl relative group hover:border-amber-500/40 transition-all">
            <div className="absolute -top-3.5 left-8 bg-amber-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              Best For Solo Travellers & Students
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Sharing Tour</h3>
                  <p className="text-xs sm:text-sm text-amber-300 font-medium">
                    Explore More. Spend Less.
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Join like-minded travelers in shared vehicles and enjoy the magic of Northeast India at budget-friendly, per-seat rates without compromising safety.
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Pocket-Friendly Rates:</strong> Pay only for your individual seat; save substantially on fuel and transport costs.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Connect With Fellow Explorers:</strong> Meet solo backpackers, photographers, and friendly travel enthusiasts.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Fixed Organized Itinerary:</strong> Carefully planned route covering top highlights smoothly on schedule.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Verified Group Leaders:</strong> Experienced local drivers familiar with mountain trails and scenic halts.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <Check className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Ideal Destinations:</strong> High frequency for Shillong, Cherrapunji, Dawki, Kaziranga, and Tawang.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={sharingWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-sm transition-all shadow-lg hover:shadow-amber-500/25"
              >
                <MessageCircle className="w-4 h-4 text-amber-100" />
                <span>Explore Sharing Tours</span>
              </a>
              <Link
                href="/tour-packages"
                className="w-full sm:w-auto text-center py-3 px-5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 text-sm font-medium transition-all"
              >
                Find Shared Dates
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
