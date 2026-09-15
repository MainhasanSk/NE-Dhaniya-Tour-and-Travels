import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, Check, MessageCircle, ArrowRight } from "lucide-react";
import { TourPackage } from "@/types";
import { createWhatsAppLink, getPackageEnquiryMessage } from "@/lib/whatsapp";

interface PackageCardProps {
  pkg: TourPackage;
  whatsappNumber: string;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, whatsappNumber }) => {
  const whatsappUrl = createWhatsAppLink(
    whatsappNumber,
    getPackageEnquiryMessage(pkg.name, pkg.duration, pkg.travelMode)
  );

  return (
    <div className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={`${pkg.name} - ${pkg.destinationName} Tour Package`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        {/* Travel Mode Badge */}
        <div className="absolute top-4 left-4 flex gap-2">
          {pkg.travelMode === "personal" && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-600 text-white shadow">
              Personal Tour
            </span>
          )}
          {pkg.travelMode === "sharing" && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-600 text-white shadow">
              Sharing Tour
            </span>
          )}
          {pkg.travelMode === "both" && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-forest-800 text-emerald-200 border border-emerald-500/40 shadow">
              Personal & Sharing
            </span>
          )}
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            {pkg.destinationName}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
            {pkg.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {pkg.shortDescription}
          </p>

          {/* Highlights */}
          {pkg.highlights && pkg.highlights.length > 0 && (
            <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
              {pkg.highlights.slice(0, 3).map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{hl}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTAs */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Get Custom Quote on WhatsApp</span>
          </a>

          <Link
            href={`/tour-packages/${pkg.slug}`}
            className="w-full inline-flex items-center justify-center gap-1 text-xs font-semibold text-slate-600 hover:text-forest-700 py-1"
          >
            <span>View Full Itinerary</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
};
