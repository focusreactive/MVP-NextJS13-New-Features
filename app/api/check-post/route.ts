import { NextResponse } from 'next/server';

export async function POST() {
  const random = Math.random() * 1000;

  return NextResponse.json({ random });
}
