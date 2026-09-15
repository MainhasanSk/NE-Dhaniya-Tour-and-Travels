"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Compass, Home, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Client error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-nature-bg px-4 py-20 text-center">
      <div className="max-w-md mx-auto space-y-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 mx-auto flex items-center justify-center font-bold text-xl">
          !
        </div>
        <h2 className="text-2xl font-bold text-slate-900 font-heading">
          Experiencing a Brief Connection Pause
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          We encountered an unexpected glitch while loading this route. You can reload this page or return to explore our destinations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-forest-900 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-slate-100 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-slate-200 transition-all"
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>All Destinations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
