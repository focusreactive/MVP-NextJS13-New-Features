'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export const Error = ({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
            <div className={'flashing-border'}>
              <h2>Something went wrong</h2>
              <button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Try again
              </button>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default Error;
