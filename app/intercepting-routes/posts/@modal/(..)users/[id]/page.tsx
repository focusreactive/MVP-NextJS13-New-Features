import { api } from '@/utils/api';
import { BackLink } from '@/components/BackLink';

const UserModalPage = async ({ params }: { params: { id: string } }) => {
  const [user] = await api.user(params.id);

  return (
    <dialog open>
      <article>
        <header>
          <h2 style={{ marginBottom: 0 }}>{user.name}</h2>
        </header>

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

        <BackLink />
      </article>
    </dialog>
  );
};

export default UserModalPage;
