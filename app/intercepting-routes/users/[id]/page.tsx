import { api } from '@/utils/api';
import image from './intercepting-routes.png';
import Doc from './doc.mdx';

const UserPage = async ({ params }: { params: { id: string } }) => {
  const [user] = await api.user(params.id);

  return (
    <div>
      <h2>{user.name}</h2>

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

      <br />

      <details>
        <summary>Help</summary>
        <img src={image.src} alt="" />
        <br />
        <hr />
        <br />
        <Doc />
      </details>
    </div>
  );
};

export default UserPage;
