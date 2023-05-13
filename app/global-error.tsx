'use client';

import { useEffect } from 'react';

import NavLink from '@/components/NavLink/NavLink';

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
                <NavLink href={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink href={'/parallel'}>Parallel Routes</NavLink>
              </li>
            </ul>
          </nav>

          <main className="main-container">
            <div className={'rerender-indicator'}>
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
