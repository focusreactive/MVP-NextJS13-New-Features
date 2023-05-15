'use client';

import { useState } from 'react';

import { ServerComponent } from '@/app/rsc/client-boundary/ServerComponent';

export const ClientComponent = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>

      <ServerComponent />
    </div>
  );
};
