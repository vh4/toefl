import { NextRequest, NextResponse } from 'next/server';
import { getMistakes } from '@/lib/services/mistakes.service';
import { DEFAULT_USER_ID } from '@/lib/services/roadmap.service';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const includeResolved = searchParams.get('includeResolved') === 'true';
    const userId = searchParams.get('userId') || DEFAULT_USER_ID;

    const data = await getMistakes(userId, includeResolved);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to load mistakes:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while loading mistakes.' },
      { status: 500 }
    );
  }
}
