import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>Server Actions</h1>

      <p>
        <NavLink href={'/server-actions/server'}>Server-only form</NavLink>
        <span style={{ padding: '0 12px' }}>|</span>
        <NavLink href={'/server-actions/client'}>Client form</NavLink>
      </p>

      <hr />

      {children}
    </div>
  );
};

export default Layout;