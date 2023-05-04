'use client';

import { useSearchParams, useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';

import { api } from '../../../utils/api';

import type { User } from '../../../utils/api';

const StaticPage = () => {
  const [users, setUsers] = useState<[User[], number]>([[], 0]);
  const params = useSearchParams();
  console.log(Object.fromEntries(params.entries()));
  const segments = useSelectedLayoutSegments();
  console.log(segments);

  useEffect(() => {
    (async () => {
      setUsers(await api.users('StaticPage'));
    })();
  }, []);

  return (
    <div>
      <h3>Just a static data {users[1]}</h3>
      <ul>
        {users[0].map(({ username }) => (
          <li key={username}>{username}</li>
        ))}
      </ul>
    </div>
  );
};

export default StaticPage;
