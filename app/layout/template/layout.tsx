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
      <nav>
        <ul>
          <li>
            <Link href={'/layout/nested'}>Nested</Link>
          </li>
          <li>
            <Link href={'/layout/parallel'}>Parallel</Link>
          </li>
        </ul>
      </nav>

      <section className="main-container">
        <div style={{ backgroundColor: getRandomColor() }}>RANDOM COLOR</div>
        <div>{`Built at: ${new Date(Date.now()).toISOString()}`}</div>
        <div>{children}</div>
      </section>
    </>
  );
}
