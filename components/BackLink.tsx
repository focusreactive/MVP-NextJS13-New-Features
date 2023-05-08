'use client';

import { useRouter } from 'next/navigation';

export const BackLink = () => {
  const router = useRouter();
  return (
    <button onClick={router.back} style={{ marginTop: 20 }}>
      Go back
    </button>
  );
};
