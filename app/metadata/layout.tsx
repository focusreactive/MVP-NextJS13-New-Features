import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>Metadata examples</h1>

      <p>
        <NavLink
          href={
            'https://nextjs.org/docs/app/api-reference/functions/generate-metadata'
          }
        >
          Docs
        </NavLink>
      </p>

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
        <li>
          <NavLink href={'/metadata/image-generation'}>
            Image Generation
          </NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/json-ld'}>JSON-LD</NavLink>
        </li>
      </ul>

      {children}
    </div>
  );
};

export default Layout;
