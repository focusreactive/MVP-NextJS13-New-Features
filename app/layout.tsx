import '@picocss/pico/css/pico.min.css';
import './globals.css';
import React from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import NavLink from '@/components/NavLink/NavLink';

export const metadata = {
  title: 'Homepage layout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head />

      <body style={{ border: 0 }}>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink href={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink href={'/overview'}>Overview</NavLink>
              </li>
              <li>
                <NavLink href={'/layout'}>Layout</NavLink>
              </li>
              <li>
                <NavLink href={'/static'}>Static+Cache</NavLink>
              </li>
              <li>
                <NavLink href={'/data-fetching'}>Data fetching</NavLink>
              </li>
              <li>
                <NavLink href={'/metadata'}>Metadata</NavLink>
              </li>
              <li>
                <NavLink href={'/preview'}>Preview</NavLink>
              </li>
              <li>
                <NavLink href={'/rsc'}>RSC</NavLink>
              </li>
              <li>
                <NavLink href={'/server-actions'}>Server Actions</NavLink>
              </li>
              <li>
                <NavLink href={'/intercepting-routes/posts'}>
                  Intercepting Routes
                </NavLink>
              </li>
              <li>
                <NavLink href={'/api-routes'}>
                  API Routes
                </NavLink>
              </li>
            </ul>
          </nav>

          <main className="main-container">
            <div style={{ width: '100%' }}>{children}</div>
          </main>
        </div>

        {/*<RequestsCounter />*/}
      </body>
    </html>
  );
}
