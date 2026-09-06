import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { getHubDetails } from '@/lib/db';

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
    const details = await getHubDetails(city, parseFloat(lat), parseFloat(lon), hubId || undefined);
    return NextResponse.json(details);
  } catch(error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
