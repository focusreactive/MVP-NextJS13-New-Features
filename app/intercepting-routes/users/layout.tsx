import React from 'react';

const UsersLayout = async ({
  children,
  modal,
}: React.PropsWithChildren & { modal: React.ReactNode }) => {
  return (
    <div>
      {children}

      {modal}
    </div>
  );
};

export default UsersLayout;
