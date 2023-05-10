import Link from 'next/link';

import getRandomColor from '@/utils/getRandomColor';

export const metadata = {
  title: 'Layout metadata',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div style={{ backgroundColor: getRandomColor() }}>RANDOM COLOR</div>
      <div>{`Built at: ${new Date(Date.now()).toISOString()}`}</div>
      <div>{children}</div>
    </>
  );
}
