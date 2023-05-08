import { NextResponse } from 'next/server';

import { clear } from '@/utils/handleState';

export async function GET() {
  try {
    const logs = await clear();

    return NextResponse.json(logs);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({});
}
