import { NextRequest, NextResponse } from 'next/server';
import { getLessonBySlug } from '@/lib/services/grammar.service';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;
    const lesson = await getLessonBySlug(slug);

    if (!lesson) {
      return NextResponse.json(
        { error: `Lesson with slug "${slug}" not found.` },
        { status: 404 }
      );
    }

    return NextResponse.json(lesson);
  } catch (error) {
    console.error('Failed to load lesson:', error);
    return NextResponse.json(
      { error: 'Internal Server Error while loading lesson.' },
      { status: 500 }
    );
  }
}
