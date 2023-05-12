import Link from 'next/link';

import Doc from './doc.mdx';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dynamic SSR',
  };
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <hr />

      <ul>
        <li>
          <Link href={'/metadata/ssr/page-1'}>Page 1</Link>
        </li>
        <li>
          <Link href={'/metadata/ssr/page-2'}>Page 2</Link>
        </li>
        <li>
          <Link href={'/metadata/ssr/page-3'}>Page 3</Link>
        </li>
      </ul>

      <hr />

      {children}

      <br />

      <Doc />
    </div>
  );
};

export default Layout;
