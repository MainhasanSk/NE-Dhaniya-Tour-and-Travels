"use client";

import React, { useState, useEffect } from "react";
import { Phone, Calendar, Users, Car, Check, Clock, Filter } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { getAllEnquiries, updateEnquiryStatus } from "@/lib/firebase/dataBridge";
import { Enquiry } from "@/types";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllEnquiries().then((data) => {
      setEnquiries(data);
      setLoading(false);
    });
  }, []);

  const handleStatusChange = async (id: string, newStatus: Enquiry['status']) => {
    await updateEnquiryStatus(id, newStatus);
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const filtered = filterStatus === "all"
    ? enquiries
    : enquiries.filter(e => e.status === filterStatus);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white font-heading">
            Customer Enquiries & WhatsApp Pipeline
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track incoming tour and cab enquiries. Click &quot;Open WhatsApp&quot; to initiate instant direct conversations with travelers.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-white rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Enquiries ({enquiries.length})</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="follow-up">Follow-up</option>
            <option value="converted">Converted</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="text-slate-400 text-sm py-12 text-center">Loading enquiries...</div>
      ) : filtered.length === 0 ? (
        <div className="p-12 text-center bg-slate-950 rounded-3xl border border-slate-800 text-slate-400 text-sm">
          No enquiries found in this view.
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((enq) => {
            const waUrl = createWhatsAppLink(
              enq.phone,
              `Hello ${enq.name}, thank you for contacting NE Dhaniya Tours & Travels! I am your travel coordinator regarding your enquiry for ${enq.destination}.`
            );

            return (
              <div
                key={enq.id}
                className="p-5 sm:p-6 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-slate-700 transition-all"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {enq.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                      📍 {enq.destination}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300">
                      🚗 {enq.travelType === "personal" ? "Personal Cab" : enq.travelType === "sharing" ? "Sharing Tour" : "Flexible"}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-slate-500" />
                      {enq.phone}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      {enq.travellers} Travellers
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {enq.travelDate || "Flexible"}
                    </span>
                    <span className="text-slate-500">
                      • {new Date(enq.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {enq.message && (
                    <p className="text-xs sm:text-sm text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-slate-800/80 italic">
                      &quot;{enq.message}&quot;
                    </p>
                  )}
                </div>

                {/* Actions & Status */}
                <div className="flex flex-wrap items-center gap-3 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-800">
                  <select
                    value={enq.status}
                    onChange={(e) => handleStatusChange(enq.id, e.target.value as any)}
                    className="bg-slate-900 border border-slate-700 text-white rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none"
                  >
                    <option value="new">🔴 New</option>
                    <option value="contacted">🟡 Contacted</option>
                    <option value="follow-up">🔵 Follow-up</option>
                    <option value="converted">🟢 Converted</option>
                    <option value="closed">⚪ Closed</option>
                  </select>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs shadow-md transition-all hover:scale-105"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-current" />
                    <span>Open WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
