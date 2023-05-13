import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'rerender-indicator'}>
      <div>
        <NavLink href={'/parallel/me/server'}>Server-only form</NavLink>
        <span style={{ padding: '0 12px' }}>|</span>
        <NavLink href={'/parallel/me/client'}>Client form</NavLink>
      </div>

      {children}
    </div>
  );
};

export default Layout;
