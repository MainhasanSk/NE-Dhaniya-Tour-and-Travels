/**
 * WhatsApp Helper & Deep Link Generator
 * Centralized formatting for all WhatsApp CTAs across NE Dhaniya Tours & Travels
 */

export function cleanPhoneNumber(phone: string): string {
  // Keep only digits
  const cleaned = phone.replace(/\D/g, '');
  // If Indian number without country code (10 digits), prepend 91
  if (cleaned.length === 10) {
    return `91${cleaned}`;
  }
  return cleaned;
}

export function createWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = cleanPhoneNumber(phone);
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

export function getGeneralEnquiryMessage(): string {
  return `Hello NE Dhaniya Tours & Travels, I would like to plan a trip to Northeast India. Please share details and available packages.`;
}

export function getPackageEnquiryMessage(packageName: string, duration: string, mode?: string): string {
  const modeText = mode ? ` (${mode} Travel)` : '';
  return `Hello NE Dhaniya Tours & Travels, I am interested in booking the "${packageName}" [${duration}]${modeText}. Please share the itinerary, pricing, and vehicle details.`;
}

export function getVehicleEnquiryMessage(vehicleName: string, capacity?: string): string {
  const cap = capacity ? ` (${capacity})` : '';
  return `Hello NE Dhaniya Tours & Travels, I want to enquire about hiring the "${vehicleName}"${cap} for our Northeast trip. Please share availability and rates.`;
}

export function getDestinationEnquiryMessage(destinationName: string): string {
  return `Hello NE Dhaniya Tours & Travels, I am planning a vacation to ${destinationName}. Please suggest the best itinerary, hotels, and vehicle options for my travel.`;
}

export function getHotelEnquiryMessage(destination?: string): string {
  const dest = destination ? ` in ${destination}` : ' across Northeast India & Bhutan';
  return `Hello NE Dhaniya Tours & Travels, I need assistance with hotel / homestay booking${dest}. Please share recommended stays and quotes.`;
}

export function getTripSearchMessage(params: {
  destination?: string;
  travelType?: string;
  travellers?: number | string;
  travelDate?: string;
}): string {
  const parts: string[] = [
    `Hello NE Dhaniya Tours & Travels, I am planning a Northeast trip and would like a custom quote:`
  ];

  if (params.destination && params.destination !== 'any') {
    parts.push(`📍 Destination: ${params.destination}`);
  }
  if (params.travelType) {
    parts.push(`🚗 Travel Mode: ${params.travelType === 'personal' ? 'Personal / Private Vehicle' : params.travelType === 'sharing' ? 'Sharing Tour' : params.travelType}`);
  }
  if (params.travellers) {
    parts.push(`👥 Number of Travellers: ${params.travellers}`);
  }
  if (params.travelDate) {
    parts.push(`📅 Tentative Date: ${params.travelDate}`);
  }

  parts.push(`\nPlease provide the best itinerary and quotation.`);
  return parts.join('\n');
}
