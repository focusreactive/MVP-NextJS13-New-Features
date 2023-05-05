'use client';

import React, { useReducer } from 'react';

import { api, state, subscribers } from '@/utils/api';

export const RequestsCounter = () => {
  const [_, forceUpdate] = useReducer((x) => !x, true);

  React.useEffect(() => {
    subscribers['FetchState'] = forceUpdate;
    api.updateLogs();
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
      <table style={{ margin: 0 }}>
        <thead>
          <tr>
            <th>URL</th>
            {/*<th>Total calls</th>*/}
            <th>API calls</th>
          </tr>
        </thead>

        <tbody>
          {state &&
            Object.entries(state).map(([key, value]) => {
              if (key === '/logs') return null;

              return (
                <tr key={key}>
                  <td>{key}</td>
                  {/*<td>{value.calls}</td>*/}
                  <td>{value.realCalls}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
