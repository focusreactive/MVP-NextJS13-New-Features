import React from 'react';

import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

const UserLayout = async ({
  children,
  params,
}: React.PropsWithChildren & { params: { id: string } }) => {
  const [user] = await api.user(params.id);

  return (
    <div>
      <h2 className={'animate-character'}>
        {user.name}
      </h2>

      <nav>
        <ul>
          <li>
            <NavLink href={`/intercepting-routes/users/${params.id}`}>Profile</NavLink>
          </li>
          <li>
            <NavLink href={`/intercepting-routes/users/${params.id}/posts`}>Posts</NavLink>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
