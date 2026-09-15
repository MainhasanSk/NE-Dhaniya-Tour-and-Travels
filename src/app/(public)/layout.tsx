import React from "react";
import { getSiteSettings } from "@/lib/firebase/dataBridge";
import { Header } from "@/components/public/Header";
import { Footer } from "@/components/public/Footer";
import { FloatingWhatsApp } from "@/components/public/FloatingWhatsApp";
import { MobileStickyBar } from "@/components/public/MobileStickyBar";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <>
      <Header settings={settings} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <FloatingWhatsApp whatsappNumber={settings.whatsappNumber} />
      <MobileStickyBar whatsappNumber={settings.whatsappNumber} />
    </>
  );
}
