import NavLink from '@/components/NavLink/NavLink';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  metadataBase: new URL('https://nextjs13-mvp.vercel.app'),

  title: {
    template: '%s | Parent Title',
    default: 'Default Title',
  },

  description: 'This page has static metadata',

  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },

  openGraph: {
    title: 'Next.js 13 MVP',
    description: 'The React Framework for the Web',
    url: '.',
    siteName: 'nextjs13-mvp.vercel.app',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },

  other: {
    custom: 'meta',
  },
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <hr />

      <ul className={'nav'}>
        <li>
          <NavLink href={'/metadata/static/title-default'}>Default</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/static/title-template'}>Template</NavLink>
        </li>
        <li>
          <NavLink href={'/metadata/static/title-absolute'}>Absolute</NavLink>
        </li>
      </ul>

      <hr />

      <h2>Page with static metadata</h2>

      {children}
    </div>
  );
};

export default Layout;
