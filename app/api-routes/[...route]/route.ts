import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const runtime = 'edge';
export const revalidate = 20;

export async function GET(request: Request) {
  const { pathname } = new URL(request.url);
  const route = pathname.replace('/api-routes', '');

  let data;

  try {
    const apiHost = `https://jsonplaceholder.typicode.com${route}`;
    const result = await fetch(apiHost);

    data = await result.json();
  } catch (error) {
    return NextResponse.json({ error });
  }

  return NextResponse.json(data, {
    headers: { 'Set-Cookie': `lastHit="${new Date().toLocaleTimeString()}"` },
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const cookie = cookies();

  if (cookie.get('token')?.value !== '123') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json(data, {
    headers: { 'Set-Cookie': `lastHit="${new Date().toLocaleTimeString()}"` },
  });
}
