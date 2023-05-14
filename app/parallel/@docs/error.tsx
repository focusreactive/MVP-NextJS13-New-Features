'use client';

import Error from '@/components/Error/Error';

export const metadata = {
  title: 'Error page',
};

export default function Page({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <Error error={error} reset={reset} />;
}
