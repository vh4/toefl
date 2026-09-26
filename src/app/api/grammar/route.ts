import { NextResponse } from 'next/server';
import { getGrammarLessons } from '@/lib/services/grammar.service';

export async function GET() {
  try {
    const data = await getGrammarLessons();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to load grammar lessons:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while loading grammar lessons.' },
      { status: 500 }
    );
  }
}
