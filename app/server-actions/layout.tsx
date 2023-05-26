import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>Server Actions</h1>

      <p className={'nav'}>
        <NavLink href={'/server-actions/server'}>Server-only form</NavLink>
        <NavLink href={'/server-actions/client'}>Client form</NavLink>
        <NavLink href={'/server-actions/client-optimistic'}>
          Client Optimistic
        </NavLink>
      </p>

      <hr />

      {children}
    </div>
  );
};

export default Layout;
