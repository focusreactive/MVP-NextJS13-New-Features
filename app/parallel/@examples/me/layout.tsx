import Link from 'next/link';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'rerender-indicator'}>
      <div>
        <Link href={'/parallel/me/server'}>Server-only form</Link>
        <span style={{ padding: '0 12px' }}>|</span>
        <Link href={'/parallel/me/client'}>Client form</Link>
      </div>

      {children}
    </div>
  );
};

export default Layout;
