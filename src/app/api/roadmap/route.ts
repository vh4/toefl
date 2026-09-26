import { NextResponse } from 'next/server';
import { getRoadmap } from '@/lib/services/roadmap.service';

export async function GET() {
  try {
    const data = await getRoadmap();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to load roadmap:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while loading roadmap.' },
      { status: 500 }
    );
  }
}
