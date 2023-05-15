import Link from 'next/link';

import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>RSC | Client boundaries</h1>

      <ul>
        <li>
          <NavLink href={'/rsc/client-boundary'}>
            Server -&gt; Client -&gt; Client
          </NavLink>
        </li>
        <li>
          <NavLink href={'/rsc/server-in-client'}>
            Server -&gt; Client -&gt; Server
          </NavLink>
        </li>
        <li>
          <NavLink href={'/rsc/server-in-client-error'}>
            Server -&gt; Client -&gt; Client (error)
          </NavLink>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default Layout;
