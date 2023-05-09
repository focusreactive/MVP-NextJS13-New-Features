import Link from 'next/link';

import { sleep } from '@/utils/sleep';
import { api } from '@/utils/api';

// export async function generateStaticParams() {
//   // const [posts] = await api.posts();
//
//   // return posts.map((post) => ({
//   //   id: post.id,
//   // }));
//
//   return [{ id: "1" }];
// }

export const metadata = {
  title: 'Users dynamic',
};

const UserPage = async ({ params }: { params: { id: string } }) => {
  const [user] = await api.user(params.id);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
            <td>{user.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;