import Link from 'next/link';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>Intercepting routes</h1>

      <p>
        <Link
          href={
            'https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes'
          }
          target={'_blank'}
        >
          Docs
        </Link>
      </p>

      {children}
    </div>
  );
};

export default Layout;
