import type { Post, User } from '@/app/global';

const API_URL = 'http://localhost:4000';

export const state: Record<string, { calls: number; realCalls: number }> = {};
export const subscribers: Record<string, () => void> = {};
const updateState = (path: string | null, logs: Record<string, number>) => {
  if (path) {
    if (!state[path]) state[path] = { calls: 0, realCalls: 0 };
    state[path].calls += 1;
  }

  Object.entries(logs).forEach(([url, count]) => {
    if (!state[url]) state[url] = { calls: 0, realCalls: 0 };
    state[url].realCalls += count;
  });
};
const triggerSubscribers = () => {
  Object.values(subscribers).forEach((fn) => fn());
};
const fetchData = async (url: string) => {
  const result = await fetch(`${API_URL}${url}`).then((r) => r.json());
  updateState(url, result.logs);
  triggerSubscribers();
  return { data: result.data, counter: result.counter };
};

export const api = {
  post: async (id: string) => {
    const result = await fetchData(`/posts/${id}`);
    return [result.data, result.counter] as [Post, number];
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
    const result = await fetch(`${API_URL}/logs`).then((r) => r.json());
    updateState(null, result.logs);
    triggerSubscribers();
  },
};
