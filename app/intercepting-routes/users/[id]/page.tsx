import { api } from '@/utils/api';

const UserPage = async ({ params }: { params: { id: string } }) => {
  const [user] = await api.user(params.id);

  return (
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
  );
};

export default UserPage;
