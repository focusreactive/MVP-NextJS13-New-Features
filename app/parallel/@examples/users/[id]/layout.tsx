import React from 'react';

import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

const UserLayout = async ({
  children,
  params,
}: React.PropsWithChildren & { params: { id: string } }) => {
  const [user, counter] = await api.user(params.id);

  return (
    <div className={'rerender-indicator'}>
      <small className={'layout-label'}>/users/[id] layout</small>

      <h2 className={'animate-character'}>
        {user.name} {counter}
      </h2>

      <nav>
        <ul>
          <li>
            <NavLink href={`/parallel/users/${params.id}`}>Profile</NavLink>
          </li>
          <li>
            <NavLink href={`/parallel/users/${params.id}/posts`}>Posts</NavLink>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
