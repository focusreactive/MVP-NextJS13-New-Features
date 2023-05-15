import { proxyFetch } from './proxyFetch';

import type { Post, User } from '@/app/global';

const fetchData = async (url: string, options?: RequestInit) => {
  const result = await proxyFetch.fetch(url, options).catch(console.error);
  return { data: result?.data };
};

export const api = {
  post: async (id: string, options?: RequestInit) => {
    const result = await fetchData(`/posts/${id}`, options);

    return [result?.data] as [Post];
  },

  posts: async () => {
    const result = await fetchData('/posts');
    return [result.data] as [Post[]];
  },

  user: async (id: string) => {
    const result = await fetchData(`/users/${id}`);
    return [result.data] as [User];
  },

  users: async () => {
    const result = await fetchData('/users');
    return [result.data] as [User[]];
  },

  images: async (options?: RequestInit) => {
    const result = await fetchData('/images', options);

    return [result.data] as [string];
  },
};
