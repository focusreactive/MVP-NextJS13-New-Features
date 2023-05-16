import Link from 'next/link';

import NavLink from '@/components/NavLink/NavLink';

import type { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={'content-container'}>
      <h1>Metadata examples</h1>
      <p>
        <Link
          target={'_blank'}
          href={
            'https://nextjs.org/docs/app/api-reference/functions/generate-metadata'
          }
        >
          Docs
        </Link>
      </p>

      <hr />

      <div className={'grid'} style={{ alignItems: 'end' }}>
        <ul className={'nav'}>
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
            <NavLink href={'/metadata/json-ld'}>JSON-LD</NavLink>
          </li>
        </ul>

        <div>
          <p>File-based Metadata API: </p>
          <ul className={'nav'}>
            <li>
              <NavLink href={'/metadata/image-generation'}>
                Image Generation
              </NavLink>
            </li>
            <li>
              <NavLink href={'/metadata/sitemap'}>sitemap.xml</NavLink>
            </li>
            <li>
              <NavLink href={'/metadata/robots'}>robots.txt</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Layout;
