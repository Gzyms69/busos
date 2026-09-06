import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getHubsFromGpkg } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  if (!city) return NextResponse.json({ error: 'City is required' }, { status: 400 });

  try {
    const hubs = getHubsFromGpkg(city);
    return NextResponse.json(hubs);
  } catch(error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
