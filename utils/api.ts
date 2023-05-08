import { proxyFetch } from './proxyFetch';

import type { Post, User } from '@/app/global';

export const state: Record<string, { calls: number; realCalls: number }> = {};
export const subscribers: Record<string, () => void> = {};

const updateState = (path: string | null, logs: Record<string, number>) => {
  if (path) {
    if (!state[path]) state[path] = { calls: 0, realCalls: 0 };
    state[path].calls += 1;
  }

  if (logs) {
    Object.entries(logs).forEach(([url, count]) => {
      if (!state[url]) state[url] = { calls: 0, realCalls: 0 };
      state[url].realCalls += count;
    });
  }
};

const triggerSubscribers = () => {
  Object.values(subscribers).forEach((fn) => fn());
};

const fetchData = async (url: string, options?: RequestInit) => {
  const result = await proxyFetch.fetch(url, options).catch(console.error);

  updateState(url, result.logs);
  triggerSubscribers();
  return { data: result?.data, counter: result?.counter };
};

export const api = {
  post: async (id: string, options?: RequestInit) => {
    let updatedId = id;

    if (id === 'random') {
      updatedId = String(Math.round(Math.random() * 100));
    }

    if (id === 'best') {
      updatedId = String(99);
    }

    if (id === 'dynamic') {
      updatedId = String(13);
    }

    const result = await fetchData(`/posts/${updatedId}`, options);

    return [result?.data, result?.counter] as [Post, number];
  },

  posts: async () => {
    const result = await fetchData('/posts');
    return [result.data, result.counter] as [Post[], number];
  },

  user: async (id: string) => {
    const result = await fetchData(`/users/${id}`);
    return [result.data, result.counter] as [User, number];
  },

  users: async (id: string) => {
    const result = await fetchData('/users');
    return [result.data, result.counter] as [User[], number];
  },

  updateLogs: async () => {
    const logs = await proxyFetch.fetch(`/logs`);

    updateState(null, logs);
    triggerSubscribers();

    return logs;
  },
};
