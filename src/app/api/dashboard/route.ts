import { NextResponse } from 'next/server';
import { getDashboardData } from '@/lib/services/dashboard.service';

export async function GET() {
  try {
    const data = await getDashboardData();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to load dashboard:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while loading dashboard.' },
      { status: 500 }
    );
  }
}
