import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { fetchPopulation } from '@/lib/api-client';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  if (!city) return NextResponse.json({ error: 'City is required' }, { status: 400 });

  try {
    const data = await fetchPopulation(city);
    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
