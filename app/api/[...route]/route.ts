const logs: Record<string, number> = {};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.pathname.replace('/api', '');
  const externalApiUrl = `https://jsonplaceholder.typicode.com${path}`;
  const counter = (logs[path] = (logs[path] || 0) + 1);

  // if (logs[path] > 2) {
  //   return new Response('', { status: 404 });
  // }

  console.log(
    new Date(),
    `https://jsonplaceholder.typicode.com${path}`,
    counter,
  );
  const result = await fetch(externalApiUrl).then((r) => r.json());

  return new Response(JSON.stringify({ counter, data: result }));
}
