import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <hr />

      <ul>
        <li>
          <NavLink href={'/metadata/static'}>Static</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/ssg'}>Dynamic SSG</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/ssr'}>Dynamic SSR</NavLink>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default Layout;
