import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { fetchHubDetails } from '@/lib/api';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const hubId = searchParams.get('hub_id');
  
  if (!city || !lat || !lon) {
    return NextResponse.json({ error: 'city, lat, and lon are required' }, { status: 400 });
  }

  try {
    const details = await fetchHubDetails(city, hubId || '', parseFloat(lat), parseFloat(lon));
    return NextResponse.json(details);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
