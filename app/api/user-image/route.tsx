import { ImageResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) return new Response('Missing id', { status: 400 });

  let user;

  try {
    user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (res) => res.json(),
    );
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {user.name}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}
