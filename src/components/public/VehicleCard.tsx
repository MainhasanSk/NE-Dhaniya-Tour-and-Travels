import React from "react";
import Image from "next/image";
import { Users, Briefcase, ShieldCheck, MessageCircle, Wind } from "lucide-react";
import { Vehicle } from "@/types";
import { createWhatsAppLink, getVehicleEnquiryMessage } from "@/lib/whatsapp";

interface VehicleCardProps {
  vehicle: Vehicle;
  whatsappNumber: string;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, whatsappNumber }) => {
  const whatsappUrl = createWhatsAppLink(
    whatsappNumber,
    getVehicleEnquiryMessage(vehicle.name, vehicle.seatingCapacity)
  );

  return (
    <div className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between">
      
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={vehicle.image}
          alt={`${vehicle.name} Rental in Northeast India`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-emerald-600" />
          <span>{vehicle.seatingCapacity}</span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-forest-700 transition-colors">
            {vehicle.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
            {vehicle.description}
          </p>

          <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Best For:</span>
              <span className="font-semibold text-slate-800 line-clamp-1 max-w-[200px]">{vehicle.idealFor}</span>
            </div>
            {vehicle.comfortLevel && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Comfort:</span>
                <span className="font-semibold text-emerald-700">{vehicle.comfortLevel}</span>
              </div>
            )}
            {vehicle.acAvailable && (
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Air Conditioning:</span>
                <span className="font-semibold text-slate-800 flex items-center gap-1">
                  <Wind className="w-3 h-3 text-emerald-600" /> Fully Air-Conditioned
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-slate-100">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest-700 hover:bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>

      </div>

    </div>
  );
};
