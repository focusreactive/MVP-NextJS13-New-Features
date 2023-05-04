type CustomProp = { [key in `--${string}`]: string };
declare module 'react' {
  export interface CSSProperties extends CustomProp {}
}

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

export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};
