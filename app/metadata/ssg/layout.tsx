import NavLink from '@/components/NavLink/NavLink';
import Doc from './doc.mdx';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Dynamic SSG',
  };
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <hr />

      <ul>
        <li>
          <NavLink href={'/metadata/ssg/page-1'}>Page 1</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/ssg/page-2'}>Page 2</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/ssg/page-3'}>Page 3</NavLink>
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
