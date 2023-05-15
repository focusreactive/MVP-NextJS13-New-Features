import Link from 'next/link';

import { api } from '@/utils/api';

const Page = async () => {
  const [users] = await api.users();

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/intercepting-routes/users/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
