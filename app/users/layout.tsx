import React from 'react';

import { api } from '@/utils/api';

const UsersLayout = async ({ children }: React.PropsWithChildren) => {
  const [users, counter] = await api.users('UsersLayout');

  return (
    <div className={'rerender-indicator'}>
      <small className={'layout-label'}>/users layout</small>

      <h2>
        Users ({users.length}) {counter}
      </h2>

      {children}
    </div>
  );
};

export default UsersLayout;
