'use client';

import { usePathname } from 'next/navigation';

const RevalidateButton = () => {
  const path = usePathname();

  const revalidate = () =>
    fetch(`${window.location.origin}/api/revalidate?path=${path}`);

  return <button onClick={revalidate}>Revalidate</button>;
};

export default RevalidateButton;
