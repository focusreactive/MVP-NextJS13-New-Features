import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Not found page',
};

export default function NotFoundCatchAll() {
  notFound();
}
