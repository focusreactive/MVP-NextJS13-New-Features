import NavLink from '@/components/NavLink/NavLink';
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
                <NavLink href={`/parallel/users/${id}`}>Profile</NavLink>
              </li>
              <li>
                <NavLink href={`/parallel/users/${id}/posts`}>Posts</NavLink>
              </li>
            </ul>
          </nav>
        </article>
      ))}
    </div>
  );
};

export default UsersPage;
