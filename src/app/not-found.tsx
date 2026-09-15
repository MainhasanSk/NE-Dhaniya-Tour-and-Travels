import React from "react";
import Link from "next/link";
import { Compass, Home, Package, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-nature-bg px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <span className="text-6xl font-extrabold text-forest-800">404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading">
          Lost in the Northeast Mountains?
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The page you are looking for may have moved or no longer exists. Let us help you get back on track to your next Northeast adventure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-forest-800 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-forest-900 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-white text-slate-800 font-semibold text-xs sm:text-sm border border-slate-200 hover:bg-slate-50 transition-all"
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Explore Destinations</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
