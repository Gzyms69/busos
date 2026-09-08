import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { fetchHexagons } from '@/lib/api';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'kielce';
  const minPop = parseFloat(searchParams.get('min_pop') || '0');
  try {
    const data = await fetchHexagons(city, minPop);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
