const logs: any = {};

export default async function proxyFetch(url: string, options?: RequestInit) {
  const counter = (logs[url] = (logs[url] || 0) + 1);

  try {
    if (url.includes('/logs')) {
      return logs;
    }

    const apiHost = `https://jsonplaceholder.typicode.com${url}`;
    const result = await fetch(apiHost, options);
    const data = await result.json();

    return { counter, data, logs };
  } catch (error) {
    console.error(error);
  }

  return { counter, data: {}, logs };
}
