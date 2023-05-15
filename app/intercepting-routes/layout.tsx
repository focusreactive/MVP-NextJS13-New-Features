import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <nav>
        <ul>
          <li>
            <NavLink href={'/intercepting-routes/users'}>Users</NavLink>
          </li>
          <li>
            <NavLink href={'/intercepting-routes/posts'}>Posts</NavLink>
          </li>
        </ul>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
