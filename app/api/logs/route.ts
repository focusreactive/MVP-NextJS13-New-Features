import { NextResponse } from 'next/server';

import { read } from '@/utils/handleState';

export async function GET() {
  try {
    const logs = await read();

    return NextResponse.json(logs);
  } catch (error) {
    console.error(error);
  }

  return NextResponse.json({});
}
