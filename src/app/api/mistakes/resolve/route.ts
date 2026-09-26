import { NextRequest, NextResponse } from 'next/server';
import { resolveMistake } from '@/lib/services/mistakes.service';
import { DEFAULT_USER_ID } from '@/lib/services/roadmap.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { mistakeId, userId = DEFAULT_USER_ID } = body;

    if (!mistakeId) {
      return NextResponse.json(
        { error: 'mistakeId is required.' },
        { status: 400 }
      );
    }

    const success = await resolveMistake(mistakeId, userId);
    if (!success) {
      return NextResponse.json(
        { error: 'Mistake not found or not owned by user.' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, resolvedId: mistakeId });
  } catch (error) {
    console.error('Resolve mistake error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while resolving mistake.' },
      { status: 500 }
    );
  }
}
