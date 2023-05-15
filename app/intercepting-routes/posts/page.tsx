import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

const PostsPage = async () => {
  const [posts] = await api.posts();

  return (
    <div>
      {posts.map(({ id, userId, title, body }) => (
        <article key={id}>
          <h2>{title}</h2>
          <p>{body.slice(0, 100)}...</p>
          <small>
            <NavLink
              href={`/intercepting-routes/users/${userId}`}
              className={'secondary'}
            >
              Author Page
            </NavLink>
          </small>
        </article>
      ))}
    </div>
  );
};

export default PostsPage;
