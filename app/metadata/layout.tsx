import Link from 'next/link';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <hr />

      <ul>
        <li>
          <Link href={'/metadata/static'}>Static</Link>
        </li>
        <li>
          <Link href={'/metadata/ssg'}>Dynamic SSG</Link>
        </li>
        <li>
          <Link href={'/metadata/ssr'}>Dynamic SSR</Link>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default Layout;
