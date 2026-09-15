"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Compass, ExternalLink, Edit3, Plus, Check, Eye } from "lucide-react";
import { getAllDestinations } from "@/lib/firebase/dataBridge";
import { Destination } from "@/types";

export default function AdminDestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDestinations().then((data) => {
      setDestinations(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">
            Destinations CMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage Northeast India states and Bhutan destination pages, SEO titles, and tourist places.
          </p>
        </div>

        <button 
          onClick={() => alert("All 8 primary destinations are seeded and active. Select any destination to review SEO content.")}
          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Add Custom Region</span>
        </button>
      </div>

      {loading ? (
        <div className="text-slate-400 text-sm py-12 text-center">
          Loading destinations...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="relative h-40 w-full rounded-xl overflow-hidden">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md shadow">
                    {dest.status}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">{dest.name}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {dest.shortDescription}
                  </p>
                </div>

                <div className="text-xs text-slate-400 space-y-1 pt-2 border-t border-slate-800">
                  <div className="flex justify-between">
                    <span>Popular Places:</span>
                    <span className="font-semibold text-white">{dest.popularPlaces?.length || 0} spots</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SEO Title:</span>
                    <span className="text-emerald-400 truncate max-w-[150px]">{dest.seoTitle}</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                <Link
                  href={`/destinations/${dest.slug}`}
                  target="_blank"
                  className="flex items-center gap-1 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Page</span>
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
