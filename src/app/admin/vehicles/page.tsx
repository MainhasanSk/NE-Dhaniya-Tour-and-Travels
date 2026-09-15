"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Car, Users, Wind, Check } from "lucide-react";
import { getAllVehicles } from "@/lib/firebase/dataBridge";
import { Vehicle } from "@/types";

export default function AdminVehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllVehicles().then((data) => {
      setVehicles(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">
            Vehicle Fleet CMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage your transport fleet for private rentals and sharing tours across Northeast India.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="text-slate-400 text-sm py-12 text-center">Loading vehicles...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="relative h-36 w-full rounded-xl overflow-hidden bg-slate-900">
                  <Image
                    src={v.image}
                    alt={v.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-slate-900/90 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{v.seatingCapacity}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">{v.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {v.description}
                  </p>
                </div>

                <div className="text-xs text-slate-400 space-y-1.5 pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Best For:</span>
                    <span className="text-slate-200 truncate max-w-[150px] font-medium">{v.idealFor}</span>
                  </div>
                  {v.comfortLevel && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">Comfort:</span>
                      <span className="text-emerald-400 font-medium">{v.comfortLevel}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Active Fleet
                </span>
                <span className="text-slate-500 text-[11px]">Ready for Booking</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
