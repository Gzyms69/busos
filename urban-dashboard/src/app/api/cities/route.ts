import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getAvailableCities } from '@/lib/db';

export async function GET() {
  try {
    const cities = getAvailableCities();
    return NextResponse.json({ cities });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
