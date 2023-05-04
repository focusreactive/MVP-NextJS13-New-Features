import Link from 'next/link';
import '@picocss/pico/css/pico.min.css';
import './globals.css';
import React from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { FetchState } from '@/app/components/FetchState';

export const metadata = {
  title: '...',
};

export default function RootLayout({
  children,
  docs,
  examples,
}: {
  children: React.ReactNode;
  docs: React.ReactNode;
  examples: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body>
        <div>
          <small className={'layout-label'}>root layout</small>

          <nav>
            <ul>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/posts'}>Posts</Link>
              </li>
              <li>
                <Link href={'/users/list'}>Users</Link>
              </li>
              <li>
                <Link href={'/users/static'}>Users Static</Link>
              </li>
            </ul>
          </nav>

          <main className="main-container">
            <div className="examples">{examples}</div>
            <div className="docs">{docs}</div>
          </main>
        </div>

        <FetchState />
      </body>
    </html>
  );
}
