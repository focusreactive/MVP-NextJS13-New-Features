import '@picocss/pico/css/pico.min.css';
import './globals.css';
import React from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { RequestsCounter } from '@/components/RequestsCounter';

export const metadata = {
  title: 'Examples home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className={'rerender-indicator'}>
        <main className="main-container">
          <div>{children}</div>
        </main>

        <RequestsCounter />
      </body>
    </html>
  );
}
