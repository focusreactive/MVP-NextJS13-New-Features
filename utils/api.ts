export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

// const url = "https://jsonplaceholder.typicode.com"
const url = "http://localhost:4000";

export const api = {
  post: async (id: string) => {
    const result = (await fetch(`${url}/posts/${id}`).then((r) => r.json())) as { counter: number; data: Post };
    console.log("post", id, result.counter);
    return result.data;
  },

  posts: async () => {
    const result = (await fetch(`${url}/posts`).then((r) => r.json())) as { counter: number; data: Post[] };
    console.log("posts", result.counter);
    return result.data;
  },

  user: async (id: string) => {
    const result = (await fetch(`${url}/users/${id}`).then((r) => r.json())) as { counter: number; data: User };
    console.log("user", id, result.counter);
    return [result.data, result.counter] as [User, number];
  },

  users: async (id: string) => {
    const result = (await fetch(`${url}/users`).then((r) => r.json())) as {
      counter: number;
      data: User[];
    };
    console.log(`users from ${id}`, result.counter);
    return [result.data, result.counter] as [User[], number];
  },
};
