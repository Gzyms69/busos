import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getAvailableCities } from '@/lib/db';

export async function GET() {
  try {
    const cities = getAvailableCities();
    return NextResponse.json({ cities });
  } catch(error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
