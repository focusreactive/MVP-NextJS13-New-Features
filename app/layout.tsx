import Link from 'next/link';
import '@picocss/pico/css/pico.min.css';
import './globals.css';
import React from 'react';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import { FetchState } from '@/app/components/FetchState';
import { api } from '@/utils/api';

export const metadata = {
  title: '...',
};

export default async function RootLayout({
  children,
  docs,
  examples,
}: {
  children: React.ReactNode;
  docs: React.ReactNode;
  examples: React.ReactNode;
}) {
  const state: Record<string, number> = await api.updateLogs();

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
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            padding: '8px 14px',
            margin: 20,
            border: '1px solid',
            fontFamily: 'monospace',
            '--font-size': '14px',
          }}
        >
          <table>
            <thead>
              <tr>
                <th>URL</th>
                {/*<th>Total calls</th>*/}
                <th>API calls</th>
              </tr>
            </thead>

            <tbody>
              {Object.entries(state).map(([key, value]) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    {/*<td>{value.calls}</td>*/}
                    <td>{value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* <FetchState /> */}
      </body>
    </html>
  );
}
