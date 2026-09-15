import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Building2, 
  Check, 
  ShieldCheck, 
  MapPin, 
  MessageCircle, 
  Sparkles, 
  Star,
  Coffee,
  Wifi,
  Waves
} from "lucide-react";
import { getSiteSettings } from "@/lib/firebase/dataBridge";
import { Breadcrumbs } from "@/components/public/Breadcrumbs";
import { createWhatsAppLink, getHotelEnquiryMessage } from "@/lib/whatsapp";
import { FAQAccordion } from "@/components/public/FAQAccordion";

export const metadata: Metadata = {
  title: "Hotel Booking in Northeast India & Bhutan | Verified Stays & Resorts | NE Dhaniya",
  description: "Complete hotel booking assistance across Shillong, Cherrapunji, Dawki, Kaziranga, Tawang, Gangtok & Bhutan. Verified clean stays, resorts, and authentic homestays.",
  alternates: {
    canonical: "/hotel-booking",
  },
};

export default async function HotelBookingPage() {
  const settings = await getSiteSettings();
  const hotelWhatsAppUrl = createWhatsAppLink(
    settings.whatsappNumber,
    getHotelEnquiryMessage()
  );

  const stayCategories = [
    {
      title: "Luxury Mountain Resorts",
      description: "Picturesque valley-facing luxury resorts in Shillong, Kaziranga tea estates, and Gangtok offering panoramic vistas and world-class amenities.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />
    },
    {
      title: "Authentic Local Homestays",
      description: "Experience genuine Khasi, Assamese, and Monpa hospitality with home-cooked traditional meals and cultural immersion in Cherrapunji, Mawlynnong, and Dirang.",
      icon: <Coffee className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Riverside Camps & Eco Tents",
      description: "Pebble beach riverside camping along the crystal clear Umngot river in Shnongpdeng (Dawki), complete with bonfires and starry night skies.",
      icon: <Waves className="w-5 h-5 text-teal-600" />
    },
    {
      title: "Comfortable Family Hotels",
      description: "Centrally located, safe, and spacious accommodations with elevators, in-house dining, and parking in Guwahati, Shillong, and Gangtok.",
      icon: <Building2 className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Honeymoon Boutique Cottages",
      description: "Secluded, romantic wooden cottages nestled amidst pine forests with private balconies and scenic mountain mist views.",
      icon: <Star className="w-5 h-5 text-rose-500" />
    },
    {
      title: "Budget & Sharing Hostels",
      description: "Clean, reliable, and verified budget-friendly rooms for solo backpackers, students, and sharing tour travelers.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
    }
  ];

  const hotelFaqs = [
    {
      question: "Why book hotels through NE Dhaniya Tours instead of generic booking portals?",
      answer: "Many remote locations in Northeast India (like Cherrapunji, Dawki, North Sikkim, and Tawang) have limited hotel inventory where online photos are often outdated. Our team personally inspects each property to verify water heating, hygiene, road accessibility, and food quality."
    },
    {
      question: "Are homestays in Northeast India safe and comfortable?",
      answer: "Yes! Homestays in Meghalaya, Arunachal Pradesh, and Assam are celebrated for their warmth, cleanliness, and safety. Host families provide private clean bathrooms, cozy bedding, and freshly cooked local meals."
    },
    {
      question: "Can you combine hotel booking with car rental and sightseeing?",
      answer: "Yes, our most popular packages bundle seamless hotel stays with dedicated private vehicles or sharing tour seats, saving you time and money."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-nature-bg min-h-screen">
      
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ name: "Hotel Booking", url: "/hotel-booking" }]} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            Handpicked Accommodations
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 font-heading">
            Hotel & Homestay Booking Assistance
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Complete hotel booking support across Northeast India & Bhutan. Verified clean rooms, verified heaters, mountain views, and local homestays.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stayCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-50 mt-4">
                <a
                  href={hotelWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-forest-50 text-forest-800 hover:bg-forest-800 hover:text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Enquire for {cat.title}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stays by Destination */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 font-heading">
              Popular Hotel Booking Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Direct assistance across all 8 Northeast states & Bhutan:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Shillong & Umiam Lake</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Cherrapunji (Sohra)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Dawki & Shnongpdeng</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Kaziranga Jungle Resorts</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Tawang & Dirang Valley</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Gangtok & Lachung</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Thimphu & Paro (Bhutan)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <MapPin className="w-4 h-4 text-emerald-600 mb-1" />
              <span>Kohima & Dzukou Camps</span>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <FAQAccordion faqs={hotelFaqs} title="Northeast Hotel Booking FAQs" />

        {/* Bottom Banner */}
        <div className="rounded-3xl bg-forest-900 text-white p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold font-heading">
            Looking for Verified Stays for Your Dates?
          </h2>
          <p className="text-xs sm:text-base text-slate-200 mt-3 max-w-xl mx-auto leading-relaxed">
            Tell us your destination and budget. We will share verified options with photos and best rates directly on WhatsApp.
          </p>
          <div className="mt-8">
            <a
              href={hotelWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Find My Hotel on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
