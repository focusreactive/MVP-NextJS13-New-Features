import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>API Routes</h1>

      {children}
    </div>
  );
};

export default Layout;
