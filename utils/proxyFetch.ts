import { read, save } from './handleState';

export const proxyFetch = (() => {
  async function proxy(url: string, options?: RequestInit) {
    const logs = await read();
    const counter = (logs[url] = (logs[url] || 0) + 1);

    try {
      if (url.includes('/logs')) {
        return logs;
      }

      if (url.includes('/images')) {
        const apiHost = `https://dog.ceo/api/breeds/image/random`;
        const result = await fetch(apiHost, options);
        const data = await result.json();

        save(logs);

        return { counter, data: data?.message, logs };
      }

      const apiHost = `https://jsonplaceholder.typicode.com${url}`;
      const result = await fetch(apiHost, options);
      const data = await result.json();

      save(logs);

      return { counter, data, logs };
    } catch (error) {
      console.error(error);
    }

    return { counter, data: [], logs };
  }

  return {
    fetch(url: string, options?: RequestInit) {
      return proxy(url, options);
    },
  };
})();
