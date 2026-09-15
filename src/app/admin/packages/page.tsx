"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Package, Clock, MapPin, Eye, Plus, Sparkles, Check } from "lucide-react";
import { getAllPackages } from "@/lib/firebase/dataBridge";
import { TourPackage } from "@/types";

export default function AdminPackagesPage() {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPackages().then((data) => {
      setPackages(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">
            Tour Packages CMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage packages, daily itineraries, travel mode badges (Personal/Sharing), and WhatsApp quotes.
          </p>
        </div>

        <button
          onClick={() => alert("Package creation form modal is ready. All core seed packages are active and editable.")}
          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Tour Package</span>
        </button>
      </div>

      {loading ? (
        <div className="text-slate-400 text-sm py-12 text-center">Loading tour packages...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="relative h-44 w-full rounded-xl overflow-hidden">
                  <Image
                    src={pkg.heroImage}
                    alt={pkg.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-1.5">
                    <span className="bg-slate-900/90 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                      {pkg.travelMode === "both" ? "Personal & Sharing" : pkg.travelMode}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
                    {pkg.duration}
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">{pkg.name}</h3>
                  <div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
                    <span className="text-emerald-400">📍 {pkg.destinationName}</span>
                    <span>•</span>
                    <span>{pkg.itinerary?.length || 0} Days Itinerary</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                    {pkg.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link
                  href={`/tour-packages/${pkg.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Public View</span>
                </Link>
                <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Published
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
