import NavLink from '@/components/NavLink/NavLink';
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

      <ul className={'nav'}>
        <li>
          <NavLink href={'/metadata/ssr/page-1'}>Page 1</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/ssr/page-2'}>Page 2</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/ssr/page-3'}>Page 3</NavLink>
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
