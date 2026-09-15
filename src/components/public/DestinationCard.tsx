import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <div className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={destination.heroImage}
          alt={`${destination.name} tourism, Northeast India`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* State Tag */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-800 shadow-sm">
            {destination.name}
          </span>
        </div>

        {/* Title on Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight drop-shadow-md">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
          {destination.shortDescription}
        </p>

        {/* Popular Places Highlights */}
        {destination.popularPlaces && destination.popularPlaces.length > 0 && (
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
              Popular Places:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {destination.popularPlaces.slice(0, 4).map((place, idx) => (
                <span 
                  key={idx}
                  className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-100"
                >
                  {place}
                </span>
              ))}
              {destination.popularPlaces.length > 4 && (
                <span className="text-[11px] text-slate-400 px-1 py-0.5">
                  +{destination.popularPlaces.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Link */}
        <div className="pt-2">
          <Link
            href={`/destinations/${destination.slug}`}
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest-50 text-forest-800 hover:bg-forest-800 hover:text-white font-semibold text-xs sm:text-sm transition-all group/btn"
          >
            <span>Explore {destination.name}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

    </div>
  );
};
