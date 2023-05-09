import Link from 'next/link';
import '@picocss/pico/css/pico.min.css';
import './globals.css';
import React from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { RequestsCounter } from '@/components/RequestsCounter';

export const metadata = {
  title: 'Homepage',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className={'rerender-indicator'} style={{ border: 0 }}>
        <div>
          <nav>
            <ul>
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/parallel'}>Parallel</Link>
              </li>
              <li>
                <Link href={'/static'}>Static+Cache</Link>
              </li>
            </ul>
          </nav>

          <main className="main-container">
            <div style={{ width: '100%' }}>{children}</div>
          </main>
        </div>

        <RequestsCounter />
      </body>
    </html>
  );
}
