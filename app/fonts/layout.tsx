import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>Fonts</h1>

      <p className={'nav'}>
        <NavLink href={'/fonts/google'}>Google Fonts</NavLink>
        <NavLink href={'/fonts/variable'}>CSS Variable</NavLink>
        <NavLink href={'/fonts/local'}>Local</NavLink>
      </p>

      <hr />

      {children}
    </div>
  );
};

export default Layout;
