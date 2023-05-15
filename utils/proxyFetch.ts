export const proxyFetch = (() => {
  async function proxy(url: string, options?: RequestInit) {
    try {
      if (url.includes('/images')) {
        const apiHost = `https://dog.ceo/api/breeds/image/random`;
        const result = await fetch(apiHost, options);
        const data = await result.json();

        return { data: data?.message };
      }

      const apiHost = `https://jsonplaceholder.typicode.com${url}`;
      const result = await fetch(apiHost, options);
      const data = await result.json();

      return { data };
    } catch (error) {
      console.error(error);
    }

    return { data: [] };
  }

  return {
    fetch(url: string, options?: RequestInit) {
      return proxy(url, options);
    },
  };
})();
