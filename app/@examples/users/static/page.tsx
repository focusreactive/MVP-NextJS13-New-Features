// 'use client';

// import { useSearchParams, useSelectedLayoutSegments } from 'next/navigation';
// import { useEffect, useState } from 'react';

// import { api } from '../../../../utils/api';

// import type { User } from '@/app/global';

const StaticPage = () => {
  // const [users, setUsers] = useState<[User[], number]>([[], 0]);
  // const params = useSearchParams();
  // const segments = useSelectedLayoutSegments();

  // useEffect(() => {
  //   (async () => {
  //     setUsers(await api.users('StaticPage'));
  //   })();
  // }, []);

  return (
    <div>
      {/* <h3>Just a static data {users[1]}</h3> */}
      <ul>
        {/* {users[0].map(({ username }) => ( */}
        {/* <li key={username}>{username}</li> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default StaticPage;
