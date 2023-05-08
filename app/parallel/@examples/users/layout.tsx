import React from 'react';

import { api } from '@/utils/api';

const UsersLayout = async ({
  children,
  modal,
}: React.PropsWithChildren & { modal: React.ReactNode }) => {
  const [users, counter] = await api.users();

  return (
    <div className={'rerender-indicator'}>
      <small className={'layout-label'}>/users layout</small>

      <h2>
        Users ({users.length}) {counter}
      </h2>

      {children}

      {modal}
    </div>
  );
};

export default UsersLayout;
