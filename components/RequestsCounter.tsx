'use client';

import { useEffect, useState } from 'react';

import Loader from './Loader/Loader';

export const RequestsCounter = () => {
  const [state, setState] = useState<Record<string, number>>({});
  const [loadingData, setLoadingData] = useState(false);

  const update = () => {
    setLoadingData(true);

    fetch(`${window.location.origin}/api/logs`)
      .then((r) => r.json())
      .then(setState)
      .then(() => setLoadingData(false));
  };

  // TODO: choose how to update

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingData(true);

      fetch(`${window.location.origin}/api/logs`)
        .then((r) => r.json())
        .then(setState)
        .then(() => setLoadingData(false));
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        margin: 10,
        border: '1px solid #d9d9d9',
        fontFamily: 'monospace',
        '--font-size': '14px',
        borderRadius: '4px',
        background: 'white',
      }}
    >
      <button onClick={update}>Refresh</button>
      {loadingData ? (
        <Loader />
      ) : (
        <table style={{ margin: 0 }}>
          <thead>
            <tr>
              <th>URL</th>
              {/*<th>Total calls</th>*/}
              <th>API calls</th>
            </tr>
          </thead>

          <tbody>
            {Object.entries(state).map(([key, value]) => {
              // if (key === '/logs') return null;

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
      )}
    </div>
  );
};
