import Link from 'next/link';

import { api } from '@/utils/api';

export const metadata = {
  title: 'Users list',
};

const UsersPage = async (props: any) => {
  const [users, counter] = await api.users();

  return (
    <div>
      {users.map(({ id, name }) => (
        <article key={id}>
          <h3>
            {name} {counter}
          </h3>

          <nav aria-label="breadcrumb">
            <ul>
              <li>
                <Link href={`/users/${id}`}>Profile</Link>
              </li>
              <li>
                <Link href={`/users/${id}/posts`}>Posts</Link>
              </li>
            </ul>
          </nav>
        </article>
      ))}
    </div>
  );
};

export default UsersPage;