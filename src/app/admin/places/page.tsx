"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Eye, ExternalLink } from "lucide-react";
import { getAllTouristPlaces } from "@/lib/firebase/dataBridge";
import { TouristPlace } from "@/types";

export default function AdminPlacesPage() {
  const [places, setPlaces] = useState<TouristPlace[]>([]);
  const [selectedState, setSelectedState] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTouristPlaces().then((data) => {
      setPlaces(data);
      setLoading(false);
    });
  }, []);

  const filteredPlaces = selectedState === "all"
    ? places
    : places.filter(p => p.destinationSlug.toLowerCase() === selectedState.toLowerCase());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">
            Tourist Places CMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage individual tourist destination guides, sightseeing spots, and taxi route pages.
          </p>
        </div>

        {/* State Filter Dropdown */}
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="all">All States ({places.length} Places)</option>
          <option value="meghalaya">Meghalaya</option>
          <option value="assam">Assam</option>
          <option value="arunachal-pradesh">Arunachal Pradesh</option>
          <option value="sikkim">Sikkim</option>
        </select>
      </div>

      {loading ? (
        <div className="text-slate-400 text-sm py-12 text-center">Loading places...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="relative h-36 w-full rounded-xl overflow-hidden">
                  <Image
                    src={place.heroImage}
                    alt={place.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-slate-900/90 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow">
                    📍 {place.destinationName}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{place.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {place.shortDescription}
                  </p>
                </div>

                {place.topThingsToDo && (
                  <div className="text-[11px] text-slate-400 space-y-1">
                    <span className="font-semibold text-slate-300 block">Top Sights:</span>
                    <div className="line-clamp-2 text-emerald-400/90">
                      {place.topThingsToDo.join(" • ")}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <Link
                  href={`/destinations/${place.destinationSlug}/${place.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Public Page</span>
                </Link>
                <span className="text-[11px] text-emerald-500 font-semibold">Active & Indexable</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
