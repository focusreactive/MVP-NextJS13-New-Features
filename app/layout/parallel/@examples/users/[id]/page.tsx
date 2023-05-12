import { api } from '@/utils/api';

import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const [user] = await api.user(params.id);

  return {
    title: user.name,
    openGraph: {
      title: user.name,
      images: [`/api/user-image?id=${params.id}`],
    },
  };
}

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
