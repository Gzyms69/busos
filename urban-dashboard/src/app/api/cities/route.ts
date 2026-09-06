import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { fetchCities } from '@/lib/api-client';

export async function GET() {
  try {
    const cities = await fetchCities();
    return NextResponse.json({ cities });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
