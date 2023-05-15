import NavLink from '@/components/NavLink/NavLink';
import { api } from '@/utils/api';

const PostsPage = async () => {
  const [posts] = await api.posts();

  return (
    <div>
      <h1>Posts</h1>

      {posts.map(({ id, userId, title, body }) => (
        <article key={id}>
          <NavLink href={`/intercepting-routes/posts/${id}`}>{title}</NavLink>
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
