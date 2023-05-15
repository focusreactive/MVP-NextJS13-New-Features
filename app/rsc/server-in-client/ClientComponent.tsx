'use client';

import { useState } from 'react';

import type { PropsWithChildren } from 'react';

export const ClientComponent = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button onClick={() => setState(state + 1)}>{state}</button>

      {children}
    </div>
  );
};
