'use client';

import React, { useReducer } from 'react';

import { api, state, subscribers } from '@/utils/api';

export const FetchState = () => {
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
                <td>{value.realCalls}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
