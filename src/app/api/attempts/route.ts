import { NextRequest, NextResponse } from 'next/server';
import { submitAnswer } from '@/lib/services/attempt.service';
import { DEFAULT_USER_ID } from '@/lib/services/roadmap.service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { questionId, answer, userId = DEFAULT_USER_ID } = body;

    if (!questionId || !answer) {
      return NextResponse.json(
        { error: 'questionId and answer are required.' },
        { status: 400 }
      );
    }

    const result = await submitAnswer({
      userId,
      questionId,
      answer,
    });

    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to submit attempt.';
    console.error('Submit answer error:', error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
