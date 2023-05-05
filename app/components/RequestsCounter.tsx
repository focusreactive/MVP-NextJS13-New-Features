export const RequestsCounter = ({
  state,
}: {
  state: Record<string, number>;
}) => {
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
          {Object.entries(state).map(([key, value]) => {
            if (key === '/logs') return null;

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
  );
};
