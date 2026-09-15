import { NextResponse } from 'next/server';
import { submitEnquiry } from '@/lib/firebase/dataBridge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, destination, travelDate, travellers, travelType, vehiclePreference, message, sourcePage } = body;

    if (!name || !phone || !destination) {
      return NextResponse.json(
        { error: 'Missing required fields (name, phone, destination)' },
        { status: 400 }
      );
    }

    const result = await submitEnquiry({
      name,
      phone,
      destination,
      travelDate: travelDate || 'Flexible',
      travellers: travellers || 2,
      travelType: travelType || 'personal',
      vehiclePreference,
      message,
      sourcePage: sourcePage || '/',
    });

    return NextResponse.json({ success: true, id: result.id });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
