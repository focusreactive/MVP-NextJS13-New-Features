import Link from 'next/link';

import BuildInfo from '@/components/BuildInfo/BuildInfo';

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
          <li>
            <Link href={'/layout/error'}>Error</Link>
          </li>
          <li>
            <BuildInfo />
          </li>
        </ul>
      </nav>

      <section className="layout">
        <div>{children}</div>
      </section>
    </>
  );
}